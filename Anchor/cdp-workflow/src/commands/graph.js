/**
 * 调用关系图命令 — 分析 anchor 快照与 deduped 日志，输出同步/异步边图
 */

const fs = require('fs');
const path = require('path');
const {
  CallGraphBuilder,
  serializeGraph,
  toDot,
  toMermaid,
  loadAnchorSnapshots,
  loadDedupedLogs
} = require('../modules/call-graph-builder');
const { buildStaticCG, buildExplicitStaticCG, DEFAULT_NETWORK_SINK_APIS } = require('../modules/static-cg-builder');

class GraphCommand {
  register(program) {
    const graph = program
      .command('graph')
      .description('函数调用关系图分析');

    graph
      .command('build')
      .description('从 anchor-snapshots.jsonl 构建同步/异步调用关系图（deduped 日志仅用于 tag 映射）')
      .option(
        '--anchor <file>',
        'ANCHOR 快照 JSONL 路径（构图数据源）',
        path.join(process.cwd(), 'anchor-snapshots.jsonl')
      )
      .option(
        '--logs <file>',
        '去重运行时日志路径（仅用于函数 tag 映射，不使用 callStack）',
        path.join(process.cwd(), 'cdp-ast-output', 'runtime-function-logs.deduped.json')
      )
      .option(
        '-o, --out <dir>',
        '输出目录',
        path.join(process.cwd(), 'cdp-ast-output', 'call-graph')
      )
      .option(
        '--format <formats>',
        '输出格式，逗号分隔: json,dot,mermaid',
        'json,dot,mermaid'
      )
      .action(async (options) => {
        try {
          await this._build(options);
          process.exit(0);
        } catch (error) {
          console.error('构建调用关系图失败:', error.message);
          process.exit(1);
        }
      });

    graph
      .command('static')
      .description('从 deduped 日志、function-tag-map 与 bundle AST 构建过近似静态调用图（StaticCG）')
      .option(
        '--logs <file>',
        '去重运行时日志路径',
        path.join(process.cwd(), 'cdp-ast-output', 'runtime-function-logs.deduped.json')
      )
      .option(
        '--map <file>',
        'function-tag-map.json 路径',
        path.join(process.cwd(), 'cdp-ast-output', 'function-tag-map.json')
      )
      .option(
        '--asts <dir>',
        'bundle AST 目录',
        path.join(process.cwd(), 'cdp-ast-output', 'asts')
      )
      .option(
        '--sinks <apis>',
        '额外 Sink API，逗号分隔（默认含 fetch/XMLHttpRequest.send/navigator.sendBeacon 等）',
        ''
      )
      .option(
        '-o, --out <file>',
        'StaticCG 输出 JSON 路径',
        path.join(process.cwd(), 'cdp-ast-output', 'static-call-graph.json')
      )
      .action(async (options) => {
        try {
          await this._buildStatic(options, { edgeFilter: 'all', label: 'StaticCG' });
          process.exit(0);
        } catch (error) {
          console.error('构建静态调用图失败:', error.message);
          process.exit(1);
        }
      });

    graph
      .command('static-explicit')
      .description('从 deduped 日志、function-tag-map 与 bundle AST 构建明确静态调用图（仅 kind=static 边，不含过近似边）')
      .option(
        '--logs <file>',
        '去重运行时日志路径',
        path.join(process.cwd(), 'cdp-ast-output', 'runtime-function-logs.deduped.json')
      )
      .option(
        '--map <file>',
        'function-tag-map.json 路径',
        path.join(process.cwd(), 'cdp-ast-output', 'function-tag-map.json')
      )
      .option(
        '--asts <dir>',
        'bundle AST 目录',
        path.join(process.cwd(), 'cdp-ast-output', 'asts')
      )
      .option(
        '--sinks <apis>',
        '额外 Sink API，逗号分隔（默认含 fetch/XMLHttpRequest.send/navigator.sendBeacon 等）',
        ''
      )
      .option(
        '-o, --out <file>',
        'ExplicitStaticCG 输出 JSON 路径',
        path.join(process.cwd(), 'cdp-ast-output', 'explicit-static-call-graph.json')
      )
      .action(async (options) => {
        try {
          await this._buildStatic(options, { edgeFilter: 'static', label: 'ExplicitStaticCG' });
          process.exit(0);
        } catch (error) {
          console.error('构建明确静态调用图失败:', error.message);
          process.exit(1);
        }
      });
  }

  /**
   * @param {object} options
   */
  async _build(options) {
    const anchorPath = path.resolve(options.anchor);
    const logsPath = path.resolve(options.logs);
    const outDir = path.resolve(options.out);
    const formats = new Set(
      String(options.format || 'json,dot,mermaid')
        .split(',')
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean)
    );

    const logRecords = loadDedupedLogs(logsPath);
    const anchorSnapshots = loadAnchorSnapshots(anchorPath);

    if (!anchorSnapshots.length) {
      throw new Error(`ANCHOR 快照为空或不存在: ${anchorPath}`);
    }

    const builder = new CallGraphBuilder({ logRecords, anchorSnapshots });
    const graph = builder.build();
    const serialized = serializeGraph(graph);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const written = [];

    if (formats.has('json')) {
      const jsonPath = path.join(outDir, 'call-graph.json');
      fs.writeFileSync(jsonPath, `${JSON.stringify(serialized, null, 2)}\n`, 'utf8');
      written.push(jsonPath);
    }

    if (formats.has('dot')) {
      const syncDotPath = path.join(outDir, 'sync-graph.dot');
      const asyncDotPath = path.join(outDir, 'async-graph.dot');
      fs.writeFileSync(syncDotPath, toDot(graph, 'sync'), 'utf8');
      fs.writeFileSync(asyncDotPath, toDot(graph, 'async'), 'utf8');
      written.push(syncDotPath, asyncDotPath);
    }

    if (formats.has('mermaid')) {
      const syncMermaidPath = path.join(outDir, 'sync-graph.mmd');
      const asyncMermaidPath = path.join(outDir, 'async-graph.mmd');
      fs.writeFileSync(syncMermaidPath, toMermaid(graph, 'sync'), 'utf8');
      fs.writeFileSync(asyncMermaidPath, toMermaid(graph, 'async'), 'utf8');
      written.push(syncMermaidPath, asyncMermaidPath);
    }

    console.log('\n调用关系图构建完成');
    console.log(`- ANCHOR 快照: ${anchorSnapshots.length} 条 (${anchorPath})`);
    console.log(`- Tag 映射表: ${logRecords.length} 条 (${logsPath})`);
    console.log(`- 节点: ${graph.stats.nodeCount}（有 tag: ${graph.stats.nodesWithTag}，无 tag: ${graph.stats.nodesWithoutTag}）`);
    console.log(`- 同步边: ${graph.stats.syncEdgeCount}`);
    console.log(`- 异步边: ${graph.stats.asyncEdgeCount}`);
    console.log('- 输出文件:');
    for (const file of written) {
      console.log(`  ${file}`);
    }

    if (formats.has('dot')) {
      console.log('\n渲染 PNG 示例:');
      console.log(`  dot -Tpng "${path.join(outDir, 'sync-graph.dot')}" -o sync-graph.png`);
      console.log(`  dot -Tpng "${path.join(outDir, 'async-graph.dot')}" -o async-graph.png`);
    }
  }

  /**
   * @param {object} options
   * @param {{ edgeFilter: 'all'|'static', label: string }} mode
   */
  async _buildStatic(options, mode = { edgeFilter: 'all', label: 'StaticCG' }) {
    const extraSinks = String(options.sinks || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const buildFn = mode.edgeFilter === 'static' ? buildExplicitStaticCG : buildStaticCG;
    const result = buildFn({
      dedupedFile: options.logs,
      mapFile: options.map,
      astsDir: options.asts,
      sinkApis: extraSinks.length
        ? [...new Set([...DEFAULT_NETWORK_SINK_APIS, ...extraSinks])]
        : undefined
    });

    const outPath = path.resolve(options.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');

    const stats = result[mode.label].stats;
    const title = mode.edgeFilter === 'static'
      ? '明确静态调用图（ExplicitStaticCG）'
      : '静态调用图（StaticCG）';
    console.log(`\n${title}构建完成`);
    console.log(`- 候选函数: ${stats.nodeCount}`);
    console.log(`- 已解析 AST: ${stats.parsedAstCount}`);
    console.log(`- 调用边: ${stats.edgeCount}（静态 ${stats.staticEdges}，过近似 ${stats.overapproxEdges}）`);
    if (mode.edgeFilter === 'static' && stats.excludedOverapproxEdges) {
      console.log(`- 已排除过近似边: ${stats.excludedOverapproxEdges}`);
    }
    console.log(`- Sink 节点: ${stats.sinkNodeCount}`);
    console.log(`- 未连通 Sink: ${stats.unreachableCount}`);
    console.log(`- 输出: ${outPath}`);
  }
}

module.exports = GraphCommand;
