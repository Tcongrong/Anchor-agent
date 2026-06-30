/**
 * 轻量级常量传播，用于还原 arr[0] / decoder(0x85) 类字符串混淆
 */

const { walkAst } = require('./ast-utils');

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @returns {{ aliases: Map<string, string>, decoders: Map<string, Function>, stringCache: Map<string, string> }}
 */
function buildConstContext(functionNode) {
  const aliases = new Map();
  const decoders = new Map();
  const stringCache = new Map();

  if (!functionNode) {
    return { aliases, decoders, stringCache };
  }

  walkAst(functionNode, (node) => {
    if (node.type === 'VariableDeclarator' && node.id?.type === 'Identifier') {
      const name = node.id.name;
      if (node.init?.type === 'Identifier') {
        aliases.set(name, node.init.name);
      }
      if (node.init?.type === 'FunctionExpression' || node.init?.type === 'ArrowFunctionExpression') {
        const decoder = tryBuildStringDecoder(node.init);
        if (decoder) {
          decoders.set(name, decoder);
        }
      }
    }

    if (node.type === 'FunctionDeclaration' && node.id?.type === 'Identifier') {
      const decoder = tryBuildStringDecoder(node);
      if (decoder) {
        decoders.set(node.id.name, decoder);
      }
    }
  });

  return { aliases, decoders, stringCache };
}

/**
 * @param {import('acorn').Node} fnNode
 * @returns {((index: number) => string|null)|null}
 */
function tryBuildStringDecoder(fnNode) {
  let arrayValues = null;

  walkAst(fnNode, (node) => {
    if (arrayValues) {
      return;
    }
    if (node.type === 'ArrayExpression') {
      const values = extractStringArray(node);
      if (values && values.length >= 4) {
        arrayValues = values;
      }
    }
  });

  if (!arrayValues) {
    return null;
  }

  const offset = detectIndexOffset(fnNode);
  return (rawIndex) => {
    const index = normalizeIndex(rawIndex, offset, arrayValues.length);
    if (index === null) {
      return null;
    }
    return arrayValues[index] ?? null;
  };
}

/**
 * @param {import('acorn').Node} arrayNode
 * @returns {string[]|null}
 */
function extractStringArray(arrayNode) {
  if (!arrayNode?.elements?.length) {
    return null;
  }
  const values = [];
  for (const element of arrayNode.elements) {
    if (!element) {
      return null;
    }
    if (element.type === 'Literal' && typeof element.value === 'string') {
      values.push(element.value);
      continue;
    }
    return null;
  }
  return values;
}

/**
 * @param {import('acorn').Node} fnNode
 * @returns {number}
 */
function detectIndexOffset(fnNode) {
  let offset = 0;
  walkAst(fnNode, (node) => {
    if (node.type === 'AssignmentExpression'
      && node.operator === '-='
      && node.right?.type === 'Literal'
      && typeof node.right.value === 'number') {
      offset = node.right.value;
    }
    if (node.type === 'BinaryExpression'
      && node.operator === '-'
      && node.right?.type === 'Literal'
      && typeof node.right.value === 'number') {
      offset = node.right.value;
    }
  });
  return offset;
}

/**
 * @param {number} rawIndex
 * @param {number} offset
 * @param {number} length
 * @returns {number|null}
 */
function normalizeIndex(rawIndex, offset, length) {
  if (!Number.isFinite(rawIndex)) {
    return null;
  }
  let index = rawIndex;
  if (Number.isFinite(offset) && offset !== 0) {
    index -= offset;
  }
  if (!Number.isInteger(index) || index < 0 || index >= length) {
    return null;
  }
  return index;
}

/**
 * @param {string} name
 * @param {{ aliases: Map<string, string>, decoders: Map<string, Function> }} context
 * @returns {string}
 */
function resolveAlias(name, context) {
  let current = name;
  const seen = new Set();
  while (context.aliases.has(current) && !seen.has(current)) {
    seen.add(current);
    current = context.aliases.get(current);
  }
  return current;
}

/**
 * @param {import('acorn').Node|null|undefined} node
 * @param {{ aliases: Map<string, string>, decoders: Map<string, Function>, stringCache: Map<string, string> }} context
 * @returns {string|null}
 */
function resolveToString(node, context) {
  if (!node) {
    return null;
  }

  const cacheKey = `${node.start}:${node.end}:${node.type}`;
  if (context.stringCache.has(cacheKey)) {
    return context.stringCache.get(cacheKey);
  }

  let resolved = null;

  if (node.type === 'Literal') {
    resolved = typeof node.value === 'string' ? node.value : String(node.value);
  } else if (node.type === 'Identifier') {
    const decoderName = resolveAlias(node.name, context);
    if (context.decoders.has(decoderName)) {
      resolved = null;
    }
  } else if (node.type === 'CallExpression') {
    resolved = evaluateDecoderCall(node, context);
  } else if (node.type === 'MemberExpression') {
    resolved = resolveMemberName(node, context);
  }

  if (resolved !== null) {
    context.stringCache.set(cacheKey, resolved);
  }
  return resolved;
}

/**
 * @param {import('acorn').Node} callNode
 * @param {{ aliases: Map<string, string>, decoders: Map<string, Function>, stringCache: Map<string, string> }} context
 * @returns {string|null}
 */
function evaluateDecoderCall(callNode, context) {
  if (callNode.callee?.type !== 'Identifier') {
    return null;
  }
  const decoderName = resolveAlias(callNode.callee.name, context);
  const decoder = context.decoders.get(decoderName);
  if (!decoder || !callNode.arguments?.length) {
    return null;
  }

  const arg = callNode.arguments[0];
  if (arg.type !== 'Literal' || typeof arg.value !== 'number') {
    return null;
  }

  return decoder(arg.value);
}

/**
 * @param {import('acorn').Node} memberNode
 * @param {{ aliases: Map<string, string>, decoders: Map<string, Function>, stringCache: Map<string, string> }} context
 * @returns {string|null}
 */
function resolveMemberName(memberNode, context) {
  const objectPart = memberNode.object?.type === 'Identifier'
    ? memberNode.object.name
    : resolveToString(memberNode.object, context);

  let propertyPart = null;
  if (!memberNode.computed && memberNode.property?.type === 'Identifier') {
    propertyPart = memberNode.property.name;
  } else if (memberNode.property?.type === 'Literal' && typeof memberNode.property.value === 'string') {
    propertyPart = memberNode.property.value;
  } else {
    propertyPart = resolveToString(memberNode.property, context);
  }

  if (objectPart === 'console') {
    return propertyPart ? `console.${propertyPart}` : 'console.log';
  }

  if (!objectPart || !propertyPart) {
    return null;
  }
  return `${objectPart}.${propertyPart}`;
}

module.exports = {
  buildConstContext,
  resolveAlias,
  resolveToString,
  resolveMemberName,
  evaluateDecoderCall,
  tryBuildStringDecoder
};
