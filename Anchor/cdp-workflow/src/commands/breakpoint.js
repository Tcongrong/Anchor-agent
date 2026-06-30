/**
 * breakpoint 命令（clear）
 */

class BreakpointCommand {
  constructor(debuggerModule) {
    this.debugger = debuggerModule;
  }

  register(program) {
    const breakpoint = program
      .command('breakpoint')
      .alias('bp')
      .description('断点管理命令');

    breakpoint
      .command('clear')
      .description('清除所有断点')
      .action(async () => {
        try {
          await this.debugger.clearAllBreakpoints();
          process.exit(0);
        } catch (error) {
          console.error(`清除断点失败: ${error.message}`);
          process.exit(1);
        }
      });
  }

  async initialize() {
    await this.debugger.initialize();
    console.log('breakpoint 命令模块初始化成功');
  }
}

module.exports = BreakpointCommand;
