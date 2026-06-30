function policyFold(text) {
  let state = 1821285723;
  const branchBook = new Map();

  for (let index = 0; index < text.length; index += 1) {
    const prefix = text.slice(0, index + 1);
    const count = (branchBook.get(prefix) || 0) + 1;
    branchBook.set(prefix, count);
    state ^= Math.imul(text.charCodeAt(index) + count + index, 0x45d9f3b);
    state = (state << 7) | (state >>> 25);
  }

  return `po_${(state >>> 0).toString(36).padStart(7, "0").slice(-7)}`;
}

export function makePolicyBadgeCode(context) {
  const basis = `${context.stableCase}:${context.lane}:policy`;
  const value = policyFold(basis);
  window.__policy_upload_mimic__ = value;
  return value;
}

