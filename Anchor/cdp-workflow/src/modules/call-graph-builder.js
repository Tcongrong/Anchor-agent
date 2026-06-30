/**
 * 从 anchor-snapshots.jsonl 构建函数调用关系图；
 * runtime-function-logs.deduped.json 仅提供函数 tag 映射，不使用 callStack。
 */

/**
 * @param {string} tag
 * @returns {{ scriptUrl: string, functionName: string, line: number, column: number }|null}
 */
function parseTag(tag) {
  if (!tag || typeof tag !== 'string') {
    return null;
  }
  const sep = tag.indexOf('::');
  if (sep === -1) {
    return null;
  }
  const scriptUrl = tag.slice(0, sep);
  const rest = tag.slice(sep + 2);
  const at = rest.lastIndexOf('@');
  if (at === -1) {
    return null;
  }
  const functionName = rest.slice(0, at);
  const loc = rest.slice(at + 1).split(':');
  if (loc.length < 2) {
    return null;
  }
  return {
    scriptUrl,
    functionName,
    line: Number(loc[0]),
    column: Number(loc[1])
  };
}

/**
 * @param {string} tag
 * @returns {string}
 */
function tagToNodeId(tag) {
  return tag;
}

/**
 * @param {string} scriptUrl
 * @param {string} functionName
 * @param {number} line
 * @param {number} column
 * @returns {string}
 */
function makeSyntheticNodeId(scriptUrl, functionName, line, column) {
  const url = scriptUrl || 'unknown';
  const name = functionName || '(anonymous)';
  return `${url}::${name}@${line}:${column}`;
}

/**
 * @param {string} functionName
 * @returns {string}
 */
function normalizeFunctionName(functionName) {
  if (!functionName) {
    return '(anonymous)';
  }
  const trimmed = functionName.trim();
  if (trimmed === '(匿名函数)' || trimmed === '(anonymous)') {
    return '(anonymous)';
  }
  return trimmed;
}

/**
 * @param {object} record
 * @returns {string}
 */
function recordLabel(record) {
  const parsed = parseTag(record.tag);
  return parsed ? parsed.functionName : record.tag;
}

class CallGraphBuilder {
  /**
   * @param {object} [options]
   * @param {Array} [options.logRecords] - 仅用于 tag 映射
   * @param {Array} [options.anchorSnapshots] - 构图数据源
   */
  constructor(options = {}) {
    this.logRecords = options.logRecords || [];
    this.anchorSnapshots = options.anchorSnapshots || [];
    this.nodes = new Map();
    this.syncEdges = new Map();
    this.asyncEdges = new Map();
    this._tagByName = new Map();
    this._tagByColumn = new Map();
    this._anonymousTags = [];
    this._buildTagRegistry();
  }

  /** 从 deduped 日志建立 tag 查找表（不使用 callStack） */
  _buildTagRegistry() {
    for (const record of this.logRecords) {
      const parsed = parseTag(record.tag);
      if (!parsed) {
        continue;
      }

      const base = basename(parsed.scriptUrl);
      const nameKey = `${base}::${parsed.functionName}`;
      if (!this._tagByName.has(nameKey)) {
        this._tagByName.set(nameKey, record.tag);
      }

      const colKey = `${base}::col:${parsed.column}`;
      if (!this._tagByColumn.has(colKey)) {
        this._tagByColumn.set(colKey, record.tag);
      }

      if (parsed.functionName === '(anonymous)' || parsed.functionName.startsWith('anonymous')) {
        this._anonymousTags.push({
          tag: record.tag,
          basename: base,
          column: parsed.column
        });
      }
    }
  }

  /**
   * @returns {{ nodes: Array, syncEdges: Array, asyncEdges: Array, stats: object }}
   */
  build() {
    for (const snapshot of this.anchorSnapshots) {
      this._addEdgesFromAnchor(snapshot);
    }

    return {
      nodes: [...this.nodes.values()],
      syncEdges: [...this.syncEdges.values()],
      asyncEdges: [...this.asyncEdges.values()],
      stats: {
        nodeCount: this.nodes.size,
        syncEdgeCount: this.syncEdges.size,
        asyncEdgeCount: this.asyncEdges.size,
        tagRegistryCount: this.logRecords.length,
        anchorSnapshotCount: this.anchorSnapshots.length,
        nodesWithTag: [...this.nodes.values()].filter((node) => node.tag).length,
        nodesWithoutTag: [...this.nodes.values()].filter((node) => !node.tag).length
      }
    };
  }

  /**
   * @param {object} snapshot
   */
  _addEdgesFromAnchor(snapshot) {
    const sh = snapshot.anchor?.Sh || [];
    const ah = snapshot.anchor?.Ah || [];
    const breakpointTag = snapshot.breakpoint?.tag || null;

    const shIds = [];
    for (const frame of sh) {
      const nodeId = this._resolveAnchorFrame(frame, breakpointTag);
      shIds.push(nodeId);
    }

    for (let i = 0; i < shIds.length - 1; i += 1) {
      const callee = shIds[i];
      const caller = shIds[i + 1];
      if (callee && caller && callee !== caller) {
        this._addSyncEdge(caller, callee, 'anchor-Sh');
      }
    }

    this._addAsyncEdgesFromAh(ah, shIds, breakpointTag);
  }

  /**
   * @param {Array} ah
   * @param {string[]} shIds
   * @param {string|null} breakpointTag
   */
  _addAsyncEdgesFromAh(ah, shIds, breakpointTag) {
    const framesByDepth = new Map();
    const segmentByDepth = new Map();

    for (const item of ah) {
      if (item.kind === 'async-segment') {
        segmentByDepth.set(item.depth, item.description || 'async');
        if (!framesByDepth.has(item.depth)) {
          framesByDepth.set(item.depth, []);
        }
      } else if (item.kind === 'async-frame') {
        if (!framesByDepth.has(item.depth)) {
          framesByDepth.set(item.depth, []);
        }
        const nodeId = this._resolveAnchorFrame(item, breakpointTag);
        framesByDepth.get(item.depth).push(nodeId);
      }
    }

    const depths = [...framesByDepth.keys()].sort((a, b) => a - b);
    for (let i = 0; i < depths.length - 1; i += 1) {
      const innerDepth = depths[i];
      const outerDepth = depths[i + 1];
      const innerFrames = framesByDepth.get(innerDepth) || [];
      const outerFrames = framesByDepth.get(outerDepth) || [];
      if (!innerFrames.length || !outerFrames.length) {
        continue;
      }

      const innerFrame = innerFrames[0];
      const outerFrame = outerFrames[outerFrames.length - 1];
      const label = segmentByDepth.get(innerDepth) || 'async';
      if (innerFrame && outerFrame && innerFrame !== outerFrame) {
        this._addAsyncEdge(outerFrame, innerFrame, label, 'anchor-Ah');
      }
    }

    if (depths.length > 0 && shIds.length > 0) {
      const innermostDepth = depths[0];
      const innerFrames = framesByDepth.get(innermostDepth) || [];
      const syncRoot = shIds[shIds.length - 1];
      const firstAsyncFrame = innerFrames[0];
      const label = segmentByDepth.get(innermostDepth) || 'async';
      if (syncRoot && firstAsyncFrame && syncRoot !== firstAsyncFrame) {
        this._addAsyncEdge(firstAsyncFrame, syncRoot, label, 'anchor-Ah');
      }
    }

    for (const frameIds of framesByDepth.values()) {
      for (let i = 0; i < frameIds.length - 1; i += 1) {
        const callee = frameIds[i];
        const caller = frameIds[i + 1];
        if (callee && caller && callee !== caller) {
          this._addSyncEdge(caller, callee, 'anchor-Ah-context');
        }
      }
    }
  }

  /**
   * @param {object} frame
   * @param {string|null} [breakpointTag]
   * @returns {string}
   */
  _resolveAnchorFrame(frame, breakpointTag = null) {
    const functionName = normalizeFunctionName(frame.functionName);
    const scriptUrl = this._resolveScriptUrl(frame.url, breakpointTag);
    const line = frame.line != null ? frame.line : 1;
    const column = frame.column != null ? frame.column : 0;

    const tag = this._lookupTag(functionName, scriptUrl, column, breakpointTag);
    if (tag) {
      this._registerNode(tag, {
        id: tag,
        label: recordLabel({ tag }),
        tag,
        source: 'anchor'
      });
      return tag;
    }

    const nodeId = makeSyntheticNodeId(scriptUrl, functionName, line, column);
    this._registerNode(nodeId, {
      id: nodeId,
      label: functionName,
      tag: null,
      source: 'anchor'
    });
    return nodeId;
  }

  /**
   * @param {string} url
   * @param {string|null} breakpointTag
   * @returns {string}
   */
  _resolveScriptUrl(url, breakpointTag) {
    if (url && !url.startsWith('script:')) {
      return url;
    }
    const parsed = breakpointTag ? parseTag(breakpointTag) : null;
    return parsed?.scriptUrl || url || 'unknown';
  }

  /**
   * @param {string} functionName
   * @param {string} scriptUrl
   * @param {number} column
   * @param {string|null} breakpointTag
   * @returns {string|null}
   */
  _lookupTag(functionName, scriptUrl, column, breakpointTag) {
    const base = basename(scriptUrl);

    if (breakpointTag) {
      const bp = parseTag(breakpointTag);
      if (bp && normalizeFunctionName(bp.functionName) === functionName) {
        return breakpointTag;
      }
    }

    if (functionName !== '(anonymous)') {
      const byName = this._tagByName.get(`${base}::${functionName}`);
      if (byName) {
        return byName;
      }
    }

    const byColumn = this._tagByColumn.get(`${base}::col:${column}`);
    if (byColumn) {
      return byColumn;
    }

    if (functionName === '(anonymous)') {
      return this._lookupAnonymousTag(base, column);
    }

    return null;
  }

  /**
   * @param {string} base
   * @param {number} column
   * @returns {string|null}
   */
  _lookupAnonymousTag(base, column) {
    let best = null;
    let bestDistance = Infinity;

    for (const entry of this._anonymousTags) {
      if (entry.basename !== base) {
        continue;
      }
      const distance = Math.abs(entry.column - column);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = entry.tag;
      }
    }

    return bestDistance <= 500 ? best : null;
  }

  /**
   * @param {string} from
   * @param {string} to
   * @param {string} source
   */
  _addSyncEdge(from, to, source) {
    const key = `${from} -> ${to}`;
    const existing = this.syncEdges.get(key);
    if (existing) {
      existing.count += 1;
      existing.sources.add(source);
      return;
    }
    this.syncEdges.set(key, {
      from,
      to,
      type: 'sync',
      count: 1,
      sources: new Set([source])
    });
    this._ensureNode(from);
    this._ensureNode(to);
  }

  /**
   * @param {string} from
   * @param {string} to
   * @param {string} label
   * @param {string} source
   */
  _addAsyncEdge(from, to, label, source) {
    const key = `${from} -[${label}]-> ${to}`;
    const existing = this.asyncEdges.get(key);
    if (existing) {
      existing.count += 1;
      existing.sources.add(source);
      return;
    }
    this.asyncEdges.set(key, {
      from,
      to,
      type: 'async',
      label,
      count: 1,
      sources: new Set([source])
    });
    this._ensureNode(from);
    this._ensureNode(to);
  }

  /**
   * @param {string} nodeId
   */
  _ensureNode(nodeId) {
    if (!this.nodes.has(nodeId)) {
      const parsed = parseTag(nodeId);
      this._registerNode(nodeId, {
        id: nodeId,
        label: parsed?.functionName || nodeId.split('::').pop()?.split('@')[0] || nodeId,
        tag: parsed ? nodeId : null,
        source: 'anchor'
      });
    }
  }

  /**
   * @param {string} nodeId
   * @param {object} node
   */
  _registerNode(nodeId, node) {
    if (!this.nodes.has(nodeId)) {
      this.nodes.set(nodeId, node);
      return;
    }
    const existing = this.nodes.get(nodeId);
    if (!existing.tag && node.tag) {
      existing.tag = node.tag;
    }
  }
}

/**
 * @param {string} url
 * @returns {string}
 */
function basename(url) {
  if (!url) {
    return '';
  }
  const parts = url.split('/');
  return parts[parts.length - 1] || url;
}

/**
 * @param {object} graph
 * @returns {object}
 */
function serializeGraph(graph) {
  return {
    generatedAt: new Date().toISOString(),
    stats: graph.stats,
    nodes: graph.nodes,
    syncEdges: graph.syncEdges.map((edge) => ({
      from: edge.from,
      to: edge.to,
      type: edge.type,
      count: edge.count,
      sources: [...edge.sources]
    })),
    asyncEdges: graph.asyncEdges.map((edge) => ({
      from: edge.from,
      to: edge.to,
      type: edge.type,
      label: edge.label,
      count: edge.count,
      sources: [...edge.sources]
    }))
  };
}

/**
 * @param {object} graph
 * @param {'sync'|'async'} kind
 * @returns {string}
 */
function toDot(graph, kind) {
  const edges = kind === 'sync' ? graph.syncEdges : graph.asyncEdges;
  const title = kind === 'sync' ? 'Sync Call Graph (from anchor Sh)' : 'Async Call Graph (from anchor Ah)';

  const lines = [
    'digraph CallGraph {',
    '  rankdir=TB;',
    '  node [shape=box, fontname="Helvetica"];',
    `  label="${title}";`,
    '  labelloc=t;'
  ];

  const usedNodes = new Set();
  for (const edge of edges) {
    usedNodes.add(edge.from);
    usedNodes.add(edge.to);
  }

  for (const node of graph.nodes) {
    if (!usedNodes.has(node.id)) {
      continue;
    }
    const label = escapeDot(node.label || node.id);
    lines.push(`  "${escapeDot(node.id)}" [label="${label}"];`);
  }

  for (const edge of edges) {
    const from = escapeDot(edge.from);
    const to = escapeDot(edge.to);
    if (kind === 'async') {
      const edgeLabel = escapeDot(`${edge.label || 'async'} (${edge.count})`);
      lines.push(`  "${from}" -> "${to}" [label="${edgeLabel}", style=dashed, color="#2563eb"];`);
    } else {
      lines.push(`  "${from}" -> "${to}" [label="${edge.count}", color="#059669"];`);
    }
  }

  lines.push('}');
  return `${lines.join('\n')}\n`;
}

/**
 * @param {object} graph
 * @param {'sync'|'async'} kind
 * @returns {string}
 */
function toMermaid(graph, kind) {
  const edges = kind === 'sync' ? graph.syncEdges : graph.asyncEdges;
  const title = kind === 'sync' ? '同步调用关系图 (anchor Sh)' : '异步调用关系图 (anchor Ah)';
  const lines = ['flowchart TB', `%% ${title}`];

  const nodeRef = new Map();
  let counter = 0;
  const ref = (nodeId) => {
    if (!nodeRef.has(nodeId)) {
      counter += 1;
      nodeRef.set(nodeId, `N${counter}`);
    }
    return nodeRef.get(nodeId);
  };

  for (const node of graph.nodes) {
    if (![...edges].some((edge) => edge.from === node.id || edge.to === node.id)) {
      continue;
    }
    const label = (node.label || node.id).replace(/"/g, '\\"');
    lines.push(`  ${ref(node.id)}["${label}"]`);
  }

  for (const edge of edges) {
    if (kind === 'async') {
      lines.push(`  ${ref(edge.from)} -. "${edge.label || 'async'}" .-> ${ref(edge.to)}`);
    } else {
      lines.push(`  ${ref(edge.from)} --> ${ref(edge.to)}`);
    }
  }

  return `${lines.join('\n')}\n`;
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeDot(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

/**
 * @param {string} filePath
 * @returns {Array}
 */
function loadAnchorSnapshots(filePath) {
  const fs = require('fs');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) {
    return [];
  }
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`anchor 文件第 ${index + 1} 行 JSON 解析失败: ${error.message}`);
      }
    });
}

/**
 * @param {string} filePath
 * @returns {Array}
 */
function loadDedupedLogs(filePath) {
  const fs = require('fs');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!Array.isArray(data.records)) {
    throw new Error('日志文件缺少 records 数组');
  }
  return data.records;
}

module.exports = {
  CallGraphBuilder,
  parseTag,
  serializeGraph,
  toDot,
  toMermaid,
  loadAnchorSnapshots,
  loadDedupedLogs
};
