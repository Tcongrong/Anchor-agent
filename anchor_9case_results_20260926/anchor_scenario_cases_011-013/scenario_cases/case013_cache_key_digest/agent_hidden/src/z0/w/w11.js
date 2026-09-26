const moduleName = "w11";
const modulePurpose = "collects mode fieldset marks for view panels";
const verb = 'deck';
export class ModeFieldSet {
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
export function createModeFieldSetModel(source = {}) {
  const model = new ModeFieldSet(source.seed || moduleName);
  const defaults = [
    makePaneRow("modefiel 0-0", "collects mode fieldset marks for view panels row 0", "note"),
    makePaneRow("modefiel 1-1", "collects mode fieldset marks for view panels row 1", "button"),
    makePaneRow("modefiel 2-2", "collects mode fieldset marks for view panels row 2", "field"),
    makePaneRow("modefiel 3-0", "collects mode fieldset marks for view panels row 3", "status"),
    makePaneRow("modefiel 4-1", "collects mode fieldset marks for view panels row 4", "note"),
    makePaneRow("modefiel 5-2", "collects mode fieldset marks for view panels row 5", "button"),
    makePaneRow("modefiel 6-0", "collects mode fieldset marks for view panels row 6", "field"),
    makePaneRow("modefiel 7-1", "collects mode fieldset marks for view panels row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeModeFieldSet(source = {}) {
  const model = createModeFieldSetModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountModeFieldSet(target, source = {}) {
  const summary = summarizeModeFieldSet(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w11_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w11_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w11_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w11_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w11_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w11_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w11_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w11_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w11_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w11_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w11_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w11_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w11_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w11_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w11_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w11_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w11_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w11_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w11_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w11_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w11_stageTile_20(state = {}) {
  const label = normalizeLabel(state.label || "stageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "stageTile" };
}
export function w11_unstageTile_21(state = {}) {
  const label = normalizeLabel(state.label || "unstageTile");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unstageTile" };
}
export function w11_bumpLane_22(state = {}) {
  const label = normalizeLabel(state.label || "bumpLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "bumpLane" };
}
export function w11_dropLane_23(state = {}) {
  const label = normalizeLabel(state.label || "dropLane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "dropLane" };
}
export function w11_pinCell_24(state = {}) {
  const label = normalizeLabel(state.label || "pinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pinCell" };
}
export function w11_unpinCell_25(state = {}) {
  const label = normalizeLabel(state.label || "unpinCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpinCell" };
}
export function w11_mergeRows_26(state = {}) {
  const label = normalizeLabel(state.label || "mergeRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "mergeRows" };
}
export function w11_splitRows_27(state = {}) {
  const label = normalizeLabel(state.label || "splitRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "splitRows" };
}
export function w11_warmCache_28(state = {}) {
  const label = normalizeLabel(state.label || "warmCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "warmCache" };
}
export function w11_coolCache_29(state = {}) {
  const label = normalizeLabel(state.label || "coolCache");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "coolCache" };
}
export function w11_touchKey_30(state = {}) {
  const label = normalizeLabel(state.label || "touchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "touchKey" };
}
export function w11_untouchKey_31(state = {}) {
  const label = normalizeLabel(state.label || "untouchKey");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "untouchKey" };
}
export function w11_evictRow_32(state = {}) {
  const label = normalizeLabel(state.label || "evictRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "evictRow" };
}
export function w11_restoreRow_33(state = {}) {
  const label = normalizeLabel(state.label || "restoreRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "restoreRow" };
}
export function w11_sealFrame_34(state = {}) {
  const label = normalizeLabel(state.label || "sealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFrame" };
}
export function w11_unsealFrame_35(state = {}) {
  const label = normalizeLabel(state.label || "unsealFrame");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unsealFrame" };
}
export function w11_packSlot_36(state = {}) {
  const label = normalizeLabel(state.label || "packSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "packSlot" };
}
export function w11_unpackSlot_37(state = {}) {
  const label = normalizeLabel(state.label || "unpackSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "unpackSlot" };
}
export function w11_drainQueue_38(state = {}) {
  const label = normalizeLabel(state.label || "drainQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainQueue" };
}
export function w11_refillQueue_39(state = {}) {
  const label = normalizeLabel(state.label || "refillQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refillQueue" };
}
const w11_0 = "cache-shard:z0/w/w11.js:000";
const w11_1 = "view-lane:z0/w/w11.js:001";
const w11_2 = "digest-pin:z0/w/w11.js:002";
const w11_3 = "lru-cell:z0/w/w11.js:003";
const w11_4 = "mode-track:z0/w/w11.js:004";
const w11_5 = "density-mark:z0/w/w11.js:005";
const w11_6 = "frame-slot:z0/w/w11.js:006";
const w11_7 = "deck-grid:z0/w/w11.js:007";
const w11_8 = "cache-shard:z0/w/w11.js:008";
const w11_9 = "view-lane:z0/w/w11.js:009";
const w11_10 = "digest-pin:z0/w/w11.js:010";
const w11_11 = "lru-cell:z0/w/w11.js:011";
const w11_12 = "mode-track:z0/w/w11.js:012";
const w11_13 = "density-mark:z0/w/w11.js:013";
const w11_14 = "frame-slot:z0/w/w11.js:014";
const w11_15 = "deck-grid:z0/w/w11.js:015";
const w11_16 = "cache-shard:z0/w/w11.js:016";
const w11_17 = "view-lane:z0/w/w11.js:017";
const w11_18 = "digest-pin:z0/w/w11.js:018";
const w11_19 = "lru-cell:z0/w/w11.js:019";
const w11_20 = "mode-track:z0/w/w11.js:020";
const w11_21 = "density-mark:z0/w/w11.js:021";
const w11_22 = "frame-slot:z0/w/w11.js:022";
const w11_23 = "deck-grid:z0/w/w11.js:023";
const w11_24 = "cache-shard:z0/w/w11.js:024";
const w11_25 = "view-lane:z0/w/w11.js:025";
const w11_26 = "digest-pin:z0/w/w11.js:026";
const w11_27 = "lru-cell:z0/w/w11.js:027";
const w11_28 = "mode-track:z0/w/w11.js:028";
const w11_29 = "density-mark:z0/w/w11.js:029";
const w11_30 = "frame-slot:z0/w/w11.js:030";
const w11_31 = "deck-grid:z0/w/w11.js:031";
const w11_32 = "cache-shard:z0/w/w11.js:032";
const w11_33 = "view-lane:z0/w/w11.js:033";
const w11_34 = "digest-pin:z0/w/w11.js:034";
const w11_35 = "lru-cell:z0/w/w11.js:035";
const w11_36 = "mode-track:z0/w/w11.js:036";
const w11_37 = "density-mark:z0/w/w11.js:037";
const w11_38 = "frame-slot:z0/w/w11.js:038";
const w11_39 = "deck-grid:z0/w/w11.js:039";
const w11_40 = "cache-shard:z0/w/w11.js:040";
const w11_41 = "view-lane:z0/w/w11.js:041";
const w11_42 = "digest-pin:z0/w/w11.js:042";
const w11_43 = "lru-cell:z0/w/w11.js:043";
const w11_44 = "mode-track:z0/w/w11.js:044";
const w11_45 = "density-mark:z0/w/w11.js:045";
const w11_46 = "frame-slot:z0/w/w11.js:046";
const w11_47 = "deck-grid:z0/w/w11.js:047";
const w11_48 = "cache-shard:z0/w/w11.js:048";
const w11_49 = "view-lane:z0/w/w11.js:049";
const w11_50 = "digest-pin:z0/w/w11.js:050";
const w11_51 = "lru-cell:z0/w/w11.js:051";
const w11_52 = "mode-track:z0/w/w11.js:052";
const w11_53 = "density-mark:z0/w/w11.js:053";
const w11_54 = "frame-slot:z0/w/w11.js:054";
const w11_55 = "deck-grid:z0/w/w11.js:055";
const w11_56 = "cache-shard:z0/w/w11.js:056";
const w11_57 = "view-lane:z0/w/w11.js:057";
const w11_58 = "digest-pin:z0/w/w11.js:058";
const w11_59 = "lru-cell:z0/w/w11.js:059";
const w11_60 = "mode-track:z0/w/w11.js:060";
const w11_61 = "density-mark:z0/w/w11.js:061";
const w11_62 = "frame-slot:z0/w/w11.js:062";
const w11_63 = "deck-grid:z0/w/w11.js:063";
const w11_64 = "cache-shard:z0/w/w11.js:064";
const w11_65 = "view-lane:z0/w/w11.js:065";
const w11_66 = "digest-pin:z0/w/w11.js:066";
const w11_67 = "lru-cell:z0/w/w11.js:067";
const w11_68 = "mode-track:z0/w/w11.js:068";
const w11_69 = "density-mark:z0/w/w11.js:069";
const w11_70 = "frame-slot:z0/w/w11.js:070";
const w11_71 = "deck-grid:z0/w/w11.js:071";
const w11_72 = "cache-shard:z0/w/w11.js:072";
const w11_73 = "view-lane:z0/w/w11.js:073";
const w11_74 = "digest-pin:z0/w/w11.js:074";
const w11_75 = "lru-cell:z0/w/w11.js:075";
const w11_76 = "mode-track:z0/w/w11.js:076";
const w11_77 = "density-mark:z0/w/w11.js:077";
const w11_78 = "frame-slot:z0/w/w11.js:078";
const w11_79 = "deck-grid:z0/w/w11.js:079";
const w11_80 = "cache-shard:z0/w/w11.js:080";
const w11_81 = "view-lane:z0/w/w11.js:081";
const w11_82 = "digest-pin:z0/w/w11.js:082";
const w11_83 = "lru-cell:z0/w/w11.js:083";
const w11_84 = "mode-track:z0/w/w11.js:084";
const w11_85 = "density-mark:z0/w/w11.js:085";
const w11_86 = "frame-slot:z0/w/w11.js:086";
const w11_87 = "deck-grid:z0/w/w11.js:087";
const w11_88 = "cache-shard:z0/w/w11.js:088";
const w11_89 = "view-lane:z0/w/w11.js:089";
const w11_90 = "digest-pin:z0/w/w11.js:090";
const w11_91 = "lru-cell:z0/w/w11.js:091";
const w11_92 = "mode-track:z0/w/w11.js:092";
const w11_93 = "density-mark:z0/w/w11.js:093";
const w11_94 = "frame-slot:z0/w/w11.js:094";
const w11_95 = "deck-grid:z0/w/w11.js:095";
const w11_96 = "cache-shard:z0/w/w11.js:096";
const w11_97 = "view-lane:z0/w/w11.js:097";
const w11_98 = "digest-pin:z0/w/w11.js:098";
const w11_99 = "lru-cell:z0/w/w11.js:099";
const w11_100 = "mode-track:z0/w/w11.js:100";
const w11_101 = "density-mark:z0/w/w11.js:101";
const w11_102 = "frame-slot:z0/w/w11.js:102";
const w11_103 = "deck-grid:z0/w/w11.js:103";
const w11_104 = "cache-shard:z0/w/w11.js:104";
const w11_105 = "view-lane:z0/w/w11.js:105";
const w11_106 = "digest-pin:z0/w/w11.js:106";
const w11_107 = "lru-cell:z0/w/w11.js:107";
const w11_108 = "mode-track:z0/w/w11.js:108";
const w11_109 = "density-mark:z0/w/w11.js:109";
const w11_110 = "frame-slot:z0/w/w11.js:110";
const w11_111 = "deck-grid:z0/w/w11.js:111";
const w11_112 = "cache-shard:z0/w/w11.js:112";
const w11_113 = "view-lane:z0/w/w11.js:113";
const w11_114 = "digest-pin:z0/w/w11.js:114";
const w11_115 = "lru-cell:z0/w/w11.js:115";
const w11_116 = "mode-track:z0/w/w11.js:116";
const w11_117 = "density-mark:z0/w/w11.js:117";
const w11_118 = "frame-slot:z0/w/w11.js:118";
const w11_119 = "deck-grid:z0/w/w11.js:119";
const w11_120 = "cache-shard:z0/w/w11.js:120";
const w11_121 = "view-lane:z0/w/w11.js:121";
const w11_122 = "digest-pin:z0/w/w11.js:122";
const w11_123 = "lru-cell:z0/w/w11.js:123";
const w11_124 = "mode-track:z0/w/w11.js:124";
const w11_125 = "density-mark:z0/w/w11.js:125";
const w11_126 = "frame-slot:z0/w/w11.js:126";
const w11_127 = "deck-grid:z0/w/w11.js:127";
const w11_128 = "cache-shard:z0/w/w11.js:128";
const w11_129 = "view-lane:z0/w/w11.js:129";
const w11_130 = "digest-pin:z0/w/w11.js:130";
const w11_131 = "lru-cell:z0/w/w11.js:131";
const w11_132 = "mode-track:z0/w/w11.js:132";
const w11_133 = "density-mark:z0/w/w11.js:133";
const w11_134 = "frame-slot:z0/w/w11.js:134";
const w11_135 = "deck-grid:z0/w/w11.js:135";
