/**
 * Agent 终止输出与证据链
 */

const fs = require('fs');
const { onCausalPathToSink } = require('./convergence');

/**
 * @param {string} tag
 * @returns {string}
 */
function extractNameFromTag(tag) {
  const m = String(tag).match(/::([^@]+)@/);
  return m ? m[1] : tag;
}

/**
 * @param {object} graph
 * @param {string} fromTag
 * @param {string[]} sinkTags
 * @returns {string[]|null}
 */
function findCausalPathDescription(graph, fromTag, sinkTags) {
  if (!graph?.edges?.length || !fromTag) return null;

  const adj = new Map();
  for (const edge of graph.edges) {
    if (!adj.has(edge.from)) adj.set(edge.from, []);
    adj.get(edge.from).push({ to: edge.to, kind: edge.kind });
  }

  const sinkSet = new Set(sinkTags || []);
  const queue = [{ tag: fromTag, path: [fromTag] }];
  const visited = new Set([fromTag]);

  while (queue.length) {
    const { tag, path } = queue.shift();
    if (sinkSet.has(tag) && tag !== fromTag) {
      return path.map((t) => extractNameFromTag(t));
    }
    for (const { to } of adj.get(tag) || []) {
      if (!visited.has(to)) {
        visited.add(to);
        queue.push({ tag: to, path: [...path, to] });
      }
    }
  }

  for (const obs of graph.observations || []) {
    const chain = obs.callChain || [];
    if (chain.includes(fromTag)) {
      return chain.map((t) => extractNameFromTag(t));
    }
  }

  return null;
}

/**
 * @param {object} funcDict
 * @param {string} tag
 * @returns {object|null}
 */
function lookupFunctionEntry(funcDict, tag) {
  const entry = funcDict?.dictionary?.[tag] || funcDict?.[tag];
  if (!entry) return null;
  return {
    tag: entry.tag || tag,
    functionName: entry.functionName || entry.component?.functionName || extractNameFromTag(tag),
    scriptUrl: entry.scriptUrl || null,
    location: entry.location || entry.component?.location || null,
    functionCode: entry.functionCode || ''
  };
}

/**
 * @param {object} params
 * @returns {object}
 */
function buildAgentResult(params) {
  const {
    convergence,
    anchorSelection,
    causalGraph,
    reverseResult,
    anchorHistory,
    funcDict,
    agentState
  } = params;

  const distribution = anchorSelection?.distribution || [];
  const topTag = convergence.topFunction?.tag;
  const topItem = distribution.find((d) => d.tag === topTag) || convergence.topFunction;
  const sinkTags = anchorSelection?.structuralPrior?.sinkTags || [];

  const alternates = distribution
    .filter((d) => d.tag !== topTag)
    .slice(0, 3)
    .map((d) => ({
      tag: d.tag,
      functionName: d.functionName,
      confidence: d.confidence ?? d.prob
    }));

  const funcEntry = lookupFunctionEntry(funcDict, topTag);
  const causalPath = findCausalPathDescription(causalGraph, topTag, sinkTags);

  const llmRecords = (anchorHistory?.turns || reverseResult?.anchorHistory?.turns || [])
    .flatMap((t) => (t.scores || [])
      .filter((s) => s.tag === topTag)
      .map((s) => ({
        turn: t.turn,
        score: s.score,
        reason: s.reason,
        recordedAt: t.recordedAt
      })));

  return {
    generatedAt: new Date().toISOString(),
    status: convergence.converged ? 'converged' : convergence.reason,
    turn: convergence.turn,
    taskDescription: anchorSelection?.taskDescription || reverseResult?.taskDescription,
    anchor: {
      tag: topTag,
      functionName: topItem?.functionName || funcEntry?.functionName || extractNameFromTag(topTag),
      scriptUrl: funcEntry?.scriptUrl || topItem?.scriptUrl || null,
      runtimeLoc: topItem?.location || funcEntry?.location || null,
      functionCode: funcEntry?.functionCode || null,
      confidence: convergence.topFunction?.confidence
    },
    evidence: {
      structuralPrior: topItem?.structuralPrior || null,
      breakdown: topItem?.breakdown || [],
      llmJudgments: llmRecords,
      anchorCandidateThisTurn: reverseResult?.anchorCandidate || null,
      onCausalPathToSink: onCausalPathToSink(causalGraph, topTag, sinkTags),
      causalPathDescription: causalPath,
      convergenceChecks: convergence.checks
    },
    alternates,
    agentState: agentState || null
  };
}

/**
 * @param {object} result
 * @param {string} outFile
 */
function writeAgentResult(result, outFile) {
  fs.mkdirSync(require('path').dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf8');
}

module.exports = {
  extractNameFromTag,
  findCausalPathDescription,
  lookupFunctionEntry,
  buildAgentResult,
  writeAgentResult
};
