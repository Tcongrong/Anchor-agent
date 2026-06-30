export function refreshBadgeDigest(badgeNodes) {
  const labels = [...badgeNodes].map((node, index) => `${index}:${node.textContent || ""}`);
  let a = 0x13579bdf;
  let b = 0x2468ace0;

  for (const label of labels) {
    for (let i = 0; i < label.length; i += 1) {
      a = Math.imul(a ^ label.charCodeAt(i), 0x45d9f3b) >>> 0;
      b = (b + ((a << 7) | (a >>> 25))) >>> 0;
    }
  }

  return `bd_${((a ^ b) >>> 0).toString(16).padStart(8, "0")}`;
}
