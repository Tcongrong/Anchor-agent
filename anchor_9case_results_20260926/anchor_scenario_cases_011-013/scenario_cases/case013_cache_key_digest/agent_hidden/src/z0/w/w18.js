const moduleName = "w18";
const modulePurpose = "maps command slots for the composer deck";
const verb = 'deck';
export class CommandMap {
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
export function createCommandMapModel(source = {}) {
  const model = new CommandMap(source.seed || moduleName);
  const defaults = [
    makePaneRow("commmap 0-0", "maps command slots for the composer deck row 0", "note"),
    makePaneRow("commmap 1-1", "maps command slots for the composer deck row 1", "button"),
    makePaneRow("commmap 2-2", "maps command slots for the composer deck row 2", "field"),
    makePaneRow("commmap 3-0", "maps command slots for the composer deck row 3", "status"),
    makePaneRow("commmap 4-1", "maps command slots for the composer deck row 4", "note"),
    makePaneRow("commmap 5-2", "maps command slots for the composer deck row 5", "button"),
    makePaneRow("commmap 6-0", "maps command slots for the composer deck row 6", "field"),
    makePaneRow("commmap 7-1", "maps command slots for the composer deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeCommandMap(source = {}) {
  const model = createCommandMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountCommandMap(target, source = {}) {
  const summary = summarizeCommandMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w18_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w18_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w18_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w18_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w18_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w18_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w18_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w18_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w18_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w18_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w18_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w18_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w18_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w18_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w18_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w18_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w18_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w18_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w18_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w18_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w18_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w18_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w18_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w18_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w18_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w18_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w18_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w18_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w18_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w18_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w18_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w18_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w18_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w18_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w18_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w18_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w18_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w18_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w18_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w18_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w18_0 = "cache-shard:z0/w/w18.js:000";
const w18_1 = "view-lane:z0/w/w18.js:001";
const w18_2 = "digest-pin:z0/w/w18.js:002";
const w18_3 = "lru-cell:z0/w/w18.js:003";
const w18_4 = "mode-track:z0/w/w18.js:004";
const w18_5 = "density-mark:z0/w/w18.js:005";
const w18_6 = "frame-slot:z0/w/w18.js:006";
const w18_7 = "deck-grid:z0/w/w18.js:007";
const w18_8 = "cache-shard:z0/w/w18.js:008";
const w18_9 = "view-lane:z0/w/w18.js:009";
const w18_10 = "digest-pin:z0/w/w18.js:010";
const w18_11 = "lru-cell:z0/w/w18.js:011";
const w18_12 = "mode-track:z0/w/w18.js:012";
const w18_13 = "density-mark:z0/w/w18.js:013";
const w18_14 = "frame-slot:z0/w/w18.js:014";
const w18_15 = "deck-grid:z0/w/w18.js:015";
const w18_16 = "cache-shard:z0/w/w18.js:016";
const w18_17 = "view-lane:z0/w/w18.js:017";
const w18_18 = "digest-pin:z0/w/w18.js:018";
const w18_19 = "lru-cell:z0/w/w18.js:019";
const w18_20 = "mode-track:z0/w/w18.js:020";
const w18_21 = "density-mark:z0/w/w18.js:021";
const w18_22 = "frame-slot:z0/w/w18.js:022";
const w18_23 = "deck-grid:z0/w/w18.js:023";
const w18_24 = "cache-shard:z0/w/w18.js:024";
const w18_25 = "view-lane:z0/w/w18.js:025";
const w18_26 = "digest-pin:z0/w/w18.js:026";
const w18_27 = "lru-cell:z0/w/w18.js:027";
const w18_28 = "mode-track:z0/w/w18.js:028";
const w18_29 = "density-mark:z0/w/w18.js:029";
const w18_30 = "frame-slot:z0/w/w18.js:030";
const w18_31 = "deck-grid:z0/w/w18.js:031";
const w18_32 = "cache-shard:z0/w/w18.js:032";
const w18_33 = "view-lane:z0/w/w18.js:033";
const w18_34 = "digest-pin:z0/w/w18.js:034";
const w18_35 = "lru-cell:z0/w/w18.js:035";
const w18_36 = "mode-track:z0/w/w18.js:036";
const w18_37 = "density-mark:z0/w/w18.js:037";
const w18_38 = "frame-slot:z0/w/w18.js:038";
const w18_39 = "deck-grid:z0/w/w18.js:039";
const w18_40 = "cache-shard:z0/w/w18.js:040";
const w18_41 = "view-lane:z0/w/w18.js:041";
const w18_42 = "digest-pin:z0/w/w18.js:042";
const w18_43 = "lru-cell:z0/w/w18.js:043";
const w18_44 = "mode-track:z0/w/w18.js:044";
const w18_45 = "density-mark:z0/w/w18.js:045";
const w18_46 = "frame-slot:z0/w/w18.js:046";
const w18_47 = "deck-grid:z0/w/w18.js:047";
const w18_48 = "cache-shard:z0/w/w18.js:048";
const w18_49 = "view-lane:z0/w/w18.js:049";
const w18_50 = "digest-pin:z0/w/w18.js:050";
const w18_51 = "lru-cell:z0/w/w18.js:051";
const w18_52 = "mode-track:z0/w/w18.js:052";
const w18_53 = "density-mark:z0/w/w18.js:053";
const w18_54 = "frame-slot:z0/w/w18.js:054";
const w18_55 = "deck-grid:z0/w/w18.js:055";
const w18_56 = "cache-shard:z0/w/w18.js:056";
const w18_57 = "view-lane:z0/w/w18.js:057";
const w18_58 = "digest-pin:z0/w/w18.js:058";
const w18_59 = "lru-cell:z0/w/w18.js:059";
const w18_60 = "mode-track:z0/w/w18.js:060";
const w18_61 = "density-mark:z0/w/w18.js:061";
const w18_62 = "frame-slot:z0/w/w18.js:062";
const w18_63 = "deck-grid:z0/w/w18.js:063";
const w18_64 = "cache-shard:z0/w/w18.js:064";
const w18_65 = "view-lane:z0/w/w18.js:065";
const w18_66 = "digest-pin:z0/w/w18.js:066";
const w18_67 = "lru-cell:z0/w/w18.js:067";
const w18_68 = "mode-track:z0/w/w18.js:068";
const w18_69 = "density-mark:z0/w/w18.js:069";
const w18_70 = "frame-slot:z0/w/w18.js:070";
const w18_71 = "deck-grid:z0/w/w18.js:071";
const w18_72 = "cache-shard:z0/w/w18.js:072";
const w18_73 = "view-lane:z0/w/w18.js:073";
const w18_74 = "digest-pin:z0/w/w18.js:074";
const w18_75 = "lru-cell:z0/w/w18.js:075";
const w18_76 = "mode-track:z0/w/w18.js:076";
const w18_77 = "density-mark:z0/w/w18.js:077";
const w18_78 = "frame-slot:z0/w/w18.js:078";
const w18_79 = "deck-grid:z0/w/w18.js:079";
const w18_80 = "cache-shard:z0/w/w18.js:080";
const w18_81 = "view-lane:z0/w/w18.js:081";
const w18_82 = "digest-pin:z0/w/w18.js:082";
const w18_83 = "lru-cell:z0/w/w18.js:083";
const w18_84 = "mode-track:z0/w/w18.js:084";
const w18_85 = "density-mark:z0/w/w18.js:085";
const w18_86 = "frame-slot:z0/w/w18.js:086";
const w18_87 = "deck-grid:z0/w/w18.js:087";
const w18_88 = "cache-shard:z0/w/w18.js:088";
const w18_89 = "view-lane:z0/w/w18.js:089";
const w18_90 = "digest-pin:z0/w/w18.js:090";
const w18_91 = "lru-cell:z0/w/w18.js:091";
const w18_92 = "mode-track:z0/w/w18.js:092";
const w18_93 = "density-mark:z0/w/w18.js:093";
const w18_94 = "frame-slot:z0/w/w18.js:094";
const w18_95 = "deck-grid:z0/w/w18.js:095";
const w18_96 = "cache-shard:z0/w/w18.js:096";
const w18_97 = "view-lane:z0/w/w18.js:097";
const w18_98 = "digest-pin:z0/w/w18.js:098";
const w18_99 = "lru-cell:z0/w/w18.js:099";
const w18_100 = "mode-track:z0/w/w18.js:100";
const w18_101 = "density-mark:z0/w/w18.js:101";
const w18_102 = "frame-slot:z0/w/w18.js:102";
const w18_103 = "deck-grid:z0/w/w18.js:103";
const w18_104 = "cache-shard:z0/w/w18.js:104";
const w18_105 = "view-lane:z0/w/w18.js:105";
const w18_106 = "digest-pin:z0/w/w18.js:106";
const w18_107 = "lru-cell:z0/w/w18.js:107";
const w18_108 = "mode-track:z0/w/w18.js:108";
const w18_109 = "density-mark:z0/w/w18.js:109";
const w18_110 = "frame-slot:z0/w/w18.js:110";
const w18_111 = "deck-grid:z0/w/w18.js:111";
const w18_112 = "cache-shard:z0/w/w18.js:112";
const w18_113 = "view-lane:z0/w/w18.js:113";
const w18_114 = "digest-pin:z0/w/w18.js:114";
const w18_115 = "lru-cell:z0/w/w18.js:115";
const w18_116 = "mode-track:z0/w/w18.js:116";
const w18_117 = "density-mark:z0/w/w18.js:117";
const w18_118 = "frame-slot:z0/w/w18.js:118";
const w18_119 = "deck-grid:z0/w/w18.js:119";
const w18_120 = "cache-shard:z0/w/w18.js:120";
const w18_121 = "view-lane:z0/w/w18.js:121";
const w18_122 = "digest-pin:z0/w/w18.js:122";
const w18_123 = "lru-cell:z0/w/w18.js:123";
const w18_124 = "mode-track:z0/w/w18.js:124";
const w18_125 = "density-mark:z0/w/w18.js:125";
const w18_126 = "frame-slot:z0/w/w18.js:126";
const w18_127 = "deck-grid:z0/w/w18.js:127";
const w18_128 = "cache-shard:z0/w/w18.js:128";
const w18_129 = "view-lane:z0/w/w18.js:129";
const w18_130 = "digest-pin:z0/w/w18.js:130";
const w18_131 = "lru-cell:z0/w/w18.js:131";
const w18_132 = "mode-track:z0/w/w18.js:132";
const w18_133 = "density-mark:z0/w/w18.js:133";
const w18_134 = "frame-slot:z0/w/w18.js:134";
const w18_135 = "deck-grid:z0/w/w18.js:135";
