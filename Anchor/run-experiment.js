#!/usr/bin/env node
/**
 * Benchmark 实验一键自动化
 *
 * 给定 ID（1~50），自动完成：
 *   1. 在 benchmark/<case>/agent_hidden 启动 npm run serve
 *   2. 复制 auto/<case>.js → browser-automation.js
 *   3. node run-preprocess.js --url <url>
 *   4. 刷新浏览器页面
 *   5. node main.js …（对应 benchmark 任务）
 *   6. 保存 anchor-agent-result.json → result_glm/<label>.json
 *   7. 清理 cdp-workflow/cdp-ast-output/asts/
 *   8. 关闭 Chrome 浏览器窗口
 *
 * 用法:
 *   node run-experiment.js --id 1
 *   node run-experiment.js --id 25 --chrome "D:\\path\\to\\chrome.exe"
 *   node run-experiment.js --list
 *   node run-experiment.js --id 2 --skip-serve --url http://127.0.0.1:4173/
 *   node run-experiment.js --id 1 --benchmark-dir "D:\\path\\to\\benchmark_cases"
 *
 * 批量实验见 run-experiment-range.js
 */

const fs = require('fs');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
const {
  ROOT,
  ASTS_DIR,
  AGENT_RESULT,
  resolveBenchmarkRoot,
  getBenchmarkById,
  listBenchmarks,
  buildMainArgs
} = require('./lib/benchmark-registry');
const { connectPage, waitForDebugPort } = require('./browser-automation');
const { closeBrowser } = require('./lib/close-browser');

const DEFAULTS = {
  chromePath: 'D:\\Projects\\debug_tool\\CDP\\chrome-win64\\chrome.exe',
  outputDir: path.join(ROOT, 'result_glm'),
  benchmarkRoot: resolveBenchmarkRoot(process.env.ANCHOR_BENCHMARK_DIR),
  servePort: 4173,
  cdpPort: 9222,
  cdpHost: 'localhost',
  serveReadyTimeoutMs: 30000,
  refreshSettleMs: 1500
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const opts = {
    ...DEFAULTS,
    id: 0,
    url: '',
    list: false,
    skipServe: false,
    skipPreprocess: false,
    skipAgent: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--id' && argv[i + 1]) opts.id = Number(argv[++i]);
    else if (arg === '--url' && argv[i + 1]) opts.url = argv[++i];
    else if (arg === '--chrome' && argv[i + 1]) opts.chromePath = argv[++i];
    else if (arg === '--output-dir' && argv[i + 1]) opts.outputDir = path.resolve(argv[++i]);
    else if (arg === '--benchmark-dir' && argv[i + 1]) {
      opts.benchmarkRoot = resolveBenchmarkRoot(argv[++i]);
    }
    else if (arg === '--serve-port' && argv[i + 1]) opts.servePort = Number(argv[++i]) || DEFAULTS.servePort;
    else if (arg === '--port' && argv[i + 1]) opts.cdpPort = Number(argv[++i]) || DEFAULTS.cdpPort;
    else if (arg === '--host' && argv[i + 1]) opts.cdpHost = argv[++i];
    else if (arg === '--list') opts.list = true;
    else if (arg === '--skip-serve') opts.skipServe = true;
    else if (arg === '--skip-preprocess') opts.skipPreprocess = true;
    else if (arg === '--skip-agent') opts.skipAgent = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node run-experiment.js --id <1-50> [选项]

选项:
  --id <n>              Benchmark ID（1=case001_browser_fingerprint, 50=case010_type_array_transformation）
  --list                列出全部 50 个 benchmark
  --url <url>           跳过 serve 时手动指定页面 URL
  --chrome <path>       Chrome 可执行文件路径
  --output-dir <dir>    结果保存目录，默认 result_glm/
  --benchmark-dir <dir> benchmark case 根目录，默认 benchmark/（或 ANCHOR_BENCHMARK_DIR）
  --serve-port <n>      npm run serve 起始端口，默认 4173
  --port / --host       CDP 调试端口与主机，默认 localhost:9222
  --skip-serve          不启动 serve（需配合 --url）
  --skip-preprocess     跳过预处理
  --skip-agent          仅预处理，不运行 Agent
  -h, --help            显示帮助

示例:
  node run-experiment.js --id 1
  node run-experiment.js --id 2 --skip-serve --url http://127.0.0.1:4191/
  node run-experiment.js --id 1 --benchmark-dir "D:\\Projects\\Anchor\\anchor-benchmark-docker\\anchor-benchmark\\benchmark_cases"
`);
}

function printBenchmarkList(benchmarkRoot) {
  console.log('Benchmark 列表 (ID → case 名称):\n');
  console.log(`Benchmark 根目录: ${benchmarkRoot}\n`);
  for (const item of listBenchmarks({ benchmarkRoot })) {
    console.log(`  ${String(item.id).padStart(2)}  ${item.label.padEnd(5)}  ${item.name}`);
  }
}

function runNode(scriptPath, args, label, cwd = ROOT) {
  console.log(`\n▶ ${label}`);
  console.log(`  node ${path.relative(ROOT, scriptPath)} ${args.join(' ')}`);

  const result = spawnSync(process.execPath, [scriptPath, ...args], {
    cwd,
    stdio: 'inherit',
    env: process.env
  });

  if (result.status !== 0) {
    throw new Error(`${label} 失败，退出码 ${result.status ?? 'unknown'}`);
  }
}

function copyAutomationScript(benchmark) {
  if (!fs.existsSync(benchmark.autoScript)) {
    throw new Error(`未找到自动化脚本: ${benchmark.autoScript}`);
  }

  const dest = path.join(ROOT, 'browser-automation.js');
  fs.copyFileSync(benchmark.autoScript, dest);
  console.log(`\n▶ 已复制自动化脚本`);
  console.log(`  ${path.relative(ROOT, benchmark.autoScript)} → browser-automation.js`);
}

function startServe(agentHiddenDir, port, timeoutMs) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path.join(agentHiddenDir, 'package.json'))) {
      reject(new Error(`未找到 agent_hidden: ${agentHiddenDir}`));
      return;
    }

    console.log(`\n▶ 启动 benchmark 服务`);
    console.log(`  目录: ${agentHiddenDir}`);
    console.log(`  命令: npm run serve (PORT=${port})`);

    const proc = spawn('npm', ['run', 'serve'], {
      cwd: agentHiddenDir,
      env: { ...process.env, PORT: String(port) },
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true
    });

    let url = null;
    let settled = false;

    const tryResolve = () => {
      if (settled || !url) return;
      settled = true;
      clearTimeout(timer);
      resolve({ proc, url });
    };

    const onData = (chunk) => {
      const text = chunk.toString();
      process.stdout.write(text);
      const match = text.match(/https?:\/\/127\.0\.0\.1:\d+\/?/);
      if (match) {
        url = match[0].endsWith('/') ? match[0] : `${match[0]}/`;
        tryResolve();
      }
    };

    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', (err) => {
      if (!settled) reject(err);
    });
    proc.on('exit', (code) => {
      if (!settled) {
        settled = true;
        reject(new Error(`serve 进程意外退出，码 ${code ?? 'unknown'}`));
      }
    });

    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        proc.kill();
        reject(new Error(`等待 serve URL 超时 (${timeoutMs}ms)`));
      }
    }, timeoutMs);
  });
}

async function refreshBrowserPage(opts) {
  console.log('\n▶ 刷新浏览器页面');

  await waitForDebugPort(opts.cdpHost, opts.cdpPort, 15000);

  const client = await connectPage({
    host: opts.cdpHost,
    port: opts.cdpPort,
    url: opts.url
  });

  try {
    const loaded = new Promise((resolve) => {
      client.Page.loadEventFired(resolve);
    });
    await client.Page.reload({ ignoreCache: true });
    await loaded;
    await sleep(opts.refreshSettleMs);
    console.log('  页面已刷新');
  } finally {
    try {
      await client.close();
    } catch {
      // ignore
    }
  }
}

function cleanupAsts() {
  if (!fs.existsSync(ASTS_DIR)) {
    console.log('\n▶ AST 目录不存在，跳过清理');
    return;
  }

  const entries = fs.readdirSync(ASTS_DIR);
  for (const name of entries) {
    fs.rmSync(path.join(ASTS_DIR, name), { recursive: true, force: true });
  }
  console.log(`\n▶ 已清理 AST 目录 (${entries.length} 项): ${path.relative(ROOT, ASTS_DIR)}`);
}

function saveResult(label, outputDir) {
  if (!fs.existsSync(AGENT_RESULT)) {
    throw new Error(`未找到 Agent 结果: ${AGENT_RESULT}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const dest = path.join(outputDir, `${label}.json`);
  fs.copyFileSync(AGENT_RESULT, dest);
  console.log(`\n▶ 结果已保存: ${path.relative(ROOT, dest)}`);
  return dest;
}

function killProcessTree(proc) {
  if (!proc || proc.killed) return;
  try {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(proc.pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      proc.kill('SIGTERM');
    }
  } catch {
    // ignore
  }
}

async function runSingleExperiment(opts) {
  const benchmark = getBenchmarkById(opts.id, { benchmarkRoot: opts.benchmarkRoot });
  let serveProc = null;
  let browserUrl = opts.url;

  console.log('========== Benchmark 实验 ==========');
  console.log(`ID: ${benchmark.id} (${benchmark.label})`);
  console.log(`Case: ${benchmark.name}`);
  console.log(`Serve 目录: ${benchmark.agentHiddenDir}`);

  const startedAt = Date.now();

  try {
    if (!opts.skipServe) {
      const served = await startServe(
        benchmark.agentHiddenDir,
        opts.servePort,
        opts.serveReadyTimeoutMs
      );
      serveProc = served.proc;
      browserUrl = served.url;
    } else if (!browserUrl) {
      throw new Error('使用 --skip-serve 时必须指定 --url');
    }

    console.log(`\n页面 URL: ${browserUrl}`);

    copyAutomationScript(benchmark);

    if (!opts.skipPreprocess) {
      runNode(
        path.join(ROOT, 'run-preprocess.js'),
        ['--url', browserUrl, '--chrome', opts.chromePath, '--port', String(opts.cdpPort), '--host', opts.cdpHost],
        '数据预处理'
      );

      await refreshBrowserPage({ ...opts, url: browserUrl });
    }

    if (!opts.skipAgent) {
      const mainArgs = buildMainArgs(benchmark, browserUrl);
      runNode(path.join(ROOT, 'main.js'), mainArgs, 'Anchor Agent');

      saveResult(benchmark.label, opts.outputDir);
      cleanupAsts();
    }

    const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1);
    console.log('\n========== 实验完成 ==========');
    console.log(`Benchmark: ${benchmark.name} (${benchmark.label})`);
    console.log(`耗时: ${elapsedSec}s`);

    return {
      id: benchmark.id,
      label: benchmark.label,
      name: benchmark.name,
      ok: true,
      elapsedSec: Number(elapsedSec),
      resultPath: opts.skipAgent ? null : path.join(opts.outputDir, `${benchmark.label}.json`)
    };
  } finally {
    await closeBrowser({ host: opts.cdpHost, port: opts.cdpPort });

    if (serveProc) {
      console.log('\n▶ 停止 benchmark 服务');
      killProcessTree(serveProc);
    }
  }
}

async function main() {
  const opts = parseArgs(process.argv);

  if (opts.help) {
    printHelp();
    return;
  }

  if (opts.list) {
    printBenchmarkList(opts.benchmarkRoot);
    return;
  }

  if (!opts.id || opts.id < 1 || opts.id > 50) {
    console.error('错误: 请指定 --id 1~50');
    printHelp();
    process.exit(1);
  }

  try {
    await runSingleExperiment(opts);
  } catch (err) {
    throw err;
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('\n实验失败:', err.message || err);
      process.exit(1);
    });
}

module.exports = {
  parseArgs,
  refreshBrowserPage,
  cleanupAsts,
  saveResult,
  runSingleExperiment,
  closeBrowser,
  DEFAULTS
};
