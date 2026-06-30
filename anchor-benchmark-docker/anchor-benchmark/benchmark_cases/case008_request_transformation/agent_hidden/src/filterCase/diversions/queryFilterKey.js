export function buildQueryFilterKey(rules) {
  const source = [
    `s=${rules.status || "all"}`,
    `m=${Number(rules.minAmount || 0)}`,
    `o=${String(rules.owner || "_").toLowerCase()}`,
    `r=${String(rules.region || "all").toLowerCase()}`,
    `p=${String(rules.requestProfile || "standard").toLowerCase()}`,
    `a=${rules.agedOnly ? "1" : "0"}`
  ].join("&");

  let state = 0x345678;
  for (let i = 0; i < source.length; i += 1) {
    state ^= source.charCodeAt(i) << (i % 8);
    state = Math.imul(state, 1103515245) + 12345;
    state >>>= 0;
  }
  return `qf_${state.toString(36).slice(0, 7).padStart(7, "0")}`;
}
