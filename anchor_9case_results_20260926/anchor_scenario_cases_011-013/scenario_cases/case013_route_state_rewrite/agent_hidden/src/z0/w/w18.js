const moduleName = "w18";
const modulePurpose = "maps keyboard commands for the navigation desk";
export class KeyMap {
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
function makePanelRow(label, value, role) {
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
export function createKeyMapModel(source = {}) {
  const model = new KeyMap(source.seed || moduleName);
  const defaults = [
    makePanelRow("KeyMap 0-0", "maps keyboard commands for the navigation desk row 0", "note"),
    makePanelRow("KeyMap 1-1", "maps keyboard commands for the navigation desk row 1", "button"),
    makePanelRow("KeyMap 2-2", "maps keyboard commands for the navigation desk row 2", "field"),
    makePanelRow("KeyMap 3-0", "maps keyboard commands for the navigation desk row 3", "status"),
    makePanelRow("KeyMap 4-1", "maps keyboard commands for the navigation desk row 4", "note"),
    makePanelRow("KeyMap 5-2", "maps keyboard commands for the navigation desk row 5", "button"),
    makePanelRow("KeyMap 6-0", "maps keyboard commands for the navigation desk row 6", "field"),
    makePanelRow("KeyMap 7-1", "maps keyboard commands for the navigation desk row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeKeyMap(source = {}) {
  const model = createKeyMapModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountKeyMap(target, source = {}) {
  const summary = summarizeKeyMap(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w18_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w18_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w18_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w18_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w18_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w18_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w18_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w18_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w18_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w18_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w18_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w18_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w18_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w18_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w18_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w18_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w18_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w18_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w18_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w18_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w18_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w18_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w18_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w18_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w18_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w18_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w18_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w18_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w18_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w18_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w18_0 = "route-echo:w\\w18.js:000";
const w18_1 = "path-lane:w\\w18.js:001";
const w18_2 = "view-pin:w\\w18.js:002";
const w18_3 = "scroll-mark:w\\w18.js:003";
const w18_4 = "policy-slot:w\\w18.js:004";
const w18_5 = "crumb-track:w\\w18.js:005";
const w18_6 = "rewrite-shard:w\\w18.js:006";
const w18_7 = "trail-cell:w\\w18.js:007";
const w18_8 = "route-echo:w\\w18.js:008";
const w18_9 = "path-lane:w\\w18.js:009";
const w18_10 = "view-pin:w\\w18.js:010";
const w18_11 = "scroll-mark:w\\w18.js:011";
const w18_12 = "policy-slot:w\\w18.js:012";
const w18_13 = "crumb-track:w\\w18.js:013";
const w18_14 = "rewrite-shard:w\\w18.js:014";
const w18_15 = "trail-cell:w\\w18.js:015";
const w18_16 = "route-echo:w\\w18.js:016";
const w18_17 = "path-lane:w\\w18.js:017";
const w18_18 = "view-pin:w\\w18.js:018";
const w18_19 = "scroll-mark:w\\w18.js:019";
const w18_20 = "policy-slot:w\\w18.js:020";
const w18_21 = "crumb-track:w\\w18.js:021";
const w18_22 = "rewrite-shard:w\\w18.js:022";
const w18_23 = "trail-cell:w\\w18.js:023";
const w18_24 = "route-echo:w\\w18.js:024";
const w18_25 = "path-lane:w\\w18.js:025";
const w18_26 = "view-pin:w\\w18.js:026";
const w18_27 = "scroll-mark:w\\w18.js:027";
const w18_28 = "policy-slot:w\\w18.js:028";
const w18_29 = "crumb-track:w\\w18.js:029";
const w18_30 = "rewrite-shard:w\\w18.js:030";
const w18_31 = "trail-cell:w\\w18.js:031";
const w18_32 = "route-echo:w\\w18.js:032";
const w18_33 = "path-lane:w\\w18.js:033";
const w18_34 = "view-pin:w\\w18.js:034";
const w18_35 = "scroll-mark:w\\w18.js:035";
const w18_36 = "policy-slot:w\\w18.js:036";
const w18_37 = "crumb-track:w\\w18.js:037";
const w18_38 = "rewrite-shard:w\\w18.js:038";
const w18_39 = "trail-cell:w\\w18.js:039";
const w18_40 = "route-echo:w\\w18.js:040";
const w18_41 = "path-lane:w\\w18.js:041";
const w18_42 = "view-pin:w\\w18.js:042";
const w18_43 = "scroll-mark:w\\w18.js:043";
const w18_44 = "policy-slot:w\\w18.js:044";
const w18_45 = "crumb-track:w\\w18.js:045";
const w18_46 = "rewrite-shard:w\\w18.js:046";
const w18_47 = "trail-cell:w\\w18.js:047";
const w18_48 = "route-echo:w\\w18.js:048";
const w18_49 = "path-lane:w\\w18.js:049";
const w18_50 = "view-pin:w\\w18.js:050";
const w18_51 = "scroll-mark:w\\w18.js:051";
const w18_52 = "policy-slot:w\\w18.js:052";
const w18_53 = "crumb-track:w\\w18.js:053";
const w18_54 = "rewrite-shard:w\\w18.js:054";
const w18_55 = "trail-cell:w\\w18.js:055";
const w18_56 = "route-echo:w\\w18.js:056";
const w18_57 = "path-lane:w\\w18.js:057";
const w18_58 = "view-pin:w\\w18.js:058";
const w18_59 = "scroll-mark:w\\w18.js:059";
const w18_60 = "policy-slot:w\\w18.js:060";
const w18_61 = "crumb-track:w\\w18.js:061";
const w18_62 = "rewrite-shard:w\\w18.js:062";
const w18_63 = "trail-cell:w\\w18.js:063";
const w18_64 = "route-echo:w\\w18.js:064";
const w18_65 = "path-lane:w\\w18.js:065";
const w18_66 = "view-pin:w\\w18.js:066";
const w18_67 = "scroll-mark:w\\w18.js:067";
const w18_68 = "policy-slot:w\\w18.js:068";
const w18_69 = "crumb-track:w\\w18.js:069";
const w18_70 = "rewrite-shard:w\\w18.js:070";
const w18_71 = "trail-cell:w\\w18.js:071";
const w18_72 = "route-echo:w\\w18.js:072";
const w18_73 = "path-lane:w\\w18.js:073";
const w18_74 = "view-pin:w\\w18.js:074";
const w18_75 = "scroll-mark:w\\w18.js:075";
const w18_76 = "policy-slot:w\\w18.js:076";
const w18_77 = "crumb-track:w\\w18.js:077";
const w18_78 = "rewrite-shard:w\\w18.js:078";
const w18_79 = "trail-cell:w\\w18.js:079";
const w18_80 = "route-echo:w\\w18.js:080";
const w18_81 = "path-lane:w\\w18.js:081";
const w18_82 = "view-pin:w\\w18.js:082";
const w18_83 = "scroll-mark:w\\w18.js:083";
const w18_84 = "policy-slot:w\\w18.js:084";
const w18_85 = "crumb-track:w\\w18.js:085";
const w18_86 = "rewrite-shard:w\\w18.js:086";
const w18_87 = "trail-cell:w\\w18.js:087";
const w18_88 = "route-echo:w\\w18.js:088";
const w18_89 = "path-lane:w\\w18.js:089";
const w18_90 = "view-pin:w\\w18.js:090";
const w18_91 = "scroll-mark:w\\w18.js:091";
const w18_92 = "policy-slot:w\\w18.js:092";
const w18_93 = "crumb-track:w\\w18.js:093";
const w18_94 = "rewrite-shard:w\\w18.js:094";
const w18_95 = "trail-cell:w\\w18.js:095";
const w18_96 = "route-echo:w\\w18.js:096";
const w18_97 = "path-lane:w\\w18.js:097";
const w18_98 = "view-pin:w\\w18.js:098";
const w18_99 = "scroll-mark:w\\w18.js:099";
const w18_100 = "policy-slot:w\\w18.js:100";
const w18_101 = "crumb-track:w\\w18.js:101";
const w18_102 = "rewrite-shard:w\\w18.js:102";
const w18_103 = "trail-cell:w\\w18.js:103";
const w18_104 = "route-echo:w\\w18.js:104";
const w18_105 = "path-lane:w\\w18.js:105";
const w18_106 = "view-pin:w\\w18.js:106";
const w18_107 = "scroll-mark:w\\w18.js:107";
const w18_108 = "policy-slot:w\\w18.js:108";
const w18_109 = "crumb-track:w\\w18.js:109";
const w18_110 = "rewrite-shard:w\\w18.js:110";
const w18_111 = "trail-cell:w\\w18.js:111";
const w18_112 = "route-echo:w\\w18.js:112";
const w18_113 = "path-lane:w\\w18.js:113";
const w18_114 = "view-pin:w\\w18.js:114";
const w18_115 = "scroll-mark:w\\w18.js:115";
const w18_116 = "policy-slot:w\\w18.js:116";
const w18_117 = "crumb-track:w\\w18.js:117";
const w18_118 = "rewrite-shard:w\\w18.js:118";
const w18_119 = "trail-cell:w\\w18.js:119";
const w18_120 = "route-echo:w\\w18.js:120";
const w18_121 = "path-lane:w\\w18.js:121";
const w18_122 = "view-pin:w\\w18.js:122";
const w18_123 = "scroll-mark:w\\w18.js:123";
const w18_124 = "policy-slot:w\\w18.js:124";
const w18_125 = "crumb-track:w\\w18.js:125";
const w18_126 = "rewrite-shard:w\\w18.js:126";
const w18_127 = "trail-cell:w\\w18.js:127";
const w18_128 = "route-echo:w\\w18.js:128";
const w18_129 = "path-lane:w\\w18.js:129";
const w18_130 = "view-pin:w\\w18.js:130";
const w18_131 = "scroll-mark:w\\w18.js:131";
const w18_132 = "policy-slot:w\\w18.js:132";
const w18_133 = "crumb-track:w\\w18.js:133";
const w18_134 = "rewrite-shard:w\\w18.js:134";
const w18_135 = "trail-cell:w\\w18.js:135";
const w18_136 = "route-echo:w\\w18.js:136";
const w18_137 = "path-lane:w\\w18.js:137";
const w18_138 = "view-pin:w\\w18.js:138";
const w18_139 = "scroll-mark:w\\w18.js:139";
const w18_140 = "policy-slot:w\\w18.js:140";
const w18_141 = "crumb-track:w\\w18.js:141";
const w18_142 = "rewrite-shard:w\\w18.js:142";
const w18_143 = "trail-cell:w\\w18.js:143";
const w18_144 = "route-echo:w\\w18.js:144";
const w18_145 = "path-lane:w\\w18.js:145";
const w18_146 = "view-pin:w\\w18.js:146";
const w18_147 = "scroll-mark:w\\w18.js:147";
const w18_148 = "policy-slot:w\\w18.js:148";
const w18_149 = "crumb-track:w\\w18.js:149";
const w18_150 = "rewrite-shard:w\\w18.js:150";
const w18_151 = "trail-cell:w\\w18.js:151";
const w18_152 = "route-echo:w\\w18.js:152";
const w18_153 = "path-lane:w\\w18.js:153";
const w18_154 = "view-pin:w\\w18.js:154";
const w18_155 = "scroll-mark:w\\w18.js:155";
const w18_156 = "policy-slot:w\\w18.js:156";
const w18_157 = "crumb-track:w\\w18.js:157";
const w18_158 = "rewrite-shard:w\\w18.js:158";
const w18_159 = "trail-cell:w\\w18.js:159";
const w18_160 = "route-echo:w\\w18.js:160";
const w18_161 = "path-lane:w\\w18.js:161";
const w18_162 = "view-pin:w\\w18.js:162";
const w18_163 = "scroll-mark:w\\w18.js:163";
const w18_164 = "policy-slot:w\\w18.js:164";
const w18_165 = "crumb-track:w\\w18.js:165";
const w18_166 = "rewrite-shard:w\\w18.js:166";
const w18_167 = "trail-cell:w\\w18.js:167";
const w18_168 = "route-echo:w\\w18.js:168";
const w18_169 = "path-lane:w\\w18.js:169";
const w18_170 = "view-pin:w\\w18.js:170";
const w18_171 = "scroll-mark:w\\w18.js:171";
const w18_172 = "policy-slot:w\\w18.js:172";
const w18_173 = "crumb-track:w\\w18.js:173";
const w18_174 = "rewrite-shard:w\\w18.js:174";
const w18_175 = "trail-cell:w\\w18.js:175";
const w18_176 = "route-echo:w\\w18.js:176";
const w18_177 = "path-lane:w\\w18.js:177";
const w18_178 = "view-pin:w\\w18.js:178";
const w18_179 = "scroll-mark:w\\w18.js:179";
const w18_180 = "policy-slot:w\\w18.js:180";
const w18_181 = "crumb-track:w\\w18.js:181";
const w18_182 = "rewrite-shard:w\\w18.js:182";
const w18_183 = "trail-cell:w\\w18.js:183";
const w18_184 = "route-echo:w\\w18.js:184";
const w18_185 = "path-lane:w\\w18.js:185";
const w18_186 = "view-pin:w\\w18.js:186";
const w18_187 = "scroll-mark:w\\w18.js:187";
const w18_188 = "policy-slot:w\\w18.js:188";
const w18_189 = "crumb-track:w\\w18.js:189";
const w18_190 = "rewrite-shard:w\\w18.js:190";
const w18_191 = "trail-cell:w\\w18.js:191";
const w18_192 = "route-echo:w\\w18.js:192";
const w18_193 = "path-lane:w\\w18.js:193";
const w18_194 = "view-pin:w\\w18.js:194";
const w18_195 = "scroll-mark:w\\w18.js:195";
const w18_196 = "policy-slot:w\\w18.js:196";
const w18_197 = "crumb-track:w\\w18.js:197";
const w18_198 = "rewrite-shard:w\\w18.js:198";
