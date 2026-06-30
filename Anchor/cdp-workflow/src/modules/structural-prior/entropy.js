/**
 * 值操作熵 S_ent
 */

const { walkAst, isHighEntropyNumericArray } = require('./ast-utils');
const { isMathImulCall } = require('./ast-templates');

const BIT_OPERATORS = new Set(['|', '&', '^', '~', '<<', '>>', '>>>', '|=', '&=', '^=', '<<=', '>>=', '>>>=']);
const MOD_OPERATORS = new Set(['%', '%=']);

/**
 * @param {import('acorn').Node|null|undefined} functionNode
 * @param {number} size
 * @param {{ alpha?: number, beta?: number, gamma?: number, delta?: number, minArrayLength?: number, minEntropy?: number }} [options]
 * @returns {{ opBit: number, opMod: number, opHEnt: number, opImul: number, score: number }}
 */
function computeEntropyScore(functionNode, size, options = {}) {
  const {
    alpha = 1,
    beta = 1,
    gamma = 1,
    delta = 0.5,
    minArrayLength = 4,
    minEntropy = 3.0
  } = options;

  let opBit = 0;
  let opMod = 0;
  let opHEnt = 0;
  let opImul = 0;

  if (!functionNode) {
    return { opBit, opMod, opHEnt, score: 0 };
  }

  walkAst(functionNode, (node) => {
    if (node.type === 'BinaryExpression' && BIT_OPERATORS.has(node.operator)) {
      opBit += 1;
    }
    if (node.type === 'UnaryExpression' && node.operator === '~') {
      opBit += 1;
    }
    if (node.type === 'AssignmentExpression' && BIT_OPERATORS.has(node.operator)) {
      opBit += 1;
    }
    if ((node.type === 'BinaryExpression' || node.type === 'AssignmentExpression')
      && MOD_OPERATORS.has(node.operator)) {
      opMod += 1;
    }
    if (node.type === 'ArrayExpression'
      && isHighEntropyNumericArray(node, minArrayLength, minEntropy)) {
      opHEnt += 1;
    }
    if (isMathImulCall(node)) {
      opImul += 1;
    }
  });

  const normalizedSize = Math.max(size, 1);
  const score = alpha * (opBit / normalizedSize)
    + beta * (opMod / normalizedSize)
    + gamma * (opHEnt / normalizedSize)
    + delta * (opImul / normalizedSize);

  return { opBit, opMod, opHEnt, opImul, score };
}

module.exports = {
  computeEntropyScore
};
