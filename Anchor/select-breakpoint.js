#!/usr/bin/env node
/**
 * TC2：信息增益驱动断点选择
 *
 * 输入：anchor-selection.json、function-dictionary.json、static-call-graph.json、causual-graph.json
 * 输出：cdp-workflow/need_to_break.json
 */

const fs = require('fs');
const path = require('path');
const {
  selectInfoGainBreakpoint,
  writeResult
} = require('./cdp-workflow/src/modules/info-gain-breakpoint');

const ROOT = __dirname;

const DEFAULT_PATHS = {
  anchorSelection: path.join(ROOT, 'anchor-selection.json'),
  funcDict: path.join(ROOT, 'function-dictionary.json'),
  staticCG: path.join(ROOT, 'cdp-workflow', 'cdp-ast-output', 'static-call-graph.json'),
  causalGraph: path.join(ROOT, 'cdp-workflow', 'causual-graph.json'),
  deduped: path.join(ROOT, 'cdp-workflow', 'cdp-ast-output', 'runtime-function-logs.deduped.json'),
  cache: path.join(ROOT, '.cache', 'structural-prior-cache.json'),
  out: path.join(ROOT, 'cdp-workflow', 'need_to_break.json')
};

function parseArgs(argv) {
  const opts = {
    ...DEFAULT_PATHS,
    taskDescription: '',
    focusCount: 3,
    mock: false,
    llmResponseFile: '',
    noCache: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--anchor-selection' && argv[i + 1]) opts.anchorSelection = path.resolve(argv[++i]);
    else if (arg === '--func-dict' && argv[i + 1]) opts.funcDict = path.resolve(argv[++i]);
    else if (arg === '--static-cg' && argv[i + 1]) opts.staticCG = path.resolve(argv[++i]);
    else if (arg === '--causal-graph' && argv[i + 1]) opts.causalGraph = path.resolve(argv[++i]);
    else if (arg === '--deduped' && argv[i + 1]) opts.deduped = path.resolve(argv[++i]);
    else if (arg === '--cache' && argv[i + 1]) opts.cache = path.resolve(argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.out = path.resolve(argv[++i]);
    else if (arg === '--task' && argv[i + 1]) opts.taskDescription = argv[++i];
    else if (arg === '--focus' && argv[i + 1]) opts.focusCount = Math.max(1, Number(argv[++i]) || 3);
    else if (arg === '--llm-response-file' && argv[i + 1]) opts.llmResponseFile = path.resolve(argv[++i]);
    else if (arg === '--mock') opts.mock = true;
    else if (arg === '--no-cache') opts.noCache = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node select-breakpoint.js [选项]

TC2 信息增益驱动断点选择：基于 H_t 分布、函数字典与 LLM 预测，选择最优观测断点。

选项:
  --anchor-selection <file>   锚点选择结果（H_t），默认 anchor-selection.json
  --func-dict <file>          函数字典 FuncDict，默认 function-dictionary.json
  --static-cg <file>          静态调用图 StaticCG
  --causal-graph <file>       当前因果图 G_t（可为空）
  --deduped <file>            候选函数日志（重建分布时使用）
  --cache <file>              结构先验缓存
  --task <text>               任务描述（覆盖 anchor-selection 中的值）
  --focus <n>                 焦点函数数量，默认 3
  --out <file>                输出路径，默认 cdp-workflow/need_to_break.json
  --mock                      使用启发式 mock 代替 LLM（无需 API Key）
  --llm-response-file <file>  注入预计算的 LLM JSON 响应
  --no-cache                  重建结构先验分布时不使用缓存
  -h, --help                  显示帮助

环境变量（真实 LLM 模式）:
  OPENAI_API_KEY              API 密钥
  OPENAI_BASE_URL             API 基址（默认 https://api.openai.com/v1）
  OPENAI_MODEL                模型名（默认 gpt-4o-mini）

示例:
  node select-breakpoint.js --mock
  node select-breakpoint.js --llm-response-file ./fixtures/llm-candidates.json
`);
}

function printReport(result) {
  const sel = result.selected_breakpoint;
  console.log('\n=== TC2 信息增益断点选择 ===\n');
  console.log(`任务: ${result.taskDescription}`);
  console.log(`分布熵 H(H_t): ${result.distribution.entropy.toFixed(4)}`);
  console.log(`因果图: ${result.causalGraphSummary}`);
  console.log('\n焦点函数:');
  for (const fn of result.distribution.focusFunctions) {
    console.log(`  f${fn.rank} ${fn.functionName}  p=${fn.prob.toFixed(6)}  ${fn.sinkDistanceText}`);
  }

  console.log('\n候选评分:');
  for (const item of result.candidateScores) {
    console.log(
      `  ${item.var_name}  IG=${item.informationGain.toFixed(4)}  cost=${item.cost}  score=${item.score.toFixed(4)}`
    );
  }

  console.log('\n最优断点:');
  console.log(`  var_name: ${sel.var_name}`);
  console.log(`  function: ${sel.functionName}`);
  console.log(`  runtime_loc: line ${sel.runtime_loc?.line}, col ${sel.runtime_loc?.column}`);
  console.log(`  bundle_loc: line ${sel.location?.line}, col ${sel.location?.column}`);
  if (sel.condition) console.log(`  condition: ${sel.condition}`);
  if (result.llmResponse.reasoning) {
    console.log(`\nLLM 推理: ${result.llmResponse.reasoning}`);
  }
}

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  for (const [label, filePath] of [
    ['anchor-selection', opts.anchorSelection],
    ['func-dict', opts.funcDict],
    ['static-cg', opts.staticCG]
  ]) {
    if (!fs.existsSync(filePath)) {
      console.error(`缺少输入文件 (${label}): ${filePath}`);
      process.exit(1);
    }
  }

  const result = await selectInfoGainBreakpoint({
    anchorSelectionFile: opts.anchorSelection,
    funcDictFile: opts.funcDict,
    staticCGFile: opts.staticCG,
    causalGraphFile: opts.causalGraph,
    dedupedFile: opts.deduped,
    cacheFile: opts.noCache ? null : opts.cache,
    useCache: !opts.noCache,
    taskDescription: opts.taskDescription,
    focusCount: opts.focusCount,
    mock: opts.mock,
    llmResponseFile: opts.llmResponseFile || null
  });

  writeResult(result, opts.out);
  printReport(result);
  console.log(`\n结果已写入: ${opts.out}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(`select-breakpoint 失败: ${err.message}`);
    process.exit(1);
  });
}

module.exports = { parseArgs, printReport };
