#!/usr/bin/env node
/**
 * 数据预处理一键入口
 *
 * 按「执行的命令顺序」串联：
 *   1. 启动 Chrome（远程调试）
 *   2. ast export → inject-fetch → collect-console（并行 browser-automation）
 *   3. ast dedupe-logs → graph static → build-function-dictionary
 *
 * 用法:
 *   node run-preprocess.js --url http://127.0.0.1:4173/
 *   node run-preprocess.js --url https://example.com --no-launch-chrome
 */

const path = require('path');
const { spawn, spawnSync } = require('child_process');
const { waitForDebugPort } = require('./browser-automation');

const ROOT = __dirname;
const CDP_WORKFLOW = path.join(ROOT, 'cdp-workflow');
const CLI = path.join(CDP_WORKFLOW, 'bin', 'cli.js');
const BROWSER_AUTOMATION = path.join(ROOT, 'browser-automation.js');
const BUILD_DICTIONARY = path.join(ROOT, 'build-function-dictionary.js');

const DEFAULTS = {
  chromePath: 'D:\\Projects\\debug_tool\\CDP\\chrome-win64\\chrome.exe',
  port: 9222,
  host: 'localhost',
  launchChrome: true,
  exportCollectMs: 5000,
  injectWatchMs: 5000,
  consoleWatchMs: 10000,
  automationSettleMs: 2000,
  chromeReadyTimeoutMs: 15000
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const opts = { ...DEFAULTS, url: '', help: false };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--url' && argv[i + 1]) opts.url = argv[++i];
    else if (arg === '--chrome' && argv[i + 1]) opts.chromePath = argv[++i];
    else if (arg === '--port' && argv[i + 1]) opts.port = Number(argv[++i]) || DEFAULTS.port;
    else if (arg === '--host' && argv[i + 1]) opts.host = argv[++i];
    else if (arg === '--no-launch-chrome') opts.launchChrome = false;
    else if (arg === '--export-collect-ms' && argv[i + 1]) {
      opts.exportCollectMs = Math.max(0, Number(argv[++i]) || DEFAULTS.exportCollectMs);
    } else if (arg === '--inject-watch-ms' && argv[i + 1]) {
      opts.injectWatchMs = Math.max(0, Number(argv[++i]) || DEFAULTS.injectWatchMs);
    } else if (arg === '--console-watch-ms' && argv[i + 1]) {
      opts.consoleWatchMs = Math.max(0, Number(argv[++i]) || DEFAULTS.consoleWatchMs);
    } else if (arg === '--automation-settle-ms' && argv[i + 1]) {
      opts.automationSettleMs = Math.max(0, Number(argv[++i]) || DEFAULTS.automationSettleMs);
    } else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node run-preprocess.js --url <url> [选项]

一键执行数据预处理流水线（AST 导出、插桩、日志采集、去重、静态图、函数字典）。

选项:
  --url <url>                 目标页面 URL（必填）
  --chrome <path>             Chrome 可执行文件路径
  --port <n>                  远程调试端口，默认 ${DEFAULTS.port}
  --host <host>               调试主机，默认 ${DEFAULTS.host}
  --no-launch-chrome          不启动 Chrome（假定已手动开启远程调试）
  --export-collect-ms <ms>    ast export 动态脚本预热时长，默认 ${DEFAULTS.exportCollectMs}
  --inject-watch-ms <ms>      inject-fetch 监听时长，默认 ${DEFAULTS.injectWatchMs}
  --console-watch-ms <ms>     collect-console 监听时长，默认 ${DEFAULTS.consoleWatchMs}
  --automation-settle-ms <ms> 监听器就绪后再触发自动化的等待，默认 ${DEFAULTS.automationSettleMs}
  -h, --help                  显示帮助

示例:
  node run-preprocess.js --url http://127.0.0.1:4173/
  node run-preprocess.js --url https://example.com --no-launch-chrome
`);
}

function runCli(args, label) {
  console.log(`\n▶ ${label}`);
  console.log(`  node bin/cli.js ${args.join(' ')}`);

  const result = spawnSync(process.execPath, [CLI, ...args], {
    cwd: CDP_WORKFLOW,
    stdio: 'inherit',
    env: process.env
  });

  if (result.status !== 0) {
    throw new Error(`${label} 失败，退出码 ${result.status ?? 'unknown'}`);
  }
}

function runNodeScript(scriptPath, args, label, cwd = ROOT) {
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

function launchChrome(opts) {
  const args = [
    `--remote-debugging-port=${opts.port}`,
    '--remote-allow-origins=*',
    opts.url
  ];

  console.log(`\n▶ 启动 Chrome`);
  console.log(`  路径: ${opts.chromePath}`);
  console.log(`  URL: ${opts.url}`);
  console.log(`  调试端口: ${opts.port}`);

  const child = spawn(opts.chromePath, args, {
    detached: true,
    stdio: 'ignore',
    windowsHide: false
  });

  child.on('error', (err) => {
    throw new Error(`启动 Chrome 失败: ${err.message}`);
  });

  child.unref();
}

function waitForChild(proc, label) {
  return new Promise((resolve, reject) => {
    proc.on('error', (err) => reject(new Error(`${label} 启动失败: ${err.message}`)));
    proc.on('close', (code) => resolve(code ?? 1));
  });
}

async function runCollectConsoleWithAutomation(opts) {
  const label = 'ast collect-console + browser-automation';
  console.log(`\n▶ ${label}`);
  console.log(`  node bin/cli.js ast collect-console --watch-ms ${opts.consoleWatchMs}`);
  console.log(`  node browser-automation.js --url ${opts.url} --no-launch`);

  const collectProc = spawn(process.execPath, [
    CLI,
    '--host', opts.host,
    '--port', String(opts.port),
    'ast', 'collect-console',
    '--watch-ms', String(opts.consoleWatchMs)
  ], {
    cwd: CDP_WORKFLOW,
    stdio: 'inherit',
    env: process.env
  });

  await sleep(opts.automationSettleMs);

  const autoProc = spawn(process.execPath, [
    BROWSER_AUTOMATION,
    '--url', opts.url,
    '--no-launch',
    '--port', String(opts.port),
    '--host', opts.host
  ], {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env
  });

  const [collectCode, autoCode] = await Promise.all([
    waitForChild(collectProc, 'collect-console'),
    waitForChild(autoProc, 'browser-automation')
  ]);

  if (collectCode !== 0) {
    throw new Error(`collect-console 失败，退出码 ${collectCode}`);
  }
  if (autoCode !== 0) {
    throw new Error(`browser-automation 失败，退出码 ${autoCode}`);
  }
}

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    return;
  }

  if (!opts.url) {
    console.error('错误: 必须指定 --url');
    printHelp();
    process.exit(1);
  }

  const startedAt = Date.now();
  console.log('========== 数据预处理（一键） ==========');
  console.log(`目标 URL: ${opts.url}`);

  if (opts.launchChrome) {
    launchChrome(opts);
    await waitForDebugPort(opts.host, opts.port, opts.chromeReadyTimeoutMs);
    await sleep(800);
  } else {
    console.log('\n▶ 跳过 Chrome 启动，等待已有调试端口...');
    await waitForDebugPort(opts.host, opts.port, opts.chromeReadyTimeoutMs);
  }

  const cdpGlobalArgs = ['--host', opts.host, '--port', String(opts.port)];

  runCli([
    ...cdpGlobalArgs,
    'ast', 'export',
    '--reload-before-collect',
    '--collect-ms', String(opts.exportCollectMs)
  ], 'ast export');

  runCli([
    ...cdpGlobalArgs,
    'ast', 'inject-fetch',
    '--watch-ms', String(opts.injectWatchMs)
  ], 'ast inject-fetch');

  await runCollectConsoleWithAutomation(opts);

  runCli(['ast', 'dedupe-logs'], 'ast dedupe-logs');
  runCli(['graph', 'static'], 'graph static');
  runNodeScript(BUILD_DICTIONARY, [], 'build-function-dictionary');

  const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log('\n========== 预处理完成 ==========');
  console.log(`耗时: ${elapsedSec}s`);
  console.log('产物:');
  console.log('  cdp-workflow/cdp-ast-output/runtime-function-logs.deduped.json');
  console.log('  cdp-workflow/cdp-ast-output/static-call-graph.json');
  console.log('  function-dictionary.json');
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('\n预处理失败:', err.message || err);
      process.exit(1);
    });
}

module.exports = { parseArgs, runCollectConsoleWithAutomation };
