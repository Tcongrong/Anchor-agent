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
function collectBootSignals() {
  return {
    ua: String(navigator.userAgent || ""),
    pform: String(navigator.platform || ""),
    sw: Number(screen.width || 0),
    sh: Number(screen.height || 0),
    cd: Number(screen.colorDepth || 0),
    vendor: String(navigator.vendor || "")
  };
}
const bootSignalCache = collectBootSignals();
function bootVendors() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) {
    rows.push(vendorFns[i]({ seed: i + 17, label: "browser-fingerprint", rows: [i + 1, i * 2 + 3, i * 3 + 5] }));
  }
  return rows;
}
function paintBoot(rows) {
  const lane = rows.reduce((sum, row) => (sum + row.total + row.digest.length) >>> 0, 0);
  const queueState = document.querySelector("#queueState");
  const modeState = document.querySelector("#modeState");
  const wordState = document.querySelector("#wordState");
  if (queueState) queueState.textContent = "Ready";
  if (modeState) modeState.textContent = "Idle";
  if (wordState) wordState.textContent = bootSignalCache.pform || "—";
  document.documentElement.dataset.case007Boot = String(lane % 9973);
  document.documentElement.dataset.case007Vendors = String(rows.length);
  document.documentElement.dataset.case007BootSw = String(bootSignalCache.sw);
  document.documentElement.dataset.case007BootCd = String(bootSignalCache.cd);
  return { rows, lane, mounted: true };
}
export function a0() {
  const boot = paintBoot(bootVendors());
  return b1({ boot, bootSignals: bootSignalCache, trace: ["a0"], mounted: true });
}
a0();
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
const a0_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "a0:013" });
const a0_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "a0:014" });
const a0_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "a0:015" });
const a0_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "a0:016" });
const a0_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "a0:017" });
const a0_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "a0:018" });
const a0_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "a0:019" });
const a0_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "a0:020" });
const a0_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "a0:021" });
const a0_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "a0:022" });
const a0_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "a0:023" });
const a0_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "a0:024" });
const a0_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "a0:025" });
const a0_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "a0:026" });
const a0_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "a0:027" });
const a0_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "a0:028" });
const a0_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "a0:029" });
const a0_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "a0:030" });
const a0_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "a0:031" });
const a0_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "a0:032" });
const a0_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "a0:033" });
const a0_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "a0:034" });
const a0_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "a0:035" });
const a0_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "a0:036" });
const a0_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "a0:037" });
const a0_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "a0:038" });
const a0_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "a0:039" });
const a0_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "a0:040" });
const a0_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "a0:041" });
const a0_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "a0:042" });
