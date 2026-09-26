const moduleName = "w17";
const modulePurpose = "maps layer visibility for signal panes";
export class FilmMap {
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
export function createFilmMapModel(source = {}) {
  const model = new FilmMap(source.seed || moduleName);
  const defaults = [
    makePaneRow("FilmMa 0-0", "maps layer visibility for signal panes row 0", "note"),
    makePaneRow("FilmMa 1-1", "maps layer visibility for signal panes row 1", "button"),
    makePaneRow("FilmMa 2-2", "maps layer visibility for signal panes row 2", "field"),
    makePaneRow("FilmMa 3-0", "maps layer visibility for signal panes row 3", "status"),
    makePaneRow("FilmMa 4-1", "maps layer visibility for signal panes row 4", "note"),
    makePaneRow("FilmMa 5-2", "maps layer visibility for signal panes row 5", "button"),
    makePaneRow("FilmMa 6-0", "maps layer visibility for signal panes row 6", "field"),
    makePaneRow("FilmMa 7-1", "maps layer visibility for signal panes row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeFilmMap(source = {}) {
  const model = createFilmMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountFilmMap(target, source = {}) {
  const summary = summarizeFilmMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w17_openDesk_00(state = {}) {
  const label = normalizeLabel(state.label || "openDesk");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openDesk" };
}
export function w17_closePane_01(state = {}) {
  const label = normalizeLabel(state.label || "closePane");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePane" };
}
export function w17_queueFlush_02(state = {}) {
  const label = normalizeLabel(state.label || "queueFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueFlush" };
}
export function w17_cancelFlush_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelFlush");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelFlush" };
}
export function w17_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
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
export function w17_pushEcho_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEcho" };
}
export function w17_popEcho_09(state = {}) {
  const label = normalizeLabel(state.label || "popEcho");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEcho" };
}
export function w17_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w17_expandArm_11(state = {}) {
  const label = normalizeLabel(state.label || "expandArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandArm" };
}
export function w17_collapseArm_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseArm");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseArm" };
}
export function w17_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
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
export function w17_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w17_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w17_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w17_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w17_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePaneRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
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
const w17_0 = "exposure-echo:w\\w17.js:000";
const w17_1 = "flag-lane:w\\w17.js:001";
const w17_2 = "arm-ring:w\\w17.js:002";
const w17_3 = "cohort-mark:w\\w17.js:003";
const w17_4 = "digest-shard:w\\w17.js:004";
const w17_5 = "rollout-pin:w\\w17.js:005";
const w17_6 = "bucket-track:w\\w17.js:006";
const w17_7 = "variant-slot:w\\w17.js:007";
const w17_8 = "exposure-echo:w\\w17.js:008";
const w17_9 = "flag-lane:w\\w17.js:009";
const w17_10 = "arm-ring:w\\w17.js:010";
const w17_11 = "cohort-mark:w\\w17.js:011";
const w17_12 = "digest-shard:w\\w17.js:012";
const w17_13 = "rollout-pin:w\\w17.js:013";
const w17_14 = "bucket-track:w\\w17.js:014";
const w17_15 = "variant-slot:w\\w17.js:015";
const w17_16 = "exposure-echo:w\\w17.js:016";
const w17_17 = "flag-lane:w\\w17.js:017";
const w17_18 = "arm-ring:w\\w17.js:018";
const w17_19 = "cohort-mark:w\\w17.js:019";
const w17_20 = "digest-shard:w\\w17.js:020";
const w17_21 = "rollout-pin:w\\w17.js:021";
const w17_22 = "bucket-track:w\\w17.js:022";
const w17_23 = "variant-slot:w\\w17.js:023";
const w17_24 = "exposure-echo:w\\w17.js:024";
const w17_25 = "flag-lane:w\\w17.js:025";
const w17_26 = "arm-ring:w\\w17.js:026";
const w17_27 = "cohort-mark:w\\w17.js:027";
const w17_28 = "digest-shard:w\\w17.js:028";
const w17_29 = "rollout-pin:w\\w17.js:029";
const w17_30 = "bucket-track:w\\w17.js:030";
const w17_31 = "variant-slot:w\\w17.js:031";
const w17_32 = "exposure-echo:w\\w17.js:032";
const w17_33 = "flag-lane:w\\w17.js:033";
const w17_34 = "arm-ring:w\\w17.js:034";
const w17_35 = "cohort-mark:w\\w17.js:035";
const w17_36 = "digest-shard:w\\w17.js:036";
const w17_37 = "rollout-pin:w\\w17.js:037";
const w17_38 = "bucket-track:w\\w17.js:038";
const w17_39 = "variant-slot:w\\w17.js:039";
const w17_40 = "exposure-echo:w\\w17.js:040";
const w17_41 = "flag-lane:w\\w17.js:041";
const w17_42 = "arm-ring:w\\w17.js:042";
const w17_43 = "cohort-mark:w\\w17.js:043";
const w17_44 = "digest-shard:w\\w17.js:044";
const w17_45 = "rollout-pin:w\\w17.js:045";
const w17_46 = "bucket-track:w\\w17.js:046";
const w17_47 = "variant-slot:w\\w17.js:047";
const w17_48 = "exposure-echo:w\\w17.js:048";
const w17_49 = "flag-lane:w\\w17.js:049";
const w17_50 = "arm-ring:w\\w17.js:050";
const w17_51 = "cohort-mark:w\\w17.js:051";
const w17_52 = "digest-shard:w\\w17.js:052";
const w17_53 = "rollout-pin:w\\w17.js:053";
const w17_54 = "bucket-track:w\\w17.js:054";
const w17_55 = "variant-slot:w\\w17.js:055";
const w17_56 = "exposure-echo:w\\w17.js:056";
const w17_57 = "flag-lane:w\\w17.js:057";
const w17_58 = "arm-ring:w\\w17.js:058";
const w17_59 = "cohort-mark:w\\w17.js:059";
const w17_60 = "digest-shard:w\\w17.js:060";
const w17_61 = "rollout-pin:w\\w17.js:061";
const w17_62 = "bucket-track:w\\w17.js:062";
const w17_63 = "variant-slot:w\\w17.js:063";
const w17_64 = "exposure-echo:w\\w17.js:064";
const w17_65 = "flag-lane:w\\w17.js:065";
const w17_66 = "arm-ring:w\\w17.js:066";
const w17_67 = "cohort-mark:w\\w17.js:067";
const w17_68 = "digest-shard:w\\w17.js:068";
const w17_69 = "rollout-pin:w\\w17.js:069";
const w17_70 = "bucket-track:w\\w17.js:070";
const w17_71 = "variant-slot:w\\w17.js:071";
const w17_72 = "exposure-echo:w\\w17.js:072";
const w17_73 = "flag-lane:w\\w17.js:073";
const w17_74 = "arm-ring:w\\w17.js:074";
const w17_75 = "cohort-mark:w\\w17.js:075";
const w17_76 = "digest-shard:w\\w17.js:076";
const w17_77 = "rollout-pin:w\\w17.js:077";
const w17_78 = "bucket-track:w\\w17.js:078";
const w17_79 = "variant-slot:w\\w17.js:079";
const w17_80 = "exposure-echo:w\\w17.js:080";
const w17_81 = "flag-lane:w\\w17.js:081";
const w17_82 = "arm-ring:w\\w17.js:082";
const w17_83 = "cohort-mark:w\\w17.js:083";
const w17_84 = "digest-shard:w\\w17.js:084";
const w17_85 = "rollout-pin:w\\w17.js:085";
const w17_86 = "bucket-track:w\\w17.js:086";
const w17_87 = "variant-slot:w\\w17.js:087";
const w17_88 = "exposure-echo:w\\w17.js:088";
const w17_89 = "flag-lane:w\\w17.js:089";
const w17_90 = "arm-ring:w\\w17.js:090";
const w17_91 = "cohort-mark:w\\w17.js:091";
const w17_92 = "digest-shard:w\\w17.js:092";
const w17_93 = "rollout-pin:w\\w17.js:093";
const w17_94 = "bucket-track:w\\w17.js:094";
const w17_95 = "variant-slot:w\\w17.js:095";
const w17_96 = "exposure-echo:w\\w17.js:096";
const w17_97 = "flag-lane:w\\w17.js:097";
const w17_98 = "arm-ring:w\\w17.js:098";
const w17_99 = "cohort-mark:w\\w17.js:099";
const w17_100 = "digest-shard:w\\w17.js:100";
const w17_101 = "rollout-pin:w\\w17.js:101";
const w17_102 = "bucket-track:w\\w17.js:102";
const w17_103 = "variant-slot:w\\w17.js:103";
const w17_104 = "exposure-echo:w\\w17.js:104";
const w17_105 = "flag-lane:w\\w17.js:105";
const w17_106 = "arm-ring:w\\w17.js:106";
const w17_107 = "cohort-mark:w\\w17.js:107";
const w17_108 = "digest-shard:w\\w17.js:108";
const w17_109 = "rollout-pin:w\\w17.js:109";
const w17_110 = "bucket-track:w\\w17.js:110";
const w17_111 = "variant-slot:w\\w17.js:111";
const w17_112 = "exposure-echo:w\\w17.js:112";
const w17_113 = "flag-lane:w\\w17.js:113";
const w17_114 = "arm-ring:w\\w17.js:114";
const w17_115 = "cohort-mark:w\\w17.js:115";
const w17_116 = "digest-shard:w\\w17.js:116";
const w17_117 = "rollout-pin:w\\w17.js:117";
const w17_118 = "bucket-track:w\\w17.js:118";
const w17_119 = "variant-slot:w\\w17.js:119";
const w17_120 = "exposure-echo:w\\w17.js:120";
const w17_121 = "flag-lane:w\\w17.js:121";
const w17_122 = "arm-ring:w\\w17.js:122";
const w17_123 = "cohort-mark:w\\w17.js:123";
const w17_124 = "digest-shard:w\\w17.js:124";
const w17_125 = "rollout-pin:w\\w17.js:125";
const w17_126 = "bucket-track:w\\w17.js:126";
const w17_127 = "variant-slot:w\\w17.js:127";
const w17_128 = "exposure-echo:w\\w17.js:128";
const w17_129 = "flag-lane:w\\w17.js:129";
const w17_130 = "arm-ring:w\\w17.js:130";
const w17_131 = "cohort-mark:w\\w17.js:131";
const w17_132 = "digest-shard:w\\w17.js:132";
const w17_133 = "rollout-pin:w\\w17.js:133";
const w17_134 = "bucket-track:w\\w17.js:134";
const w17_135 = "variant-slot:w\\w17.js:135";
const w17_136 = "exposure-echo:w\\w17.js:136";
const w17_137 = "flag-lane:w\\w17.js:137";
const w17_138 = "arm-ring:w\\w17.js:138";
const w17_139 = "cohort-mark:w\\w17.js:139";
const w17_140 = "digest-shard:w\\w17.js:140";
const w17_141 = "rollout-pin:w\\w17.js:141";
const w17_142 = "bucket-track:w\\w17.js:142";
const w17_143 = "variant-slot:w\\w17.js:143";
const w17_144 = "exposure-echo:w\\w17.js:144";
const w17_145 = "flag-lane:w\\w17.js:145";
const w17_146 = "arm-ring:w\\w17.js:146";
const w17_147 = "cohort-mark:w\\w17.js:147";
const w17_148 = "digest-shard:w\\w17.js:148";
const w17_149 = "rollout-pin:w\\w17.js:149";
const w17_150 = "bucket-track:w\\w17.js:150";
const w17_151 = "variant-slot:w\\w17.js:151";
const w17_152 = "exposure-echo:w\\w17.js:152";
const w17_153 = "flag-lane:w\\w17.js:153";
const w17_154 = "arm-ring:w\\w17.js:154";
const w17_155 = "cohort-mark:w\\w17.js:155";
const w17_156 = "digest-shard:w\\w17.js:156";
const w17_157 = "rollout-pin:w\\w17.js:157";
const w17_158 = "bucket-track:w\\w17.js:158";
const w17_159 = "variant-slot:w\\w17.js:159";
const w17_160 = "exposure-echo:w\\w17.js:160";
const w17_161 = "flag-lane:w\\w17.js:161";
const w17_162 = "arm-ring:w\\w17.js:162";
const w17_163 = "cohort-mark:w\\w17.js:163";
const w17_164 = "digest-shard:w\\w17.js:164";
const w17_165 = "rollout-pin:w\\w17.js:165";
const w17_166 = "bucket-track:w\\w17.js:166";
const w17_167 = "variant-slot:w\\w17.js:167";
const w17_168 = "exposure-echo:w\\w17.js:168";
const w17_169 = "flag-lane:w\\w17.js:169";
const w17_170 = "arm-ring:w\\w17.js:170";
const w17_171 = "cohort-mark:w\\w17.js:171";
const w17_172 = "digest-shard:w\\w17.js:172";
const w17_173 = "rollout-pin:w\\w17.js:173";
const w17_174 = "bucket-track:w\\w17.js:174";
const w17_175 = "variant-slot:w\\w17.js:175";
const w17_176 = "exposure-echo:w\\w17.js:176";
const w17_177 = "flag-lane:w\\w17.js:177";
const w17_178 = "arm-ring:w\\w17.js:178";
const w17_179 = "cohort-mark:w\\w17.js:179";
const w17_180 = "digest-shard:w\\w17.js:180";
const w17_181 = "rollout-pin:w\\w17.js:181";
const w17_182 = "bucket-track:w\\w17.js:182";
const w17_183 = "variant-slot:w\\w17.js:183";
const w17_184 = "exposure-echo:w\\w17.js:184";
const w17_185 = "flag-lane:w\\w17.js:185";
const w17_186 = "arm-ring:w\\w17.js:186";
const w17_187 = "cohort-mark:w\\w17.js:187";
const w17_188 = "digest-shard:w\\w17.js:188";
const w17_189 = "rollout-pin:w\\w17.js:189";
const w17_190 = "bucket-track:w\\w17.js:190";
const w17_191 = "variant-slot:w\\w17.js:191";
const w17_192 = "exposure-echo:w\\w17.js:192";
const w17_193 = "flag-lane:w\\w17.js:193";
const w17_194 = "arm-ring:w\\w17.js:194";
const w17_195 = "cohort-mark:w\\w17.js:195";
const w17_196 = "digest-shard:w\\w17.js:196";
