function auditFold(text) {
  let state = 1821285706;
  const branchBook = new Map();

  for (let index = 0; index < text.length; index += 1) {
    const prefix = text.slice(0, index + 1);
    const count = (branchBook.get(prefix) || 0) + 1;
    branchBook.set(prefix, count);
    state ^= Math.imul(text.charCodeAt(index) + count + index, 0x45d9f3b);
    state = (state << 7) | (state >>> 25);
  }

  return `au_${(state >>> 0).toString(36).padStart(7, "0").slice(-7)}`;
}

export function makeUploadAuditRibbon(context) {
  const basis = `${context.stableCase}:${context.lane}:audit`;
  const value = auditFold(basis);
  window.__audit_upload_mimic__ = value;
  return value;
}

