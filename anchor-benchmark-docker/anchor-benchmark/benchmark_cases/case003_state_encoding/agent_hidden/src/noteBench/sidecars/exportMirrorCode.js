function escapeCell(value) {
  return String(value || "")
    .replace(/\t/g, " ")
    .replace(/\n/g, "\\n");
}

export function makeExportMirrorCode(frame) {
  const fields = frame?.fields || {};
  const row = [
    fields.schema,
    fields.tag,
    fields.priority,
    fields.body
  ].map(escapeCell).join("\t");

  let sum = 211;
  for (let i = 0; i < row.length; i++) {
    sum = (sum + row.charCodeAt(i) * 11) % 8191;
  }

  return `xm_${sum.toString(36)}`;
}
