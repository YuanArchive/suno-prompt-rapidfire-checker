export const RISK_LEVELS = {
  clean: {
    label: '깔끔함',
    rank: 0,
    tone: '현재 목록 기준으로는 위험 단어가 감지되지 않았습니다.',
  },
  caution: {
    label: '주의',
    rank: 1,
    tone: '일부 단어가 Suno에서 리듬을 과하게 쪼갤 가능성이 있습니다.',
  },
  high: {
    label: '높음',
    rank: 2,
    tone: '보컬찹이나 리듬 슬라이스가 튀어나올 가능성이 높아질 수 있습니다.',
  },
  'very-high': {
    label: '매우 높음',
    rank: 3,
    tone: '따발총처럼 잘게 튀는 패턴이 나올 확률을 크게 올릴 수 있습니다.',
  },
};

export const RISK_RULES = Object.freeze([
  {
    term: 'kawaii future bass',
    level: 'very-high',
    category: '장르명',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '밝은 신스와 잘게 잘린 보컬 샘플을 함께 부르는 경우가 많습니다.',
    suggestion: 'bright J-pop, sparkling synth pop, cute electronic pop',
  },
  {
    term: 'melodic dubstep',
    level: 'very-high',
    category: '장르명',
    pattern: '드롭 강조 / 보컬 슬라이스',
    reason: '드롭 구간에서 보컬 샘플과 리듬 분절이 강해지는 경향이 있습니다.',
    suggestion: 'cinematic electronic pop, emotional synth rock',
  },
  {
    term: 'bubblegum bass',
    level: 'very-high',
    category: '장르명',
    pattern: '보컬찹 / 과장된 신스',
    reason: '통통 튀는 보컬 처리와 빠른 편집감을 같이 유도할 수 있습니다.',
    suggestion: 'playful synth pop, colorful dance pop',
  },
  {
    term: 'future bounce',
    level: 'very-high',
    category: '장르명',
    pattern: '드롭 강조 / 리듬 슬라이스',
    reason: '드롭 중심 구조와 잘게 튀는 리듬을 강하게 부를 수 있습니다.',
    suggestion: 'upbeat electronic pop, clean dance pop',
  },
  {
    term: 'future bass',
    level: 'very-high',
    category: '장르명',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: 'Suno가 잘게 잘린 보컬 샘플과 울렁이는 드롭으로 해석하기 쉽습니다.',
    suggestion: 'bright electronic pop, uplifting synth pop',
  },
  {
    term: 'glitchcore',
    level: 'very-high',
    category: '장르명',
    pattern: '글리치 / 리듬 슬라이스',
    reason: '글리치 처리 자체를 요청하는 말이라 예상 밖 튐이 생기기 쉽습니다.',
    suggestion: 'crisp electronic pop, clean digital synth texture',
  },
  {
    term: 'hyperpop',
    level: 'very-high',
    category: '장르명',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '피치 보컬, 빠른 편집, 과격한 신스가 한꺼번에 따라올 수 있습니다.',
    suggestion: 'energetic synth pop, glossy electro pop',
  },
  {
    term: 'nightcore',
    level: 'very-high',
    category: '장르명',
    pattern: '피치 보컬 / 빠른 편집감',
    reason: '고음 피치와 속도감이 과하게 반영될 수 있습니다.',
    suggestion: 'fast J-pop, bright pop rock',
  },
  {
    term: 'vocal chops',
    level: 'very-high',
    category: '편집·효과',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '보컬을 잘게 자르라고 직접 지시하는 표현입니다.',
    suggestion: 'smooth backing vocal texture, clean ad-libs',
  },
  {
    term: 'vocal chop',
    level: 'very-high',
    category: '편집·효과',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '보컬을 잘게 자르라고 직접 지시하는 표현입니다.',
    suggestion: 'smooth backing vocal texture, clean ad-libs',
  },
  {
    term: 'chopped vocal',
    level: 'very-high',
    category: '편집·효과',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '끊긴 보컬 샘플이 전면에 나올 가능성이 높습니다.',
    suggestion: 'airy backing vocal, soft vocal layer',
  },
  {
    term: 'sliced vocal',
    level: 'very-high',
    category: '편집·효과',
    pattern: '보컬찹 / 리듬 슬라이스',
    reason: '보컬을 슬라이스하라는 말이라 따발총 패턴과 가까워집니다.',
    suggestion: 'gentle vocal texture, wide harmony layer',
  },
  {
    term: 'beat slicing',
    level: 'very-high',
    category: '편집·효과',
    pattern: '리듬 슬라이스',
    reason: '비트를 잘게 자르는 방향으로 해석될 수 있습니다.',
    suggestion: 'steady groove, tight rhythm section',
  },
  {
    term: 'stutter edits',
    level: 'very-high',
    category: '편집·효과',
    pattern: '스텟터 / 리듬 슬라이스',
    reason: '반복적으로 끊기는 편집 효과를 직접 요청하는 표현입니다.',
    suggestion: 'subtle rhythmic accents, clean transitions',
  },
  {
    term: '1/16',
    level: 'very-high',
    category: '편집·효과',
    pattern: '초고속 반복',
    reason: '짧은 박자 단위 반복이 과하게 적용될 수 있습니다.',
    suggestion: 'steady eighth-note pulse, moderate rhythmic motion',
  },
  {
    term: '1/32',
    level: 'very-high',
    category: '편집·효과',
    pattern: '초고속 반복',
    reason: '매우 짧은 박자 단위라 따발총처럼 들릴 확률이 커집니다.',
    suggestion: 'steady eighth-note pulse, moderate rhythmic motion',
  },
  {
    term: 'glitch pop',
    level: 'high',
    category: '장르명',
    pattern: '글리치 / 리듬 슬라이스',
    reason: '글리치 요소가 보컬이나 리듬에 섞여 튈 수 있습니다.',
    suggestion: 'clean synth pop, polished electronic pop',
  },
  {
    term: 'glitched vocal',
    level: 'high',
    category: '편집·효과',
    pattern: '글리치 보컬',
    reason: '보컬이 끊기거나 튀는 방향으로 처리될 수 있습니다.',
    suggestion: 'clear vocal lead, smooth vocal doubles',
  },
  {
    term: 'glitch vocal',
    level: 'high',
    category: '편집·효과',
    pattern: '글리치 보컬',
    reason: '보컬이 끊기거나 튀는 방향으로 처리될 수 있습니다.',
    suggestion: 'clear vocal lead, smooth vocal doubles',
  },
  {
    term: 'rapid edits',
    level: 'high',
    category: '편집·효과',
    pattern: '빠른 편집감',
    reason: '예상보다 촘촘한 편집 패턴을 만들 수 있습니다.',
    suggestion: 'natural transitions, steady arrangement',
  },
  {
    term: 'drop-focused',
    level: 'high',
    category: '편집·효과',
    pattern: '드롭 강조',
    reason: '드롭에서 샘플 반복이나 리듬 분절이 튀어나올 수 있습니다.',
    suggestion: 'chorus-focused, melodic lift, steady groove',
  },
  {
    term: 'cut-up',
    level: 'high',
    category: '편집·효과',
    pattern: '잘게 자른 편집',
    reason: '소리를 조각내는 방향으로 해석될 수 있습니다.',
    suggestion: 'clean arrangement, smooth edits',
  },
  {
    term: 'granular',
    level: 'high',
    category: '편집·효과',
    pattern: '입자감 / 분절감',
    reason: '소리를 작은 입자로 쪼개는 느낌이 강해질 수 있습니다.',
    suggestion: 'soft shimmer, airy synth texture',
  },
  {
    term: 'pitched vocal',
    level: 'high',
    category: '편집·효과',
    pattern: '피치 보컬',
    reason: '보컬 피치 효과가 과장되면 인공적인 튐으로 들릴 수 있습니다.',
    suggestion: 'natural vocal tone, bright lead vocal',
  },
  {
    term: 'vocal sample',
    level: 'high',
    category: '편집·효과',
    pattern: '보컬 샘플 반복',
    reason: '샘플 기반 반복으로 해석될 수 있습니다.',
    suggestion: 'backing vocal layer, vocal harmony',
  },
  {
    term: 'vocal loop',
    level: 'high',
    category: '편집·효과',
    pattern: '보컬 반복',
    reason: '짧은 보컬 반복이 전면에 나올 가능성이 있습니다.',
    suggestion: 'repeating melodic motif, backing harmony',
  },
  {
    term: 'vocal drop',
    level: 'high',
    category: '편집·효과',
    pattern: '드롭 보컬 샘플',
    reason: '드롭에서 보컬 샘플을 잘게 쓰는 방향으로 튈 수 있습니다.',
    suggestion: 'anthemic chorus lift, melodic hook',
  },
  {
    term: 'stutter',
    level: 'high',
    category: '편집·효과',
    pattern: '스텟터 / 끊김',
    reason: '소리를 반복적으로 끊는 효과를 부를 수 있습니다.',
    suggestion: 'subtle syncopation, clean rhythmic push',
  },
  {
    term: 'chopped',
    level: 'high',
    category: '편집·효과',
    pattern: '잘게 자른 편집',
    reason: '보컬이나 리듬이 잘린 느낌으로 나올 수 있습니다.',
    suggestion: 'smoothly edited, naturally flowing',
  },
  {
    term: 'chop',
    level: 'high',
    category: '편집·효과',
    pattern: '잘게 자른 편집',
    reason: '짧게 자른 샘플 처리로 해석될 수 있습니다.',
    suggestion: 'smooth transition, clean accent',
  },
]);

const wordCharacterPattern = /[\p{L}\p{N}_]/u;

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function analyzePrompt(prompt) {
  const text = String(prompt ?? '');
  const candidates = findCandidates(text);
  const matches = removeOverlaps(candidates).sort((a, b) => a.start - b.start);
  const severity = getHighestSeverity(matches);

  return {
    text,
    severity,
    severityLabel: RISK_LEVELS[severity].label,
    tone: RISK_LEVELS[severity].tone,
    matches,
    matchCount: matches.length,
  };
}

export function highlightPrompt(prompt, analysis = analyzePrompt(prompt)) {
  const text = String(prompt ?? '');

  if (!text) {
    return '';
  }

  let cursor = 0;
  let html = '';

  for (const match of analysis.matches) {
    html += escapeHtml(text.slice(cursor, match.start));
    html += `<mark class="risk-mark ${match.level}">${escapeHtml(text.slice(match.start, match.end))}</mark>`;
    cursor = match.end;
  }

  html += escapeHtml(text.slice(cursor));
  return html;
}

export function buildCopySummary(analysis) {
  if (!analysis.matches.length) {
    return [
      '감지된 위험 단어가 없습니다.',
      '그래도 Suno 결과는 매번 달라질 수 있으니, 튀는 패턴이 나오면 장르명보다 악기/무드/템포 중심으로 다시 적어보세요.',
    ].join('\n');
  }

  const uniqueMatches = dedupeMatches(analysis.matches);
  const lines = [
    `감지된 단어: ${uniqueMatches.map((match) => match.canonical).join(', ')}`,
    `전체 위험도: ${analysis.severityLabel}`,
    '',
    '바꿔쓰기 힌트:',
  ];

  for (const match of uniqueMatches) {
    lines.push(`- ${match.canonical}: ${match.suggestion}`);
  }

  lines.push('', '주의: 무조건 나오는 것은 아니고, 해당 패턴이 나올 확률이 높아지는 쪽으로 봐주세요.');
  return lines.join('\n');
}

function findCandidates(text) {
  const lowerText = text.toLocaleLowerCase('en-US');
  const rulesByLength = [...RISK_RULES].sort((a, b) => b.term.length - a.term.length);
  const candidates = [];

  for (const rule of rulesByLength) {
    const lowerTerm = rule.term.toLocaleLowerCase('en-US');
    let searchIndex = 0;

    while (searchIndex < lowerText.length) {
      const start = lowerText.indexOf(lowerTerm, searchIndex);

      if (start === -1) {
        break;
      }

      const end = start + lowerTerm.length;

      if (hasBoundary(text, start - 1) && hasBoundary(text, end)) {
        candidates.push({
          ...rule,
          canonical: rule.term,
          term: text.slice(start, end),
          start,
          end,
        });
      }

      searchIndex = start + lowerTerm.length;
    }
  }

  return candidates.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start;
    }

    return b.end - b.start - (a.end - a.start);
  });
}

function hasBoundary(text, index) {
  if (index < 0 || index >= text.length) {
    return true;
  }

  return !wordCharacterPattern.test(text[index]);
}

function removeOverlaps(candidates) {
  const accepted = [];

  for (const candidate of candidates) {
    const overlaps = accepted.some((match) => candidate.start < match.end && candidate.end > match.start);

    if (!overlaps) {
      accepted.push(candidate);
    }
  }

  return accepted;
}

function getHighestSeverity(matches) {
  return matches.reduce((highest, match) => {
    const currentRank = RISK_LEVELS[match.level].rank;
    const highestRank = RISK_LEVELS[highest].rank;
    return currentRank > highestRank ? match.level : highest;
  }, 'clean');
}

function dedupeMatches(matches) {
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

