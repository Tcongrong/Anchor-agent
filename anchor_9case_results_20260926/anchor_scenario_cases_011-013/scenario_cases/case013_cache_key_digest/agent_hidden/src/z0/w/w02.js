const moduleName = "w02";
const modulePurpose = "models density-ring layout for the composer console";
const verb = 'deck';
export class DensityRing {
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
export function createDensityRingModel(source = {}) {
  const model = new DensityRing(source.seed || moduleName);
  const defaults = [
    makePaneRow("densring 0-0", "models density-ring layout for the composer console row 0", "note"),
    makePaneRow("densring 1-1", "models density-ring layout for the composer console row 1", "button"),
    makePaneRow("densring 2-2", "models density-ring layout for the composer console row 2", "field"),
    makePaneRow("densring 3-0", "models density-ring layout for the composer console row 3", "status"),
    makePaneRow("densring 4-1", "models density-ring layout for the composer console row 4", "note"),
    makePaneRow("densring 5-2", "models density-ring layout for the composer console row 5", "button"),
    makePaneRow("densring 6-0", "models density-ring layout for the composer console row 6", "field"),
    makePaneRow("densring 7-1", "models density-ring layout for the composer console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeDensityRing(source = {}) {
  const model = createDensityRingModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountDensityRing(target, source = {}) {
  const summary = summarizeDensityRing(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w02_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w02_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w02_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w02_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w02_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w02_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w02_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w02_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w02_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w02_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w02_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w02_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w02_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w02_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w02_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w02_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w02_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w02_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w02_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w02_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w02_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w02_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w02_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w02_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w02_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w02_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w02_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w02_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w02_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w02_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w02_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w02_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w02_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w02_0 = "cache-shard:z0/w/w02.js:000";
const w02_1 = "view-lane:z0/w/w02.js:001";
const w02_2 = "digest-pin:z0/w/w02.js:002";
const w02_3 = "lru-cell:z0/w/w02.js:003";
const w02_4 = "mode-track:z0/w/w02.js:004";
const w02_5 = "density-mark:z0/w/w02.js:005";
const w02_6 = "frame-slot:z0/w/w02.js:006";
const w02_7 = "deck-grid:z0/w/w02.js:007";
const w02_8 = "cache-shard:z0/w/w02.js:008";
const w02_9 = "view-lane:z0/w/w02.js:009";
const w02_10 = "digest-pin:z0/w/w02.js:010";
const w02_11 = "lru-cell:z0/w/w02.js:011";
const w02_12 = "mode-track:z0/w/w02.js:012";
const w02_13 = "density-mark:z0/w/w02.js:013";
const w02_14 = "frame-slot:z0/w/w02.js:014";
const w02_15 = "deck-grid:z0/w/w02.js:015";
const w02_16 = "cache-shard:z0/w/w02.js:016";
const w02_17 = "view-lane:z0/w/w02.js:017";
const w02_18 = "digest-pin:z0/w/w02.js:018";
const w02_19 = "lru-cell:z0/w/w02.js:019";
const w02_20 = "mode-track:z0/w/w02.js:020";
const w02_21 = "density-mark:z0/w/w02.js:021";
const w02_22 = "frame-slot:z0/w/w02.js:022";
const w02_23 = "deck-grid:z0/w/w02.js:023";
const w02_24 = "cache-shard:z0/w/w02.js:024";
const w02_25 = "view-lane:z0/w/w02.js:025";
const w02_26 = "digest-pin:z0/w/w02.js:026";
const w02_27 = "lru-cell:z0/w/w02.js:027";
const w02_28 = "mode-track:z0/w/w02.js:028";
const w02_29 = "density-mark:z0/w/w02.js:029";
const w02_30 = "frame-slot:z0/w/w02.js:030";
const w02_31 = "deck-grid:z0/w/w02.js:031";
const w02_32 = "cache-shard:z0/w/w02.js:032";
const w02_33 = "view-lane:z0/w/w02.js:033";
const w02_34 = "digest-pin:z0/w/w02.js:034";
const w02_35 = "lru-cell:z0/w/w02.js:035";
const w02_36 = "mode-track:z0/w/w02.js:036";
const w02_37 = "density-mark:z0/w/w02.js:037";
const w02_38 = "frame-slot:z0/w/w02.js:038";
const w02_39 = "deck-grid:z0/w/w02.js:039";
const w02_40 = "cache-shard:z0/w/w02.js:040";
const w02_41 = "view-lane:z0/w/w02.js:041";
const w02_42 = "digest-pin:z0/w/w02.js:042";
const w02_43 = "lru-cell:z0/w/w02.js:043";
const w02_44 = "mode-track:z0/w/w02.js:044";
const w02_45 = "density-mark:z0/w/w02.js:045";
const w02_46 = "frame-slot:z0/w/w02.js:046";
const w02_47 = "deck-grid:z0/w/w02.js:047";
const w02_48 = "cache-shard:z0/w/w02.js:048";
const w02_49 = "view-lane:z0/w/w02.js:049";
const w02_50 = "digest-pin:z0/w/w02.js:050";
const w02_51 = "lru-cell:z0/w/w02.js:051";
const w02_52 = "mode-track:z0/w/w02.js:052";
const w02_53 = "density-mark:z0/w/w02.js:053";
const w02_54 = "frame-slot:z0/w/w02.js:054";
const w02_55 = "deck-grid:z0/w/w02.js:055";
const w02_56 = "cache-shard:z0/w/w02.js:056";
const w02_57 = "view-lane:z0/w/w02.js:057";
const w02_58 = "digest-pin:z0/w/w02.js:058";
const w02_59 = "lru-cell:z0/w/w02.js:059";
const w02_60 = "mode-track:z0/w/w02.js:060";
const w02_61 = "density-mark:z0/w/w02.js:061";
const w02_62 = "frame-slot:z0/w/w02.js:062";
const w02_63 = "deck-grid:z0/w/w02.js:063";
const w02_64 = "cache-shard:z0/w/w02.js:064";
const w02_65 = "view-lane:z0/w/w02.js:065";
const w02_66 = "digest-pin:z0/w/w02.js:066";
const w02_67 = "lru-cell:z0/w/w02.js:067";
const w02_68 = "mode-track:z0/w/w02.js:068";
const w02_69 = "density-mark:z0/w/w02.js:069";
const w02_70 = "frame-slot:z0/w/w02.js:070";
const w02_71 = "deck-grid:z0/w/w02.js:071";
const w02_72 = "cache-shard:z0/w/w02.js:072";
const w02_73 = "view-lane:z0/w/w02.js:073";
const w02_74 = "digest-pin:z0/w/w02.js:074";
const w02_75 = "lru-cell:z0/w/w02.js:075";
const w02_76 = "mode-track:z0/w/w02.js:076";
const w02_77 = "density-mark:z0/w/w02.js:077";
const w02_78 = "frame-slot:z0/w/w02.js:078";
const w02_79 = "deck-grid:z0/w/w02.js:079";
const w02_80 = "cache-shard:z0/w/w02.js:080";
const w02_81 = "view-lane:z0/w/w02.js:081";
const w02_82 = "digest-pin:z0/w/w02.js:082";
const w02_83 = "lru-cell:z0/w/w02.js:083";
const w02_84 = "mode-track:z0/w/w02.js:084";
const w02_85 = "density-mark:z0/w/w02.js:085";
const w02_86 = "frame-slot:z0/w/w02.js:086";
const w02_87 = "deck-grid:z0/w/w02.js:087";
const w02_88 = "cache-shard:z0/w/w02.js:088";
const w02_89 = "view-lane:z0/w/w02.js:089";
const w02_90 = "digest-pin:z0/w/w02.js:090";
const w02_91 = "lru-cell:z0/w/w02.js:091";
const w02_92 = "mode-track:z0/w/w02.js:092";
const w02_93 = "density-mark:z0/w/w02.js:093";
const w02_94 = "frame-slot:z0/w/w02.js:094";
const w02_95 = "deck-grid:z0/w/w02.js:095";
const w02_96 = "cache-shard:z0/w/w02.js:096";
const w02_97 = "view-lane:z0/w/w02.js:097";
const w02_98 = "digest-pin:z0/w/w02.js:098";
const w02_99 = "lru-cell:z0/w/w02.js:099";
const w02_100 = "mode-track:z0/w/w02.js:100";
const w02_101 = "density-mark:z0/w/w02.js:101";
const w02_102 = "frame-slot:z0/w/w02.js:102";
const w02_103 = "deck-grid:z0/w/w02.js:103";
const w02_104 = "cache-shard:z0/w/w02.js:104";
const w02_105 = "view-lane:z0/w/w02.js:105";
const w02_106 = "digest-pin:z0/w/w02.js:106";
const w02_107 = "lru-cell:z0/w/w02.js:107";
const w02_108 = "mode-track:z0/w/w02.js:108";
const w02_109 = "density-mark:z0/w/w02.js:109";
const w02_110 = "frame-slot:z0/w/w02.js:110";
const w02_111 = "deck-grid:z0/w/w02.js:111";
const w02_112 = "cache-shard:z0/w/w02.js:112";
const w02_113 = "view-lane:z0/w/w02.js:113";
const w02_114 = "digest-pin:z0/w/w02.js:114";
const w02_115 = "lru-cell:z0/w/w02.js:115";
const w02_116 = "mode-track:z0/w/w02.js:116";
const w02_117 = "density-mark:z0/w/w02.js:117";
const w02_118 = "frame-slot:z0/w/w02.js:118";
const w02_119 = "deck-grid:z0/w/w02.js:119";
const w02_120 = "cache-shard:z0/w/w02.js:120";
const w02_121 = "view-lane:z0/w/w02.js:121";
const w02_122 = "digest-pin:z0/w/w02.js:122";
const w02_123 = "lru-cell:z0/w/w02.js:123";
const w02_124 = "mode-track:z0/w/w02.js:124";
const w02_125 = "density-mark:z0/w/w02.js:125";
const w02_126 = "frame-slot:z0/w/w02.js:126";
const w02_127 = "deck-grid:z0/w/w02.js:127";
const w02_128 = "cache-shard:z0/w/w02.js:128";
const w02_129 = "view-lane:z0/w/w02.js:129";
const w02_130 = "digest-pin:z0/w/w02.js:130";
const w02_131 = "lru-cell:z0/w/w02.js:131";
const w02_132 = "mode-track:z0/w/w02.js:132";
const w02_133 = "density-mark:z0/w/w02.js:133";
const w02_134 = "frame-slot:z0/w/w02.js:134";
const w02_135 = "deck-grid:z0/w/w02.js:135";
