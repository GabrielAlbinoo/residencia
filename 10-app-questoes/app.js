"use strict";

const STORAGE_KEY = "questoes_pontos_fracos_v1";
const DEFAULT_BANK_KEY = "questoes_banco_atual_v1";

const state = {
  questions: [],
  currentIndex: 0,
  mode: "all",
  selectedCategory: "",
  answered: false,
  progress: loadProgress()
};

const els = {
  fileInput: document.getElementById("fileInput"),
  loadMainBankButton: document.getElementById("loadMainBankButton"),
  loadExampleButton: document.getElementById("loadExampleButton"),
  weakModeButton: document.getElementById("weakModeButton"),
  allModeButton: document.getElementById("allModeButton"),
  resetProgressButton: document.getElementById("resetProgressButton"),
  categoryFilter: document.getElementById("categoryFilter"),
  questionCard: document.getElementById("questionCard"),
  totalQuestions: document.getElementById("totalQuestions"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  weakTopics: document.getElementById("weakTopics")
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
  localStorage.setItem(DEFAULT_BANK_KEY, text);
}

function loadBank() {
  return localStorage.getItem(DEFAULT_BANK_KEY) || "";
}

function splitCells(line) {
  return line.split(";").map((cell) => cell.trim());
}

function pushText(question, field, value) {
  const text = value.trim();
  if (!text) return;
  question[field].push(text);
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
        currentArtifact = {
          type: "table",
          caption: trimmed.replace("::tabela", "").trim(),
          rows: []
        };
        question.artifacts.push(currentArtifact);
        continue;
      }

      if (trimmed.startsWith("::codigo")) {
        currentArtifact = {
          type: "code",
          caption: trimmed.replace("::codigo", "").trim(),
          lines: []
        };
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
        question.categories.push(
          ...trimmed.slice(1).split(";").map((cat) => cat.trim()).filter(Boolean)
        );
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
    if (question.prompt.length && question.options.length >= 2 && correctCount >= 1) {
      questions.push(question);
    }
  }

  return questions;
}

function renderInline(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\\overline\{([^}]+)\}/g, '<span class="overline">$1</span>')
    .replace(/\\bar\{([^}]+)\}/g, '<span class="overline">$1</span>')
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function getQuestionStats(question) {
  return state.progress[question.id] || {
    correct: 0,
    wrong: 0,
    unknown: 0,
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
  return stats.wrong * 3 + stats.unknown * 4 - stats.correct;
}

function filteredQuestions() {
  let list = [...state.questions];
  if (state.selectedCategory) {
    list = list.filter((question) => question.categories.includes(state.selectedCategory));
  }
  if (state.mode === "weak") {
    list.sort((a, b) => scoreQuestion(b) - scoreQuestion(a));
  }
  return list;
}

function renderArtifact(artifact) {
  if (artifact.type === "code") {
    return `
      <figure class="artifact-code">
        ${artifact.caption ? `<figcaption>${renderInline(artifact.caption)}</figcaption>` : ""}
        <pre>${artifact.lines.map((line) => line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")).join("\n")}</pre>
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
  const list = filteredQuestions();
  if (!list.length) {
    els.questionCard.innerHTML = `
      <div class="empty-state">
        <h2>Nenhuma questão encontrada</h2>
        <p>Importe um arquivo ou mude o filtro de categoria.</p>
      </div>
    `;
    renderStats();
    return;
  }

  if (state.currentIndex >= list.length) state.currentIndex = 0;
  const question = list[state.currentIndex];
  const stats = getQuestionStats(question);

  els.questionCard.innerHTML = `
    <div class="question-meta">
      <span class="tag">${state.currentIndex + 1}/${list.length}</span>
      ${question.categories.map((cat) => `<span class="tag">${renderInline(cat)}</span>`).join("")}
      <span class="tag">Acertos ${stats.correct || 0}</span>
      <span class="tag">Erros ${stats.wrong || 0}</span>
      <span class="tag">Não sei ${stats.unknown || 0}</span>
    </div>
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
      <button id="unknownButton" type="button" class="ghost">Não sei</button>
      <button id="nextButton" type="button">Próxima</button>
    </div>
    <div id="feedback" class="feedback" hidden></div>
  `;

  for (const button of els.questionCard.querySelectorAll("[data-option-index]")) {
    button.addEventListener("click", () => answerQuestion(question, Number(button.dataset.optionIndex)));
  }

  document.getElementById("unknownButton").addEventListener("click", () => markUnknown(question));
  document.getElementById("nextButton").addEventListener("click", nextQuestion);
  renderStats();
}

function showFeedback(question, title) {
  const feedback = document.getElementById("feedback");
  feedback.hidden = false;
  feedback.innerHTML = `
    <h3>${title}</h3>
    ${question.explanation.length ? question.explanation.map((line) => `<p>${renderInline(line)}</p>`).join("") : "<p>Sem explicação cadastrada.</p>"}
  `;
}

function answerQuestion(question, optionIndex) {
  if (state.answered) return;
  state.answered = true;
  const option = question.options[optionIndex];
  const buttons = els.questionCard.querySelectorAll("[data-option-index]");

  buttons.forEach((button, index) => {
    if (question.options[index].correct) button.classList.add("correct");
    if (index === optionIndex && !option.correct) button.classList.add("wrong");
  });

  const stats = getQuestionStats(question);
  if (option.correct) {
    setQuestionStats(question, { correct: (stats.correct || 0) + 1 });
    showFeedback(question, "Correta");
  } else {
    setQuestionStats(question, { wrong: (stats.wrong || 0) + 1 });
    showFeedback(question, "Incorreta");
  }
  renderStats();
}

function markUnknown(question) {
  if (state.answered) return;
  state.answered = true;
  const stats = getQuestionStats(question);
  setQuestionStats(question, { unknown: (stats.unknown || 0) + 1 });
  for (const [index, button] of [...els.questionCard.querySelectorAll("[data-option-index]")].entries()) {
    if (question.options[index].correct) button.classList.add("correct");
  }
  showFeedback(question, "Marcada como não sei");
  renderStats();
}

function nextQuestion() {
  const list = filteredQuestions();
  state.currentIndex = (state.currentIndex + 1) % Math.max(list.length, 1);
  state.answered = false;
  renderQuestion();
}

function categoryList() {
  return [...new Set(state.questions.flatMap((question) => question.categories))].sort((a, b) => a.localeCompare(b));
}

function refreshCategoryFilter() {
  const selected = state.selectedCategory;
  els.categoryFilter.innerHTML = '<option value="">Todas</option>' +
    categoryList().map((cat) => `<option value="${cat}">${cat}</option>`).join("");
  els.categoryFilter.value = selected;
}

function renderStats() {
  els.totalQuestions.textContent = state.questions.length;
  let correct = 0;
  let wrong = 0;
  const topicMap = new Map();

  for (const question of state.questions) {
    const stats = getQuestionStats(question);
    correct += stats.correct || 0;
    wrong += (stats.wrong || 0) + (stats.unknown || 0);
    for (const cat of question.categories) {
      const current = topicMap.get(cat) || { wrong: 0, correct: 0 };
      current.wrong += (stats.wrong || 0) + (stats.unknown || 0);
      current.correct += stats.correct || 0;
      topicMap.set(cat, current);
    }
  }

  els.correctCount.textContent = correct;
  els.wrongCount.textContent = wrong;

  const topics = [...topicMap.entries()]
    .map(([name, stats]) => ({ name, ...stats, score: stats.wrong * 3 - stats.correct }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  els.weakTopics.innerHTML = topics.length
    ? topics.map((topic) => `
      <div class="topic-pill">
        <strong>${renderInline(topic.name)}</strong>
        <span>${topic.wrong} perdas / ${topic.correct} acertos</span>
      </div>
    `).join("")
    : '<p class="topic-pill">Sem dados ainda.</p>';
}

function loadQuestionsFromText(text) {
  const questions = parseQuestions(text);
  if (!questions.length) {
    alert("Nenhuma questão válida encontrada no TXT.");
    return;
  }
  state.questions = questions;
  state.currentIndex = 0;
  state.answered = false;
  saveBank(text);
  refreshCategoryFilter();
  renderQuestion();
}

els.fileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  loadQuestionsFromText(text);
});

els.loadExampleButton.addEventListener("click", async () => {
  const response = await fetch("questoes-exemplo.txt");
  const text = await response.text();
  loadQuestionsFromText(text);
});

els.loadMainBankButton.addEventListener("click", async () => {
  const response = await fetch("bancos/sistemas_digitais_simulados_11_a_15_limpo.txt");
  const text = await response.text();
  loadQuestionsFromText(text);
});

els.weakModeButton.addEventListener("click", () => {
  state.mode = "weak";
  state.currentIndex = 0;
  state.answered = false;
  renderQuestion();
});

els.allModeButton.addEventListener("click", () => {
  state.mode = "all";
  state.currentIndex = 0;
  state.answered = false;
  renderQuestion();
});

els.resetProgressButton.addEventListener("click", () => {
  if (!confirm("Zerar todo o progresso salvo neste navegador?")) return;
  state.progress = {};
  saveProgress();
  renderQuestion();
});

els.categoryFilter.addEventListener("change", () => {
  state.selectedCategory = els.categoryFilter.value;
  state.currentIndex = 0;
  state.answered = false;
  renderQuestion();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

const cachedBank = loadBank();
if (cachedBank) {
  loadQuestionsFromText(cachedBank);
} else {
  renderQuestion();
}
