/**
 * 关闭由实验启动的 Chrome（远程调试端口）
 */

const http = require('http');
const { spawnSync } = require('child_process');

const CDP = require('../cdp-workflow/node_modules/chrome-remote-interface');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isDebugPortOpen(host, port, timeoutMs = 2000) {
  return new Promise((resolve) => {
    const req = http.get(`http://${host}:${port}/json/version`, (res) => {
      res.resume();
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function closeBrowserViaCdp(host, port) {
  let client = null;
  try {
    client = await CDP({ host, port });
    await client.Browser.close();
    return true;
  } catch {
    return false;
  } finally {
    if (client) {
      try {
        await client.close();
      } catch {
        // ignore
      }
    }
  }
}

function findPidsOnPort(port) {
  if (process.platform === 'win32') {
    const result = spawnSync('netstat', ['-ano'], { encoding: 'utf8' });
    if (result.status !== 0) return [];

    const needle = `:${port}`;
    const pids = new Set();

    for (const line of result.stdout.split(/\r?\n/)) {
      if (!line.includes('LISTENING') || !line.includes(needle)) continue;
      const parts = line.trim().split(/\s+/);
      const pid = Number(parts[parts.length - 1]);
      if (pid > 0) pids.add(pid);
    }

    return [...pids];
  }

  const result = spawnSync('lsof', ['-ti', `tcp:${port}`], { encoding: 'utf8' });
  if (result.status !== 0) return [];
  return result.stdout
    .split(/\r?\n/)
    .map((line) => Number(line.trim()))
    .filter((pid) => pid > 0);
}

function killPids(pids) {
  for (const pid of pids) {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      try {
        process.kill(pid, 'SIGTERM');
      } catch {
        // ignore
      }
    }
  }
}

/**
 * @param {{ host?: string, port?: number }} opts
 * @returns {Promise<boolean>} 是否执行了关闭操作
 */
async function closeBrowser(opts = {}) {
  const host = opts.host || 'localhost';
  const port = opts.port ?? 9222;

  const open = await isDebugPortOpen(host, port);
  if (!open) return false;

  console.log('\n▶ 关闭浏览器');

  await closeBrowserViaCdp(host, port);
  await sleep(600);

  if (!(await isDebugPortOpen(host, port))) {
    console.log('  浏览器已关闭');
    return true;
  }

  const pids = findPidsOnPort(port);
  if (pids.length) {
    killPids(pids);
    await sleep(400);
    console.log(`  已终止调试端口 ${port} 上的进程: ${pids.join(', ')}`);
    return true;
  }

  console.log('  未能关闭浏览器（未找到对应进程）');
  return false;
}

module.exports = {
  closeBrowser,
  isDebugPortOpen
};
