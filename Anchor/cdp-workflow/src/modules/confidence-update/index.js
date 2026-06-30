/**
 * 置信度更新（第 4 步）
 *
 * 基于断点观测、反向恢复锚点候选，对 anchor-selection.json 中的 H_t 做贝叶斯式更新。
 */

const fs = require('fs');
const {
  computeLVal,
  computeLAnchor,
  computeLPred,
  mergeLikelihoodFactors,
  applyBreakpointMissPenalty,
  identifyLlmRejectedTags
} = require('./likelihood');
const { extractPriorWeights, applyLikelihoodUpdate } = require('./update');
const { resolveUpdateContext, inferPredLikelihoods } = require('./context');

/**
 * @param {string} filePath
 * @returns {object}
 */
function loadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`文件不存在: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * @param {object} anchorSelection
 * @param {object} options
 * @returns {object}
 */
function runConfidenceUpdate(anchorSelection, options = {}) {
  const distribution = anchorSelection.distribution || anchorSelection.anchors;
  const priors = extractPriorWeights(distribution);
  const tags = priors.map((p) => p.tag);

  const ctx = resolveUpdateContext({
    anchorSelection,
    reverseResult: options.reverseResult,
    graph: options.graph,
    taskDescription: options.taskDescription,
    keywords: options.keywords,
    turn: options.turn,
    filterTurn: options.filterTurn,
    fHit: options.fHit,
    valueMatches: options.valueMatches,
    anchorCandidate: options.anchorCandidate,
    scoresByTag: options.scoresByTag,
    observation: options.observation
  });

  const lVal = computeLVal(ctx.fHit, tags, ctx.valueMatches, {
    anchorCandidate: ctx.anchorCandidate
  });
  const lAnchor = computeLAnchor(ctx.anchorCandidate, ctx.scoresByTag, tags, {
    thetaAnchor: options.thetaAnchor
  });

  let predByTag = options.predLikelihoods || null;
  if (!predByTag && options.needToBreak) {
    const focusTags = (options.needToBreak.distribution?.focusFunctions || [])
      .map((f) => f.tag)
      .filter(Boolean);
    predByTag = inferPredLikelihoods(options.needToBreak, ctx.observation, focusTags, {
      fHit: ctx.fHit,
      scoresByTag: ctx.scoresByTag,
      anchorCandidate: ctx.anchorCandidate
    });
  }
  const lPred = computeLPred(tags, predByTag, {
    anchorCandidate: ctx.anchorCandidate
  });

  let lTotal = mergeLikelihoodFactors(lVal, lAnchor, lPred, tags);

  const breakpointMissed = Boolean(options.breakpointMissed);
  const breakpointFunctionTag = options.breakpointFunctionTag
    || options.needToBreak?.selected_breakpoint?.function_tag
    || null;
  if (breakpointMissed && breakpointFunctionTag) {
    lTotal = applyBreakpointMissPenalty(lTotal, breakpointFunctionTag);
  }

  const llmRejectedTags = identifyLlmRejectedTags(ctx.scoresByTag, tags, {
    thetaAnchor: options.thetaAnchor
  });

  const zeroTags = [];
  if (ctx.observationRelevance?.related === false && ctx.fHit) {
    zeroTags.push(ctx.fHit);
  }

  const { distribution: newDistribution, confidenceSum, uniformFallback } = applyLikelihoodUpdate(
    priors,
    lTotal,
    { zeroTags }
  );

  const turn = ctx.turn ?? anchorSelection.confidenceUpdate?.turn ?? null;

  const updateMeta = {
    turn,
    updatedAt: new Date().toISOString(),
    fHit: ctx.fHit,
    valueMatches: ctx.valueMatches,
    observationRelevance: ctx.observationRelevance,
    anchorCandidate: ctx.anchorCandidate,
    llmRejectedTags,
    zeroTags,
    uniformFallback,
    breakpointMissed,
    breakpointFunctionTag: breakpointMissed ? breakpointFunctionTag : null,
    factors: {
      L_val: lVal,
      L_anchor: lAnchor,
      L_pred: lPred,
      L_t: lTotal
    },
    priorConfidenceSum: priors.reduce((sum, p) => sum + p.H, 0),
    posteriorConfidenceSum: confidenceSum
  };

  return {
    anchorSelection: {
      ...anchorSelection,
      generatedAt: updateMeta.updatedAt,
      distribution: newDistribution,
      anchors: newDistribution,
      summary: {
        ...(anchorSelection.summary || {}),
        distributionCount: newDistribution.length,
        confidenceSum: Number(confidenceSum.toFixed(6))
      },
      confidenceUpdate: updateMeta
    },
    updateMeta,
    context: ctx
  };
}

/**
 * @param {object} options
 * @returns {object}
 */
function runConfidenceUpdateFromFiles(options) {
  const anchorSelection = options.anchorSelection
    || loadJson(options.anchorSelectionFile);

  const reverseResult = options.reverseResult
    || (options.reverseResultFile ? loadJson(options.reverseResultFile) : null);

  const graph = options.graph
    || (options.graphFile ? loadJson(options.graphFile) : null);

  const needToBreak = options.needToBreak
    || (options.needToBreakFile ? loadJson(options.needToBreakFile) : null);

  return runConfidenceUpdate(anchorSelection, {
    reverseResult,
    graph,
    needToBreak,
    taskDescription: options.taskDescription,
    keywords: options.keywords,
    turn: options.turn,
    filterTurn: options.filterTurn,
    fHit: options.fHit,
    valueMatches: options.valueMatches,
    anchorCandidate: options.anchorCandidate,
    scoresByTag: options.scoresByTag,
    observation: options.observation,
    predLikelihoods: options.predLikelihoods,
    thetaAnchor: options.thetaAnchor,
    breakpointMissed: options.breakpointMissed,
    breakpointFunctionTag: options.breakpointFunctionTag,
    filterTurn: options.filterTurn
  });
}

module.exports = {
  loadJson,
  runConfidenceUpdate,
  runConfidenceUpdateFromFiles,
  computeLVal,
  computeLAnchor,
  computeLPred,
  mergeLikelihoodFactors,
  identifyLlmRejectedTags,
  extractPriorWeights,
  applyLikelihoodUpdate,
  applyBreakpointMissPenalty,
  resolveUpdateContext
};
