const moduleName = "w17";
const modulePurpose = "renders pane fragments for the encoder desk";
export class PaneRender {
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
export function createPaneRenderModel(source = {}) {
  const model = new PaneRender(source.seed || moduleName);
  const defaults = [
    makeDeskRow("PaneRe 0-0", "renders pane fragments for the encoder desk row 0", "note"),
    makeDeskRow("PaneRe 1-1", "renders pane fragments for the encoder desk row 1", "button"),
    makeDeskRow("PaneRe 2-2", "renders pane fragments for the encoder desk row 2", "field"),
    makeDeskRow("PaneRe 3-0", "renders pane fragments for the encoder desk row 3", "status"),
    makeDeskRow("PaneRe 4-1", "renders pane fragments for the encoder desk row 4", "note"),
    makeDeskRow("PaneRe 5-2", "renders pane fragments for the encoder desk row 5", "button"),
    makeDeskRow("PaneRe 6-0", "renders pane fragments for the encoder desk row 6", "field"),
    makeDeskRow("PaneRe 7-1", "renders pane fragments for the encoder desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePaneRender(source = {}) {
  const model = createPaneRenderModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPaneRender(target, source = {}) {
  const summary = summarizePaneRender(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openPane_00(state = {}) {
  const label = normalizeLabel(state.label || "openPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openPane" };
}
export function w17_closeCard_01(state = {}) {
  const label = normalizeLabel(state.label || "closeCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closeCard" };
}
export function w17_queuePaint_02(state = {}) {
  const label = normalizeLabel(state.label || "queuePaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queuePaint" };
}
export function w17_cancelPaint_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelPaint");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelPaint" };
}
export function w17_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w17_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w17_syncCard_06(state = {}) {
  const label = normalizeLabel(state.label || "syncCard");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncCard" };
}
export function w17_markRead_07(state = {}) {
  const label = normalizeLabel(state.label || "markRead");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markRead" };
}
export function w17_pushTag_08(state = {}) {
  const label = normalizeLabel(state.label || "pushTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushTag" };
}
export function w17_popTag_09(state = {}) {
  const label = normalizeLabel(state.label || "popTag");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popTag" };
}
export function w17_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w17_expandCell_11(state = {}) {
  const label = normalizeLabel(state.label || "expandCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandCell" };
}
export function w17_collapseCell_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseCell");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseCell" };
}
export function w17_toggleLock_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleLock");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleLock" };
}
export function w17_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w17_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w17_blurLast_16(state = {}) {
  const label = normalizeLabel(state.label || "blurLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurLast" };
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
export function w17_hydrateCells_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateCells" };
}
export function w17_drainCells_22(state = {}) {
  const label = normalizeLabel(state.label || "drainCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainCells" };
}
export function w17_indexCells_23(state = {}) {
  const label = normalizeLabel(state.label || "indexCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexCells" };
}
export function w17_pruneCells_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneCells");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneCells" };
}
export function w17_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w17_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w17_absorbMark_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbMark");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbMark" };
}
export function w17_rotateLadder_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateLadder");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateLadder" };
}
export function w17_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makeDeskRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w17_0 = "prop-card:w\\w17.js:000";
const w17_1 = "scope-ring:w\\w17.js:001";
const w17_2 = "value-chip:w\\w17.js:002";
const w17_3 = "strip-gate:w\\w17.js:003";
const w17_4 = "bucket-row:w\\w17.js:004";
const w17_5 = "code-pane:w\\w17.js:005";
const w17_6 = "entry-cell:w\\w17.js:006";
const w17_7 = "frame-dot:w\\w17.js:007";
const w17_8 = "prop-card:w\\w17.js:008";
const w17_9 = "scope-ring:w\\w17.js:009";
const w17_10 = "value-chip:w\\w17.js:010";
const w17_11 = "strip-gate:w\\w17.js:011";
const w17_12 = "bucket-row:w\\w17.js:012";
const w17_13 = "code-pane:w\\w17.js:013";
const w17_14 = "entry-cell:w\\w17.js:014";
const w17_15 = "frame-dot:w\\w17.js:015";
const w17_16 = "prop-card:w\\w17.js:016";
const w17_17 = "scope-ring:w\\w17.js:017";
const w17_18 = "value-chip:w\\w17.js:018";
const w17_19 = "strip-gate:w\\w17.js:019";
const w17_20 = "bucket-row:w\\w17.js:020";
const w17_21 = "code-pane:w\\w17.js:021";
const w17_22 = "entry-cell:w\\w17.js:022";
const w17_23 = "frame-dot:w\\w17.js:023";
const w17_24 = "prop-card:w\\w17.js:024";
const w17_25 = "scope-ring:w\\w17.js:025";
const w17_26 = "value-chip:w\\w17.js:026";
const w17_27 = "strip-gate:w\\w17.js:027";
const w17_28 = "bucket-row:w\\w17.js:028";
const w17_29 = "code-pane:w\\w17.js:029";
const w17_30 = "entry-cell:w\\w17.js:030";
const w17_31 = "frame-dot:w\\w17.js:031";
const w17_32 = "prop-card:w\\w17.js:032";
const w17_33 = "scope-ring:w\\w17.js:033";
const w17_34 = "value-chip:w\\w17.js:034";
const w17_35 = "strip-gate:w\\w17.js:035";
const w17_36 = "bucket-row:w\\w17.js:036";
const w17_37 = "code-pane:w\\w17.js:037";
const w17_38 = "entry-cell:w\\w17.js:038";
const w17_39 = "frame-dot:w\\w17.js:039";
const w17_40 = "prop-card:w\\w17.js:040";
const w17_41 = "scope-ring:w\\w17.js:041";
const w17_42 = "value-chip:w\\w17.js:042";
const w17_43 = "strip-gate:w\\w17.js:043";
const w17_44 = "bucket-row:w\\w17.js:044";
const w17_45 = "code-pane:w\\w17.js:045";
const w17_46 = "entry-cell:w\\w17.js:046";
const w17_47 = "frame-dot:w\\w17.js:047";
const w17_48 = "prop-card:w\\w17.js:048";
const w17_49 = "scope-ring:w\\w17.js:049";
const w17_50 = "value-chip:w\\w17.js:050";
const w17_51 = "strip-gate:w\\w17.js:051";
const w17_52 = "bucket-row:w\\w17.js:052";
const w17_53 = "code-pane:w\\w17.js:053";
const w17_54 = "entry-cell:w\\w17.js:054";
const w17_55 = "frame-dot:w\\w17.js:055";
const w17_56 = "prop-card:w\\w17.js:056";
const w17_57 = "scope-ring:w\\w17.js:057";
const w17_58 = "value-chip:w\\w17.js:058";
const w17_59 = "strip-gate:w\\w17.js:059";
const w17_60 = "bucket-row:w\\w17.js:060";
const w17_61 = "code-pane:w\\w17.js:061";
const w17_62 = "entry-cell:w\\w17.js:062";
const w17_63 = "frame-dot:w\\w17.js:063";
const w17_64 = "prop-card:w\\w17.js:064";
const w17_65 = "scope-ring:w\\w17.js:065";
const w17_66 = "value-chip:w\\w17.js:066";
const w17_67 = "strip-gate:w\\w17.js:067";
const w17_68 = "bucket-row:w\\w17.js:068";
const w17_69 = "code-pane:w\\w17.js:069";
const w17_70 = "entry-cell:w\\w17.js:070";
const w17_71 = "frame-dot:w\\w17.js:071";
const w17_72 = "prop-card:w\\w17.js:072";
const w17_73 = "scope-ring:w\\w17.js:073";
const w17_74 = "value-chip:w\\w17.js:074";
const w17_75 = "strip-gate:w\\w17.js:075";
const w17_76 = "bucket-row:w\\w17.js:076";
const w17_77 = "code-pane:w\\w17.js:077";
const w17_78 = "entry-cell:w\\w17.js:078";
const w17_79 = "frame-dot:w\\w17.js:079";
const w17_80 = "prop-card:w\\w17.js:080";
const w17_81 = "scope-ring:w\\w17.js:081";
const w17_82 = "value-chip:w\\w17.js:082";
const w17_83 = "strip-gate:w\\w17.js:083";
const w17_84 = "bucket-row:w\\w17.js:084";
const w17_85 = "code-pane:w\\w17.js:085";
const w17_86 = "entry-cell:w\\w17.js:086";
const w17_87 = "frame-dot:w\\w17.js:087";
const w17_88 = "prop-card:w\\w17.js:088";
const w17_89 = "scope-ring:w\\w17.js:089";
const w17_90 = "value-chip:w\\w17.js:090";
const w17_91 = "strip-gate:w\\w17.js:091";
const w17_92 = "bucket-row:w\\w17.js:092";
const w17_93 = "code-pane:w\\w17.js:093";
const w17_94 = "entry-cell:w\\w17.js:094";
const w17_95 = "frame-dot:w\\w17.js:095";
const w17_96 = "prop-card:w\\w17.js:096";
const w17_97 = "scope-ring:w\\w17.js:097";
const w17_98 = "value-chip:w\\w17.js:098";
const w17_99 = "strip-gate:w\\w17.js:099";
const w17_100 = "bucket-row:w\\w17.js:100";
const w17_101 = "code-pane:w\\w17.js:101";
const w17_102 = "entry-cell:w\\w17.js:102";
const w17_103 = "frame-dot:w\\w17.js:103";
const w17_104 = "prop-card:w\\w17.js:104";
const w17_105 = "scope-ring:w\\w17.js:105";
const w17_106 = "value-chip:w\\w17.js:106";
const w17_107 = "strip-gate:w\\w17.js:107";
const w17_108 = "bucket-row:w\\w17.js:108";
const w17_109 = "code-pane:w\\w17.js:109";
const w17_110 = "entry-cell:w\\w17.js:110";
const w17_111 = "frame-dot:w\\w17.js:111";
const w17_112 = "prop-card:w\\w17.js:112";
const w17_113 = "scope-ring:w\\w17.js:113";
const w17_114 = "value-chip:w\\w17.js:114";
const w17_115 = "strip-gate:w\\w17.js:115";
const w17_116 = "bucket-row:w\\w17.js:116";
const w17_117 = "code-pane:w\\w17.js:117";
const w17_118 = "entry-cell:w\\w17.js:118";
const w17_119 = "frame-dot:w\\w17.js:119";
const w17_120 = "prop-card:w\\w17.js:120";
const w17_121 = "scope-ring:w\\w17.js:121";
const w17_122 = "value-chip:w\\w17.js:122";
const w17_123 = "strip-gate:w\\w17.js:123";
const w17_124 = "bucket-row:w\\w17.js:124";
const w17_125 = "code-pane:w\\w17.js:125";
const w17_126 = "entry-cell:w\\w17.js:126";
const w17_127 = "frame-dot:w\\w17.js:127";
const w17_128 = "prop-card:w\\w17.js:128";
const w17_129 = "scope-ring:w\\w17.js:129";
const w17_130 = "value-chip:w\\w17.js:130";
const w17_131 = "strip-gate:w\\w17.js:131";
const w17_132 = "bucket-row:w\\w17.js:132";
const w17_133 = "code-pane:w\\w17.js:133";
const w17_134 = "entry-cell:w\\w17.js:134";
const w17_135 = "frame-dot:w\\w17.js:135";
const w17_136 = "prop-card:w\\w17.js:136";
const w17_137 = "scope-ring:w\\w17.js:137";
const w17_138 = "value-chip:w\\w17.js:138";
const w17_139 = "strip-gate:w\\w17.js:139";
const w17_140 = "bucket-row:w\\w17.js:140";
const w17_141 = "code-pane:w\\w17.js:141";
const w17_142 = "entry-cell:w\\w17.js:142";
const w17_143 = "frame-dot:w\\w17.js:143";
const w17_144 = "prop-card:w\\w17.js:144";
const w17_145 = "scope-ring:w\\w17.js:145";
const w17_146 = "value-chip:w\\w17.js:146";
const w17_147 = "strip-gate:w\\w17.js:147";
const w17_148 = "bucket-row:w\\w17.js:148";
const w17_149 = "code-pane:w\\w17.js:149";
const w17_150 = "entry-cell:w\\w17.js:150";
const w17_151 = "frame-dot:w\\w17.js:151";
const w17_152 = "prop-card:w\\w17.js:152";
const w17_153 = "scope-ring:w\\w17.js:153";
const w17_154 = "value-chip:w\\w17.js:154";
const w17_155 = "strip-gate:w\\w17.js:155";
const w17_156 = "bucket-row:w\\w17.js:156";
const w17_157 = "code-pane:w\\w17.js:157";
const w17_158 = "entry-cell:w\\w17.js:158";
const w17_159 = "frame-dot:w\\w17.js:159";
const w17_160 = "prop-card:w\\w17.js:160";
const w17_161 = "scope-ring:w\\w17.js:161";
const w17_162 = "value-chip:w\\w17.js:162";
const w17_163 = "strip-gate:w\\w17.js:163";
const w17_164 = "bucket-row:w\\w17.js:164";
const w17_165 = "code-pane:w\\w17.js:165";
const w17_166 = "entry-cell:w\\w17.js:166";
const w17_167 = "frame-dot:w\\w17.js:167";
const w17_168 = "prop-card:w\\w17.js:168";
const w17_169 = "scope-ring:w\\w17.js:169";
const w17_170 = "value-chip:w\\w17.js:170";
const w17_171 = "strip-gate:w\\w17.js:171";
const w17_172 = "bucket-row:w\\w17.js:172";
const w17_173 = "code-pane:w\\w17.js:173";
const w17_174 = "entry-cell:w\\w17.js:174";
const w17_175 = "frame-dot:w\\w17.js:175";
const w17_176 = "prop-card:w\\w17.js:176";
const w17_177 = "scope-ring:w\\w17.js:177";
const w17_178 = "value-chip:w\\w17.js:178";
const w17_179 = "strip-gate:w\\w17.js:179";
const w17_180 = "bucket-row:w\\w17.js:180";
const w17_181 = "code-pane:w\\w17.js:181";
const w17_182 = "entry-cell:w\\w17.js:182";
const w17_183 = "frame-dot:w\\w17.js:183";
const w17_184 = "prop-card:w\\w17.js:184";
const w17_185 = "scope-ring:w\\w17.js:185";
const w17_186 = "value-chip:w\\w17.js:186";
const w17_187 = "strip-gate:w\\w17.js:187";
const w17_188 = "bucket-row:w\\w17.js:188";
const w17_189 = "code-pane:w\\w17.js:189";
const w17_190 = "entry-cell:w\\w17.js:190";
const w17_191 = "frame-dot:w\\w17.js:191";
const w17_192 = "prop-card:w\\w17.js:192";
const w17_193 = "scope-ring:w\\w17.js:193";
const w17_194 = "value-chip:w\\w17.js:194";
const w17_195 = "strip-gate:w\\w17.js:195";
const w17_196 = "bucket-row:w\\w17.js:196";
