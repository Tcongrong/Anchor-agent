#!/usr/bin/env node
/**
 * 反向恢复 Anchor Candidate
 *
 * 基于因果图 G_t，从 TVN 反向遍历候选函数，LLM 批量判定锚点。
 *
 * 用法:
 *   node reverse-anchor-recovery.js --mock
 *   node reverse-anchor-recovery.js --task "寻找 search_sig" --mock
 */

const fs = require('fs');
const path = require('path');
const { runReverseAnchorRecovery, loadJson } = require('./cdp-workflow/src/modules/reverse-anchor-recovery');

const ROOT = __dirname;

const DEFAULT_TASK = "寻找控制台console.log输出的{action: 'catalog.search', search_sig: 'ss_bh9g_30'}中的ss_bh9g_30是在哪个函数生成并赋予的";

const DEFAULT_PATHS = {
  graph: path.join(ROOT, 'cdp-workflow', 'causual-graph.json'),
  funcDict: path.join(ROOT, 'function-dictionary.json'),
  out: path.join(ROOT, 'reverse-anchor-result.json'),
  history: path.join(ROOT, '.cache', 'anchor-history.json')
};

function parseArgs(argv) {
  const opts = {
    ...DEFAULT_PATHS,
    taskDescription: '',
    keywords: [],
    turn: null,
    maxDepth: 7,
    theta: 0.7,
    mock: false,
    llmResponseFile: '',
    filterTurn: false,
    noHistory: false,
    disableIsolatedPerfectScore: false,
    enablePatternC: false,
    value: '',
    valuePattern: '',
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--graph' && argv[i + 1]) opts.graph = path.resolve(argv[++i]);
    else if (arg === '--func-dict' && argv[i + 1]) opts.funcDict = path.resolve(argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.out = path.resolve(argv[++i]);
    else if (arg === '--history' && argv[i + 1]) opts.history = path.resolve(argv[++i]);
    else if (arg === '--task' && argv[i + 1]) opts.taskDescription = argv[++i];
    else if (arg === '--value' && argv[i + 1]) opts.value = argv[++i];
    else if (arg === '--value-pattern' && argv[i + 1]) opts.valuePattern = argv[++i];
    else if (arg === '--keyword' && argv[i + 1]) opts.keywords.push(argv[++i]);
    else if (arg === '--turn' && argv[i + 1]) opts.turn = Number(argv[++i]);
    else if (arg === '--max-depth' && argv[i + 1]) opts.maxDepth = Math.max(1, Number(argv[++i]) || 7);
    else if (arg === '--theta' && argv[i + 1]) opts.theta = Number(argv[++i]) || 0.7;
    else if (arg === '--llm-response-file' && argv[i + 1]) opts.llmResponseFile = path.resolve(argv[++i]);
    else if (arg === '--filter-turn') opts.filterTurn = true;
    else if (arg === '--no-history') opts.noHistory = true;
    else if (arg === '--mock') opts.mock = true;
    else if (arg === '--no-isolated-perfect-score') opts.disableIsolatedPerfectScore = true;
    else if (arg === '--pattern-c') opts.enablePatternC = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node reverse-anchor-recovery.js [选项]

基于因果图：取当前轮断点观测 → LLM 判定是否与目标值生成有关 → 有关则反向 BFS + 锚点判定。

选项:
  --graph <file>           因果图 JSON，默认 cdp-workflow/causual-graph.json
  --func-dict <file>       函数字典 JSON，默认 function-dictionary.json
  --task <text>            任务描述 d
  --value <string>         目标值参考样本
  --value-pattern <regex>  目标值形态正则（如 ^bf_[a-z0-9]{10}$）
  --turn <n>               指定轮次（默认使用图中 turn）
  --filter-turn            仅使用指定 turn 的 observation
  --max-depth <n>          向上/向下各方向最多追溯函数数与跳数，默认 7
  --theta <n>              锚点分数阈值，默认 0.7
  --no-isolated-perfect-score  关闭「孤立满分」反思（默认开启）
  --pattern-c                  启用 Pattern C（字面任务匹配）
  --history <file>         anchorHistory 持久化路径
  --no-history             不读写 anchorHistory
  --mock                   使用启发式 mock 评分（无需 API Key）
  --llm-response-file <f>  从文件读取 LLM JSON 响应
  --out <file>             输出 JSON 路径
  -h, --help               显示帮助

示例:
  node reverse-anchor-recovery.js --mock
  node reverse-anchor-recovery.js --task "寻找 search_sig 的生成函数" --turn 1 --filter-turn --mock
`);
}

function loadAnchorHistory(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return loadJson(filePath);
  } catch {
    return null;
  }
}

function printReport(result) {
  console.log('\n=== 反向恢复 Anchor Candidate ===\n');
  console.log(`轮次: ${result.turn}`);
  console.log(`任务: ${result.taskDescription}`);

  if (result.error) {
    console.log(`\n错误: ${result.error}`);
    return;
  }

  if (result.observationRelevance) {
    console.log(`\n观测相关性: ${result.observationRelevance.related ? '有关' : '无关'} (score=${result.observationRelevance.score})`);
    if (result.observationRelevance.reason) {
      console.log(`  理由: ${result.observationRelevance.reason}`);
    }
  }

  if (result.observation) {
    console.log(`\n当前观测函数: ${result.observation.functionTag}`);
    console.log(`  变量: ${result.observation.varName}`);
  }

  const rt = result.reverseTraverse;
  if (rt) {
    console.log(`\n反向遍历: 起点 ${rt.startTag}`);
    if (rt.skipped) {
      console.log(`  已跳过 BFS: ${rt.reason || '观测无关'}`);
    } else {
      console.log(`  候选函数数: ${rt.candidateCount} (maxDepth=${rt.maxDepth}, maxPerDirection=${rt.maxPerDirection ?? rt.maxDepth})`);
    }
  }

  console.log(`\n锚点候选 f*: ${result.anchorCandidate || 'None'}`);
  console.log(`阈值 theta: ${result.theta}`);

  console.log('\n候选函数评分:');
  for (const item of result.candidateScores || []) {
    const marker = item.tag === result.anchorCandidate ? ' ★' : '';
    console.log(`  ${item.score.toFixed(3)}  ${item.tag}${marker}`);
    if (item.reason) console.log(`         ${item.reason}`);
  }
}

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const taskDescription = opts.taskDescription || DEFAULT_TASK;
  const graph = loadJson(opts.graph);
  const turn = opts.turn ?? graph.turn ?? 1;

  let anchorHistory = null;
  if (!opts.noHistory) {
    anchorHistory = loadAnchorHistory(opts.history);
  }

  const result = await runReverseAnchorRecovery({
    graph,
    funcDictFile: opts.funcDict,
    taskDescription,
    turn,
    filterTurn: opts.filterTurn,
    maxDepth: opts.maxDepth,
    theta: opts.theta,
    keywords: opts.keywords.length ? opts.keywords : undefined,
    referenceValue: opts.value || null,
    valuePattern: opts.valuePattern || null,
    mock: opts.mock,
    llmResponseFile: opts.llmResponseFile || undefined,
    disableIsolatedPerfectScore: opts.disableIsolatedPerfectScore,
    enablePatternC: opts.enablePatternC,
    anchorHistory
  });

  fs.mkdirSync(path.dirname(opts.out), { recursive: true });
  fs.writeFileSync(opts.out, JSON.stringify(result, null, 2), 'utf8');

  if (!opts.noHistory && result.anchorHistory) {
    fs.mkdirSync(path.dirname(opts.history), { recursive: true });
    fs.writeFileSync(opts.history, JSON.stringify(result.anchorHistory, null, 2), 'utf8');
  }

  printReport(result);
  console.log(`\n结果已写入: ${opts.out}`);
  if (!opts.noHistory) {
    console.log(`历史已写入: ${opts.history}`);
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message || err);
    process.exit(1);
  });
}

module.exports = { parseArgs, printReport };
