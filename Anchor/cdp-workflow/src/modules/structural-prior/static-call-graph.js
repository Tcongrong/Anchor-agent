/**
 * 过近似静态调用图构建（与任务描述无关，可预计算）
 */

const { walkAst } = require('./ast-utils');
const { buildConstContext, resolveAlias, resolveMemberName } = require('./const-prop');
const { resolveCallSignature, SENSITIVE_APIS } = require('./api-extractor');

/** 已知框架 / 全局 API，用于解析混淆后的调用目标 */
const KNOWN_FRAMEWORK_NAMES = new Set([
  ...SENSITIVE_APIS,
  'setTimeout',
  'setInterval',
  'addEventListener',
  'querySelector',
  'getElementById',
  'JSON.parse',
  'JSON.stringify',
  'Object.assign',
  'Array.from',
  'Promise',
  'Map',
  'Set'
]);

/**
 * @typedef {object} StaticCallGraph
 * @property {string[]} nodes
 * @property {Array<{ from: string, to: string, kind: 'static'|'overapprox' }>} edges
 * @property {Record<string, string>} tagToName
 * @property {Record<string, string[]>} nameToTags
 */

/**
 * 将 tag 登记到 nameToTags；避免 functionName 与 Object.prototype 键冲突（如 valueOf）。
 * @param {Record<string, string[]>} nameToTags
 * @param {string} functionName
 * @param {string} tag
 */
function registerFunctionNameTag(nameToTags, functionName, tag) {
  if (!Object.prototype.hasOwnProperty.call(nameToTags, functionName)) {
    nameToTags[functionName] = [];
  }
  nameToTags[functionName].push(tag);
}

/**
 * @param {Array<{ tag: string, functionName?: string, component?: { functionName?: string } }>} candidates
 * @param {Map<string, import('acorn').Node|null>} astByTag
 * @returns {StaticCallGraph}
 */
function buildStaticCallGraph(candidates, astByTag) {
  const nodes = candidates.map((record) => record.tag);
  const nodeSet = new Set(nodes);
  const tagToName = {};
  const nameToTags = {};

  for (const record of candidates) {
    const functionName = record.functionName
      || record.component?.functionName
      || extractNameFromTag(record.tag);
    tagToName[record.tag] = functionName;
    registerFunctionNameTag(nameToTags, functionName, record.tag);
  }

  /** @type {StaticCallGraph['edges']} */
  const edges = [];
  const edgeKeys = new Set();

  const addEdge = (from, to, kind) => {
    if (!from || !to || from === to || !nodeSet.has(from) || !nodeSet.has(to)) {
      return;
    }
    const key = `${from}|${to}|${kind}`;
    if (edgeKeys.has(key)) {
      return;
    }
    edgeKeys.add(key);
    edges.push({ from, to, kind });
  };

  for (const record of candidates) {
    const callerTag = record.tag;
    const functionNode = astByTag.get(callerTag);
    if (!functionNode) {
      continue;
    }

    const context = buildConstContext(functionNode);
    walkAst(functionNode, (node) => {
      if (node.type !== 'CallExpression' && node.type !== 'NewExpression') {
        return;
      }
      resolveCallTargets(node, context, nameToTags, nodeSet, nodes, (calleeTag, kind) => {
        addEdge(callerTag, calleeTag, kind);
      }, allNodes => {
        for (const tag of allNodes) {
          addEdge(callerTag, tag, 'overapprox');
        }
      });
    });
  }

  return { nodes, edges, tagToName, nameToTags };
}

/**
 * @param {import('acorn').Node} callNode
 * @param {ReturnType<typeof buildConstContext>} context
 * @param {Record<string, string[]>} nameToTags
 * @param {Set<string>} nodeSet
 * @param {string[]} allNodes
 * @param {(tag: string, kind: 'static'|'overapprox') => void} emit
 * @param {(nodes: string[]) => void} emitOverapproxAll
 */
function resolveCallTargets(callNode, context, nameToTags, nodeSet, allNodes, emit, emitOverapproxAll) {
  const callee = callNode.callee;
  if (!callee) {
    return;
  }

  const candidateNames = collectResolvableCalleeNames(callNode, context);
  let matched = false;
  for (const name of candidateNames) {
    if (emitEdgesForName(name, nameToTags, emit)) {
      matched = true;
    }
  }

  if (!matched && shouldOverapproxMemberCall(callee, context)) {
    emitOverapproxAll(allNodes);
  }
}

/**
 * @param {import('acorn').Node} callee
 * @param {ReturnType<typeof buildConstContext>} context
 * @returns {boolean}
 */
function shouldOverapproxMemberCall(callee, context) {
  if (callee.type === 'MemberExpression') {
    if (callee.computed) {
      return true;
    }
    return !resolveMemberName(callee, context);
  }
  return callee.type !== 'Identifier';
}

/**
 * @param {import('acorn').Node} callNode
 * @param {ReturnType<typeof buildConstContext>} context
 * @returns {Set<string>}
 */
function collectResolvableCalleeNames(callNode, context) {
  const names = new Set();
  const callee = callNode.callee;
  if (!callee) {
    return names;
  }

  if (callee.type === 'Identifier') {
    names.add(resolveAlias(callee.name, context));
    return names;
  }

  if (callee.type === 'MemberExpression') {
    const member = resolveMemberName(callee, context);
    if (member) {
      names.add(member);
      const tail = member.split('.').pop();
      if (tail) {
        names.add(tail);
      }
    }
    if (callee.object?.type === 'Identifier') {
      names.add(callee.object.name);
    }
    if (!member && callee.property?.type === 'Identifier') {
      names.add(callee.property.name);
    }
    return names;
  }

  const signature = resolveCallSignature(callNode, context);
  if (signature) {
    names.add(signature);
    const tail = signature.split('.').pop();
    if (tail) {
      names.add(tail);
    }
  }

  return names;
}

/**
 * @param {string} name
 * @param {Record<string, string[]>} nameToTags
 * @param {(tag: string, kind: 'static'|'overapprox') => void} emit
 * @returns {boolean}
 */
function emitEdgesForName(name, nameToTags, emit) {
  if (!name) {
    return false;
  }

  const tags = nameToTags[name] || [];
  if (tags.length === 1) {
    emit(tags[0], 'static');
    return true;
  }
  if (tags.length > 1) {
    for (const tag of tags) {
      emit(tag, 'overapprox');
    }
    return true;
  }

  const tail = name.includes('.') ? name.split('.').pop() : name;
  const tailTags = nameToTags[tail] || [];
  if (tailTags.length === 1) {
    emit(tailTags[0], 'overapprox');
    return true;
  }
  if (tailTags.length > 1) {
    for (const tag of tailTags) {
      emit(tag, 'overapprox');
    }
    return true;
  }

  if (KNOWN_FRAMEWORK_NAMES.has(name) || KNOWN_FRAMEWORK_NAMES.has(tail)) {
    return false;
  }

  return false;
}

/**
 * @param {string} tag
 * @returns {string}
 */
function extractNameFromTag(tag) {
  const sep = tag.indexOf('::');
  if (sep === -1) {
    return tag;
  }
  const rest = tag.slice(sep + 2);
  const at = rest.lastIndexOf('@');
  return at === -1 ? rest : rest.slice(0, at);
}

/**
 * @param {StaticCallGraph} graph
 * @param {Set<string>} sinkTags
 * @returns {Map<string, number>}
 */
function computeSinkDistances(graph, sinkTags) {
  const reverseAdj = new Map();
  for (const tag of graph.nodes) {
    reverseAdj.set(tag, []);
  }
  for (const edge of graph.edges) {
    if (!reverseAdj.has(edge.to)) {
      reverseAdj.set(edge.to, []);
    }
    reverseAdj.get(edge.to).push(edge.from);
  }

  const distance = new Map();
  for (const tag of graph.nodes) {
    distance.set(tag, Number.POSITIVE_INFINITY);
  }

  const queue = [];
  for (const sink of sinkTags) {
    if (!distance.has(sink)) {
      continue;
    }
    distance.set(sink, 0);
    queue.push(sink);
  }

  while (queue.length) {
    const current = queue.shift();
    const currentDist = distance.get(current);
    for (const caller of reverseAdj.get(current) || []) {
      if (distance.get(caller) !== Number.POSITIVE_INFINITY) {
        continue;
      }
      distance.set(caller, currentDist + 1);
      queue.push(caller);
    }
  }

  return distance;
}

/**
 * @param {number} distance
 * @returns {number}
 */
function sinkProximityScore(distance) {
  if (!Number.isFinite(distance)) {
    return 0;
  }
  return 1 / (distance + 1);
}

module.exports = {
  buildStaticCallGraph,
  registerFunctionNameTag,
  computeSinkDistances,
  sinkProximityScore,
  extractNameFromTag,
  collectResolvableCalleeNames,
  shouldOverapproxMemberCall,
  KNOWN_FRAMEWORK_NAMES
};
