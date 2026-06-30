/**
 * 在独立子进程中启动 browser-automation.js（与主进程 CDP 会话分离，不阻塞等待断点）
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const AUTOMATION_SCRIPT = 'browser-automation.js';

/**
 * @param {object} opts
 * @param {string} [opts.host]
 * @param {string|number} [opts.port]
 * @param {string} [opts.browserUrl]
 * @param {boolean} [opts.reload]  操作前强制刷新页面（多轮 TC3 时避免沿用上轮 DOM 状态）
 * @returns {string[]}
 */
function buildAutomationArgs(opts = {}) {
  const args = [
    '--no-launch',
    '--host', opts.host || 'localhost',
    '--port', String(opts.port ?? 9222)
  ];
  if (opts.browserUrl) {
    args.push('--url', opts.browserUrl);
  }
  if (opts.reload) {
    args.push('--reload');
  }
  return args;
}

/**
 * 后台子进程执行 node browser-automation.js --no-launch ...
 * @param {string} projectRoot
 * @param {object} [opts]
 * @returns {{ launched: boolean, pid: number, args: string[] }}
 */
function spawnBrowserAutomation(projectRoot, opts = {}) {
  const root = path.resolve(projectRoot);
  const scriptPath = path.join(root, AUTOMATION_SCRIPT);
  if (!fs.existsSync(scriptPath)) {
    throw new Error(`未找到 ${scriptPath}`);
  }

  const nodeArgs = buildAutomationArgs(opts);

  const child = spawn(process.execPath, [scriptPath, ...nodeArgs], {
    cwd: root,
    detached: true,
    stdio: 'inherit',
    env: process.env
  });
  child.unref();

  return { launched: true, pid: child.pid, args: nodeArgs };
}

module.exports = {
  AUTOMATION_SCRIPT,
  buildAutomationArgs,
  spawnBrowserAutomation
};
