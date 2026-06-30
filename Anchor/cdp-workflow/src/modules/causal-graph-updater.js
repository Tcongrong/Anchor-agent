/**
 * TC3：根据断点观测（ANCHOR + eval 值）增量更新因果图 G_t
 */

const fs = require('fs');
const path = require('path');
const {
  CallGraphBuilder,
  serializeGraph,
  loadAnchorSnapshots,
  loadDedupedLogs,
  parseTag
} = require('./call-graph-builder');
const { buildExplicitStaticCG } = require('./static-cg-builder');

const GRAPH_VERSION = 1;

function emptyGraph() {
  return {
    version: GRAPH_VERSION,
    turn: 0,
    updatedAt: null,
    nodes: [],
    edges: [],
    observations: [],
    callChains: [],
    dataFlows: [],
    hitCounts: {}
  };
}

/**
 * @param {object|null|undefined} raw
 * @returns {object}
 */
function normalizeGraph(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return emptyGraph();
  }
  if (!Array.isArray(raw.nodes)) {
    return {
      ...emptyGraph(),
      ...raw,
      nodes: [],
      edges: Array.isArray(raw.edges) ? raw.edges : [],
      observations: Array.isArray(raw.observations) ? raw.observations : [],
      callChains: Array.isArray(raw.callChains) ? raw.callChains : [],
      dataFlows: Array.isArray(raw.dataFlows) ? raw.dataFlows : [],
      hitCounts: raw.hitCounts || raw.hit_counts || {}
    };
  }
  return {
    version: raw.version || GRAPH_VERSION,
    turn: Number(raw.turn) || 0,
    updatedAt: raw.updatedAt || null,
    nodes: raw.nodes,
    edges: Array.isArray(raw.edges) ? raw.edges : [],
    observations: Array.isArray(raw.observations) ? raw.observations : [],
    callChains: Array.isArray(raw.callChains) ? raw.callChains : [],
    dataFlows: Array.isArray(raw.dataFlows) ? raw.dataFlows : [],
    hitCounts: raw.hitCounts || raw.hit_counts || {}
  };
}

/**
 * @param {*} value
 * @returns {string}
 */
function strongHash(value) {
  if (value === null || value === undefined) {
    return 'null';
  }
  if (typeof value === 'string') {
    return `s:${value}`;
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return `p:${String(value)}`;
  }
  if (Array.isArray(value)) {
    return `a:[${value.map((item) => strongHash(item)).join(',')}]`;
  }
  if (typeof value === 'object') {
    if (value.__error) {
      return `err:${value.__error}`;
    }
    const keys = Object.keys(value).sort();
    return `o:{${keys.map((key) => `${key}:${strongHash(value[key])}`).join(',')}}`;
  }
  return `x:${String(value)}`;
}

/**
 * @param {*} value
 * @returns {boolean}
 */
function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && !value.__error;
}

/**
 * @param {*} value
 * @returns {string}
 */
function valueToMatchString(value) {
  if (typeof value === 'string') {
    return value;
  }
  if (isPlainObject(value) || Array.isArray(value)) {
    return stableStringify(value);
  }
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
}

/**
 * @param {*} value
 * @returns {string}
 */
function stableStringify(value) {
  if (value === null || value === undefined) {
    return 'null';
  }
  if (typeof value !== 'object') {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(',')}]`;
  }
  const keys = Object.keys(value).sort();
  return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
}

/**
 * @param {*} a
 * @param {*} b
 * @returns {{ weight: number, matchType: string }|null}
 */
function matchValues(a, b) {
  if (a === undefined || b === undefined) {
    return null;
  }
  if (isPlainObject(a) && a.__error) {
    return null;
  }
  if (isPlainObject(b) && b.__error) {
    return null;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    if (a.length > 20 && a === b) {
      return { weight: 1, matchType: 'exact-string' };
    }
  }

  if (isPlainObject(a) && isPlainObject(b)) {
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();
    if (keysA.join('\0') === keysB.join('\0') && keysA.every((key) => strongHash(a[key]) === strongHash(b[key]))) {
      return { weight: 0.9, matchType: 'exact-object' };
    }
  }

  const strA = valueToMatchString(a);
  const strB = valueToMatchString(b);
  if (strA && strB && strA !== strB) {
    if (strA.length > 20 && strA === strB) {
      return { weight: 1, matchType: 'exact-string' };
    }
    if (strA.includes(strB) || strB.includes(strA)) {
      return { weight: 0.5, matchType: 'substring' };
    }
  }

  return null;
}

/**
 * @param {object} observationsMap tag -> { varName: value }
 * @param {object} snapshot
 * @returns {{ varName: string, value: * }|null}
 */
function resolveObservationValue(observationsMap, snapshot) {
  const tag = snapshot?.breakpoint?.tag;
  if (!tag || !observationsMap[tag]) {
    return null;
  }

  const vars = observationsMap[tag];
  const text = snapshot?.breakpoint?.text;
  if (text && Object.prototype.hasOwnProperty.call(vars, text)) {
    return { varName: text, value: vars[text] };
  }

  const keys = Object.keys(vars);
  if (keys.length === 1) {
    return { varName: keys[0], value: vars[keys[0]] };
  }

  return null;
}

/**
 * @param {Map<string, object>} nodeMap
 * @param {string} currentFunctionTag
 * @returns {Array<object>}
 */
function listValueNodesFromOtherFunctions(nodeMap, currentFunctionTag) {
  return listValueNodes(nodeMap).filter(
    (node) => node.functionTag && node.functionTag !== currentFunctionTag
  );
}

/**
 * @param {string} fnA
 * @param {string} fnB
 * @returns {[string, string]}
 */
function canonicalFunctionPair(fnA, fnB) {
  return fnA <= fnB ? [fnA, fnB] : [fnB, fnA];
}

/**
 * @param {Map<string, object>} edgeMap
 * @param {object} edge
 */
function upsertStructuralEdge(edgeMap, edge) {
  const key = `${edge.from}\0${edge.to}\0${edge.kind}\0${edge.source || edge.label || ''}`;
  const existing = edgeMap.get(key);
  if (!existing) {
    edgeMap.set(key, edge);
    return;
  }
  edgeMap.set(key, {
    ...existing,
    ...edge,
    turn: Math.max(existing.turn || 0, edge.turn || 0),
    weight: Math.max(existing.weight || 0, edge.weight || 0)
  });
}

/**
 * @param {Map<string, object>} edgeMap
 * @param {object} edge
 */
function upsertFunctionDataEdge(edgeMap, edge) {
  const [from, to] = canonicalFunctionPair(edge.from, edge.to);
  const key = `${from}\0${to}\0data\0${edge.matchType || 'value-similarity'}`;
  const existing = edgeMap.get(key);
  const next = { ...edge, from, to, kind: 'data', relation: 'value-similarity' };
  if (!existing || (next.weight || 0) > (existing.weight || 0)) {
    edgeMap.set(key, next);
  }
}

/**
 * 当两个不同函数观测到相似值时，在函数节点之间添加 data 边
 * @param {Map<string, object>} edgeMap
 * @param {string} currentFunctionTag
 * @param {{ varName: string, value: * }} obsValue
 * @param {Map<string, object>} nodeMap
 * @param {number} turn
 * @returns {Array<object>}
 */
function linkSimilarValuesAcrossFunctions(edgeMap, currentFunctionTag, obsValue, nodeMap, turn) {
  const matches = [];

  for (const prior of listValueNodesFromOtherFunctions(nodeMap, currentFunctionTag)) {
    const matched = matchValues(obsValue.value, prior.value);
    if (!matched) {
      continue;
    }

    upsertFunctionDataEdge(edgeMap, {
      from: currentFunctionTag,
      to: prior.functionTag,
      kind: 'data',
      weight: matched.weight,
      turn,
      matchType: matched.matchType,
      relation: 'value-similarity',
      varNameFrom: obsValue.varName,
      varNameTo: prior.varName
    });

    matches.push({
      functionTag: prior.functionTag,
      functionName: prior.functionName,
      varName: prior.varName,
      weight: matched.weight,
      matchType: matched.matchType
    });
  }

  return matches;
}

/**
 * @param {object} snapshot
 * @returns {string}
 */
function snapshotKey(snapshot) {
  const bp = snapshot?.breakpoint || {};
  return `${snapshot.capturedAt || ''}\0${bp.tag || ''}\0${bp.text || ''}`;
}

/**
 * @param {object} graph
 * @returns {Set<string>}
 */
function buildProcessedSnapshotKeys(graph) {
  const keys = new Set();
  for (const obs of graph.observations || []) {
    if (obs.snapshotKey) {
      keys.add(obs.snapshotKey);
      continue;
    }
    keys.add(`${obs.capturedAt || ''}\0${obs.functionTag || ''}\0${obs.varName || ''}`);
  }
  return keys;
}

/**
 * @param {object} graph
 * @param {Array<object>} anchorSnapshots
 * @returns {Array<object>}
 */
function filterNewSnapshots(graph, anchorSnapshots) {
  const processed = buildProcessedSnapshotKeys(graph);
  return anchorSnapshots.filter((snapshot) => !processed.has(snapshotKey(snapshot)));
}

/**
 * @param {string} functionTag
 * @param {string} varName
 * @param {*} value
 * @returns {string}
 */
function valueNodeId(functionTag, varName, value) {
  const digest = strongHash(value).slice(0, 48);
  return `value:${functionTag}::${varName}::${digest}`;
}

/**
 * @param {Map<string, object>} nodeMap
 * @param {object} node
 */
function upsertNode(nodeMap, node) {
  const existing = nodeMap.get(node.id);
  if (!existing) {
    nodeMap.set(node.id, node);
    return;
  }
  nodeMap.set(node.id, { ...existing, ...node });
}

/**
 * @param {Map<string, object>} edgeMap
 * @param {object} edge
 */
function upsertEdge(edgeMap, edge) {
  const key = `${edge.from}\0${edge.to}\0${edge.kind}\0${edge.matchType || edge.relation || edge.source || ''}\0${edge.turn || 0}`;
  const existing = edgeMap.get(key);
  if (!existing || (edge.weight || 0) > (existing.weight || 0)) {
    edgeMap.set(key, edge);
  }
}

/**
 * @param {object} graph
 * @returns {{ nodeMap: Map<string, object>, edgeMap: Map<string, object> }}
 */
function indexGraph(graph) {
  const nodeMap = new Map();
  const edgeMap = new Map();

  for (const node of graph.nodes) {
    if (node?.id) {
      nodeMap.set(node.id, node);
    }
  }
  for (const edge of graph.edges) {
    upsertEdge(edgeMap, edge);
  }

  return { nodeMap, edgeMap };
}

/**
 * @param {Map<string, object>} nodeMap
 * @returns {Array<object>}
 */
function listValueNodes(nodeMap) {
  return [...nodeMap.values()].filter((node) => node.type === 'value');
}

/**
 * @param {string} filePath
 * @returns {object|null}
 */
function loadCallGraph(filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    return null;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return {
      generatedAt: raw.generatedAt || null,
      stats: raw.stats || {},
      nodes: Array.isArray(raw.nodes) ? raw.nodes : [],
      syncEdges: Array.isArray(raw.syncEdges) ? raw.syncEdges : [],
      asyncEdges: Array.isArray(raw.asyncEdges) ? raw.asyncEdges : []
    };
  } catch (_) {
    return null;
  }
}

/**
 * @param {object} callGraph
 * @param {string} filePath
 */
function writeCallGraph(callGraph, filePath) {
  const outPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(callGraph, null, 2)}\n`, 'utf8');
}

/**
 * @param {Array<object>} anchorSnapshots
 * @param {Array} logRecords
 * @returns {object}
 */
function buildCallGraphFromSources(anchorSnapshots, logRecords = []) {
  const builder = new CallGraphBuilder({ logRecords, anchorSnapshots });
  return serializeGraph(builder.build());
}

/**
 * @param {Array<object>} anchorSnapshots
 * @param {Array} logRecords
 * @param {string} filePath
 * @returns {object}
 */
function buildAndWriteCallGraph(anchorSnapshots, logRecords, filePath) {
  const callGraph = buildCallGraphFromSources(anchorSnapshots, logRecords);
  writeCallGraph(callGraph, filePath);
  return callGraph;
}

/**
 * 将 ExplicitStaticCG 转为 applyCallGraphStructure 可用的 call-graph 结构
 * @param {object} explicitPayload buildExplicitStaticCG 返回值，或含 ExplicitStaticCG 字段的对象
 * @returns {object}
 */
function explicitStaticCGToCallGraph(explicitPayload) {
  const cg = explicitPayload?.ExplicitStaticCG || explicitPayload;
  const nodes = (cg.nodes || []).map((node) => ({
    id: node.tag,
    tag: node.tag,
    label: node.functionName || node.tag
  }));
  const syncEdges = (cg.edges || []).map((edge) => ({
    from: edge.caller_tag,
    to: edge.callee_tag,
    count: 1,
    sources: ['static-explicit']
  }));

  return {
    generatedAt: explicitPayload?.generatedAt || null,
    stats: cg.stats || {},
    nodes,
    syncEdges,
    asyncEdges: []
  };
}

/**
 * 构建明确静态调用图并写入因果图 G_0（仅 static 边，turn=0）
 * @param {object} options
 * @returns {{ causalGraph: object, explicitStatic: object, callGraph: object }}
 */
function initCausalGraphFromExplicitStatic(options = {}) {
  const {
    causalGraphFile,
    dedupedFile,
    mapFile,
    astsDir,
    sinkApis,
    explicitStaticFile,
    writeExplicitStatic = true
  } = options;

  const explicitPayload = buildExplicitStaticCG({
    dedupedFile,
    mapFile,
    astsDir,
    sinkApis
  });

  if (writeExplicitStatic && explicitStaticFile) {
    const outPath = path.resolve(explicitStaticFile);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `${JSON.stringify(explicitPayload, null, 2)}\n`, 'utf8');
  }

  const callGraph = explicitStaticCGToCallGraph(explicitPayload);
  const graph = updateCausalGraph(emptyGraph(), {
    callGraph,
    anchorSnapshots: []
  });

  if (causalGraphFile) {
    writeCausalGraph(graph, causalGraphFile);
  }

  return {
    causalGraph: graph,
    explicitStatic: explicitPayload,
    callGraph
  };
}

/**
 * 将 call-graph.json 中的函数节点与 sync/async 边写入因果图
 * @param {Map<string, object>} nodeMap
 * @param {Map<string, object>} edgeMap
 * @param {object} callGraph
 * @param {number} turn
 */
function applyCallGraphStructure(nodeMap, edgeMap, callGraph, turn) {
  if (!callGraph) {
    return;
  }

  for (const node of callGraph.nodes || []) {
    const nodeId = node.id || node.tag;
    if (!nodeId) {
      continue;
    }
    const parsed = parseTag(nodeId);
    const existing = nodeMap.get(nodeId);
    upsertNode(nodeMap, {
      id: nodeId,
      type: 'function',
      tag: node.tag || (parsed ? nodeId : null),
      functionName: parsed?.functionName || node.label || nodeId,
      label: node.label || parsed?.functionName || nodeId,
      lastTurn: Math.max(existing?.lastTurn || 0, turn)
    });
  }

  for (const edge of callGraph.syncEdges || []) {
    if (!edge.from || !edge.to) {
      continue;
    }
    const sources = Array.isArray(edge.sources) ? edge.sources : [];
    upsertStructuralEdge(edgeMap, {
      from: edge.from,
      to: edge.to,
      kind: 'sync',
      weight: edge.count || 1,
      turn,
      source: sources[0] || 'call-graph'
    });
  }

  for (const edge of callGraph.asyncEdges || []) {
    if (!edge.from || !edge.to) {
      continue;
    }
    const sources = Array.isArray(edge.sources) ? edge.sources : [];
    upsertStructuralEdge(edgeMap, {
      from: edge.from,
      to: edge.to,
      kind: 'async',
      weight: edge.count || 1,
      turn,
      label: edge.label || 'async',
      source: sources[0] || 'call-graph'
    });
  }
}

/**
 * @param {object} snapshot
 * @param {Array} logRecords
 * @returns {{ syncEdges: Array, asyncEdges: Array, functionIds: string[] }}
 */
function extractStructuralEdges(snapshot, logRecords) {
  const builder = new CallGraphBuilder({
    logRecords,
    anchorSnapshots: [snapshot]
  });
  const partial = builder.build();
  const functionIds = partial.nodes.map((node) => node.id);

  return {
    syncEdges: partial.syncEdges,
    asyncEdges: partial.asyncEdges,
    functionIds
  };
}

/**
 * @param {object} snapshot
 * @returns {string[]}
 */
function extractCallChain(snapshot, logRecords) {
  const { functionIds } = extractStructuralEdges(snapshot, logRecords);
  return functionIds;
}

/**
 * @param {Array<object>} anchorSnapshots
 * @returns {Array<object>}
 */
function dedupeSnapshotsByKey(anchorSnapshots) {
  const map = new Map();
  for (const snapshot of anchorSnapshots) {
    map.set(snapshotKey(snapshot), snapshot);
  }
  return [...map.values()];
}

/**
 * 合并重复值节点、去重观测与结构边，清理旧版错误 data 边
 * @param {object} graph
 * @returns {object}
 */
function compactCausalGraph(graph) {
  const g = normalizeGraph(graph);
  const nodeMap = new Map();

  for (const node of g.nodes) {
    if (node.type === 'function') {
      upsertNode(nodeMap, node);
    }
  }

  for (const node of g.nodes) {
    if (node.type !== 'value' || !node.functionTag) {
      continue;
    }
    const canonicalId = valueNodeId(node.functionTag, node.varName, node.value);
    const existing = nodeMap.get(canonicalId);
    const turnHint = node.lastTurn || node.turn || 0;
    const firstTurn = Math.min(existing?.firstTurn || turnHint, node.firstTurn || turnHint);
    const lastTurn = Math.max(existing?.lastTurn || turnHint, node.lastTurn || turnHint);
    nodeMap.set(canonicalId, {
      ...node,
      id: canonicalId,
      firstTurn,
      lastTurn,
      turn: lastTurn
    });
  }

  const obsMap = new Map();
  for (const obs of g.observations) {
    const key = obs.snapshotKey
      || `${obs.capturedAt || ''}\0${obs.functionTag || ''}\0${obs.varName || ''}`;
    if (obsMap.has(key)) {
      continue;
    }
    const valueNodeIdForObs = obs.functionTag && obs.varName != null && obs.value !== undefined
      ? valueNodeId(obs.functionTag, obs.varName, obs.value)
      : obs.valueNodeId;
    obsMap.set(key, {
      ...obs,
      snapshotKey: key,
      valueNodeId: valueNodeIdForObs
    });
  }

  const observations = [...obsMap.values()].sort((a, b) => {
    const ta = Date.parse(a.capturedAt || '') || a.turn || 0;
    const tb = Date.parse(b.capturedAt || '') || b.turn || 0;
    return ta - tb || (a.turn || 0) - (b.turn || 0);
  });
  observations.forEach((obs, index) => {
    obs.turn = index + 1;
  });

  const edgeMap = new Map();
  for (const edge of g.edges) {
    if (edge.kind === 'data') {
      const fromIsValue = String(edge.from).startsWith('value:');
      const toIsValue = String(edge.to).startsWith('value:');
      if (fromIsValue || toIsValue || edge.relation === 'observed' || edge.relation === 'value-match') {
        continue;
      }
      if (edge.relation === 'value-similarity') {
        upsertFunctionDataEdge(edgeMap, edge);
      }
      continue;
    }
    if (edge.kind === 'sync' || edge.kind === 'async') {
      upsertStructuralEdge(edgeMap, edge);
    }
  }

  const chainSet = new Set();
  const callChains = [];
  for (const chain of g.callChains) {
    const key = JSON.stringify(chain);
    if (chainSet.has(key)) {
      continue;
    }
    chainSet.add(key);
    callChains.push(chain);
  }

  const flowSet = new Set();
  const dataFlows = [];
  for (const flow of g.dataFlows) {
    const key = typeof flow === 'string' ? flow : flow.description || JSON.stringify(flow);
    if (flowSet.has(key)) {
      continue;
    }
    flowSet.add(key);
    dataFlows.push(flow);
  }

  const hitCounts = {};
  for (const obs of observations) {
    bumpHitCount({
      capturedAt: obs.capturedAt,
      breakpoint: obs.breakpoint || { tag: obs.functionTag, text: obs.varName }
    }, hitCounts);
  }

  return {
    version: GRAPH_VERSION,
    turn: observations.length,
    updatedAt: new Date().toISOString(),
    nodes: [...nodeMap.values()],
    edges: [...edgeMap.values()],
    observations,
    callChains,
    dataFlows,
    hitCounts
  };
}

/**
 * 从 anchor / observations 源数据完整重建 G_t（幂等）
 * @param {object} params
 * @returns {object}
 */
function rebuildCausalGraphFromSources(params = {}) {
  const anchorSnapshots = dedupeSnapshotsByKey(params.anchorSnapshots || []);
  const observations = normalizeObservationsInput(params.observations);
  const logRecords = params.logRecords || [];
  const callGraph = params.callGraph
    || buildCallGraphFromSources(anchorSnapshots, logRecords);

  let graph = emptyGraph();
  for (const snapshot of anchorSnapshots) {
    graph = updateCausalGraph(graph, {
      anchorSnapshots: [snapshot],
      observations,
      logRecords,
      callGraph
    });
  }
  return compactCausalGraph(graph);
}

/**
 * @param {object} snapshot
 * @param {object} hitCounts
 */
function bumpHitCount(snapshot, hitCounts) {
  const bp = snapshot?.breakpoint || {};
  const parsed = bp.tag ? parseTag(bp.tag) : null;
  const line = parsed?.line ?? bp.line;
  const column = parsed?.column ?? bp.column;
  if (line == null || column == null) {
    return;
  }
  const key = `${line}:${column}`;
  hitCounts[key] = (Number(hitCounts[key]) || 0) + 1;
}

/**
 * @param {object} params
 * @returns {object}
 */
function updateCausalGraph(causalGraph, params = {}) {
  const graph = normalizeGraph(causalGraph);
  const incomingSnapshots = params.anchorSnapshots || [];
  const anchorSnapshots = filterNewSnapshots(graph, incomingSnapshots);
  const observationsMap = normalizeObservationsInput(params.observations);
  const logRecords = params.logRecords || [];
  const callGraph = params.callGraph;

  const { nodeMap, edgeMap } = indexGraph(graph);
  const hitCounts = { ...graph.hitCounts };
  let turn = Number(graph.turn) || 0;

  if (!anchorSnapshots.length) {
    if (!callGraph) {
      return compactCausalGraph(graph);
    }
    const structureTurn = Math.max(turn, 1);
    applyCallGraphStructure(nodeMap, edgeMap, callGraph, structureTurn);
    return compactCausalGraph({
      version: GRAPH_VERSION,
      turn,
      updatedAt: new Date().toISOString(),
      nodes: [...nodeMap.values()],
      edges: [...edgeMap.values()],
      observations: graph.observations,
      callChains: graph.callChains,
      dataFlows: graph.dataFlows,
      hitCounts
    });
  }

  if (!callGraph) {
    throw new Error('updateCausalGraph 需要 callGraph（请先 graph build 生成 call-graph.json）');
  }

  const newObservations = [];
  const newCallChains = [];
  const newDataFlows = [];

  for (const snapshot of anchorSnapshots) {
    turn += 1;

    const breakpointTag = snapshot?.breakpoint?.tag || null;
    const parsedTag = breakpointTag ? parseTag(breakpointTag) : null;
    const functionName = parsedTag?.functionName || snapshot?.breakpoint?.text || 'unknown';
    const capturedAt = snapshot?.capturedAt || new Date().toISOString();

    bumpHitCount(snapshot, hitCounts);

    if (breakpointTag) {
      upsertNode(nodeMap, {
        id: breakpointTag,
        type: 'function',
        tag: breakpointTag,
        functionName,
        label: functionName,
        lastTurn: turn
      });
    }

    const chain = extractCallChain(snapshot, logRecords);
    if (chain.length) {
      newCallChains.push(chain);
    }

    const obsValue = resolveObservationValue(observationsMap, snapshot);
    let valueNode = null;

    if (obsValue && obsValue.value !== undefined) {
      const valueId = valueNodeId(breakpointTag, obsValue.varName, obsValue.value);
      const existingValue = nodeMap.get(valueId);
      valueNode = {
        id: valueId,
        type: 'value',
        firstTurn: existingValue?.firstTurn || turn,
        lastTurn: turn,
        turn,
        functionTag: breakpointTag,
        functionName,
        varName: obsValue.varName,
        value: obsValue.value,
        valueHash: strongHash(obsValue.value),
        capturedAt: existingValue?.capturedAt || capturedAt
      };
      upsertNode(nodeMap, valueNode);

      const crossMatches = linkSimilarValuesAcrossFunctions(
        edgeMap,
        breakpointTag,
        obsValue,
        nodeMap,
        turn
      );

      const preview = stableStringify(obsValue.value);
      if (crossMatches.length) {
        for (const match of crossMatches) {
          newDataFlows.push({
            turn,
            description: `${functionName} 与 ${match.functionName} 观测到相似值（${match.matchType}, w=${match.weight}）`
          });
        }
      } else {
        newDataFlows.push({
          turn,
          description: `${functionName} 观测 ${obsValue.varName} = ${preview.length > 80 ? `${preview.slice(0, 80)}…` : preview}`
        });
      }
    }

    newObservations.push({
      turn,
      snapshotKey: snapshotKey(snapshot),
      capturedAt,
      breakpoint: snapshot.breakpoint || null,
      functionTag: breakpointTag,
      varName: obsValue?.varName || null,
      value: obsValue?.value ?? null,
      valueNodeId: valueNode?.id || null,
      callChain: chain
    });
  }

  applyCallGraphStructure(nodeMap, edgeMap, callGraph, turn);

  return {
    version: GRAPH_VERSION,
    turn,
    updatedAt: new Date().toISOString(),
    nodes: [...nodeMap.values()],
    edges: [...edgeMap.values()],
    observations: [...graph.observations, ...newObservations],
    callChains: [...graph.callChains, ...newCallChains],
    dataFlows: [...graph.dataFlows, ...newDataFlows],
    hitCounts
  };
}

/**
 * @param {object|string|Map} observations
 * @returns {object}
 */
function normalizeObservationsInput(observations) {
  if (!observations) {
    return {};
  }
  if (typeof observations === 'string') {
    if (!fs.existsSync(observations)) {
      return {};
    }
    return normalizeObservationsInput(JSON.parse(fs.readFileSync(observations, 'utf8')));
  }
  if (observations instanceof Map) {
    return Object.fromEntries(observations);
  }
  if (Array.isArray(observations.records)) {
    const map = {};
    for (const item of observations.records) {
      if (!item?.functionTag) continue;
      map[item.functionTag] = map[item.functionTag] || {};
      map[item.functionTag][item.varName || 'value'] = item.value;
    }
    return map;
  }
  if (Array.isArray(observations)) {
    const map = {};
    for (const item of observations) {
      if (!item?.functionTag) continue;
      map[item.functionTag] = map[item.functionTag] || {};
      map[item.functionTag][item.varName || 'value'] = item.value;
    }
    return map;
  }
  return observations;
}

/**
 * @param {object} graph
 * @param {string} filePath
 */
function writeCausalGraph(graph, filePath) {
  const outPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(graph, null, 2)}\n`, 'utf8');
}

/**
 * @param {string} filePath
 * @returns {object}
 */
function loadCausalGraph(filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    return emptyGraph();
  }
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return normalizeGraph(raw);
  } catch (_) {
    return emptyGraph();
  }
}

/**
 * @param {object} options
 * @returns {object}
 */
function updateCausalGraphFromFiles(options = {}) {
  const causalGraphFile = options.causalGraphFile;
  const anchorFile = options.anchorFile;
  const observationsFile = options.observationsFile;
  const logsFile = options.logsFile;
  const callGraphFile = options.callGraphFile;

  const anchorSnapshots = options.anchorSnapshots || loadAnchorSnapshots(anchorFile);
  const observations = options.observations
    || (observationsFile && fs.existsSync(observationsFile)
      ? JSON.parse(fs.readFileSync(observationsFile, 'utf8'))
      : {});
  const logRecords = options.logRecords || (logsFile ? loadDedupedLogs(logsFile) : []);

  let callGraph = options.callGraph || null;
  if (!callGraph && callGraphFile) {
    callGraph = loadCallGraph(callGraphFile);
  }

  if (!callGraph) {
    if (options.requireCallGraphFile) {
      throw new Error(
        `call-graph 不存在: ${callGraphFile}，请先运行 graph build（collect-breakpoint-observations 会在更新因果图前自动构建）`
      );
    }
    if (anchorSnapshots.length) {
      callGraph = buildCallGraphFromSources(anchorSnapshots, logRecords);
      if (callGraphFile) {
        writeCallGraph(callGraph, callGraphFile);
      }
    } else {
      callGraph = { nodes: [], syncEdges: [], asyncEdges: [] };
    }
  }

  const existingGraph = options.existingGraph
    || (causalGraphFile ? loadCausalGraph(causalGraphFile) : emptyGraph());

  let updated;
  if (options.fullRebuild) {
    updated = rebuildCausalGraphFromSources({
      anchorSnapshots,
      observations,
      logRecords,
      callGraph
    });
  } else {
    updated = updateCausalGraph(existingGraph, {
      anchorSnapshots,
      observations,
      logRecords,
      callGraph
    });
    updated = compactCausalGraph(updated);
  }

  if (causalGraphFile) {
    writeCausalGraph(updated, causalGraphFile);
  }

  return updated;
}

module.exports = {
  GRAPH_VERSION,
  emptyGraph,
  normalizeGraph,
  strongHash,
  matchValues,
  resolveObservationValue,
  snapshotKey,
  filterNewSnapshots,
  compactCausalGraph,
  rebuildCausalGraphFromSources,
  linkSimilarValuesAcrossFunctions,
  updateCausalGraph,
  updateCausalGraphFromFiles,
  loadCausalGraph,
  writeCausalGraph,
  loadCallGraph,
  writeCallGraph,
  buildCallGraphFromSources,
  buildAndWriteCallGraph,
  explicitStaticCGToCallGraph,
  initCausalGraphFromExplicitStatic,
  applyCallGraphStructure,
  loadAnchorSnapshots,
  loadDedupedLogs
};
