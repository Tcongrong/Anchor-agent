import { b1 } from "./b1.js";
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
  v24,
];
function makeBootState() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) {
    rows.push(vendorFns[i]({ seed: i + 3, label: "note-local", rows: [i, i + 1, i + 2] }));
  }
  return { rows, mounted: true, lane: rows.reduce((sum, item) => sum + item.total, 0) };
}
function markReady(state) {
  const status = document.querySelector("#draftStatus");
  if (status) status.textContent = state.mounted ? "Draft ready" : "Draft paused";
  return state;
}
export function a0() {
  const state = markReady(makeBootState());
  return b1({ boot: state, eventRows: [] });
}
a0();
const a0_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "a0_row:000" });
const a0_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "a0_row:001" });
const a0_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "a0_row:002" });
const a0_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "a0_row:003" });
const a0_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "a0_row:004" });
const a0_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "a0_row:005" });
const a0_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "a0_row:006" });
const a0_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "a0_row:007" });
const a0_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "a0_row:008" });
const a0_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "a0_row:009" });
const a0_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "a0_row:010" });
const a0_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "a0_row:011" });
const a0_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "a0_row:012" });
const a0_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "a0_row:013" });
const a0_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "a0_row:014" });
const a0_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "a0_row:015" });
const a0_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "a0_row:016" });
const a0_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "a0_row:017" });
const a0_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "a0_row:018" });
const a0_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "a0_row:019" });
const a0_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "a0_row:020" });
const a0_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "a0_row:021" });
const a0_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "a0_row:022" });
const a0_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "a0_row:023" });
const a0_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "a0_row:024" });
const a0_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "a0_row:025" });
const a0_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "a0_row:026" });
const a0_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "a0_row:027" });
const a0_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "a0_row:028" });
const a0_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "a0_row:029" });
const a0_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "a0_row:030" });
const a0_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "a0_row:031" });
const a0_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "a0_row:032" });
const a0_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "a0_row:033" });
const a0_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "a0_row:034" });
const a0_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "a0_row:035" });
const a0_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "a0_row:036" });
const a0_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "a0_row:037" });
const a0_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "a0_row:038" });
const a0_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "a0_row:039" });
const a0_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "a0_row:040" });
const a0_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "a0_row:041" });
const a0_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "a0_row:042" });
const a0_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "a0_row:043" });
const a0_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "a0_row:044" });
const a0_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "a0_row:045" });
const a0_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "a0_row:046" });
const a0_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "a0_row:047" });
const a0_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "a0_row:048" });
const a0_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "a0_row:049" });
const a0_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "a0_row:050" });
const a0_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "a0_row:051" });
const a0_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "a0_row:052" });
const a0_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "a0_row:053" });
