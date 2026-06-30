const ALLOWED_CATEGORIES = new Set(["note", "task", "reminder", "insight"]);

function cleanField(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

export function normalizeAnnotation(context) {
  const category = ALLOWED_CATEGORIES.has(context.category)
    ? context.category
    : "note";

  return {
    text: cleanField(context.text),
    category,
    tag: cleanField(context.tag).toLowerCase(),
    seed: String(context.seed),
    pageRef: String(context.pageRef).trim().replace(/\s+/g, "_").toLowerCase(),
    lane: String(context.lane || "annotation-lane")
  };
}
