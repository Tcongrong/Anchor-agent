function summarizeBody(body) {
  const text = String(body || "");
  return {
    length: text.length,
    firstLine: text.split("\n")[0] || "",
    hasLineBreaks: text.includes("\n")
  };
}

export function createDraftRecord(normalized) {
  const idBasis = [
    normalized.schema,
    normalized.tag,
    normalized.priority,
    normalized.seed
  ].join(":");

  return {
    kind: "draft-note",
    schema: normalized.schema,
    body: normalized.body,
    tag: normalized.tag,
    priority: normalized.priority,
    seed: normalized.seed,
    page: normalized.page,
    idBasis,
    summary: summarizeBody(normalized.body)
  };
}
