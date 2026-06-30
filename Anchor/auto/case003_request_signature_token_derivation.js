#!/usr/bin/env node
/**
 * 浏览器自动化脚本
 *
 * 运行本脚本 ≈ 启动带远程调试的 Chrome 并打开指定 URL，然后通过 CDP 在页面上执行自定义操作。
 *
 * 用法:
 *   node browser-automation.js
 *   node browser-automation.js --url http://127.0.0.1:4173/
 *   node browser-automation.js --no-launch          # Chrome 已手动启动时，仅连接并操作
 *   node browser-automation.js --keep-open          # 操作完成后保持浏览器窗口
 *
 * 自定义操作：编辑下方 runPageActions() 函数。
 */

const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const CDP = require('./cdp-workflow/node_modules/chrome-remote-interface');

// ─── 默认配置（可通过命令行覆盖）────────────────────────────────────────────

const DEFAULTS = {
  chromePath: 'D:\\Projects\\debug_tool\\CDP\\chrome-win64\\chrome.exe',
  url: 'http://127.0.0.1:4173/',
  port: 9222,
  host: 'localhost',
  launchChrome: true,
  keepBrowserOpen: false,
  forceReload: false,
  /** 仅触发操作、不验证 UI 结果（TC3 自动模式下断点可能暂停页面更新） */
  triggerOnly: true,
  /** 等待页面加载完成的最长时间（毫秒） */
  navigationTimeoutMs: 30000,
  /** 等待 Chrome 调试端口就绪的最长时间（毫秒） */
  chromeReadyTimeoutMs: 15000
};

// ─── 命令行参数 ───────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const opts = { ...DEFAULTS };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--url' && argv[i + 1]) opts.url = argv[++i];
    else if (arg === '--chrome' && argv[i + 1]) opts.chromePath = argv[++i];
    else if (arg === '--port' && argv[i + 1]) opts.port = Number(argv[++i]) || DEFAULTS.port;
    else if (arg === '--host' && argv[i + 1]) opts.host = argv[++i];
    else if (arg === '--no-launch') opts.launchChrome = false;
    else if (arg === '--reload') opts.forceReload = true;
    else if (arg === '--keep-open') opts.keepBrowserOpen = true;
    else if (arg === '--trigger-only') opts.triggerOnly = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
  }

  return opts;
}

function printHelp() {
  console.log(`用法: node browser-automation.js [选项]

选项:
  --url <url>       目标页面 URL，默认 ${DEFAULTS.url}
  --chrome <path>   Chrome 可执行文件路径
  --port <n>        远程调试端口，默认 ${DEFAULTS.port}
  --host <host>     调试主机，默认 ${DEFAULTS.host}
  --no-launch       不启动 Chrome（假定已用 --remote-debugging-port 启动）
  --reload          操作前强制导航到 --url（即使当前已在同页）
  --keep-open       脚本结束后不关闭浏览器
  --trigger-only    兼容旧参数，当前默认即为点击后立即退出
  -h, --help        显示帮助

在 runPageActions() 中编写页面操作逻辑。`);
}

// ─── Chrome 启动与 CDP 连接 ───────────────────────────────────────────────────

let chromeProcess = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForDebugPort(host, port, timeoutMs) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(`http://${host}:${port}/json/version`, (res) => {
          res.resume();
          if (res.statusCode === 200) resolve();
          else reject(new Error(`HTTP ${res.statusCode}`));
        });
        req.on('error', reject);
        req.setTimeout(2000, () => {
          req.destroy();
          reject(new Error('timeout'));
        });
      });
      return;
    } catch {
      await sleep(300);
    }
  }

  throw new Error(`Chrome 调试端口 ${host}:${port} 在 ${timeoutMs}ms 内未就绪`);
}

function launchChrome(opts) {
  const userDataDir = path.join(__dirname, '.cache', 'chrome-automation-profile');

  const args = [
    `--remote-debugging-port=${opts.port}`,
    '--remote-allow-origins=*',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    opts.url
  ];

  console.log(`启动 Chrome: ${opts.chromePath}`);
  console.log(`  URL: ${opts.url}`);
  console.log(`  调试端口: ${opts.port}`);

  chromeProcess = spawn(opts.chromePath, args, {
    detached: false,
    stdio: 'ignore',
    windowsHide: false
  });

  chromeProcess.on('error', (err) => {
    console.error('启动 Chrome 失败:', err.message);
  });

  chromeProcess.unref();
}

async function pickPageTarget(host, port, urlHint) {
  const targets = await CDP.List({ host, port });
  const pages = targets.filter((t) => t.type === 'page');

  if (!pages.length) {
    throw new Error('未找到可用的 page 目标，请确认 Chrome 已打开至少一个标签页');
  }

  if (urlHint) {
    const normalized = urlHint.replace(/\/$/, '');
    const matched = pages.find((t) => t.url && t.url.replace(/\/$/, '').startsWith(normalized));
    if (matched) return matched;
  }

  return pages[0];
}

async function connectPage(opts) {
  const target = await pickPageTarget(opts.host, opts.port, opts.url);

  const client = await CDP({
    host: opts.host,
    port: opts.port,
    target: target.id
  });

  await Promise.all([
    client.Page.enable(),
    client.Runtime.enable(),
    client.DOM.enable(),
    client.Input.enable?.() ?? Promise.resolve()
  ]);

  return client;
}

// ─── 页面操作辅助 API ─────────────────────────────────────────────────────────

function createPageContext(client, opts) {
  return {
    client,
    opts,

    async navigate(url) {
      const loaded = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error(`页面加载超时 (${opts.navigationTimeoutMs}ms): ${url}`));
        }, opts.navigationTimeoutMs);

        const onLoad = () => {
          clearTimeout(timer);
          resolve();
        };

        client.Page.loadEventFired(onLoad);
      });

      await client.Page.navigate({ url });
      await loaded;
    },

    async evaluate(fnOrExpr, ...args) {
      const expression = typeof fnOrExpr === 'function'
        ? `(${fnOrExpr.toString()})(${args.map((a) => JSON.stringify(a)).join(', ')})`
        : fnOrExpr;

      const { result, exceptionDetails } = await client.Runtime.evaluate({
        expression,
        returnByValue: true,
        awaitPromise: true
      });

      if (exceptionDetails) {
        const msg = exceptionDetails.exception?.description || exceptionDetails.text;
        throw new Error(`Runtime.evaluate 失败: ${msg}`);
      }

      return result.value;
    },

    async waitForSelector(selector, timeoutMs = 10000) {
      const deadline = Date.now() + timeoutMs;

      while (Date.now() < deadline) {
        const found = await this.evaluate((sel) => !!document.querySelector(sel), selector);
        if (found) return;
        await sleep(200);
      }

      throw new Error(`等待选择器超时: ${selector}`);
    },

    async click(selector) {
      const clicked = await this.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return false;
        el.scrollIntoView({ block: 'center', inline: 'center' });
        el.click();
        return true;
      }, selector);

      if (!clicked) {
        throw new Error(`未找到元素: ${selector}`);
      }
    },

    async type(selector, text, { clear = true } = {}) {
      await this.click(selector);

      if (clear) {
        await client.Input.dispatchKeyEvent({ type: 'keyDown', key: 'a', modifiers: 2 }); // Ctrl+A
        await client.Input.dispatchKeyEvent({ type: 'keyUp', key: 'a', modifiers: 2 });
        await client.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Backspace' });
        await client.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Backspace' });
      }

      for (const char of text) {
        await client.Input.dispatchKeyEvent({ type: 'keyDown', text: char, key: char });
        await client.Input.dispatchKeyEvent({ type: 'keyUp', text: char, key: char });
      }
    },

    sleep
  };
}

// ─── ★ 在此编写你的页面操作 ───────────────────────────────────────────────────


/**
 * @param {ReturnType<typeof createPageContext>} page
 */
async function runPageActions(page) {
  // 1. 确保页面正确加载
  const currentUrl = await page.evaluate(() => location.href);
  const target = page.opts.url.replace(/\/$/, '');
  const onTarget = currentUrl.replace(/\/$/, '').startsWith(target);
  if (page.opts.forceReload || !onTarget) {
    console.log(page.opts.forceReload ? `强制刷新: ${page.opts.url}` : `导航到: ${page.opts.url}`);
    await page.navigate(page.opts.url);
  }

  // 2. 等待签名板按钮出现（确保 DOM 准备就绪）
  await page.waitForSelector('#signPad');

  // 3. 配置出站请求参数
  // 可靠地设置 Request path (触发 input 和 change 事件)
  await page.evaluate(() => {
    const input = document.querySelector('#routeInput');
    if (input) {
      input.value = '/v2/invoices/close';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  console.log('✅ 已设置 Request path: /v2/invoices/close');

  // 选择 HTTP 方法
  await page.evaluate(() => {
    const methodSelect = document.querySelector('#methodSelect');
    if (methodSelect) {
      methodSelect.value = 'PATCH';
      methodSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  console.log('✅ 已选择 HTTP 方法: PATCH');

  // 点选能力范围（例如 Billing）
  await page.click('#scopeBilling');
  console.log('✅ 已选择能力范围: Billing');

  // 可选：稍作等待，让 UI 完成内部状态更新
  await page.sleep(300);

  // 4. 长按签名板
  await longPress(page, '#signPad', 1500);
  console.log('✅ 已长按签名板');
}

/**
 * 辅助函数：长按元素
 * @param {ReturnType<typeof createPageContext>} page
 * @param {string} selector
 * @param {number} durationMs
 */
async function longPress(page, selector, durationMs) {
  const rect = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }, selector);
  if (!rect) throw new Error(`未找到元素: ${selector}`);

  const { client } = page;
  await client.Input.dispatchMouseEvent({
    type: 'mouseMoved',
    x: rect.x,
    y: rect.y
  });
  await client.Input.dispatchMouseEvent({
    type: 'mousePressed',
    button: 'left',
    clickCount: 1,
    x: rect.x,
    y: rect.y
  });
  await page.sleep(durationMs);
  await client.Input.dispatchMouseEvent({
    type: 'mouseReleased',
    button: 'left',
    clickCount: 1,
    x: rect.x,
    y: rect.y
  });
}
/**
 * 使用已有 CDP 客户端在同一标签页内执行页面操作（供 TC3 复用连接）
 * @param {object} client
 * @param {object} [opts]
 */
async function runAutomationOnClient(client, opts = {}) {
  await Promise.all([
    client.Page?.enable?.() ?? Promise.resolve(),
    client.Runtime?.enable?.() ?? Promise.resolve(),
    client.DOM?.enable?.() ?? Promise.resolve(),
    client.Input?.enable?.() ?? Promise.resolve()
  ]);

  const merged = { ...DEFAULTS, ...opts };
  const page = createPageContext(client, merged);
  await runPageActions(page);
}

// ─── 主流程 ───────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    return;
  }

  let client = null;

  try {
    if (opts.launchChrome) {
      launchChrome(opts);
      await waitForDebugPort(opts.host, opts.port, opts.chromeReadyTimeoutMs);
      // 给页面一点初始渲染时间
      await sleep(800);
    } else {
      await waitForDebugPort(opts.host, opts.port, opts.chromeReadyTimeoutMs);
    }

    console.log('连接 CDP...');
    client = await connectPage(opts);
    const page = createPageContext(client, opts);

    await runPageActions(page);
  } catch (error) {
    console.error('执行失败:', error.message);
    process.exitCode = 1;
  } finally {
    if (client) {
      try {
        await client.close();
      } catch {
        // ignore
      }
    }

    if (!opts.keepBrowserOpen && chromeProcess && !chromeProcess.killed) {
      chromeProcess.kill();
    } else if (opts.keepBrowserOpen) {
      console.log('浏览器保持打开，按 Ctrl+C 退出脚本（浏览器窗口不受影响）');
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  DEFAULTS,
  createPageContext,
  runPageActions,
  runAutomationOnClient,
  connectPage,
  waitForDebugPort
};
