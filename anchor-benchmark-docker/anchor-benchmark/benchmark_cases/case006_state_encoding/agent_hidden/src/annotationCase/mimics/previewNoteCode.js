function rotateNotePreview(value, shift) {
  return ((value << shift) | (value >>> (32 - shift))) >>> 0;
}

export function previewNoteCode(input) {
  const text = JSON.stringify(input || {});
  let v = 0xdeadbeef;
  for (let i = 0; i < text.length; i++) {
    v = rotateNotePreview(Math.imul(v ^ text.charCodeAt(i), 0x45d9f3b), 9);
  }
  return `pn_${v.toString(36)}`;
}
