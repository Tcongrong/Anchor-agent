import { foldSegmentLedger } from "../ledger/ticket/segmentTrieFold.js";

function clampPriority(category, rowCount) {
  const base = {
    finance: 70,
    legal: 80,
    research: 60,
    ops: 50
  }[category] || 40;

  return Math.min(99, base + Math.max(0, Number(rowCount || 0) - 8));
}

function compactTags(feed) {
  const seen = new Set();
  const tags = [];

  for (const entry of feed.tokens) {
    if (entry.lane !== "desc" && entry.lane !== "file") continue;

    const token = String(entry.token || "")
      .replace(/^[^:]+:/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!token || seen.has(token)) continue;

    seen.add(token);
    tags.push(token);

    if (tags.length === 5) break;
  }

  return tags;
}

function requestSummary(feed) {
  let acc = 0x6d2b79f5;

  for (const entry of feed.tokens) {
    const lane = String(entry.lane || "");
    const token = String(entry.token || "");

    for (let index = 0; index < token.length; index += 1) {
      acc = Math.imul(acc ^ token.charCodeAt(index) ^ lane.length, 0x45d9f3b) >>> 0;
      acc = (acc << 7) | (acc >>> 25);
    }
  }

  return `rq_${(acc >>> 0).toString(36).padStart(7, "0").slice(-7)}`;
}

export function rewriteUploadRequest(feed, context = {}) {
  const requestId = foldSegmentLedger(feed, {
    caseId: context.caseId,
    lane: context.lane
  });
  const category = String(feed.category || "ops").toLowerCase();
  const fileName = String(feed.source?.fileName || "untitled.none");
  const description = String(feed.source?.description || "");
  const tags = compactTags(feed);

  return {
    method: "POST",
    endpoint: "/archive/intake",
    headers: {
      "x-upload-ticket": requestId,
      "x-manifest-lane": String(context.lane || "primary")
    },
    body: {
      file_name: fileName,
      category,
      priority: clampPriority(category, feed.rowCount),
      tags,
      summary: requestSummary(feed),
      manifest: {
        rows: Number(feed.rowCount || 0),
        bytes: Number(feed.sheetSize || 0)
      },
      description_preview: description.slice(0, 48)
    }
  };
}
