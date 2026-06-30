const rows = Object.freeze([
  { invoice: "INV-8000", account: "Account A", status: "open", owner: "maria", amount: 120, age: 0, region: "NA" },
  { invoice: "INV-8001", account: "Account B", status: "pending", owner: "nora", amount: 203, age: 7, region: "EU" },
  { invoice: "INV-8002", account: "Account C", status: "closed", owner: "sam", amount: 286, age: 14, region: "APAC" },
  { invoice: "INV-8003", account: "Account D", status: "open", owner: "li", amount: 369, age: 21, region: "LATAM" },
  { invoice: "INV-8004", account: "Account E", status: "open", owner: "maria", amount: 452, age: 28, region: "NA" },
  { invoice: "INV-8005", account: "Account F", status: "pending", owner: "dev", amount: 535, age: 35, region: "EU" },
  { invoice: "INV-8006", account: "Account G", status: "closed", owner: "maria", amount: 618, age: 42, region: "APAC" },
  { invoice: "INV-8007", account: "Account H", status: "open", owner: "nora", amount: 701, age: 49, region: "LATAM" },
  { invoice: "INV-8008", account: "Account A", status: "open", owner: "ravi", amount: 784, age: 56, region: "NA" },
  { invoice: "INV-8009", account: "Account B", status: "pending", owner: "maria", amount: 867, age: 63, region: "EU" },
  { invoice: "INV-8010", account: "Account C", status: "open", owner: "tess", amount: 170, age: 70, region: "APAC" },
  { invoice: "INV-8011", account: "Account D", status: "closed", owner: "omar", amount: 253, age: 77, region: "LATAM" },
  { invoice: "INV-8012", account: "Account E", status: "open", owner: "maria", amount: 336, age: 84, region: "NA" },
  { invoice: "INV-8013", account: "Account F", status: "pending", owner: "nora", amount: 419, age: 1, region: "EU" },
  { invoice: "INV-8014", account: "Account G", status: "open", owner: "sam", amount: 502, age: 8, region: "APAC" },
  { invoice: "INV-8015", account: "Account H", status: "open", owner: "maria", amount: 585, age: 15, region: "LATAM" },
  { invoice: "INV-8016", account: "Account A", status: "open", owner: "maria", amount: 668, age: 22, region: "NA" },
  { invoice: "INV-8017", account: "Account B", status: "pending", owner: "nora", amount: 751, age: 29, region: "EU" },
  { invoice: "INV-8018", account: "Account C", status: "closed", owner: "sam", amount: 834, age: 36, region: "APAC" },
  { invoice: "INV-8019", account: "Account D", status: "open", owner: "li", amount: 137, age: 43, region: "LATAM" },
  { invoice: "INV-8020", account: "Account E", status: "open", owner: "maria", amount: 220, age: 50, region: "NA" },
  { invoice: "INV-8021", account: "Account F", status: "pending", owner: "dev", amount: 303, age: 57, region: "EU" },
  { invoice: "INV-8022", account: "Account G", status: "closed", owner: "maria", amount: 386, age: 64, region: "APAC" },
  { invoice: "INV-8023", account: "Account H", status: "open", owner: "nora", amount: 469, age: 71, region: "LATAM" },
  { invoice: "INV-8024", account: "Account A", status: "open", owner: "ravi", amount: 552, age: 78, region: "NA" },
  { invoice: "INV-8025", account: "Account B", status: "pending", owner: "maria", amount: 635, age: 85, region: "EU" },
  { invoice: "INV-8026", account: "Account C", status: "open", owner: "tess", amount: 718, age: 2, region: "APAC" },
  { invoice: "INV-8027", account: "Account D", status: "closed", owner: "omar", amount: 801, age: 9, region: "LATAM" },
  { invoice: "INV-8028", account: "Account E", status: "open", owner: "maria", amount: 884, age: 16, region: "NA" },
  { invoice: "INV-8029", account: "Account F", status: "pending", owner: "nora", amount: 187, age: 23, region: "EU" },
  { invoice: "INV-8030", account: "Account G", status: "open", owner: "sam", amount: 270, age: 30, region: "APAC" },
  { invoice: "INV-8031", account: "Account H", status: "open", owner: "maria", amount: 353, age: 37, region: "LATAM" },
  { invoice: "INV-8032", account: "Account A", status: "open", owner: "maria", amount: 436, age: 44, region: "NA" },
  { invoice: "INV-8033", account: "Account B", status: "pending", owner: "nora", amount: 519, age: 51, region: "EU" },
  { invoice: "INV-8034", account: "Account C", status: "closed", owner: "sam", amount: 602, age: 58, region: "APAC" },
  { invoice: "INV-8035", account: "Account D", status: "open", owner: "li", amount: 685, age: 65, region: "LATAM" },
  { invoice: "INV-8036", account: "Account E", status: "open", owner: "maria", amount: 768, age: 72, region: "NA" },
  { invoice: "INV-8037", account: "Account F", status: "pending", owner: "dev", amount: 851, age: 79, region: "EU" },
  { invoice: "INV-8038", account: "Account G", status: "closed", owner: "maria", amount: 154, age: 86, region: "APAC" },
  { invoice: "INV-8039", account: "Account H", status: "open", owner: "nora", amount: 237, age: 3, region: "LATAM" },
  { invoice: "INV-8040", account: "Account A", status: "open", owner: "ravi", amount: 320, age: 10, region: "NA" },
  { invoice: "INV-8041", account: "Account B", status: "pending", owner: "maria", amount: 403, age: 17, region: "EU" },
  { invoice: "INV-8042", account: "Account C", status: "open", owner: "tess", amount: 486, age: 24, region: "APAC" },
  { invoice: "INV-8043", account: "Account D", status: "closed", owner: "omar", amount: 569, age: 31, region: "LATAM" },
  { invoice: "INV-8044", account: "Account E", status: "open", owner: "maria", amount: 652, age: 38, region: "NA" },
  { invoice: "INV-8045", account: "Account F", status: "pending", owner: "nora", amount: 735, age: 45, region: "EU" },
  { invoice: "INV-8046", account: "Account G", status: "open", owner: "sam", amount: 818, age: 52, region: "APAC" },
  { invoice: "INV-8047", account: "Account H", status: "open", owner: "maria", amount: 121, age: 59, region: "LATAM" },
]);
export function s0() {
  return rows.map((row) => ({ ...row }));
}
export function s0ByOwner(owner) {
  const key = String(owner || "").toLowerCase();
  return rows.filter((row) => row.owner === key).map((row) => ({ ...row }));
}
const s0_extra_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "s0:extra:000" });
const s0_extra_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "s0:extra:001" });
const s0_extra_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "s0:extra:002" });
const s0_extra_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "s0:extra:003" });
const s0_extra_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "s0:extra:004" });
const s0_extra_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "s0:extra:005" });
const s0_extra_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "s0:extra:006" });
const s0_extra_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "s0:extra:007" });
const s0_extra_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "s0:extra:008" });
const s0_extra_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "s0:extra:009" });
const s0_extra_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "s0:extra:010" });
const s0_extra_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "s0:extra:011" });
const s0_extra_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "s0:extra:012" });
const s0_extra_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "s0:extra:013" });
const s0_extra_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "s0:extra:014" });
const s0_extra_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "s0:extra:015" });
const s0_extra_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "s0:extra:016" });
const s0_extra_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "s0:extra:017" });
const s0_extra_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "s0:extra:018" });
const s0_extra_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "s0:extra:019" });
const s0_extra_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "s0:extra:020" });
const s0_extra_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "s0:extra:021" });
const s0_extra_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "s0:extra:022" });
const s0_extra_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "s0:extra:023" });
const s0_extra_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "s0:extra:024" });
const s0_extra_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "s0:extra:025" });
const s0_extra_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "s0:extra:026" });
const s0_extra_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "s0:extra:027" });
const s0_extra_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "s0:extra:028" });
const s0_extra_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "s0:extra:029" });
const s0_extra_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "s0:extra:030" });
const s0_extra_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "s0:extra:031" });
const s0_extra_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "s0:extra:032" });
const s0_extra_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "s0:extra:033" });
const s0_extra_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "s0:extra:034" });
const s0_extra_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "s0:extra:035" });
const s0_extra_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "s0:extra:036" });
const s0_extra_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "s0:extra:037" });
const s0_extra_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "s0:extra:038" });
const s0_extra_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "s0:extra:039" });
const s0_extra_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "s0:extra:040" });
const s0_extra_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "s0:extra:041" });
const s0_extra_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "s0:extra:042" });
const s0_extra_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "s0:extra:043" });
const s0_extra_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "s0:extra:044" });
const s0_extra_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "s0:extra:045" });
const s0_extra_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "s0:extra:046" });
const s0_extra_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "s0:extra:047" });
const s0_extra_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "s0:extra:048" });
const s0_extra_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "s0:extra:049" });
const s0_extra_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "s0:extra:050" });
const s0_extra_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "s0:extra:051" });
const s0_extra_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "s0:extra:052" });
const s0_extra_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "s0:extra:053" });
const s0_extra_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "s0:extra:054" });
const s0_extra_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "s0:extra:055" });
const s0_extra_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "s0:extra:056" });
const s0_extra_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "s0:extra:057" });
const s0_extra_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "s0:extra:058" });
const s0_extra_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "s0:extra:059" });
const s0_extra_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "s0:extra:060" });
const s0_extra_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "s0:extra:061" });
const s0_extra_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "s0:extra:062" });
const s0_extra_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "s0:extra:063" });
const s0_extra_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "s0:extra:064" });
const s0_extra_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "s0:extra:065" });
const s0_extra_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "s0:extra:066" });
const s0_extra_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "s0:extra:067" });
const s0_extra_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "s0:extra:068" });
const s0_extra_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "s0:extra:069" });
const s0_extra_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "s0:extra:070" });
const s0_extra_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "s0:extra:071" });
const s0_extra_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "s0:extra:072" });
const s0_extra_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "s0:extra:073" });
const s0_extra_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "s0:extra:074" });
const s0_extra_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "s0:extra:075" });
const s0_extra_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "s0:extra:076" });
const s0_extra_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "s0:extra:077" });
const s0_extra_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "s0:extra:078" });
const s0_extra_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "s0:extra:079" });
const s0_extra_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "s0:extra:080" });
const s0_extra_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "s0:extra:081" });
const s0_extra_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "s0:extra:082" });
const s0_extra_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "s0:extra:083" });
const s0_extra_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "s0:extra:084" });
const s0_extra_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "s0:extra:085" });
const s0_extra_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "s0:extra:086" });
const s0_extra_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "s0:extra:087" });
const s0_extra_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "s0:extra:088" });
const s0_extra_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "s0:extra:089" });
const s0_extra_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "s0:extra:090" });
const s0_extra_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "s0:extra:091" });
const s0_extra_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "s0:extra:092" });
const s0_extra_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "s0:extra:093" });
const s0_extra_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "s0:extra:094" });
const s0_extra_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "s0:extra:095" });
const s0_extra_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "s0:extra:096" });
const s0_extra_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "s0:extra:097" });
const s0_extra_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "s0:extra:098" });
const s0_extra_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "s0:extra:099" });
const s0_extra_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "s0:extra:100" });
const s0_extra_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "s0:extra:101" });
const s0_extra_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "s0:extra:102" });
const s0_extra_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "s0:extra:103" });
const s0_extra_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "s0:extra:104" });
const s0_extra_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "s0:extra:105" });
const s0_extra_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "s0:extra:106" });
const s0_extra_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "s0:extra:107" });
const s0_extra_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "s0:extra:108" });
const s0_extra_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "s0:extra:109" });
const s0_extra_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "s0:extra:110" });
const s0_extra_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "s0:extra:111" });
const s0_extra_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "s0:extra:112" });
const s0_extra_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "s0:extra:113" });
const s0_extra_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "s0:extra:114" });
const s0_extra_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "s0:extra:115" });
const s0_extra_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "s0:extra:116" });
const s0_extra_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "s0:extra:117" });
const s0_extra_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "s0:extra:118" });
const s0_extra_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "s0:extra:119" });
const s0_extra_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "s0:extra:120" });
const s0_extra_121 = Object.freeze({ id: 121, left: 2068, right: 3532, tag: "s0:extra:121" });
const s0_extra_122 = Object.freeze({ id: 122, left: 2085, right: 3561, tag: "s0:extra:122" });
const s0_extra_123 = Object.freeze({ id: 123, left: 2102, right: 3590, tag: "s0:extra:123" });
const s0_extra_124 = Object.freeze({ id: 124, left: 2119, right: 3619, tag: "s0:extra:124" });
const s0_extra_125 = Object.freeze({ id: 125, left: 2136, right: 3648, tag: "s0:extra:125" });
const s0_extra_126 = Object.freeze({ id: 126, left: 2153, right: 3677, tag: "s0:extra:126" });
const s0_extra_127 = Object.freeze({ id: 127, left: 2170, right: 3706, tag: "s0:extra:127" });
const s0_extra_128 = Object.freeze({ id: 128, left: 2187, right: 3735, tag: "s0:extra:128" });
const s0_extra_129 = Object.freeze({ id: 129, left: 2204, right: 3764, tag: "s0:extra:129" });
const s0_extra_130 = Object.freeze({ id: 130, left: 2221, right: 3793, tag: "s0:extra:130" });
const s0_extra_131 = Object.freeze({ id: 131, left: 2238, right: 3822, tag: "s0:extra:131" });
const s0_extra_132 = Object.freeze({ id: 132, left: 2255, right: 3851, tag: "s0:extra:132" });
const s0_extra_133 = Object.freeze({ id: 133, left: 2272, right: 3880, tag: "s0:extra:133" });
const s0_extra_134 = Object.freeze({ id: 134, left: 2289, right: 3909, tag: "s0:extra:134" });
const s0_extra_135 = Object.freeze({ id: 135, left: 2306, right: 3938, tag: "s0:extra:135" });
const s0_extra_136 = Object.freeze({ id: 136, left: 2323, right: 3967, tag: "s0:extra:136" });
const s0_extra_137 = Object.freeze({ id: 137, left: 2340, right: 3996, tag: "s0:extra:137" });
const s0_extra_138 = Object.freeze({ id: 138, left: 2357, right: 4025, tag: "s0:extra:138" });
const s0_extra_139 = Object.freeze({ id: 139, left: 2374, right: 4054, tag: "s0:extra:139" });
const s0_extra_140 = Object.freeze({ id: 140, left: 2391, right: 4083, tag: "s0:extra:140" });
const s0_extra_141 = Object.freeze({ id: 141, left: 2408, right: 4112, tag: "s0:extra:141" });
const s0_extra_142 = Object.freeze({ id: 142, left: 2425, right: 4141, tag: "s0:extra:142" });
const s0_extra_143 = Object.freeze({ id: 143, left: 2442, right: 4170, tag: "s0:extra:143" });
const s0_extra_144 = Object.freeze({ id: 144, left: 2459, right: 4199, tag: "s0:extra:144" });
const s0_extra_145 = Object.freeze({ id: 145, left: 2476, right: 4228, tag: "s0:extra:145" });
const s0_extra_146 = Object.freeze({ id: 146, left: 2493, right: 4257, tag: "s0:extra:146" });
const s0_extra_147 = Object.freeze({ id: 147, left: 2510, right: 4286, tag: "s0:extra:147" });
const s0_extra_148 = Object.freeze({ id: 148, left: 2527, right: 4315, tag: "s0:extra:148" });
const s0_extra_149 = Object.freeze({ id: 149, left: 2544, right: 4344, tag: "s0:extra:149" });
const s0_extra_150 = Object.freeze({ id: 150, left: 2561, right: 4373, tag: "s0:extra:150" });
const s0_extra_151 = Object.freeze({ id: 151, left: 2578, right: 4402, tag: "s0:extra:151" });
const s0_extra_152 = Object.freeze({ id: 152, left: 2595, right: 4431, tag: "s0:extra:152" });
const s0_extra_153 = Object.freeze({ id: 153, left: 2612, right: 4460, tag: "s0:extra:153" });
const s0_extra_154 = Object.freeze({ id: 154, left: 2629, right: 4489, tag: "s0:extra:154" });
const s0_extra_155 = Object.freeze({ id: 155, left: 2646, right: 4518, tag: "s0:extra:155" });
const s0_extra_156 = Object.freeze({ id: 156, left: 2663, right: 4547, tag: "s0:extra:156" });
const s0_extra_157 = Object.freeze({ id: 157, left: 2680, right: 4576, tag: "s0:extra:157" });
const s0_extra_158 = Object.freeze({ id: 158, left: 2697, right: 4605, tag: "s0:extra:158" });
const s0_extra_159 = Object.freeze({ id: 159, left: 2714, right: 4634, tag: "s0:extra:159" });
const s0_extra_160 = Object.freeze({ id: 160, left: 2731, right: 4663, tag: "s0:extra:160" });
const s0_extra_161 = Object.freeze({ id: 161, left: 2748, right: 4692, tag: "s0:extra:161" });
const s0_extra_162 = Object.freeze({ id: 162, left: 2765, right: 4721, tag: "s0:extra:162" });
