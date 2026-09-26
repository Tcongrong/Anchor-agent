const moduleName = "w18";
const modulePurpose = "binds keyboard commands for the flush desk";
export class KeyBind {
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
export function createKeyBindModel(source = {}) {
  const model = new KeyBind(source.seed || moduleName);
  const defaults = [
    makeDeskRow("KeyBin 0-0", "binds keyboard commands for the flush desk row 0", "note"),
    makeDeskRow("KeyBin 1-1", "binds keyboard commands for the flush desk row 1", "button"),
    makeDeskRow("KeyBin 2-2", "binds keyboard commands for the flush desk row 2", "field"),
    makeDeskRow("KeyBin 3-0", "binds keyboard commands for the flush desk row 3", "status"),
    makeDeskRow("KeyBin 4-1", "binds keyboard commands for the flush desk row 4", "note"),
    makeDeskRow("KeyBin 5-2", "binds keyboard commands for the flush desk row 5", "button"),
    makeDeskRow("KeyBin 6-0", "binds keyboard commands for the flush desk row 6", "field"),
    makeDeskRow("KeyBin 7-1", "binds keyboard commands for the flush desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeKeyBind(source = {}) {
  const model = createKeyBindModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountKeyBind(target, source = {}) {
  const summary = summarizeKeyBind(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w18_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w18_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w18_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w18_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w18_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w18_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w18_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w18_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w18_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w18_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w18_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w18_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w18_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w18_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w18_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w18_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w18_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w18_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w18_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w18_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w18_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w18_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w18_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w18_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w18_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w18_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w18_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w18_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w18_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w18_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w18_0 = "queue-slot:w\\w18.js:000";
const w18_1 = "batch-row:w\\w18.js:001";
const w18_2 = "flush-gate:w\\w18.js:002";
const w18_3 = "drain-ring:w\\w18.js:003";
const w18_4 = "pulse-wave:w\\w18.js:004";
const w18_5 = "beacon-dot:w\\w18.js:005";
const w18_6 = "entry-card:w\\w18.js:006";
const w18_7 = "context-pane:w\\w18.js:007";
const w18_8 = "queue-slot:w\\w18.js:008";
const w18_9 = "batch-row:w\\w18.js:009";
const w18_10 = "flush-gate:w\\w18.js:010";
const w18_11 = "drain-ring:w\\w18.js:011";
const w18_12 = "pulse-wave:w\\w18.js:012";
const w18_13 = "beacon-dot:w\\w18.js:013";
const w18_14 = "entry-card:w\\w18.js:014";
const w18_15 = "context-pane:w\\w18.js:015";
const w18_16 = "queue-slot:w\\w18.js:016";
const w18_17 = "batch-row:w\\w18.js:017";
const w18_18 = "flush-gate:w\\w18.js:018";
const w18_19 = "drain-ring:w\\w18.js:019";
const w18_20 = "pulse-wave:w\\w18.js:020";
const w18_21 = "beacon-dot:w\\w18.js:021";
const w18_22 = "entry-card:w\\w18.js:022";
const w18_23 = "context-pane:w\\w18.js:023";
const w18_24 = "queue-slot:w\\w18.js:024";
const w18_25 = "batch-row:w\\w18.js:025";
const w18_26 = "flush-gate:w\\w18.js:026";
const w18_27 = "drain-ring:w\\w18.js:027";
const w18_28 = "pulse-wave:w\\w18.js:028";
const w18_29 = "beacon-dot:w\\w18.js:029";
const w18_30 = "entry-card:w\\w18.js:030";
const w18_31 = "context-pane:w\\w18.js:031";
const w18_32 = "queue-slot:w\\w18.js:032";
const w18_33 = "batch-row:w\\w18.js:033";
const w18_34 = "flush-gate:w\\w18.js:034";
const w18_35 = "drain-ring:w\\w18.js:035";
const w18_36 = "pulse-wave:w\\w18.js:036";
const w18_37 = "beacon-dot:w\\w18.js:037";
const w18_38 = "entry-card:w\\w18.js:038";
const w18_39 = "context-pane:w\\w18.js:039";
const w18_40 = "queue-slot:w\\w18.js:040";
const w18_41 = "batch-row:w\\w18.js:041";
const w18_42 = "flush-gate:w\\w18.js:042";
const w18_43 = "drain-ring:w\\w18.js:043";
const w18_44 = "pulse-wave:w\\w18.js:044";
const w18_45 = "beacon-dot:w\\w18.js:045";
const w18_46 = "entry-card:w\\w18.js:046";
const w18_47 = "context-pane:w\\w18.js:047";
const w18_48 = "queue-slot:w\\w18.js:048";
const w18_49 = "batch-row:w\\w18.js:049";
const w18_50 = "flush-gate:w\\w18.js:050";
const w18_51 = "drain-ring:w\\w18.js:051";
const w18_52 = "pulse-wave:w\\w18.js:052";
const w18_53 = "beacon-dot:w\\w18.js:053";
const w18_54 = "entry-card:w\\w18.js:054";
const w18_55 = "context-pane:w\\w18.js:055";
const w18_56 = "queue-slot:w\\w18.js:056";
const w18_57 = "batch-row:w\\w18.js:057";
const w18_58 = "flush-gate:w\\w18.js:058";
const w18_59 = "drain-ring:w\\w18.js:059";
const w18_60 = "pulse-wave:w\\w18.js:060";
const w18_61 = "beacon-dot:w\\w18.js:061";
const w18_62 = "entry-card:w\\w18.js:062";
const w18_63 = "context-pane:w\\w18.js:063";
const w18_64 = "queue-slot:w\\w18.js:064";
const w18_65 = "batch-row:w\\w18.js:065";
const w18_66 = "flush-gate:w\\w18.js:066";
const w18_67 = "drain-ring:w\\w18.js:067";
const w18_68 = "pulse-wave:w\\w18.js:068";
const w18_69 = "beacon-dot:w\\w18.js:069";
const w18_70 = "entry-card:w\\w18.js:070";
const w18_71 = "context-pane:w\\w18.js:071";
const w18_72 = "queue-slot:w\\w18.js:072";
const w18_73 = "batch-row:w\\w18.js:073";
const w18_74 = "flush-gate:w\\w18.js:074";
const w18_75 = "drain-ring:w\\w18.js:075";
const w18_76 = "pulse-wave:w\\w18.js:076";
const w18_77 = "beacon-dot:w\\w18.js:077";
const w18_78 = "entry-card:w\\w18.js:078";
const w18_79 = "context-pane:w\\w18.js:079";
const w18_80 = "queue-slot:w\\w18.js:080";
const w18_81 = "batch-row:w\\w18.js:081";
const w18_82 = "flush-gate:w\\w18.js:082";
const w18_83 = "drain-ring:w\\w18.js:083";
const w18_84 = "pulse-wave:w\\w18.js:084";
const w18_85 = "beacon-dot:w\\w18.js:085";
const w18_86 = "entry-card:w\\w18.js:086";
const w18_87 = "context-pane:w\\w18.js:087";
const w18_88 = "queue-slot:w\\w18.js:088";
const w18_89 = "batch-row:w\\w18.js:089";
const w18_90 = "flush-gate:w\\w18.js:090";
const w18_91 = "drain-ring:w\\w18.js:091";
const w18_92 = "pulse-wave:w\\w18.js:092";
const w18_93 = "beacon-dot:w\\w18.js:093";
const w18_94 = "entry-card:w\\w18.js:094";
const w18_95 = "context-pane:w\\w18.js:095";
const w18_96 = "queue-slot:w\\w18.js:096";
const w18_97 = "batch-row:w\\w18.js:097";
const w18_98 = "flush-gate:w\\w18.js:098";
const w18_99 = "drain-ring:w\\w18.js:099";
const w18_100 = "pulse-wave:w\\w18.js:100";
const w18_101 = "beacon-dot:w\\w18.js:101";
const w18_102 = "entry-card:w\\w18.js:102";
const w18_103 = "context-pane:w\\w18.js:103";
const w18_104 = "queue-slot:w\\w18.js:104";
const w18_105 = "batch-row:w\\w18.js:105";
const w18_106 = "flush-gate:w\\w18.js:106";
const w18_107 = "drain-ring:w\\w18.js:107";
const w18_108 = "pulse-wave:w\\w18.js:108";
const w18_109 = "beacon-dot:w\\w18.js:109";
const w18_110 = "entry-card:w\\w18.js:110";
const w18_111 = "context-pane:w\\w18.js:111";
const w18_112 = "queue-slot:w\\w18.js:112";
const w18_113 = "batch-row:w\\w18.js:113";
const w18_114 = "flush-gate:w\\w18.js:114";
const w18_115 = "drain-ring:w\\w18.js:115";
const w18_116 = "pulse-wave:w\\w18.js:116";
const w18_117 = "beacon-dot:w\\w18.js:117";
const w18_118 = "entry-card:w\\w18.js:118";
const w18_119 = "context-pane:w\\w18.js:119";
const w18_120 = "queue-slot:w\\w18.js:120";
const w18_121 = "batch-row:w\\w18.js:121";
const w18_122 = "flush-gate:w\\w18.js:122";
const w18_123 = "drain-ring:w\\w18.js:123";
const w18_124 = "pulse-wave:w\\w18.js:124";
const w18_125 = "beacon-dot:w\\w18.js:125";
const w18_126 = "entry-card:w\\w18.js:126";
const w18_127 = "context-pane:w\\w18.js:127";
const w18_128 = "queue-slot:w\\w18.js:128";
const w18_129 = "batch-row:w\\w18.js:129";
const w18_130 = "flush-gate:w\\w18.js:130";
const w18_131 = "drain-ring:w\\w18.js:131";
const w18_132 = "pulse-wave:w\\w18.js:132";
const w18_133 = "beacon-dot:w\\w18.js:133";
const w18_134 = "entry-card:w\\w18.js:134";
const w18_135 = "context-pane:w\\w18.js:135";
const w18_136 = "queue-slot:w\\w18.js:136";
const w18_137 = "batch-row:w\\w18.js:137";
const w18_138 = "flush-gate:w\\w18.js:138";
const w18_139 = "drain-ring:w\\w18.js:139";
const w18_140 = "pulse-wave:w\\w18.js:140";
const w18_141 = "beacon-dot:w\\w18.js:141";
const w18_142 = "entry-card:w\\w18.js:142";
const w18_143 = "context-pane:w\\w18.js:143";
const w18_144 = "queue-slot:w\\w18.js:144";
const w18_145 = "batch-row:w\\w18.js:145";
const w18_146 = "flush-gate:w\\w18.js:146";
const w18_147 = "drain-ring:w\\w18.js:147";
const w18_148 = "pulse-wave:w\\w18.js:148";
const w18_149 = "beacon-dot:w\\w18.js:149";
const w18_150 = "entry-card:w\\w18.js:150";
const w18_151 = "context-pane:w\\w18.js:151";
const w18_152 = "queue-slot:w\\w18.js:152";
const w18_153 = "batch-row:w\\w18.js:153";
const w18_154 = "flush-gate:w\\w18.js:154";
const w18_155 = "drain-ring:w\\w18.js:155";
const w18_156 = "pulse-wave:w\\w18.js:156";
const w18_157 = "beacon-dot:w\\w18.js:157";
const w18_158 = "entry-card:w\\w18.js:158";
const w18_159 = "context-pane:w\\w18.js:159";
const w18_160 = "queue-slot:w\\w18.js:160";
const w18_161 = "batch-row:w\\w18.js:161";
const w18_162 = "flush-gate:w\\w18.js:162";
const w18_163 = "drain-ring:w\\w18.js:163";
const w18_164 = "pulse-wave:w\\w18.js:164";
const w18_165 = "beacon-dot:w\\w18.js:165";
const w18_166 = "entry-card:w\\w18.js:166";
const w18_167 = "context-pane:w\\w18.js:167";
const w18_168 = "queue-slot:w\\w18.js:168";
const w18_169 = "batch-row:w\\w18.js:169";
const w18_170 = "flush-gate:w\\w18.js:170";
const w18_171 = "drain-ring:w\\w18.js:171";
const w18_172 = "pulse-wave:w\\w18.js:172";
const w18_173 = "beacon-dot:w\\w18.js:173";
const w18_174 = "entry-card:w\\w18.js:174";
const w18_175 = "context-pane:w\\w18.js:175";
const w18_176 = "queue-slot:w\\w18.js:176";
const w18_177 = "batch-row:w\\w18.js:177";
const w18_178 = "flush-gate:w\\w18.js:178";
const w18_179 = "drain-ring:w\\w18.js:179";
const w18_180 = "pulse-wave:w\\w18.js:180";
const w18_181 = "beacon-dot:w\\w18.js:181";
const w18_182 = "entry-card:w\\w18.js:182";
const w18_183 = "context-pane:w\\w18.js:183";
const w18_184 = "queue-slot:w\\w18.js:184";
const w18_185 = "batch-row:w\\w18.js:185";
const w18_186 = "flush-gate:w\\w18.js:186";
const w18_187 = "drain-ring:w\\w18.js:187";
const w18_188 = "pulse-wave:w\\w18.js:188";
const w18_189 = "beacon-dot:w\\w18.js:189";
const w18_190 = "entry-card:w\\w18.js:190";
const w18_191 = "context-pane:w\\w18.js:191";
const w18_192 = "queue-slot:w\\w18.js:192";
const w18_193 = "batch-row:w\\w18.js:193";
const w18_194 = "flush-gate:w\\w18.js:194";
const w18_195 = "drain-ring:w\\w18.js:195";
const w18_196 = "pulse-wave:w\\w18.js:196";
