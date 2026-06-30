export function makeUndoSnapshotCodec(raw) {
  const text = [
    raw?.text || "",
    raw?.tag || "",
    raw?.priority || ""
  ].join("\u001f");

  let hi = 0x1234;
  let lo = 0xabcd;

  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    hi = (hi + c + i) & 0xffff;
    lo = (lo ^ (c << (i % 8))) & 0xffff;
  }

  return `us_${hi.toString(36)}_${lo.toString(36)}`;
}
