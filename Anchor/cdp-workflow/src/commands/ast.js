/**
 * AST 工作流命令（export / inject-fetch / collect-console / collect-console-all / dedupe-logs）
 */

class AstCommand {
  constructor(astAnalyzer) {
    this.astAnalyzer = astAnalyzer;
  }

  register(program) {
    const ast = program
      .command('ast')
      .description('AST 分析与导出命令');

    ast
      .command('export')
      .description('导出页面可访问 JS 的 AST，并生成 function->标签映射')
      .option('-o, --out <dir>', '输出目录', 'cdp-ast-output')
      .option('--reload-before-collect', '导出前刷新并预热采集动态脚本')
      .option('--collect-ms <ms>', '动态脚本预热采集时长（毫秒）', (v) => parseInt(v, 10), 3000)
      .action(async (options) => {
        try {
          console.log('开始导出 AST 和 function 标签映射...');
          const result = await this.astAnalyzer.exportAstAndFunctionTags({
            outputDir: options.out,
            reloadBeforeCollect: !!options.reloadBeforeCollect,
            collectMs: options.collectMs
          });

          console.log('\n导出完成:');
          console.log(`- 输出目录: ${result.outputDir}`);
          console.log(`- AST 目录: ${result.astDir}`);
          console.log(`- 映射文件: ${result.mapFilePath}`);
          console.log(`- 摘要文件: ${result.summaryFilePath}`);
          console.log(`- 发现脚本数: ${result.scriptCount}`);
          console.log(`- 成功分析脚本数: ${result.analyzedCount}`);
          console.log(`- 函数映射数量: ${result.functionCount}`);
          process.exit(0);
        } catch (error) {
          console.error('AST 导出失败:', error.message);
          process.exit(1);
        }
      });

    ast
      .command('inject-fetch')
      .description('通过 Fetch 拦截响应体注入函数标签（推荐）')
      .option('-i, --input <dir>', 'ast export 输出目录', 'cdp-ast-output')
      .option('-m, --map <file>', '映射文件路径，默认使用 <input>/function-tag-map.json')
      .option('-n, --no-reload', '不主动刷新页面（默认会刷新）')
      .option('--watch-ms <ms>', '拦截监听时长（毫秒）', (v) => parseInt(v, 10), 30000)
      .option('--log-min-interval-ms <ms>', '同一函数标签日志最小间隔（毫秒，0 表示不限流）', (v) => parseInt(v, 10), 300)
      .option('--hydrate-missed', '对“监听窗口内未请求”的脚本主动补请求后再注入')
      .option('--hydrate-ms <ms>', '补请求后的等待时长（毫秒）', (v) => parseInt(v, 10), 8000)
      .action(async (options) => {
        try {
          console.log('开始 Fetch 拦截注入函数标签日志...');
          const result = await this.astAnalyzer.injectViaFetchInterception({
            inputDir: options.input,
            mapFile: options.map || null,
            reload: options.reload !== false,
            watchMs: options.watchMs,
            logMinIntervalMs: options.logMinIntervalMs,
            hydrateMissed: !!options.hydrateMissed,
            hydrateMs: options.hydrateMs
          });

          console.log('\nFetch 注入完成:');
          console.log(`- 映射文件: ${result.mapFilePath}`);
          console.log(`- 拦截脚本数: ${result.patchedScripts}`);
          console.log(`- 注入函数数: ${result.patchedFunctions}`);
          console.log(`- 是否刷新页面: ${result.reloaded ? '是' : '否'}`);
          console.log(`- 监听时长(ms): ${result.watchedMs}`);
          console.log(`- 日志最小间隔(ms): ${result.logMinIntervalMs}`);
          console.log(`- 是否补请求未命中脚本: ${result.hydratedMissed ? '是' : '否'}`);
          console.log(`- 预热命中(未执行)脚本数: ${result.warmedOnlyCount}`);
          process.exit(0);
        } catch (error) {
          console.error('Fetch 注入失败:', error.message);
          process.exit(1);
        }
      });

    ast
      .command('collect-console')
      .description('采集页面 console.log 中的函数标签，并输出 JSON')
      .option('-i, --input <dir>', 'ast export 输出目录', 'cdp-ast-output')
      .option('-m, --map <file>', '映射文件路径，默认使用 <input>/function-tag-map.json')
      .option('-o, --out <file>', '采集结果 JSON 路径', 'cdp-ast-output/runtime-function-logs.json')
      .option('--watch-ms <ms>', '监听时长（毫秒）', (v) => parseInt(v, 10), 30000)
      .action(async (options) => {
        try {
          console.log('开始采集页面 console 函数标签日志...');
          const result = await this.astAnalyzer.collectConsoleFunctionLogs({
            inputDir: options.input,
            mapFile: options.map || null,
            outputFile: options.out,
            watchMs: options.watchMs
          });

          console.log('\n控制台采集完成:');
          console.log(`- 映射文件: ${result.mapFilePath}`);
          console.log(`- 输出文件: ${result.outputFile}`);
          console.log(`- 采集条数: ${result.logCount}`);
          console.log(`- 去重标签数: ${result.uniqueTagCount}`);
          console.log(`- 监听时长(ms): ${result.watchedMs}`);
          process.exit(0);
        } catch (error) {
          console.error('控制台日志采集失败:', error.message);
          process.exit(1);
        }
      });

    ast
      .command('collect-console-all')
      .description('采集页面全部 console 输出，并保存为 JSON 列表')
      .option('-o, --out <file>', '采集结果 JSON 路径', 'cdp-ast-output/console-output.json')
      .option('--watch-ms <ms>', '监听时长（毫秒）', (v) => parseInt(v, 10), 30000)
      .action(async (options) => {
        try {
          console.log('开始采集页面全部 console 输出...');
          const result = await this.astAnalyzer.collectAllConsoleOutput({
            outputFile: options.out,
            watchMs: options.watchMs
          });

          console.log('\n控制台输出采集完成:');
          console.log(`- 输出文件: ${result.outputFile}`);
          console.log(`- 采集条数: ${result.logCount}`);
          console.log(`- 监听时长(ms): ${result.watchedMs}`);
          process.exit(0);
        } catch (error) {
          console.error('控制台输出采集失败:', error.message);
          process.exit(1);
        }
      });

    ast
      .command('dedupe-logs')
      .description('按函数标签去重 runtime-function-logs.json，补充函数代码片段，并自动纳入 HTML 内联脚本函数')
      .option('-i, --input <dir>', 'ast export 输出目录', 'cdp-ast-output')
      .option('-m, --map <file>', '映射文件路径，默认使用 <input>/function-tag-map.json')
      .option('-l, --logs <file>', '运行时日志文件', 'cdp-ast-output/runtime-function-logs.json')
      .option('-o, --out <file>', '去重输出 JSON 路径', 'cdp-ast-output/runtime-function-logs.deduped.json')
      .action(async (options) => {
        try {
          console.log('开始按函数标签去重运行时日志...');
          const result = await this.astAnalyzer.dedupeRuntimeFunctionLogs({
            inputDir: options.input,
            mapFile: options.map || null,
            logsFile: options.logs,
            outputFile: options.out
          });

          console.log('\n日志去重完成:');
          console.log(`- 映射文件: ${result.mapFilePath}`);
          console.log(`- 原始日志: ${result.sourceLogsFile}`);
          console.log(`- 输出文件: ${result.outputFile}`);
          console.log(`- 去重条数: ${result.dedupedCount}`);
          console.log(`- 来自 HTML 映射补充: ${result.htmlAddedCount}`);
          process.exit(0);
        } catch (error) {
          console.error('日志去重失败:', error.message);
          process.exit(1);
        }
      });
  }
}

module.exports = AstCommand;
