const test = require('node:test');
const assert = require('node:assert/strict');

const {
  buildSyncStack,
  buildAsyncStack,
  toDisplayLine
} = require('../src/modules/anchor-collector');

test('anchor-collector: toDisplayLine 将 CDP 0 基行号转为 1 基', () => {
  assert.equal(toDisplayLine(0), 1);
  assert.equal(toDisplayLine(41), 42);
  assert.equal(toDisplayLine(undefined), null);
});

test('anchor-collector: buildSyncStack 格式化 callFrames', () => {
  const frames = buildSyncStack([
    {
      callFrameId: 'cf-1',
      functionName: 'submit',
      url: 'https://example.com/app.js',
      lineNumber: 10,
      columnNumber: 4,
      scriptId: 's1'
    }
  ]);

  assert.equal(frames.length, 1);
  assert.equal(frames[0].index, 0);
  assert.equal(frames[0].functionName, 'submit');
  assert.equal(frames[0].line, 11);
  assert.equal(frames[0].column, 5);
});

test('anchor-collector: buildAsyncStack 展平 parent 链', () => {
  const asyncStack = buildAsyncStack({
    description: 'Promise.then',
    callFrames: [
      {
        functionName: 'onClick',
        url: 'https://example.com/app.js',
        lineNumber: 20,
        columnNumber: 0
      }
    ],
    parent: {
      description: 'setTimeout',
      callFrames: [
        {
          functionName: 'boot',
          url: 'https://example.com/app.js',
          lineNumber: 5,
          columnNumber: 0
        }
      ]
    }
  });

  assert.equal(asyncStack.length, 4);
  assert.equal(asyncStack[0].kind, 'async-segment');
  assert.equal(asyncStack[0].description, 'Promise.then');
  assert.equal(asyncStack[1].functionName, 'onClick');
  assert.equal(asyncStack[2].description, 'setTimeout');
  assert.equal(asyncStack[3].functionName, 'boot');
});
