const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const {
  findTopFunction,
  passesStructuralPriorAux,
  onCausalPathToSink,
  passedLlmTargetSpecificCheck,
  checkConvergence
} = require('../src/modules/anchor-agent/convergence');
const { buildAgentResult } = require('../src/modules/anchor-agent/output');
const { buildDefaultPaths } = require('../src/modules/anchor-agent/paths');
const { loadInterruptedBreakpointHistory } = require('../src/modules/anchor-agent');

const SAMPLE_GRAPH = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'causual-graph.json'), 'utf8')
);

test('findTopFunction: 取最高置信度', () => {
  const top = findTopFunction([
    { tag: 'a', confidence: 0.1 },
    { tag: 'b', confidence: 0.9 },
    { tag: 'c', confidence: 0.2 }
  ]);
  assert.equal(top.tag, 'b');
  assert.equal(top.confidence, 0.9);
});

test('passedLlmTargetSpecificCheck: 历史分数 >= theta', () => {
  const history = {
    turns: [{
      turn: 1,
      scores: [{ tag: 'f1', score: 0.75 }]
    }]
  };
  assert.equal(passedLlmTargetSpecificCheck('f1', history, 0.7), true);
  assert.equal(passedLlmTargetSpecificCheck('f2', history, 0.7), false);
});

test('onCausalPathToSink: 因果图边连通至 Sink', () => {
  const sinkTags = [
    'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:17801'
  ];
  const tag = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';
  assert.equal(onCausalPathToSink(SAMPLE_GRAPH, tag, sinkTags), true);
});

test('checkConvergence: 高置信 + LLM + 因果路径可收敛', () => {
  const distribution = [
    {
      tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548',
      functionName: 'runCatalogSearch',
      confidence: 0.95,
      structuralPrior: { prob: 0.55 }
    },
    {
      tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::emitSearchTelemetry@1:12393',
      functionName: 'emitSearchTelemetry',
      confidence: 0.05,
      structuralPrior: { prob: 0.57 }
    }
  ];

  const result = checkConvergence({
    anchorSelection: {
      distribution,
      structuralPrior: {
        sinkTags: [
          'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:17801'
        ]
      }
    },
    causalGraph: SAMPLE_GRAPH,
    reverseResult: {
      anchorCandidate: 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548'
    },
    turn: 1,
    maxIterations: 10,
    thetaConf: 0.9,
    thetaAnchor: 0.7
  });

  assert.equal(result.converged, true);
  assert.equal(result.reason, 'converged');
});

test('buildAgentResult: 输出锚点与备选', () => {
  const convergence = {
    converged: false,
    reason: 'max_iterations',
    turn: 3,
    topFunction: {
      tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548',
      functionName: 'runCatalogSearch',
      confidence: 0.5
    },
    checks: {}
  };

  const anchorSelection = {
    taskDescription: 'test',
    distribution: [
      {
        tag: convergence.topFunction.tag,
        functionName: 'runCatalogSearch',
        confidence: 0.5,
        location: { line: 1, column: 14548 }
      },
      {
        tag: 'other',
        functionName: 'otherFn',
        confidence: 0.3
      }
    ],
    structuralPrior: { sinkTags: [] }
  };

  const result = buildAgentResult({
    convergence,
    anchorSelection,
    causalGraph: SAMPLE_GRAPH,
    reverseResult: null,
    anchorHistory: null,
    funcDict: null,
    agentState: { turns: [] }
  });

  assert.equal(result.anchor.functionName, 'runCatalogSearch');
  assert.ok(result.alternates.length >= 1);
  assert.equal(result.status, 'max_iterations');
});

test('buildDefaultPaths: 解析项目根路径', () => {
  const root = path.resolve(__dirname, '..', '..');
  const paths = buildDefaultPaths(root);
  assert.ok(paths.anchorSelection.endsWith('anchor-selection.json'));
  assert.ok(paths.causalGraph.includes('causual-graph.json'));
});

test('loadInterruptedBreakpointHistory: 同任务保留、新任务清空', () => {
  const tmpDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'anchor-agent-'));
  const filePath = path.join(tmpDir, 'interrupted-breakpoints.json');
  fs.writeFileSync(filePath, JSON.stringify({
    version: 1,
    taskDescription: 'task-a',
    entries: [{ key: 'bp1', turn: 1 }]
  }), 'utf8');

  const same = loadInterruptedBreakpointHistory(filePath, 'task-a');
  assert.equal(same.cleared, false);
  assert.equal(same.history.entries.length, 1);

  const changed = loadInterruptedBreakpointHistory(filePath, 'task-b');
  assert.equal(changed.cleared, true);
  assert.equal(changed.history.entries.length, 0);
  assert.equal(changed.history.taskDescription, 'task-b');

  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('loadInterruptedBreakpointHistory: 无 taskDescription 的旧缓存视为新任务', () => {
  const tmpDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'anchor-agent-'));
  const filePath = path.join(tmpDir, 'interrupted-breakpoints.json');
  fs.writeFileSync(filePath, JSON.stringify({
    version: 1,
    entries: [{ key: 'legacy', turn: 2 }]
  }), 'utf8');

  const loaded = loadInterruptedBreakpointHistory(filePath, 'current-task');
  assert.equal(loaded.cleared, true);
  assert.equal(loaded.history.entries.length, 0);

  fs.rmSync(tmpDir, { recursive: true, force: true });
});

test('passesStructuralPriorAux: median 判断', () => {
  const distribution = [
    { tag: 'low', structuralPrior: { prob: 0.01 } },
    { tag: 'mid', structuralPrior: { prob: 0.05 } },
    { tag: 'high', structuralPrior: { prob: 0.9 } }
  ];
  assert.equal(passesStructuralPriorAux(distribution, 'high'), true);
  assert.equal(passesStructuralPriorAux(distribution, 'low'), false);
});
