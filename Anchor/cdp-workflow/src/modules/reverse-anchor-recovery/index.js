/**
 * 反向恢复 Anchor Candidate
 *
 * 基于因果图 G_t 与任务描述 d：取当前轮断点观测 → 双向 BFS（caller + callee）收集候选并 LLM 锚点判定。
 * （观测相关性预筛 observation-relevance-prompt 已暂时关闭，所有函数均直接进入 BFS。）
 */

const fs = require('fs');
const path = require('path');
const { getCurrentTurnObservation, buildTvnFromObservation } = require('./tvn');
const { reverseTraverseCandidates, findFunctionNode } = require('./reverse-traverse');
const {
  scoreAnchorCandidates,
  selectAnchorCandidate,
  DEFAULT_THETA
} = require('./llm');
const { applyAnchorReflection } = require('./reflection');
const { DEFAULT_THETA_RELEVANCE } = require('./observation-relevance');

const DEFAULT_MAX_DEPTH = 7;
const DEFAULT_MAX_PER_DIRECTION = 7;

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
 * @param {object} funcDict
 * @param {string} tag
 * @returns {object|null}
 */
function lookupFunctionCode(funcDict, tag) {
  const entry = funcDict?.dictionary?.[tag] || funcDict?.[tag];
  if (!entry) return null;
  return {
    tag: entry.tag || tag,
    functionName: entry.functionName || entry.component?.functionName || tag,
    functionCode: entry.functionCode || ''
  };
}

/**
 * @param {object} graph
 * @param {string[]} candidateTags
 * @param {object} funcDict
 * @returns {object[]}
 */
function buildCandidatePayloads(graph, candidateTags, funcDict) {
  return candidateTags.map((tag) => {
    const fromDict = lookupFunctionCode(funcDict, tag);
    const fromGraph = findFunctionNode(graph, tag);
    return {
      tag,
      functionName: fromDict?.functionName || fromGraph?.functionName || fromGraph?.label || tag,
      functionCode: fromDict?.functionCode || ''
    };
  });
}

/**
 * @param {object|null|undefined} history
 * @param {number} turn
 * @param {object[]} scores
 * @returns {object}
 */
function appendAnchorHistory(history, turn, scores) {
  const base = history && typeof history === 'object' && !Array.isArray(history)
    ? { ...history }
    : { version: 1, turns: [] };

  const turns = Array.isArray(base.turns) ? [...base.turns] : [];
  turns.push({
    turn,
    recordedAt: new Date().toISOString(),
    scores: scores.map((s) => ({
      tag: s.tag,
      score: s.score,
      reason: s.reason
    }))
  });

  return { ...base, version: base.version || 1, turns };
}

/**
 * @param {object} observation
 * @returns {object}
 */
function slimObservation(observation) {
  if (!observation) return null;
  return {
    functionTag: observation.functionTag,
    varName: observation.varName,
    value: observation.value,
    callChain: observation.callChain,
    turn: observation.turn
  };
}

/**
 * @param {object} options
 * @returns {Promise<object>}
 */
async function runReverseAnchorRecovery(options) {
  const graph = options.graph || loadJson(options.graphFile);
  const funcDict = options.funcDict || loadJson(options.funcDictFile);
  const taskDescription = options.taskDescription;
  const turn = options.turn ?? graph.turn ?? null;
  const maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
  const maxPerDirection = options.maxPerDirection ?? options.maxCount ?? maxDepth;
  const theta = options.theta ?? DEFAULT_THETA;
  const thetaRelevance = options.thetaRelevance ?? DEFAULT_THETA_RELEVANCE;

  if (!taskDescription) {
    throw new Error('缺少 taskDescription / --task');
  }

  const observation = getCurrentTurnObservation(graph, {
    turn,
    filterTurn: options.filterTurn
  });

  if (!observation?.functionTag) {
    return {
      turn,
      taskDescription,
      observation: null,
      observationRelevance: null,
      tvn: null,
      anchorCandidate: null,
      candidateScores: [],
      candidates: [],
      anchorHistory: appendAnchorHistory(options.anchorHistory, turn, []),
      error: '当前轮无断点观测'
    };
  }

  const observedFunc = lookupFunctionCode(funcDict, observation.functionTag);

  // 观测相关性预筛已暂时关闭：跳过 observation-relevance-prompt，直接进入 BFS + prompt.js 打分
  const observationRelevance = {
    related: true,
    score: 1,
    reason: '观测相关性判定已暂时跳过，直接进入 BFS 反向恢复',
    skipped: true,
    thetaRelevance
  };

  const tvn = buildTvnFromObservation(graph, observation);
  const startTag = observation.functionTag;

  const traverseResult = reverseTraverseCandidates(
    graph,
    startTag,
    { maxDepth, maxPerDirection }
  );
  const {
    candidates: candidateTags,
    paths,
    distances,
    directions
  } = traverseResult;

  const candidates = buildCandidatePayloads(graph, candidateTags, funcDict);

  const scores = await scoreAnchorCandidates(
    {
      taskDescription,
      candidates,
      tvn,
      observation,
      observationFunction: observedFunc,
      distances,
      enablePatternC: options.enablePatternC === true,
      referenceValue: options.referenceValue || options.value || null,
      valuePattern: options.valuePattern || null
    },
    {
      mock: options.mock,
      llmResponseFile: options.llmResponseFile,
      apiKey: options.apiKey,
      baseUrl: options.baseUrl,
      model: options.model,
      temperature: options.temperature
    }
  );

  const candidateScores = [...scores]
    .sort((a, b) => b.score - a.score || a.tag.localeCompare(b.tag));

  const selection = selectAnchorCandidate(candidateScores, theta);
  const reflected = applyAnchorReflection(candidateScores, selection, {
    theta,
    disableIsolatedPerfectScore: options.disableIsolatedPerfectScore === true
  });
  const {
    candidateScores: finalCandidateScores,
    anchorCandidate,
    best,
    reflection
  } = reflected;
  const anchorHistory = appendAnchorHistory(options.anchorHistory, turn, finalCandidateScores);

  return {
    turn,
    taskDescription,
    observation: slimObservation(observation),
    observationRelevance,
    tvn,
    reverseTraverse: {
      startTag,
      maxDepth,
      maxPerDirection,
      candidateCount: candidateTags.length,
      paths: Object.fromEntries([...paths.entries()].map(([tag, p]) => [tag, p])),
      distances: Object.fromEntries(distances),
      directions: Object.fromEntries(directions)
    },
    candidates: candidates.map((c) => ({
      tag: c.tag,
      functionName: c.functionName,
      distance: distances.get(c.tag),
      direction: directions.get(c.tag),
      hasSource: Boolean(c.functionCode)
    })),
    candidateScores: finalCandidateScores,
    anchorCandidate,
    bestScore: best?.score ?? null,
    reflection,
    theta,
    anchorHistory,
    patternC: options.enablePatternC === true,
    generatedAt: new Date().toISOString()
  };
}

module.exports = {
  DEFAULT_MAX_DEPTH,
  DEFAULT_MAX_PER_DIRECTION,
  DEFAULT_THETA,
  DEFAULT_THETA_RELEVANCE,
  loadJson,
  lookupFunctionCode,
  buildCandidatePayloads,
  appendAnchorHistory,
  runReverseAnchorRecovery
};
