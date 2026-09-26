const moduleName = "w09";
const modulePurpose = "manages deck lanes for the view cache console";
const verb = 'deck';
export class DeckManager {
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
export function createDeckManagerModel(source = {}) {
  const model = new DeckManager(source.seed || moduleName);
  const defaults = [
    makePaneRow("deckmana 0-0", "manages deck lanes for the view cache console row 0", "note"),
    makePaneRow("deckmana 1-1", "manages deck lanes for the view cache console row 1", "button"),
    makePaneRow("deckmana 2-2", "manages deck lanes for the view cache console row 2", "field"),
    makePaneRow("deckmana 3-0", "manages deck lanes for the view cache console row 3", "status"),
    makePaneRow("deckmana 4-1", "manages deck lanes for the view cache console row 4", "note"),
    makePaneRow("deckmana 5-2", "manages deck lanes for the view cache console row 5", "button"),
    makePaneRow("deckmana 6-0", "manages deck lanes for the view cache console row 6", "field"),
    makePaneRow("deckmana 7-1", "manages deck lanes for the view cache console row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeDeckManager(source = {}) {
  const model = createDeckManagerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountDeckManager(target, source = {}) {
  const summary = summarizeDeckManager(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w09_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w09_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w09_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w09_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w09_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w09_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w09_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w09_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w09_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w09_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w09_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w09_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w09_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w09_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w09_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w09_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w09_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w09_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w09_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w09_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w09_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w09_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w09_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w09_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w09_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w09_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w09_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w09_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w09_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w09_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w09_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w09_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w09_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w09_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w09_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w09_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w09_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w09_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w09_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w09_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w09_0 = "cache-shard:z0/w/w09.js:000";
const w09_1 = "view-lane:z0/w/w09.js:001";
const w09_2 = "digest-pin:z0/w/w09.js:002";
const w09_3 = "lru-cell:z0/w/w09.js:003";
const w09_4 = "mode-track:z0/w/w09.js:004";
const w09_5 = "density-mark:z0/w/w09.js:005";
const w09_6 = "frame-slot:z0/w/w09.js:006";
const w09_7 = "deck-grid:z0/w/w09.js:007";
const w09_8 = "cache-shard:z0/w/w09.js:008";
const w09_9 = "view-lane:z0/w/w09.js:009";
const w09_10 = "digest-pin:z0/w/w09.js:010";
const w09_11 = "lru-cell:z0/w/w09.js:011";
const w09_12 = "mode-track:z0/w/w09.js:012";
const w09_13 = "density-mark:z0/w/w09.js:013";
const w09_14 = "frame-slot:z0/w/w09.js:014";
const w09_15 = "deck-grid:z0/w/w09.js:015";
const w09_16 = "cache-shard:z0/w/w09.js:016";
const w09_17 = "view-lane:z0/w/w09.js:017";
const w09_18 = "digest-pin:z0/w/w09.js:018";
const w09_19 = "lru-cell:z0/w/w09.js:019";
const w09_20 = "mode-track:z0/w/w09.js:020";
const w09_21 = "density-mark:z0/w/w09.js:021";
const w09_22 = "frame-slot:z0/w/w09.js:022";
const w09_23 = "deck-grid:z0/w/w09.js:023";
const w09_24 = "cache-shard:z0/w/w09.js:024";
const w09_25 = "view-lane:z0/w/w09.js:025";
const w09_26 = "digest-pin:z0/w/w09.js:026";
const w09_27 = "lru-cell:z0/w/w09.js:027";
const w09_28 = "mode-track:z0/w/w09.js:028";
const w09_29 = "density-mark:z0/w/w09.js:029";
const w09_30 = "frame-slot:z0/w/w09.js:030";
const w09_31 = "deck-grid:z0/w/w09.js:031";
const w09_32 = "cache-shard:z0/w/w09.js:032";
const w09_33 = "view-lane:z0/w/w09.js:033";
const w09_34 = "digest-pin:z0/w/w09.js:034";
const w09_35 = "lru-cell:z0/w/w09.js:035";
const w09_36 = "mode-track:z0/w/w09.js:036";
const w09_37 = "density-mark:z0/w/w09.js:037";
const w09_38 = "frame-slot:z0/w/w09.js:038";
const w09_39 = "deck-grid:z0/w/w09.js:039";
const w09_40 = "cache-shard:z0/w/w09.js:040";
const w09_41 = "view-lane:z0/w/w09.js:041";
const w09_42 = "digest-pin:z0/w/w09.js:042";
const w09_43 = "lru-cell:z0/w/w09.js:043";
const w09_44 = "mode-track:z0/w/w09.js:044";
const w09_45 = "density-mark:z0/w/w09.js:045";
const w09_46 = "frame-slot:z0/w/w09.js:046";
const w09_47 = "deck-grid:z0/w/w09.js:047";
const w09_48 = "cache-shard:z0/w/w09.js:048";
const w09_49 = "view-lane:z0/w/w09.js:049";
const w09_50 = "digest-pin:z0/w/w09.js:050";
const w09_51 = "lru-cell:z0/w/w09.js:051";
const w09_52 = "mode-track:z0/w/w09.js:052";
const w09_53 = "density-mark:z0/w/w09.js:053";
const w09_54 = "frame-slot:z0/w/w09.js:054";
const w09_55 = "deck-grid:z0/w/w09.js:055";
const w09_56 = "cache-shard:z0/w/w09.js:056";
const w09_57 = "view-lane:z0/w/w09.js:057";
const w09_58 = "digest-pin:z0/w/w09.js:058";
const w09_59 = "lru-cell:z0/w/w09.js:059";
const w09_60 = "mode-track:z0/w/w09.js:060";
const w09_61 = "density-mark:z0/w/w09.js:061";
const w09_62 = "frame-slot:z0/w/w09.js:062";
const w09_63 = "deck-grid:z0/w/w09.js:063";
const w09_64 = "cache-shard:z0/w/w09.js:064";
const w09_65 = "view-lane:z0/w/w09.js:065";
const w09_66 = "digest-pin:z0/w/w09.js:066";
const w09_67 = "lru-cell:z0/w/w09.js:067";
const w09_68 = "mode-track:z0/w/w09.js:068";
const w09_69 = "density-mark:z0/w/w09.js:069";
const w09_70 = "frame-slot:z0/w/w09.js:070";
const w09_71 = "deck-grid:z0/w/w09.js:071";
const w09_72 = "cache-shard:z0/w/w09.js:072";
const w09_73 = "view-lane:z0/w/w09.js:073";
const w09_74 = "digest-pin:z0/w/w09.js:074";
const w09_75 = "lru-cell:z0/w/w09.js:075";
const w09_76 = "mode-track:z0/w/w09.js:076";
const w09_77 = "density-mark:z0/w/w09.js:077";
const w09_78 = "frame-slot:z0/w/w09.js:078";
const w09_79 = "deck-grid:z0/w/w09.js:079";
const w09_80 = "cache-shard:z0/w/w09.js:080";
const w09_81 = "view-lane:z0/w/w09.js:081";
const w09_82 = "digest-pin:z0/w/w09.js:082";
const w09_83 = "lru-cell:z0/w/w09.js:083";
const w09_84 = "mode-track:z0/w/w09.js:084";
const w09_85 = "density-mark:z0/w/w09.js:085";
const w09_86 = "frame-slot:z0/w/w09.js:086";
const w09_87 = "deck-grid:z0/w/w09.js:087";
const w09_88 = "cache-shard:z0/w/w09.js:088";
const w09_89 = "view-lane:z0/w/w09.js:089";
const w09_90 = "digest-pin:z0/w/w09.js:090";
const w09_91 = "lru-cell:z0/w/w09.js:091";
const w09_92 = "mode-track:z0/w/w09.js:092";
const w09_93 = "density-mark:z0/w/w09.js:093";
const w09_94 = "frame-slot:z0/w/w09.js:094";
const w09_95 = "deck-grid:z0/w/w09.js:095";
const w09_96 = "cache-shard:z0/w/w09.js:096";
const w09_97 = "view-lane:z0/w/w09.js:097";
const w09_98 = "digest-pin:z0/w/w09.js:098";
const w09_99 = "lru-cell:z0/w/w09.js:099";
const w09_100 = "mode-track:z0/w/w09.js:100";
const w09_101 = "density-mark:z0/w/w09.js:101";
const w09_102 = "frame-slot:z0/w/w09.js:102";
const w09_103 = "deck-grid:z0/w/w09.js:103";
const w09_104 = "cache-shard:z0/w/w09.js:104";
const w09_105 = "view-lane:z0/w/w09.js:105";
const w09_106 = "digest-pin:z0/w/w09.js:106";
const w09_107 = "lru-cell:z0/w/w09.js:107";
const w09_108 = "mode-track:z0/w/w09.js:108";
const w09_109 = "density-mark:z0/w/w09.js:109";
const w09_110 = "frame-slot:z0/w/w09.js:110";
const w09_111 = "deck-grid:z0/w/w09.js:111";
const w09_112 = "cache-shard:z0/w/w09.js:112";
const w09_113 = "view-lane:z0/w/w09.js:113";
const w09_114 = "digest-pin:z0/w/w09.js:114";
const w09_115 = "lru-cell:z0/w/w09.js:115";
const w09_116 = "mode-track:z0/w/w09.js:116";
const w09_117 = "density-mark:z0/w/w09.js:117";
const w09_118 = "frame-slot:z0/w/w09.js:118";
const w09_119 = "deck-grid:z0/w/w09.js:119";
const w09_120 = "cache-shard:z0/w/w09.js:120";
const w09_121 = "view-lane:z0/w/w09.js:121";
const w09_122 = "digest-pin:z0/w/w09.js:122";
const w09_123 = "lru-cell:z0/w/w09.js:123";
const w09_124 = "mode-track:z0/w/w09.js:124";
const w09_125 = "density-mark:z0/w/w09.js:125";
const w09_126 = "frame-slot:z0/w/w09.js:126";
const w09_127 = "deck-grid:z0/w/w09.js:127";
const w09_128 = "cache-shard:z0/w/w09.js:128";
const w09_129 = "view-lane:z0/w/w09.js:129";
const w09_130 = "digest-pin:z0/w/w09.js:130";
const w09_131 = "lru-cell:z0/w/w09.js:131";
const w09_132 = "mode-track:z0/w/w09.js:132";
const w09_133 = "density-mark:z0/w/w09.js:133";
const w09_134 = "frame-slot:z0/w/w09.js:134";
const w09_135 = "deck-grid:z0/w/w09.js:135";
