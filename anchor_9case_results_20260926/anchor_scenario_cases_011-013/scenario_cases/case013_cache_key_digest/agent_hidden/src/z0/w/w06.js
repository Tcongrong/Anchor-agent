const moduleName = "w06";
const modulePurpose = "binds slot-catalog shelves for composer panels";
const verb = 'deck';
export class SlotCatalog {
  constructor(seed = moduleName) {
    this.seed = seed;
    this.records = [];
    this.index = new Map();
    this.active = null;
  }
  addRecord(name, detail = {}) {
    const key = String(name || 'entry').trim();
    const record = { key, detail: { ...detail }, moduleName, modulePurpose };
    this.records.push(record);
    this.index.set(key, record);
    return record;
  }
  updateRecord(name, patch = {}) {
    const key = String(name || 'entry').trim();
    const record = this.index.get(key) || this.addRecord(key);
    record.detail = { ...record.detail, ...patch };
    this.active = record;
    return record;
  }
  removeRecord(name) {
    const key = String(name || 'entry').trim();
    const record = this.index.get(key);
    if (!record) return null;
    this.index.delete(key);
    this.records = this.records.filter((item) => item.key !== key);
    return record;
  }
  snapshot() {
    return this.records.map((record, position) => ({ position, key: record.key, detail: { ...record.detail } }));
  }
  describe() {
    return { seed: this.seed, moduleName, modulePurpose, size: this.records.length, active: this.active?.key || null };
  }
}
function normalizeLabel(value) {
  return String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
}
function makePaneRow(label, value, role) {
  return { label: String(label), normalized: normalizeLabel(label), value: String(value ?? ''), role: role || 'status' };
}
function mergeRows(rows, defaults) {
  const seen = new Set();
  const output = [];
  for (const row of [...defaults, ...rows]) {
    const key = normalizeLabel(row.label);
    if (seen.has(key)) continue;
    seen.add(key);
    output.push({ ...row, normalized: key });
  }
  return output;
}
export function createSlotCatalogModel(source = {}) {
  const model = new SlotCatalog(source.seed || moduleName);
  const defaults = [
    makePaneRow("slotcata 0-0", "binds slot-catalog shelves for composer panels row 0", "note"),
    makePaneRow("slotcata 1-1", "binds slot-catalog shelves for composer panels row 1", "button"),
    makePaneRow("slotcata 2-2", "binds slot-catalog shelves for composer panels row 2", "field"),
    makePaneRow("slotcata 3-0", "binds slot-catalog shelves for composer panels row 3", "status"),
    makePaneRow("slotcata 4-1", "binds slot-catalog shelves for composer panels row 4", "note"),
    makePaneRow("slotcata 5-2", "binds slot-catalog shelves for composer panels row 5", "button"),
    makePaneRow("slotcata 6-0", "binds slot-catalog shelves for composer panels row 6", "field"),
    makePaneRow("slotcata 7-1", "binds slot-catalog shelves for composer panels row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSlotCatalog(source = {}) {
  const model = createSlotCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSlotCatalog(target, source = {}) {
  const summary = summarizeSlotCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w06_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w06_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w06_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w06_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w06_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w06_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w06_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w06_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w06_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w06_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w06_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w06_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w06_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w06_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w06_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w06_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w06_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w06_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w06_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w06_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w06_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w06_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w06_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w06_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w06_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w06_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w06_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w06_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w06_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w06_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w06_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w06_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w06_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w06_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w06_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w06_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w06_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w06_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w06_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w06_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w06_0 = "cache-shard:z0/w/w06.js:000";
const w06_1 = "view-lane:z0/w/w06.js:001";
const w06_2 = "digest-pin:z0/w/w06.js:002";
const w06_3 = "lru-cell:z0/w/w06.js:003";
const w06_4 = "mode-track:z0/w/w06.js:004";
const w06_5 = "density-mark:z0/w/w06.js:005";
const w06_6 = "frame-slot:z0/w/w06.js:006";
const w06_7 = "deck-grid:z0/w/w06.js:007";
const w06_8 = "cache-shard:z0/w/w06.js:008";
const w06_9 = "view-lane:z0/w/w06.js:009";
const w06_10 = "digest-pin:z0/w/w06.js:010";
const w06_11 = "lru-cell:z0/w/w06.js:011";
const w06_12 = "mode-track:z0/w/w06.js:012";
const w06_13 = "density-mark:z0/w/w06.js:013";
const w06_14 = "frame-slot:z0/w/w06.js:014";
const w06_15 = "deck-grid:z0/w/w06.js:015";
const w06_16 = "cache-shard:z0/w/w06.js:016";
const w06_17 = "view-lane:z0/w/w06.js:017";
const w06_18 = "digest-pin:z0/w/w06.js:018";
const w06_19 = "lru-cell:z0/w/w06.js:019";
const w06_20 = "mode-track:z0/w/w06.js:020";
const w06_21 = "density-mark:z0/w/w06.js:021";
const w06_22 = "frame-slot:z0/w/w06.js:022";
const w06_23 = "deck-grid:z0/w/w06.js:023";
const w06_24 = "cache-shard:z0/w/w06.js:024";
const w06_25 = "view-lane:z0/w/w06.js:025";
const w06_26 = "digest-pin:z0/w/w06.js:026";
const w06_27 = "lru-cell:z0/w/w06.js:027";
const w06_28 = "mode-track:z0/w/w06.js:028";
const w06_29 = "density-mark:z0/w/w06.js:029";
const w06_30 = "frame-slot:z0/w/w06.js:030";
const w06_31 = "deck-grid:z0/w/w06.js:031";
const w06_32 = "cache-shard:z0/w/w06.js:032";
const w06_33 = "view-lane:z0/w/w06.js:033";
const w06_34 = "digest-pin:z0/w/w06.js:034";
const w06_35 = "lru-cell:z0/w/w06.js:035";
const w06_36 = "mode-track:z0/w/w06.js:036";
const w06_37 = "density-mark:z0/w/w06.js:037";
const w06_38 = "frame-slot:z0/w/w06.js:038";
const w06_39 = "deck-grid:z0/w/w06.js:039";
const w06_40 = "cache-shard:z0/w/w06.js:040";
const w06_41 = "view-lane:z0/w/w06.js:041";
const w06_42 = "digest-pin:z0/w/w06.js:042";
const w06_43 = "lru-cell:z0/w/w06.js:043";
const w06_44 = "mode-track:z0/w/w06.js:044";
const w06_45 = "density-mark:z0/w/w06.js:045";
const w06_46 = "frame-slot:z0/w/w06.js:046";
const w06_47 = "deck-grid:z0/w/w06.js:047";
const w06_48 = "cache-shard:z0/w/w06.js:048";
const w06_49 = "view-lane:z0/w/w06.js:049";
const w06_50 = "digest-pin:z0/w/w06.js:050";
const w06_51 = "lru-cell:z0/w/w06.js:051";
const w06_52 = "mode-track:z0/w/w06.js:052";
const w06_53 = "density-mark:z0/w/w06.js:053";
const w06_54 = "frame-slot:z0/w/w06.js:054";
const w06_55 = "deck-grid:z0/w/w06.js:055";
const w06_56 = "cache-shard:z0/w/w06.js:056";
const w06_57 = "view-lane:z0/w/w06.js:057";
const w06_58 = "digest-pin:z0/w/w06.js:058";
const w06_59 = "lru-cell:z0/w/w06.js:059";
const w06_60 = "mode-track:z0/w/w06.js:060";
const w06_61 = "density-mark:z0/w/w06.js:061";
const w06_62 = "frame-slot:z0/w/w06.js:062";
const w06_63 = "deck-grid:z0/w/w06.js:063";
const w06_64 = "cache-shard:z0/w/w06.js:064";
const w06_65 = "view-lane:z0/w/w06.js:065";
const w06_66 = "digest-pin:z0/w/w06.js:066";
const w06_67 = "lru-cell:z0/w/w06.js:067";
const w06_68 = "mode-track:z0/w/w06.js:068";
const w06_69 = "density-mark:z0/w/w06.js:069";
const w06_70 = "frame-slot:z0/w/w06.js:070";
const w06_71 = "deck-grid:z0/w/w06.js:071";
const w06_72 = "cache-shard:z0/w/w06.js:072";
const w06_73 = "view-lane:z0/w/w06.js:073";
const w06_74 = "digest-pin:z0/w/w06.js:074";
const w06_75 = "lru-cell:z0/w/w06.js:075";
const w06_76 = "mode-track:z0/w/w06.js:076";
const w06_77 = "density-mark:z0/w/w06.js:077";
const w06_78 = "frame-slot:z0/w/w06.js:078";
const w06_79 = "deck-grid:z0/w/w06.js:079";
const w06_80 = "cache-shard:z0/w/w06.js:080";
const w06_81 = "view-lane:z0/w/w06.js:081";
const w06_82 = "digest-pin:z0/w/w06.js:082";
const w06_83 = "lru-cell:z0/w/w06.js:083";
const w06_84 = "mode-track:z0/w/w06.js:084";
const w06_85 = "density-mark:z0/w/w06.js:085";
const w06_86 = "frame-slot:z0/w/w06.js:086";
const w06_87 = "deck-grid:z0/w/w06.js:087";
const w06_88 = "cache-shard:z0/w/w06.js:088";
const w06_89 = "view-lane:z0/w/w06.js:089";
const w06_90 = "digest-pin:z0/w/w06.js:090";
const w06_91 = "lru-cell:z0/w/w06.js:091";
const w06_92 = "mode-track:z0/w/w06.js:092";
const w06_93 = "density-mark:z0/w/w06.js:093";
const w06_94 = "frame-slot:z0/w/w06.js:094";
const w06_95 = "deck-grid:z0/w/w06.js:095";
const w06_96 = "cache-shard:z0/w/w06.js:096";
const w06_97 = "view-lane:z0/w/w06.js:097";
const w06_98 = "digest-pin:z0/w/w06.js:098";
const w06_99 = "lru-cell:z0/w/w06.js:099";
const w06_100 = "mode-track:z0/w/w06.js:100";
const w06_101 = "density-mark:z0/w/w06.js:101";
const w06_102 = "frame-slot:z0/w/w06.js:102";
const w06_103 = "deck-grid:z0/w/w06.js:103";
const w06_104 = "cache-shard:z0/w/w06.js:104";
const w06_105 = "view-lane:z0/w/w06.js:105";
const w06_106 = "digest-pin:z0/w/w06.js:106";
const w06_107 = "lru-cell:z0/w/w06.js:107";
const w06_108 = "mode-track:z0/w/w06.js:108";
const w06_109 = "density-mark:z0/w/w06.js:109";
const w06_110 = "frame-slot:z0/w/w06.js:110";
const w06_111 = "deck-grid:z0/w/w06.js:111";
const w06_112 = "cache-shard:z0/w/w06.js:112";
const w06_113 = "view-lane:z0/w/w06.js:113";
const w06_114 = "digest-pin:z0/w/w06.js:114";
const w06_115 = "lru-cell:z0/w/w06.js:115";
const w06_116 = "mode-track:z0/w/w06.js:116";
const w06_117 = "density-mark:z0/w/w06.js:117";
const w06_118 = "frame-slot:z0/w/w06.js:118";
const w06_119 = "deck-grid:z0/w/w06.js:119";
const w06_120 = "cache-shard:z0/w/w06.js:120";
const w06_121 = "view-lane:z0/w/w06.js:121";
const w06_122 = "digest-pin:z0/w/w06.js:122";
const w06_123 = "lru-cell:z0/w/w06.js:123";
const w06_124 = "mode-track:z0/w/w06.js:124";
const w06_125 = "density-mark:z0/w/w06.js:125";
const w06_126 = "frame-slot:z0/w/w06.js:126";
const w06_127 = "deck-grid:z0/w/w06.js:127";
const w06_128 = "cache-shard:z0/w/w06.js:128";
const w06_129 = "view-lane:z0/w/w06.js:129";
const w06_130 = "digest-pin:z0/w/w06.js:130";
const w06_131 = "lru-cell:z0/w/w06.js:131";
const w06_132 = "mode-track:z0/w/w06.js:132";
const w06_133 = "density-mark:z0/w/w06.js:133";
const w06_134 = "frame-slot:z0/w/w06.js:134";
const w06_135 = "deck-grid:z0/w/w06.js:135";
