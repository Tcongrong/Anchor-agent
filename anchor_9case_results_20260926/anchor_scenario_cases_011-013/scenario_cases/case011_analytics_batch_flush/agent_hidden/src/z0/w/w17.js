const moduleName = "w17";
const modulePurpose = "rings layer visibility for pulse panes";
export class LayerRing {
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
export function createLayerRingModel(source = {}) {
  const model = new LayerRing(source.seed || moduleName);
  const defaults = [
    makeDeskRow("LayerR 0-0", "rings layer visibility for pulse panes row 0", "note"),
    makeDeskRow("LayerR 1-1", "rings layer visibility for pulse panes row 1", "button"),
    makeDeskRow("LayerR 2-2", "rings layer visibility for pulse panes row 2", "field"),
    makeDeskRow("LayerR 3-0", "rings layer visibility for pulse panes row 3", "status"),
    makeDeskRow("LayerR 4-1", "rings layer visibility for pulse panes row 4", "note"),
    makeDeskRow("LayerR 5-2", "rings layer visibility for pulse panes row 5", "button"),
    makeDeskRow("LayerR 6-0", "rings layer visibility for pulse panes row 6", "field"),
    makeDeskRow("LayerR 7-1", "rings layer visibility for pulse panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeLayerRing(source = {}) {
  const model = createLayerRingModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountLayerRing(target, source = {}) {
  const summary = summarizeLayerRing(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openQueue_00(state = {}) {
  const label = normalizeLabel(state.label || "openQueue");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openQueue" };
}
export function w17_closeSlot_01(state = {}) {
  const label = normalizeLabel(state.label || "closeSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeSlot" };
}
export function w17_queueBeat_02(state = {}) {
  const label = normalizeLabel(state.label || "queueBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueBeat" };
}
export function w17_cancelBeat_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelBeat");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelBeat" };
}
export function w17_updateWave_04(state = {}) {
  const label = normalizeLabel(state.label || "updateWave");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateWave" };
}
export function w17_setSlot_05(state = {}) {
  const label = normalizeLabel(state.label || "setSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setSlot" };
}
export function w17_syncDepth_06(state = {}) {
  const label = normalizeLabel(state.label || "syncDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncDepth" };
}
export function w17_markDone_07(state = {}) {
  const label = normalizeLabel(state.label || "markDone");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markDone" };
}
export function w17_pushBatch_08(state = {}) {
  const label = normalizeLabel(state.label || "pushBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushBatch" };
}
export function w17_popBatch_09(state = {}) {
  const label = normalizeLabel(state.label || "popBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popBatch" };
}
export function w17_resetDepth_10(state = {}) {
  const label = normalizeLabel(state.label || "resetDepth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetDepth" };
}
export function w17_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w17_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w17_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w17_scrollSlot_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollSlot" };
}
export function w17_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w17_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w17_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w17_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w17_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w17_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w17_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w17_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w17_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w17_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w17_sealFlush_25(state = {}) {
  const label = normalizeLabel(state.label || "sealFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealFlush" };
}
export function w17_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w17_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w17_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w17_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w17_0 = "queue-slot:w\\w17.js:000";
const w17_1 = "batch-row:w\\w17.js:001";
const w17_2 = "flush-gate:w\\w17.js:002";
const w17_3 = "drain-ring:w\\w17.js:003";
const w17_4 = "pulse-wave:w\\w17.js:004";
const w17_5 = "beacon-dot:w\\w17.js:005";
const w17_6 = "entry-card:w\\w17.js:006";
const w17_7 = "context-pane:w\\w17.js:007";
const w17_8 = "queue-slot:w\\w17.js:008";
const w17_9 = "batch-row:w\\w17.js:009";
const w17_10 = "flush-gate:w\\w17.js:010";
const w17_11 = "drain-ring:w\\w17.js:011";
const w17_12 = "pulse-wave:w\\w17.js:012";
const w17_13 = "beacon-dot:w\\w17.js:013";
const w17_14 = "entry-card:w\\w17.js:014";
const w17_15 = "context-pane:w\\w17.js:015";
const w17_16 = "queue-slot:w\\w17.js:016";
const w17_17 = "batch-row:w\\w17.js:017";
const w17_18 = "flush-gate:w\\w17.js:018";
const w17_19 = "drain-ring:w\\w17.js:019";
const w17_20 = "pulse-wave:w\\w17.js:020";
const w17_21 = "beacon-dot:w\\w17.js:021";
const w17_22 = "entry-card:w\\w17.js:022";
const w17_23 = "context-pane:w\\w17.js:023";
const w17_24 = "queue-slot:w\\w17.js:024";
const w17_25 = "batch-row:w\\w17.js:025";
const w17_26 = "flush-gate:w\\w17.js:026";
const w17_27 = "drain-ring:w\\w17.js:027";
const w17_28 = "pulse-wave:w\\w17.js:028";
const w17_29 = "beacon-dot:w\\w17.js:029";
const w17_30 = "entry-card:w\\w17.js:030";
const w17_31 = "context-pane:w\\w17.js:031";
const w17_32 = "queue-slot:w\\w17.js:032";
const w17_33 = "batch-row:w\\w17.js:033";
const w17_34 = "flush-gate:w\\w17.js:034";
const w17_35 = "drain-ring:w\\w17.js:035";
const w17_36 = "pulse-wave:w\\w17.js:036";
const w17_37 = "beacon-dot:w\\w17.js:037";
const w17_38 = "entry-card:w\\w17.js:038";
const w17_39 = "context-pane:w\\w17.js:039";
const w17_40 = "queue-slot:w\\w17.js:040";
const w17_41 = "batch-row:w\\w17.js:041";
const w17_42 = "flush-gate:w\\w17.js:042";
const w17_43 = "drain-ring:w\\w17.js:043";
const w17_44 = "pulse-wave:w\\w17.js:044";
const w17_45 = "beacon-dot:w\\w17.js:045";
const w17_46 = "entry-card:w\\w17.js:046";
const w17_47 = "context-pane:w\\w17.js:047";
const w17_48 = "queue-slot:w\\w17.js:048";
const w17_49 = "batch-row:w\\w17.js:049";
const w17_50 = "flush-gate:w\\w17.js:050";
const w17_51 = "drain-ring:w\\w17.js:051";
const w17_52 = "pulse-wave:w\\w17.js:052";
const w17_53 = "beacon-dot:w\\w17.js:053";
const w17_54 = "entry-card:w\\w17.js:054";
const w17_55 = "context-pane:w\\w17.js:055";
const w17_56 = "queue-slot:w\\w17.js:056";
const w17_57 = "batch-row:w\\w17.js:057";
const w17_58 = "flush-gate:w\\w17.js:058";
const w17_59 = "drain-ring:w\\w17.js:059";
const w17_60 = "pulse-wave:w\\w17.js:060";
const w17_61 = "beacon-dot:w\\w17.js:061";
const w17_62 = "entry-card:w\\w17.js:062";
const w17_63 = "context-pane:w\\w17.js:063";
const w17_64 = "queue-slot:w\\w17.js:064";
const w17_65 = "batch-row:w\\w17.js:065";
const w17_66 = "flush-gate:w\\w17.js:066";
const w17_67 = "drain-ring:w\\w17.js:067";
const w17_68 = "pulse-wave:w\\w17.js:068";
const w17_69 = "beacon-dot:w\\w17.js:069";
const w17_70 = "entry-card:w\\w17.js:070";
const w17_71 = "context-pane:w\\w17.js:071";
const w17_72 = "queue-slot:w\\w17.js:072";
const w17_73 = "batch-row:w\\w17.js:073";
const w17_74 = "flush-gate:w\\w17.js:074";
const w17_75 = "drain-ring:w\\w17.js:075";
const w17_76 = "pulse-wave:w\\w17.js:076";
const w17_77 = "beacon-dot:w\\w17.js:077";
const w17_78 = "entry-card:w\\w17.js:078";
const w17_79 = "context-pane:w\\w17.js:079";
const w17_80 = "queue-slot:w\\w17.js:080";
const w17_81 = "batch-row:w\\w17.js:081";
const w17_82 = "flush-gate:w\\w17.js:082";
const w17_83 = "drain-ring:w\\w17.js:083";
const w17_84 = "pulse-wave:w\\w17.js:084";
const w17_85 = "beacon-dot:w\\w17.js:085";
const w17_86 = "entry-card:w\\w17.js:086";
const w17_87 = "context-pane:w\\w17.js:087";
const w17_88 = "queue-slot:w\\w17.js:088";
const w17_89 = "batch-row:w\\w17.js:089";
const w17_90 = "flush-gate:w\\w17.js:090";
const w17_91 = "drain-ring:w\\w17.js:091";
const w17_92 = "pulse-wave:w\\w17.js:092";
const w17_93 = "beacon-dot:w\\w17.js:093";
const w17_94 = "entry-card:w\\w17.js:094";
const w17_95 = "context-pane:w\\w17.js:095";
const w17_96 = "queue-slot:w\\w17.js:096";
const w17_97 = "batch-row:w\\w17.js:097";
const w17_98 = "flush-gate:w\\w17.js:098";
const w17_99 = "drain-ring:w\\w17.js:099";
const w17_100 = "pulse-wave:w\\w17.js:100";
const w17_101 = "beacon-dot:w\\w17.js:101";
const w17_102 = "entry-card:w\\w17.js:102";
const w17_103 = "context-pane:w\\w17.js:103";
const w17_104 = "queue-slot:w\\w17.js:104";
const w17_105 = "batch-row:w\\w17.js:105";
const w17_106 = "flush-gate:w\\w17.js:106";
const w17_107 = "drain-ring:w\\w17.js:107";
const w17_108 = "pulse-wave:w\\w17.js:108";
const w17_109 = "beacon-dot:w\\w17.js:109";
const w17_110 = "entry-card:w\\w17.js:110";
const w17_111 = "context-pane:w\\w17.js:111";
const w17_112 = "queue-slot:w\\w17.js:112";
const w17_113 = "batch-row:w\\w17.js:113";
const w17_114 = "flush-gate:w\\w17.js:114";
const w17_115 = "drain-ring:w\\w17.js:115";
const w17_116 = "pulse-wave:w\\w17.js:116";
const w17_117 = "beacon-dot:w\\w17.js:117";
const w17_118 = "entry-card:w\\w17.js:118";
const w17_119 = "context-pane:w\\w17.js:119";
const w17_120 = "queue-slot:w\\w17.js:120";
const w17_121 = "batch-row:w\\w17.js:121";
const w17_122 = "flush-gate:w\\w17.js:122";
const w17_123 = "drain-ring:w\\w17.js:123";
const w17_124 = "pulse-wave:w\\w17.js:124";
const w17_125 = "beacon-dot:w\\w17.js:125";
const w17_126 = "entry-card:w\\w17.js:126";
const w17_127 = "context-pane:w\\w17.js:127";
const w17_128 = "queue-slot:w\\w17.js:128";
const w17_129 = "batch-row:w\\w17.js:129";
const w17_130 = "flush-gate:w\\w17.js:130";
const w17_131 = "drain-ring:w\\w17.js:131";
const w17_132 = "pulse-wave:w\\w17.js:132";
const w17_133 = "beacon-dot:w\\w17.js:133";
const w17_134 = "entry-card:w\\w17.js:134";
const w17_135 = "context-pane:w\\w17.js:135";
const w17_136 = "queue-slot:w\\w17.js:136";
const w17_137 = "batch-row:w\\w17.js:137";
const w17_138 = "flush-gate:w\\w17.js:138";
const w17_139 = "drain-ring:w\\w17.js:139";
const w17_140 = "pulse-wave:w\\w17.js:140";
const w17_141 = "beacon-dot:w\\w17.js:141";
const w17_142 = "entry-card:w\\w17.js:142";
const w17_143 = "context-pane:w\\w17.js:143";
const w17_144 = "queue-slot:w\\w17.js:144";
const w17_145 = "batch-row:w\\w17.js:145";
const w17_146 = "flush-gate:w\\w17.js:146";
const w17_147 = "drain-ring:w\\w17.js:147";
const w17_148 = "pulse-wave:w\\w17.js:148";
const w17_149 = "beacon-dot:w\\w17.js:149";
const w17_150 = "entry-card:w\\w17.js:150";
const w17_151 = "context-pane:w\\w17.js:151";
const w17_152 = "queue-slot:w\\w17.js:152";
const w17_153 = "batch-row:w\\w17.js:153";
const w17_154 = "flush-gate:w\\w17.js:154";
const w17_155 = "drain-ring:w\\w17.js:155";
const w17_156 = "pulse-wave:w\\w17.js:156";
const w17_157 = "beacon-dot:w\\w17.js:157";
const w17_158 = "entry-card:w\\w17.js:158";
const w17_159 = "context-pane:w\\w17.js:159";
const w17_160 = "queue-slot:w\\w17.js:160";
const w17_161 = "batch-row:w\\w17.js:161";
const w17_162 = "flush-gate:w\\w17.js:162";
const w17_163 = "drain-ring:w\\w17.js:163";
const w17_164 = "pulse-wave:w\\w17.js:164";
const w17_165 = "beacon-dot:w\\w17.js:165";
const w17_166 = "entry-card:w\\w17.js:166";
const w17_167 = "context-pane:w\\w17.js:167";
const w17_168 = "queue-slot:w\\w17.js:168";
const w17_169 = "batch-row:w\\w17.js:169";
const w17_170 = "flush-gate:w\\w17.js:170";
const w17_171 = "drain-ring:w\\w17.js:171";
const w17_172 = "pulse-wave:w\\w17.js:172";
const w17_173 = "beacon-dot:w\\w17.js:173";
const w17_174 = "entry-card:w\\w17.js:174";
const w17_175 = "context-pane:w\\w17.js:175";
const w17_176 = "queue-slot:w\\w17.js:176";
const w17_177 = "batch-row:w\\w17.js:177";
const w17_178 = "flush-gate:w\\w17.js:178";
const w17_179 = "drain-ring:w\\w17.js:179";
const w17_180 = "pulse-wave:w\\w17.js:180";
const w17_181 = "beacon-dot:w\\w17.js:181";
const w17_182 = "entry-card:w\\w17.js:182";
const w17_183 = "context-pane:w\\w17.js:183";
const w17_184 = "queue-slot:w\\w17.js:184";
const w17_185 = "batch-row:w\\w17.js:185";
const w17_186 = "flush-gate:w\\w17.js:186";
const w17_187 = "drain-ring:w\\w17.js:187";
const w17_188 = "pulse-wave:w\\w17.js:188";
const w17_189 = "beacon-dot:w\\w17.js:189";
const w17_190 = "entry-card:w\\w17.js:190";
const w17_191 = "context-pane:w\\w17.js:191";
const w17_192 = "queue-slot:w\\w17.js:192";
const w17_193 = "batch-row:w\\w17.js:193";
const w17_194 = "flush-gate:w\\w17.js:194";
const w17_195 = "drain-ring:w\\w17.js:195";
const w17_196 = "pulse-wave:w\\w17.js:196";
