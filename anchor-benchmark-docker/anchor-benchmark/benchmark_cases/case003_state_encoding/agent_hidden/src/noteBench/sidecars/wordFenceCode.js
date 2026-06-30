export function makeWordFenceCode(text) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  let left = 13;
  let right = 37;

  for (let i = 0; i < words.length; i++) {
    left = (left + words[i].length * (i + 5)) % 997;
    right = (right ^ words[i].charCodeAt(0)) % 997;
  }

  return `wf_${left.toString(36)}_${right.toString(36)}`;
}
