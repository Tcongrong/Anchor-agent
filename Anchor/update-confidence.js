#!/usr/bin/env node
/**
 * 置信度更新（第 4 步）
 *
 * 读取 anchor-selection.json（H_t）与反向恢复结果，计算似然因子并写回更新后的分布。
 *
 * 用法:
 *   node update-confidence.js
 *   node update-confidence.js --reverse-result reverse-anchor-result.json --dry-run
 */

const fs = require('fs');
const path = require('path');
const {
  runConfidenceUpdateFromFiles,
  loadJson
} = require('./cdp-workflow/src/modules/confidence-update');

const ROOT = __dirname;

const DEFAULT_PATHS = {
  anchorSelection: path.join(ROOT, 'anchor-selection.json'),
  reverseResult: path.join(ROOT, 'reverse-anchor-result.json'),
  graph: path.join(ROOT, 'cdp-workflow', 'causual-graph.json'),
  needToBreak: path.join(ROOT, 'cdp-workflow', 'need_to_break.json'),
  out: path.join(ROOT, 'anchor-selection.json')
};

function parseArgs(argv) {
  const opts = {
    ...DEFAULT_PATHS,
    taskDescription: '',
    keywords: [],
    turn: null,
    fHit: '',
    valueMatches: null,
    anchorCandidate: '',
    filterTurn: false,
    dryRun: false,
    noReverse: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--anchor-selection' && argv[i + 1]) opts.anchorSelection = path.resolve(argv[++i]);
    else if (arg === '--reverse-result' && argv[i + 1]) opts.reverseResult = path.resolve(argv[++i]);
    else if (arg === '--graph' && argv[i + 1]) opts.graph = path.resolve(argv[++i]);
    else if (arg === '--need-to-break' && argv[i + 1]) opts.needToBreak = path.resolve(argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.out = path.resolve(argv[++i]);
    else if (arg === '--task' && argv[i + 1]) opts.taskDescription = argv[++i];
    else if (arg === '--keyword' && argv[i + 1]) opts.keywords.push(argv[++i]);
    else if (arg === '--turn' && argv[i + 1]) opts.turn = Number(argv[++i]);
    else if (arg === '--f-hit' && argv[i + 1]) opts.fHit = argv[++i];
    else if (arg === '--value-matches') opts.valueMatches = true;
    else if (arg === '--no-value-match') opts.valueMatches = false;
    else if (arg === '--anchor-candidate' && argv[i + 1]) opts.anchorCandidate = argv[++i];
    else if (arg === '--filter-turn') opts.filterTurn = true;
    else if (arg === '--no-reverse') opts.noReverse = true;
    else if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node update-confidence.js [选项]

根据断点观测与反向恢复结果，更新 anchor-selection.json 中的置信度分布 H_t。

选项:
  --anchor-selection <file>  当前分布 H_t，默认 anchor-selection.json
  --reverse-result <file>    反向恢复输出（TVN、f*、候选 score），默认 reverse-anchor-result.json
  --graph <file>             因果图（无 reverse-result 时用于 TVN），默认 cdp-workflow/causual-graph.json
  --need-to-break <file>     TC2 断点预测（可选 L_pred），默认 cdp-workflow/need_to_break.json
  --out <file>               输出路径，默认同 --anchor-selection
  --task <text>              覆盖任务描述 d
  --keyword <name>           TVN 匹配关键词，可重复
  --turn <n>                 轮次
  --filter-turn              仅使用指定 turn 的 observations
  --f-hit <tag>              断点命中函数（覆盖自动推断）
  --value-matches            强制值匹配（L_val 奖励）
  --no-value-match           强制值不匹配（L_val 惩罚）
  --anchor-candidate <tag>   覆盖 f*
  --no-reverse               不读取 reverse-result，仅从因果图推断
  --dry-run                  不写文件，仅打印摘要
  -h, --help                 显示帮助

示例:
  node update-confidence.js
  node update-confidence.js --dry-run --no-reverse --f-hit "http://...::runCatalogSearch@1:14548"
`);
}

function printReport(result) {
  const meta = result.updateMeta;
  const ctx = result.context;

  console.log('\n=== 置信度更新 ===\n');
  console.log(`轮次: ${meta.turn ?? '-'}`);
  console.log(`f_hit: ${meta.fHit || '-'}`);
  console.log(`值匹配 (TVN): ${meta.valueMatches}`);
  console.log(`锚点候选 f*: ${meta.anchorCandidate || 'None'}`);
  if (meta.uniformFallback) {
    console.log('注意: 总权重为 0，已回退为均匀分布');
  }

  const tags = Object.keys(meta.factors.L_t);
  const topByLt = [...tags]
    .sort((a, b) => meta.factors.L_t[b] - meta.factors.L_t[a])
    .slice(0, 5);

  console.log('\nTop L_t 因子:');
  for (const tag of topByLt) {
    const short = tag.includes('::') ? tag.split('::').pop() : tag;
    console.log(
      `  L_t=${meta.factors.L_t[tag].toFixed(3)}  `
      + `(val=${meta.factors.L_val[tag]}, anchor=${meta.factors.L_anchor[tag]}, pred=${meta.factors.L_pred[tag]})  `
      + `${short}`
    );
  }

  const dist = result.anchorSelection.distribution;
  console.log('\n更新后 Top 5 置信度:');
  for (const item of dist.slice(0, 5)) {
    console.log(`  #${item.rank}  ${item.confidence.toFixed(6)}  ${item.functionName || item.tag}`);
  }

  if (ctx.observation?.value) {
    console.log(`\n观测值字段: ${Object.keys(ctx.observation.value).join(', ')}`);
  }
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const fileOpts = {
    anchorSelectionFile: opts.anchorSelection,
    graphFile: fs.existsSync(opts.graph) ? opts.graph : undefined,
    needToBreakFile: fs.existsSync(opts.needToBreak) ? opts.needToBreak : undefined,
    taskDescription: opts.taskDescription || undefined,
    keywords: opts.keywords.length ? opts.keywords : undefined,
    turn: opts.turn,
    filterTurn: opts.filterTurn
  };

  if (!opts.noReverse && fs.existsSync(opts.reverseResult)) {
    fileOpts.reverseResultFile = opts.reverseResult;
  }

  if (opts.fHit) fileOpts.fHit = opts.fHit;
  if (opts.valueMatches !== null) fileOpts.valueMatches = opts.valueMatches;
  if (opts.anchorCandidate) fileOpts.anchorCandidate = opts.anchorCandidate;

  const result = runConfidenceUpdateFromFiles(fileOpts);
  printReport(result);

  if (!opts.dryRun) {
    fs.mkdirSync(path.dirname(opts.out), { recursive: true });
    fs.writeFileSync(opts.out, JSON.stringify(result.anchorSelection, null, 2), 'utf8');
    console.log(`\n已写入: ${opts.out}`);
  } else {
    console.log('\n(dry-run，未写入文件)');
  }
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

module.exports = { parseArgs, printReport };
