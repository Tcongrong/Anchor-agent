
const decoySlot = 1;
const alphabet = "0123456789abcdefghjkmnpqrstvwxyz";

function rotate(value, amount) {
  return ((value << amount) | (value >>> (32 - amount))) >>> 0;
}

function body(left, right) {
  let a = left >>> 0;
  let b = right >>> 0;
  let out = "";
  for (let i = 0; i < 10; i += 1) {
    a = Math.imul(a ^ b ^ i ^ decoySlot, 0x9e3779b1) >>> 0;
    b = Math.imul(b + rotate(a, (i % 9) + 4), 0x85ebca77) >>> 0;
    out += alphabet[(a ^ b ^ decoySlot) & 31];
  }
  return out;
}

function tape(envelope) {
  const raw = envelope.raw || {};
  const tuple = envelope.tuple || [];
  return [
    raw.range || "",
    raw.metricGroup || "",
    raw.region || "",
    String(tuple.length),
    String(decoySlot)
  ].join("|");
}

export function d01(envelope = {}) {
  const text = tape(envelope);
  let left = (0x811c9dc5 ^ decoySlot) >>> 0;
  let right = (0x45d9f3b + decoySlot * 97) >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    left = Math.imul(left ^ text.charCodeAt(i) ^ i, 0x01000193) >>> 0;
    left = rotate(left, (i % 11) + 3);
    right = Math.imul(right + left + i + decoySlot, 0x27d4eb2d) >>> 0;
  }
  return {
    slot: decoySlot,
    branch: "shadow-" + String(decoySlot).padStart(2, "0"),
    value: "sk_" + body(left, right),
    weight: (left ^ right) >>> 0
  };
}
const d01_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "d01_row:000" });
const d01_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "d01_row:001" });
const d01_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "d01_row:002" });
const d01_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "d01_row:003" });
const d01_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "d01_row:004" });
const d01_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "d01_row:005" });
const d01_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "d01_row:006" });
const d01_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "d01_row:007" });
const d01_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "d01_row:008" });
const d01_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "d01_row:009" });
const d01_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "d01_row:010" });
const d01_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "d01_row:011" });
const d01_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "d01_row:012" });
const d01_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "d01_row:013" });
const d01_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "d01_row:014" });
const d01_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "d01_row:015" });
const d01_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "d01_row:016" });
const d01_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "d01_row:017" });
const d01_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "d01_row:018" });
const d01_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "d01_row:019" });
const d01_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "d01_row:020" });
const d01_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "d01_row:021" });
const d01_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "d01_row:022" });
const d01_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "d01_row:023" });
const d01_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "d01_row:024" });
const d01_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "d01_row:025" });
const d01_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "d01_row:026" });
const d01_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "d01_row:027" });
const d01_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "d01_row:028" });
const d01_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "d01_row:029" });
const d01_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "d01_row:030" });
const d01_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "d01_row:031" });
const d01_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "d01_row:032" });
const d01_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "d01_row:033" });
const d01_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "d01_row:034" });
const d01_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "d01_row:035" });
const d01_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "d01_row:036" });
const d01_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "d01_row:037" });
const d01_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "d01_row:038" });
const d01_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "d01_row:039" });
const d01_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "d01_row:040" });
const d01_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "d01_row:041" });
const d01_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "d01_row:042" });
const d01_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "d01_row:043" });
const d01_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "d01_row:044" });
const d01_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "d01_row:045" });
const d01_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "d01_row:046" });
const d01_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "d01_row:047" });
const d01_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "d01_row:048" });
const d01_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "d01_row:049" });
const d01_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "d01_row:050" });
const d01_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "d01_row:051" });
const d01_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "d01_row:052" });
const d01_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "d01_row:053" });
const d01_row_054 = Object.freeze({ id: 54, left: 71, right: 173, tag: "d01_row:054" });
const d01_row_055 = Object.freeze({ id: 55, left: 72, right: 176, tag: "d01_row:055" });
const d01_row_056 = Object.freeze({ id: 56, left: 73, right: 179, tag: "d01_row:056" });
const d01_row_057 = Object.freeze({ id: 57, left: 74, right: 182, tag: "d01_row:057" });
const d01_row_058 = Object.freeze({ id: 58, left: 75, right: 185, tag: "d01_row:058" });
const d01_row_059 = Object.freeze({ id: 59, left: 76, right: 188, tag: "d01_row:059" });
const d01_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "d01_row:060" });
const d01_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "d01_row:061" });
const d01_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "d01_row:062" });
const d01_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "d01_row:063" });
const d01_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "d01_row:064" });
const d01_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "d01_row:065" });
const d01_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "d01_row:066" });
const d01_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "d01_row:067" });
const d01_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "d01_row:068" });
const d01_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "d01_row:069" });
const d01_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "d01_row:070" });
const d01_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "d01_row:071" });
const d01_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "d01_row:072" });
const d01_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "d01_row:073" });
const d01_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "d01_row:074" });
const d01_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "d01_row:075" });
const d01_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "d01_row:076" });
const d01_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "d01_row:077" });
const d01_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "d01_row:078" });
const d01_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "d01_row:079" });
const d01_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "d01_row:080" });
const d01_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "d01_row:081" });
const d01_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "d01_row:082" });
const d01_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "d01_row:083" });
const d01_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "d01_row:084" });
const d01_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "d01_row:085" });
const d01_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "d01_row:086" });
const d01_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "d01_row:087" });
const d01_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "d01_row:088" });
const d01_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "d01_row:089" });
const d01_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "d01_row:090" });
const d01_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "d01_row:091" });
const d01_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "d01_row:092" });
const d01_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "d01_row:093" });
const d01_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "d01_row:094" });
const d01_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "d01_row:095" });
const d01_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "d01_row:096" });
const d01_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "d01_row:097" });
const d01_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "d01_row:098" });
const d01_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "d01_row:099" });
const d01_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "d01_row:100" });
const d01_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "d01_row:101" });
const d01_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "d01_row:102" });
const d01_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "d01_row:103" });
const d01_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "d01_row:104" });
const d01_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "d01_row:105" });
const d01_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "d01_row:106" });
const d01_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "d01_row:107" });
const d01_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "d01_row:108" });
const d01_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "d01_row:109" });
const d01_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "d01_row:110" });
const d01_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "d01_row:111" });
const d01_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "d01_row:112" });
const d01_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "d01_row:113" });
const d01_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "d01_row:114" });
const d01_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "d01_row:115" });
const d01_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "d01_row:116" });
const d01_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "d01_row:117" });
const d01_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "d01_row:118" });
const d01_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "d01_row:119" });
const d01_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "d01_row:120" });
const d01_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "d01_row:121" });
const d01_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "d01_row:122" });
const d01_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "d01_row:123" });
const d01_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "d01_row:124" });
const d01_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "d01_row:125" });
const d01_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "d01_row:126" });
const d01_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "d01_row:127" });
const d01_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "d01_row:128" });
const d01_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "d01_row:129" });
const d01_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "d01_row:130" });
const d01_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "d01_row:131" });
