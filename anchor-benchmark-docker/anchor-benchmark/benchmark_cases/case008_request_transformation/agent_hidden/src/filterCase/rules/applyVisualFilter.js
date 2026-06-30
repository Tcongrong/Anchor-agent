import { tableRows, findRowsByRules } from "./tableRows.js";
import { foldRowGroupHash } from "../diversions/rowGroupHash.js";
import { foldAmountBucket } from "../diversions/amountBucketFold.js";

export function renderInitialRows(doc = document) {
  const body = doc.querySelector("#invoiceRows");
  if (!body) return;

  body.replaceChildren(...tableRows.map((row) => createRowNode(doc, row)));
  updateCounters(doc, tableRows.length);
}

export function applyVisualFilter(doc, rules) {
  const matched = findRowsByRules(rules);
  const matchedIds = new Set(matched.map((row) => row.id));
  const body = doc.querySelector("#invoiceRows");

  for (const row of body?.querySelectorAll("tr[data-invoice]") || []) {
    row.hidden = !matchedIds.has(row.dataset.invoice);
  }

  renderBadges(doc, rules, matched);
  updateCounters(doc, matched.length);

  const shadow = doc.querySelector("#shadowMarker");
  if (shadow) {
    shadow.textContent = `${foldRowGroupHash(matched)}:${foldAmountBucket(matched.map((row) => row.amount))}`;
  }

  return {
    visibleRows: matched,
    totalRows: tableRows.length,
    hiddenRows: tableRows.length - matched.length
  };
}

export function clearVisualFilter(doc) {
  for (const row of doc.querySelectorAll("tr[data-invoice]")) {
    row.hidden = false;
  }
  renderBadges(doc, {
    status: "all",
    minAmount: 0,
    owner: "",
    region: "all",
    requestProfile: "standard",
    agedOnly: false
  }, tableRows);
  updateCounters(doc, tableRows.length);
}

function createRowNode(doc, row) {
  const tr = doc.createElement("tr");
  tr.dataset.invoice = row.id;
  tr.innerHTML = `
    <td>${escapeHtml(row.id)}</td>
    <td>${escapeHtml(row.account)}</td>
    <td><span class="status-pill ${row.status}">${escapeHtml(row.status)}</span></td>
    <td>${escapeHtml(row.owner)}</td>
    <td class="money">$${row.amount.toLocaleString("en-US")}</td>
    <td>${row.age} days</td>
    <td>${escapeHtml(row.region)}</td>
  `;
  return tr;
}

function renderBadges(doc, rules, matched) {
  const node = doc.querySelector("#filterBadges");
  if (!node) return;

  const badges = [];
  if (rules.status !== "all") badges.push({ text: `status:${rules.status}`, className: rules.status });
  if (rules.minAmount > 0) badges.push({ text: `min:$${rules.minAmount}`, className: "" });
  if (rules.owner) badges.push({ text: `owner:${rules.owner}`, className: "open" });
  if (rules.region !== "all") badges.push({ text: `region:${rules.region}`, className: "" });
  if (rules.agedOnly) badges.push({ text: "aged:yes", className: "pending" });
  badges.push({ text: `profile:${rules.requestProfile}`, className: "" });
  badges.push({ text: `matched:${matched.length}`, className: "" });

  node.replaceChildren(...badges.map((badge) => {
    const el = doc.createElement("span");
    el.className = `badge ${badge.className}`.trim();
    el.textContent = badge.text;
    return el;
  }));
}

function updateCounters(doc, count) {
  const visible = doc.querySelector("#visibleCount");
  if (visible) visible.textContent = String(count);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
