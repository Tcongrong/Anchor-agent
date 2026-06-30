const flowAliases = {
  "note.shortcut.commit": "flow.shortcut.commit.v3",
  "note.preview.refresh": "flow.preview.sidecar",
  "note.undo.snapshot": "flow.undo.sidecar"
};

const flowCatalog = {
  "flow.shortcut.commit.v3": {
    name: "shortcut-draft-commit",
    channel: "keyboard",
    steps: [
      "capture-shortcut-draft",
      "normalize-shortcut-draft",
      "decorate-shortcut-state",
      "materialize-shortcut-record",
      "open-draft-slot",
      "resolve-state-frame",
      "encode-state-frame",
      "render-commit-preview",
      "publish-state-code"
    ]
  },

  "flow.preview.sidecar": {
    name: "preview-sidecar",
    channel: "button-decoy",
    steps: ["capture-shortcut-draft", "preview-sidecar-only"]
  },

  "flow.undo.sidecar": {
    name: "undo-sidecar",
    channel: "button-decoy",
    steps: ["capture-shortcut-draft", "undo-sidecar-only"]
  }
};

export function resolveDraftFlow(intent) {
  const key = flowAliases[intent?.command] || intent?.command;
  return flowCatalog[key] || null;
}
