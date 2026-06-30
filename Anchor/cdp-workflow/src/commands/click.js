/**
 * 交互式断点调试命令
 * 监听已持久化的脚本断点命中，提供 REPL 调试能力
 */

const fs = require('fs');
const path = require('path');

class ClickCommand {
  constructor(debuggerModule) {
    this.debugger = debuggerModule;
    this._rl = null;
    this._breakpointListener = null;
    this._resumedListener = null;
    this._sessionActive = false;
    this._anchorEnabled = true;
    this._anchorOutPath = path.join(process.cwd(), 'anchor-snapshots.jsonl');
  }

  /**
   * 注册命令
   * @param {Object} program - Commander实例
   */
  register(program) {
    const click = program.command('click')
      .alias('clk')
      .description('交互式断点调试命令');

    click.command('start')
      .description('启动断点调试会话，命中 .cdp-breakpoints.json 中的断点时进入交互模式')
      .option('--no-anchor', '断点命中时不采集 ANCHOR 调用栈 (Sh/Ah)')
      .option('--anchor-out <file>', 'ANCHOR 写入路径（默认 anchor-snapshots.jsonl）')
      .action(async (options) => {
        try {
          this._anchorEnabled = !options.noAnchor;
          if (options.anchorOut) {
            this._anchorOutPath = path.resolve(options.anchorOut);
          }
          this._resetAnchorOutFile();
          await this._startDebugSession();
        } catch (error) {
          console.error('启动断点调试失败:', error.message);
          process.exit(1);
        }
      });

    click.command('stop')
      .description('停止断点调试会话')
      .action(async () => {
        try {
          await this._stopDebugSession();
          process.exit(0);
        } catch (error) {
          console.error('停止断点调试失败:', error.message);
          process.exit(1);
        }
      });

    click.command('status')
      .description('查看断点调试会话状态')
      .action(async () => {
        try {
          const breakpoints = await this.debugger.getAllBreakpoints();
          console.log(`\n🔧 断点调试会话: ${this._sessionActive ? '✅ 运行中' : '❌ 未启动'}`);
          console.log(`📍 已加载断点: ${breakpoints.length} 个`);
          process.exit(0);
        } catch (error) {
          console.error('查看状态失败:', error.message);
          process.exit(1);
        }
      });
  }

  /**
   * 启动会话前清空 ANCHOR 输出文件，避免与上次会话数据混杂
   * @private
   */
  _resetAnchorOutFile() {
    if (!this._anchorEnabled) {
      return;
    }
    const dir = path.dirname(this._anchorOutPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(this._anchorOutPath, '', 'utf8');
  }

  /**
   * 开始断点调试会话
   * @private
   */
  async _startDebugSession() {
    try {
      // 清理历史会话可能注入的点击监听器，避免 debugger; 语句干扰
      await this.debugger.disableClickBreakpoint();

      if (!this._rl) {
        const readline = require('readline');
        this._rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          prompt: 'debug> '
        });

        this._setupReadlineHandlers();
      }

      if (!this._breakpointListener) {
        this._breakpointListener = async (event) => {
          if (this._isInjectedClickPause(event)) {
            await this.debugger.resume();
            return;
          }

          console.log('\n🎯 断点命中!');
          console.log(`   位置: ${this._formatBreakpointUrl(event.url)} 第 ${event.lineNumber} 行`);
          if (event.tag && event.tag !== 'unkonw') {
            console.log(`   tag: ${event.tag}`);
          }
          if (event.text) {
            console.log(`   text: ${event.text}`);
          }

          if (event.formattedPosition) {
            console.log(`   格式化代码位置: 第 ${event.formattedPosition.formattedLine} 行`);
          }

          if (this._anchorEnabled) {
            await this._emitAnchorTuple(event);
          }

          if (this._rl) {
            this._rl.prompt();
          }
        };

        this.debugger.on('breakpointHit', this._breakpointListener);
      }

      if (!this._resumedListener) {
        this._resumedListener = () => {
          console.log('\n▶️  程序已恢复执行，等待断点命中...');
          if (this._rl) {
            this._rl.prompt();
          }
        };

        this.debugger.on('resumed', this._resumedListener);
      }

      this._sessionActive = true;

      const breakpoints = await this.debugger.getAllBreakpoints();
      console.log('\n💡 断点调试会话已启动，操作页面触发已设置的断点即可进入调试');
      console.log(`💡 当前已加载 ${breakpoints.length} 个断点`);
      console.log('💡 断点命中后可使用以下命令:');
      console.log('   code - 查看当前代码上下文');
      console.log('   var - 查看当前作用域变量');
      console.log('   continue (c) - 继续执行');
      console.log('   next (n) - 单步跳过');
      console.log('   step (s) - 步入函数');
      console.log('   out (o) - 步出函数');
      console.log('   eval <expr> - 执行表达式');
      console.log('   quit (q) - 退出调试');
      console.log('   stop - 停止调试会话');

      if (this._rl) {
        this._rl.prompt();
      }
    } catch (error) {
      console.error('启动断点调试失败:', error.message);
      throw error;
    }
  }

  /**
   * 停止断点调试会话
   * @private
   */
  async _stopDebugSession() {
    try {
      this._sessionActive = false;
      console.log('✅ 断点调试会话已停止');
      this._cleanup();
    } catch (error) {
      console.error('停止断点调试失败:', error.message);
      throw error;
    }
  }

  /**
   * 判断是否为历史注入的点击监听器触发的暂停
   * @private
   */
  _isInjectedClickPause(event) {
    const firstFrame = event.callFrames && event.callFrames[0];
    if (!firstFrame) {
      return false;
    }
    const name = firstFrame.functionName || '';
    return name === '__cdpClickHandler' || name === 'window.__cdpClickHandler';
  }

  /**
   * 采集 ANCHOR 调用栈并静默写入 JSON Lines 文件
   * @private
   */
  async _emitAnchorTuple(event) {
    try {
      const tuple = await this.debugger.collectAnchorTuple(event);

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

      fs.appendFileSync(this._anchorOutPath, `${JSON.stringify(payload)}\n`, 'utf8');
    } catch (error) {
      console.error(`❌ ANCHOR 采集失败: ${error.message}`);
    }
  }

  /**
   * 格式化断点 URL 显示
   * @private
   */
  _formatBreakpointUrl(url) {
    if (!url || url === 'unknown') {
      return 'unknown';
    }
    if (url.startsWith('script:')) {
      return url;
    }
    const parts = url.split('/');
    return parts[parts.length - 1] || url;
  }

  /**
   * 设置readline处理器
   * @private
   */
  _setupReadlineHandlers() {
    this._rl.on('line', async (line) => {
      line = line.trim();

      try {
        const parts = line.split(/\s+/);
        const command = parts[0].toLowerCase();

        if (command === 'continue' || command === 'c') {
          await this.debugger.resume();
        } else if (command === 'next' || command === 'n') {
          await this.debugger.stepOver();
          return;
        } else if (command === 'step' || command === 's') {
          await this.debugger.stepInto();
          return;
        } else if (command === 'out' || command === 'o') {
          await this.debugger.stepOut();
          return;
        } else if (command.startsWith('eval')) {
          const expression = parts.slice(1).join(' ');
          if (expression) {
            const result = await this.debugger.evaluate(expression);
            console.log('📝 表达式结果:');
            console.log(this.debugger.formatDisplayValue(result));
          } else {
            console.log('请输入要执行的表达式');
          }
          this._rl.prompt();
        } else if (command === 'var') {
          try {
            console.log('🔍 正在获取当前作用域变量...');
            const variables = await this.debugger.getAllScopeVariables(0, 3);
            const outputPath = await this.debugger.exportVariablesToFile(variables);

            console.log('\n📋 当前作用域变量摘要:');
            console.log('='.repeat(80));

            let varCount = 0;
            for (const [scopeName, scopeVars] of Object.entries(variables)) {
              if (scopeName === '调用信息') {
                console.log(`\n🔍 ${scopeName}:`);
                for (const [key, value] of Object.entries(scopeVars)) {
                  console.log(`  ${key}: ${value}`);
                }
              } else if (scopeName === 'this') {
                console.log(`\n🔍 this: ${this._formatVariableDisplay(scopeVars)}`);
              } else if (typeof scopeVars === 'object' && scopeVars !== null) {
                const keys = Object.keys(scopeVars);
                console.log(`\n🔍 ${scopeName}: ${keys.length} 个变量`);
                varCount += keys.length;

                for (const [varName, varValue] of Object.entries(scopeVars).slice(0, 5)) {
                  console.log(`  ${varName}: ${this._formatVariableDisplay(varValue, 2)}`);
                }
                if (keys.length > 5) {
                  console.log(`  ... (还有 ${keys.length - 5} 个变量，已导出到文件)`);
                }
              }
            }

            console.log(`\n总计: ${varCount} 个变量`);
            console.log(`✅ 详细信息已导出到: ${outputPath}`);
          } catch (error) {
            console.error(`❌ 获取变量失败: ${error.message}`);
          }
          this._rl.prompt();
        } else if (command === 'code') {
          try {
            const contextLines = parts.length > 1 ? parseInt(parts[1], 10) : 30;
            const frameIndex = parts.length > 2 ? parseInt(parts[2], 10) : 0;

            console.log('🔍 正在获取当前断点位置的代码上下文...');
            const codeContext = await this.debugger.getCurrentCodeContext(contextLines, frameIndex, false);

            console.log(`\n📄 代码上下文 (${codeContext.url})`);
            console.log(`📌 断点位置: 第 ${codeContext.lineNumber} 行`);
            if (codeContext.columnNumber) {
              console.log(`📌 断点列号: 第 ${codeContext.columnNumber} 列`);
            }
            if (codeContext.functionName) {
              console.log(`📌 函数名: ${codeContext.functionName}`);
            }
            console.log('='.repeat(80));

            codeContext.contextLines.forEach(lineInfo => {
              const lineNumber = lineInfo.line.toString().padStart(4, ' ');
              const marker = lineInfo.isCurrent ? '→' : ' ';

              console.log(`${marker} ${lineNumber} | ${lineInfo.content}`);
            });

            console.log('='.repeat(80));
            console.log(`📊 共显示 ${codeContext.contextLines.length} 行`);
          } catch (error) {
            console.error(`❌ 获取代码上下文失败: ${error.message}`);
          }
          this._rl.prompt();
        } else if (command === 'stop') {
          await this._stopDebugSession();
        } else if (command === 'quit' || command === 'q') {
          console.log('👋 退出调试...');
          this._cleanup();
        } else if (command === 'help' || command === 'h' || command === '?') {
          console.log('\n🔧 可用命令:');
          console.log('  continue (c): 继续执行');
          console.log('  next (n): 单步跳过');
          console.log('  step (s): 单步进入');
          console.log('  out (o): 单步退出');
          console.log('  var: 导出当前作用域所有变量到文件');
          console.log('  code [lines] [frame]: 查看当前断点位置的代码上下文');
          console.log('  eval <expression>: 执行表达式');
          console.log('  stop: 停止调试会话');
          console.log('  quit (q): 退出调试');
          console.log('  help/h/?: 显示帮助信息');
          this._rl.prompt();
        } else {
          console.log('❓ 未知命令，请输入 "help" 查看可用命令');
          this._rl.prompt();
        }
      } catch (error) {
        console.error('❌ 执行命令失败:', error.message);
        this._rl.prompt();
      }
    });

    process.on('SIGINT', () => {
      console.log('\n👋 接收到中断信号，退出调试...');
      this._cleanup();
    });

    this._rl.on('close', () => {
      this._cleanup();
    });
  }

  /**
   * 清理资源
   * @private
   */
  _cleanup() {
    this._sessionActive = false;

    if (this._breakpointListener) {
      this.debugger.off('breakpointHit', this._breakpointListener);
      this._breakpointListener = null;
    }

    if (this._resumedListener) {
      this.debugger.off('resumed', this._resumedListener);
      this._resumedListener = null;
    }

    if (this._rl) {
      this._rl.close();
      this._rl = null;
    }

    process.exit(0);
  }

  /**
   * 格式化变量显示
   * @private
   */
  _formatVariableDisplay(value, indent = 0) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') {
      return `"${value}"`;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    if (typeof value === 'function') {
      return '[Function]';
    }
    if (typeof value === 'object') {
      if (value.type === 'object' && value.description) {
        return `[Object: ${value.description}]`;
      }
      if (value.type === 'array') {
        return `[Array(${value.preview || value.description || 'length unknown'})]`;
      }
      if (value.type === 'string') {
        return `"${value.value}"`;
      }
      if (value.type === 'number') {
        return String(value.value);
      }
      if (value.type === 'boolean') {
        return String(value.value);
      }
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  }

  /**
   * 初始化命令
   * @returns {Promise<void>}
   */
  async initialize() {
    try {
      await this.debugger.initialize();
      console.log('断点调试命令模块初始化成功');
    } catch (error) {
      console.error('断点调试命令模块初始化失败:', error.message);
      throw error;
    }
  }
}

module.exports = ClickCommand;
