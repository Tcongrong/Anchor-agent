const moduleName = "w07";
const modulePurpose = "frames view-model rows for the cache desk";
const verb = 'deck';
export class FrameModel {
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
export function createFrameModelModel(source = {}) {
  const model = new FrameModel(source.seed || moduleName);
  const defaults = [
    makePaneRow("frammode 0-0", "frames view-model rows for the cache desk row 0", "note"),
    makePaneRow("frammode 1-1", "frames view-model rows for the cache desk row 1", "button"),
    makePaneRow("frammode 2-2", "frames view-model rows for the cache desk row 2", "field"),
    makePaneRow("frammode 3-0", "frames view-model rows for the cache desk row 3", "status"),
    makePaneRow("frammode 4-1", "frames view-model rows for the cache desk row 4", "note"),
    makePaneRow("frammode 5-2", "frames view-model rows for the cache desk row 5", "button"),
    makePaneRow("frammode 6-0", "frames view-model rows for the cache desk row 6", "field"),
    makePaneRow("frammode 7-1", "frames view-model rows for the cache desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFrameModel(source = {}) {
  const model = createFrameModelModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFrameModel(target, source = {}) {
  const summary = summarizeFrameModel(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w07_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w07_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w07_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w07_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w07_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w07_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w07_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w07_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w07_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w07_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w07_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w07_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w07_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w07_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w07_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w07_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w07_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w07_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w07_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w07_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w07_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w07_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w07_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w07_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w07_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w07_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w07_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w07_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w07_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w07_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w07_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w07_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w07_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w07_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w07_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w07_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w07_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w07_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w07_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w07_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w07_0 = "cache-shard:z0/w/w07.js:000";
const w07_1 = "view-lane:z0/w/w07.js:001";
const w07_2 = "digest-pin:z0/w/w07.js:002";
const w07_3 = "lru-cell:z0/w/w07.js:003";
const w07_4 = "mode-track:z0/w/w07.js:004";
const w07_5 = "density-mark:z0/w/w07.js:005";
const w07_6 = "frame-slot:z0/w/w07.js:006";
const w07_7 = "deck-grid:z0/w/w07.js:007";
const w07_8 = "cache-shard:z0/w/w07.js:008";
const w07_9 = "view-lane:z0/w/w07.js:009";
const w07_10 = "digest-pin:z0/w/w07.js:010";
const w07_11 = "lru-cell:z0/w/w07.js:011";
const w07_12 = "mode-track:z0/w/w07.js:012";
const w07_13 = "density-mark:z0/w/w07.js:013";
const w07_14 = "frame-slot:z0/w/w07.js:014";
const w07_15 = "deck-grid:z0/w/w07.js:015";
const w07_16 = "cache-shard:z0/w/w07.js:016";
const w07_17 = "view-lane:z0/w/w07.js:017";
const w07_18 = "digest-pin:z0/w/w07.js:018";
const w07_19 = "lru-cell:z0/w/w07.js:019";
const w07_20 = "mode-track:z0/w/w07.js:020";
const w07_21 = "density-mark:z0/w/w07.js:021";
const w07_22 = "frame-slot:z0/w/w07.js:022";
const w07_23 = "deck-grid:z0/w/w07.js:023";
const w07_24 = "cache-shard:z0/w/w07.js:024";
const w07_25 = "view-lane:z0/w/w07.js:025";
const w07_26 = "digest-pin:z0/w/w07.js:026";
const w07_27 = "lru-cell:z0/w/w07.js:027";
const w07_28 = "mode-track:z0/w/w07.js:028";
const w07_29 = "density-mark:z0/w/w07.js:029";
const w07_30 = "frame-slot:z0/w/w07.js:030";
const w07_31 = "deck-grid:z0/w/w07.js:031";
const w07_32 = "cache-shard:z0/w/w07.js:032";
const w07_33 = "view-lane:z0/w/w07.js:033";
const w07_34 = "digest-pin:z0/w/w07.js:034";
const w07_35 = "lru-cell:z0/w/w07.js:035";
const w07_36 = "mode-track:z0/w/w07.js:036";
const w07_37 = "density-mark:z0/w/w07.js:037";
const w07_38 = "frame-slot:z0/w/w07.js:038";
const w07_39 = "deck-grid:z0/w/w07.js:039";
const w07_40 = "cache-shard:z0/w/w07.js:040";
const w07_41 = "view-lane:z0/w/w07.js:041";
const w07_42 = "digest-pin:z0/w/w07.js:042";
const w07_43 = "lru-cell:z0/w/w07.js:043";
const w07_44 = "mode-track:z0/w/w07.js:044";
const w07_45 = "density-mark:z0/w/w07.js:045";
const w07_46 = "frame-slot:z0/w/w07.js:046";
const w07_47 = "deck-grid:z0/w/w07.js:047";
const w07_48 = "cache-shard:z0/w/w07.js:048";
const w07_49 = "view-lane:z0/w/w07.js:049";
const w07_50 = "digest-pin:z0/w/w07.js:050";
const w07_51 = "lru-cell:z0/w/w07.js:051";
const w07_52 = "mode-track:z0/w/w07.js:052";
const w07_53 = "density-mark:z0/w/w07.js:053";
const w07_54 = "frame-slot:z0/w/w07.js:054";
const w07_55 = "deck-grid:z0/w/w07.js:055";
const w07_56 = "cache-shard:z0/w/w07.js:056";
const w07_57 = "view-lane:z0/w/w07.js:057";
const w07_58 = "digest-pin:z0/w/w07.js:058";
const w07_59 = "lru-cell:z0/w/w07.js:059";
const w07_60 = "mode-track:z0/w/w07.js:060";
const w07_61 = "density-mark:z0/w/w07.js:061";
const w07_62 = "frame-slot:z0/w/w07.js:062";
const w07_63 = "deck-grid:z0/w/w07.js:063";
const w07_64 = "cache-shard:z0/w/w07.js:064";
const w07_65 = "view-lane:z0/w/w07.js:065";
const w07_66 = "digest-pin:z0/w/w07.js:066";
const w07_67 = "lru-cell:z0/w/w07.js:067";
const w07_68 = "mode-track:z0/w/w07.js:068";
const w07_69 = "density-mark:z0/w/w07.js:069";
const w07_70 = "frame-slot:z0/w/w07.js:070";
const w07_71 = "deck-grid:z0/w/w07.js:071";
const w07_72 = "cache-shard:z0/w/w07.js:072";
const w07_73 = "view-lane:z0/w/w07.js:073";
const w07_74 = "digest-pin:z0/w/w07.js:074";
const w07_75 = "lru-cell:z0/w/w07.js:075";
const w07_76 = "mode-track:z0/w/w07.js:076";
const w07_77 = "density-mark:z0/w/w07.js:077";
const w07_78 = "frame-slot:z0/w/w07.js:078";
const w07_79 = "deck-grid:z0/w/w07.js:079";
const w07_80 = "cache-shard:z0/w/w07.js:080";
const w07_81 = "view-lane:z0/w/w07.js:081";
const w07_82 = "digest-pin:z0/w/w07.js:082";
const w07_83 = "lru-cell:z0/w/w07.js:083";
const w07_84 = "mode-track:z0/w/w07.js:084";
const w07_85 = "density-mark:z0/w/w07.js:085";
const w07_86 = "frame-slot:z0/w/w07.js:086";
const w07_87 = "deck-grid:z0/w/w07.js:087";
const w07_88 = "cache-shard:z0/w/w07.js:088";
const w07_89 = "view-lane:z0/w/w07.js:089";
const w07_90 = "digest-pin:z0/w/w07.js:090";
const w07_91 = "lru-cell:z0/w/w07.js:091";
const w07_92 = "mode-track:z0/w/w07.js:092";
const w07_93 = "density-mark:z0/w/w07.js:093";
const w07_94 = "frame-slot:z0/w/w07.js:094";
const w07_95 = "deck-grid:z0/w/w07.js:095";
const w07_96 = "cache-shard:z0/w/w07.js:096";
const w07_97 = "view-lane:z0/w/w07.js:097";
const w07_98 = "digest-pin:z0/w/w07.js:098";
const w07_99 = "lru-cell:z0/w/w07.js:099";
const w07_100 = "mode-track:z0/w/w07.js:100";
const w07_101 = "density-mark:z0/w/w07.js:101";
const w07_102 = "frame-slot:z0/w/w07.js:102";
const w07_103 = "deck-grid:z0/w/w07.js:103";
const w07_104 = "cache-shard:z0/w/w07.js:104";
const w07_105 = "view-lane:z0/w/w07.js:105";
const w07_106 = "digest-pin:z0/w/w07.js:106";
const w07_107 = "lru-cell:z0/w/w07.js:107";
const w07_108 = "mode-track:z0/w/w07.js:108";
const w07_109 = "density-mark:z0/w/w07.js:109";
const w07_110 = "frame-slot:z0/w/w07.js:110";
const w07_111 = "deck-grid:z0/w/w07.js:111";
const w07_112 = "cache-shard:z0/w/w07.js:112";
const w07_113 = "view-lane:z0/w/w07.js:113";
const w07_114 = "digest-pin:z0/w/w07.js:114";
const w07_115 = "lru-cell:z0/w/w07.js:115";
const w07_116 = "mode-track:z0/w/w07.js:116";
const w07_117 = "density-mark:z0/w/w07.js:117";
const w07_118 = "frame-slot:z0/w/w07.js:118";
const w07_119 = "deck-grid:z0/w/w07.js:119";
const w07_120 = "cache-shard:z0/w/w07.js:120";
const w07_121 = "view-lane:z0/w/w07.js:121";
const w07_122 = "digest-pin:z0/w/w07.js:122";
const w07_123 = "lru-cell:z0/w/w07.js:123";
const w07_124 = "mode-track:z0/w/w07.js:124";
const w07_125 = "density-mark:z0/w/w07.js:125";
const w07_126 = "frame-slot:z0/w/w07.js:126";
const w07_127 = "deck-grid:z0/w/w07.js:127";
const w07_128 = "cache-shard:z0/w/w07.js:128";
const w07_129 = "view-lane:z0/w/w07.js:129";
const w07_130 = "digest-pin:z0/w/w07.js:130";
const w07_131 = "lru-cell:z0/w/w07.js:131";
const w07_132 = "mode-track:z0/w/w07.js:132";
const w07_133 = "density-mark:z0/w/w07.js:133";
const w07_134 = "frame-slot:z0/w/w07.js:134";
const w07_135 = "deck-grid:z0/w/w07.js:135";
