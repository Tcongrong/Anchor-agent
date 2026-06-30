const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');
const os = require('os');

const { parseFunctionCode } = require('../src/modules/structural-prior/ast-utils');
const {
  buildStaticCallGraph,
  computeSinkDistances,
  collectResolvableCalleeNames
} = require('../src/modules/structural-prior/static-call-graph');
const { buildConstContext } = require('../src/modules/structural-prior/const-prop');
const {
  buildStaticCG,
  buildExplicitStaticCG,
  extractFunctionNodeFromBundle,
  DISCONNECTED_DISTANCE,
  DEFAULT_NETWORK_SINK_APIS
} = require('../src/modules/static-cg-builder');

const FIXTURE_DEDUPED = path.join(__dirname, '..', 'cdp-ast-output', 'runtime-function-logs.deduped.json');
const FIXTURE_MAP = path.join(__dirname, '..', 'cdp-ast-output', 'function-tag-map.json');
const FIXTURE_ASTS = path.join(__dirname, '..', 'cdp-ast-output', 'asts');

test('collectResolvableCalleeNames: 识别 Identifier 与 MemberExpression', () => {
  const fn = parseFunctionCode("function f(){dispatchSearchCommand(x); console.log(y);}");
  const context = buildConstContext(fn);
  let callNode = null;
  const { walkAst } = require('../src/modules/structural-prior/ast-utils');
  walkAst(fn, (node) => {
    if (node.type === 'CallExpression' && node.callee?.type === 'Identifier' && node.callee.name === 'dispatchSearchCommand') {
      callNode = node;
    }
  });
  const names = collectResolvableCalleeNames(callNode, context);
  assert.ok(names.has('dispatchSearchCommand'));
});

test('extractFunctionNodeFromBundle: 按 range 提取最内层函数', () => {
  const code = 'function outer(){ function inner(){ return 1; } inner(); } outer();';
  const acorn = require('acorn');
  const program = acorn.parse(code, { ecmaVersion: 2022, sourceType: 'script' });
  let innerNode = null;
  const { walkAst, FUNCTION_TYPES } = require('../src/modules/structural-prior/ast-utils');
  walkAst(program, (node) => {
    if (FUNCTION_TYPES.has(node.type) && node.id?.name === 'inner') {
      innerNode = node;
    }
  });
  assert.ok(innerNode);
  const extracted = extractFunctionNodeFromBundle(program, {
    start: innerNode.start,
    end: innerNode.end
  });
  assert.equal(extracted?.id?.name, 'inner');
});

test('buildStaticCG: 合成样本含 Sink 与调用边', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'static-cg-'));
  const dedupedFile = path.join(tmpDir, 'deduped.json');
  const mapFile = path.join(tmpDir, 'map.json');

  const callerTag = 'script::caller@1:10';
  const sinkTag = 'script::fetcher@1:30';

  fs.writeFileSync(dedupedFile, JSON.stringify({
    records: [
      {
        tag: callerTag,
        functionName: 'caller',
        functionCode: 'function caller(){fetcher("/api");}',
        range: { start: 0, end: 40 }
      },
      {
        tag: sinkTag,
        functionName: 'fetcher',
        functionCode: "function fetcher(url){return fetch(url);}",
        range: { start: 41, end: 90 }
      }
    ]
  }), 'utf8');

  fs.writeFileSync(mapFile, JSON.stringify({
    [callerTag]: { functionName: 'caller', range: { start: 0, end: 40 } },
    [sinkTag]: { functionName: 'fetcher', range: { start: 41, end: 90 } }
  }), 'utf8');

  const result = buildStaticCG({
    dedupedFile,
    mapFile,
    astsDir: path.join(tmpDir, 'asts'),
    sinkApis: ['fetch']
  });

  assert.equal(result.StaticCG.stats.nodeCount, 2);
  assert.ok(result.StaticCG.edges.some((edge) => edge.caller_tag === callerTag && edge.callee_tag === sinkTag));
  assert.ok(result.StaticCG.sinkNodes.includes(sinkTag));
  assert.equal(result.StaticCG.sinkDistances[callerTag], 1);
  assert.equal(result.StaticCG.sinkDistances[sinkTag], 0);

  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('buildStaticCG: 未连通节点使用大常数距离', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'static-cg-'));
  const dedupedFile = path.join(tmpDir, 'deduped.json');
  const mapFile = path.join(tmpDir, 'map.json');
  const isolatedTag = 'script::isolated@1:1';

  fs.writeFileSync(dedupedFile, JSON.stringify({
    records: [{
      tag: isolatedTag,
      functionName: 'isolated',
      functionCode: 'function isolated(){return 1;}',
      range: { start: 0, end: 30 }
    }]
  }), 'utf8');

  fs.writeFileSync(mapFile, JSON.stringify({
    [isolatedTag]: { functionName: 'isolated', range: { start: 0, end: 30 } }
  }), 'utf8');

  const result = buildStaticCG({
    dedupedFile,
    mapFile,
    astsDir: path.join(tmpDir, 'asts'),
    sinkApis: ['fetch']
  });

  assert.equal(result.StaticCG.sinkDistances[isolatedTag], DISCONNECTED_DISTANCE);
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('buildExplicitStaticCG: 仅保留 kind=static 的明确调用边', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'static-cg-'));
  const dedupedFile = path.join(tmpDir, 'deduped.json');
  const mapFile = path.join(tmpDir, 'map.json');

  const callerTag = 'script::caller@1:10';
  const calleeTag = 'script::callee@1:20';
  const ambiguousTagA = 'script::handlerA@1:30';
  const ambiguousTagB = 'script::handlerB@1:40';

  fs.writeFileSync(dedupedFile, JSON.stringify({
    records: [
      {
        tag: callerTag,
        functionName: 'caller',
        functionCode: 'function caller(){callee(); handler();}',
        range: { start: 0, end: 50 }
      },
      {
        tag: calleeTag,
        functionName: 'callee',
        functionCode: "function callee(){fetch('/x');}",
        range: { start: 51, end: 100 }
      },
      {
        tag: ambiguousTagA,
        functionName: 'handler',
        functionCode: 'function handler(){return 1;}',
        range: { start: 101, end: 140 }
      },
      {
        tag: ambiguousTagB,
        functionName: 'handler',
        functionCode: 'function handler(){return 2;}',
        range: { start: 141, end: 180 }
      }
    ]
  }), 'utf8');

  fs.writeFileSync(mapFile, JSON.stringify({
    [callerTag]: { functionName: 'caller', range: { start: 0, end: 50 } },
    [calleeTag]: { functionName: 'callee', range: { start: 51, end: 100 } },
    [ambiguousTagA]: { functionName: 'handler', range: { start: 101, end: 140 } },
    [ambiguousTagB]: { functionName: 'handler', range: { start: 141, end: 180 } }
  }), 'utf8');

  const full = buildStaticCG({
    dedupedFile,
    mapFile,
    astsDir: path.join(tmpDir, 'asts'),
    sinkApis: ['fetch']
  });
  const explicit = buildExplicitStaticCG({
    dedupedFile,
    mapFile,
    astsDir: path.join(tmpDir, 'asts'),
    sinkApis: ['fetch']
  });

  assert.ok(full.StaticCG.stats.overapproxEdges > 0);
  assert.equal(explicit.mode, 'explicit');
  assert.equal(explicit.ExplicitStaticCG.stats.overapproxEdges, 0);
  assert.ok(explicit.ExplicitStaticCG.stats.excludedOverapproxEdges > 0);
  assert.ok(explicit.ExplicitStaticCG.edges.some(
    (edge) => edge.caller_tag === callerTag && edge.callee_tag === calleeTag && edge.kind === 'static'
  ));
  assert.ok(!explicit.ExplicitStaticCG.edges.some((edge) => edge.kind === 'overapprox'));
  assert.ok(!explicit.ExplicitStaticCG.edges.some(
    (edge) => edge.callee_tag === ambiguousTagA || edge.callee_tag === ambiguousTagB
  ));

  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('integration: 对真实 deduped + asts 构建 StaticCG', () => {
  if (!fs.existsSync(FIXTURE_DEDUPED) || !fs.existsSync(FIXTURE_MAP)) {
    return;
  }

  const result = buildStaticCG({
    dedupedFile: FIXTURE_DEDUPED,
    mapFile: FIXTURE_MAP,
    astsDir: FIXTURE_ASTS,
    sinkApis: DEFAULT_NETWORK_SINK_APIS
  });

  assert.ok(result.StaticCG.stats.nodeCount > 0);
  assert.ok(result.StaticCG.stats.parsedAstCount > 0);
  assert.ok(Array.isArray(result.StaticCG.edges));
  assert.ok(typeof result.StaticCG.sinkDistances === 'object');

  for (const node of result.StaticCG.nodes) {
    assert.ok(typeof node.sinkDistance === 'number');
    assert.ok(node.sinkDistance >= 0);
  }
});

test('static-call-graph: 静态调用边与 sink 距离（回归）', () => {
  const candidates = [
    { tag: 'script::caller@1:10', functionName: 'caller', functionCode: 'function caller(){callee();}' },
    { tag: 'script::callee@1:20', functionName: 'callee', functionCode: "function callee(){fetch('/x');}" }
  ];
  const astByTag = new Map(candidates.map((item) => [item.tag, parseFunctionCode(item.functionCode)]));
  const graph = buildStaticCallGraph(candidates, astByTag);
  assert.ok(graph.edges.some((edge) => edge.from.includes('caller') && edge.to.includes('callee')));

  const sinkTags = new Set(['script::callee@1:20']);
  const distances = computeSinkDistances(graph, sinkTags);
  assert.equal(distances.get('script::caller@1:10'), 1);
});
