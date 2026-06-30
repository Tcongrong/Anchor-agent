function makeSessionSeedBytes() {
  return Array.from({ length: 4 }, (_, index) => ((index + 1) * 2654435761) & 0xff);
}

export function computeSessionWarmDigest() {
  const seedBytes = makeSessionSeedBytes();

  let acc = 0x811c9dc5;
  for (const byte of seedBytes) {
    acc = (acc ^ byte) >>> 0;
    acc = Math.imul(acc, 0x01000193) >>> 0;
  }

  const digest = acc.toString(16).padStart(8, "0");
  window.__case008_session_warm__ = digest;
  return digest;
}
