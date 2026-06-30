export const tableRows = [
  { id: "INV-1042", account: "Northwind Studios", status: "open", owner: "maria", amount: 480, age: 12, region: "West" },
  { id: "INV-1043", account: "Helio Foods", status: "pending", owner: "jamal", amount: 1180, age: 21, region: "South" },
  { id: "INV-1044", account: "Cobalt Medical", status: "open", owner: "maria", amount: 260, age: 7, region: "East" },
  { id: "INV-1045", account: "Atlas Textiles", status: "closed", owner: "nora", amount: 920, age: 4, region: "West" },
  { id: "INV-1046", account: "Beacon Supply", status: "open", owner: "liam", amount: 310, age: 16, region: "Central" },
  { id: "INV-1047", account: "Vertex Labs", status: "pending", owner: "maria", amount: 230, age: 31, region: "East" },
  { id: "INV-1048", account: "Summit Retail", status: "open", owner: "maria", amount: 740, age: 9, region: "North" },
  { id: "INV-1049", account: "Dune Hardware", status: "closed", owner: "owen", amount: 150, age: 2, region: "South" },
  { id: "INV-1050", account: "Prairie Energy", status: "open", owner: "sana", amount: 680, age: 18, region: "Central" },
  { id: "INV-1051", account: "Keystone Transit", status: "pending", owner: "maria", amount: 390, age: 25, region: "West" },
  { id: "INV-1052", account: "Harbor Freight Co", status: "closed", owner: "jamal", amount: 540, age: 5, region: "North" },
  { id: "INV-1053", account: "Lumen Office", status: "open", owner: "maria", amount: 255, age: 14, region: "South" }
];

export function findRowsByRules(rules) {
  return tableRows.filter((row) => {
    const statusOk = rules.status === "all" || row.status === rules.status;
    const amountOk = row.amount >= rules.minAmount;
    const ownerOk = !rules.owner || row.owner.includes(rules.owner);
    const regionOk = rules.region === "all" || row.region.toLowerCase() === rules.region;
    const ageOk = !rules.agedOnly || row.age >= 14;
    return statusOk && amountOk && ownerOk && regionOk && ageOk;
  });
}
