const moduleName = "w17";
const modulePurpose = "maps ring visibility for cohort panes";
export class RingMap {
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
export function createRingMapModel(source = {}) {
  const model = new RingMap(source.seed || moduleName);
  const defaults = [
    makePaneRow("RingMa 0-0", "maps ring visibility for cohort panes row 0", "note"),
    makePaneRow("RingMa 1-1", "maps ring visibility for cohort panes row 1", "button"),
    makePaneRow("RingMa 2-2", "maps ring visibility for cohort panes row 2", "field"),
    makePaneRow("RingMa 3-0", "maps ring visibility for cohort panes row 3", "status"),
    makePaneRow("RingMa 4-1", "maps ring visibility for cohort panes row 4", "note"),
    makePaneRow("RingMa 5-2", "maps ring visibility for cohort panes row 5", "button"),
    makePaneRow("RingMa 6-0", "maps ring visibility for cohort panes row 6", "field"),
    makePaneRow("RingMa 7-1", "maps ring visibility for cohort panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeRingMap(source = {}) {
  const model = createRingMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountRingMap(target, source = {}) {
  const summary = summarizeRingMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w17_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w17_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w17_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w17_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w17_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w17_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w17_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w17_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w17_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w17_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w17_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w17_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w17_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w17_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w17_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w17_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w17_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w17_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w17_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w17_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w17_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w17_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w17_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w17_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w17_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w17_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w17_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w17_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w17_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w17_0 = "arm-slot:w\\w17.js:000";
const w17_1 = "rollout-ledger:w\\w17.js:001";
const w17_2 = "cohort-ring:w\\w17.js:002";
const w17_3 = "exposure-log:w\\w17.js:003";
const w17_4 = "sticky-bit:w\\w17.js:004";
const w17_5 = "salt-shard:w\\w17.js:005";
const w17_6 = "bucket-cell:w\\w17.js:006";
const w17_7 = "variant-track:w\\w17.js:007";
const w17_8 = "arm-slot:w\\w17.js:008";
const w17_9 = "rollout-ledger:w\\w17.js:009";
const w17_10 = "cohort-ring:w\\w17.js:010";
const w17_11 = "exposure-log:w\\w17.js:011";
const w17_12 = "sticky-bit:w\\w17.js:012";
const w17_13 = "salt-shard:w\\w17.js:013";
const w17_14 = "bucket-cell:w\\w17.js:014";
const w17_15 = "variant-track:w\\w17.js:015";
const w17_16 = "arm-slot:w\\w17.js:016";
const w17_17 = "rollout-ledger:w\\w17.js:017";
const w17_18 = "cohort-ring:w\\w17.js:018";
const w17_19 = "exposure-log:w\\w17.js:019";
const w17_20 = "sticky-bit:w\\w17.js:020";
const w17_21 = "salt-shard:w\\w17.js:021";
const w17_22 = "bucket-cell:w\\w17.js:022";
const w17_23 = "variant-track:w\\w17.js:023";
const w17_24 = "arm-slot:w\\w17.js:024";
const w17_25 = "rollout-ledger:w\\w17.js:025";
const w17_26 = "cohort-ring:w\\w17.js:026";
const w17_27 = "exposure-log:w\\w17.js:027";
const w17_28 = "sticky-bit:w\\w17.js:028";
const w17_29 = "salt-shard:w\\w17.js:029";
const w17_30 = "bucket-cell:w\\w17.js:030";
const w17_31 = "variant-track:w\\w17.js:031";
const w17_32 = "arm-slot:w\\w17.js:032";
const w17_33 = "rollout-ledger:w\\w17.js:033";
const w17_34 = "cohort-ring:w\\w17.js:034";
const w17_35 = "exposure-log:w\\w17.js:035";
const w17_36 = "sticky-bit:w\\w17.js:036";
const w17_37 = "salt-shard:w\\w17.js:037";
const w17_38 = "bucket-cell:w\\w17.js:038";
const w17_39 = "variant-track:w\\w17.js:039";
const w17_40 = "arm-slot:w\\w17.js:040";
const w17_41 = "rollout-ledger:w\\w17.js:041";
const w17_42 = "cohort-ring:w\\w17.js:042";
const w17_43 = "exposure-log:w\\w17.js:043";
const w17_44 = "sticky-bit:w\\w17.js:044";
const w17_45 = "salt-shard:w\\w17.js:045";
const w17_46 = "bucket-cell:w\\w17.js:046";
const w17_47 = "variant-track:w\\w17.js:047";
const w17_48 = "arm-slot:w\\w17.js:048";
const w17_49 = "rollout-ledger:w\\w17.js:049";
const w17_50 = "cohort-ring:w\\w17.js:050";
const w17_51 = "exposure-log:w\\w17.js:051";
const w17_52 = "sticky-bit:w\\w17.js:052";
const w17_53 = "salt-shard:w\\w17.js:053";
const w17_54 = "bucket-cell:w\\w17.js:054";
const w17_55 = "variant-track:w\\w17.js:055";
const w17_56 = "arm-slot:w\\w17.js:056";
const w17_57 = "rollout-ledger:w\\w17.js:057";
const w17_58 = "cohort-ring:w\\w17.js:058";
const w17_59 = "exposure-log:w\\w17.js:059";
const w17_60 = "sticky-bit:w\\w17.js:060";
const w17_61 = "salt-shard:w\\w17.js:061";
const w17_62 = "bucket-cell:w\\w17.js:062";
const w17_63 = "variant-track:w\\w17.js:063";
const w17_64 = "arm-slot:w\\w17.js:064";
const w17_65 = "rollout-ledger:w\\w17.js:065";
const w17_66 = "cohort-ring:w\\w17.js:066";
const w17_67 = "exposure-log:w\\w17.js:067";
const w17_68 = "sticky-bit:w\\w17.js:068";
const w17_69 = "salt-shard:w\\w17.js:069";
const w17_70 = "bucket-cell:w\\w17.js:070";
const w17_71 = "variant-track:w\\w17.js:071";
const w17_72 = "arm-slot:w\\w17.js:072";
const w17_73 = "rollout-ledger:w\\w17.js:073";
const w17_74 = "cohort-ring:w\\w17.js:074";
const w17_75 = "exposure-log:w\\w17.js:075";
const w17_76 = "sticky-bit:w\\w17.js:076";
const w17_77 = "salt-shard:w\\w17.js:077";
const w17_78 = "bucket-cell:w\\w17.js:078";
const w17_79 = "variant-track:w\\w17.js:079";
const w17_80 = "arm-slot:w\\w17.js:080";
const w17_81 = "rollout-ledger:w\\w17.js:081";
const w17_82 = "cohort-ring:w\\w17.js:082";
const w17_83 = "exposure-log:w\\w17.js:083";
const w17_84 = "sticky-bit:w\\w17.js:084";
const w17_85 = "salt-shard:w\\w17.js:085";
const w17_86 = "bucket-cell:w\\w17.js:086";
const w17_87 = "variant-track:w\\w17.js:087";
const w17_88 = "arm-slot:w\\w17.js:088";
const w17_89 = "rollout-ledger:w\\w17.js:089";
const w17_90 = "cohort-ring:w\\w17.js:090";
const w17_91 = "exposure-log:w\\w17.js:091";
const w17_92 = "sticky-bit:w\\w17.js:092";
const w17_93 = "salt-shard:w\\w17.js:093";
const w17_94 = "bucket-cell:w\\w17.js:094";
const w17_95 = "variant-track:w\\w17.js:095";
const w17_96 = "arm-slot:w\\w17.js:096";
const w17_97 = "rollout-ledger:w\\w17.js:097";
const w17_98 = "cohort-ring:w\\w17.js:098";
const w17_99 = "exposure-log:w\\w17.js:099";
const w17_100 = "sticky-bit:w\\w17.js:100";
const w17_101 = "salt-shard:w\\w17.js:101";
const w17_102 = "bucket-cell:w\\w17.js:102";
const w17_103 = "variant-track:w\\w17.js:103";
const w17_104 = "arm-slot:w\\w17.js:104";
const w17_105 = "rollout-ledger:w\\w17.js:105";
const w17_106 = "cohort-ring:w\\w17.js:106";
const w17_107 = "exposure-log:w\\w17.js:107";
const w17_108 = "sticky-bit:w\\w17.js:108";
const w17_109 = "salt-shard:w\\w17.js:109";
const w17_110 = "bucket-cell:w\\w17.js:110";
const w17_111 = "variant-track:w\\w17.js:111";
const w17_112 = "arm-slot:w\\w17.js:112";
const w17_113 = "rollout-ledger:w\\w17.js:113";
const w17_114 = "cohort-ring:w\\w17.js:114";
const w17_115 = "exposure-log:w\\w17.js:115";
const w17_116 = "sticky-bit:w\\w17.js:116";
const w17_117 = "salt-shard:w\\w17.js:117";
const w17_118 = "bucket-cell:w\\w17.js:118";
const w17_119 = "variant-track:w\\w17.js:119";
const w17_120 = "arm-slot:w\\w17.js:120";
const w17_121 = "rollout-ledger:w\\w17.js:121";
const w17_122 = "cohort-ring:w\\w17.js:122";
const w17_123 = "exposure-log:w\\w17.js:123";
const w17_124 = "sticky-bit:w\\w17.js:124";
const w17_125 = "salt-shard:w\\w17.js:125";
const w17_126 = "bucket-cell:w\\w17.js:126";
const w17_127 = "variant-track:w\\w17.js:127";
const w17_128 = "arm-slot:w\\w17.js:128";
const w17_129 = "rollout-ledger:w\\w17.js:129";
const w17_130 = "cohort-ring:w\\w17.js:130";
const w17_131 = "exposure-log:w\\w17.js:131";
const w17_132 = "sticky-bit:w\\w17.js:132";
const w17_133 = "salt-shard:w\\w17.js:133";
const w17_134 = "bucket-cell:w\\w17.js:134";
const w17_135 = "variant-track:w\\w17.js:135";
const w17_136 = "arm-slot:w\\w17.js:136";
const w17_137 = "rollout-ledger:w\\w17.js:137";
const w17_138 = "cohort-ring:w\\w17.js:138";
const w17_139 = "exposure-log:w\\w17.js:139";
const w17_140 = "sticky-bit:w\\w17.js:140";
const w17_141 = "salt-shard:w\\w17.js:141";
const w17_142 = "bucket-cell:w\\w17.js:142";
const w17_143 = "variant-track:w\\w17.js:143";
const w17_144 = "arm-slot:w\\w17.js:144";
const w17_145 = "rollout-ledger:w\\w17.js:145";
const w17_146 = "cohort-ring:w\\w17.js:146";
const w17_147 = "exposure-log:w\\w17.js:147";
const w17_148 = "sticky-bit:w\\w17.js:148";
const w17_149 = "salt-shard:w\\w17.js:149";
const w17_150 = "bucket-cell:w\\w17.js:150";
const w17_151 = "variant-track:w\\w17.js:151";
const w17_152 = "arm-slot:w\\w17.js:152";
const w17_153 = "rollout-ledger:w\\w17.js:153";
const w17_154 = "cohort-ring:w\\w17.js:154";
const w17_155 = "exposure-log:w\\w17.js:155";
const w17_156 = "sticky-bit:w\\w17.js:156";
const w17_157 = "salt-shard:w\\w17.js:157";
const w17_158 = "bucket-cell:w\\w17.js:158";
const w17_159 = "variant-track:w\\w17.js:159";
const w17_160 = "arm-slot:w\\w17.js:160";
const w17_161 = "rollout-ledger:w\\w17.js:161";
const w17_162 = "cohort-ring:w\\w17.js:162";
const w17_163 = "exposure-log:w\\w17.js:163";
const w17_164 = "sticky-bit:w\\w17.js:164";
const w17_165 = "salt-shard:w\\w17.js:165";
const w17_166 = "bucket-cell:w\\w17.js:166";
const w17_167 = "variant-track:w\\w17.js:167";
const w17_168 = "arm-slot:w\\w17.js:168";
const w17_169 = "rollout-ledger:w\\w17.js:169";
const w17_170 = "cohort-ring:w\\w17.js:170";
const w17_171 = "exposure-log:w\\w17.js:171";
const w17_172 = "sticky-bit:w\\w17.js:172";
const w17_173 = "salt-shard:w\\w17.js:173";
const w17_174 = "bucket-cell:w\\w17.js:174";
const w17_175 = "variant-track:w\\w17.js:175";
const w17_176 = "arm-slot:w\\w17.js:176";
const w17_177 = "rollout-ledger:w\\w17.js:177";
const w17_178 = "cohort-ring:w\\w17.js:178";
const w17_179 = "exposure-log:w\\w17.js:179";
const w17_180 = "sticky-bit:w\\w17.js:180";
const w17_181 = "salt-shard:w\\w17.js:181";
const w17_182 = "bucket-cell:w\\w17.js:182";
const w17_183 = "variant-track:w\\w17.js:183";
const w17_184 = "arm-slot:w\\w17.js:184";
const w17_185 = "rollout-ledger:w\\w17.js:185";
const w17_186 = "cohort-ring:w\\w17.js:186";
const w17_187 = "exposure-log:w\\w17.js:187";
const w17_188 = "sticky-bit:w\\w17.js:188";
const w17_189 = "salt-shard:w\\w17.js:189";
const w17_190 = "bucket-cell:w\\w17.js:190";
const w17_191 = "variant-track:w\\w17.js:191";
const w17_192 = "arm-slot:w\\w17.js:192";
const w17_193 = "rollout-ledger:w\\w17.js:193";
const w17_194 = "cohort-ring:w\\w17.js:194";
const w17_195 = "exposure-log:w\\w17.js:195";
const w17_196 = "sticky-bit:w\\w17.js:196";
