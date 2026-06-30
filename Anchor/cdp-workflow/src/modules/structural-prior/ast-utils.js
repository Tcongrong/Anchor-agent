/**
 * AST 遍历与函数子树解析工具
 */

const acorn = require('acorn');

const FUNCTION_TYPES = new Set([
  'FunctionDeclaration',
  'FunctionExpression',
  'ArrowFunctionExpression'
]);

/**
 * @param {string} code
 * @returns {import('acorn').Node|null}
 */
function parseFunctionCode(code) {
  const trimmed = String(code || '').trim();
  if (!trimmed) {
    return null;
  }

  const attempts = [
    trimmed,
    `(${trimmed})`,
    `(function outer(){ ${trimmed} })`
  ];

  for (const source of attempts) {
    try {
      const program = acorn.parse(source, { ecmaVersion: 2022, sourceType: 'script' });
      const fn = findFirstFunctionNode(program);
      if (fn) {
        return fn;
      }
    } catch {
      // try next wrapper
    }
  }

  return null;
}

/**
 * @param {import('acorn').Node} root
 * @returns {import('acorn').Node|null}
 */
function findFirstFunctionNode(root) {
  let found = null;
  walkAst(root, (node) => {
    if (!found && FUNCTION_TYPES.has(node.type)) {
      found = node;
    }
  });
  return found;
}

/**
 * @param {import('acorn').Node|null|undefined} root
 * @param {(node: import('acorn').Node, parent: import('acorn').Node|null) => void} visitor
 * @param {import('acorn').Node|null} [parent]
 */
function walkAst(root, visitor, parent = null) {
  if (!root || typeof root !== 'object') {
    return;
  }
  visitor(root, parent);
  for (const child of iterChildren(root)) {
    walkAst(child, visitor, root);
  }
}

/**
 * @param {import('acorn').Node} node
 * @returns {import('acorn').Node[]}
 */
function iterChildren(node) {
  const children = [];
  for (const key of Object.keys(node)) {
    if (key === 'loc' || key === 'range') {
      continue;
    }
    const value = node[key];
    if (!value) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item.type === 'string') {
          children.push(item);
        }
      }
    } else if (typeof value.type === 'string') {
      children.push(value);
    }
  }
  return children;
}

/**
 * @param {import('acorn').Node|null|undefined} root
 * @returns {number}
 */
function countAstNodes(root) {
  let count = 0;
  walkAst(root, () => {
    count += 1;
  });
  return Math.max(count, 1);
}

/**
 * @param {number[]} values
 * @returns {number}
 */
function shannonEntropy(values) {
  if (!values.length) {
    return 0;
  }
  const freq = new Map();
  for (const value of values) {
    const key = String(value);
    freq.set(key, (freq.get(key) || 0) + 1);
  }
  let entropy = 0;
  for (const count of freq.values()) {
    const p = count / values.length;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @returns {boolean}
 */
function isNumericArrayLiteral(node) {
  if (!node || node.type !== 'ArrayExpression' || !Array.isArray(node.elements)) {
    return false;
  }
  const values = node.elements
    .filter(Boolean)
    .map((element) => (element.type === 'Literal' ? element.value : NaN))
    .filter((value) => typeof value === 'number' && Number.isFinite(value));
  return values.length === node.elements.filter(Boolean).length && values.length >= 4;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @param {number} minLength
 * @param {number} minEntropy
 * @returns {boolean}
 */
function isHighEntropyNumericArray(node, minLength = 4, minEntropy = 3.0) {
  if (!isNumericArrayLiteral(node) || node.elements.length < minLength) {
    return false;
  }
  const values = node.elements
    .filter(Boolean)
    .map((element) => element.value);
  return shannonEntropy(values) > minEntropy;
}

/**
 * 从函数 AST 提取可用于关键词匹配的字面量/属性名（无标识符依赖）
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {string[]}
 */
function extractCodeTerms(functionNode) {
  if (!functionNode) {
    return [];
  }

  const terms = new Set();

  const addTerm = (raw) => {
    const value = String(raw || '').trim().toLowerCase();
    if (value.length < 2) {
      return;
    }
    terms.add(value);
    if (value.includes('_')) {
      for (const part of value.split('_')) {
        if (part.length >= 2) {
          terms.add(part);
        }
      }
    }
    const camelParts = value.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/\s+/);
    for (const part of camelParts) {
      const normalized = part.toLowerCase();
      if (normalized.length >= 2) {
        terms.add(normalized);
      }
    }
  };

  walkAst(functionNode, (node) => {
    if (node.type === 'Literal' && typeof node.value === 'string') {
      addTerm(node.value);
      return;
    }

    if (node.type === 'Property') {
      if (node.key?.type === 'Literal' && typeof node.key.value === 'string') {
        addTerm(node.key.value);
      } else if (node.key?.type === 'Identifier') {
        addTerm(node.key.name);
      }
      return;
    }

    if (node.type === 'MemberExpression' && !node.computed && node.property?.type === 'Identifier') {
      addTerm(node.property.name);
      return;
    }

    if (node.type === 'CallExpression') {
      const callee = node.callee;
      if (callee?.type === 'MemberExpression' && !callee.computed && callee.property?.type === 'Identifier') {
        addTerm(callee.property.name);
      } else if (callee?.type === 'Identifier') {
        addTerm(callee.name);
      }
    }
  });

  return [...terms];
}

module.exports = {
  parseFunctionCode,
  findFirstFunctionNode,
  walkAst,
  iterChildren,
  countAstNodes,
  shannonEntropy,
  isNumericArrayLiteral,
  isHighEntropyNumericArray,
  extractCodeTerms,
  FUNCTION_TYPES
};
