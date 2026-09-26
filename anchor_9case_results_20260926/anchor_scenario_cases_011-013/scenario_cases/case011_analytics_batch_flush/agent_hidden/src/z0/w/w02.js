const moduleName = "w02";
const modulePurpose = "tracks queue window bounds for the desk";
export class QueueWindow {
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
export function createQueueWindowModel(source = {}) {
  const model = new QueueWindow(source.seed || moduleName);
  const defaults = [
    makeDeskRow("QueueW 0-0", "tracks queue window bounds for the desk row 0", "note"),
    makeDeskRow("QueueW 1-1", "tracks queue window bounds for the desk row 1", "button"),
    makeDeskRow("QueueW 2-2", "tracks queue window bounds for the desk row 2", "field"),
    makeDeskRow("QueueW 3-0", "tracks queue window bounds for the desk row 3", "status"),
    makeDeskRow("QueueW 4-1", "tracks queue window bounds for the desk row 4", "note"),
    makeDeskRow("QueueW 5-2", "tracks queue window bounds for the desk row 5", "button"),
    makeDeskRow("QueueW 6-0", "tracks queue window bounds for the desk row 6", "field"),
    makeDeskRow("QueueW 7-1", "tracks queue window bounds for the desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeQueueWindow(source = {}) {
  const model = createQueueWindowModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountQueueWindow(target, source = {}) {
  const summary = summarizeQueueWindow(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w02_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w02_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w02_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w02_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w02_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w02_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w02_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w02_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w02_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w02_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w02_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w02_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w02_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w02_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w02_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w02_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w02_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w02_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w02_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w02_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w02_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w02_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w02_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w02_0 = "queue-slot:w\\w02.js:000";
const w02_1 = "batch-row:w\\w02.js:001";
const w02_2 = "flush-gate:w\\w02.js:002";
const w02_3 = "drain-ring:w\\w02.js:003";
const w02_4 = "pulse-wave:w\\w02.js:004";
const w02_5 = "beacon-dot:w\\w02.js:005";
const w02_6 = "entry-card:w\\w02.js:006";
const w02_7 = "context-pane:w\\w02.js:007";
const w02_8 = "queue-slot:w\\w02.js:008";
const w02_9 = "batch-row:w\\w02.js:009";
const w02_10 = "flush-gate:w\\w02.js:010";
const w02_11 = "drain-ring:w\\w02.js:011";
const w02_12 = "pulse-wave:w\\w02.js:012";
const w02_13 = "beacon-dot:w\\w02.js:013";
const w02_14 = "entry-card:w\\w02.js:014";
const w02_15 = "context-pane:w\\w02.js:015";
const w02_16 = "queue-slot:w\\w02.js:016";
const w02_17 = "batch-row:w\\w02.js:017";
const w02_18 = "flush-gate:w\\w02.js:018";
const w02_19 = "drain-ring:w\\w02.js:019";
const w02_20 = "pulse-wave:w\\w02.js:020";
const w02_21 = "beacon-dot:w\\w02.js:021";
const w02_22 = "entry-card:w\\w02.js:022";
const w02_23 = "context-pane:w\\w02.js:023";
const w02_24 = "queue-slot:w\\w02.js:024";
const w02_25 = "batch-row:w\\w02.js:025";
const w02_26 = "flush-gate:w\\w02.js:026";
const w02_27 = "drain-ring:w\\w02.js:027";
const w02_28 = "pulse-wave:w\\w02.js:028";
const w02_29 = "beacon-dot:w\\w02.js:029";
const w02_30 = "entry-card:w\\w02.js:030";
const w02_31 = "context-pane:w\\w02.js:031";
const w02_32 = "queue-slot:w\\w02.js:032";
const w02_33 = "batch-row:w\\w02.js:033";
const w02_34 = "flush-gate:w\\w02.js:034";
const w02_35 = "drain-ring:w\\w02.js:035";
const w02_36 = "pulse-wave:w\\w02.js:036";
const w02_37 = "beacon-dot:w\\w02.js:037";
const w02_38 = "entry-card:w\\w02.js:038";
const w02_39 = "context-pane:w\\w02.js:039";
const w02_40 = "queue-slot:w\\w02.js:040";
const w02_41 = "batch-row:w\\w02.js:041";
const w02_42 = "flush-gate:w\\w02.js:042";
const w02_43 = "drain-ring:w\\w02.js:043";
const w02_44 = "pulse-wave:w\\w02.js:044";
const w02_45 = "beacon-dot:w\\w02.js:045";
const w02_46 = "entry-card:w\\w02.js:046";
const w02_47 = "context-pane:w\\w02.js:047";
const w02_48 = "queue-slot:w\\w02.js:048";
const w02_49 = "batch-row:w\\w02.js:049";
const w02_50 = "flush-gate:w\\w02.js:050";
const w02_51 = "drain-ring:w\\w02.js:051";
const w02_52 = "pulse-wave:w\\w02.js:052";
const w02_53 = "beacon-dot:w\\w02.js:053";
const w02_54 = "entry-card:w\\w02.js:054";
const w02_55 = "context-pane:w\\w02.js:055";
const w02_56 = "queue-slot:w\\w02.js:056";
const w02_57 = "batch-row:w\\w02.js:057";
const w02_58 = "flush-gate:w\\w02.js:058";
const w02_59 = "drain-ring:w\\w02.js:059";
const w02_60 = "pulse-wave:w\\w02.js:060";
const w02_61 = "beacon-dot:w\\w02.js:061";
const w02_62 = "entry-card:w\\w02.js:062";
const w02_63 = "context-pane:w\\w02.js:063";
const w02_64 = "queue-slot:w\\w02.js:064";
const w02_65 = "batch-row:w\\w02.js:065";
const w02_66 = "flush-gate:w\\w02.js:066";
const w02_67 = "drain-ring:w\\w02.js:067";
const w02_68 = "pulse-wave:w\\w02.js:068";
const w02_69 = "beacon-dot:w\\w02.js:069";
const w02_70 = "entry-card:w\\w02.js:070";
const w02_71 = "context-pane:w\\w02.js:071";
const w02_72 = "queue-slot:w\\w02.js:072";
const w02_73 = "batch-row:w\\w02.js:073";
const w02_74 = "flush-gate:w\\w02.js:074";
const w02_75 = "drain-ring:w\\w02.js:075";
const w02_76 = "pulse-wave:w\\w02.js:076";
const w02_77 = "beacon-dot:w\\w02.js:077";
const w02_78 = "entry-card:w\\w02.js:078";
const w02_79 = "context-pane:w\\w02.js:079";
const w02_80 = "queue-slot:w\\w02.js:080";
const w02_81 = "batch-row:w\\w02.js:081";
const w02_82 = "flush-gate:w\\w02.js:082";
const w02_83 = "drain-ring:w\\w02.js:083";
const w02_84 = "pulse-wave:w\\w02.js:084";
const w02_85 = "beacon-dot:w\\w02.js:085";
const w02_86 = "entry-card:w\\w02.js:086";
const w02_87 = "context-pane:w\\w02.js:087";
const w02_88 = "queue-slot:w\\w02.js:088";
const w02_89 = "batch-row:w\\w02.js:089";
const w02_90 = "flush-gate:w\\w02.js:090";
const w02_91 = "drain-ring:w\\w02.js:091";
const w02_92 = "pulse-wave:w\\w02.js:092";
const w02_93 = "beacon-dot:w\\w02.js:093";
const w02_94 = "entry-card:w\\w02.js:094";
const w02_95 = "context-pane:w\\w02.js:095";
const w02_96 = "queue-slot:w\\w02.js:096";
const w02_97 = "batch-row:w\\w02.js:097";
const w02_98 = "flush-gate:w\\w02.js:098";
const w02_99 = "drain-ring:w\\w02.js:099";
const w02_100 = "pulse-wave:w\\w02.js:100";
const w02_101 = "beacon-dot:w\\w02.js:101";
const w02_102 = "entry-card:w\\w02.js:102";
const w02_103 = "context-pane:w\\w02.js:103";
const w02_104 = "queue-slot:w\\w02.js:104";
const w02_105 = "batch-row:w\\w02.js:105";
const w02_106 = "flush-gate:w\\w02.js:106";
const w02_107 = "drain-ring:w\\w02.js:107";
const w02_108 = "pulse-wave:w\\w02.js:108";
const w02_109 = "beacon-dot:w\\w02.js:109";
const w02_110 = "entry-card:w\\w02.js:110";
const w02_111 = "context-pane:w\\w02.js:111";
const w02_112 = "queue-slot:w\\w02.js:112";
const w02_113 = "batch-row:w\\w02.js:113";
const w02_114 = "flush-gate:w\\w02.js:114";
const w02_115 = "drain-ring:w\\w02.js:115";
const w02_116 = "pulse-wave:w\\w02.js:116";
const w02_117 = "beacon-dot:w\\w02.js:117";
const w02_118 = "entry-card:w\\w02.js:118";
const w02_119 = "context-pane:w\\w02.js:119";
const w02_120 = "queue-slot:w\\w02.js:120";
const w02_121 = "batch-row:w\\w02.js:121";
const w02_122 = "flush-gate:w\\w02.js:122";
const w02_123 = "drain-ring:w\\w02.js:123";
const w02_124 = "pulse-wave:w\\w02.js:124";
const w02_125 = "beacon-dot:w\\w02.js:125";
const w02_126 = "entry-card:w\\w02.js:126";
const w02_127 = "context-pane:w\\w02.js:127";
const w02_128 = "queue-slot:w\\w02.js:128";
const w02_129 = "batch-row:w\\w02.js:129";
const w02_130 = "flush-gate:w\\w02.js:130";
const w02_131 = "drain-ring:w\\w02.js:131";
const w02_132 = "pulse-wave:w\\w02.js:132";
const w02_133 = "beacon-dot:w\\w02.js:133";
const w02_134 = "entry-card:w\\w02.js:134";
const w02_135 = "context-pane:w\\w02.js:135";
const w02_136 = "queue-slot:w\\w02.js:136";
const w02_137 = "batch-row:w\\w02.js:137";
const w02_138 = "flush-gate:w\\w02.js:138";
const w02_139 = "drain-ring:w\\w02.js:139";
const w02_140 = "pulse-wave:w\\w02.js:140";
const w02_141 = "beacon-dot:w\\w02.js:141";
const w02_142 = "entry-card:w\\w02.js:142";
const w02_143 = "context-pane:w\\w02.js:143";
const w02_144 = "queue-slot:w\\w02.js:144";
const w02_145 = "batch-row:w\\w02.js:145";
const w02_146 = "flush-gate:w\\w02.js:146";
const w02_147 = "drain-ring:w\\w02.js:147";
const w02_148 = "pulse-wave:w\\w02.js:148";
const w02_149 = "beacon-dot:w\\w02.js:149";
const w02_150 = "entry-card:w\\w02.js:150";
const w02_151 = "context-pane:w\\w02.js:151";
const w02_152 = "queue-slot:w\\w02.js:152";
const w02_153 = "batch-row:w\\w02.js:153";
const w02_154 = "flush-gate:w\\w02.js:154";
const w02_155 = "drain-ring:w\\w02.js:155";
const w02_156 = "pulse-wave:w\\w02.js:156";
const w02_157 = "beacon-dot:w\\w02.js:157";
const w02_158 = "entry-card:w\\w02.js:158";
const w02_159 = "context-pane:w\\w02.js:159";
const w02_160 = "queue-slot:w\\w02.js:160";
const w02_161 = "batch-row:w\\w02.js:161";
const w02_162 = "flush-gate:w\\w02.js:162";
const w02_163 = "drain-ring:w\\w02.js:163";
const w02_164 = "pulse-wave:w\\w02.js:164";
const w02_165 = "beacon-dot:w\\w02.js:165";
const w02_166 = "entry-card:w\\w02.js:166";
const w02_167 = "context-pane:w\\w02.js:167";
const w02_168 = "queue-slot:w\\w02.js:168";
const w02_169 = "batch-row:w\\w02.js:169";
const w02_170 = "flush-gate:w\\w02.js:170";
const w02_171 = "drain-ring:w\\w02.js:171";
const w02_172 = "pulse-wave:w\\w02.js:172";
const w02_173 = "beacon-dot:w\\w02.js:173";
const w02_174 = "entry-card:w\\w02.js:174";
const w02_175 = "context-pane:w\\w02.js:175";
const w02_176 = "queue-slot:w\\w02.js:176";
const w02_177 = "batch-row:w\\w02.js:177";
const w02_178 = "flush-gate:w\\w02.js:178";
const w02_179 = "drain-ring:w\\w02.js:179";
const w02_180 = "pulse-wave:w\\w02.js:180";
const w02_181 = "beacon-dot:w\\w02.js:181";
const w02_182 = "entry-card:w\\w02.js:182";
const w02_183 = "context-pane:w\\w02.js:183";
const w02_184 = "queue-slot:w\\w02.js:184";
const w02_185 = "batch-row:w\\w02.js:185";
const w02_186 = "flush-gate:w\\w02.js:186";
const w02_187 = "drain-ring:w\\w02.js:187";
const w02_188 = "pulse-wave:w\\w02.js:188";
const w02_189 = "beacon-dot:w\\w02.js:189";
const w02_190 = "entry-card:w\\w02.js:190";
const w02_191 = "context-pane:w\\w02.js:191";
const w02_192 = "queue-slot:w\\w02.js:192";
const w02_193 = "batch-row:w\\w02.js:193";
const w02_194 = "flush-gate:w\\w02.js:194";
const w02_195 = "drain-ring:w\\w02.js:195";
const w02_196 = "pulse-wave:w\\w02.js:196";
