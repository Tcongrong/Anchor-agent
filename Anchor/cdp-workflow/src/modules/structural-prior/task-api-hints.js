/**
 * 从任务描述 d 提取 domain 关键词，并在函数代码/API 签名上做无标识符匹配，
 * 叠加到 S_api 以提升与任务语义相关的函数排名。
 */

/** 每个命中关键词的基础加分 */
const KEYWORD_HIT_WEIGHT = 0.45;

/** browser-surface / fingerprint 流水线多信号共现时的额外加分 */
const SURFACE_PIPELINE_CLUSTER_BONUS = 0.55;

/** 原始 browser 特征采集词共现时的额外加分 */
const BROWSER_COLLECTION_CLUSTER_BONUS = 0.75;

/** workspace state-encoding 流水线多信号共现时的额外加分 */
const STATE_ENCODING_CLUSTER_BONUS = 0.55;

/** workspace 参数/transit 语料共现时的额外加分 */
const WORKSPACE_COLLECTION_CLUSTER_BONUS = 0.65;

/** request_payload 对象骨架多信号共现时的额外加分 */
const REQUEST_PAYLOAD_CLUSTER_BONUS = 0.9;

/** request_payload body 字段共现时的额外加分 */
const REQUEST_PAYLOAD_BODY_CLUSTER_BONUS = 0.75;

/** 同时含 method/endpoint/body/filters/projection 骨架时的额外加分 */
const REQUEST_PAYLOAD_SKELETON_BONUS = 1.15;

/** inventory state envelope（stateFrame + encodeStateCode）共现时的额外加分 */
const STATE_ENCODING_ENVELOPE_BONUS = 1.2;

/** 同时调用 stateFrame 与 encodeStateCode 的 envelope 编排器额外加分 */
const STATE_ENCODING_ORCHESTRATOR_BONUS = 1.5;

/** inventory/board 状态采集词共现时的额外加分 */
const INVENTORY_STATE_COLLECTION_BONUS = 0.85;

const BROWSER_COLLECTION_TERMS = [
  'ua', 'lang', 'timezone', 'touch', 'media', 'cores', 'viewport', 'platform'
];

const WORKSPACE_COLLECTION_TERMS = [
  'transit', 'stats', 'lane', 'left', 'right', 'mid', 'tuple', 'slot', 'headings', 'lists', 'fences'
];

const REQUEST_PAYLOAD_BODY_TERMS = [
  'filters', 'projection', 'hydration', 'matched', 'includetotals', 'sort', 'criteria'
];

const REQUEST_PAYLOAD_SKELETON_TERMS = [
  'method', 'endpoint', 'body', 'filters', 'projection'
];

const INVENTORY_STATE_COLLECTION_TERMS = [
  'route', 'asyncmarks', 'fold', 'mask', 'slot', 'reduce', 'branch', 'runtimeticket', 'stateframe', 'encodestatecode'
];

/** 混淆后合并标识符中的可拆分 domain 子词（无函数名依赖） */
const COMPOUND_CORPUS_SPLITS = new Map([
  ['encodestatecode', ['encode', 'state', 'code']],
  ['stateframe', ['state', 'frame']],
  ['inventorystate', ['inventory', 'state']],
  ['stateenvelope', ['state', 'envelope']]
]);

/** 流水线语义信号（来自字面量/属性名/callee 传播，非函数标识符） */
const SURFACE_PIPELINE_SIGNALS = new Set([
  'surface', 'digest', 'frame', 'envelope', 'normalize', 'encode', 'fingerprint', 'bf_'
]);

const STATE_ENCODING_PIPELINE_SIGNALS = new Set([
  'sc_', 'sc', 'hash', 'transit', 'stats', 'lane', 'tostring', 'padstart', 'imul', 'produce', 'charcodeat',
  'envelope', 'stateframe', 'encodestatecode', 'fold', 'mask', 'slice', 'encode', 'state', 'code'
]);

const REQUEST_PAYLOAD_PIPELINE_SIGNALS = new Set([
  'method', 'endpoint', 'profile', 'stage', 'body', 'filters', 'projection',
  'page', 'sort', 'hydration', 'matched', 'payload', 'includetotals'
]);

/**
 * 任务关键词 -> 代码语料别名（无标识符：仅匹配字面量/属性名）
 * @type {Map<string, string[]>}
 */
const KEYWORD_CORPUS_ALIASES = new Map([
  ['browser', ['ua', 'useragent', 'user-agent', 'platform']],
  ['navigator', ['ua', 'lang', 'timezone', 'platform', 'useragent']],
  ['screen', ['viewport', 'width', 'height', 'resolution']],
  ['viewport', ['width', 'height', 'screen']],
  ['featur', ['touch', 'media', 'cores', 'timezone', 'ua', 'lang', 'hardware']],
  ['collect', ['touch', 'media', 'cores', 'timezone', 'ua', 'lang']],
  ['raw', ['ua', 'lang', 'timezone', 'touch', 'media', 'cores']],
  ['fingerprint', ['bf_', 'digest']],
  ['digest', ['bf_', 'digest', 'tostring', 'slice']],
  ['observable', ['bf_', 'digest', 'tostring', 'method', 'endpoint', 'body', 'filters', 'projection', 'hydration', 'matched', 'fold', 'imul', 'slice', 'encodestatecode', 'stateframe']],
  ['constructor', ['bf_', 'digest', 'imul', 'fold', 'encodestatecode', 'stateframe', 'slice', 'mask']],
  ['construct', ['bf_', 'digest', 'imul', 'surface', 'fold', 'encodestatecode', 'stateframe', 'slice']],
  ['surface', ['surface', 'ua', 'timezone', 'touch', 'media']],
  ['encode', ['tostring', 'slice', 'bf_']],
  ['normalize', ['timezone', 'ua', 'lang', 'touch', 'media', 'cores']],
  ['hash', ['tostring', 'padstart', 'slice', 'charcodeat', 'imul', 'fromcodes']],
  ['encod', ['tostring', 'padstart', 'slice', 'imul', 'transit', 'stats', 'charcodeat', 'fold', 'encodestatecode', 'stateframe', 'mask']],
  ['state', ['transit', 'stats', 'lane', 'left', 'right', 'mid', 'tuple', 'slot', 'stateframe', 'encodestatecode', 'fold', 'mask', 'route', 'asyncmarks']],
  ['state_code', ['encodestatecode', 'stateframe', 'fold', 'imul', 'slice', 'mask', 'envelope', 'encode', 'state', 'code']],
  ['envelope', ['stateframe', 'encodestatecode', 'fold', 'imul', 'slice', 'reducers']],
  ['inventory', ['route', 'asyncmarks', 'fold', 'mask', 'slot', 'stateframe', 'encodestatecode']],
  ['snapshot', ['fold', 'imul', 'slice', 'stateframe', 'encodestatecode']],
  ['normalization', ['mask', 'slot', 'fold', 'route', 'reduce', 'branch']],
  ['board', ['route', 'asyncmarks', 'reduce', 'branch', 'mask', 'slot']],
  ['preparation', ['transit', 'stats', 'mid', 'tuple', 'slot']],
  ['sc_', ['tostring', 'padstart', 'slice', 'imul', 'charcodeat']],
  ['workspace', ['transit', 'stats', 'vault', 'slot', 'tuple', 'lane']],
  ['produce', ['transit', 'stats', 'mid', 'tuple']],
  ['parameter', ['tuple', 'slot', 'key', 'value', 'lane']],
  ['construction', ['tostring', 'padstart', 'imul', 'produce', 'transit']],
  ['request_payload', ['method', 'endpoint', 'body', 'filters', 'projection', 'hydration', 'matched', 'stage', 'profile']],
  ['payload', ['body', 'method', 'endpoint', 'filters', 'projection', 'hydration']],
  ['transformation', ['projection', 'filters', 'criteria', 'shape', 'body']],
  ['request', ['method', 'endpoint', 'body', 'profile', 'stage']],
  ['receivables', ['receivables', 'amount', 'owner', 'status', 'region', 'criteria']],
  ['criteria', ['filters', 'field', 'op', 'projection', 'criteria']],
  ['projection', ['projection', 'field', 'visible', 'column']],
  ['hydration', ['hydration', 'matched', 'visible', 'count']],
  ['reconciliation', ['matched', 'hydration', 'visible', 'count']]
]);

const ENGLISH_STOP_WORDS = new Set([
  'looking', 'for', 'the', 'entry', 'function', 'in', 'that', 'into', 'like', 'this',
  'which', 'where', 'find', 'please', 'locate', 'identify', 'return', 'with', 'from',
  'and', 'or', 'not', 'are', 'was', 'were', 'has', 'have', 'had', 'will', 'would',
  'should', 'could', 'can', 'may', 'might', 'such', 'similar', 'example', 'value',
  'field', 'output', 'input', 'object', 'string', 'type', 'when', 'after', 'before',
  'that', 'then', 'than', 'also', 'just', 'only', 'very', 'your', 'our', 'their'
]);

const CHINESE_STOP_WORDS = new Set([
  '寻找', '定位', '哪个', '函数', '生成', '赋予', '是在', '如何', '的', '中', '请',
  '返回', '不要', '完整', '代码', '位置', '入口', '类似', '这样', '可能', '字段'
]);

/** 常见英文词形归一：encrypts → encrypt */
const ENGLISH_STEM_SUFFIXES = ['ing', 'ed', 'es', 's'];

/**
 * @param {string} word
 * @returns {string}
 */
function normalizeEnglishKeyword(word) {
  let value = String(word || '').trim().toLowerCase();
  if (!value || ENGLISH_STOP_WORDS.has(value)) {
    return '';
  }
  if (value.length <= 4) {
    return value;
  }
  for (const suffix of ENGLISH_STEM_SUFFIXES) {
    if (value.endsWith(suffix) && value.length - suffix.length >= 4) {
      return value.slice(0, -suffix.length);
    }
  }
  return value;
}

/**
 * @param {string} taskDescription
 * @returns {string[]}
 */
function extractTaskKeywords(taskDescription) {
  const text = String(taskDescription || '');
  /** @type {Map<string, string>} normalized -> display */
  const keywords = new Map();

  const addKeyword = (raw) => {
    const trimmed = String(raw || '').trim().toLowerCase();
    if (!trimmed) {
      return;
    }
    if (/[\u4e00-\u9fff]/.test(trimmed)) {
      if (trimmed.length >= 2 && !CHINESE_STOP_WORDS.has(trimmed)) {
        keywords.set(trimmed, trimmed);
      }
      return;
    }
    const normalized = normalizeEnglishKeyword(trimmed);
    if (normalized.length >= 3 && !ENGLISH_STOP_WORDS.has(normalized)) {
      keywords.set(normalized, normalized);
    }
  };

  const snakeRe = /\b([a-z][a-z0-9]*(?:_[a-z0-9]+)+)\b/gi;
  let match;
  while ((match = snakeRe.exec(text)) !== null) {
    addKeyword(match[1]);
  }

  const hyphenRe = /\b([a-z][a-z0-9]*(?:-[a-z0-9]+)+)\b/gi;
  while ((match = hyphenRe.exec(text)) !== null) {
    addKeyword(match[1]);
    for (const part of match[1].split('-')) {
      addKeyword(part);
    }
  }

  const wordRe = /\b([a-z]{3,})\b/gi;
  while ((match = wordRe.exec(text)) !== null) {
    addKeyword(match[1]);
  }

  const chineseRe = /[\u4e00-\u9fff]{2,8}/g;
  while ((match = chineseRe.exec(text)) !== null) {
    addKeyword(match[0]);
  }

  return supplementDomainKeywords([...keywords.values()], text);
}

/**
 * 从任务描述与目标值 profile 补充 domain 关键词（如无标识符字面量线索）
 * @param {string} taskDescription
 * @param {object|null|undefined} [targetProfile]
 * @returns {string[]}
 */
function buildTaskKeywords(taskDescription, targetProfile = null) {
  const base = extractTaskKeywords(taskDescription);
  const keywords = new Set(base);

  if (targetProfile?.prefix) {
    keywords.add(String(targetProfile.prefix).trim().toLowerCase());
  }
  if (targetProfile?.raw) {
    keywords.add(String(targetProfile.raw).trim().toLowerCase());
  }
  for (const hint of targetProfile?.semanticHints || []) {
    const normalized = normalizeEnglishKeyword(hint);
    if (normalized.length >= 2) {
      keywords.add(normalized);
    }
  }
  for (const key of targetProfile?.fieldKeys || []) {
    addKeywordToSet(keywords, key);
  }

  return supplementDomainKeywords([...keywords], String(taskDescription || '').toLowerCase());
}

/**
 * @param {Set<string>} keywords
 * @param {string} raw
 */
function addKeywordToSet(keywords, raw) {
  const trimmed = String(raw || '').trim().toLowerCase();
  if (!trimmed) {
    return;
  }
  keywords.add(trimmed);
  if (trimmed.includes('_')) {
    for (const part of trimmed.split('_')) {
      if (part.length >= 2) {
        keywords.add(part);
      }
    }
  }
}

/**
 * @param {string[]} keywords
 * @param {string} taskText
 * @returns {string[]}
 */
function supplementDomainKeywords(keywords, taskText) {
  const supplemented = new Set(keywords);
  const text = String(taskText || '').toLowerCase();

  if (text.includes('browser_fingerprint') || text.includes('browser-fingerprint') || text.includes('fingerprint')) {
    for (const term of ['digest', 'envelope', 'frame', 'normalize', 'encode', 'surface']) {
      supplemented.add(term);
    }
  }
  if (text.includes('browser-surface') || text.includes('browser surface') || text.includes('surface collection')) {
    for (const term of ['surface', 'browser', 'collect', 'normalize', 'frame', 'envelope']) {
      supplemented.add(term);
    }
  }
  if (text.includes('state_code') || text.includes('state-encoding') || text.includes('state encoding')) {
    for (const term of ['hash', 'envelope', 'stateframe', 'fold', 'reducer', 'source', 'encod', 'mask', 'slice']) {
      supplemented.add(term);
    }
  }
  if (text.includes('inventory.snapshot') || (text.includes('inventory') && text.includes('state'))) {
    for (const term of ['envelope', 'stateframe', 'reducers', 'fold', 'snapshot', 'board', 'route', 'asyncmarks']) {
      supplemented.add(term);
    }
  }
  if (text.includes('workspace.commit') || (text.includes('workspace') && text.includes('state'))) {
    for (const term of ['transit', 'stats', 'produce', 'tuple', 'slot', 'lane']) {
      supplemented.add(term);
    }
  }
  if (text.includes('request_payload') || text.includes('request-transformation') || text.includes('request transformation')) {
    for (const term of ['payload', 'criteria', 'shape', 'projection', 'hydration', 'matched', 'receivables']) {
      supplemented.add(term);
    }
  }
  if (text.includes('table.filter.request') || (text.includes('table') && text.includes('filter') && text.includes('request'))) {
    for (const term of ['filters', 'projection', 'criteria', 'body', 'endpoint', 'method']) {
      supplemented.add(term);
    }
  }

  return [...supplemented];
}

/**
 * 将 camelCase / snake_case 拆成子词，便于无标识符子串匹配
 * @param {string} term
 * @returns {string[]}
 */
function expandCorpusTerm(term) {
  const value = String(term || '').trim().toLowerCase();
  if (!value) {
    return [];
  }

  const tokens = new Set([value]);
  for (const part of value.split('_')) {
    if (part.length >= 2) {
      tokens.add(part);
    }
  }
  for (const part of value.split('-')) {
    if (part.length >= 2) {
      tokens.add(part);
    }
  }
  const camelParts = value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/\s+/);
  for (const part of camelParts) {
    const normalized = part.toLowerCase();
    if (normalized.length >= 2) {
      tokens.add(normalized);
    }
  }
  for (const [compound, parts] of COMPOUND_CORPUS_SPLITS.entries()) {
    if (value === compound || value.includes(compound)) {
      for (const part of parts) {
        tokens.add(part);
      }
    }
  }
  return [...tokens];
}

/**
 * @param {string[]} terms
 * @returns {string[]}
 */
function expandCorpusTerms(terms) {
  const expanded = new Set();
  for (const term of terms || []) {
    for (const piece of expandCorpusTerm(term)) {
      expanded.add(piece);
    }
  }
  return [...expanded];
}

/**
 * @param {{ codeTerms?: string[], apiCalls?: Array<{ api_name?: string, resolved_name?: string }> }} item
 * @param {string[]} [calleeCodeTerms]
 * @returns {string[]}
 */
function buildKeywordCorpus(item, calleeCodeTerms = []) {
  const corpus = new Set();

  for (const term of [...(item.codeTerms || []), ...calleeCodeTerms]) {
    for (const piece of expandCorpusTerm(term)) {
      corpus.add(piece);
    }
  }

  for (const call of item.apiCalls || []) {
    for (const name of [call.api_name, call.resolved_name]) {
      if (!name) {
        continue;
      }
      const lower = String(name).toLowerCase();
      for (const piece of expandCorpusTerm(lower)) {
        corpus.add(piece);
      }
      for (const part of lower.split(/[./]/)) {
        if (part.length >= 3) {
          corpus.add(part);
        }
      }
    }
  }

  return [...corpus];
}

/**
 * @param {string} keyword
 * @param {string} term
 * @returns {boolean}
 */
function keywordMatchesTerm(keyword, term) {
  if (!keyword || !term) {
    return false;
  }
  if (keyword === term) {
    return true;
  }
  if (/[\u4e00-\u9fff]/.test(keyword)) {
    return term.includes(keyword);
  }
  if (keyword.length >= 4 && term.includes(keyword)) {
    return true;
  }
  if (term.length >= 4 && keyword.includes(term)) {
    return true;
  }
  return false;
}

/**
 * @param {string} keyword
 * @param {string[]} corpus
 * @returns {boolean}
 */
function keywordMatchesCorpus(keyword, corpus) {
  if (corpus.some((term) => keywordMatchesTerm(keyword, term))) {
    return true;
  }
  for (const alias of KEYWORD_CORPUS_ALIASES.get(keyword) || []) {
    if (corpus.some((term) => keywordMatchesTerm(alias, term) || term.includes(alias))) {
      return true;
    }
  }
  return false;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countSurfacePipelineSignals(corpus) {
  let hits = 0;
  for (const signal of SURFACE_PIPELINE_SIGNALS) {
    if (corpus.some((term) => term.includes(signal) || signal.includes(term))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countBrowserCollectionSignals(corpus) {
  let hits = 0;
  for (const signal of BROWSER_COLLECTION_TERMS) {
    if (corpus.some((term) => term === signal || term.includes(signal))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countStateEncodingSignals(corpus) {
  let hits = 0;
  for (const signal of STATE_ENCODING_PIPELINE_SIGNALS) {
    if (corpus.some((term) => term.includes(signal) || signal.includes(term))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countWorkspaceCollectionSignals(corpus) {
  let hits = 0;
  for (const signal of WORKSPACE_COLLECTION_TERMS) {
    if (corpus.some((term) => term === signal || term.includes(signal))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countInventoryStateSignals(corpus) {
  let hits = 0;
  for (const signal of INVENTORY_STATE_COLLECTION_TERMS) {
    if (corpus.some((term) => term === signal || term.includes(signal))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {boolean}
 */
function hasStateEncodingEnvelope(corpus) {
  const hasFrame = corpus.some((term) => term.includes('stateframe') || term.includes('encodestatecode') || term === 'envelope');
  const hasDigest = corpus.some((term) => term === 'fold' || term === 'imul' || term === 'slice');
  return hasFrame && hasDigest;
}

/**
 * @param {string[]} corpus
 * @returns {boolean}
 */
function hasStateEncodingOrchestrator(corpus) {
  const hasEncodeCall = corpus.some((term) => term.includes('encodestatecode'));
  const hasFrameCall = corpus.some((term) => term.includes('stateframe'));
  return hasEncodeCall && hasFrameCall;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countRequestPayloadSignals(corpus) {
  let hits = 0;
  for (const signal of REQUEST_PAYLOAD_PIPELINE_SIGNALS) {
    if (corpus.some((term) => term.includes(signal) || signal.includes(term))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {number}
 */
function countRequestPayloadBodySignals(corpus) {
  let hits = 0;
  for (const signal of REQUEST_PAYLOAD_BODY_TERMS) {
    if (corpus.some((term) => term === signal || term.includes(signal))) {
      hits += 1;
    }
  }
  return hits;
}

/**
 * @param {string[]} corpus
 * @returns {boolean}
 */
function hasRequestPayloadSkeleton(corpus) {
  return REQUEST_PAYLOAD_SKELETON_TERMS.every(
    (signal) => corpus.some((term) => term.includes(signal) || signal.includes(term))
  );
}

/**
 * @param {{ codeTerms?: string[], apiCalls?: Array<{ api_name?: string, resolved_name?: string }> }} item
 * @param {string[]} keywords
 * @param {string[]} [calleeCodeTerms]
 * @returns {number}
 */
function computeKeywordApiBoost(item, keywords, calleeCodeTerms = []) {
  if (!keywords?.length || !item) {
    return 0;
  }

  const corpus = buildKeywordCorpus(item, calleeCodeTerms);
  if (!corpus.length) {
    return 0;
  }

  let hits = 0;
  for (const keyword of keywords) {
    if (keywordMatchesCorpus(keyword, corpus)) {
      hits += 1;
    }
  }

  let boost = hits * KEYWORD_HIT_WEIGHT;
  if (countSurfacePipelineSignals(corpus) >= 2) {
    boost += SURFACE_PIPELINE_CLUSTER_BONUS;
  }
  if (countBrowserCollectionSignals(corpus) >= 4) {
    boost += BROWSER_COLLECTION_CLUSTER_BONUS;
  }
  if (countStateEncodingSignals(corpus) >= 2) {
    boost += STATE_ENCODING_CLUSTER_BONUS;
  }
  if (countWorkspaceCollectionSignals(corpus) >= 3) {
    boost += WORKSPACE_COLLECTION_CLUSTER_BONUS;
  }
  if (countRequestPayloadSignals(corpus) >= 5) {
    boost += REQUEST_PAYLOAD_CLUSTER_BONUS;
  }
  if (countRequestPayloadBodySignals(corpus) >= 3) {
    boost += REQUEST_PAYLOAD_BODY_CLUSTER_BONUS;
  }
  if (hasRequestPayloadSkeleton(corpus)) {
    boost += REQUEST_PAYLOAD_SKELETON_BONUS;
  }
  if (countInventoryStateSignals(corpus) >= 4) {
    boost += INVENTORY_STATE_COLLECTION_BONUS;
  }
  if (hasStateEncodingEnvelope(corpus)) {
    boost += STATE_ENCODING_ENVELOPE_BONUS;
  }
  if (hasStateEncodingOrchestrator(corpus)) {
    boost += STATE_ENCODING_ORCHESTRATOR_BONUS;
  }
  return boost;
}

/**
 * @param {{ codeTerms?: string[], apiCalls?: Array<{ api_name?: string, resolved_name?: string }> }} item
 * @param {string[]} keywords
 * @returns {string[]}
 */
function matchedTaskKeywords(item, keywords, calleeCodeTerms = []) {
  if (!keywords?.length || !item) {
    return [];
  }
  const corpus = buildKeywordCorpus(item, calleeCodeTerms);
  return keywords.filter((keyword) => keywordMatchesCorpus(keyword, corpus));
}

module.exports = {
  KEYWORD_HIT_WEIGHT,
  SURFACE_PIPELINE_CLUSTER_BONUS,
  BROWSER_COLLECTION_CLUSTER_BONUS,
  STATE_ENCODING_CLUSTER_BONUS,
  WORKSPACE_COLLECTION_CLUSTER_BONUS,
  REQUEST_PAYLOAD_CLUSTER_BONUS,
  REQUEST_PAYLOAD_BODY_CLUSTER_BONUS,
  REQUEST_PAYLOAD_SKELETON_BONUS,
  STATE_ENCODING_ENVELOPE_BONUS,
  STATE_ENCODING_ORCHESTRATOR_BONUS,
  INVENTORY_STATE_COLLECTION_BONUS,
  ENGLISH_STOP_WORDS,
  extractTaskKeywords,
  buildTaskKeywords,
  supplementDomainKeywords,
  expandCorpusTerm,
  expandCorpusTerms,
  normalizeEnglishKeyword,
  buildKeywordCorpus,
  keywordMatchesCorpus,
  computeKeywordApiBoost,
  matchedTaskKeywords
};
