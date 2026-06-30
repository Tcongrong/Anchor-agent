/**
 * 断点唯一标识与已中断断点跳过逻辑
 */

/**
 * @param {object|null|undefined} breakpoint
 * @returns {string}
 */
function buildBreakpointKey(breakpoint) {
  if (!breakpoint) return '';

  const tag = breakpoint.function_tag || breakpoint.tag || '';
  const varName = breakpoint.var_name || breakpoint.text || '';
  const loc = breakpoint.runtime_loc || breakpoint.location;
  const locStr = loc && typeof loc.line === 'number'
    ? `${loc.line}:${loc.column ?? 0}`
    : '';

  return `${tag}|${varName}|${locStr}`;
}

/**
 * 从按 score 排序的候选中选取第一个未中断过的断点
 * @param {Array} scoredCandidates
 * @param {string[]} interruptedBreakpointKeys
 * @returns {{ best: object|null, skipped: object[], fallbackAllInterrupted: boolean }}
 */
function pickBestUninterruptedCandidate(scoredCandidates, interruptedBreakpointKeys = []) {
  const interrupted = new Set((interruptedBreakpointKeys || []).filter(Boolean));
  const skipped = [];

  for (const candidate of scoredCandidates || []) {
    const key = buildBreakpointKey(candidate);
    if (key && interrupted.has(key)) {
      skipped.push({ key, candidate });
      continue;
    }
    return { best: candidate, skipped, fallbackAllInterrupted: false };
  }

  if (!scoredCandidates?.length) {
    return { best: null, skipped, fallbackAllInterrupted: false };
  }

  return {
    best: scoredCandidates[0],
    skipped,
    fallbackAllInterrupted: skipped.length > 0
  };
}

module.exports = {
  buildBreakpointKey,
  pickBestUninterruptedCandidate
};
