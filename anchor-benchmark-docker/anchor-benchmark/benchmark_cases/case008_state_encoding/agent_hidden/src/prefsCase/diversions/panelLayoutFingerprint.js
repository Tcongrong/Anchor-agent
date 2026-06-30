export function buildPanelLayoutFingerprint() {
  const panels = document.querySelectorAll(".prefs-card");

  let acc = 0x2545f491;
  panels.forEach((panel, index) => {
    const rect = panel.getBoundingClientRect();
    acc = (acc ^ Math.round(rect.width) ^ (Math.round(rect.height) << 8) ^ index) >>> 0;
    acc = Math.imul(acc, 16777619) >>> 0;
  });

  const fingerprint = acc.toString(16).padStart(8, "0");
  window.__case008_layout_fingerprint__ = fingerprint;
  return fingerprint;
}
