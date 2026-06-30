const test = require('node:test');
const assert = require('node:assert/strict');
const {
  compileValuePattern,
  matchesValuePattern,
  inferTraitsFromPattern,
  synthesizeExampleFromPattern,
  resolveReferenceContext
} = require('../src/modules/value-pattern');
const {
  buildReferenceValueSection,
  extractReferenceValue
} = require('../src/modules/reverse-anchor-recovery/prompt');

test('matchesValuePattern: bf_ 形态', () => {
  const pattern = '^bf_[a-z0-9]{10}$';
  assert.equal(matchesValuePattern('bf_a1b2c3d4e5', pattern), true);
  assert.equal(matchesValuePattern('ut_00pyax3c', pattern), false);
  assert.equal(matchesValuePattern('00pyax3c', pattern), false);
});

test('synthesizeExampleFromPattern: 简单量化正则', () => {
  const example = synthesizeExampleFromPattern('^bf_[a-z0-9]{10}$');
  assert.ok(example);
  assert.match(example, /^bf_[a-z0-9]{10}$/);
});

test('inferTraitsFromPattern: 可读特征', () => {
  const traits = inferTraitsFromPattern('^bf_[a-z0-9]{10}$');
  assert.ok(traits.some((t) => t.includes('bf_')));
  assert.ok(traits.some((t) => t.includes('10')));
});

test('resolveReferenceContext: 优先显式 value，否则从 pattern 合成', () => {
  const ctx = resolveReferenceContext({
    taskDescription: 'no sample here',
    valuePattern: '^bf_[a-z0-9]{10}$',
    extractFromTask: extractReferenceValue
  });
  assert.equal(ctx.valuePattern, '^bf_[a-z0-9]{10}$');
  assert.ok(ctx.referenceValue);
  assert.match(ctx.referenceValue, /^bf_[a-z0-9]{10}$/);
});

test('buildReferenceValueSection: 观测值不匹配 pattern 时给出警告', () => {
  const section = buildReferenceValueSection({
    referenceValue: 'bf_a1b2c3d4e5',
    valuePattern: '^bf_[a-z0-9]{10}$',
    syntheticExample: 'bf_a1b2c3d4e5',
    observation: { value: '00pyax3c' }
  }).join('\n');
  assert.match(section, /形态约束/);
  assert.match(section, /不匹配/);
  assert.match(section, /禁止/);
});

test('compileValuePattern: 无效正则抛错', () => {
  assert.throws(() => compileValuePattern('['), /无效的正则/);
});
