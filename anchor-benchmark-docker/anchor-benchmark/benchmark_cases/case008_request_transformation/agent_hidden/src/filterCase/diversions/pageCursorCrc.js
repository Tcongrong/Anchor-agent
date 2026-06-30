let page = 1;

export function readPageCursor() {
  return {
    page,
    cursor: makeCursor(page, "read")
  };
}

export function movePageCursor(direction, rawRules) {
  page = Math.max(1, Math.min(9, page + direction));
  return {
    page,
    cursor: makeCursor(page, [
      rawRules.status,
      rawRules.minAmount,
      rawRules.owner,
      rawRules.region || "all",
      rawRules.requestProfile || "standard",
      rawRules.agedOnly ? "aged" : "all"
    ].join(":"))
  };
}

function makeCursor(pageNumber, text) {
  let value = Math.imul(pageNumber + 31, 0x7f4a7c15) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    value ^= text.charCodeAt(i) + i;
    value = ((value << 5) | (value >>> 27)) >>> 0;
  }
  return `pg_${value.toString(36).padStart(8, "0").slice(-8)}`;
}
