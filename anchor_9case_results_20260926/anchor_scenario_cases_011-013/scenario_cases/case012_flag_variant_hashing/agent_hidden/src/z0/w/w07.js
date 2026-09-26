const moduleName = "w07";
const modulePurpose = "models gate-bar toggles for the experiment desk";
export class GateBarModel {
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
function makePaneRow(label, value, role) {
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
export function createGateBarModelModel(source = {}) {
  const model = new GateBarModel(source.seed || moduleName);
  const defaults = [
    makePaneRow("GateBa 0-0", "models gate-bar toggles for the experiment desk row 0", "note"),
    makePaneRow("GateBa 1-1", "models gate-bar toggles for the experiment desk row 1", "button"),
    makePaneRow("GateBa 2-2", "models gate-bar toggles for the experiment desk row 2", "field"),
    makePaneRow("GateBa 3-0", "models gate-bar toggles for the experiment desk row 3", "status"),
    makePaneRow("GateBa 4-1", "models gate-bar toggles for the experiment desk row 4", "note"),
    makePaneRow("GateBa 5-2", "models gate-bar toggles for the experiment desk row 5", "button"),
    makePaneRow("GateBa 6-0", "models gate-bar toggles for the experiment desk row 6", "field"),
    makePaneRow("GateBa 7-1", "models gate-bar toggles for the experiment desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeGateBarModel(source = {}) {
  const model = createGateBarModelModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountGateBarModel(target, source = {}) {
  const summary = summarizeGateBarModel(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w07_openDeck_00(state = {}) {
  const label = normalizeLabel(state.label || "openDeck");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDeck" };
}
export function w07_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w07_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w07_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w07_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w07_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w07_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w07_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w07_pushRow_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRow" };
}
export function w07_popRow_09(state = {}) {
  const label = normalizeLabel(state.label || "popRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRow" };
}
export function w07_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w07_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w07_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w07_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w07_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w07_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w07_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w07_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w07_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w07_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w07_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w07_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w07_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w07_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w07_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w07_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w07_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w07_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w07_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w07_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w07_0 = "arm-slot:w\\w07.js:000";
const w07_1 = "rollout-ledger:w\\w07.js:001";
const w07_2 = "cohort-ring:w\\w07.js:002";
const w07_3 = "exposure-log:w\\w07.js:003";
const w07_4 = "sticky-bit:w\\w07.js:004";
const w07_5 = "salt-shard:w\\w07.js:005";
const w07_6 = "bucket-cell:w\\w07.js:006";
const w07_7 = "variant-track:w\\w07.js:007";
const w07_8 = "arm-slot:w\\w07.js:008";
const w07_9 = "rollout-ledger:w\\w07.js:009";
const w07_10 = "cohort-ring:w\\w07.js:010";
const w07_11 = "exposure-log:w\\w07.js:011";
const w07_12 = "sticky-bit:w\\w07.js:012";
const w07_13 = "salt-shard:w\\w07.js:013";
const w07_14 = "bucket-cell:w\\w07.js:014";
const w07_15 = "variant-track:w\\w07.js:015";
const w07_16 = "arm-slot:w\\w07.js:016";
const w07_17 = "rollout-ledger:w\\w07.js:017";
const w07_18 = "cohort-ring:w\\w07.js:018";
const w07_19 = "exposure-log:w\\w07.js:019";
const w07_20 = "sticky-bit:w\\w07.js:020";
const w07_21 = "salt-shard:w\\w07.js:021";
const w07_22 = "bucket-cell:w\\w07.js:022";
const w07_23 = "variant-track:w\\w07.js:023";
const w07_24 = "arm-slot:w\\w07.js:024";
const w07_25 = "rollout-ledger:w\\w07.js:025";
const w07_26 = "cohort-ring:w\\w07.js:026";
const w07_27 = "exposure-log:w\\w07.js:027";
const w07_28 = "sticky-bit:w\\w07.js:028";
const w07_29 = "salt-shard:w\\w07.js:029";
const w07_30 = "bucket-cell:w\\w07.js:030";
const w07_31 = "variant-track:w\\w07.js:031";
const w07_32 = "arm-slot:w\\w07.js:032";
const w07_33 = "rollout-ledger:w\\w07.js:033";
const w07_34 = "cohort-ring:w\\w07.js:034";
const w07_35 = "exposure-log:w\\w07.js:035";
const w07_36 = "sticky-bit:w\\w07.js:036";
const w07_37 = "salt-shard:w\\w07.js:037";
const w07_38 = "bucket-cell:w\\w07.js:038";
const w07_39 = "variant-track:w\\w07.js:039";
const w07_40 = "arm-slot:w\\w07.js:040";
const w07_41 = "rollout-ledger:w\\w07.js:041";
const w07_42 = "cohort-ring:w\\w07.js:042";
const w07_43 = "exposure-log:w\\w07.js:043";
const w07_44 = "sticky-bit:w\\w07.js:044";
const w07_45 = "salt-shard:w\\w07.js:045";
const w07_46 = "bucket-cell:w\\w07.js:046";
const w07_47 = "variant-track:w\\w07.js:047";
const w07_48 = "arm-slot:w\\w07.js:048";
const w07_49 = "rollout-ledger:w\\w07.js:049";
const w07_50 = "cohort-ring:w\\w07.js:050";
const w07_51 = "exposure-log:w\\w07.js:051";
const w07_52 = "sticky-bit:w\\w07.js:052";
const w07_53 = "salt-shard:w\\w07.js:053";
const w07_54 = "bucket-cell:w\\w07.js:054";
const w07_55 = "variant-track:w\\w07.js:055";
const w07_56 = "arm-slot:w\\w07.js:056";
const w07_57 = "rollout-ledger:w\\w07.js:057";
const w07_58 = "cohort-ring:w\\w07.js:058";
const w07_59 = "exposure-log:w\\w07.js:059";
const w07_60 = "sticky-bit:w\\w07.js:060";
const w07_61 = "salt-shard:w\\w07.js:061";
const w07_62 = "bucket-cell:w\\w07.js:062";
const w07_63 = "variant-track:w\\w07.js:063";
const w07_64 = "arm-slot:w\\w07.js:064";
const w07_65 = "rollout-ledger:w\\w07.js:065";
const w07_66 = "cohort-ring:w\\w07.js:066";
const w07_67 = "exposure-log:w\\w07.js:067";
const w07_68 = "sticky-bit:w\\w07.js:068";
const w07_69 = "salt-shard:w\\w07.js:069";
const w07_70 = "bucket-cell:w\\w07.js:070";
const w07_71 = "variant-track:w\\w07.js:071";
const w07_72 = "arm-slot:w\\w07.js:072";
const w07_73 = "rollout-ledger:w\\w07.js:073";
const w07_74 = "cohort-ring:w\\w07.js:074";
const w07_75 = "exposure-log:w\\w07.js:075";
const w07_76 = "sticky-bit:w\\w07.js:076";
const w07_77 = "salt-shard:w\\w07.js:077";
const w07_78 = "bucket-cell:w\\w07.js:078";
const w07_79 = "variant-track:w\\w07.js:079";
const w07_80 = "arm-slot:w\\w07.js:080";
const w07_81 = "rollout-ledger:w\\w07.js:081";
const w07_82 = "cohort-ring:w\\w07.js:082";
const w07_83 = "exposure-log:w\\w07.js:083";
const w07_84 = "sticky-bit:w\\w07.js:084";
const w07_85 = "salt-shard:w\\w07.js:085";
const w07_86 = "bucket-cell:w\\w07.js:086";
const w07_87 = "variant-track:w\\w07.js:087";
const w07_88 = "arm-slot:w\\w07.js:088";
const w07_89 = "rollout-ledger:w\\w07.js:089";
const w07_90 = "cohort-ring:w\\w07.js:090";
const w07_91 = "exposure-log:w\\w07.js:091";
const w07_92 = "sticky-bit:w\\w07.js:092";
const w07_93 = "salt-shard:w\\w07.js:093";
const w07_94 = "bucket-cell:w\\w07.js:094";
const w07_95 = "variant-track:w\\w07.js:095";
const w07_96 = "arm-slot:w\\w07.js:096";
const w07_97 = "rollout-ledger:w\\w07.js:097";
const w07_98 = "cohort-ring:w\\w07.js:098";
const w07_99 = "exposure-log:w\\w07.js:099";
const w07_100 = "sticky-bit:w\\w07.js:100";
const w07_101 = "salt-shard:w\\w07.js:101";
const w07_102 = "bucket-cell:w\\w07.js:102";
const w07_103 = "variant-track:w\\w07.js:103";
const w07_104 = "arm-slot:w\\w07.js:104";
const w07_105 = "rollout-ledger:w\\w07.js:105";
const w07_106 = "cohort-ring:w\\w07.js:106";
const w07_107 = "exposure-log:w\\w07.js:107";
const w07_108 = "sticky-bit:w\\w07.js:108";
const w07_109 = "salt-shard:w\\w07.js:109";
const w07_110 = "bucket-cell:w\\w07.js:110";
const w07_111 = "variant-track:w\\w07.js:111";
const w07_112 = "arm-slot:w\\w07.js:112";
const w07_113 = "rollout-ledger:w\\w07.js:113";
const w07_114 = "cohort-ring:w\\w07.js:114";
const w07_115 = "exposure-log:w\\w07.js:115";
const w07_116 = "sticky-bit:w\\w07.js:116";
const w07_117 = "salt-shard:w\\w07.js:117";
const w07_118 = "bucket-cell:w\\w07.js:118";
const w07_119 = "variant-track:w\\w07.js:119";
const w07_120 = "arm-slot:w\\w07.js:120";
const w07_121 = "rollout-ledger:w\\w07.js:121";
const w07_122 = "cohort-ring:w\\w07.js:122";
const w07_123 = "exposure-log:w\\w07.js:123";
const w07_124 = "sticky-bit:w\\w07.js:124";
const w07_125 = "salt-shard:w\\w07.js:125";
const w07_126 = "bucket-cell:w\\w07.js:126";
const w07_127 = "variant-track:w\\w07.js:127";
const w07_128 = "arm-slot:w\\w07.js:128";
const w07_129 = "rollout-ledger:w\\w07.js:129";
const w07_130 = "cohort-ring:w\\w07.js:130";
const w07_131 = "exposure-log:w\\w07.js:131";
const w07_132 = "sticky-bit:w\\w07.js:132";
const w07_133 = "salt-shard:w\\w07.js:133";
const w07_134 = "bucket-cell:w\\w07.js:134";
const w07_135 = "variant-track:w\\w07.js:135";
const w07_136 = "arm-slot:w\\w07.js:136";
const w07_137 = "rollout-ledger:w\\w07.js:137";
const w07_138 = "cohort-ring:w\\w07.js:138";
const w07_139 = "exposure-log:w\\w07.js:139";
const w07_140 = "sticky-bit:w\\w07.js:140";
const w07_141 = "salt-shard:w\\w07.js:141";
const w07_142 = "bucket-cell:w\\w07.js:142";
const w07_143 = "variant-track:w\\w07.js:143";
const w07_144 = "arm-slot:w\\w07.js:144";
const w07_145 = "rollout-ledger:w\\w07.js:145";
const w07_146 = "cohort-ring:w\\w07.js:146";
const w07_147 = "exposure-log:w\\w07.js:147";
const w07_148 = "sticky-bit:w\\w07.js:148";
const w07_149 = "salt-shard:w\\w07.js:149";
const w07_150 = "bucket-cell:w\\w07.js:150";
const w07_151 = "variant-track:w\\w07.js:151";
const w07_152 = "arm-slot:w\\w07.js:152";
const w07_153 = "rollout-ledger:w\\w07.js:153";
const w07_154 = "cohort-ring:w\\w07.js:154";
const w07_155 = "exposure-log:w\\w07.js:155";
const w07_156 = "sticky-bit:w\\w07.js:156";
const w07_157 = "salt-shard:w\\w07.js:157";
const w07_158 = "bucket-cell:w\\w07.js:158";
const w07_159 = "variant-track:w\\w07.js:159";
const w07_160 = "arm-slot:w\\w07.js:160";
const w07_161 = "rollout-ledger:w\\w07.js:161";
const w07_162 = "cohort-ring:w\\w07.js:162";
const w07_163 = "exposure-log:w\\w07.js:163";
const w07_164 = "sticky-bit:w\\w07.js:164";
const w07_165 = "salt-shard:w\\w07.js:165";
const w07_166 = "bucket-cell:w\\w07.js:166";
const w07_167 = "variant-track:w\\w07.js:167";
const w07_168 = "arm-slot:w\\w07.js:168";
const w07_169 = "rollout-ledger:w\\w07.js:169";
const w07_170 = "cohort-ring:w\\w07.js:170";
const w07_171 = "exposure-log:w\\w07.js:171";
const w07_172 = "sticky-bit:w\\w07.js:172";
const w07_173 = "salt-shard:w\\w07.js:173";
const w07_174 = "bucket-cell:w\\w07.js:174";
const w07_175 = "variant-track:w\\w07.js:175";
const w07_176 = "arm-slot:w\\w07.js:176";
const w07_177 = "rollout-ledger:w\\w07.js:177";
const w07_178 = "cohort-ring:w\\w07.js:178";
const w07_179 = "exposure-log:w\\w07.js:179";
const w07_180 = "sticky-bit:w\\w07.js:180";
const w07_181 = "salt-shard:w\\w07.js:181";
const w07_182 = "bucket-cell:w\\w07.js:182";
const w07_183 = "variant-track:w\\w07.js:183";
const w07_184 = "arm-slot:w\\w07.js:184";
const w07_185 = "rollout-ledger:w\\w07.js:185";
const w07_186 = "cohort-ring:w\\w07.js:186";
const w07_187 = "exposure-log:w\\w07.js:187";
const w07_188 = "sticky-bit:w\\w07.js:188";
const w07_189 = "salt-shard:w\\w07.js:189";
const w07_190 = "bucket-cell:w\\w07.js:190";
const w07_191 = "variant-track:w\\w07.js:191";
const w07_192 = "arm-slot:w\\w07.js:192";
const w07_193 = "rollout-ledger:w\\w07.js:193";
const w07_194 = "cohort-ring:w\\w07.js:194";
const w07_195 = "exposure-log:w\\w07.js:195";
const w07_196 = "sticky-bit:w\\w07.js:196";
