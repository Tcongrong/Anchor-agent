/**
 * LLM 调用与响应解析（OpenAI 兼容 API）
 */

const fs = require('fs');
const { callChatCompletionJson, resolveOpenAiBaseUrl } = require('../llm-openai');

const DEFAULT_MODEL = 'gpt-4o-mini';

/** LLM 有时用 Unicode 破折号/减号代替 ASCII '-'，会导致 JSON.parse 失败 */
const UNICODE_MINUS_LIKE = /[\u2010-\u2015\u2212\uFE63\uFF0D]/g;

/**
 * @param {string} text
 * @returns {string}
 */
function sanitizeLlmJsonText(text) {
  return text.replace(UNICODE_MINUS_LIKE, '-');
}

/**
 * 将 JSON 字符串字面量内的裸换行转义为 \\n。
 * @param {string} text
 * @returns {string}
 */
function escapeNewlinesInJsonStrings(text) {
  let result = '';
  let inString = false;
  let escaped = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      if (escaped) {
        result += ch;
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        result += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        result += ch;
        inString = false;
        continue;
      }
      if (ch === '\r') {
        if (text[i + 1] === '\n') i += 1;
        result += '\\n';
        continue;
      }
      if (ch === '\n') {
        result += '\\n';
        continue;
      }
      result += ch;
      continue;
    }

    if (ch === '"') {
      inString = true;
    }
    result += ch;
  }

  return result;
}

/**
 * 合并 LLM 在字符串中间误插入的 `",\\n 续写"` 断行。
 * @param {string} text
 * @returns {string}
 */
function repairPrematureStringBreaks(text) {
  return text.replace(
    /"((?:[^"\\]|\\.)*)"\s*,(\s*\r?\n\s*)([^"\[{}\],][^"]*?)"/g,
    (match, head, _ws, tail) => {
      const trimmedTail = tail.trim();
      if (!trimmedTail || /^"[^"]+"\s*:/.test(trimmedTail)) {
        return match;
      }
      return `"${head}${trimmedTail}"`;
    }
  );
}

/**
 * 在 JSON 结构层（字符串外）将中文标点替换为 ASCII。
 * @param {string} text
 * @returns {string}
 */
function replaceChinesePunctuationOutsideStrings(text) {
  let result = '';
  let inString = false;
  let escaped = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      result += ch;
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      result += ch;
      continue;
    }
    if (ch === '，') {
      result += ',';
      continue;
    }
    if (ch === '：') {
      result += ':';
      continue;
    }
    result += ch;
  }

  return result;
}

/**
 * 修复 likelihoods 中常见的 f 键名笔误，如 "f22,"f2": -> "f2":
 * @param {string} text
 * @returns {string}
 */
function repairLikelihoodKeyTypos(text) {
  return text
    .replace(/"f([123])\1+,"f\1":/g, '"f$1":')
    .replace(/"f([123])"\s+(\d+(?:\.\d+)?)/g, '"f$1":$2');
}

/**
 * 修复属性值之间缺失的逗号（如 "prob": 0.5 "outcome_desc":）。
 * @param {string} text
 * @returns {string}
 */
function repairMissingCommasBetweenProperties(text) {
  return text.replace(
    /(?<![,\[{:])(\d+(?:\.\d+)?|true|false|null)\s+("[^"]+")\s*:/g,
    '$1, $2:'
  );
}

/**
 * @param {string} text
 * @returns {string}
 */
function repairLlmJsonText(text) {
  let repaired = sanitizeLlmJsonText(text);
  repaired = replaceChinesePunctuationOutsideStrings(repaired);
  repaired = repairLikelihoodKeyTypos(repaired);
  repaired = repairMissingCommasBetweenProperties(repaired);
  repaired = repairPrematureStringBreaks(repaired);
  repaired = escapeNewlinesInJsonStrings(repaired);
  repaired = repaired.replace(/,\s*([}\]])/g, '$1');
  return repaired;
}

/**
 * @param {string} text
 * @returns {unknown}
 */
function tryJsonParseObject(text) {
  const attempts = [
    () => JSON.parse(sanitizeLlmJsonText(text)),
    () => JSON.parse(repairLlmJsonText(text))
  ];

  let lastError;
  for (const attempt of attempts) {
    try {
      return attempt();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

/**
 * @param {string} text
 * @returns {object}
 */
function parseLlmJson(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('LLM 响应为空');
  }

  let trimmed = text.trim();
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    trimmed = fenceMatch[1].trim();
  }

  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');
  if (start < 0 || end <= start) {
    throw new Error(`LLM 响应不是有效 JSON: ${trimmed.slice(0, 200)}`);
  }

  try {
    return tryJsonParseObject(trimmed.slice(start, end + 1));
  } catch (error) {
    throw new Error(`LLM 响应 JSON 解析失败: ${error.message}`);
  }
}

/**
 * @param {object} parsed
 * @returns {object}
 */
function normalizeLlmResponse(parsed) {
  const candidates = (parsed.candidates || []).map((item, idx) => ({
    var_name: item.var_name || item.varName || `var_${idx + 1}`,
    runtime_loc: item.runtime_loc || item.runtimeLoc || null,
    function_tag: item.function_tag || item.functionTag || null,
    condition: item.condition || null,
    predicted_outcomes: (item.predicted_outcomes || item.predictedOutcomes || []).map((outcome) => ({
      outcome_desc: outcome.outcome_desc || outcome.outcomeDesc || '',
      prob: Number(outcome.prob) || 0,
      likelihoods: outcome.likelihoods || {}
    }))
  }));

  return {
    reasoning: parsed.reasoning || parsed.reason || '',
    candidates
  };
}

/**
 * @param {object} llmContext
 * @returns {object}
 */
function generateMockLlmResponse(llmContext) {
  const observables = (llmContext.allObservableCandidates || [])
    .filter((obs) => obs.binding || obs.role === 'return-expr');
  const focusTags = (llmContext.focusFunctions || []).map((f) => f.tag);

  const scored = observables.map((obs) => {
    let score = 0;
    const text = `${obs.text || ''} ${obs.var_name || ''}`.toLowerCase();
    if (/sign|sig|hash|token|search|seal|encode|digest/.test(text)) score += 3;
    if (obs.role === 'return-expr') score += 2;
    if (obs.kind === 'call') score += 1;
    return { obs, score };
  });

  scored.sort((a, b) => b.score - a.score || a.obs.var_name.localeCompare(b.obs.var_name));

  const picked = scored.slice(0, 5).map((item) => item.obs);
  while (picked.length < 5 && observables.length) {
    const next = observables[picked.length % observables.length];
    if (!picked.includes(next)) picked.push(next);
    else break;
  }

  const candidates = picked.map((obs) => {
    const fnRank = focusTags.indexOf(obs.functionTag) + 1;
    const fKey = fnRank > 0 ? `f${fnRank}` : 'f1';
    const otherKeys = ['f1', 'f2', 'f3'].filter((k) => k !== fKey);

    return {
      var_name: obs.var_name || obs.binding,
      runtime_loc: obs.runtime_loc || obs.source_loc,
      function_tag: obs.functionTag,
      condition: null,
      predicted_outcomes: [
        {
          outcome_desc: '非空字符串（疑似 token/signature）',
          prob: 0.55,
          likelihoods: { [fKey]: 0.92, [otherKeys[0]]: 0.12, [otherKeys[1]]: 0.08 }
        },
        {
          outcome_desc: 'null / undefined / 空值',
          prob: 0.25,
          likelihoods: { [fKey]: 0.15, [otherKeys[0]]: 0.55, [otherKeys[1]]: 0.5 }
        },
        {
          outcome_desc: '未被命中（断点未触发）',
          prob: 0.2,
          likelihoods: { f1: 0.35, f2: 0.35, f3: 0.35 }
        }
      ]
    };
  });

  return normalizeLlmResponse({
    reasoning: 'mock: 基于变量名/表达式启发式选择可区分焦点函数的观测点',
    candidates
  });
}

/**
 * @param {{ system: string, user: string }} messages
 * @param {object} options
 * @returns {Promise<object>}
 */
async function callOpenAiCompatible(messages, options = {}) {
  const apiKey = options.apiKey || process.env.OPENAI_API_KEY;
  const baseUrl = resolveOpenAiBaseUrl(options.baseUrl);
  const model = options.model || process.env.OPENAI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error('未设置 OPENAI_API_KEY，请配置环境变量或使用 --mock / --llm-response-file');
  }

  const userPrompt = typeof messages.user === 'string' ? messages.user : String(messages.user ?? '');
  if (!userPrompt.trim()) {
    throw new Error('LLM user prompt 为空，无法调用');
  }

  return callChatCompletionJson({
    messages,
    apiKey,
    baseUrl,
    model,
    temperature: options.temperature ?? 0,
    useResponseFormat: options.useResponseFormat
  }, (content) => normalizeLlmResponse(parseLlmJson(content)), {
    maxAttempts: options.maxAttempts ?? 5,
    ...options
  });
}

/**
 * @param {object} llmContext
 * @param {object} options
 * @returns {Promise<object>}
 */
async function requestBreakpointCandidatesInner(llmContext, options = {}) {
  const { buildChatMessages } = require('./prompt');
  const messages = buildChatMessages(llmContext);
  return callOpenAiCompatible(messages, options);
}

/**
 * @param {object} llmContext
 * @param {object} options
 * @returns {Promise<object>}
 */
async function requestBreakpointCandidates(llmContext, options = {}) {
  if (options.llmResponseFile) {
    const raw = fs.readFileSync(options.llmResponseFile, 'utf8');
    return normalizeLlmResponse(parseLlmJson(raw));
  }

  if (options.mock) {
    return generateMockLlmResponse(llmContext);
  }

  try {
    return await requestBreakpointCandidatesInner(llmContext, options);
  } catch (error) {
    if (options.noMockFallback) {
      throw error;
    }
    console.warn(
      `  ⚠️  TC2 LLM 多次 JSON 解析失败，回退启发式 mock 断点候选: ${error.message}`
    );
    return generateMockLlmResponse(llmContext);
  }
}

module.exports = {
  sanitizeLlmJsonText,
  escapeNewlinesInJsonStrings,
  repairPrematureStringBreaks,
  repairLikelihoodKeyTypos,
  repairMissingCommasBetweenProperties,
  replaceChinesePunctuationOutsideStrings,
  repairLlmJsonText,
  tryJsonParseObject,
  parseLlmJson,
  normalizeLlmResponse,
  generateMockLlmResponse,
  callOpenAiCompatible,
  requestBreakpointCandidates
};
