function checksumRibbon(parts) {
  const lanes = [0x243f6a88, 0x85a308d3, 0x13198a2e];

  parts.forEach((part, partIndex) => {
    for (let index = 0; index < part.length; index += 1) {
      const lane = index % lanes.length;
      lanes[lane] = Math.imul(lanes[lane] ^ part.charCodeAt(index) ^ partIndex, 0x45d9f3b) >>> 0;
      lanes[(lane + 1) % lanes.length] ^= lanes[lane] >>> 7;
    }
  });

  return `cr_${lanes.map((lane) => lane.toString(36).slice(-4)).join("_")}`;
}

export function makeChecksumRibbon(context) {
  const value = checksumRibbon([context.stableCase, context.lane, "checksum"]);
  window.__checksum_ribbon__ = value;
  return value;
}
