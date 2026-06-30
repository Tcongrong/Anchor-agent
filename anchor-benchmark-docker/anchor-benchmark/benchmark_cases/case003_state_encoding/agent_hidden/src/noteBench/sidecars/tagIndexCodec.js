export function makeTagIndexCodec(frame) {
  const tag = String(frame?.fields?.tag || "untagged");
  let v = 19;

  for (let i = 0; i < tag.length; i++) {
    v = Math.imul(v ^ tag.charCodeAt(i), 33) >>> 0;
  }

  return `ti_${tag}_${v.toString(36)}`;
}
