export function composeReceivablesSearchBody(envelope) {
  const rules = envelope.normalized || {};
  const totals = envelope.totals || {};
  const requestShape = selectRequestShape(rules, totals);
  const criteria = projectCriteria(rules, envelope.rowIds || []);
  const fields = buildFieldProjection(envelope.rows || [], requestShape);

  return {
    method: "POST",
    endpoint: "/api/receivables/search",
    mode: requestShape.mode,
    profile: rules.requestProfile || "standard",
    stage: {
      ticket: rules.stageTicket || "",
      profile: rules.stagedProfile || "",
      visibleCount: Number(rules.stagedVisibleCount || 0)
    },
    body: {
      filters: criteria,
      projection: fields,
      page: {
        number: Number(envelope.page?.page || 1),
        size: requestShape.pageSize
      },
      sort: requestShape.sort,
      includeTotals: true,
      hydration: envelope.hydration || {},
      matched: {
        rowIds: [...(envelope.rowIds || [])],
        count: Number(totals.visible || 0),
        amount: Number(totals.amount || 0)
      }
    }
  };
}

const ledgerExportTable = Object.freeze([composeReceivablesSearchBody]);

export default ledgerExportTable;

function selectRequestShape(rules, totals) {
  const mode = rules.requestProfile === "audit" || rules.amountBand === "enterprise" || Number(totals.amount || 0) > 4000
    ? "receivables-review"
    : rules.requestProfile === "escalation"
      ? "receivables-escalation"
    : "receivables-standard";

  return {
    mode,
    pageSize: mode === "receivables-standard" ? 50 : 25,
    sort: [
      { field: "amount", direction: "desc" },
      { field: rules.hasOwner ? "owner" : "age", direction: "asc" }
    ]
  };
}

function projectCriteria(rules, rowIds) {
  const filters = [];
  if (rules.status && rules.status !== "all") {
    filters.push({ field: "status", op: "eq", value: rules.status });
  }
  if (Number(rules.minAmount || 0) > 0) {
    filters.push({ field: "amount", op: "gte", value: Number(rules.minAmount) });
  }
  if (rules.owner) {
    filters.push({ field: "owner", op: "contains", value: rules.owner });
  }
  if (rules.region && rules.region !== "all") {
    filters.push({ field: "region", op: "eq", value: rules.region });
  }
  if (rules.agedOnly) {
    filters.push({ field: "age", op: "gte", value: 14 });
  }

  filters.push({
    field: "invoice_id",
    op: "in",
    value: rowIds.slice(0, 12)
  });

  return filters;
}

function buildFieldProjection(rows, requestShape) {
  const fields = new Set(["invoice", "account", "status", "owner", "amount", "age"]);
  for (const row of rows) {
    const key = String(row?.key || "");
    if (key.startsWith("spread:")) fields.add("region");
    if (key === "visible:amount") fields.add("amount_total");
  }
  if (requestShape.mode === "receivables-review") fields.add("review_queue");
  if (requestShape.mode === "receivables-escalation") fields.add("escalation_owner");
  return [...fields];
}
