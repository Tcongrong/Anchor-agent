/**
 * 静态调用图（StaticCG）构建器
 *
 * 基于 deduped 日志、function-tag-map 与 bundle AST，构建过近似静态调用图，
 * 识别网络 Sink 节点并计算到最近 Sink 的最短距离。
 */

const fs = require('fs');
const path = require('path');
const {
  parseFunctionCode,
  walkAst,
  FUNCTION_TYPES
} = require('./structural-prior/ast-utils');
const {
  buildStaticCallGraph,
  computeSinkDistances,
  extractNameFromTag
} = require('./structural-prior/static-call-graph');
const {
  extractApiCalls,
  matchesSinkApi,
  resolveCallSignature
} = require('./structural-prior/api-extractor');

/** 未连通到 Sink 时使用的大常数距离 */
const DISCONNECTED_DISTANCE = 1_000_000;

/** 默认网络 Sink API 模式 */
const DEFAULT_NETWORK_SINK_APIS = [
  'fetch',
  'XMLHttpRequest',
  'XMLHttpRequest.send',
  'navigator.sendBeacon',
  'Request.headers.set',
  'Request',
  'postMessage',
  'WebSocket',
  'axios',
  '$.ajax'
];

/**
 * @param {import('acorn').Node|null|undefined} programAst
 * @param {{ start?: number, end?: number }} range
 * @returns {import('acorn').Node|null}
 */
function extractFunctionNodeFromBundle(programAst, range) {
  if (!programAst || !range || typeof range.start !== 'number') {
    return null;
  }

  const targetStart = range.start;
  const targetEnd = typeof range.end === 'number' ? range.end : targetStart;
  let best = null;
  let bestSize = Number.POSITIVE_INFINITY;

  walkAst(programAst, (node) => {
    if (!FUNCTION_TYPES.has(node.type)) {
      return;
    }
    const start = typeof node.start === 'number' ? node.start : 0;
    const end = typeof node.end === 'number' ? node.end : start;
    if (start <= targetStart && end >= targetEnd) {
      const size = end - start;
      if (size < bestSize) {
        best = node;
        bestSize = size;
      }
    }
  });

  return best;
}

/**
 * @param {string} astFilePath
 * @param {string} astsDir
 * @returns {string|null}
 */
function resolveAstFilePath(astFilePath, astsDir) {
  if (!astFilePath) {
    return null;
  }
  if (fs.existsSync(astFilePath)) {
    return astFilePath;
  }
  const baseName = path.basename(astFilePath);
  const localPath = path.join(astsDir, baseName);
  if (fs.existsSync(localPath)) {
    return localPath;
  }
  return null;
}

/**
 * @param {string} astsDir
 * @returns {Map<string, import('acorn').Node>}
 */
function loadBundleAstCache(astsDir) {
  const cache = new Map();
  if (!fs.existsSync(astsDir)) {
    return cache;
  }

  for (const fileName of fs.readdirSync(astsDir)) {
    if (!fileName.endsWith('.ast.json')) {
      continue;
    }
    const fullPath = path.join(astsDir, fileName);
    try {
      const ast = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      cache.set(fullPath, ast);
      cache.set(fileName, ast);
    } catch {
      // skip invalid AST files
    }
  }
  return cache;
}

/**
 * @param {object} record
 * @param {Record<string, object>} tagMap
 * @param {Map<string, import('acorn').Node>} bundleAstCache
 * @param {string} astsDir
 * @returns {import('acorn').Node|null}
 */
function resolveFunctionAstNode(record, tagMap, bundleAstCache, astsDir) {
  const mapEntry = tagMap[record.tag] || {};
  const range = record.range || mapEntry.range || null;

  const astFile = resolveAstFilePath(mapEntry.astFile, astsDir);
  if (astFile) {
    let bundleAst = bundleAstCache.get(astFile) || bundleAstCache.get(path.basename(astFile));
    if (!bundleAst) {
      try {
        bundleAst = JSON.parse(fs.readFileSync(astFile, 'utf8'));
        bundleAstCache.set(astFile, bundleAst);
        bundleAstCache.set(path.basename(astFile), bundleAst);
      } catch {
        bundleAst = null;
      }
    }
    if (bundleAst && range) {
      const fromBundle = extractFunctionNodeFromBundle(bundleAst, range);
      if (fromBundle) {
        return fromBundle;
      }
    }
  }

  return parseFunctionCode(record.functionCode || '');
}

/**
 * @param {Array} records
 * @param {Record<string, object>} tagMap
 * @param {string} astsDir
 * @returns {Map<string, import('acorn').Node|null>}
 */
function buildAstIndexFromSources(records, tagMap, astsDir) {
  const bundleAstCache = loadBundleAstCache(astsDir);
  const astByTag = new Map();

  for (const record of records) {
    const fnNode = resolveFunctionAstNode(record, tagMap, bundleAstCache, astsDir);
    astByTag.set(record.tag, fnNode);
  }

  return astByTag;
}

/**
 * @param {Array} records
 * @param {Map<string, import('acorn').Node|null>} astByTag
 * @param {string[]} sinkApis
 * @returns {{ sinkTags: string[], sinkApiHits: Record<string, string[]> }}
 */
function identifySinkNodes(records, astByTag, sinkApis) {
  const sinkTags = [];
  const sinkApiHits = {};

  for (const record of records) {
    const fnNode = astByTag.get(record.tag);
    const apiCalls = extractApiCalls(fnNode);
    const hits = [];

    for (const call of apiCalls) {
      if (matchesSinkApi(call.resolved_name, sinkApis) || matchesSinkApi(call.api_name, sinkApis)) {
        hits.push(call.api_name || call.resolved_name);
      }
    }

    if (hits.length) {
      sinkTags.push(record.tag);
      sinkApiHits[record.tag] = [...new Set(hits)];
    }
  }

  return { sinkTags, sinkApiHits };
}

/**
 * @param {Map<string, number>} distances
 * @returns {Record<string, number>}
 */
function serializeSinkDistances(distances) {
  const result = {};
  for (const [tag, distance] of distances.entries()) {
    result[tag] = Number.isFinite(distance) ? distance : DISCONNECTED_DISTANCE;
  }
  return result;
}

/**
 * @param {object} options
 * @returns {object}
 */
function buildStaticCG(options = {}) {
  const {
    dedupedFile,
    mapFile,
    astsDir,
    sinkApis = DEFAULT_NETWORK_SINK_APIS,
    disconnectedDistance = DISCONNECTED_DISTANCE,
    edgeFilter = 'all'
  } = options;

  const dedupedPath = path.resolve(dedupedFile);
  const mapPath = path.resolve(mapFile);
  const astsPath = path.resolve(astsDir);

  if (!fs.existsSync(dedupedPath)) {
    throw new Error(`deduped 日志不存在: ${dedupedPath}`);
  }
  if (!fs.existsSync(mapPath)) {
    throw new Error(`function-tag-map 不存在: ${mapPath}`);
  }

  const dedupedPayload = JSON.parse(fs.readFileSync(dedupedPath, 'utf8'));
  const records = dedupedPayload.records || [];
  if (!records.length) {
    throw new Error(`deduped 日志中无候选函数: ${dedupedPath}`);
  }

  const tagMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  const astByTag = buildAstIndexFromSources(records, tagMap, astsPath);
  const rawCallGraph = buildStaticCallGraph(records, astByTag);
  const callGraph = edgeFilter === 'static'
    ? {
      ...rawCallGraph,
      edges: rawCallGraph.edges.filter((edge) => edge.kind === 'static')
    }
    : rawCallGraph;
  const { sinkTags, sinkApiHits } = identifySinkNodes(records, astByTag, sinkApis);
  const rawDistances = computeSinkDistances(callGraph, new Set(sinkTags));

  const sinkDistances = {};
  for (const tag of callGraph.nodes) {
    const distance = rawDistances.get(tag);
    sinkDistances[tag] = Number.isFinite(distance) ? distance : disconnectedDistance;
  }

  const nodes = callGraph.nodes.map((tag) => {
    const record = records.find((item) => item.tag === tag) || {};
    const mapEntry = tagMap[tag] || {};
    return {
      tag,
      functionName: record.functionName
        || record.component?.functionName
        || mapEntry.functionName
        || extractNameFromTag(tag),
      isSink: sinkTags.includes(tag),
      sinkApis: sinkApiHits[tag] || [],
      sinkDistance: sinkDistances[tag],
      hasAst: Boolean(astByTag.get(tag)),
      location: record.location || mapEntry.location || null,
      tags: record.tags || mapEntry.tags || []
    };
  });

  const edges = callGraph.edges.map((edge) => ({
    caller_tag: edge.from,
    callee_tag: edge.to,
    kind: edge.kind
  }));

  const parsedCount = [...astByTag.values()].filter(Boolean).length;

  const graphKey = edgeFilter === 'static' ? 'ExplicitStaticCG' : 'StaticCG';

  return {
    generatedAt: new Date().toISOString(),
    mode: edgeFilter === 'static' ? 'explicit' : 'overapprox',
    sources: {
      dedupedFile: dedupedPath,
      mapFile: mapPath,
      astsDir: astsPath
    },
    sinkApis,
    disconnectedDistance,
    [graphKey]: {
      nodes,
      edges,
      sinkNodes: sinkTags,
      sinkDistances,
      tagToName: callGraph.tagToName,
      stats: {
        nodeCount: callGraph.nodes.length,
        edgeCount: callGraph.edges.length,
        staticEdges: callGraph.edges.filter((edge) => edge.kind === 'static').length,
        overapproxEdges: callGraph.edges.filter((edge) => edge.kind === 'overapprox').length,
        excludedOverapproxEdges: edgeFilter === 'static'
          ? rawCallGraph.edges.filter((edge) => edge.kind === 'overapprox').length
          : 0,
        sinkNodeCount: sinkTags.length,
        parsedAstCount: parsedCount,
        unreachableCount: Object.values(sinkDistances).filter((d) => d >= disconnectedDistance).length
      }
    }
  };
}

/**
 * 构建仅含明确静态调用边的调用图（不含 overapprox 边）
 * @param {object} options
 * @returns {object}
 */
function buildExplicitStaticCG(options = {}) {
  return buildStaticCG({ ...options, edgeFilter: 'static' });
}

module.exports = {
  DISCONNECTED_DISTANCE,
  DEFAULT_NETWORK_SINK_APIS,
  extractFunctionNodeFromBundle,
  buildAstIndexFromSources,
  identifySinkNodes,
  buildStaticCG,
  buildExplicitStaticCG,
  resolveCallSignature
};
