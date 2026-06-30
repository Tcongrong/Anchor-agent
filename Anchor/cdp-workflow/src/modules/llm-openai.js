/**
 * OpenAI 兼容 Chat Completions 请求（可选 response_format）
 *
 * 部分网关/模型（如 Sophnet DeepSeek-V3.2）不支持 response_format，可设置：
 *   OPENAI_USE_RESPONSE_FORMAT=false
 *
 * OPENAI_BASE_URL 只需填 API 根地址（如 https://www.sophnet.com/api/open-apis/v1），
 * 不要带上 /chat/completions；若误填完整路径或拼写错误（如 compleetions），会自动纠正。
 *
 * 网络/模型首包较慢时可增大：OPENAI_FETCH_HEADERS_TIMEOUT_MS（默认 300000）
 *
 * GLM 思考模式（GLM-5 系列默认开启，会显著增加延迟）：
 *   OPENAI_ENABLE_THINKING=false   关闭思考（推荐用于 JSON 结构化输出任务）
 *   OPENAI_ENABLE_THINKING=true    显式开启
 *   未设置：不向 API 传参，使用网关默认行为
 */

const CHAT_COMPLETIONS_SUFFIX_RE = /\/chat\/comple+e?tions\/?$/i;
const CHAT_COMPLETIONS_PATH = '/chat/completions';
/** 只允许标准结尾 /chat/completions（禁止 compleetions 等变体） */
const CANONICAL_CHAT_COMPLETIONS_URL_RE = /^https?:\/\/.+\/chat\/completions\/?$/i;
const WRONG_COMPLETIONS_SPELLING_RE = /compleetions/i;

/** @type {import('undici').Agent | null | undefined} undefined = 尚未初始化 */
let fetchDispatcher;

/**
 * 规范化 OPENAI_BASE_URL：去掉末尾斜杠及误填的 /chat/completions（含 compleetions 拼写错误）。
 *
 * @param {string} baseUrl
 * @returns {string}
 */
function normalizeOpenAiBaseUrl(baseUrl) {
  let base = String(baseUrl || '').trim().replace(/\/$/, '');
  if (CHAT_COMPLETIONS_SUFFIX_RE.test(base)) {
    const hadTypo = /compleetions/i.test(base);
    base = base.replace(CHAT_COMPLETIONS_SUFFIX_RE, '');
    if (hadTypo) {
      console.warn(
        '  ⚠️  OPENAI_BASE_URL 含拼写错误 compleetions（应为 completions），已自动纠正。'
        + ' 请改为仅填根地址，例如 https://www.sophnet.com/api/open-apis/v1'
      );
    } else {
      console.warn(
        '  ⚠️  OPENAI_BASE_URL 不应包含 /chat/completions，已自动去掉后缀。'
        + ' 请改为仅填根地址，例如 https://www.sophnet.com/api/open-apis/v1'
      );
    }
  }
  return base;
}

/**
 * @param {string} baseUrl
 * @returns {string}
 */
function resolveChatCompletionsUrl(baseUrl) {
  return `${normalizeOpenAiBaseUrl(baseUrl)}${CHAT_COMPLETIONS_PATH}`;
}

/**
 * 从 options 或 OPENAI_BASE_URL 解析规范化根地址（唯一入口，供各 LLM 调用方使用）。
 *
 * @param {string} [baseUrl]
 * @returns {string}
 */
function resolveOpenAiBaseUrl(baseUrl) {
  const raw = baseUrl ?? process.env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1';
  return normalizeOpenAiBaseUrl(raw);
}

/**
 * fetch 前硬性校验：若 URL 含 compleetions 或非标准路径，立即抛错（不发出 HTTP 请求）。
 *
 * @param {string} url
 */
function assertCanonicalChatCompletionsUrl(url) {
  const normalized = String(url || '').trim().replace(/\/$/, '');
  if (WRONG_COMPLETIONS_SPELLING_RE.test(normalized)) {
    throw new Error(
      `LLM endpoint 含错误拼写 compleetions（应为 completions）: ${normalized}。`
      + '请检查 OPENAI_BASE_URL，仅填 API 根地址。'
    );
  }
  if (!CANONICAL_CHAT_COMPLETIONS_URL_RE.test(normalized)) {
    throw new Error(
      `LLM endpoint 必须以 /chat/completions 结尾: ${normalized}。`
      + '请检查 OPENAI_BASE_URL，仅填 API 根地址。'
    );
  }
}

/**
 * @returns {import('undici').Agent | null}
 */
function getFetchDispatcher() {
  if (fetchDispatcher !== undefined) return fetchDispatcher;
  try {
    const { Agent } = require('undici');
    const headersTimeout = Number(process.env.OPENAI_FETCH_HEADERS_TIMEOUT_MS) || 300_000;
    const bodyTimeout = Number(process.env.OPENAI_FETCH_BODY_TIMEOUT_MS) || 600_000;
    const connectTimeout = Number(process.env.OPENAI_FETCH_CONNECT_TIMEOUT_MS) || 60_000;
    fetchDispatcher = new Agent({ headersTimeout, bodyTimeout, connectTimeout });
  } catch {
    fetchDispatcher = null;
  }
  return fetchDispatcher;
}

/**
 * @param {object} [options]
 * @returns {boolean}
 */
function useResponseFormat(options = {}) {
  if (options.useResponseFormat === false) return false;
  if (options.useResponseFormat === true) return true;
  const env = String(process.env.OPENAI_USE_RESPONSE_FORMAT ?? '').trim().toLowerCase();
  if (env === '0' || env === 'false' || env === 'no' || env === 'off') {
    return false;
  }
  return true;
}

/**
 * 解析 GLM / Z.ai 思考模式开关。返回 null 表示不传参（网关默认）。
 *
 * @param {object} [options]
 * @param {boolean} [options.enableThinking]
 * @returns {boolean | null}
 */
function resolveEnableThinking(options = {}) {
  if (options.enableThinking === true) return true;
  if (options.enableThinking === false) return false;
  const env = String(process.env.OPENAI_ENABLE_THINKING ?? '').trim().toLowerCase();
  if (!env) return null;
  if (env === '0' || env === 'false' || env === 'no' || env === 'off' || env === 'disabled') {
    return false;
  }
  if (env === '1' || env === 'true' || env === 'yes' || env === 'on' || env === 'enabled') {
    return true;
  }
  return null;
}

/**
 * 向请求体写入思考模式参数（兼容 Z.ai thinking 与 DashScope enable_thinking）。
 *
 * @param {Record<string, unknown>} body
 * @param {boolean | null} enableThinking
 */
function applyThinkingToRequestBody(body, enableThinking) {
  if (enableThinking === null || enableThinking === undefined) return;
  if (enableThinking) {
    body.enable_thinking = true;
    body.thinking = { type: 'enabled' };
  } else {
    body.enable_thinking = false;
    body.thinking = { type: 'disabled' };
  }
}

/**
 * @param {string} errText
 * @returns {boolean}
 */
function isResponseFormatUnsupportedError(errText) {
  const lower = String(errText).toLowerCase();
  return lower.includes('response_format')
    || lower.includes('response format')
    || (lower.includes('does not support') && lower.includes('format'));
}

/**
 * @param {object} params
 * @returns {Promise<{ content: string, usedResponseFormat: boolean }>}
 */
async function chatCompletion(params) {
  const {
    messages,
    apiKey,
    baseUrl,
    model,
    temperature = 0.2,
    useResponseFormat: useResponseFormatOpt,
    enableThinking: enableThinkingOpt,
    attemptLabel,
    logEndpoint = true
  } = params;

  const url = resolveChatCompletionsUrl(baseUrl);
  assertCanonicalChatCompletionsUrl(url);
  const enableThinking = resolveEnableThinking({ enableThinking: enableThinkingOpt });
  if (logEndpoint) {
    const suffix = attemptLabel ? ` (${attemptLabel})` : '';
    const thinkingHint = enableThinking === false
      ? '，思考模式: 关'
      : enableThinking === true
        ? '，思考模式: 开'
        : '';
    console.log(`  ℹ️  LLM endpoint${suffix}: ${url}${thinkingHint}`);
  }
  let withFormat = useResponseFormat({ useResponseFormat: useResponseFormatOpt });

  const buildBody = (includeFormat) => {
    const body = {
      model,
      temperature,
      messages: [
        { role: 'system', content: messages.system },
        { role: 'user', content: messages.user }
      ]
    };
    if (includeFormat) {
      body.response_format = { type: 'json_object' };
    }
    applyThinkingToRequestBody(body, enableThinking);
    return body;
  };

  const doFetch = async (includeFormat) => {
    let response;
    try {
      /** @type {RequestInit & { dispatcher?: import('undici').Agent }} */
      const fetchInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify(buildBody(includeFormat))
      };
      const dispatcher = getFetchDispatcher();
      if (dispatcher) fetchInit.dispatcher = dispatcher;
      response = await fetch(url, fetchInit);
    } catch (error) {
      const hint = error.cause?.message || error.message || String(error);
      throw new Error(
        `LLM API 网络请求失败 (${url}): ${hint}。`
        + '请检查 OPENAI_BASE_URL、网络/代理，或使用 --mock / --llm-response-file 跳过在线调用'
      );
    }
    const errText = response.ok ? '' : await response.text();
    return { response, errText, includeFormat };
  };

  let { response, errText, includeFormat } = await doFetch(withFormat);

  if (!response.ok && withFormat && isResponseFormatUnsupportedError(errText)) {
    ({ response, errText, includeFormat } = await doFetch(false));
    withFormat = false;
  }

  if (!response.ok) {
    throw new Error(`LLM API 错误 (${response.status}): ${errText.slice(0, 500)}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('LLM 响应 content 为空');
  }

  return { content, usedResponseFormat: includeFormat };
}

/**
 * @param {unknown} error
 * @returns {boolean}
 */
function isRetriableJsonParseError(error) {
  if (!error) return false;
  if (error instanceof SyntaxError) return true;
  const msg = String(error.message || error);
  return /不是有效 JSON|JSON 解析失败|Unexpected token|valid JSON/i.test(msg);
}

/**
 * @param {unknown} error
 * @returns {boolean}
 */
function isRetriableApiError(error) {
  if (!error) return false;
  const msg = String(error.message || error);
  if (/LLM API 错误 \((429|502|503|504)\)/.test(msg)) return true;
  if (/gateway_timeout|upstream read timeout/i.test(msg)) return true;
  if (/LLM API 网络请求失败/.test(msg)) return true;
  return false;
}

/**
 * @param {unknown} error
 * @returns {boolean}
 */
function isRetriableLlmError(error) {
  return isRetriableJsonParseError(error) || isRetriableApiError(error);
}

/**
 * @param {unknown} error
 * @param {number} [maxLen=400]
 * @returns {string}
 */
function formatParseErrorDetail(error, maxLen = 400) {
  const msg = error instanceof Error ? error.message : String(error ?? '未知错误');
  if (msg.length <= maxLen) return msg;
  return `${msg.slice(0, maxLen)}…`;
}

/**
 * 调用 chatCompletion 并用 parseContent 解析 JSON；解析失败时自动重试。
 *
 * @param {object} params chatCompletion 参数（含 messages）
 * @param {(content: string) => unknown} parseContent
 * @param {object} [options]
 * @param {number} [options.maxAttempts=3]
 * @returns {Promise<unknown>}
 */
async function callChatCompletionJson(params, parseContent, options = {}) {
  const maxAttempts = options.maxAttempts ?? 3;
  let messages = params.messages;
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const temperature = attempt > 1 ? 0 : (params.temperature ?? 0.2);
      const attemptLabel = maxAttempts > 1 ? `第 ${attempt}/${maxAttempts} 次` : undefined;
      const { content } = await chatCompletion({
        ...params,
        messages,
        temperature,
        attemptLabel
      });
      return parseContent(content);
    } catch (error) {
      lastError = error;
      if (!isRetriableLlmError(error) || attempt >= maxAttempts) {
        throw error;
      }
      if (typeof options.onRetry === 'function') {
        options.onRetry(attempt, maxAttempts, error);
      } else if (isRetriableApiError(error)) {
        console.warn(
          `  ⚠️  LLM API 临时错误（第 ${attempt}/${maxAttempts} 次）: ${formatParseErrorDetail(error)}，重试…`
        );
      } else {
        console.warn(
          `  ⚠️  LLM JSON 解析失败（第 ${attempt}/${maxAttempts} 次）: ${formatParseErrorDetail(error)}，重试…`
        );
      }
      if (isRetriableJsonParseError(error)) {
        messages = {
          system: `${params.messages.system}\n\nIMPORTANT: Respond with JSON only. No greetings, markdown, or extra text. All string values must be single-line. Every likelihoods object must be exactly {"f1":number,"f2":number,"f3":number} with no duplicate or malformed keys.`,
          user: `${params.messages.user}\n\n[重要] 请仅输出一个可被 JSON.parse 直接解析的 JSON 对象。likelihoods 键名只能是 "f1"/"f2"/"f3"，不要写成 "f22" 或漏写冒号。`
        };
      }
    }
  }

  throw lastError;
}

module.exports = {
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
  isRetriableLlmError,
  formatParseErrorDetail,
  chatCompletion,
  callChatCompletionJson
};
