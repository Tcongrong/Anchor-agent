function readValue(selector, fallback = "") {
  const node = document.querySelector(selector);
  return node && "value" in node ? node.value : fallback;
}

export function readDraftControls() {
  const seed =
    window.localStorage.getItem("note_draft_seed") || "case003_draft_seed";

  window.localStorage.setItem("note_draft_seed", seed);

  return {
    text: readValue("#noteText"),
    tag: readValue("#tagInput"),
    priority: readValue("#prioritySelect", "normal"),
    seed,
    page: "quick_note"
  };
}
