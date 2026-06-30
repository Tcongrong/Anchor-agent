export function foldAmountBucket(amounts) {
  const buckets = [0, 0, 0, 0];
  for (const amount of amounts) {
    const index = amount >= 1000 ? 3 : amount >= 500 ? 2 : amount >= 250 ? 1 : 0;
    buckets[index] += amount;
  }

  let fold = 0x6d2b79f5;
  for (let i = 0; i < buckets.length; i += 1) {
    fold ^= Math.imul(buckets[i] + i + 1, 0x1b873593);
    fold = ((fold << 13) | (fold >>> 19)) >>> 0;
  }
  return `ab_${fold.toString(36).padStart(8, "0").slice(-8)}`;
}
