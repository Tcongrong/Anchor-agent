const KNOWN_THEMES = new Set(["system", "light", "dark", "contrast"]);
const DENSITY_RANK = { compact: 0, cozy: 1, roomy: 2 };

function slugifyWorkspaceName(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "workspace";
}

export function normalizePreferenceInput(snapshot) {
  const theme = KNOWN_THEMES.has(snapshot.theme) ? snapshot.theme : "system";
  const density = snapshot.density in DENSITY_RANK ? snapshot.density : "cozy";

  return {
    theme,
    density,
    densityRank: DENSITY_RANK[density],
    autosave: Boolean(snapshot.autosave),
    workspaceSlug: slugifyWorkspaceName(snapshot.workspaceName),
    capturedAt: snapshot.capturedAt
  };
}
