#!/usr/bin/env node
/**
 * TC3：根据 call-graph.json + 断点观测更新因果图 G_t（causual-graph.json）
 *
 * 流程：
 *   1. 若 call-graph.json 不存在，先从 anchor-snapshots.jsonl 构建
 *   2. 在已有 causual-graph.json 上增量合并 call-graph.json（节点/边）与新观测（不覆盖历史）
 *
 * 输入：
 *   - cdp-ast-output/call-graph/call-graph.json（结构：sync/async 边与函数节点）
 *   - anchor-snapshots.jsonl
 *   - breakpoint-observations.json
 *   - runtime-function-logs.deduped.json（tag 映射，可选）
 */

const fs = require('fs');
const path = require('path');
const {
  buildAndWriteCallGraph,
  loadAnchorSnapshots,
  loadDedupedLogs,
  updateCausalGraphFromFiles
} = require('./cdp-workflow/src/modules/causal-graph-updater');
const { summarizeCausalGraph } = require('./cdp-workflow/src/modules/info-gain-breakpoint/context');

const ROOT = __dirname;
const CDP_WORKFLOW = path.join(ROOT, 'cdp-workflow');

const DEFAULT_PATHS = {
  causalGraph: path.join(CDP_WORKFLOW, 'causual-graph.json'),
  callGraph: path.join(CDP_WORKFLOW, 'cdp-ast-output', 'call-graph', 'call-graph.json'),
  anchor: path.join(CDP_WORKFLOW, 'anchor-snapshots.jsonl'),
  observations: path.join(CDP_WORKFLOW, 'breakpoint-observations.json'),
  logs: path.join(CDP_WORKFLOW, 'cdp-ast-output', 'runtime-function-logs.deduped.json')
};

function parseArgs(argv) {
  const opts = {
    ...DEFAULT_PATHS,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--causal-graph' && argv[i + 1]) opts.causalGraph = path.resolve(ROOT, argv[++i]);
    else if (arg === '--call-graph' && argv[i + 1]) opts.callGraph = path.resolve(ROOT, argv[++i]);
    else if (arg === '--anchor' && argv[i + 1]) opts.anchor = path.resolve(ROOT, argv[++i]);
    else if (arg === '--observations' && argv[i + 1]) opts.observations = path.resolve(ROOT, argv[++i]);
    else if (arg === '--logs' && argv[i + 1]) opts.logs = path.resolve(ROOT, argv[++i]);
    else if (arg === '--help') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node update-causal-graph.js [选项]

选项:
  --causal-graph <file>   因果图 G_t 路径（默认 cdp-workflow/causual-graph.json）
  --call-graph <file>     调用关系图 JSON（默认 cdp-workflow/cdp-ast-output/call-graph/call-graph.json）
  --anchor <file>         ANCHOR 快照 JSONL（默认 cdp-workflow/anchor-snapshots.jsonl）
  --observations <file>   断点观测值 JSON（默认 cdp-workflow/breakpoint-observations.json）
  --logs <file>           deduped 日志（tag 映射，默认 cdp-ast-output/runtime-function-logs.deduped.json）
  --help                  显示帮助
`);
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  if (!fs.existsSync(opts.callGraph)) {
    const anchorSnapshots = loadAnchorSnapshots(opts.anchor);
    const logRecords = loadDedupedLogs(opts.logs);
    if (!anchorSnapshots.length) {
      console.error(`ANCHOR 快照为空: ${opts.anchor}`);
      process.exit(1);
    }
    console.log(`\n▶ call-graph 不存在，从 anchor 构建: ${opts.callGraph}`);
    buildAndWriteCallGraph(anchorSnapshots, logRecords, opts.callGraph);
  }

  const updated = updateCausalGraphFromFiles({
    causalGraphFile: opts.causalGraph,
    callGraphFile: opts.callGraph,
    anchorFile: opts.anchor,
    observationsFile: opts.observations,
    logsFile: opts.logs,
    requireCallGraphFile: true
  });

  const fnCount = updated.nodes.filter((node) => node.type === 'function').length;
  const valCount = updated.nodes.filter((node) => node.type === 'value').length;
  const syncCount = updated.edges.filter((edge) => edge.kind === 'sync').length;
  const asyncCount = updated.edges.filter((edge) => edge.kind === 'async').length;
  const dataCount = updated.edges.filter((edge) => edge.kind === 'data').length;

  console.log('\n因果图 G_t 更新完成');
  console.log(`- 结构来源: ${opts.callGraph}`);
  console.log(`- 输出: ${opts.causalGraph}`);
  console.log(`- turn: ${updated.turn}`);
  console.log(`- 节点: ${updated.nodes.length}（函数 ${fnCount}，值 ${valCount}）`);
  console.log(`- 边: ${updated.edges.length}（sync ${syncCount}，async ${asyncCount}，data ${dataCount}）`);
  console.log(`- 观测记录: ${updated.observations.length} 条`);
  console.log('\n摘要:');
  console.log(summarizeCausalGraph(updated));
}

main();
