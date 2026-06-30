const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');
const os = require('os');

const { parseFunctionCode, countAstNodes, shannonEntropy } = require('../src/modules/structural-prior/ast-utils');
const { buildConstContext, resolveMemberName } = require('../src/modules/structural-prior/const-prop');
const { extractApiCalls, matchesSinkApi, normalizeApiName } = require('../src/modules/structural-prior/api-extractor');
const { normalizeAstScore } = require('../src/modules/structural-prior/ast-templates');
const {
  matchesXorReduceFold,
  matchesBitMaskDigest
} = require('../src/modules/structural-prior/ast-templates');
const { computeEntropyScore } = require('../src/modules/structural-prior/entropy');
const {
  buildStaticCallGraph,
  computeSinkDistances,
  sinkProximityScore
} = require('../src/modules/structural-prior/static-call-graph');
const { parseSinkApisFromDescription } = require('../src/modules/structural-prior/sink-parser');
const {
  extractTaskKeywords,
  computeKeywordApiBoost,
  keywordMatchesCorpus,
  normalizeEnglishKeyword
} = require('../src/modules/structural-prior/task-api-hints');
const { extractCodeTerms } = require('../src/modules/structural-prior/ast-utils');
const { softmaxNormalize, normalizeFeatureScores, DEFAULT_PRIOR_TEMPERATURE } = require('../src/modules/structural-prior/scorer');
const { runStructuralPrior } = require('../src/modules/structural-prior');

const FIXTURE_DEDUPED = path.join(__dirname, '..', 'cdp-ast-output', 'runtime-function-logs.deduped.json');

test('ast-utils: 解析箭头函数与统计节点数', () => {
  const fn = parseFunctionCode('(_0x)=>{return _0x+1;}');
  assert.ok(fn);
  assert.ok(countAstNodes(fn) >= 3);
});

test('const-prop: 解析 console 混淆成员访问', () => {
  const code = "function emitSearchTelemetry(x){const _0x3dd8=function(i){return ['a','b','log','c'][i-0x83];}; const _0x3fec40=_0x3dd8; return console[_0x3fec40(0x85)](x);}";
  const fn = parseFunctionCode(code);
  const context = buildConstContext(fn);
  let memberNode = null;
  const { walkAst } = require('../src/modules/structural-prior/ast-utils');
  walkAst(fn, (node) => {
    if (node.type === 'CallExpression' && node.callee?.type === 'MemberExpression') {
      memberNode = node.callee;
    }
  });
  assert.ok(memberNode);
  const resolved = resolveMemberName(memberNode, context);
  assert.equal(resolved, 'console.log');
});

test('api-extractor: 识别混淆 console 调用', () => {
  const fn = parseFunctionCode("function emitSearchTelemetry(x){return console[_0x3fec40(0x85)](x);}");
  const calls = extractApiCalls(fn);
  assert.ok(calls.some((item) => item.api_name === 'console.log'));
});

test('api-extractor: 识别 console.log 与 fetch', () => {
  const fn = parseFunctionCode("function f(){console.log(1);fetch('/api');}");
  const calls = extractApiCalls(fn);
  const names = calls.map((item) => item.api_name);
  assert.ok(names.includes('console.log'));
  assert.ok(names.includes('fetch'));
});

test('sink-parser: 从任务描述提取 console.log', () => {
  const sinks = parseSinkApisFromDescription(
    "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}"
  );
  assert.ok(sinks.includes('console.log'));
});

test('entropy: 位运算密度可计算', () => {
  const fn = parseFunctionCode('function f(a,b){return ((a^b)<<2)|0;}');
  const size = countAstNodes(fn);
  const result = computeEntropyScore(fn, size);
  assert.ok(result.opBit >= 2);
  assert.ok(result.score > 0);
});

test('ast-templates: 识别 XOR reduce 与位掩码 digest 混合', () => {
  const fn = parseFunctionCode(
    "function assembleBrowserFingerprint(g,i,s){"
    + "const A=s.route?s.route.reduce((E,F)=>E^F,0):0;"
    + "const D=(i.branch^(i.seed>>>5)^A^B^C)&7;"
    + "return encodeFingerprintDigest(g,D);}"
  );
  const { walkAst } = require('../src/modules/structural-prior/ast-utils');
  let xorReduce = 0;
  let bitMask = 0;
  walkAst(fn, (node) => {
    if (matchesXorReduceFold(node)) xorReduce += 1;
    if (matchesBitMaskDigest(node)) bitMask += 1;
  });
  assert.ok(xorReduce >= 1);
  assert.ok(bitMask >= 1);
  const astScore = normalizeAstScore(fn, countAstNodes(fn));
  assert.ok(astScore > 0.02);
});

test('static-call-graph: 静态调用边与 sink 距离', () => {
  const candidates = [
    { tag: 'script::caller@1:10', functionName: 'caller', functionCode: 'function caller(){callee();}' },
    { tag: 'script::callee@1:20', functionName: 'callee', functionCode: "function callee(){console.log('x');}" }
  ];
  const astByTag = new Map(candidates.map((item) => [item.tag, parseFunctionCode(item.functionCode)]));
  const graph = buildStaticCallGraph(candidates, astByTag);
  assert.ok(graph.edges.some((edge) => edge.from.includes('caller') && edge.to.includes('callee')));

  const sinkTags = new Set(['script::callee@1:20']);
  const distances = computeSinkDistances(graph, sinkTags);
  assert.equal(distances.get('script::caller@1:10'), 1);
  assert.equal(sinkProximityScore(distances.get('script::caller@1:10')), 0.5);
});

test('scorer: softmax 归一化和为 1', () => {
  const probs = softmaxNormalize([1, 2, 0.5]);
  const sum = probs.reduce((acc, value) => acc + value, 0);
  assert.ok(Math.abs(sum - 1) < 1e-9);
});

test('scorer: 温度系数使分布更平缓', () => {
  const cold = softmaxNormalize([3, 1, 0], 1);
  const warm = softmaxNormalize([3, 1, 0], 3);
  assert.ok(cold[0] > warm[0]);
  assert.ok(warm[0] < 0.6);
});

test('scorer: api 特征归一化避免 IDF 主导', () => {
  const raw = [
    { ast: 0, api: 3, entropy: 0, sink: 1 },
    { ast: 0, api: 0, entropy: 0, sink: 0.5 }
  ];
  const normalized = normalizeFeatureScores(raw);
  assert.equal(normalized[0].api, 1);
  assert.equal(normalized[1].api, 0);
});

test('integration: 对真实 deduped 样本生成 p_0 分布', () => {
  if (!fs.existsSync(FIXTURE_DEDUPED)) {
    return;
  }

  const tmpCache = path.join(os.tmpdir(), `structural-prior-test-${Date.now()}.json`);
  const result = runStructuralPrior({
    dedupedFile: FIXTURE_DEDUPED,
    taskDescription: "寻找控制台console.log输出的 search_sig",
    cacheFile: tmpCache,
    useCache: true
  });

  assert.ok(result.candidateCount > 0);
  assert.ok(result.sinkApis.includes('console.log'));
  assert.ok(result.sinkNodeCount >= 1);

  const probSum = result.distribution.reduce((acc, item) => acc + item.prob, 0);
  assert.ok(Math.abs(probSum - 1) < 1e-6);

  const emitNode = result.distribution.find((item) => item.functionName === 'emitSearchTelemetry');
  assert.ok(emitNode, '应识别 emitSearchTelemetry 为 Sink 节点');
  assert.equal(emitNode.sink_proximity, 1);
  assert.ok(
    emitNode.prob < 0.35,
    `Top1 概率应显著低于旧版极端值，实际 ${emitNode.prob.toFixed(4)}`
  );
  assert.ok(result.priorTemperature === DEFAULT_PRIOR_TEMPERATURE);

  fs.rmSync(tmpCache, { force: true });
});

test('ast-templates: 高熵数组模板', () => {
  const fn = parseFunctionCode('function f(){return [11,23,37,41,53,67,79,83,97,101,113,127];}');
  const score = normalizeAstScore(fn, countAstNodes(fn));
  assert.ok(score >= 0);
  assert.ok(shannonEntropy([11, 23, 37, 41, 53, 67, 79, 83, 97, 101, 113, 127]) > 3);
});

test('ast-templates: 识别 MurmurHash request body 构造 (_0x91c65d 风格)', () => {
  const fn = parseFunctionCode(
    "function buildBody(seed, route, a, b, defaults){"
    + "var chars=_helper(route,a,b), h=(mix(0x27d4eb2d,seed&&seed.slot||0)^ (seed&&seed.gate||0))>>>0, state=h;"
    + "for(var i=0;i<chars.length;i+=1){"
    + "var c=chars.charCodeAt(i);"
    + "state=Math.imul((state^c^i)>>>0,0x9e3779b9)>>>0, state=rotate(state,(i&7)+3);"
    + "}"
    + "var lanes=[state];"
    + "lanes.push(Math.imul(state^h,0x85ebca6b)>>>0);"
    + "lanes.push(Math.imul(state^lanes[1],0x1b873593)>>>0);"
    + "var sig=mix(lane(lanes[0],7),lane(lanes[1],7),lane(lanes[2],6));"
    + "var form=parse(route), date=form.date||defaults&&defaults.date||'2026-01-01';"
    + "var time=form.time||defaults&&defaults.time||'14:30';"
    + "var svc=form.service||defaults&&defaults.service||'consultation';"
    + "return join('date='+date+'&time='+time+'&service='+svc,'&sig=')+sig;}"
  );
  const {
    matchesImulXorHashLoop,
    matchesChainedFormConcat,
    matchesMurmurImulConstants,
    matchesHashDigestPush,
    matchesHashLaneMix
  } = require('../src/modules/structural-prior/ast-templates');
  const { walkAst } = require('../src/modules/structural-prior/ast-utils');
  let imulXor = 0;
  let chained = 0;
  walkAst(fn, (node) => {
    if (matchesImulXorHashLoop(node)) imulXor += 1;
    if (matchesChainedFormConcat(node)) chained += 1;
  });
  assert.ok(imulXor >= 1);
  assert.ok(chained >= 1);
  assert.ok(matchesMurmurImulConstants(fn));
  assert.ok(matchesHashDigestPush(fn));
  assert.ok(matchesHashLaneMix(fn));
  const astScore = normalizeAstScore(fn, countAstNodes(fn));
  assert.ok(astScore > 0.04);
});

test('ast-templates: 识别多步 helper 串联的值构造编排器', () => {
  const { matchesValueCallPipeline } = require('../src/modules/structural-prior/ast-templates');
  const fn = parseFunctionCode(
    'function buildFingerprint(seed, ctx, opts){'
    + 'const _0x1=helperA(seed,ctx,opts),'
    + '_0x2=helperB(_0x1,ctx,opts);'
    + 'return helperC(_0x2,Number(opts&&opts.rounds||1));}'
  );
  assert.ok(matchesValueCallPipeline(fn));
  const astScore = normalizeAstScore(fn, countAstNodes(fn));
  assert.ok(astScore > 0.05);

  const wrapper = parseFunctionCode('function wrap(x){return helperA(x);}');
  assert.equal(matchesValueCallPipeline(wrapper), false);
});

test('ast-templates: 识别 object-return 请求编排器与 digest token 格式化', () => {
  const {
    matchesValueCallPipeline,
    matchesDigestTokenFormat
  } = require('../src/modules/structural-prior/ast-templates');
  const fn = parseFunctionCode(
    'function buildRequest(input, ctx){'
    + 'const rows=mapRows(input), src=createSource(input, ctx);'
    + 'let h=0; for(let i=0;i<src.length;i+=1){h=Math.imul(h^src.charCodeAt(i),0x9e3779b9)>>>0;}'
    + 'const sig=(h.toString(36).padStart(6,"0")+h.toString(36).padStart(6,"0")).slice(-12),'
    + 'mode=valueOf(rows,"m","standard");'
    + 'return {method:requestMethod(mode,ctx),endpoint:requestEndpoint(mode,ctx),headers:{"x-ticket":sig}};}'
  );
  assert.ok(matchesValueCallPipeline(fn));
  assert.ok(matchesDigestTokenFormat(fn));
  const astScore = normalizeAstScore(fn, countAstNodes(fn));
  assert.ok(astScore > 0.04);
});

test('api-extractor: sink 匹配', () => {
  assert.equal(matchesSinkApi('console.log', ['console.log']), true);
  assert.equal(matchesSinkApi('console.log', ['console']), true);
  assert.equal(matchesSinkApi('console.debug', ['console']), true);
  assert.equal(normalizeApiName('fetch'), 'fetch');
});

const LOGIN_PASSWORD_TASK = 'Looking for the entry function in the login request that encrypts the password 13819912565 into a token like this: MTM4MTk5MTI1NjU=';

test('task-api-hints: 从任务描述提取 domain 关键词', () => {
  const keywords = extractTaskKeywords(LOGIN_PASSWORD_TASK);
  assert.ok(keywords.includes('login'));
  assert.ok(keywords.includes('password'));
  assert.ok(keywords.includes('encrypt'));
  assert.ok(keywords.includes('token'));
  assert.ok(keywords.includes('request'));
  assert.equal(normalizeEnglishKeyword('encrypts'), 'encrypt');
});

test('task-api-hints: 关键词匹配函数字面量与 API 名', () => {
  const loginFn = parseFunctionCode(
    'function(data){return {password: encode(x), url: server() + "login"};}'
  );
  const codeTerms = extractCodeTerms(loginFn);
  assert.ok(keywordMatchesCorpus('login', codeTerms));
  assert.ok(keywordMatchesCorpus('password', codeTerms));

  const boost = computeKeywordApiBoost(
    { codeTerms, apiCalls: [{ api_name: 'fetch', resolved_name: 'fetch' }] },
    extractTaskKeywords(LOGIN_PASSWORD_TASK)
  );
  assert.ok(boost >= 0.9);
});

test('integration: 登录密码任务优先提升含 login/password 的函数', () => {
  if (!fs.existsSync(FIXTURE_DEDUPED)) {
    return;
  }

  const tmpCache = path.join(os.tmpdir(), `structural-prior-login-test-${Date.now()}.json`);
  const result = runStructuralPrior({
    dedupedFile: FIXTURE_DEDUPED,
    taskDescription: LOGIN_PASSWORD_TASK,
    cacheFile: tmpCache,
    useCache: true
  });

  assert.ok(result.taskKeywords.includes('login'));
  assert.ok(result.taskKeywords.includes('password'));

  const loginHandler = result.distribution.find((item) => item.func_id?.includes('anonymous_11@329'));
  const base64Node = result.distribution.find((item) => item.functionName === 'base64Encode');
  const loginService = result.distribution.find((item) => item.functionName === 'login');

  if (loginHandler && base64Node) {
    assert.ok(
      loginHandler.rank < base64Node.rank,
      `含 login/password 的 handler(#${loginHandler.rank}) 应高于 base64Encode(#${base64Node.rank})`
    );
    assert.ok(loginHandler.api_task_boost > base64Node.api_task_boost);
  }

  if (loginService) {
    assert.ok(loginService.api_task_boost > 0);
  }

  fs.rmSync(tmpCache, { force: true });
});
