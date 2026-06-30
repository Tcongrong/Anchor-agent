const PROFILE_TABLE = [
  {
    name: "dark-roomy",
    codecKey: "workspace-state-v3",
    match: (input) => input.theme === "dark" && input.densityRank >= 2
  },
  {
    name: "dark-default",
    codecKey: "workspace-state-v3",
    match: (input) => input.theme === "dark"
  },
  {
    name: "contrast-default",
    codecKey: "contrast-state-v1",
    match: (input) => input.theme === "contrast"
  },
  {
    name: "standard-default",
    codecKey: "workspace-state-v3",
    match: () => true
  }
];

export function resolvePreferenceProfile(normalized) {
  const entry = PROFILE_TABLE.find((row) => row.match(normalized)) || PROFILE_TABLE[PROFILE_TABLE.length - 1];

  return {
    name: entry.name,
    codecKey: entry.codecKey,
    normalized
  };
}
