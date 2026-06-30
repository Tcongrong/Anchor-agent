export function makeExportPreviewStamp(rules, issuedAt = 0) {
  const source = `${rules.status}|${rules.minAmount}|${rules.owner}|${Math.floor(issuedAt / 60000)}`;
  let crc = 0xffffffff;
  for (let i = 0; i < source.length; i += 1) {
    crc ^= source.charCodeAt(i);
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return `ex_${(crc >>> 0).toString(16).padStart(8, "0")}`;
}
