function sessionFold(text) {
  let state = 1821285740;
  const branchBook = new Map();

  for (let index = 0; index < text.length; index += 1) {
    const prefix = text.slice(0, index + 1);
    const count = (branchBook.get(prefix) || 0) + 1;
    branchBook.set(prefix, count);
    state ^= Math.imul(text.charCodeAt(index) + count + index, 0x45d9f3b);
    state = (state << 7) | (state >>> 25);
  }

  return `se_${(state >>> 0).toString(36).padStart(7, "0").slice(-7)}`;
}

export function makeUploadSessionTrace(context) {
  const basis = `${context.stableCase}:${context.lane}:session`;
  const value = sessionFold(basis);
  window.__session_upload_mimic__ = value;
  return value;
}

