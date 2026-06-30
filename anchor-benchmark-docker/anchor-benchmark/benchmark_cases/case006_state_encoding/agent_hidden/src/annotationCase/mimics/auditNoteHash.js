function mixAuditNote(a, b, ch) {
  return (Math.imul(a ^ ch, 0x9e3779b1) ^ (b >>> 7)) >>> 0;
}

export function makeAuditNoteHash(context) {
  const src = [
    context.text || "",
    context.category || "",
    context.tag || ""
  ].join("|");
  let a = 0xc4ceb9fe;
  let b = 0x64dd81f0;
  for (let i = 0; i < src.length; i++) {
    a = mixAuditNote(a, b, src.charCodeAt(i));
    b = mixAuditNote(b, a, src.charCodeAt(src.length - 1 - i));
  }
  return `an_${((a ^ b) >>> 0).toString(36).padStart(10, "0").slice(-10)}`;
}
