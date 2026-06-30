function checksum(text) {
  let acc = 0x45;

  for (let i = 0; i < text.length; i++) {
    acc = (acc + text.charCodeAt(i) * (i + 3)) % 4093;
  }

  return acc.toString(36).padStart(3, "0");
}

export function makeOfflineQueueCodec(frame) {
  const fields = frame?.fields || {};
  const serial = [
    fields.seed || "",
    fields.tag || "",
    fields.priority || "",
    fields.body || ""
  ].join("|");

  return `oq_${checksum(serial)}`;
}
