// Thin wrapper: static verification of this case.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verify } from "../../../_tooling/verify.mjs";

const caseRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const result = await verify(caseRoot);
console.log(JSON.stringify(result, null, 2));
if (!result.passed) process.exitCode = 1;
