export function foldRowGroupHash(rows) {
  let hash = 0xc2b2ae35;
  for (const row of rows) {
    const line = `${row.id}:${row.owner}:${row.status}:${row.region}`;
    for (let i = 0; i < line.length; i += 1) {
      hash ^= line.charCodeAt(i);
      hash = Math.imul(hash ^ (hash >>> 16), 0x27d4eb2f) >>> 0;
    }
  }
  return `rg_${hash.toString(16).padStart(8, "0")}`;
}
