/**
 * 目标值形态约束：正则匹配与特征推断
 */

/**
 * @param {string} pattern
 * @returns {RegExp}
 */
function compileValuePattern(pattern) {
  if (!pattern || typeof pattern !== 'string') {
    throw new Error('value-pattern 不能为空');
  }
  try {
    return new RegExp(pattern);
  } catch (error) {
    throw new Error(`无效的正则 value-pattern: ${error.message}`);
  }
}

/**
 * @param {unknown} value
 * @param {string|RegExp} patternOrRe
 * @returns {boolean}
 */
function matchesValuePattern(value, patternOrRe) {
  if (value == null || value === '') return false;
  const re = patternOrRe instanceof RegExp ? patternOrRe : compileValuePattern(patternOrRe);
  return re.test(String(value));
}

/**
 * @param {string} charset
 * @returns {string}
 */
function describeCharset(charset) {
  if (charset === 'a-z0-9') return '小写字母或数字';
  if (charset === 'A-Za-z0-9') return '字母或数字';
  if (charset === '0-9') return '数字';
  if (charset === 'a-z') return '小写字母';
  if (charset === 'A-Z') return '大写字母';
  if (charset === 'a-zA-Z0-9') return '字母或数字';
  if (charset === 'A-Za-z0-9+/') return 'Base64 字符';
  return `\`${charset}\``;
}

/**
 * 从正则字面量推断可读的形态特征（供 LLM prompt 使用）
 * @param {string} pattern
 * @returns {string[]}
 */
function inferTraitsFromPattern(pattern) {
  if (!pattern) return [];

  const traits = [`须完整匹配正则 \`${pattern}\``];

  const startPrefix = pattern.match(/^\^([a-zA-Z0-9_-]+)/);
  if (startPrefix) {
    traits.push(`以 \`${startPrefix[1]}\` 开头`);
  }

  const endSuffix = pattern.match(/([a-zA-Z0-9_-]+)\$$/);
  if (endSuffix && endSuffix[1] !== startPrefix?.[1]) {
    traits.push(`以 \`${endSuffix[1]}\` 结尾`);
  }

  for (const match of pattern.matchAll(/\[([^\]]+)\]\{(\d+)(?:,(\d+))?\}/g)) {
    const [, charset, minStr, maxStr] = match;
    const desc = describeCharset(charset);
    const min = Number(minStr);
    const max = maxStr ? Number(maxStr) : null;
    if (max != null && max !== min) {
      traits.push(`${min}–${max} 个 ${desc}`);
    } else {
      traits.push(`恰好 ${min} 个 ${desc}`);
    }
  }

  if (pattern.includes('_') && !startPrefix) {
    traits.push('含下划线 `_` 分段');
  }
  if (pattern.includes('-')) {
    traits.push('含连字符 `-` 分段');
  }
  if (pattern.endsWith('$')) {
    traits.push('不允许额外后缀');
  }

  return traits;
}

/**
 * 用占位符从简单正则合成示例值（仅作 LLM 参照，非真实样本）
 * @param {string} pattern
 * @returns {string|null}
 */
function synthesizeExampleFromPattern(pattern) {
  if (!pattern || !pattern.startsWith('^')) return null;

  let example = pattern.slice(1);
  example = example.replace(/\$$/, '');
  example = example.replace(/\\d/g, '0');
  example = example.replace(/\\w/g, 'a');
  example = example.replace(/\[a-z0-9\]\{(\d+)\}/g, (_, n) => 'a1b2c3d4e5'.slice(0, Number(n)).padEnd(Number(n), '0'));
  example = example.replace(/\[A-Za-z0-9\]\{(\d+)\}/g, (_, n) => 'A1B2C3D4'.slice(0, Number(n)).padEnd(Number(n), '0'));
  example = example.replace(/\[0-9\]\{(\d+)\}/g, (_, n) => '0123456789'.slice(0, Number(n)));
  example = example.replace(/\[a-z\]\{(\d+)\}/g, (_, n) => 'abcdefgh'.slice(0, Number(n)).padEnd(Number(n), 'a'));
  example = example.replace(/\+/g, '');
  example = example.replace(/\(\?:[^)]+\)/g, '');
  example = example.replace(/[()[\]|?*+{}^$\\]/g, '');

  if (!example || example.length > 128) return null;
  const re = compileValuePattern(pattern);
  return re.test(example) ? example : null;
}

/**
 * @param {object} params
 * @param {string} [params.taskDescription]
 * @param {string} [params.referenceValue] 显式 --value
 * @param {string} [params.valuePattern] 显式 --value-pattern
 * @param {(task: string) => string|null} [params.extractFromTask]
 * @returns {{ referenceValue: string|null, valuePattern: string|null, syntheticExample: string|null }}
 */
function resolveReferenceContext(params = {}) {
  const extractFromTask = params.extractFromTask || (() => null);
  const explicitValue = params.referenceValue ? String(params.referenceValue) : null;
  const fromTask = extractFromTask(params.taskDescription || '');
  const valuePattern = params.valuePattern ? String(params.valuePattern) : null;

  let referenceValue = explicitValue || fromTask || null;
  let syntheticExample = null;

  if (valuePattern) {
    compileValuePattern(valuePattern);
    syntheticExample = synthesizeExampleFromPattern(valuePattern);
    if (!referenceValue && syntheticExample) {
      referenceValue = syntheticExample;
    }
  }

  return {
    referenceValue,
    valuePattern,
    syntheticExample
  };
}

module.exports = {
  compileValuePattern,
  matchesValuePattern,
  inferTraitsFromPattern,
  synthesizeExampleFromPattern,
  resolveReferenceContext
};
