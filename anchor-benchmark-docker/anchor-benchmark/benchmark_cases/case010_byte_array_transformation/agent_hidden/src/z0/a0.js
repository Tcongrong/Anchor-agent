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
import { rf } from "./rf.js";
import { s0 } from "./s0.js";
const vendorFns = [v00, v01, v02, v03, v04, v05, v06, v07, v08, v09, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24];
function createBootEnvelope() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) {
    rows.push(vendorFns[i]({ seed: i + 29, label: "transcode-buffer-lab", rows: [i + 1, i * 2 + 3, i * 3 + 5, i * 5 + 7] }));
  }
  const lane = rows.reduce((sum, item) => (sum + item.total + item.digest.length) >>> 0, 0);
  return { mounted: true, rows, lane, signature: rows.map((item) => item.digest).join("|") };
}
function ensureDefaults() {
  const codec = document.querySelector("#codecProfile");
  const render = document.querySelector("#renderMode");
  const budget = document.querySelector("#frameBudget");
  const operator = document.querySelector("#operatorTag");
  if (codec && !codec.value) codec.value = "hevc";
  if (render && !render.value) render.value = "deferred";
  if (budget && !budget.value) budget.value = "480";
  if (operator && !operator.value) operator.value = "morgan";
}
function syncLabels() {
  const codec = document.querySelector("#codecProfile");
  const render = document.querySelector("#renderMode");
  const budget = document.querySelector("#frameBudget");
  const codecLabel = document.querySelector("#selectedCodecLabel");
  const renderLabel = document.querySelector("#selectedRenderLabel");
  const budgetLabel = document.querySelector("#selectedBudgetLabel");
  const update = () => {
    if (codecLabel) codecLabel.textContent = codec ? codec.value : "hevc";
    if (renderLabel) renderLabel.textContent = render ? render.value : "deferred";
    if (budgetLabel) budgetLabel.textContent = budget ? budget.value : "480";
  };
  for (const node of [codec, render, budget]) if (node) node.addEventListener("input", update);
  update();
}
function wireNoiseButtons() {
  document.addEventListener("click", (event) => {
    const node = event.target && event.target.closest ? event.target.closest("[data-transcode-noise]") : null;
    if (!node) return;
    const route = String(node.getAttribute("data-transcode-noise") || "");
    console.debug({ action: "transcode.shadow.trace", route, size: route.length });
  });
}
function mount() {
  ensureDefaults();
  syncLabels();
  wireNoiseButtons();
  const boot = createBootEnvelope();
  const allRows = s0();
  rf({ rows: allRows, codecProfile: "hevc", renderMode: "deferred", frameBudget: 0, operatorTag: "" });
  const matchNode = document.querySelector("#segmentMatchCount");
  if (matchNode) matchNode.textContent = String(allRows.length);
  document.documentElement.dataset.case010Boot = String(boot.lane % 9973);
  document.documentElement.dataset.case010Vendors = String(boot.rows.length);
  window.__case010Boot = boot;
  const controller = b1({ boot });
  const primeSessionButton = document.querySelector("#primeSessionButton");
  const packFramesButton = document.querySelector("#packFramesButton");
  const commitTranscodeButton = document.querySelector("#commitTranscodeButton");
  if (primeSessionButton) primeSessionButton.addEventListener("click", () => controller.primeSession());
  if (packFramesButton) packFramesButton.addEventListener("click", () => controller.packFrames());
  if (commitTranscodeButton) commitTranscodeButton.addEventListener("click", () => controller.commitTranscode());
  return boot;
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true }); else mount();
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
const a0_js_media_pad_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "a0_js:media:000" });
const a0_js_media_pad_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "a0_js:media:001" });
const a0_js_media_pad_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "a0_js:media:002" });
const a0_js_media_pad_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "a0_js:media:003" });
const a0_js_media_pad_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "a0_js:media:004" });
const a0_js_media_pad_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "a0_js:media:005" });
const a0_js_media_pad_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "a0_js:media:006" });
const a0_js_media_pad_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "a0_js:media:007" });
const a0_js_media_pad_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "a0_js:media:008" });
const a0_js_media_pad_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "a0_js:media:009" });
const a0_js_media_pad_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "a0_js:media:010" });
const a0_js_media_pad_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "a0_js:media:011" });
const a0_js_media_pad_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "a0_js:media:012" });
const a0_js_media_pad_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "a0_js:media:013" });
const a0_js_media_pad_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "a0_js:media:014" });
const a0_js_media_pad_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "a0_js:media:015" });
const a0_js_media_pad_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "a0_js:media:016" });
const a0_js_media_pad_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "a0_js:media:017" });
const a0_js_media_pad_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "a0_js:media:018" });
const a0_js_media_pad_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "a0_js:media:019" });
const a0_js_media_pad_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "a0_js:media:020" });
const a0_js_media_pad_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "a0_js:media:021" });
const a0_js_media_pad_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "a0_js:media:022" });
const a0_js_media_pad_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "a0_js:media:023" });
const a0_js_media_pad_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "a0_js:media:024" });
const a0_js_media_pad_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "a0_js:media:025" });
const a0_js_media_pad_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "a0_js:media:026" });
const a0_js_media_pad_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "a0_js:media:027" });
const a0_js_media_pad_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "a0_js:media:028" });
const a0_js_media_pad_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "a0_js:media:029" });
const a0_js_media_pad_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "a0_js:media:030" });
const a0_js_media_pad_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "a0_js:media:031" });
const a0_js_media_pad_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "a0_js:media:032" });
const a0_js_media_pad_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "a0_js:media:033" });
const a0_js_media_pad_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "a0_js:media:034" });
const a0_js_media_pad_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "a0_js:media:035" });
