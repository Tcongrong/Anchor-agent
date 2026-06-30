/**
 * 锚点判定 LLM 调用与 mock 评分
 */

const fs = require('fs');
const { parseLlmJson, tryJsonParseObject } = require('../info-gain-breakpoint/llm');
const {
  callChatCompletionJson,
  formatParseErrorDetail,
  resolveOpenAiBaseUrl
} = require('../llm-openai');
const { buildAnchorJudgmentMessages } = require('./prompt');
const { matchesValuePattern } = require('../value-pattern');

const DEFAULT_MODEL = 'gpt-4o-mini';
const DEFAULT_THETA = 0.7;
const REQUIRED_F_STAR_SCORE = 1;
const DEFAULT_ANCHOR_SCORE_ATTEMPTS = 3;

/**
 * @param {number} score
 * @returns {boolean}
 */
function qualifiesAsFStar(score) {
  return (Number(score) || 0) >= REQUIRED_F_STAR_SCORE;
}

/**
 * @param {string} text
 * @returns {object[]}
 */
function parseAnchorResults(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('LLM 响应为空');
  }

  let trimmed = text.trim();
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    trimmed = fenceMatch[1].trim();
  }

  const arrayStart = trimmed.indexOf('[');
  const objectStart = trimmed.indexOf('{');
  let parsed;

  if (arrayStart >= 0 && (objectStart < 0 || arrayStart < objectStart)) {
    const arrayEnd = trimmed.lastIndexOf(']');
    if (arrayEnd <= arrayStart) {
      throw new Error(`LLM 响应不是有效 JSON 数组: ${trimmed.slice(0, 200)}`);
    }
    parsed = tryJsonParseObject(trimmed.slice(arrayStart, arrayEnd + 1));
  } else {
    parsed = parseLlmJson(trimmed);
  }

  const results = Array.isArray(parsed) ? parsed : (parsed.results || parsed.candidates || []);
  if (!Array.isArray(results)) {
    throw new Error('LLM 响应缺少 results 数组');
  }

  return results.map((item, idx) => ({
    tag: item.tag || item.function_tag || item.functionTag || item.functionName || item.function_name || `unknown_${idx}`,
    score: Math.max(0, Math.min(1, Number(item.score) || 0)),
    reason: item.reason || item.explanation || ''
  }));
}

/**
 * 从 function tag 提取函数名（::name@line:col）
 * @param {string} tag
 * @returns {string|null}
 */
function extractFunctionNameFromTag(tag) {
  const m = String(tag || '').match(/::([^@]+)@/);
  return m ? m[1] : null;
}

/**
 * 将 LLM 返回的评分对齐到候选 tag（支持函数名、tag 后缀等模糊匹配）
 * @param {object[]} rawScores parseAnchorResults 输出
 * @param {object[]} candidates { tag, functionName }[]
 * @param {{ exhaustedAttempts?: number }} [options]
 * @returns {{ scores: object[], missingTags: string[] }}
 */
function alignAnchorScoresWithMeta(rawScores, candidates, options = {}) {
  const candidateTags = candidates.map((c) => c.tag);
  const tagByFuncName = new Map();
  const ambiguousNames = new Set();

  for (const c of candidates) {
    const name = c.functionName;
    if (!name) continue;
    if (tagByFuncName.has(name)) {
      ambiguousNames.add(name);
    } else {
      tagByFuncName.set(name, c.tag);
    }
  }

  const matched = new Map();
  const unmatchedLlm = [];

  const resolveTag = (entry) => {
    const rawTag = entry.tag;
    if (!rawTag) return null;
    if (candidateTags.includes(rawTag)) return rawTag;

    const nameFromTag = extractFunctionNameFromTag(rawTag);
    if (nameFromTag && tagByFuncName.has(nameFromTag) && !ambiguousNames.has(nameFromTag)) {
      return tagByFuncName.get(nameFromTag);
    }

    if (tagByFuncName.has(rawTag) && !ambiguousNames.has(rawTag)) {
      return tagByFuncName.get(rawTag);
    }

    const suffixHit = candidateTags.filter((t) => t.endsWith(`::${rawTag}`) || t.includes(`::${rawTag}@`));
    if (suffixHit.length === 1) return suffixHit[0];

    return null;
  };

  for (const entry of rawScores) {
    const tag = resolveTag(entry);
    if (tag && !matched.has(tag)) {
      matched.set(tag, { ...entry, tag });
    } else if (!tag) {
      unmatchedLlm.push(entry);
    }
  }

  const exhausted = options.exhaustedAttempts;
  const missingFallbackReason = exhausted != null
    ? `LLM 在 ${exhausted} 次请求后仍未为该候选返回独立评分（需含 tag、score、reason）`
    : null;

  const globalSummary = rawScores.length === 0
    ? 'LLM 返回空的 results 数组'
    : unmatchedLlm.length > 0
      ? `LLM 共返回 ${rawScores.length} 条，其中 ${unmatchedLlm.length} 条 tag 无法与候选对齐`
      : null;

  const missingTags = [];
  const scores = candidateTags.map((tag) => {
    if (matched.has(tag)) {
      const entry = matched.get(tag);
      if (String(entry.reason || '').trim()) {
        return entry;
      }
      missingTags.push(tag);
      return {
        tag,
        score: entry.score,
        reason: missingFallbackReason || 'LLM 返回了该候选但 reason 为空'
      };
    }
    missingTags.push(tag);
    return {
      tag,
      score: 0,
      reason: missingFallbackReason || globalSummary || 'LLM 未返回该函数评分'
    };
  });

  return { scores, missingTags };
}

/**
 * @param {object[]} rawScores
 * @param {object[]} candidates
 * @param {{ exhaustedAttempts?: number }} [options]
 * @returns {object[]}
 */
function alignAnchorScoresToCandidates(rawScores, candidates, options = {}) {
  return alignAnchorScoresWithMeta(rawScores, candidates, options).scores;
}

/**
 * @param {object} params
 * @returns {object[]}
 */
function generateMockAnchorScores(params) {
  const { taskDescription, candidates, tvn, observation, valuePattern } = params;
  const keywords = [];
  const keyRe = /['"]?([a-zA-Z_$][\w$]*)['"]?\s*:/g;
  let m;
  while ((m = keyRe.exec(taskDescription || '')) !== null) {
    keywords.push(m[1]);
  }
  const sigRe = /\b([a-z]+(?:_[a-z0-9]+)+)\b/gi;
  while ((m = sigRe.exec(taskDescription || '')) !== null) {
    keywords.push(m[1]);
  }

  return candidates.map((item) => {
    const code = item.functionCode || '';
    let score = 0.15;
    const reasons = [];

    for (const kw of keywords) {
      if (kw.length < 3) continue;
      if (code.includes(`'${kw}'`) || code.includes(`"${kw}"`) || code.includes(`\`${kw}\``)) {
        score += 0.35;
        reasons.push(`源码出现字段名 ${kw}`);
      }
    }

    if (/sign|sig|hash|digest|encode|encrypt|telemetry|derive|fold|makePacket/i.test(code)) {
      score += 0.25;
      reasons.push('含签名/编码/telemetry 相关结构');
    }

    if (/\bdispatch\w*\(/.test(code) && !/search_sig|emitSearch|derive|foldEnvelope/.test(code)) {
      score -= 0.15;
      reasons.push('疑似事件/命令分发');
    }

    if (item.tag === tvn?.functionTag) {
      score += 0.2;
      reasons.push('TVN 所属函数，观测到目标值');
    }

    if (observation?.callChain?.[0] === item.tag) {
      score += 0.05;
    }

    if (/^anonymous_\d+$/.test(item.functionName) && code.length < 200) {
      score -= 0.2;
      reasons.push('短匿名回调，更像事件入口');
    }

    if (valuePattern) {
      const prefixMatch = valuePattern.match(/^\^([a-zA-Z0-9_-]+)/);
      if (prefixMatch) {
        const expectedPrefix = prefixMatch[1];
        if (code.includes(`'${expectedPrefix}`) || code.includes(`"${expectedPrefix}`) || code.includes(`\`${expectedPrefix}`)) {
          score += 0.25;
          reasons.push(`源码含目标前缀 ${expectedPrefix}`);
        } else if (/localPrefix|ut_|st_|fp_|ss_/.test(code)) {
          score -= 0.35;
          reasons.push('源码前缀与 --value-pattern 约束不符');
        }
      }
      if (observation?.value != null && !matchesValuePattern(observation.value, valuePattern)) {
        score -= 0.05;
        reasons.push('断点观测值不匹配 value-pattern（中间步骤）');
      }
    }

    score = Math.max(0, Math.min(1, score));
    return {
      tag: item.tag,
      score: Number(score.toFixed(3)),
      reason: reasons.length ? reasons.join('；') : 'mock: 无明显锚点特征'
    };
  });
}

/**
 * @param {{ system: string, user: string }} messages
 * @param {object} options
 * @returns {Promise<object[]>}
 */
async function callAnchorJudgmentLlm(messages, options = {}) {
  const apiKey = options.apiKey || process.env.OPENAI_API_KEY;
  const baseUrl = resolveOpenAiBaseUrl(options.baseUrl);
  const model = options.model || process.env.OPENAI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error('未设置 OPENAI_API_KEY，请配置环境变量或使用 --mock / --llm-response-file');
  }

  return callChatCompletionJson({
    messages,
    apiKey,
    baseUrl,
    model,
    temperature: options.temperature ?? 0.2,
    useResponseFormat: options.useResponseFormat
  }, (content) => parseAnchorResults(content), options);
}

/**
 * @param {object} params
 * @param {object} options
 * @returns {Promise<object[]>}
 */
async function scoreAnchorCandidates(params, options = {}) {
  const candidates = params.candidates || [];

  if (options.llmResponseFile) {
    const raw = fs.readFileSync(options.llmResponseFile, 'utf8');
    const { scores, missingTags } = alignAnchorScoresWithMeta(parseAnchorResults(raw), candidates);
    if (missingTags.length > 0) {
      console.warn(`  ⚠️  llm-response-file 仍缺 ${missingTags.length}/${candidates.length} 个候选的独立评分`);
    }
    return scores;
  }

  if (options.mock) {
    return generateMockAnchorScores(params);
  }

  const maxAttempts = options.maxAttempts ?? DEFAULT_ANCHOR_SCORE_ATTEMPTS;
  const collected = new Map();
  let pending = [...candidates];

  for (let attempt = 1; attempt <= maxAttempts && pending.length > 0; attempt += 1) {
    const messages = buildAnchorJudgmentMessages({ ...params, candidates: pending });

    let raw;
    try {
      raw = await callAnchorJudgmentLlm(messages, options);
    } catch (error) {
      if (collected.size > 0 && attempt < maxAttempts) {
        console.warn(
          `  ⚠️  锚点评分 JSON 解析失败: ${formatParseErrorDetail(error)}，保留已得 ${collected.size}/${candidates.length} 条，缩圈重试 (${attempt}/${maxAttempts})…`
        );
        continue;
      }
      throw error;
    }

    const { scores, missingTags } = alignAnchorScoresWithMeta(raw, pending);

    for (const s of scores) {
      if (!missingTags.includes(s.tag)) {
        collected.set(s.tag, s);
      }
    }

    pending = pending.filter((c) => !collected.has(c.tag));

    if (pending.length === 0) {
      return candidates.map((c) => collected.get(c.tag));
    }

    if (attempt >= maxAttempts) {
      console.warn(
        `  ⚠️  锚点评分：${pending.length}/${candidates.length} 个候选仍缺独立评分（已重试 ${maxAttempts} 次）`
      );
      break;
    }

    console.warn(
      `  ⚠️  锚点评分：缺 ${pending.length}/${candidates.length} 个候选，仅对缺失项重试 (${attempt}/${maxAttempts})…`
    );
  }

  return alignAnchorScoresWithMeta(
    candidates.map((c) => collected.get(c.tag)).filter(Boolean),
    candidates,
    { exhaustedAttempts: maxAttempts }
  ).scores;
}

/**
 * @param {object[]} scores
 * @param {number} [_theta] 保留兼容；f* 仅当最高分 === 1.0 时采纳
 * @returns {{ anchorCandidate: string|null, best: object|null }}
 */
function selectAnchorCandidate(scores, _theta = DEFAULT_THETA) {
  if (!scores.length) {
    return { anchorCandidate: null, best: null };
  }

  const sorted = [...scores].sort((a, b) => b.score - a.score || a.tag.localeCompare(b.tag));
  const best = sorted[0];
  const anchorCandidate = qualifiesAsFStar(best.score) ? best.tag : null;
  return { anchorCandidate, best };
}

module.exports = {
  DEFAULT_THETA,
  REQUIRED_F_STAR_SCORE,
  DEFAULT_ANCHOR_SCORE_ATTEMPTS,
  qualifiesAsFStar,
  parseAnchorResults,
  extractFunctionNameFromTag,
  alignAnchorScoresWithMeta,
  alignAnchorScoresToCandidates,
  generateMockAnchorScores,
  scoreAnchorCandidates,
  selectAnchorCandidate
};
