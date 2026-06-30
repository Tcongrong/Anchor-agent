export function makeNoteChecksum(tokens) {
  const list = Array.isArray(tokens) ? tokens : [];
  let crc = 0xffffffff;
  for (const tok of list) {
    const s = String(tok);
    for (let i = 0; i < s.length; i++) {
      crc = crc ^ s.charCodeAt(i);
      for (let k = 0; k < 8; k++) {
        crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
      }
    }
  }
  return `cn_${((crc ^ 0xffffffff) >>> 0).toString(36)}`;
}
