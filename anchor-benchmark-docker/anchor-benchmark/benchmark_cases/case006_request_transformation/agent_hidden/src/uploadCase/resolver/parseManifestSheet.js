function decodeCell(value) {
  return decodeURIComponent(String(value || ""));
}

function parseHeader(line) {
  const [version, caseId, lane, category] = String(line || "")
    .split("|")
    .map(decodeCell);

  return {
    version,
    caseId,
    lane,
    category
  };
}

function parseRow(line) {
  const withoutOrdinal = String(line || "").replace(/^[a-z0-9]+:/, "");
  const pivot = withoutOrdinal.indexOf("=");

  if (pivot < 0) {
    return null;
  }

  return {
    key: withoutOrdinal.slice(0, pivot),
    value: decodeCell(withoutOrdinal.slice(pivot + 1))
  };
}

export function parseManifestSheet(sheet) {
  const lines = String(sheet || "").split(/\n/);
  const header = parseHeader(lines.shift());
  const rows = lines.map(parseRow).filter(Boolean);
  const fields = Object.fromEntries(rows.map((row) => [row.key, row.value]));

  return {
    header,
    rows,
    fields,
    sheetSize: String(sheet || "").length
  };
}
