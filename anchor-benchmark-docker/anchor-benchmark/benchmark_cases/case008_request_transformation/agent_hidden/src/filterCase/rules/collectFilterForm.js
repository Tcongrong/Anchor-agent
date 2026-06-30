export function collectFilterForm(doc) {
  const statusNode = doc.querySelector("#statusFilter");
  const amountNode = doc.querySelector("#minAmount");
  const ownerNode = doc.querySelector("#ownerInput");
  const regionNode = doc.querySelector("#regionFilter");
  const profileNode = doc.querySelector("#requestProfile");
  const agedNode = doc.querySelector("#agedOnly");

  return {
    status: statusNode?.value || "all",
    minAmount: amountNode?.value || "",
    owner: ownerNode?.value || "",
    region: regionNode?.value || "all",
    requestProfile: profileNode?.value || "standard",
    agedOnly: Boolean(agedNode?.checked),
    collectedAtSlot: Math.floor(performance.now() / 25)
  };
}
