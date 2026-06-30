/**
 * API 调用签名提取（含轻量去混淆）
 */

const { walkAst } = require('./ast-utils');
const { buildConstContext, resolveAlias, resolveToString, resolveMemberName } = require('./const-prop');

/** @type {Set<string>} */
const SENSITIVE_APIS = new Set([
  'SubtleCrypto.digest',
  'SubtleCrypto.encrypt',
  'SubtleCrypto.sign',
  'crypto.subtle.digest',
  'crypto.subtle.encrypt',
  'crypto.subtle.sign',
  'TextEncoder.encode',
  'TextEncoder',
  'btoa',
  'atob',
  'Uint8Array',
  'DataView',
  'ArrayBuffer',
  'navigator.userAgent',
  'Date.now',
  'CanvasRenderingContext2D.getImageData',
  'getImageData',
  'fetch',
  'XMLHttpRequest',
  'XMLHttpRequest.send',
  'navigator.sendBeacon',
  'Request',
  'Request.headers.set',
  'postMessage',
  'console.log',
  'console.debug',
  'console.info',
  'console.warn',
  'console.error'
]);

/** @type {Map<string, string>} */
const API_ALIASES = new Map([
  ['digest', 'SubtleCrypto.digest'],
  ['encrypt', 'SubtleCrypto.encrypt'],
  ['sign', 'SubtleCrypto.sign'],
  ['encode', 'TextEncoder.encode'],
  ['log', 'console.log'],
  ['debug', 'console.debug'],
  ['send', 'XMLHttpRequest.send'],
  ['sendBeacon', 'navigator.sendBeacon'],
  ['headers', 'Request.headers.set']
]);

/**
 * @typedef {object} APICallSite
 * @property {string} api_name
 * @property {string} resolved_name
 */

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {APICallSite[]}
 */
function extractApiCalls(functionNode) {
  if (!functionNode) {
    return [];
  }

  const context = buildConstContext(functionNode);
  const calls = [];

  walkAst(functionNode, (node) => {
    if (node.type !== 'CallExpression' && node.type !== 'NewExpression') {
      return;
    }

    const resolved = resolveCallSignature(node, context);
    if (!resolved) {
      return;
    }

    const normalized = normalizeApiName(resolved);
    if (!normalized) {
      return;
    }

    calls.push({
      api_name: normalized,
      resolved_name: resolved
    });
  });

  return calls;
}

/**
 * @param {import('acorn').Node} callNode
 * @param {ReturnType<typeof buildConstContext>} context
 * @returns {string|null}
 */
function resolveCallSignature(callNode, context) {
  const callee = callNode.callee;
  if (!callee) {
    return null;
  }

  if (callee.type === 'Identifier') {
    const name = resolveAlias(callee.name, context);
    return name;
  }

  if (callee.type === 'MemberExpression') {
    if (callee.object?.type === 'Identifier' && callee.object.name === 'console') {
      return 'console.log';
    }

    const member = resolveMemberName(callee, context);
    if (member) {
      return member;
    }

    const property = resolveToString(callee.property, context)
      || (callee.property?.type === 'Identifier' ? callee.property.name : null);
    if (callee.object?.type === 'Identifier' && property) {
      return `${callee.object.name}.${property}`;
    }
  }

  return null;
}

/**
 * @param {string} rawName
 * @returns {string|null}
 */
function normalizeApiName(rawName) {
  const name = String(rawName || '').trim();
  if (!name) {
    return null;
  }

  if (SENSITIVE_APIS.has(name)) {
    return name;
  }

  const lower = name.toLowerCase();
  for (const api of SENSITIVE_APIS) {
    if (lower === api.toLowerCase()) {
      return api;
    }
  }

  if (name.includes('.')) {
    const tail = name.split('.').pop();
    if (tail && API_ALIASES.has(tail)) {
      const aliased = API_ALIASES.get(tail);
      if (SENSITIVE_APIS.has(aliased) || isKnownPartial(name, aliased)) {
        return aliased;
      }
    }
    if (SENSITIVE_APIS.has(name)) {
      return name;
    }
    for (const api of SENSITIVE_APIS) {
      if (name.endsWith(`.${api}`) || api.endsWith(`.${name}`)) {
        return api;
      }
    }
  }

  if (SENSITIVE_APIS.has(name) || API_ALIASES.has(name)) {
    return API_ALIASES.get(name) || name;
  }

  if (['fetch', 'btoa', 'atob', 'postMessage'].includes(name)) {
    return name;
  }

  if (name === 'Uint8Array' || name === 'DataView' || name === 'ArrayBuffer' || name === 'TextEncoder') {
    return name;
  }

  if (name.endsWith('.log') || name.endsWith('.debug')) {
    const tail = name.split('.').pop();
    return API_ALIASES.get(tail) || name;
  }

  return null;
}

/**
 * @param {string} name
 * @param {string} aliased
 * @returns {boolean}
 */
function isKnownPartial(name, aliased) {
  if (aliased.startsWith('console.') && name.includes('console')) {
    return true;
  }
  if (aliased.includes('subtle') && name.includes('subtle')) {
    return true;
  }
  return false;
}

/**
 * @param {string} apiName
 * @param {string[]} sinkApis
 * @returns {boolean}
 */
function matchesSinkApi(apiName, sinkApis) {
  const normalized = normalizeApiName(apiName) || apiName;
  return sinkApis.some((sink) => {
    const sinkNorm = normalizeApiName(sink) || String(sink || '').trim();
    if (!sinkNorm || !normalized) {
      return false;
    }
    if (normalized === sinkNorm) {
      return true;
    }
    // 前缀匹配：sink "console" 命中 "console.log"
    if (normalized.startsWith(`${sinkNorm}.`)) {
      return true;
    }
    // 后缀路径：sink "XMLHttpRequest.send" 命中 "xhr.send"
    if (normalized.endsWith(`.${sinkNorm}`)) {
      return true;
    }
    if (sinkNorm.endsWith(`.${normalized}`)) {
      return true;
    }
    // 方法名尾部匹配：sink "log" 命中 "console.log"
    if (normalized.split('.').pop() === sinkNorm.split('.').pop()) {
      return true;
    }
    // 对象名匹配：sink "console" 且 API 形如 "console.xxx"
    if (normalized.includes('.') && normalized.split('.')[0] === sinkNorm) {
      return true;
    }
    return false;
  });
}

/**
 * @param {APICallSite[]} calls
 * @returns {Map<string, number>}
 */
function countApiTermFrequency(calls) {
  const tf = new Map();
  for (const call of calls) {
    tf.set(call.api_name, (tf.get(call.api_name) || 0) + 1);
  }
  return tf;
}

module.exports = {
  SENSITIVE_APIS,
  extractApiCalls,
  normalizeApiName,
  matchesSinkApi,
  countApiTermFrequency,
  resolveCallSignature
};
