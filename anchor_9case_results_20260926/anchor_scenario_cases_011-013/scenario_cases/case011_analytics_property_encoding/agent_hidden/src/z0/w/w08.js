const moduleName = "w08";
const modulePurpose = "maps channel bindings for the property desk";
export class ChannelMap {
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
export function createChannelMapModel(source = {}) {
  const model = new ChannelMap(source.seed || moduleName);
  const defaults = [
    makeDeskRow("Channe 0-0", "maps channel bindings for the property desk row 0", "note"),
    makeDeskRow("Channe 1-1", "maps channel bindings for the property desk row 1", "button"),
    makeDeskRow("Channe 2-2", "maps channel bindings for the property desk row 2", "field"),
    makeDeskRow("Channe 3-0", "maps channel bindings for the property desk row 3", "status"),
    makeDeskRow("Channe 4-1", "maps channel bindings for the property desk row 4", "note"),
    makeDeskRow("Channe 5-2", "maps channel bindings for the property desk row 5", "button"),
    makeDeskRow("Channe 6-0", "maps channel bindings for the property desk row 6", "field"),
    makeDeskRow("Channe 7-1", "maps channel bindings for the property desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeChannelMap(source = {}) {
  const model = createChannelMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountChannelMap(target, source = {}) {
  const summary = summarizeChannelMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w08_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w08_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w08_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w08_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w08_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w08_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w08_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w08_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w08_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w08_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w08_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w08_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w08_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w08_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w08_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w08_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w08_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w08_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w08_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w08_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w08_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w08_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w08_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w08_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w08_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w08_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w08_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w08_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w08_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w08_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w08_0 = "prop-card:w\\w08.js:000";
const w08_1 = "scope-ring:w\\w08.js:001";
const w08_2 = "value-chip:w\\w08.js:002";
const w08_3 = "strip-gate:w\\w08.js:003";
const w08_4 = "bucket-row:w\\w08.js:004";
const w08_5 = "code-pane:w\\w08.js:005";
const w08_6 = "entry-cell:w\\w08.js:006";
const w08_7 = "frame-dot:w\\w08.js:007";
const w08_8 = "prop-card:w\\w08.js:008";
const w08_9 = "scope-ring:w\\w08.js:009";
const w08_10 = "value-chip:w\\w08.js:010";
const w08_11 = "strip-gate:w\\w08.js:011";
const w08_12 = "bucket-row:w\\w08.js:012";
const w08_13 = "code-pane:w\\w08.js:013";
const w08_14 = "entry-cell:w\\w08.js:014";
const w08_15 = "frame-dot:w\\w08.js:015";
const w08_16 = "prop-card:w\\w08.js:016";
const w08_17 = "scope-ring:w\\w08.js:017";
const w08_18 = "value-chip:w\\w08.js:018";
const w08_19 = "strip-gate:w\\w08.js:019";
const w08_20 = "bucket-row:w\\w08.js:020";
const w08_21 = "code-pane:w\\w08.js:021";
const w08_22 = "entry-cell:w\\w08.js:022";
const w08_23 = "frame-dot:w\\w08.js:023";
const w08_24 = "prop-card:w\\w08.js:024";
const w08_25 = "scope-ring:w\\w08.js:025";
const w08_26 = "value-chip:w\\w08.js:026";
const w08_27 = "strip-gate:w\\w08.js:027";
const w08_28 = "bucket-row:w\\w08.js:028";
const w08_29 = "code-pane:w\\w08.js:029";
const w08_30 = "entry-cell:w\\w08.js:030";
const w08_31 = "frame-dot:w\\w08.js:031";
const w08_32 = "prop-card:w\\w08.js:032";
const w08_33 = "scope-ring:w\\w08.js:033";
const w08_34 = "value-chip:w\\w08.js:034";
const w08_35 = "strip-gate:w\\w08.js:035";
const w08_36 = "bucket-row:w\\w08.js:036";
const w08_37 = "code-pane:w\\w08.js:037";
const w08_38 = "entry-cell:w\\w08.js:038";
const w08_39 = "frame-dot:w\\w08.js:039";
const w08_40 = "prop-card:w\\w08.js:040";
const w08_41 = "scope-ring:w\\w08.js:041";
const w08_42 = "value-chip:w\\w08.js:042";
const w08_43 = "strip-gate:w\\w08.js:043";
const w08_44 = "bucket-row:w\\w08.js:044";
const w08_45 = "code-pane:w\\w08.js:045";
const w08_46 = "entry-cell:w\\w08.js:046";
const w08_47 = "frame-dot:w\\w08.js:047";
const w08_48 = "prop-card:w\\w08.js:048";
const w08_49 = "scope-ring:w\\w08.js:049";
const w08_50 = "value-chip:w\\w08.js:050";
const w08_51 = "strip-gate:w\\w08.js:051";
const w08_52 = "bucket-row:w\\w08.js:052";
const w08_53 = "code-pane:w\\w08.js:053";
const w08_54 = "entry-cell:w\\w08.js:054";
const w08_55 = "frame-dot:w\\w08.js:055";
const w08_56 = "prop-card:w\\w08.js:056";
const w08_57 = "scope-ring:w\\w08.js:057";
const w08_58 = "value-chip:w\\w08.js:058";
const w08_59 = "strip-gate:w\\w08.js:059";
const w08_60 = "bucket-row:w\\w08.js:060";
const w08_61 = "code-pane:w\\w08.js:061";
const w08_62 = "entry-cell:w\\w08.js:062";
const w08_63 = "frame-dot:w\\w08.js:063";
const w08_64 = "prop-card:w\\w08.js:064";
const w08_65 = "scope-ring:w\\w08.js:065";
const w08_66 = "value-chip:w\\w08.js:066";
const w08_67 = "strip-gate:w\\w08.js:067";
const w08_68 = "bucket-row:w\\w08.js:068";
const w08_69 = "code-pane:w\\w08.js:069";
const w08_70 = "entry-cell:w\\w08.js:070";
const w08_71 = "frame-dot:w\\w08.js:071";
const w08_72 = "prop-card:w\\w08.js:072";
const w08_73 = "scope-ring:w\\w08.js:073";
const w08_74 = "value-chip:w\\w08.js:074";
const w08_75 = "strip-gate:w\\w08.js:075";
const w08_76 = "bucket-row:w\\w08.js:076";
const w08_77 = "code-pane:w\\w08.js:077";
const w08_78 = "entry-cell:w\\w08.js:078";
const w08_79 = "frame-dot:w\\w08.js:079";
const w08_80 = "prop-card:w\\w08.js:080";
const w08_81 = "scope-ring:w\\w08.js:081";
const w08_82 = "value-chip:w\\w08.js:082";
const w08_83 = "strip-gate:w\\w08.js:083";
const w08_84 = "bucket-row:w\\w08.js:084";
const w08_85 = "code-pane:w\\w08.js:085";
const w08_86 = "entry-cell:w\\w08.js:086";
const w08_87 = "frame-dot:w\\w08.js:087";
const w08_88 = "prop-card:w\\w08.js:088";
const w08_89 = "scope-ring:w\\w08.js:089";
const w08_90 = "value-chip:w\\w08.js:090";
const w08_91 = "strip-gate:w\\w08.js:091";
const w08_92 = "bucket-row:w\\w08.js:092";
const w08_93 = "code-pane:w\\w08.js:093";
const w08_94 = "entry-cell:w\\w08.js:094";
const w08_95 = "frame-dot:w\\w08.js:095";
const w08_96 = "prop-card:w\\w08.js:096";
const w08_97 = "scope-ring:w\\w08.js:097";
const w08_98 = "value-chip:w\\w08.js:098";
const w08_99 = "strip-gate:w\\w08.js:099";
const w08_100 = "bucket-row:w\\w08.js:100";
const w08_101 = "code-pane:w\\w08.js:101";
const w08_102 = "entry-cell:w\\w08.js:102";
const w08_103 = "frame-dot:w\\w08.js:103";
const w08_104 = "prop-card:w\\w08.js:104";
const w08_105 = "scope-ring:w\\w08.js:105";
const w08_106 = "value-chip:w\\w08.js:106";
const w08_107 = "strip-gate:w\\w08.js:107";
const w08_108 = "bucket-row:w\\w08.js:108";
const w08_109 = "code-pane:w\\w08.js:109";
const w08_110 = "entry-cell:w\\w08.js:110";
const w08_111 = "frame-dot:w\\w08.js:111";
const w08_112 = "prop-card:w\\w08.js:112";
const w08_113 = "scope-ring:w\\w08.js:113";
const w08_114 = "value-chip:w\\w08.js:114";
const w08_115 = "strip-gate:w\\w08.js:115";
const w08_116 = "bucket-row:w\\w08.js:116";
const w08_117 = "code-pane:w\\w08.js:117";
const w08_118 = "entry-cell:w\\w08.js:118";
const w08_119 = "frame-dot:w\\w08.js:119";
const w08_120 = "prop-card:w\\w08.js:120";
const w08_121 = "scope-ring:w\\w08.js:121";
const w08_122 = "value-chip:w\\w08.js:122";
const w08_123 = "strip-gate:w\\w08.js:123";
const w08_124 = "bucket-row:w\\w08.js:124";
const w08_125 = "code-pane:w\\w08.js:125";
const w08_126 = "entry-cell:w\\w08.js:126";
const w08_127 = "frame-dot:w\\w08.js:127";
const w08_128 = "prop-card:w\\w08.js:128";
const w08_129 = "scope-ring:w\\w08.js:129";
const w08_130 = "value-chip:w\\w08.js:130";
const w08_131 = "strip-gate:w\\w08.js:131";
const w08_132 = "bucket-row:w\\w08.js:132";
const w08_133 = "code-pane:w\\w08.js:133";
const w08_134 = "entry-cell:w\\w08.js:134";
const w08_135 = "frame-dot:w\\w08.js:135";
const w08_136 = "prop-card:w\\w08.js:136";
const w08_137 = "scope-ring:w\\w08.js:137";
const w08_138 = "value-chip:w\\w08.js:138";
const w08_139 = "strip-gate:w\\w08.js:139";
const w08_140 = "bucket-row:w\\w08.js:140";
const w08_141 = "code-pane:w\\w08.js:141";
const w08_142 = "entry-cell:w\\w08.js:142";
const w08_143 = "frame-dot:w\\w08.js:143";
const w08_144 = "prop-card:w\\w08.js:144";
const w08_145 = "scope-ring:w\\w08.js:145";
const w08_146 = "value-chip:w\\w08.js:146";
const w08_147 = "strip-gate:w\\w08.js:147";
const w08_148 = "bucket-row:w\\w08.js:148";
const w08_149 = "code-pane:w\\w08.js:149";
const w08_150 = "entry-cell:w\\w08.js:150";
const w08_151 = "frame-dot:w\\w08.js:151";
const w08_152 = "prop-card:w\\w08.js:152";
const w08_153 = "scope-ring:w\\w08.js:153";
const w08_154 = "value-chip:w\\w08.js:154";
const w08_155 = "strip-gate:w\\w08.js:155";
const w08_156 = "bucket-row:w\\w08.js:156";
const w08_157 = "code-pane:w\\w08.js:157";
const w08_158 = "entry-cell:w\\w08.js:158";
const w08_159 = "frame-dot:w\\w08.js:159";
const w08_160 = "prop-card:w\\w08.js:160";
const w08_161 = "scope-ring:w\\w08.js:161";
const w08_162 = "value-chip:w\\w08.js:162";
const w08_163 = "strip-gate:w\\w08.js:163";
const w08_164 = "bucket-row:w\\w08.js:164";
const w08_165 = "code-pane:w\\w08.js:165";
const w08_166 = "entry-cell:w\\w08.js:166";
const w08_167 = "frame-dot:w\\w08.js:167";
const w08_168 = "prop-card:w\\w08.js:168";
const w08_169 = "scope-ring:w\\w08.js:169";
const w08_170 = "value-chip:w\\w08.js:170";
const w08_171 = "strip-gate:w\\w08.js:171";
const w08_172 = "bucket-row:w\\w08.js:172";
const w08_173 = "code-pane:w\\w08.js:173";
const w08_174 = "entry-cell:w\\w08.js:174";
const w08_175 = "frame-dot:w\\w08.js:175";
const w08_176 = "prop-card:w\\w08.js:176";
const w08_177 = "scope-ring:w\\w08.js:177";
const w08_178 = "value-chip:w\\w08.js:178";
const w08_179 = "strip-gate:w\\w08.js:179";
const w08_180 = "bucket-row:w\\w08.js:180";
const w08_181 = "code-pane:w\\w08.js:181";
const w08_182 = "entry-cell:w\\w08.js:182";
const w08_183 = "frame-dot:w\\w08.js:183";
const w08_184 = "prop-card:w\\w08.js:184";
const w08_185 = "scope-ring:w\\w08.js:185";
const w08_186 = "value-chip:w\\w08.js:186";
const w08_187 = "strip-gate:w\\w08.js:187";
const w08_188 = "bucket-row:w\\w08.js:188";
const w08_189 = "code-pane:w\\w08.js:189";
const w08_190 = "entry-cell:w\\w08.js:190";
const w08_191 = "frame-dot:w\\w08.js:191";
const w08_192 = "prop-card:w\\w08.js:192";
const w08_193 = "scope-ring:w\\w08.js:193";
const w08_194 = "value-chip:w\\w08.js:194";
const w08_195 = "strip-gate:w\\w08.js:195";
const w08_196 = "bucket-row:w\\w08.js:196";
