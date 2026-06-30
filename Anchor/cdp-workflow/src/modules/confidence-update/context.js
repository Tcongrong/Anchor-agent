/**
 * 从反向恢复结果、因果图等解析置信度更新上下文
 */

const { getCurrentTurnObservation } = require('../reverse-anchor-recovery/tvn');

/**
 * @param {object|null|undefined} reverseResult
 * @returns {Map<string, number>}
 */
function scoresMapFromReverseResult(reverseResult) {
  const map = new Map();
  for (const entry of reverseResult?.candidateScores || []) {
    if (entry?.tag != null) {
      map.set(entry.tag, Number(entry.score) || 0);
    }
  }
  return map;
}

/**
 * @param {object} options
 * @returns {{
 *   fHit: string|null,
 *   valueMatches: boolean,
 *   observationRelevance: object|null,
 *   anchorCandidate: string|null,
 *   scoresByTag: Map<string, number>,
 *   turn: number|null,
 *   observation: object|null
 * }}
 */
function resolveUpdateContext(options) {
  const reverseResult = options.reverseResult;
  const graph = options.graph;
  const taskDescription = options.taskDescription
    || reverseResult?.taskDescription
    || options.anchorSelection?.taskDescription;

  let observation;
  if (options.observation !== undefined) {
    observation = options.observation ?? null;
  } else {
    observation = reverseResult?.observation ?? null;
    if (!observation && graph) {
      observation = getCurrentTurnObservation(graph, {
        turn: options.turn ?? reverseResult?.turn ?? graph.turn,
        filterTurn: options.filterTurn
      });
    }
  }

  let fHit;
  if (options.fHit !== undefined) {
    fHit = options.fHit ?? null;
  } else if (observation?.functionTag) {
    fHit = observation.functionTag;
  } else {
    fHit = null;
  }

  let valueMatches = options.valueMatches;
  let observationRelevance = reverseResult?.observationRelevance ?? options.observationRelevance ?? null;

  if (valueMatches === undefined && observationRelevance) {
    valueMatches = observationRelevance.related === true;
  }

  if (valueMatches === undefined && reverseResult?.observationRelevance) {
    valueMatches = reverseResult.observationRelevance.related === true;
  }

  if (valueMatches === undefined) {
    valueMatches = true;
  }

  const anchorCandidate = options.anchorCandidate !== undefined
    ? options.anchorCandidate
    : (reverseResult?.anchorCandidate ?? null);

  const scoresByTag = options.scoresByTag instanceof Map
    ? options.scoresByTag
    : scoresMapFromReverseResult(reverseResult);

  return {
    fHit: fHit || null,
    valueMatches: Boolean(valueMatches),
    observationRelevance,
    anchorCandidate: anchorCandidate || null,
    scoresByTag,
    turn: options.turn ?? reverseResult?.turn ?? graph?.turn ?? null,
    observation
  };
}

/**
 * @param {object} likelihoods
 * @param {string} tag
 * @param {number} idx focusTags 中的下标
 * @returns {number|null}
 */
function likelihoodForFocusTag(likelihoods, tag, idx) {
  const key = `f${idx + 1}`;
  if (likelihoods[key] != null) {
    return Number(likelihoods[key]) || 1;
  }
  if (likelihoods[tag] != null) {
    return Number(likelihoods[tag]) || 1;
  }
  return null;
}

/**
 * 选出应施加 TC2 预测似然 L_pred 的 tag：实际命中断点的焦点函数，或有反向恢复 LLM 评分的函数
 * @param {string|null} fHit
 * @param {string[]} focusTags
 * @param {Map<string, number>|Record<string, number>|null|undefined} scoresByTag
 * @returns {Set<string>}
 */
function selectPredLikelihoodTargets(fHit, focusTags, scoresByTag) {
  const targets = new Set();
  const focusSet = new Set(focusTags || []);

  if (fHit && focusSet.has(fHit)) {
    targets.add(fHit);
  }

  const scoreMap = scoresByTag instanceof Map
    ? scoresByTag
    : new Map(Object.entries(scoresByTag || {}));
  for (const tag of scoreMap.keys()) {
    targets.add(tag);
  }

  return targets;
}

/**
 * 从 TC2 need_to_break 的预测结果推断 L_pred（可选）
 *
 * 仅对以下函数返回非默认预测似然：
 * - 本轮 f_hit 且属于 TC2 焦点 Top-K；
 * - 反向恢复中已有 LLM 锚点评分的函数（且能在焦点映射中取到 f_i 似然）。
 *
 * 其余候选在 computeLPred 中保持 L_pred=1。
 *
 * @param {object|null} needToBreak
 * @param {object} observation
 * @param {string[]} focusTags f1,f2,f3 对应 tag
 * @param {object} [options]
 * @param {string|null} [options.fHit]
 * @param {Map<string, number>|Record<string, number>} [options.scoresByTag]
 * @param {string|null} [options.anchorCandidate] f* 不参与 TC2 预测似然
 * @returns {Record<string, number>|null}
 */
function inferPredLikelihoods(needToBreak, observation, focusTags, options = {}) {
  const selected = needToBreak?.selected_breakpoint;
  const candidates = needToBreak?.llmResponse?.candidates || [];
  if (!selected || !candidates.length || !focusTags?.length) {
    return null;
  }

  const match = candidates.find(
    (c) => c.var_name === selected.var_name
      && (c.function_tag === selected.function_tag || !selected.function_tag)
  );
  if (!match?.predicted_outcomes?.length) {
    return null;
  }

  const value = observation?.value;
  const valueStr = value == null ? '' : JSON.stringify(value);
  let bestOutcome = match.predicted_outcomes[0];
  let bestScore = -1;

  for (const outcome of match.predicted_outcomes) {
    const desc = String(outcome.outcome_desc || '').toLowerCase();
    let score = 0;
    if (value == null && (desc.includes('null') || desc.includes('空'))) score += 2;
    if (value != null && (desc.includes('非空') || desc.includes('字符串') || desc.includes('token'))) score += 1;
    if (typeof value === 'object' && value !== null && desc.includes('对象')) score += 2;
    if (valueStr && desc.split(/\W+/).some((w) => w.length > 3 && valueStr.includes(w))) score += 1;
    if (score > bestScore) {
      bestScore = score;
      bestOutcome = outcome;
    }
  }

  const likelihoods = bestOutcome?.likelihoods;
  if (!likelihoods || typeof likelihoods !== 'object') {
    return null;
  }

  const focusIndex = new Map(focusTags.map((tag, idx) => [tag, idx]));
  const targets = selectPredLikelihoodTargets(
    options.fHit ?? null,
    focusTags,
    options.scoresByTag
  );
  if (options.anchorCandidate) {
    targets.delete(options.anchorCandidate);
  }

  const pred = {};
  for (const tag of targets) {
    const idx = focusIndex.get(tag);
    if (idx == null) {
      continue;
    }
    const factor = likelihoodForFocusTag(likelihoods, tag, idx);
    if (factor != null) {
      pred[tag] = factor;
    }
  }

  return Object.keys(pred).length ? pred : null;
}

module.exports = {
  scoresMapFromReverseResult,
  resolveUpdateContext,
  likelihoodForFocusTag,
  selectPredLikelihoodTargets,
  inferPredLikelihoods
};
