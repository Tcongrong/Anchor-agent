#!/usr/bin/env node
/** One-off generator: parse 自动化程序 → lib/benchmark-tasks.json */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOC = path.join(ROOT, '自动化程序');
const OUT = path.join(__dirname, 'benchmark-tasks.json');

function extractQuotedArg(rest, flag) {
  const re = new RegExp(`${flag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+"`);
  const match = rest.match(re);
  if (!match || match.index === undefined) return { value: null, rest };

  let i = match.index + match[0].length;

  let value = '';
  while (i < rest.length) {
    const ch = rest[i];
    if (ch === '\\' && i + 1 < rest.length) {
      value += rest[i + 1];
      i += 2;
      continue;
    }
    if (ch === '"') {
      return { value, rest: rest.slice(i + 1) };
    }
    value += ch;
    i += 1;
  }
  throw new Error(`Unclosed quote for ${flag}`);
}

const text = fs.readFileSync(DOC, 'utf8');
const tasks = [];

for (const line of text.split(/\r?\n/)) {
  const m = line.match(/^(\d+_\d+):\s*node main\.js\s+(.*)$/);
  if (!m) continue;

  let rest = m[2].trim().replace(/\s+\d+次迭代.*$/, '').trim();
  const entry = { label: m[1] };

  const taskPart = extractQuotedArg(rest, '--task');
  if (taskPart.value) entry.task = taskPart.value;
  rest = taskPart.rest;

  const valuePart = extractQuotedArg(rest, '--value');
  if (valuePart.value) entry.value = valuePart.value;

  const patternPart = extractQuotedArg(rest, '--value-pattern');
  if (patternPart.value) entry.valuePattern = patternPart.value;

  tasks.push(entry);
}

if (tasks.length !== 50) {
  console.error(`Expected 50 tasks, got ${tasks.length}`);
  process.exit(1);
}

fs.writeFileSync(OUT, `${JSON.stringify(tasks, null, 2)}\n`, 'utf8');
console.log(`Wrote ${tasks.length} tasks to ${OUT}`);
