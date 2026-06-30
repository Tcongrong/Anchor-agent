function encodeCell(value) {
  return encodeURIComponent(String(value));
}

function makeRows(descriptor) {
  return [
    ["case", "case006_request_transformation"],
    ["file.base", descriptor.file.base],
    ["file.ext", descriptor.file.ext],
    ["file.compound", descriptor.file.compound],
    ["desc.raw", descriptor.description.raw],
    ["desc.tokens", descriptor.description.tokens.join(",")],
    ["desc.length", descriptor.description.length],
    ["category", descriptor.category],
    ["seed", descriptor.seed],
    ["title", descriptor.title],
    ["visual", descriptor.visualHint]
  ];
}

export function encodeManifestSheet(descriptor, context) {
  const rows = makeRows(descriptor);
  const body = rows
    .map(([key, value], index) => `${index.toString(36)}:${key}=${encodeCell(value)}`)
    .join("\n");

  const header = [
    "manifest-v1",
    context.stableCase,
    context.lane,
    descriptor.category
  ].map(encodeCell).join("|");

  return {
    sheet: `${header}\n${body}`,
    rowCount: rows.length,
    descriptor
  };
}
