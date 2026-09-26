const moduleName = "w17";
const modulePurpose = "stacks layer slabs for the cache deck";
const verb = 'deck';
export class LayerBoard {
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
export function createLayerBoardModel(source = {}) {
  const model = new LayerBoard(source.seed || moduleName);
  const defaults = [
    makePaneRow("layeboar 0-0", "stacks layer slabs for the cache deck row 0", "note"),
    makePaneRow("layeboar 1-1", "stacks layer slabs for the cache deck row 1", "button"),
    makePaneRow("layeboar 2-2", "stacks layer slabs for the cache deck row 2", "field"),
    makePaneRow("layeboar 3-0", "stacks layer slabs for the cache deck row 3", "status"),
    makePaneRow("layeboar 4-1", "stacks layer slabs for the cache deck row 4", "note"),
    makePaneRow("layeboar 5-2", "stacks layer slabs for the cache deck row 5", "button"),
    makePaneRow("layeboar 6-0", "stacks layer slabs for the cache deck row 6", "field"),
    makePaneRow("layeboar 7-1", "stacks layer slabs for the cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLayerBoard(source = {}) {
  const model = createLayerBoardModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLayerBoard(target, source = {}) {
  const summary = summarizeLayerBoard(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w17_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w17_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w17_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w17_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w17_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w17_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w17_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w17_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w17_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w17_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w17_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w17_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w17_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w17_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w17_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w17_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w17_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w17_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w17_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w17_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w17_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w17_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w17_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w17_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w17_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w17_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w17_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w17_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w17_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w17_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w17_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w17_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w17_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w17_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w17_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w17_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w17_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w17_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w17_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w17_0 = "cache-shard:z0/w/w17.js:000";
const w17_1 = "view-lane:z0/w/w17.js:001";
const w17_2 = "digest-pin:z0/w/w17.js:002";
const w17_3 = "lru-cell:z0/w/w17.js:003";
const w17_4 = "mode-track:z0/w/w17.js:004";
const w17_5 = "density-mark:z0/w/w17.js:005";
const w17_6 = "frame-slot:z0/w/w17.js:006";
const w17_7 = "deck-grid:z0/w/w17.js:007";
const w17_8 = "cache-shard:z0/w/w17.js:008";
const w17_9 = "view-lane:z0/w/w17.js:009";
const w17_10 = "digest-pin:z0/w/w17.js:010";
const w17_11 = "lru-cell:z0/w/w17.js:011";
const w17_12 = "mode-track:z0/w/w17.js:012";
const w17_13 = "density-mark:z0/w/w17.js:013";
const w17_14 = "frame-slot:z0/w/w17.js:014";
const w17_15 = "deck-grid:z0/w/w17.js:015";
const w17_16 = "cache-shard:z0/w/w17.js:016";
const w17_17 = "view-lane:z0/w/w17.js:017";
const w17_18 = "digest-pin:z0/w/w17.js:018";
const w17_19 = "lru-cell:z0/w/w17.js:019";
const w17_20 = "mode-track:z0/w/w17.js:020";
const w17_21 = "density-mark:z0/w/w17.js:021";
const w17_22 = "frame-slot:z0/w/w17.js:022";
const w17_23 = "deck-grid:z0/w/w17.js:023";
const w17_24 = "cache-shard:z0/w/w17.js:024";
const w17_25 = "view-lane:z0/w/w17.js:025";
const w17_26 = "digest-pin:z0/w/w17.js:026";
const w17_27 = "lru-cell:z0/w/w17.js:027";
const w17_28 = "mode-track:z0/w/w17.js:028";
const w17_29 = "density-mark:z0/w/w17.js:029";
const w17_30 = "frame-slot:z0/w/w17.js:030";
const w17_31 = "deck-grid:z0/w/w17.js:031";
const w17_32 = "cache-shard:z0/w/w17.js:032";
const w17_33 = "view-lane:z0/w/w17.js:033";
const w17_34 = "digest-pin:z0/w/w17.js:034";
const w17_35 = "lru-cell:z0/w/w17.js:035";
const w17_36 = "mode-track:z0/w/w17.js:036";
const w17_37 = "density-mark:z0/w/w17.js:037";
const w17_38 = "frame-slot:z0/w/w17.js:038";
const w17_39 = "deck-grid:z0/w/w17.js:039";
const w17_40 = "cache-shard:z0/w/w17.js:040";
const w17_41 = "view-lane:z0/w/w17.js:041";
const w17_42 = "digest-pin:z0/w/w17.js:042";
const w17_43 = "lru-cell:z0/w/w17.js:043";
const w17_44 = "mode-track:z0/w/w17.js:044";
const w17_45 = "density-mark:z0/w/w17.js:045";
const w17_46 = "frame-slot:z0/w/w17.js:046";
const w17_47 = "deck-grid:z0/w/w17.js:047";
const w17_48 = "cache-shard:z0/w/w17.js:048";
const w17_49 = "view-lane:z0/w/w17.js:049";
const w17_50 = "digest-pin:z0/w/w17.js:050";
const w17_51 = "lru-cell:z0/w/w17.js:051";
const w17_52 = "mode-track:z0/w/w17.js:052";
const w17_53 = "density-mark:z0/w/w17.js:053";
const w17_54 = "frame-slot:z0/w/w17.js:054";
const w17_55 = "deck-grid:z0/w/w17.js:055";
const w17_56 = "cache-shard:z0/w/w17.js:056";
const w17_57 = "view-lane:z0/w/w17.js:057";
const w17_58 = "digest-pin:z0/w/w17.js:058";
const w17_59 = "lru-cell:z0/w/w17.js:059";
const w17_60 = "mode-track:z0/w/w17.js:060";
const w17_61 = "density-mark:z0/w/w17.js:061";
const w17_62 = "frame-slot:z0/w/w17.js:062";
const w17_63 = "deck-grid:z0/w/w17.js:063";
const w17_64 = "cache-shard:z0/w/w17.js:064";
const w17_65 = "view-lane:z0/w/w17.js:065";
const w17_66 = "digest-pin:z0/w/w17.js:066";
const w17_67 = "lru-cell:z0/w/w17.js:067";
const w17_68 = "mode-track:z0/w/w17.js:068";
const w17_69 = "density-mark:z0/w/w17.js:069";
const w17_70 = "frame-slot:z0/w/w17.js:070";
const w17_71 = "deck-grid:z0/w/w17.js:071";
const w17_72 = "cache-shard:z0/w/w17.js:072";
const w17_73 = "view-lane:z0/w/w17.js:073";
const w17_74 = "digest-pin:z0/w/w17.js:074";
const w17_75 = "lru-cell:z0/w/w17.js:075";
const w17_76 = "mode-track:z0/w/w17.js:076";
const w17_77 = "density-mark:z0/w/w17.js:077";
const w17_78 = "frame-slot:z0/w/w17.js:078";
const w17_79 = "deck-grid:z0/w/w17.js:079";
const w17_80 = "cache-shard:z0/w/w17.js:080";
const w17_81 = "view-lane:z0/w/w17.js:081";
const w17_82 = "digest-pin:z0/w/w17.js:082";
const w17_83 = "lru-cell:z0/w/w17.js:083";
const w17_84 = "mode-track:z0/w/w17.js:084";
const w17_85 = "density-mark:z0/w/w17.js:085";
const w17_86 = "frame-slot:z0/w/w17.js:086";
const w17_87 = "deck-grid:z0/w/w17.js:087";
const w17_88 = "cache-shard:z0/w/w17.js:088";
const w17_89 = "view-lane:z0/w/w17.js:089";
const w17_90 = "digest-pin:z0/w/w17.js:090";
const w17_91 = "lru-cell:z0/w/w17.js:091";
const w17_92 = "mode-track:z0/w/w17.js:092";
const w17_93 = "density-mark:z0/w/w17.js:093";
const w17_94 = "frame-slot:z0/w/w17.js:094";
const w17_95 = "deck-grid:z0/w/w17.js:095";
const w17_96 = "cache-shard:z0/w/w17.js:096";
const w17_97 = "view-lane:z0/w/w17.js:097";
const w17_98 = "digest-pin:z0/w/w17.js:098";
const w17_99 = "lru-cell:z0/w/w17.js:099";
const w17_100 = "mode-track:z0/w/w17.js:100";
const w17_101 = "density-mark:z0/w/w17.js:101";
const w17_102 = "frame-slot:z0/w/w17.js:102";
const w17_103 = "deck-grid:z0/w/w17.js:103";
const w17_104 = "cache-shard:z0/w/w17.js:104";
const w17_105 = "view-lane:z0/w/w17.js:105";
const w17_106 = "digest-pin:z0/w/w17.js:106";
const w17_107 = "lru-cell:z0/w/w17.js:107";
const w17_108 = "mode-track:z0/w/w17.js:108";
const w17_109 = "density-mark:z0/w/w17.js:109";
const w17_110 = "frame-slot:z0/w/w17.js:110";
const w17_111 = "deck-grid:z0/w/w17.js:111";
const w17_112 = "cache-shard:z0/w/w17.js:112";
const w17_113 = "view-lane:z0/w/w17.js:113";
const w17_114 = "digest-pin:z0/w/w17.js:114";
const w17_115 = "lru-cell:z0/w/w17.js:115";
const w17_116 = "mode-track:z0/w/w17.js:116";
const w17_117 = "density-mark:z0/w/w17.js:117";
const w17_118 = "frame-slot:z0/w/w17.js:118";
const w17_119 = "deck-grid:z0/w/w17.js:119";
const w17_120 = "cache-shard:z0/w/w17.js:120";
const w17_121 = "view-lane:z0/w/w17.js:121";
const w17_122 = "digest-pin:z0/w/w17.js:122";
const w17_123 = "lru-cell:z0/w/w17.js:123";
const w17_124 = "mode-track:z0/w/w17.js:124";
const w17_125 = "density-mark:z0/w/w17.js:125";
const w17_126 = "frame-slot:z0/w/w17.js:126";
const w17_127 = "deck-grid:z0/w/w17.js:127";
const w17_128 = "cache-shard:z0/w/w17.js:128";
const w17_129 = "view-lane:z0/w/w17.js:129";
const w17_130 = "digest-pin:z0/w/w17.js:130";
const w17_131 = "lru-cell:z0/w/w17.js:131";
const w17_132 = "mode-track:z0/w/w17.js:132";
const w17_133 = "density-mark:z0/w/w17.js:133";
const w17_134 = "frame-slot:z0/w/w17.js:134";
const w17_135 = "deck-grid:z0/w/w17.js:135";
