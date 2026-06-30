// Off-chain decoys with anchor-like names; emit sc_* shaped strings but are not on the note.add path.

const decoyAlphabet = "0123456789abcdefghjkmnpqrstvwxyz";

function decoyFold(text, salt) {
  let left = (0x811c9dc5 ^ salt) >>> 0;
  let right = (0x45d9f3b ^ salt) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    left = Math.imul(left ^ code ^ i, 0x01000193) >>> 0;
    right = Math.imul(right + code + i, 0x27d4eb2d) >>> 0;
  }
  return { left, right };
}

function decoyBody(left, right, width) {
  let out = "";
  for (let i = 0; i < width; i += 1) {
    out += decoyAlphabet[((left ^ right ^ i) >>> 0) % decoyAlphabet.length];
  }
  return out;
}

function decoyTape(frame) {
  const fields = frame?.fields || {};
  return [fields.body || "", fields.tag || "", fields.priority || "", String(fields.seed || "")].join("|");
}

export function composeDraftStateCode(frame = {}) {
  const folded = decoyFold(decoyTape(frame), 0xdec0de01);
  return `sc_${decoyBody(folded.left, folded.right, 12)}zz`;
}

export function composeDraftStateCodec(frame = {}) {
  const folded = decoyFold(decoyTape(frame), 0xdec0de02);
  return `sc_${decoyBody(folded.left, folded.right, 12)}zy`;
}

export function composeDraftStatePreview(frame = {}) {
  const folded = decoyFold(decoyTape(frame), 0xdec0de03);
  return `sc_${decoyBody(folded.left, folded.right, 12)}zx`;
}

export const nameConfusionDecoys = {
  composeDraftStateCode,
  composeDraftStateCodec,
  composeDraftStatePreview,
};
