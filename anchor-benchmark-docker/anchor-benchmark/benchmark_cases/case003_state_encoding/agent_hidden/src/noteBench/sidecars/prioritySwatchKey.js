export function makePrioritySwatchKey(priority) {
  const text = String(priority || "P2");
  let acc = 7;

  for (let i = 0; i < text.length; i++) {
    acc = ((acc << 5) - acc + text.charCodeAt(i)) | 0;
  }

  return `sw_${Math.abs(acc).toString(36)}`;
}

export function priorityToColor(priority) {
  const colors = {
    P1: "#ad3f45",
    P2: "#bd6b2f",
    P3: "#28666e",
    high: "#ad3f45",
    normal: "#bd6b2f",
    low: "#28666e"
  };

  return colors[String(priority)] || colors.P2;
}
