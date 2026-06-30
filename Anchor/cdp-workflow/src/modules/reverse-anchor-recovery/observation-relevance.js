/**
 * LLM 判定当前断点观测是否与任务目标值生成有关
 */

const fs = require('fs');
const { parseLlmJson } = require('../info-gain-breakpoint/llm');
const { callChatCompletionJson } = require('../llm-openai');
const { buildObservationRelevanceMessages } = require('./observation-relevance-prompt');

const DEFAULT_MODEL = 'gpt-4o-mini';
const DEFAULT_THETA_RELEVANCE = 0.5;

/**
 * @param {string} text
 * @returns {{ related: boolean, score: number, reason: string }}
 */
function parseRelevanceResult(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('LLM 响应为空');
  }

  let trimmed = text.trim();
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    trimmed = fenceMatch[1].trim();
  }

  const parsed = parseLlmJson(trimmed);
  const score = Math.max(0, Math.min(1, Number(parsed.score) || 0));
  const related = parsed.related != null
    ? Boolean(parsed.related)
    : score >= DEFAULT_THETA_RELEVANCE;

  return {
    related,
    score,
    reason: parsed.reason || parsed.explanation || ''
  };
}

/**
 * @param {object} params
 * @returns {{ related: boolean, score: number, reason: string }}
 */
function generateMockObservationRelevance(params) {
  const { taskDescription, observation, functionName, functionCode } = params;
  const task = String(taskDescription || '');
  const value = observation?.value;
  const code = functionCode || '';
  const name = functionName || observation?.functionTag || '';
  let score = 0.15;
  const reasons = [];

  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    for (const field of Object.keys(value)) {
      if (task.includes(field)) {
        score += 0.4;
        reasons.push(`观测值含任务相关字段 ${field}`);
      }
      if (/sig|sign|token|hash|key/i.test(field)) {
        score += 0.15;
        reasons.push(`观测字段 ${field} 疑似目标签名/令牌`);
      }
    }
    if (Object.keys(value).length === 0) {
      score -= 0.25;
      reasons.push('观测值为空对象');
    }
  }

  if (typeof value === 'string' && value.length > 0) {
    if (/sig|sign|version=|namespace=|catalog|search/i.test(value)) {
      score += 0.35;
      reasons.push('观测字符串含签名/搜索相关结构');
    }
  }

  if (/sig|sign|seal|derive|hash|encode|encrypt|fold|makePacket|telemetry/i.test(code)) {
    score += 0.3;
    reasons.push('源码含签名/编码/telemetry 相关结构');
  }

  if (/sig|sign|seal|derive|hash|encode|telemetry|search/i.test(name)) {
    score += 0.2;
    reasons.push('函数名暗示与目标行为相关');
  }

  const chain = observation?.callChain || [];
  if (chain.some((tag) => /sealSearchSignature|derive|sig|sign|hash|encode/i.test(tag))) {
    score += 0.2;
    reasons.push('callChain 含签名/编码相关函数');
  }

  if (/render|echo|telemetry|console|dispatch/i.test(name) && !/sig|sign|seal|derive/i.test(code)) {
    score -= 0.15;
    reasons.push('疑似 sink/渲染/分发（仍可能有关）');
  }

  if (typeof value === 'number' && /^anonymous_/i.test(name) && !chain.some((t) => /seal|sig|sign|derive/i.test(t))) {
    score -= 0.1;
    reasons.push('匿名函数中的裸数字，关联性较弱');
  }

  score = Math.max(0, Math.min(1, Number(score.toFixed(3))));
  const related = score >= DEFAULT_THETA_RELEVANCE;

  return {
    related,
    score,
    reason: reasons.length ? reasons.join('；') : (related ? 'mock: 观测与任务可能有关' : 'mock: 观测与任务无明显关联')
  };
}

/**
 * @param {{ system: string, user: string }} messages
 * @param {object} options
 * @returns {Promise<{ related: boolean, score: number, reason: string }>}
 */
async function callObservationRelevanceLlm(messages, options = {}) {
  const apiKey = options.apiKey || process.env.OPENAI_API_KEY;
  const baseUrl = (options.baseUrl || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
  const model = options.model || process.env.OPENAI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error('未设置 OPENAI_API_KEY，请配置环境变量或使用 --mock / --relevance-llm-response-file');
  }

  return callChatCompletionJson({
    messages,
    apiKey,
    baseUrl,
    model,
    temperature: options.temperature ?? 0.2,
    useResponseFormat: options.useResponseFormat
  }, (content) => parseRelevanceResult(content), options);
}

/**
 * @param {object} params
 * @param {object} options
 * @returns {Promise<{ related: boolean, score: number, reason: string }>}
 */
async function judgeObservationRelevance(params, options = {}) {
  if (options.relevanceLlmResponseFile) {
    const raw = fs.readFileSync(options.relevanceLlmResponseFile, 'utf8');
    return parseRelevanceResult(raw);
  }

  if (options.mock) {
    return generateMockObservationRelevance(params);
  }

  const messages = buildObservationRelevanceMessages(params);
  return callObservationRelevanceLlm(messages, options);
}

module.exports = {
  DEFAULT_THETA_RELEVANCE,
  parseRelevanceResult,
  generateMockObservationRelevance,
  judgeObservationRelevance
};
