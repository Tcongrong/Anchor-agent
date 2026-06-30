/**
 * 锚点评分反思：检测 LLM 孤立满分（仅一个 1.0，其余约 ≤0.4）并拒绝采纳
 */

const { DEFAULT_THETA } = require('./llm');

const PERFECT_SCORE_THRESHOLD = 1;
/** 与其余候选对比：约 ≤0.4 视为「低分」 */
const DEFAULT_ISOLATED_OTHERS_MAX = 0.4;
/** 「大约等于 othersMax」的容差 */
const ISOLATED_OTHERS_EPSILON = 0.05;

/**
 * @param {number} score
 * @returns {boolean}
 */
function isPerfectAnchorScore(score) {
  return Number(score) >= PERFECT_SCORE_THRESHOLD;
}

/**
 * @param {number} score
 * @param {number} othersMax
 * @returns {boolean}
 */
function isLowRelativeScore(score, othersMax = DEFAULT_ISOLATED_OTHERS_MAX) {
  return (Number(score) || 0) <= othersMax + ISOLATED_OTHERS_EPSILON;
}

/**
 * 是否存在「仅一个满分、其余约 ≤ othersMax（默认 0.4）」的评分模式
 * @param {object[]} scores
 * @param {number} [othersMax=0.4]
 * @returns {{ isolated: boolean, perfectTag?: string, perfectScore?: number }}
 */
function detectIsolatedPerfectScore(scores, othersMax = DEFAULT_ISOLATED_OTHERS_MAX) {
  if (!Array.isArray(scores) || scores.length < 2) {
    return { isolated: false };
  }

  const perfectEntries = scores.filter((entry) => isPerfectAnchorScore(entry?.score));
  if (perfectEntries.length !== 1) {
    return { isolated: false };
  }

  const others = scores.filter((entry) => !isPerfectAnchorScore(entry?.score));
  if (!others.length) {
    return { isolated: false };
  }

  const allOthersLow = others.every((entry) => isLowRelativeScore(entry.score, othersMax));
  if (!allOthersLow) {
    return { isolated: false };
  }

  const perfect = perfectEntries[0];
  return {
    isolated: true,
    perfectTag: perfect.tag,
    perfectScore: Number(perfect.score)
  };
}

/**
 * 对锚点选择结果做反思；若触发孤立满分则取消 f* 并将该候选有效分降至阈值以下
 * @param {object[]} candidateScores
 * @param {{ anchorCandidate: string|null, best: object|null }} selection
 * @param {object} [options]
 * @param {number} [options.theta=0.7] 锚点采纳阈值，用于下调有效分
 * @param {number} [options.othersMax=0.4] 与其余候选对比的低分上限（约 ≤0.4）
 * @param {boolean} [options.disableIsolatedPerfectScore=false] 为 true 时跳过孤立满分反思
 * @returns {{
 *   candidateScores: object[],
 *   anchorCandidate: string|null,
 *   best: object|null,
 *   reflection: object|null
 * }}
 */
function applyAnchorReflection(candidateScores, selection, options = {}) {
  if (options.disableIsolatedPerfectScore) {
    return {
      candidateScores,
      anchorCandidate: selection.anchorCandidate,
      best: selection.best,
      reflection: null
    };
  }

  const thetaAnchor = options.theta ?? DEFAULT_THETA;
  const othersMax = options.othersMax ?? DEFAULT_ISOLATED_OTHERS_MAX;
  const detection = detectIsolatedPerfectScore(candidateScores, othersMax);

  if (!detection.isolated) {
    return {
      candidateScores,
      anchorCandidate: selection.anchorCandidate,
      best: selection.best,
      reflection: null
    };
  }

  const { perfectTag, perfectScore } = detection;
  const rejectedEffectiveScore = Math.max(0, thetaAnchor - 0.01);

  const adjustedScores = candidateScores.map((entry) => {
    if (entry.tag !== perfectTag) {
      return entry;
    }
    return {
      ...entry,
      originalScore: perfectScore,
      score: Number(rejectedEffectiveScore.toFixed(3)),
      reason: `${entry.reason || ''} [反思: 孤立满分，不采纳为锚点]`.trim()
    };
  });

  const adjustedBest = adjustedScores.find((entry) => entry.tag === perfectTag) || selection.best;

  return {
    candidateScores: adjustedScores,
    anchorCandidate: null,
    best: adjustedBest,
    reflection: {
      rejected: true,
      rejectedTag: perfectTag,
      originalScore: perfectScore,
      effectiveScore: rejectedEffectiveScore,
      reason: '仅一个候选得满分 1.0，其余约 ≤0.4，疑似 LLM 过度自信，不采纳为锚点',
      othersMax,
      thetaAnchor
    }
  };
}

module.exports = {
  PERFECT_SCORE_THRESHOLD,
  DEFAULT_ISOLATED_OTHERS_MAX,
  ISOLATED_OTHERS_EPSILON,
  isPerfectAnchorScore,
  isLowRelativeScore,
  detectIsolatedPerfectScore,
  applyAnchorReflection
};
