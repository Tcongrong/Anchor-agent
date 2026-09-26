const moduleName = "w08";
const modulePurpose = "queues snapshot rows for the view deck";
const verb = 'deck';
export class SnapshotQueue {
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
export function createSnapshotQueueModel(source = {}) {
  const model = new SnapshotQueue(source.seed || moduleName);
  const defaults = [
    makePaneRow("snapqueu 0-0", "queues snapshot rows for the view deck row 0", "note"),
    makePaneRow("snapqueu 1-1", "queues snapshot rows for the view deck row 1", "button"),
    makePaneRow("snapqueu 2-2", "queues snapshot rows for the view deck row 2", "field"),
    makePaneRow("snapqueu 3-0", "queues snapshot rows for the view deck row 3", "status"),
    makePaneRow("snapqueu 4-1", "queues snapshot rows for the view deck row 4", "note"),
    makePaneRow("snapqueu 5-2", "queues snapshot rows for the view deck row 5", "button"),
    makePaneRow("snapqueu 6-0", "queues snapshot rows for the view deck row 6", "field"),
    makePaneRow("snapqueu 7-1", "queues snapshot rows for the view deck row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSnapshotQueue(source = {}) {
  const model = createSnapshotQueueModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSnapshotQueue(target, source = {}) {
  const summary = summarizeSnapshotQueue(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w08_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w08_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w08_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w08_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w08_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w08_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w08_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w08_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w08_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w08_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w08_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w08_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w08_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w08_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w08_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w08_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w08_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w08_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w08_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w08_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w08_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w08_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w08_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w08_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w08_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w08_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w08_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w08_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w08_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w08_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w08_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w08_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w08_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w08_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w08_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w08_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w08_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w08_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w08_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w08_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w08_0 = "cache-shard:z0/w/w08.js:000";
const w08_1 = "view-lane:z0/w/w08.js:001";
const w08_2 = "digest-pin:z0/w/w08.js:002";
const w08_3 = "lru-cell:z0/w/w08.js:003";
const w08_4 = "mode-track:z0/w/w08.js:004";
const w08_5 = "density-mark:z0/w/w08.js:005";
const w08_6 = "frame-slot:z0/w/w08.js:006";
const w08_7 = "deck-grid:z0/w/w08.js:007";
const w08_8 = "cache-shard:z0/w/w08.js:008";
const w08_9 = "view-lane:z0/w/w08.js:009";
const w08_10 = "digest-pin:z0/w/w08.js:010";
const w08_11 = "lru-cell:z0/w/w08.js:011";
const w08_12 = "mode-track:z0/w/w08.js:012";
const w08_13 = "density-mark:z0/w/w08.js:013";
const w08_14 = "frame-slot:z0/w/w08.js:014";
const w08_15 = "deck-grid:z0/w/w08.js:015";
const w08_16 = "cache-shard:z0/w/w08.js:016";
const w08_17 = "view-lane:z0/w/w08.js:017";
const w08_18 = "digest-pin:z0/w/w08.js:018";
const w08_19 = "lru-cell:z0/w/w08.js:019";
const w08_20 = "mode-track:z0/w/w08.js:020";
const w08_21 = "density-mark:z0/w/w08.js:021";
const w08_22 = "frame-slot:z0/w/w08.js:022";
const w08_23 = "deck-grid:z0/w/w08.js:023";
const w08_24 = "cache-shard:z0/w/w08.js:024";
const w08_25 = "view-lane:z0/w/w08.js:025";
const w08_26 = "digest-pin:z0/w/w08.js:026";
const w08_27 = "lru-cell:z0/w/w08.js:027";
const w08_28 = "mode-track:z0/w/w08.js:028";
const w08_29 = "density-mark:z0/w/w08.js:029";
const w08_30 = "frame-slot:z0/w/w08.js:030";
const w08_31 = "deck-grid:z0/w/w08.js:031";
const w08_32 = "cache-shard:z0/w/w08.js:032";
const w08_33 = "view-lane:z0/w/w08.js:033";
const w08_34 = "digest-pin:z0/w/w08.js:034";
const w08_35 = "lru-cell:z0/w/w08.js:035";
const w08_36 = "mode-track:z0/w/w08.js:036";
const w08_37 = "density-mark:z0/w/w08.js:037";
const w08_38 = "frame-slot:z0/w/w08.js:038";
const w08_39 = "deck-grid:z0/w/w08.js:039";
const w08_40 = "cache-shard:z0/w/w08.js:040";
const w08_41 = "view-lane:z0/w/w08.js:041";
const w08_42 = "digest-pin:z0/w/w08.js:042";
const w08_43 = "lru-cell:z0/w/w08.js:043";
const w08_44 = "mode-track:z0/w/w08.js:044";
const w08_45 = "density-mark:z0/w/w08.js:045";
const w08_46 = "frame-slot:z0/w/w08.js:046";
const w08_47 = "deck-grid:z0/w/w08.js:047";
const w08_48 = "cache-shard:z0/w/w08.js:048";
const w08_49 = "view-lane:z0/w/w08.js:049";
const w08_50 = "digest-pin:z0/w/w08.js:050";
const w08_51 = "lru-cell:z0/w/w08.js:051";
const w08_52 = "mode-track:z0/w/w08.js:052";
const w08_53 = "density-mark:z0/w/w08.js:053";
const w08_54 = "frame-slot:z0/w/w08.js:054";
const w08_55 = "deck-grid:z0/w/w08.js:055";
const w08_56 = "cache-shard:z0/w/w08.js:056";
const w08_57 = "view-lane:z0/w/w08.js:057";
const w08_58 = "digest-pin:z0/w/w08.js:058";
const w08_59 = "lru-cell:z0/w/w08.js:059";
const w08_60 = "mode-track:z0/w/w08.js:060";
const w08_61 = "density-mark:z0/w/w08.js:061";
const w08_62 = "frame-slot:z0/w/w08.js:062";
const w08_63 = "deck-grid:z0/w/w08.js:063";
const w08_64 = "cache-shard:z0/w/w08.js:064";
const w08_65 = "view-lane:z0/w/w08.js:065";
const w08_66 = "digest-pin:z0/w/w08.js:066";
const w08_67 = "lru-cell:z0/w/w08.js:067";
const w08_68 = "mode-track:z0/w/w08.js:068";
const w08_69 = "density-mark:z0/w/w08.js:069";
const w08_70 = "frame-slot:z0/w/w08.js:070";
const w08_71 = "deck-grid:z0/w/w08.js:071";
const w08_72 = "cache-shard:z0/w/w08.js:072";
const w08_73 = "view-lane:z0/w/w08.js:073";
const w08_74 = "digest-pin:z0/w/w08.js:074";
const w08_75 = "lru-cell:z0/w/w08.js:075";
const w08_76 = "mode-track:z0/w/w08.js:076";
const w08_77 = "density-mark:z0/w/w08.js:077";
const w08_78 = "frame-slot:z0/w/w08.js:078";
const w08_79 = "deck-grid:z0/w/w08.js:079";
const w08_80 = "cache-shard:z0/w/w08.js:080";
const w08_81 = "view-lane:z0/w/w08.js:081";
const w08_82 = "digest-pin:z0/w/w08.js:082";
const w08_83 = "lru-cell:z0/w/w08.js:083";
const w08_84 = "mode-track:z0/w/w08.js:084";
const w08_85 = "density-mark:z0/w/w08.js:085";
const w08_86 = "frame-slot:z0/w/w08.js:086";
const w08_87 = "deck-grid:z0/w/w08.js:087";
const w08_88 = "cache-shard:z0/w/w08.js:088";
const w08_89 = "view-lane:z0/w/w08.js:089";
const w08_90 = "digest-pin:z0/w/w08.js:090";
const w08_91 = "lru-cell:z0/w/w08.js:091";
const w08_92 = "mode-track:z0/w/w08.js:092";
const w08_93 = "density-mark:z0/w/w08.js:093";
const w08_94 = "frame-slot:z0/w/w08.js:094";
const w08_95 = "deck-grid:z0/w/w08.js:095";
const w08_96 = "cache-shard:z0/w/w08.js:096";
const w08_97 = "view-lane:z0/w/w08.js:097";
const w08_98 = "digest-pin:z0/w/w08.js:098";
const w08_99 = "lru-cell:z0/w/w08.js:099";
const w08_100 = "mode-track:z0/w/w08.js:100";
const w08_101 = "density-mark:z0/w/w08.js:101";
const w08_102 = "frame-slot:z0/w/w08.js:102";
const w08_103 = "deck-grid:z0/w/w08.js:103";
const w08_104 = "cache-shard:z0/w/w08.js:104";
const w08_105 = "view-lane:z0/w/w08.js:105";
const w08_106 = "digest-pin:z0/w/w08.js:106";
const w08_107 = "lru-cell:z0/w/w08.js:107";
const w08_108 = "mode-track:z0/w/w08.js:108";
const w08_109 = "density-mark:z0/w/w08.js:109";
const w08_110 = "frame-slot:z0/w/w08.js:110";
const w08_111 = "deck-grid:z0/w/w08.js:111";
const w08_112 = "cache-shard:z0/w/w08.js:112";
const w08_113 = "view-lane:z0/w/w08.js:113";
const w08_114 = "digest-pin:z0/w/w08.js:114";
const w08_115 = "lru-cell:z0/w/w08.js:115";
const w08_116 = "mode-track:z0/w/w08.js:116";
const w08_117 = "density-mark:z0/w/w08.js:117";
const w08_118 = "frame-slot:z0/w/w08.js:118";
const w08_119 = "deck-grid:z0/w/w08.js:119";
const w08_120 = "cache-shard:z0/w/w08.js:120";
const w08_121 = "view-lane:z0/w/w08.js:121";
const w08_122 = "digest-pin:z0/w/w08.js:122";
const w08_123 = "lru-cell:z0/w/w08.js:123";
const w08_124 = "mode-track:z0/w/w08.js:124";
const w08_125 = "density-mark:z0/w/w08.js:125";
const w08_126 = "frame-slot:z0/w/w08.js:126";
const w08_127 = "deck-grid:z0/w/w08.js:127";
const w08_128 = "cache-shard:z0/w/w08.js:128";
const w08_129 = "view-lane:z0/w/w08.js:129";
const w08_130 = "digest-pin:z0/w/w08.js:130";
const w08_131 = "lru-cell:z0/w/w08.js:131";
const w08_132 = "mode-track:z0/w/w08.js:132";
const w08_133 = "density-mark:z0/w/w08.js:133";
const w08_134 = "frame-slot:z0/w/w08.js:134";
const w08_135 = "deck-grid:z0/w/w08.js:135";
