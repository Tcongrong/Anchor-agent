/**
 * ANCHOR 断点观测采集
 *
 * 每次断点命中收集:
 * - Sh: 同步调用栈 (Debugger.paused.callFrames)
 * - Ah: 异步调用栈 (asyncStackTrace 链)
 */

/**
 * @param {number|string|undefined} lineNumber - CDP 0-based line
 * @returns {number|null}
 */
function toDisplayLine(lineNumber) {
  if (lineNumber === null || lineNumber === undefined || Number.isNaN(Number(lineNumber))) {
    return null;
  }
  return Number(lineNumber) + 1;
}

/**
 * @param {object} frame
 * @returns {object}
 */
function formatSyncFrame(frame, index) {
  const location = frame.location || {};
  const lineNumber = frame.lineNumber !== undefined ? frame.lineNumber : location.lineNumber;
  const columnNumber = frame.columnNumber !== undefined ? frame.columnNumber : location.columnNumber;

  return {
    index,
    callFrameId: frame.callFrameId,
    functionName: frame.functionName || '(anonymous)',
    url: frame.url || location.url || 'unknown',
    scriptId: frame.scriptId || location.scriptId || null,
    line: toDisplayLine(lineNumber),
    column: columnNumber != null ? Number(columnNumber) + 1 : null
  };
}

/**
 * @param {Array|undefined|null} callFrames
 * @returns {Array}
 */
function buildSyncStack(callFrames) {
  if (!Array.isArray(callFrames) || callFrames.length === 0) {
    return [];
  }
  return callFrames.map((frame, index) => formatSyncFrame(frame, index));
}

/**
 * @param {object} frame
 * @returns {object}
 */
function formatAsyncFrame(frame) {
  return {
    functionName: frame.functionName || '(anonymous)',
    url: frame.url || 'unknown',
    scriptId: frame.scriptId || null,
    line: toDisplayLine(frame.lineNumber),
    column: frame.columnNumber != null ? Number(frame.columnNumber) + 1 : null
  };
}

/**
 * 将 asyncStackTrace 及其 parent 链展平为有序帧列表
 * @param {object|undefined|null} asyncStackTrace
 * @returns {Array}
 */
function buildAsyncStack(asyncStackTrace) {
  if (!asyncStackTrace) {
    return [];
  }

  const result = [];
  let current = asyncStackTrace;
  let depth = 0;

  while (current) {
    if (current.description) {
      result.push({
        kind: 'async-segment',
        depth,
        description: current.description
      });
    }

    for (const frame of current.callFrames || []) {
      result.push({
        kind: 'async-frame',
        depth,
        ...formatAsyncFrame(frame)
      });
    }

    current = current.parent || null;
    depth += 1;
  }

  return result;
}

class AnchorCollector {
  /**
   * @param {import('./debugger')} debuggerModule
   */
  constructor(debuggerModule) {
    this.debugger = debuggerModule;
  }

  /**
   * @param {object} pauseEvent
   * @returns {Promise<{Sh: Array, Ah: Array}>}
   */
  async collect(pauseEvent) {
    const callFrames = pauseEvent.callFrames || this.debugger._callFrames || [];

    const Sh = buildSyncStack(callFrames);
    const Ah = buildAsyncStack(
      pauseEvent.asyncStackTrace
      || this.debugger._asyncStackTrace
      || null
    );

    return { Sh, Ah };
  }
}

module.exports = {
  AnchorCollector,
  buildSyncStack,
  buildAsyncStack,
  toDisplayLine
};
