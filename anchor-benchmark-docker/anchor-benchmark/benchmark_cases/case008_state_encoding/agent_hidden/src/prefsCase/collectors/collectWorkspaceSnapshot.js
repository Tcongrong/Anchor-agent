function readSelectValue(selector, fallback) {
  const node = document.querySelector(selector);
  return node && "value" in node ? String(node.value) : fallback;
}

function readCheckboxState(selector) {
  const node = document.querySelector(selector);
  return Boolean(node && node.checked);
}

function readTextValue(selector, fallback) {
  const node = document.querySelector(selector);
  const value = node && "value" in node ? String(node.value) : "";
  return value.trim() || fallback;
}

export function collectWorkspaceSnapshot() {
  return {
    theme: readSelectValue("#themeSelect", "system"),
    density: readSelectValue("#densitySelect", "cozy"),
    autosave: readCheckboxState("#autosaveToggle"),
    workspaceName: readTextValue("#workspaceNameInput", "untitled"),
    capturedAt: Date.now()
  };
}
