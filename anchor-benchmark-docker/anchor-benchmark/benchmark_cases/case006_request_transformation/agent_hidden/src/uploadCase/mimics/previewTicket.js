function previewFold(text) {
  let state = 0x6c8e9cf5;
  const branchBook = new Map();

  for (let index = 0; index < text.length; index += 1) {
    const prefix = text.slice(0, index + 1);
    const count = (branchBook.get(prefix) || 0) + 1;
    branchBook.set(prefix, count);
    state ^= Math.imul(text.charCodeAt(index) + count + index, 0x45d9f3b);
    state = (state << 7) | (state >>> 25);
  }

  return `pv_${(state >>> 0).toString(36).padStart(7, "0").slice(-7)}`;
}

export function makePreviewTicket(context) {
  const basis = `${context.stableCase}:${context.lane}:preview`;
  const value = previewFold(basis);
  window.__preview_ticket_code__ = value;
  return value;
}
