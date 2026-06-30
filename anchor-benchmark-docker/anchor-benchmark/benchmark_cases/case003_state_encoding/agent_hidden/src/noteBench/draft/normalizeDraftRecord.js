const priorityMap = {
  high: "P1",
  normal: "P2",
  low: "P3"
};

function slugTag(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function compactLineEndings(value) {
  return String(value)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

export function normalizeDraftRecord(raw) {
  return {
    body: compactLineEndings(raw.text),
    tag: slugTag(raw.tag) || "untagged",
    priority: priorityMap[String(raw.priority)] || "P2",
    seed: String(raw.seed),
    schema: "note.v2",
    page: String(raw.page || "quick_note")
  };
}
