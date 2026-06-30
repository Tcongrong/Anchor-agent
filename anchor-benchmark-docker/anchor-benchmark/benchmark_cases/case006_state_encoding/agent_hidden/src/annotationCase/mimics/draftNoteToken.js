export function makeDraftNoteToken(descriptor) {
  const text = [
    descriptor.text || "",
    descriptor.category || "",
    descriptor.seed || ""
  ].join(":");
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h = Math.imul(h ^ text.charCodeAt(i), 0x01000193) >>> 0;
  }
  return `dn_${h.toString(36).padStart(8, "0")}`;
}
