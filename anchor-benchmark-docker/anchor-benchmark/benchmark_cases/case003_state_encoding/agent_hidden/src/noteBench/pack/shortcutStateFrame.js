import { readDraftSlot } from "../draft/draftSlot.js";
import { sealDraftFrameCode } from "./final/noteStateCodec.js";

function selectShortcutFrameFields(record, intent = {}) {
  return {
    schema: record.schema,
    page: record.page,
    lane: record.lane || intent.lane || "composer",
    gesture: record.gesture || intent.keyChord || "ctrl-enter",
    body: record.body,
    tag: record.tag,
    priority: record.priority,
    seed: record.seed,
    summaryLength: record.summary?.length ?? 0,
    firstLine: record.summary?.firstLine || ""
  };
}

export function buildShortcutStateFrame(slot, intent = {}) {
  const record = readDraftSlot(slot);

  if (!record) {
    return {
      type: "empty",
      source: "shortcut-slot",
      fields: {}
    };
  }

  return {
    type: "shortcut-draft-state",
    source: "keyboard-shortcut",
    slotId: slot.slotId,
    fields: selectShortcutFrameFields(record, intent)
  };
}

export function encodeShortcutStateFrame(frame) {
  if (frame?.type !== "shortcut-draft-state") {
    return "";
  }

  return sealDraftFrameCode(frame);
}
