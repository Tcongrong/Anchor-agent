#!/usr/bin/env node
/**
 * 断点观测自动化脚本
 *
 * 流程（单次 Chrome 连接，避免重复初始化）：
 *   1. 清空断点（内存 + .cdp-breakpoints.json + 浏览器）
 *   2. 从 need_to_break.json 写入并下发断点
 *   3. 等待页面触发首次断点
 *   4. 命中 → eval → continue (c)；若再次命中则继续 eval 记录
 *   5. continue 后若无新断点 → 立即 quit (q) 退出
 *
 * 用法（在项目根目录 Anchor/ 下）：
 *   node collect-breakpoint-observations.js
 *   node collect-breakpoint-observations.js --input-file ./cdp-workflow/need_to_break.json
 *   node collect-breakpoint-observations.js --out ./cdp-workflow/breakpoint-observations.json
 *   node collect-breakpoint-observations.js --graph-build
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { runAutomationOnClient } = require('./browser-automation');

const ROOT = __dirname;
const CDP_WORKFLOW = path.join(ROOT, 'cdp-workflow');
const CLI = path.join(CDP_WORKFLOW, 'bin', 'cli.js');

const ConnectionManager = require('./cdp-workflow/src/modules/connection-manager');
const FileViewer = require('./cdp-workflow/src/modules/file-viewer');
const Debugger = require('./cdp-workflow/src/modules/debugger');
const BreakpointExitCommand = require('./cdp-workflow/src/commands/breakpoint-exit');
const { updateCausalGraphFromFiles } = require('./cdp-workflow/src/modules/causal-graph-updater');
const { summarizeCausalGraph } = require('./cdp-workflow/src/modules/info-gain-breakpoint/context');

const DEFAULT_PATHS = {
  inputFile: path.join(CDP_WORKFLOW, 'need_to_break.json'),
  outFile: path.join(CDP_WORKFLOW, 'breakpoint-observations.json'),
  anchorOut: path.join(CDP_WORKFLOW, 'anchor-snapshots.jsonl'),
  causalGraph: path.join(CDP_WORKFLOW, 'causual-graph.json'),
  logs: path.join(CDP_WORKFLOW, 'cdp-ast-output', 'runtime-function-logs.deduped.json')
};

function parseArgs(argv) {
  const opts = {
    inputFile: DEFAULT_PATHS.inputFile,
    outFile: DEFAULT_PATHS.outFile,
    anchorOut: DEFAULT_PATHS.anchorOut,
    initialIdleMs: 8000,
    readyMs: 0,
    graphBuild: false,
  updateCausalGraph: true,
    host: 'localhost',
    port: '9222',
    target: '',
    interactionMode: 'manual',
    browserUrl: '',
    automationGraceMs: 20000,
    breakpointBindMs: 0,
    automationListenSettleMs: 300,
    automationReload: false,
    help: false
  };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--input-file' && argv[i + 1]) opts.inputFile = path.resolve(ROOT, argv[++i]);
    else if (arg === '--out' && argv[i + 1]) opts.outFile = path.resolve(ROOT, argv[++i]);
    else if (arg === '--anchor-out' && argv[i + 1]) opts.anchorOut = path.resolve(ROOT, argv[++i]);
    else if (arg === '--initial-idle-ms' && argv[i + 1]) {
      opts.initialIdleMs = Math.max(1000, Number(argv[++i]) || 8000);
    } else if (arg === '--ready-ms' && argv[i + 1]) opts.readyMs = Math.max(0, Number(argv[++i]) || 0);
    else if (arg === '--graph-build') opts.graphBuild = true;
    else if (arg === '--no-causal-update') opts.updateCausalGraph = false;
    else if (arg === '--host' && argv[i + 1]) opts.host = argv[++i];
    else if ((arg === '-h' || arg === '-p' || arg === '-t') && argv[i + 1] && !argv[i + 1].startsWith('-')) {
      if (arg === '-h') opts.host = argv[++i];
      else if (arg === '-p') opts.port = argv[++i];
      else opts.target = argv[++i];
    } else if (arg === '--port' && argv[i + 1]) opts.port = argv[++i];
    else if (arg === '--target' && argv[i + 1]) opts.target = argv[++i];
    else if (arg === '--browser-url' && argv[i + 1]) opts.browserUrl = argv[++i];
    else if (arg === '--auto') opts.interactionMode = 'auto';
    else if (arg === '--interaction-mode' && argv[i + 1]) {
      const mode = argv[++i];
      if (mode === 'auto' || mode === 'manual') opts.interactionMode = mode;
    }
    else if (arg === '--automation-grace-ms' && argv[i + 1]) {
      opts.automationGraceMs = Math.max(0, Number(argv[++i]) || 20000);
    }
    else if (arg === '--breakpoint-bind-ms' && argv[i + 1]) {
      opts.breakpointBindMs = Math.max(0, Number(argv[++i]) || 0);
    }
    else if (arg === '--automation-listen-settle-ms' && argv[i + 1]) {
      opts.automationListenSettleMs = Math.max(0, Number(argv[++i]) || 300);
    }
    else if (arg === '--automation-reload') opts.automationReload = true;
    else if (arg === '--help') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node collect-breakpoint-observations.js [选项]

选项:
  --input-file <path>   断点任务 JSON（默认 cdp-workflow/need_to_break.json）
  --out <path>          观测结果输出（默认 cdp-workflow/breakpoint-observations.json）
  --anchor-out <path>   ANCHOR 快照路径（默认 cdp-workflow/anchor-snapshots.jsonl）
  --initial-idle-ms <ms>      首次断点等待超时（默认 8000）
  --ready-ms <ms>             启动后额外等待（默认 0，不等待）
  --graph-build               会话结束后运行 graph build
  --no-causal-update          跳过因果图 G_t 更新
  --host <host>         Chrome 调试主机（默认 localhost）
  --port <port>         Chrome 调试端口（默认 9222）
  --target <target>     目标页面 URL 或标题
  --auto                自动模式：复用主 CDP 会话执行 browser-automation 页面操作
  --interaction-mode <manual|auto>
  --browser-url <url>   自动化脚本目标页面（--url）
  --automation-grace-ms <ms>  自动模式下首次断点等待下限（默认 20000）
  --breakpoint-bind-ms <ms>   下发断点后、进入等待前的绑定稳定时间（默认 0）
  --automation-listen-settle-ms <ms>  监听器挂载后、启动自动化前的短缓冲（默认 300）
  --automation-reload         自动化前强制刷新（会使 bundle 断点失效，慎用）
  --help                显示帮助
`);
}

function runCli(args, label) {
  console.log(`\n▶ ${label}`);
  console.log(`  node cdp-workflow/bin/cli.js ${args.join(' ')}`);

  const result = spawnSync(process.execPath, [CLI, ...args], {
    cwd: CDP_WORKFLOW,
    stdio: 'inherit',
    env: process.env
  });

  if (result.status !== 0) {
    throw new Error(`${label} 失败，退出码 ${result.status ?? 'unknown'}`);
  }
}

function loadVarNameMap(inputFile) {
  const map = new Map();

  if (!fs.existsSync(inputFile)) {
    return map;
  }

  try {
    const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

    if (data.selected_breakpoint) {
      const sel = data.selected_breakpoint;
      const tag = sel.tag || sel.function_tag;
      if (tag) {
        map.set(tag, sel.var_name || sel.text || 'value');
      }
    }

    if (Array.isArray(data.breakpointTasks)) {
      for (const task of data.breakpointTasks) {
        if (task.tag) {
          map.set(task.tag, task.var_name || task.text || 'value');
        }
      }
    }
  } catch (error) {
    console.warn(`⚠️  无法解析 var_name 映射: ${error.message}`);
  }

  return map;
}

function saveObservations(outFile, observations) {
  const dir = path.dirname(outFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outFile, `${JSON.stringify(observations, null, 2)}\n`, 'utf8');
}

function toJsonSafeValue(debuggerModule, value, depth = 0) {
  if (value === null || value === undefined) {
    return value;
  }

  const t = typeof value;
  if (t === 'string' || t === 'number' || t === 'boolean') {
    return value;
  }

  if (t === 'bigint') {
    return String(value);
  }

  if (t === 'function') {
    return debuggerModule.formatDisplayValue(value);
  }

  if (Array.isArray(value)) {
    if (depth >= 3) {
      return debuggerModule.formatDisplayValue(value);
    }
    return value.map((item) => toJsonSafeValue(debuggerModule, item, depth + 1));
  }

  if (t === 'object') {
    if (value.type && (value.description || value.preview || value.value !== undefined)) {
      if (value.type === 'string' && value.value !== undefined) return value.value;
      if (value.type === 'number' && value.value !== undefined) return value.value;
      if (value.type === 'boolean' && value.value !== undefined) return value.value;
    }

    const keys = Object.keys(value);
    if (depth >= 3 || keys.length > 50) {
      return debuggerModule.formatDisplayValue(value);
    }

    const out = {};
    for (const key of keys) {
      out[key] = toJsonSafeValue(debuggerModule, value[key], depth + 1);
    }
    return out;
  }

  return String(value);
}

function resolveVarName(event, varNameMap) {
  if (event.tag && varNameMap.has(event.tag)) {
    return varNameMap.get(event.tag);
  }
  if (event.text) {
    return event.text;
  }
  return 'value';
}

function resetAnchorOut(anchorOut) {
  const dir = path.dirname(anchorOut);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(anchorOut, '', 'utf8');
}

async function appendAnchorSnapshot(debuggerModule, event, anchorOut) {
  try {
    const tuple = await debuggerModule.collectAnchorTuple(event);
    const payload = {
      capturedAt: new Date().toISOString(),
      breakpoint: {
        url: event.url,
        line: event.lineNumber,
        tag: event.tag,
        text: event.text
      },
      anchor: tuple
    };
    fs.appendFileSync(anchorOut, `${JSON.stringify(payload)}\n`, 'utf8');
  } catch (error) {
    console.error(`❌ ANCHOR 采集失败: ${error.message}`);
  }
}

function isInjectedClickPause(event) {
  const firstFrame = event.callFrames && event.callFrames[0];
  if (!firstFrame) {
    return false;
  }
  const name = firstFrame.functionName || '';
  return name === '__cdpClickHandler' || name === 'window.__cdpClickHandler';
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resolveFirstIdleMs(options) {
  if (options.interactionMode !== 'auto') {
    return options.initialIdleMs;
  }
  return Math.max(options.initialIdleMs, options.automationGraceMs ?? 20000);
}

/**
 * 监听器就绪后，在同一 CDP 会话中触发页面操作（避免子进程第二条连接抢不走 Debugger.paused）
 * @param {object} options
 * @param {import('./cdp-workflow/src/modules/connection-manager')} connectionManager
 */
async function launchPageAutomationWhenListening(options, connectionManager) {
  if (options.interactionMode !== 'auto') {
    return false;
  }

  const settleMs = options.automationListenSettleMs ?? 300;
  if (settleMs > 0) {
    await sleep(settleMs);
  }

  const client = connectionManager.getClient();
  if (!client) {
    throw new Error('CDP 客户端未就绪，无法执行页面自动化');
  }

  const browserUrl = options.browserUrl || options.target || 'http://127.0.0.1:4173/';

  console.log('\n🤖 复用主进程 CDP 会话执行页面自动化（保证断点事件送达同一调试器）');

  return runAutomationOnClient(client, {
    url: browserUrl,
    forceReload: options.automationReload === true
  });
}

/**
 * 观测结束后等待页面自动化收尾，避免先 disconnect 导致 WebSocket connection closed
 * @param {Promise<void>|null} automationPromise
 * @param {import('./cdp-workflow/src/modules/debugger')} debuggerModule
 * @param {number} [timeoutMs]
 */
async function drainPageAutomation(automationPromise, debuggerModule, timeoutMs = 10000) {
  if (!automationPromise) return;

  try {
    if (debuggerModule?._isPaused) {
      await debuggerModule.resume();
    }
  } catch (error) {
    console.warn(`⚠️  自动化收尾 resume: ${error.message}`);
  }

  try {
    await Promise.race([
      automationPromise,
      sleep(timeoutMs).then(() => {
        throw new Error(`页面自动化未在 ${timeoutMs}ms 内结束`);
      })
    ]);
  } catch (error) {
    const msg = error?.message || '';
    if (/WebSocket connection closed|connection closed|Target closed/i.test(msg)) {
      return;
    }
    if (/未在 \d+ms 内结束/.test(msg)) {
      console.warn(`⚠️  ${msg}（观测已结束，通常可忽略）`);
      return;
    }
    console.warn(`⚠️  页面自动化收尾: ${msg}`);
  }
}

async function clearAndApplyBreakpoints(debuggerModule, breakpointExit, inputFile) {
  console.log('\n▶ 步骤 1/3：清空断点');
  await debuggerModule.clearAllBreakpoints();

  console.log('\n▶ 步骤 2/3：写入并下发断点');
  const tasks = breakpointExit._resolveBreakpointExitTasks({ inputFile });
  let persistedCount = 0;
  let pushedCount = 0;

  for (const task of tasks) {
    const points = breakpointExit._buildTaskBreakpointPoints(task);
    for (const point of points) {
      const persisted = breakpointExit._upsertPersistentBreakpoint(
        task.entry.url,
        point.line,
        point.column,
        task.entry.tag,
        task.entry.text
      );
      if (persisted) persistedCount += 1;

      const breakpointId = await debuggerModule.setBreakpoint(task.entry.url, point.line, {
        columnNumber: point.column,
        tag: task.entry.tag,
        text: task.entry.text
      });
      if (breakpointId) {
        pushedCount += 1;
        console.log(`   ✅ ${task.entry.tag || task.entry.url}`);
        console.log(`      line=${point.line} column=${point.column} text=${task.entry.text || '(无)'}`);
      } else {
        console.warn(`   ⚠️  断点未下发: ${task.entry.url} @ ${point.line}:${point.column}`);
      }
    }
  }

  console.log(`   持久化新增 ${persistedCount} 处，浏览器下发 ${pushedCount} 处`);
  return pushedCount;
}

async function runObservationSession(options, varNameMap, debuggerModule, connectionManager) {
  const observations = {};
  saveObservations(options.outFile, observations);

  const breakpoints = await debuggerModule.getAllBreakpoints();
  const firstIdleMs = resolveFirstIdleMs(options);
  const autoMode = options.interactionMode === 'auto';

  console.log('\n▶ 步骤 3/3：等待页面操作触发断点');
  console.log(`💡 已加载断点: ${breakpoints.length} 个`);
  if (autoMode) {
    console.log('💡 交互模式: auto — 将复用当前 CDP 连接自动点击页面（与断点监听同一会话）');
  } else {
    console.log('💡 请在页面中手动操作以触发断点');
  }
  console.log(`💡 首次断点等待: ${Math.round(firstIdleMs / 1000)}s`);
  console.log('💡 每次 eval 后将 continue (c)；若无新断点则立即 quit (q)');
  console.log(`💡 输出文件: ${options.outFile}`);

  if (options.readyMs > 0) {
    await sleep(options.readyMs);
  }

  console.log(`\n⏱️  开始等待首次断点（${Math.round(firstIdleMs / 1000)}s 超时）…`);

  return new Promise((resolve) => {
    let idleTimer = null;
    let finished = false;
    let hitCount = 0;
    let handlingHit = false;
    let pageAutomationPromise = null;
    let automationDrained = false;

    const finish = async (reason) => {
      if (finished) return;
      finished = true;

      if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = null;
      }

      debuggerModule.off('breakpointHit', onBreakpointHit);

      if (!automationDrained) {
        if (autoMode && pageAutomationPromise) {
          try {
            await debuggerModule.clearAllBreakpoints();
          } catch (error) {
            console.warn(`⚠️  自动化收尾清除断点: ${error.message}`);
          }
        }
        await drainPageAutomation(pageAutomationPromise, debuggerModule);
        automationDrained = true;
      }

      saveObservations(options.outFile, observations);
      console.log(`\n✅ 观测结果已保存: ${options.outFile}（共 ${hitCount} 次命中）`);
      console.log(`👋 quit (q) — ${reason}`);
      resolve({ observations, hitCount, reason, pageAutomationPromise, automationDrained });
    };

    const armIdleTimer = (ms, reason) => {
      if (idleTimer) {
        clearTimeout(idleTimer);
      }
      idleTimer = setTimeout(() => {
        void finish(reason);
      }, ms);
    };

    const recordObservation = async (event) => {
      const tag = event.tag || 'unknown';
      const expression = event.text;
      const varName = resolveVarName(event, varNameMap);

      console.log('\n🎯 断点命中!');
      console.log(`   tag: ${tag}`);
      console.log(`   text: ${expression || '(无)'}`);

      await appendAnchorSnapshot(debuggerModule, event, options.anchorOut);

      if (!expression) {
        console.warn('⚠️  断点未携带 text 字段，跳过 eval');
        observations[tag] = observations[tag] || {};
        observations[tag][varName] = null;
      } else {
        try {
          console.log(`📝 eval ${expression}`);
          const raw = await debuggerModule.evaluate(expression);
          const value = toJsonSafeValue(debuggerModule, raw);

          observations[tag] = observations[tag] || {};
          observations[tag][varName] = value;

          console.log('📝 表达式结果:');
          console.log(debuggerModule.formatDisplayValue(raw));
        } catch (error) {
          console.error(`❌ eval 失败: ${error.message}`);
          observations[tag] = observations[tag] || {};
          observations[tag][varName] = { __error: error.message };
        }
      }

      saveObservations(options.outFile, observations);
    };

    const continueAfterEval = async () => {
      console.log('\n▶ continue (c)');
      const hitsBefore = hitCount;
      await debuggerModule.resume();
      console.log('▶️  已继续执行；若无新断点将 quit (q)');

      // 留一帧给同步断点命中，否则立即退出
      await new Promise((resolve) => setImmediate(resolve));
      if (!finished && hitCount === hitsBefore) {
        void finish('continue 后未再命中断点，quit (q)');
      }
    };

    const onBreakpointHit = async (event) => {
      if (finished || handlingHit) {
        return;
      }

      if (isInjectedClickPause(event)) {
        await debuggerModule.resume();
        return;
      }

      if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = null;
      }

      handlingHit = true;
      hitCount += 1;

      try {
        await recordObservation(event);
      } catch (error) {
        console.error(`❌ 处理断点失败: ${error.message}`);
        void finish(`处理断点失败: ${error.message}`);
        return;
      } finally {
        handlingHit = false;
      }

      await continueAfterEval();
    };

    debuggerModule.on('breakpointHit', onBreakpointHit);

    process.once('SIGINT', () => {
      void finish('收到 SIGINT');
    });

    const startIdleTimer = () => {
      armIdleTimer(
        firstIdleMs,
        `首次断点等待超时（${firstIdleMs}ms 内无命中）`
      );
      console.log(`⏱️  超时计时已开始（${Math.round(firstIdleMs / 1000)}s）`);
    };

    if (autoMode) {
      // 立即持有 in-flight Promise，finish/drain 才能在 disconnect 前等待点击收尾
      pageAutomationPromise = launchPageAutomationWhenListening(options, connectionManager)
        .catch((error) => {
          const msg = error?.message || '';
          if (/WebSocket connection closed|connection closed|Target closed/i.test(msg)) {
            return;
          }
          console.error(`❌ 页面自动化失败: ${error.message}`);
        });
    }
    startIdleTimer();
  });
}

/**
 * TC3：断点执行与观测采集（供 Anchor Agent 调用）
 * @param {object} options parseArgs 结构
 * @returns {Promise<{ hitCount: number, outFile: string, causalGraphTurn: number|null }>}
 */
/**
 * 释放 CDP 连接，避免 Agent 主进程在迭代结束后挂起
 * @param {import('./cdp-workflow/src/modules/debugger')} debuggerModule
 * @param {import('./cdp-workflow/src/modules/connection-manager')} connectionManager
 */
async function releaseCdpSession(debuggerModule, connectionManager) {
  try {
    if (debuggerModule?.clearAllBreakpoints) {
      await debuggerModule.clearAllBreakpoints();
    }
  } catch (error) {
    console.warn(`⚠️  清理断点时出错: ${error.message}`);
  }

  try {
    if (connectionManager?.disconnect) {
      await connectionManager.disconnect();
    }
  } catch (error) {
    console.warn(`⚠️  断开 CDP 时出错: ${error.message}`);
  }
}

async function runCollectBreakpointObservations(options) {
  const prevCwd = process.cwd();
  process.chdir(CDP_WORKFLOW);

  if (!fs.existsSync(options.inputFile)) {
    process.chdir(prevCwd);
    throw new Error(`input-file 不存在: ${options.inputFile}`);
  }

  const varNameMap = loadVarNameMap(options.inputFile);
  resetAnchorOut(options.anchorOut);

  const connectionManager = new ConnectionManager();
  connectionManager.setOptions({
    host: options.host,
    port: options.port,
    target: options.target || undefined
  });

  const fileViewer = new FileViewer(connectionManager);
  const debuggerModule = new Debugger(connectionManager);
  debuggerModule.setFileViewer(fileViewer);
  const breakpointExit = new BreakpointExitCommand(debuggerModule);

  let obsResult = { hitCount: 0 };

  try {
    await debuggerModule.initialize();
    await debuggerModule.disableClickBreakpoint();

    const pushedCount = await clearAndApplyBreakpoints(
      debuggerModule,
      breakpointExit,
      options.inputFile
    );

    if (pushedCount === 0) {
      throw new Error('没有断点成功下发到浏览器，请检查 Chrome 是否已打开目标页面且脚本已加载');
    }

    const bindMs = options.breakpointBindMs ?? 0;
    if (bindMs > 0) {
      console.log(`\n⏱️  等待断点绑定（${Math.round(bindMs / 1000)}s）…`);
      await sleep(bindMs);
    }

    obsResult = await runObservationSession(options, varNameMap, debuggerModule, connectionManager);

    if (options.updateCausalGraph && obsResult.hitCount > 0) {
      console.log('\n▶ 更新因果图 G_t');
      const updated = updateCausalGraphFromFiles({
        causalGraphFile: DEFAULT_PATHS.causalGraph,
        anchorFile: options.anchorOut,
        observationsFile: options.outFile,
        logsFile: DEFAULT_PATHS.logs
      });
      console.log(`✅ 因果图已写入: ${DEFAULT_PATHS.causalGraph}（turn ${updated.turn}）`);
      console.log(summarizeCausalGraph(updated));
    }

    if (options.graphBuild) {
      const cliHostArgs = ['--host', options.host, '--port', String(options.port)];
      if (options.target) {
        cliHostArgs.push('--target', options.target);
      }
      if (obsResult.hitCount > 0) {
        runCli(
          [...cliHostArgs, 'graph', 'build', '--anchor', options.anchorOut],
          '构建调用关系图'
        );
      } else {
        console.log('\n⚠️  无断点命中，跳过 graph build');
      }
    }

    return {
      hitCount: obsResult.hitCount,
      reason: obsResult.reason,
      outFile: options.outFile,
      anchorOut: options.anchorOut,
      interactionMode: options.interactionMode,
      pageAutomationLaunched: options.interactionMode === 'auto',
      causalGraphTurn: options.updateCausalGraph && obsResult.hitCount > 0
        ? (JSON.parse(fs.readFileSync(DEFAULT_PATHS.causalGraph, 'utf8')).turn ?? null)
        : null
    };
  } finally {
    if (!obsResult.automationDrained) {
      await drainPageAutomation(obsResult.pageAutomationPromise, debuggerModule);
    }
    await releaseCdpSession(debuggerModule, connectionManager);
    process.chdir(prevCwd);
  }
}

async function main() {
  const options = parseArgs(process.argv);

  if (options.help) {
    printHelp();
    process.exit(0);
  }

  try {
    await runCollectBreakpointObservations(options);
    process.exit(0);
  } catch (error) {
    console.error('执行失败:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  runCollectBreakpointObservations,
  releaseCdpSession,
  DEFAULT_PATHS
};
