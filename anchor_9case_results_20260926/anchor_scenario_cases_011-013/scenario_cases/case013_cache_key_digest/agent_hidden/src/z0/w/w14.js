const moduleName = "w14";
const modulePurpose = "ledgers asset shards for the view cache desk";
const verb = 'deck';
export class AssetLedger {
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
export function createAssetLedgerModel(source = {}) {
  const model = new AssetLedger(source.seed || moduleName);
  const defaults = [
    makePaneRow("asseledg 0-0", "ledgers asset shards for the view cache desk row 0", "note"),
    makePaneRow("asseledg 1-1", "ledgers asset shards for the view cache desk row 1", "button"),
    makePaneRow("asseledg 2-2", "ledgers asset shards for the view cache desk row 2", "field"),
    makePaneRow("asseledg 3-0", "ledgers asset shards for the view cache desk row 3", "status"),
    makePaneRow("asseledg 4-1", "ledgers asset shards for the view cache desk row 4", "note"),
    makePaneRow("asseledg 5-2", "ledgers asset shards for the view cache desk row 5", "button"),
    makePaneRow("asseledg 6-0", "ledgers asset shards for the view cache desk row 6", "field"),
    makePaneRow("asseledg 7-1", "ledgers asset shards for the view cache desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeAssetLedger(source = {}) {
  const model = createAssetLedgerModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountAssetLedger(target, source = {}) {
  const summary = summarizeAssetLedger(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w14_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w14_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w14_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w14_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w14_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w14_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w14_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w14_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w14_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w14_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w14_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w14_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w14_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w14_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w14_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w14_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w14_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w14_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w14_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w14_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w14_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w14_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w14_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w14_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w14_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w14_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w14_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w14_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w14_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w14_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w14_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w14_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w14_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w14_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w14_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w14_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w14_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w14_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w14_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w14_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w14_0 = "cache-shard:z0/w/w14.js:000";
const w14_1 = "view-lane:z0/w/w14.js:001";
const w14_2 = "digest-pin:z0/w/w14.js:002";
const w14_3 = "lru-cell:z0/w/w14.js:003";
const w14_4 = "mode-track:z0/w/w14.js:004";
const w14_5 = "density-mark:z0/w/w14.js:005";
const w14_6 = "frame-slot:z0/w/w14.js:006";
const w14_7 = "deck-grid:z0/w/w14.js:007";
const w14_8 = "cache-shard:z0/w/w14.js:008";
const w14_9 = "view-lane:z0/w/w14.js:009";
const w14_10 = "digest-pin:z0/w/w14.js:010";
const w14_11 = "lru-cell:z0/w/w14.js:011";
const w14_12 = "mode-track:z0/w/w14.js:012";
const w14_13 = "density-mark:z0/w/w14.js:013";
const w14_14 = "frame-slot:z0/w/w14.js:014";
const w14_15 = "deck-grid:z0/w/w14.js:015";
const w14_16 = "cache-shard:z0/w/w14.js:016";
const w14_17 = "view-lane:z0/w/w14.js:017";
const w14_18 = "digest-pin:z0/w/w14.js:018";
const w14_19 = "lru-cell:z0/w/w14.js:019";
const w14_20 = "mode-track:z0/w/w14.js:020";
const w14_21 = "density-mark:z0/w/w14.js:021";
const w14_22 = "frame-slot:z0/w/w14.js:022";
const w14_23 = "deck-grid:z0/w/w14.js:023";
const w14_24 = "cache-shard:z0/w/w14.js:024";
const w14_25 = "view-lane:z0/w/w14.js:025";
const w14_26 = "digest-pin:z0/w/w14.js:026";
const w14_27 = "lru-cell:z0/w/w14.js:027";
const w14_28 = "mode-track:z0/w/w14.js:028";
const w14_29 = "density-mark:z0/w/w14.js:029";
const w14_30 = "frame-slot:z0/w/w14.js:030";
const w14_31 = "deck-grid:z0/w/w14.js:031";
const w14_32 = "cache-shard:z0/w/w14.js:032";
const w14_33 = "view-lane:z0/w/w14.js:033";
const w14_34 = "digest-pin:z0/w/w14.js:034";
const w14_35 = "lru-cell:z0/w/w14.js:035";
const w14_36 = "mode-track:z0/w/w14.js:036";
const w14_37 = "density-mark:z0/w/w14.js:037";
const w14_38 = "frame-slot:z0/w/w14.js:038";
const w14_39 = "deck-grid:z0/w/w14.js:039";
const w14_40 = "cache-shard:z0/w/w14.js:040";
const w14_41 = "view-lane:z0/w/w14.js:041";
const w14_42 = "digest-pin:z0/w/w14.js:042";
const w14_43 = "lru-cell:z0/w/w14.js:043";
const w14_44 = "mode-track:z0/w/w14.js:044";
const w14_45 = "density-mark:z0/w/w14.js:045";
const w14_46 = "frame-slot:z0/w/w14.js:046";
const w14_47 = "deck-grid:z0/w/w14.js:047";
const w14_48 = "cache-shard:z0/w/w14.js:048";
const w14_49 = "view-lane:z0/w/w14.js:049";
const w14_50 = "digest-pin:z0/w/w14.js:050";
const w14_51 = "lru-cell:z0/w/w14.js:051";
const w14_52 = "mode-track:z0/w/w14.js:052";
const w14_53 = "density-mark:z0/w/w14.js:053";
const w14_54 = "frame-slot:z0/w/w14.js:054";
const w14_55 = "deck-grid:z0/w/w14.js:055";
const w14_56 = "cache-shard:z0/w/w14.js:056";
const w14_57 = "view-lane:z0/w/w14.js:057";
const w14_58 = "digest-pin:z0/w/w14.js:058";
const w14_59 = "lru-cell:z0/w/w14.js:059";
const w14_60 = "mode-track:z0/w/w14.js:060";
const w14_61 = "density-mark:z0/w/w14.js:061";
const w14_62 = "frame-slot:z0/w/w14.js:062";
const w14_63 = "deck-grid:z0/w/w14.js:063";
const w14_64 = "cache-shard:z0/w/w14.js:064";
const w14_65 = "view-lane:z0/w/w14.js:065";
const w14_66 = "digest-pin:z0/w/w14.js:066";
const w14_67 = "lru-cell:z0/w/w14.js:067";
const w14_68 = "mode-track:z0/w/w14.js:068";
const w14_69 = "density-mark:z0/w/w14.js:069";
const w14_70 = "frame-slot:z0/w/w14.js:070";
const w14_71 = "deck-grid:z0/w/w14.js:071";
const w14_72 = "cache-shard:z0/w/w14.js:072";
const w14_73 = "view-lane:z0/w/w14.js:073";
const w14_74 = "digest-pin:z0/w/w14.js:074";
const w14_75 = "lru-cell:z0/w/w14.js:075";
const w14_76 = "mode-track:z0/w/w14.js:076";
const w14_77 = "density-mark:z0/w/w14.js:077";
const w14_78 = "frame-slot:z0/w/w14.js:078";
const w14_79 = "deck-grid:z0/w/w14.js:079";
const w14_80 = "cache-shard:z0/w/w14.js:080";
const w14_81 = "view-lane:z0/w/w14.js:081";
const w14_82 = "digest-pin:z0/w/w14.js:082";
const w14_83 = "lru-cell:z0/w/w14.js:083";
const w14_84 = "mode-track:z0/w/w14.js:084";
const w14_85 = "density-mark:z0/w/w14.js:085";
const w14_86 = "frame-slot:z0/w/w14.js:086";
const w14_87 = "deck-grid:z0/w/w14.js:087";
const w14_88 = "cache-shard:z0/w/w14.js:088";
const w14_89 = "view-lane:z0/w/w14.js:089";
const w14_90 = "digest-pin:z0/w/w14.js:090";
const w14_91 = "lru-cell:z0/w/w14.js:091";
const w14_92 = "mode-track:z0/w/w14.js:092";
const w14_93 = "density-mark:z0/w/w14.js:093";
const w14_94 = "frame-slot:z0/w/w14.js:094";
const w14_95 = "deck-grid:z0/w/w14.js:095";
const w14_96 = "cache-shard:z0/w/w14.js:096";
const w14_97 = "view-lane:z0/w/w14.js:097";
const w14_98 = "digest-pin:z0/w/w14.js:098";
const w14_99 = "lru-cell:z0/w/w14.js:099";
const w14_100 = "mode-track:z0/w/w14.js:100";
const w14_101 = "density-mark:z0/w/w14.js:101";
const w14_102 = "frame-slot:z0/w/w14.js:102";
const w14_103 = "deck-grid:z0/w/w14.js:103";
const w14_104 = "cache-shard:z0/w/w14.js:104";
const w14_105 = "view-lane:z0/w/w14.js:105";
const w14_106 = "digest-pin:z0/w/w14.js:106";
const w14_107 = "lru-cell:z0/w/w14.js:107";
const w14_108 = "mode-track:z0/w/w14.js:108";
const w14_109 = "density-mark:z0/w/w14.js:109";
const w14_110 = "frame-slot:z0/w/w14.js:110";
const w14_111 = "deck-grid:z0/w/w14.js:111";
const w14_112 = "cache-shard:z0/w/w14.js:112";
const w14_113 = "view-lane:z0/w/w14.js:113";
const w14_114 = "digest-pin:z0/w/w14.js:114";
const w14_115 = "lru-cell:z0/w/w14.js:115";
const w14_116 = "mode-track:z0/w/w14.js:116";
const w14_117 = "density-mark:z0/w/w14.js:117";
const w14_118 = "frame-slot:z0/w/w14.js:118";
const w14_119 = "deck-grid:z0/w/w14.js:119";
const w14_120 = "cache-shard:z0/w/w14.js:120";
const w14_121 = "view-lane:z0/w/w14.js:121";
const w14_122 = "digest-pin:z0/w/w14.js:122";
const w14_123 = "lru-cell:z0/w/w14.js:123";
const w14_124 = "mode-track:z0/w/w14.js:124";
const w14_125 = "density-mark:z0/w/w14.js:125";
const w14_126 = "frame-slot:z0/w/w14.js:126";
const w14_127 = "deck-grid:z0/w/w14.js:127";
const w14_128 = "cache-shard:z0/w/w14.js:128";
const w14_129 = "view-lane:z0/w/w14.js:129";
const w14_130 = "digest-pin:z0/w/w14.js:130";
const w14_131 = "lru-cell:z0/w/w14.js:131";
const w14_132 = "mode-track:z0/w/w14.js:132";
const w14_133 = "density-mark:z0/w/w14.js:133";
const w14_134 = "frame-slot:z0/w/w14.js:134";
const w14_135 = "deck-grid:z0/w/w14.js:135";
