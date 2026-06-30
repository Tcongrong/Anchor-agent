#!/usr/bin/env node
/**
 * Benchmark 批量实验：按 ID 范围依次执行
 *
 * 用法:
 *   node run-experiment-range.js --from 1 --to 10
 *   node run-experiment-range.js --from 31 --to 35 --chrome "D:\\path\\to\\chrome.exe"
 *   node run-experiment-range.js --from 1 --to 50 --continue-on-error
 */

const path = require('path');
const { DEFAULTS, runSingleExperiment } = require('./run-experiment');
const { resolveBenchmarkRoot, getBenchmarkById } = require('./lib/benchmark-registry');

const ROOT = path.join(__dirname);

function parseArgs(argv) {
  const opts = {
    ...DEFAULTS,
    from: 0,
    to: 0,
    url: '',
    continueOnError: false,
    skipServe: false,
    skipPreprocess: false,
    skipAgent: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--from' && argv[i + 1]) opts.from = Number(argv[++i]);
    else if (arg === '--to' && argv[i + 1]) opts.to = Number(argv[++i]);
    else if (arg === '--url' && argv[i + 1]) opts.url = argv[++i];
    else if (arg === '--chrome' && argv[i + 1]) opts.chromePath = argv[++i];
    else if (arg === '--output-dir' && argv[i + 1]) opts.outputDir = path.resolve(argv[++i]);
    else if (arg === '--benchmark-dir' && argv[i + 1]) {
      opts.benchmarkRoot = resolveBenchmarkRoot(argv[++i]);
    }
    else if (arg === '--serve-port' && argv[i + 1]) opts.servePort = Number(argv[++i]) || DEFAULTS.servePort;
    else if (arg === '--port' && argv[i + 1]) opts.cdpPort = Number(argv[++i]) || DEFAULTS.cdpPort;
    else if (arg === '--host' && argv[i + 1]) opts.cdpHost = argv[++i];
    else if (arg === '--continue-on-error') opts.continueOnError = true;
    else if (arg === '--skip-serve') opts.skipServe = true;
    else if (arg === '--skip-preprocess') opts.skipPreprocess = true;
    else if (arg === '--skip-agent') opts.skipAgent = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node run-experiment-range.js --from <n> --to <n> [选项]

按 ID 范围依次执行 benchmark 实验（含 from、to，均为 1~50）。

选项:
  --from <n>            起始 ID（含）
  --to <n>              结束 ID（含）
  --continue-on-error   某个实验失败后继续执行后续 ID
  --url <url>           配合 --skip-serve 使用
  --chrome <path>       Chrome 可执行文件路径
  --output-dir <dir>    结果保存目录，默认 result_glm/
  --benchmark-dir <dir> benchmark case 根目录，默认 benchmark/（或 ANCHOR_BENCHMARK_DIR）
  --serve-port <n>      npm run serve 起始端口，默认 4173
  --port / --host       CDP 调试端口与主机
  --skip-serve          不启动 serve（需配合 --url）
  --skip-preprocess     跳过预处理
  --skip-agent          仅预处理，不运行 Agent
  -h, --help            显示帮助

示例:
  node run-experiment-range.js --from 1 --to 10
  node run-experiment-range.js --from 25 --to 30 --continue-on-error
  node run-experiment-range.js --from 1 --to 5 --benchmark-dir "D:\\Projects\\Anchor\\anchor-benchmark-docker\\anchor-benchmark\\benchmark_cases"
`);
}

function validateRange(from, to) {
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    throw new Error('--from 与 --to 必须为整数');
  }
  if (from < 1 || to > 50 || from > to) {
    throw new Error('--from / --to 须满足 1 <= from <= to <= 50');
  }
}

function printSummary(results, startedAt) {
  const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1);
  const succeeded = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);

  console.log('\n========== 批量实验汇总 ==========');
  console.log(`范围: ${results[0]?.id} ~ ${results[results.length - 1]?.id}`);
  console.log(`总计: ${results.length}，成功: ${succeeded.length}，失败: ${failed.length}`);
  console.log(`总耗时: ${elapsedSec}s`);

  if (succeeded.length) {
    console.log('\n成功:');
    for (const item of succeeded) {
      console.log(`  [${item.id}] ${item.label} ${item.name} (${item.elapsedSec}s)`);
    }
  }

  if (failed.length) {
    console.log('\n失败:');
    for (const item of failed) {
      console.log(`  [${item.id}] ${item.label} ${item.name}`);
      console.log(`    原因: ${item.error}`);
    }
  }
}

async function main() {
  const opts = parseArgs(process.argv);

  if (opts.help) {
    printHelp();
    return;
  }

  if (!opts.from || !opts.to) {
    console.error('错误: 请指定 --from 与 --to');
    printHelp();
    process.exit(1);
  }

  try {
    validateRange(opts.from, opts.to);
  } catch (err) {
    console.error(`错误: ${err.message}`);
    process.exit(1);
  }

  if (opts.skipServe && !opts.url) {
    console.error('错误: 批量模式下使用 --skip-serve 时必须指定 --url');
    process.exit(1);
  }

  const ids = [];
  for (let id = opts.from; id <= opts.to; id += 1) ids.push(id);

  console.log('========== Benchmark 批量实验 ==========');
  console.log(`范围: ${opts.from} ~ ${opts.to}（共 ${ids.length} 个）`);
  console.log(`Benchmark 根目录: ${opts.benchmarkRoot}`);
  console.log(`结果目录: ${path.relative(ROOT, opts.outputDir)}`);
  if (opts.continueOnError) console.log('模式: 失败后继续');

  const startedAt = Date.now();
  const results = [];

  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    console.log(`\n${'='.repeat(60)}`);
    console.log(`进度: ${i + 1}/${ids.length}  (ID ${id})`);
    console.log('='.repeat(60));

    try {
      const result = await runSingleExperiment({ ...opts, id });
      results.push(result);
    } catch (err) {
      const message = err.message || String(err);
      let label = '?';
      let name = '?';
      try {
        const benchmark = getBenchmarkById(id, { benchmarkRoot: opts.benchmarkRoot });
        label = benchmark.label;
        name = benchmark.name;
      } catch {
        // ignore lookup failure
      }
      results.push({
        id,
        label,
        name,
        ok: false,
        error: message
      });
      console.error(`\n✗ ID ${id} 失败: ${message}`);

      if (!opts.continueOnError) {
        printSummary(results, startedAt);
        process.exit(1);
      }
    }
  }

  printSummary(results, startedAt);

  if (results.some((r) => !r.ok)) {
    process.exit(1);
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('\n批量实验失败:', err.message || err);
      process.exit(1);
    });
}

module.exports = { parseArgs, validateRange };
