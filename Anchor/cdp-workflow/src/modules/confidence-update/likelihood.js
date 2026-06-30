/**
 * 置信度更新：似然因子 L_val、L_anchor、L_pred
 * @see 置信度更新.md §6.1
 */

const L_VAL_HIT_MATCH = 2.5;
const L_VAL_HIT_MISMATCH = 0.4;
const L_VAL_OTHER = 1.0;

const L_ANCHOR_HIT_BASE = 8.0;
const L_ANCHOR_OTHER = 0.5;
const L_ANCHOR_REJECT = 0.1;
/** TC3 断点未命中时，对断点所在函数的置信度惩罚因子 */
const L_BREAKPOINT_MISS = 0.1;
const L_NEUTRAL = 1.0;
const DEFAULT_THETA_ANCHOR = 0.7;

const LIKELIHOOD_MIN = 0.1;
const LIKELIHOOD_MAX = 10;

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * 值匹配因子 L_val
 * @param {string|null} fHit 断点所在函数（观测到变量值的函数）
 * @param {string[]} tags 候选函数 tag 列表 F_C
 * @param {boolean} valueMatches 观测值是否包含任务关键词字段（与 TVN 一致）
 * @param {object} [options]
 * @param {string|null} [options.anchorCandidate] f*；与 fHit 不同时 fHit 仅得中性因子（嵌套 helper 断点）
 * @returns {Record<string, number>}
 */
function computeLVal(fHit, tags, valueMatches, options = {}) {
  const anchorCandidate = options.anchorCandidate || null;
  const factors = {};
  for (const tag of tags) {
    if (!fHit) {
      factors[tag] = L_NEUTRAL;
    } else if (valueMatches) {
      if (tag === fHit) {
        factors[tag] = (anchorCandidate && fHit !== anchorCandidate)
          ? L_VAL_OTHER
          : L_VAL_HIT_MATCH;
      } else {
        factors[tag] = L_VAL_OTHER;
      }
    } else {
      factors[tag] = tag === fHit ? L_VAL_HIT_MISMATCH : L_VAL_OTHER;
    }
  }
  return factors;
}

/**
 * 锚点候选因子 L_anchor
 * @param {string|null} anchorCandidate f*
 * @param {Map<string, number>|Record<string, number>} scoresByTag LLM 锚点 score
 * @param {string[]} tags
 * @param {object} [options]
 * @param {number} [options.thetaAnchor=0.7] LLM 判定为锚点的分数阈值
 * @returns {Record<string, number>}
 */
function computeLAnchor(anchorCandidate, scoresByTag, tags, options = {}) {
  const thetaAnchor = options.thetaAnchor ?? DEFAULT_THETA_ANCHOR;
  const scoreMap = scoresByTag instanceof Map
    ? scoresByTag
    : new Map(Object.entries(scoresByTag || {}));

  if (!scoreMap.size) {
    return Object.fromEntries(tags.map((tag) => [tag, L_NEUTRAL]));
  }

  return Object.fromEntries(
    tags.map((tag) => {
      if (anchorCandidate && tag === anchorCandidate) {
        const anchorScore = Number(scoreMap.get(anchorCandidate)) || 0;
        return [tag, L_ANCHOR_HIT_BASE + anchorScore];
      }

      if (!scoreMap.has(tag)) {
        return [tag, anchorCandidate ? L_ANCHOR_OTHER : L_NEUTRAL];
      }

      const score = Number(scoreMap.get(tag)) || 0;
      if (score < thetaAnchor) {
        return [tag, L_ANCHOR_REJECT];
      }

      return [tag, L_ANCHOR_OTHER];
    })
  );
}

/**
 * TC2 预测似然因子 L_pred（无预测时全为 1）
 * @param {string[]} tags
 * @param {Record<string, number>|Map<string, number>|null|undefined} predByTag
 * @param {object} [options]
 * @param {string|null} [options.anchorCandidate] f* 不受 TC2 预测惩罚，恒为 1
 * @returns {Record<string, number>}
 */
function computeLPred(tags, predByTag, options = {}) {
  const anchorCandidate = options.anchorCandidate || null;
  if (!predByTag) {
    return Object.fromEntries(tags.map((tag) => [tag, L_NEUTRAL]));
  }
  const map = predByTag instanceof Map ? predByTag : new Map(Object.entries(predByTag));
  return Object.fromEntries(
    tags.map((tag) => {
      if (anchorCandidate && tag === anchorCandidate) {
        return [tag, L_NEUTRAL];
      }
      const pred = Number(map.get(tag));
      return [tag, pred > 0 ? pred : L_NEUTRAL];
    })
  );
}

/**
 * L_t(f) = clamp(L_val * L_anchor * L_pred, 0.1, 10)
 * @param {Record<string, number>} lVal
 * @param {Record<string, number>} lAnchor
 * @param {Record<string, number>} lPred
 * @param {string[]} tags
 * @returns {Record<string, number>}
 */
function mergeLikelihoodFactors(lVal, lAnchor, lPred, tags) {
  const merged = {};
  for (const tag of tags) {
    const raw = (lVal[tag] ?? L_NEUTRAL) * (lAnchor[tag] ?? L_NEUTRAL) * (lPred[tag] ?? L_NEUTRAL);
    if (raw <= 0) {
      merged[tag] = 0;
    } else {
      merged[tag] = clamp(raw, LIKELIHOOD_MIN, LIKELIHOOD_MAX);
    }
  }
  return merged;
}

/**
 * LLM 已评分且 score < theta 的函数（本轮施加 L_anchor 惩罚，不永久清零）
 * @param {Map<string, number>|Record<string, number>} scoresByTag
 * @param {string[]} tags
 * @param {object} [options]
 * @param {number} [options.thetaAnchor=0.7]
 * @returns {string[]}
 */
/**
 * TC3 断点未命中：对断点所在函数施加 L_t × 0.1 惩罚
 * @param {Record<string, number>} lTotal
 * @param {string|null|undefined} breakpointFunctionTag
 * @returns {Record<string, number>}
 */
function applyBreakpointMissPenalty(lTotal, breakpointFunctionTag) {
  if (!breakpointFunctionTag || lTotal[breakpointFunctionTag] == null) {
    return lTotal;
  }
  const penalized = { ...lTotal };
  const raw = penalized[breakpointFunctionTag] * L_BREAKPOINT_MISS;
  penalized[breakpointFunctionTag] = raw <= 0
    ? 0
    : clamp(raw, LIKELIHOOD_MIN, LIKELIHOOD_MAX);
  return penalized;
}

function identifyLlmRejectedTags(scoresByTag, tags, options = {}) {
  const thetaAnchor = options.thetaAnchor ?? DEFAULT_THETA_ANCHOR;
  const scoreMap = scoresByTag instanceof Map
    ? scoresByTag
    : new Map(Object.entries(scoresByTag || {}));

  if (!scoreMap.size) {
    return [];
  }

  return tags.filter((tag) => {
    if (!scoreMap.has(tag)) return false;
    return (Number(scoreMap.get(tag)) || 0) < thetaAnchor;
  });
}

module.exports = {
  L_VAL_HIT_MATCH,
  L_VAL_HIT_MISMATCH,
  L_VAL_OTHER,
  L_ANCHOR_HIT_BASE,
  L_ANCHOR_OTHER,
  L_ANCHOR_REJECT,
  L_BREAKPOINT_MISS,
  L_NEUTRAL,
  DEFAULT_THETA_ANCHOR,
  LIKELIHOOD_MIN,
  LIKELIHOOD_MAX,
  clamp,
  computeLVal,
  computeLAnchor,
  computeLPred,
  mergeLikelihoodFactors,
  applyBreakpointMissPenalty,
  identifyLlmRejectedTags
};
