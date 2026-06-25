import test from 'node:test';
import assert from 'node:assert/strict';

import {
  analyzePrompt,
  buildCopySummary,
  escapeHtml,
  highlightPrompt,
} from './rules.js';

test('detects risky Suno prompt terms case-insensitively', () => {
  const result = analyzePrompt('Bright FUTURE BASS with vocal chops and a clean chorus.');

  assert.equal(result.severity, 'very-high');
  assert.deepEqual(
    result.matches.map((match) => match.term),
    ['FUTURE BASS', 'vocal chops'],
  );
  assert.equal(result.matches[0].category, '장르명');
  assert.equal(result.matches[1].pattern, '보컬찹 / 리듬 슬라이스');
});

test('prefers longer overlapping terms over shorter partial matches', () => {
  const result = analyzePrompt('Add sliced vocal, vocal chop, and vocal chops.');

  assert.deepEqual(
    result.matches.map((match) => match.canonical),
    ['sliced vocal', 'vocal chop', 'vocal chops'],
  );
});

test('does not match risky terms inside unrelated longer words', () => {
  const result = analyzePrompt('This song mentions chopsticks, not a chop effect.');

  assert.deepEqual(
    result.matches.map((match) => match.canonical),
    ['chop'],
  );
});

test('escapes HTML before rendering highlighted preview', () => {
  assert.equal(escapeHtml('<script>'), '&lt;script&gt;');

  const html = highlightPrompt('<script>future bass</script>');

  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /<mark class="risk-mark very-high">future bass<\/mark>/);
  assert.match(html, /&lt;\/script&gt;/);
});

test('builds a Korean copy summary for detected risk terms', () => {
  const risky = buildCopySummary(analyzePrompt('hyperpop with stutter edits'));

  assert.match(risky, /감지된 단어/);
  assert.match(risky, /hyperpop/);
  assert.match(risky, /stutter edits/);

  const clean = buildCopySummary(analyzePrompt('warm acoustic pop with steady drums'));

  assert.match(clean, /감지된 위험 단어가 없습니다/);
});

