function retryRound(seed, lane) {
  let left = 0x811c9dc5;
  let right = 0x01000193;

  for (const char of `${seed}|${lane}|retry`) {
    const code = char.charCodeAt(0);
    left = Math.imul(left ^ code, 0x01000193) >>> 0;
    right ^= Math.imul(code + left, 0x85ebca6b);
    right = (right >>> 3) | (right << 29);
  }

  return `rt_${(left >>> 0).toString(36)}_${(right >>> 0).toString(36).slice(-5)}`;
}

export function makeRetryUploadToken(context) {
  const value = retryRound(context.stableCase, context.lane);
  window.__retry_upload_token__ = value;
  return value;
}
