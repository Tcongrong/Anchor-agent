import { enqueuePreferenceCommand } from "../queue/preferenceCommandQueue.js";

function readActionNode(target) {
  return target?.closest?.("[data-action]") || null;
}

export function bindPreferenceInputGate() {
  document.addEventListener("click", (event) => {
    const node = readActionNode(event.target);
    if (!node) return;

    const actionName = node.getAttribute("data-action");
    if (!actionName) return;

    enqueuePreferenceCommand({
      type: actionName,
      origin: "pointer",
      sourceTag: node.tagName
    });
  });

  document.addEventListener("keydown", (event) => {
    const wantsSave = event.key === "s" && (event.ctrlKey || event.metaKey);
    if (!wantsSave) return;

    event.preventDefault();
    enqueuePreferenceCommand({
      type: "prefs.save",
      origin: "shortcut",
      sourceTag: "DOCUMENT"
    });
  });
}
