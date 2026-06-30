import { readDraftControls } from "../draft/readDraftControls.js";
import { normalizeDraftRecord } from "../draft/normalizeDraftRecord.js";
import { createDraftRecord } from "../draft/createDraftRecord.js";
import { storeDraftSlot } from "../draft/draftSlot.js";
import { afterFrame, afterTurn } from "../draft/draftScheduler.js";
import { buildShortcutStateFrame, encodeShortcutStateFrame } from "../pack/shortcutStateFrame.js";
import { paintNotePreview } from "../result/noteDomPreview.js";
import { emitNoteResult } from "../result/noteResultSink.js";
import { makePreviewBodyCodec } from "../sidecars/previewBodyCodec.js";
import { makeUndoSnapshotCodec } from "../sidecars/undoSnapshotCodec.js";
import { makeEditorStatusKey } from "../sidecars/editorStatusKey.js";

function withFlowStep(ctx, name) {
  const prior = Array.isArray(ctx.flowPath) ? ctx.flowPath : [];
  return {
    ...ctx,
    flowPath: [...prior, name]
  };
}

function addShortcutState(normalized, intent) {
  return {
    ...normalized,
    lane: intent.lane || "composer",
    gesture: intent.keyChord || "ctrl-enter",
    focus: intent.focus || "noteText"
  };
}

function attachShortcutRecordState(record, ctx) {
  return {
    ...record,
    lane: ctx.decorated.lane,
    gesture: ctx.decorated.gesture,
    focus: ctx.decorated.focus,
    commitKey: ctx.intent.queueKey
  };
}

export async function captureShortcutDraft(ctx) {
  return {
    ...withFlowStep(ctx, "capture-shortcut-draft"),
    rawDraft: readDraftControls()
  };
}

export async function normalizeShortcutDraft(ctx) {
  const normalized = await afterTurn(ctx.rawDraft).then(normalizeDraftRecord);
  return {
    ...withFlowStep(ctx, "normalize-shortcut-draft"),
    normalized
  };
}

export async function decorateShortcutState(ctx) {
  const decorated = addShortcutState(ctx.normalized, ctx.intent || {});

  return {
    ...withFlowStep(ctx, "decorate-shortcut-state"),
    decorated,
    previewHints: {
      bodyLength: decorated.body.length,
      tagView: decorated.tag,
      statusKey: makeEditorStatusKey(decorated)
    }
  };
}

export async function materializeShortcutRecord(ctx) {
  const baseRecord = await afterFrame(createDraftRecord(ctx.decorated));

  return {
    ...withFlowStep(ctx, "materialize-shortcut-record"),
    record: attachShortcutRecordState(baseRecord, ctx)
  };
}

export async function openDraftSlot(ctx) {
  return {
    ...withFlowStep(ctx, "open-draft-slot"),
    slot: storeDraftSlot(ctx.record)
  };
}

export async function resolveShortcutStateFrame(ctx) {
  return {
    ...withFlowStep(ctx, "resolve-state-frame"),
    stateFrame: buildShortcutStateFrame(ctx.slot, ctx.intent)
  };
}

export async function encodeShortcutState(ctx) {
  return {
    ...withFlowStep(ctx, "encode-state-frame"),
    packed: encodeShortcutStateFrame(ctx.stateFrame)
  };
}

export async function renderCommittedDraft(ctx) {
  paintNotePreview(ctx.record, ctx.previewHints);
  return withFlowStep(ctx, "render-commit-preview");
}

export async function publishStateCode(ctx) {
  emitNoteResult(ctx.packed);
  return withFlowStep(ctx, "publish-state-code");
}

export async function previewSidecarOnly(ctx) {
  makePreviewBodyCodec(ctx.rawDraft);
  return withFlowStep(ctx, "preview-sidecar-only");
}

export async function undoSidecarOnly(ctx) {
  makeUndoSnapshotCodec(ctx.rawDraft);
  return withFlowStep(ctx, "undo-sidecar-only");
}

export const flowStepRegistry = {
  "capture-shortcut-draft": captureShortcutDraft,
  "normalize-shortcut-draft": normalizeShortcutDraft,
  "decorate-shortcut-state": decorateShortcutState,
  "materialize-shortcut-record": materializeShortcutRecord,
  "open-draft-slot": openDraftSlot,
  "resolve-state-frame": resolveShortcutStateFrame,
  "encode-state-frame": encodeShortcutState,
  "render-commit-preview": renderCommittedDraft,
  "publish-state-code": publishStateCode,
  "preview-sidecar-only": previewSidecarOnly,
  "undo-sidecar-only": undoSidecarOnly
};
