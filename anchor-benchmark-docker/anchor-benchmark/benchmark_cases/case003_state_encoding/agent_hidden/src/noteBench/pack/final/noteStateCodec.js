const stateKeys = [
  "schema",
  "page",
  "lane",
  "gesture",
  "tag",
  "priority",
  "body",
  "summaryLength",
  "seed",
  "slotId"
];
const stateAlphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

function rotate32(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function toFixedBase36(value, width) {
  let n = value >>> 0;
  let out = "";

  do {
    out = stateAlphabet[n % stateAlphabet.length] + out;
    n = Math.floor(n / stateAlphabet.length);
  } while (n > 0);

  return out.padStart(width, "0").slice(-width);
}

function makeStateRows(fields) {
  return stateKeys.map((key, index) => ({
    index,
    key,
    value: String(fields[key] ?? "")
  }));
}

function foldStateRows(rows, salt) {
  let left = (0x811c9dc5 ^ salt) >>> 0;
  let right = (0x45d9f3b ^ rows.length) >>> 0;

  for (const row of rows) {
    const segment = `${row.index}:${row.key.length}:${row.key}=${row.value.length}:${row.value}`;

    for (let i = 0; i < segment.length; i += 1) {
      const code = segment.charCodeAt(i);

      left = Math.imul(left ^ code ^ row.index, 0x01000193) >>> 0;
      left = rotate32(left, ((i + row.index) % 11) + 5);
      right = Math.imul((right + code + i + salt) >>> 0, 0x85ebca6b) >>> 0;
      right = (right ^ rotate32(left, (i % 7) + 3)) >>> 0;
    }
  }

  return { left, right, length: rows.reduce((sum, row) => sum + row.value.length, 0) };
}

function stateCheck(left, right, length) {
  const a = stateAlphabet[((left + length) >>> 0) % stateAlphabet.length];
  const b = stateAlphabet[((right ^ length) >>> 0) % stateAlphabet.length];
  return a + b;
}

export function sealDraftFrameCode(frame) {
  const fields = {
    ...(frame?.fields || {}),
    slotId: frame?.slotId || ""
  };
  const rows = makeStateRows(fields);
  const salt = rows.reduce((value, row) => {
    return (value + row.key.length * 17 + row.value.length * 31 + row.index) >>> 0;
  }, 0x9e3779b9);
  const folded = foldStateRows(rows, salt);
  const body = toFixedBase36(folded.left, 6) + toFixedBase36(folded.right, 6);
  const check = stateCheck(folded.left, folded.right, folded.length);

  return `sc_${body}${check}`;
}
