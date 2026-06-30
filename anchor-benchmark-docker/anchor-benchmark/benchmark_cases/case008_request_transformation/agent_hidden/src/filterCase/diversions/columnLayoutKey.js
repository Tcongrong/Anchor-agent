let savedMode = "compact";

export function saveColumnLayoutKey(columns) {
  const normalized = columns.map((column) => column.slice(0, 9)).join("|");
  let hash = 0x9e3779b9;

  for (let i = 0; i < normalized.length; i += 1) {
    hash ^= normalized.charCodeAt(i) * (i + 11);
    hash = Math.imul(hash ^ (hash >>> 15), 0x85ebca6b) >>> 0;
  }

  savedMode = savedMode === "compact" ? "wide" : "compact";
  return {
    mode: savedMode,
    layoutKey: `cl_${hash.toString(16).padStart(8, "0")}`
  };
}
