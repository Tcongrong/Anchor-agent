import { collectFilterForm } from "../rules/collectFilterForm.js";
import { normalizeFilterRules } from "../rules/normalizeFilterRules.js";
import { applyVisualFilter, clearVisualFilter } from "../rules/applyVisualFilter.js";
import { encodeRuleLedger } from "../rules/encodeRuleLedger.js";
import { enqueueFilterLedger } from "../rules/filterQueue.js";
import {
  createRequestStage,
  hydrateRequestEnvelope,
  mergeStageWithCurrent,
  readRequestStage
} from "../rules/requestStage.js";
import { resolveRequestPipeline } from "../rules/resolveRequestPipeline.js";
import { commitFilterRequest } from "../tableSink/tableFilterSink.js";
import { buildQueryFilterKey } from "../diversions/queryFilterKey.js";
import { makeExportPreviewStamp } from "../diversions/exportStamp.js";
import { movePageCursor, readPageCursor } from "../diversions/pageCursorCrc.js";
import { saveColumnLayoutKey } from "../diversions/columnLayoutKey.js";
import { refreshBadgeDigest } from "../diversions/badgeDigest.js";
import { pinSavedViewSeal } from "../diversions/savedViewSeal.js";

const actionTable = new Map([
  ["table.request.stage", runStageRequest],
  ["table.request.prepare", runPrepareRequest],
  ["table.filter.clear", runClearAction],
  ["table.export.preview", runExportPreview],
  ["table.page.prev", (ctx) => runPageAction(ctx, -1)],
  ["table.page.next", (ctx) => runPageAction(ctx, 1)],
  ["table.columns.save", runColumnSave],
  ["table.badge.refresh", runBadgeRefresh],
  ["table.view.pin", runViewPin]
]);

export async function routeTableAction(context) {
  const handler = actionTable.get(context.action);
  if (!handler) {
    writeStatus(context.document, `Ignored action ${context.action}`);
    return;
  }

  try {
    await handler(context);
  } catch (error) {
    writeStatus(context.document, `Action failed: ${error?.message || "unknown"}`);
  }
}

function runStageRequest(context) {
  const raw = collectFilterForm(context.document);
  const normalized = normalizeFilterRules(raw);
  const visual = applyVisualFilter(context.document, normalized);
  const ledger = encodeRuleLedger(normalized, visual, {
    action: "table.request.stage",
    page: readPageCursor(),
    queryKey: buildQueryFilterKey(normalized),
    layoutMode: readLayoutMode(context.document)
  });

  const stage = createRequestStage(context.document, ledger, normalized, visual, {
    page: readPageCursor()
  });
  writeStatus(context.document, `Analyzed ${stage.visibleCount} rows for ${stage.ticket}`);
}

async function runPrepareRequest(context) {
  const stage = readRequestStage(context.document);
  const raw = collectFilterForm(context.document);
  const normalized = normalizeFilterRules(raw);
  const visual = applyVisualFilter(context.document, normalized);
  const ledger = encodeRuleLedger(normalized, visual, {
    action: "table.request.prepare",
    page: readPageCursor(),
    queryKey: buildQueryFilterKey(normalized),
    layoutMode: readLayoutMode(context.document)
  });
  const mergedLedger = mergeStageWithCurrent(stage, ledger, normalized, visual, {
    page: readPageCursor(),
    layoutMode: readLayoutMode(context.document)
  });
  const hydratedLedger = await hydrateRequestEnvelope(context.document, mergedLedger);

  await enqueueFilterLedger(hydratedLedger, async (queuedLedger) => {
    const requestPayload = await resolveRequestPipeline(queuedLedger);
    commitFilterRequest(context.document, {
      action: context.action,
      requestPayload,
      normalized,
      visibleRows: visual.visibleRows,
      totalRows: visual.totalRows
    });
  });
}

function runClearAction(context) {
  const doc = context.document;
  doc.querySelector("#statusFilter").value = "all";
  doc.querySelector("#minAmount").value = "";
  doc.querySelector("#ownerInput").value = "";
  doc.querySelector("#regionFilter").value = "all";
  doc.querySelector("#requestProfile").value = "standard";
  doc.querySelector("#agedOnly").checked = false;
  delete doc.documentElement.dataset.requestStage;
  const ticketNode = doc.querySelector("#stageTicket");
  if (ticketNode) ticketNode.textContent = "stage_idle";
  clearVisualFilter(doc);
  writeStatus(doc, "Filters cleared");
}

function runExportPreview(context) {
  const raw = collectFilterForm(context.document);
  const normalized = normalizeFilterRules(raw);
  const token = makeExportPreviewStamp(normalized, context.issuedAt);
  writeStatus(context.document, `Export preview ${token}`);
}

function runPageAction(context, direction) {
  const marker = movePageCursor(direction, collectFilterForm(context.document));
  const pageNode = context.document.querySelector("#pageNumber");
  if (pageNode) pageNode.textContent = String(marker.page);
  writeStatus(context.document, `Page cursor ${marker.cursor}`);
}

function runColumnSave(context) {
  const key = saveColumnLayoutKey(["invoice", "account", "status", "owner", "amount", "age", "region"]);
  const layout = context.document.querySelector("#layoutMode");
  if (layout) layout.textContent = key.mode;
  writeStatus(context.document, `Column layout saved ${key.layoutKey}`);
}

function runBadgeRefresh(context) {
  const digest = refreshBadgeDigest(context.document.querySelectorAll(".badge"));
  writeStatus(context.document, `Badge digest ${digest}`);
}

function runViewPin(context) {
  const seal = pinSavedViewSeal({
    page: readPageCursor().page,
    status: context.document.querySelector("#statusFilter")?.value || "all"
  });
  writeStatus(context.document, `Pinned view ${seal}`);
}

function readLayoutMode(doc) {
  return doc.querySelector("#layoutMode")?.textContent || "compact";
}

function writeStatus(doc, text) {
  const node = doc.querySelector("#lastAction");
  if (node) node.textContent = text;
}
