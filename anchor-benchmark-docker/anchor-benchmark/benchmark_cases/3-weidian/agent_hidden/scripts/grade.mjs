// Thin wrapper: grade a submission against this case's oracle.
//   node scripts/grade.mjs <submission.json>
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { gradeAnswer } from "../../../_tooling/grade_submission.mjs";

const caseRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const subPath = process.argv[2];
if (!subPath) {
  console.error("Usage: node scripts/grade.mjs <submission.json>");
  process.exit(2);
}
const oracle = JSON.parse(await readFile(path.join(caseRoot, "agent_hidden", "oracle.hidden.json"), "utf8"));
const submission = JSON.parse(await readFile(path.resolve(subPath), "utf8"));
const result = await gradeAnswer(submission, oracle, path.join(caseRoot, "agent_visible"));
console.log(JSON.stringify(result, null, 2));
