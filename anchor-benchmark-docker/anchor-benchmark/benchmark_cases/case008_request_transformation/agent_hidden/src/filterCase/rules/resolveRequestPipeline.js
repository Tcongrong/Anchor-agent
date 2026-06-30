import { resolveTableRequestTransformer } from "../registry/requestResolverRegistry.js";

export async function resolveRequestPipeline(ledger) {
  const transformer = await resolveTableRequestTransformer({
    namespace: "table",
    variant: "ledger",
    version: ledger.version
  });
  return transformer(ledger);
}
