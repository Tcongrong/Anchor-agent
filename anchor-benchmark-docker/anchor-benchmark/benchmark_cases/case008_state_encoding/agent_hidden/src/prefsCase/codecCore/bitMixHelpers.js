export const FNV_OFFSET = 0x811c9dc5;
export const FNV_PRIME = 0x01000193;

export function mixToken(hash, token) {
  let h = hash >>> 0;

  for (let i = 0; i < token.length; i++) {
    h = (h ^ token.charCodeAt(i)) >>> 0;
    h = Math.imul(h, FNV_PRIME) >>> 0;
  }

  return h >>> 0;
}

export function spinBits(value) {
  let x = value >>> 0;
  x ^= x << 13;
  x >>>= 0;
  x ^= x >>> 17;
  x ^= x << 5;
  x >>>= 0;
  return x >>> 0;
}

export function encodeBase36(value, width) {
  return (value >>> 0).toString(36).padStart(width, "0").slice(-width);
}
