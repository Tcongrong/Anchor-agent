import { v00 } from "./v/v00.js";
import { v01 } from "./v/v01.js";
import { v02 } from "./v/v02.js";
import { v03 } from "./v/v03.js";
import { v04 } from "./v/v04.js";
import { v05 } from "./v/v05.js";
import { v06 } from "./v/v06.js";
import { v07 } from "./v/v07.js";
import { v08 } from "./v/v08.js";
import { v09 } from "./v/v09.js";
import { v10 } from "./v/v10.js";
import { v11 } from "./v/v11.js";
import { v12 } from "./v/v12.js";
import { v13 } from "./v/v13.js";
import { v14 } from "./v/v14.js";
import { v15 } from "./v/v15.js";
import { v16 } from "./v/v16.js";
import { v17 } from "./v/v17.js";
import { v18 } from "./v/v18.js";
import { v19 } from "./v/v19.js";
import { v20 } from "./v/v20.js";
import { v21 } from "./v/v21.js";
import { v22 } from "./v/v22.js";
import { v23 } from "./v/v23.js";
import { v24 } from "./v/v24.js";
import { b1 } from "./b1.js";
const vendorFns = [v00, v01, v02, v03, v04, v05, v06, v07, v08, v09, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24];
function createBootEnvelope() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) {
    const seedRows = [i + 1, i * 2 + 3, i * 3 + 5, i * 5 + 7];
    rows.push(vendorFns[i]({ seed: i + 19, label: "reservation-signer", rows: seedRows }));
  }
  const lane = rows.reduce((sum, item) => (sum + item.total + item.digest.length) >>> 0, 0);
  return { mounted: true, rows, lane, signature: rows.map((item) => item.digest).join("|") };
}
function ensureDefaults() {
  const ref = document.querySelector("#requestRef");
  const win = document.querySelector("#windowSelect");
  const tier = document.querySelector("#tierSelect");
  if (ref && !ref.value) ref.value = "RSV-2026-0618";
  if (win && !win.value) win.value = "w-1430";
  if (tier && !tier.value) tier.value = "standard";
}
function syncLabels() {
  const ref = document.querySelector("#requestRef");
  const win = document.querySelector("#windowSelect");
  const tier = document.querySelector("#tierSelect");
  const refLabel = document.querySelector("#selectedRefLabel");
  const winLabel = document.querySelector("#selectedWindowLabel");
  const tierLabel = document.querySelector("#selectedTierLabel");
  const update = () => {
    if (refLabel) refLabel.textContent = ref ? ref.value : "RSV-2026-0618";
    if (winLabel) winLabel.textContent = win ? win.value : "w-1430";
    if (tierLabel) tierLabel.textContent = tier ? tier.value : "standard";
  };
  for (const node of [ref, win, tier]) if (node) node.addEventListener("input", update);
  update();
}
function reflectArmed(armed) {
  const status = document.querySelector("#routeStatus");
  if (status) status.textContent = armed ? "Armed" : "Idle";
  document.documentElement.dataset.case009Armed = armed ? "1" : "0";
}
function mount() {
  ensureDefaults();
  syncLabels();
  const boot = createBootEnvelope();
  document.documentElement.dataset.case009Boot = String(boot.rows.length);
  document.documentElement.dataset.case009Lane = String(boot.lane);
  window.__case009Boot = boot;
  const controller = b1({ boot });
  const armButton = document.querySelector("#armButton");
  const commitButton = document.querySelector("#commitButton");
  if (armButton) armButton.addEventListener("click", () => reflectArmed(controller.arm()));
  if (commitButton) commitButton.addEventListener("click", () => controller.commit());
  return boot;
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
  mount();
}
export { mount };
const a0_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "a0:000" });
const a0_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "a0:001" });
const a0_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "a0:002" });
const a0_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "a0:003" });
const a0_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "a0:004" });
const a0_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "a0:005" });
const a0_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "a0:006" });
const a0_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "a0:007" });
const a0_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "a0:008" });
const a0_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "a0:009" });
const a0_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "a0:010" });
const a0_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "a0:011" });
const a0_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "a0:012" });
const a0_fillpad_000 = Object.freeze({ id: 0, a: 1, b: 3, tag: "a0:fill:0" });
const a0_fillpad_001 = Object.freeze({ id: 1, a: 8, b: 16, tag: "a0:fill:1" });
const a0_fillpad_002 = Object.freeze({ id: 2, a: 15, b: 29, tag: "a0:fill:2" });
const a0_fillpad_003 = Object.freeze({ id: 3, a: 22, b: 42, tag: "a0:fill:3" });
const a0_fillpad_004 = Object.freeze({ id: 4, a: 29, b: 55, tag: "a0:fill:4" });
const a0_fillpad_005 = Object.freeze({ id: 5, a: 36, b: 68, tag: "a0:fill:5" });
const a0_fillpad_006 = Object.freeze({ id: 6, a: 43, b: 81, tag: "a0:fill:6" });
const a0_fillpad_007 = Object.freeze({ id: 7, a: 50, b: 94, tag: "a0:fill:7" });
const a0_fillpad_008 = Object.freeze({ id: 8, a: 57, b: 107, tag: "a0:fill:8" });
const a0_fillpad_009 = Object.freeze({ id: 9, a: 64, b: 120, tag: "a0:fill:9" });
const a0_fillpad_010 = Object.freeze({ id: 10, a: 71, b: 133, tag: "a0:fill:10" });
const a0_fillpad_011 = Object.freeze({ id: 11, a: 78, b: 146, tag: "a0:fill:11" });
const a0_fillpad_012 = Object.freeze({ id: 12, a: 85, b: 159, tag: "a0:fill:12" });
const a0_fillpad_013 = Object.freeze({ id: 13, a: 92, b: 172, tag: "a0:fill:13" });
const a0_fillpad_014 = Object.freeze({ id: 14, a: 99, b: 185, tag: "a0:fill:14" });
const a0_fillpad_015 = Object.freeze({ id: 15, a: 106, b: 198, tag: "a0:fill:15" });
const a0_fillpad_016 = Object.freeze({ id: 16, a: 113, b: 211, tag: "a0:fill:16" });
const a0_fillpad_017 = Object.freeze({ id: 17, a: 120, b: 224, tag: "a0:fill:17" });
const a0_fillpad_018 = Object.freeze({ id: 18, a: 127, b: 237, tag: "a0:fill:18" });
const a0_fillpad_019 = Object.freeze({ id: 19, a: 134, b: 250, tag: "a0:fill:19" });
const a0_fillpad_020 = Object.freeze({ id: 20, a: 141, b: 263, tag: "a0:fill:20" });
const a0_fillpad_021 = Object.freeze({ id: 21, a: 148, b: 276, tag: "a0:fill:21" });
const a0_fillpad_022 = Object.freeze({ id: 22, a: 155, b: 289, tag: "a0:fill:22" });
