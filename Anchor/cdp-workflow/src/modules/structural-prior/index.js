/**
 * 结构先验（Structural Prior）主模块
 *
 * 为候选函数 F_C 计算成为行为锚点的先验概率 p_0(f)
 */

const fs = require('fs');
const path = require('path');
const { parseFunctionCode, countAstNodes, extractCodeTerms } = require('./ast-utils');
const { normalizeAstScore } = require('./ast-templates');
const { extractApiCalls, matchesSinkApi, countApiTermFrequency } = require('./api-extractor');
const { computeEntropyScore } = require('./entropy');
const {
  buildStaticCallGraph,
  registerFunctionNameTag,
  computeSinkDistances,
  sinkProximityScore,
  extractNameFromTag
} = require('./static-call-graph');
const { parseSinkApisFromDescription } = require('./sink-parser');
const {
  KEYWORD_HIT_WEIGHT,
  computeKeywordApiBoost,
  buildTaskKeywords
} = require('./task-api-hints');
const {
  DEFAULT_PRIOR_TEMPERATURE,
  computeApiScore,
  combineScores,
  buildFunctionFeatures
} = require('./scorer');
const { buildAstIndexFromSources } = require('../static-cg-builder');

const DEFAULT_WEIGHTS = {
  wAst: 1,
  wApi: 1,
  wEnt: 1,
  wSink: 1
};

/** 离线特征缓存版本；结构特征语义变更时需递增以触发重算 */
const OFFLINE_CACHE_VERSION = 13;

/**
 * @param {unknown} value
 * @returns {number}
 */
function finiteOrZero(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

/**
 * @param {string} dedupedFile
 * @returns {{ mapFile: string, astsDir: string, staticCallGraphFile: string }}
 */
function resolveSourcePaths(dedupedFile) {
  const outputDir = path.dirname(path.resolve(dedupedFile));
  return {
    mapFile: path.join(outputDir, 'function-tag-map.json'),
    astsDir: path.join(outputDir, 'asts'),
    staticCallGraphFile: path.join(outputDir, 'static-call-graph.json')
  };
}

/**
 * @param {string} staticCallGraphFile
 * @param {Array} records
 * @returns {import('./static-call-graph').StaticCallGraph|null}
 */
function loadCallGraphFromFile(staticCallGraphFile, records) {
  if (!staticCallGraphFile || !fs.existsSync(staticCallGraphFile)) {
    return null;
  }

  const payload = JSON.parse(fs.readFileSync(staticCallGraphFile, 'utf8'));
  const staticCG = payload.StaticCG || payload;
  const nodeTags = (staticCG.nodes || [])
    .map((node) => (typeof node === 'string' ? node : node.tag))
    .filter(Boolean);
  const recordTags = records.map((record) => record.tag);
  const nodes = recordTags.length ? recordTags : nodeTags;

  if (!nodes.length) {
    return null;
  }

  const tagToName = {};
  const nameToTags = {};
  for (const record of records) {
    const functionName = record.functionName
      || record.component?.functionName
      || extractNameFromTag(record.tag);
    tagToName[record.tag] = functionName;
    registerFunctionNameTag(nameToTags, functionName, record.tag);
  }

  const edges = (staticCG.edges || []).map((edge) => ({
    from: edge.caller_tag || edge.from,
    to: edge.callee_tag || edge.to,
    kind: edge.kind === 'overapprox' ? 'overapprox' : 'static'
  })).filter((edge) => edge.from && edge.to);

  return { nodes, edges, tagToName, nameToTags };
}

/**
 * @param {Array<{ tag: string, functionCode?: string, functionName?: string, component?: object }>} records
 * @param {{ mapFile?: string, astsDir?: string }} [options]
 * @returns {Map<string, import('acorn').Node|null>}
 */
function buildAstIndex(records, options = {}) {
  const { mapFile, astsDir } = options;
  if (mapFile && astsDir && fs.existsSync(mapFile) && fs.existsSync(astsDir)) {
    const tagMap = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
    return buildAstIndexFromSources(records, tagMap, astsDir);
  }

  const astByTag = new Map();
  for (const record of records) {
    const fnNode = parseFunctionCode(record.functionCode || '');
    astByTag.set(record.tag, fnNode);
  }
  return astByTag;
}

/**
 * @param {Array} records
 * @param {Map<string, import('acorn').Node|null>} astByTag
 * @param {{ callGraph?: import('./static-call-graph').StaticCallGraph|null }} [options]
 * @returns {object}
 */
function precomputeOfflineFeatures(records, astByTag, options = {}) {
  const perFunction = new Map();
  const documentFrequency = new Map();

  for (const record of records) {
    const fnNode = astByTag.get(record.tag);
    const size = countAstNodes(fnNode);
    const astScore = normalizeAstScore(fnNode, size);
    const apiCalls = extractApiCalls(fnNode);
    const apiTf = countApiTermFrequency(apiCalls);
    const entropy = computeEntropyScore(fnNode, size);

    for (const api of apiTf.keys()) {
      documentFrequency.set(api, (documentFrequency.get(api) || 0) + 1);
    }

    perFunction.set(record.tag, {
      tag: record.tag,
      functionName: record.functionName || record.component?.functionName || extractNameFromTag(record.tag),
      size,
      astScore,
      apiCalls,
      apiTf,
      entropyScore: entropy.score,
      entropyDetail: entropy,
      codeTerms: extractCodeTerms(fnNode)
    });
  }

  const candidateCount = records.length;
  const callGraph = options.callGraph || buildStaticCallGraph(records, astByTag);
  const directApiTags = [];
  for (const [tag, item] of perFunction.entries()) {
    item.apiDirectScore = computeApiScore(item.apiTf, documentFrequency, candidateCount);
    if (item.apiDirectScore > 0) {
      directApiTags.push(tag);
    }
  }

  const apiDistances = computeSinkDistances(callGraph, new Set(directApiTags));
  for (const [tag, item] of perFunction.entries()) {
    item.apiProximityScore = apiBridgeScore(apiDistances.get(tag));
    // A value-generating anchor often calls into the API/sink chain rather than
    // invoking browser APIs directly. S_api therefore peaks one hop upstream
    // from an API use site, while S_sink remains responsible for direct sinks.
    item.apiScore = Math.max(item.apiDirectScore > 0 ? 0.25 : 0, item.apiProximityScore);
  }

  return {
    perFunction,
    documentFrequency: Object.fromEntries(documentFrequency),
    callGraph,
    candidateCount
  };
}

/**
 * API signature evidence should identify producer/bridge functions near an API
 * use site, not duplicate S_sink by giving the direct API wrapper the maximum.
 *
 * @param {number} distance
 * @returns {number}
 */
function apiBridgeScore(distance) {
  if (!Number.isFinite(distance)) {
    return 0;
  }
  if (distance === 0) {
    return 0.25;
  }
  return 1 / Math.abs(distance);
}

/**
 * 收集静态调用边上 1-hop callee 的字面量/属性名词条，供无标识符任务匹配。
 * @param {import('./static-call-graph').StaticCallGraph} callGraph
 * @param {Map<string, { codeTerms?: string[] }>} perFunction
 * @returns {Map<string, string[]>}
 */
function buildStaticCalleeCodeTerms(callGraph, perFunction) {
  /** @type {Map<string, Set<string>>} */
  const calleeTerms = new Map();

  for (const edge of callGraph?.edges || []) {
    if (edge.kind !== 'static') {
      continue;
    }
    const callee = perFunction.get(edge.to);
    if (!callee?.codeTerms?.length) {
      continue;
    }
    if (!calleeTerms.has(edge.from)) {
      calleeTerms.set(edge.from, new Set());
    }
    for (const term of callee.codeTerms) {
      calleeTerms.get(edge.from).add(term);
    }
  }

  return new Map([...calleeTerms.entries()].map(([tag, terms]) => [tag, [...terms]]));
}

/** 仅对静态 callee 数量不超过该阈值的 caller 做 sibling 字面量传播 */
const MAX_SIBLING_CALLEE_COUNT = 8;

/** caller 自身语料需含流水线信号才向 sibling 传播 */
const PIPELINE_CALLER_SIGNALS = [
  'surface', 'bf_', 'bf', 'digest', 'fingerprint',
  'transit', 'stats', 'sc_', 'sc', 'lane', 'hash', 'tuple', 'produce',
  'method', 'endpoint', 'body', 'filters', 'projection', 'hydration', 'payload',
  'stateframe', 'encodestatecode', 'envelope', 'fold'
];

/**
 * 同一 caller 下其它 static callee 的字面量词条（流水线 sibling 传播，仍无标识符）
 * @param {import('./static-call-graph').StaticCallGraph} callGraph
 * @param {Map<string, { codeTerms?: string[] }>} perFunction
 * @returns {Map<string, string[]>}
 */
function buildSiblingCalleeCodeTerms(callGraph, perFunction) {
  const { buildKeywordCorpus } = require('./task-api-hints');
  /** @type {Map<string, Set<string>>} */
  const calleesByCaller = new Map();

  for (const edge of callGraph?.edges || []) {
    if (edge.kind !== 'static') {
      continue;
    }
    if (!calleesByCaller.has(edge.from)) {
      calleesByCaller.set(edge.from, new Set());
    }
    calleesByCaller.get(edge.from).add(edge.to);
  }

  /** @type {Map<string, Set<string>>} */
  const siblingTerms = new Map();
  for (const [caller, calleeTags] of calleesByCaller.entries()) {
    if (calleeTags.size < 2 || calleeTags.size > MAX_SIBLING_CALLEE_COUNT) {
      continue;
    }
    const callerCorpus = buildKeywordCorpus(perFunction.get(caller) || {}, []);
    const isPipelineCaller = callerCorpus.some((term) => PIPELINE_CALLER_SIGNALS.some(
      (signal) => term.includes(signal) || signal.includes(term)
    ));
    if (!isPipelineCaller) {
      continue;
    }
    const mergedTerms = new Set();
    for (const calleeTag of calleeTags) {
      for (const term of perFunction.get(calleeTag)?.codeTerms || []) {
        mergedTerms.add(term);
      }
    }
    for (const calleeTag of calleeTags) {
      if (!siblingTerms.has(calleeTag)) {
        siblingTerms.set(calleeTag, new Set());
      }
      for (const term of mergedTerms) {
        siblingTerms.get(calleeTag).add(term);
      }
    }
  }

  return new Map([...siblingTerms.entries()].map(([tag, terms]) => [tag, [...terms]]));
}

/**
 * @param {object} offline
 * @param {string[]} sinkApis
 * @param {object} [weights]
 * @returns {{ features: import('./scorer').FunctionFeatures[], sinkTags: string[], sinkApis: string[], callGraph: object }}
 */
function computeStructuralPrior(offline, sinkApis, weights = DEFAULT_WEIGHTS, options = {}) {
  const priorTemperature = options.priorTemperature ?? DEFAULT_PRIOR_TEMPERATURE;
  const taskKeywords = buildTaskKeywords(options.taskDescription || '', options.targetProfile || null);
  const calleeTermsByTag = buildStaticCalleeCodeTerms(offline.callGraph, offline.perFunction);
  const siblingTermsByTag = buildSiblingCalleeCodeTerms(offline.callGraph, offline.perFunction);
  const sinkTags = [];
  for (const [tag, item] of offline.perFunction.entries()) {
    const isSink = item.apiCalls.some((call) => matchesSinkApi(call.resolved_name, sinkApis)
      || matchesSinkApi(call.api_name, sinkApis));
    if (isSink) {
      sinkTags.push(tag);
    }
  }

  const distances = computeSinkDistances(offline.callGraph, new Set(sinkTags));
  const funcIds = [...offline.perFunction.keys()];
  const rawScores = funcIds.map((tag) => {
    const item = offline.perFunction.get(tag);
    const distance = distances.get(tag);
    const propagatedTerms = [
      ...(calleeTermsByTag.get(tag) || []),
      ...(siblingTermsByTag.get(tag) || [])
    ];
    const taskApiBoost = computeKeywordApiBoost(
      item,
      taskKeywords,
      propagatedTerms
    );
    const apiScore = finiteOrZero(item.apiScore) + taskApiBoost;
    return {
      ast: finiteOrZero(item.astScore),
      api: apiScore,
      api_direct: finiteOrZero(item.apiDirectScore),
      api_proximity: finiteOrZero(item.apiProximityScore),
      api_task_boost: taskApiBoost,
      entropy: finiteOrZero(item.entropyScore),
      sink: sinkProximityScore(distance)
    };
  });

  const combinedScores = combineScores(rawScores, weights);
  const features = buildFunctionFeatures(funcIds, combinedScores, rawScores, {
    temperature: priorTemperature
  });

  return {
    features: features.sort((a, b) => b.prob - a.prob || b.combined_score - a.combined_score),
    sinkTags,
    sinkApis,
    callGraph: offline.callGraph,
    taskKeywords,
    taskKeywordHitWeight: KEYWORD_HIT_WEIGHT
  };
}

/**
 * @param {object} options
 * @returns {object}
 */
function runStructuralPrior(options = {}) {
  const {
    dedupedFile,
    taskDescription = '',
    targetProfile = null,
    sinkApis = [],
    weights = DEFAULT_WEIGHTS,
    priorTemperature = DEFAULT_PRIOR_TEMPERATURE,
    cacheFile = null,
    useCache = true,
    mapFile = null,
    astsDir = null,
    staticCallGraphFile = null
  } = options;

  const dedupedPath = path.resolve(dedupedFile);
  const sourcePaths = resolveSourcePaths(dedupedPath);
  const resolvedMapFile = mapFile ? path.resolve(mapFile) : sourcePaths.mapFile;
  const resolvedAstsDir = astsDir ? path.resolve(astsDir) : sourcePaths.astsDir;
  const resolvedStaticCgFile = staticCallGraphFile
    ? path.resolve(staticCallGraphFile)
    : sourcePaths.staticCallGraphFile;

  const payload = JSON.parse(fs.readFileSync(dedupedPath, 'utf8'));
  const records = payload.records || [];
  if (!records.length) {
    throw new Error(`候选函数为空: ${dedupedPath}`);
  }

  const parsedSinkApis = parseSinkApisFromDescription(taskDescription, sinkApis);
  let offline = null;

  if (useCache && cacheFile && fs.existsSync(cacheFile)) {
    offline = hydrateOfflineCache(JSON.parse(fs.readFileSync(cacheFile, 'utf8')), records);
  }

  if (!offline) {
    const astByTag = buildAstIndex(records, {
      mapFile: resolvedMapFile,
      astsDir: resolvedAstsDir
    });
    const prebuiltCallGraph = loadCallGraphFromFile(resolvedStaticCgFile, records);
    offline = precomputeOfflineFeatures(records, astByTag, { callGraph: prebuiltCallGraph });
    if (cacheFile) {
      fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
      fs.writeFileSync(cacheFile, JSON.stringify(serializeOfflineCache(offline), null, 2), 'utf8');
    }
  }

  const result = computeStructuralPrior(offline, parsedSinkApis, weights, {
    priorTemperature,
    taskDescription,
    targetProfile
  });
  const functionMeta = new Map(records.map((record) => [record.tag, record]));

  return {
    generatedAt: new Date().toISOString(),
    taskDescription,
    taskKeywords: result.taskKeywords,
    sinkApis: parsedSinkApis,
    weights,
    priorTemperature,
    sources: {
      dedupedFile: dedupedPath,
      mapFile: fs.existsSync(resolvedMapFile) ? resolvedMapFile : null,
      astsDir: fs.existsSync(resolvedAstsDir) ? resolvedAstsDir : null,
      staticCallGraphFile: fs.existsSync(resolvedStaticCgFile) ? resolvedStaticCgFile : null
    },
    candidateCount: records.length,
    sinkNodeCount: result.sinkTags.length,
    callGraphStats: {
      nodeCount: result.callGraph.nodes.length,
      edgeCount: result.callGraph.edges.length,
      staticEdges: result.callGraph.edges.filter((edge) => edge.kind === 'static').length,
      overapproxEdges: result.callGraph.edges.filter((edge) => edge.kind === 'overapprox').length
    },
    sinkTags: result.sinkTags,
    distribution: result.features.map((feature, index) => {
      const meta = functionMeta.get(feature.func_id) || {};
      return {
        rank: index + 1,
        ...feature,
        functionName: meta.functionName || meta.component?.functionName || extractNameFromTag(feature.func_id),
        location: meta.location || meta.component?.location || null,
        tags: meta.tags || []
      };
    })
  };
}

/**
 * @param {object} offline
 * @returns {object}
 */
function serializeOfflineCache(offline) {
  return {
    version: OFFLINE_CACHE_VERSION,
    candidateCount: offline.candidateCount,
    documentFrequency: offline.documentFrequency,
    callGraph: offline.callGraph,
    perFunction: [...offline.perFunction.entries()].map(([tag, item]) => ({
      tag,
      functionName: item.functionName,
      size: item.size,
      astScore: item.astScore,
      apiScore: item.apiScore,
      apiDirectScore: item.apiDirectScore,
      apiProximityScore: item.apiProximityScore,
      apiCalls: item.apiCalls,
      entropyScore: item.entropyScore,
      entropyDetail: item.entropyDetail,
      codeTerms: item.codeTerms
    }))
  };
}

/**
 * @param {object} cache
 * @param {Array} records
 * @returns {object}
 */
function hydrateOfflineCache(cache, records) {
  if (cache?.version !== OFFLINE_CACHE_VERSION) {
    return null;
  }
  const currentTags = new Set(records.map((record) => record.tag));
  const cachedTags = new Set((cache.perFunction || []).map((item) => item.tag));
  if (currentTags.size !== cachedTags.size || [...currentTags].some((tag) => !cachedTags.has(tag))) {
    return null;
  }

  const perFunction = new Map();
  for (const item of cache.perFunction) {
    perFunction.set(item.tag, {
      ...item,
      codeTerms: item.codeTerms || []
    });
  }

  return {
    perFunction,
    documentFrequency: new Map(Object.entries(cache.documentFrequency || {})),
    callGraph: cache.callGraph,
    candidateCount: cache.candidateCount
  };
}

module.exports = {
  DEFAULT_WEIGHTS,
  DEFAULT_PRIOR_TEMPERATURE,
  OFFLINE_CACHE_VERSION,
  resolveSourcePaths,
  loadCallGraphFromFile,
  buildAstIndex,
  precomputeOfflineFeatures,
  buildStaticCalleeCodeTerms,
  buildSiblingCalleeCodeTerms,
  computeStructuralPrior,
  runStructuralPrior,
  parseSinkApisFromDescription,
  buildTaskKeywords,
  computeKeywordApiBoost
};
