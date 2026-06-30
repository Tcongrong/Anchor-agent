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
const vendorFns = [
  v00,
  v01,
  v02,
  v03,
  v04,
  v05,
  v06,
  v07,
  v08,
  v09,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24
];
function createBootEnvelope() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) {
    const seedRows = [i + 1, i * 2 + 3, i * 3 + 5, i * 5 + 7];
    rows.push(vendorFns[i]({ seed: i + 19, label: "reservation-planner", rows: seedRows }));
  }
  const lane = rows.reduce((sum, item) => (sum + item.total + item.digest.length) >>> 0, 0);
  return {
    mounted: true,
    rows,
    lane,
    signature: rows.map((item) => item.digest).join("|")
  };
}
function ensureDefaults() {
  const date = document.querySelector("#reserveDate");
  const time = document.querySelector("#reserveWindow");
  const service = document.querySelector("#reserveService");
  const channel = document.querySelector("#reserveChannel");
  if (date && !date.value) date.value = "2026-06-18";
  if (time && !time.value) time.value = "14:30";
  if (service && !service.value) service.value = "consultation";
  if (channel && !channel.value) channel.value = "web";
}
function wireSlotButtons() {
  const time = document.querySelector("#reserveWindow");
  const label = document.querySelector("#selectedTimeLabel");
  for (const node of document.querySelectorAll("[data-slot-time]")) {
    node.addEventListener("click", () => {
      if (time) time.value = node.getAttribute("data-slot-time") || "14:30";
      if (label) label.textContent = time ? time.value : "14:30";
    });
  }
}
function syncLabels() {
  const date = document.querySelector("#reserveDate");
  const time = document.querySelector("#reserveWindow");
  const service = document.querySelector("#reserveService");
  const dateLabel = document.querySelector("#selectedDateLabel");
  const timeLabel = document.querySelector("#selectedTimeLabel");
  const serviceLabel = document.querySelector("#selectedServiceLabel");
  const update = () => {
    if (dateLabel) dateLabel.textContent = date ? date.value : "2026-06-18";
    if (timeLabel) timeLabel.textContent = time ? time.value : "14:30";
    if (serviceLabel) serviceLabel.textContent = service ? service.value : "consultation";
  };
  for (const node of [date, time, service]) if (node) node.addEventListener("change", update);
  update();
}
function mount() {
  ensureDefaults();
  syncLabels();
  wireSlotButtons();
  const boot = createBootEnvelope();
  document.documentElement.dataset.case009Boot = String(boot.rows.length);
  document.documentElement.dataset.case009Lane = String(boot.lane);
  window.__case009Boot = boot;
  b1({ boot, eventRows: [], mounted: true });
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
