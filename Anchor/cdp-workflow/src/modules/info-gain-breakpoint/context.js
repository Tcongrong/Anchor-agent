/**
 * 构造 TC2 LLM 上下文：焦点函数、Sink 距离、因果图摘要
 */

const DISCONNECTED_DISTANCE = 1000000;

/**
 * @param {object} staticCG StaticCG 或含 nodes/sinkDistances 的对象
 * @returns {Map<string, { distance: number, isSink: boolean, sinkApis: string[] }>}
 */
function buildSinkDistanceIndex(staticCG) {
  const index = new Map();
  const graph = staticCG?.StaticCG || staticCG || {};
  const nodes = graph.nodes || [];

  for (const node of nodes) {
    if (typeof node === 'string') continue;
    index.set(node.tag, {
      distance: node.sinkDistance ?? DISCONNECTED_DISTANCE,
      isSink: Boolean(node.isSink),
      sinkApis: node.sinkApis || []
    });
  }

  const sinkDistances = graph.sinkDistances || {};
  for (const [tag, distance] of Object.entries(sinkDistances)) {
    const existing = index.get(tag) || { isSink: false, sinkApis: [] };
    index.set(tag, { ...existing, distance: Number(distance) });
  }

  return index;
}

/**
 * @param {number} distance
 * @param {string[]} sinkApis
 * @returns {string}
 */
function formatSinkDistance(distance, sinkApis) {
  if (sinkApis?.length) {
    return `自身为 Sink（${sinkApis.join(', ')}）`;
  }
  if (!Number.isFinite(distance) || distance >= DISCONNECTED_DISTANCE) {
    return '未连接到 Sink';
  }
  if (distance === 0) {
    return '位于 Sink 节点（距离 0 步）';
  }
  return `距离最近 Sink ${distance} 步`;
}

/**
 * @param {Array<{ tag: string, prob: number, functionName?: string }>} distribution
 * @param {number} count
 * @returns {Array<{ rank: number, tag: string, functionName: string, prob: number }>}
 */
function selectFocusFunctions(distribution, count = 3) {
  return [...distribution]
    .sort((a, b) => b.prob - a.prob || a.tag.localeCompare(b.tag))
    .slice(0, count)
    .map((item, idx) => ({
      rank: idx + 1,
      tag: item.tag,
      functionName: item.functionName || extractNameFromTag(item.tag),
      prob: item.prob
    }));
}

/**
 * @param {string} tag
 * @returns {string}
 */
function extractNameFromTag(tag) {
  const m = String(tag).match(/::([^@]+)@/);
  return m ? m[1] : tag;
}

/**
 * @param {object} funcEntry
 * @returns {Array<object>}
 */
function extractObservableVariables(funcEntry) {
  return (funcEntry?.valueExpressions || [])
    .filter((expr) => expr.binding || expr.role === 'return-expr')
    .map((expr) => ({
      var_name: expr.binding || expr.text?.slice(0, 40) || expr.id,
      text: expr.text,
      role: expr.role,
      kind: expr.kind,
      runtime_loc: expr.runtimeLoc || null,
      source_loc: expr.sourceLoc || null,
      id: expr.id
    }));
}

/**
 * @param {object} focusFn
 * @param {object|null} funcEntry
 * @param {Map} sinkIndex
 * @returns {object}
 */
function buildFocusFunctionContext(focusFn, funcEntry, sinkIndex) {
  const sinkInfo = sinkIndex.get(focusFn.tag) || { distance: DISCONNECTED_DISTANCE, isSink: false, sinkApis: [] };

  return {
    rank: focusFn.rank,
    tag: focusFn.tag,
    functionName: focusFn.functionName,
    prob: focusFn.prob,
    sinkDistanceText: formatSinkDistance(sinkInfo.distance, sinkInfo.sinkApis),
    sinkDistance: sinkInfo.distance,
    keyStatements: (funcEntry?.statements || []).slice(0, 12).map((stmt) => ({
      id: stmt.id,
      text: stmt.text,
      astType: stmt.astType
    })),
    observables: extractObservableVariables(funcEntry)
  };
}

/**
 * @param {object|null} causalGraph
 * @returns {string}
 */
function summarizeCausalGraph(causalGraph) {
  if (!causalGraph || (typeof causalGraph === 'object' && !Object.keys(causalGraph).length)) {
    return '尚无运行时信息';
  }

  const parts = [];

  if (Array.isArray(causalGraph.callChains) && causalGraph.callChains.length) {
    const examples = causalGraph.callChains.slice(0, 3).map((chain) =>
      Array.isArray(chain) ? chain.join(' → ') : String(chain)
    );
    parts.push(`已观测调用链示例: ${examples.join('; ')}`);
  }

  if (Array.isArray(causalGraph.dataFlows) && causalGraph.dataFlows.length) {
    const flows = causalGraph.dataFlows.slice(0, 3).map((flow) =>
      typeof flow === 'string' ? flow : flow.description || JSON.stringify(flow)
    );
    parts.push(`数据流动片段: ${flows.join('; ')}`);
  }

  if (Array.isArray(causalGraph.edges) && causalGraph.edges.length) {
    const sync = causalGraph.edges.filter((edge) => edge.kind === 'sync').length;
    const async = causalGraph.edges.filter((edge) => edge.kind === 'async').length;
    const data = causalGraph.edges.filter((edge) => edge.kind === 'data').length;
    parts.push(`因果边 ${causalGraph.edges.length} 条（sync ${sync}，async ${async}，data ${data}）`);
  }

  if (Array.isArray(causalGraph.nodes) && causalGraph.nodes.length) {
    const fnCount = causalGraph.nodes.filter((node) => node.type === 'function').length;
    const valCount = causalGraph.nodes.filter((node) => node.type === 'value').length;
    parts.push(`节点 ${causalGraph.nodes.length} 个（函数 ${fnCount}，值 ${valCount}）`);
  }

  if (typeof causalGraph.turn === 'number' && causalGraph.turn > 0) {
    parts.push(`当前 turn ${causalGraph.turn}`);
  }

  if (Array.isArray(causalGraph.observations) && causalGraph.observations.length) {
    parts.push(`观测记录 ${causalGraph.observations.length} 条`);
  }

  return parts.length ? parts.join('\n') : '尚无运行时信息';
}

/**
 * @param {object} params
 * @returns {object}
 */
function buildLlmContext({
  taskDescription,
  distribution,
  funcDict,
  staticCG,
  causalGraph,
  focusCount = 3
}) {
  const sinkIndex = buildSinkDistanceIndex(staticCG);
  const focusFunctions = selectFocusFunctions(distribution, focusCount);
  const dictionary = funcDict?.dictionary || funcDict || {};

  const focusContexts = focusFunctions.map((fn) =>
    buildFocusFunctionContext(fn, dictionary[fn.tag], sinkIndex)
  );

  return {
    taskDescription,
    distributionEntropy: null,
    focusFunctions: focusContexts,
    causalGraphSummary: summarizeCausalGraph(causalGraph),
    allObservableCandidates: collectAllObservables(focusContexts, dictionary)
  };
}

/**
 * @param {Array} focusContexts
 * @param {object} dictionary
 * @returns {Array}
 */
function collectAllObservables(focusContexts, dictionary) {
  const seen = new Set();
  const result = [];

  for (const ctx of focusContexts) {
    for (const obs of ctx.observables) {
      const loc = obs.runtime_loc || obs.source_loc;
      const key = `${ctx.tag}::${obs.var_name}::${loc?.line}:${loc?.column}`;
      if (seen.has(key)) continue;
      seen.add(key);
      result.push({
        ...obs,
        functionTag: ctx.tag,
        functionName: ctx.functionName,
        funcEntry: dictionary[ctx.tag]
      });
    }
  }

  return result;
}

/**
 * @param {object} anchorSelection
 * @param {object} opts
 * @returns {Promise<Array<{ tag: string, prob: number, functionName?: string }>>}
 */
async function resolveDistribution(anchorSelection, opts) {
  if (anchorSelection?.distribution?.length) {
    return anchorSelection.distribution.map((item) => ({
      tag: item.tag || item.func_id,
      prob: item.confidence ?? item.prob,
      functionName: item.functionName
    }));
  }

  if (opts.structuralResult?.distribution?.length) {
    return opts.structuralResult.distribution.map((item) => ({
      tag: item.func_id,
      prob: item.prob,
      functionName: item.functionName
    }));
  }

  const anchors = anchorSelection?.anchors || [];
  if (anchors.length && anchors.every((a) => a.structuralPrior?.prob != null)) {
    const { runStructuralPrior } = require('../structural-prior');
    const structuralResult = runStructuralPrior({
      dedupedFile: opts.dedupedFile,
      taskDescription: anchorSelection.taskDescription || opts.taskDescription,
      sinkApis: anchorSelection.structuralPrior?.sinkApis || opts.sinkApis || [],
      cacheFile: opts.cacheFile,
      useCache: opts.useCache !== false
    });
    return structuralResult.distribution.map((item) => ({
      tag: item.func_id,
      prob: item.prob,
      functionName: item.functionName
    }));
  }

  throw new Error('无法从 anchor-selection 解析概率分布 H_t，请先运行 select-anchors.js');
}

module.exports = {
  DISCONNECTED_DISTANCE,
  buildSinkDistanceIndex,
  formatSinkDistance,
  selectFocusFunctions,
  extractNameFromTag,
  extractObservableVariables,
  buildFocusFunctionContext,
  summarizeCausalGraph,
  buildLlmContext,
  collectAllObservables,
  resolveDistribution
};
