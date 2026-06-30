import { uploadIntentTable } from "./uploadIntentTable.js";

export function dispatchUploadIntent(action, meta) {
  const selected = uploadIntentTable[action];

  if (typeof selected !== "function") {
    return null;
  }

  return selected({
    action,
    meta,
    stableCase: "case006_request_transformation",
    lane: "archive-intake"
  });
}
