const DEFAULT_PREFERENCES = {
  theme: "system",
  density: "cozy",
  autosave: false,
  workspaceName: ""
};

function hydrateControl(selector, value) {
  const node = document.querySelector(selector);
  if (!node) return;

  if (node.type === "checkbox") {
    node.checked = Boolean(value);
  } else {
    node.value = value;
  }
}

export function mountWorkspacePanel() {
  hydrateControl("#themeSelect", DEFAULT_PREFERENCES.theme);
  hydrateControl("#densitySelect", DEFAULT_PREFERENCES.density);
  hydrateControl("#autosaveToggle", DEFAULT_PREFERENCES.autosave);
  hydrateControl("#workspaceNameInput", DEFAULT_PREFERENCES.workspaceName);

  const marker = document.querySelector("#lastSavedMarker");
  if (marker) marker.textContent = "Not saved yet";

  const badge = document.querySelector("#profileBadge");
  if (badge) badge.textContent = "profile: standard-default";
}
