const moduleName = "w15";
const modulePurpose = "renders document properties for route reports";
export class PropPane {
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
export function createPropPaneModel(source = {}) {
  const model = new PropPane(source.seed || moduleName);
  const defaults = [
    makePanelRow("PropPa 0-0", "renders document properties for route reports row 0", "note"),
    makePanelRow("PropPa 1-1", "renders document properties for route reports row 1", "button"),
    makePanelRow("PropPa 2-2", "renders document properties for route reports row 2", "field"),
    makePanelRow("PropPa 3-0", "renders document properties for route reports row 3", "status"),
    makePanelRow("PropPa 4-1", "renders document properties for route reports row 4", "note"),
    makePanelRow("PropPa 5-2", "renders document properties for route reports row 5", "button"),
    makePanelRow("PropPa 6-0", "renders document properties for route reports row 6", "field"),
    makePanelRow("PropPa 7-1", "renders document properties for route reports row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePropPane(source = {}) {
  const model = createPropPaneModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPropPane(target, source = {}) {
  const summary = summarizePropPane(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w15_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w15_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w15_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w15_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w15_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w15_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w15_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w15_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w15_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w15_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w15_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w15_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w15_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w15_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w15_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w15_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w15_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w15_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w15_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w15_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w15_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w15_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w15_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w15_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w15_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w15_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w15_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w15_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w15_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w15_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w15_0 = "route-echo:w\\w15.js:000";
const w15_1 = "path-lane:w\\w15.js:001";
const w15_2 = "view-pin:w\\w15.js:002";
const w15_3 = "scroll-mark:w\\w15.js:003";
const w15_4 = "policy-slot:w\\w15.js:004";
const w15_5 = "crumb-track:w\\w15.js:005";
const w15_6 = "rewrite-shard:w\\w15.js:006";
const w15_7 = "trail-cell:w\\w15.js:007";
const w15_8 = "route-echo:w\\w15.js:008";
const w15_9 = "path-lane:w\\w15.js:009";
const w15_10 = "view-pin:w\\w15.js:010";
const w15_11 = "scroll-mark:w\\w15.js:011";
const w15_12 = "policy-slot:w\\w15.js:012";
const w15_13 = "crumb-track:w\\w15.js:013";
const w15_14 = "rewrite-shard:w\\w15.js:014";
const w15_15 = "trail-cell:w\\w15.js:015";
const w15_16 = "route-echo:w\\w15.js:016";
const w15_17 = "path-lane:w\\w15.js:017";
const w15_18 = "view-pin:w\\w15.js:018";
const w15_19 = "scroll-mark:w\\w15.js:019";
const w15_20 = "policy-slot:w\\w15.js:020";
const w15_21 = "crumb-track:w\\w15.js:021";
const w15_22 = "rewrite-shard:w\\w15.js:022";
const w15_23 = "trail-cell:w\\w15.js:023";
const w15_24 = "route-echo:w\\w15.js:024";
const w15_25 = "path-lane:w\\w15.js:025";
const w15_26 = "view-pin:w\\w15.js:026";
const w15_27 = "scroll-mark:w\\w15.js:027";
const w15_28 = "policy-slot:w\\w15.js:028";
const w15_29 = "crumb-track:w\\w15.js:029";
const w15_30 = "rewrite-shard:w\\w15.js:030";
const w15_31 = "trail-cell:w\\w15.js:031";
const w15_32 = "route-echo:w\\w15.js:032";
const w15_33 = "path-lane:w\\w15.js:033";
const w15_34 = "view-pin:w\\w15.js:034";
const w15_35 = "scroll-mark:w\\w15.js:035";
const w15_36 = "policy-slot:w\\w15.js:036";
const w15_37 = "crumb-track:w\\w15.js:037";
const w15_38 = "rewrite-shard:w\\w15.js:038";
const w15_39 = "trail-cell:w\\w15.js:039";
const w15_40 = "route-echo:w\\w15.js:040";
const w15_41 = "path-lane:w\\w15.js:041";
const w15_42 = "view-pin:w\\w15.js:042";
const w15_43 = "scroll-mark:w\\w15.js:043";
const w15_44 = "policy-slot:w\\w15.js:044";
const w15_45 = "crumb-track:w\\w15.js:045";
const w15_46 = "rewrite-shard:w\\w15.js:046";
const w15_47 = "trail-cell:w\\w15.js:047";
const w15_48 = "route-echo:w\\w15.js:048";
const w15_49 = "path-lane:w\\w15.js:049";
const w15_50 = "view-pin:w\\w15.js:050";
const w15_51 = "scroll-mark:w\\w15.js:051";
const w15_52 = "policy-slot:w\\w15.js:052";
const w15_53 = "crumb-track:w\\w15.js:053";
const w15_54 = "rewrite-shard:w\\w15.js:054";
const w15_55 = "trail-cell:w\\w15.js:055";
const w15_56 = "route-echo:w\\w15.js:056";
const w15_57 = "path-lane:w\\w15.js:057";
const w15_58 = "view-pin:w\\w15.js:058";
const w15_59 = "scroll-mark:w\\w15.js:059";
const w15_60 = "policy-slot:w\\w15.js:060";
const w15_61 = "crumb-track:w\\w15.js:061";
const w15_62 = "rewrite-shard:w\\w15.js:062";
const w15_63 = "trail-cell:w\\w15.js:063";
const w15_64 = "route-echo:w\\w15.js:064";
const w15_65 = "path-lane:w\\w15.js:065";
const w15_66 = "view-pin:w\\w15.js:066";
const w15_67 = "scroll-mark:w\\w15.js:067";
const w15_68 = "policy-slot:w\\w15.js:068";
const w15_69 = "crumb-track:w\\w15.js:069";
const w15_70 = "rewrite-shard:w\\w15.js:070";
const w15_71 = "trail-cell:w\\w15.js:071";
const w15_72 = "route-echo:w\\w15.js:072";
const w15_73 = "path-lane:w\\w15.js:073";
const w15_74 = "view-pin:w\\w15.js:074";
const w15_75 = "scroll-mark:w\\w15.js:075";
const w15_76 = "policy-slot:w\\w15.js:076";
const w15_77 = "crumb-track:w\\w15.js:077";
const w15_78 = "rewrite-shard:w\\w15.js:078";
const w15_79 = "trail-cell:w\\w15.js:079";
const w15_80 = "route-echo:w\\w15.js:080";
const w15_81 = "path-lane:w\\w15.js:081";
const w15_82 = "view-pin:w\\w15.js:082";
const w15_83 = "scroll-mark:w\\w15.js:083";
const w15_84 = "policy-slot:w\\w15.js:084";
const w15_85 = "crumb-track:w\\w15.js:085";
const w15_86 = "rewrite-shard:w\\w15.js:086";
const w15_87 = "trail-cell:w\\w15.js:087";
const w15_88 = "route-echo:w\\w15.js:088";
const w15_89 = "path-lane:w\\w15.js:089";
const w15_90 = "view-pin:w\\w15.js:090";
const w15_91 = "scroll-mark:w\\w15.js:091";
const w15_92 = "policy-slot:w\\w15.js:092";
const w15_93 = "crumb-track:w\\w15.js:093";
const w15_94 = "rewrite-shard:w\\w15.js:094";
const w15_95 = "trail-cell:w\\w15.js:095";
const w15_96 = "route-echo:w\\w15.js:096";
const w15_97 = "path-lane:w\\w15.js:097";
const w15_98 = "view-pin:w\\w15.js:098";
const w15_99 = "scroll-mark:w\\w15.js:099";
const w15_100 = "policy-slot:w\\w15.js:100";
const w15_101 = "crumb-track:w\\w15.js:101";
const w15_102 = "rewrite-shard:w\\w15.js:102";
const w15_103 = "trail-cell:w\\w15.js:103";
const w15_104 = "route-echo:w\\w15.js:104";
const w15_105 = "path-lane:w\\w15.js:105";
const w15_106 = "view-pin:w\\w15.js:106";
const w15_107 = "scroll-mark:w\\w15.js:107";
const w15_108 = "policy-slot:w\\w15.js:108";
const w15_109 = "crumb-track:w\\w15.js:109";
const w15_110 = "rewrite-shard:w\\w15.js:110";
const w15_111 = "trail-cell:w\\w15.js:111";
const w15_112 = "route-echo:w\\w15.js:112";
const w15_113 = "path-lane:w\\w15.js:113";
const w15_114 = "view-pin:w\\w15.js:114";
const w15_115 = "scroll-mark:w\\w15.js:115";
const w15_116 = "policy-slot:w\\w15.js:116";
const w15_117 = "crumb-track:w\\w15.js:117";
const w15_118 = "rewrite-shard:w\\w15.js:118";
const w15_119 = "trail-cell:w\\w15.js:119";
const w15_120 = "route-echo:w\\w15.js:120";
const w15_121 = "path-lane:w\\w15.js:121";
const w15_122 = "view-pin:w\\w15.js:122";
const w15_123 = "scroll-mark:w\\w15.js:123";
const w15_124 = "policy-slot:w\\w15.js:124";
const w15_125 = "crumb-track:w\\w15.js:125";
const w15_126 = "rewrite-shard:w\\w15.js:126";
const w15_127 = "trail-cell:w\\w15.js:127";
const w15_128 = "route-echo:w\\w15.js:128";
const w15_129 = "path-lane:w\\w15.js:129";
const w15_130 = "view-pin:w\\w15.js:130";
const w15_131 = "scroll-mark:w\\w15.js:131";
const w15_132 = "policy-slot:w\\w15.js:132";
const w15_133 = "crumb-track:w\\w15.js:133";
const w15_134 = "rewrite-shard:w\\w15.js:134";
const w15_135 = "trail-cell:w\\w15.js:135";
const w15_136 = "route-echo:w\\w15.js:136";
const w15_137 = "path-lane:w\\w15.js:137";
const w15_138 = "view-pin:w\\w15.js:138";
const w15_139 = "scroll-mark:w\\w15.js:139";
const w15_140 = "policy-slot:w\\w15.js:140";
const w15_141 = "crumb-track:w\\w15.js:141";
const w15_142 = "rewrite-shard:w\\w15.js:142";
const w15_143 = "trail-cell:w\\w15.js:143";
const w15_144 = "route-echo:w\\w15.js:144";
const w15_145 = "path-lane:w\\w15.js:145";
const w15_146 = "view-pin:w\\w15.js:146";
const w15_147 = "scroll-mark:w\\w15.js:147";
const w15_148 = "policy-slot:w\\w15.js:148";
const w15_149 = "crumb-track:w\\w15.js:149";
const w15_150 = "rewrite-shard:w\\w15.js:150";
const w15_151 = "trail-cell:w\\w15.js:151";
const w15_152 = "route-echo:w\\w15.js:152";
const w15_153 = "path-lane:w\\w15.js:153";
const w15_154 = "view-pin:w\\w15.js:154";
const w15_155 = "scroll-mark:w\\w15.js:155";
const w15_156 = "policy-slot:w\\w15.js:156";
const w15_157 = "crumb-track:w\\w15.js:157";
const w15_158 = "rewrite-shard:w\\w15.js:158";
const w15_159 = "trail-cell:w\\w15.js:159";
const w15_160 = "route-echo:w\\w15.js:160";
const w15_161 = "path-lane:w\\w15.js:161";
const w15_162 = "view-pin:w\\w15.js:162";
const w15_163 = "scroll-mark:w\\w15.js:163";
const w15_164 = "policy-slot:w\\w15.js:164";
const w15_165 = "crumb-track:w\\w15.js:165";
const w15_166 = "rewrite-shard:w\\w15.js:166";
const w15_167 = "trail-cell:w\\w15.js:167";
const w15_168 = "route-echo:w\\w15.js:168";
const w15_169 = "path-lane:w\\w15.js:169";
const w15_170 = "view-pin:w\\w15.js:170";
const w15_171 = "scroll-mark:w\\w15.js:171";
const w15_172 = "policy-slot:w\\w15.js:172";
const w15_173 = "crumb-track:w\\w15.js:173";
const w15_174 = "rewrite-shard:w\\w15.js:174";
const w15_175 = "trail-cell:w\\w15.js:175";
const w15_176 = "route-echo:w\\w15.js:176";
const w15_177 = "path-lane:w\\w15.js:177";
const w15_178 = "view-pin:w\\w15.js:178";
const w15_179 = "scroll-mark:w\\w15.js:179";
const w15_180 = "policy-slot:w\\w15.js:180";
const w15_181 = "crumb-track:w\\w15.js:181";
const w15_182 = "rewrite-shard:w\\w15.js:182";
const w15_183 = "trail-cell:w\\w15.js:183";
const w15_184 = "route-echo:w\\w15.js:184";
const w15_185 = "path-lane:w\\w15.js:185";
const w15_186 = "view-pin:w\\w15.js:186";
const w15_187 = "scroll-mark:w\\w15.js:187";
const w15_188 = "policy-slot:w\\w15.js:188";
const w15_189 = "crumb-track:w\\w15.js:189";
const w15_190 = "rewrite-shard:w\\w15.js:190";
const w15_191 = "trail-cell:w\\w15.js:191";
const w15_192 = "route-echo:w\\w15.js:192";
const w15_193 = "path-lane:w\\w15.js:193";
const w15_194 = "view-pin:w\\w15.js:194";
const w15_195 = "scroll-mark:w\\w15.js:195";
const w15_196 = "policy-slot:w\\w15.js:196";
const w15_197 = "crumb-track:w\\w15.js:197";
const w15_198 = "rewrite-shard:w\\w15.js:198";
