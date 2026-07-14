"use strict";

const STORAGE_KEY = "questoes_pontos_fracos_v1";
const BANK_KEY = "questoes_banco_unico_v2";
const BUILT_IN_BANKS = [
  "bancos/sistemas_digitais_simulados_11_a_15_limpo.txt",
  "bancos/sistemas_digitais_100_questoes_novas_extremo.txt"
];

const state = {
  questions: [],
  currentQuestion: null,
  queue: [],
  answered: false,
  selectedOptionIndex: null,
  weakOnly: false,
  progress: loadProgress()
};

const els = {
  configButton: document.getElementById("configButton"),
  questionCard: document.getElementById("questionCard")
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function saveBank(text) {
  localStorage.setItem(BANK_KEY, text);
}

function loadSavedBank() {
  return localStorage.getItem(BANK_KEY) || "";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(text) {
  return escapeHtml(text)
    .replace(/\\overline\{([^}]+)\}/g, '<span class="overline">$1</span>')
    .replace(/\\bar\{([^}]+)\}/g, '<span class="overline">$1</span>')
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function splitCells(line) {
  return line.split(";").map((cell) => cell.trim());
}

function pushText(question, field, value) {
  const text = value.trim();
  if (text) question[field].push(text);
}

function parseQuestions(text) {
  const blocks = text
    .replace(/\r\n/g, "\n")
    .split(/^===\s*$/m)
    .map((block) => block.trim())
    .filter(Boolean);

  const questions = [];

  for (const block of blocks) {
    const question = {
      id: "",
      prompt: [],
      options: [],
      explanation: [],
      categories: [],
      artifacts: []
    };
    let currentArtifact = null;

    for (const rawLine of block.split("\n")) {
      const line = rawLine.trimEnd();
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("//")) continue;

      if (trimmed.startsWith("::tabela")) {
        currentArtifact = { type: "table", caption: trimmed.replace("::tabela", "").trim(), rows: [] };
        question.artifacts.push(currentArtifact);
        continue;
      }

      if (trimmed.startsWith("::codigo")) {
        currentArtifact = { type: "code", caption: trimmed.replace("::codigo", "").trim(), lines: [] };
        question.artifacts.push(currentArtifact);
        continue;
      }

      if (trimmed === "::fim") {
        currentArtifact = null;
        continue;
      }

      if (currentArtifact?.type === "table" && trimmed.startsWith("|")) {
        currentArtifact.rows.push(splitCells(trimmed.slice(1)));
        continue;
      }

      if (currentArtifact?.type === "code") {
        currentArtifact.lines.push(line);
        continue;
      }

      if (trimmed.startsWith("@id")) {
        question.id = trimmed.replace("@id", "").trim();
      } else if (trimmed.startsWith("#")) {
        question.categories.push(...trimmed.slice(1).split(";").map((cat) => cat.trim()).filter(Boolean));
      } else if (trimmed.startsWith("?")) {
        pushText(question, "prompt", trimmed.slice(1));
      } else if (trimmed.startsWith("*")) {
        question.options.push({ text: trimmed.slice(1).trim(), correct: true });
      } else if (trimmed.startsWith("-")) {
        question.options.push({ text: trimmed.slice(1).trim(), correct: false });
      } else if (trimmed.startsWith(">")) {
        pushText(question, "explanation", trimmed.slice(1));
      } else {
        pushText(question, "prompt", trimmed);
      }
    }

    if (!question.id) question.id = "q-" + (questions.length + 1);
    if (!question.categories.length) question.categories.push("sem categoria");

    const correctCount = question.options.filter((option) => option.correct).length;
    if (question.prompt.length && question.options.length >= 2 && correctCount === 1) {
      questions.push(question);
    }
  }

  return questions;
}

function getQuestionStats(question) {
  return state.progress[question.id] || {
    correct: 0,
    wrong: 0,
    unknown: 0,
    note: "",
    last: null
  };
}

function setQuestionStats(question, patch) {
  state.progress[question.id] = {
    ...getQuestionStats(question),
    ...patch,
    last: new Date().toISOString()
  };
  saveProgress();
}

function scoreQuestion(question) {
  const stats = getQuestionStats(question);
  return (stats.wrong || 0) * 3 + (stats.unknown || 0) * 4 - (stats.correct || 0);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function candidateQuestions() {
  if (!state.weakOnly) return state.questions;
  const weak = state.questions.filter((question) => scoreQuestion(question) > 0);
  return weak.length ? weak : state.questions;
}

function rebuildQueue() {
  const candidates = candidateQuestions();
  state.queue = shuffle(candidates.map((question) => question.id));
}

function pickNextQuestion() {
  if (!state.questions.length) {
    state.currentQuestion = null;
    return;
  }

  if (!state.queue.length) rebuildQueue();
  const nextId = state.queue.shift();
  state.currentQuestion = state.questions.find((question) => question.id === nextId) || state.questions[0];
  state.answered = false;
  state.selectedOptionIndex = null;
}

function renderArtifact(artifact) {
  if (artifact.type === "code") {
    return `
      <figure class="artifact-code">
        ${artifact.caption ? `<figcaption>${renderInline(artifact.caption)}</figcaption>` : ""}
        <pre>${artifact.lines.map(escapeHtml).join("\n")}</pre>
      </figure>
    `;
  }

  if (artifact.type === "table") {
    const [header, ...rows] = artifact.rows;
    return `
      <table class="artifact-table">
        ${artifact.caption ? `<caption>${renderInline(artifact.caption)}</caption>` : ""}
        ${header ? `<thead><tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>` : ""}
        <tbody>
          ${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  return "";
}

function renderQuestion() {
  const question = state.currentQuestion;

  if (!question) {
    els.questionCard.innerHTML = `
      <div class="empty-state">
        <h2>Nenhuma questão carregada</h2>
        <p>Abra Config e importe um arquivo `.txt`.</p>
      </div>
    `;
    return;
  }

  els.questionCard.innerHTML = `
    <div class="question-text">
      ${question.prompt.map((line) => `<p>${renderInline(line)}</p>`).join("")}
    </div>
    ${question.artifacts.map(renderArtifact).join("")}
    <div class="options">
      ${question.options.map((option, index) => `
        <button class="option" type="button" data-option-index="${index}">
          <span class="letter">${String.fromCharCode(65 + index)}</span>
          <span>${renderInline(option.text)}</span>
        </button>
      `).join("")}
    </div>
    <div class="actions">
      <button id="answerButton" type="button">Responder</button>
      <button id="unknownButton" type="button" class="ghost">Não sei</button>
      <button id="nextButton" type="button" hidden>Próxima</button>
    </div>
    <div id="feedback" class="feedback" hidden></div>
  `;

  for (const button of els.questionCard.querySelectorAll("[data-option-index]")) {
    button.addEventListener("click", () => selectOption(Number(button.dataset.optionIndex)));
  }

  document.getElementById("answerButton").addEventListener("click", answerSelectedQuestion);
  document.getElementById("unknownButton").addEventListener("click", markUnknown);
  document.getElementById("nextButton").addEventListener("click", () => {
    pickNextQuestion();
    renderQuestion();
  });
}

function selectOption(optionIndex) {
  if (state.answered) return;
  state.selectedOptionIndex = optionIndex;
  for (const button of els.questionCard.querySelectorAll("[data-option-index]")) {
    button.classList.toggle("selected", Number(button.dataset.optionIndex) === optionIndex);
  }
}

function revealPostAnswer() {
  const answerButton = document.getElementById("answerButton");
  const unknownButton = document.getElementById("unknownButton");
  const nextButton = document.getElementById("nextButton");
  if (answerButton) answerButton.hidden = true;
  if (unknownButton) unknownButton.hidden = true;
  if (nextButton) nextButton.hidden = false;
}

function showFeedback(title) {
  const question = state.currentQuestion;
  const stats = getQuestionStats(question);
  const feedback = document.getElementById("feedback");
  feedback.hidden = false;
  feedback.innerHTML = `
    <h3>${title}</h3>
    <div class="question-meta revealed-meta">
      ${question.categories.map((cat) => `<span class="tag">${renderInline(cat)}</span>`).join("")}
      <span class="tag">Acertos ${stats.correct || 0}</span>
      <span class="tag">Erros ${stats.wrong || 0}</span>
      <span class="tag">Não sei ${stats.unknown || 0}</span>
    </div>
    ${question.explanation.length ? question.explanation.map((line) => `<p>${renderInline(line)}</p>`).join("") : "<p>Sem explicação cadastrada.</p>"}
    <label class="note-field">
      OBS desta questão
      <textarea id="questionNote" rows="3" placeholder="Anote sua dúvida, raciocínio, fórmula que esqueceu ou pegadinha percebida...">${escapeHtml(stats.note || "")}</textarea>
    </label>
  `;
  document.getElementById("questionNote").addEventListener("input", (event) => {
    setQuestionStats(question, { note: event.target.value });
  });
}

function answerSelectedQuestion() {
  const question = state.currentQuestion;
  if (state.selectedOptionIndex === null) {
    alert("Selecione uma alternativa antes de responder.");
    return;
  }

  state.answered = true;
  const option = question.options[state.selectedOptionIndex];
  const stats = getQuestionStats(question);

  for (const [index, button] of [...els.questionCard.querySelectorAll("[data-option-index]")].entries()) {
    if (question.options[index].correct) button.classList.add("correct");
    if (index === state.selectedOptionIndex && !option.correct) button.classList.add("wrong");
  }

  if (option.correct) {
    setQuestionStats(question, { correct: (stats.correct || 0) + 1 });
    showFeedback("Correta");
  } else {
    setQuestionStats(question, { wrong: (stats.wrong || 0) + 1 });
    showFeedback("Incorreta");
  }
  revealPostAnswer();
}

function markUnknown() {
  const question = state.currentQuestion;
  if (state.answered) return;
  state.answered = true;
  const stats = getQuestionStats(question);
  setQuestionStats(question, { unknown: (stats.unknown || 0) + 1 });

  for (const [index, button] of [...els.questionCard.querySelectorAll("[data-option-index]")].entries()) {
    if (question.options[index].correct) button.classList.add("correct");
  }

  showFeedback("Marcada como não sei");
  revealPostAnswer();
}

function totalStats() {
  return state.questions.reduce((acc, question) => {
    const stats = getQuestionStats(question);
    acc.correct += stats.correct || 0;
    acc.wrong += stats.wrong || 0;
    acc.unknown += stats.unknown || 0;
    return acc;
  }, { correct: 0, wrong: 0, unknown: 0 });
}

function topicStats() {
  const topicMap = new Map();
  for (const question of state.questions) {
    const stats = getQuestionStats(question);
    for (const cat of question.categories) {
      const current = topicMap.get(cat) || { wrong: 0, unknown: 0, correct: 0, questions: 0 };
      current.wrong += stats.wrong || 0;
      current.unknown += stats.unknown || 0;
      current.correct += stats.correct || 0;
      current.questions += 1;
      topicMap.set(cat, current);
    }
  }

  return [...topicMap.entries()]
    .map(([name, stats]) => ({
      name,
      ...stats,
      losses: stats.wrong + stats.unknown,
      score: stats.wrong * 3 + stats.unknown * 4 - stats.correct
    }))
    .sort((a, b) => b.score - a.score || b.losses - a.losses || a.name.localeCompare(b.name));
}

function observationRows() {
  return state.questions
    .map((question) => ({ question, stats: getQuestionStats(question) }))
    .filter((item) => (item.stats.note || "").trim())
    .sort((a, b) => Date.parse(b.stats.last || 0) - Date.parse(a.stats.last || 0));
}

function plainQuestionText(question) {
  return question.prompt.join(" ").replace(/\s+/g, " ").trim();
}

function renderConfigView() {
  const totals = totalStats();
  const topics = topicStats();
  const notes = observationRows();

  els.questionCard.innerHTML = `
    <div class="config-view">
      <div class="view-heading">
        <h2>Config</h2>
        <button id="backToTrainingButton" type="button">Voltar para questões</button>
      </div>

      <div class="metric-row">
        <div><span>Questões</span><strong>${state.questions.length}</strong></div>
        <div><span>Acertos</span><strong>${totals.correct}</strong></div>
        <div><span>Erros / Não sei</span><strong>${totals.wrong + totals.unknown}</strong></div>
      </div>

      <div class="config-actions">
        <label class="import-button inline-import">
          Importar novas questões
          <input id="fileInput" type="file" accept=".txt,text/plain">
        </label>
        <button id="weakToggleButton" type="button" class="${state.weakOnly ? "" : "ghost"}">${state.weakOnly ? "Modo pontos fracos ligado" : "Modo aleatório geral"}</button>
        <button id="exportIaButton" type="button" class="ghost">Exportar IA</button>
      </div>

      <section class="config-section">
        <h3>Prioridade por tema</h3>
        <div class="weak-list">
          ${topics.slice(0, 12).map((topic) => `
            <div class="topic-pill">
              <strong>${renderInline(topic.name)}</strong>
              <span>${topic.wrong + topic.unknown} perdas / ${topic.correct} acertos</span>
            </div>
          `).join("") || '<p class="topic-pill">Sem dados ainda.</p>'}
        </div>
      </section>

      <section class="config-section">
        <h3>OBS salvas</h3>
        <div class="observation-list">
          ${notes.length ? notes.map(({ question, stats }) => `
            <article class="observation-item">
              <div class="question-meta">
                ${question.categories.map((cat) => `<span class="tag">${renderInline(cat)}</span>`).join("")}
                <span class="tag">Erros ${stats.wrong || 0}</span>
                <span class="tag">Não sei ${stats.unknown || 0}</span>
              </div>
              <p class="observation-prompt">${renderInline(plainQuestionText(question))}</p>
              <div class="observation-note">${renderInline(stats.note || "")}</div>
            </article>
          `).join("") : '<p class="topic-pill">Nenhuma OBS salva ainda.</p>'}
        </div>
      </section>
    </div>
  `;

  document.getElementById("backToTrainingButton").addEventListener("click", renderQuestion);
  document.getElementById("weakToggleButton").addEventListener("click", () => {
    state.weakOnly = !state.weakOnly;
    rebuildQueue();
    pickNextQuestion();
    renderConfigView();
  });
  document.getElementById("exportIaButton").addEventListener("click", exportForIa);
  document.getElementById("fileInput").addEventListener("change", importQuestionsFile);
}

function questionDifficultyRows() {
  return state.questions
    .map((question) => ({ question, stats: getQuestionStats(question), score: scoreQuestion(question) }))
    .filter((item) => item.score > 0 || (item.stats.note || "").trim())
    .sort((a, b) => b.score - a.score);
}

function buildIaExport() {
  const totals = totalStats();
  const topics = topicStats();
  const weakQuestions = questionDifficultyRows();
  const notes = observationRows();

  const topicLines = topics
    .filter((topic) => topic.losses > 0 || topic.score > 0)
    .map((topic, index) => `${index + 1}. ${topic.name}: score=${topic.score}; erros=${topic.wrong}; nao_sei=${topic.unknown}; acertos=${topic.correct}; questoes_no_tema=${topic.questions}`)
    .join("\n") || "Nenhum ponto fraco registrado ainda.";

  const noteLines = notes
    .map((item, index) => [
      `${index + 1}. id=${item.question.id}`,
      `categorias=${item.question.categories.join("; ")}`,
      `enunciado=${plainQuestionText(item.question)}`,
      `obs=${(item.stats.note || "").trim()}`
    ].join("\n   "))
    .join("\n\n") || "Nenhuma OBS registrada.";

  const questionLines = weakQuestions
    .slice(0, 80)
    .map((item, index) => [
      `${index + 1}. id=${item.question.id}`,
      `categorias=${item.question.categories.join("; ")}`,
      `score=${item.score}; erros=${item.stats.wrong || 0}; nao_sei=${item.stats.unknown || 0}; acertos=${item.stats.correct || 0}`,
      `enunciado=${plainQuestionText(item.question)}`,
      `obs_do_aluno=${(item.stats.note || "").trim() || "sem obs"}`,
      `explicacao_base=${item.question.explanation.join(" ").replace(/\s+/g, " ").trim()}`
    ].join("\n   "))
    .join("\n\n") || "Nenhuma questao errada, marcada como nao sei ou com OBS.";

  return [
    "Quero que voce analise meus pontos fracos em Sistemas Digitais a partir dos dados abaixo.",
    "",
    "CONTEXTO",
    "- Estou treinando para prova objetiva de Sistemas Digitais.",
    "- Trate 'nao sei' como prioridade maior que erro comum.",
    "- Analise minhas OBS como pistas do meu raciocinio.",
    "- Nao crie assuntos fora do escopo de Sistemas Digitais.",
    "",
    "O QUE EU QUERO COMO RESPOSTA",
    "1. Diagnostico dos 5 maiores pontos fracos.",
    "2. Revisao guiada por tema fraco, com conceito, formulas, unidades, gatilhos de prova e pegadinhas.",
    "3. Correcao explicita das confusoes que aparecerem nas OBS.",
    "4. Plano de revisao de 2 a 3 dias.",
    "5. Dez questoes novas dificeis e traiçoeiras, com gabarito e explicacao.",
    "",
    "RESUMO GERAL",
    `- Questoes carregadas: ${state.questions.length}`,
    `- Acertos: ${totals.correct}`,
    `- Erros: ${totals.wrong}`,
    `- Nao sei: ${totals.unknown}`,
    `- Exportado em: ${new Date().toLocaleString("pt-BR")}`,
    "",
    "PRIORIDADE POR TEMA",
    topicLines,
    "",
    "OBS REGISTRADAS",
    noteLines,
    "",
    "QUESTOES COM DIFICULDADE",
    questionLines
  ].join("\n");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-1000px";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);
  return copied;
}

function showManualExport(text) {
  els.questionCard.innerHTML = `
    <div class="export-panel">
      <h2>Relatório para IA</h2>
      <p>A cópia automática não funcionou neste navegador. Selecione o texto abaixo e copie manualmente.</p>
      <textarea id="iaExportText" class="export-textarea" readonly></textarea>
      <div class="actions">
        <button id="selectIaExportButton" type="button">Selecionar texto</button>
        <button id="backToConfigButton" type="button" class="ghost">Voltar</button>
      </div>
    </div>
  `;
  const textArea = document.getElementById("iaExportText");
  textArea.value = text;
  document.getElementById("selectIaExportButton").addEventListener("click", () => {
    textArea.focus();
    textArea.select();
  });
  document.getElementById("backToConfigButton").addEventListener("click", renderConfigView);
  textArea.focus();
  textArea.select();
}

async function exportForIa() {
  if (!state.questions.length) {
    alert("Carregue questões antes de exportar.");
    return;
  }

  const text = buildIaExport();
  try {
    const copied = await copyText(text);
    if (copied) alert("Relatório para IA copiado. Agora cole no chat.");
    else showManualExport(text);
  } catch {
    showManualExport(text);
  }
}

function readTextFile(file) {
  if (typeof file.text === "function") return file.text();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file, "UTF-8");
  });
}

function mergeQuestionTexts(existingText, newText) {
  return [existingText.trim(), newText.trim()].filter(Boolean).join("\n\n");
}

function loadQuestionsFromText(text, { append = false } = {}) {
  const parsed = parseQuestions(text);
  if (!parsed.length) {
    alert("Nenhuma questão válida encontrada.");
    return;
  }

  if (append) {
    const byId = new Map(state.questions.map((question) => [question.id, question]));
    for (const question of parsed) byId.set(question.id, question);
    state.questions = [...byId.values()];
    const merged = mergeQuestionTexts(loadSavedBank(), text);
    saveBank(merged);
  } else {
    state.questions = parsed;
    saveBank(text);
  }

  rebuildQueue();
  pickNextQuestion();
  renderQuestion();
}

async function importQuestionsFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await readTextFile(file);
    loadQuestionsFromText(text, { append: true });
    alert("Questões importadas para o banco único.");
  } catch {
    alert("Não consegui ler esse TXT neste navegador.");
  }
}

async function loadBuiltInBank() {
  if (window.EMBEDDED_BANKS?.combined) {
    loadQuestionsFromText(window.EMBEDDED_BANKS.combined);
    return;
  }

  const saved = loadSavedBank();
  if (saved) {
    loadQuestionsFromText(saved);
    return;
  }

  try {
    const texts = await Promise.all(BUILT_IN_BANKS.map(async (path) => {
      const response = await fetch(path);
      return response.text();
    }));
    loadQuestionsFromText(texts.join("\n\n"));
  } catch {
    els.questionCard.innerHTML = `
      <div class="empty-state">
        <h2>Não consegui carregar o banco</h2>
        <p>Abra Config e importe um arquivo `.txt`, ou use a versão tablet/offline.</p>
      </div>
    `;
  }
}

els.configButton.addEventListener("click", renderConfigView);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

loadBuiltInBank();
