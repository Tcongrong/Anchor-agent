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
    makePanelRow("Method 4-0", "normalizes link and widget annotation descriptors row 0", "note"),
    makePanelRow("Path 4-1", "normalizes link and widget annotation descriptors row 1", "button"),
    makePanelRow("Headers 4-2", "normalizes link and widget annotation descriptors row 2", "field"),
    makePanelRow("Body 4-3", "normalizes link and widget annotation descriptors row 3", "status"),
    makePanelRow("Auth 4-4", "normalizes link and widget annotation descriptors row 4", "note"),
    makePanelRow("Query 4-5", "normalizes link and widget annotation descriptors row 5", "button"),
    makePanelRow("Format 4-6", "normalizes link and widget annotation descriptors row 6", "field"),
    makePanelRow("Retry 4-7", "normalizes link and widget annotation descriptors row 7", "status"),
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
export function w04_addHeader_00(state = {}) {
  const label = normalizeLabel(state.label || "addHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addHeader"));
  return { ...state, label, rows, moduleName, action: "addHeader" };
}
export function w04_removeHeader_01(state = {}) {
  const label = normalizeLabel(state.label || "removeHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "removeHeader"));
  return { ...state, label, rows, moduleName, action: "removeHeader" };
}
export function w04_encodeBody_02(state = {}) {
  const label = normalizeLabel(state.label || "encodeBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "encodeBody"));
  return { ...state, label, rows, moduleName, action: "encodeBody" };
}
export function w04_normalizeUrl_03(state = {}) {
  const label = normalizeLabel(state.label || "normalizeUrl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "normalizeUrl"));
  return { ...state, label, rows, moduleName, action: "normalizeUrl" };
}
export function w04_injectAuth_04(state = {}) {
  const label = normalizeLabel(state.label || "injectAuth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "injectAuth"));
  return { ...state, label, rows, moduleName, action: "injectAuth" };
}
export function w04_applyRateLimit_05(state = {}) {
  const label = normalizeLabel(state.label || "applyRateLimit");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "applyRateLimit"));
  return { ...state, label, rows, moduleName, action: "applyRateLimit" };
}
export function w04_validateSchema_06(state = {}) {
  const label = normalizeLabel(state.label || "validateSchema");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "validateSchema"));
  return { ...state, label, rows, moduleName, action: "validateSchema" };
}
export function w04_signPayload_07(state = {}) {
  const label = normalizeLabel(state.label || "signPayload");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "signPayload"));
  return { ...state, label, rows, moduleName, action: "signPayload" };
}
export function w04_stripCookies_08(state = {}) {
  const label = normalizeLabel(state.label || "stripCookies");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "stripCookies"));
  return { ...state, label, rows, moduleName, action: "stripCookies" };
}
export function w04_addCorrelation_09(state = {}) {
  const label = normalizeLabel(state.label || "addCorrelation");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addCorrelation"));
  return { ...state, label, rows, moduleName, action: "addCorrelation" };
}
export function w04_cacheControl_10(state = {}) {
  const label = normalizeLabel(state.label || "cacheControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cacheControl"));
  return { ...state, label, rows, moduleName, action: "cacheControl" };
}
export function w04_compressBody_11(state = {}) {
  const label = normalizeLabel(state.label || "compressBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "compressBody"));
  return { ...state, label, rows, moduleName, action: "compressBody" };
}
export function w04_addHeader_12(state = {}) {
  const label = normalizeLabel(state.label || "addHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addHeader"));
  return { ...state, label, rows, moduleName, action: "addHeader" };
}
export function w04_removeHeader_13(state = {}) {
  const label = normalizeLabel(state.label || "removeHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "removeHeader"));
  return { ...state, label, rows, moduleName, action: "removeHeader" };
}
export function w04_encodeBody_14(state = {}) {
  const label = normalizeLabel(state.label || "encodeBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "encodeBody"));
  return { ...state, label, rows, moduleName, action: "encodeBody" };
}
export function w04_normalizeUrl_15(state = {}) {
  const label = normalizeLabel(state.label || "normalizeUrl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "normalizeUrl"));
  return { ...state, label, rows, moduleName, action: "normalizeUrl" };
}
export function w04_injectAuth_16(state = {}) {
  const label = normalizeLabel(state.label || "injectAuth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "injectAuth"));
  return { ...state, label, rows, moduleName, action: "injectAuth" };
}
export function w04_applyRateLimit_17(state = {}) {
  const label = normalizeLabel(state.label || "applyRateLimit");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "applyRateLimit"));
  return { ...state, label, rows, moduleName, action: "applyRateLimit" };
}
export function w04_validateSchema_18(state = {}) {
  const label = normalizeLabel(state.label || "validateSchema");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "validateSchema"));
  return { ...state, label, rows, moduleName, action: "validateSchema" };
}
export function w04_signPayload_19(state = {}) {
  const label = normalizeLabel(state.label || "signPayload");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "signPayload"));
  return { ...state, label, rows, moduleName, action: "signPayload" };
}
export function w04_stripCookies_20(state = {}) {
  const label = normalizeLabel(state.label || "stripCookies");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "stripCookies"));
  return { ...state, label, rows, moduleName, action: "stripCookies" };
}
export function w04_addCorrelation_21(state = {}) {
  const label = normalizeLabel(state.label || "addCorrelation");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addCorrelation"));
  return { ...state, label, rows, moduleName, action: "addCorrelation" };
}
export function w04_cacheControl_22(state = {}) {
  const label = normalizeLabel(state.label || "cacheControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cacheControl"));
  return { ...state, label, rows, moduleName, action: "cacheControl" };
}
export function w04_compressBody_23(state = {}) {
  const label = normalizeLabel(state.label || "compressBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "compressBody"));
  return { ...state, label, rows, moduleName, action: "compressBody" };
}
export function w04_addHeader_24(state = {}) {
  const label = normalizeLabel(state.label || "addHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addHeader"));
  return { ...state, label, rows, moduleName, action: "addHeader" };
}
export function w04_removeHeader_25(state = {}) {
  const label = normalizeLabel(state.label || "removeHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "removeHeader"));
  return { ...state, label, rows, moduleName, action: "removeHeader" };
}
export function w04_encodeBody_26(state = {}) {
  const label = normalizeLabel(state.label || "encodeBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "encodeBody"));
  return { ...state, label, rows, moduleName, action: "encodeBody" };
}
export function w04_normalizeUrl_27(state = {}) {
  const label = normalizeLabel(state.label || "normalizeUrl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "normalizeUrl"));
  return { ...state, label, rows, moduleName, action: "normalizeUrl" };
}
export function w04_injectAuth_28(state = {}) {
  const label = normalizeLabel(state.label || "injectAuth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "injectAuth"));
  return { ...state, label, rows, moduleName, action: "injectAuth" };
}
export function w04_applyRateLimit_29(state = {}) {
  const label = normalizeLabel(state.label || "applyRateLimit");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "applyRateLimit"));
  return { ...state, label, rows, moduleName, action: "applyRateLimit" };
}
export function w04_validateSchema_30(state = {}) {
  const label = normalizeLabel(state.label || "validateSchema");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "validateSchema"));
  return { ...state, label, rows, moduleName, action: "validateSchema" };
}
export function w04_signPayload_31(state = {}) {
  const label = normalizeLabel(state.label || "signPayload");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "signPayload"));
  return { ...state, label, rows, moduleName, action: "signPayload" };
}
export function w04_stripCookies_32(state = {}) {
  const label = normalizeLabel(state.label || "stripCookies");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "stripCookies"));
  return { ...state, label, rows, moduleName, action: "stripCookies" };
}
export function w04_addCorrelation_33(state = {}) {
  const label = normalizeLabel(state.label || "addCorrelation");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addCorrelation"));
  return { ...state, label, rows, moduleName, action: "addCorrelation" };
}
export function w04_cacheControl_34(state = {}) {
  const label = normalizeLabel(state.label || "cacheControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cacheControl"));
  return { ...state, label, rows, moduleName, action: "cacheControl" };
}
export function w04_compressBody_35(state = {}) {
  const label = normalizeLabel(state.label || "compressBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "compressBody"));
  return { ...state, label, rows, moduleName, action: "compressBody" };
}
export function w04_addHeader_36(state = {}) {
  const label = normalizeLabel(state.label || "addHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addHeader"));
  return { ...state, label, rows, moduleName, action: "addHeader" };
}
export function w04_removeHeader_37(state = {}) {
  const label = normalizeLabel(state.label || "removeHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "removeHeader"));
  return { ...state, label, rows, moduleName, action: "removeHeader" };
}
export function w04_encodeBody_38(state = {}) {
  const label = normalizeLabel(state.label || "encodeBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "encodeBody"));
  return { ...state, label, rows, moduleName, action: "encodeBody" };
}
export function w04_normalizeUrl_39(state = {}) {
  const label = normalizeLabel(state.label || "normalizeUrl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "normalizeUrl"));
  return { ...state, label, rows, moduleName, action: "normalizeUrl" };
}
export function w04_injectAuth_40(state = {}) {
  const label = normalizeLabel(state.label || "injectAuth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "injectAuth"));
  return { ...state, label, rows, moduleName, action: "injectAuth" };
}
export function w04_applyRateLimit_41(state = {}) {
  const label = normalizeLabel(state.label || "applyRateLimit");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "applyRateLimit"));
  return { ...state, label, rows, moduleName, action: "applyRateLimit" };
}
export function w04_validateSchema_42(state = {}) {
  const label = normalizeLabel(state.label || "validateSchema");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "validateSchema"));
  return { ...state, label, rows, moduleName, action: "validateSchema" };
}
export function w04_signPayload_43(state = {}) {
  const label = normalizeLabel(state.label || "signPayload");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "signPayload"));
  return { ...state, label, rows, moduleName, action: "signPayload" };
}
export function w04_stripCookies_44(state = {}) {
  const label = normalizeLabel(state.label || "stripCookies");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "stripCookies"));
  return { ...state, label, rows, moduleName, action: "stripCookies" };
}
export function w04_addCorrelation_45(state = {}) {
  const label = normalizeLabel(state.label || "addCorrelation");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addCorrelation"));
  return { ...state, label, rows, moduleName, action: "addCorrelation" };
}
export function w04_cacheControl_46(state = {}) {
  const label = normalizeLabel(state.label || "cacheControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cacheControl"));
  return { ...state, label, rows, moduleName, action: "cacheControl" };
}
export function w04_compressBody_47(state = {}) {
  const label = normalizeLabel(state.label || "compressBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "compressBody"));
  return { ...state, label, rows, moduleName, action: "compressBody" };
}
export function w04_addHeader_48(state = {}) {
  const label = normalizeLabel(state.label || "addHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addHeader"));
  return { ...state, label, rows, moduleName, action: "addHeader" };
}
export function w04_removeHeader_49(state = {}) {
  const label = normalizeLabel(state.label || "removeHeader");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "removeHeader"));
  return { ...state, label, rows, moduleName, action: "removeHeader" };
}
export function w04_encodeBody_50(state = {}) {
  const label = normalizeLabel(state.label || "encodeBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "encodeBody"));
  return { ...state, label, rows, moduleName, action: "encodeBody" };
}
export function w04_normalizeUrl_51(state = {}) {
  const label = normalizeLabel(state.label || "normalizeUrl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "normalizeUrl"));
  return { ...state, label, rows, moduleName, action: "normalizeUrl" };
}
export function w04_injectAuth_52(state = {}) {
  const label = normalizeLabel(state.label || "injectAuth");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "injectAuth"));
  return { ...state, label, rows, moduleName, action: "injectAuth" };
}
export function w04_applyRateLimit_53(state = {}) {
  const label = normalizeLabel(state.label || "applyRateLimit");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "applyRateLimit"));
  return { ...state, label, rows, moduleName, action: "applyRateLimit" };
}
export function w04_validateSchema_54(state = {}) {
  const label = normalizeLabel(state.label || "validateSchema");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "validateSchema"));
  return { ...state, label, rows, moduleName, action: "validateSchema" };
}
export function w04_signPayload_55(state = {}) {
  const label = normalizeLabel(state.label || "signPayload");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "signPayload"));
  return { ...state, label, rows, moduleName, action: "signPayload" };
}
export function w04_stripCookies_56(state = {}) {
  const label = normalizeLabel(state.label || "stripCookies");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "stripCookies"));
  return { ...state, label, rows, moduleName, action: "stripCookies" };
}
export function w04_addCorrelation_57(state = {}) {
  const label = normalizeLabel(state.label || "addCorrelation");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "addCorrelation"));
  return { ...state, label, rows, moduleName, action: "addCorrelation" };
}
export function w04_cacheControl_58(state = {}) {
  const label = normalizeLabel(state.label || "cacheControl");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "cacheControl"));
  return { ...state, label, rows, moduleName, action: "cacheControl" };
}
export function w04_compressBody_59(state = {}) {
  const label = normalizeLabel(state.label || "compressBody");
  const rows = Array.isArray(state.rows) ? state.rows.slice() : [];
  rows.push(makePanelRow(label, modulePurpose, "compressBody"));
  return { ...state, label, rows, moduleName, action: "compressBody" };
}
export function runAnnotationCatalog(target, source = {}) {
  let state = { rows: source.rows || [], label: source.label || moduleName };
  state = w04_addHeader_00(state);
  state = w04_removeHeader_01(state);
  state = w04_encodeBody_02(state);
  state = w04_normalizeUrl_03(state);
  state = w04_injectAuth_04(state);
  state = w04_applyRateLimit_05(state);
  state = w04_validateSchema_06(state);
  state = w04_signPayload_07(state);
  state = w04_stripCookies_08(state);
  state = w04_addCorrelation_09(state);
  state = w04_cacheControl_10(state);
  state = w04_compressBody_11(state);
  return mountAnnotationCatalog(target, state);
}
