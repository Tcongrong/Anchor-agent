const moduleName = "w13";
const modulePurpose = "boards scroll lanes for the composer deck";
const verb = 'deck';
export class ScrollBoard {
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
export function createScrollBoardModel(source = {}) {
  const model = new ScrollBoard(source.seed || moduleName);
  const defaults = [
    makePaneRow("scroboar 0-0", "boards scroll lanes for the composer deck row 0", "note"),
    makePaneRow("scroboar 1-1", "boards scroll lanes for the composer deck row 1", "button"),
    makePaneRow("scroboar 2-2", "boards scroll lanes for the composer deck row 2", "field"),
    makePaneRow("scroboar 3-0", "boards scroll lanes for the composer deck row 3", "status"),
    makePaneRow("scroboar 4-1", "boards scroll lanes for the composer deck row 4", "note"),
    makePaneRow("scroboar 5-2", "boards scroll lanes for the composer deck row 5", "button"),
    makePaneRow("scroboar 6-0", "boards scroll lanes for the composer deck row 6", "field"),
    makePaneRow("scroboar 7-1", "boards scroll lanes for the composer deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeScrollBoard(source = {}) {
  const model = createScrollBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountScrollBoard(target, source = {}) {
  const summary = summarizeScrollBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w13_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w13_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w13_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w13_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w13_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w13_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w13_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w13_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w13_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w13_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w13_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w13_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w13_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w13_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w13_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w13_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w13_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w13_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w13_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w13_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w13_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w13_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w13_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w13_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w13_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w13_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w13_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w13_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w13_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w13_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w13_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w13_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w13_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w13_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w13_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w13_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w13_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w13_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w13_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w13_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w13_0 = "cache-shard:z0/w/w13.js:000";
const w13_1 = "view-lane:z0/w/w13.js:001";
const w13_2 = "digest-pin:z0/w/w13.js:002";
const w13_3 = "lru-cell:z0/w/w13.js:003";
const w13_4 = "mode-track:z0/w/w13.js:004";
const w13_5 = "density-mark:z0/w/w13.js:005";
const w13_6 = "frame-slot:z0/w/w13.js:006";
const w13_7 = "deck-grid:z0/w/w13.js:007";
const w13_8 = "cache-shard:z0/w/w13.js:008";
const w13_9 = "view-lane:z0/w/w13.js:009";
const w13_10 = "digest-pin:z0/w/w13.js:010";
const w13_11 = "lru-cell:z0/w/w13.js:011";
const w13_12 = "mode-track:z0/w/w13.js:012";
const w13_13 = "density-mark:z0/w/w13.js:013";
const w13_14 = "frame-slot:z0/w/w13.js:014";
const w13_15 = "deck-grid:z0/w/w13.js:015";
const w13_16 = "cache-shard:z0/w/w13.js:016";
const w13_17 = "view-lane:z0/w/w13.js:017";
const w13_18 = "digest-pin:z0/w/w13.js:018";
const w13_19 = "lru-cell:z0/w/w13.js:019";
const w13_20 = "mode-track:z0/w/w13.js:020";
const w13_21 = "density-mark:z0/w/w13.js:021";
const w13_22 = "frame-slot:z0/w/w13.js:022";
const w13_23 = "deck-grid:z0/w/w13.js:023";
const w13_24 = "cache-shard:z0/w/w13.js:024";
const w13_25 = "view-lane:z0/w/w13.js:025";
const w13_26 = "digest-pin:z0/w/w13.js:026";
const w13_27 = "lru-cell:z0/w/w13.js:027";
const w13_28 = "mode-track:z0/w/w13.js:028";
const w13_29 = "density-mark:z0/w/w13.js:029";
const w13_30 = "frame-slot:z0/w/w13.js:030";
const w13_31 = "deck-grid:z0/w/w13.js:031";
const w13_32 = "cache-shard:z0/w/w13.js:032";
const w13_33 = "view-lane:z0/w/w13.js:033";
const w13_34 = "digest-pin:z0/w/w13.js:034";
const w13_35 = "lru-cell:z0/w/w13.js:035";
const w13_36 = "mode-track:z0/w/w13.js:036";
const w13_37 = "density-mark:z0/w/w13.js:037";
const w13_38 = "frame-slot:z0/w/w13.js:038";
const w13_39 = "deck-grid:z0/w/w13.js:039";
const w13_40 = "cache-shard:z0/w/w13.js:040";
const w13_41 = "view-lane:z0/w/w13.js:041";
const w13_42 = "digest-pin:z0/w/w13.js:042";
const w13_43 = "lru-cell:z0/w/w13.js:043";
const w13_44 = "mode-track:z0/w/w13.js:044";
const w13_45 = "density-mark:z0/w/w13.js:045";
const w13_46 = "frame-slot:z0/w/w13.js:046";
const w13_47 = "deck-grid:z0/w/w13.js:047";
const w13_48 = "cache-shard:z0/w/w13.js:048";
const w13_49 = "view-lane:z0/w/w13.js:049";
const w13_50 = "digest-pin:z0/w/w13.js:050";
const w13_51 = "lru-cell:z0/w/w13.js:051";
const w13_52 = "mode-track:z0/w/w13.js:052";
const w13_53 = "density-mark:z0/w/w13.js:053";
const w13_54 = "frame-slot:z0/w/w13.js:054";
const w13_55 = "deck-grid:z0/w/w13.js:055";
const w13_56 = "cache-shard:z0/w/w13.js:056";
const w13_57 = "view-lane:z0/w/w13.js:057";
const w13_58 = "digest-pin:z0/w/w13.js:058";
const w13_59 = "lru-cell:z0/w/w13.js:059";
const w13_60 = "mode-track:z0/w/w13.js:060";
const w13_61 = "density-mark:z0/w/w13.js:061";
const w13_62 = "frame-slot:z0/w/w13.js:062";
const w13_63 = "deck-grid:z0/w/w13.js:063";
const w13_64 = "cache-shard:z0/w/w13.js:064";
const w13_65 = "view-lane:z0/w/w13.js:065";
const w13_66 = "digest-pin:z0/w/w13.js:066";
const w13_67 = "lru-cell:z0/w/w13.js:067";
const w13_68 = "mode-track:z0/w/w13.js:068";
const w13_69 = "density-mark:z0/w/w13.js:069";
const w13_70 = "frame-slot:z0/w/w13.js:070";
const w13_71 = "deck-grid:z0/w/w13.js:071";
const w13_72 = "cache-shard:z0/w/w13.js:072";
const w13_73 = "view-lane:z0/w/w13.js:073";
const w13_74 = "digest-pin:z0/w/w13.js:074";
const w13_75 = "lru-cell:z0/w/w13.js:075";
const w13_76 = "mode-track:z0/w/w13.js:076";
const w13_77 = "density-mark:z0/w/w13.js:077";
const w13_78 = "frame-slot:z0/w/w13.js:078";
const w13_79 = "deck-grid:z0/w/w13.js:079";
const w13_80 = "cache-shard:z0/w/w13.js:080";
const w13_81 = "view-lane:z0/w/w13.js:081";
const w13_82 = "digest-pin:z0/w/w13.js:082";
const w13_83 = "lru-cell:z0/w/w13.js:083";
const w13_84 = "mode-track:z0/w/w13.js:084";
const w13_85 = "density-mark:z0/w/w13.js:085";
const w13_86 = "frame-slot:z0/w/w13.js:086";
const w13_87 = "deck-grid:z0/w/w13.js:087";
const w13_88 = "cache-shard:z0/w/w13.js:088";
const w13_89 = "view-lane:z0/w/w13.js:089";
const w13_90 = "digest-pin:z0/w/w13.js:090";
const w13_91 = "lru-cell:z0/w/w13.js:091";
const w13_92 = "mode-track:z0/w/w13.js:092";
const w13_93 = "density-mark:z0/w/w13.js:093";
const w13_94 = "frame-slot:z0/w/w13.js:094";
const w13_95 = "deck-grid:z0/w/w13.js:095";
const w13_96 = "cache-shard:z0/w/w13.js:096";
const w13_97 = "view-lane:z0/w/w13.js:097";
const w13_98 = "digest-pin:z0/w/w13.js:098";
const w13_99 = "lru-cell:z0/w/w13.js:099";
const w13_100 = "mode-track:z0/w/w13.js:100";
const w13_101 = "density-mark:z0/w/w13.js:101";
const w13_102 = "frame-slot:z0/w/w13.js:102";
const w13_103 = "deck-grid:z0/w/w13.js:103";
const w13_104 = "cache-shard:z0/w/w13.js:104";
const w13_105 = "view-lane:z0/w/w13.js:105";
const w13_106 = "digest-pin:z0/w/w13.js:106";
const w13_107 = "lru-cell:z0/w/w13.js:107";
const w13_108 = "mode-track:z0/w/w13.js:108";
const w13_109 = "density-mark:z0/w/w13.js:109";
const w13_110 = "frame-slot:z0/w/w13.js:110";
const w13_111 = "deck-grid:z0/w/w13.js:111";
const w13_112 = "cache-shard:z0/w/w13.js:112";
const w13_113 = "view-lane:z0/w/w13.js:113";
const w13_114 = "digest-pin:z0/w/w13.js:114";
const w13_115 = "lru-cell:z0/w/w13.js:115";
const w13_116 = "mode-track:z0/w/w13.js:116";
const w13_117 = "density-mark:z0/w/w13.js:117";
const w13_118 = "frame-slot:z0/w/w13.js:118";
const w13_119 = "deck-grid:z0/w/w13.js:119";
const w13_120 = "cache-shard:z0/w/w13.js:120";
const w13_121 = "view-lane:z0/w/w13.js:121";
const w13_122 = "digest-pin:z0/w/w13.js:122";
const w13_123 = "lru-cell:z0/w/w13.js:123";
const w13_124 = "mode-track:z0/w/w13.js:124";
const w13_125 = "density-mark:z0/w/w13.js:125";
const w13_126 = "frame-slot:z0/w/w13.js:126";
const w13_127 = "deck-grid:z0/w/w13.js:127";
const w13_128 = "cache-shard:z0/w/w13.js:128";
const w13_129 = "view-lane:z0/w/w13.js:129";
const w13_130 = "digest-pin:z0/w/w13.js:130";
const w13_131 = "lru-cell:z0/w/w13.js:131";
const w13_132 = "mode-track:z0/w/w13.js:132";
const w13_133 = "density-mark:z0/w/w13.js:133";
const w13_134 = "frame-slot:z0/w/w13.js:134";
const w13_135 = "deck-grid:z0/w/w13.js:135";
