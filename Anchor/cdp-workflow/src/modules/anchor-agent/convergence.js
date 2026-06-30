/**
 * 主循环收敛检查（整体 agent 流程 §3.5）
 */

const DEFAULT_THETA_CONF = 0.9;
const DEFAULT_THETA_ANCHOR = 0.7;
const TOP_P0_PERCENTILE = 0.7;

/**
 * @param {Array<{ tag: string, confidence?: number, prob?: number, structuralPrior?: { prob: number } }>} distribution
 * @returns {{ tag: string, confidence: number, item: object }|null}
 */
function findTopFunction(distribution) {
  if (!distribution?.length) return null;
  const sorted = [...distribution].sort(
    (a, b) => (b.confidence ?? b.prob ?? 0) - (a.confidence ?? a.prob ?? 0)
      || (a.tag || '').localeCompare(b.tag || '')
  );
  const item = sorted[0];
  return {
    tag: item.tag,
    confidence: item.confidence ?? item.prob ?? 0,
    item
  };
}

/**
 * @param {Array<{ structuralPrior?: { prob: number } }>} distribution
 * @param {string} tag
 * @returns {boolean}
 */
function passesStructuralPriorAux(distribution, tag) {
  const probs = distribution
    .map((d) => d.structuralPrior?.prob)
    .filter((p) => typeof p === 'number' && Number.isFinite(p));

  if (!probs.length) return false;

  const entry = distribution.find((d) => d.tag === tag);
  const p0 = entry?.structuralPrior?.prob;
  if (p0 == null) return false;

  const sorted = [...probs].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const thresholdIdx = Math.floor(sorted.length * TOP_P0_PERCENTILE);
  const topThreshold = sorted[Math.min(thresholdIdx, sorted.length - 1)];

  return p0 >= median || p0 >= topThreshold;
}

/**
 * @param {object} graph 因果图 G_t
 * @param {string} fromTag
 * @param {string[]} sinkTags
 * @returns {boolean}
 */
function canReachSinkInCausalGraph(graph, fromTag, sinkTags) {
  if (!graph?.nodes?.length || !fromTag || !sinkTags?.length) {
    return false;
  }

  const nodeTags = new Set(
    graph.nodes
      .filter((n) => n.type === 'function')
      .map((n) => n.tag || n.id)
  );

  if (!nodeTags.has(fromTag)) {
    return false;
  }

  const sinkSet = new Set(sinkTags.filter((t) => nodeTags.has(t)));
  if (sinkSet.has(fromTag)) {
    return true;
  }

  const adj = new Map();
  for (const edge of graph.edges || []) {
    if (!adj.has(edge.from)) adj.set(edge.from, []);
    if (!adj.has(edge.to)) adj.set(edge.to, []);
    adj.get(edge.from).push(edge.to);
    adj.get(edge.to).push(edge.from);
  }

  const queue = [fromTag];
  const visited = new Set([fromTag]);

  while (queue.length) {
    const cur = queue.shift();
    if (sinkSet.has(cur)) return true;
    for (const next of adj.get(cur) || []) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }

  return false;
}

/**
 * @param {object} graph
 * @param {string} tag
 * @param {string[]} sinkTags
 * @returns {boolean}
 */
function onCausalPathToSink(graph, tag, sinkTags) {
  if (canReachSinkInCausalGraph(graph, tag, sinkTags)) {
    return true;
  }

  for (const obs of graph.observations || []) {
    const chain = obs.callChain || [];
    if (!chain.includes(tag)) continue;
    if (sinkTags.some((sink) => chain.includes(sink))) {
      return true;
    }
  }

  for (const chain of graph.callChains || []) {
    if (chain.includes(tag) && sinkTags.some((sink) => chain.includes(sink))) {
      return true;
    }
  }

  return false;
}

/**
 * @param {string} tag
 * @param {object|null} anchorHistory
 * @param {number} thetaAnchor
 * @returns {boolean}
 */
function passedLlmTargetSpecificCheck(tag, anchorHistory, thetaAnchor = DEFAULT_THETA_ANCHOR) {
  const turns = anchorHistory?.turns || [];
  for (const turn of turns) {
    for (const entry of turn.scores || []) {
      if (entry.tag !== tag) continue;
      if (Number(entry.score) >= thetaAnchor) {
        return true;
      }
    }
  }
  return false;
}

/**
 * @param {object} params
 * @returns {object}
 */
function checkConvergence(params) {
  const {
    anchorSelection,
    causalGraph,
    reverseResult,
    anchorHistory,
    turn,
    maxIterations,
    thetaConf = DEFAULT_THETA_CONF,
    thetaAnchor = DEFAULT_THETA_ANCHOR
  } = params;

  const distribution = anchorSelection?.distribution || anchorSelection?.anchors || [];
  const top = findTopFunction(distribution);
  const sinkTags = anchorSelection?.structuralPrior?.sinkTags || [];

  if (!top) {
    return {
      converged: false,
      reason: 'empty_distribution',
      turn,
      maxIterations,
      reachedMaxIterations: turn >= maxIterations
    };
  }

  const confidenceOk = top.confidence >= thetaConf;
  const llmValidated = reverseResult?.anchorCandidate === top.tag
    || passedLlmTargetSpecificCheck(top.tag, anchorHistory || reverseResult?.anchorHistory, thetaAnchor);

  const p0Aux = passesStructuralPriorAux(distribution, top.tag);
  const causalAux = onCausalPathToSink(causalGraph, top.tag, sinkTags);
  const redundancyOk = llmValidated && (p0Aux || causalAux);

  const converged = confidenceOk && redundancyOk;
  const reachedMaxIterations = turn >= maxIterations;

  let reason = 'continue';
  if (converged) {
    reason = 'converged';
  } else if (reachedMaxIterations) {
    reason = 'max_iterations';
  }

  return {
    converged,
    reason,
    turn,
    maxIterations,
    reachedMaxIterations,
    topFunction: {
      tag: top.tag,
      functionName: top.item.functionName,
      confidence: top.confidence
    },
    checks: {
      confidenceOk,
      confidenceThreshold: thetaConf,
      llmValidated,
      redundancyOk,
      p0Aux,
      causalAux,
      sinkTags
    }
  };
}

module.exports = {
  DEFAULT_THETA_CONF,
  DEFAULT_THETA_ANCHOR,
  TOP_P0_PERCENTILE,
  findTopFunction,
  passesStructuralPriorAux,
  canReachSinkInCausalGraph,
  onCausalPathToSink,
  passedLlmTargetSpecificCheck,
  checkConvergence
};
