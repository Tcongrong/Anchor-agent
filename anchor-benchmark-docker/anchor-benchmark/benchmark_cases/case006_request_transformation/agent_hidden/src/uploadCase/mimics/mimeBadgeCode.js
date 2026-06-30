function extensionBadge(ext) {
  let mix = 0x7f4a7c15;
  const clean = String(ext || "pdf").toLowerCase();

  for (let index = 0; index < clean.length; index += 1) {
    mix = Math.imul(mix ^ clean.charCodeAt(index), 0x9e3779b1) >>> 0;
  }

  return `mb_${clean}_${mix.toString(36).slice(-4)}`;
}

export function makeMimeBadgeCode() {
  const draft = document.querySelector("#manifestDraftInput")?.value || "file=quarterly-report.pdf";
  const fileRow = String(draft)
    .split(/\n+/)
    .find((row) => row.trim().toLowerCase().startsWith("file="));
  const fileName = String(fileRow || "file=quarterly-report.pdf").split("=").slice(1).join("=");
  const ext = String(fileName || "quarterly-report.pdf").split(".").pop();
  const value = extensionBadge(ext);
  const badge = document.querySelector("#mimeBadge");
  if (badge) {
    badge.textContent = `mime: ${ext || "none"}`;
  }
  window.__mime_badge_code__ = value;
  return value;
}
