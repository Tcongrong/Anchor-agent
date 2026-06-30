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
    rows.push(vendorFns[i]({ seed: i + 11, label: "archive-intake", rows: seedRows }));
  }
  const lane = rows.reduce((sum, item) => (sum + item.total + item.digest.length) >>> 0, 0);
  return {
    mounted: true,
    rows,
    lane,
    signature: rows.map((item) => item.digest).join("|")
  };
}

function ensureCategoryOptions() {
  const select = document.querySelector("#categorySelect");
  if (!select) return 0;
  const existing = new Set(Array.from(select.options).map((option) => option.value));
  const wanted = ["finance", "legal", "operations", "research"];
  for (const value of wanted) {
    if (!existing.has(value)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value[0].toUpperCase() + value.slice(1);
      select.appendChild(option);
    }
  }
  return select.options.length;
}

function paintBootEnvelope(state) {
  const queueStatus = document.querySelector("#queueStatus");
  const manifestStatus = document.querySelector("#manifestStatus");
  const intakeQuota = document.querySelector("#intakeQuota");
  const intakeMode = document.querySelector("#intakeMode");
  if (queueStatus) queueStatus.textContent = "Ready";
  if (manifestStatus) manifestStatus.textContent = "Armed";
  if (intakeQuota) intakeQuota.textContent = String(60 + (state.lane % 30)) + "%";
  if (intakeMode) intakeMode.textContent = "Local";
  document.documentElement.dataset.case006Boot = String(state.lane % 9973);
  document.documentElement.dataset.case006Vendors = String(state.rows.length);
  return state;
}

export function a0() {
  ensureCategoryOptions();
  const state = paintBootEnvelope(createBootEnvelope());
  return b1({ boot: state, eventRows: [], mounted: true });
}

a0();
const a0_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "a0:080" });
const a0_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "a0:081" });
const a0_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "a0:082" });
const a0_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "a0:083" });
const a0_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "a0:084" });
const a0_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "a0:085" });
const a0_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "a0:086" });
const a0_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "a0:087" });
const a0_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "a0:088" });
const a0_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "a0:089" });
const a0_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "a0:090" });
const a0_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "a0:091" });
const a0_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "a0:092" });
const a0_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "a0:093" });
const a0_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "a0:094" });
const a0_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "a0:095" });
const a0_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "a0:096" });
const a0_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "a0:097" });
const a0_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "a0:098" });
const a0_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "a0:099" });
const a0_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "a0:100" });
const a0_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "a0:101" });
const a0_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "a0:102" });
