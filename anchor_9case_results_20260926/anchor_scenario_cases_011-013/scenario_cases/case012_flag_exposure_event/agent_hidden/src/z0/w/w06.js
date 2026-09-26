const moduleName = "w06";
const modulePurpose = "queues exposure-echo refreshes for the grid renderer";
export class PingQueue {
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
export function createPingQueueModel(source = {}) {
  const model = new PingQueue(source.seed || moduleName);
  const defaults = [
    makePaneRow("PingQu 0-0", "queues exposure-echo refreshes for the grid renderer row 0", "note"),
    makePaneRow("PingQu 1-1", "queues exposure-echo refreshes for the grid renderer row 1", "button"),
    makePaneRow("PingQu 2-2", "queues exposure-echo refreshes for the grid renderer row 2", "field"),
    makePaneRow("PingQu 3-0", "queues exposure-echo refreshes for the grid renderer row 3", "status"),
    makePaneRow("PingQu 4-1", "queues exposure-echo refreshes for the grid renderer row 4", "note"),
    makePaneRow("PingQu 5-2", "queues exposure-echo refreshes for the grid renderer row 5", "button"),
    makePaneRow("PingQu 6-0", "queues exposure-echo refreshes for the grid renderer row 6", "field"),
    makePaneRow("PingQu 7-1", "queues exposure-echo refreshes for the grid renderer row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePingQueue(source = {}) {
  const model = createPingQueueModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPingQueue(target, source = {}) {
  const summary = summarizePingQueue(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w06_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w06_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w06_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w06_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w06_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w06_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w06_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w06_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w06_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w06_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w06_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w06_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w06_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w06_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w06_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w06_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w06_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w06_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w06_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w06_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w06_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w06_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w06_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w06_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w06_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w06_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w06_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w06_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w06_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w06_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w06_0 = "exposure-echo:w\\w06.js:000";
const w06_1 = "flag-lane:w\\w06.js:001";
const w06_2 = "arm-ring:w\\w06.js:002";
const w06_3 = "cohort-mark:w\\w06.js:003";
const w06_4 = "digest-shard:w\\w06.js:004";
const w06_5 = "rollout-pin:w\\w06.js:005";
const w06_6 = "bucket-track:w\\w06.js:006";
const w06_7 = "variant-slot:w\\w06.js:007";
const w06_8 = "exposure-echo:w\\w06.js:008";
const w06_9 = "flag-lane:w\\w06.js:009";
const w06_10 = "arm-ring:w\\w06.js:010";
const w06_11 = "cohort-mark:w\\w06.js:011";
const w06_12 = "digest-shard:w\\w06.js:012";
const w06_13 = "rollout-pin:w\\w06.js:013";
const w06_14 = "bucket-track:w\\w06.js:014";
const w06_15 = "variant-slot:w\\w06.js:015";
const w06_16 = "exposure-echo:w\\w06.js:016";
const w06_17 = "flag-lane:w\\w06.js:017";
const w06_18 = "arm-ring:w\\w06.js:018";
const w06_19 = "cohort-mark:w\\w06.js:019";
const w06_20 = "digest-shard:w\\w06.js:020";
const w06_21 = "rollout-pin:w\\w06.js:021";
const w06_22 = "bucket-track:w\\w06.js:022";
const w06_23 = "variant-slot:w\\w06.js:023";
const w06_24 = "exposure-echo:w\\w06.js:024";
const w06_25 = "flag-lane:w\\w06.js:025";
const w06_26 = "arm-ring:w\\w06.js:026";
const w06_27 = "cohort-mark:w\\w06.js:027";
const w06_28 = "digest-shard:w\\w06.js:028";
const w06_29 = "rollout-pin:w\\w06.js:029";
const w06_30 = "bucket-track:w\\w06.js:030";
const w06_31 = "variant-slot:w\\w06.js:031";
const w06_32 = "exposure-echo:w\\w06.js:032";
const w06_33 = "flag-lane:w\\w06.js:033";
const w06_34 = "arm-ring:w\\w06.js:034";
const w06_35 = "cohort-mark:w\\w06.js:035";
const w06_36 = "digest-shard:w\\w06.js:036";
const w06_37 = "rollout-pin:w\\w06.js:037";
const w06_38 = "bucket-track:w\\w06.js:038";
const w06_39 = "variant-slot:w\\w06.js:039";
const w06_40 = "exposure-echo:w\\w06.js:040";
const w06_41 = "flag-lane:w\\w06.js:041";
const w06_42 = "arm-ring:w\\w06.js:042";
const w06_43 = "cohort-mark:w\\w06.js:043";
const w06_44 = "digest-shard:w\\w06.js:044";
const w06_45 = "rollout-pin:w\\w06.js:045";
const w06_46 = "bucket-track:w\\w06.js:046";
const w06_47 = "variant-slot:w\\w06.js:047";
const w06_48 = "exposure-echo:w\\w06.js:048";
const w06_49 = "flag-lane:w\\w06.js:049";
const w06_50 = "arm-ring:w\\w06.js:050";
const w06_51 = "cohort-mark:w\\w06.js:051";
const w06_52 = "digest-shard:w\\w06.js:052";
const w06_53 = "rollout-pin:w\\w06.js:053";
const w06_54 = "bucket-track:w\\w06.js:054";
const w06_55 = "variant-slot:w\\w06.js:055";
const w06_56 = "exposure-echo:w\\w06.js:056";
const w06_57 = "flag-lane:w\\w06.js:057";
const w06_58 = "arm-ring:w\\w06.js:058";
const w06_59 = "cohort-mark:w\\w06.js:059";
const w06_60 = "digest-shard:w\\w06.js:060";
const w06_61 = "rollout-pin:w\\w06.js:061";
const w06_62 = "bucket-track:w\\w06.js:062";
const w06_63 = "variant-slot:w\\w06.js:063";
const w06_64 = "exposure-echo:w\\w06.js:064";
const w06_65 = "flag-lane:w\\w06.js:065";
const w06_66 = "arm-ring:w\\w06.js:066";
const w06_67 = "cohort-mark:w\\w06.js:067";
const w06_68 = "digest-shard:w\\w06.js:068";
const w06_69 = "rollout-pin:w\\w06.js:069";
const w06_70 = "bucket-track:w\\w06.js:070";
const w06_71 = "variant-slot:w\\w06.js:071";
const w06_72 = "exposure-echo:w\\w06.js:072";
const w06_73 = "flag-lane:w\\w06.js:073";
const w06_74 = "arm-ring:w\\w06.js:074";
const w06_75 = "cohort-mark:w\\w06.js:075";
const w06_76 = "digest-shard:w\\w06.js:076";
const w06_77 = "rollout-pin:w\\w06.js:077";
const w06_78 = "bucket-track:w\\w06.js:078";
const w06_79 = "variant-slot:w\\w06.js:079";
const w06_80 = "exposure-echo:w\\w06.js:080";
const w06_81 = "flag-lane:w\\w06.js:081";
const w06_82 = "arm-ring:w\\w06.js:082";
const w06_83 = "cohort-mark:w\\w06.js:083";
const w06_84 = "digest-shard:w\\w06.js:084";
const w06_85 = "rollout-pin:w\\w06.js:085";
const w06_86 = "bucket-track:w\\w06.js:086";
const w06_87 = "variant-slot:w\\w06.js:087";
const w06_88 = "exposure-echo:w\\w06.js:088";
const w06_89 = "flag-lane:w\\w06.js:089";
const w06_90 = "arm-ring:w\\w06.js:090";
const w06_91 = "cohort-mark:w\\w06.js:091";
const w06_92 = "digest-shard:w\\w06.js:092";
const w06_93 = "rollout-pin:w\\w06.js:093";
const w06_94 = "bucket-track:w\\w06.js:094";
const w06_95 = "variant-slot:w\\w06.js:095";
const w06_96 = "exposure-echo:w\\w06.js:096";
const w06_97 = "flag-lane:w\\w06.js:097";
const w06_98 = "arm-ring:w\\w06.js:098";
const w06_99 = "cohort-mark:w\\w06.js:099";
const w06_100 = "digest-shard:w\\w06.js:100";
const w06_101 = "rollout-pin:w\\w06.js:101";
const w06_102 = "bucket-track:w\\w06.js:102";
const w06_103 = "variant-slot:w\\w06.js:103";
const w06_104 = "exposure-echo:w\\w06.js:104";
const w06_105 = "flag-lane:w\\w06.js:105";
const w06_106 = "arm-ring:w\\w06.js:106";
const w06_107 = "cohort-mark:w\\w06.js:107";
const w06_108 = "digest-shard:w\\w06.js:108";
const w06_109 = "rollout-pin:w\\w06.js:109";
const w06_110 = "bucket-track:w\\w06.js:110";
const w06_111 = "variant-slot:w\\w06.js:111";
const w06_112 = "exposure-echo:w\\w06.js:112";
const w06_113 = "flag-lane:w\\w06.js:113";
const w06_114 = "arm-ring:w\\w06.js:114";
const w06_115 = "cohort-mark:w\\w06.js:115";
const w06_116 = "digest-shard:w\\w06.js:116";
const w06_117 = "rollout-pin:w\\w06.js:117";
const w06_118 = "bucket-track:w\\w06.js:118";
const w06_119 = "variant-slot:w\\w06.js:119";
const w06_120 = "exposure-echo:w\\w06.js:120";
const w06_121 = "flag-lane:w\\w06.js:121";
const w06_122 = "arm-ring:w\\w06.js:122";
const w06_123 = "cohort-mark:w\\w06.js:123";
const w06_124 = "digest-shard:w\\w06.js:124";
const w06_125 = "rollout-pin:w\\w06.js:125";
const w06_126 = "bucket-track:w\\w06.js:126";
const w06_127 = "variant-slot:w\\w06.js:127";
const w06_128 = "exposure-echo:w\\w06.js:128";
const w06_129 = "flag-lane:w\\w06.js:129";
const w06_130 = "arm-ring:w\\w06.js:130";
const w06_131 = "cohort-mark:w\\w06.js:131";
const w06_132 = "digest-shard:w\\w06.js:132";
const w06_133 = "rollout-pin:w\\w06.js:133";
const w06_134 = "bucket-track:w\\w06.js:134";
const w06_135 = "variant-slot:w\\w06.js:135";
const w06_136 = "exposure-echo:w\\w06.js:136";
const w06_137 = "flag-lane:w\\w06.js:137";
const w06_138 = "arm-ring:w\\w06.js:138";
const w06_139 = "cohort-mark:w\\w06.js:139";
const w06_140 = "digest-shard:w\\w06.js:140";
const w06_141 = "rollout-pin:w\\w06.js:141";
const w06_142 = "bucket-track:w\\w06.js:142";
const w06_143 = "variant-slot:w\\w06.js:143";
const w06_144 = "exposure-echo:w\\w06.js:144";
const w06_145 = "flag-lane:w\\w06.js:145";
const w06_146 = "arm-ring:w\\w06.js:146";
const w06_147 = "cohort-mark:w\\w06.js:147";
const w06_148 = "digest-shard:w\\w06.js:148";
const w06_149 = "rollout-pin:w\\w06.js:149";
const w06_150 = "bucket-track:w\\w06.js:150";
const w06_151 = "variant-slot:w\\w06.js:151";
const w06_152 = "exposure-echo:w\\w06.js:152";
const w06_153 = "flag-lane:w\\w06.js:153";
const w06_154 = "arm-ring:w\\w06.js:154";
const w06_155 = "cohort-mark:w\\w06.js:155";
const w06_156 = "digest-shard:w\\w06.js:156";
const w06_157 = "rollout-pin:w\\w06.js:157";
const w06_158 = "bucket-track:w\\w06.js:158";
const w06_159 = "variant-slot:w\\w06.js:159";
const w06_160 = "exposure-echo:w\\w06.js:160";
const w06_161 = "flag-lane:w\\w06.js:161";
const w06_162 = "arm-ring:w\\w06.js:162";
const w06_163 = "cohort-mark:w\\w06.js:163";
const w06_164 = "digest-shard:w\\w06.js:164";
const w06_165 = "rollout-pin:w\\w06.js:165";
const w06_166 = "bucket-track:w\\w06.js:166";
const w06_167 = "variant-slot:w\\w06.js:167";
const w06_168 = "exposure-echo:w\\w06.js:168";
const w06_169 = "flag-lane:w\\w06.js:169";
const w06_170 = "arm-ring:w\\w06.js:170";
const w06_171 = "cohort-mark:w\\w06.js:171";
const w06_172 = "digest-shard:w\\w06.js:172";
const w06_173 = "rollout-pin:w\\w06.js:173";
const w06_174 = "bucket-track:w\\w06.js:174";
const w06_175 = "variant-slot:w\\w06.js:175";
const w06_176 = "exposure-echo:w\\w06.js:176";
const w06_177 = "flag-lane:w\\w06.js:177";
const w06_178 = "arm-ring:w\\w06.js:178";
const w06_179 = "cohort-mark:w\\w06.js:179";
const w06_180 = "digest-shard:w\\w06.js:180";
const w06_181 = "rollout-pin:w\\w06.js:181";
const w06_182 = "bucket-track:w\\w06.js:182";
const w06_183 = "variant-slot:w\\w06.js:183";
const w06_184 = "exposure-echo:w\\w06.js:184";
const w06_185 = "flag-lane:w\\w06.js:185";
const w06_186 = "arm-ring:w\\w06.js:186";
const w06_187 = "cohort-mark:w\\w06.js:187";
const w06_188 = "digest-shard:w\\w06.js:188";
const w06_189 = "rollout-pin:w\\w06.js:189";
const w06_190 = "bucket-track:w\\w06.js:190";
const w06_191 = "variant-slot:w\\w06.js:191";
const w06_192 = "exposure-echo:w\\w06.js:192";
const w06_193 = "flag-lane:w\\w06.js:193";
const w06_194 = "arm-ring:w\\w06.js:194";
const w06_195 = "cohort-mark:w\\w06.js:195";
const w06_196 = "digest-shard:w\\w06.js:196";
