#!/usr/bin/env node
/**
 * Anchor 因果引导式 Agent 统一入口
 *
 * 流程（见 整体agent流程.md）：
 *   TC1  select-anchors.js（结构先验）
 *   循环 TC2 → TC3 → 反向恢复 → 置信度更新 → 收敛检查
 *   输出 anchor-agent-result.json
 *
 * 用法:
 *   node main.js --mock --skip-collect
 *   node main.js --task "寻找 search_sig" --max-iterations 5
 */

const path = require('path');
const {
  runAnchorAgent,
  buildDefaultPaths,
  DEFAULT_TASK,
  DEFAULT_THETA_CONF,
  DEFAULT_THETA_ANCHOR
} = require('./cdp-workflow/src/modules/anchor-agent');
const { emptyGraph, writeCausalGraph, initCausalGraphFromExplicitStatic } = require('./cdp-workflow/src/modules/causal-graph-updater');

const ROOT = __dirname;

function parseArgs(argv) {
  const paths = buildDefaultPaths(ROOT);
  const opts = {
    paths,
    taskDescription: '',
    sinks: ['console.log'],
    selectionMode: 'structural',
    maxIterations: 10,
    thetaConf: DEFAULT_THETA_CONF,
    thetaAnchor: DEFAULT_THETA_ANCHOR,
    focusCount: 3,
    maxDepth: 7,
    mock: false,
    skipTc1: false,
    skipCollect: false,
    noCache: false,
    noStaticSeed: false,
    graphFormats: 'json',
    updateCausalGraph: true,
    initialIdleMs: 8000,
    readyMs: 0,
    automationGraceMs: 20000,
    breakpointBindMs: 8000,
    automationListenSettleMs: 300,
    automationReload: false,
    host: 'localhost',
    port: '9222',
    target: '',
    interactionMode: 'manual',
    browserUrl: '',
    llmResponseFile: '',
    keywords: [],
    disableIsolatedPerfectScore: false,
    enablePatternC: false,
    value: '',
    prefix: '',
    valuePattern: '',
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--task' && argv[i + 1]) opts.taskDescription = argv[++i];
    else if (arg === '--sink' && argv[i + 1]) opts.sinks.push(argv[++i]);
    else if (arg === '--mode' && argv[i + 1]) opts.selectionMode = argv[++i];
    else if (arg === '--max-iterations' && argv[i + 1]) opts.maxIterations = Math.max(1, Number(argv[++i]) || 10);
    else if (arg === '--theta-conf' && argv[i + 1]) opts.thetaConf = Number(argv[++i]) || DEFAULT_THETA_CONF;
    else if (arg === '--theta-anchor' && argv[i + 1]) opts.thetaAnchor = Number(argv[++i]) || DEFAULT_THETA_ANCHOR;
    else if (arg === '--focus' && argv[i + 1]) opts.focusCount = Math.max(1, Number(argv[++i]) || 3);
    else if (arg === '--max-depth' && argv[i + 1]) opts.maxDepth = Math.max(1, Number(argv[++i]) || 7);
    else if (arg === '--out' && argv[i + 1]) opts.paths.agentResult = path.resolve(argv[++i]);
    else if (arg === '--anchor-selection' && argv[i + 1]) opts.paths.anchorSelection = path.resolve(argv[++i]);
    else if (arg === '--keyword' && argv[i + 1]) opts.keywords.push(argv[++i]);
    else if (arg === '--value' && argv[i + 1]) opts.value = argv[++i];
    else if (arg === '--prefix' && argv[i + 1]) opts.prefix = argv[++i];
    else if (arg === '--value-pattern' && argv[i + 1]) opts.valuePattern = argv[++i];
    else if (arg === '--llm-response-file' && argv[i + 1]) opts.llmResponseFile = path.resolve(argv[++i]);
    else if (arg === '--host' && argv[i + 1]) opts.host = argv[++i];
    else if (arg === '--port' && argv[i + 1]) opts.port = argv[++i];
    else if (arg === '--target' && argv[i + 1]) opts.target = argv[++i];
    else if (arg === '--browser-url' && argv[i + 1]) opts.browserUrl = argv[++i];
    else if (arg === '--auto') opts.interactionMode = 'auto';
    else if (arg === '--interaction-mode' && argv[i + 1]) {
      const mode = argv[++i];
      if (mode === 'auto' || mode === 'manual') opts.interactionMode = mode;
    }
    else if (arg === '--initial-idle-ms' && argv[i + 1]) opts.initialIdleMs = Math.max(1000, Number(argv[++i]) || 8000);
    else if (arg === '--automation-grace-ms' && argv[i + 1]) {
      opts.automationGraceMs = Math.max(0, Number(argv[++i]) || 20000);
    }
    else if (arg === '--breakpoint-bind-ms' && argv[i + 1]) {
      opts.breakpointBindMs = Math.max(0, Number(argv[++i]) || 8000);
    }
    else if (arg === '--automation-reload') opts.automationReload = true;
    else if (arg === '--mock') opts.mock = true;
    else if (arg === '--skip-tc1') opts.skipTc1 = true;
    else if (arg === '--skip-collect') opts.skipCollect = true;
    else if (arg === '--no-cache') opts.noCache = true;
    else if (arg === '--graph-format' && argv[i + 1]) opts.graphFormats = argv[++i];
    else if (arg === '--graph-build') opts.graphFormats = 'json,dot,mermaid';
    else if (arg === '--no-causal-update') opts.updateCausalGraph = false;
    else if (arg === '--no-static-seed') opts.noStaticSeed = true;
    else if (arg === '--no-isolated-perfect-score') opts.disableIsolatedPerfectScore = true;
    else if (arg === '--pattern-c') opts.enablePatternC = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  if (!opts.target && opts.browserUrl) {
    opts.target = opts.browserUrl.replace(/\/$/, '');
  }

  if (opts.valuePattern) {
    const { compileValuePattern } = require('./cdp-workflow/src/modules/value-pattern');
    compileValuePattern(opts.valuePattern);
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node main.js [选项]

Anchor 因果引导式 Agent：启动时将 causual-graph.json 重置后，用明确静态调用图初始化 G_0，再执行 TC1 与主循环（TC2/TC3/反向恢复/置信度更新/收敛）。

选项:
  --task <text>              任务描述 d
  --sink <api>               Sink API，可重复（默认 console.log）
  --mode <structural|hybrid|value>  TC1 模式，默认 structural
  --max-iterations <n>       最大轮次，默认 10
  --theta-conf <n>           收敛置信度阈值，默认 0.9
  --theta-anchor <n>         锚点 LLM 分数阈值，默认 0.7
  --focus <n>                TC2 焦点函数数，默认 3
  --max-depth <n>            反向/正向各方向最多追溯函数数与跳数，默认 7
  --value <string>           目标值参考样本（如 bf_a1b2c3d4e5），供 TC1/锚点评分形态对比
  --value-pattern <regex>    目标值形态正则（如 ^bf_[a-z0-9]{10}$），无样本时约束锚点判定
  --prefix <string>          目标值前缀（可与 --value 联用）
  --no-isolated-perfect-score  关闭反向恢复中的「孤立满分」反思（默认开启）
  --pattern-c                  启用 Pattern C（字面任务匹配）：Anchor = 函数体完整满足任务描述的函数
  --mock                     TC2/反向恢复使用 mock LLM
  --skip-tc1                 跳过 TC1，使用已有 anchor-selection.json
  --skip-collect             跳过 CDP 断点采集（需已有观测/因果图）
  --no-causal-update         不更新因果图
  --no-static-seed           跳过明确静态图初始化，使用空因果图 G_0
  --graph-format <formats>   采集后 graph build 格式（默认 json）
  --graph-build              同 --graph-format json,dot,mermaid
  --host/--port/--target     Chrome 调试连接（TC3）
  --browser-url <url>        自动模式下 browser-automation 打开的页面 URL
  --auto                     页面操作自动执行（复用 TC3 的 CDP 会话，不另开调试连接）
  --interaction-mode <mode>  页面交互模式：manual（默认）| auto
  --initial-idle-ms <ms>     首次断点等待超时（manual 模式）
  --automation-grace-ms <ms> 自动模式下首次断点等待下限（默认 20000）
  --breakpoint-bind-ms <ms>  自动模式：断点下发后、进入等待前的稳定时间（默认 8000）
  --automation-listen-settle-ms <ms>  监听器挂载后启动自动化前的缓冲（默认 300）
  --automation-reload          自动化前强制刷新页面（会使 bundle 断点失效）
  --out <file>               最终结果，默认 anchor-agent-result.json
  --anchor-selection <file>  H_t 文件路径
  --keyword <name>           TVN 关键词，可重复
  -h, --help

示例:
  node main.js --mock --skip-collect --max-iterations 2
  node main.js --task "寻找 search_sig 生成函数" --sink console.log
  node main.js --task "..." --value-pattern "^bf_[a-z0-9]{10}$" --auto --browser-url http://127.0.0.1:4173/
  node main.js --auto --browser-url http://127.0.0.1:4173/
`);
}

function printFinalReport(payload) {
  const { result, convergence } = payload;
  console.log('\n========== Agent 结束 ==========\n');
  console.log(`状态: ${result.status}`);
  console.log(`轮次: ${result.turn}`);
  console.log(`锚点: ${result.anchor.functionName}`);
  console.log(`  tag: ${result.anchor.tag}`);
  console.log(`  confidence: ${result.anchor.confidence?.toFixed(6)}`);
  if (result.evidence.causalPathDescription?.length) {
    console.log(`  因果路径: ${result.evidence.causalPathDescription.join(' → ')}`);
  }
  if (result.alternates?.length) {
    console.log('\n备选函数:');
    for (const alt of result.alternates) {
      console.log(`  ${alt.functionName}  p=${alt.confidence?.toFixed(6)}`);
    }
  }
  if (convergence && !convergence.converged) {
    console.log(`\n未完全收敛: ${convergence.reason}`);
    console.log(`  置信度检查: ${convergence.checks.confidenceOk}`);
    console.log(`  LLM 校验: ${convergence.checks.llmValidated}`);
    console.log(`  冗余性: ${convergence.checks.redundancyOk}`);
  }
}

function resetCausalGraph(causalGraphPath) {
  writeCausalGraph(emptyGraph(), causalGraphPath);
  console.log(`已初始化空因果图 G_0: ${causalGraphPath}`);
}

function initializeCausalGraph(opts) {
  if (opts.noStaticSeed) {
    resetCausalGraph(opts.paths.causalGraph);
    return null;
  }

  try {
    const result = initCausalGraphFromExplicitStatic({
      causalGraphFile: opts.paths.causalGraph,
      dedupedFile: opts.paths.deduped,
      mapFile: opts.paths.mapFile,
      astsDir: opts.paths.astsDir,
      sinkApis: opts.sinks,
      explicitStaticFile: opts.paths.explicitStaticCG
    });
    const stats = result.explicitStatic.ExplicitStaticCG.stats;
    console.log(`已用明确静态调用图初始化因果图 G_0: ${opts.paths.causalGraph}`);
    console.log(`  候选函数: ${stats.nodeCount}，明确调用边: ${stats.edgeCount}`);
    console.log(`  明确静态图: ${opts.paths.explicitStaticCG}`);
    return result;
  } catch (error) {
    console.warn(`明确静态图初始化失败，回退为空因果图: ${error.message}`);
    resetCausalGraph(opts.paths.causalGraph);
    return null;
  }
}

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  initializeCausalGraph(opts);

  const payload = await runAnchorAgent({
    root: ROOT,
    paths: opts.paths,
    taskDescription: opts.taskDescription || DEFAULT_TASK,
    sinks: opts.sinks,
    selectionMode: opts.selectionMode,
    maxIterations: opts.maxIterations,
    thetaConf: opts.thetaConf,
    thetaAnchor: opts.thetaAnchor,
    focusCount: opts.focusCount,
    maxDepth: opts.maxDepth,
    mock: opts.mock,
    skipTc1: opts.skipTc1,
    skipCollect: opts.skipCollect,
    noCache: opts.noCache,
    graphFormats: opts.graphFormats,
    updateCausalGraph: opts.updateCausalGraph,
    initialIdleMs: opts.initialIdleMs,
    readyMs: opts.readyMs,
    automationGraceMs: opts.automationGraceMs,
    breakpointBindMs: opts.breakpointBindMs,
    automationListenSettleMs: opts.automationListenSettleMs,
    automationReload: opts.automationReload,
    host: opts.host,
    port: opts.port,
    target: opts.target,
    interactionMode: opts.interactionMode,
    browserUrl: opts.browserUrl,
    llmResponseFile: opts.llmResponseFile || undefined,
    keywords: opts.keywords.length ? opts.keywords : undefined,
    disableIsolatedPerfectScore: opts.disableIsolatedPerfectScore,
    enablePatternC: opts.enablePatternC,
    value: opts.value || undefined,
    prefix: opts.prefix || undefined,
    referenceValue: opts.value || undefined,
    valuePattern: opts.valuePattern || undefined
  });

  printFinalReport(payload);
  console.log(`\n完整结果: ${opts.paths.agentResult}`);
  console.log(`Agent 状态: ${opts.paths.agentState}`);
}

if (require.main === module) {
  main()
    .then(() => {
      // 显式退出：避免 CDP/WebSocket 等句柄在迭代结束后仍占用事件循环
      process.exit(0);
    })
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}

module.exports = { parseArgs, printFinalReport, resetCausalGraph, initializeCausalGraph };
