const moduleName = "w03";
const modulePurpose = "registers mode-board sources for the cache deck";
const verb = 'deck';
export class ModeBoard {
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
export function createModeBoardModel(source = {}) {
  const model = new ModeBoard(source.seed || moduleName);
  const defaults = [
    makePaneRow("modeboar 0-0", "registers mode-board sources for the cache deck row 0", "note"),
    makePaneRow("modeboar 1-1", "registers mode-board sources for the cache deck row 1", "button"),
    makePaneRow("modeboar 2-2", "registers mode-board sources for the cache deck row 2", "field"),
    makePaneRow("modeboar 3-0", "registers mode-board sources for the cache deck row 3", "status"),
    makePaneRow("modeboar 4-1", "registers mode-board sources for the cache deck row 4", "note"),
    makePaneRow("modeboar 5-2", "registers mode-board sources for the cache deck row 5", "button"),
    makePaneRow("modeboar 6-0", "registers mode-board sources for the cache deck row 6", "field"),
    makePaneRow("modeboar 7-1", "registers mode-board sources for the cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeModeBoard(source = {}) {
  const model = createModeBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountModeBoard(target, source = {}) {
  const summary = summarizeModeBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w03_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w03_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w03_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w03_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w03_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w03_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w03_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w03_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w03_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w03_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w03_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w03_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w03_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w03_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w03_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w03_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w03_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w03_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w03_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w03_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w03_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w03_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w03_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w03_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w03_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w03_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w03_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w03_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w03_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w03_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w03_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w03_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w03_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w03_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w03_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w03_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w03_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w03_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w03_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w03_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w03_0 = "cache-shard:z0/w/w03.js:000";
const w03_1 = "view-lane:z0/w/w03.js:001";
const w03_2 = "digest-pin:z0/w/w03.js:002";
const w03_3 = "lru-cell:z0/w/w03.js:003";
const w03_4 = "mode-track:z0/w/w03.js:004";
const w03_5 = "density-mark:z0/w/w03.js:005";
const w03_6 = "frame-slot:z0/w/w03.js:006";
const w03_7 = "deck-grid:z0/w/w03.js:007";
const w03_8 = "cache-shard:z0/w/w03.js:008";
const w03_9 = "view-lane:z0/w/w03.js:009";
const w03_10 = "digest-pin:z0/w/w03.js:010";
const w03_11 = "lru-cell:z0/w/w03.js:011";
const w03_12 = "mode-track:z0/w/w03.js:012";
const w03_13 = "density-mark:z0/w/w03.js:013";
const w03_14 = "frame-slot:z0/w/w03.js:014";
const w03_15 = "deck-grid:z0/w/w03.js:015";
const w03_16 = "cache-shard:z0/w/w03.js:016";
const w03_17 = "view-lane:z0/w/w03.js:017";
const w03_18 = "digest-pin:z0/w/w03.js:018";
const w03_19 = "lru-cell:z0/w/w03.js:019";
const w03_20 = "mode-track:z0/w/w03.js:020";
const w03_21 = "density-mark:z0/w/w03.js:021";
const w03_22 = "frame-slot:z0/w/w03.js:022";
const w03_23 = "deck-grid:z0/w/w03.js:023";
const w03_24 = "cache-shard:z0/w/w03.js:024";
const w03_25 = "view-lane:z0/w/w03.js:025";
const w03_26 = "digest-pin:z0/w/w03.js:026";
const w03_27 = "lru-cell:z0/w/w03.js:027";
const w03_28 = "mode-track:z0/w/w03.js:028";
const w03_29 = "density-mark:z0/w/w03.js:029";
const w03_30 = "frame-slot:z0/w/w03.js:030";
const w03_31 = "deck-grid:z0/w/w03.js:031";
const w03_32 = "cache-shard:z0/w/w03.js:032";
const w03_33 = "view-lane:z0/w/w03.js:033";
const w03_34 = "digest-pin:z0/w/w03.js:034";
const w03_35 = "lru-cell:z0/w/w03.js:035";
const w03_36 = "mode-track:z0/w/w03.js:036";
const w03_37 = "density-mark:z0/w/w03.js:037";
const w03_38 = "frame-slot:z0/w/w03.js:038";
const w03_39 = "deck-grid:z0/w/w03.js:039";
const w03_40 = "cache-shard:z0/w/w03.js:040";
const w03_41 = "view-lane:z0/w/w03.js:041";
const w03_42 = "digest-pin:z0/w/w03.js:042";
const w03_43 = "lru-cell:z0/w/w03.js:043";
const w03_44 = "mode-track:z0/w/w03.js:044";
const w03_45 = "density-mark:z0/w/w03.js:045";
const w03_46 = "frame-slot:z0/w/w03.js:046";
const w03_47 = "deck-grid:z0/w/w03.js:047";
const w03_48 = "cache-shard:z0/w/w03.js:048";
const w03_49 = "view-lane:z0/w/w03.js:049";
const w03_50 = "digest-pin:z0/w/w03.js:050";
const w03_51 = "lru-cell:z0/w/w03.js:051";
const w03_52 = "mode-track:z0/w/w03.js:052";
const w03_53 = "density-mark:z0/w/w03.js:053";
const w03_54 = "frame-slot:z0/w/w03.js:054";
const w03_55 = "deck-grid:z0/w/w03.js:055";
const w03_56 = "cache-shard:z0/w/w03.js:056";
const w03_57 = "view-lane:z0/w/w03.js:057";
const w03_58 = "digest-pin:z0/w/w03.js:058";
const w03_59 = "lru-cell:z0/w/w03.js:059";
const w03_60 = "mode-track:z0/w/w03.js:060";
const w03_61 = "density-mark:z0/w/w03.js:061";
const w03_62 = "frame-slot:z0/w/w03.js:062";
const w03_63 = "deck-grid:z0/w/w03.js:063";
const w03_64 = "cache-shard:z0/w/w03.js:064";
const w03_65 = "view-lane:z0/w/w03.js:065";
const w03_66 = "digest-pin:z0/w/w03.js:066";
const w03_67 = "lru-cell:z0/w/w03.js:067";
const w03_68 = "mode-track:z0/w/w03.js:068";
const w03_69 = "density-mark:z0/w/w03.js:069";
const w03_70 = "frame-slot:z0/w/w03.js:070";
const w03_71 = "deck-grid:z0/w/w03.js:071";
const w03_72 = "cache-shard:z0/w/w03.js:072";
const w03_73 = "view-lane:z0/w/w03.js:073";
const w03_74 = "digest-pin:z0/w/w03.js:074";
const w03_75 = "lru-cell:z0/w/w03.js:075";
const w03_76 = "mode-track:z0/w/w03.js:076";
const w03_77 = "density-mark:z0/w/w03.js:077";
const w03_78 = "frame-slot:z0/w/w03.js:078";
const w03_79 = "deck-grid:z0/w/w03.js:079";
const w03_80 = "cache-shard:z0/w/w03.js:080";
const w03_81 = "view-lane:z0/w/w03.js:081";
const w03_82 = "digest-pin:z0/w/w03.js:082";
const w03_83 = "lru-cell:z0/w/w03.js:083";
const w03_84 = "mode-track:z0/w/w03.js:084";
const w03_85 = "density-mark:z0/w/w03.js:085";
const w03_86 = "frame-slot:z0/w/w03.js:086";
const w03_87 = "deck-grid:z0/w/w03.js:087";
const w03_88 = "cache-shard:z0/w/w03.js:088";
const w03_89 = "view-lane:z0/w/w03.js:089";
const w03_90 = "digest-pin:z0/w/w03.js:090";
const w03_91 = "lru-cell:z0/w/w03.js:091";
const w03_92 = "mode-track:z0/w/w03.js:092";
const w03_93 = "density-mark:z0/w/w03.js:093";
const w03_94 = "frame-slot:z0/w/w03.js:094";
const w03_95 = "deck-grid:z0/w/w03.js:095";
const w03_96 = "cache-shard:z0/w/w03.js:096";
const w03_97 = "view-lane:z0/w/w03.js:097";
const w03_98 = "digest-pin:z0/w/w03.js:098";
const w03_99 = "lru-cell:z0/w/w03.js:099";
const w03_100 = "mode-track:z0/w/w03.js:100";
const w03_101 = "density-mark:z0/w/w03.js:101";
const w03_102 = "frame-slot:z0/w/w03.js:102";
const w03_103 = "deck-grid:z0/w/w03.js:103";
const w03_104 = "cache-shard:z0/w/w03.js:104";
const w03_105 = "view-lane:z0/w/w03.js:105";
const w03_106 = "digest-pin:z0/w/w03.js:106";
const w03_107 = "lru-cell:z0/w/w03.js:107";
const w03_108 = "mode-track:z0/w/w03.js:108";
const w03_109 = "density-mark:z0/w/w03.js:109";
const w03_110 = "frame-slot:z0/w/w03.js:110";
const w03_111 = "deck-grid:z0/w/w03.js:111";
const w03_112 = "cache-shard:z0/w/w03.js:112";
const w03_113 = "view-lane:z0/w/w03.js:113";
const w03_114 = "digest-pin:z0/w/w03.js:114";
const w03_115 = "lru-cell:z0/w/w03.js:115";
const w03_116 = "mode-track:z0/w/w03.js:116";
const w03_117 = "density-mark:z0/w/w03.js:117";
const w03_118 = "frame-slot:z0/w/w03.js:118";
const w03_119 = "deck-grid:z0/w/w03.js:119";
const w03_120 = "cache-shard:z0/w/w03.js:120";
const w03_121 = "view-lane:z0/w/w03.js:121";
const w03_122 = "digest-pin:z0/w/w03.js:122";
const w03_123 = "lru-cell:z0/w/w03.js:123";
const w03_124 = "mode-track:z0/w/w03.js:124";
const w03_125 = "density-mark:z0/w/w03.js:125";
const w03_126 = "frame-slot:z0/w/w03.js:126";
const w03_127 = "deck-grid:z0/w/w03.js:127";
const w03_128 = "cache-shard:z0/w/w03.js:128";
const w03_129 = "view-lane:z0/w/w03.js:129";
const w03_130 = "digest-pin:z0/w/w03.js:130";
const w03_131 = "lru-cell:z0/w/w03.js:131";
const w03_132 = "mode-track:z0/w/w03.js:132";
const w03_133 = "density-mark:z0/w/w03.js:133";
const w03_134 = "frame-slot:z0/w/w03.js:134";
const w03_135 = "deck-grid:z0/w/w03.js:135";
