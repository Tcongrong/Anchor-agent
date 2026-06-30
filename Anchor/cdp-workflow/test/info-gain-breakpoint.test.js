const test = require('node:test');
const assert = require('node:assert/strict');

const {
  shannonEntropy,
  computePosterior,
  computeInformationGain
} = require('../src/modules/info-gain-breakpoint/entropy');
const {
  isInLoop,
  estimateBreakpointCost
} = require('../src/modules/info-gain-breakpoint/cost');
const {
  selectFocusFunctions,
  buildLlmContext,
  summarizeCausalGraph
} = require('../src/modules/info-gain-breakpoint/context');
const {
  normalizeLlmResponse,
  generateMockLlmResponse,
  parseLlmJson
} = require('../src/modules/info-gain-breakpoint/llm');
const {
  scoreCandidates,
  buildSelectedBreakpoint,
  resolveCandidateBinding,
  buildBreakpointKey,
  pickBestUninterruptedCandidate
} = require('../src/modules/info-gain-breakpoint/index');

const DISTRIBUTION = [
  { tag: 'f1', prob: 0.6, functionName: 'alpha' },
  { tag: 'f2', prob: 0.25, functionName: 'beta' },
  { tag: 'f3', prob: 0.1, functionName: 'gamma' },
  { tag: 'f4', prob: 0.05, functionName: 'delta' }
];

test('entropy: shannonEntropy 与后验更新', () => {
  const h = shannonEntropy(DISTRIBUTION);
  assert.ok(h > 0);

  const posterior = computePosterior(DISTRIBUTION, ['f1', 'f2', 'f3'], {
    likelihoods: { f1: 0.9, f2: 0.1, f3: 0.05 }
  });
  const sum = posterior.reduce((acc, item) => acc + item.prob, 0);
  assert.ok(Math.abs(sum - 1) < 1e-9);
  assert.ok(posterior.find((item) => item.tag === 'f1').prob > posterior.find((item) => item.tag === 'f2').prob);
});

test('entropy: computeInformationGain 非负且可区分候选', () => {
  const discriminative = {
    predicted_outcomes: [
      { outcome_desc: 'a', prob: 0.5, likelihoods: { f1: 0.9, f2: 0.1, f3: 0.1 } },
      { outcome_desc: 'b', prob: 0.5, likelihoods: { f1: 0.1, f2: 0.9, f3: 0.1 } }
    ]
  };
  const flat = {
    predicted_outcomes: [
      { outcome_desc: 'a', prob: 0.5, likelihoods: { f1: 0.5, f2: 0.5, f3: 0.5 } },
      { outcome_desc: 'b', prob: 0.5, likelihoods: { f1: 0.5, f2: 0.5, f3: 0.5 } }
    ]
  };

  const igDisc = computeInformationGain(DISTRIBUTION, ['f1', 'f2', 'f3'], discriminative);
  const igFlat = computeInformationGain(DISTRIBUTION, ['f1', 'f2', 'f3'], flat);
  assert.ok(igDisc >= 0);
  assert.ok(igFlat >= 0);
  assert.ok(igDisc > igFlat);
});

test('cost: 循环内与高回调上下文提高成本', () => {
  const funcEntry = {
    functionCode: 'function f(){ requestAnimationFrame(()=>{}); }',
    tags: ['callback'],
    statements: [
      {
        astType: 'ForStatement',
        range: { start: 0, end: 100 }
      }
    ]
  };
  const valueExpr = {
    range: { start: 10, end: 20 },
    runtimeLoc: { line: 1, column: 10 }
  };

  assert.equal(isInLoop(valueExpr, funcEntry), true);
  const { cost, factors } = estimateBreakpointCost(valueExpr, funcEntry, {});
  assert.ok(cost > 1);
  assert.ok(factors.some((f) => f.includes('in-loop')));
});

test('context: selectFocusFunctions 取 Top-3', () => {
  const focus = selectFocusFunctions(DISTRIBUTION, 3);
  assert.equal(focus.length, 3);
  assert.equal(focus[0].tag, 'f1');
  assert.equal(focus[1].tag, 'f2');
});

test('context: buildLlmContext 空因果图', () => {
  const ctx = buildLlmContext({
    taskDescription: 'find search_sig',
    distribution: DISTRIBUTION,
    funcDict: {
      dictionary: {
        f1: {
          tag: 'f1',
          functionName: 'alpha',
          functionCode: 'function alpha(){ return seal(x); }',
          statements: [{ id: 'S1', text: 'return seal(x)', astType: 'ReturnStatement' }],
          valueExpressions: [{
            binding: 'x',
            text: 'seal(x)',
            role: 'return-expr',
            kind: 'call',
            runtimeLoc: { line: 10, column: 5 }
          }]
        }
      }
    },
    staticCG: {
      StaticCG: {
        nodes: [{ tag: 'f1', sinkDistance: 2, isSink: false, sinkApis: [] }]
      }
    },
    causalGraph: {}
  });

  assert.equal(ctx.focusFunctions.length, 3);
  assert.match(ctx.causalGraphSummary, /尚无运行时信息/);
  assert.ok(ctx.allObservableCandidates.length >= 1);
});

test('llm: normalizeLlmResponse 与 mock 生成 5 个候选', () => {
  const normalized = normalizeLlmResponse({
    candidates: [{
      var_name: 'sig',
      runtime_loc: { line: 1, column: 2 },
      predicted_outcomes: [{ outcome_desc: 'hex', prob: 1, likelihoods: { f1: 0.8, f2: 0.2, f3: 0.1 } }]
    }]
  });
  assert.equal(normalized.candidates[0].var_name, 'sig');

  const mockCtx = buildLlmContext({
    taskDescription: 'find signature',
    distribution: DISTRIBUTION,
    funcDict: {
      dictionary: {
        f1: {
          tag: 'f1',
          functionName: 'sealSearchSignature',
          functionCode: 'function sealSearchSignature(){ return "ss_abc"; }',
          statements: [],
          valueExpressions: [{
            binding: 'sig',
            text: 'sealSearchSignature(input)',
            role: 'return-expr',
            kind: 'call',
            runtimeLoc: { line: 20, column: 3 }
          }]
        },
        f2: {
          tag: 'f2',
          functionName: 'emit',
          functionCode: 'function emit(){}',
          statements: [],
          valueExpressions: [{
            binding: 'payload',
            text: 'payload',
            role: 'decl-init',
            kind: 'identifier',
            runtimeLoc: { line: 30, column: 1 }
          }]
        },
        f3: {
          tag: 'f3',
          functionName: 'other',
          functionCode: 'function other(){}',
          statements: [],
          valueExpressions: [{
            binding: 'tmp',
            text: 'tmp',
            role: 'decl-init',
            kind: 'identifier',
            runtimeLoc: { line: 40, column: 1 }
          }]
        }
      }
    },
    staticCG: { StaticCG: { nodes: [] } },
    causalGraph: null
  });

  const mock = generateMockLlmResponse(mockCtx);
  assert.ok(mock.candidates.length >= 1);
});

test('index: scoreCandidates 选择最高 score', () => {
  const dictionary = {
    dictionary: {
      f1: {
        tag: 'f1',
        functionName: 'alpha',
        scriptUrl: 'https://example.com/a.js',
        functionCode: 'function alpha(){}',
        statements: [],
        valueExpressions: [{
          binding: 'sig',
          text: 'sig',
          runtimeLoc: { line: 1, column: 1 },
          sourceLoc: { line: 1, column: 1 }
        }]
      }
    }
  };

  const candidates = [
    {
      var_name: 'sig',
      runtime_loc: { line: 1, column: 1 },
      function_tag: 'f1',
      predicted_outcomes: [
        { outcome_desc: 'a', prob: 0.6, likelihoods: { f1: 0.9, f2: 0.1, f3: 0.1 } },
        { outcome_desc: 'b', prob: 0.4, likelihoods: { f1: 0.1, f2: 0.9, f3: 0.1 } }
      ]
    },
    {
      var_name: 'noise',
      runtime_loc: { line: 2, column: 2 },
      function_tag: 'f1',
      predicted_outcomes: [
        { outcome_desc: 'a', prob: 1, likelihoods: { f1: 0.34, f2: 0.33, f3: 0.33 } }
      ]
    }
  ];

  const scored = scoreCandidates(candidates, DISTRIBUTION, ['f1', 'f2', 'f3'], dictionary, {}, 1e-6);
  assert.ok(scored[0].score >= scored[1].score);

  const selected = buildSelectedBreakpoint(
    scored[0],
    dictionary.dictionary.f1.valueExpressions[0],
    dictionary.dictionary.f1,
    'https://example.com/a.js'
  );
  assert.equal(selected.var_name, 'sig');
  assert.equal(selected.scriptUrl, 'https://example.com/a.js');
});

test('index: 函数字典缺失时从 function_tag 解析 scriptUrl 与 bundle 坐标', () => {
  const functionTag = 'http://127.0.0.1:4173/assets/note.app.bundle.js::emitNoteResult@1:16850';
  const candidate = {
    var_name: 'arguments',
    function_tag: functionTag,
    runtime_loc: { line: 16850, column: 1 },
    condition: '函数调用时观测输入参数'
  };

  const binding = resolveCandidateBinding(candidate, { dictionary: {} });
  assert.equal(binding.scriptUrl, 'http://127.0.0.1:4173/assets/note.app.bundle.js');

  const selected = buildSelectedBreakpoint(candidate, null, null, binding.scriptUrl, {
    tag: functionTag,
    scriptUrl: 'http://127.0.0.1:4173/assets/note.app.bundle.js',
    location: { line: 1, column: 16850 }
  });

  assert.equal(selected.scriptUrl, 'http://127.0.0.1:4173/assets/note.app.bundle.js');
  assert.deepEqual(selected.location, { line: 1, column: 16850 });
  assert.equal(selected.var_name, 'arguments');
});

test('context: summarizeCausalGraph 非空摘要', () => {
  const summary = summarizeCausalGraph({
    callChains: [['a', 'b', 'fetch']],
    dataFlows: ['f2 返回值传递到 fetch headers']
  });
  assert.match(summary, /调用链/);
  assert.match(summary, /数据流动/);
});

test('breakpoint-key: 跳过已中断断点并选择下一优先候选', () => {
  const candidates = [
    {
      var_name: 'sig',
      function_tag: 'f1',
      runtime_loc: { line: 1, column: 1 },
      score: 10
    },
    {
      var_name: 'payload',
      function_tag: 'f2',
      runtime_loc: { line: 2, column: 2 },
      score: 8
    }
  ];

  const firstKey = buildBreakpointKey(candidates[0]);
  const { best, skipped } = pickBestUninterruptedCandidate(candidates, [firstKey]);

  assert.equal(best.var_name, 'payload');
  assert.equal(skipped.length, 1);
  assert.equal(skipped[0].key, firstKey);
});

test('prompt: buildPrompt 返回字符串而非 NaN', () => {
  const { buildPrompt } = require('../src/modules/info-gain-breakpoint/prompt');
  const prompt = buildPrompt({
    taskDescription: 'find sig',
    focusFunctions: [{
      rank: 1,
      functionName: 'fn',
      prob: 0.5,
      tag: 't',
      sinkDistanceText: '1',
      keyStatements: [],
      observables: []
    }],
    causalGraphSummary: 'empty'
  });
  assert.equal(typeof prompt, 'string');
  assert.ok(prompt.includes("ASCII 负号 '-'"));
});

test('llm: parseLlmJson 将 Unicode 破折号规范为 ASCII 负号', () => {
  const raw = `{
  "reasoning": "test",
  "candidates": [{
    "var_name": "x",
    "predicted_outcomes": [{
      "outcome_desc": "a",
      "prob": 0.5,
      "likelihoods": { "f1": 0.9, "f2": 0.1, "f3": —0.9 }
    }]
  }]
}`;

  const parsed = parseLlmJson(raw);
  assert.equal(parsed.candidates[0].predicted_outcomes[0].likelihoods.f3, -0.9);
});

test('llm: parseLlmJson 修复字符串内裸换行', () => {
  const raw = `{
  "reasoning": "第一行
第二行",
  "candidates": []
}`;

  const parsed = parseLlmJson(raw);
  assert.equal(parsed.reasoning, '第一行\n第二行');
});

test('llm: parseLlmJson 修复字符串中间误断行', () => {
  const raw = `{
  "reasoning": "优先选择能区分三个焦点函数、与指纹 构造相关的。",
 和 哈希计算。",
  "candidates": []
}`;

  const parsed = parseLlmJson(raw);
  assert.equal(
    parsed.reasoning,
    '优先选择能区分三个焦点函数、与指纹 构造相关的。和 哈希计算。'
  );
});

test('llm: parseLlmJson 去除尾随逗号', () => {
  const raw = `{
  "reasoning": "ok",
  "candidates": [],
}`;

  const parsed = parseLlmJson(raw);
  assert.deepEqual(parsed.candidates, []);
});

test('llm: parseLlmJson 修复 likelihoods 键名重复笔误 f22', () => {
  const raw = `{
  "reasoning": "ok",
  "candidates": [{
    "var_name": "x",
    "predicted_outcomes": [{
      "outcome_desc": "a",
      "prob": 0.5,
      "likelihoods": { "f1": 0.1, "f22,"f2": 0.2, "f3": 0.3 }
    }]
  }]
}`;

  const parsed = parseLlmJson(raw);
  assert.deepEqual(
    parsed.candidates[0].predicted_outcomes[0].likelihoods,
    { f1: 0.1, f2: 0.2, f3: 0.3 }
  );
});

test('llm: parseLlmJson 修复 likelihoods 缺失冒号', () => {
  const raw = `{
  "reasoning": "ok",
  "candidates": [{
    "var_name": "x",
    "predicted_outcomes": [{
      "outcome_desc": "a",
      "prob": 0.5,
      "likelihoods": { "f1" 0.9, "f2": 0.1, "f3": 0.05 }
    }]
  }]
}`;

  const parsed = parseLlmJson(raw);
  assert.equal(parsed.candidates[0].predicted_outcomes[0].likelihoods.f1, 0.9);
});

test('llm: parseLlmJson 修复属性间缺失逗号', () => {
  const raw = `{
  "reasoning": "ok",
  "candidates": [{
    "var_name": "x",
    "predicted_outcomes": [{
      "prob": 0.5
      "outcome_desc": "a",
      "likelihoods": { "f1": 0.9, "f2": 0.1, "f3": 0.05 }
    }]
  }]
}`;

  const parsed = parseLlmJson(raw);
  assert.equal(parsed.candidates[0].predicted_outcomes[0].prob, 0.5);
});
