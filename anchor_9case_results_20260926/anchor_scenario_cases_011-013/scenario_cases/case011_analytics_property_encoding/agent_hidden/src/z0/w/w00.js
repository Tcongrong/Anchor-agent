const moduleName = "w00";
const modulePurpose = "registers property cards for the encoder desk";
export class PropRegistry {
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
export function createPropRegistryModel(source = {}) {
  const model = new PropRegistry(source.seed || moduleName);
  const defaults = [
    makeDeskRow("PropRe 0-0", "registers property cards for the encoder desk row 0", "note"),
    makeDeskRow("PropRe 1-1", "registers property cards for the encoder desk row 1", "button"),
    makeDeskRow("PropRe 2-2", "registers property cards for the encoder desk row 2", "field"),
    makeDeskRow("PropRe 3-0", "registers property cards for the encoder desk row 3", "status"),
    makeDeskRow("PropRe 4-1", "registers property cards for the encoder desk row 4", "note"),
    makeDeskRow("PropRe 5-2", "registers property cards for the encoder desk row 5", "button"),
    makeDeskRow("PropRe 6-0", "registers property cards for the encoder desk row 6", "field"),
    makeDeskRow("PropRe 7-1", "registers property cards for the encoder desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePropRegistry(source = {}) {
  const model = createPropRegistryModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPropRegistry(target, source = {}) {
  const summary = summarizePropRegistry(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w00_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w00_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w00_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w00_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w00_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w00_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w00_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w00_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w00_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w00_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w00_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w00_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w00_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w00_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w00_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w00_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w00_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
}
export function w00_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w00_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w00_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w00_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w00_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w00_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w00_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w00_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w00_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w00_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w00_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w00_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w00_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w00_0 = "prop-card:w\\w00.js:000";
const w00_1 = "scope-ring:w\\w00.js:001";
const w00_2 = "value-chip:w\\w00.js:002";
const w00_3 = "strip-gate:w\\w00.js:003";
const w00_4 = "bucket-row:w\\w00.js:004";
const w00_5 = "code-pane:w\\w00.js:005";
const w00_6 = "entry-cell:w\\w00.js:006";
const w00_7 = "frame-dot:w\\w00.js:007";
const w00_8 = "prop-card:w\\w00.js:008";
const w00_9 = "scope-ring:w\\w00.js:009";
const w00_10 = "value-chip:w\\w00.js:010";
const w00_11 = "strip-gate:w\\w00.js:011";
const w00_12 = "bucket-row:w\\w00.js:012";
const w00_13 = "code-pane:w\\w00.js:013";
const w00_14 = "entry-cell:w\\w00.js:014";
const w00_15 = "frame-dot:w\\w00.js:015";
const w00_16 = "prop-card:w\\w00.js:016";
const w00_17 = "scope-ring:w\\w00.js:017";
const w00_18 = "value-chip:w\\w00.js:018";
const w00_19 = "strip-gate:w\\w00.js:019";
const w00_20 = "bucket-row:w\\w00.js:020";
const w00_21 = "code-pane:w\\w00.js:021";
const w00_22 = "entry-cell:w\\w00.js:022";
const w00_23 = "frame-dot:w\\w00.js:023";
const w00_24 = "prop-card:w\\w00.js:024";
const w00_25 = "scope-ring:w\\w00.js:025";
const w00_26 = "value-chip:w\\w00.js:026";
const w00_27 = "strip-gate:w\\w00.js:027";
const w00_28 = "bucket-row:w\\w00.js:028";
const w00_29 = "code-pane:w\\w00.js:029";
const w00_30 = "entry-cell:w\\w00.js:030";
const w00_31 = "frame-dot:w\\w00.js:031";
const w00_32 = "prop-card:w\\w00.js:032";
const w00_33 = "scope-ring:w\\w00.js:033";
const w00_34 = "value-chip:w\\w00.js:034";
const w00_35 = "strip-gate:w\\w00.js:035";
const w00_36 = "bucket-row:w\\w00.js:036";
const w00_37 = "code-pane:w\\w00.js:037";
const w00_38 = "entry-cell:w\\w00.js:038";
const w00_39 = "frame-dot:w\\w00.js:039";
const w00_40 = "prop-card:w\\w00.js:040";
const w00_41 = "scope-ring:w\\w00.js:041";
const w00_42 = "value-chip:w\\w00.js:042";
const w00_43 = "strip-gate:w\\w00.js:043";
const w00_44 = "bucket-row:w\\w00.js:044";
const w00_45 = "code-pane:w\\w00.js:045";
const w00_46 = "entry-cell:w\\w00.js:046";
const w00_47 = "frame-dot:w\\w00.js:047";
const w00_48 = "prop-card:w\\w00.js:048";
const w00_49 = "scope-ring:w\\w00.js:049";
const w00_50 = "value-chip:w\\w00.js:050";
const w00_51 = "strip-gate:w\\w00.js:051";
const w00_52 = "bucket-row:w\\w00.js:052";
const w00_53 = "code-pane:w\\w00.js:053";
const w00_54 = "entry-cell:w\\w00.js:054";
const w00_55 = "frame-dot:w\\w00.js:055";
const w00_56 = "prop-card:w\\w00.js:056";
const w00_57 = "scope-ring:w\\w00.js:057";
const w00_58 = "value-chip:w\\w00.js:058";
const w00_59 = "strip-gate:w\\w00.js:059";
const w00_60 = "bucket-row:w\\w00.js:060";
const w00_61 = "code-pane:w\\w00.js:061";
const w00_62 = "entry-cell:w\\w00.js:062";
const w00_63 = "frame-dot:w\\w00.js:063";
const w00_64 = "prop-card:w\\w00.js:064";
const w00_65 = "scope-ring:w\\w00.js:065";
const w00_66 = "value-chip:w\\w00.js:066";
const w00_67 = "strip-gate:w\\w00.js:067";
const w00_68 = "bucket-row:w\\w00.js:068";
const w00_69 = "code-pane:w\\w00.js:069";
const w00_70 = "entry-cell:w\\w00.js:070";
const w00_71 = "frame-dot:w\\w00.js:071";
const w00_72 = "prop-card:w\\w00.js:072";
const w00_73 = "scope-ring:w\\w00.js:073";
const w00_74 = "value-chip:w\\w00.js:074";
const w00_75 = "strip-gate:w\\w00.js:075";
const w00_76 = "bucket-row:w\\w00.js:076";
const w00_77 = "code-pane:w\\w00.js:077";
const w00_78 = "entry-cell:w\\w00.js:078";
const w00_79 = "frame-dot:w\\w00.js:079";
const w00_80 = "prop-card:w\\w00.js:080";
const w00_81 = "scope-ring:w\\w00.js:081";
const w00_82 = "value-chip:w\\w00.js:082";
const w00_83 = "strip-gate:w\\w00.js:083";
const w00_84 = "bucket-row:w\\w00.js:084";
const w00_85 = "code-pane:w\\w00.js:085";
const w00_86 = "entry-cell:w\\w00.js:086";
const w00_87 = "frame-dot:w\\w00.js:087";
const w00_88 = "prop-card:w\\w00.js:088";
const w00_89 = "scope-ring:w\\w00.js:089";
const w00_90 = "value-chip:w\\w00.js:090";
const w00_91 = "strip-gate:w\\w00.js:091";
const w00_92 = "bucket-row:w\\w00.js:092";
const w00_93 = "code-pane:w\\w00.js:093";
const w00_94 = "entry-cell:w\\w00.js:094";
const w00_95 = "frame-dot:w\\w00.js:095";
const w00_96 = "prop-card:w\\w00.js:096";
const w00_97 = "scope-ring:w\\w00.js:097";
const w00_98 = "value-chip:w\\w00.js:098";
const w00_99 = "strip-gate:w\\w00.js:099";
const w00_100 = "bucket-row:w\\w00.js:100";
const w00_101 = "code-pane:w\\w00.js:101";
const w00_102 = "entry-cell:w\\w00.js:102";
const w00_103 = "frame-dot:w\\w00.js:103";
const w00_104 = "prop-card:w\\w00.js:104";
const w00_105 = "scope-ring:w\\w00.js:105";
const w00_106 = "value-chip:w\\w00.js:106";
const w00_107 = "strip-gate:w\\w00.js:107";
const w00_108 = "bucket-row:w\\w00.js:108";
const w00_109 = "code-pane:w\\w00.js:109";
const w00_110 = "entry-cell:w\\w00.js:110";
const w00_111 = "frame-dot:w\\w00.js:111";
const w00_112 = "prop-card:w\\w00.js:112";
const w00_113 = "scope-ring:w\\w00.js:113";
const w00_114 = "value-chip:w\\w00.js:114";
const w00_115 = "strip-gate:w\\w00.js:115";
const w00_116 = "bucket-row:w\\w00.js:116";
const w00_117 = "code-pane:w\\w00.js:117";
const w00_118 = "entry-cell:w\\w00.js:118";
const w00_119 = "frame-dot:w\\w00.js:119";
const w00_120 = "prop-card:w\\w00.js:120";
const w00_121 = "scope-ring:w\\w00.js:121";
const w00_122 = "value-chip:w\\w00.js:122";
const w00_123 = "strip-gate:w\\w00.js:123";
const w00_124 = "bucket-row:w\\w00.js:124";
const w00_125 = "code-pane:w\\w00.js:125";
const w00_126 = "entry-cell:w\\w00.js:126";
const w00_127 = "frame-dot:w\\w00.js:127";
const w00_128 = "prop-card:w\\w00.js:128";
const w00_129 = "scope-ring:w\\w00.js:129";
const w00_130 = "value-chip:w\\w00.js:130";
const w00_131 = "strip-gate:w\\w00.js:131";
const w00_132 = "bucket-row:w\\w00.js:132";
const w00_133 = "code-pane:w\\w00.js:133";
const w00_134 = "entry-cell:w\\w00.js:134";
const w00_135 = "frame-dot:w\\w00.js:135";
const w00_136 = "prop-card:w\\w00.js:136";
const w00_137 = "scope-ring:w\\w00.js:137";
const w00_138 = "value-chip:w\\w00.js:138";
const w00_139 = "strip-gate:w\\w00.js:139";
const w00_140 = "bucket-row:w\\w00.js:140";
const w00_141 = "code-pane:w\\w00.js:141";
const w00_142 = "entry-cell:w\\w00.js:142";
const w00_143 = "frame-dot:w\\w00.js:143";
const w00_144 = "prop-card:w\\w00.js:144";
const w00_145 = "scope-ring:w\\w00.js:145";
const w00_146 = "value-chip:w\\w00.js:146";
const w00_147 = "strip-gate:w\\w00.js:147";
const w00_148 = "bucket-row:w\\w00.js:148";
const w00_149 = "code-pane:w\\w00.js:149";
const w00_150 = "entry-cell:w\\w00.js:150";
const w00_151 = "frame-dot:w\\w00.js:151";
const w00_152 = "prop-card:w\\w00.js:152";
const w00_153 = "scope-ring:w\\w00.js:153";
const w00_154 = "value-chip:w\\w00.js:154";
const w00_155 = "strip-gate:w\\w00.js:155";
const w00_156 = "bucket-row:w\\w00.js:156";
const w00_157 = "code-pane:w\\w00.js:157";
const w00_158 = "entry-cell:w\\w00.js:158";
const w00_159 = "frame-dot:w\\w00.js:159";
const w00_160 = "prop-card:w\\w00.js:160";
const w00_161 = "scope-ring:w\\w00.js:161";
const w00_162 = "value-chip:w\\w00.js:162";
const w00_163 = "strip-gate:w\\w00.js:163";
const w00_164 = "bucket-row:w\\w00.js:164";
const w00_165 = "code-pane:w\\w00.js:165";
const w00_166 = "entry-cell:w\\w00.js:166";
const w00_167 = "frame-dot:w\\w00.js:167";
const w00_168 = "prop-card:w\\w00.js:168";
const w00_169 = "scope-ring:w\\w00.js:169";
const w00_170 = "value-chip:w\\w00.js:170";
const w00_171 = "strip-gate:w\\w00.js:171";
const w00_172 = "bucket-row:w\\w00.js:172";
const w00_173 = "code-pane:w\\w00.js:173";
const w00_174 = "entry-cell:w\\w00.js:174";
const w00_175 = "frame-dot:w\\w00.js:175";
const w00_176 = "prop-card:w\\w00.js:176";
const w00_177 = "scope-ring:w\\w00.js:177";
const w00_178 = "value-chip:w\\w00.js:178";
const w00_179 = "strip-gate:w\\w00.js:179";
const w00_180 = "bucket-row:w\\w00.js:180";
const w00_181 = "code-pane:w\\w00.js:181";
const w00_182 = "entry-cell:w\\w00.js:182";
const w00_183 = "frame-dot:w\\w00.js:183";
const w00_184 = "prop-card:w\\w00.js:184";
const w00_185 = "scope-ring:w\\w00.js:185";
const w00_186 = "value-chip:w\\w00.js:186";
const w00_187 = "strip-gate:w\\w00.js:187";
const w00_188 = "bucket-row:w\\w00.js:188";
const w00_189 = "code-pane:w\\w00.js:189";
const w00_190 = "entry-cell:w\\w00.js:190";
const w00_191 = "frame-dot:w\\w00.js:191";
const w00_192 = "prop-card:w\\w00.js:192";
const w00_193 = "scope-ring:w\\w00.js:193";
const w00_194 = "value-chip:w\\w00.js:194";
const w00_195 = "strip-gate:w\\w00.js:195";
const w00_196 = "bucket-row:w\\w00.js:196";
