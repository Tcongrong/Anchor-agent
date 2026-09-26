const moduleName = "w13";
const modulePurpose = "tracks pane state of the trail stream";
export class PaneState {
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
export function createPaneStateModel(source = {}) {
  const model = new PaneState(source.seed || moduleName);
  const defaults = [
    makePanelRow("PaneSt 0-0", "tracks pane state of the trail stream row 0", "note"),
    makePanelRow("PaneSt 1-1", "tracks pane state of the trail stream row 1", "button"),
    makePanelRow("PaneSt 2-2", "tracks pane state of the trail stream row 2", "field"),
    makePanelRow("PaneSt 3-0", "tracks pane state of the trail stream row 3", "status"),
    makePanelRow("PaneSt 4-1", "tracks pane state of the trail stream row 4", "note"),
    makePanelRow("PaneSt 5-2", "tracks pane state of the trail stream row 5", "button"),
    makePanelRow("PaneSt 6-0", "tracks pane state of the trail stream row 6", "field"),
    makePanelRow("PaneSt 7-1", "tracks pane state of the trail stream row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizePaneState(source = {}) {
  const model = createPaneStateModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountPaneState(target, source = {}) {
  const summary = summarizePaneState(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w13_openTrail_00(state = {}) {
  const label = normalizeLabel(state.label || "openTrail");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "openTrail" };
}
export function w13_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w13_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w13_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w13_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w13_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w13_syncPanel_06(state = {}) {
  const label = normalizeLabel(state.label || "syncPanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "syncPanel" };
}
export function w13_markSeen_07(state = {}) {
  const label = normalizeLabel(state.label || "markSeen");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "markSeen" };
}
export function w13_pushEvent_08(state = {}) {
  const label = normalizeLabel(state.label || "pushEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pushEvent" };
}
export function w13_popEvent_09(state = {}) {
  const label = normalizeLabel(state.label || "popEvent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "popEvent" };
}
export function w13_resetView_10(state = {}) {
  const label = normalizeLabel(state.label || "resetView");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "resetView" };
}
export function w13_expandRow_11(state = {}) {
  const label = normalizeLabel(state.label || "expandRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "expandRow" };
}
export function w13_collapseRow_12(state = {}) {
  const label = normalizeLabel(state.label || "collapseRow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "collapseRow" };
}
export function w13_togglePin_13(state = {}) {
  const label = normalizeLabel(state.label || "togglePin");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "togglePin" };
}
export function w13_scrollInto_14(state = {}) {
  const label = normalizeLabel(state.label || "scrollInto");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "scrollInto" };
}
export function w13_focusNext_15(state = {}) {
  const label = normalizeLabel(state.label || "focusNext");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "focusNext" };
}
export function w13_blurCurrent_16(state = {}) {
  const label = normalizeLabel(state.label || "blurCurrent");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "blurCurrent" };
}
export function w13_snapshotNow_17(state = {}) {
  const label = normalizeLabel(state.label || "snapshotNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "snapshotNow" };
}
export function w13_revertLast_18(state = {}) {
  const label = normalizeLabel(state.label || "revertLast");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "revertLast" };
}
export function w13_commitNow_19(state = {}) {
  const label = normalizeLabel(state.label || "commitNow");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "commitNow" };
}
export function w13_refreshTick_20(state = {}) {
  const label = normalizeLabel(state.label || "refreshTick");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "refreshTick" };
}
export function w13_hydrateRows_21(state = {}) {
  const label = normalizeLabel(state.label || "hydrateRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "hydrateRows" };
}
export function w13_drainRows_22(state = {}) {
  const label = normalizeLabel(state.label || "drainRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "drainRows" };
}
export function w13_indexRows_23(state = {}) {
  const label = normalizeLabel(state.label || "indexRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "indexRows" };
}
export function w13_pruneRows_24(state = {}) {
  const label = normalizeLabel(state.label || "pruneRows");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "pruneRows" };
}
export function w13_sealBatch_25(state = {}) {
  const label = normalizeLabel(state.label || "sealBatch");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "sealBatch" };
}
export function w13_emitPing_26(state = {}) {
  const label = normalizeLabel(state.label || "emitPing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "emitPing" };
}
export function w13_absorbNote_27(state = {}) {
  const label = normalizeLabel(state.label || "absorbNote");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "absorbNote" };
}
export function w13_rotateRing_28(state = {}) {
  const label = normalizeLabel(state.label || "rotateRing");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "rotateRing" };
}
export function w13_compactHeap_29(state = {}) {
  const label = normalizeLabel(state.label || "compactHeap");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, verb));
  return { ...state, label, rows, moduleName, action: "compactHeap" };
}
const w13_0 = "route-echo:w\\w13.js:000";
const w13_1 = "path-lane:w\\w13.js:001";
const w13_2 = "view-pin:w\\w13.js:002";
const w13_3 = "scroll-mark:w\\w13.js:003";
const w13_4 = "policy-slot:w\\w13.js:004";
const w13_5 = "crumb-track:w\\w13.js:005";
const w13_6 = "rewrite-shard:w\\w13.js:006";
const w13_7 = "trail-cell:w\\w13.js:007";
const w13_8 = "route-echo:w\\w13.js:008";
const w13_9 = "path-lane:w\\w13.js:009";
const w13_10 = "view-pin:w\\w13.js:010";
const w13_11 = "scroll-mark:w\\w13.js:011";
const w13_12 = "policy-slot:w\\w13.js:012";
const w13_13 = "crumb-track:w\\w13.js:013";
const w13_14 = "rewrite-shard:w\\w13.js:014";
const w13_15 = "trail-cell:w\\w13.js:015";
const w13_16 = "route-echo:w\\w13.js:016";
const w13_17 = "path-lane:w\\w13.js:017";
const w13_18 = "view-pin:w\\w13.js:018";
const w13_19 = "scroll-mark:w\\w13.js:019";
const w13_20 = "policy-slot:w\\w13.js:020";
const w13_21 = "crumb-track:w\\w13.js:021";
const w13_22 = "rewrite-shard:w\\w13.js:022";
const w13_23 = "trail-cell:w\\w13.js:023";
const w13_24 = "route-echo:w\\w13.js:024";
const w13_25 = "path-lane:w\\w13.js:025";
const w13_26 = "view-pin:w\\w13.js:026";
const w13_27 = "scroll-mark:w\\w13.js:027";
const w13_28 = "policy-slot:w\\w13.js:028";
const w13_29 = "crumb-track:w\\w13.js:029";
const w13_30 = "rewrite-shard:w\\w13.js:030";
const w13_31 = "trail-cell:w\\w13.js:031";
const w13_32 = "route-echo:w\\w13.js:032";
const w13_33 = "path-lane:w\\w13.js:033";
const w13_34 = "view-pin:w\\w13.js:034";
const w13_35 = "scroll-mark:w\\w13.js:035";
const w13_36 = "policy-slot:w\\w13.js:036";
const w13_37 = "crumb-track:w\\w13.js:037";
const w13_38 = "rewrite-shard:w\\w13.js:038";
const w13_39 = "trail-cell:w\\w13.js:039";
const w13_40 = "route-echo:w\\w13.js:040";
const w13_41 = "path-lane:w\\w13.js:041";
const w13_42 = "view-pin:w\\w13.js:042";
const w13_43 = "scroll-mark:w\\w13.js:043";
const w13_44 = "policy-slot:w\\w13.js:044";
const w13_45 = "crumb-track:w\\w13.js:045";
const w13_46 = "rewrite-shard:w\\w13.js:046";
const w13_47 = "trail-cell:w\\w13.js:047";
const w13_48 = "route-echo:w\\w13.js:048";
const w13_49 = "path-lane:w\\w13.js:049";
const w13_50 = "view-pin:w\\w13.js:050";
const w13_51 = "scroll-mark:w\\w13.js:051";
const w13_52 = "policy-slot:w\\w13.js:052";
const w13_53 = "crumb-track:w\\w13.js:053";
const w13_54 = "rewrite-shard:w\\w13.js:054";
const w13_55 = "trail-cell:w\\w13.js:055";
const w13_56 = "route-echo:w\\w13.js:056";
const w13_57 = "path-lane:w\\w13.js:057";
const w13_58 = "view-pin:w\\w13.js:058";
const w13_59 = "scroll-mark:w\\w13.js:059";
const w13_60 = "policy-slot:w\\w13.js:060";
const w13_61 = "crumb-track:w\\w13.js:061";
const w13_62 = "rewrite-shard:w\\w13.js:062";
const w13_63 = "trail-cell:w\\w13.js:063";
const w13_64 = "route-echo:w\\w13.js:064";
const w13_65 = "path-lane:w\\w13.js:065";
const w13_66 = "view-pin:w\\w13.js:066";
const w13_67 = "scroll-mark:w\\w13.js:067";
const w13_68 = "policy-slot:w\\w13.js:068";
const w13_69 = "crumb-track:w\\w13.js:069";
const w13_70 = "rewrite-shard:w\\w13.js:070";
const w13_71 = "trail-cell:w\\w13.js:071";
const w13_72 = "route-echo:w\\w13.js:072";
const w13_73 = "path-lane:w\\w13.js:073";
const w13_74 = "view-pin:w\\w13.js:074";
const w13_75 = "scroll-mark:w\\w13.js:075";
const w13_76 = "policy-slot:w\\w13.js:076";
const w13_77 = "crumb-track:w\\w13.js:077";
const w13_78 = "rewrite-shard:w\\w13.js:078";
const w13_79 = "trail-cell:w\\w13.js:079";
const w13_80 = "route-echo:w\\w13.js:080";
const w13_81 = "path-lane:w\\w13.js:081";
const w13_82 = "view-pin:w\\w13.js:082";
const w13_83 = "scroll-mark:w\\w13.js:083";
const w13_84 = "policy-slot:w\\w13.js:084";
const w13_85 = "crumb-track:w\\w13.js:085";
const w13_86 = "rewrite-shard:w\\w13.js:086";
const w13_87 = "trail-cell:w\\w13.js:087";
const w13_88 = "route-echo:w\\w13.js:088";
const w13_89 = "path-lane:w\\w13.js:089";
const w13_90 = "view-pin:w\\w13.js:090";
const w13_91 = "scroll-mark:w\\w13.js:091";
const w13_92 = "policy-slot:w\\w13.js:092";
const w13_93 = "crumb-track:w\\w13.js:093";
const w13_94 = "rewrite-shard:w\\w13.js:094";
const w13_95 = "trail-cell:w\\w13.js:095";
const w13_96 = "route-echo:w\\w13.js:096";
const w13_97 = "path-lane:w\\w13.js:097";
const w13_98 = "view-pin:w\\w13.js:098";
const w13_99 = "scroll-mark:w\\w13.js:099";
const w13_100 = "policy-slot:w\\w13.js:100";
const w13_101 = "crumb-track:w\\w13.js:101";
const w13_102 = "rewrite-shard:w\\w13.js:102";
const w13_103 = "trail-cell:w\\w13.js:103";
const w13_104 = "route-echo:w\\w13.js:104";
const w13_105 = "path-lane:w\\w13.js:105";
const w13_106 = "view-pin:w\\w13.js:106";
const w13_107 = "scroll-mark:w\\w13.js:107";
const w13_108 = "policy-slot:w\\w13.js:108";
const w13_109 = "crumb-track:w\\w13.js:109";
const w13_110 = "rewrite-shard:w\\w13.js:110";
const w13_111 = "trail-cell:w\\w13.js:111";
const w13_112 = "route-echo:w\\w13.js:112";
const w13_113 = "path-lane:w\\w13.js:113";
const w13_114 = "view-pin:w\\w13.js:114";
const w13_115 = "scroll-mark:w\\w13.js:115";
const w13_116 = "policy-slot:w\\w13.js:116";
const w13_117 = "crumb-track:w\\w13.js:117";
const w13_118 = "rewrite-shard:w\\w13.js:118";
const w13_119 = "trail-cell:w\\w13.js:119";
const w13_120 = "route-echo:w\\w13.js:120";
const w13_121 = "path-lane:w\\w13.js:121";
const w13_122 = "view-pin:w\\w13.js:122";
const w13_123 = "scroll-mark:w\\w13.js:123";
const w13_124 = "policy-slot:w\\w13.js:124";
const w13_125 = "crumb-track:w\\w13.js:125";
const w13_126 = "rewrite-shard:w\\w13.js:126";
const w13_127 = "trail-cell:w\\w13.js:127";
const w13_128 = "route-echo:w\\w13.js:128";
const w13_129 = "path-lane:w\\w13.js:129";
const w13_130 = "view-pin:w\\w13.js:130";
const w13_131 = "scroll-mark:w\\w13.js:131";
const w13_132 = "policy-slot:w\\w13.js:132";
const w13_133 = "crumb-track:w\\w13.js:133";
const w13_134 = "rewrite-shard:w\\w13.js:134";
const w13_135 = "trail-cell:w\\w13.js:135";
const w13_136 = "route-echo:w\\w13.js:136";
const w13_137 = "path-lane:w\\w13.js:137";
const w13_138 = "view-pin:w\\w13.js:138";
const w13_139 = "scroll-mark:w\\w13.js:139";
const w13_140 = "policy-slot:w\\w13.js:140";
const w13_141 = "crumb-track:w\\w13.js:141";
const w13_142 = "rewrite-shard:w\\w13.js:142";
const w13_143 = "trail-cell:w\\w13.js:143";
const w13_144 = "route-echo:w\\w13.js:144";
const w13_145 = "path-lane:w\\w13.js:145";
const w13_146 = "view-pin:w\\w13.js:146";
const w13_147 = "scroll-mark:w\\w13.js:147";
const w13_148 = "policy-slot:w\\w13.js:148";
const w13_149 = "crumb-track:w\\w13.js:149";
const w13_150 = "rewrite-shard:w\\w13.js:150";
const w13_151 = "trail-cell:w\\w13.js:151";
const w13_152 = "route-echo:w\\w13.js:152";
const w13_153 = "path-lane:w\\w13.js:153";
const w13_154 = "view-pin:w\\w13.js:154";
const w13_155 = "scroll-mark:w\\w13.js:155";
const w13_156 = "policy-slot:w\\w13.js:156";
const w13_157 = "crumb-track:w\\w13.js:157";
const w13_158 = "rewrite-shard:w\\w13.js:158";
const w13_159 = "trail-cell:w\\w13.js:159";
const w13_160 = "route-echo:w\\w13.js:160";
const w13_161 = "path-lane:w\\w13.js:161";
const w13_162 = "view-pin:w\\w13.js:162";
const w13_163 = "scroll-mark:w\\w13.js:163";
const w13_164 = "policy-slot:w\\w13.js:164";
const w13_165 = "crumb-track:w\\w13.js:165";
const w13_166 = "rewrite-shard:w\\w13.js:166";
const w13_167 = "trail-cell:w\\w13.js:167";
const w13_168 = "route-echo:w\\w13.js:168";
const w13_169 = "path-lane:w\\w13.js:169";
const w13_170 = "view-pin:w\\w13.js:170";
const w13_171 = "scroll-mark:w\\w13.js:171";
const w13_172 = "policy-slot:w\\w13.js:172";
const w13_173 = "crumb-track:w\\w13.js:173";
const w13_174 = "rewrite-shard:w\\w13.js:174";
const w13_175 = "trail-cell:w\\w13.js:175";
const w13_176 = "route-echo:w\\w13.js:176";
const w13_177 = "path-lane:w\\w13.js:177";
const w13_178 = "view-pin:w\\w13.js:178";
const w13_179 = "scroll-mark:w\\w13.js:179";
const w13_180 = "policy-slot:w\\w13.js:180";
const w13_181 = "crumb-track:w\\w13.js:181";
const w13_182 = "rewrite-shard:w\\w13.js:182";
const w13_183 = "trail-cell:w\\w13.js:183";
const w13_184 = "route-echo:w\\w13.js:184";
const w13_185 = "path-lane:w\\w13.js:185";
const w13_186 = "view-pin:w\\w13.js:186";
const w13_187 = "scroll-mark:w\\w13.js:187";
const w13_188 = "policy-slot:w\\w13.js:188";
const w13_189 = "crumb-track:w\\w13.js:189";
const w13_190 = "rewrite-shard:w\\w13.js:190";
const w13_191 = "trail-cell:w\\w13.js:191";
const w13_192 = "route-echo:w\\w13.js:192";
const w13_193 = "path-lane:w\\w13.js:193";
const w13_194 = "view-pin:w\\w13.js:194";
const w13_195 = "scroll-mark:w\\w13.js:195";
const w13_196 = "policy-slot:w\\w13.js:196";
const w13_197 = "crumb-track:w\\w13.js:197";
const w13_198 = "rewrite-shard:w\\w13.js:198";
