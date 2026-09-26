const moduleName = "w11";
const modulePurpose = "tracks form-slot bindings for the assignment store";
export class SlotSet {
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
export function createSlotSetModel(source = {}) {
  const model = new SlotSet(source.seed || moduleName);
  const defaults = [
    makePaneRow("SlotSe 0-0", "tracks form-slot bindings for the assignment store row 0", "note"),
    makePaneRow("SlotSe 1-1", "tracks form-slot bindings for the assignment store row 1", "button"),
    makePaneRow("SlotSe 2-2", "tracks form-slot bindings for the assignment store row 2", "field"),
    makePaneRow("SlotSe 3-0", "tracks form-slot bindings for the assignment store row 3", "status"),
    makePaneRow("SlotSe 4-1", "tracks form-slot bindings for the assignment store row 4", "note"),
    makePaneRow("SlotSe 5-2", "tracks form-slot bindings for the assignment store row 5", "button"),
    makePaneRow("SlotSe 6-0", "tracks form-slot bindings for the assignment store row 6", "field"),
    makePaneRow("SlotSe 7-1", "tracks form-slot bindings for the assignment store row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeSlotSet(source = {}) {
  const model = createSlotSetModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountSlotSet(target, source = {}) {
  const summary = summarizeSlotSet(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w11_openLedger_00(state = {}) {
  const label = normalizeLabel(state.label || "openLedger");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openLedger" };
}
export function w11_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w11_queueStage_02(state = {}) {
  const label = normalizeLabel(state.label || "queueStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueStage" };
}
export function w11_cancelStage_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelStage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelStage" };
}
export function w11_updateRing_04(state = {}) {
  const label = normalizeLabel(state.label || "updateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateRing" };
}
export function w11_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w11_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w11_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w11_pushRoll_08(state = {}) {
  const label = normalizeLabel(state.label || "pushRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushRoll" };
}
export function w11_popRoll_09(state = {}) {
  const label = normalizeLabel(state.label || "popRoll");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popRoll" };
}
export function w11_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w11_expandSlot_11(state = {}) {
  const label = normalizeLabel(state.label || "expandSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandSlot" };
}
export function w11_collapseSlot_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseSlot");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseSlot" };
}
export function w11_toggleSticky_13(state = {}) {
  const label = normalizeLabel(state.label || "toggleSticky");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "toggleSticky" };
}
export function w11_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w11_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w11_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w11_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w11_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w11_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w11_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w11_hydrateSlots_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateSlots" };
}
export function w11_drainSlots_22(state = {}) {
  const label = normalizeLabel(state.label || "drainSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainSlots" };
}
export function w11_indexSlots_23(state = {}) {
  const label = normalizeLabel(state.label || "indexSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexSlots" };
}
export function w11_pruneSlots_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneSlots");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneSlots" };
}
export function w11_sealVault_25(state = {}) {
  const label = normalizeLabel(state.label || "sealVault");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealVault" };
}
export function w11_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w11_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w11_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w11_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w11_0 = "arm-slot:w\\w11.js:000";
const w11_1 = "rollout-ledger:w\\w11.js:001";
const w11_2 = "cohort-ring:w\\w11.js:002";
const w11_3 = "exposure-log:w\\w11.js:003";
const w11_4 = "sticky-bit:w\\w11.js:004";
const w11_5 = "salt-shard:w\\w11.js:005";
const w11_6 = "bucket-cell:w\\w11.js:006";
const w11_7 = "variant-track:w\\w11.js:007";
const w11_8 = "arm-slot:w\\w11.js:008";
const w11_9 = "rollout-ledger:w\\w11.js:009";
const w11_10 = "cohort-ring:w\\w11.js:010";
const w11_11 = "exposure-log:w\\w11.js:011";
const w11_12 = "sticky-bit:w\\w11.js:012";
const w11_13 = "salt-shard:w\\w11.js:013";
const w11_14 = "bucket-cell:w\\w11.js:014";
const w11_15 = "variant-track:w\\w11.js:015";
const w11_16 = "arm-slot:w\\w11.js:016";
const w11_17 = "rollout-ledger:w\\w11.js:017";
const w11_18 = "cohort-ring:w\\w11.js:018";
const w11_19 = "exposure-log:w\\w11.js:019";
const w11_20 = "sticky-bit:w\\w11.js:020";
const w11_21 = "salt-shard:w\\w11.js:021";
const w11_22 = "bucket-cell:w\\w11.js:022";
const w11_23 = "variant-track:w\\w11.js:023";
const w11_24 = "arm-slot:w\\w11.js:024";
const w11_25 = "rollout-ledger:w\\w11.js:025";
const w11_26 = "cohort-ring:w\\w11.js:026";
const w11_27 = "exposure-log:w\\w11.js:027";
const w11_28 = "sticky-bit:w\\w11.js:028";
const w11_29 = "salt-shard:w\\w11.js:029";
const w11_30 = "bucket-cell:w\\w11.js:030";
const w11_31 = "variant-track:w\\w11.js:031";
const w11_32 = "arm-slot:w\\w11.js:032";
const w11_33 = "rollout-ledger:w\\w11.js:033";
const w11_34 = "cohort-ring:w\\w11.js:034";
const w11_35 = "exposure-log:w\\w11.js:035";
const w11_36 = "sticky-bit:w\\w11.js:036";
const w11_37 = "salt-shard:w\\w11.js:037";
const w11_38 = "bucket-cell:w\\w11.js:038";
const w11_39 = "variant-track:w\\w11.js:039";
const w11_40 = "arm-slot:w\\w11.js:040";
const w11_41 = "rollout-ledger:w\\w11.js:041";
const w11_42 = "cohort-ring:w\\w11.js:042";
const w11_43 = "exposure-log:w\\w11.js:043";
const w11_44 = "sticky-bit:w\\w11.js:044";
const w11_45 = "salt-shard:w\\w11.js:045";
const w11_46 = "bucket-cell:w\\w11.js:046";
const w11_47 = "variant-track:w\\w11.js:047";
const w11_48 = "arm-slot:w\\w11.js:048";
const w11_49 = "rollout-ledger:w\\w11.js:049";
const w11_50 = "cohort-ring:w\\w11.js:050";
const w11_51 = "exposure-log:w\\w11.js:051";
const w11_52 = "sticky-bit:w\\w11.js:052";
const w11_53 = "salt-shard:w\\w11.js:053";
const w11_54 = "bucket-cell:w\\w11.js:054";
const w11_55 = "variant-track:w\\w11.js:055";
const w11_56 = "arm-slot:w\\w11.js:056";
const w11_57 = "rollout-ledger:w\\w11.js:057";
const w11_58 = "cohort-ring:w\\w11.js:058";
const w11_59 = "exposure-log:w\\w11.js:059";
const w11_60 = "sticky-bit:w\\w11.js:060";
const w11_61 = "salt-shard:w\\w11.js:061";
const w11_62 = "bucket-cell:w\\w11.js:062";
const w11_63 = "variant-track:w\\w11.js:063";
const w11_64 = "arm-slot:w\\w11.js:064";
const w11_65 = "rollout-ledger:w\\w11.js:065";
const w11_66 = "cohort-ring:w\\w11.js:066";
const w11_67 = "exposure-log:w\\w11.js:067";
const w11_68 = "sticky-bit:w\\w11.js:068";
const w11_69 = "salt-shard:w\\w11.js:069";
const w11_70 = "bucket-cell:w\\w11.js:070";
const w11_71 = "variant-track:w\\w11.js:071";
const w11_72 = "arm-slot:w\\w11.js:072";
const w11_73 = "rollout-ledger:w\\w11.js:073";
const w11_74 = "cohort-ring:w\\w11.js:074";
const w11_75 = "exposure-log:w\\w11.js:075";
const w11_76 = "sticky-bit:w\\w11.js:076";
const w11_77 = "salt-shard:w\\w11.js:077";
const w11_78 = "bucket-cell:w\\w11.js:078";
const w11_79 = "variant-track:w\\w11.js:079";
const w11_80 = "arm-slot:w\\w11.js:080";
const w11_81 = "rollout-ledger:w\\w11.js:081";
const w11_82 = "cohort-ring:w\\w11.js:082";
const w11_83 = "exposure-log:w\\w11.js:083";
const w11_84 = "sticky-bit:w\\w11.js:084";
const w11_85 = "salt-shard:w\\w11.js:085";
const w11_86 = "bucket-cell:w\\w11.js:086";
const w11_87 = "variant-track:w\\w11.js:087";
const w11_88 = "arm-slot:w\\w11.js:088";
const w11_89 = "rollout-ledger:w\\w11.js:089";
const w11_90 = "cohort-ring:w\\w11.js:090";
const w11_91 = "exposure-log:w\\w11.js:091";
const w11_92 = "sticky-bit:w\\w11.js:092";
const w11_93 = "salt-shard:w\\w11.js:093";
const w11_94 = "bucket-cell:w\\w11.js:094";
const w11_95 = "variant-track:w\\w11.js:095";
const w11_96 = "arm-slot:w\\w11.js:096";
const w11_97 = "rollout-ledger:w\\w11.js:097";
const w11_98 = "cohort-ring:w\\w11.js:098";
const w11_99 = "exposure-log:w\\w11.js:099";
const w11_100 = "sticky-bit:w\\w11.js:100";
const w11_101 = "salt-shard:w\\w11.js:101";
const w11_102 = "bucket-cell:w\\w11.js:102";
const w11_103 = "variant-track:w\\w11.js:103";
const w11_104 = "arm-slot:w\\w11.js:104";
const w11_105 = "rollout-ledger:w\\w11.js:105";
const w11_106 = "cohort-ring:w\\w11.js:106";
const w11_107 = "exposure-log:w\\w11.js:107";
const w11_108 = "sticky-bit:w\\w11.js:108";
const w11_109 = "salt-shard:w\\w11.js:109";
const w11_110 = "bucket-cell:w\\w11.js:110";
const w11_111 = "variant-track:w\\w11.js:111";
const w11_112 = "arm-slot:w\\w11.js:112";
const w11_113 = "rollout-ledger:w\\w11.js:113";
const w11_114 = "cohort-ring:w\\w11.js:114";
const w11_115 = "exposure-log:w\\w11.js:115";
const w11_116 = "sticky-bit:w\\w11.js:116";
const w11_117 = "salt-shard:w\\w11.js:117";
const w11_118 = "bucket-cell:w\\w11.js:118";
const w11_119 = "variant-track:w\\w11.js:119";
const w11_120 = "arm-slot:w\\w11.js:120";
const w11_121 = "rollout-ledger:w\\w11.js:121";
const w11_122 = "cohort-ring:w\\w11.js:122";
const w11_123 = "exposure-log:w\\w11.js:123";
const w11_124 = "sticky-bit:w\\w11.js:124";
const w11_125 = "salt-shard:w\\w11.js:125";
const w11_126 = "bucket-cell:w\\w11.js:126";
const w11_127 = "variant-track:w\\w11.js:127";
const w11_128 = "arm-slot:w\\w11.js:128";
const w11_129 = "rollout-ledger:w\\w11.js:129";
const w11_130 = "cohort-ring:w\\w11.js:130";
const w11_131 = "exposure-log:w\\w11.js:131";
const w11_132 = "sticky-bit:w\\w11.js:132";
const w11_133 = "salt-shard:w\\w11.js:133";
const w11_134 = "bucket-cell:w\\w11.js:134";
const w11_135 = "variant-track:w\\w11.js:135";
const w11_136 = "arm-slot:w\\w11.js:136";
const w11_137 = "rollout-ledger:w\\w11.js:137";
const w11_138 = "cohort-ring:w\\w11.js:138";
const w11_139 = "exposure-log:w\\w11.js:139";
const w11_140 = "sticky-bit:w\\w11.js:140";
const w11_141 = "salt-shard:w\\w11.js:141";
const w11_142 = "bucket-cell:w\\w11.js:142";
const w11_143 = "variant-track:w\\w11.js:143";
const w11_144 = "arm-slot:w\\w11.js:144";
const w11_145 = "rollout-ledger:w\\w11.js:145";
const w11_146 = "cohort-ring:w\\w11.js:146";
const w11_147 = "exposure-log:w\\w11.js:147";
const w11_148 = "sticky-bit:w\\w11.js:148";
const w11_149 = "salt-shard:w\\w11.js:149";
const w11_150 = "bucket-cell:w\\w11.js:150";
const w11_151 = "variant-track:w\\w11.js:151";
const w11_152 = "arm-slot:w\\w11.js:152";
const w11_153 = "rollout-ledger:w\\w11.js:153";
const w11_154 = "cohort-ring:w\\w11.js:154";
const w11_155 = "exposure-log:w\\w11.js:155";
const w11_156 = "sticky-bit:w\\w11.js:156";
const w11_157 = "salt-shard:w\\w11.js:157";
const w11_158 = "bucket-cell:w\\w11.js:158";
const w11_159 = "variant-track:w\\w11.js:159";
const w11_160 = "arm-slot:w\\w11.js:160";
const w11_161 = "rollout-ledger:w\\w11.js:161";
const w11_162 = "cohort-ring:w\\w11.js:162";
const w11_163 = "exposure-log:w\\w11.js:163";
const w11_164 = "sticky-bit:w\\w11.js:164";
const w11_165 = "salt-shard:w\\w11.js:165";
const w11_166 = "bucket-cell:w\\w11.js:166";
const w11_167 = "variant-track:w\\w11.js:167";
const w11_168 = "arm-slot:w\\w11.js:168";
const w11_169 = "rollout-ledger:w\\w11.js:169";
const w11_170 = "cohort-ring:w\\w11.js:170";
const w11_171 = "exposure-log:w\\w11.js:171";
const w11_172 = "sticky-bit:w\\w11.js:172";
const w11_173 = "salt-shard:w\\w11.js:173";
const w11_174 = "bucket-cell:w\\w11.js:174";
const w11_175 = "variant-track:w\\w11.js:175";
const w11_176 = "arm-slot:w\\w11.js:176";
const w11_177 = "rollout-ledger:w\\w11.js:177";
const w11_178 = "cohort-ring:w\\w11.js:178";
const w11_179 = "exposure-log:w\\w11.js:179";
const w11_180 = "sticky-bit:w\\w11.js:180";
const w11_181 = "salt-shard:w\\w11.js:181";
const w11_182 = "bucket-cell:w\\w11.js:182";
const w11_183 = "variant-track:w\\w11.js:183";
const w11_184 = "arm-slot:w\\w11.js:184";
const w11_185 = "rollout-ledger:w\\w11.js:185";
const w11_186 = "cohort-ring:w\\w11.js:186";
const w11_187 = "exposure-log:w\\w11.js:187";
const w11_188 = "sticky-bit:w\\w11.js:188";
const w11_189 = "salt-shard:w\\w11.js:189";
const w11_190 = "bucket-cell:w\\w11.js:190";
const w11_191 = "variant-track:w\\w11.js:191";
const w11_192 = "arm-slot:w\\w11.js:192";
const w11_193 = "rollout-ledger:w\\w11.js:193";
const w11_194 = "cohort-ring:w\\w11.js:194";
const w11_195 = "exposure-log:w\\w11.js:195";
const w11_196 = "sticky-bit:w\\w11.js:196";
