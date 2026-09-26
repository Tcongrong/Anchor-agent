const moduleName = "w08";
const modulePurpose = "queues exposure refreshes for rollout cards";
export class ExposureQueue {
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
export function createExposureQueueModel(source = {}) {
  const model = new ExposureQueue(source.seed || moduleName);
  const defaults = [
    makePaneRow("Exposu 0-0", "queues exposure refreshes for rollout cards row 0", "note"),
    makePaneRow("Exposu 1-1", "queues exposure refreshes for rollout cards row 1", "button"),
    makePaneRow("Exposu 2-2", "queues exposure refreshes for rollout cards row 2", "field"),
    makePaneRow("Exposu 3-0", "queues exposure refreshes for rollout cards row 3", "status"),
    makePaneRow("Exposu 4-1", "queues exposure refreshes for rollout cards row 4", "note"),
    makePaneRow("Exposu 5-2", "queues exposure refreshes for rollout cards row 5", "button"),
    makePaneRow("Exposu 6-0", "queues exposure refreshes for rollout cards row 6", "field"),
    makePaneRow("Exposu 7-1", "queues exposure refreshes for rollout cards row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeExposureQueue(source = {}) {
  const model = createExposureQueueModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountExposureQueue(target, source = {}) {
  const summary = summarizeExposureQueue(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w08_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w08_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w08_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w08_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w08_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w08_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w08_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w08_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w08_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w08_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w08_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w08_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w08_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w08_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w08_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w08_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w08_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w08_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w08_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w08_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w08_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w08_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w08_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w08_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w08_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w08_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w08_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w08_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w08_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w08_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w08_0 = "arm-slot:w\\w08.js:000";
const w08_1 = "rollout-ledger:w\\w08.js:001";
const w08_2 = "cohort-ring:w\\w08.js:002";
const w08_3 = "exposure-log:w\\w08.js:003";
const w08_4 = "sticky-bit:w\\w08.js:004";
const w08_5 = "salt-shard:w\\w08.js:005";
const w08_6 = "bucket-cell:w\\w08.js:006";
const w08_7 = "variant-track:w\\w08.js:007";
const w08_8 = "arm-slot:w\\w08.js:008";
const w08_9 = "rollout-ledger:w\\w08.js:009";
const w08_10 = "cohort-ring:w\\w08.js:010";
const w08_11 = "exposure-log:w\\w08.js:011";
const w08_12 = "sticky-bit:w\\w08.js:012";
const w08_13 = "salt-shard:w\\w08.js:013";
const w08_14 = "bucket-cell:w\\w08.js:014";
const w08_15 = "variant-track:w\\w08.js:015";
const w08_16 = "arm-slot:w\\w08.js:016";
const w08_17 = "rollout-ledger:w\\w08.js:017";
const w08_18 = "cohort-ring:w\\w08.js:018";
const w08_19 = "exposure-log:w\\w08.js:019";
const w08_20 = "sticky-bit:w\\w08.js:020";
const w08_21 = "salt-shard:w\\w08.js:021";
const w08_22 = "bucket-cell:w\\w08.js:022";
const w08_23 = "variant-track:w\\w08.js:023";
const w08_24 = "arm-slot:w\\w08.js:024";
const w08_25 = "rollout-ledger:w\\w08.js:025";
const w08_26 = "cohort-ring:w\\w08.js:026";
const w08_27 = "exposure-log:w\\w08.js:027";
const w08_28 = "sticky-bit:w\\w08.js:028";
const w08_29 = "salt-shard:w\\w08.js:029";
const w08_30 = "bucket-cell:w\\w08.js:030";
const w08_31 = "variant-track:w\\w08.js:031";
const w08_32 = "arm-slot:w\\w08.js:032";
const w08_33 = "rollout-ledger:w\\w08.js:033";
const w08_34 = "cohort-ring:w\\w08.js:034";
const w08_35 = "exposure-log:w\\w08.js:035";
const w08_36 = "sticky-bit:w\\w08.js:036";
const w08_37 = "salt-shard:w\\w08.js:037";
const w08_38 = "bucket-cell:w\\w08.js:038";
const w08_39 = "variant-track:w\\w08.js:039";
const w08_40 = "arm-slot:w\\w08.js:040";
const w08_41 = "rollout-ledger:w\\w08.js:041";
const w08_42 = "cohort-ring:w\\w08.js:042";
const w08_43 = "exposure-log:w\\w08.js:043";
const w08_44 = "sticky-bit:w\\w08.js:044";
const w08_45 = "salt-shard:w\\w08.js:045";
const w08_46 = "bucket-cell:w\\w08.js:046";
const w08_47 = "variant-track:w\\w08.js:047";
const w08_48 = "arm-slot:w\\w08.js:048";
const w08_49 = "rollout-ledger:w\\w08.js:049";
const w08_50 = "cohort-ring:w\\w08.js:050";
const w08_51 = "exposure-log:w\\w08.js:051";
const w08_52 = "sticky-bit:w\\w08.js:052";
const w08_53 = "salt-shard:w\\w08.js:053";
const w08_54 = "bucket-cell:w\\w08.js:054";
const w08_55 = "variant-track:w\\w08.js:055";
const w08_56 = "arm-slot:w\\w08.js:056";
const w08_57 = "rollout-ledger:w\\w08.js:057";
const w08_58 = "cohort-ring:w\\w08.js:058";
const w08_59 = "exposure-log:w\\w08.js:059";
const w08_60 = "sticky-bit:w\\w08.js:060";
const w08_61 = "salt-shard:w\\w08.js:061";
const w08_62 = "bucket-cell:w\\w08.js:062";
const w08_63 = "variant-track:w\\w08.js:063";
const w08_64 = "arm-slot:w\\w08.js:064";
const w08_65 = "rollout-ledger:w\\w08.js:065";
const w08_66 = "cohort-ring:w\\w08.js:066";
const w08_67 = "exposure-log:w\\w08.js:067";
const w08_68 = "sticky-bit:w\\w08.js:068";
const w08_69 = "salt-shard:w\\w08.js:069";
const w08_70 = "bucket-cell:w\\w08.js:070";
const w08_71 = "variant-track:w\\w08.js:071";
const w08_72 = "arm-slot:w\\w08.js:072";
const w08_73 = "rollout-ledger:w\\w08.js:073";
const w08_74 = "cohort-ring:w\\w08.js:074";
const w08_75 = "exposure-log:w\\w08.js:075";
const w08_76 = "sticky-bit:w\\w08.js:076";
const w08_77 = "salt-shard:w\\w08.js:077";
const w08_78 = "bucket-cell:w\\w08.js:078";
const w08_79 = "variant-track:w\\w08.js:079";
const w08_80 = "arm-slot:w\\w08.js:080";
const w08_81 = "rollout-ledger:w\\w08.js:081";
const w08_82 = "cohort-ring:w\\w08.js:082";
const w08_83 = "exposure-log:w\\w08.js:083";
const w08_84 = "sticky-bit:w\\w08.js:084";
const w08_85 = "salt-shard:w\\w08.js:085";
const w08_86 = "bucket-cell:w\\w08.js:086";
const w08_87 = "variant-track:w\\w08.js:087";
const w08_88 = "arm-slot:w\\w08.js:088";
const w08_89 = "rollout-ledger:w\\w08.js:089";
const w08_90 = "cohort-ring:w\\w08.js:090";
const w08_91 = "exposure-log:w\\w08.js:091";
const w08_92 = "sticky-bit:w\\w08.js:092";
const w08_93 = "salt-shard:w\\w08.js:093";
const w08_94 = "bucket-cell:w\\w08.js:094";
const w08_95 = "variant-track:w\\w08.js:095";
const w08_96 = "arm-slot:w\\w08.js:096";
const w08_97 = "rollout-ledger:w\\w08.js:097";
const w08_98 = "cohort-ring:w\\w08.js:098";
const w08_99 = "exposure-log:w\\w08.js:099";
const w08_100 = "sticky-bit:w\\w08.js:100";
const w08_101 = "salt-shard:w\\w08.js:101";
const w08_102 = "bucket-cell:w\\w08.js:102";
const w08_103 = "variant-track:w\\w08.js:103";
const w08_104 = "arm-slot:w\\w08.js:104";
const w08_105 = "rollout-ledger:w\\w08.js:105";
const w08_106 = "cohort-ring:w\\w08.js:106";
const w08_107 = "exposure-log:w\\w08.js:107";
const w08_108 = "sticky-bit:w\\w08.js:108";
const w08_109 = "salt-shard:w\\w08.js:109";
const w08_110 = "bucket-cell:w\\w08.js:110";
const w08_111 = "variant-track:w\\w08.js:111";
const w08_112 = "arm-slot:w\\w08.js:112";
const w08_113 = "rollout-ledger:w\\w08.js:113";
const w08_114 = "cohort-ring:w\\w08.js:114";
const w08_115 = "exposure-log:w\\w08.js:115";
const w08_116 = "sticky-bit:w\\w08.js:116";
const w08_117 = "salt-shard:w\\w08.js:117";
const w08_118 = "bucket-cell:w\\w08.js:118";
const w08_119 = "variant-track:w\\w08.js:119";
const w08_120 = "arm-slot:w\\w08.js:120";
const w08_121 = "rollout-ledger:w\\w08.js:121";
const w08_122 = "cohort-ring:w\\w08.js:122";
const w08_123 = "exposure-log:w\\w08.js:123";
const w08_124 = "sticky-bit:w\\w08.js:124";
const w08_125 = "salt-shard:w\\w08.js:125";
const w08_126 = "bucket-cell:w\\w08.js:126";
const w08_127 = "variant-track:w\\w08.js:127";
const w08_128 = "arm-slot:w\\w08.js:128";
const w08_129 = "rollout-ledger:w\\w08.js:129";
const w08_130 = "cohort-ring:w\\w08.js:130";
const w08_131 = "exposure-log:w\\w08.js:131";
const w08_132 = "sticky-bit:w\\w08.js:132";
const w08_133 = "salt-shard:w\\w08.js:133";
const w08_134 = "bucket-cell:w\\w08.js:134";
const w08_135 = "variant-track:w\\w08.js:135";
const w08_136 = "arm-slot:w\\w08.js:136";
const w08_137 = "rollout-ledger:w\\w08.js:137";
const w08_138 = "cohort-ring:w\\w08.js:138";
const w08_139 = "exposure-log:w\\w08.js:139";
const w08_140 = "sticky-bit:w\\w08.js:140";
const w08_141 = "salt-shard:w\\w08.js:141";
const w08_142 = "bucket-cell:w\\w08.js:142";
const w08_143 = "variant-track:w\\w08.js:143";
const w08_144 = "arm-slot:w\\w08.js:144";
const w08_145 = "rollout-ledger:w\\w08.js:145";
const w08_146 = "cohort-ring:w\\w08.js:146";
const w08_147 = "exposure-log:w\\w08.js:147";
const w08_148 = "sticky-bit:w\\w08.js:148";
const w08_149 = "salt-shard:w\\w08.js:149";
const w08_150 = "bucket-cell:w\\w08.js:150";
const w08_151 = "variant-track:w\\w08.js:151";
const w08_152 = "arm-slot:w\\w08.js:152";
const w08_153 = "rollout-ledger:w\\w08.js:153";
const w08_154 = "cohort-ring:w\\w08.js:154";
const w08_155 = "exposure-log:w\\w08.js:155";
const w08_156 = "sticky-bit:w\\w08.js:156";
const w08_157 = "salt-shard:w\\w08.js:157";
const w08_158 = "bucket-cell:w\\w08.js:158";
const w08_159 = "variant-track:w\\w08.js:159";
const w08_160 = "arm-slot:w\\w08.js:160";
const w08_161 = "rollout-ledger:w\\w08.js:161";
const w08_162 = "cohort-ring:w\\w08.js:162";
const w08_163 = "exposure-log:w\\w08.js:163";
const w08_164 = "sticky-bit:w\\w08.js:164";
const w08_165 = "salt-shard:w\\w08.js:165";
const w08_166 = "bucket-cell:w\\w08.js:166";
const w08_167 = "variant-track:w\\w08.js:167";
const w08_168 = "arm-slot:w\\w08.js:168";
const w08_169 = "rollout-ledger:w\\w08.js:169";
const w08_170 = "cohort-ring:w\\w08.js:170";
const w08_171 = "exposure-log:w\\w08.js:171";
const w08_172 = "sticky-bit:w\\w08.js:172";
const w08_173 = "salt-shard:w\\w08.js:173";
const w08_174 = "bucket-cell:w\\w08.js:174";
const w08_175 = "variant-track:w\\w08.js:175";
const w08_176 = "arm-slot:w\\w08.js:176";
const w08_177 = "rollout-ledger:w\\w08.js:177";
const w08_178 = "cohort-ring:w\\w08.js:178";
const w08_179 = "exposure-log:w\\w08.js:179";
const w08_180 = "sticky-bit:w\\w08.js:180";
const w08_181 = "salt-shard:w\\w08.js:181";
const w08_182 = "bucket-cell:w\\w08.js:182";
const w08_183 = "variant-track:w\\w08.js:183";
const w08_184 = "arm-slot:w\\w08.js:184";
const w08_185 = "rollout-ledger:w\\w08.js:185";
const w08_186 = "cohort-ring:w\\w08.js:186";
const w08_187 = "exposure-log:w\\w08.js:187";
const w08_188 = "sticky-bit:w\\w08.js:188";
const w08_189 = "salt-shard:w\\w08.js:189";
const w08_190 = "bucket-cell:w\\w08.js:190";
const w08_191 = "variant-track:w\\w08.js:191";
const w08_192 = "arm-slot:w\\w08.js:192";
const w08_193 = "rollout-ledger:w\\w08.js:193";
const w08_194 = "cohort-ring:w\\w08.js:194";
const w08_195 = "exposure-log:w\\w08.js:195";
const w08_196 = "sticky-bit:w\\w08.js:196";
