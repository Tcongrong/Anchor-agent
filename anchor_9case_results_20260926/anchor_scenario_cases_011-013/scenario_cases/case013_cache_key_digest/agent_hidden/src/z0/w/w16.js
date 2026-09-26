const moduleName = "w16";
const modulePurpose = "labels ledger rows for the view console";
const verb = 'deck';
export class LabelLedger {
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
export function createLabelLedgerModel(source = {}) {
  const model = new LabelLedger(source.seed || moduleName);
  const defaults = [
    makePaneRow("labeledg 0-0", "labels ledger rows for the view console row 0", "note"),
    makePaneRow("labeledg 1-1", "labels ledger rows for the view console row 1", "button"),
    makePaneRow("labeledg 2-2", "labels ledger rows for the view console row 2", "field"),
    makePaneRow("labeledg 3-0", "labels ledger rows for the view console row 3", "status"),
    makePaneRow("labeledg 4-1", "labels ledger rows for the view console row 4", "note"),
    makePaneRow("labeledg 5-2", "labels ledger rows for the view console row 5", "button"),
    makePaneRow("labeledg 6-0", "labels ledger rows for the view console row 6", "field"),
    makePaneRow("labeledg 7-1", "labels ledger rows for the view console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLabelLedger(source = {}) {
  const model = createLabelLedgerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLabelLedger(target, source = {}) {
  const summary = summarizeLabelLedger(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w16_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w16_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w16_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w16_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w16_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w16_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w16_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w16_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w16_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w16_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w16_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w16_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w16_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w16_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w16_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w16_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w16_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w16_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w16_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w16_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w16_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w16_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w16_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w16_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w16_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w16_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w16_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w16_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w16_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w16_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w16_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w16_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w16_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w16_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w16_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w16_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w16_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w16_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w16_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w16_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w16_0 = "cache-shard:z0/w/w16.js:000";
const w16_1 = "view-lane:z0/w/w16.js:001";
const w16_2 = "digest-pin:z0/w/w16.js:002";
const w16_3 = "lru-cell:z0/w/w16.js:003";
const w16_4 = "mode-track:z0/w/w16.js:004";
const w16_5 = "density-mark:z0/w/w16.js:005";
const w16_6 = "frame-slot:z0/w/w16.js:006";
const w16_7 = "deck-grid:z0/w/w16.js:007";
const w16_8 = "cache-shard:z0/w/w16.js:008";
const w16_9 = "view-lane:z0/w/w16.js:009";
const w16_10 = "digest-pin:z0/w/w16.js:010";
const w16_11 = "lru-cell:z0/w/w16.js:011";
const w16_12 = "mode-track:z0/w/w16.js:012";
const w16_13 = "density-mark:z0/w/w16.js:013";
const w16_14 = "frame-slot:z0/w/w16.js:014";
const w16_15 = "deck-grid:z0/w/w16.js:015";
const w16_16 = "cache-shard:z0/w/w16.js:016";
const w16_17 = "view-lane:z0/w/w16.js:017";
const w16_18 = "digest-pin:z0/w/w16.js:018";
const w16_19 = "lru-cell:z0/w/w16.js:019";
const w16_20 = "mode-track:z0/w/w16.js:020";
const w16_21 = "density-mark:z0/w/w16.js:021";
const w16_22 = "frame-slot:z0/w/w16.js:022";
const w16_23 = "deck-grid:z0/w/w16.js:023";
const w16_24 = "cache-shard:z0/w/w16.js:024";
const w16_25 = "view-lane:z0/w/w16.js:025";
const w16_26 = "digest-pin:z0/w/w16.js:026";
const w16_27 = "lru-cell:z0/w/w16.js:027";
const w16_28 = "mode-track:z0/w/w16.js:028";
const w16_29 = "density-mark:z0/w/w16.js:029";
const w16_30 = "frame-slot:z0/w/w16.js:030";
const w16_31 = "deck-grid:z0/w/w16.js:031";
const w16_32 = "cache-shard:z0/w/w16.js:032";
const w16_33 = "view-lane:z0/w/w16.js:033";
const w16_34 = "digest-pin:z0/w/w16.js:034";
const w16_35 = "lru-cell:z0/w/w16.js:035";
const w16_36 = "mode-track:z0/w/w16.js:036";
const w16_37 = "density-mark:z0/w/w16.js:037";
const w16_38 = "frame-slot:z0/w/w16.js:038";
const w16_39 = "deck-grid:z0/w/w16.js:039";
const w16_40 = "cache-shard:z0/w/w16.js:040";
const w16_41 = "view-lane:z0/w/w16.js:041";
const w16_42 = "digest-pin:z0/w/w16.js:042";
const w16_43 = "lru-cell:z0/w/w16.js:043";
const w16_44 = "mode-track:z0/w/w16.js:044";
const w16_45 = "density-mark:z0/w/w16.js:045";
const w16_46 = "frame-slot:z0/w/w16.js:046";
const w16_47 = "deck-grid:z0/w/w16.js:047";
const w16_48 = "cache-shard:z0/w/w16.js:048";
const w16_49 = "view-lane:z0/w/w16.js:049";
const w16_50 = "digest-pin:z0/w/w16.js:050";
const w16_51 = "lru-cell:z0/w/w16.js:051";
const w16_52 = "mode-track:z0/w/w16.js:052";
const w16_53 = "density-mark:z0/w/w16.js:053";
const w16_54 = "frame-slot:z0/w/w16.js:054";
const w16_55 = "deck-grid:z0/w/w16.js:055";
const w16_56 = "cache-shard:z0/w/w16.js:056";
const w16_57 = "view-lane:z0/w/w16.js:057";
const w16_58 = "digest-pin:z0/w/w16.js:058";
const w16_59 = "lru-cell:z0/w/w16.js:059";
const w16_60 = "mode-track:z0/w/w16.js:060";
const w16_61 = "density-mark:z0/w/w16.js:061";
const w16_62 = "frame-slot:z0/w/w16.js:062";
const w16_63 = "deck-grid:z0/w/w16.js:063";
const w16_64 = "cache-shard:z0/w/w16.js:064";
const w16_65 = "view-lane:z0/w/w16.js:065";
const w16_66 = "digest-pin:z0/w/w16.js:066";
const w16_67 = "lru-cell:z0/w/w16.js:067";
const w16_68 = "mode-track:z0/w/w16.js:068";
const w16_69 = "density-mark:z0/w/w16.js:069";
const w16_70 = "frame-slot:z0/w/w16.js:070";
const w16_71 = "deck-grid:z0/w/w16.js:071";
const w16_72 = "cache-shard:z0/w/w16.js:072";
const w16_73 = "view-lane:z0/w/w16.js:073";
const w16_74 = "digest-pin:z0/w/w16.js:074";
const w16_75 = "lru-cell:z0/w/w16.js:075";
const w16_76 = "mode-track:z0/w/w16.js:076";
const w16_77 = "density-mark:z0/w/w16.js:077";
const w16_78 = "frame-slot:z0/w/w16.js:078";
const w16_79 = "deck-grid:z0/w/w16.js:079";
const w16_80 = "cache-shard:z0/w/w16.js:080";
const w16_81 = "view-lane:z0/w/w16.js:081";
const w16_82 = "digest-pin:z0/w/w16.js:082";
const w16_83 = "lru-cell:z0/w/w16.js:083";
const w16_84 = "mode-track:z0/w/w16.js:084";
const w16_85 = "density-mark:z0/w/w16.js:085";
const w16_86 = "frame-slot:z0/w/w16.js:086";
const w16_87 = "deck-grid:z0/w/w16.js:087";
const w16_88 = "cache-shard:z0/w/w16.js:088";
const w16_89 = "view-lane:z0/w/w16.js:089";
const w16_90 = "digest-pin:z0/w/w16.js:090";
const w16_91 = "lru-cell:z0/w/w16.js:091";
const w16_92 = "mode-track:z0/w/w16.js:092";
const w16_93 = "density-mark:z0/w/w16.js:093";
const w16_94 = "frame-slot:z0/w/w16.js:094";
const w16_95 = "deck-grid:z0/w/w16.js:095";
const w16_96 = "cache-shard:z0/w/w16.js:096";
const w16_97 = "view-lane:z0/w/w16.js:097";
const w16_98 = "digest-pin:z0/w/w16.js:098";
const w16_99 = "lru-cell:z0/w/w16.js:099";
const w16_100 = "mode-track:z0/w/w16.js:100";
const w16_101 = "density-mark:z0/w/w16.js:101";
const w16_102 = "frame-slot:z0/w/w16.js:102";
const w16_103 = "deck-grid:z0/w/w16.js:103";
const w16_104 = "cache-shard:z0/w/w16.js:104";
const w16_105 = "view-lane:z0/w/w16.js:105";
const w16_106 = "digest-pin:z0/w/w16.js:106";
const w16_107 = "lru-cell:z0/w/w16.js:107";
const w16_108 = "mode-track:z0/w/w16.js:108";
const w16_109 = "density-mark:z0/w/w16.js:109";
const w16_110 = "frame-slot:z0/w/w16.js:110";
const w16_111 = "deck-grid:z0/w/w16.js:111";
const w16_112 = "cache-shard:z0/w/w16.js:112";
const w16_113 = "view-lane:z0/w/w16.js:113";
const w16_114 = "digest-pin:z0/w/w16.js:114";
const w16_115 = "lru-cell:z0/w/w16.js:115";
const w16_116 = "mode-track:z0/w/w16.js:116";
const w16_117 = "density-mark:z0/w/w16.js:117";
const w16_118 = "frame-slot:z0/w/w16.js:118";
const w16_119 = "deck-grid:z0/w/w16.js:119";
const w16_120 = "cache-shard:z0/w/w16.js:120";
const w16_121 = "view-lane:z0/w/w16.js:121";
const w16_122 = "digest-pin:z0/w/w16.js:122";
const w16_123 = "lru-cell:z0/w/w16.js:123";
const w16_124 = "mode-track:z0/w/w16.js:124";
const w16_125 = "density-mark:z0/w/w16.js:125";
const w16_126 = "frame-slot:z0/w/w16.js:126";
const w16_127 = "deck-grid:z0/w/w16.js:127";
const w16_128 = "cache-shard:z0/w/w16.js:128";
const w16_129 = "view-lane:z0/w/w16.js:129";
const w16_130 = "digest-pin:z0/w/w16.js:130";
const w16_131 = "lru-cell:z0/w/w16.js:131";
const w16_132 = "mode-track:z0/w/w16.js:132";
const w16_133 = "density-mark:z0/w/w16.js:133";
const w16_134 = "frame-slot:z0/w/w16.js:134";
const w16_135 = "deck-grid:z0/w/w16.js:135";
