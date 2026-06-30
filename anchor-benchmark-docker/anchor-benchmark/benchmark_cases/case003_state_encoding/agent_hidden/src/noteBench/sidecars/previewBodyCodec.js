function localBase64Url(text) {
  return btoa(unescape(encodeURIComponent(String(text))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export function makePreviewBodyCodec(raw) {
  const body = localBase64Url(String(raw?.text || "").slice(0, 120));
  window.__note_preview_body__ = `pv_${body}`;
  return window.__note_preview_body__;
}
