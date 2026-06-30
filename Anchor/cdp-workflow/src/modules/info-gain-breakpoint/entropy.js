/**
 * 信息增益（Information Gain）相关熵计算
 */

const LOG2 = Math.log(2);

/**
 * @param {Array<{ tag: string, prob: number }>} distribution
 * @returns {number}
 */
function shannonEntropy(distribution) {
  let h = 0;
  for (const item of distribution) {
    const p = item.prob;
    if (p > 0) {
      h -= p * (Math.log(p) / LOG2);
    }
  }
  return h;
}

/**
 * @param {Array<{ tag: string, prob: number }>} distribution
 * @param {string[]} focusTags 焦点函数 tag 列表（顺序对应 f1,f2,f3）
 * @param {object} outcome 含 likelihoods: { f1?, f2?, f3? } 或 { [tag]: number }
 * @returns {Array<{ tag: string, prob: number }>}
 */
function computePosterior(distribution, focusTags, outcome) {
  const likelihoods = outcome.likelihoods || {};
  const focusSet = new Set(focusTags);

  const unnormalized = distribution.map((item) => {
    const focusIdx = focusTags.indexOf(item.tag);
    let likelihood = 1;
    if (focusIdx >= 0) {
      const key = `f${focusIdx + 1}`;
      likelihood = likelihoods[key] ?? likelihoods[item.tag] ?? 1;
    } else if (Object.prototype.hasOwnProperty.call(likelihoods, item.tag)) {
      likelihood = likelihoods[item.tag];
    }
    likelihood = Math.max(Number(likelihood) || 0, 1e-12);
    return { tag: item.tag, prob: item.prob * likelihood };
  });

  const total = unnormalized.reduce((sum, item) => sum + item.prob, 0);
  if (total <= 0) {
    const uniform = 1 / distribution.length;
    return distribution.map((item) => ({ tag: item.tag, prob: uniform }));
  }

  return unnormalized.map((item) => ({
    tag: item.tag,
    prob: item.prob / total
  }));
}

/**
 * @param {Array<{ tag: string, prob: number }>} distribution
 * @param {string[]} focusTags
 * @param {{ predicted_outcomes: Array<{ outcome_desc: string, prob: number, likelihoods?: object }> }} candidate
 * @returns {number}
 */
function computeInformationGain(distribution, focusTags, candidate) {
  const baseEntropy = shannonEntropy(distribution);
  const outcomes = candidate.predicted_outcomes || [];
  if (!outcomes.length) {
    return 0;
  }

  let conditionalEntropy = 0;
  for (const outcome of outcomes) {
    const q = Number(outcome.prob) || 0;
    if (q <= 0) continue;
    const posterior = computePosterior(distribution, focusTags, outcome);
    conditionalEntropy += q * shannonEntropy(posterior);
  }

  return Math.max(0, baseEntropy - conditionalEntropy);
}

module.exports = {
  shannonEntropy,
  computePosterior,
  computeInformationGain
};
