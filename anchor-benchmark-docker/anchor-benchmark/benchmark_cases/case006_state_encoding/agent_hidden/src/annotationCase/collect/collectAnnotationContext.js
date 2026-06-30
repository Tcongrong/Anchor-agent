export function collectAnnotationContext(payload) {
  const seed =
    window.localStorage.getItem("case006_state_encoding_note_seed") ||
    "case006_state_encoding_note_seed";

  window.localStorage.setItem("case006_state_encoding_note_seed", seed);

  return {
    text: String(payload.text || ""),
    category: String(payload.category || ""),
    tag: String(payload.tag || ""),
    seed,
    pageRef: String(payload.pageRef || document.title || ""),
    lane: "annotation-lane"
  };
}
