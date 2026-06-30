import { readDraftControls } from "../draft/readDraftControls.js";
import { normalizeDraftRecord } from "../draft/normalizeDraftRecord.js";
import { queueMicroPreview } from "../draft/draftScheduler.js";
import { makePrioritySwatchKey, priorityToColor } from "./prioritySwatchKey.js";
import { makePreviewBodyCodec } from "./previewBodyCodec.js";
import { makeUndoSnapshotCodec } from "./undoSnapshotCodec.js";
import { makeEditorStatusKey } from "./editorStatusKey.js";
import { makeWordFenceCode } from "./wordFenceCode.js";

function computePageMetric() {
  const page = {
    title: document.title || "Quick Notes",
    width: String(window.innerWidth || 0),
    swatch: makePrioritySwatchKey("P2")
  };

  let acc = 101;

  const text = JSON.stringify(page);
  for (let i = 0; i < text.length; i++) {
    acc = Math.imul(acc + text.charCodeAt(i), 17) >>> 0;
  }

  return `em_${acc.toString(36)}`;
}

function updatePassivePreview() {
  const raw = readDraftControls();
  const normalized = normalizeDraftRecord(raw);
  const swatch = document.querySelector("#prioritySwatch");
  const status = document.querySelector("#draftStatus");

  if (swatch) {
    swatch.style.background = priorityToColor(normalized.priority);
    swatch.dataset.swatchKey = makePrioritySwatchKey(normalized.priority);
  }

  if (status) {
    status.textContent = normalized.body ? "Draft edited" : "Draft ready";
  }

  window.__note_preview_body__ = makePreviewBodyCodec(raw);
  window.__note_undo_preview__ = makeUndoSnapshotCodec(raw);
  window.__note_status_key__ = makeEditorStatusKey(normalized);
  window.__note_word_fence__ = makeWordFenceCode(normalized.body);
}

function bindPassivePreview() {
  const controls = ["#noteText", "#tagInput", "#prioritySelect"]
    .map((selector) => document.querySelector(selector))
    .filter(Boolean);

  for (const control of controls) {
    control.addEventListener("input", () => queueMicroPreview(updatePassivePreview));
    control.addEventListener("change", () => queueMicroPreview(updatePassivePreview));
  }
}

export function initializeNoteSidecars() {
  window.__note_editor_metric__ = computePageMetric();
  bindPassivePreview();
  updatePassivePreview();
}
