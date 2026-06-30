// CLI wrapper around extract_lib.mjs.
// Usage: node extract.mjs <caseDir>  -> prints {case_id,files,candidates,task} JSON.
import { extractCandidates } from "./extract_lib.mjs";

const caseDir = process.argv[2];
if (!caseDir) {
  console.error("usage: node extract.mjs <caseDir>");
  process.exit(2);
}
process.stdout.write(JSON.stringify(extractCandidates(caseDir)));
