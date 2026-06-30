function archiveStamp(context) {
  const route = [context.lane, context.stableCase, context.meta?.origin || "page"];
  const branchBook = new Map();
  let mix = 0x3c6ef372;

  route.forEach((part, partIndex) => {
    let path = "";
    for (const char of part) {
      path += char;
      const count = (branchBook.get(path) || 0) + partIndex + 1;
      branchBook.set(path, count);
      mix ^= Math.imul(char.charCodeAt(0) + count, 0x7feb352d);
      mix = (mix << 9) | (mix >>> 23);
    }
  });

  return `al_${(mix >>> 0).toString(36).padStart(8, "0").slice(-8)}`;
}

export function makeArchiveLaneStamp(context) {
  const value = archiveStamp(context);
  window.__archive_lane_stamp__ = value;
  return value;
}
