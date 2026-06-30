export function makeSessionNoteStamp(pageInfo) {
  const src = [
    pageInfo.title || "",
    pageInfo.path || "",
    pageInfo.width || "0"
  ].join("~");
  let h = 0;
  for (let i = 0; i < src.length; i++) {
    h = (Math.imul(h, 37) + src.charCodeAt(i)) >>> 0;
  }
  return `sn_${h.toString(16).padStart(8, "0")}`;
}
