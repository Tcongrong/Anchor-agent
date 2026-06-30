// CLI wrapper around ast_extract_lib.mjs.
// Usage: node ast_extract.mjs <caseDir>  -> {case_id,files,candidates,task} JSON.
import { extractCandidates } from "./ast_extract_lib.mjs";
const caseDir = process.argv[2];
if (!caseDir) { console.error("usage: node ast_extract.mjs <caseDir>"); process.exit(2); }
process.stdout.write(JSON.stringify(extractCandidates(caseDir)));
