from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import tempfile
import unicodedata
from collections import Counter
from concurrent.futures import ProcessPoolExecutor, as_completed
from math import ceil
from pathlib import Path
from urllib.parse import quote


IMAGE_RE = re.compile(r"(!\[[^\]]*\]\()([^)]+)(\))")
HORA_DE_PRATICAR_DHASH = (
    "007000b00030003000f001700130071c0d4c0d6719633cc33733041a00380000"
)


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", ascii_value).strip("-").lower()
    return slug or "aula"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def normalize_text(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = value.encode("ascii", "ignore").decode("ascii").casefold()
    return re.sub(r"\s+", " ", value).strip()


def line_key(line: str) -> str:
    value = re.sub(r"<[^>]+>", "", line)
    value = re.sub(r"!\[[^\]]*\]\([^)]+\)", "", value)
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = value.replace("*", "").replace("_", "").replace("#", "")
    return normalize_text(value).strip(" .:-|")


def resolve_image(reference: str, raw_image_dir: Path) -> Path | None:
    candidate = Path(reference)
    if not candidate.exists():
        candidate = raw_image_dir / Path(reference.replace("\\", "/")).name
    if not candidate.exists():
        return None
    resolved = candidate.resolve()
    if raw_image_dir.resolve() not in resolved.parents:
        return None
    return resolved


def dhash(path: Path, size: int = 16) -> str:
    from PIL import Image

    with Image.open(path) as image:
        gray = image.convert("L").resize((size + 1, size))
        pixels = list(gray.getdata())
    bits = []
    for y in range(size):
        offset = y * (size + 1)
        for x in range(size):
            bits.append(pixels[offset + x] > pixels[offset + x + 1])
    value = sum(int(bit) << index for index, bit in enumerate(bits))
    return f"{value:0{size * size // 4}x}"


def detect_presentation_pages(document: object) -> set[int]:
    page_texts = [
        str(document[index].get_text("text", sort=True))
        for index in range(min(12, int(document.page_count)))
    ]
    entries: list[tuple[int, str]] = []
    for text in page_texts[:6]:
        for line in text.splitlines():
            match = re.search(r"(\d+)\s*$", line.strip())
            if match and re.search(r"\d+\)", line):
                entries.append((int(match.group(1)), normalize_text(line)))

    for position, (start, label) in enumerate(entries):
        if "apresenta" not in label or not any(
            word in label for word in ("prof", "pessoal", "autor")
        ):
            continue
        later_pages = [page for page, _ in entries[position + 1 :] if page > start]
        end = min(later_pages) if later_pages else start + 1
        if 1 < start <= 12 and start < end <= start + 10:
            return set(range(start, end))

    detected = set()
    markers = (
        "apresentacao pessoal",
        "apresentacao do professor",
        "redes sociais do professor",
        "deixem eu me apresentar",
    )
    for page_number, text in enumerate(page_texts, start=1):
        normalized = normalize_text(text)
        if any(marker in normalized for marker in markers):
            detected.add(page_number)
    return detected


def clean_chunks(
    chunks: list[dict[str, object]], raw_image_dir: Path, ignored_pages: set[int]
) -> tuple[list[dict[str, object]], int]:
    retained = [
        chunk
        for chunk in chunks
        if int(dict(chunk.get("metadata", {})).get("page", 0)) not in ignored_pages
    ]
    if not retained:
        return [], 0

    edge_counts: Counter[str] = Counter()
    for chunk in retained:
        lines = str(chunk.get("text", "")).splitlines()
        nonempty = [index for index, line in enumerate(lines) if line.strip()]
        edge_indexes = set(nonempty[:6] + nonempty[-12:])
        edge_counts.update(
            {
                line_key(lines[index])
                for index in edge_indexes
                if line_key(lines[index])
            }
        )
    threshold = max(3, ceil(len(retained) * 0.25))
    repeated_edge_lines = {
        key for key, count in edge_counts.items() if count >= threshold and len(key) <= 240
    }

    image_page_counts: Counter[str] = Counter()
    image_hashes: dict[str, str] = {}
    image_paths: dict[str, Path] = {}
    for chunk in retained:
        page_hashes = set()
        for match in IMAGE_RE.finditer(str(chunk.get("text", ""))):
            reference = match.group(2)
            path = resolve_image(reference, raw_image_dir)
            if path is None:
                continue
            digest = sha256(path)
            image_hashes[reference] = digest
            image_paths[reference] = path
            page_hashes.add(digest)
        image_page_counts.update(page_hashes)
    image_threshold = max(3, ceil(len(retained) * 0.25))
    repeated_images = {
        digest for digest, count in image_page_counts.items() if count >= image_threshold
    }
    practice_bird_cache: dict[str, bool] = {}

    removed_images = 0
    for chunk in retained:
        lines = str(chunk.get("text", "")).splitlines()
        nonempty = [index for index, line in enumerate(lines) if line.strip()]
        edge_indexes = set(nonempty[:6] + nonempty[-12:])
        kept_lines = []
        for index, line in enumerate(lines):
            key = line_key(line)
            normalized = normalize_text(line)
            always_irrelevant = (
                "estrategiaconcursos.com.br" in normalized
                or "t.me/kakashiassinaturasbot" in normalized
            )
            presentation_index_entry = (
                int(dict(chunk.get("metadata", {})).get("page", 99)) <= 6
                and "apresenta" in normalized
                and any(word in normalized for word in ("prof", "pessoal", "autor"))
            )
            numeric_footer = index in edge_indexes and bool(
                re.fullmatch(r"(?:<mark>)?\s*\d+\s*(?:</mark>)?", line.strip())
            )
            recurring_edge = index in edge_indexes and key in repeated_edge_lines
            if (
                always_irrelevant
                or presentation_index_entry
                or numeric_footer
                or recurring_edge
            ):
                continue
            kept_lines.append(line)
        text = "\n".join(kept_lines)

        def remove_unwanted_image(match: re.Match[str]) -> str:
            nonlocal removed_images
            reference = match.group(2)
            digest = image_hashes.get(reference)
            path = image_paths.get(reference)
            is_practice_bird = False
            if path is not None and digest is not None:
                try:
                    if digest not in practice_bird_cache:
                        from PIL import Image

                        with Image.open(path) as image:
                            width, height = image.size
                        plausible_size = (
                            80 <= width <= 400
                            and 80 <= height <= 400
                            and 0.7 <= width / height <= 1.3
                        )
                        practice_bird_cache[digest] = (
                            plausible_size and dhash(path) == HORA_DE_PRATICAR_DHASH
                        )
                    is_practice_bird = practice_bird_cache[digest]
                except Exception:
                    pass
            if digest in repeated_images or is_practice_bird:
                removed_images += 1
                return ""
            return match.group(0)

        chunk["text"] = IMAGE_RE.sub(remove_unwanted_image, text).strip()

    last_text = str(retained[-1].get("text", ""))
    remaining_last_images = list(IMAGE_RE.finditer(last_text))
    if remaining_last_images:
        last = remaining_last_images[-1]
        retained[-1]["text"] = (last_text[: last.start()] + last_text[last.end() :]).strip()
        removed_images += 1
    retained = [chunk for chunk in retained if str(chunk.get("text", "")).strip()]
    return retained, removed_images


def replace_and_deduplicate_images(
    markdown: str, raw_image_dir: Path, staged_asset_dir: Path, relative_asset_dir: str
) -> tuple[str, int]:
    staged_asset_dir.mkdir(parents=True, exist_ok=True)
    hashes: dict[str, str] = {}
    path_map: dict[str, str] = {}
    image_count = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal image_count
        original = match.group(2)
        if original in path_map:
            return f"{match.group(1)}{path_map[original]}{match.group(3)}"

        candidate = Path(original)
        if not candidate.exists():
            candidate = raw_image_dir / Path(original.replace("\\", "/")).name
        if not candidate.exists() or raw_image_dir.resolve() not in candidate.resolve().parents:
            return match.group(0)

        digest = sha256(candidate)
        if digest not in hashes:
            image_count += 1
            filename = f"img-{image_count:04d}{candidate.suffix.lower()}"
            shutil.copy2(candidate, staged_asset_dir / filename)
            hashes[digest] = filename
        relative_ref = quote(f"{relative_asset_dir}/{hashes[digest]}", safe="/")
        path_map[original] = relative_ref
        return f"{match.group(1)}{relative_ref}{match.group(3)}"

    return IMAGE_RE.sub(replace, markdown), image_count


def polish_markdown(markdown: str) -> str:
    markdown = markdown.replace("<mark>", "").replace("</mark>", "")
    markdown = markdown.replace("\u200b", "").replace("\ufeff", "")

    page_pattern = re.compile(
        r"(<!-- pagina: \d+ -->\n\n)(.*?)(?=\n\n---\n\n<!-- pagina:|\Z)",
        re.DOTALL,
    )

    def clean_page(match: re.Match[str]) -> str:
        prefix, body = match.groups()
        first_lines = "\n".join(body.splitlines()[:8])
        if re.search(r"(?im)^#{1,6}\s+.*\b[ií]ndice\b", first_lines):
            cleaned_lines = []
            for line in body.splitlines():
                line = re.sub(r"\*\*\s*\.+\s*\*\*", "", line)
                line = re.sub(r"\.{2,}", " - ", line)
                line = re.sub(r"(?:\s+-\s+){2,}", " - ", line)
                line = re.sub(r"[ \t]{2,}", " ", line)
                line = re.sub(r"^\s+-\s+(\d+\))", r"- \1", line)
                cleaned_lines.append(line)
            body = "\n".join(cleaned_lines)
        return prefix + body

    markdown = page_pattern.sub(clean_page, markdown)
    markdown = re.sub(r"[ \t]+$", "", markdown, flags=re.MULTILINE)
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)
    return markdown.strip() + "\n"


def convert_one(args: tuple[str, str, str, bool, bool]) -> dict[str, object]:
    source_text, source_root_text, output_root_text, force, text_only = args
    source = Path(source_text)
    source_root = Path(source_root_text)
    output_root = Path(output_root_text)
    relative = source.relative_to(source_root)
    output_dir = output_root / relative.parent
    output_md = output_dir / f"{source.stem}.md"
    asset_slug = slugify(source.stem)
    final_asset_dir = output_dir / "assets" / asset_slug

    current_mode = ""
    if output_md.exists():
        current_mode = output_md.read_text(encoding="utf-8-sig")[:500]
    expected_output_exists = (
        output_md.exists()
        and output_md.stat().st_mtime >= source.stat().st_mtime
        and (
            (text_only and "conversao: somente-texto" in current_mode)
            or (not text_only and final_asset_dir.exists())
        )
    )
    if not force and expected_output_exists:
        return {
            "status": "skipped",
            "source": str(relative),
            "output": str(output_md.relative_to(output_root)),
        }

    import pymupdf
    import pymupdf4llm

    tmp_base = Path(tempfile.gettempdir()) / "codex-dataprev-pdf-md"
    tmp_base.mkdir(parents=True, exist_ok=True)
    stage = Path(tempfile.mkdtemp(prefix=f"{asset_slug}-", dir=tmp_base))
    raw_image_dir = stage / "raw-images"
    staged_asset_dir = stage / "assets"
    raw_image_dir.mkdir(parents=True)

    try:
        with pymupdf.open(source) as document:
            page_count = document.page_count
            presentation_pages = detect_presentation_pages(document)

        chunks = pymupdf4llm.to_markdown(
            source,
            write_images=not text_only,
            image_path=str(raw_image_dir.resolve()),
            image_format="png",
            force_text=True,
            page_chunks=True,
            footer=False,
            header=True,
            show_progress=False,
        )

        ignored_pages = {1} | presentation_pages
        numbered_chunks = [
            (page_number, chunk)
            for page_number, chunk in enumerate(chunks, start=1)
            if page_number not in ignored_pages
        ]
        removed_images = 0

        body_parts: list[str] = []
        for page_number, chunk in numbered_chunks:
            text = str(chunk.get("text", "")).strip()
            body_parts.append(f"<!-- pagina: {page_number} -->\n\n{text}")

        source_yaml = json.dumps(relative.as_posix(), ensure_ascii=False)
        header = (
            "---\n"
            f"fonte_pdf: {source_yaml}\n"
            f"paginas: {page_count}\n"
            f"conversao: {'somente-texto' if text_only else 'texto-e-imagens'}\n"
            "---\n\n"
        )
        markdown = header + "\n\n---\n\n".join(body_parts) + "\n"
        if text_only:
            markdown = IMAGE_RE.sub("", markdown)
            image_count = 0
        else:
            markdown, image_count = replace_and_deduplicate_images(
                markdown,
                raw_image_dir,
                staged_asset_dir,
                f"assets/{asset_slug}",
            )

        output_dir.mkdir(parents=True, exist_ok=True)
        if final_asset_dir.exists():
            shutil.rmtree(final_asset_dir)
        if not text_only:
            final_asset_dir.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(staged_asset_dir), str(final_asset_dir))

        temp_md = output_md.with_suffix(".md.part")
        temp_md.write_text(markdown, encoding="utf-8-sig", newline="\n")
        os.replace(temp_md, output_md)

        return {
            "status": "converted",
            "source": str(relative),
            "output": str(output_md.relative_to(output_root)),
            "pages": page_count,
            "images": image_count,
            "images_removed": removed_images,
            "pages_removed": sorted(ignored_pages),
            "mode": "text-only" if text_only else "text-and-images",
        }
    except Exception as exc:
        return {
            "status": "error",
            "source": str(relative),
            "error": f"{type(exc).__name__}: {exc}",
        }
    finally:
        shutil.rmtree(stage, ignore_errors=True)


def write_index(
    output_root: Path, results: list[dict[str, object]], text_only: bool = False
) -> None:
    successful = [r for r in results if r["status"] in {"converted", "skipped"}]
    errors = [r for r in results if r["status"] == "error"]
    lines = [
        "# Aulas convertidas para Markdown",
        "",
        f"- Arquivos disponíveis: {len(successful)}",
        f"- Erros: {len(errors)}",
        (
            "- Formato: somente texto, sem pastas de imagens."
            if text_only
            else "- As imagens de cada aula ficam na pasta `assets` correspondente."
        ),
        "",
    ]

    groups: dict[str, list[dict[str, object]]] = {}
    for result in successful:
        output = Path(str(result["output"]))
        group = output.parent.as_posix() if output.parent.as_posix() != "." else "Apostilas"
        groups.setdefault(group, []).append(result)

    for group in sorted(groups, key=str.casefold):
        lines.extend([f"## {group}", ""])
        for result in sorted(groups[group], key=lambda item: str(item["output"]).casefold()):
            output = Path(str(result["output"]))
            href = quote(output.as_posix(), safe="/")
            lines.append(f"- [{output.stem}]({href})")
        lines.append("")

    if errors:
        lines.extend(["## Falhas", ""])
        for result in errors:
            lines.append(f"- `{result['source']}`: {result['error']}")
        lines.append("")

    (output_root / "_indice.md").write_text(
        "\n".join(lines), encoding="utf-8-sig", newline="\n"
    )
    (output_root / "_resultado_conversao.json").write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8-sig"
    )


def strip_existing_images(output_root: Path) -> tuple[int, int, int]:
    markdown_files = sorted(
        (path for path in output_root.rglob("*.md") if path.name != "_indice.md"),
        key=lambda path: str(path).casefold(),
    )
    removed_references = 0
    for markdown_file in markdown_files:
        text = markdown_file.read_text(encoding="utf-8-sig")
        text, count = IMAGE_RE.subn("", text)
        removed_references += count
        text = text.replace("conversao: texto-e-imagens", "conversao: somente-texto")
        text = polish_markdown(text)
        temporary = markdown_file.with_suffix(".md.part")
        temporary.write_text(text, encoding="utf-8-sig", newline="\n")
        os.replace(temporary, markdown_file)

    asset_directories = sorted(
        (path for path in output_root.rglob("assets") if path.is_dir()),
        key=lambda path: len(path.parts),
        reverse=True,
    )
    removed_asset_files = 0
    for asset_directory in asset_directories:
        resolved = asset_directory.resolve()
        if resolved.name != "assets" or output_root.resolve() not in resolved.parents:
            raise ValueError(f"Pasta de assets fora da saída esperada: {resolved}")
        removed_asset_files += sum(1 for path in resolved.rglob("*") if path.is_file())
        shutil.rmtree(resolved)

    index_path = output_root / "_indice.md"
    if index_path.exists():
        index_text = index_path.read_text(encoding="utf-8-sig")
        index_text = index_text.replace(
            "- As imagens de cada aula ficam na pasta `assets` correspondente.",
            "- Formato: somente texto, sem pastas de imagens.",
        )
        index_path.write_text(index_text, encoding="utf-8-sig", newline="\n")

    result_path = output_root / "_resultado_conversao.json"
    if result_path.exists():
        results = json.loads(result_path.read_text(encoding="utf-8-sig"))
        for result in results:
            result["images"] = 0
            result["mode"] = "text-only"
        result_path.write_text(
            json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8-sig"
        )
    return len(markdown_files), removed_references, removed_asset_files


def polish_existing_markdown(output_root: Path) -> tuple[int, int]:
    markdown_files = sorted(
        (path for path in output_root.rglob("*.md") if path.name != "_indice.md"),
        key=lambda path: str(path).casefold(),
    )
    removed_marks = 0
    for markdown_file in markdown_files:
        text = markdown_file.read_text(encoding="utf-8-sig")
        removed_marks += text.count("<mark>")
        polished = polish_markdown(text)
        temporary = markdown_file.with_suffix(".md.part")
        temporary.write_text(polished, encoding="utf-8-sig", newline="\n")
        os.replace(temporary, markdown_file)
    return len(markdown_files), removed_marks


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Converte as apostilas de aula em PDF da DataPrev para Markdown com imagens."
    )
    parser.add_argument("--root", type=Path, required=True, help="Pasta raiz das apostilas")
    parser.add_argument("--output", type=Path, required=True, help="Pasta de saída")
    parser.add_argument("--workers", type=int, default=3, help="Conversões simultâneas")
    parser.add_argument(
        "--force", action="store_true", help="Refaz arquivos existentes com as regras atuais"
    )
    parser.add_argument(
        "--text-only", action="store_true", help="Gera Markdown somente com texto"
    )
    parser.add_argument(
        "--strip-existing",
        action="store_true",
        help="Remove imagens dos Markdown existentes e apaga somente as pastas assets da saída",
    )
    parser.add_argument(
        "--polish-existing",
        action="store_true",
        help="Limpa destaques artificiais e normaliza a apresentação dos Markdown existentes",
    )
    parsed = parser.parse_args()

    source_root = parsed.root.resolve()
    output_root = parsed.output.resolve()
    output_root.mkdir(parents=True, exist_ok=True)
    if parsed.strip_existing:
        files, references, assets = strip_existing_images(output_root)
        print(
            f"Concluído: {files} Markdown, {references} referências e {assets} imagens removidas.",
            flush=True,
        )
        return 0
    if parsed.polish_existing:
        files, marks = polish_existing_markdown(output_root)
        print(
            f"Concluído: {files} Markdown polidos e {marks} destaques artificiais removidos.",
            flush=True,
        )
        return 0
    pdfs = sorted(
        (p for p in source_root.rglob("*.pdf") if "aula" in p.stem.casefold()),
        key=lambda p: str(p).casefold(),
    )
    print(f"Encontradas {len(pdfs)} aulas.", flush=True)

    jobs = [
        (str(p), str(source_root), str(output_root), parsed.force, parsed.text_only)
        for p in pdfs
    ]
    results: list[dict[str, object]] = []
    done = 0
    with ProcessPoolExecutor(max_workers=max(1, parsed.workers)) as executor:
        futures = {executor.submit(convert_one, job): job[0] for job in jobs}
        for future in as_completed(futures):
            result = future.result()
            results.append(result)
            done += 1
            status = str(result["status"]).upper()
            detail = result.get("error", "")
            print(f"[{done:03d}/{len(pdfs):03d}] {status}: {result['source']} {detail}", flush=True)

    results.sort(key=lambda item: str(item["source"]).casefold())
    write_index(output_root, results, text_only=parsed.text_only)
    errors = sum(1 for result in results if result["status"] == "error")
    converted = sum(1 for result in results if result["status"] == "converted")
    skipped = sum(1 for result in results if result["status"] == "skipped")
    print(
        f"Concluído: {converted} convertidos, {skipped} já existentes, {errors} erros.",
        flush=True,
    )
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
