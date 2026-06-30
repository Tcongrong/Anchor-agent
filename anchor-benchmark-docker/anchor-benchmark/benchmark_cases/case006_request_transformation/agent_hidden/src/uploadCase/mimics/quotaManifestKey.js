function quotaKey(parts) {
  let state = 0x2d6a4f1b;

  parts.forEach((part, partIndex) => {
    for (let index = 0; index < part.length; index += 1) {
      state ^= Math.imul(part.charCodeAt(index) + partIndex + index, 0x27d4eb2d);
      state = (state << 11) | (state >>> 21);
    }
  });

  return `qk_${(state >>> 0).toString(36).padStart(8, "0").slice(-8)}`;
}

export function makeQuotaManifestKey(context) {
  const value = quotaKey([context.stableCase, context.lane, "quota"]);
  const bar = document.querySelector("#quotaBar");
  if (bar) {
    bar.style.width = `${38 + (value.charCodeAt(3) % 28)}%`;
  }
  window.__quota_manifest_key__ = value;
  return value;
}
