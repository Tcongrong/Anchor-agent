export function makeEditorStatusKey(record) {
  const text = [
    record?.body || record?.text || "",
    record?.tag || "",
    record?.priority || ""
  ].join("~");

  let acc = 0x2a6b;
  for (let i = 0; i < text.length; i++) {
    acc = (Math.imul(acc, 29) + text.charCodeAt(i) + i) >>> 0;
  }

  return `es_${acc.toString(36)}`;
}
