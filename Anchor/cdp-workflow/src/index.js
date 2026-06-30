#!/usr/bin/env node

/**
 * CDP Workflow CLI 主入口
 * 仅注册工作流所需的命令
 */

const { program } = require('commander');
const ConnectionManager = require('./modules/connection-manager');
const FileSystem = require('./modules/file-system');
const FileViewer = require('./modules/file-viewer');
const Debugger = require('./modules/debugger');
const AstAnalyzer = require('./modules/ast-analyzer');

const connectionManager = new ConnectionManager();
const fileSystem = new FileSystem(connectionManager);
const fileViewer = new FileViewer(connectionManager);
const debuggerModule = new Debugger(connectionManager);
const astAnalyzer = new AstAnalyzer(connectionManager, fileSystem);

debuggerModule.setFileViewer(fileViewer);

const astCommand = new (require('./commands/ast'))(astAnalyzer);
const clickCommand = new (require('./commands/click'))(debuggerModule);
const breakpointExitCommand = new (require('./commands/breakpoint-exit'))(debuggerModule);
const breakpointCommand = new (require('./commands/breakpoint'))(debuggerModule);
const graphCommand = new (require('./commands/graph'))();

program
  .version('1.0.0')
  .description('CDP Workflow - AST 导出、日志采集、断点调试工作流 CLI')
  .option('-h, --host <host>', 'Chrome 调试主机', 'localhost')
  .option('-p, --port <port>', 'Chrome 调试端口', '9222')
  .option('-t, --target <target>', '目标页面的 URL 或标题');

program.on('option:host', (host) => {
  connectionManager.setOptions({ host });
});

program.on('option:port', (port) => {
  connectionManager.setOptions({ port });
});

program.on('option:target', (target) => {
  connectionManager.setOptions({ target });
});

astCommand.register(program);
clickCommand.register(program);
breakpointExitCommand.register(program);
breakpointCommand.register(program);
graphCommand.register(program);

program.on('command:*', () => {
  console.error('未知命令: %s\n请使用 --help 查看可用命令。', program.args.join(' '));
  process.exit(1);
});

function needsDebuggerInit(argv) {
  const args = argv.slice(2);
  if (!args.length) return false;

  const subcommands = ['click', 'breakpoint', 'breakpoint-exit', 'ast', 'graph'];
  const hasSubcommand = subcommands.some((cmd) => args.includes(cmd));

  // 仅在没有子命令时，把 --help / --version 视为帮助请求；-h 在此 CLI 中是 --host 别名
  if (!hasSubcommand) {
    if (args.includes('--help') || args.includes('-V') || args.includes('--version')) {
      return false;
    }
  }

  if (args.includes('click')) return true;
  if (args.includes('breakpoint')) return true;
  if (args.includes('breakpoint-exit') && !args.includes('--save-only')) return true;
  return false;
}

async function run() {
  try {
    if (needsDebuggerInit(process.argv)) {
      await debuggerModule.initialize();
    }

    program.parse(process.argv);

    if (!program.args.length) {
      program.help();
    }
  } catch (error) {
    console.error('初始化失败:', error.message);
    console.error('请确保 Chrome 已启动并开启了远程调试模式');
    console.error('示例: chrome --remote-debugging-port=9222');
    process.exit(1);
  }
}

run();

module.exports = {
  ConnectionManager,
  FileSystem,
  FileViewer,
  Debugger,
  AstAnalyzer
};
