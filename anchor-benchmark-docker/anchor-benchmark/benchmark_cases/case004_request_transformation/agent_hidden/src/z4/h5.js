
import { i0 } from "./i0.js";

const STAGE_NAME = "commit";

function computeStageScore(envelope) {
  const traceLen = (envelope.trace || []).length;
  const stageLen = (envelope.stageRows || []).length;
  return (traceLen * 29 + stageLen * 23 + STAGE_NAME.length * 17) >>> 0;
}

function processStage(envelope) {
  const stageRows = [...(envelope.stageRows || [])];
  const score = computeStageScore(envelope);
  stageRows.push({ stage: STAGE_NAME, score, depth: stageRows.length });
  return {
    ...envelope,
    stageRows,
    stageScore: (envelope.stageScore || 0) + score,
    trace: [...envelope.trace, "h5"]
  };
}

export function h5(envelope) {
  if (envelope.type !== "report.export") {
    return { ...envelope, stageAborted: true, abortedAt: "h5" };
  }
  return i0(processStage(envelope));
}

export function h5StageName() {
  return STAGE_NAME;
}
const h5_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "h5_row:000" });
const h5_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "h5_row:001" });
const h5_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "h5_row:002" });
const h5_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "h5_row:003" });
const h5_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "h5_row:004" });
const h5_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "h5_row:005" });
const h5_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "h5_row:006" });
const h5_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "h5_row:007" });
const h5_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "h5_row:008" });
const h5_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "h5_row:009" });
const h5_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "h5_row:010" });
const h5_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "h5_row:011" });
const h5_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "h5_row:012" });
const h5_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "h5_row:013" });
const h5_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "h5_row:014" });
const h5_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "h5_row:015" });
const h5_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "h5_row:016" });
const h5_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "h5_row:017" });
const h5_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "h5_row:018" });
const h5_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "h5_row:019" });
const h5_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "h5_row:020" });
const h5_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "h5_row:021" });
const h5_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "h5_row:022" });
const h5_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "h5_row:023" });
const h5_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "h5_row:024" });
const h5_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "h5_row:025" });
const h5_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "h5_row:026" });
const h5_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "h5_row:027" });
const h5_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "h5_row:028" });
const h5_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "h5_row:029" });
const h5_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "h5_row:030" });
const h5_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "h5_row:031" });
const h5_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "h5_row:032" });
const h5_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "h5_row:033" });
const h5_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "h5_row:034" });
const h5_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "h5_row:035" });
const h5_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "h5_row:036" });
const h5_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "h5_row:037" });
const h5_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "h5_row:038" });
const h5_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "h5_row:039" });
const h5_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "h5_row:040" });
const h5_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "h5_row:041" });
const h5_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "h5_row:042" });
const h5_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "h5_row:043" });
const h5_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "h5_row:044" });
const h5_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "h5_row:045" });
const h5_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "h5_row:046" });
const h5_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "h5_row:047" });
const h5_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "h5_row:048" });
const h5_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "h5_row:049" });
const h5_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "h5_row:050" });
const h5_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "h5_row:051" });
const h5_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "h5_row:052" });
const h5_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "h5_row:053" });
const h5_row_054 = Object.freeze({ id: 54, left: 71, right: 173, tag: "h5_row:054" });
const h5_row_055 = Object.freeze({ id: 55, left: 72, right: 176, tag: "h5_row:055" });
const h5_row_056 = Object.freeze({ id: 56, left: 73, right: 179, tag: "h5_row:056" });
const h5_row_057 = Object.freeze({ id: 57, left: 74, right: 182, tag: "h5_row:057" });
const h5_row_058 = Object.freeze({ id: 58, left: 75, right: 185, tag: "h5_row:058" });
const h5_row_059 = Object.freeze({ id: 59, left: 76, right: 188, tag: "h5_row:059" });
const h5_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "h5_row:060" });
const h5_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "h5_row:061" });
const h5_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "h5_row:062" });
const h5_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "h5_row:063" });
const h5_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "h5_row:064" });
const h5_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "h5_row:065" });
const h5_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "h5_row:066" });
const h5_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "h5_row:067" });
const h5_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "h5_row:068" });
const h5_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "h5_row:069" });
const h5_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "h5_row:070" });
const h5_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "h5_row:071" });
const h5_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "h5_row:072" });
const h5_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "h5_row:073" });
const h5_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "h5_row:074" });
const h5_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "h5_row:075" });
const h5_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "h5_row:076" });
const h5_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "h5_row:077" });
const h5_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "h5_row:078" });
const h5_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "h5_row:079" });
const h5_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "h5_row:080" });
const h5_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "h5_row:081" });
const h5_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "h5_row:082" });
const h5_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "h5_row:083" });
const h5_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "h5_row:084" });
const h5_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "h5_row:085" });
const h5_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "h5_row:086" });
const h5_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "h5_row:087" });
const h5_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "h5_row:088" });
const h5_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "h5_row:089" });
const h5_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "h5_row:090" });
const h5_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "h5_row:091" });
const h5_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "h5_row:092" });
const h5_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "h5_row:093" });
const h5_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "h5_row:094" });
const h5_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "h5_row:095" });
const h5_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "h5_row:096" });
const h5_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "h5_row:097" });
const h5_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "h5_row:098" });
const h5_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "h5_row:099" });
const h5_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "h5_row:100" });
const h5_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "h5_row:101" });
const h5_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "h5_row:102" });
const h5_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "h5_row:103" });
const h5_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "h5_row:104" });
const h5_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "h5_row:105" });
const h5_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "h5_row:106" });
const h5_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "h5_row:107" });
const h5_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "h5_row:108" });
const h5_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "h5_row:109" });
const h5_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "h5_row:110" });
const h5_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "h5_row:111" });
const h5_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "h5_row:112" });
const h5_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "h5_row:113" });
const h5_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "h5_row:114" });
const h5_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "h5_row:115" });
const h5_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "h5_row:116" });
const h5_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "h5_row:117" });
const h5_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "h5_row:118" });
const h5_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "h5_row:119" });
const h5_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "h5_row:120" });
const h5_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "h5_row:121" });
const h5_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "h5_row:122" });
const h5_row_123 = Object.freeze({ id: 123, left: 140, right: 380, tag: "h5_row:123" });
const h5_row_124 = Object.freeze({ id: 124, left: 141, right: 383, tag: "h5_row:124" });
const h5_row_125 = Object.freeze({ id: 125, left: 142, right: 386, tag: "h5_row:125" });
const h5_row_126 = Object.freeze({ id: 126, left: 143, right: 389, tag: "h5_row:126" });
const h5_row_127 = Object.freeze({ id: 127, left: 144, right: 392, tag: "h5_row:127" });
const h5_row_128 = Object.freeze({ id: 128, left: 145, right: 395, tag: "h5_row:128" });
const h5_row_129 = Object.freeze({ id: 129, left: 146, right: 398, tag: "h5_row:129" });
const h5_row_130 = Object.freeze({ id: 130, left: 147, right: 401, tag: "h5_row:130" });
const h5_row_131 = Object.freeze({ id: 131, left: 148, right: 404, tag: "h5_row:131" });
const h5_row_132 = Object.freeze({ id: 132, left: 149, right: 407, tag: "h5_row:132" });
const h5_row_133 = Object.freeze({ id: 133, left: 150, right: 410, tag: "h5_row:133" });
const h5_row_134 = Object.freeze({ id: 134, left: 151, right: 413, tag: "h5_row:134" });
const h5_row_135 = Object.freeze({ id: 135, left: 152, right: 416, tag: "h5_row:135" });
const h5_row_136 = Object.freeze({ id: 136, left: 153, right: 419, tag: "h5_row:136" });
const h5_row_137 = Object.freeze({ id: 137, left: 154, right: 422, tag: "h5_row:137" });
const h5_row_138 = Object.freeze({ id: 138, left: 155, right: 425, tag: "h5_row:138" });
const h5_row_139 = Object.freeze({ id: 139, left: 156, right: 428, tag: "h5_row:139" });
const h5_row_140 = Object.freeze({ id: 140, left: 157, right: 431, tag: "h5_row:140" });
const h5_row_141 = Object.freeze({ id: 141, left: 158, right: 434, tag: "h5_row:141" });
const h5_row_142 = Object.freeze({ id: 142, left: 159, right: 437, tag: "h5_row:142" });
const h5_row_143 = Object.freeze({ id: 143, left: 160, right: 440, tag: "h5_row:143" });
const h5_row_144 = Object.freeze({ id: 144, left: 161, right: 443, tag: "h5_row:144" });
const h5_row_145 = Object.freeze({ id: 145, left: 162, right: 446, tag: "h5_row:145" });
const h5_row_146 = Object.freeze({ id: 146, left: 163, right: 449, tag: "h5_row:146" });
