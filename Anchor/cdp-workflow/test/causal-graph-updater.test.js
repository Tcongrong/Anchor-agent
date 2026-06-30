const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');
const os = require('os');
const {
  emptyGraph,
  matchValues,
  strongHash,
  buildCallGraphFromSources,
  updateCausalGraph,
  explicitStaticCGToCallGraph,
  initCausalGraphFromExplicitStatic
} = require('../src/modules/causal-graph-updater');

const SAMPLE_LOGS = [
  {
    tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548',
    functionName: 'runCatalogSearch'
  },
  {
    tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:18109',
    functionName: 'dispatchSearchCommand'
  }
];

const SAMPLE_SNAPSHOT = {
  capturedAt: '2026-05-30T12:16:45.027Z',
  breakpoint: {
    url: 'script:5',
    line: 1,
    tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548',
    text: 'emitSearchTelemetry(_0x3a761d)'
  },
  anchor: {
    Sh: [{
      functionName: 'runCatalogSearch',
      url: 'http://127.0.0.1:4173/assets/search.app.bundle.js',
      line: 1,
      column: 14931
    }],
    Ah: [{
      kind: 'async-segment',
      depth: 0,
      description: 'await'
    }, {
      kind: 'async-frame',
      depth: 0,
      functionName: 'dispatchSearchCommand',
      url: 'http://127.0.0.1:4173/assets/search.app.bundle.js',
      line: 1,
      column: 18109
    }, {
      kind: 'async-frame',
      depth: 0,
      functionName: '(anonymous)',
      url: 'http://127.0.0.1:4173/assets/search.app.bundle.js',
      line: 1,
      column: 18683
    }]
  }
};

test('matchValues: 长字符串精确匹配', () => {
  const s = 'x'.repeat(21);
  const matched = matchValues(s, s);
  assert.equal(matched.weight, 1);
  assert.equal(matched.matchType, 'exact-string');
});

test('matchValues: 对象字段强哈希匹配', () => {
  const a = { action: 'catalog.search', search_sig: 'ss_vgrg_41' };
  const b = { search_sig: 'ss_vgrg_41', action: 'catalog.search' };
  const matched = matchValues(a, b);
  assert.equal(matched.weight, 0.9);
  assert.equal(matched.matchType, 'exact-object');
});

test('matchValues: 子串匹配', () => {
  const matched = matchValues('prefix-ss_vgrg_41-suffix', 'ss_vgrg_41');
  assert.equal(matched.weight, 0.5);
  assert.equal(matched.matchType, 'substring');
});

test('matchValues: 不匹配时返回 null', () => {
  assert.equal(matchValues('abc', 'xyz'), null);
});

test('updateCausalGraph: 空图增量写入节点与边', () => {
  const observations = {
    'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548': {
      'emitSearchTelemetry(_0x3a761d)': {
        action: 'catalog.search',
        search_sig: 'ss_vgrg_41'
      }
    }
  };

  const callGraph = buildCallGraphFromSources([SAMPLE_SNAPSHOT], SAMPLE_LOGS);
  const updated = updateCausalGraph(emptyGraph(), {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations,
    logRecords: SAMPLE_LOGS,
    callGraph
  });

  assert.equal(updated.turn, 1);
  assert.ok(updated.nodes.some((node) => node.type === 'function'));
  assert.ok(updated.nodes.some((node) => node.type === 'value'));
  assert.ok(updated.edges.some((edge) => edge.kind === 'async'));
  assert.equal(updated.edges.filter((edge) => edge.kind === 'data').length, 0);
  assert.equal(updated.observations.length, 1);
  assert.equal(updated.hitCounts['1:14548'], 1);
});

test('updateCausalGraph: 不同函数相似值在函数节点间连 data 边', () => {
  const tagA = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';
  const tagB = 'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:18109';
  const value = { action: 'catalog.search', search_sig: 'ss_vgrg_41' };

  const callGraphA = buildCallGraphFromSources([SAMPLE_SNAPSHOT], SAMPLE_LOGS);
  const first = updateCausalGraph(emptyGraph(), {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations: {
      [tagA]: { 'emitSearchTelemetry(_0x3a761d)': value }
    },
    logRecords: SAMPLE_LOGS,
    callGraph: callGraphA
  });

  const snapshotB = {
    ...SAMPLE_SNAPSHOT,
    capturedAt: '2026-05-30T12:17:00.000Z',
    breakpoint: {
      ...SAMPLE_SNAPSHOT.breakpoint,
      tag: tagB,
      text: 'searchPayload'
    }
  };

  const callGraphB = buildCallGraphFromSources([SAMPLE_SNAPSHOT, snapshotB], SAMPLE_LOGS);
  const updated = updateCausalGraph(first, {
    anchorSnapshots: [snapshotB],
    observations: {
      [tagB]: { searchPayload: value }
    },
    logRecords: SAMPLE_LOGS,
    callGraph: callGraphB
  });

  const dataEdges = updated.edges.filter((edge) => edge.kind === 'data');
  assert.equal(dataEdges.length, 1);
  assert.equal(dataEdges[0].relation, 'value-similarity');
  assert.equal(dataEdges[0].weight, 0.9);
  assert.ok(dataEdges[0].from.includes('runCatalogSearch') || dataEdges[0].to.includes('runCatalogSearch'));
  assert.ok(dataEdges[0].from.includes('dispatchSearchCommand') || dataEdges[0].to.includes('dispatchSearchCommand'));
});

test('updateCausalGraph: 同一函数跨 turn 相似值不连 data 边', () => {
  const tag = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';
  const observations = {
    [tag]: {
      'emitSearchTelemetry(_0x3a761d)': { action: 'catalog.search', search_sig: 'ss_vgrg_41' }
    }
  };

  const callGraph = buildCallGraphFromSources([SAMPLE_SNAPSHOT], SAMPLE_LOGS);
  const first = updateCausalGraph(emptyGraph(), {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations,
    logRecords: SAMPLE_LOGS,
    callGraph
  });

  const updated = updateCausalGraph(first, {
    anchorSnapshots: [{ ...SAMPLE_SNAPSHOT, capturedAt: '2026-05-30T12:17:00.000Z' }],
    observations,
    logRecords: SAMPLE_LOGS,
    callGraph
  });

  const matchEdges = updated.edges.filter((edge) => edge.kind === 'data');
  assert.equal(matchEdges.length, 0);
  assert.equal(updated.turn, 2);
  assert.equal(updated.nodes.filter((node) => node.type === 'value').length, 1);
  assert.equal(updated.observations.length, 2);
});

test('updateCausalGraph: 重复处理同一快照不会重复创建值节点', () => {
  const observations = {
    'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548': {
      'emitSearchTelemetry(_0x3a761d)': { action: 'catalog.search', search_sig: 'ss_vgrg_41' }
    }
  };

  const callGraph = buildCallGraphFromSources([SAMPLE_SNAPSHOT], SAMPLE_LOGS);
  const first = updateCausalGraph(emptyGraph(), {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations,
    logRecords: SAMPLE_LOGS,
    callGraph
  });

  const second = updateCausalGraph(first, {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations,
    logRecords: SAMPLE_LOGS,
    callGraph
  });

  assert.equal(second.turn, 1);
  assert.equal(second.nodes.filter((node) => node.type === 'value').length, 1);
  assert.equal(second.observations.length, 1);
});

test('updateCausalGraph: 增量合并保留历史函数节点与观测', () => {
  const tagA = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';
  const tagB = 'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:18109';
  const valueA = { action: 'catalog.search', search_sig: 'ss_vgrg_41' };

  const callGraphA = buildCallGraphFromSources([SAMPLE_SNAPSHOT], SAMPLE_LOGS);
  const first = updateCausalGraph(emptyGraph(), {
    anchorSnapshots: [SAMPLE_SNAPSHOT],
    observations: { [tagA]: { 'emitSearchTelemetry(_0x3a761d)': valueA } },
    logRecords: SAMPLE_LOGS,
    callGraph: callGraphA
  });

  const snapshotB = {
    ...SAMPLE_SNAPSHOT,
    capturedAt: '2026-05-30T12:17:00.000Z',
    breakpoint: { ...SAMPLE_SNAPSHOT.breakpoint, tag: tagB, text: 'searchPayload' }
  };
  const callGraphB = buildCallGraphFromSources([SAMPLE_SNAPSHOT, snapshotB], SAMPLE_LOGS);
  const second = updateCausalGraph(first, {
    anchorSnapshots: [snapshotB],
    observations: { [tagB]: { searchPayload: { other: 'x' } } },
    logRecords: SAMPLE_LOGS,
    callGraph: callGraphB
  });

  assert.equal(second.turn, 2);
  assert.equal(second.observations.length, 2);
  assert.ok(second.nodes.some((node) => node.id === tagA));
  assert.ok(second.nodes.some((node) => node.id === tagB));
  assert.ok(second.nodes.some((node) => node.type === 'value' && node.functionTag === tagA));
});

test('rebuildCausalGraphFromSources: 从单条 anchor 重建为 turn=1 单值节点', () => {
  const { rebuildCausalGraphFromSources } = require('../src/modules/causal-graph-updater');
  const observations = {
    'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548': {
      'emitSearchTelemetry(_0x3a761d)': { action: 'catalog.search', search_sig: 'ss_vgrg_41' }
    }
  };

  const rebuilt = rebuildCausalGraphFromSources({
    anchorSnapshots: [SAMPLE_SNAPSHOT, SAMPLE_SNAPSHOT],
    observations,
    logRecords: SAMPLE_LOGS
  });

  assert.equal(rebuilt.turn, 1);
  assert.equal(rebuilt.observations.length, 1);
  assert.equal(rebuilt.nodes.filter((node) => node.type === 'value').length, 1);
  assert.equal(rebuilt.edges.filter((edge) => edge.kind === 'sync').length, 1);
  assert.equal(rebuilt.edges.filter((edge) => edge.kind === 'async').length, 1);
  assert.equal(rebuilt.hitCounts['1:14548'], 1);
});

test('strongHash: 对象键序无关', () => {
  assert.equal(
    strongHash({ a: 1, b: 2 }),
    strongHash({ b: 2, a: 1 })
  );
});

test('explicitStaticCGToCallGraph: 转为 sync 边且 source=static-explicit', () => {
  const payload = {
    generatedAt: '2026-01-01T00:00:00.000Z',
    ExplicitStaticCG: {
      nodes: [
        { tag: 'script::caller@1:10', functionName: 'caller' },
        { tag: 'script::callee@1:20', functionName: 'callee' }
      ],
      edges: [
        { caller_tag: 'script::caller@1:10', callee_tag: 'script::callee@1:20', kind: 'static' }
      ],
      stats: { nodeCount: 2, edgeCount: 1 }
    }
  };

  const callGraph = explicitStaticCGToCallGraph(payload);
  assert.equal(callGraph.nodes.length, 2);
  assert.equal(callGraph.syncEdges.length, 1);
  assert.equal(callGraph.syncEdges[0].from, 'script::caller@1:10');
  assert.equal(callGraph.syncEdges[0].sources[0], 'static-explicit');
  assert.equal(callGraph.asyncEdges.length, 0);
});

test('initCausalGraphFromExplicitStatic: 写入 G_0 且可被运行时更新叠加', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'causal-init-'));
  const dedupedFile = path.join(tmpDir, 'deduped.json');
  const mapFile = path.join(tmpDir, 'map.json');
  const causalGraphFile = path.join(tmpDir, 'causual-graph.json');
  const explicitStaticFile = path.join(tmpDir, 'explicit-static-call-graph.json');

  const callerTag = 'script::caller@1:10';
  const calleeTag = 'script::callee@1:20';

  fs.writeFileSync(dedupedFile, JSON.stringify({
    records: [
      {
        tag: callerTag,
        functionName: 'caller',
        functionCode: 'function caller(){callee();}',
        range: { start: 0, end: 40 }
      },
      {
        tag: calleeTag,
        functionName: 'callee',
        functionCode: "function callee(){fetch('/x');}",
        range: { start: 41, end: 90 }
      }
    ]
  }), 'utf8');

  fs.writeFileSync(mapFile, JSON.stringify({
    [callerTag]: { functionName: 'caller', range: { start: 0, end: 40 } },
    [calleeTag]: { functionName: 'callee', range: { start: 41, end: 90 } }
  }), 'utf8');

  const initResult = initCausalGraphFromExplicitStatic({
    causalGraphFile,
    dedupedFile,
    mapFile,
    astsDir: path.join(tmpDir, 'asts'),
    sinkApis: ['fetch'],
    explicitStaticFile
  });

  assert.equal(initResult.causalGraph.turn, 0);
  assert.ok(fs.existsSync(explicitStaticFile));
  assert.ok(initResult.causalGraph.nodes.some((node) => node.id === callerTag));
  assert.ok(initResult.causalGraph.edges.some(
    (edge) => edge.from === callerTag
      && edge.to === calleeTag
      && edge.kind === 'sync'
      && edge.source === 'static-explicit'
  ));

  const runtimeCallGraph = {
    nodes: [{ id: calleeTag, tag: calleeTag, label: 'callee' }],
    syncEdges: [{ from: calleeTag, to: 'script::sink@1:99', count: 1, sources: ['call-graph'] }],
    asyncEdges: []
  };
  const updated = updateCausalGraph(initResult.causalGraph, {
    anchorSnapshots: [],
    callGraph: runtimeCallGraph
  });

  assert.ok(updated.edges.some((edge) => edge.source === 'static-explicit'));
  assert.ok(updated.edges.some((edge) => edge.source === 'call-graph'));

  fs.rmSync(tmpDir, { recursive: true, force: true });
});
