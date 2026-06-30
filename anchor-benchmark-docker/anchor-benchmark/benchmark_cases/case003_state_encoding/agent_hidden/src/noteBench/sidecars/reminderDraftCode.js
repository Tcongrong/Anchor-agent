function fold(text) {
  let x = 0x9e37;

  for (let i = 0; i < text.length; i++) {
    x = Math.imul(x ^ text.charCodeAt(i), 0x45d9) >>> 0;
    x = ((x << 7) | (x >>> 25)) >>> 0;
  }

  return x.toString(36);
}

export function makeReminderDraftCode(frame) {
  const fields = frame?.fields || {};
  const text = `${fields.body || ""}|${fields.seed || ""}`;
  return `rd_${fold(text)}`;
}
