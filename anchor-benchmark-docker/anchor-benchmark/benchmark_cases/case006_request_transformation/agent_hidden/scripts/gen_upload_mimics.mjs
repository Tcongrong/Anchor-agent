import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "src", "uploadCase", "mimics");

const mimics = [
  ["batchUploadSeal", "makeBatchUploadSeal", "batch"],
  ["vaultLaneToken", "makeVaultLaneToken", "vault"],
  ["manifestCursor", "makeManifestCursor", "cursor"],
  ["uploadAuditRibbon", "makeUploadAuditRibbon", "audit"],
  ["intakeScopeKey", "makeIntakeScopeKey", "scope"],
  ["releaseQueueStamp", "makeReleaseQueueStamp", "release"],
  ["policyBadgeCode", "makePolicyBadgeCode", "policy"],
  ["sealedManifestHash", "makeSealedManifestHash", "seal"],
  ["expediteLaneMark", "makeExpediteLaneMark", "expedite"],
  ["uploadSessionTrace", "makeUploadSessionTrace", "session"],
  ["fileVaultDigest", "makeFileVaultDigest", "file"],
  ["reviewQueueToken", "makeReviewQueueToken", "review"],
];

for (const [file, fn, tag] of mimics) {
  const seed = 0x6c8e9cf5 + tag.length * 17;
  const body = `function ${tag}Fold(text) {
  let state = ${seed};
  const branchBook = new Map();

  for (let index = 0; index < text.length; index += 1) {
    const prefix = text.slice(0, index + 1);
    const count = (branchBook.get(prefix) || 0) + 1;
    branchBook.set(prefix, count);
    state ^= Math.imul(text.charCodeAt(index) + count + index, 0x45d9f3b);
    state = (state << 7) | (state >>> 25);
  }

  return \`${tag.slice(0, 2)}_\${(state >>> 0).toString(36).padStart(7, "0").slice(-7)}\`;
}

export function ${fn}(context) {
  const basis = \`\${context.stableCase}:\${context.lane}:${tag}\`;
  const value = ${tag}Fold(basis);
  window.__${tag}_upload_mimic__ = value;
  return value;
}
`;
  await writeFile(path.join(dir, `${file}.js`), `${body}\n`, "utf8");
}

console.log(JSON.stringify({ created: mimics.length }, null, 2));
