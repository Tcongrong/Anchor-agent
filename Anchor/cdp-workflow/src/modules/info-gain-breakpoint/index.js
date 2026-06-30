/**
 * TC2：信息增益驱动断点选择
 */

const fs = require('fs');
const path = require('path');
const { shannonEntropy, computeInformationGain } = require('./entropy');
const { estimateBreakpointCost } = require('./cost');
const {
  buildLlmContext,
  resolveDistribution,
  extractNameFromTag
} = require('./context');
const { requestBreakpointCandidates } = require('./llm');
const { buildBreakpointKey, pickBestUninterruptedCandidate } = require('./breakpoint-key');
const { parseTag } = require('../call-graph-builder');

const DEFAULT_EPSILON = 1e-6;

/**
 * @param {object|null} anchorSelection
 * @param {string|null} functionTag
 * @returns {object|null}
 */
function findAnchorEntry(anchorSelection, functionTag) {
  if (!functionTag || !anchorSelection) {
    return null;
  }

  for (const pool of [anchorSelection.distribution, anchorSelection.anchors]) {
    if (!Array.isArray(pool)) continue;
    const hit = pool.find((item) => item.tag === functionTag);
    if (hit) return hit;
  }

  return null;
}

/**
 * @param {object} candidate LLM 候选
 * @param {object} dictionary 函数字典
 * @returns {{ valueExpr: object|null, funcEntry: object|null, scriptUrl: string|null }}
 */
function resolveCandidateBinding(candidate, dictionary) {
  const dict = dictionary?.dictionary || dictionary || {};

  if (candidate.function_tag && dict[candidate.function_tag]) {
    const funcEntry = dict[candidate.function_tag];
    const valueExpr = matchValueExpression(funcEntry, candidate);
    return { valueExpr, funcEntry, scriptUrl: funcEntry.scriptUrl };
  }

  for (const funcEntry of Object.values(dict)) {
    const valueExpr = matchValueExpression(funcEntry, candidate);
    if (valueExpr) {
      return { valueExpr, funcEntry, scriptUrl: funcEntry.scriptUrl };
    }
  }

  const parsedTag = candidate.function_tag ? parseTag(candidate.function_tag) : null;
  if (parsedTag?.scriptUrl) {
    return { valueExpr: null, funcEntry: null, scriptUrl: parsedTag.scriptUrl };
  }

  return { valueExpr: null, funcEntry: null, scriptUrl: null };
}

/**
 * @param {object} funcEntry
 * @param {object} candidate
 * @returns {object|null}
 */
function matchValueExpression(funcEntry, candidate) {
  if (!funcEntry?.valueExpressions?.length) return null;

  const byBinding = funcEntry.valueExpressions.find(
    (expr) => expr.binding && expr.binding === candidate.var_name
  );
  if (byBinding) return byBinding;

  const loc = candidate.runtime_loc;
  if (loc) {
    const byLoc = funcEntry.valueExpressions.find((expr) => {
      const rl = expr.runtimeLoc || expr.sourceLoc;
      return rl && rl.line === loc.line && rl.column === loc.column;
    });
    if (byLoc) return byLoc;
  }

  return null;
}

/**
 * @param {object} candidate
 * @param {object|null} valueExpr
 * @param {object|null} funcEntry
 * @param {string|null} scriptUrl
 * @param {object|null} anchorEntry anchor-selection 中同 tag 的条目（补充 scriptUrl / bundle 坐标）
 * @returns {object}
 */
function buildSelectedBreakpoint(candidate, valueExpr, funcEntry, scriptUrl, anchorEntry) {
  const functionTag = funcEntry?.tag || candidate.function_tag || anchorEntry?.tag || null;
  const parsedTag = functionTag ? parseTag(functionTag) : null;

  const runtimeLoc = candidate.runtime_loc
    || valueExpr?.runtimeLoc
    || valueExpr?.sourceLoc
    || null;

  const bundleLoc = valueExpr?.sourceLoc
    || funcEntry?.location
    || anchorEntry?.location
    || (parsedTag ? { line: parsedTag.line, column: parsedTag.column } : null)
    || runtimeLoc;

  const text = valueExpr?.text || candidate.var_name;
  const resolvedScriptUrl = scriptUrl
    || funcEntry?.scriptUrl
    || anchorEntry?.scriptUrl
    || parsedTag?.scriptUrl
    || null;

  return {
    var_name: candidate.var_name,
    runtime_loc: runtimeLoc,
    condition: candidate.condition || null,
    function_tag: functionTag,
    functionName: funcEntry?.functionName
      || anchorEntry?.functionName
      || extractNameFromTag(functionTag || ''),
    scriptUrl: resolvedScriptUrl,
    text,
    location: bundleLoc
      ? { line: bundleLoc.line, column: bundleLoc.column }
      : null,
    tag: functionTag
  };
}

/**
 * @param {Array} candidates
 * @param {Array} distribution
 * @param {string[]} focusTags
 * @param {object} dictionary
 * @param {object} causalGraph
 * @param {number} epsilon
 * @returns {Array}
 */
function scoreCandidates(candidates, distribution, focusTags, dictionary, causalGraph, epsilon) {
  const baseEntropy = shannonEntropy(distribution);

  return candidates.map((candidate) => {
    const { valueExpr, funcEntry } = resolveCandidateBinding(candidate, dictionary);
    const ig = computeInformationGain(distribution, focusTags, candidate);
    const { cost, factors } = estimateBreakpointCost(
      valueExpr || { runtime_loc: candidate.runtime_loc, sourceLoc: candidate.runtime_loc },
      funcEntry || {},
      causalGraph
    );
    const score = ig / (cost + epsilon);

    return {
      ...candidate,
      valueExpr,
      funcEntry,
      informationGain: Number(ig.toFixed(6)),
      cost: Number(cost.toFixed(4)),
      costFactors: factors,
      score: Number(score.toFixed(6))
    };
  }).sort((a, b) => b.score - a.score || b.informationGain - a.informationGain);
}

/**
 * @param {object} options
 * @returns {Promise<object>}
 */
async function selectInfoGainBreakpoint(options) {
  const anchorSelection = loadJson(options.anchorSelectionFile);
  const funcDict = loadJson(options.funcDictFile);
  const staticCG = loadJson(options.staticCGFile);
  const causalGraph = loadJson(options.causalGraphFile) || {};

  const distribution = await resolveDistribution(anchorSelection, {
    dedupedFile: options.dedupedFile,
    taskDescription: options.taskDescription || anchorSelection?.taskDescription,
    sinkApis: anchorSelection?.structuralPrior?.sinkApis,
    cacheFile: options.cacheFile,
    useCache: options.useCache
  });

  const taskDescription = options.taskDescription
    || anchorSelection?.taskDescription
    || '';

  const llmContext = buildLlmContext({
    taskDescription,
    distribution,
    funcDict,
    staticCG,
    causalGraph,
    focusCount: options.focusCount || 3
  });
  llmContext.distributionEntropy = shannonEntropy(distribution);

  const llmResponse = await requestBreakpointCandidates(llmContext, {
    mock: options.mock,
    llmResponseFile: options.llmResponseFile,
    apiKey: options.apiKey,
    baseUrl: options.baseUrl,
    model: options.model
  });

  const focusTags = llmContext.focusFunctions.map((f) => f.tag);
  const epsilon = options.epsilon ?? DEFAULT_EPSILON;

  const scoredCandidates = scoreCandidates(
    llmResponse.candidates,
    distribution,
    focusTags,
    funcDict,
    causalGraph,
    epsilon
  );

  const interruptedKeys = options.interruptedBreakpointKeys || [];
  const { best, skipped, fallbackAllInterrupted } = pickBestUninterruptedCandidate(
    scoredCandidates,
    interruptedKeys
  );
  if (!best) {
    throw new Error('LLM 未返回有效候选断点');
  }
  if (skipped.length > 0) {
    console.log(`  跳过 ${skipped.length} 个已中断断点，选用下一优先候选`);
  }
  if (fallbackAllInterrupted) {
    console.warn('  ⚠️  所有候选断点均已中断，回退到最高优先级断点');
  }

  const { valueExpr, funcEntry, scriptUrl } = resolveCandidateBinding(best, funcDict);
  const anchorEntry = findAnchorEntry(anchorSelection, best.function_tag);
  const selectedBreakpoint = buildSelectedBreakpoint(best, valueExpr, funcEntry, scriptUrl, anchorEntry);

  const breakpointTask = selectedBreakpoint.location && selectedBreakpoint.scriptUrl
    ? {
      scriptUrl: selectedBreakpoint.scriptUrl,
      location: selectedBreakpoint.location,
      text: selectedBreakpoint.text,
      tag: selectedBreakpoint.tag
    }
    : null;

  return {
    generatedAt: new Date().toISOString(),
    taskDescription,
    distribution: {
      entropy: llmContext.distributionEntropy,
      focusFunctions: llmContext.focusFunctions.map((f) => ({
        rank: f.rank,
        tag: f.tag,
        functionName: f.functionName,
        prob: f.prob,
        sinkDistanceText: f.sinkDistanceText
      })),
      candidateCount: distribution.length
    },
    causalGraphSummary: llmContext.causalGraphSummary,
    llmResponse: {
      reasoning: llmResponse.reasoning,
      candidates: llmResponse.candidates
    },
    candidateScores: scoredCandidates.map((item) => ({
      var_name: item.var_name,
      function_tag: item.function_tag,
      runtime_loc: item.runtime_loc,
      informationGain: item.informationGain,
      cost: item.cost,
      costFactors: item.costFactors,
      score: item.score,
      predicted_outcomes: item.predicted_outcomes
    })),
    selected_breakpoint: selectedBreakpoint,
    breakpointTasks: breakpointTask ? [breakpointTask] : [],
    breakpointSelection: {
      selectedKey: buildBreakpointKey(selectedBreakpoint),
      skippedInterrupted: skipped.map((item) => ({
        key: item.key,
        var_name: item.candidate?.var_name,
        function_tag: item.candidate?.function_tag
      })),
      fallbackAllInterrupted
    }
  };
}

/**
 * @param {string} filePath
 * @returns {object|null}
 */
function loadJson(filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  if (!raw) return null;
  return JSON.parse(raw);
}

/**
 * @param {object} result
 * @param {string} outFile
 */
function writeResult(result, outFile) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf8');
}

module.exports = {
  DEFAULT_EPSILON,
  findAnchorEntry,
  resolveCandidateBinding,
  matchValueExpression,
  buildSelectedBreakpoint,
  scoreCandidates,
  selectInfoGainBreakpoint,
  writeResult,
  loadJson,
  buildBreakpointKey,
  pickBestUninterruptedCandidate
};
