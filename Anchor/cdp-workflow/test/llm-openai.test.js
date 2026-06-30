const test = require('node:test');
const assert = require('node:assert/strict');
const {
  normalizeOpenAiBaseUrl,
  resolveOpenAiBaseUrl,
  resolveChatCompletionsUrl,
  assertCanonicalChatCompletionsUrl,
  useResponseFormat,
  resolveEnableThinking,
  applyThinkingToRequestBody,
  isResponseFormatUnsupportedError,
  isRetriableJsonParseError,
  isRetriableApiError,
  formatParseErrorDetail
} = require('../src/modules/llm-openai');

test('resolveChatCompletionsUrl: 根地址拼接 /chat/completions', () => {
  assert.equal(
    resolveChatCompletionsUrl('https://www.sophnet.com/api/open-apis/v1'),
    'https://www.sophnet.com/api/open-apis/v1/chat/completions'
  );
});

test('normalizeOpenAiBaseUrl: 去掉误填的 /chat/completions', () => {
  assert.equal(
    normalizeOpenAiBaseUrl('https://www.sophnet.com/api/open-apis/v1/chat/completions/'),
    'https://www.sophnet.com/api/open-apis/v1'
  );
});

test('normalizeOpenAiBaseUrl: 纠正 compleetions 拼写错误', () => {
  assert.equal(
    normalizeOpenAiBaseUrl('https://www.sophnet.com/api/open-apis/v1/chat/compleetions'),
    'https://www.sophnet.com/api/open-apis/v1'
  );
  assert.equal(
    resolveChatCompletionsUrl('https://www.sophnet.com/api/open-apis/v1/chat/compleetions'),
    'https://www.sophnet.com/api/open-apis/v1/chat/completions'
  );
});

test('assertCanonicalChatCompletionsUrl: 拒绝 compleetions 拼写', () => {
  assert.throws(
    () => assertCanonicalChatCompletionsUrl('https://www.sophnet.com/api/open-apis/v1/chat/compleetions'),
    /compleetions/
  );
  assert.doesNotThrow(
    () => assertCanonicalChatCompletionsUrl('https://www.sophnet.com/api/open-apis/v1/chat/completions')
  );
});

test('resolveOpenAiBaseUrl: 从 env 误填后缀中规范化', () => {
  const prev = process.env.OPENAI_BASE_URL;
  process.env.OPENAI_BASE_URL = 'https://www.sophnet.com/api/open-apis/v1/chat/compleetions/';
  assert.equal(
    resolveOpenAiBaseUrl(),
    'https://www.sophnet.com/api/open-apis/v1'
  );
  if (prev === undefined) delete process.env.OPENAI_BASE_URL;
  else process.env.OPENAI_BASE_URL = prev;
});

test('isResponseFormatUnsupportedError: 识别 Sophnet 错误文案', () => {
  const msg = 'Model DeepSeek-V3.2 does not support response_format parameter';
  assert.equal(isResponseFormatUnsupportedError(msg), true);
});

test('useResponseFormat: 环境变量可关闭', () => {
  const prev = process.env.OPENAI_USE_RESPONSE_FORMAT;
  process.env.OPENAI_USE_RESPONSE_FORMAT = 'false';
  assert.equal(useResponseFormat(), false);
  if (prev === undefined) delete process.env.OPENAI_USE_RESPONSE_FORMAT;
  else process.env.OPENAI_USE_RESPONSE_FORMAT = prev;
});

test('resolveEnableThinking: 环境变量可关闭 GLM 思考模式', () => {
  const prev = process.env.OPENAI_ENABLE_THINKING;
  process.env.OPENAI_ENABLE_THINKING = 'false';
  assert.equal(resolveEnableThinking(), false);
  process.env.OPENAI_ENABLE_THINKING = 'disabled';
  assert.equal(resolveEnableThinking(), false);
  process.env.OPENAI_ENABLE_THINKING = 'true';
  assert.equal(resolveEnableThinking(), true);
  delete process.env.OPENAI_ENABLE_THINKING;
  assert.equal(resolveEnableThinking(), null);
  if (prev === undefined) delete process.env.OPENAI_ENABLE_THINKING;
  else process.env.OPENAI_ENABLE_THINKING = prev;
});

test('applyThinkingToRequestBody: 写入双格式参数', () => {
  const body = { model: 'glm-5.2' };
  applyThinkingToRequestBody(body, false);
  assert.deepEqual(body.thinking, { type: 'disabled' });
  assert.equal(body.enable_thinking, false);

  const body2 = { model: 'glm-5.2' };
  applyThinkingToRequestBody(body2, true);
  assert.deepEqual(body2.thinking, { type: 'enabled' });
  assert.equal(body2.enable_thinking, true);

  const body3 = { model: 'glm-5.2' };
  applyThinkingToRequestBody(body3, null);
  assert.equal(body3.thinking, undefined);
  assert.equal(body3.enable_thinking, undefined);
});

test('formatParseErrorDetail: 截断过长错误信息', () => {
  const long = 'x'.repeat(500);
  const out = formatParseErrorDetail(new Error(long), 20);
  assert.equal(out.length, 21);
  assert.ok(out.endsWith('…'));
});

test('isRetriableJsonParseError: 识别非 JSON 对话回复与 SyntaxError', () => {
  assert.equal(
    isRetriableJsonParseError(new Error('LLM 响应不是有效 JSON: I am ready to assist')),
    true
  );
  assert.equal(isRetriableJsonParseError(new SyntaxError('Unexpected token')), true);
  assert.equal(isRetriableJsonParseError(new Error('LLM API 错误 (401)')), false);
});

test('isRetriableApiError: 识别 503 网关超时与网络错误', () => {
  const timeout503 = new Error(
    'LLM API 错误 (503): {"status":503,"message":"{\\"error\\":{\\"message\\":\\"Upstream read timeout: timeout\\",\\"type\\":\\"gateway_timeout\\"}}"}'
  );
  assert.equal(isRetriableApiError(timeout503), true);
  assert.equal(isRetriableApiError(new Error('LLM API 错误 (502): bad gateway')), true);
  assert.equal(isRetriableApiError(new Error('LLM API 网络请求失败 (https://api.example.com): fetch failed')), true);
  assert.equal(isRetriableApiError(new Error('LLM API 错误 (401): unauthorized')), false);
});
