function dropMark(text) {
  let state = 0x94d049bb;

  for (let index = 0; index < text.length; index += 1) {
    state = Math.imul(state + text.charCodeAt(index) + index, 0xc2b2ae35) >>> 0;
    state ^= state >>> 16;
  }

  return `dz_${state.toString(36).padStart(6, "0").slice(-6)}`;
}

export function makeDropzoneMark() {
  const node = document.querySelector("#dropzoneVisual");
  const value = dropMark(node?.textContent || "dropzone");
  window.__dropzone_mark__ = value;
  return value;
}
