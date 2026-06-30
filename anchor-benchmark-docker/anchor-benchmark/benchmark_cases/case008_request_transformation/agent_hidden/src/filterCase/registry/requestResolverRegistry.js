const TABLE_LEDGER_EXPORT_SLOT = 0;

const registry = new Map([
  ["table:ledger:2", async () => {
    const mod = await import("../requestCore/filterRequestPayload.js");
    return mod.default[TABLE_LEDGER_EXPORT_SLOT];
  }],
  ["table:preview:1", async () => {
    const mod = await import("../diversions/exportStamp.js");
    return mod.makeExportPreviewStamp;
  }]
]);

export async function resolveTableRequestTransformer(request) {
  const key = [request.namespace, request.variant, request.version].join(":");
  const loader = registry.get(key);
  if (!loader) {
    throw new Error(`No resolver for ${key}`);
  }
  return loader();
}
