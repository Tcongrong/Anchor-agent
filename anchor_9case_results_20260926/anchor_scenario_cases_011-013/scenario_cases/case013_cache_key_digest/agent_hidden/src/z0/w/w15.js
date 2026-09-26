const moduleName = "w15";
const modulePurpose = "arranges pane cells for the cache deck";
const verb = 'deck';
export class PaneBoard {
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
export function createPaneBoardModel(source = {}) {
  const model = new PaneBoard(source.seed || moduleName);
  const defaults = [
    makePaneRow("paneboar 0-0", "arranges pane cells for the cache deck row 0", "note"),
    makePaneRow("paneboar 1-1", "arranges pane cells for the cache deck row 1", "button"),
    makePaneRow("paneboar 2-2", "arranges pane cells for the cache deck row 2", "field"),
    makePaneRow("paneboar 3-0", "arranges pane cells for the cache deck row 3", "status"),
    makePaneRow("paneboar 4-1", "arranges pane cells for the cache deck row 4", "note"),
    makePaneRow("paneboar 5-2", "arranges pane cells for the cache deck row 5", "button"),
    makePaneRow("paneboar 6-0", "arranges pane cells for the cache deck row 6", "field"),
    makePaneRow("paneboar 7-1", "arranges pane cells for the cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePaneBoard(source = {}) {
  const model = createPaneBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPaneBoard(target, source = {}) {
  const summary = summarizePaneBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w15_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w15_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w15_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w15_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w15_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w15_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w15_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w15_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w15_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w15_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w15_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w15_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w15_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w15_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w15_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w15_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w15_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w15_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w15_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w15_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w15_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w15_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w15_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w15_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w15_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w15_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w15_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w15_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w15_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w15_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w15_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w15_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w15_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w15_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w15_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w15_0 = "cache-shard:z0/w/w15.js:000";
const w15_1 = "view-lane:z0/w/w15.js:001";
const w15_2 = "digest-pin:z0/w/w15.js:002";
const w15_3 = "lru-cell:z0/w/w15.js:003";
const w15_4 = "mode-track:z0/w/w15.js:004";
const w15_5 = "density-mark:z0/w/w15.js:005";
const w15_6 = "frame-slot:z0/w/w15.js:006";
const w15_7 = "deck-grid:z0/w/w15.js:007";
const w15_8 = "cache-shard:z0/w/w15.js:008";
const w15_9 = "view-lane:z0/w/w15.js:009";
const w15_10 = "digest-pin:z0/w/w15.js:010";
const w15_11 = "lru-cell:z0/w/w15.js:011";
const w15_12 = "mode-track:z0/w/w15.js:012";
const w15_13 = "density-mark:z0/w/w15.js:013";
const w15_14 = "frame-slot:z0/w/w15.js:014";
const w15_15 = "deck-grid:z0/w/w15.js:015";
const w15_16 = "cache-shard:z0/w/w15.js:016";
const w15_17 = "view-lane:z0/w/w15.js:017";
const w15_18 = "digest-pin:z0/w/w15.js:018";
const w15_19 = "lru-cell:z0/w/w15.js:019";
const w15_20 = "mode-track:z0/w/w15.js:020";
const w15_21 = "density-mark:z0/w/w15.js:021";
const w15_22 = "frame-slot:z0/w/w15.js:022";
const w15_23 = "deck-grid:z0/w/w15.js:023";
const w15_24 = "cache-shard:z0/w/w15.js:024";
const w15_25 = "view-lane:z0/w/w15.js:025";
const w15_26 = "digest-pin:z0/w/w15.js:026";
const w15_27 = "lru-cell:z0/w/w15.js:027";
const w15_28 = "mode-track:z0/w/w15.js:028";
const w15_29 = "density-mark:z0/w/w15.js:029";
const w15_30 = "frame-slot:z0/w/w15.js:030";
const w15_31 = "deck-grid:z0/w/w15.js:031";
const w15_32 = "cache-shard:z0/w/w15.js:032";
const w15_33 = "view-lane:z0/w/w15.js:033";
const w15_34 = "digest-pin:z0/w/w15.js:034";
const w15_35 = "lru-cell:z0/w/w15.js:035";
const w15_36 = "mode-track:z0/w/w15.js:036";
const w15_37 = "density-mark:z0/w/w15.js:037";
const w15_38 = "frame-slot:z0/w/w15.js:038";
const w15_39 = "deck-grid:z0/w/w15.js:039";
const w15_40 = "cache-shard:z0/w/w15.js:040";
const w15_41 = "view-lane:z0/w/w15.js:041";
const w15_42 = "digest-pin:z0/w/w15.js:042";
const w15_43 = "lru-cell:z0/w/w15.js:043";
const w15_44 = "mode-track:z0/w/w15.js:044";
const w15_45 = "density-mark:z0/w/w15.js:045";
const w15_46 = "frame-slot:z0/w/w15.js:046";
const w15_47 = "deck-grid:z0/w/w15.js:047";
const w15_48 = "cache-shard:z0/w/w15.js:048";
const w15_49 = "view-lane:z0/w/w15.js:049";
const w15_50 = "digest-pin:z0/w/w15.js:050";
const w15_51 = "lru-cell:z0/w/w15.js:051";
const w15_52 = "mode-track:z0/w/w15.js:052";
const w15_53 = "density-mark:z0/w/w15.js:053";
const w15_54 = "frame-slot:z0/w/w15.js:054";
const w15_55 = "deck-grid:z0/w/w15.js:055";
const w15_56 = "cache-shard:z0/w/w15.js:056";
const w15_57 = "view-lane:z0/w/w15.js:057";
const w15_58 = "digest-pin:z0/w/w15.js:058";
const w15_59 = "lru-cell:z0/w/w15.js:059";
const w15_60 = "mode-track:z0/w/w15.js:060";
const w15_61 = "density-mark:z0/w/w15.js:061";
const w15_62 = "frame-slot:z0/w/w15.js:062";
const w15_63 = "deck-grid:z0/w/w15.js:063";
const w15_64 = "cache-shard:z0/w/w15.js:064";
const w15_65 = "view-lane:z0/w/w15.js:065";
const w15_66 = "digest-pin:z0/w/w15.js:066";
const w15_67 = "lru-cell:z0/w/w15.js:067";
const w15_68 = "mode-track:z0/w/w15.js:068";
const w15_69 = "density-mark:z0/w/w15.js:069";
const w15_70 = "frame-slot:z0/w/w15.js:070";
const w15_71 = "deck-grid:z0/w/w15.js:071";
const w15_72 = "cache-shard:z0/w/w15.js:072";
const w15_73 = "view-lane:z0/w/w15.js:073";
const w15_74 = "digest-pin:z0/w/w15.js:074";
const w15_75 = "lru-cell:z0/w/w15.js:075";
const w15_76 = "mode-track:z0/w/w15.js:076";
const w15_77 = "density-mark:z0/w/w15.js:077";
const w15_78 = "frame-slot:z0/w/w15.js:078";
const w15_79 = "deck-grid:z0/w/w15.js:079";
const w15_80 = "cache-shard:z0/w/w15.js:080";
const w15_81 = "view-lane:z0/w/w15.js:081";
const w15_82 = "digest-pin:z0/w/w15.js:082";
const w15_83 = "lru-cell:z0/w/w15.js:083";
const w15_84 = "mode-track:z0/w/w15.js:084";
const w15_85 = "density-mark:z0/w/w15.js:085";
const w15_86 = "frame-slot:z0/w/w15.js:086";
const w15_87 = "deck-grid:z0/w/w15.js:087";
const w15_88 = "cache-shard:z0/w/w15.js:088";
const w15_89 = "view-lane:z0/w/w15.js:089";
const w15_90 = "digest-pin:z0/w/w15.js:090";
const w15_91 = "lru-cell:z0/w/w15.js:091";
const w15_92 = "mode-track:z0/w/w15.js:092";
const w15_93 = "density-mark:z0/w/w15.js:093";
const w15_94 = "frame-slot:z0/w/w15.js:094";
const w15_95 = "deck-grid:z0/w/w15.js:095";
const w15_96 = "cache-shard:z0/w/w15.js:096";
const w15_97 = "view-lane:z0/w/w15.js:097";
const w15_98 = "digest-pin:z0/w/w15.js:098";
const w15_99 = "lru-cell:z0/w/w15.js:099";
const w15_100 = "mode-track:z0/w/w15.js:100";
const w15_101 = "density-mark:z0/w/w15.js:101";
const w15_102 = "frame-slot:z0/w/w15.js:102";
const w15_103 = "deck-grid:z0/w/w15.js:103";
const w15_104 = "cache-shard:z0/w/w15.js:104";
const w15_105 = "view-lane:z0/w/w15.js:105";
const w15_106 = "digest-pin:z0/w/w15.js:106";
const w15_107 = "lru-cell:z0/w/w15.js:107";
const w15_108 = "mode-track:z0/w/w15.js:108";
const w15_109 = "density-mark:z0/w/w15.js:109";
const w15_110 = "frame-slot:z0/w/w15.js:110";
const w15_111 = "deck-grid:z0/w/w15.js:111";
const w15_112 = "cache-shard:z0/w/w15.js:112";
const w15_113 = "view-lane:z0/w/w15.js:113";
const w15_114 = "digest-pin:z0/w/w15.js:114";
const w15_115 = "lru-cell:z0/w/w15.js:115";
const w15_116 = "mode-track:z0/w/w15.js:116";
const w15_117 = "density-mark:z0/w/w15.js:117";
const w15_118 = "frame-slot:z0/w/w15.js:118";
const w15_119 = "deck-grid:z0/w/w15.js:119";
const w15_120 = "cache-shard:z0/w/w15.js:120";
const w15_121 = "view-lane:z0/w/w15.js:121";
const w15_122 = "digest-pin:z0/w/w15.js:122";
const w15_123 = "lru-cell:z0/w/w15.js:123";
const w15_124 = "mode-track:z0/w/w15.js:124";
const w15_125 = "density-mark:z0/w/w15.js:125";
const w15_126 = "frame-slot:z0/w/w15.js:126";
const w15_127 = "deck-grid:z0/w/w15.js:127";
const w15_128 = "cache-shard:z0/w/w15.js:128";
const w15_129 = "view-lane:z0/w/w15.js:129";
const w15_130 = "digest-pin:z0/w/w15.js:130";
const w15_131 = "lru-cell:z0/w/w15.js:131";
const w15_132 = "mode-track:z0/w/w15.js:132";
const w15_133 = "density-mark:z0/w/w15.js:133";
const w15_134 = "frame-slot:z0/w/w15.js:134";
const w15_135 = "deck-grid:z0/w/w15.js:135";
