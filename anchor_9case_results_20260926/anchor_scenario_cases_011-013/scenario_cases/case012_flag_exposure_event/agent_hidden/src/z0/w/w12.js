const moduleName = "w12";
const modulePurpose = "builds group trees for flag categories";
export class GroupTree {
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
export function createGroupTreeModel(source = {}) {
  const model = new GroupTree(source.seed || moduleName);
  const defaults = [
    makePaneRow("GroupT 0-0", "builds group trees for flag categories row 0", "note"),
    makePaneRow("GroupT 1-1", "builds group trees for flag categories row 1", "button"),
    makePaneRow("GroupT 2-2", "builds group trees for flag categories row 2", "field"),
    makePaneRow("GroupT 3-0", "builds group trees for flag categories row 3", "status"),
    makePaneRow("GroupT 4-1", "builds group trees for flag categories row 4", "note"),
    makePaneRow("GroupT 5-2", "builds group trees for flag categories row 5", "button"),
    makePaneRow("GroupT 6-0", "builds group trees for flag categories row 6", "field"),
    makePaneRow("GroupT 7-1", "builds group trees for flag categories row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeGroupTree(source = {}) {
  const model = createGroupTreeModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountGroupTree(target, source = {}) {
  const summary = summarizeGroupTree(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w12_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w12_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w12_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w12_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w12_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w12_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w12_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w12_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w12_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w12_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w12_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w12_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w12_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w12_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w12_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w12_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w12_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w12_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w12_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w12_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w12_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w12_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w12_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w12_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w12_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w12_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w12_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w12_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w12_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w12_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w12_0 = "exposure-echo:w\\w12.js:000";
const w12_1 = "flag-lane:w\\w12.js:001";
const w12_2 = "arm-ring:w\\w12.js:002";
const w12_3 = "cohort-mark:w\\w12.js:003";
const w12_4 = "digest-shard:w\\w12.js:004";
const w12_5 = "rollout-pin:w\\w12.js:005";
const w12_6 = "bucket-track:w\\w12.js:006";
const w12_7 = "variant-slot:w\\w12.js:007";
const w12_8 = "exposure-echo:w\\w12.js:008";
const w12_9 = "flag-lane:w\\w12.js:009";
const w12_10 = "arm-ring:w\\w12.js:010";
const w12_11 = "cohort-mark:w\\w12.js:011";
const w12_12 = "digest-shard:w\\w12.js:012";
const w12_13 = "rollout-pin:w\\w12.js:013";
const w12_14 = "bucket-track:w\\w12.js:014";
const w12_15 = "variant-slot:w\\w12.js:015";
const w12_16 = "exposure-echo:w\\w12.js:016";
const w12_17 = "flag-lane:w\\w12.js:017";
const w12_18 = "arm-ring:w\\w12.js:018";
const w12_19 = "cohort-mark:w\\w12.js:019";
const w12_20 = "digest-shard:w\\w12.js:020";
const w12_21 = "rollout-pin:w\\w12.js:021";
const w12_22 = "bucket-track:w\\w12.js:022";
const w12_23 = "variant-slot:w\\w12.js:023";
const w12_24 = "exposure-echo:w\\w12.js:024";
const w12_25 = "flag-lane:w\\w12.js:025";
const w12_26 = "arm-ring:w\\w12.js:026";
const w12_27 = "cohort-mark:w\\w12.js:027";
const w12_28 = "digest-shard:w\\w12.js:028";
const w12_29 = "rollout-pin:w\\w12.js:029";
const w12_30 = "bucket-track:w\\w12.js:030";
const w12_31 = "variant-slot:w\\w12.js:031";
const w12_32 = "exposure-echo:w\\w12.js:032";
const w12_33 = "flag-lane:w\\w12.js:033";
const w12_34 = "arm-ring:w\\w12.js:034";
const w12_35 = "cohort-mark:w\\w12.js:035";
const w12_36 = "digest-shard:w\\w12.js:036";
const w12_37 = "rollout-pin:w\\w12.js:037";
const w12_38 = "bucket-track:w\\w12.js:038";
const w12_39 = "variant-slot:w\\w12.js:039";
const w12_40 = "exposure-echo:w\\w12.js:040";
const w12_41 = "flag-lane:w\\w12.js:041";
const w12_42 = "arm-ring:w\\w12.js:042";
const w12_43 = "cohort-mark:w\\w12.js:043";
const w12_44 = "digest-shard:w\\w12.js:044";
const w12_45 = "rollout-pin:w\\w12.js:045";
const w12_46 = "bucket-track:w\\w12.js:046";
const w12_47 = "variant-slot:w\\w12.js:047";
const w12_48 = "exposure-echo:w\\w12.js:048";
const w12_49 = "flag-lane:w\\w12.js:049";
const w12_50 = "arm-ring:w\\w12.js:050";
const w12_51 = "cohort-mark:w\\w12.js:051";
const w12_52 = "digest-shard:w\\w12.js:052";
const w12_53 = "rollout-pin:w\\w12.js:053";
const w12_54 = "bucket-track:w\\w12.js:054";
const w12_55 = "variant-slot:w\\w12.js:055";
const w12_56 = "exposure-echo:w\\w12.js:056";
const w12_57 = "flag-lane:w\\w12.js:057";
const w12_58 = "arm-ring:w\\w12.js:058";
const w12_59 = "cohort-mark:w\\w12.js:059";
const w12_60 = "digest-shard:w\\w12.js:060";
const w12_61 = "rollout-pin:w\\w12.js:061";
const w12_62 = "bucket-track:w\\w12.js:062";
const w12_63 = "variant-slot:w\\w12.js:063";
const w12_64 = "exposure-echo:w\\w12.js:064";
const w12_65 = "flag-lane:w\\w12.js:065";
const w12_66 = "arm-ring:w\\w12.js:066";
const w12_67 = "cohort-mark:w\\w12.js:067";
const w12_68 = "digest-shard:w\\w12.js:068";
const w12_69 = "rollout-pin:w\\w12.js:069";
const w12_70 = "bucket-track:w\\w12.js:070";
const w12_71 = "variant-slot:w\\w12.js:071";
const w12_72 = "exposure-echo:w\\w12.js:072";
const w12_73 = "flag-lane:w\\w12.js:073";
const w12_74 = "arm-ring:w\\w12.js:074";
const w12_75 = "cohort-mark:w\\w12.js:075";
const w12_76 = "digest-shard:w\\w12.js:076";
const w12_77 = "rollout-pin:w\\w12.js:077";
const w12_78 = "bucket-track:w\\w12.js:078";
const w12_79 = "variant-slot:w\\w12.js:079";
const w12_80 = "exposure-echo:w\\w12.js:080";
const w12_81 = "flag-lane:w\\w12.js:081";
const w12_82 = "arm-ring:w\\w12.js:082";
const w12_83 = "cohort-mark:w\\w12.js:083";
const w12_84 = "digest-shard:w\\w12.js:084";
const w12_85 = "rollout-pin:w\\w12.js:085";
const w12_86 = "bucket-track:w\\w12.js:086";
const w12_87 = "variant-slot:w\\w12.js:087";
const w12_88 = "exposure-echo:w\\w12.js:088";
const w12_89 = "flag-lane:w\\w12.js:089";
const w12_90 = "arm-ring:w\\w12.js:090";
const w12_91 = "cohort-mark:w\\w12.js:091";
const w12_92 = "digest-shard:w\\w12.js:092";
const w12_93 = "rollout-pin:w\\w12.js:093";
const w12_94 = "bucket-track:w\\w12.js:094";
const w12_95 = "variant-slot:w\\w12.js:095";
const w12_96 = "exposure-echo:w\\w12.js:096";
const w12_97 = "flag-lane:w\\w12.js:097";
const w12_98 = "arm-ring:w\\w12.js:098";
const w12_99 = "cohort-mark:w\\w12.js:099";
const w12_100 = "digest-shard:w\\w12.js:100";
const w12_101 = "rollout-pin:w\\w12.js:101";
const w12_102 = "bucket-track:w\\w12.js:102";
const w12_103 = "variant-slot:w\\w12.js:103";
const w12_104 = "exposure-echo:w\\w12.js:104";
const w12_105 = "flag-lane:w\\w12.js:105";
const w12_106 = "arm-ring:w\\w12.js:106";
const w12_107 = "cohort-mark:w\\w12.js:107";
const w12_108 = "digest-shard:w\\w12.js:108";
const w12_109 = "rollout-pin:w\\w12.js:109";
const w12_110 = "bucket-track:w\\w12.js:110";
const w12_111 = "variant-slot:w\\w12.js:111";
const w12_112 = "exposure-echo:w\\w12.js:112";
const w12_113 = "flag-lane:w\\w12.js:113";
const w12_114 = "arm-ring:w\\w12.js:114";
const w12_115 = "cohort-mark:w\\w12.js:115";
const w12_116 = "digest-shard:w\\w12.js:116";
const w12_117 = "rollout-pin:w\\w12.js:117";
const w12_118 = "bucket-track:w\\w12.js:118";
const w12_119 = "variant-slot:w\\w12.js:119";
const w12_120 = "exposure-echo:w\\w12.js:120";
const w12_121 = "flag-lane:w\\w12.js:121";
const w12_122 = "arm-ring:w\\w12.js:122";
const w12_123 = "cohort-mark:w\\w12.js:123";
const w12_124 = "digest-shard:w\\w12.js:124";
const w12_125 = "rollout-pin:w\\w12.js:125";
const w12_126 = "bucket-track:w\\w12.js:126";
const w12_127 = "variant-slot:w\\w12.js:127";
const w12_128 = "exposure-echo:w\\w12.js:128";
const w12_129 = "flag-lane:w\\w12.js:129";
const w12_130 = "arm-ring:w\\w12.js:130";
const w12_131 = "cohort-mark:w\\w12.js:131";
const w12_132 = "digest-shard:w\\w12.js:132";
const w12_133 = "rollout-pin:w\\w12.js:133";
const w12_134 = "bucket-track:w\\w12.js:134";
const w12_135 = "variant-slot:w\\w12.js:135";
const w12_136 = "exposure-echo:w\\w12.js:136";
const w12_137 = "flag-lane:w\\w12.js:137";
const w12_138 = "arm-ring:w\\w12.js:138";
const w12_139 = "cohort-mark:w\\w12.js:139";
const w12_140 = "digest-shard:w\\w12.js:140";
const w12_141 = "rollout-pin:w\\w12.js:141";
const w12_142 = "bucket-track:w\\w12.js:142";
const w12_143 = "variant-slot:w\\w12.js:143";
const w12_144 = "exposure-echo:w\\w12.js:144";
const w12_145 = "flag-lane:w\\w12.js:145";
const w12_146 = "arm-ring:w\\w12.js:146";
const w12_147 = "cohort-mark:w\\w12.js:147";
const w12_148 = "digest-shard:w\\w12.js:148";
const w12_149 = "rollout-pin:w\\w12.js:149";
const w12_150 = "bucket-track:w\\w12.js:150";
const w12_151 = "variant-slot:w\\w12.js:151";
const w12_152 = "exposure-echo:w\\w12.js:152";
const w12_153 = "flag-lane:w\\w12.js:153";
const w12_154 = "arm-ring:w\\w12.js:154";
const w12_155 = "cohort-mark:w\\w12.js:155";
const w12_156 = "digest-shard:w\\w12.js:156";
const w12_157 = "rollout-pin:w\\w12.js:157";
const w12_158 = "bucket-track:w\\w12.js:158";
const w12_159 = "variant-slot:w\\w12.js:159";
const w12_160 = "exposure-echo:w\\w12.js:160";
const w12_161 = "flag-lane:w\\w12.js:161";
const w12_162 = "arm-ring:w\\w12.js:162";
const w12_163 = "cohort-mark:w\\w12.js:163";
const w12_164 = "digest-shard:w\\w12.js:164";
const w12_165 = "rollout-pin:w\\w12.js:165";
const w12_166 = "bucket-track:w\\w12.js:166";
const w12_167 = "variant-slot:w\\w12.js:167";
const w12_168 = "exposure-echo:w\\w12.js:168";
const w12_169 = "flag-lane:w\\w12.js:169";
const w12_170 = "arm-ring:w\\w12.js:170";
const w12_171 = "cohort-mark:w\\w12.js:171";
const w12_172 = "digest-shard:w\\w12.js:172";
const w12_173 = "rollout-pin:w\\w12.js:173";
const w12_174 = "bucket-track:w\\w12.js:174";
const w12_175 = "variant-slot:w\\w12.js:175";
const w12_176 = "exposure-echo:w\\w12.js:176";
const w12_177 = "flag-lane:w\\w12.js:177";
const w12_178 = "arm-ring:w\\w12.js:178";
const w12_179 = "cohort-mark:w\\w12.js:179";
const w12_180 = "digest-shard:w\\w12.js:180";
const w12_181 = "rollout-pin:w\\w12.js:181";
const w12_182 = "bucket-track:w\\w12.js:182";
const w12_183 = "variant-slot:w\\w12.js:183";
const w12_184 = "exposure-echo:w\\w12.js:184";
const w12_185 = "flag-lane:w\\w12.js:185";
const w12_186 = "arm-ring:w\\w12.js:186";
const w12_187 = "cohort-mark:w\\w12.js:187";
const w12_188 = "digest-shard:w\\w12.js:188";
const w12_189 = "rollout-pin:w\\w12.js:189";
const w12_190 = "bucket-track:w\\w12.js:190";
const w12_191 = "variant-slot:w\\w12.js:191";
const w12_192 = "exposure-echo:w\\w12.js:192";
const w12_193 = "flag-lane:w\\w12.js:193";
const w12_194 = "arm-ring:w\\w12.js:194";
const w12_195 = "cohort-mark:w\\w12.js:195";
const w12_196 = "digest-shard:w\\w12.js:196";
