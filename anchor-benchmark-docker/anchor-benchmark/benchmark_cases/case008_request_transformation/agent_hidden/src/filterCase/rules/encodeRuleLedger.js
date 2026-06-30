export function encodeRuleLedger(rules, visual, context) {
  const matched = visual.visibleRows;
  const rowAmountTotal = matched.reduce((sum, row) => sum + row.amount, 0);
  const rowAgeTotal = matched.reduce((sum, row) => sum + row.age, 0);
  const ownerSpread = [...new Set(matched.map((row) => row.owner))].sort().join(",");
  const statusSpread = [...new Set(matched.map((row) => row.status))].sort().join(",");

  const rows = [
    makeCell("action", context.action, 3),
    makeCell("status", rules.status, 13),
    makeCell("amount:min", String(rules.minAmount), 17),
    makeCell("amount:band", rules.amountBand, 19),
    makeCell("owner:text", rules.owner || "_", 23),
    makeCell("owner:flag", rules.hasOwner ? "yes" : "no", 29),
    makeCell("region", rules.region, 30),
    makeCell("request:profile", rules.requestProfile, 32),
    makeCell("request:aged", rules.agedOnly ? "yes" : "no", 34),
    makeCell("request:lane", rules.lane, 36),
    makeCell("visible:count", String(matched.length), 31),
    makeCell("visible:hidden", String(visual.hiddenRows), 37),
    makeCell("visible:amount", String(rowAmountTotal), 41),
    makeCell("visible:age", String(rowAgeTotal), 43),
    makeCell("spread:owner", ownerSpread || "_", 47),
    makeCell("spread:status", statusSpread || "_", 53),
    makeCell("runtime:layout", context.layoutMode || "compact", 57),
    makeCell("page:number", String(context.page.page), 59),
    makeCell("query:shadow", context.queryKey, 61)
  ];

  matched.forEach((row, index) => {
    rows.push(makeCell(`row:${index}:id`, row.id, 67 + index));
    rows.push(makeCell(`row:${index}:amount`, String(row.amount), 71 + index));
    rows.push(makeCell(`row:${index}:owner`, row.owner, 73 + index));
  });

  return {
    version: 2,
    family: "receivable-filter-ledger",
    normalized: { ...rules },
    rows,
    rowIds: matched.map((row) => row.id),
    page: context.page,
    totals: {
      visible: matched.length,
      amount: rowAmountTotal,
      age: rowAgeTotal
    }
  };
}

function makeCell(key, value, weight) {
  return {
    key,
    value: String(value),
    weight,
    bytesHint: `${key.length}:${String(value).length}:${weight}`
  };
}
