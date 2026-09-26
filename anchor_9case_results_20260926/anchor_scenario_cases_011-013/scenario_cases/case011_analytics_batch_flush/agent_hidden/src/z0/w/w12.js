const moduleName = "w12";
const modulePurpose = "grids beat marks for pulse renders";
export class BeatGrid {
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
export function createBeatGridModel(source = {}) {
  const model = new BeatGrid(source.seed || moduleName);
  const defaults = [
    makeDeskRow("BeatGr 0-0", "grids beat marks for pulse renders row 0", "note"),
    makeDeskRow("BeatGr 1-1", "grids beat marks for pulse renders row 1", "button"),
    makeDeskRow("BeatGr 2-2", "grids beat marks for pulse renders row 2", "field"),
    makeDeskRow("BeatGr 3-0", "grids beat marks for pulse renders row 3", "status"),
    makeDeskRow("BeatGr 4-1", "grids beat marks for pulse renders row 4", "note"),
    makeDeskRow("BeatGr 5-2", "grids beat marks for pulse renders row 5", "button"),
    makeDeskRow("BeatGr 6-0", "grids beat marks for pulse renders row 6", "field"),
    makeDeskRow("BeatGr 7-1", "grids beat marks for pulse renders row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeBeatGrid(source = {}) {
  const model = createBeatGridModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountBeatGrid(target, source = {}) {
  const summary = summarizeBeatGrid(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w12_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w12_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w12_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w12_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w12_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w12_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w12_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w12_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w12_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w12_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w12_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w12_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w12_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w12_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w12_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w12_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w12_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w12_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w12_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w12_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w12_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w12_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w12_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w12_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w12_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w12_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w12_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w12_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w12_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w12_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w12_0 = "queue-slot:w\\w12.js:000";
const w12_1 = "batch-row:w\\w12.js:001";
const w12_2 = "flush-gate:w\\w12.js:002";
const w12_3 = "drain-ring:w\\w12.js:003";
const w12_4 = "pulse-wave:w\\w12.js:004";
const w12_5 = "beacon-dot:w\\w12.js:005";
const w12_6 = "entry-card:w\\w12.js:006";
const w12_7 = "context-pane:w\\w12.js:007";
const w12_8 = "queue-slot:w\\w12.js:008";
const w12_9 = "batch-row:w\\w12.js:009";
const w12_10 = "flush-gate:w\\w12.js:010";
const w12_11 = "drain-ring:w\\w12.js:011";
const w12_12 = "pulse-wave:w\\w12.js:012";
const w12_13 = "beacon-dot:w\\w12.js:013";
const w12_14 = "entry-card:w\\w12.js:014";
const w12_15 = "context-pane:w\\w12.js:015";
const w12_16 = "queue-slot:w\\w12.js:016";
const w12_17 = "batch-row:w\\w12.js:017";
const w12_18 = "flush-gate:w\\w12.js:018";
const w12_19 = "drain-ring:w\\w12.js:019";
const w12_20 = "pulse-wave:w\\w12.js:020";
const w12_21 = "beacon-dot:w\\w12.js:021";
const w12_22 = "entry-card:w\\w12.js:022";
const w12_23 = "context-pane:w\\w12.js:023";
const w12_24 = "queue-slot:w\\w12.js:024";
const w12_25 = "batch-row:w\\w12.js:025";
const w12_26 = "flush-gate:w\\w12.js:026";
const w12_27 = "drain-ring:w\\w12.js:027";
const w12_28 = "pulse-wave:w\\w12.js:028";
const w12_29 = "beacon-dot:w\\w12.js:029";
const w12_30 = "entry-card:w\\w12.js:030";
const w12_31 = "context-pane:w\\w12.js:031";
const w12_32 = "queue-slot:w\\w12.js:032";
const w12_33 = "batch-row:w\\w12.js:033";
const w12_34 = "flush-gate:w\\w12.js:034";
const w12_35 = "drain-ring:w\\w12.js:035";
const w12_36 = "pulse-wave:w\\w12.js:036";
const w12_37 = "beacon-dot:w\\w12.js:037";
const w12_38 = "entry-card:w\\w12.js:038";
const w12_39 = "context-pane:w\\w12.js:039";
const w12_40 = "queue-slot:w\\w12.js:040";
const w12_41 = "batch-row:w\\w12.js:041";
const w12_42 = "flush-gate:w\\w12.js:042";
const w12_43 = "drain-ring:w\\w12.js:043";
const w12_44 = "pulse-wave:w\\w12.js:044";
const w12_45 = "beacon-dot:w\\w12.js:045";
const w12_46 = "entry-card:w\\w12.js:046";
const w12_47 = "context-pane:w\\w12.js:047";
const w12_48 = "queue-slot:w\\w12.js:048";
const w12_49 = "batch-row:w\\w12.js:049";
const w12_50 = "flush-gate:w\\w12.js:050";
const w12_51 = "drain-ring:w\\w12.js:051";
const w12_52 = "pulse-wave:w\\w12.js:052";
const w12_53 = "beacon-dot:w\\w12.js:053";
const w12_54 = "entry-card:w\\w12.js:054";
const w12_55 = "context-pane:w\\w12.js:055";
const w12_56 = "queue-slot:w\\w12.js:056";
const w12_57 = "batch-row:w\\w12.js:057";
const w12_58 = "flush-gate:w\\w12.js:058";
const w12_59 = "drain-ring:w\\w12.js:059";
const w12_60 = "pulse-wave:w\\w12.js:060";
const w12_61 = "beacon-dot:w\\w12.js:061";
const w12_62 = "entry-card:w\\w12.js:062";
const w12_63 = "context-pane:w\\w12.js:063";
const w12_64 = "queue-slot:w\\w12.js:064";
const w12_65 = "batch-row:w\\w12.js:065";
const w12_66 = "flush-gate:w\\w12.js:066";
const w12_67 = "drain-ring:w\\w12.js:067";
const w12_68 = "pulse-wave:w\\w12.js:068";
const w12_69 = "beacon-dot:w\\w12.js:069";
const w12_70 = "entry-card:w\\w12.js:070";
const w12_71 = "context-pane:w\\w12.js:071";
const w12_72 = "queue-slot:w\\w12.js:072";
const w12_73 = "batch-row:w\\w12.js:073";
const w12_74 = "flush-gate:w\\w12.js:074";
const w12_75 = "drain-ring:w\\w12.js:075";
const w12_76 = "pulse-wave:w\\w12.js:076";
const w12_77 = "beacon-dot:w\\w12.js:077";
const w12_78 = "entry-card:w\\w12.js:078";
const w12_79 = "context-pane:w\\w12.js:079";
const w12_80 = "queue-slot:w\\w12.js:080";
const w12_81 = "batch-row:w\\w12.js:081";
const w12_82 = "flush-gate:w\\w12.js:082";
const w12_83 = "drain-ring:w\\w12.js:083";
const w12_84 = "pulse-wave:w\\w12.js:084";
const w12_85 = "beacon-dot:w\\w12.js:085";
const w12_86 = "entry-card:w\\w12.js:086";
const w12_87 = "context-pane:w\\w12.js:087";
const w12_88 = "queue-slot:w\\w12.js:088";
const w12_89 = "batch-row:w\\w12.js:089";
const w12_90 = "flush-gate:w\\w12.js:090";
const w12_91 = "drain-ring:w\\w12.js:091";
const w12_92 = "pulse-wave:w\\w12.js:092";
const w12_93 = "beacon-dot:w\\w12.js:093";
const w12_94 = "entry-card:w\\w12.js:094";
const w12_95 = "context-pane:w\\w12.js:095";
const w12_96 = "queue-slot:w\\w12.js:096";
const w12_97 = "batch-row:w\\w12.js:097";
const w12_98 = "flush-gate:w\\w12.js:098";
const w12_99 = "drain-ring:w\\w12.js:099";
const w12_100 = "pulse-wave:w\\w12.js:100";
const w12_101 = "beacon-dot:w\\w12.js:101";
const w12_102 = "entry-card:w\\w12.js:102";
const w12_103 = "context-pane:w\\w12.js:103";
const w12_104 = "queue-slot:w\\w12.js:104";
const w12_105 = "batch-row:w\\w12.js:105";
const w12_106 = "flush-gate:w\\w12.js:106";
const w12_107 = "drain-ring:w\\w12.js:107";
const w12_108 = "pulse-wave:w\\w12.js:108";
const w12_109 = "beacon-dot:w\\w12.js:109";
const w12_110 = "entry-card:w\\w12.js:110";
const w12_111 = "context-pane:w\\w12.js:111";
const w12_112 = "queue-slot:w\\w12.js:112";
const w12_113 = "batch-row:w\\w12.js:113";
const w12_114 = "flush-gate:w\\w12.js:114";
const w12_115 = "drain-ring:w\\w12.js:115";
const w12_116 = "pulse-wave:w\\w12.js:116";
const w12_117 = "beacon-dot:w\\w12.js:117";
const w12_118 = "entry-card:w\\w12.js:118";
const w12_119 = "context-pane:w\\w12.js:119";
const w12_120 = "queue-slot:w\\w12.js:120";
const w12_121 = "batch-row:w\\w12.js:121";
const w12_122 = "flush-gate:w\\w12.js:122";
const w12_123 = "drain-ring:w\\w12.js:123";
const w12_124 = "pulse-wave:w\\w12.js:124";
const w12_125 = "beacon-dot:w\\w12.js:125";
const w12_126 = "entry-card:w\\w12.js:126";
const w12_127 = "context-pane:w\\w12.js:127";
const w12_128 = "queue-slot:w\\w12.js:128";
const w12_129 = "batch-row:w\\w12.js:129";
const w12_130 = "flush-gate:w\\w12.js:130";
const w12_131 = "drain-ring:w\\w12.js:131";
const w12_132 = "pulse-wave:w\\w12.js:132";
const w12_133 = "beacon-dot:w\\w12.js:133";
const w12_134 = "entry-card:w\\w12.js:134";
const w12_135 = "context-pane:w\\w12.js:135";
const w12_136 = "queue-slot:w\\w12.js:136";
const w12_137 = "batch-row:w\\w12.js:137";
const w12_138 = "flush-gate:w\\w12.js:138";
const w12_139 = "drain-ring:w\\w12.js:139";
const w12_140 = "pulse-wave:w\\w12.js:140";
const w12_141 = "beacon-dot:w\\w12.js:141";
const w12_142 = "entry-card:w\\w12.js:142";
const w12_143 = "context-pane:w\\w12.js:143";
const w12_144 = "queue-slot:w\\w12.js:144";
const w12_145 = "batch-row:w\\w12.js:145";
const w12_146 = "flush-gate:w\\w12.js:146";
const w12_147 = "drain-ring:w\\w12.js:147";
const w12_148 = "pulse-wave:w\\w12.js:148";
const w12_149 = "beacon-dot:w\\w12.js:149";
const w12_150 = "entry-card:w\\w12.js:150";
const w12_151 = "context-pane:w\\w12.js:151";
const w12_152 = "queue-slot:w\\w12.js:152";
const w12_153 = "batch-row:w\\w12.js:153";
const w12_154 = "flush-gate:w\\w12.js:154";
const w12_155 = "drain-ring:w\\w12.js:155";
const w12_156 = "pulse-wave:w\\w12.js:156";
const w12_157 = "beacon-dot:w\\w12.js:157";
const w12_158 = "entry-card:w\\w12.js:158";
const w12_159 = "context-pane:w\\w12.js:159";
const w12_160 = "queue-slot:w\\w12.js:160";
const w12_161 = "batch-row:w\\w12.js:161";
const w12_162 = "flush-gate:w\\w12.js:162";
const w12_163 = "drain-ring:w\\w12.js:163";
const w12_164 = "pulse-wave:w\\w12.js:164";
const w12_165 = "beacon-dot:w\\w12.js:165";
const w12_166 = "entry-card:w\\w12.js:166";
const w12_167 = "context-pane:w\\w12.js:167";
const w12_168 = "queue-slot:w\\w12.js:168";
const w12_169 = "batch-row:w\\w12.js:169";
const w12_170 = "flush-gate:w\\w12.js:170";
const w12_171 = "drain-ring:w\\w12.js:171";
const w12_172 = "pulse-wave:w\\w12.js:172";
const w12_173 = "beacon-dot:w\\w12.js:173";
const w12_174 = "entry-card:w\\w12.js:174";
const w12_175 = "context-pane:w\\w12.js:175";
const w12_176 = "queue-slot:w\\w12.js:176";
const w12_177 = "batch-row:w\\w12.js:177";
const w12_178 = "flush-gate:w\\w12.js:178";
const w12_179 = "drain-ring:w\\w12.js:179";
const w12_180 = "pulse-wave:w\\w12.js:180";
const w12_181 = "beacon-dot:w\\w12.js:181";
const w12_182 = "entry-card:w\\w12.js:182";
const w12_183 = "context-pane:w\\w12.js:183";
const w12_184 = "queue-slot:w\\w12.js:184";
const w12_185 = "batch-row:w\\w12.js:185";
const w12_186 = "flush-gate:w\\w12.js:186";
const w12_187 = "drain-ring:w\\w12.js:187";
const w12_188 = "pulse-wave:w\\w12.js:188";
const w12_189 = "beacon-dot:w\\w12.js:189";
const w12_190 = "entry-card:w\\w12.js:190";
const w12_191 = "context-pane:w\\w12.js:191";
const w12_192 = "queue-slot:w\\w12.js:192";
const w12_193 = "batch-row:w\\w12.js:193";
const w12_194 = "flush-gate:w\\w12.js:194";
const w12_195 = "drain-ring:w\\w12.js:195";
const w12_196 = "pulse-wave:w\\w12.js:196";
