function addToken(tokens, lane, value, weight) {
  const clean = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9.:-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!clean) return;

  tokens.push({
    lane,
    token: `${lane}:${clean}`,
    weight
  });
}

function addTokenList(tokens, lane, value, weightBase) {
  String(value || "")
    .split(/[,:\s.-]+/)
    .filter(Boolean)
    .forEach((part, index) => addToken(tokens, lane, part, weightBase + index));
}

export function buildSegmentFeed(parsed, packet, context) {
  const tokens = [];
  const fields = parsed.fields;

  addToken(tokens, "case", parsed.header.caseId, 11);
  addToken(tokens, "lane", parsed.header.lane || context.lane, 13);
  addToken(tokens, "file", fields["file.base"], 17);
  addToken(tokens, "file", fields["file.ext"], 19);
  addToken(tokens, "file", fields["file.compound"], 23);
  addToken(tokens, "class", fields.category, 29);
  addTokenList(tokens, "desc", fields["desc.tokens"], 31);
  addToken(tokens, "seed", fields.seed, 37);
  addTokenList(tokens, "title", fields.title, 41);
  addTokenList(tokens, "visual", fields.visual, 43);

  return {
    tokens,
    lanes: ["case", "lane", "file", "class", "desc", "seed", "title", "visual"],
    rowCount: packet.rowCount,
    sheetSize: parsed.sheetSize,
    category: fields.category,
    source: {
      fileName: fields["file.compound"],
      description: fields["desc.raw"]
    }
  };
}
