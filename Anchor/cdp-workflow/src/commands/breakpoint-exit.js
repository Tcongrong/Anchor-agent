/**
 * breakpoint-exit 命令
 * 从 CDP breakpoint 命令中提取，用于在函数入口/出口设置断点
 */

const fs = require('fs');
const path = require('path');
const { parseTag } = require('../modules/call-graph-builder');

class BreakpointExitCommand {
  constructor(debuggerModule) {
    this.debugger = debuggerModule;
  }

  register(program) {
    program
      .command('breakpoint-exit')
      .description('按行/列设置断点（input-file 直接指定位置；CLI 仍支持函数出口自动计算）')
      .option('--url <url>', '脚本 URL')
      .option('--input-file <path>', '从 JSON 文件批量读取 scriptUrl + location 并直接设置断点')
      .option('--index <n>', '仅处理 input-file 中第 n 条（从 1 开始）', parseInt)
      .option('--line <line>', '函数起始行号（1 基）', parseInt)
      .option('--column <column>', '函数起始列号（0 基）', parseInt)
      .option('--function-code <code>', '函数源码字符串（用于自动计算末尾位置）')
      .option('--function-code-file <path>', '函数源码文件路径（用于自动计算末尾位置）')
      .option('--exit-line <line>', '函数末尾断点行号（1 基，直接指定）', parseInt)
      .option('--exit-column <column>', '函数末尾断点列号（0 基，直接指定）', parseInt)
      .option('--save-only', '仅写入 .cdp-breakpoints.json，不立即下发到当前浏览器')
      .action(async (options) => {
        try {
          const tasks = this._resolveBreakpointExitTasks(options);
          let persistedCount = 0;
          let skippedPersistCount = 0;
          let pushedCount = 0;
          let skippedPushCount = 0;
          let totalPoints = 0;

          for (const task of tasks) {
            const points = this._buildTaskBreakpointPoints(task);
            totalPoints += points.length;

            for (const point of points) {
              const persisted = this._upsertPersistentBreakpoint(
                task.entry.url,
                point.line,
                point.column,
                task.entry.tag,
                task.entry.text
              );
              if (persisted) persistedCount += 1;
              else skippedPersistCount += 1;

              if (options.saveOnly) {
                continue;
              }

              const breakpointId = await this.debugger.setBreakpoint(task.entry.url, point.line, {
                columnNumber: point.column,
                tag: task.entry.tag,
                text: task.entry.text
              });
              if (breakpointId) pushedCount += 1;
              else skippedPushCount += 1;
            }
          }

          console.log(`✅ breakpoint-exit 执行完成，共处理 ${tasks.length} 条，断点位 ${totalPoints} 处`);
          console.log(`   持久化新增: ${persistedCount}，已存在: ${skippedPersistCount}`);
          if (options.saveOnly) {
            console.log('   下发状态: save-only（未下发到浏览器）');
          } else {
            console.log(`   下发成功: ${pushedCount}，未下发/已存在: ${skippedPushCount}`);
          }

          process.exit(0);
        } catch (error) {
          console.error(`设置函数末尾断点失败: ${error.message}`);
          process.exit(1);
        }
      });
  }

  async initialize() {
    await this.debugger.initialize();
    console.log('breakpoint-exit 命令模块初始化成功');
  }

  _resolveBreakpointExitOptions(options) {
    if (!options || !options.url) {
      throw new Error('缺少 --url 参数');
    }

    const hasDirectExit = Number.isInteger(options.exitLine) && Number.isInteger(options.exitColumn);
    if (hasDirectExit) {
      if (options.exitLine < 1 || options.exitColumn < 0) {
        throw new Error('--exit-line 必须 >= 1，--exit-column 必须 >= 0');
      }
      return {
        entry: { url: options.url, location: { line: options.exitLine, column: options.exitColumn } },
        endPosition: { line: options.exitLine, column: options.exitColumn }
      };
    }

    if (!Number.isInteger(options.line) || !Number.isInteger(options.column)) {
      throw new Error('自动计算模式需要 --line 与 --column 参数');
    }
    if (options.line < 1 || options.column < 0) {
      throw new Error('--line 必须 >= 1，--column 必须 >= 0');
    }

    let functionCode = options.functionCode;
    if (!functionCode && options.functionCodeFile) {
      const filePath = path.isAbsolute(options.functionCodeFile)
        ? options.functionCodeFile
        : path.resolve(process.cwd(), options.functionCodeFile);
      if (!fs.existsSync(filePath)) {
        throw new Error(`function-code-file 不存在: ${filePath}`);
      }
      functionCode = fs.readFileSync(filePath, 'utf8');
    }

    if (!functionCode) {
      throw new Error('自动计算模式需要 --function-code 或 --function-code-file');
    }

    const entry = {
      url: options.url,
      location: {
        line: options.line,
        column: options.column
      },
      functionCode
    };

    const endPosition = this._resolveFunctionExitPosition({
      location: entry.location,
      functionCode: entry.functionCode
    });

    return { entry, endPosition };
  }

  _resolveBreakpointExitTasks(options) {
    if (options.inputFile) {
      return this._resolveBreakpointExitTasksFromFile(options);
    }
    return [this._resolveBreakpointExitOptions(options)];
  }

  _resolveScriptUrlFromRow(row) {
    return row?.scriptUrl
      || row?.component?.scriptUrl
      || row?.url
      || parseTag(row?.tag || row?.function_tag)?.scriptUrl
      || null;
  }

  _normalizeSelectedBreakpointRow(sel) {
    const scriptUrl = this._resolveScriptUrlFromRow(sel);
    const location = sel?.location || sel?.component?.location;
    if (!scriptUrl || !location || typeof location.line !== 'number' || typeof location.column !== 'number') {
      return null;
    }

    return {
      scriptUrl,
      location,
      text: sel.text,
      tag: sel.tag || sel.function_tag
    };
  }

  _normalizeBreakpointInputRows(data) {
    if (Array.isArray(data)) {
      return data;
    }

    if (data && typeof data === 'object') {
      if (Array.isArray(data.breakpointTasks) && data.breakpointTasks.length) {
        return data.breakpointTasks;
      }

      if (data.selected_breakpoint) {
        const row = this._normalizeSelectedBreakpointRow(data.selected_breakpoint);
        if (row) {
          return [row];
        }
        throw new Error('selected_breakpoint 缺少 scriptUrl/location，无法下发断点');
      }
    }

    return data ? [data] : [];
  }

  _resolveBreakpointExitTasksFromFile(options) {
    const filePath = path.isAbsolute(options.inputFile)
      ? options.inputFile
      : path.resolve(process.cwd(), options.inputFile);

    if (!fs.existsSync(filePath)) {
      throw new Error(`input-file 不存在: ${filePath}`);
    }

    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      throw new Error(`input-file 不是有效 JSON: ${error.message}`);
    }

    const rows = this._normalizeBreakpointInputRows(data);
    if (!rows.length) {
      throw new Error('input-file 为空数组，没有可处理项');
    }

    let selectedRows = rows;
    if (Number.isInteger(options.index)) {
      if (options.index < 1 || options.index > rows.length) {
        throw new Error(`--index 超出范围，应为 1-${rows.length}`);
      }
      selectedRows = [rows[options.index - 1]];
    }

    const tasks = [];
    selectedRows.forEach((row, idx) => {
      const scriptUrl = this._resolveScriptUrlFromRow(row);
      const location = row?.location || row?.component?.location;
      const tag = row?.tag;
      const text = row?.text;

      if (!scriptUrl || !location || typeof location.line !== 'number' || typeof location.column !== 'number') {
        throw new Error(`input-file 第 ${idx + 1} 条缺少必要字段（scriptUrl/location）`);
      }
      if (location.line < 1 || location.column < 0) {
        throw new Error(`input-file 第 ${idx + 1} 条 location 无效（line 须 >= 1，column 须 >= 0）`);
      }

      tasks.push({
        entry: { url: scriptUrl, tag, text },
        position: {
          line: location.line,
          column: location.column
        }
      });
    });

    return tasks;
  }

  _buildTaskBreakpointPoints(task) {
    if (task.position && Number.isInteger(task.position.line) && Number.isInteger(task.position.column)) {
      return [{ line: task.position.line, column: task.position.column }];
    }

    const points = [];
    if (task.startPosition && Number.isInteger(task.startPosition.line) && Number.isInteger(task.startPosition.column)) {
      points.push({ line: task.startPosition.line, column: task.startPosition.column });
    }
    if (task.endPosition && Number.isInteger(task.endPosition.line) && Number.isInteger(task.endPosition.column)) {
      points.push({ line: task.endPosition.line, column: task.endPosition.column });
    }

    const uniq = new Map();
    points.forEach((p) => {
      uniq.set(`${p.line}:${p.column}`, p);
    });
    return Array.from(uniq.values());
  }

  _upsertPersistentBreakpoint(url, lineNumber, columnNumber, tag, text) {
    const storagePath = path.join(process.cwd(), '.cdp-breakpoints.json');
    let list = [];

    try {
      if (fs.existsSync(storagePath)) {
        const raw = fs.readFileSync(storagePath, 'utf8').trim();
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            list = parsed;
          }
        }
      }
    } catch (_) {
      list = [];
    }

    const exists = list.some((bp) =>
      bp &&
      bp.url === url &&
      bp.lineNumber === lineNumber &&
      bp.options &&
      bp.options.columnNumber === columnNumber &&
      bp.active !== false
    );

    if (exists) {
      if (tag || text) {
        let touched = false;
        list = list.map((bp) => {
          if (
            bp &&
            bp.url === url &&
            bp.lineNumber === lineNumber &&
            bp.options &&
            bp.options.columnNumber === columnNumber &&
            bp.active !== false
          ) {
            const next = { ...bp, options: { ...(bp.options || {}) } };
            let changed = false;
            if (tag && !bp.tag) {
              next.tag = tag;
              next.options.tag = tag;
              changed = true;
            }
            if (text && !bp.text) {
              next.text = text;
              next.options.text = text;
              changed = true;
            }
            if (changed) {
              touched = true;
              return next;
            }
          }
          return bp;
        });
        if (touched) {
          fs.writeFileSync(storagePath, JSON.stringify(list, null, 2));
        }
      }
      return false;
    }

    list.push({
      id: `manual-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      url,
      lineNumber,
      options: { columnNumber, tag, text },
      tag,
      text,
      type: 'script',
      active: true
    });

    fs.writeFileSync(storagePath, JSON.stringify(list, null, 2));
    return true;
  }

  _resolveFunctionExitPosition(entry) {
    const startLine = entry.location.line;
    const startColumn = entry.location.column;
    const code = entry.functionCode;

    const closeBraceIndex = code.lastIndexOf('}');
    const targetIndex = closeBraceIndex >= 0 ? closeBraceIndex : Math.max(0, code.length - 1);

    const position = this._advancePositionByIndex(startLine, startColumn, code, targetIndex);
    return {
      line: position.line,
      column: position.column
    };
  }

  _advancePositionByIndex(startLine, startColumn, code, targetIndex) {
    let line = startLine;
    let column = startColumn;

    for (let i = 0; i < targetIndex; i++) {
      const ch = code[i];
      if (ch === '\n') {
        line += 1;
        column = 0;
      } else {
        column += 1;
      }
    }

    return { line, column };
  }
}

module.exports = BreakpointExitCommand;
