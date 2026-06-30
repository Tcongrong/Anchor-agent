export function makeNoteBadgeCode(name) {
  const text = String(name);
  let value = 5381;
  for (let i = 0; i < text.length; i++) {
    value = ((value << 5) + value + text.charCodeAt(i)) >>> 0;
  }
  return `nb_${value.toString(36)}`;
}
