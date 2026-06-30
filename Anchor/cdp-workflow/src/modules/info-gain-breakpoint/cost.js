/**
 * 断点观测成本估算 c(b)
 */

const LOOP_AST_TYPES = new Set([
  'ForStatement',
  'ForInStatement',
  'ForOfStatement',
  'WhileStatement',
  'DoWhileStatement'
]);

const HIGH_FREQ_CALLBACK_PATTERNS = [
  /\brequestAnimationFrame\b/,
  /\bsetInterval\b/,
  /\baddEventListener\b/,
  /\bMutationObserver\b/
];

/**
 * @param {object} valueExpr 字典中的 valueExpression
 * @param {object} funcEntry 字典中的函数条目
 * @returns {boolean}
 */
function isInLoop(valueExpr, funcEntry) {
  const exprRange = valueExpr.range || valueExpr.sourceLoc;
  if (!exprRange || !funcEntry?.statements?.length) {
    return false;
  }

  const exprStart = valueExpr.range?.start ?? valueExpr.sourceLoc?.column;
  const exprEnd = valueExpr.range?.end ?? exprStart;

  for (const stmt of funcEntry.statements) {
    if (!LOOP_AST_TYPES.has(stmt.astType)) continue;
    const stmtStart = stmt.range?.start;
    const stmtEnd = stmt.range?.end;
    if (stmtStart == null || stmtEnd == null) continue;
    if (exprStart >= stmtStart && exprEnd <= stmtEnd) {
      return true;
    }
  }
  return false;
}

/**
 * @param {object} funcEntry
 * @returns {boolean}
 */
function isHighFreqCallbackContext(funcEntry) {
  const tags = funcEntry?.tags || [];
  if (tags.includes('callback')) return true;
  const code = funcEntry?.functionCode || '';
  return HIGH_FREQ_CALLBACK_PATTERNS.some((re) => re.test(code));
}

/**
 * @param {string} locKey "line:column"
 * @param {object} causalGraph
 * @returns {number}
 */
function getHitCount(locKey, causalGraph) {
  if (!causalGraph) return 0;
  const hitCounts = causalGraph.hitCounts || causalGraph.hit_counts || {};
  return Number(hitCounts[locKey]) || 0;
}

/**
 * @param {object} valueExpr
 * @param {object} funcEntry
 * @param {object} causalGraph
 * @returns {{ cost: number, factors: string[] }}
 */
function estimateBreakpointCost(valueExpr, funcEntry, causalGraph) {
  let cost = 1;
  const factors = ['base=1'];

  if (isInLoop(valueExpr, funcEntry)) {
    cost *= 3;
    factors.push('in-loop x3');
  }

  if (isHighFreqCallbackContext(funcEntry)) {
    cost *= 5;
    factors.push('high-freq-callback x5');
  }

  const loc = valueExpr.runtimeLoc || valueExpr.sourceLoc;
  if (loc) {
    const locKey = `${loc.line}:${loc.column}`;
    const hits = getHitCount(locKey, causalGraph);
    if (hits > 0) {
      cost += hits * 0.5;
      factors.push(`prior-hits=${hits}`);
    }
  }

  return { cost, factors };
}

module.exports = {
  LOOP_AST_TYPES,
  isInLoop,
  isHighFreqCallbackContext,
  getHitCount,
  estimateBreakpointCost
};
