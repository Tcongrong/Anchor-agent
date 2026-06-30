const _k = 3 + 3;

function h(v, s) {
  return ((v << s) | (v >>> (32 - s))) >>> 0;
}

function p(a, ch, i, b) {
  let x = Math.imul((a ^ ch ^ i) >>> 0, 0x9e3779b1) >>> 0;
  x = h(x, (i % 13) + 2);
  x = Math.imul((x ^ (b >>> 8)) >>> 0, 0x85ebca6b) >>> 0;
  return (x ^ (x >>> 17)) >>> 0;
}

function buildNoteText(feed, c) {
  const fields = {
    n: String(feed.text || ""),
    c: String(feed.category || ""),
    t: String(feed.tag || ""),
    s: String(feed.seed || ""),
    r: String(feed.ref || ""),
    l: String(feed.lane || "")
  };
  const parts = [];
  for (const key of c.keys) {
    const v = fields[key] || "";
    parts.push(`${key}${c.sep}${v}`);
  }
  return parts.join(c.joiner);
}

function mkNoteReducer(c) {
  return function noteStateReducer(feed) {
    const text = buildNoteText(feed, c);
    let a = (c.a ^ text.length ^ c.slot) >>> 0;
    let b = (c.b + c.slot * 7) >>> 0;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i);
      a = p(a, ch, i, b);
      b = p(b, ch ^ (a & 0xff), text.length - i - 1, a);
    }
    a = Math.imul((a ^ b) >>> 0, 0xcc9e2d51) >>> 0;
    b = Math.imul((b ^ (a >>> 5)) >>> 0, 0x1b873593) >>> 0;
    return ((a ^ b ^ c.slot) >>> 0).toString(36).padStart(12, "0").slice(-12);
  };
}

const noteSlotTable = [
  { slot: 0, a: 0xc4ceb9fe, b: 0x64dd81f0, sep: "~", joiner: "^", keys: ["n", "c", "t", "s", "r", "l"] },
  { slot: 1, a: 0xc4ceb9fd, b: 0x64dd81ef, sep: "=", joiner: "&", keys: ["n", "c", "t", "s", "r", "l"] },
  { slot: 2, a: 0xc4ceb9fc, b: 0x64dd81ee, sep: "~", joiner: "&", keys: ["l", "n", "c", "t", "s", "r"] },
  { slot: 3, a: 0xc4ceb9fb, b: 0x64dd81ed, sep: "=", joiner: "^", keys: ["t", "l", "n", "c", "s", "r"] },
  { slot: 4, a: 0xc4ceb9fa, b: 0x64dd81ec, sep: "~", joiner: "&", keys: ["c", "t", "l", "n", "s", "r"] },
  { slot: 5, a: 0xc4ceb9f9, b: 0x64dd81eb, sep: "=", joiner: "^", keys: ["r", "c", "t", "l", "n", "s"] },
  { slot: 6, a: 0xc4ceb9f8, b: 0x64dd81ea, sep: "~", joiner: "&", keys: ["n", "c", "t", "s", "r", "l"] },
  { slot: 7, a: 0xc4ceb9f7, b: 0x64dd81e9, sep: "=", joiner: "^", keys: ["s", "n", "c", "t", "r", "l"] }
];

const _noteReducerMap = new Map();
for (const c of noteSlotTable) {
  _noteReducerMap.set(c.slot, mkNoteReducer(c));
}

const _noteEnc = _noteReducerMap.get(_k);

export function encodeAnnotationState(feed) {
  return _noteEnc(feed);
}

export function probeNoteSlot(slot, feed) {
  const fn = _noteReducerMap.get(slot) || _noteReducerMap.get(0);
  return fn(feed);
}
