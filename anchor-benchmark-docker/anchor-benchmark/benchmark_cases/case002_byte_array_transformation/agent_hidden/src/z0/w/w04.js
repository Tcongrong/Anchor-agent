const moduleName = "w04";
const modulePurpose = "normalizes link and widget annotation descriptors";
export class AnnotationCatalog {
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
export function createAnnotationCatalogModel(source = {}) {
  const model = new AnnotationCatalog(source.seed || moduleName);
  const defaults = [
    makePanelRow("Page 4-0", "normalizes link and widget annotation descriptors row 0", "note"),
    makePanelRow("Zoom 4-1", "normalizes link and widget annotation descriptors row 1", "button"),
    makePanelRow("Rotation 4-2", "normalizes link and widget annotation descriptors row 2", "field"),
    makePanelRow("Selection 4-3", "normalizes link and widget annotation descriptors row 3", "status"),
    makePanelRow("Find 4-4", "normalizes link and widget annotation descriptors row 4", "note"),
    makePanelRow("Sidebar 4-5", "normalizes link and widget annotation descriptors row 5", "button"),
    makePanelRow("Toolbar 4-6", "normalizes link and widget annotation descriptors row 6", "field"),
    makePanelRow("Overlay 4-7", "normalizes link and widget annotation descriptors row 7", "status"),
  ];
  const rows = mergeRows(source.rows || [], defaults);
  for (const row of rows) model.addRecord(row.label, row);
  return model;
}
export function summarizeAnnotationCatalog(source = {}) {
  const model = createAnnotationCatalogModel(source);
  const summary = model.describe();
  const rows = model.snapshot();
  return { ...summary, rows, token: rows.map((row) => row.key).join('|') };
}
export function mountAnnotationCatalog(target, source = {}) {
  const summary = summarizeAnnotationCatalog(source);
  if (target && target.dataset) target.dataset[moduleName.replace(/[^a-z0-9]/gi, '')] = String(summary.size);
  return summary;
}
export function w04_openPage_00(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w04_closePanel_01(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_02(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_03(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_04(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_05(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncSidebar_06(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w04_collectVisible_07(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w04_bindControl_08(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w04_releaseControl_09(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w04_resolveLabel_10(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w04_formatBadge_11(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w04_openPage_12(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w04_closePanel_13(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_14(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_15(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_16(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_17(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncSidebar_18(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w04_collectVisible_19(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w04_bindControl_20(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w04_releaseControl_21(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w04_resolveLabel_22(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w04_formatBadge_23(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w04_openPage_24(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w04_closePanel_25(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_26(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_27(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_28(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_29(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncSidebar_30(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w04_collectVisible_31(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w04_bindControl_32(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w04_releaseControl_33(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w04_resolveLabel_34(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w04_formatBadge_35(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w04_openPage_36(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w04_closePanel_37(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_38(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_39(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_40(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_41(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncSidebar_42(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w04_collectVisible_43(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w04_bindControl_44(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w04_releaseControl_45(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w04_resolveLabel_46(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w04_formatBadge_47(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function w04_openPage_48(state = {}) {
  const label = normalizeLabel(state.label || "openPage");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "openPage"));
  return { ...state, label, rows, moduleName, action: "openPage" };
}
export function w04_closePanel_49(state = {}) {
  const label = normalizeLabel(state.label || "closePanel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "closePanel"));
  return { ...state, label, rows, moduleName, action: "closePanel" };
}
export function w04_queueRender_50(state = {}) {
  const label = normalizeLabel(state.label || "queueRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "queueRender"));
  return { ...state, label, rows, moduleName, action: "queueRender" };
}
export function w04_cancelRender_51(state = {}) {
  const label = normalizeLabel(state.label || "cancelRender");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cancelRender"));
  return { ...state, label, rows, moduleName, action: "cancelRender" };
}
export function w04_updateScale_52(state = {}) {
  const label = normalizeLabel(state.label || "updateScale");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "updateScale"));
  return { ...state, label, rows, moduleName, action: "updateScale" };
}
export function w04_setCursor_53(state = {}) {
  const label = normalizeLabel(state.label || "setCursor");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "setCursor"));
  return { ...state, label, rows, moduleName, action: "setCursor" };
}
export function w04_syncSidebar_54(state = {}) {
  const label = normalizeLabel(state.label || "syncSidebar");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "syncSidebar"));
  return { ...state, label, rows, moduleName, action: "syncSidebar" };
}
export function w04_collectVisible_55(state = {}) {
  const label = normalizeLabel(state.label || "collectVisible");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "collectVisible"));
  return { ...state, label, rows, moduleName, action: "collectVisible" };
}
export function w04_bindControl_56(state = {}) {
  const label = normalizeLabel(state.label || "bindControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "bindControl"));
  return { ...state, label, rows, moduleName, action: "bindControl" };
}
export function w04_releaseControl_57(state = {}) {
  const label = normalizeLabel(state.label || "releaseControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "releaseControl"));
  return { ...state, label, rows, moduleName, action: "releaseControl" };
}
export function w04_resolveLabel_58(state = {}) {
  const label = normalizeLabel(state.label || "resolveLabel");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "resolveLabel"));
  return { ...state, label, rows, moduleName, action: "resolveLabel" };
}
export function w04_formatBadge_59(state = {}) {
  const label = normalizeLabel(state.label || "formatBadge");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "formatBadge"));
  return { ...state, label, rows, moduleName, action: "formatBadge" };
}
export function runAnnotationCatalog(target, source = {}) {
  let state = { rows: source.rows || [], label: source.label || moduleName };
  state = w04_openPage_00(state);
  state = w04_closePanel_01(state);
  state = w04_queueRender_02(state);
  state = w04_cancelRender_03(state);
  state = w04_updateScale_04(state);
  state = w04_setCursor_05(state);
  state = w04_syncSidebar_06(state);
  state = w04_collectVisible_07(state);
  state = w04_bindControl_08(state);
  state = w04_releaseControl_09(state);
  state = w04_resolveLabel_10(state);
  state = w04_formatBadge_11(state);
  return mountAnnotationCatalog(target, state);
}
