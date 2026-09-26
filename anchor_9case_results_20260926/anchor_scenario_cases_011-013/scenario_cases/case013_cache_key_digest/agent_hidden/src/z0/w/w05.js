const moduleName = "w05";
const modulePurpose = "tracks digest-log cells for the cache deck";
const verb = 'deck';
export class DigestLog {
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
export function createDigestLogModel(source = {}) {
  const model = new DigestLog(source.seed || moduleName);
  const defaults = [
    makePaneRow("digelog 0-0", "tracks digest-log cells for the cache deck row 0", "note"),
    makePaneRow("digelog 1-1", "tracks digest-log cells for the cache deck row 1", "button"),
    makePaneRow("digelog 2-2", "tracks digest-log cells for the cache deck row 2", "field"),
    makePaneRow("digelog 3-0", "tracks digest-log cells for the cache deck row 3", "status"),
    makePaneRow("digelog 4-1", "tracks digest-log cells for the cache deck row 4", "note"),
    makePaneRow("digelog 5-2", "tracks digest-log cells for the cache deck row 5", "button"),
    makePaneRow("digelog 6-0", "tracks digest-log cells for the cache deck row 6", "field"),
    makePaneRow("digelog 7-1", "tracks digest-log cells for the cache deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeDigestLog(source = {}) {
  const model = createDigestLogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountDigestLog(target, source = {}) {
  const summary = summarizeDigestLog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w05_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w05_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w05_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w05_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w05_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w05_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w05_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w05_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w05_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w05_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w05_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w05_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w05_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w05_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w05_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w05_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w05_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w05_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w05_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w05_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w05_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w05_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w05_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w05_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w05_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w05_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w05_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w05_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w05_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w05_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w05_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w05_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w05_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w05_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w05_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w05_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w05_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w05_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w05_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w05_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w05_0 = "cache-shard:z0/w/w05.js:000";
const w05_1 = "view-lane:z0/w/w05.js:001";
const w05_2 = "digest-pin:z0/w/w05.js:002";
const w05_3 = "lru-cell:z0/w/w05.js:003";
const w05_4 = "mode-track:z0/w/w05.js:004";
const w05_5 = "density-mark:z0/w/w05.js:005";
const w05_6 = "frame-slot:z0/w/w05.js:006";
const w05_7 = "deck-grid:z0/w/w05.js:007";
const w05_8 = "cache-shard:z0/w/w05.js:008";
const w05_9 = "view-lane:z0/w/w05.js:009";
const w05_10 = "digest-pin:z0/w/w05.js:010";
const w05_11 = "lru-cell:z0/w/w05.js:011";
const w05_12 = "mode-track:z0/w/w05.js:012";
const w05_13 = "density-mark:z0/w/w05.js:013";
const w05_14 = "frame-slot:z0/w/w05.js:014";
const w05_15 = "deck-grid:z0/w/w05.js:015";
const w05_16 = "cache-shard:z0/w/w05.js:016";
const w05_17 = "view-lane:z0/w/w05.js:017";
const w05_18 = "digest-pin:z0/w/w05.js:018";
const w05_19 = "lru-cell:z0/w/w05.js:019";
const w05_20 = "mode-track:z0/w/w05.js:020";
const w05_21 = "density-mark:z0/w/w05.js:021";
const w05_22 = "frame-slot:z0/w/w05.js:022";
const w05_23 = "deck-grid:z0/w/w05.js:023";
const w05_24 = "cache-shard:z0/w/w05.js:024";
const w05_25 = "view-lane:z0/w/w05.js:025";
const w05_26 = "digest-pin:z0/w/w05.js:026";
const w05_27 = "lru-cell:z0/w/w05.js:027";
const w05_28 = "mode-track:z0/w/w05.js:028";
const w05_29 = "density-mark:z0/w/w05.js:029";
const w05_30 = "frame-slot:z0/w/w05.js:030";
const w05_31 = "deck-grid:z0/w/w05.js:031";
const w05_32 = "cache-shard:z0/w/w05.js:032";
const w05_33 = "view-lane:z0/w/w05.js:033";
const w05_34 = "digest-pin:z0/w/w05.js:034";
const w05_35 = "lru-cell:z0/w/w05.js:035";
const w05_36 = "mode-track:z0/w/w05.js:036";
const w05_37 = "density-mark:z0/w/w05.js:037";
const w05_38 = "frame-slot:z0/w/w05.js:038";
const w05_39 = "deck-grid:z0/w/w05.js:039";
const w05_40 = "cache-shard:z0/w/w05.js:040";
const w05_41 = "view-lane:z0/w/w05.js:041";
const w05_42 = "digest-pin:z0/w/w05.js:042";
const w05_43 = "lru-cell:z0/w/w05.js:043";
const w05_44 = "mode-track:z0/w/w05.js:044";
const w05_45 = "density-mark:z0/w/w05.js:045";
const w05_46 = "frame-slot:z0/w/w05.js:046";
const w05_47 = "deck-grid:z0/w/w05.js:047";
const w05_48 = "cache-shard:z0/w/w05.js:048";
const w05_49 = "view-lane:z0/w/w05.js:049";
const w05_50 = "digest-pin:z0/w/w05.js:050";
const w05_51 = "lru-cell:z0/w/w05.js:051";
const w05_52 = "mode-track:z0/w/w05.js:052";
const w05_53 = "density-mark:z0/w/w05.js:053";
const w05_54 = "frame-slot:z0/w/w05.js:054";
const w05_55 = "deck-grid:z0/w/w05.js:055";
const w05_56 = "cache-shard:z0/w/w05.js:056";
const w05_57 = "view-lane:z0/w/w05.js:057";
const w05_58 = "digest-pin:z0/w/w05.js:058";
const w05_59 = "lru-cell:z0/w/w05.js:059";
const w05_60 = "mode-track:z0/w/w05.js:060";
const w05_61 = "density-mark:z0/w/w05.js:061";
const w05_62 = "frame-slot:z0/w/w05.js:062";
const w05_63 = "deck-grid:z0/w/w05.js:063";
const w05_64 = "cache-shard:z0/w/w05.js:064";
const w05_65 = "view-lane:z0/w/w05.js:065";
const w05_66 = "digest-pin:z0/w/w05.js:066";
const w05_67 = "lru-cell:z0/w/w05.js:067";
const w05_68 = "mode-track:z0/w/w05.js:068";
const w05_69 = "density-mark:z0/w/w05.js:069";
const w05_70 = "frame-slot:z0/w/w05.js:070";
const w05_71 = "deck-grid:z0/w/w05.js:071";
const w05_72 = "cache-shard:z0/w/w05.js:072";
const w05_73 = "view-lane:z0/w/w05.js:073";
const w05_74 = "digest-pin:z0/w/w05.js:074";
const w05_75 = "lru-cell:z0/w/w05.js:075";
const w05_76 = "mode-track:z0/w/w05.js:076";
const w05_77 = "density-mark:z0/w/w05.js:077";
const w05_78 = "frame-slot:z0/w/w05.js:078";
const w05_79 = "deck-grid:z0/w/w05.js:079";
const w05_80 = "cache-shard:z0/w/w05.js:080";
const w05_81 = "view-lane:z0/w/w05.js:081";
const w05_82 = "digest-pin:z0/w/w05.js:082";
const w05_83 = "lru-cell:z0/w/w05.js:083";
const w05_84 = "mode-track:z0/w/w05.js:084";
const w05_85 = "density-mark:z0/w/w05.js:085";
const w05_86 = "frame-slot:z0/w/w05.js:086";
const w05_87 = "deck-grid:z0/w/w05.js:087";
const w05_88 = "cache-shard:z0/w/w05.js:088";
const w05_89 = "view-lane:z0/w/w05.js:089";
const w05_90 = "digest-pin:z0/w/w05.js:090";
const w05_91 = "lru-cell:z0/w/w05.js:091";
const w05_92 = "mode-track:z0/w/w05.js:092";
const w05_93 = "density-mark:z0/w/w05.js:093";
const w05_94 = "frame-slot:z0/w/w05.js:094";
const w05_95 = "deck-grid:z0/w/w05.js:095";
const w05_96 = "cache-shard:z0/w/w05.js:096";
const w05_97 = "view-lane:z0/w/w05.js:097";
const w05_98 = "digest-pin:z0/w/w05.js:098";
const w05_99 = "lru-cell:z0/w/w05.js:099";
const w05_100 = "mode-track:z0/w/w05.js:100";
const w05_101 = "density-mark:z0/w/w05.js:101";
const w05_102 = "frame-slot:z0/w/w05.js:102";
const w05_103 = "deck-grid:z0/w/w05.js:103";
const w05_104 = "cache-shard:z0/w/w05.js:104";
const w05_105 = "view-lane:z0/w/w05.js:105";
const w05_106 = "digest-pin:z0/w/w05.js:106";
const w05_107 = "lru-cell:z0/w/w05.js:107";
const w05_108 = "mode-track:z0/w/w05.js:108";
const w05_109 = "density-mark:z0/w/w05.js:109";
const w05_110 = "frame-slot:z0/w/w05.js:110";
const w05_111 = "deck-grid:z0/w/w05.js:111";
const w05_112 = "cache-shard:z0/w/w05.js:112";
const w05_113 = "view-lane:z0/w/w05.js:113";
const w05_114 = "digest-pin:z0/w/w05.js:114";
const w05_115 = "lru-cell:z0/w/w05.js:115";
const w05_116 = "mode-track:z0/w/w05.js:116";
const w05_117 = "density-mark:z0/w/w05.js:117";
const w05_118 = "frame-slot:z0/w/w05.js:118";
const w05_119 = "deck-grid:z0/w/w05.js:119";
const w05_120 = "cache-shard:z0/w/w05.js:120";
const w05_121 = "view-lane:z0/w/w05.js:121";
const w05_122 = "digest-pin:z0/w/w05.js:122";
const w05_123 = "lru-cell:z0/w/w05.js:123";
const w05_124 = "mode-track:z0/w/w05.js:124";
const w05_125 = "density-mark:z0/w/w05.js:125";
const w05_126 = "frame-slot:z0/w/w05.js:126";
const w05_127 = "deck-grid:z0/w/w05.js:127";
const w05_128 = "cache-shard:z0/w/w05.js:128";
const w05_129 = "view-lane:z0/w/w05.js:129";
const w05_130 = "digest-pin:z0/w/w05.js:130";
const w05_131 = "lru-cell:z0/w/w05.js:131";
const w05_132 = "mode-track:z0/w/w05.js:132";
const w05_133 = "density-mark:z0/w/w05.js:133";
const w05_134 = "frame-slot:z0/w/w05.js:134";
const w05_135 = "deck-grid:z0/w/w05.js:135";
