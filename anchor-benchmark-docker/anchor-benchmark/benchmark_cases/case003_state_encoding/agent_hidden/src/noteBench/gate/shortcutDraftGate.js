import { enqueueDraftIntent } from "../intent/draftIntentQueue.js";

function isCommitChord(event) {
  return (event.ctrlKey || event.metaKey) && event.key === "Enter";
}

function findShortcutScope(source) {
  if (!source || typeof source.closest !== "function") {
    return null;
  }

  return source.closest("[data-shortcut-command]");
}

function buildShortcutIntent(event, scope) {
  const focused = event.target?.id || event.target?.name || event.target?.tagName || "unknown";
  const platformKey = event.metaKey ? "meta-enter" : "ctrl-enter";

  return {
    command: scope.getAttribute("data-shortcut-command") || "note.shortcut.commit",
    source: "keyboard",
    focus: focused,
    keyChord: platformKey,
    lane: scope.getAttribute("data-state-lane") || "composer",
    formId: scope.id || "draftComposer"
  };
}

export function bindShortcutGate() {
  document.addEventListener(
    "keydown",
    (event) => {
      if (!isCommitChord(event)) return;

      const scope = findShortcutScope(event.target);
      if (!scope) return;

      event.preventDefault();
      enqueueDraftIntent(buildShortcutIntent(event, scope));
    },
    true
  );
}
