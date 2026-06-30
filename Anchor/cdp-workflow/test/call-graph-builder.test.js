const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');

const {
  CallGraphBuilder,
  parseTag,
  toDot,
  toMermaid,
  loadDedupedLogs,
  loadAnchorSnapshots
} = require('../src/modules/call-graph-builder');

const FIXTURE_LOGS = path.join(__dirname, '..', 'cdp-ast-output', 'runtime-function-logs.deduped.json');
const FIXTURE_ANCHOR = path.join(__dirname, '..', 'anchor-snapshots.jsonl');

test('call-graph: parseTag 解析函数标签', () => {
  const parsed = parseTag('http://127.0.0.1:4173/assets/search.app.bundle.js::runCatalogSearch@1:14548');
  assert.equal(parsed.functionName, 'runCatalogSearch');
  assert.equal(parsed.column, 14548);
});

test('call-graph: 仅从 anchor 构建边，不使用 callStack', () => {
  const records = loadDedupedLogs(FIXTURE_LOGS);
  const anchorSnapshots = loadAnchorSnapshots(FIXTURE_ANCHOR);
  const builder = new CallGraphBuilder({ logRecords: records, anchorSnapshots });
  const graph = builder.build();

  assert.ok(graph.stats.anchorSnapshotCount >= 1);
  assert.ok(graph.stats.syncEdgeCount > 0);
  assert.ok(graph.stats.asyncEdgeCount > 0);
  assert.ok(graph.nodes.every((node) => node.source === 'anchor'));
  assert.ok(graph.syncEdges.every((edge) => [...edge.sources].every((s) => s.startsWith('anchor'))));
  assert.ok(graph.asyncEdges.every((edge) => [...edge.sources].every((s) => s.startsWith('anchor'))));
  assert.ok(graph.nodes.every((node) => !node.id.includes('@286:')));
});

test('call-graph: anchor 帧通过函数名映射到 tag', () => {
  const records = loadDedupedLogs(FIXTURE_LOGS);
  const anchorSnapshots = loadAnchorSnapshots(FIXTURE_ANCHOR);
  const builder = new CallGraphBuilder({ logRecords: records, anchorSnapshots });
  const graph = builder.build();

  const nodeByLabel = new Map(graph.nodes.map((node) => [node.label, node]));
  assert.equal(nodeByLabel.get('query:catalog.seal')?.tag?.includes('query:catalog.seal@1:9816'), true);
  assert.equal(nodeByLabel.get('resolveQueryContract')?.tag?.includes('resolveQueryContract@1:10150'), true);
  assert.equal(nodeByLabel.get('runCatalogSearch')?.tag?.includes('runCatalogSearch@1:14548'), true);
  assert.equal(nodeByLabel.get('dispatchSearchCommand')?.tag?.includes('dispatchSearchCommand@1:17801'), true);
});

test('call-graph: DOT 与 Mermaid 输出', () => {
  const records = loadDedupedLogs(FIXTURE_LOGS);
  const anchorSnapshots = loadAnchorSnapshots(FIXTURE_ANCHOR);
  const builder = new CallGraphBuilder({ logRecords: records, anchorSnapshots });
  const graph = builder.build();

  const syncDot = toDot(graph, 'sync');
  const asyncDot = toDot(graph, 'async');
  const syncMermaid = toMermaid(graph, 'sync');
  const asyncMermaid = toMermaid(graph, 'async');

  assert.match(syncDot, /^digraph CallGraph/);
  assert.match(asyncDot, /style=dashed/);
  assert.match(syncMermaid, /^flowchart TB/);
  assert.match(asyncMermaid, /-\./);
});
