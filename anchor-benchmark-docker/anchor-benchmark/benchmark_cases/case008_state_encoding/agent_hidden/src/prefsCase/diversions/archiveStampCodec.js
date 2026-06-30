function rollHash(text) {
  let h = 0x12345678;

  for (let i = 0; i < text.length; i++) {
    h = (Math.imul(h, 31) + text.charCodeAt(i)) >>> 0;
  }

  return h >>> 0;
}

export function encodeArchiveStamp(envelope) {
  const fields = Array.isArray(envelope.fields) ? envelope.fields : [];
  const joined = fields.map((field) => `${field.key}=${field.value}`).join("|");
  const rolled = rollHash(`archive::${joined}`);

  return `ar${rolled.toString(36).padStart(10, "0").slice(-10)}`;
}
