const { test } = require('node:test');
const assert = require('node:assert/strict');
const { normalizeEvalExpression } = require('../src/modules/debugger');

test('normalizeEvalExpression wraps bare object literals for eval', () => {
  const expr = "{'action':1,[key]:'v'}";
  const key = 'dynamic';
  const normalized = normalizeEvalExpression(expr);
  assert.equal(normalized, "({'action':1,[key]:'v'})");

  const result = eval(normalized);
  assert.deepEqual(result, { action: 1, dynamic: 'v' });
});

test('normalizeEvalExpression leaves non-object expressions unchanged', () => {
  assert.equal(normalizeEvalExpression('_0x6bc68d'), '_0x6bc68d');
  assert.equal(normalizeEvalExpression('  x + 1  '), '  x + 1  ');
});

test('normalizeEvalExpression does not double-wrap parenthesized literals', () => {
  const expr = "({'a': 1})";
  assert.equal(normalizeEvalExpression(expr), expr);
});
