const TRACKED_FIELD_IDS = ["themeSelect", "densitySelect", "workspaceNameInput"];

function sumCharCodes(text) {
  let total = 0;
  for (let i = 0; i < text.length; i++) total += text.charCodeAt(i);
  return total;
}

export function makeResetConfirmCode() {
  let total = 0;

  for (const id of TRACKED_FIELD_IDS) {
    const node = document.querySelector(`#${id}`);
    const text = node && "value" in node ? String(node.value || "") : "";
    total += sumCharCodes(text);
  }

  const code = (Math.imul(total, 2654435761) >>> 0).toString(16).padStart(8, "0");
  console.log({ action: "prefs.reset", confirm_code: code });
  return code;
}
