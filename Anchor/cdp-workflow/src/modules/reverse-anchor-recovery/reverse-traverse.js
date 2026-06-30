/**
 * 从断点观测函数双向遍历调用边，收集候选函数（caller 与 callee）
 *
 * 向上（caller）与向下（callee）分别 BFS，各自至多 maxPerDirection 个函数、maxDepth 跳。
 */

const SYNC_ASYNC_KINDS = new Set(['sync', 'async']);

/** 每方向默认最多追溯的函数数（不含观测起点） */
const DEFAULT_MAX_PER_DIRECTION = 7;

/** 每方向默认最大跳数 */
const DEFAULT_MAX_DEPTH = 7;

/**
 * @param {Map<string, string[]>} adj
 * @param {string} from
 * @param {string} to
 */
function appendAdjacency(adj, from, to) {
  if (!adj.has(from)) {
    adj.set(from, []);
  }
  adj.get(from).push(to);
}

/**
 * @param {object} graph
 * @returns {{ forwardAdj: Map<string, string[]>, reverseAdj: Map<string, string[]> }}
 */
function buildCallAdjacency(graph) {
  const forwardAdj = new Map();
  const reverseAdj = new Map();

  for (const edge of graph.edges || []) {
    if (!SYNC_ASYNC_KINDS.has(edge.kind)) continue;
    appendAdjacency(forwardAdj, edge.from, edge.to);
    appendAdjacency(reverseAdj, edge.to, edge.from);
  }

  return { forwardAdj, reverseAdj };
}

/**
 * @param {object} graph
 * @returns {Map<string, string[]>}
 */
function buildReverseAdjacency(graph) {
  return buildCallAdjacency(graph).reverseAdj;
}

/**
 * @param {object} graph
 * @returns {Map<string, string[]>}
 */
function buildForwardAdjacency(graph) {
  return buildCallAdjacency(graph).forwardAdj;
}

/**
 * 单方向有限 BFS（不含起点的 collected 计数）
 * @param {Map<string, string[]>} adj
 * @param {string} startTag
 * @param {'caller'|'callee'} directionLabel
 * @param {{ maxDepth: number, maxCount: number }} limits
 */
function bfsLimited(adj, startTag, directionLabel, limits) {
  const { maxDepth, maxCount } = limits;
  const distances = new Map();
  const paths = new Map();
  const directions = new Map();
  let collected = 0;

  const queue = [startTag];
  distances.set(startTag, 0);
  paths.set(startTag, [startTag]);

  const visited = new Set([startTag]);

  while (queue.length && collected < maxCount) {
    const current = queue.shift();
    const dist = distances.get(current);
    if (dist >= maxDepth) {
      continue;
    }

    for (const next of adj.get(current) || []) {
      if (visited.has(next)) {
        continue;
      }
      if (collected >= maxCount) {
        break;
      }

      visited.add(next);
      collected += 1;
      const nextDist = dist + 1;
      distances.set(next, nextDist);
      paths.set(next, [...paths.get(current), next]);
      directions.set(next, directionLabel);
      queue.push(next);
    }
  }

  return { distances, paths, directions };
}

/**
 * @param {object} graph
 * @param {string} startTag
 * @param {{ maxDepth?: number, maxPerDirection?: number, maxCount?: number }} options
 * @returns {{
 *   candidates: string[],
 *   paths: Map<string, string[]>,
 *   distances: Map<string, number>,
 *   directions: Map<string, 'origin' | 'caller' | 'callee'>,
 *   maxDepth: number,
 *   maxPerDirection: number
 * }}
 */
function reverseTraverseCandidates(graph, startTag, options = {}) {
  const maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
  const maxPerDirection = options.maxPerDirection ?? options.maxCount ?? DEFAULT_MAX_PER_DIRECTION;
  const limits = { maxDepth, maxCount: maxPerDirection };
  const { forwardAdj, reverseAdj } = buildCallAdjacency(graph);

  const up = bfsLimited(reverseAdj, startTag, 'caller', limits);
  const down = bfsLimited(forwardAdj, startTag, 'callee', limits);

  const distances = new Map([[startTag, 0]]);
  const paths = new Map([[startTag, [startTag]]]);
  const directions = new Map([[startTag, 'origin']]);

  for (const partial of [up, down]) {
    for (const [tag, dist] of partial.distances) {
      if (tag === startTag || distances.has(tag)) {
        continue;
      }
      distances.set(tag, dist);
      paths.set(tag, partial.paths.get(tag));
      directions.set(tag, partial.directions.get(tag));
    }
  }

  const candidates = [...distances.keys()];
  return {
    candidates,
    paths,
    distances,
    directions,
    maxDepth,
    maxPerDirection
  };
}

/**
 * @param {object} graph
 * @param {string} tag
 * @returns {object|null}
 */
function findFunctionNode(graph, tag) {
  return (graph.nodes || []).find((n) => n.type === 'function' && (n.tag === tag || n.id === tag)) || null;
}

module.exports = {
  DEFAULT_MAX_DEPTH,
  DEFAULT_MAX_PER_DIRECTION,
  buildCallAdjacency,
  buildReverseAdjacency,
  buildForwardAdjacency,
  bfsLimited,
  reverseTraverseCandidates,
  findFunctionNode
};
