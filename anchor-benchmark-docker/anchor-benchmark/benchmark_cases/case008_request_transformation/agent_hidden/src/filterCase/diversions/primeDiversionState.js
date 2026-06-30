import { buildQueryFilterKey } from "./queryFilterKey.js";
import { saveColumnLayoutKey } from "./columnLayoutKey.js";
import { foldAmountBucket } from "./amountBucketFold.js";

export function primeDiversionState(doc) {
  const marker = doc.querySelector("#shadowMarker");
  const initialKey = buildQueryFilterKey({ status: "all", minAmount: 0, owner: "" });
  const layout = saveColumnLayoutKey(["invoice", "status", "owner", "amount"]);
  const amountFold = foldAmountBucket([150, 260, 390, 480, 740]);
  if (marker) marker.textContent = `${initialKey}:${layout.mode}:${amountFold}`;
}
