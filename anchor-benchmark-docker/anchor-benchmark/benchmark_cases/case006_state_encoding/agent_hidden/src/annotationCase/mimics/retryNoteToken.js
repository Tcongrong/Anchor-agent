function mixRetryNote(acc, code, idx) {
  let next = (acc + code + idx) >>> 0;
  next = Math.imul(next ^ (next >>> 13), 0x85abca6b) >>> 0;
  next = Math.imul(next ^ (next >>> 16), 0xc2b2aa35) >>> 0;
  return next >>> 0;
}

export function makeRetryNoteToken(input) {
  const text = `${input?.title || ""}|${input?.path || ""}`;
  let acc = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    acc = mixRetryNote(acc, text.charCodeAt(i), i);
  }
  return `rn_${acc.toString(36)}`;
}
