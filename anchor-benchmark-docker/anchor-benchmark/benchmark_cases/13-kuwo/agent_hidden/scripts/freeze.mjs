// Thin wrapper: freeze this case's oracle from roles.config.json.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { freeze } from "../../../_tooling/freeze_oracle.mjs";

const caseRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const { caseId, roleOracle, anchorSpan } = await freeze(caseRoot);
console.log(`Frozen ${caseId} (anchor via ${anchorSpan.method})`);
for (const r of roleOracle) {
  const s = r.captured_span;
  console.log(`  ${String(r.score).padEnd(4)} ${r.role.padEnd(28)} ${r.function.padEnd(22)} ${s.file} [${s.start_offset},${s.end_offset})`);
}
