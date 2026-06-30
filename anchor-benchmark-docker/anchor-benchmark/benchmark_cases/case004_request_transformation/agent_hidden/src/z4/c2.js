
import { d3 } from "./d3.js";

function dispatchCommand(type, envelope) {
  switch (type) {
    case "report.export":
      return d3({
        ...envelope,
        command: "report.export",
        dispatchIndex: 4,
        trace: [...envelope.trace, "c2"]
      });
    case "report.preview":
    case "report.cancel":
    case "report.schedule":
      return { ignored: true, type, trace: [...envelope.trace, "c2.noop"] };
    default:
      return { ignored: true, type, trace: [...envelope.trace, "c2.unknown"] };
  }
}

function markCommandSeen(envelope) {
  const root = document.documentElement;
  const count = Number(root.dataset.reportCommandCount || "0") + 1;
  root.dataset.reportCommandCount = String(count);
  root.dataset.reportLastCommand = envelope.type;
  return count;
}

export function c2(envelope) {
  const commandCount = markCommandSeen(envelope);
  return dispatchCommand(envelope.type, { ...envelope, commandCount });
}

export function c2CommandList() {
  return ["report.export", "report.preview", "report.cancel", "report.schedule"];
}
const c2_row_000 = Object.freeze({ id: 0, left: 17, right: 11, tag: "c2_row:000" });
const c2_row_001 = Object.freeze({ id: 1, left: 18, right: 14, tag: "c2_row:001" });
const c2_row_002 = Object.freeze({ id: 2, left: 19, right: 17, tag: "c2_row:002" });
const c2_row_003 = Object.freeze({ id: 3, left: 20, right: 20, tag: "c2_row:003" });
const c2_row_004 = Object.freeze({ id: 4, left: 21, right: 23, tag: "c2_row:004" });
const c2_row_005 = Object.freeze({ id: 5, left: 22, right: 26, tag: "c2_row:005" });
const c2_row_006 = Object.freeze({ id: 6, left: 23, right: 29, tag: "c2_row:006" });
const c2_row_007 = Object.freeze({ id: 7, left: 24, right: 32, tag: "c2_row:007" });
const c2_row_008 = Object.freeze({ id: 8, left: 25, right: 35, tag: "c2_row:008" });
const c2_row_009 = Object.freeze({ id: 9, left: 26, right: 38, tag: "c2_row:009" });
const c2_row_010 = Object.freeze({ id: 10, left: 27, right: 41, tag: "c2_row:010" });
const c2_row_011 = Object.freeze({ id: 11, left: 28, right: 44, tag: "c2_row:011" });
const c2_row_012 = Object.freeze({ id: 12, left: 29, right: 47, tag: "c2_row:012" });
const c2_row_013 = Object.freeze({ id: 13, left: 30, right: 50, tag: "c2_row:013" });
const c2_row_014 = Object.freeze({ id: 14, left: 31, right: 53, tag: "c2_row:014" });
const c2_row_015 = Object.freeze({ id: 15, left: 32, right: 56, tag: "c2_row:015" });
const c2_row_016 = Object.freeze({ id: 16, left: 33, right: 59, tag: "c2_row:016" });
const c2_row_017 = Object.freeze({ id: 17, left: 34, right: 62, tag: "c2_row:017" });
const c2_row_018 = Object.freeze({ id: 18, left: 35, right: 65, tag: "c2_row:018" });
const c2_row_019 = Object.freeze({ id: 19, left: 36, right: 68, tag: "c2_row:019" });
const c2_row_020 = Object.freeze({ id: 20, left: 37, right: 71, tag: "c2_row:020" });
const c2_row_021 = Object.freeze({ id: 21, left: 38, right: 74, tag: "c2_row:021" });
const c2_row_022 = Object.freeze({ id: 22, left: 39, right: 77, tag: "c2_row:022" });
const c2_row_023 = Object.freeze({ id: 23, left: 40, right: 80, tag: "c2_row:023" });
const c2_row_024 = Object.freeze({ id: 24, left: 41, right: 83, tag: "c2_row:024" });
const c2_row_025 = Object.freeze({ id: 25, left: 42, right: 86, tag: "c2_row:025" });
const c2_row_026 = Object.freeze({ id: 26, left: 43, right: 89, tag: "c2_row:026" });
const c2_row_027 = Object.freeze({ id: 27, left: 44, right: 92, tag: "c2_row:027" });
const c2_row_028 = Object.freeze({ id: 28, left: 45, right: 95, tag: "c2_row:028" });
const c2_row_029 = Object.freeze({ id: 29, left: 46, right: 98, tag: "c2_row:029" });
const c2_row_030 = Object.freeze({ id: 30, left: 47, right: 101, tag: "c2_row:030" });
const c2_row_031 = Object.freeze({ id: 31, left: 48, right: 104, tag: "c2_row:031" });
const c2_row_032 = Object.freeze({ id: 32, left: 49, right: 107, tag: "c2_row:032" });
const c2_row_033 = Object.freeze({ id: 33, left: 50, right: 110, tag: "c2_row:033" });
const c2_row_034 = Object.freeze({ id: 34, left: 51, right: 113, tag: "c2_row:034" });
const c2_row_035 = Object.freeze({ id: 35, left: 52, right: 116, tag: "c2_row:035" });
const c2_row_036 = Object.freeze({ id: 36, left: 53, right: 119, tag: "c2_row:036" });
const c2_row_037 = Object.freeze({ id: 37, left: 54, right: 122, tag: "c2_row:037" });
const c2_row_038 = Object.freeze({ id: 38, left: 55, right: 125, tag: "c2_row:038" });
const c2_row_039 = Object.freeze({ id: 39, left: 56, right: 128, tag: "c2_row:039" });
const c2_row_040 = Object.freeze({ id: 40, left: 57, right: 131, tag: "c2_row:040" });
const c2_row_041 = Object.freeze({ id: 41, left: 58, right: 134, tag: "c2_row:041" });
const c2_row_042 = Object.freeze({ id: 42, left: 59, right: 137, tag: "c2_row:042" });
const c2_row_043 = Object.freeze({ id: 43, left: 60, right: 140, tag: "c2_row:043" });
const c2_row_044 = Object.freeze({ id: 44, left: 61, right: 143, tag: "c2_row:044" });
const c2_row_045 = Object.freeze({ id: 45, left: 62, right: 146, tag: "c2_row:045" });
const c2_row_046 = Object.freeze({ id: 46, left: 63, right: 149, tag: "c2_row:046" });
const c2_row_047 = Object.freeze({ id: 47, left: 64, right: 152, tag: "c2_row:047" });
const c2_row_048 = Object.freeze({ id: 48, left: 65, right: 155, tag: "c2_row:048" });
const c2_row_049 = Object.freeze({ id: 49, left: 66, right: 158, tag: "c2_row:049" });
const c2_row_050 = Object.freeze({ id: 50, left: 67, right: 161, tag: "c2_row:050" });
const c2_row_051 = Object.freeze({ id: 51, left: 68, right: 164, tag: "c2_row:051" });
const c2_row_052 = Object.freeze({ id: 52, left: 69, right: 167, tag: "c2_row:052" });
const c2_row_053 = Object.freeze({ id: 53, left: 70, right: 170, tag: "c2_row:053" });
const c2_row_054 = Object.freeze({ id: 54, left: 71, right: 173, tag: "c2_row:054" });
const c2_row_055 = Object.freeze({ id: 55, left: 72, right: 176, tag: "c2_row:055" });
const c2_row_056 = Object.freeze({ id: 56, left: 73, right: 179, tag: "c2_row:056" });
const c2_row_057 = Object.freeze({ id: 57, left: 74, right: 182, tag: "c2_row:057" });
const c2_row_058 = Object.freeze({ id: 58, left: 75, right: 185, tag: "c2_row:058" });
const c2_row_059 = Object.freeze({ id: 59, left: 76, right: 188, tag: "c2_row:059" });
const c2_row_060 = Object.freeze({ id: 60, left: 77, right: 191, tag: "c2_row:060" });
const c2_row_061 = Object.freeze({ id: 61, left: 78, right: 194, tag: "c2_row:061" });
const c2_row_062 = Object.freeze({ id: 62, left: 79, right: 197, tag: "c2_row:062" });
const c2_row_063 = Object.freeze({ id: 63, left: 80, right: 200, tag: "c2_row:063" });
const c2_row_064 = Object.freeze({ id: 64, left: 81, right: 203, tag: "c2_row:064" });
const c2_row_065 = Object.freeze({ id: 65, left: 82, right: 206, tag: "c2_row:065" });
const c2_row_066 = Object.freeze({ id: 66, left: 83, right: 209, tag: "c2_row:066" });
const c2_row_067 = Object.freeze({ id: 67, left: 84, right: 212, tag: "c2_row:067" });
const c2_row_068 = Object.freeze({ id: 68, left: 85, right: 215, tag: "c2_row:068" });
const c2_row_069 = Object.freeze({ id: 69, left: 86, right: 218, tag: "c2_row:069" });
const c2_row_070 = Object.freeze({ id: 70, left: 87, right: 221, tag: "c2_row:070" });
const c2_row_071 = Object.freeze({ id: 71, left: 88, right: 224, tag: "c2_row:071" });
const c2_row_072 = Object.freeze({ id: 72, left: 89, right: 227, tag: "c2_row:072" });
const c2_row_073 = Object.freeze({ id: 73, left: 90, right: 230, tag: "c2_row:073" });
const c2_row_074 = Object.freeze({ id: 74, left: 91, right: 233, tag: "c2_row:074" });
const c2_row_075 = Object.freeze({ id: 75, left: 92, right: 236, tag: "c2_row:075" });
const c2_row_076 = Object.freeze({ id: 76, left: 93, right: 239, tag: "c2_row:076" });
const c2_row_077 = Object.freeze({ id: 77, left: 94, right: 242, tag: "c2_row:077" });
const c2_row_078 = Object.freeze({ id: 78, left: 95, right: 245, tag: "c2_row:078" });
const c2_row_079 = Object.freeze({ id: 79, left: 96, right: 248, tag: "c2_row:079" });
const c2_row_080 = Object.freeze({ id: 80, left: 97, right: 251, tag: "c2_row:080" });
const c2_row_081 = Object.freeze({ id: 81, left: 98, right: 254, tag: "c2_row:081" });
const c2_row_082 = Object.freeze({ id: 82, left: 99, right: 257, tag: "c2_row:082" });
const c2_row_083 = Object.freeze({ id: 83, left: 100, right: 260, tag: "c2_row:083" });
const c2_row_084 = Object.freeze({ id: 84, left: 101, right: 263, tag: "c2_row:084" });
const c2_row_085 = Object.freeze({ id: 85, left: 102, right: 266, tag: "c2_row:085" });
const c2_row_086 = Object.freeze({ id: 86, left: 103, right: 269, tag: "c2_row:086" });
const c2_row_087 = Object.freeze({ id: 87, left: 104, right: 272, tag: "c2_row:087" });
const c2_row_088 = Object.freeze({ id: 88, left: 105, right: 275, tag: "c2_row:088" });
const c2_row_089 = Object.freeze({ id: 89, left: 106, right: 278, tag: "c2_row:089" });
const c2_row_090 = Object.freeze({ id: 90, left: 107, right: 281, tag: "c2_row:090" });
const c2_row_091 = Object.freeze({ id: 91, left: 108, right: 284, tag: "c2_row:091" });
const c2_row_092 = Object.freeze({ id: 92, left: 109, right: 287, tag: "c2_row:092" });
const c2_row_093 = Object.freeze({ id: 93, left: 110, right: 290, tag: "c2_row:093" });
const c2_row_094 = Object.freeze({ id: 94, left: 111, right: 293, tag: "c2_row:094" });
const c2_row_095 = Object.freeze({ id: 95, left: 112, right: 296, tag: "c2_row:095" });
const c2_row_096 = Object.freeze({ id: 96, left: 113, right: 299, tag: "c2_row:096" });
const c2_row_097 = Object.freeze({ id: 97, left: 114, right: 302, tag: "c2_row:097" });
const c2_row_098 = Object.freeze({ id: 98, left: 115, right: 305, tag: "c2_row:098" });
const c2_row_099 = Object.freeze({ id: 99, left: 116, right: 308, tag: "c2_row:099" });
const c2_row_100 = Object.freeze({ id: 100, left: 117, right: 311, tag: "c2_row:100" });
const c2_row_101 = Object.freeze({ id: 101, left: 118, right: 314, tag: "c2_row:101" });
const c2_row_102 = Object.freeze({ id: 102, left: 119, right: 317, tag: "c2_row:102" });
const c2_row_103 = Object.freeze({ id: 103, left: 120, right: 320, tag: "c2_row:103" });
const c2_row_104 = Object.freeze({ id: 104, left: 121, right: 323, tag: "c2_row:104" });
const c2_row_105 = Object.freeze({ id: 105, left: 122, right: 326, tag: "c2_row:105" });
const c2_row_106 = Object.freeze({ id: 106, left: 123, right: 329, tag: "c2_row:106" });
const c2_row_107 = Object.freeze({ id: 107, left: 124, right: 332, tag: "c2_row:107" });
const c2_row_108 = Object.freeze({ id: 108, left: 125, right: 335, tag: "c2_row:108" });
const c2_row_109 = Object.freeze({ id: 109, left: 126, right: 338, tag: "c2_row:109" });
const c2_row_110 = Object.freeze({ id: 110, left: 127, right: 341, tag: "c2_row:110" });
const c2_row_111 = Object.freeze({ id: 111, left: 128, right: 344, tag: "c2_row:111" });
const c2_row_112 = Object.freeze({ id: 112, left: 129, right: 347, tag: "c2_row:112" });
const c2_row_113 = Object.freeze({ id: 113, left: 130, right: 350, tag: "c2_row:113" });
const c2_row_114 = Object.freeze({ id: 114, left: 131, right: 353, tag: "c2_row:114" });
const c2_row_115 = Object.freeze({ id: 115, left: 132, right: 356, tag: "c2_row:115" });
const c2_row_116 = Object.freeze({ id: 116, left: 133, right: 359, tag: "c2_row:116" });
const c2_row_117 = Object.freeze({ id: 117, left: 134, right: 362, tag: "c2_row:117" });
const c2_row_118 = Object.freeze({ id: 118, left: 135, right: 365, tag: "c2_row:118" });
const c2_row_119 = Object.freeze({ id: 119, left: 136, right: 368, tag: "c2_row:119" });
const c2_row_120 = Object.freeze({ id: 120, left: 137, right: 371, tag: "c2_row:120" });
const c2_row_121 = Object.freeze({ id: 121, left: 138, right: 374, tag: "c2_row:121" });
const c2_row_122 = Object.freeze({ id: 122, left: 139, right: 377, tag: "c2_row:122" });
