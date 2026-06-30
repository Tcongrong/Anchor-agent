/**
 * AST 子树指纹模板匹配 S_ast
 */

const { walkAst, isHighEntropyNumericArray } = require('./ast-utils');

/** MurmurHash 系列常用 32-bit 常量 */
const MURMUR_IMUL_CONSTANTS = new Set([0x9e3779b9, 0x85ebca6b, 0x1b873593]);

/** @type {Record<string, number>} */
const DEFAULT_TEMPLATE_WEIGHTS = {
  XorShiftLoop: 1,
  TableLookupStringFold: 1,
  HighEntropyConstArray: 1,
  RollingHash: 1,
  XorReduceFold: 2,
  BitMaskDigest: 2,
  ImulXorHashLoop: 2,
  ChainedFormConcat: 2,
  MurmurImulConstants: 3,
  HashDigestPush: 2,
  HashLaneMix: 2,
  ValueCallPipeline: 6,
  DigestTokenFormat: 3
};

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @param {Record<string, number>} [templateWeights]
 * @returns {{ counts: Record<string, number>, score: number }}
 */
function computeAstTemplateScore(functionNode, templateWeights = DEFAULT_TEMPLATE_WEIGHTS) {
  const counts = {
    XorShiftLoop: 0,
    TableLookupStringFold: 0,
    HighEntropyConstArray: 0,
    RollingHash: 0,
    XorReduceFold: 0,
    BitMaskDigest: 0,
    ImulXorHashLoop: 0,
    ChainedFormConcat: 0,
    MurmurImulConstants: 0,
    HashDigestPush: 0,
    HashLaneMix: 0,
    ValueCallPipeline: 0,
    DigestTokenFormat: 0
  };

  if (!functionNode) {
    return { counts, rawWeighted: 0, score: 0 };
  }

  walkAst(functionNode, (node, parent) => {
    if (matchesXorShiftLoop(node)) {
      counts.XorShiftLoop += 1;
    }
    if (matchesTableLookupStringFold(node)) {
      counts.TableLookupStringFold += 1;
    }
    if (matchesHighEntropyConstArray(node)) {
      counts.HighEntropyConstArray += 1;
    }
    if (matchesRollingHash(node, parent)) {
      counts.RollingHash += 1;
    }
    if (matchesXorReduceFold(node)) {
      counts.XorReduceFold += 1;
    }
    if (matchesBitMaskDigest(node)) {
      counts.BitMaskDigest += 1;
    }
    if (matchesImulXorHashLoop(node)) {
      counts.ImulXorHashLoop += 1;
    }
    if (matchesChainedFormConcat(node)) {
      counts.ChainedFormConcat += 1;
    }
  });

  if (matchesMurmurImulConstants(functionNode)) {
    counts.MurmurImulConstants += 1;
  }
  if (matchesHashDigestPush(functionNode)) {
    counts.HashDigestPush += 1;
  }
  if (matchesHashLaneMix(functionNode)) {
    counts.HashLaneMix += 1;
  }
  if (matchesValueCallPipeline(functionNode)) {
    counts.ValueCallPipeline += 1;
  }
  if (matchesDigestTokenFormat(functionNode)) {
    counts.DigestTokenFormat += 1;
  }

  let weighted = 0;
  for (const [template, count] of Object.entries(counts)) {
    weighted += (templateWeights[template] ?? 1) * count;
  }

  return { counts, rawWeighted: weighted, score: weighted };
}

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @param {number} size
 * @param {Record<string, number>} [templateWeights]
 * @returns {number}
 */
function normalizeAstScore(functionNode, size, templateWeights = DEFAULT_TEMPLATE_WEIGHTS) {
  const { rawWeighted } = computeAstTemplateScore(functionNode, templateWeights);
  const normalized = rawWeighted / Math.max(size, 1);
  return Number.isFinite(normalized) ? normalized : 0;
}

/**
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesXorShiftLoop(node) {
  if (node.type !== 'ForStatement' && node.type !== 'WhileStatement') {
    return false;
  }
  let hasXor = false;
  let hasShift = false;
  walkAst(node.body || node, (inner) => {
    if (inner.type === 'BinaryExpression') {
      if (inner.operator === '^') {
        hasXor = true;
      }
      if (inner.operator === '<<' || inner.operator === '>>' || inner.operator === '>>>') {
        hasShift = true;
      }
    }
    if (inner.type === 'AssignmentExpression') {
      if (inner.operator === '^=') {
        hasXor = true;
      }
      if (inner.operator === '<<=' || inner.operator === '>>=' || inner.operator === '>>>=') {
        hasShift = true;
      }
    }
  });
  return hasXor && hasShift;
}

/**
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesTableLookupStringFold(node) {
  if (node.type !== 'BinaryExpression' || node.operator !== '+') {
    return false;
  }
  return containsArrayIndexedAccess(node.left) || containsArrayIndexedAccess(node.right);
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {boolean}
 */
function containsArrayIndexedAccess(node) {
  if (!node) {
    return false;
  }
  if (node.type === 'MemberExpression' && node.computed) {
    return node.object?.type === 'Identifier' || node.object?.type === 'MemberExpression';
  }
  let found = false;
  walkAst(node, (inner) => {
    if (inner.type === 'MemberExpression' && inner.computed) {
      found = true;
    }
  });
  return found;
}

/**
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesHighEntropyConstArray(node) {
  return node.type === 'ArrayExpression' && isHighEntropyNumericArray(node);
}

/**
 * @param {import('acorn').Node} node
 * @param {import('acorn').Node|null} parent
 * @returns {boolean}
 */
function matchesRollingHash(node, parent) {
  if (node.type !== 'ForStatement' && node.type !== 'WhileStatement') {
    return false;
  }
  let hasMul = false;
  let hasAdd = false;
  walkAst(node.body || node, (inner) => {
    if (inner.type === 'BinaryExpression' || inner.type === 'AssignmentExpression') {
      const op = inner.operator;
      if (op === '*' || op === '*=') {
        hasMul = true;
      }
      if (op === '+' || op === '+=') {
        hasAdd = true;
      }
    }
    if (isMathImulCall(inner)) {
      hasMul = true;
    }
  });
  return hasMul && hasAdd;
}

/**
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function isMathImulCall(node) {
  if (node.type !== 'CallExpression') {
    return false;
  }
  const callee = node.callee;
  if (callee?.type !== 'MemberExpression' || callee.object?.name !== 'Math') {
    return false;
  }
  return callee.property?.name === 'imul' || callee.computed === true;
}

/**
 * 循环体含 XOR 与 Math.imul（MurmurHash 风格滚动哈希）
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesImulXorHashLoop(node) {
  if (node.type !== 'ForStatement' && node.type !== 'WhileStatement') {
    return false;
  }
  let hasXor = false;
  let hasImul = false;
  walkAst(node.body || node, (inner) => {
    if (inner.type === 'BinaryExpression' && inner.operator === '^') {
      hasXor = true;
    }
    if (isMathImulCall(inner)) {
      hasImul = true;
    }
  });
  return hasXor && hasImul;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {number}
 */
function concatChainLength(node) {
  if (!node) {
    return 0;
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    return 1 + Math.max(concatChainLength(node.left), concatChainLength(node.right));
  }
  return 0;
}

/**
 * return 中含深度 ≥4 的链式字符串拼接（表单 request body 构造）
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesChainedFormConcat(node) {
  if (node.type !== 'ReturnStatement' || !node.argument) {
    return false;
  }
  let maxDepth = 0;
  walkAst(node.argument, (inner) => {
    if (inner.type === 'BinaryExpression' && inner.operator === '+') {
      maxDepth = Math.max(maxDepth, concatChainLength(inner));
    }
  });
  return maxDepth >= 4;
}

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {boolean}
 */
function matchesMurmurImulConstants(functionNode) {
  if (!functionNode) {
    return false;
  }
  let hits = 0;
  walkAst(functionNode, (node) => {
    if (!isMathImulCall(node)) {
      return;
    }
    for (const arg of node.arguments) {
      if (arg?.type === 'Literal' && typeof arg.value === 'number'
        && MURMUR_IMUL_CONSTANTS.has(arg.value >>> 0)) {
        hits += 1;
      }
    }
  });
  return hits >= 2;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {boolean}
 */
function subtreeHasImul(node) {
  let found = false;
  walkAst(node, (inner) => {
    if (isMathImulCall(inner)) {
      found = true;
    }
  });
  return found;
}

/**
 * 单元素数组初始化后多次 push Math.imul 结果（hash digest 扩展）
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {boolean}
 */
function matchesHashDigestPush(functionNode) {
  if (!functionNode) {
    return false;
  }
  let arrayInit = false;
  let pushImul = 0;
  walkAst(functionNode, (node) => {
    if (node.type === 'VariableDeclarator'
      && node.init?.type === 'ArrayExpression'
      && node.init.elements.length >= 1) {
      arrayInit = true;
    }
    if (node.type === 'CallExpression'
      && node.callee?.type === 'MemberExpression'
      && (node.callee.computed || node.callee.property?.name === 'push')
      && node.arguments.some(subtreeHasImul)) {
      pushImul += 1;
    }
  });
  return arrayInit && pushImul >= 2;
}

/**
 * 同一 helper 被多次以 lane 常量 6/7 调用（digest lane 选择）
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {boolean}
 */
function matchesHashLaneMix(functionNode) {
  if (!functionNode) {
    return false;
  }
  const calleeCounts = new Map();
  walkAst(functionNode, (node) => {
    if (node.type !== 'CallExpression' || node.callee?.type !== 'Identifier') {
      return;
    }
    if (node.arguments.length < 2) {
      return;
    }
    const lane = node.arguments[node.arguments.length - 1];
    if (lane?.type === 'Literal' && typeof lane.value === 'number'
      && (lane.value === 6 || lane.value === 7)) {
      const name = node.callee.name;
      calleeCounts.set(name, (calleeCounts.get(name) || 0) + 1);
    }
  });
  return [...calleeCounts.values()].some((count) => count >= 2);
}

/**
 * 数组/集合 fold 回调中含 XOR（常见于 route seed 折叠）
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesXorReduceFold(node) {
  if (node.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression') {
    return false;
  }

  const callback = node.arguments[0];
  if (!callback || (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression')) {
    return false;
  }

  let hasXor = false;
  walkAst(callback, (inner) => {
    if (inner.type === 'BinaryExpression' && inner.operator === '^') {
      hasXor = true;
    }
  });
  return hasXor;
}

/**
 * 多路 XOR 混合后取位掩码（指纹 digest lane 选择）
 * @param {import('acorn').Node} node
 * @returns {boolean}
 */
function matchesBitMaskDigest(node) {
  if (node.type !== 'BinaryExpression' || node.operator !== '&') {
    return false;
  }
  if (node.right?.type !== 'Literal' || typeof node.right.value !== 'number') {
    return false;
  }

  let xorCount = 0;
  walkAst(node.left, (inner) => {
    if (inner.type === 'BinaryExpression' && inner.operator === '^') {
      xorCount += 1;
    }
  });
  return xorCount >= 2;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @param {Set<string>} bindings
 * @returns {boolean}
 */
function exprReferencesBinding(node, bindings) {
  if (!node || !bindings.size) {
    return false;
  }
  let found = false;
  walkAst(node, (inner) => {
    if (inner.type === 'Identifier' && bindings.has(inner.name)) {
      found = true;
    }
  });
  return found;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {string|null}
 */
function calleeRootName(node) {
  if (!node) {
    return null;
  }
  if (node.type === 'Identifier') {
    return node.name;
  }
  if (node.type === 'MemberExpression') {
    return calleeRootName(node.object) || calleeRootName(node.property);
  }
  return null;
}

/**
 * 多步 helper 串联并在 return 中产出最终值（混淆后常见的薄锚点编排器）
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {boolean}
 */
function matchesValueCallPipeline(functionNode) {
  if (!functionNode) {
    return false;
  }

  /** @type {Array<{ name: string, init: import('acorn').Node, callee: string|null }>} */
  const pipeline = [];
  walkAst(functionNode, (node) => {
    if (node.type === 'VariableDeclarator'
      && node.id?.type === 'Identifier'
      && node.init?.type === 'CallExpression') {
      pipeline.push({
        name: node.id.name,
        init: node.init,
        callee: calleeRootName(node.init.callee)
      });
    }
  });

  if (pipeline.length < 2) {
    return false;
  }

  let chainSteps = 0;
  for (let index = 1; index < pipeline.length; index += 1) {
    const priorBindings = new Set(pipeline.slice(0, index).map((item) => item.name));
    if (exprReferencesBinding(pipeline[index].init, priorBindings)) {
      chainSteps += 1;
    }
  }

  const lastBinding = pipeline[pipeline.length - 1].name;
  let returnUsesPipeline = false;
  let returnCallee = null;
  walkAst(functionNode, (node) => {
    if (node.type !== 'ReturnStatement' || node.argument?.type !== 'CallExpression') {
      return;
    }
    if (exprReferencesBinding(node.argument, new Set([lastBinding]))) {
      returnUsesPipeline = true;
      returnCallee = calleeRootName(node.argument.callee);
    }
  });

  const callees = new Set(pipeline.map((item) => item.callee).filter(Boolean));
  if (returnCallee) {
    callees.add(returnCallee);
  }

  if (chainSteps >= 1 && returnUsesPipeline && callees.size >= 3) {
    return true;
  }

  return matchesObjectReturnPipeline(functionNode, pipeline, chainSteps, callees);
}

/**
 * return { method: helper(...), headers: ... } 形式的值构造编排器
 * @param {import('acorn').Node} functionNode
 * @param {Array<{ name: string, init: import('acorn').Node, callee: string|null }>} pipeline
 * @param {number} chainSteps
 * @param {Set<string>} callees
 * @returns {boolean}
 */
function matchesObjectReturnPipeline(functionNode, pipeline, chainSteps, callees) {
  const bindingNames = new Set(pipeline.map((item) => item.name));
  let objectReturnFields = 0;

  walkAst(functionNode, (node) => {
    if (node.type !== 'ReturnStatement' || node.argument?.type !== 'ObjectExpression') {
      return;
    }
    for (const prop of node.argument.properties) {
      if (prop.type !== 'Property' || !prop.value) {
        continue;
      }
      if (prop.value.type === 'CallExpression'
        && exprReferencesBinding(prop.value, bindingNames)) {
        objectReturnFields += 1;
        const root = calleeRootName(prop.value.callee);
        if (root) {
          callees.add(root);
        }
      }
    }
  });

  return chainSteps >= 1 && objectReturnFields >= 1 && callees.size >= 3;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {boolean}
 */
function isPadStartCall(node) {
  if (node?.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression') {
    return false;
  }
  const prop = node.callee.property;
  if (!node.callee.computed && prop?.name === 'padStart') {
    return true;
  }
  if (node.callee.computed && node.arguments.length >= 2) {
    const width = node.arguments[0];
    const fill = node.arguments[1];
    return width?.type === 'Literal'
      && typeof width.value === 'number'
      && width.value <= 16
      && fill?.type === 'Literal'
      && fill.value === '0';
  }
  return false;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {boolean}
 */
function isToStringRadixCall(node) {
  if (node?.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression') {
    return false;
  }
  const prop = node.callee.property;
  const hasRadixArg = node.arguments.length >= 1
    && node.arguments[0].type === 'Literal'
    && typeof node.arguments[0].value === 'number'
    && node.arguments[0].value >= 16;
  return hasRadixArg && (
    (!node.callee.computed && prop?.name === 'toString')
    || node.callee.computed
  );
}

/**
 * 多 lane digest 格式化为固定宽度 token（toString(radix) + padStart）
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {boolean}
 */
function matchesDigestTokenFormat(functionNode) {
  if (!functionNode) {
    return false;
  }
  let padStartCount = 0;
  let toStringRadixCount = 0;
  walkAst(functionNode, (node) => {
    if (node.type !== 'CallExpression') {
      return;
    }
    if (isPadStartCall(node)) {
      padStartCount += 1;
    }
    if (isToStringRadixCall(node)) {
      toStringRadixCount += 1;
    }
  });
  return padStartCount >= 2 && toStringRadixCount >= 2;
}

module.exports = {
  DEFAULT_TEMPLATE_WEIGHTS,
  MURMUR_IMUL_CONSTANTS,
  computeAstTemplateScore,
  normalizeAstScore,
  matchesXorShiftLoop,
  matchesTableLookupStringFold,
  matchesHighEntropyConstArray,
  matchesRollingHash,
  matchesXorReduceFold,
  matchesBitMaskDigest,
  isMathImulCall,
  matchesImulXorHashLoop,
  matchesChainedFormConcat,
  matchesMurmurImulConstants,
  matchesHashDigestPush,
  matchesHashLaneMix,
  matchesValueCallPipeline,
  matchesDigestTokenFormat,
  isPadStartCall,
  isToStringRadixCall
};
