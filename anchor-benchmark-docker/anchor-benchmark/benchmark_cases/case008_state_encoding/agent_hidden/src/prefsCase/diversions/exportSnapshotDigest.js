function digestParts(parts) {
  let acc = 0x9e3779b9;

  for (const part of parts) {
    acc = (acc ^ (part.length * 31)) >>> 0;
    for (let i = 0; i < part.length; i++) {
      acc = (acc + part.charCodeAt(i)) >>> 0;
    }
    acc = Math.imul(acc, 2654435761) >>> 0;
  }

  return acc >>> 0;
}

export function makeExportSnapshotDigest() {
  const theme = document.querySelector("#themeSelect")?.value || "";
  const density = document.querySelector("#densitySelect")?.value || "";
  const name = document.querySelector("#workspaceNameInput")?.value || "";

  const digest = digestParts([theme, density, name]).toString(16).padStart(8, "0");
  console.log({ action: "prefs.export", export_digest: digest });
  return digest;
}
