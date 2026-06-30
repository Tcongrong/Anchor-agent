export function computeViewportProfileCode() {
  const width = window.innerWidth || 0;
  const height = window.innerHeight || 0;
  const ratio = Math.round((width / Math.max(height, 1)) * 1000);

  const code = ((width * 31 + height * 17 + ratio) >>> 0).toString(16).padStart(8, "0");
  window.__case008_viewport_profile__ = code;
  return code;
}
