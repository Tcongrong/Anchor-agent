const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { extractKeywordsFromTask } = require('../src/modules/reverse-anchor-recovery/keywords');
const { identifyTvn, getCurrentTurnObservation } = require('../src/modules/reverse-anchor-recovery/tvn');
const { reverseTraverseCandidates } = require('../src/modules/reverse-anchor-recovery/reverse-traverse');
const { generateMockObservationRelevance } = require('../src/modules/reverse-anchor-recovery/observation-relevance');
const { generateMockAnchorScores, selectAnchorCandidate, alignAnchorScoresWithMeta } = require('../src/modules/reverse-anchor-recovery/llm');
const {
  detectIsolatedPerfectScore,
  applyAnchorReflection
} = require('../src/modules/reverse-anchor-recovery/reflection');
const { buildAnchorJudgmentMessages } = require('../src/modules/reverse-anchor-recovery/prompt');
const { runReverseAnchorRecovery } = require('../src/modules/reverse-anchor-recovery');

const SAMPLE_GRAPH = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'causual-graph.json'), 'utf8')
);

const TASK = "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}中的ss_bh9g_30是在哪个函数生成并赋予的";

const EMIT_TAG = 'http://127.0.0.1:4173/assets/search.app.bundle.js::emitSearchTelemetry@1:12393';
const RUN_TAG = 'http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548';
const DISPATCH_TAG = 'http://127.0.0.1:4173/assets/search.app.bundle.js::dispatchSearchCommand@1:17801';
const ANON17_TAG = 'http://127.0.0.1:4173/assets/search.app.bundle.js::anonymous_17@1:18355';
const RENDER_TAG = 'http://127.0.0.1:4173/assets/search.app.bundle.js::renderSearchEcho@1:13356';

test('extractKeywordsFromTask: 从任务描述提取 search_sig', () => {
  const keywords = extractKeywordsFromTask(TASK);
  assert.ok(keywords.includes('search_sig'));
});

test('getCurrentTurnObservation: 取指定轮次观测', () => {
  const obs = getCurrentTurnObservation(SAMPLE_GRAPH, { turn: 1, filterTurn: true });
  assert.ok(obs);
  assert.equal(obs.functionTag, EMIT_TAG);
  assert.equal(obs.value.search_sig, 'ss_vgrg_41');
});

test('identifyTvn: 兼容旧关键词匹配', () => {
  const result = identifyTvn(SAMPLE_GRAPH, TASK);
  assert.ok(result.tvn);
  assert.ok(result.observation);
  assert.deepEqual(result.matchedFields, ['search_sig']);
});

test('generateMockObservationRelevance: turn1 观测与 search_sig 有关', () => {
  const obs = getCurrentTurnObservation(SAMPLE_GRAPH, { turn: 1, filterTurn: true });
  const result = generateMockObservationRelevance({
    taskDescription: TASK,
    observation: obs,
    functionName: 'emitSearchTelemetry',
    functionCode: "return { action: 'catalog.search', search_sig: deriveSig() };"
  });
  assert.equal(result.related, true);
  assert.ok(result.score >= 0.5);
});

test('generateMockObservationRelevance: renderSearchEcho 空对象观测无关', () => {
  const obs = getCurrentTurnObservation(SAMPLE_GRAPH, { turn: 3, filterTurn: true });
  const result = generateMockObservationRelevance({
    taskDescription: TASK,
    observation: obs,
    functionName: 'renderSearchEcho',
    functionCode: 'document.createElement(...)'
  });
  assert.equal(result.related, false);
});

test('reverseTraverseCandidates: 从 emitSearchTelemetry 反向收集候选', () => {
  const { candidates, distances } = reverseTraverseCandidates(SAMPLE_GRAPH, EMIT_TAG, { maxDepth: 5 });

  assert.ok(candidates.includes(EMIT_TAG));
  assert.ok(candidates.includes(RUN_TAG));
  assert.ok(candidates.includes(DISPATCH_TAG));
  assert.ok(candidates.includes(ANON17_TAG));
  assert.equal(distances.get(EMIT_TAG), 0);
  assert.equal(distances.get(RUN_TAG), 1);
  assert.equal(distances.get(DISPATCH_TAG), 2);
  assert.equal(distances.get(ANON17_TAG), 2);
});

test('reverseTraverseCandidates: 双向收集 caller 与 callee', () => {
  const graph = {
    edges: [
      { from: 'callerA', to: 'start', kind: 'sync' },
      { from: 'start', to: 'calleeB', kind: 'sync' },
      { from: 'start', to: 'calleeC', kind: 'sync' },
      { from: 'calleeB', to: 'calleeD', kind: 'sync' }
    ]
  };

  const { candidates, distances, directions } = reverseTraverseCandidates(graph, 'start', {
    maxDepth: 2,
    maxPerDirection: 7
  });

  assert.deepEqual(new Set(candidates), new Set(['start', 'callerA', 'calleeB', 'calleeC', 'calleeD']));
  assert.equal(directions.get('start'), 'origin');
  assert.equal(directions.get('callerA'), 'caller');
  assert.equal(directions.get('calleeB'), 'callee');
  assert.equal(directions.get('calleeC'), 'callee');
  assert.equal(directions.get('calleeD'), 'callee');
  assert.equal(distances.get('callerA'), 1);
  assert.equal(distances.get('calleeD'), 2);
});

test('reverseTraverseCandidates: 每方向至多 maxPerDirection 个函数', () => {
  const edges = [];
  for (let i = 0; i < 12; i += 1) {
    edges.push({ from: `caller${i}`, to: 'start', kind: 'sync' });
    edges.push({ from: 'start', to: `callee${i}`, kind: 'sync' });
  }
  const graph = { edges };

  const { candidates, directions } = reverseTraverseCandidates(graph, 'start', {
    maxDepth: 7,
    maxPerDirection: 7
  });

  const callers = candidates.filter((tag) => directions.get(tag) === 'caller');
  const callees = candidates.filter((tag) => directions.get(tag) === 'callee');

  assert.equal(callers.length, 7);
  assert.equal(callees.length, 7);
  assert.equal(candidates.length, 15);
});

test('reverseTraverseCandidates: encodeByteArrayEnvelope 同时包含 caller 与 callee', () => {
  const START = 'http://127.0.0.1:4173/assets/account.app.bundle.js::encodeByteArrayEnvelope@516:0';
  const CALLER = 'http://127.0.0.1:4173/assets/account.app.bundle.js::TmHTn@526:17';
  const CALLEE = 'http://127.0.0.1:4173/assets/account.app.bundle.js::rwnQw@518:21';

  const { candidates, directions } = reverseTraverseCandidates(SAMPLE_GRAPH, START, { maxDepth: 1 });

  assert.ok(candidates.includes(CALLER));
  assert.ok(candidates.includes(CALLEE));
  assert.equal(directions.get(CALLER), 'caller');
  assert.equal(directions.get(CALLEE), 'callee');
});

test('selectAnchorCandidate: 仅 score=1.0 时采纳为 f*', () => {
  const scores = [
    { tag: 'a', score: 0.5, reason: 'low' },
    { tag: 'b', score: 0.85, reason: 'high but not perfect' },
    { tag: 'c', score: 1, reason: 'anchor' }
  ];
  const { anchorCandidate, best } = selectAnchorCandidate(scores, 0.7);
  assert.equal(anchorCandidate, 'c');
  assert.equal(best.tag, 'c');
});

test('selectAnchorCandidate: 最高分 < 1.0 时返回 null', () => {
  const scores = [
    { tag: 'a', score: 0.4, reason: 'low' },
    { tag: 'b', score: 0.85, reason: 'high' }
  ];
  const { anchorCandidate, best } = selectAnchorCandidate(scores, 0.7);
  assert.equal(anchorCandidate, null);
  assert.equal(best.tag, 'b');
});

test('detectIsolatedPerfectScore: 孤立满分且其余约 ≤0.4', () => {
  const scores = [
    { tag: 'anchor', score: 1, reason: 'perfect' },
    { tag: 'b', score: 0.2, reason: 'low' },
    { tag: 'c', score: 0.4, reason: 'mid-low' }
  ];
  const result = detectIsolatedPerfectScore(scores);
  assert.equal(result.isolated, true);
  assert.equal(result.perfectTag, 'anchor');
});

test('detectIsolatedPerfectScore: 其余有明显高于 0.4 时不触发', () => {
  const scores = [
    { tag: 'a', score: 1, reason: 'a' },
    { tag: 'b', score: 0.5, reason: 'b' },
    { tag: 'c', score: 0.2, reason: 'c' }
  ];
  assert.equal(detectIsolatedPerfectScore(scores).isolated, false);
});

test('detectIsolatedPerfectScore: 两个满分时不触发', () => {
  const scores = [
    { tag: 'a', score: 1, reason: 'a' },
    { tag: 'b', score: 1, reason: 'b' },
    { tag: 'c', score: 0.2, reason: 'c' }
  ];
  assert.equal(detectIsolatedPerfectScore(scores).isolated, false);
});

test('detectIsolatedPerfectScore: 其余约 0.45 在容差内仍触发', () => {
  const scores = [
    { tag: 'a', score: 1, reason: 'a' },
    { tag: 'b', score: 0.45, reason: 'b' },
    { tag: 'c', score: 0.2, reason: 'c' }
  ];
  assert.equal(detectIsolatedPerfectScore(scores).isolated, true);
});

test('applyAnchorReflection: 孤立满分时取消 f* 并下调有效分', () => {
  const scores = [
    { tag: 'r$c', score: 1, reason: 'anchor' },
    { tag: 'r$9', score: 0.2, reason: 'path' },
    { tag: 'side', score: 0.2, reason: 'sink' }
  ];
  const selection = selectAnchorCandidate(scores, 0.7);
  assert.equal(selection.anchorCandidate, 'r$c');

  const reflected = applyAnchorReflection(scores, selection, { theta: 0.7 });
  assert.equal(reflected.anchorCandidate, null);
  assert.equal(reflected.reflection.rejected, true);
  assert.equal(reflected.reflection.rejectedTag, 'r$c');

  const downgraded = reflected.candidateScores.find((s) => s.tag === 'r$c');
  assert.equal(downgraded.originalScore, 1);
  assert.ok(downgraded.score < 0.7);
});

test('applyAnchorReflection: 正常分布时不改动', () => {
  const scores = [
    { tag: 'a', score: 1, reason: 'anchor' },
    { tag: 'b', score: 0.72, reason: 'mid' }
  ];
  const selection = selectAnchorCandidate(scores, 0.7);
  const reflected = applyAnchorReflection(scores, selection, { theta: 0.7 });
  assert.equal(reflected.anchorCandidate, 'a');
  assert.equal(reflected.reflection, null);
  assert.deepEqual(reflected.candidateScores, scores);
});

test('applyAnchorReflection: disableIsolatedPerfectScore 时孤立满分仍采纳', () => {
  const scores = [
    { tag: 'r$c', score: 1, reason: 'anchor' },
    { tag: 'r$9', score: 0.2, reason: 'path' },
    { tag: 'side', score: 0.2, reason: 'sink' }
  ];
  const selection = selectAnchorCandidate(scores, 0.7);
  const reflected = applyAnchorReflection(scores, selection, {
    theta: 0.7,
    disableIsolatedPerfectScore: true
  });
  assert.equal(reflected.anchorCandidate, 'r$c');
  assert.equal(reflected.reflection, null);
  assert.deepEqual(reflected.candidateScores, scores);
});

test('runReverseAnchorRecovery: mock 端到端 turn1', async () => {
  const funcDictPath = path.join(__dirname, '..', '..', 'function-dictionary.json');
  if (!fs.existsSync(funcDictPath)) {
    return;
  }

  const result = await runReverseAnchorRecovery({
    graph: SAMPLE_GRAPH,
    funcDictFile: funcDictPath,
    taskDescription: TASK,
    turn: 1,
    filterTurn: true,
    mock: true,
    theta: 0.7
  });

  assert.equal(result.observationRelevance.related, true);
  assert.ok(result.candidateScores.length >= 3);
  assert.ok(result.reverseTraverse.candidateCount >= 3);
  assert.ok(result.anchorHistory.turns.length >= 1);
});

test('runReverseAnchorRecovery: 观测相关性预筛关闭时 turn3 也进入 BFS', async () => {
  const funcDictPath = path.join(__dirname, '..', '..', 'function-dictionary.json');
  if (!fs.existsSync(funcDictPath)) {
    return;
  }

  const result = await runReverseAnchorRecovery({
    graph: SAMPLE_GRAPH,
    funcDictFile: funcDictPath,
    taskDescription: TASK,
    turn: 3,
    filterTurn: true,
    mock: true,
    theta: 0.7
  });

  assert.equal(result.observationRelevance.related, true);
  assert.equal(result.observationRelevance.skipped, true);
  assert.equal(result.observation.functionTag, RENDER_TAG);
  assert.ok(result.candidateScores.length >= 1);
  assert.notEqual(result.reverseTraverse.skipped, true);
});

test('buildAnchorJudgmentMessages: 观测段含函数源码而非仅 tag', () => {
  const obs = getCurrentTurnObservation(SAMPLE_GRAPH, { turn: 1, filterTurn: true });
  const observedSource = "function emitSearchTelemetry(p) { console.log({ search_sig: p.sig }); }";
  const { user } = buildAnchorJudgmentMessages({
    taskDescription: TASK,
    candidates: [{
      tag: RUN_TAG,
      functionName: 'runCatalogSearch',
      functionCode: 'emitSearchTelemetry();'
    }],
    tvn: { functionTag: EMIT_TAG, varName: obs.varName, value: obs.value },
    observation: obs,
    observationFunction: {
      functionName: 'emitSearchTelemetry',
      functionCode: observedSource
    },
    distances: new Map([[RUN_TAG, 1]])
  });

  assert.ok(user.includes('观察到的函数源代码'));
  assert.ok(user.includes('必须评分的 tag 清单'));
  assert.ok(user.includes('JSON 输出协议'));
  assert.ok(user.includes(RUN_TAG));
  assert.ok(user.includes(observedSource));
  assert.ok(user.includes('emitSearchTelemetry'));
  assert.ok(user.includes('callChain'));
});

test('buildAnchorJudgmentMessages: 默认不含 Pattern C', () => {
  const { system, user } = buildAnchorJudgmentMessages({
    taskDescription: TASK,
    candidates: [{ tag: RUN_TAG, functionName: 'runCatalogSearch', functionCode: 'x();' }],
    tvn: {},
    observation: {},
    observationFunction: {},
    distances: new Map()
  });

  assert.ok(!system.includes('Pattern C — 字面任务匹配型'));
  assert.ok(!user.includes('已启用 Pattern C'));
});

test('buildAnchorJudgmentMessages: --pattern-c 时注入 Pattern C', () => {
  const { system, user } = buildAnchorJudgmentMessages({
    taskDescription: 'Locate function whose own body generates bust and appends to URL',
    candidates: [{ tag: RUN_TAG, functionName: 'ajaxWrap', functionCode: 'url += "?bust=" + Date.now();' }],
    tvn: {},
    observation: {},
    observationFunction: {},
    distances: new Map(),
    enablePatternC: true
  });

  assert.ok(system.includes('Pattern C — 字面任务匹配型'));
  assert.ok(user.includes('已启用 Pattern C'));
  assert.ok(user.includes('Pattern C 优先于 Pattern A/B'));
  assert.ok(user.includes('不得因 generic wrapper'));
});

test('generateMockAnchorScores: emitSearchTelemetry 分数较高', () => {
  const obs = getCurrentTurnObservation(SAMPLE_GRAPH, { turn: 1, filterTurn: true });
  const tvn = { functionTag: EMIT_TAG, varName: obs.varName, value: obs.value };
  const { candidates: tags } = reverseTraverseCandidates(SAMPLE_GRAPH, EMIT_TAG);

  const candidates = tags.map((tag) => ({
    tag,
    functionName: tag.includes('emitSearchTelemetry') ? 'emitSearchTelemetry'
      : tag.includes('runCatalogSearch') ? 'runCatalogSearch'
        : tag.includes('dispatchSearchCommand') ? 'dispatchSearchCommand' : 'anonymous_17',
    functionCode: tag === EMIT_TAG
      ? "return { action: 'catalog.search', search_sig: deriveSig() };"
      : tag === RUN_TAG
        ? 'emitSearchTelemetry(payload);'
        : tag === DISPATCH_TAG
          ? 'dispatchSearchCommand(query);'
          : "dispatchSearchCommand(el.getAttribute('data-query'));"
  }));

  const scores = generateMockAnchorScores({
    taskDescription: TASK,
    candidates,
    tvn,
    observation: obs
  });

  const byTag = Object.fromEntries(scores.map((s) => [s.tag, s.score]));
  assert.ok(byTag[EMIT_TAG] > byTag[ANON17_TAG]);
});

test('alignAnchorScoresWithMeta: 部分返回时标记 missingTags', () => {
  const candidates = [
    { tag: 'http://x/a.js::foo@1:0', functionName: 'foo' },
    { tag: 'http://x/a.js::bar@2:0', functionName: 'bar' }
  ];
  const { scores, missingTags } = alignAnchorScoresWithMeta(
    [{ tag: 'http://x/a.js::foo@1:0', score: 1, reason: 'anchor' }],
    candidates
  );
  assert.equal(missingTags.length, 1);
  assert.equal(missingTags[0], candidates[1].tag);
  assert.equal(scores[0].reason, 'anchor');
  assert.match(scores[1].reason, /未返回|空的 results/);
});

test('generateMockAnchorScores: 每个候选都有 reason', () => {
  const candidates = [
    { tag: 'a', functionName: 'f1', functionCode: 'x' },
    { tag: 'b', functionName: 'f2', functionCode: 'y' }
  ];
  const scores = generateMockAnchorScores({ taskDescription: TASK, candidates, tvn: {}, observation: {} });
  assert.equal(scores.length, 2);
  for (const s of scores) {
    assert.ok(String(s.reason).trim().length > 0);
  }
});
