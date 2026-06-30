const REVIEW_EVENT = "case006_request_transformation:manifest-review";
const STORAGE_KEY = "case006_request_transformation_reviewed_manifest";
const PARSED_KEY = "case006_request_transformation_parsed_draft";
const QUEUE_KEY = "case006_request_transformation_queued_manifest";
const QUEUE_EVENT = "case006_request_transformation:manifest-queued";

let parsedDraftRecord = null;
let queuedManifest = null;

function parseDraftText(text) {
  const rows = String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const out = {};

  for (const row of rows) {
    const pivot = row.indexOf("=");
    if (pivot < 0) continue;

    const key = row.slice(0, pivot).trim().toLowerCase();
    const value = row.slice(pivot + 1).trim();

    if (key) out[key] = value;
  }

  return out;
}

function readDraftText() {
  return document.querySelector("#manifestDraftInput")?.value || "";
}

function readParsedDraft() {
  if (parsedDraftRecord) return parsedDraftRecord;

  try {
    parsedDraftRecord = JSON.parse(window.sessionStorage.getItem(PARSED_KEY) || "null");
  } catch {
    parsedDraftRecord = null;
  }

  return parsedDraftRecord;
}

function buildQueueManifest(context) {
  const record = readParsedDraft() || parseManifestDraft(context);
  const parsed = record.parsed || {};
  const laneMode = document.querySelector('input[name="laneMode"]:checked')?.value || "standard";
  const policy = document.querySelector("#policySelect")?.value || "standard";
  const sealed = Boolean(document.querySelector("#sealReviewCheckbox")?.checked);
  const seed =
    window.sessionStorage.getItem("case006_request_transformation_manifest_seed") ||
    "case006_request_transformation_manifest_seed";

  window.sessionStorage.setItem("case006_request_transformation_manifest_seed", seed);

  return {
    fileName: parsed.file || parsed.filename || "untitled.txt",
    description: parsed.summary || parsed.description || "blank",
    category: parsed.category || "ops",
    seed,
    pageTitle: document.title || "archive",
    visualLane: `${laneMode} ${policy} ${sealed ? "sealed" : "open"} ${document.querySelector("#dropzoneVisual")?.textContent || ""}`,
    review: {
      mode: laneMode,
      policy,
      sealed,
      draftRevision: record.revision,
      source: "queued-draft-release",
      action: context.action,
      role: context.meta?.role || ""
    }
  };
}

document.addEventListener(REVIEW_EVENT, (event) => {
  parsedDraftRecord = event.detail?.record || null;

  if (parsedDraftRecord) {
    window.sessionStorage.setItem(PARSED_KEY, JSON.stringify(parsedDraftRecord));
  }
});

document.addEventListener(QUEUE_EVENT, (event) => {
  queuedManifest = event.detail?.manifest || null;

  if (queuedManifest) {
    window.sessionStorage.setItem(QUEUE_KEY, JSON.stringify(queuedManifest));
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(queuedManifest));
  }
});

export function parseManifestDraft(context) {
  const parsed = parseDraftText(readDraftText());
  const revision = [
    parsed.file || parsed.filename || "untitled.txt",
    parsed.summary || parsed.description || "blank",
    parsed.category || "ops",
    context.meta?.role || ""
  ].join("|").length;

  const record = {
    parsed,
    revision,
    source: "parse-action"
  };

  document.dispatchEvent(new CustomEvent(REVIEW_EVENT, {
    detail: {
      record,
      context
    }
  }));

  const status = document.querySelector("#parseStatus");
  if (status) {
    status.textContent = `${record.parsed.file || record.parsed.filename || "untitled.txt"} parsed`;
  }

  return record;
}

export function queueManifestForRelease(context) {
  const manifest = buildQueueManifest(context);
  queuedManifest = manifest;

  queueMicrotask(() => {
    document.dispatchEvent(new CustomEvent(QUEUE_EVENT, {
      detail: {
        manifest,
        context
      }
    }));
  });

  const status = document.querySelector("#queueStatus");
  if (status) {
    status.textContent = `${manifest.fileName} queued under ${manifest.review.policy}`;
  }

  return manifest;
}

export function readReviewedManifest() {
  if (queuedManifest) return queuedManifest;

  try {
    queuedManifest = JSON.parse(window.sessionStorage.getItem(QUEUE_KEY) || window.sessionStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    queuedManifest = null;
  }

  return queuedManifest;
}
