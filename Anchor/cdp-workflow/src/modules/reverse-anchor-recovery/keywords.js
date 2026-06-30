/**
 * 从任务描述 d 中提取目标字段关键词
 */

const JS_KEYWORDS = new Set([
  'action', 'console', 'log', 'output', 'function', 'return', 'const', 'let', 'var',
  'true', 'false', 'null', 'undefined', 'string', 'object', 'number'
]);

const NOISE_WORDS = new Set([
  '寻找', '控制台', '输出', '哪个', '函数', '生成', '赋予', '是在', '如何', '的', '中',
  'find', 'where', 'which', 'generated', 'assigned', 'output', 'console'
]);

/**
 * @param {string} taskDescription
 * @returns {string[]}
 */
function extractKeywordsFromTask(taskDescription) {
  const text = String(taskDescription || '');
  const keywords = new Set();

  // JSON 对象字面量中的键名：{action: '...', search_sig: '...'}
  const jsonKeyRe = /['"]?([a-zA-Z_$][\w$]*)['"]?\s*:/g;
  let m;
  while ((m = jsonKeyRe.exec(text)) !== null) {
    const key = m[1];
    if (!JS_KEYWORDS.has(key) && !NOISE_WORDS.has(key)) {
      keywords.add(key);
    }
  }

  // 反引号/引号包裹的标识符
  const quotedRe = /['"`]([a-zA-Z_$][\w$]*)['"`]/g;
  while ((m = quotedRe.exec(text)) !== null) {
    const key = m[1];
    if (key.includes('_') || key.includes('sig') || key.includes('token') || key.includes('hash')) {
      keywords.add(key);
    }
  }

  // snake_case / camelCase 独立词（如 search_sig）
  const tokenRe = /\b([a-z]+(?:_[a-z0-9]+)+)\b/gi;
  while ((m = tokenRe.exec(text)) !== null) {
    keywords.add(m[1]);
  }

  return [...keywords];
}

module.exports = {
  extractKeywordsFromTask
};
