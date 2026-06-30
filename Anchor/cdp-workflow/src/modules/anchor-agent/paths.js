/**
 * Anchor Agent 默认路径
 */

const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..');

function buildDefaultPaths(root = ROOT) {
  const cdpWorkflow = path.join(root, 'cdp-workflow');
  return {
    root,
    cdpWorkflow,
    deduped: path.join(cdpWorkflow, 'cdp-ast-output', 'runtime-function-logs.deduped.json'),
    mapFile: path.join(cdpWorkflow, 'cdp-ast-output', 'function-tag-map.json'),
    astsDir: path.join(cdpWorkflow, 'cdp-ast-output', 'asts'),
    lookup: path.join(root, 'function-call-lookup.json'),
    funcDict: path.join(root, 'function-dictionary.json'),
    staticCG: path.join(cdpWorkflow, 'cdp-ast-output', 'static-call-graph.json'),
    explicitStaticCG: path.join(cdpWorkflow, 'cdp-ast-output', 'explicit-static-call-graph.json'),
    anchorSelection: path.join(root, 'anchor-selection.json'),
    structuralCache: path.join(root, '.cache', 'structural-prior-cache.json'),
    needToBreak: path.join(cdpWorkflow, 'need_to_break.json'),
    breakpointObservations: path.join(cdpWorkflow, 'breakpoint-observations.json'),
    anchorSnapshots: path.join(cdpWorkflow, 'anchor-snapshots.jsonl'),
    callGraph: path.join(cdpWorkflow, 'cdp-ast-output', 'call-graph', 'call-graph.json'),
    causalGraph: path.join(cdpWorkflow, 'causual-graph.json'),
    reverseResult: path.join(root, 'reverse-anchor-result.json'),
    anchorHistory: path.join(root, '.cache', 'anchor-history.json'),
    interruptedBreakpoints: path.join(root, '.cache', 'interrupted-breakpoints.json'),
    agentState: path.join(root, '.cache', 'anchor-agent-state.json'),
    agentResult: path.join(root, 'anchor-agent-result.json')
  };
}

module.exports = {
  ROOT,
  buildDefaultPaths
};
