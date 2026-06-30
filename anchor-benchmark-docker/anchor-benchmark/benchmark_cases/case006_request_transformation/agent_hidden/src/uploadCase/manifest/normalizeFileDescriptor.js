const CATEGORY_ALLOWLIST = new Set(["finance", "legal", "research", "ops"]);

function splitName(rawName) {
  const clean = String(rawName)
    .trim()
    .replace(/[\\/]+/g, "-")
    .replace(/\s+/g, "-")
    .toLowerCase();

  const dot = clean.lastIndexOf(".");

  if (dot <= 0 || dot === clean.length - 1) {
    return {
      base: clean || "untitled",
      ext: "none"
    };
  }

  return {
    base: clean.slice(0, dot),
    ext: clean.slice(dot + 1)
  };
}

function tokenizeDescription(description) {
  const normalized = String(description)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ");

  const tokens = normalized.split(" ").filter(Boolean);
  return tokens.length ? tokens : ["blank"];
}

function safeCategory(rawCategory) {
  const category = String(rawCategory).trim().toLowerCase();
  return CATEGORY_ALLOWLIST.has(category) ? category : "ops";
}

export function normalizeFileDescriptor(manifest) {
  const name = splitName(manifest.fileName);
  const category = safeCategory(manifest.category);
  const descriptionTokens = tokenizeDescription(manifest.description);
  const visualHint = String(manifest.visualLane)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

  return {
    file: {
      original: String(manifest.fileName || "").trim(),
      base: name.base,
      ext: name.ext,
      compound: `${name.base}.${name.ext}`
    },
    description: {
      raw: String(manifest.description || "").trim(),
      tokens: descriptionTokens,
      length: descriptionTokens.join("").length
    },
    category,
    seed: String(manifest.seed || "case006_request_transformation_manifest_seed"),
    title: String(manifest.pageTitle || "archive").toLowerCase(),
    visualHint
  };
}
