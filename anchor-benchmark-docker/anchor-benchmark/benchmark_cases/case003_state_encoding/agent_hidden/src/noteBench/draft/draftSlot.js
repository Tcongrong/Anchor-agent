const slotStore = new Map();
let counter = 0;

function cloneRecord(record) {
  return {
    ...record,
    summary: { ...(record.summary || {}) }
  };
}

export function storeDraftSlot(record) {
  const slotId = `draft_slot_${++counter}`;
  const copy = {
    slotId,
    record: cloneRecord(record)
  };

  slotStore.set(slotId, copy);

  return {
    slotId,
    getRecord() {
      const entry = slotStore.get(slotId);
      return entry ? cloneRecord(entry.record) : null;
    }
  };
}

export function readDraftSlot(slot) {
  if (!slot || typeof slot.getRecord !== "function") {
    return null;
  }

  return slot.getRecord();
}

export function getDraftSlotCount() {
  return slotStore.size;
}
