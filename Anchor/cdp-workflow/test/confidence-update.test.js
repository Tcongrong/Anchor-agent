const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const {
  computeLVal,
  computeLAnchor,
  computeLPred,
  mergeLikelihoodFactors,
  applyBreakpointMissPenalty,
  clamp,
  identifyLlmRejectedTags
} = require('../src/modules/confidence-update/likelihood');
const {
  extractPriorWeights,
  normalizeWeights,
  applyLikelihoodUpdate
} = require('../src/modules/confidence-update/update');
const {
  resolveUpdateContext,
  inferPredLikelihoods,
  selectPredLikelihoodTargets
} = require('../src/modules/confidence-update/context');
const { runConfidenceUpdate } = require('../src/modules/confidence-update');

const TAG_A = 'http://example/app.js::alpha@1:10';
const TAG_B = 'http://example/app.js::beta@1:20';
const TAG_C = 'http://example/app.js::gamma@1:30';
const F_HIT = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';

test('computeLVal: 值匹配时 f_hit 得 2.5', () => {
  const factors = computeLVal(F_HIT, [F_HIT, TAG_B], true);
  assert.equal(factors[F_HIT], 2.5);
  assert.equal(factors[TAG_B], 1.0);
});

test('computeLVal: 值不匹配时 f_hit 得 0.4', () => {
  const factors = computeLVal(F_HIT, [F_HIT, TAG_B], false);
  assert.equal(factors[F_HIT], 0.4);
  assert.equal(factors[TAG_B], 1.0);
});

test('computeLVal: f* 与 fHit 不同时 fHit 不得值匹配奖励', () => {
  const factors = computeLVal(F_HIT, [F_HIT, TAG_B], true, { anchorCandidate: TAG_B });
  assert.equal(factors[F_HIT], 1.0);
  assert.equal(factors[TAG_B], 1.0);
});

test('computeLPred: f* 不受 TC2 预测惩罚', () => {
  const pred = computeLPred([TAG_A, TAG_B], { [TAG_A]: 0.1, [TAG_B]: 0.9 }, {
    anchorCandidate: TAG_A
  });
  assert.equal(pred[TAG_A], 1);
  assert.equal(pred[TAG_B], 0.9);
});

test('computeLAnchor: f* 为 None 且无 LLM 评分时全 1', () => {
  const factors = computeLAnchor(null, new Map(), [TAG_A, TAG_B]);
  assert.equal(factors[TAG_A], 1);
  assert.equal(factors[TAG_B], 1);
});

test('computeLAnchor: f* 命中 8 + score', () => {
  const scores = new Map([[TAG_A, 0.8]]);
  const factors = computeLAnchor(TAG_A, scores, [TAG_A, TAG_B]);
  assert.equal(factors[TAG_A], 8.8);
  assert.equal(factors[TAG_B], 0.5);
});

test('computeLAnchor: LLM 判定非锚点（score < theta）时 L_anchor 惩罚为 0.1', () => {
  const scores = new Map([
    [TAG_A, 0.15],
    [TAG_B, 0.85]
  ]);
  const factors = computeLAnchor(TAG_B, scores, [TAG_A, TAG_B, TAG_C], { thetaAnchor: 0.7 });
  assert.equal(factors[TAG_B], 8.85);
  assert.equal(factors[TAG_A], 0.1);
  assert.equal(factors[TAG_C], 0.5);
});

test('computeLAnchor: 无 f* 时 LLM 低分函数 L_anchor=0.1', () => {
  const scores = new Map([[TAG_A, 0.2], [TAG_B, 0.1]]);
  const factors = computeLAnchor(null, scores, [TAG_A, TAG_B, TAG_C], { thetaAnchor: 0.7 });
  assert.equal(factors[TAG_A], 0.1);
  assert.equal(factors[TAG_B], 0.1);
  assert.equal(factors[TAG_C], 1);
});

test('mergeLikelihoodFactors: clamp 到 [0.1, 10]', () => {
  const lVal = { [TAG_A]: 2.5, [TAG_B]: 1 };
  const lAnchor = { [TAG_A]: 4.8, [TAG_B]: 0.5 };
  const merged = mergeLikelihoodFactors(lVal, lAnchor, computeLPred([TAG_A, TAG_B]), [TAG_A, TAG_B]);
  assert.equal(merged[TAG_A], clamp(2.5 * 4.8, 0.1, 10));
  assert.equal(merged[TAG_B], clamp(0.5, 0.1, 10));
});

test('normalizeWeights: 总和为 0 时均匀分布', () => {
  const normalized = normalizeWeights([0, 0, 0]);
  assert.equal(normalized.length, 3);
  for (const p of normalized) {
    assert.ok(Math.abs(p - 1 / 3) < 1e-9);
  }
});

test('identifyLlmRejectedTags: score < theta 的已评分函数', () => {
  const scores = new Map([[TAG_A, 0.2], [TAG_B, 0.8]]);
  const rejected = identifyLlmRejectedTags(scores, [TAG_A, TAG_B, TAG_C], { thetaAnchor: 0.7 });
  assert.deepEqual(rejected, [TAG_A]);
});

test('applyLikelihoodUpdate: 置信度总和为 1', () => {
  const priors = extractPriorWeights([
    { tag: TAG_A, confidence: 0.6, functionName: 'alpha' },
    { tag: TAG_B, confidence: 0.3, functionName: 'beta' },
    { tag: TAG_C, confidence: 0.1, functionName: 'gamma' }
  ]);
  const likelihood = {
    [TAG_A]: 10,
    [TAG_B]: 1,
    [TAG_C]: 1
  };
  const { distribution, confidenceSum } = applyLikelihoodUpdate(priors, likelihood);
  assert.ok(Math.abs(confidenceSum - 1) < 1e-9);
  assert.ok(distribution[0].confidence > distribution[1].confidence);
  assert.equal(distribution[0].tag, TAG_A);
});

test('applyLikelihoodUpdate: zeroTags 强制置信度为 0 并重归一化', () => {
  const priors = extractPriorWeights([
    { tag: TAG_A, confidence: 0.6, functionName: 'alpha' },
    { tag: TAG_B, confidence: 0.4, functionName: 'beta' }
  ]);
  const likelihood = { [TAG_A]: 10, [TAG_B]: 1 };
  const { distribution } = applyLikelihoodUpdate(priors, likelihood, { zeroTags: [TAG_A] });
  const a = distribution.find((d) => d.tag === TAG_A);
  const b = distribution.find((d) => d.tag === TAG_B);
  assert.equal(a.confidence, 0);
  assert.equal(b.confidence, 1);
});

test('resolveUpdateContext: 从 reverse-result 解析 f_hit 与 f*', () => {
  const reverseResult = {
    taskDescription: "寻找 search_sig",
    anchorCandidate: TAG_B,
    observation: {
      functionTag: F_HIT,
      value: { search_sig: 'x' }
    },
    observationRelevance: { related: true, score: 0.8, reason: '有关' },
    candidateScores: [
      { tag: TAG_B, score: 0.85 },
      { tag: F_HIT, score: 0.6 }
    ]
  };
  const ctx = resolveUpdateContext({ reverseResult });
  assert.equal(ctx.fHit, F_HIT);
  assert.equal(ctx.anchorCandidate, TAG_B);
  assert.equal(ctx.scoresByTag.get(TAG_B), 0.85);
  assert.equal(ctx.valueMatches, true);
});

test('selectPredLikelihoodTargets: 仅 f_hit 焦点与 LLM 评分函数', () => {
  const focusTags = [TAG_A, TAG_B, TAG_C];
  const targets = selectPredLikelihoodTargets(TAG_A, focusTags, new Map([[TAG_B, 0.2]]));
  assert.ok(targets.has(TAG_A));
  assert.ok(targets.has(TAG_B));
  assert.equal(targets.has(TAG_C), false);
});

test('inferPredLikelihoods: 未命中断点且未评分的焦点函数不施加 L_pred', () => {
  const needToBreak = {
    selected_breakpoint: {
      var_name: 'R',
      function_tag: TAG_A
    },
    llmResponse: {
      candidates: [{
        var_name: 'R',
        function_tag: TAG_A,
        predicted_outcomes: [{
          outcome_desc: '字符串解码函数',
          likelihoods: { f1: 0.95, f2: 0.05, f3: 0.05 }
        }]
      }]
    }
  };
  const pred = inferPredLikelihoods(
    needToBreak,
    { value: 'function decode(){}' },
    [TAG_A, TAG_B, TAG_C],
    { fHit: TAG_A, scoresByTag: new Map() }
  );
  assert.deepEqual(pred, { [TAG_A]: 0.95 });
  assert.equal(pred[TAG_B], undefined);
  assert.equal(pred[TAG_C], undefined);
});

test('inferPredLikelihoods: 反向恢复评分函数在焦点内时施加对应 f_i 似然', () => {
  const needToBreak = {
    selected_breakpoint: {
      var_name: 'R',
      function_tag: TAG_A
    },
    llmResponse: {
      candidates: [{
        var_name: 'R',
        function_tag: TAG_A,
        predicted_outcomes: [{
          outcome_desc: '字符串解码函数',
          likelihoods: { f1: 0.95, f2: 0.05, f3: 0.2 }
        }]
      }]
    }
  };
  const pred = inferPredLikelihoods(
    needToBreak,
    { value: 'function decode(){}' },
    [TAG_A, TAG_B, TAG_C],
    {
      fHit: TAG_A,
      scoresByTag: new Map([[TAG_C, 0.4]])
    }
  );
  assert.equal(pred[TAG_A], 0.95);
  assert.equal(pred[TAG_C], 0.2);
  assert.equal(pred[TAG_B], undefined);
});

test('inferPredLikelihoods: f* 不参与 TC2 预测似然', () => {
  const needToBreak = {
    selected_breakpoint: {
      var_name: 'R',
      function_tag: TAG_A
    },
    llmResponse: {
      candidates: [{
        var_name: 'R',
        function_tag: TAG_A,
        predicted_outcomes: [{
          outcome_desc: '字符串解码函数',
          likelihoods: { f1: 0.9, f2: 0.1, f3: 0.05 }
        }]
      }]
    }
  };
  const pred = inferPredLikelihoods(
    needToBreak,
    { value: 'function decode(){}' },
    [TAG_A, TAG_B, TAG_C],
    {
      fHit: TAG_A,
      scoresByTag: new Map([[TAG_B, 1]]),
      anchorCandidate: TAG_B
    }
  );
  assert.equal(pred[TAG_A], 0.9);
  assert.equal(pred[TAG_B], undefined);
});

test('inferPredLikelihoods: 非焦点 LLM 评分函数无 f_i 映射时不返回', () => {
  const needToBreak = {
    selected_breakpoint: {
      var_name: 'R',
      function_tag: TAG_A
    },
    llmResponse: {
      candidates: [{
        var_name: 'R',
        function_tag: TAG_A,
        predicted_outcomes: [{
          outcome_desc: '字符串解码函数',
          likelihoods: { f1: 0.95, f2: 0.05, f3: 0.05 }
        }]
      }]
    }
  };
  const extraTag = 'http://example/app.js::extra@1:99';
  const pred = inferPredLikelihoods(
    needToBreak,
    { value: 'function decode(){}' },
    [TAG_A, TAG_B, TAG_C],
    {
      fHit: TAG_A,
      scoresByTag: new Map([[extraTag, 0.5]])
    }
  );
  assert.deepEqual(pred, { [TAG_A]: 0.95 });
});

test('resolveUpdateContext: 无关观测 valueMatches=false', () => {
  const reverseResult = {
    observation: { functionTag: F_HIT, value: {} },
    observationRelevance: { related: false, score: 0.2, reason: '无关' }
  };
  const ctx = resolveUpdateContext({ reverseResult });
  assert.equal(ctx.fHit, F_HIT);
  assert.equal(ctx.valueMatches, false);
});

test('runConfidenceUpdate: runCatalogSearch 置信度上升（值匹配 + LLM 分数达标）', () => {
  const anchorSelection = {
    taskDescription: "寻找 search_sig",
    distribution: [
      {
        tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::emitSearchTelemetry@1:12393',
        functionName: 'emitSearchTelemetry',
        confidence: 0.57
      },
      {
        tag: F_HIT,
        functionName: 'runCatalogSearch',
        confidence: 0.02
      },
      {
        tag: 'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:17801',
        functionName: 'dispatchSearchCommand',
        confidence: 0.01
      }
    ]
  };

  const reverseResult = {
    anchorCandidate: null,
    observation: {
      functionTag: F_HIT,
      value: { action: 'catalog.search', search_sig: 'ss_x' }
    },
    observationRelevance: { related: true, score: 0.85, reason: '有关' },
    candidateScores: [
      { tag: F_HIT, score: 0.75 }
    ]
  };

  const before = anchorSelection.distribution.find((d) => d.tag === F_HIT).confidence;
  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, { reverseResult });
  const after = updated.distribution.find((d) => d.tag === F_HIT).confidence;

  assert.ok(after > before);
  assert.ok(updated.confidenceUpdate);
  assert.equal(updated.confidenceUpdate.fHit, F_HIT);
  assert.equal(updated.confidenceUpdate.factors.L_val[F_HIT], 2.5);
});

test('runConfidenceUpdate: 观测无关时 f_hit 置信度置 0', () => {
  const anchorSelection = {
    taskDescription: "寻找 search_sig",
    distribution: [
      {
        tag: F_HIT,
        functionName: 'renderSearchEcho',
        confidence: 0.5
      },
      {
        tag: TAG_B,
        functionName: 'beta',
        confidence: 0.5
      }
    ]
  };

  const reverseResult = {
    anchorCandidate: null,
    observation: {
      functionTag: F_HIT,
      value: {}
    },
    observationRelevance: { related: false, score: 0.15, reason: '与目标值生成无关' },
    candidateScores: []
  };

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, { reverseResult });
  const rejected = updated.distribution.find((d) => d.tag === F_HIT);
  const survivor = updated.distribution.find((d) => d.tag === TAG_B);

  assert.equal(rejected.confidence, 0);
  assert.equal(rejected.score, 0);
  assert.ok(survivor.confidence > 0.99);
  assert.ok(updated.confidenceUpdate.zeroTags.includes(F_HIT));
});

test('runConfidenceUpdate: LLM 判定非锚点时施加惩罚但不永久清零', () => {
  const anchorSelection = {
    taskDescription: "寻找 search_sig",
    distribution: [
      {
        tag: F_HIT,
        functionName: 'runCatalogSearch',
        confidence: 0.5
      },
      {
        tag: TAG_B,
        functionName: 'beta',
        confidence: 0.5
      }
    ]
  };

  const reverseResult = {
    anchorCandidate: null,
    observation: {
      functionTag: F_HIT,
      value: { action: 'catalog.search', search_sig: 'ss_x' }
    },
    observationRelevance: { related: true, score: 0.85, reason: '有关' },
    candidateScores: [
      { tag: F_HIT, score: 0.2 }
    ]
  };

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, { reverseResult });
  const penalized = updated.distribution.find((d) => d.tag === F_HIT);
  const survivor = updated.distribution.find((d) => d.tag === TAG_B);

  assert.ok(penalized.confidence > 0);
  assert.ok(penalized.confidence < 0.5);
  assert.ok(survivor.confidence > penalized.confidence);
  assert.equal(updated.confidenceUpdate.llmRejectedTags.length, 1);
  assert.equal(updated.confidenceUpdate.llmRejectedTags[0], F_HIT);
  assert.equal(updated.confidenceUpdate.zeroTags.length, 0);
  assert.equal(updated.confidenceUpdate.factors.L_anchor[F_HIT], 0.1);
});

test('runConfidenceUpdate: f* 命中时获得更强 L_anchor 奖励', () => {
  const anchorSelection = {
    taskDescription: "寻找 search_sig",
    distribution: [
      {
        tag: TAG_A,
        functionName: 'alpha',
        confidence: 0.01
      },
      {
        tag: TAG_B,
        functionName: 'beta',
        confidence: 0.99
      }
    ]
  };

  const reverseResult = {
    anchorCandidate: TAG_A,
    observation: {
      functionTag: F_HIT,
      value: { search_sig: 'ss_x' }
    },
    observationRelevance: { related: true, score: 0.85, reason: '有关' },
    candidateScores: [
      { tag: TAG_A, score: 1 },
      { tag: TAG_B, score: 0.2 }
    ]
  };

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, { reverseResult });
  const fStar = updated.distribution.find((d) => d.tag === TAG_A);
  const other = updated.distribution.find((d) => d.tag === TAG_B);

  assert.equal(updated.confidenceUpdate.factors.L_anchor[TAG_A], 9);
  assert.ok(fStar.confidence > 0.01);
  assert.ok(other.confidence < 0.99);
});

test('runConfidenceUpdate: f* 稳定时 L_t 应高于 fHit 嵌套 helper', () => {
  const NESTED = 'http://127.0.0.1:4173/assets/account.app.bundle.js::materializeByteArray@316:0';
  const ANCHOR = 'http://127.0.0.1:4173/assets/account.app.bundle.js::encodeByteArrayEnvelope@516:0';

  const anchorSelection = {
    taskDescription: 'byte_payload anchor',
    distribution: [
      { tag: NESTED, functionName: 'materializeByteArray', confidence: 0.08 },
      { tag: ANCHOR, functionName: 'encodeByteArrayEnvelope', confidence: 0.02 },
      { tag: TAG_C, functionName: 'gamma', confidence: 0.9 }
    ]
  };

  const reverseResult = {
    anchorCandidate: ANCHOR,
    observation: { functionTag: NESTED, value: { 0: 0, 1: 0 } },
    observationRelevance: { related: true, score: 1, reason: '有关' },
    candidateScores: [
      { tag: ANCHOR, score: 1 },
      { tag: NESTED, score: 0.7 }
    ]
  };

  const needToBreak = {
    selected_breakpoint: { var_name: 'x', function_tag: NESTED },
    distribution: {
      focusFunctions: [
        { tag: NESTED },
        { tag: ANCHOR },
        { tag: TAG_C }
      ]
    },
    llmResponse: {
      candidates: [{
        var_name: 'x',
        function_tag: NESTED,
        predicted_outcomes: [{
          outcome_desc: '对象',
          likelihoods: { f1: 0.9, f2: 0.1, f3: 0.05 }
        }]
      }]
    }
  };

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, {
    reverseResult,
    needToBreak
  });

  const nested = updated.distribution.find((d) => d.tag === NESTED);
  const anchor = updated.distribution.find((d) => d.tag === ANCHOR);
  const factors = updated.confidenceUpdate.factors;

  assert.equal(factors.L_val[NESTED], 1);
  assert.equal(factors.L_anchor[ANCHOR], 9);
  assert.equal(factors.L_pred[ANCHOR], 1);
  assert.ok(factors.L_t[ANCHOR] > factors.L_t[NESTED]);
  assert.ok(anchor.confidence > nested.confidence);
});

test('applyBreakpointMissPenalty: 断点函数 L_t ×0.1', () => {
  const penalized = applyBreakpointMissPenalty({ [TAG_A]: 2.5, [TAG_B]: 1.0 }, TAG_A);
  assert.equal(penalized[TAG_A], 0.25);
  assert.equal(penalized[TAG_B], 1.0);
});

test('runConfidenceUpdate: TC3 断点未命中时断点函数置信度 ×0.1', () => {
  const BP_FN = 'http://example/app.js::breakpointFn@1:50';
  const anchorSelection = {
    taskDescription: '寻找 state_code',
    distribution: [
      { tag: BP_FN, functionName: 'breakpointFn', confidence: 0.6 },
      { tag: TAG_B, functionName: 'beta', confidence: 0.4 }
    ]
  };

  const reverseResult = {
    anchorCandidate: null,
    observationRelevance: { related: true, score: 0.8, reason: '历史观测' },
    candidateScores: []
  };

  const needToBreak = {
    selected_breakpoint: {
      var_name: 'token',
      function_tag: BP_FN
    }
  };

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, {
    reverseResult,
    needToBreak,
    breakpointMissed: true,
    breakpointFunctionTag: BP_FN,
    fHit: null,
    observation: null,
    filterTurn: true,
    turn: 3
  });

  const bp = updated.distribution.find((d) => d.tag === BP_FN);
  const other = updated.distribution.find((d) => d.tag === TAG_B);

  assert.equal(updated.confidenceUpdate.breakpointMissed, true);
  assert.equal(updated.confidenceUpdate.breakpointFunctionTag, BP_FN);
  assert.equal(updated.confidenceUpdate.fHit, null);
  assert.ok(bp.confidence < 0.6);
  assert.ok(other.confidence > bp.confidence);
  assert.equal(updated.confidenceUpdate.factors.L_t[BP_FN], 0.1);
});

test('resolveUpdateContext: 显式 observation=null 时不回退历史观测', () => {
  const ctx = resolveUpdateContext({
    observation: null,
    fHit: null,
    graph: {
      turn: 3,
      observations: [{
        turn: 2,
        functionTag: F_HIT,
        value: { search_sig: 'ss_x' }
      }]
    },
    filterTurn: true,
    turn: 3
  });
  assert.equal(ctx.observation, null);
  assert.equal(ctx.fHit, null);
});

test('runConfidenceUpdate: 集成真实 anchor-selection 样本', () => {
  const samplePath = path.join(__dirname, '..', '..', 'anchor-selection.json');
  if (!fs.existsSync(samplePath)) {
    return;
  }

  const anchorSelection = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
  const reversePath = path.join(__dirname, '..', '..', 'reverse-anchor-result.json');
  const reverseResult = fs.existsSync(reversePath)
    ? JSON.parse(fs.readFileSync(reversePath, 'utf8'))
    : null;

  const { anchorSelection: updated } = runConfidenceUpdate(anchorSelection, { reverseResult });
  const sum = updated.distribution.reduce((acc, item) => acc + item.confidence, 0);
  assert.ok(Math.abs(sum - 1) < 1e-6);
  assert.ok(updated.confidenceUpdate.factors.L_t);
});
