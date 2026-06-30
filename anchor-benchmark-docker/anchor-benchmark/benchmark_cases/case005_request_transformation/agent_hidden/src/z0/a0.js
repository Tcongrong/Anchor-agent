
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
  v24
];
function makeBootState() {
  const rows = [];
  for (let i = 0; i < vendorFns.length; i += 1) rows.push(vendorFns[i]({ seed: i + 5, label: "query-local", rows: [i, i + 2, i + 5, i + 9] }));
  return { rows, mounted: true, lane: rows.reduce((sum, item) => sum + item.total, 0), signature: rows.map((item) => item.digest).join("|") };
}
function paintBootState(state) {
  const status = document.querySelector("#queryStatus");
  const register = document.querySelector("#queryRegister");
  const lane = document.querySelector("#queryLane");
  if (status) status.textContent = state.mounted ? "Ready" : "Paused";
  if (register) register.textContent = "Register armed";
  if (lane) lane.textContent = "Lane " + String(state.lane % 97);
  document.documentElement.dataset.queryBoot = String(state.lane % 9973);
  return state;
}
export function a0() {
  const state = paintBootState(makeBootState());
  return b1({ boot: state, eventRows: [], mounted: true });
}
a0();
const a0_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "a0:074" });
const a0_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "a0:075" });
const a0_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "a0:076" });
const a0_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "a0:077" });
const a0_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "a0:078" });
const a0_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "a0:079" });
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
const a0_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "a0:103" });
const a0_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "a0:104" });
const a0_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "a0:105" });
const a0_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "a0:106" });
const a0_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "a0:107" });
const a0_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "a0:108" });
const a0_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "a0:109" });
const a0_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "a0:110" });
const a0_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "a0:111" });
const a0_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "a0:112" });
const a0_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "a0:113" });
const a0_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "a0:114" });
const a0_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "a0:115" });
const a0_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "a0:116" });
const a0_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "a0:117" });
const a0_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "a0:118" });
const a0_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "a0:119" });
const a0_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "a0:120" });
const a0_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "a0:121" });
const a0_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "a0:122" });
const a0_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "a0:123" });
const a0_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "a0:124" });
const a0_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "a0:125" });
const a0_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "a0:126" });
const a0_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "a0:127" });
const a0_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "a0:128" });
const a0_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "a0:129" });
const a0_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "a0:130" });
const a0_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "a0:131" });
const a0_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "a0:132" });
const a0_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "a0:133" });
const a0_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "a0:134" });
const a0_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "a0:135" });
const a0_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "a0:136" });
const a0_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "a0:137" });
const a0_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "a0:138" });
const a0_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "a0:139" });
