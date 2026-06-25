import {
  RISK_LEVELS,
  analyzePrompt,
  buildCopySummary,
  escapeHtml,
  highlightPrompt,
  rewritePrompt,
} from './rules.js';

const SAMPLE_PROMPT = `[Genre]
Bright future bass, uplifting J-pop, acoustic pop rock

[Mood]
Hopeful voyage, sparkling synths, big emotional chorus

[Vocal]
Clear expressive vocal with vocal chops in the drop

[Rhythm]
Fast 1/16 stutter edits before the final chorus`;

const promptInput = document.querySelector('#promptInput');
const characterCount = document.querySelector('#characterCount');
const riskCard = document.querySelector('#riskCard');
const riskLabel = document.querySelector('#riskLabel');
const riskTone = document.querySelector('#riskTone');
const matchCount = document.querySelector('#matchCount');
const detectedList = document.querySelector('#detectedList');
const suggestionList = document.querySelector('#suggestionList');
const highlightPreview = document.querySelector('#highlightPreview');
const rewrittenPrompt = document.querySelector('#rewrittenPrompt');
const sampleButton = document.querySelector('#sampleButton');
const clearButton = document.querySelector('#clearButton');
const copyButton = document.querySelector('#copyButton');
const copyRewriteButton = document.querySelector('#copyRewriteButton');

promptInput.addEventListener('input', render);
sampleButton.addEventListener('click', () => {
  promptInput.value = SAMPLE_PROMPT;
  promptInput.focus();
  promptInput.setSelectionRange(0, 0);
  promptInput.scrollTop = 0;
  render();
});
clearButton.addEventListener('click', () => {
  promptInput.value = '';
  promptInput.focus();
  render();
});
copyButton.addEventListener('click', copySummary);
copyRewriteButton.addEventListener('click', copyRewrite);

render();

function render() {
  const prompt = promptInput.value;
  const analysis = analyzePrompt(prompt);

  characterCount.textContent = `${prompt.length.toLocaleString('ko-KR')}자`;
  riskCard.className = `risk-card ${analysis.severity}`;
  riskLabel.textContent = RISK_LEVELS[analysis.severity].label;
  riskTone.textContent = RISK_LEVELS[analysis.severity].tone;
  matchCount.textContent = `${analysis.matchCount}개`;
  detectedList.innerHTML = renderDetectedList(analysis);
  suggestionList.innerHTML = renderSuggestionList(analysis);
  highlightPreview.innerHTML = prompt
    ? highlightPrompt(prompt, analysis)
    : '프롬프트를 붙여넣으면 감지된 위험 단어가 여기에 표시됩니다.';
  renderRewrite(prompt, analysis);
}

function renderDetectedList(analysis) {
  if (!analysis.matches.length) {
    return '<div class="empty-state">현재 목록 기준으로는 위험 단어가 없습니다.</div>';
  }

  return analysis.matches
    .map(
      (match) => `
        <article class="risk-item">
          <div class="risk-item-header">
            <span class="risk-term">${escapeHtml(match.term)}</span>
            <span class="risk-meta">${escapeHtml(RISK_LEVELS[match.level].label)} · ${escapeHtml(match.category)}</span>
          </div>
          <p>${escapeHtml(match.pattern)} · ${escapeHtml(match.reason)}</p>
        </article>
      `,
    )
    .join('');
}

function renderSuggestionList(analysis) {
  const uniqueMatches = getUniqueMatches(analysis.matches);

  if (!uniqueMatches.length) {
    return '<div class="empty-state">장르명보다 악기, 무드, 템포, 보컬 톤을 중심으로 적으면 결과가 덜 튈 수 있습니다.</div>';
  }

  return uniqueMatches
    .map(
      (match) => `
        <article class="suggestion-item">
          <strong>${escapeHtml(match.canonical)}</strong>
          <p>${escapeHtml(match.suggestion)}</p>
        </article>
      `,
    )
    .join('');
}

function getUniqueMatches(matches) {
  const seen = new Set();
  const unique = [];

  for (const match of matches) {
    if (!seen.has(match.canonical)) {
      seen.add(match.canonical);
      unique.push(match);
    }
  }

  return unique;
}

async function copySummary() {
  const summary = buildCopySummary(analyzePrompt(promptInput.value));

  try {
    await navigator.clipboard.writeText(summary);
    copyButton.textContent = '복사됨';
    window.setTimeout(() => {
      copyButton.textContent = '힌트 복사';
    }, 1200);
  } catch {
    copyButton.textContent = '복사 실패';
    window.setTimeout(() => {
      copyButton.textContent = '힌트 복사';
    }, 1200);
  }
}

function renderRewrite(prompt, analysis) {
  const hasRewrite = Boolean(prompt && analysis.matches.length);

  rewrittenPrompt.textContent = hasRewrite
    ? rewritePrompt(analysis)
    : '위험 단어가 감지되면 대체 표현으로 바꾼 수정본이 여기에 표시됩니다.';
  copyRewriteButton.disabled = !hasRewrite;

  if (!hasRewrite) {
    copyRewriteButton.textContent = '수정본 복사';
  }
}

async function copyRewrite() {
  const analysis = analyzePrompt(promptInput.value);
  const rewritten = rewritePrompt(analysis);

  try {
    await navigator.clipboard.writeText(rewritten);
    copyRewriteButton.textContent = '복사됨';
    window.setTimeout(() => {
      copyRewriteButton.textContent = '수정본 복사';
    }, 1200);
  } catch {
    copyRewriteButton.textContent = '복사 실패';
    window.setTimeout(() => {
      copyRewriteButton.textContent = '수정본 복사';
    }, 1200);
  }
}
