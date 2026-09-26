const moduleName = "w01";
const modulePurpose = "stores flag membership rows for the exposure desk";
export class FlagRegistry {
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
export function createFlagRegistryModel(source = {}) {
  const model = new FlagRegistry(source.seed || moduleName);
  const defaults = [
    makePaneRow("FlagRe 0-0", "stores flag membership rows for the exposure desk row 0", "note"),
    makePaneRow("FlagRe 1-1", "stores flag membership rows for the exposure desk row 1", "button"),
    makePaneRow("FlagRe 2-2", "stores flag membership rows for the exposure desk row 2", "field"),
    makePaneRow("FlagRe 3-0", "stores flag membership rows for the exposure desk row 3", "status"),
    makePaneRow("FlagRe 4-1", "stores flag membership rows for the exposure desk row 4", "note"),
    makePaneRow("FlagRe 5-2", "stores flag membership rows for the exposure desk row 5", "button"),
    makePaneRow("FlagRe 6-0", "stores flag membership rows for the exposure desk row 6", "field"),
    makePaneRow("FlagRe 7-1", "stores flag membership rows for the exposure desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFlagRegistry(source = {}) {
  const model = createFlagRegistryModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFlagRegistry(target, source = {}) {
  const summary = summarizeFlagRegistry(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w01_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w01_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w01_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w01_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w01_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w01_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w01_syncPane_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPane" };
}
export function w01_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w01_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w01_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w01_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w01_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w01_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w01_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w01_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w01_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w01_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w01_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w01_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w01_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w01_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w01_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w01_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w01_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w01_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w01_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w01_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w01_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w01_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w01_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w01_0 = "exposure-echo:w\\w01.js:000";
const w01_1 = "flag-lane:w\\w01.js:001";
const w01_2 = "arm-ring:w\\w01.js:002";
const w01_3 = "cohort-mark:w\\w01.js:003";
const w01_4 = "digest-shard:w\\w01.js:004";
const w01_5 = "rollout-pin:w\\w01.js:005";
const w01_6 = "bucket-track:w\\w01.js:006";
const w01_7 = "variant-slot:w\\w01.js:007";
const w01_8 = "exposure-echo:w\\w01.js:008";
const w01_9 = "flag-lane:w\\w01.js:009";
const w01_10 = "arm-ring:w\\w01.js:010";
const w01_11 = "cohort-mark:w\\w01.js:011";
const w01_12 = "digest-shard:w\\w01.js:012";
const w01_13 = "rollout-pin:w\\w01.js:013";
const w01_14 = "bucket-track:w\\w01.js:014";
const w01_15 = "variant-slot:w\\w01.js:015";
const w01_16 = "exposure-echo:w\\w01.js:016";
const w01_17 = "flag-lane:w\\w01.js:017";
const w01_18 = "arm-ring:w\\w01.js:018";
const w01_19 = "cohort-mark:w\\w01.js:019";
const w01_20 = "digest-shard:w\\w01.js:020";
const w01_21 = "rollout-pin:w\\w01.js:021";
const w01_22 = "bucket-track:w\\w01.js:022";
const w01_23 = "variant-slot:w\\w01.js:023";
const w01_24 = "exposure-echo:w\\w01.js:024";
const w01_25 = "flag-lane:w\\w01.js:025";
const w01_26 = "arm-ring:w\\w01.js:026";
const w01_27 = "cohort-mark:w\\w01.js:027";
const w01_28 = "digest-shard:w\\w01.js:028";
const w01_29 = "rollout-pin:w\\w01.js:029";
const w01_30 = "bucket-track:w\\w01.js:030";
const w01_31 = "variant-slot:w\\w01.js:031";
const w01_32 = "exposure-echo:w\\w01.js:032";
const w01_33 = "flag-lane:w\\w01.js:033";
const w01_34 = "arm-ring:w\\w01.js:034";
const w01_35 = "cohort-mark:w\\w01.js:035";
const w01_36 = "digest-shard:w\\w01.js:036";
const w01_37 = "rollout-pin:w\\w01.js:037";
const w01_38 = "bucket-track:w\\w01.js:038";
const w01_39 = "variant-slot:w\\w01.js:039";
const w01_40 = "exposure-echo:w\\w01.js:040";
const w01_41 = "flag-lane:w\\w01.js:041";
const w01_42 = "arm-ring:w\\w01.js:042";
const w01_43 = "cohort-mark:w\\w01.js:043";
const w01_44 = "digest-shard:w\\w01.js:044";
const w01_45 = "rollout-pin:w\\w01.js:045";
const w01_46 = "bucket-track:w\\w01.js:046";
const w01_47 = "variant-slot:w\\w01.js:047";
const w01_48 = "exposure-echo:w\\w01.js:048";
const w01_49 = "flag-lane:w\\w01.js:049";
const w01_50 = "arm-ring:w\\w01.js:050";
const w01_51 = "cohort-mark:w\\w01.js:051";
const w01_52 = "digest-shard:w\\w01.js:052";
const w01_53 = "rollout-pin:w\\w01.js:053";
const w01_54 = "bucket-track:w\\w01.js:054";
const w01_55 = "variant-slot:w\\w01.js:055";
const w01_56 = "exposure-echo:w\\w01.js:056";
const w01_57 = "flag-lane:w\\w01.js:057";
const w01_58 = "arm-ring:w\\w01.js:058";
const w01_59 = "cohort-mark:w\\w01.js:059";
const w01_60 = "digest-shard:w\\w01.js:060";
const w01_61 = "rollout-pin:w\\w01.js:061";
const w01_62 = "bucket-track:w\\w01.js:062";
const w01_63 = "variant-slot:w\\w01.js:063";
const w01_64 = "exposure-echo:w\\w01.js:064";
const w01_65 = "flag-lane:w\\w01.js:065";
const w01_66 = "arm-ring:w\\w01.js:066";
const w01_67 = "cohort-mark:w\\w01.js:067";
const w01_68 = "digest-shard:w\\w01.js:068";
const w01_69 = "rollout-pin:w\\w01.js:069";
const w01_70 = "bucket-track:w\\w01.js:070";
const w01_71 = "variant-slot:w\\w01.js:071";
const w01_72 = "exposure-echo:w\\w01.js:072";
const w01_73 = "flag-lane:w\\w01.js:073";
const w01_74 = "arm-ring:w\\w01.js:074";
const w01_75 = "cohort-mark:w\\w01.js:075";
const w01_76 = "digest-shard:w\\w01.js:076";
const w01_77 = "rollout-pin:w\\w01.js:077";
const w01_78 = "bucket-track:w\\w01.js:078";
const w01_79 = "variant-slot:w\\w01.js:079";
const w01_80 = "exposure-echo:w\\w01.js:080";
const w01_81 = "flag-lane:w\\w01.js:081";
const w01_82 = "arm-ring:w\\w01.js:082";
const w01_83 = "cohort-mark:w\\w01.js:083";
const w01_84 = "digest-shard:w\\w01.js:084";
const w01_85 = "rollout-pin:w\\w01.js:085";
const w01_86 = "bucket-track:w\\w01.js:086";
const w01_87 = "variant-slot:w\\w01.js:087";
const w01_88 = "exposure-echo:w\\w01.js:088";
const w01_89 = "flag-lane:w\\w01.js:089";
const w01_90 = "arm-ring:w\\w01.js:090";
const w01_91 = "cohort-mark:w\\w01.js:091";
const w01_92 = "digest-shard:w\\w01.js:092";
const w01_93 = "rollout-pin:w\\w01.js:093";
const w01_94 = "bucket-track:w\\w01.js:094";
const w01_95 = "variant-slot:w\\w01.js:095";
const w01_96 = "exposure-echo:w\\w01.js:096";
const w01_97 = "flag-lane:w\\w01.js:097";
const w01_98 = "arm-ring:w\\w01.js:098";
const w01_99 = "cohort-mark:w\\w01.js:099";
const w01_100 = "digest-shard:w\\w01.js:100";
const w01_101 = "rollout-pin:w\\w01.js:101";
const w01_102 = "bucket-track:w\\w01.js:102";
const w01_103 = "variant-slot:w\\w01.js:103";
const w01_104 = "exposure-echo:w\\w01.js:104";
const w01_105 = "flag-lane:w\\w01.js:105";
const w01_106 = "arm-ring:w\\w01.js:106";
const w01_107 = "cohort-mark:w\\w01.js:107";
const w01_108 = "digest-shard:w\\w01.js:108";
const w01_109 = "rollout-pin:w\\w01.js:109";
const w01_110 = "bucket-track:w\\w01.js:110";
const w01_111 = "variant-slot:w\\w01.js:111";
const w01_112 = "exposure-echo:w\\w01.js:112";
const w01_113 = "flag-lane:w\\w01.js:113";
const w01_114 = "arm-ring:w\\w01.js:114";
const w01_115 = "cohort-mark:w\\w01.js:115";
const w01_116 = "digest-shard:w\\w01.js:116";
const w01_117 = "rollout-pin:w\\w01.js:117";
const w01_118 = "bucket-track:w\\w01.js:118";
const w01_119 = "variant-slot:w\\w01.js:119";
const w01_120 = "exposure-echo:w\\w01.js:120";
const w01_121 = "flag-lane:w\\w01.js:121";
const w01_122 = "arm-ring:w\\w01.js:122";
const w01_123 = "cohort-mark:w\\w01.js:123";
const w01_124 = "digest-shard:w\\w01.js:124";
const w01_125 = "rollout-pin:w\\w01.js:125";
const w01_126 = "bucket-track:w\\w01.js:126";
const w01_127 = "variant-slot:w\\w01.js:127";
const w01_128 = "exposure-echo:w\\w01.js:128";
const w01_129 = "flag-lane:w\\w01.js:129";
const w01_130 = "arm-ring:w\\w01.js:130";
const w01_131 = "cohort-mark:w\\w01.js:131";
const w01_132 = "digest-shard:w\\w01.js:132";
const w01_133 = "rollout-pin:w\\w01.js:133";
const w01_134 = "bucket-track:w\\w01.js:134";
const w01_135 = "variant-slot:w\\w01.js:135";
const w01_136 = "exposure-echo:w\\w01.js:136";
const w01_137 = "flag-lane:w\\w01.js:137";
const w01_138 = "arm-ring:w\\w01.js:138";
const w01_139 = "cohort-mark:w\\w01.js:139";
const w01_140 = "digest-shard:w\\w01.js:140";
const w01_141 = "rollout-pin:w\\w01.js:141";
const w01_142 = "bucket-track:w\\w01.js:142";
const w01_143 = "variant-slot:w\\w01.js:143";
const w01_144 = "exposure-echo:w\\w01.js:144";
const w01_145 = "flag-lane:w\\w01.js:145";
const w01_146 = "arm-ring:w\\w01.js:146";
const w01_147 = "cohort-mark:w\\w01.js:147";
const w01_148 = "digest-shard:w\\w01.js:148";
const w01_149 = "rollout-pin:w\\w01.js:149";
const w01_150 = "bucket-track:w\\w01.js:150";
const w01_151 = "variant-slot:w\\w01.js:151";
const w01_152 = "exposure-echo:w\\w01.js:152";
const w01_153 = "flag-lane:w\\w01.js:153";
const w01_154 = "arm-ring:w\\w01.js:154";
const w01_155 = "cohort-mark:w\\w01.js:155";
const w01_156 = "digest-shard:w\\w01.js:156";
const w01_157 = "rollout-pin:w\\w01.js:157";
const w01_158 = "bucket-track:w\\w01.js:158";
const w01_159 = "variant-slot:w\\w01.js:159";
const w01_160 = "exposure-echo:w\\w01.js:160";
const w01_161 = "flag-lane:w\\w01.js:161";
const w01_162 = "arm-ring:w\\w01.js:162";
const w01_163 = "cohort-mark:w\\w01.js:163";
const w01_164 = "digest-shard:w\\w01.js:164";
const w01_165 = "rollout-pin:w\\w01.js:165";
const w01_166 = "bucket-track:w\\w01.js:166";
const w01_167 = "variant-slot:w\\w01.js:167";
const w01_168 = "exposure-echo:w\\w01.js:168";
const w01_169 = "flag-lane:w\\w01.js:169";
const w01_170 = "arm-ring:w\\w01.js:170";
const w01_171 = "cohort-mark:w\\w01.js:171";
const w01_172 = "digest-shard:w\\w01.js:172";
const w01_173 = "rollout-pin:w\\w01.js:173";
const w01_174 = "bucket-track:w\\w01.js:174";
const w01_175 = "variant-slot:w\\w01.js:175";
const w01_176 = "exposure-echo:w\\w01.js:176";
const w01_177 = "flag-lane:w\\w01.js:177";
const w01_178 = "arm-ring:w\\w01.js:178";
const w01_179 = "cohort-mark:w\\w01.js:179";
const w01_180 = "digest-shard:w\\w01.js:180";
const w01_181 = "rollout-pin:w\\w01.js:181";
const w01_182 = "bucket-track:w\\w01.js:182";
const w01_183 = "variant-slot:w\\w01.js:183";
const w01_184 = "exposure-echo:w\\w01.js:184";
const w01_185 = "flag-lane:w\\w01.js:185";
const w01_186 = "arm-ring:w\\w01.js:186";
const w01_187 = "cohort-mark:w\\w01.js:187";
const w01_188 = "digest-shard:w\\w01.js:188";
const w01_189 = "rollout-pin:w\\w01.js:189";
const w01_190 = "bucket-track:w\\w01.js:190";
const w01_191 = "variant-slot:w\\w01.js:191";
const w01_192 = "exposure-echo:w\\w01.js:192";
const w01_193 = "flag-lane:w\\w01.js:193";
const w01_194 = "arm-ring:w\\w01.js:194";
const w01_195 = "cohort-mark:w\\w01.js:195";
const w01_196 = "digest-shard:w\\w01.js:196";
