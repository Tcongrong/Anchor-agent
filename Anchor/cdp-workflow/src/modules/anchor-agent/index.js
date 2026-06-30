/**
 * Anchor 因果引导式 Agent 主编排
 *
 * 阶段：
 *   TC1  结构先验 → anchor-selection.json
 *   主循环（TC2 → TC3 → 反向恢复 → 置信度更新 → 收敛检查）
 *   输出 锚点 + 证据链
 */

const fs = require('fs');
const path = require('path');
const { buildDefaultPaths } = require('./paths');
const { checkConvergence, DEFAULT_THETA_CONF, DEFAULT_THETA_ANCHOR } = require('./convergence');
const { buildAgentResult, writeAgentResult } = require('./output');
const { runSelectAnchors } = require('../../../../select-anchors');
const {
  selectInfoGainBreakpoint,
  writeResult,
  buildBreakpointKey
} = require('../info-gain-breakpoint');
const { runCollectBreakpointObservations } = require('../../../../collect-breakpoint-observations');
const {
  buildAndWriteCallGraph,
  loadAnchorSnapshots,
  loadDedupedLogs,
  updateCausalGraphFromFiles
} = require('../causal-graph-updater');
const { runReverseAnchorRecovery, loadJson } = require('../reverse-anchor-recovery');
const { runConfidenceUpdate } = require('../confidence-update');

const DEFAULT_TASK = "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}中的ss_bh9g_30是在哪个函数生成并赋予的";

/**
 * @param {string} filePath
 * @returns {object|null}
 */
function readJsonIfExists(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`⚠️  无法解析 JSON，将视为不存在: ${filePath} (${error.message})`);
    return null;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * 加载已中断断点记录；任务描述变更时自动清空（跨次运行不沿用旧任务黑名单）
 * @param {string} filePath
 * @param {string} taskDescription
 * @returns {{ history: object, cleared: boolean }}
 */
function loadInterruptedBreakpointHistory(filePath, taskDescription) {
  const fresh = { version: 1, taskDescription, entries: [] };
  const existing = readJsonIfExists(filePath);
  if (!existing) {
    return { history: fresh, cleared: false };
  }

  const prevTask = existing.taskDescription ?? '';
  if (prevTask !== taskDescription) {
    const n = (existing.entries || []).length;
    if (n > 0) {
      console.log(`  新任务：已清空 ${n} 条已中断断点记录（上一任务与当前 --task 不同）`);
    } else if (!prevTask) {
      console.log('  新任务：已重置已中断断点记录（缓存无 taskDescription，视为新任务）');
    }
    return { history: fresh, cleared: true };
  }

  return {
    history: {
      version: existing.version ?? 1,
      taskDescription,
      entries: existing.entries || []
    },
    cleared: false
  };
}

/**
 * @param {object} paths
 * @param {object} options
 * @returns {object}
 */
function buildTc1Options(paths, options) {
  return {
    deduped: paths.deduped,
    lookup: paths.lookup,
    out: paths.anchorSelection,
    cache: paths.structuralCache,
    taskDescription: options.taskDescription || DEFAULT_TASK,
    sinks: options.sinks || ['console.log'],
    mode: options.selectionMode || 'structural',
    valueWeight: options.valueWeight,
    structuralWeight: options.structuralWeight,
    noCache: options.noCache,
    topK: options.topK || 5,
    objectJson: options.objectJson,
    objectFile: options.objectFile,
    value: options.value,
    prefix: options.prefix,
    valuePattern: options.valuePattern
  };
}

/**
 * @param {object} options
 * @returns {Promise<object>}
 */
async function runAnchorAgent(options = {}) {
  const paths = { ...buildDefaultPaths(options.root), ...options.paths };
  const maxIterations = options.maxIterations ?? 10;
  const thetaConf = options.thetaConf ?? DEFAULT_THETA_CONF;
  const thetaAnchor = options.thetaAnchor ?? DEFAULT_THETA_ANCHOR;
  const taskDescription = options.taskDescription || DEFAULT_TASK;

  const agentState = {
    version: 1,
    startedAt: new Date().toISOString(),
    taskDescription,
    maxIterations,
    turns: []
  };

  let anchorSelection = null;

  if (!options.skipTc1) {
    console.log('\n========== TC1：结构先验 / 初始分布 H_0 ==========\n');
    const tc1Opts = buildTc1Options(paths, { ...options, taskDescription });
    anchorSelection = runSelectAnchors(tc1Opts);
    writeJson(paths.anchorSelection, anchorSelection);
    console.log(`TC1 完成，已写入 ${paths.anchorSelection}`);
  } else {
    anchorSelection = readJsonIfExists(paths.anchorSelection);
    if (!anchorSelection) {
      throw new Error(`skipTc1 需要已有 anchor-selection: ${paths.anchorSelection}`);
    }
  }

  let anchorHistory = readJsonIfExists(paths.anchorHistory);
  const interruptedLoad = loadInterruptedBreakpointHistory(
    paths.interruptedBreakpoints,
    taskDescription
  );
  let interruptedBreakpointHistory = interruptedLoad.history;
  if (interruptedLoad.cleared) {
    writeJson(paths.interruptedBreakpoints, interruptedBreakpointHistory);
  }
  let reverseResult = null;
  let convergence = null;

  for (let turn = 1; turn <= maxIterations; turn += 1) {
    console.log(`\n========== 主循环 第 ${turn}/${maxIterations} 轮 ==========\n`);
    const turnRecord = {
      turn,
      startedAt: new Date().toISOString(),
      steps: {}
    };

    const interruptedKeys = (interruptedBreakpointHistory.entries || []).map((entry) => entry.key);

    console.log('▶ TC2：信息增益断点选择');
    const breakpointResult = await selectInfoGainBreakpoint({
      anchorSelectionFile: paths.anchorSelection,
      funcDictFile: paths.funcDict,
      staticCGFile: paths.staticCG,
      causalGraphFile: paths.causalGraph,
      dedupedFile: paths.deduped,
      cacheFile: options.noCache ? null : paths.structuralCache,
      useCache: !options.noCache,
      taskDescription,
      focusCount: options.focusCount || 3,
      mock: options.mock,
      llmResponseFile: options.llmResponseFile || null,
      interruptedBreakpointKeys: interruptedKeys
    });
    writeResult(breakpointResult, paths.needToBreak);
    turnRecord.steps.tc2 = {
      selectedVar: breakpointResult.selected_breakpoint?.var_name,
      functionTag: breakpointResult.selected_breakpoint?.function_tag,
      selectedKey: breakpointResult.breakpointSelection?.selectedKey,
      skippedInterrupted: breakpointResult.breakpointSelection?.skippedInterrupted,
      entropy: breakpointResult.distribution?.entropy
    };
    console.log(`  断点: ${breakpointResult.selected_breakpoint?.functionName} / ${breakpointResult.selected_breakpoint?.var_name}`);

    let breakpointMissed = false;
    if (!options.skipCollect) {
      console.log('\n▶ TC3：断点执行与因果图更新');
      const collectResult = await runCollectBreakpointObservations({
        inputFile: paths.needToBreak,
        outFile: paths.breakpointObservations,
        anchorOut: paths.anchorSnapshots,
        initialIdleMs: options.initialIdleMs ?? 8000,
        readyMs: options.readyMs ?? 0,
        automationGraceMs: options.automationGraceMs ?? 20000,
        graphFormats: options.graphFormats || 'json',
        updateCausalGraph: options.updateCausalGraph !== false,
        host: options.host || 'localhost',
        port: options.port || '9222',
        target: options.target || '',
        interactionMode: options.interactionMode || 'manual',
        browserUrl: options.browserUrl || '',
        breakpointBindMs: options.breakpointBindMs ?? 8000,
        automationListenSettleMs: options.automationListenSettleMs ?? 300,
        automationReload: options.automationReload === true
      });
      turnRecord.steps.tc3 = collectResult;
      breakpointMissed = collectResult.hitCount === 0;
      console.log(`  命中次数: ${collectResult.hitCount}`);

      if (breakpointMissed) {
        const bpKey = buildBreakpointKey(breakpointResult.selected_breakpoint);
        if (bpKey && !interruptedKeys.includes(bpKey)) {
          interruptedBreakpointHistory.taskDescription = taskDescription;
          interruptedBreakpointHistory.entries = [
            ...(interruptedBreakpointHistory.entries || []),
            {
              key: bpKey,
              turn,
              recordedAt: new Date().toISOString(),
              reason: collectResult.reason || '无命中',
              breakpoint: {
                function_tag: breakpointResult.selected_breakpoint?.function_tag,
                functionName: breakpointResult.selected_breakpoint?.functionName,
                var_name: breakpointResult.selected_breakpoint?.var_name,
                runtime_loc: breakpointResult.selected_breakpoint?.runtime_loc
              }
            }
          ];
          writeJson(paths.interruptedBreakpoints, interruptedBreakpointHistory);
          console.log(`  已记录中断断点: ${bpKey}`);
        }
      }
    } else if (options.updateCausalGraph !== false) {
      console.log('\n▶ TC3：构建 call-graph 并更新因果图（skip-collect）');
      const anchorSnapshots = loadAnchorSnapshots(paths.anchorSnapshots);
      const logRecords = loadDedupedLogs(paths.deduped);
      buildAndWriteCallGraph(anchorSnapshots, logRecords, paths.callGraph);
      const graph = updateCausalGraphFromFiles({
        causalGraphFile: paths.causalGraph,
        callGraphFile: paths.callGraph,
        anchorFile: paths.anchorSnapshots,
        observationsFile: paths.breakpointObservations,
        logsFile: paths.deduped,
        requireCallGraphFile: true
      });
      turnRecord.steps.tc3 = { skippedCollect: true, turn: graph.turn };
    }

    const causalGraph = loadJson(paths.causalGraph);

    console.log('\n▶ 反向恢复 Anchor Candidate');
    reverseResult = await runReverseAnchorRecovery({
      graph: causalGraph,
      funcDictFile: paths.funcDict,
      taskDescription,
      turn: causalGraph.turn ?? turn,
      filterTurn: true,
      maxDepth: options.maxDepth ?? 7,
      theta: thetaAnchor,
      disableIsolatedPerfectScore: options.disableIsolatedPerfectScore === true,
      enablePatternC: options.enablePatternC === true,
      referenceValue: options.referenceValue || options.value || null,
      valuePattern: options.valuePattern || null,
      mock: options.mock,
      llmResponseFile: options.llmResponseFile,
      anchorHistory
    });
    writeJson(paths.reverseResult, reverseResult);
    anchorHistory = reverseResult.anchorHistory;
    if (anchorHistory) {
      writeJson(paths.anchorHistory, anchorHistory);
    }
    turnRecord.steps.reverseAnchor = {
      anchorCandidate: reverseResult.anchorCandidate,
      candidateCount: reverseResult.candidateScores?.length,
      observationRelevant: reverseResult.observationRelevance?.related ?? null,
      reflection: reverseResult.reflection ?? null
    };
    if (reverseResult.reflection?.rejected) {
      console.log(`  反思: 孤立满分已拒绝 (${reverseResult.reflection.rejectedTag})`);
    }
    console.log(`  f*: ${reverseResult.anchorCandidate || 'None'}`);

    console.log('\n▶ 置信度更新');
    const confidencePayload = runConfidenceUpdate(anchorSelection, {
      reverseResult,
      graph: causalGraph,
      needToBreak: readJsonIfExists(paths.needToBreak),
      taskDescription,
      thetaAnchor,
      turn,
      ...(breakpointMissed
        ? {
          breakpointMissed: true,
          breakpointFunctionTag: breakpointResult.selected_breakpoint?.function_tag || null,
          fHit: null,
          observation: null,
          filterTurn: true
        }
        : {})
    });
    if (breakpointMissed) {
      console.log(`  TC3 断点未命中，${breakpointResult.selected_breakpoint?.functionName || '断点函数'} 置信度 ×0.1`);
    }
    anchorSelection = confidencePayload.anchorSelection;
    writeJson(paths.anchorSelection, anchorSelection);
    turnRecord.steps.confidenceUpdate = {
      fHit: confidencePayload.updateMeta.fHit,
      uniformFallback: confidencePayload.updateMeta.uniformFallback,
      topConfidence: confidencePayload.updateMeta.posteriorConfidenceSum
    };

    convergence = checkConvergence({
      anchorSelection,
      causalGraph,
      reverseResult,
      anchorHistory,
      turn,
      maxIterations,
      thetaConf,
      thetaAnchor
    });
    turnRecord.convergence = convergence;
    turnRecord.finishedAt = new Date().toISOString();
    agentState.turns.push(turnRecord);

    writeJson(paths.agentState, agentState);

    console.log('\n▶ 收敛检查');
    console.log(`  Top: ${convergence.topFunction?.functionName}  p=${convergence.topFunction?.confidence?.toFixed(6)}`);
    console.log(`  置信度≥${thetaConf}: ${convergence.checks.confidenceOk}`);
    console.log(`  LLM 校验: ${convergence.checks.llmValidated}`);
    console.log(`  冗余性: ${convergence.checks.redundancyOk} (p0=${convergence.checks.p0Aux}, causal=${convergence.checks.causalAux})`);
    console.log(`  结果: ${convergence.reason}`);

    if (convergence.converged || convergence.reachedMaxIterations) {
      break;
    }
  }

  const funcDict = readJsonIfExists(paths.funcDict);
  const finalResult = buildAgentResult({
    convergence,
    anchorSelection,
    causalGraph: loadJson(paths.causalGraph),
    reverseResult,
    anchorHistory,
    funcDict,
    agentState
  });

  writeAgentResult(finalResult, paths.agentResult);
  writeJson(paths.agentState, { ...agentState, finishedAt: new Date().toISOString(), finalStatus: finalResult.status });

  return {
    result: finalResult,
    anchorSelection,
    agentState,
    convergence,
    paths
  };
}

module.exports = {
  DEFAULT_TASK,
  DEFAULT_THETA_CONF,
  DEFAULT_THETA_ANCHOR,
  buildDefaultPaths,
  loadInterruptedBreakpointHistory,
  runAnchorAgent
};
