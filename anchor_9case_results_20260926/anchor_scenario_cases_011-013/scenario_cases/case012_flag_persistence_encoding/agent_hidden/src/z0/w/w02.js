const moduleName = "w02";
const modulePurpose = "rings cohort membership for the rollout desk";
export class CohortRing {
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
export function createCohortRingModel(source = {}) {
  const model = new CohortRing(source.seed || moduleName);
  const defaults = [
    makePaneRow("Cohort 0-0", "rings cohort membership for the rollout desk row 0", "note"),
    makePaneRow("Cohort 1-1", "rings cohort membership for the rollout desk row 1", "button"),
    makePaneRow("Cohort 2-2", "rings cohort membership for the rollout desk row 2", "field"),
    makePaneRow("Cohort 3-0", "rings cohort membership for the rollout desk row 3", "status"),
    makePaneRow("Cohort 4-1", "rings cohort membership for the rollout desk row 4", "note"),
    makePaneRow("Cohort 5-2", "rings cohort membership for the rollout desk row 5", "button"),
    makePaneRow("Cohort 6-0", "rings cohort membership for the rollout desk row 6", "field"),
    makePaneRow("Cohort 7-1", "rings cohort membership for the rollout desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeCohortRing(source = {}) {
  const model = createCohortRingModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountCohortRing(target, source = {}) {
  const summary = summarizeCohortRing(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w02_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w02_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w02_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w02_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w02_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w02_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w02_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w02_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w02_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w02_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w02_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w02_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w02_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w02_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w02_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w02_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w02_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w02_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w02_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w02_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w02_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w02_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w02_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w02_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w02_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w02_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w02_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w02_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w02_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w02_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w02_0 = "arm-slot:w\\w02.js:000";
const w02_1 = "rollout-ledger:w\\w02.js:001";
const w02_2 = "cohort-ring:w\\w02.js:002";
const w02_3 = "exposure-log:w\\w02.js:003";
const w02_4 = "sticky-bit:w\\w02.js:004";
const w02_5 = "salt-shard:w\\w02.js:005";
const w02_6 = "bucket-cell:w\\w02.js:006";
const w02_7 = "variant-track:w\\w02.js:007";
const w02_8 = "arm-slot:w\\w02.js:008";
const w02_9 = "rollout-ledger:w\\w02.js:009";
const w02_10 = "cohort-ring:w\\w02.js:010";
const w02_11 = "exposure-log:w\\w02.js:011";
const w02_12 = "sticky-bit:w\\w02.js:012";
const w02_13 = "salt-shard:w\\w02.js:013";
const w02_14 = "bucket-cell:w\\w02.js:014";
const w02_15 = "variant-track:w\\w02.js:015";
const w02_16 = "arm-slot:w\\w02.js:016";
const w02_17 = "rollout-ledger:w\\w02.js:017";
const w02_18 = "cohort-ring:w\\w02.js:018";
const w02_19 = "exposure-log:w\\w02.js:019";
const w02_20 = "sticky-bit:w\\w02.js:020";
const w02_21 = "salt-shard:w\\w02.js:021";
const w02_22 = "bucket-cell:w\\w02.js:022";
const w02_23 = "variant-track:w\\w02.js:023";
const w02_24 = "arm-slot:w\\w02.js:024";
const w02_25 = "rollout-ledger:w\\w02.js:025";
const w02_26 = "cohort-ring:w\\w02.js:026";
const w02_27 = "exposure-log:w\\w02.js:027";
const w02_28 = "sticky-bit:w\\w02.js:028";
const w02_29 = "salt-shard:w\\w02.js:029";
const w02_30 = "bucket-cell:w\\w02.js:030";
const w02_31 = "variant-track:w\\w02.js:031";
const w02_32 = "arm-slot:w\\w02.js:032";
const w02_33 = "rollout-ledger:w\\w02.js:033";
const w02_34 = "cohort-ring:w\\w02.js:034";
const w02_35 = "exposure-log:w\\w02.js:035";
const w02_36 = "sticky-bit:w\\w02.js:036";
const w02_37 = "salt-shard:w\\w02.js:037";
const w02_38 = "bucket-cell:w\\w02.js:038";
const w02_39 = "variant-track:w\\w02.js:039";
const w02_40 = "arm-slot:w\\w02.js:040";
const w02_41 = "rollout-ledger:w\\w02.js:041";
const w02_42 = "cohort-ring:w\\w02.js:042";
const w02_43 = "exposure-log:w\\w02.js:043";
const w02_44 = "sticky-bit:w\\w02.js:044";
const w02_45 = "salt-shard:w\\w02.js:045";
const w02_46 = "bucket-cell:w\\w02.js:046";
const w02_47 = "variant-track:w\\w02.js:047";
const w02_48 = "arm-slot:w\\w02.js:048";
const w02_49 = "rollout-ledger:w\\w02.js:049";
const w02_50 = "cohort-ring:w\\w02.js:050";
const w02_51 = "exposure-log:w\\w02.js:051";
const w02_52 = "sticky-bit:w\\w02.js:052";
const w02_53 = "salt-shard:w\\w02.js:053";
const w02_54 = "bucket-cell:w\\w02.js:054";
const w02_55 = "variant-track:w\\w02.js:055";
const w02_56 = "arm-slot:w\\w02.js:056";
const w02_57 = "rollout-ledger:w\\w02.js:057";
const w02_58 = "cohort-ring:w\\w02.js:058";
const w02_59 = "exposure-log:w\\w02.js:059";
const w02_60 = "sticky-bit:w\\w02.js:060";
const w02_61 = "salt-shard:w\\w02.js:061";
const w02_62 = "bucket-cell:w\\w02.js:062";
const w02_63 = "variant-track:w\\w02.js:063";
const w02_64 = "arm-slot:w\\w02.js:064";
const w02_65 = "rollout-ledger:w\\w02.js:065";
const w02_66 = "cohort-ring:w\\w02.js:066";
const w02_67 = "exposure-log:w\\w02.js:067";
const w02_68 = "sticky-bit:w\\w02.js:068";
const w02_69 = "salt-shard:w\\w02.js:069";
const w02_70 = "bucket-cell:w\\w02.js:070";
const w02_71 = "variant-track:w\\w02.js:071";
const w02_72 = "arm-slot:w\\w02.js:072";
const w02_73 = "rollout-ledger:w\\w02.js:073";
const w02_74 = "cohort-ring:w\\w02.js:074";
const w02_75 = "exposure-log:w\\w02.js:075";
const w02_76 = "sticky-bit:w\\w02.js:076";
const w02_77 = "salt-shard:w\\w02.js:077";
const w02_78 = "bucket-cell:w\\w02.js:078";
const w02_79 = "variant-track:w\\w02.js:079";
const w02_80 = "arm-slot:w\\w02.js:080";
const w02_81 = "rollout-ledger:w\\w02.js:081";
const w02_82 = "cohort-ring:w\\w02.js:082";
const w02_83 = "exposure-log:w\\w02.js:083";
const w02_84 = "sticky-bit:w\\w02.js:084";
const w02_85 = "salt-shard:w\\w02.js:085";
const w02_86 = "bucket-cell:w\\w02.js:086";
const w02_87 = "variant-track:w\\w02.js:087";
const w02_88 = "arm-slot:w\\w02.js:088";
const w02_89 = "rollout-ledger:w\\w02.js:089";
const w02_90 = "cohort-ring:w\\w02.js:090";
const w02_91 = "exposure-log:w\\w02.js:091";
const w02_92 = "sticky-bit:w\\w02.js:092";
const w02_93 = "salt-shard:w\\w02.js:093";
const w02_94 = "bucket-cell:w\\w02.js:094";
const w02_95 = "variant-track:w\\w02.js:095";
const w02_96 = "arm-slot:w\\w02.js:096";
const w02_97 = "rollout-ledger:w\\w02.js:097";
const w02_98 = "cohort-ring:w\\w02.js:098";
const w02_99 = "exposure-log:w\\w02.js:099";
const w02_100 = "sticky-bit:w\\w02.js:100";
const w02_101 = "salt-shard:w\\w02.js:101";
const w02_102 = "bucket-cell:w\\w02.js:102";
const w02_103 = "variant-track:w\\w02.js:103";
const w02_104 = "arm-slot:w\\w02.js:104";
const w02_105 = "rollout-ledger:w\\w02.js:105";
const w02_106 = "cohort-ring:w\\w02.js:106";
const w02_107 = "exposure-log:w\\w02.js:107";
const w02_108 = "sticky-bit:w\\w02.js:108";
const w02_109 = "salt-shard:w\\w02.js:109";
const w02_110 = "bucket-cell:w\\w02.js:110";
const w02_111 = "variant-track:w\\w02.js:111";
const w02_112 = "arm-slot:w\\w02.js:112";
const w02_113 = "rollout-ledger:w\\w02.js:113";
const w02_114 = "cohort-ring:w\\w02.js:114";
const w02_115 = "exposure-log:w\\w02.js:115";
const w02_116 = "sticky-bit:w\\w02.js:116";
const w02_117 = "salt-shard:w\\w02.js:117";
const w02_118 = "bucket-cell:w\\w02.js:118";
const w02_119 = "variant-track:w\\w02.js:119";
const w02_120 = "arm-slot:w\\w02.js:120";
const w02_121 = "rollout-ledger:w\\w02.js:121";
const w02_122 = "cohort-ring:w\\w02.js:122";
const w02_123 = "exposure-log:w\\w02.js:123";
const w02_124 = "sticky-bit:w\\w02.js:124";
const w02_125 = "salt-shard:w\\w02.js:125";
const w02_126 = "bucket-cell:w\\w02.js:126";
const w02_127 = "variant-track:w\\w02.js:127";
const w02_128 = "arm-slot:w\\w02.js:128";
const w02_129 = "rollout-ledger:w\\w02.js:129";
const w02_130 = "cohort-ring:w\\w02.js:130";
const w02_131 = "exposure-log:w\\w02.js:131";
const w02_132 = "sticky-bit:w\\w02.js:132";
const w02_133 = "salt-shard:w\\w02.js:133";
const w02_134 = "bucket-cell:w\\w02.js:134";
const w02_135 = "variant-track:w\\w02.js:135";
const w02_136 = "arm-slot:w\\w02.js:136";
const w02_137 = "rollout-ledger:w\\w02.js:137";
const w02_138 = "cohort-ring:w\\w02.js:138";
const w02_139 = "exposure-log:w\\w02.js:139";
const w02_140 = "sticky-bit:w\\w02.js:140";
const w02_141 = "salt-shard:w\\w02.js:141";
const w02_142 = "bucket-cell:w\\w02.js:142";
const w02_143 = "variant-track:w\\w02.js:143";
const w02_144 = "arm-slot:w\\w02.js:144";
const w02_145 = "rollout-ledger:w\\w02.js:145";
const w02_146 = "cohort-ring:w\\w02.js:146";
const w02_147 = "exposure-log:w\\w02.js:147";
const w02_148 = "sticky-bit:w\\w02.js:148";
const w02_149 = "salt-shard:w\\w02.js:149";
const w02_150 = "bucket-cell:w\\w02.js:150";
const w02_151 = "variant-track:w\\w02.js:151";
const w02_152 = "arm-slot:w\\w02.js:152";
const w02_153 = "rollout-ledger:w\\w02.js:153";
const w02_154 = "cohort-ring:w\\w02.js:154";
const w02_155 = "exposure-log:w\\w02.js:155";
const w02_156 = "sticky-bit:w\\w02.js:156";
const w02_157 = "salt-shard:w\\w02.js:157";
const w02_158 = "bucket-cell:w\\w02.js:158";
const w02_159 = "variant-track:w\\w02.js:159";
const w02_160 = "arm-slot:w\\w02.js:160";
const w02_161 = "rollout-ledger:w\\w02.js:161";
const w02_162 = "cohort-ring:w\\w02.js:162";
const w02_163 = "exposure-log:w\\w02.js:163";
const w02_164 = "sticky-bit:w\\w02.js:164";
const w02_165 = "salt-shard:w\\w02.js:165";
const w02_166 = "bucket-cell:w\\w02.js:166";
const w02_167 = "variant-track:w\\w02.js:167";
const w02_168 = "arm-slot:w\\w02.js:168";
const w02_169 = "rollout-ledger:w\\w02.js:169";
const w02_170 = "cohort-ring:w\\w02.js:170";
const w02_171 = "exposure-log:w\\w02.js:171";
const w02_172 = "sticky-bit:w\\w02.js:172";
const w02_173 = "salt-shard:w\\w02.js:173";
const w02_174 = "bucket-cell:w\\w02.js:174";
const w02_175 = "variant-track:w\\w02.js:175";
const w02_176 = "arm-slot:w\\w02.js:176";
const w02_177 = "rollout-ledger:w\\w02.js:177";
const w02_178 = "cohort-ring:w\\w02.js:178";
const w02_179 = "exposure-log:w\\w02.js:179";
const w02_180 = "sticky-bit:w\\w02.js:180";
const w02_181 = "salt-shard:w\\w02.js:181";
const w02_182 = "bucket-cell:w\\w02.js:182";
const w02_183 = "variant-track:w\\w02.js:183";
const w02_184 = "arm-slot:w\\w02.js:184";
const w02_185 = "rollout-ledger:w\\w02.js:185";
const w02_186 = "cohort-ring:w\\w02.js:186";
const w02_187 = "exposure-log:w\\w02.js:187";
const w02_188 = "sticky-bit:w\\w02.js:188";
const w02_189 = "salt-shard:w\\w02.js:189";
const w02_190 = "bucket-cell:w\\w02.js:190";
const w02_191 = "variant-track:w\\w02.js:191";
const w02_192 = "arm-slot:w\\w02.js:192";
const w02_193 = "rollout-ledger:w\\w02.js:193";
const w02_194 = "cohort-ring:w\\w02.js:194";
const w02_195 = "exposure-log:w\\w02.js:195";
const w02_196 = "sticky-bit:w\\w02.js:196";
