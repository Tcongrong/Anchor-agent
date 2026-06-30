const allowedStatuses = new Set(["all", "open", "pending", "closed"]);
const allowedRegions = new Set(["all", "north", "south", "east", "west", "central"]);
const allowedProfiles = new Set(["standard", "audit", "escalation"]);

export function normalizeFilterRules(raw) {
  const status = allowedStatuses.has(raw.status) ? raw.status : "all";
  const region = allowedRegions.has(raw.region) ? raw.region : "all";
  const requestProfile = allowedProfiles.has(raw.requestProfile) ? raw.requestProfile : "standard";
  const amount = Number.parseInt(String(raw.minAmount || "0"), 10);
  const minAmount = Number.isFinite(amount) && amount > 0 ? amount : 0;
  const owner = String(raw.owner || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .slice(0, 32);

  return {
    status,
    minAmount,
    owner,
    region,
    requestProfile,
    agedOnly: Boolean(raw.agedOnly),
    hasOwner: owner.length > 0,
    amountBand: minAmount >= 1000 ? "enterprise" : minAmount >= 250 ? "review" : "floor",
    lane: `${requestProfile}:${region}:${raw.agedOnly ? "aged" : "all"}`
  };
}
