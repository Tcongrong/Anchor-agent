/**
 * 从任务描述 d 中提取 Sink API 列表
 */

const DEFAULT_SINK_PATTERNS = [
  /\bconsole\.(?:log|debug|info|warn|error)\b/gi,
  /\bfetch\b/g,
  /\bXMLHttpRequest(?:\.send)?\b/g,
  /\bnavigator\.sendBeacon\b/g,
  /\bpostMessage\b/g
];

const EXPLICIT_SINK_KEYWORDS = [
  'console.log',
  'console.debug',
  'console.info',
  'console.warn',
  'console.error',
  'fetch',
  'XMLHttpRequest.send',
  'XMLHttpRequest',
  'navigator.sendBeacon',
  'postMessage'
];

/**
 * @param {string} description
 * @param {string[]} [explicitSinks]
 * @returns {string[]}
 */
function parseSinkApisFromDescription(description, explicitSinks = []) {
  const sinks = new Set();

  for (const sink of explicitSinks) {
    const trimmed = String(sink || '').trim();
    if (trimmed) {
      sinks.add(trimmed);
    }
  }

  const text = String(description || '');
  for (const keyword of EXPLICIT_SINK_KEYWORDS) {
    if (text.includes(keyword)) {
      sinks.add(keyword);
    }
  }

  for (const pattern of DEFAULT_SINK_PATTERNS) {
    pattern.lastIndex = 0;
    const matches = text.match(pattern);
    if (!matches) {
      continue;
    }
    for (const match of matches) {
      sinks.add(normalizeSinkName(match));
    }
  }

  if (/控制台/.test(text) && /console/.test(text)) {
    sinks.add('console.log');
  }
  if (/console/i.test(text) && !sinks.size) {
    sinks.add('console.log');
  }

  if (!sinks.size) {
    sinks.add('console.log');
  }

  return [...sinks];
}

/**
 * @param {string} raw
 * @returns {string}
 */
function normalizeSinkName(raw) {
  const value = String(raw || '').trim();
  if (/^XMLHttpRequest$/i.test(value)) {
    return 'XMLHttpRequest.send';
  }
  if (/^console$/i.test(value)) {
    return 'console.log';
  }
  return value;
}

module.exports = {
  parseSinkApisFromDescription,
  normalizeSinkName,
  DEFAULT_SINK_PATTERNS
};
