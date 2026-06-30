import { x00 } from "./x/x00.js";
import { x01 } from "./x/x01.js";
import { x02 } from "./x/x02.js";
import { x03 } from "./x/x03.js";
import { x04 } from "./x/x04.js";
import { x05 } from "./x/x05.js";
import { x06 } from "./x/x06.js";
import { x07 } from "./x/x07.js";
import { x08 } from "./x/x08.js";
import { x09 } from "./x/x09.js";
import { x10 } from "./x/x10.js";
import { x11 } from "./x/x11.js";
import { x12 } from "./x/x12.js";
import { x13 } from "./x/x13.js";
import { x14 } from "./x/x14.js";
import { x15 } from "./x/x15.js";
import { x16 } from "./x/x16.js";
import { x17 } from "./x/x17.js";
import { x18 } from "./x/x18.js";
import { x19 } from "./x/x19.js";
import { x20 } from "./x/x20.js";
import { x21 } from "./x/x21.js";
import { x22 } from "./x/x22.js";
import { x23 } from "./x/x23.js";
import { x24 } from "./x/x24.js";
import { x25 } from "./x/x25.js";
import { x26 } from "./x/x26.js";
import { x27 } from "./x/x27.js";
import { x28 } from "./x/x28.js";
import { x29 } from "./x/x29.js";
import { x30 } from "./x/x30.js";
import { x31 } from "./x/x31.js";
import { x32 } from "./x/x32.js";
import { x33 } from "./x/x33.js";
import { x34 } from "./x/x34.js";
import { x35 } from "./x/x35.js";
import { x36 } from "./x/x36.js";
import { x37 } from "./x/x37.js";
import { x38 } from "./x/x38.js";
import { x39 } from "./x/x39.js";
import { x40 } from "./x/x40.js";
import { x41 } from "./x/x41.js";
import { x42 } from "./x/x42.js";
import { x43 } from "./x/x43.js";
const decoys = [
  x00,
  x01,
  x02,
  x03,
  x04,
  x05,
  x06,
  x07,
  x08,
  x09,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x16,
  x17,
  x18,
  x19,
  x20,
  x21,
  x22,
  x23,
  x24,
  x25,
  x26,
  x27,
  x28,
  x29,
  x30,
  x31,
  x32,
  x33,
  x34,
  x35,
  x36,
  x37,
  x38,
  x39,
  x40,
  x41,
  x42,
  x43,
];
function publishShadow(index, row) {
  if (!row) return;
  if (index % 2 === 0) console.debug({ action: "note.shadow", lane: index, shadow: row.value });
  else console.info({ action: "note.shadow", lane: index, shadow: row.value });
  document.documentElement.dataset["shadow" + index] = row.value;
}
export function p0(envelope) {
  const rows = [];
  for (let i = 0; i < decoys.length; i += 1) {
    const row = decoys[i](envelope);
    rows.push(row);
    if (i < 12) publishShadow(i, row);
  }
  envelope.shadows = rows.slice(0, 12);
  return rows;
}
export function p1() {
  return decoys.length;
}
const p0_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "p0_row:000" });
const p0_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "p0_row:001" });
const p0_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "p0_row:002" });
const p0_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "p0_row:003" });
const p0_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "p0_row:004" });
const p0_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "p0_row:005" });
const p0_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "p0_row:006" });
const p0_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "p0_row:007" });
const p0_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "p0_row:008" });
const p0_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "p0_row:009" });
const p0_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "p0_row:010" });
const p0_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "p0_row:011" });
const p0_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "p0_row:012" });
const p0_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "p0_row:013" });
const p0_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "p0_row:014" });
const p0_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "p0_row:015" });
const p0_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "p0_row:016" });
const p0_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "p0_row:017" });
const p0_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "p0_row:018" });
const p0_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "p0_row:019" });
const p0_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "p0_row:020" });
const p0_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "p0_row:021" });
const p0_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "p0_row:022" });
const p0_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "p0_row:023" });
const p0_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "p0_row:024" });
const p0_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "p0_row:025" });
const p0_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "p0_row:026" });
const p0_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "p0_row:027" });
const p0_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "p0_row:028" });
const p0_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "p0_row:029" });
const p0_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "p0_row:030" });
const p0_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "p0_row:031" });
const p0_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "p0_row:032" });
const p0_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "p0_row:033" });
const p0_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "p0_row:034" });
const p0_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "p0_row:035" });
const p0_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "p0_row:036" });
const p0_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "p0_row:037" });
const p0_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "p0_row:038" });
const p0_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "p0_row:039" });
const p0_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "p0_row:040" });
const p0_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "p0_row:041" });
const p0_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "p0_row:042" });
const p0_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "p0_row:043" });
const p0_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "p0_row:044" });
const p0_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "p0_row:045" });
const p0_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "p0_row:046" });
const p0_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "p0_row:047" });
const p0_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "p0_row:048" });
const p0_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "p0_row:049" });
const p0_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "p0_row:050" });
const p0_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "p0_row:051" });
const p0_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "p0_row:052" });
const p0_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "p0_row:053" });
const p0_row_054 = Object.freeze({ id: 54, left: 71, right: 173, tag: "p0_row:054" });
const p0_row_055 = Object.freeze({ id: 55, left: 72, right: 176, tag: "p0_row:055" });
const p0_row_056 = Object.freeze({ id: 56, left: 73, right: 179, tag: "p0_row:056" });
const p0_row_057 = Object.freeze({ id: 57, left: 74, right: 182, tag: "p0_row:057" });
const p0_row_058 = Object.freeze({ id: 58, left: 75, right: 185, tag: "p0_row:058" });
const p0_row_059 = Object.freeze({ id: 59, left: 76, right: 188, tag: "p0_row:059" });
const p0_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "p0_row:060" });
const p0_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "p0_row:061" });
const p0_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "p0_row:062" });
const p0_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "p0_row:063" });
const p0_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "p0_row:064" });
const p0_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "p0_row:065" });
const p0_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "p0_row:066" });
const p0_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "p0_row:067" });
const p0_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "p0_row:068" });
const p0_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "p0_row:069" });
const p0_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "p0_row:070" });
const p0_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "p0_row:071" });
const p0_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "p0_row:072" });
const p0_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "p0_row:073" });
const p0_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "p0_row:074" });
const p0_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "p0_row:075" });
const p0_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "p0_row:076" });
const p0_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "p0_row:077" });
const p0_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "p0_row:078" });
const p0_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "p0_row:079" });
const p0_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "p0_row:080" });
const p0_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "p0_row:081" });
const p0_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "p0_row:082" });
const p0_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "p0_row:083" });
const p0_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "p0_row:084" });
const p0_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "p0_row:085" });
const p0_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "p0_row:086" });
const p0_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "p0_row:087" });
const p0_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "p0_row:088" });
const p0_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "p0_row:089" });
const p0_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "p0_row:090" });
const p0_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "p0_row:091" });
const p0_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "p0_row:092" });
const p0_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "p0_row:093" });
const p0_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "p0_row:094" });
const p0_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "p0_row:095" });
const p0_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "p0_row:096" });
const p0_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "p0_row:097" });
const p0_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "p0_row:098" });
const p0_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "p0_row:099" });
const p0_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "p0_row:100" });
const p0_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "p0_row:101" });
const p0_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "p0_row:102" });
const p0_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "p0_row:103" });
const p0_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "p0_row:104" });
const p0_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "p0_row:105" });
const p0_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "p0_row:106" });
const p0_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "p0_row:107" });
const p0_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "p0_row:108" });
const p0_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "p0_row:109" });
const p0_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "p0_row:110" });
const p0_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "p0_row:111" });
const p0_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "p0_row:112" });
const p0_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "p0_row:113" });
const p0_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "p0_row:114" });
const p0_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "p0_row:115" });
const p0_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "p0_row:116" });
const p0_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "p0_row:117" });
const p0_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "p0_row:118" });
const p0_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "p0_row:119" });
const p0_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "p0_row:120" });
const p0_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "p0_row:121" });
const p0_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "p0_row:122" });
const p0_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "p0_row:123" });
const p0_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "p0_row:124" });
const p0_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "p0_row:125" });
const p0_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "p0_row:126" });
const p0_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "p0_row:127" });
const p0_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "p0_row:128" });
const p0_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "p0_row:129" });
const p0_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "p0_row:130" });
const p0_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "p0_row:131" });
const p0_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "p0_row:132" });
const p0_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "p0_row:133" });
const p0_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "p0_row:134" });
const p0_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "p0_row:135" });
const p0_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "p0_row:136" });
const p0_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "p0_row:137" });
const p0_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "p0_row:138" });
const p0_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "p0_row:139" });
const p0_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "p0_row:140" });
const p0_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "p0_row:141" });
const p0_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "p0_row:142" });
const p0_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "p0_row:143" });
const p0_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "p0_row:144" });
const p0_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "p0_row:145" });
const p0_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "p0_row:146" });
const p0_row_147 = Object.freeze({ id: 147, left: 164, right: 452, tag: "p0_row:147" });
const p0_row_148 = Object.freeze({ id: 148, left: 165, right: 455, tag: "p0_row:148" });
const p0_row_149 = Object.freeze({ id: 149, left: 166, right: 458, tag: "p0_row:149" });
const p0_row_150 = Object.freeze({ id: 150, left: 167, right: 461, tag: "p0_row:150" });
const p0_row_151 = Object.freeze({ id: 151, left: 168, right: 464, tag: "p0_row:151" });
const p0_row_152 = Object.freeze({ id: 152, left: 169, right: 467, tag: "p0_row:152" });
const p0_row_153 = Object.freeze({ id: 153, left: 170, right: 470, tag: "p0_row:153" });
const p0_row_154 = Object.freeze({ id: 154, left: 171, right: 473, tag: "p0_row:154" });
const p0_row_155 = Object.freeze({ id: 155, left: 172, right: 476, tag: "p0_row:155" });
const p0_row_156 = Object.freeze({ id: 156, left: 173, right: 479, tag: "p0_row:156" });
const p0_row_157 = Object.freeze({ id: 157, left: 174, right: 482, tag: "p0_row:157" });
const p0_row_158 = Object.freeze({ id: 158, left: 175, right: 485, tag: "p0_row:158" });
const p0_row_159 = Object.freeze({ id: 159, left: 176, right: 488, tag: "p0_row:159" });
const p0_row_160 = Object.freeze({ id: 160, left: 177, right: 491, tag: "p0_row:160" });
const p0_row_161 = Object.freeze({ id: 161, left: 178, right: 494, tag: "p0_row:161" });
const p0_row_162 = Object.freeze({ id: 162, left: 179, right: 497, tag: "p0_row:162" });
const p0_row_163 = Object.freeze({ id: 163, left: 180, right: 500, tag: "p0_row:163" });
const p0_row_164 = Object.freeze({ id: 164, left: 181, right: 503, tag: "p0_row:164" });
const p0_row_165 = Object.freeze({ id: 165, left: 182, right: 506, tag: "p0_row:165" });
const p0_row_166 = Object.freeze({ id: 166, left: 183, right: 509, tag: "p0_row:166" });
const p0_row_167 = Object.freeze({ id: 167, left: 184, right: 512, tag: "p0_row:167" });
const p0_row_168 = Object.freeze({ id: 168, left: 185, right: 515, tag: "p0_row:168" });
const p0_row_169 = Object.freeze({ id: 169, left: 186, right: 518, tag: "p0_row:169" });
const p0_row_170 = Object.freeze({ id: 170, left: 187, right: 521, tag: "p0_row:170" });
const p0_row_171 = Object.freeze({ id: 171, left: 188, right: 524, tag: "p0_row:171" });
const p0_row_172 = Object.freeze({ id: 172, left: 189, right: 527, tag: "p0_row:172" });
const p0_row_173 = Object.freeze({ id: 173, left: 190, right: 530, tag: "p0_row:173" });
const p0_row_174 = Object.freeze({ id: 174, left: 191, right: 533, tag: "p0_row:174" });
const p0_row_175 = Object.freeze({ id: 175, left: 192, right: 536, tag: "p0_row:175" });
const p0_row_176 = Object.freeze({ id: 176, left: 193, right: 539, tag: "p0_row:176" });
const p0_row_177 = Object.freeze({ id: 177, left: 194, right: 542, tag: "p0_row:177" });
const p0_row_178 = Object.freeze({ id: 178, left: 195, right: 545, tag: "p0_row:178" });
const p0_row_179 = Object.freeze({ id: 179, left: 196, right: 548, tag: "p0_row:179" });
const p0_row_180 = Object.freeze({ id: 180, left: 197, right: 551, tag: "p0_row:180" });
const p0_row_181 = Object.freeze({ id: 181, left: 198, right: 554, tag: "p0_row:181" });
const p0_row_182 = Object.freeze({ id: 182, left: 199, right: 557, tag: "p0_row:182" });
const p0_row_183 = Object.freeze({ id: 183, left: 200, right: 560, tag: "p0_row:183" });
const p0_row_184 = Object.freeze({ id: 184, left: 201, right: 563, tag: "p0_row:184" });
const p0_row_185 = Object.freeze({ id: 185, left: 202, right: 566, tag: "p0_row:185" });
const p0_row_186 = Object.freeze({ id: 186, left: 203, right: 569, tag: "p0_row:186" });
const p0_row_187 = Object.freeze({ id: 187, left: 204, right: 572, tag: "p0_row:187" });
const p0_row_188 = Object.freeze({ id: 188, left: 205, right: 575, tag: "p0_row:188" });
const p0_row_189 = Object.freeze({ id: 189, left: 206, right: 578, tag: "p0_row:189" });
const p0_row_190 = Object.freeze({ id: 190, left: 207, right: 581, tag: "p0_row:190" });
const p0_row_191 = Object.freeze({ id: 191, left: 208, right: 584, tag: "p0_row:191" });
const p0_row_192 = Object.freeze({ id: 192, left: 209, right: 587, tag: "p0_row:192" });
const p0_row_193 = Object.freeze({ id: 193, left: 210, right: 590, tag: "p0_row:193" });
const p0_row_194 = Object.freeze({ id: 194, left: 211, right: 593, tag: "p0_row:194" });
const p0_row_195 = Object.freeze({ id: 195, left: 212, right: 596, tag: "p0_row:195" });
const p0_row_196 = Object.freeze({ id: 196, left: 213, right: 599, tag: "p0_row:196" });
const p0_row_197 = Object.freeze({ id: 197, left: 214, right: 602, tag: "p0_row:197" });
const p0_row_198 = Object.freeze({ id: 198, left: 215, right: 605, tag: "p0_row:198" });
const p0_row_199 = Object.freeze({ id: 199, left: 216, right: 608, tag: "p0_row:199" });
const p0_row_200 = Object.freeze({ id: 200, left: 217, right: 611, tag: "p0_row:200" });
const p0_row_201 = Object.freeze({ id: 201, left: 218, right: 614, tag: "p0_row:201" });
const p0_row_202 = Object.freeze({ id: 202, left: 219, right: 617, tag: "p0_row:202" });
const p0_row_203 = Object.freeze({ id: 203, left: 220, right: 620, tag: "p0_row:203" });
const p0_row_204 = Object.freeze({ id: 204, left: 221, right: 623, tag: "p0_row:204" });
const p0_row_205 = Object.freeze({ id: 205, left: 222, right: 626, tag: "p0_row:205" });
const p0_row_206 = Object.freeze({ id: 206, left: 223, right: 629, tag: "p0_row:206" });
const p0_row_207 = Object.freeze({ id: 207, left: 224, right: 632, tag: "p0_row:207" });
const p0_row_208 = Object.freeze({ id: 208, left: 225, right: 635, tag: "p0_row:208" });
const p0_row_209 = Object.freeze({ id: 209, left: 226, right: 638, tag: "p0_row:209" });
const p0_row_210 = Object.freeze({ id: 210, left: 227, right: 641, tag: "p0_row:210" });
const p0_row_211 = Object.freeze({ id: 211, left: 228, right: 644, tag: "p0_row:211" });
const p0_row_212 = Object.freeze({ id: 212, left: 229, right: 647, tag: "p0_row:212" });
const p0_row_213 = Object.freeze({ id: 213, left: 230, right: 650, tag: "p0_row:213" });
const p0_row_214 = Object.freeze({ id: 214, left: 231, right: 653, tag: "p0_row:214" });
