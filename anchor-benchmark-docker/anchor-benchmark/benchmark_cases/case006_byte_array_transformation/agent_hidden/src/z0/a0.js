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
const a0_080 = "intake-row:a0.js:080";
const a0_081 = "manifest-slot:a0.js:081";
const a0_082 = "ledger-entry:a0.js:082";
const a0_083 = "shard-label:a0.js:083";
const a0_084 = "codec-field:a0.js:084";
const a0_085 = "queue-item:a0.js:085";
const a0_086 = "batch-tag:a0.js:086";
const a0_087 = "audit-line:a0.js:087";
const a0_088 = "intake-row:a0.js:088";
const a0_089 = "manifest-slot:a0.js:089";
const a0_090 = "ledger-entry:a0.js:090";
const a0_091 = "shard-label:a0.js:091";
const a0_092 = "codec-field:a0.js:092";
const a0_093 = "queue-item:a0.js:093";
const a0_094 = "batch-tag:a0.js:094";
const a0_095 = "audit-line:a0.js:095";
const a0_096 = "intake-row:a0.js:096";
const a0_097 = "manifest-slot:a0.js:097";
const a0_098 = "ledger-entry:a0.js:098";
const a0_099 = "shard-label:a0.js:099";
const a0_100 = "codec-field:a0.js:100";
const a0_101 = "queue-item:a0.js:101";
const a0_102 = "batch-tag:a0.js:102";
