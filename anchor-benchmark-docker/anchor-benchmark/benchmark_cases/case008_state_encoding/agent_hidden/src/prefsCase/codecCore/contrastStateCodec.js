import { FNV_OFFSET, mixToken, spinBits, encodeBase36 } from "./bitMixHelpers.js";

function describeFieldReversed(field, index) {
  return `${field.key || ""}#${field.value || ""}@${index}`;
}

export function encodeContrastState(envelope) {
  const fields = Array.isArray(envelope.fields) ? envelope.fields : [];

  let trunk = (FNV_OFFSET ^ 0x5bd1e995) >>> 0;
  let branch = spinBits(fields.length + 0x27d4eb2f);

  for (let index = fields.length - 1; index >= 0; index -= 1) {
    const field = fields[index] || {};
    trunk = mixToken(trunk, describeFieldReversed(field, index));
    branch = spinBits((trunk ^ branch ^ index) >>> 0);
  }

  const merged = (branch ^ trunk) >>> 0;
  return `${encodeBase36(branch, 6)}${encodeBase36(merged, 6)}`;
}
