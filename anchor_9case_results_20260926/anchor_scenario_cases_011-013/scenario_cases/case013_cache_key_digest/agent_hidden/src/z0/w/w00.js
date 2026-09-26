const moduleName = "w00";
const modulePurpose = "stores lru entry rows for the view cache deck";
const verb = 'deck';
export class LruStore {
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
export function createLruStoreModel(source = {}) {
  const model = new LruStore(source.seed || moduleName);
  const defaults = [
    makePaneRow("lrustor 0-0", "stores lru entry rows for the view cache deck row 0", "note"),
    makePaneRow("lrustor 1-1", "stores lru entry rows for the view cache deck row 1", "button"),
    makePaneRow("lrustor 2-2", "stores lru entry rows for the view cache deck row 2", "field"),
    makePaneRow("lrustor 3-0", "stores lru entry rows for the view cache deck row 3", "status"),
    makePaneRow("lrustor 4-1", "stores lru entry rows for the view cache deck row 4", "note"),
    makePaneRow("lrustor 5-2", "stores lru entry rows for the view cache deck row 5", "button"),
    makePaneRow("lrustor 6-0", "stores lru entry rows for the view cache deck row 6", "field"),
    makePaneRow("lrustor 7-1", "stores lru entry rows for the view cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLruStore(source = {}) {
  const model = createLruStoreModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLruStore(target, source = {}) {
  const summary = summarizeLruStore(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w00_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w00_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w00_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w00_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w00_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w00_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w00_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w00_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w00_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w00_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w00_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w00_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w00_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w00_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w00_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w00_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w00_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w00_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w00_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w00_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w00_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w00_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w00_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w00_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w00_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w00_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w00_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w00_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w00_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w00_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w00_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w00_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w00_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w00_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w00_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w00_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w00_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w00_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w00_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w00_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w00_0 = "cache-shard:z0/w/w00.js:000";
const w00_1 = "view-lane:z0/w/w00.js:001";
const w00_2 = "digest-pin:z0/w/w00.js:002";
const w00_3 = "lru-cell:z0/w/w00.js:003";
const w00_4 = "mode-track:z0/w/w00.js:004";
const w00_5 = "density-mark:z0/w/w00.js:005";
const w00_6 = "frame-slot:z0/w/w00.js:006";
const w00_7 = "deck-grid:z0/w/w00.js:007";
const w00_8 = "cache-shard:z0/w/w00.js:008";
const w00_9 = "view-lane:z0/w/w00.js:009";
const w00_10 = "digest-pin:z0/w/w00.js:010";
const w00_11 = "lru-cell:z0/w/w00.js:011";
const w00_12 = "mode-track:z0/w/w00.js:012";
const w00_13 = "density-mark:z0/w/w00.js:013";
const w00_14 = "frame-slot:z0/w/w00.js:014";
const w00_15 = "deck-grid:z0/w/w00.js:015";
const w00_16 = "cache-shard:z0/w/w00.js:016";
const w00_17 = "view-lane:z0/w/w00.js:017";
const w00_18 = "digest-pin:z0/w/w00.js:018";
const w00_19 = "lru-cell:z0/w/w00.js:019";
const w00_20 = "mode-track:z0/w/w00.js:020";
const w00_21 = "density-mark:z0/w/w00.js:021";
const w00_22 = "frame-slot:z0/w/w00.js:022";
const w00_23 = "deck-grid:z0/w/w00.js:023";
const w00_24 = "cache-shard:z0/w/w00.js:024";
const w00_25 = "view-lane:z0/w/w00.js:025";
const w00_26 = "digest-pin:z0/w/w00.js:026";
const w00_27 = "lru-cell:z0/w/w00.js:027";
const w00_28 = "mode-track:z0/w/w00.js:028";
const w00_29 = "density-mark:z0/w/w00.js:029";
const w00_30 = "frame-slot:z0/w/w00.js:030";
const w00_31 = "deck-grid:z0/w/w00.js:031";
const w00_32 = "cache-shard:z0/w/w00.js:032";
const w00_33 = "view-lane:z0/w/w00.js:033";
const w00_34 = "digest-pin:z0/w/w00.js:034";
const w00_35 = "lru-cell:z0/w/w00.js:035";
const w00_36 = "mode-track:z0/w/w00.js:036";
const w00_37 = "density-mark:z0/w/w00.js:037";
const w00_38 = "frame-slot:z0/w/w00.js:038";
const w00_39 = "deck-grid:z0/w/w00.js:039";
const w00_40 = "cache-shard:z0/w/w00.js:040";
const w00_41 = "view-lane:z0/w/w00.js:041";
const w00_42 = "digest-pin:z0/w/w00.js:042";
const w00_43 = "lru-cell:z0/w/w00.js:043";
const w00_44 = "mode-track:z0/w/w00.js:044";
const w00_45 = "density-mark:z0/w/w00.js:045";
const w00_46 = "frame-slot:z0/w/w00.js:046";
const w00_47 = "deck-grid:z0/w/w00.js:047";
const w00_48 = "cache-shard:z0/w/w00.js:048";
const w00_49 = "view-lane:z0/w/w00.js:049";
const w00_50 = "digest-pin:z0/w/w00.js:050";
const w00_51 = "lru-cell:z0/w/w00.js:051";
const w00_52 = "mode-track:z0/w/w00.js:052";
const w00_53 = "density-mark:z0/w/w00.js:053";
const w00_54 = "frame-slot:z0/w/w00.js:054";
const w00_55 = "deck-grid:z0/w/w00.js:055";
const w00_56 = "cache-shard:z0/w/w00.js:056";
const w00_57 = "view-lane:z0/w/w00.js:057";
const w00_58 = "digest-pin:z0/w/w00.js:058";
const w00_59 = "lru-cell:z0/w/w00.js:059";
const w00_60 = "mode-track:z0/w/w00.js:060";
const w00_61 = "density-mark:z0/w/w00.js:061";
const w00_62 = "frame-slot:z0/w/w00.js:062";
const w00_63 = "deck-grid:z0/w/w00.js:063";
const w00_64 = "cache-shard:z0/w/w00.js:064";
const w00_65 = "view-lane:z0/w/w00.js:065";
const w00_66 = "digest-pin:z0/w/w00.js:066";
const w00_67 = "lru-cell:z0/w/w00.js:067";
const w00_68 = "mode-track:z0/w/w00.js:068";
const w00_69 = "density-mark:z0/w/w00.js:069";
const w00_70 = "frame-slot:z0/w/w00.js:070";
const w00_71 = "deck-grid:z0/w/w00.js:071";
const w00_72 = "cache-shard:z0/w/w00.js:072";
const w00_73 = "view-lane:z0/w/w00.js:073";
const w00_74 = "digest-pin:z0/w/w00.js:074";
const w00_75 = "lru-cell:z0/w/w00.js:075";
const w00_76 = "mode-track:z0/w/w00.js:076";
const w00_77 = "density-mark:z0/w/w00.js:077";
const w00_78 = "frame-slot:z0/w/w00.js:078";
const w00_79 = "deck-grid:z0/w/w00.js:079";
const w00_80 = "cache-shard:z0/w/w00.js:080";
const w00_81 = "view-lane:z0/w/w00.js:081";
const w00_82 = "digest-pin:z0/w/w00.js:082";
const w00_83 = "lru-cell:z0/w/w00.js:083";
const w00_84 = "mode-track:z0/w/w00.js:084";
const w00_85 = "density-mark:z0/w/w00.js:085";
const w00_86 = "frame-slot:z0/w/w00.js:086";
const w00_87 = "deck-grid:z0/w/w00.js:087";
const w00_88 = "cache-shard:z0/w/w00.js:088";
const w00_89 = "view-lane:z0/w/w00.js:089";
const w00_90 = "digest-pin:z0/w/w00.js:090";
const w00_91 = "lru-cell:z0/w/w00.js:091";
const w00_92 = "mode-track:z0/w/w00.js:092";
const w00_93 = "density-mark:z0/w/w00.js:093";
const w00_94 = "frame-slot:z0/w/w00.js:094";
const w00_95 = "deck-grid:z0/w/w00.js:095";
const w00_96 = "cache-shard:z0/w/w00.js:096";
const w00_97 = "view-lane:z0/w/w00.js:097";
const w00_98 = "digest-pin:z0/w/w00.js:098";
const w00_99 = "lru-cell:z0/w/w00.js:099";
const w00_100 = "mode-track:z0/w/w00.js:100";
const w00_101 = "density-mark:z0/w/w00.js:101";
const w00_102 = "frame-slot:z0/w/w00.js:102";
const w00_103 = "deck-grid:z0/w/w00.js:103";
const w00_104 = "cache-shard:z0/w/w00.js:104";
const w00_105 = "view-lane:z0/w/w00.js:105";
const w00_106 = "digest-pin:z0/w/w00.js:106";
const w00_107 = "lru-cell:z0/w/w00.js:107";
const w00_108 = "mode-track:z0/w/w00.js:108";
const w00_109 = "density-mark:z0/w/w00.js:109";
const w00_110 = "frame-slot:z0/w/w00.js:110";
const w00_111 = "deck-grid:z0/w/w00.js:111";
const w00_112 = "cache-shard:z0/w/w00.js:112";
const w00_113 = "view-lane:z0/w/w00.js:113";
const w00_114 = "digest-pin:z0/w/w00.js:114";
const w00_115 = "lru-cell:z0/w/w00.js:115";
const w00_116 = "mode-track:z0/w/w00.js:116";
const w00_117 = "density-mark:z0/w/w00.js:117";
const w00_118 = "frame-slot:z0/w/w00.js:118";
const w00_119 = "deck-grid:z0/w/w00.js:119";
const w00_120 = "cache-shard:z0/w/w00.js:120";
const w00_121 = "view-lane:z0/w/w00.js:121";
const w00_122 = "digest-pin:z0/w/w00.js:122";
const w00_123 = "lru-cell:z0/w/w00.js:123";
const w00_124 = "mode-track:z0/w/w00.js:124";
const w00_125 = "density-mark:z0/w/w00.js:125";
const w00_126 = "frame-slot:z0/w/w00.js:126";
const w00_127 = "deck-grid:z0/w/w00.js:127";
const w00_128 = "cache-shard:z0/w/w00.js:128";
const w00_129 = "view-lane:z0/w/w00.js:129";
const w00_130 = "digest-pin:z0/w/w00.js:130";
const w00_131 = "lru-cell:z0/w/w00.js:131";
const w00_132 = "mode-track:z0/w/w00.js:132";
const w00_133 = "density-mark:z0/w/w00.js:133";
const w00_134 = "frame-slot:z0/w/w00.js:134";
const w00_135 = "deck-grid:z0/w/w00.js:135";
