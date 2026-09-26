const moduleName = "w10";
const modulePurpose = "queues tag refreshes for the property grid";
export class TagQueue {
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
export function createTagQueueModel(source = {}) {
  const model = new TagQueue(source.seed || moduleName);
  const defaults = [
    makeDeskRow("TagQue 0-0", "queues tag refreshes for the property grid row 0", "note"),
    makeDeskRow("TagQue 1-1", "queues tag refreshes for the property grid row 1", "button"),
    makeDeskRow("TagQue 2-2", "queues tag refreshes for the property grid row 2", "field"),
    makeDeskRow("TagQue 3-0", "queues tag refreshes for the property grid row 3", "status"),
    makeDeskRow("TagQue 4-1", "queues tag refreshes for the property grid row 4", "note"),
    makeDeskRow("TagQue 5-2", "queues tag refreshes for the property grid row 5", "button"),
    makeDeskRow("TagQue 6-0", "queues tag refreshes for the property grid row 6", "field"),
    makeDeskRow("TagQue 7-1", "queues tag refreshes for the property grid row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeTagQueue(source = {}) {
  const model = createTagQueueModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountTagQueue(target, source = {}) {
  const summary = summarizeTagQueue(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w10_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w10_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w10_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w10_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w10_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w10_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w10_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w10_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w10_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w10_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w10_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w10_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w10_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w10_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w10_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w10_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w10_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w10_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w10_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w10_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w10_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w10_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w10_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w10_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w10_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w10_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w10_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w10_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w10_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w10_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w10_0 = "prop-card:w\\w10.js:000";
const w10_1 = "scope-ring:w\\w10.js:001";
const w10_2 = "value-chip:w\\w10.js:002";
const w10_3 = "strip-gate:w\\w10.js:003";
const w10_4 = "bucket-row:w\\w10.js:004";
const w10_5 = "code-pane:w\\w10.js:005";
const w10_6 = "entry-cell:w\\w10.js:006";
const w10_7 = "frame-dot:w\\w10.js:007";
const w10_8 = "prop-card:w\\w10.js:008";
const w10_9 = "scope-ring:w\\w10.js:009";
const w10_10 = "value-chip:w\\w10.js:010";
const w10_11 = "strip-gate:w\\w10.js:011";
const w10_12 = "bucket-row:w\\w10.js:012";
const w10_13 = "code-pane:w\\w10.js:013";
const w10_14 = "entry-cell:w\\w10.js:014";
const w10_15 = "frame-dot:w\\w10.js:015";
const w10_16 = "prop-card:w\\w10.js:016";
const w10_17 = "scope-ring:w\\w10.js:017";
const w10_18 = "value-chip:w\\w10.js:018";
const w10_19 = "strip-gate:w\\w10.js:019";
const w10_20 = "bucket-row:w\\w10.js:020";
const w10_21 = "code-pane:w\\w10.js:021";
const w10_22 = "entry-cell:w\\w10.js:022";
const w10_23 = "frame-dot:w\\w10.js:023";
const w10_24 = "prop-card:w\\w10.js:024";
const w10_25 = "scope-ring:w\\w10.js:025";
const w10_26 = "value-chip:w\\w10.js:026";
const w10_27 = "strip-gate:w\\w10.js:027";
const w10_28 = "bucket-row:w\\w10.js:028";
const w10_29 = "code-pane:w\\w10.js:029";
const w10_30 = "entry-cell:w\\w10.js:030";
const w10_31 = "frame-dot:w\\w10.js:031";
const w10_32 = "prop-card:w\\w10.js:032";
const w10_33 = "scope-ring:w\\w10.js:033";
const w10_34 = "value-chip:w\\w10.js:034";
const w10_35 = "strip-gate:w\\w10.js:035";
const w10_36 = "bucket-row:w\\w10.js:036";
const w10_37 = "code-pane:w\\w10.js:037";
const w10_38 = "entry-cell:w\\w10.js:038";
const w10_39 = "frame-dot:w\\w10.js:039";
const w10_40 = "prop-card:w\\w10.js:040";
const w10_41 = "scope-ring:w\\w10.js:041";
const w10_42 = "value-chip:w\\w10.js:042";
const w10_43 = "strip-gate:w\\w10.js:043";
const w10_44 = "bucket-row:w\\w10.js:044";
const w10_45 = "code-pane:w\\w10.js:045";
const w10_46 = "entry-cell:w\\w10.js:046";
const w10_47 = "frame-dot:w\\w10.js:047";
const w10_48 = "prop-card:w\\w10.js:048";
const w10_49 = "scope-ring:w\\w10.js:049";
const w10_50 = "value-chip:w\\w10.js:050";
const w10_51 = "strip-gate:w\\w10.js:051";
const w10_52 = "bucket-row:w\\w10.js:052";
const w10_53 = "code-pane:w\\w10.js:053";
const w10_54 = "entry-cell:w\\w10.js:054";
const w10_55 = "frame-dot:w\\w10.js:055";
const w10_56 = "prop-card:w\\w10.js:056";
const w10_57 = "scope-ring:w\\w10.js:057";
const w10_58 = "value-chip:w\\w10.js:058";
const w10_59 = "strip-gate:w\\w10.js:059";
const w10_60 = "bucket-row:w\\w10.js:060";
const w10_61 = "code-pane:w\\w10.js:061";
const w10_62 = "entry-cell:w\\w10.js:062";
const w10_63 = "frame-dot:w\\w10.js:063";
const w10_64 = "prop-card:w\\w10.js:064";
const w10_65 = "scope-ring:w\\w10.js:065";
const w10_66 = "value-chip:w\\w10.js:066";
const w10_67 = "strip-gate:w\\w10.js:067";
const w10_68 = "bucket-row:w\\w10.js:068";
const w10_69 = "code-pane:w\\w10.js:069";
const w10_70 = "entry-cell:w\\w10.js:070";
const w10_71 = "frame-dot:w\\w10.js:071";
const w10_72 = "prop-card:w\\w10.js:072";
const w10_73 = "scope-ring:w\\w10.js:073";
const w10_74 = "value-chip:w\\w10.js:074";
const w10_75 = "strip-gate:w\\w10.js:075";
const w10_76 = "bucket-row:w\\w10.js:076";
const w10_77 = "code-pane:w\\w10.js:077";
const w10_78 = "entry-cell:w\\w10.js:078";
const w10_79 = "frame-dot:w\\w10.js:079";
const w10_80 = "prop-card:w\\w10.js:080";
const w10_81 = "scope-ring:w\\w10.js:081";
const w10_82 = "value-chip:w\\w10.js:082";
const w10_83 = "strip-gate:w\\w10.js:083";
const w10_84 = "bucket-row:w\\w10.js:084";
const w10_85 = "code-pane:w\\w10.js:085";
const w10_86 = "entry-cell:w\\w10.js:086";
const w10_87 = "frame-dot:w\\w10.js:087";
const w10_88 = "prop-card:w\\w10.js:088";
const w10_89 = "scope-ring:w\\w10.js:089";
const w10_90 = "value-chip:w\\w10.js:090";
const w10_91 = "strip-gate:w\\w10.js:091";
const w10_92 = "bucket-row:w\\w10.js:092";
const w10_93 = "code-pane:w\\w10.js:093";
const w10_94 = "entry-cell:w\\w10.js:094";
const w10_95 = "frame-dot:w\\w10.js:095";
const w10_96 = "prop-card:w\\w10.js:096";
const w10_97 = "scope-ring:w\\w10.js:097";
const w10_98 = "value-chip:w\\w10.js:098";
const w10_99 = "strip-gate:w\\w10.js:099";
const w10_100 = "bucket-row:w\\w10.js:100";
const w10_101 = "code-pane:w\\w10.js:101";
const w10_102 = "entry-cell:w\\w10.js:102";
const w10_103 = "frame-dot:w\\w10.js:103";
const w10_104 = "prop-card:w\\w10.js:104";
const w10_105 = "scope-ring:w\\w10.js:105";
const w10_106 = "value-chip:w\\w10.js:106";
const w10_107 = "strip-gate:w\\w10.js:107";
const w10_108 = "bucket-row:w\\w10.js:108";
const w10_109 = "code-pane:w\\w10.js:109";
const w10_110 = "entry-cell:w\\w10.js:110";
const w10_111 = "frame-dot:w\\w10.js:111";
const w10_112 = "prop-card:w\\w10.js:112";
const w10_113 = "scope-ring:w\\w10.js:113";
const w10_114 = "value-chip:w\\w10.js:114";
const w10_115 = "strip-gate:w\\w10.js:115";
const w10_116 = "bucket-row:w\\w10.js:116";
const w10_117 = "code-pane:w\\w10.js:117";
const w10_118 = "entry-cell:w\\w10.js:118";
const w10_119 = "frame-dot:w\\w10.js:119";
const w10_120 = "prop-card:w\\w10.js:120";
const w10_121 = "scope-ring:w\\w10.js:121";
const w10_122 = "value-chip:w\\w10.js:122";
const w10_123 = "strip-gate:w\\w10.js:123";
const w10_124 = "bucket-row:w\\w10.js:124";
const w10_125 = "code-pane:w\\w10.js:125";
const w10_126 = "entry-cell:w\\w10.js:126";
const w10_127 = "frame-dot:w\\w10.js:127";
const w10_128 = "prop-card:w\\w10.js:128";
const w10_129 = "scope-ring:w\\w10.js:129";
const w10_130 = "value-chip:w\\w10.js:130";
const w10_131 = "strip-gate:w\\w10.js:131";
const w10_132 = "bucket-row:w\\w10.js:132";
const w10_133 = "code-pane:w\\w10.js:133";
const w10_134 = "entry-cell:w\\w10.js:134";
const w10_135 = "frame-dot:w\\w10.js:135";
const w10_136 = "prop-card:w\\w10.js:136";
const w10_137 = "scope-ring:w\\w10.js:137";
const w10_138 = "value-chip:w\\w10.js:138";
const w10_139 = "strip-gate:w\\w10.js:139";
const w10_140 = "bucket-row:w\\w10.js:140";
const w10_141 = "code-pane:w\\w10.js:141";
const w10_142 = "entry-cell:w\\w10.js:142";
const w10_143 = "frame-dot:w\\w10.js:143";
const w10_144 = "prop-card:w\\w10.js:144";
const w10_145 = "scope-ring:w\\w10.js:145";
const w10_146 = "value-chip:w\\w10.js:146";
const w10_147 = "strip-gate:w\\w10.js:147";
const w10_148 = "bucket-row:w\\w10.js:148";
const w10_149 = "code-pane:w\\w10.js:149";
const w10_150 = "entry-cell:w\\w10.js:150";
const w10_151 = "frame-dot:w\\w10.js:151";
const w10_152 = "prop-card:w\\w10.js:152";
const w10_153 = "scope-ring:w\\w10.js:153";
const w10_154 = "value-chip:w\\w10.js:154";
const w10_155 = "strip-gate:w\\w10.js:155";
const w10_156 = "bucket-row:w\\w10.js:156";
const w10_157 = "code-pane:w\\w10.js:157";
const w10_158 = "entry-cell:w\\w10.js:158";
const w10_159 = "frame-dot:w\\w10.js:159";
const w10_160 = "prop-card:w\\w10.js:160";
const w10_161 = "scope-ring:w\\w10.js:161";
const w10_162 = "value-chip:w\\w10.js:162";
const w10_163 = "strip-gate:w\\w10.js:163";
const w10_164 = "bucket-row:w\\w10.js:164";
const w10_165 = "code-pane:w\\w10.js:165";
const w10_166 = "entry-cell:w\\w10.js:166";
const w10_167 = "frame-dot:w\\w10.js:167";
const w10_168 = "prop-card:w\\w10.js:168";
const w10_169 = "scope-ring:w\\w10.js:169";
const w10_170 = "value-chip:w\\w10.js:170";
const w10_171 = "strip-gate:w\\w10.js:171";
const w10_172 = "bucket-row:w\\w10.js:172";
const w10_173 = "code-pane:w\\w10.js:173";
const w10_174 = "entry-cell:w\\w10.js:174";
const w10_175 = "frame-dot:w\\w10.js:175";
const w10_176 = "prop-card:w\\w10.js:176";
const w10_177 = "scope-ring:w\\w10.js:177";
const w10_178 = "value-chip:w\\w10.js:178";
const w10_179 = "strip-gate:w\\w10.js:179";
const w10_180 = "bucket-row:w\\w10.js:180";
const w10_181 = "code-pane:w\\w10.js:181";
const w10_182 = "entry-cell:w\\w10.js:182";
const w10_183 = "frame-dot:w\\w10.js:183";
const w10_184 = "prop-card:w\\w10.js:184";
const w10_185 = "scope-ring:w\\w10.js:185";
const w10_186 = "value-chip:w\\w10.js:186";
const w10_187 = "strip-gate:w\\w10.js:187";
const w10_188 = "bucket-row:w\\w10.js:188";
const w10_189 = "code-pane:w\\w10.js:189";
const w10_190 = "entry-cell:w\\w10.js:190";
const w10_191 = "frame-dot:w\\w10.js:191";
const w10_192 = "prop-card:w\\w10.js:192";
const w10_193 = "scope-ring:w\\w10.js:193";
const w10_194 = "value-chip:w\\w10.js:194";
const w10_195 = "strip-gate:w\\w10.js:195";
const w10_196 = "bucket-row:w\\w10.js:196";
