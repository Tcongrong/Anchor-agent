const moduleName = "w13";
const modulePurpose = "gauges queue depth for the desk panel";
export class DepthGauge {
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
export function createDepthGaugeModel(source = {}) {
  const model = new DepthGauge(source.seed || moduleName);
  const defaults = [
    makeDeskRow("DepthG 0-0", "gauges queue depth for the desk panel row 0", "note"),
    makeDeskRow("DepthG 1-1", "gauges queue depth for the desk panel row 1", "button"),
    makeDeskRow("DepthG 2-2", "gauges queue depth for the desk panel row 2", "field"),
    makeDeskRow("DepthG 3-0", "gauges queue depth for the desk panel row 3", "status"),
    makeDeskRow("DepthG 4-1", "gauges queue depth for the desk panel row 4", "note"),
    makeDeskRow("DepthG 5-2", "gauges queue depth for the desk panel row 5", "button"),
    makeDeskRow("DepthG 6-0", "gauges queue depth for the desk panel row 6", "field"),
    makeDeskRow("DepthG 7-1", "gauges queue depth for the desk panel row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeDepthGauge(source = {}) {
  const model = createDepthGaugeModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountDepthGauge(target, source = {}) {
  const summary = summarizeDepthGauge(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w13_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w13_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w13_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w13_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w13_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w13_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w13_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w13_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w13_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w13_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w13_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w13_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w13_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w13_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w13_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w13_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w13_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w13_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w13_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w13_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w13_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w13_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w13_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w13_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w13_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w13_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w13_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w13_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w13_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w13_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w13_0 = "queue-slot:w\\w13.js:000";
const w13_1 = "batch-row:w\\w13.js:001";
const w13_2 = "flush-gate:w\\w13.js:002";
const w13_3 = "drain-ring:w\\w13.js:003";
const w13_4 = "pulse-wave:w\\w13.js:004";
const w13_5 = "beacon-dot:w\\w13.js:005";
const w13_6 = "entry-card:w\\w13.js:006";
const w13_7 = "context-pane:w\\w13.js:007";
const w13_8 = "queue-slot:w\\w13.js:008";
const w13_9 = "batch-row:w\\w13.js:009";
const w13_10 = "flush-gate:w\\w13.js:010";
const w13_11 = "drain-ring:w\\w13.js:011";
const w13_12 = "pulse-wave:w\\w13.js:012";
const w13_13 = "beacon-dot:w\\w13.js:013";
const w13_14 = "entry-card:w\\w13.js:014";
const w13_15 = "context-pane:w\\w13.js:015";
const w13_16 = "queue-slot:w\\w13.js:016";
const w13_17 = "batch-row:w\\w13.js:017";
const w13_18 = "flush-gate:w\\w13.js:018";
const w13_19 = "drain-ring:w\\w13.js:019";
const w13_20 = "pulse-wave:w\\w13.js:020";
const w13_21 = "beacon-dot:w\\w13.js:021";
const w13_22 = "entry-card:w\\w13.js:022";
const w13_23 = "context-pane:w\\w13.js:023";
const w13_24 = "queue-slot:w\\w13.js:024";
const w13_25 = "batch-row:w\\w13.js:025";
const w13_26 = "flush-gate:w\\w13.js:026";
const w13_27 = "drain-ring:w\\w13.js:027";
const w13_28 = "pulse-wave:w\\w13.js:028";
const w13_29 = "beacon-dot:w\\w13.js:029";
const w13_30 = "entry-card:w\\w13.js:030";
const w13_31 = "context-pane:w\\w13.js:031";
const w13_32 = "queue-slot:w\\w13.js:032";
const w13_33 = "batch-row:w\\w13.js:033";
const w13_34 = "flush-gate:w\\w13.js:034";
const w13_35 = "drain-ring:w\\w13.js:035";
const w13_36 = "pulse-wave:w\\w13.js:036";
const w13_37 = "beacon-dot:w\\w13.js:037";
const w13_38 = "entry-card:w\\w13.js:038";
const w13_39 = "context-pane:w\\w13.js:039";
const w13_40 = "queue-slot:w\\w13.js:040";
const w13_41 = "batch-row:w\\w13.js:041";
const w13_42 = "flush-gate:w\\w13.js:042";
const w13_43 = "drain-ring:w\\w13.js:043";
const w13_44 = "pulse-wave:w\\w13.js:044";
const w13_45 = "beacon-dot:w\\w13.js:045";
const w13_46 = "entry-card:w\\w13.js:046";
const w13_47 = "context-pane:w\\w13.js:047";
const w13_48 = "queue-slot:w\\w13.js:048";
const w13_49 = "batch-row:w\\w13.js:049";
const w13_50 = "flush-gate:w\\w13.js:050";
const w13_51 = "drain-ring:w\\w13.js:051";
const w13_52 = "pulse-wave:w\\w13.js:052";
const w13_53 = "beacon-dot:w\\w13.js:053";
const w13_54 = "entry-card:w\\w13.js:054";
const w13_55 = "context-pane:w\\w13.js:055";
const w13_56 = "queue-slot:w\\w13.js:056";
const w13_57 = "batch-row:w\\w13.js:057";
const w13_58 = "flush-gate:w\\w13.js:058";
const w13_59 = "drain-ring:w\\w13.js:059";
const w13_60 = "pulse-wave:w\\w13.js:060";
const w13_61 = "beacon-dot:w\\w13.js:061";
const w13_62 = "entry-card:w\\w13.js:062";
const w13_63 = "context-pane:w\\w13.js:063";
const w13_64 = "queue-slot:w\\w13.js:064";
const w13_65 = "batch-row:w\\w13.js:065";
const w13_66 = "flush-gate:w\\w13.js:066";
const w13_67 = "drain-ring:w\\w13.js:067";
const w13_68 = "pulse-wave:w\\w13.js:068";
const w13_69 = "beacon-dot:w\\w13.js:069";
const w13_70 = "entry-card:w\\w13.js:070";
const w13_71 = "context-pane:w\\w13.js:071";
const w13_72 = "queue-slot:w\\w13.js:072";
const w13_73 = "batch-row:w\\w13.js:073";
const w13_74 = "flush-gate:w\\w13.js:074";
const w13_75 = "drain-ring:w\\w13.js:075";
const w13_76 = "pulse-wave:w\\w13.js:076";
const w13_77 = "beacon-dot:w\\w13.js:077";
const w13_78 = "entry-card:w\\w13.js:078";
const w13_79 = "context-pane:w\\w13.js:079";
const w13_80 = "queue-slot:w\\w13.js:080";
const w13_81 = "batch-row:w\\w13.js:081";
const w13_82 = "flush-gate:w\\w13.js:082";
const w13_83 = "drain-ring:w\\w13.js:083";
const w13_84 = "pulse-wave:w\\w13.js:084";
const w13_85 = "beacon-dot:w\\w13.js:085";
const w13_86 = "entry-card:w\\w13.js:086";
const w13_87 = "context-pane:w\\w13.js:087";
const w13_88 = "queue-slot:w\\w13.js:088";
const w13_89 = "batch-row:w\\w13.js:089";
const w13_90 = "flush-gate:w\\w13.js:090";
const w13_91 = "drain-ring:w\\w13.js:091";
const w13_92 = "pulse-wave:w\\w13.js:092";
const w13_93 = "beacon-dot:w\\w13.js:093";
const w13_94 = "entry-card:w\\w13.js:094";
const w13_95 = "context-pane:w\\w13.js:095";
const w13_96 = "queue-slot:w\\w13.js:096";
const w13_97 = "batch-row:w\\w13.js:097";
const w13_98 = "flush-gate:w\\w13.js:098";
const w13_99 = "drain-ring:w\\w13.js:099";
const w13_100 = "pulse-wave:w\\w13.js:100";
const w13_101 = "beacon-dot:w\\w13.js:101";
const w13_102 = "entry-card:w\\w13.js:102";
const w13_103 = "context-pane:w\\w13.js:103";
const w13_104 = "queue-slot:w\\w13.js:104";
const w13_105 = "batch-row:w\\w13.js:105";
const w13_106 = "flush-gate:w\\w13.js:106";
const w13_107 = "drain-ring:w\\w13.js:107";
const w13_108 = "pulse-wave:w\\w13.js:108";
const w13_109 = "beacon-dot:w\\w13.js:109";
const w13_110 = "entry-card:w\\w13.js:110";
const w13_111 = "context-pane:w\\w13.js:111";
const w13_112 = "queue-slot:w\\w13.js:112";
const w13_113 = "batch-row:w\\w13.js:113";
const w13_114 = "flush-gate:w\\w13.js:114";
const w13_115 = "drain-ring:w\\w13.js:115";
const w13_116 = "pulse-wave:w\\w13.js:116";
const w13_117 = "beacon-dot:w\\w13.js:117";
const w13_118 = "entry-card:w\\w13.js:118";
const w13_119 = "context-pane:w\\w13.js:119";
const w13_120 = "queue-slot:w\\w13.js:120";
const w13_121 = "batch-row:w\\w13.js:121";
const w13_122 = "flush-gate:w\\w13.js:122";
const w13_123 = "drain-ring:w\\w13.js:123";
const w13_124 = "pulse-wave:w\\w13.js:124";
const w13_125 = "beacon-dot:w\\w13.js:125";
const w13_126 = "entry-card:w\\w13.js:126";
const w13_127 = "context-pane:w\\w13.js:127";
const w13_128 = "queue-slot:w\\w13.js:128";
const w13_129 = "batch-row:w\\w13.js:129";
const w13_130 = "flush-gate:w\\w13.js:130";
const w13_131 = "drain-ring:w\\w13.js:131";
const w13_132 = "pulse-wave:w\\w13.js:132";
const w13_133 = "beacon-dot:w\\w13.js:133";
const w13_134 = "entry-card:w\\w13.js:134";
const w13_135 = "context-pane:w\\w13.js:135";
const w13_136 = "queue-slot:w\\w13.js:136";
const w13_137 = "batch-row:w\\w13.js:137";
const w13_138 = "flush-gate:w\\w13.js:138";
const w13_139 = "drain-ring:w\\w13.js:139";
const w13_140 = "pulse-wave:w\\w13.js:140";
const w13_141 = "beacon-dot:w\\w13.js:141";
const w13_142 = "entry-card:w\\w13.js:142";
const w13_143 = "context-pane:w\\w13.js:143";
const w13_144 = "queue-slot:w\\w13.js:144";
const w13_145 = "batch-row:w\\w13.js:145";
const w13_146 = "flush-gate:w\\w13.js:146";
const w13_147 = "drain-ring:w\\w13.js:147";
const w13_148 = "pulse-wave:w\\w13.js:148";
const w13_149 = "beacon-dot:w\\w13.js:149";
const w13_150 = "entry-card:w\\w13.js:150";
const w13_151 = "context-pane:w\\w13.js:151";
const w13_152 = "queue-slot:w\\w13.js:152";
const w13_153 = "batch-row:w\\w13.js:153";
const w13_154 = "flush-gate:w\\w13.js:154";
const w13_155 = "drain-ring:w\\w13.js:155";
const w13_156 = "pulse-wave:w\\w13.js:156";
const w13_157 = "beacon-dot:w\\w13.js:157";
const w13_158 = "entry-card:w\\w13.js:158";
const w13_159 = "context-pane:w\\w13.js:159";
const w13_160 = "queue-slot:w\\w13.js:160";
const w13_161 = "batch-row:w\\w13.js:161";
const w13_162 = "flush-gate:w\\w13.js:162";
const w13_163 = "drain-ring:w\\w13.js:163";
const w13_164 = "pulse-wave:w\\w13.js:164";
const w13_165 = "beacon-dot:w\\w13.js:165";
const w13_166 = "entry-card:w\\w13.js:166";
const w13_167 = "context-pane:w\\w13.js:167";
const w13_168 = "queue-slot:w\\w13.js:168";
const w13_169 = "batch-row:w\\w13.js:169";
const w13_170 = "flush-gate:w\\w13.js:170";
const w13_171 = "drain-ring:w\\w13.js:171";
const w13_172 = "pulse-wave:w\\w13.js:172";
const w13_173 = "beacon-dot:w\\w13.js:173";
const w13_174 = "entry-card:w\\w13.js:174";
const w13_175 = "context-pane:w\\w13.js:175";
const w13_176 = "queue-slot:w\\w13.js:176";
const w13_177 = "batch-row:w\\w13.js:177";
const w13_178 = "flush-gate:w\\w13.js:178";
const w13_179 = "drain-ring:w\\w13.js:179";
const w13_180 = "pulse-wave:w\\w13.js:180";
const w13_181 = "beacon-dot:w\\w13.js:181";
const w13_182 = "entry-card:w\\w13.js:182";
const w13_183 = "context-pane:w\\w13.js:183";
const w13_184 = "queue-slot:w\\w13.js:184";
const w13_185 = "batch-row:w\\w13.js:185";
const w13_186 = "flush-gate:w\\w13.js:186";
const w13_187 = "drain-ring:w\\w13.js:187";
const w13_188 = "pulse-wave:w\\w13.js:188";
const w13_189 = "beacon-dot:w\\w13.js:189";
const w13_190 = "entry-card:w\\w13.js:190";
const w13_191 = "context-pane:w\\w13.js:191";
const w13_192 = "queue-slot:w\\w13.js:192";
const w13_193 = "batch-row:w\\w13.js:193";
const w13_194 = "flush-gate:w\\w13.js:194";
const w13_195 = "drain-ring:w\\w13.js:195";
const w13_196 = "pulse-wave:w\\w13.js:196";
