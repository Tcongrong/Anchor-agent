function hashThemeLabel(label) {
  let h = 0;

  for (let i = 0; i < label.length; i++) {
    h = (Math.imul(h, 33) + label.charCodeAt(i)) >>> 0;
  }

  return h >>> 0;
}

export function makeThemePreviewCode(command) {
  const select = document.querySelector("#themeSelect");
  const theme = select ? String(select.value) : "system";
  const seed = hashThemeLabel(`${theme}:${command?.origin || "pointer"}`);
  const code = seed.toString(16).padStart(8, "0").slice(-8);

  console.log({ action: "prefs.preview", preview_code: code, theme });
  return code;
}
