const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const sourceFile = path.join(
  __dirname,
  '../cdp-ast-output/sources/oauth.d.cn_auth_goLogin.html__d19a7d33.source.js'
);

function buildTagMapFromSource(sourceCode) {
  const ast = acorn.parse(sourceCode, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true
  });
  const tagMap = new Map();
  let anonymousCounter = 0;

  const visit = (node, parent) => {
    if (!node || typeof node !== 'object') return;
    if (
      node.type === 'FunctionDeclaration'
      || node.type === 'FunctionExpression'
      || node.type === 'ArrowFunctionExpression'
    ) {
      if (node.loc && node.body) {
        let fnName = null;
        if (node.type === 'FunctionDeclaration' && node.id) fnName = node.id.name;
        if (!fnName && parent && parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
          fnName = parent.id.name;
        }
        if (!fnName) fnName = `anonymous_${++anonymousCounter}`;
        const key = `${node.loc.start.line}:${node.loc.start.column}`;
        tagMap.set(key, {
          uniqueFunctionKey: `https://oauth.d.cn/auth/goLogin.html::${fnName}@${key}`,
          tags: ['general']
        });
      }
    }
    for (const key of Object.keys(node)) {
      const value = node[key];
      if (Array.isArray(value)) value.forEach((item) => visit(item, node));
      else if (value && typeof value === 'object' && value.type) visit(value, node);
    }
  };

  visit(ast, null);
  return tagMap;
}

function findTraceInfoForNode(tagMapForScript, functionNode, functionName) {
  const exactKey = `${functionNode.loc.start.line}:${functionNode.loc.start.column}`;
  if (tagMapForScript.has(exactKey)) return tagMapForScript.get(exactKey);

  const targetLine = functionNode.loc.start.line;
  const targetColumn = functionNode.loc.start.column;
  let lineMatches = [];
  let bestColumnMatch = null;
  let bestColumnDiff = Infinity;

  for (const [key, value] of tagMapForScript.entries()) {
    const parts = String(key).split(':');
    const line = Number.parseInt(parts[0], 10);
    const column = Number.parseInt(parts[1], 10);
    if (line !== targetLine) continue;
    lineMatches.push(value);
    const diff = Math.abs(column - targetColumn);
    if (diff < bestColumnDiff) {
      bestColumnDiff = diff;
      bestColumnMatch = value;
    }
  }

  if (lineMatches.length === 1) return lineMatches[0];
  if (bestColumnMatch && bestColumnDiff <= 12) return bestColumnMatch;

  if (functionName) {
    for (const value of tagMapForScript.values()) {
      if (String(value.uniqueFunctionKey).includes(`::${functionName}@`)) return value;
    }
  }
  return null;
}

test('goLogin exported source can fuzzy-match pwdFormLogin tag after column shift', () => {
  if (!fs.existsSync(sourceFile)) {
    return;
  }

  const sourceCode = fs.readFileSync(sourceFile, 'utf8');
  const shifted = sourceCode.replace('var pwdFormLogin = function(){', 'var pwdFormLogin=function(){');
  const tagMap = buildTagMapFromSource(sourceCode);
  const shiftedAst = acorn.parse(shifted, {
    ecmaVersion: 'latest',
    sourceType: 'script',
    locations: true
  });

  let pwdNode = null;
  const visit = (node, parent) => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'VariableDeclarator' && node.id.type === 'Identifier' && node.id.name === 'pwdFormLogin') {
      pwdNode = node.init;
    }
    for (const key of Object.keys(node)) {
      const value = node[key];
      if (Array.isArray(value)) value.forEach((item) => visit(item, node));
      else if (value && typeof value === 'object' && value.type) visit(value, node);
    }
  };
  visit(shiftedAst, null);

  assert.ok(pwdNode && pwdNode.loc);
  const trace = findTraceInfoForNode(tagMap, pwdNode, 'pwdFormLogin');
  assert.ok(trace);
  assert.match(trace.uniqueFunctionKey, /pwdFormLogin/);
});
