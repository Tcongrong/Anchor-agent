/**
 * 置信度更新：H_new 归一化与 anchor-selection 写回
 * @see 置信度更新.md §6.2–6.3
 */

/**
 * @param {Array<{ tag?: string, func_id?: string, confidence?: number, prob?: number }>} distribution
 * @returns {Array<{ tag: string, H: number, item: object }>}
 */
function extractPriorWeights(distribution) {
  if (!Array.isArray(distribution) || !distribution.length) {
    throw new Error('anchor-selection 缺少 distribution，无法读取 H_t');
  }

  return distribution.map((item) => {
    const tag = item.tag || item.func_id;
    if (!tag) {
      throw new Error('distribution 项缺少 tag/func_id');
    }
    const H = item.confidence ?? item.prob;
    if (H == null || !Number.isFinite(H)) {
      throw new Error(`函数 ${tag} 缺少 confidence/prob 先验权重`);
    }
    return { tag, H, item };
  });
}

/**
 * @param {number[]} weights
 * @returns {number[]}
 */
function normalizeWeights(weights) {
  const total = weights.reduce((sum, w) => sum + w, 0);
  if (total <= 0) {
    const uniform = weights.length ? 1 / weights.length : 0;
    return weights.map(() => uniform);
  }
  return weights.map((w) => w / total);
}

/**
 * @param {Array<{ tag: string, H: number, item: object }>} priors
 * @param {Record<string, number>} likelihoodByTag L_t(f)
 * @param {object} [options]
 * @param {string[]} [options.zeroTags] 置信度强制置 0 的 tag（如 LLM 判定非锚点）
 * @returns {{ distribution: object[], confidenceSum: number, uniformFallback: boolean }}
 */
function applyLikelihoodUpdate(priors, likelihoodByTag, options = {}) {
  const zeroSet = new Set(options.zeroTags || []);
  const rawWeights = priors.map(({ tag, H }) => {
    if (zeroSet.has(tag) || (likelihoodByTag[tag] ?? 1) === 0) {
      return 0;
    }
    return H * (likelihoodByTag[tag] ?? 1);
  });

  const total = rawWeights.reduce((sum, w) => sum + w, 0);
  let normalized;
  let uniformFallback = false;

  if (total <= 0) {
    const eligibleCount = priors.filter(({ tag }) => !zeroSet.has(tag)).length;
    if (eligibleCount <= 0) {
      normalized = priors.map(() => 0);
    } else {
      uniformFallback = true;
      normalized = priors.map(({ tag }) => (zeroSet.has(tag) ? 0 : 1 / eligibleCount));
    }
  } else {
    normalized = rawWeights.map((w) => w / total);
  }

  const updated = priors.map(({ tag, item }, idx) => {
    const confidence = normalized[idx];
    return {
      ...item,
      tag: item.tag || tag,
      confidence,
      prob: confidence,
      score: Number((confidence * 100).toFixed(2))
    };
  });

  updated.sort(
    (a, b) => b.confidence - a.confidence
      || (a.functionName || a.tag).localeCompare(b.functionName || b.tag)
  );

  updated.forEach((item, idx) => {
    item.rank = idx + 1;
  });

  const confidenceSum = updated.reduce((acc, item) => acc + item.confidence, 0);

  return {
    distribution: updated,
    confidenceSum,
    uniformFallback
  };
}

module.exports = {
  extractPriorWeights,
  normalizeWeights,
  applyLikelihoodUpdate
};
