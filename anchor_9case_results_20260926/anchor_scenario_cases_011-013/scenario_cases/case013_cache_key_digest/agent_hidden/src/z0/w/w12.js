const moduleName = "w12";
const modulePurpose = "outlines row bands for the cache deck";
const verb = 'deck';
export class RowOutline {
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
export function createRowOutlineModel(source = {}) {
  const model = new RowOutline(source.seed || moduleName);
  const defaults = [
    makePaneRow("rowoutl 0-0", "outlines row bands for the cache deck row 0", "note"),
    makePaneRow("rowoutl 1-1", "outlines row bands for the cache deck row 1", "button"),
    makePaneRow("rowoutl 2-2", "outlines row bands for the cache deck row 2", "field"),
    makePaneRow("rowoutl 3-0", "outlines row bands for the cache deck row 3", "status"),
    makePaneRow("rowoutl 4-1", "outlines row bands for the cache deck row 4", "note"),
    makePaneRow("rowoutl 5-2", "outlines row bands for the cache deck row 5", "button"),
    makePaneRow("rowoutl 6-0", "outlines row bands for the cache deck row 6", "field"),
    makePaneRow("rowoutl 7-1", "outlines row bands for the cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeRowOutline(source = {}) {
  const model = createRowOutlineModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountRowOutline(target, source = {}) {
  const summary = summarizeRowOutline(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w12_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w12_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w12_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w12_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w12_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w12_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w12_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w12_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w12_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w12_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w12_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w12_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w12_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w12_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w12_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w12_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w12_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w12_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w12_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w12_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w12_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w12_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w12_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w12_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w12_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w12_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w12_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w12_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w12_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w12_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w12_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w12_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w12_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w12_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w12_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w12_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w12_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w12_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w12_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w12_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w12_0 = "cache-shard:z0/w/w12.js:000";
const w12_1 = "view-lane:z0/w/w12.js:001";
const w12_2 = "digest-pin:z0/w/w12.js:002";
const w12_3 = "lru-cell:z0/w/w12.js:003";
const w12_4 = "mode-track:z0/w/w12.js:004";
const w12_5 = "density-mark:z0/w/w12.js:005";
const w12_6 = "frame-slot:z0/w/w12.js:006";
const w12_7 = "deck-grid:z0/w/w12.js:007";
const w12_8 = "cache-shard:z0/w/w12.js:008";
const w12_9 = "view-lane:z0/w/w12.js:009";
const w12_10 = "digest-pin:z0/w/w12.js:010";
const w12_11 = "lru-cell:z0/w/w12.js:011";
const w12_12 = "mode-track:z0/w/w12.js:012";
const w12_13 = "density-mark:z0/w/w12.js:013";
const w12_14 = "frame-slot:z0/w/w12.js:014";
const w12_15 = "deck-grid:z0/w/w12.js:015";
const w12_16 = "cache-shard:z0/w/w12.js:016";
const w12_17 = "view-lane:z0/w/w12.js:017";
const w12_18 = "digest-pin:z0/w/w12.js:018";
const w12_19 = "lru-cell:z0/w/w12.js:019";
const w12_20 = "mode-track:z0/w/w12.js:020";
const w12_21 = "density-mark:z0/w/w12.js:021";
const w12_22 = "frame-slot:z0/w/w12.js:022";
const w12_23 = "deck-grid:z0/w/w12.js:023";
const w12_24 = "cache-shard:z0/w/w12.js:024";
const w12_25 = "view-lane:z0/w/w12.js:025";
const w12_26 = "digest-pin:z0/w/w12.js:026";
const w12_27 = "lru-cell:z0/w/w12.js:027";
const w12_28 = "mode-track:z0/w/w12.js:028";
const w12_29 = "density-mark:z0/w/w12.js:029";
const w12_30 = "frame-slot:z0/w/w12.js:030";
const w12_31 = "deck-grid:z0/w/w12.js:031";
const w12_32 = "cache-shard:z0/w/w12.js:032";
const w12_33 = "view-lane:z0/w/w12.js:033";
const w12_34 = "digest-pin:z0/w/w12.js:034";
const w12_35 = "lru-cell:z0/w/w12.js:035";
const w12_36 = "mode-track:z0/w/w12.js:036";
const w12_37 = "density-mark:z0/w/w12.js:037";
const w12_38 = "frame-slot:z0/w/w12.js:038";
const w12_39 = "deck-grid:z0/w/w12.js:039";
const w12_40 = "cache-shard:z0/w/w12.js:040";
const w12_41 = "view-lane:z0/w/w12.js:041";
const w12_42 = "digest-pin:z0/w/w12.js:042";
const w12_43 = "lru-cell:z0/w/w12.js:043";
const w12_44 = "mode-track:z0/w/w12.js:044";
const w12_45 = "density-mark:z0/w/w12.js:045";
const w12_46 = "frame-slot:z0/w/w12.js:046";
const w12_47 = "deck-grid:z0/w/w12.js:047";
const w12_48 = "cache-shard:z0/w/w12.js:048";
const w12_49 = "view-lane:z0/w/w12.js:049";
const w12_50 = "digest-pin:z0/w/w12.js:050";
const w12_51 = "lru-cell:z0/w/w12.js:051";
const w12_52 = "mode-track:z0/w/w12.js:052";
const w12_53 = "density-mark:z0/w/w12.js:053";
const w12_54 = "frame-slot:z0/w/w12.js:054";
const w12_55 = "deck-grid:z0/w/w12.js:055";
const w12_56 = "cache-shard:z0/w/w12.js:056";
const w12_57 = "view-lane:z0/w/w12.js:057";
const w12_58 = "digest-pin:z0/w/w12.js:058";
const w12_59 = "lru-cell:z0/w/w12.js:059";
const w12_60 = "mode-track:z0/w/w12.js:060";
const w12_61 = "density-mark:z0/w/w12.js:061";
const w12_62 = "frame-slot:z0/w/w12.js:062";
const w12_63 = "deck-grid:z0/w/w12.js:063";
const w12_64 = "cache-shard:z0/w/w12.js:064";
const w12_65 = "view-lane:z0/w/w12.js:065";
const w12_66 = "digest-pin:z0/w/w12.js:066";
const w12_67 = "lru-cell:z0/w/w12.js:067";
const w12_68 = "mode-track:z0/w/w12.js:068";
const w12_69 = "density-mark:z0/w/w12.js:069";
const w12_70 = "frame-slot:z0/w/w12.js:070";
const w12_71 = "deck-grid:z0/w/w12.js:071";
const w12_72 = "cache-shard:z0/w/w12.js:072";
const w12_73 = "view-lane:z0/w/w12.js:073";
const w12_74 = "digest-pin:z0/w/w12.js:074";
const w12_75 = "lru-cell:z0/w/w12.js:075";
const w12_76 = "mode-track:z0/w/w12.js:076";
const w12_77 = "density-mark:z0/w/w12.js:077";
const w12_78 = "frame-slot:z0/w/w12.js:078";
const w12_79 = "deck-grid:z0/w/w12.js:079";
const w12_80 = "cache-shard:z0/w/w12.js:080";
const w12_81 = "view-lane:z0/w/w12.js:081";
const w12_82 = "digest-pin:z0/w/w12.js:082";
const w12_83 = "lru-cell:z0/w/w12.js:083";
const w12_84 = "mode-track:z0/w/w12.js:084";
const w12_85 = "density-mark:z0/w/w12.js:085";
const w12_86 = "frame-slot:z0/w/w12.js:086";
const w12_87 = "deck-grid:z0/w/w12.js:087";
const w12_88 = "cache-shard:z0/w/w12.js:088";
const w12_89 = "view-lane:z0/w/w12.js:089";
const w12_90 = "digest-pin:z0/w/w12.js:090";
const w12_91 = "lru-cell:z0/w/w12.js:091";
const w12_92 = "mode-track:z0/w/w12.js:092";
const w12_93 = "density-mark:z0/w/w12.js:093";
const w12_94 = "frame-slot:z0/w/w12.js:094";
const w12_95 = "deck-grid:z0/w/w12.js:095";
const w12_96 = "cache-shard:z0/w/w12.js:096";
const w12_97 = "view-lane:z0/w/w12.js:097";
const w12_98 = "digest-pin:z0/w/w12.js:098";
const w12_99 = "lru-cell:z0/w/w12.js:099";
const w12_100 = "mode-track:z0/w/w12.js:100";
const w12_101 = "density-mark:z0/w/w12.js:101";
const w12_102 = "frame-slot:z0/w/w12.js:102";
const w12_103 = "deck-grid:z0/w/w12.js:103";
const w12_104 = "cache-shard:z0/w/w12.js:104";
const w12_105 = "view-lane:z0/w/w12.js:105";
const w12_106 = "digest-pin:z0/w/w12.js:106";
const w12_107 = "lru-cell:z0/w/w12.js:107";
const w12_108 = "mode-track:z0/w/w12.js:108";
const w12_109 = "density-mark:z0/w/w12.js:109";
const w12_110 = "frame-slot:z0/w/w12.js:110";
const w12_111 = "deck-grid:z0/w/w12.js:111";
const w12_112 = "cache-shard:z0/w/w12.js:112";
const w12_113 = "view-lane:z0/w/w12.js:113";
const w12_114 = "digest-pin:z0/w/w12.js:114";
const w12_115 = "lru-cell:z0/w/w12.js:115";
const w12_116 = "mode-track:z0/w/w12.js:116";
const w12_117 = "density-mark:z0/w/w12.js:117";
const w12_118 = "frame-slot:z0/w/w12.js:118";
const w12_119 = "deck-grid:z0/w/w12.js:119";
const w12_120 = "cache-shard:z0/w/w12.js:120";
const w12_121 = "view-lane:z0/w/w12.js:121";
const w12_122 = "digest-pin:z0/w/w12.js:122";
const w12_123 = "lru-cell:z0/w/w12.js:123";
const w12_124 = "mode-track:z0/w/w12.js:124";
const w12_125 = "density-mark:z0/w/w12.js:125";
const w12_126 = "frame-slot:z0/w/w12.js:126";
const w12_127 = "deck-grid:z0/w/w12.js:127";
const w12_128 = "cache-shard:z0/w/w12.js:128";
const w12_129 = "view-lane:z0/w/w12.js:129";
const w12_130 = "digest-pin:z0/w/w12.js:130";
const w12_131 = "lru-cell:z0/w/w12.js:131";
const w12_132 = "mode-track:z0/w/w12.js:132";
const w12_133 = "density-mark:z0/w/w12.js:133";
const w12_134 = "frame-slot:z0/w/w12.js:134";
const w12_135 = "deck-grid:z0/w/w12.js:135";
