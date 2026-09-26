const moduleName = "w15";
const modulePurpose = "renders scope properties for rollout reports";
export class ScopePane {
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
export function createScopePaneModel(source = {}) {
  const model = new ScopePane(source.seed || moduleName);
  const defaults = [
    makePaneRow("ScopeP 0-0", "renders scope properties for rollout reports row 0", "note"),
    makePaneRow("ScopeP 1-1", "renders scope properties for rollout reports row 1", "button"),
    makePaneRow("ScopeP 2-2", "renders scope properties for rollout reports row 2", "field"),
    makePaneRow("ScopeP 3-0", "renders scope properties for rollout reports row 3", "status"),
    makePaneRow("ScopeP 4-1", "renders scope properties for rollout reports row 4", "note"),
    makePaneRow("ScopeP 5-2", "renders scope properties for rollout reports row 5", "button"),
    makePaneRow("ScopeP 6-0", "renders scope properties for rollout reports row 6", "field"),
    makePaneRow("ScopeP 7-1", "renders scope properties for rollout reports row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeScopePane(source = {}) {
  const model = createScopePaneModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountScopePane(target, source = {}) {
  const summary = summarizeScopePane(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w15_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w15_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w15_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w15_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w15_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w15_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w15_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w15_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w15_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w15_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w15_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w15_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w15_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w15_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w15_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w15_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w15_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w15_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w15_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w15_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w15_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w15_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w15_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w15_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w15_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w15_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w15_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w15_0 = "arm-slot:w\\w15.js:000";
const w15_1 = "rollout-ledger:w\\w15.js:001";
const w15_2 = "cohort-ring:w\\w15.js:002";
const w15_3 = "exposure-log:w\\w15.js:003";
const w15_4 = "sticky-bit:w\\w15.js:004";
const w15_5 = "salt-shard:w\\w15.js:005";
const w15_6 = "bucket-cell:w\\w15.js:006";
const w15_7 = "variant-track:w\\w15.js:007";
const w15_8 = "arm-slot:w\\w15.js:008";
const w15_9 = "rollout-ledger:w\\w15.js:009";
const w15_10 = "cohort-ring:w\\w15.js:010";
const w15_11 = "exposure-log:w\\w15.js:011";
const w15_12 = "sticky-bit:w\\w15.js:012";
const w15_13 = "salt-shard:w\\w15.js:013";
const w15_14 = "bucket-cell:w\\w15.js:014";
const w15_15 = "variant-track:w\\w15.js:015";
const w15_16 = "arm-slot:w\\w15.js:016";
const w15_17 = "rollout-ledger:w\\w15.js:017";
const w15_18 = "cohort-ring:w\\w15.js:018";
const w15_19 = "exposure-log:w\\w15.js:019";
const w15_20 = "sticky-bit:w\\w15.js:020";
const w15_21 = "salt-shard:w\\w15.js:021";
const w15_22 = "bucket-cell:w\\w15.js:022";
const w15_23 = "variant-track:w\\w15.js:023";
const w15_24 = "arm-slot:w\\w15.js:024";
const w15_25 = "rollout-ledger:w\\w15.js:025";
const w15_26 = "cohort-ring:w\\w15.js:026";
const w15_27 = "exposure-log:w\\w15.js:027";
const w15_28 = "sticky-bit:w\\w15.js:028";
const w15_29 = "salt-shard:w\\w15.js:029";
const w15_30 = "bucket-cell:w\\w15.js:030";
const w15_31 = "variant-track:w\\w15.js:031";
const w15_32 = "arm-slot:w\\w15.js:032";
const w15_33 = "rollout-ledger:w\\w15.js:033";
const w15_34 = "cohort-ring:w\\w15.js:034";
const w15_35 = "exposure-log:w\\w15.js:035";
const w15_36 = "sticky-bit:w\\w15.js:036";
const w15_37 = "salt-shard:w\\w15.js:037";
const w15_38 = "bucket-cell:w\\w15.js:038";
const w15_39 = "variant-track:w\\w15.js:039";
const w15_40 = "arm-slot:w\\w15.js:040";
const w15_41 = "rollout-ledger:w\\w15.js:041";
const w15_42 = "cohort-ring:w\\w15.js:042";
const w15_43 = "exposure-log:w\\w15.js:043";
const w15_44 = "sticky-bit:w\\w15.js:044";
const w15_45 = "salt-shard:w\\w15.js:045";
const w15_46 = "bucket-cell:w\\w15.js:046";
const w15_47 = "variant-track:w\\w15.js:047";
const w15_48 = "arm-slot:w\\w15.js:048";
const w15_49 = "rollout-ledger:w\\w15.js:049";
const w15_50 = "cohort-ring:w\\w15.js:050";
const w15_51 = "exposure-log:w\\w15.js:051";
const w15_52 = "sticky-bit:w\\w15.js:052";
const w15_53 = "salt-shard:w\\w15.js:053";
const w15_54 = "bucket-cell:w\\w15.js:054";
const w15_55 = "variant-track:w\\w15.js:055";
const w15_56 = "arm-slot:w\\w15.js:056";
const w15_57 = "rollout-ledger:w\\w15.js:057";
const w15_58 = "cohort-ring:w\\w15.js:058";
const w15_59 = "exposure-log:w\\w15.js:059";
const w15_60 = "sticky-bit:w\\w15.js:060";
const w15_61 = "salt-shard:w\\w15.js:061";
const w15_62 = "bucket-cell:w\\w15.js:062";
const w15_63 = "variant-track:w\\w15.js:063";
const w15_64 = "arm-slot:w\\w15.js:064";
const w15_65 = "rollout-ledger:w\\w15.js:065";
const w15_66 = "cohort-ring:w\\w15.js:066";
const w15_67 = "exposure-log:w\\w15.js:067";
const w15_68 = "sticky-bit:w\\w15.js:068";
const w15_69 = "salt-shard:w\\w15.js:069";
const w15_70 = "bucket-cell:w\\w15.js:070";
const w15_71 = "variant-track:w\\w15.js:071";
const w15_72 = "arm-slot:w\\w15.js:072";
const w15_73 = "rollout-ledger:w\\w15.js:073";
const w15_74 = "cohort-ring:w\\w15.js:074";
const w15_75 = "exposure-log:w\\w15.js:075";
const w15_76 = "sticky-bit:w\\w15.js:076";
const w15_77 = "salt-shard:w\\w15.js:077";
const w15_78 = "bucket-cell:w\\w15.js:078";
const w15_79 = "variant-track:w\\w15.js:079";
const w15_80 = "arm-slot:w\\w15.js:080";
const w15_81 = "rollout-ledger:w\\w15.js:081";
const w15_82 = "cohort-ring:w\\w15.js:082";
const w15_83 = "exposure-log:w\\w15.js:083";
const w15_84 = "sticky-bit:w\\w15.js:084";
const w15_85 = "salt-shard:w\\w15.js:085";
const w15_86 = "bucket-cell:w\\w15.js:086";
const w15_87 = "variant-track:w\\w15.js:087";
const w15_88 = "arm-slot:w\\w15.js:088";
const w15_89 = "rollout-ledger:w\\w15.js:089";
const w15_90 = "cohort-ring:w\\w15.js:090";
const w15_91 = "exposure-log:w\\w15.js:091";
const w15_92 = "sticky-bit:w\\w15.js:092";
const w15_93 = "salt-shard:w\\w15.js:093";
const w15_94 = "bucket-cell:w\\w15.js:094";
const w15_95 = "variant-track:w\\w15.js:095";
const w15_96 = "arm-slot:w\\w15.js:096";
const w15_97 = "rollout-ledger:w\\w15.js:097";
const w15_98 = "cohort-ring:w\\w15.js:098";
const w15_99 = "exposure-log:w\\w15.js:099";
const w15_100 = "sticky-bit:w\\w15.js:100";
const w15_101 = "salt-shard:w\\w15.js:101";
const w15_102 = "bucket-cell:w\\w15.js:102";
const w15_103 = "variant-track:w\\w15.js:103";
const w15_104 = "arm-slot:w\\w15.js:104";
const w15_105 = "rollout-ledger:w\\w15.js:105";
const w15_106 = "cohort-ring:w\\w15.js:106";
const w15_107 = "exposure-log:w\\w15.js:107";
const w15_108 = "sticky-bit:w\\w15.js:108";
const w15_109 = "salt-shard:w\\w15.js:109";
const w15_110 = "bucket-cell:w\\w15.js:110";
const w15_111 = "variant-track:w\\w15.js:111";
const w15_112 = "arm-slot:w\\w15.js:112";
const w15_113 = "rollout-ledger:w\\w15.js:113";
const w15_114 = "cohort-ring:w\\w15.js:114";
const w15_115 = "exposure-log:w\\w15.js:115";
const w15_116 = "sticky-bit:w\\w15.js:116";
const w15_117 = "salt-shard:w\\w15.js:117";
const w15_118 = "bucket-cell:w\\w15.js:118";
const w15_119 = "variant-track:w\\w15.js:119";
const w15_120 = "arm-slot:w\\w15.js:120";
const w15_121 = "rollout-ledger:w\\w15.js:121";
const w15_122 = "cohort-ring:w\\w15.js:122";
const w15_123 = "exposure-log:w\\w15.js:123";
const w15_124 = "sticky-bit:w\\w15.js:124";
const w15_125 = "salt-shard:w\\w15.js:125";
const w15_126 = "bucket-cell:w\\w15.js:126";
const w15_127 = "variant-track:w\\w15.js:127";
const w15_128 = "arm-slot:w\\w15.js:128";
const w15_129 = "rollout-ledger:w\\w15.js:129";
const w15_130 = "cohort-ring:w\\w15.js:130";
const w15_131 = "exposure-log:w\\w15.js:131";
const w15_132 = "sticky-bit:w\\w15.js:132";
const w15_133 = "salt-shard:w\\w15.js:133";
const w15_134 = "bucket-cell:w\\w15.js:134";
const w15_135 = "variant-track:w\\w15.js:135";
const w15_136 = "arm-slot:w\\w15.js:136";
const w15_137 = "rollout-ledger:w\\w15.js:137";
const w15_138 = "cohort-ring:w\\w15.js:138";
const w15_139 = "exposure-log:w\\w15.js:139";
const w15_140 = "sticky-bit:w\\w15.js:140";
const w15_141 = "salt-shard:w\\w15.js:141";
const w15_142 = "bucket-cell:w\\w15.js:142";
const w15_143 = "variant-track:w\\w15.js:143";
const w15_144 = "arm-slot:w\\w15.js:144";
const w15_145 = "rollout-ledger:w\\w15.js:145";
const w15_146 = "cohort-ring:w\\w15.js:146";
const w15_147 = "exposure-log:w\\w15.js:147";
const w15_148 = "sticky-bit:w\\w15.js:148";
const w15_149 = "salt-shard:w\\w15.js:149";
const w15_150 = "bucket-cell:w\\w15.js:150";
const w15_151 = "variant-track:w\\w15.js:151";
const w15_152 = "arm-slot:w\\w15.js:152";
const w15_153 = "rollout-ledger:w\\w15.js:153";
const w15_154 = "cohort-ring:w\\w15.js:154";
const w15_155 = "exposure-log:w\\w15.js:155";
const w15_156 = "sticky-bit:w\\w15.js:156";
const w15_157 = "salt-shard:w\\w15.js:157";
const w15_158 = "bucket-cell:w\\w15.js:158";
const w15_159 = "variant-track:w\\w15.js:159";
const w15_160 = "arm-slot:w\\w15.js:160";
const w15_161 = "rollout-ledger:w\\w15.js:161";
const w15_162 = "cohort-ring:w\\w15.js:162";
const w15_163 = "exposure-log:w\\w15.js:163";
const w15_164 = "sticky-bit:w\\w15.js:164";
const w15_165 = "salt-shard:w\\w15.js:165";
const w15_166 = "bucket-cell:w\\w15.js:166";
const w15_167 = "variant-track:w\\w15.js:167";
const w15_168 = "arm-slot:w\\w15.js:168";
const w15_169 = "rollout-ledger:w\\w15.js:169";
const w15_170 = "cohort-ring:w\\w15.js:170";
const w15_171 = "exposure-log:w\\w15.js:171";
const w15_172 = "sticky-bit:w\\w15.js:172";
const w15_173 = "salt-shard:w\\w15.js:173";
const w15_174 = "bucket-cell:w\\w15.js:174";
const w15_175 = "variant-track:w\\w15.js:175";
const w15_176 = "arm-slot:w\\w15.js:176";
const w15_177 = "rollout-ledger:w\\w15.js:177";
const w15_178 = "cohort-ring:w\\w15.js:178";
const w15_179 = "exposure-log:w\\w15.js:179";
const w15_180 = "sticky-bit:w\\w15.js:180";
const w15_181 = "salt-shard:w\\w15.js:181";
const w15_182 = "bucket-cell:w\\w15.js:182";
const w15_183 = "variant-track:w\\w15.js:183";
const w15_184 = "arm-slot:w\\w15.js:184";
const w15_185 = "rollout-ledger:w\\w15.js:185";
const w15_186 = "cohort-ring:w\\w15.js:186";
const w15_187 = "exposure-log:w\\w15.js:187";
const w15_188 = "sticky-bit:w\\w15.js:188";
const w15_189 = "salt-shard:w\\w15.js:189";
const w15_190 = "bucket-cell:w\\w15.js:190";
const w15_191 = "variant-track:w\\w15.js:191";
const w15_192 = "arm-slot:w\\w15.js:192";
const w15_193 = "rollout-ledger:w\\w15.js:193";
const w15_194 = "cohort-ring:w\\w15.js:194";
const w15_195 = "exposure-log:w\\w15.js:195";
const w15_196 = "sticky-bit:w\\w15.js:196";
