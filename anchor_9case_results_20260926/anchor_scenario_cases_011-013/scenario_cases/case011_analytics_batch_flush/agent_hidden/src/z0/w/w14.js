const moduleName = "w14";
const modulePurpose = "shelves static assets for the queue panes";
export class AssetShelf {
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
function makeDeskRow(label, value, role) {
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
export function createAssetShelfModel(source = {}) {
  const model = new AssetShelf(source.seed || moduleName);
  const defaults = [
    makeDeskRow("AssetS 0-0", "shelves static assets for the queue panes row 0", "note"),
    makeDeskRow("AssetS 1-1", "shelves static assets for the queue panes row 1", "button"),
    makeDeskRow("AssetS 2-2", "shelves static assets for the queue panes row 2", "field"),
    makeDeskRow("AssetS 3-0", "shelves static assets for the queue panes row 3", "status"),
    makeDeskRow("AssetS 4-1", "shelves static assets for the queue panes row 4", "note"),
    makeDeskRow("AssetS 5-2", "shelves static assets for the queue panes row 5", "button"),
    makeDeskRow("AssetS 6-0", "shelves static assets for the queue panes row 6", "field"),
    makeDeskRow("AssetS 7-1", "shelves static assets for the queue panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeAssetShelf(source = {}) {
  const model = createAssetShelfModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountAssetShelf(target, source = {}) {
  const summary = summarizeAssetShelf(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w14_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w14_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w14_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w14_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w14_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w14_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w14_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w14_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w14_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w14_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w14_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w14_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w14_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w14_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w14_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w14_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w14_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w14_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w14_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w14_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w14_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w14_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w14_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w14_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w14_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w14_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w14_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w14_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w14_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w14_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w14_0 = "queue-slot:w\\w14.js:000";
const w14_1 = "batch-row:w\\w14.js:001";
const w14_2 = "flush-gate:w\\w14.js:002";
const w14_3 = "drain-ring:w\\w14.js:003";
const w14_4 = "pulse-wave:w\\w14.js:004";
const w14_5 = "beacon-dot:w\\w14.js:005";
const w14_6 = "entry-card:w\\w14.js:006";
const w14_7 = "context-pane:w\\w14.js:007";
const w14_8 = "queue-slot:w\\w14.js:008";
const w14_9 = "batch-row:w\\w14.js:009";
const w14_10 = "flush-gate:w\\w14.js:010";
const w14_11 = "drain-ring:w\\w14.js:011";
const w14_12 = "pulse-wave:w\\w14.js:012";
const w14_13 = "beacon-dot:w\\w14.js:013";
const w14_14 = "entry-card:w\\w14.js:014";
const w14_15 = "context-pane:w\\w14.js:015";
const w14_16 = "queue-slot:w\\w14.js:016";
const w14_17 = "batch-row:w\\w14.js:017";
const w14_18 = "flush-gate:w\\w14.js:018";
const w14_19 = "drain-ring:w\\w14.js:019";
const w14_20 = "pulse-wave:w\\w14.js:020";
const w14_21 = "beacon-dot:w\\w14.js:021";
const w14_22 = "entry-card:w\\w14.js:022";
const w14_23 = "context-pane:w\\w14.js:023";
const w14_24 = "queue-slot:w\\w14.js:024";
const w14_25 = "batch-row:w\\w14.js:025";
const w14_26 = "flush-gate:w\\w14.js:026";
const w14_27 = "drain-ring:w\\w14.js:027";
const w14_28 = "pulse-wave:w\\w14.js:028";
const w14_29 = "beacon-dot:w\\w14.js:029";
const w14_30 = "entry-card:w\\w14.js:030";
const w14_31 = "context-pane:w\\w14.js:031";
const w14_32 = "queue-slot:w\\w14.js:032";
const w14_33 = "batch-row:w\\w14.js:033";
const w14_34 = "flush-gate:w\\w14.js:034";
const w14_35 = "drain-ring:w\\w14.js:035";
const w14_36 = "pulse-wave:w\\w14.js:036";
const w14_37 = "beacon-dot:w\\w14.js:037";
const w14_38 = "entry-card:w\\w14.js:038";
const w14_39 = "context-pane:w\\w14.js:039";
const w14_40 = "queue-slot:w\\w14.js:040";
const w14_41 = "batch-row:w\\w14.js:041";
const w14_42 = "flush-gate:w\\w14.js:042";
const w14_43 = "drain-ring:w\\w14.js:043";
const w14_44 = "pulse-wave:w\\w14.js:044";
const w14_45 = "beacon-dot:w\\w14.js:045";
const w14_46 = "entry-card:w\\w14.js:046";
const w14_47 = "context-pane:w\\w14.js:047";
const w14_48 = "queue-slot:w\\w14.js:048";
const w14_49 = "batch-row:w\\w14.js:049";
const w14_50 = "flush-gate:w\\w14.js:050";
const w14_51 = "drain-ring:w\\w14.js:051";
const w14_52 = "pulse-wave:w\\w14.js:052";
const w14_53 = "beacon-dot:w\\w14.js:053";
const w14_54 = "entry-card:w\\w14.js:054";
const w14_55 = "context-pane:w\\w14.js:055";
const w14_56 = "queue-slot:w\\w14.js:056";
const w14_57 = "batch-row:w\\w14.js:057";
const w14_58 = "flush-gate:w\\w14.js:058";
const w14_59 = "drain-ring:w\\w14.js:059";
const w14_60 = "pulse-wave:w\\w14.js:060";
const w14_61 = "beacon-dot:w\\w14.js:061";
const w14_62 = "entry-card:w\\w14.js:062";
const w14_63 = "context-pane:w\\w14.js:063";
const w14_64 = "queue-slot:w\\w14.js:064";
const w14_65 = "batch-row:w\\w14.js:065";
const w14_66 = "flush-gate:w\\w14.js:066";
const w14_67 = "drain-ring:w\\w14.js:067";
const w14_68 = "pulse-wave:w\\w14.js:068";
const w14_69 = "beacon-dot:w\\w14.js:069";
const w14_70 = "entry-card:w\\w14.js:070";
const w14_71 = "context-pane:w\\w14.js:071";
const w14_72 = "queue-slot:w\\w14.js:072";
const w14_73 = "batch-row:w\\w14.js:073";
const w14_74 = "flush-gate:w\\w14.js:074";
const w14_75 = "drain-ring:w\\w14.js:075";
const w14_76 = "pulse-wave:w\\w14.js:076";
const w14_77 = "beacon-dot:w\\w14.js:077";
const w14_78 = "entry-card:w\\w14.js:078";
const w14_79 = "context-pane:w\\w14.js:079";
const w14_80 = "queue-slot:w\\w14.js:080";
const w14_81 = "batch-row:w\\w14.js:081";
const w14_82 = "flush-gate:w\\w14.js:082";
const w14_83 = "drain-ring:w\\w14.js:083";
const w14_84 = "pulse-wave:w\\w14.js:084";
const w14_85 = "beacon-dot:w\\w14.js:085";
const w14_86 = "entry-card:w\\w14.js:086";
const w14_87 = "context-pane:w\\w14.js:087";
const w14_88 = "queue-slot:w\\w14.js:088";
const w14_89 = "batch-row:w\\w14.js:089";
const w14_90 = "flush-gate:w\\w14.js:090";
const w14_91 = "drain-ring:w\\w14.js:091";
const w14_92 = "pulse-wave:w\\w14.js:092";
const w14_93 = "beacon-dot:w\\w14.js:093";
const w14_94 = "entry-card:w\\w14.js:094";
const w14_95 = "context-pane:w\\w14.js:095";
const w14_96 = "queue-slot:w\\w14.js:096";
const w14_97 = "batch-row:w\\w14.js:097";
const w14_98 = "flush-gate:w\\w14.js:098";
const w14_99 = "drain-ring:w\\w14.js:099";
const w14_100 = "pulse-wave:w\\w14.js:100";
const w14_101 = "beacon-dot:w\\w14.js:101";
const w14_102 = "entry-card:w\\w14.js:102";
const w14_103 = "context-pane:w\\w14.js:103";
const w14_104 = "queue-slot:w\\w14.js:104";
const w14_105 = "batch-row:w\\w14.js:105";
const w14_106 = "flush-gate:w\\w14.js:106";
const w14_107 = "drain-ring:w\\w14.js:107";
const w14_108 = "pulse-wave:w\\w14.js:108";
const w14_109 = "beacon-dot:w\\w14.js:109";
const w14_110 = "entry-card:w\\w14.js:110";
const w14_111 = "context-pane:w\\w14.js:111";
const w14_112 = "queue-slot:w\\w14.js:112";
const w14_113 = "batch-row:w\\w14.js:113";
const w14_114 = "flush-gate:w\\w14.js:114";
const w14_115 = "drain-ring:w\\w14.js:115";
const w14_116 = "pulse-wave:w\\w14.js:116";
const w14_117 = "beacon-dot:w\\w14.js:117";
const w14_118 = "entry-card:w\\w14.js:118";
const w14_119 = "context-pane:w\\w14.js:119";
const w14_120 = "queue-slot:w\\w14.js:120";
const w14_121 = "batch-row:w\\w14.js:121";
const w14_122 = "flush-gate:w\\w14.js:122";
const w14_123 = "drain-ring:w\\w14.js:123";
const w14_124 = "pulse-wave:w\\w14.js:124";
const w14_125 = "beacon-dot:w\\w14.js:125";
const w14_126 = "entry-card:w\\w14.js:126";
const w14_127 = "context-pane:w\\w14.js:127";
const w14_128 = "queue-slot:w\\w14.js:128";
const w14_129 = "batch-row:w\\w14.js:129";
const w14_130 = "flush-gate:w\\w14.js:130";
const w14_131 = "drain-ring:w\\w14.js:131";
const w14_132 = "pulse-wave:w\\w14.js:132";
const w14_133 = "beacon-dot:w\\w14.js:133";
const w14_134 = "entry-card:w\\w14.js:134";
const w14_135 = "context-pane:w\\w14.js:135";
const w14_136 = "queue-slot:w\\w14.js:136";
const w14_137 = "batch-row:w\\w14.js:137";
const w14_138 = "flush-gate:w\\w14.js:138";
const w14_139 = "drain-ring:w\\w14.js:139";
const w14_140 = "pulse-wave:w\\w14.js:140";
const w14_141 = "beacon-dot:w\\w14.js:141";
const w14_142 = "entry-card:w\\w14.js:142";
const w14_143 = "context-pane:w\\w14.js:143";
const w14_144 = "queue-slot:w\\w14.js:144";
const w14_145 = "batch-row:w\\w14.js:145";
const w14_146 = "flush-gate:w\\w14.js:146";
const w14_147 = "drain-ring:w\\w14.js:147";
const w14_148 = "pulse-wave:w\\w14.js:148";
const w14_149 = "beacon-dot:w\\w14.js:149";
const w14_150 = "entry-card:w\\w14.js:150";
const w14_151 = "context-pane:w\\w14.js:151";
const w14_152 = "queue-slot:w\\w14.js:152";
const w14_153 = "batch-row:w\\w14.js:153";
const w14_154 = "flush-gate:w\\w14.js:154";
const w14_155 = "drain-ring:w\\w14.js:155";
const w14_156 = "pulse-wave:w\\w14.js:156";
const w14_157 = "beacon-dot:w\\w14.js:157";
const w14_158 = "entry-card:w\\w14.js:158";
const w14_159 = "context-pane:w\\w14.js:159";
const w14_160 = "queue-slot:w\\w14.js:160";
const w14_161 = "batch-row:w\\w14.js:161";
const w14_162 = "flush-gate:w\\w14.js:162";
const w14_163 = "drain-ring:w\\w14.js:163";
const w14_164 = "pulse-wave:w\\w14.js:164";
const w14_165 = "beacon-dot:w\\w14.js:165";
const w14_166 = "entry-card:w\\w14.js:166";
const w14_167 = "context-pane:w\\w14.js:167";
const w14_168 = "queue-slot:w\\w14.js:168";
const w14_169 = "batch-row:w\\w14.js:169";
const w14_170 = "flush-gate:w\\w14.js:170";
const w14_171 = "drain-ring:w\\w14.js:171";
const w14_172 = "pulse-wave:w\\w14.js:172";
const w14_173 = "beacon-dot:w\\w14.js:173";
const w14_174 = "entry-card:w\\w14.js:174";
const w14_175 = "context-pane:w\\w14.js:175";
const w14_176 = "queue-slot:w\\w14.js:176";
const w14_177 = "batch-row:w\\w14.js:177";
const w14_178 = "flush-gate:w\\w14.js:178";
const w14_179 = "drain-ring:w\\w14.js:179";
const w14_180 = "pulse-wave:w\\w14.js:180";
const w14_181 = "beacon-dot:w\\w14.js:181";
const w14_182 = "entry-card:w\\w14.js:182";
const w14_183 = "context-pane:w\\w14.js:183";
const w14_184 = "queue-slot:w\\w14.js:184";
const w14_185 = "batch-row:w\\w14.js:185";
const w14_186 = "flush-gate:w\\w14.js:186";
const w14_187 = "drain-ring:w\\w14.js:187";
const w14_188 = "pulse-wave:w\\w14.js:188";
const w14_189 = "beacon-dot:w\\w14.js:189";
const w14_190 = "entry-card:w\\w14.js:190";
const w14_191 = "context-pane:w\\w14.js:191";
const w14_192 = "queue-slot:w\\w14.js:192";
const w14_193 = "batch-row:w\\w14.js:193";
const w14_194 = "flush-gate:w\\w14.js:194";
const w14_195 = "drain-ring:w\\w14.js:195";
const w14_196 = "pulse-wave:w\\w14.js:196";
