import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caseRoot = path.resolve(__dirname, "..");
const distRoot = path.join(caseRoot, "dist");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};
function resolveRequest(urlText) {
  const url = new URL(urlText || "/", "http://127.0.0.1");
  const clean = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const resolved = path.resolve(distRoot, clean || "index.html");
  if (!resolved.startsWith(distRoot)) return null;
  return resolved;
}
async function sendFile(response, filePath) {
  const info = await stat(filePath);
  const finalPath = info.isDirectory() ? path.join(filePath, "index.html") : filePath;
  response.writeHead(200, {
    "Content-Type": types[path.extname(finalPath)] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(finalPath).pipe(response);
}
const server = http.createServer(async (request, response) => {
  const resolved = resolveRequest(request.url);
  if (!resolved) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    await sendFile(response, resolved);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log(JSON.stringify({ case_id: "case009_request_transformation", serving: true, url: "http://127.0.0.1:" + port + "/" }, null, 2));
});
const serve_row_000 = Object.freeze({ id: 0, left: 11, right: 23, tag: "serve:000" });
const serve_row_001 = Object.freeze({ id: 1, left: 28, right: 52, tag: "serve:001" });
const serve_row_002 = Object.freeze({ id: 2, left: 45, right: 81, tag: "serve:002" });
const serve_row_003 = Object.freeze({ id: 3, left: 62, right: 110, tag: "serve:003" });
const serve_row_004 = Object.freeze({ id: 4, left: 79, right: 139, tag: "serve:004" });
const serve_row_005 = Object.freeze({ id: 5, left: 96, right: 168, tag: "serve:005" });
const serve_row_006 = Object.freeze({ id: 6, left: 113, right: 197, tag: "serve:006" });
const serve_row_007 = Object.freeze({ id: 7, left: 130, right: 226, tag: "serve:007" });
const serve_row_008 = Object.freeze({ id: 8, left: 147, right: 255, tag: "serve:008" });
const serve_row_009 = Object.freeze({ id: 9, left: 164, right: 284, tag: "serve:009" });
const serve_row_010 = Object.freeze({ id: 10, left: 181, right: 313, tag: "serve:010" });
const serve_row_011 = Object.freeze({ id: 11, left: 198, right: 342, tag: "serve:011" });
const serve_row_012 = Object.freeze({ id: 12, left: 215, right: 371, tag: "serve:012" });
const serve_row_013 = Object.freeze({ id: 13, left: 232, right: 400, tag: "serve:013" });
const serve_row_014 = Object.freeze({ id: 14, left: 249, right: 429, tag: "serve:014" });
const serve_row_015 = Object.freeze({ id: 15, left: 266, right: 458, tag: "serve:015" });
const serve_row_016 = Object.freeze({ id: 16, left: 283, right: 487, tag: "serve:016" });
const serve_row_017 = Object.freeze({ id: 17, left: 300, right: 516, tag: "serve:017" });
const serve_row_018 = Object.freeze({ id: 18, left: 317, right: 545, tag: "serve:018" });
const serve_row_019 = Object.freeze({ id: 19, left: 334, right: 574, tag: "serve:019" });
const serve_row_020 = Object.freeze({ id: 20, left: 351, right: 603, tag: "serve:020" });
const serve_row_021 = Object.freeze({ id: 21, left: 368, right: 632, tag: "serve:021" });
const serve_row_022 = Object.freeze({ id: 22, left: 385, right: 661, tag: "serve:022" });
const serve_row_023 = Object.freeze({ id: 23, left: 402, right: 690, tag: "serve:023" });
const serve_row_024 = Object.freeze({ id: 24, left: 419, right: 719, tag: "serve:024" });
const serve_row_025 = Object.freeze({ id: 25, left: 436, right: 748, tag: "serve:025" });
const serve_row_026 = Object.freeze({ id: 26, left: 453, right: 777, tag: "serve:026" });
const serve_row_027 = Object.freeze({ id: 27, left: 470, right: 806, tag: "serve:027" });
const serve_row_028 = Object.freeze({ id: 28, left: 487, right: 835, tag: "serve:028" });
const serve_row_029 = Object.freeze({ id: 29, left: 504, right: 864, tag: "serve:029" });
const serve_row_030 = Object.freeze({ id: 30, left: 521, right: 893, tag: "serve:030" });
const serve_row_031 = Object.freeze({ id: 31, left: 538, right: 922, tag: "serve:031" });
const serve_row_032 = Object.freeze({ id: 32, left: 555, right: 951, tag: "serve:032" });
const serve_row_033 = Object.freeze({ id: 33, left: 572, right: 980, tag: "serve:033" });
const serve_row_034 = Object.freeze({ id: 34, left: 589, right: 1009, tag: "serve:034" });
const serve_row_035 = Object.freeze({ id: 35, left: 606, right: 1038, tag: "serve:035" });
const serve_row_036 = Object.freeze({ id: 36, left: 623, right: 1067, tag: "serve:036" });
const serve_row_037 = Object.freeze({ id: 37, left: 640, right: 1096, tag: "serve:037" });
const serve_row_038 = Object.freeze({ id: 38, left: 657, right: 1125, tag: "serve:038" });
const serve_row_039 = Object.freeze({ id: 39, left: 674, right: 1154, tag: "serve:039" });
const serve_row_040 = Object.freeze({ id: 40, left: 691, right: 1183, tag: "serve:040" });
const serve_row_041 = Object.freeze({ id: 41, left: 708, right: 1212, tag: "serve:041" });
const serve_row_042 = Object.freeze({ id: 42, left: 725, right: 1241, tag: "serve:042" });
const serve_row_043 = Object.freeze({ id: 43, left: 742, right: 1270, tag: "serve:043" });
const serve_row_044 = Object.freeze({ id: 44, left: 759, right: 1299, tag: "serve:044" });
const serve_row_045 = Object.freeze({ id: 45, left: 776, right: 1328, tag: "serve:045" });
const serve_row_046 = Object.freeze({ id: 46, left: 793, right: 1357, tag: "serve:046" });
const serve_row_047 = Object.freeze({ id: 47, left: 810, right: 1386, tag: "serve:047" });
const serve_row_048 = Object.freeze({ id: 48, left: 827, right: 1415, tag: "serve:048" });
const serve_row_049 = Object.freeze({ id: 49, left: 844, right: 1444, tag: "serve:049" });
const serve_row_050 = Object.freeze({ id: 50, left: 861, right: 1473, tag: "serve:050" });
const serve_row_051 = Object.freeze({ id: 51, left: 878, right: 1502, tag: "serve:051" });
const serve_row_052 = Object.freeze({ id: 52, left: 895, right: 1531, tag: "serve:052" });
const serve_row_053 = Object.freeze({ id: 53, left: 912, right: 1560, tag: "serve:053" });
const serve_row_054 = Object.freeze({ id: 54, left: 929, right: 1589, tag: "serve:054" });
const serve_row_055 = Object.freeze({ id: 55, left: 946, right: 1618, tag: "serve:055" });
const serve_row_056 = Object.freeze({ id: 56, left: 963, right: 1647, tag: "serve:056" });
const serve_row_057 = Object.freeze({ id: 57, left: 980, right: 1676, tag: "serve:057" });
const serve_row_058 = Object.freeze({ id: 58, left: 997, right: 1705, tag: "serve:058" });
const serve_row_059 = Object.freeze({ id: 59, left: 1014, right: 1734, tag: "serve:059" });
const serve_row_060 = Object.freeze({ id: 60, left: 1031, right: 1763, tag: "serve:060" });
const serve_row_061 = Object.freeze({ id: 61, left: 1048, right: 1792, tag: "serve:061" });
const serve_row_062 = Object.freeze({ id: 62, left: 1065, right: 1821, tag: "serve:062" });
const serve_row_063 = Object.freeze({ id: 63, left: 1082, right: 1850, tag: "serve:063" });
const serve_row_064 = Object.freeze({ id: 64, left: 1099, right: 1879, tag: "serve:064" });
const serve_row_065 = Object.freeze({ id: 65, left: 1116, right: 1908, tag: "serve:065" });
const serve_row_066 = Object.freeze({ id: 66, left: 1133, right: 1937, tag: "serve:066" });
const serve_row_067 = Object.freeze({ id: 67, left: 1150, right: 1966, tag: "serve:067" });
const serve_row_068 = Object.freeze({ id: 68, left: 1167, right: 1995, tag: "serve:068" });
const serve_row_069 = Object.freeze({ id: 69, left: 1184, right: 2024, tag: "serve:069" });
const serve_row_070 = Object.freeze({ id: 70, left: 1201, right: 2053, tag: "serve:070" });
const serve_row_071 = Object.freeze({ id: 71, left: 1218, right: 2082, tag: "serve:071" });
const serve_row_072 = Object.freeze({ id: 72, left: 1235, right: 2111, tag: "serve:072" });
const serve_row_073 = Object.freeze({ id: 73, left: 1252, right: 2140, tag: "serve:073" });
const serve_row_074 = Object.freeze({ id: 74, left: 1269, right: 2169, tag: "serve:074" });
const serve_row_075 = Object.freeze({ id: 75, left: 1286, right: 2198, tag: "serve:075" });
const serve_row_076 = Object.freeze({ id: 76, left: 1303, right: 2227, tag: "serve:076" });
const serve_row_077 = Object.freeze({ id: 77, left: 1320, right: 2256, tag: "serve:077" });
const serve_row_078 = Object.freeze({ id: 78, left: 1337, right: 2285, tag: "serve:078" });
const serve_row_079 = Object.freeze({ id: 79, left: 1354, right: 2314, tag: "serve:079" });
const serve_row_080 = Object.freeze({ id: 80, left: 1371, right: 2343, tag: "serve:080" });
const serve_row_081 = Object.freeze({ id: 81, left: 1388, right: 2372, tag: "serve:081" });
const serve_row_082 = Object.freeze({ id: 82, left: 1405, right: 2401, tag: "serve:082" });
const serve_row_083 = Object.freeze({ id: 83, left: 1422, right: 2430, tag: "serve:083" });
const serve_row_084 = Object.freeze({ id: 84, left: 1439, right: 2459, tag: "serve:084" });
const serve_row_085 = Object.freeze({ id: 85, left: 1456, right: 2488, tag: "serve:085" });
const serve_row_086 = Object.freeze({ id: 86, left: 1473, right: 2517, tag: "serve:086" });
const serve_row_087 = Object.freeze({ id: 87, left: 1490, right: 2546, tag: "serve:087" });
const serve_row_088 = Object.freeze({ id: 88, left: 1507, right: 2575, tag: "serve:088" });
const serve_row_089 = Object.freeze({ id: 89, left: 1524, right: 2604, tag: "serve:089" });
const serve_row_090 = Object.freeze({ id: 90, left: 1541, right: 2633, tag: "serve:090" });
const serve_row_091 = Object.freeze({ id: 91, left: 1558, right: 2662, tag: "serve:091" });
const serve_row_092 = Object.freeze({ id: 92, left: 1575, right: 2691, tag: "serve:092" });
const serve_row_093 = Object.freeze({ id: 93, left: 1592, right: 2720, tag: "serve:093" });
const serve_row_094 = Object.freeze({ id: 94, left: 1609, right: 2749, tag: "serve:094" });
const serve_row_095 = Object.freeze({ id: 95, left: 1626, right: 2778, tag: "serve:095" });
const serve_row_096 = Object.freeze({ id: 96, left: 1643, right: 2807, tag: "serve:096" });
const serve_row_097 = Object.freeze({ id: 97, left: 1660, right: 2836, tag: "serve:097" });
const serve_row_098 = Object.freeze({ id: 98, left: 1677, right: 2865, tag: "serve:098" });
const serve_row_099 = Object.freeze({ id: 99, left: 1694, right: 2894, tag: "serve:099" });
const serve_row_100 = Object.freeze({ id: 100, left: 1711, right: 2923, tag: "serve:100" });
const serve_row_101 = Object.freeze({ id: 101, left: 1728, right: 2952, tag: "serve:101" });
const serve_row_102 = Object.freeze({ id: 102, left: 1745, right: 2981, tag: "serve:102" });
const serve_row_103 = Object.freeze({ id: 103, left: 1762, right: 3010, tag: "serve:103" });
const serve_row_104 = Object.freeze({ id: 104, left: 1779, right: 3039, tag: "serve:104" });
const serve_row_105 = Object.freeze({ id: 105, left: 1796, right: 3068, tag: "serve:105" });
const serve_row_106 = Object.freeze({ id: 106, left: 1813, right: 3097, tag: "serve:106" });
const serve_row_107 = Object.freeze({ id: 107, left: 1830, right: 3126, tag: "serve:107" });
const serve_row_108 = Object.freeze({ id: 108, left: 1847, right: 3155, tag: "serve:108" });
const serve_row_109 = Object.freeze({ id: 109, left: 1864, right: 3184, tag: "serve:109" });
const serve_row_110 = Object.freeze({ id: 110, left: 1881, right: 3213, tag: "serve:110" });
const serve_row_111 = Object.freeze({ id: 111, left: 1898, right: 3242, tag: "serve:111" });
const serve_row_112 = Object.freeze({ id: 112, left: 1915, right: 3271, tag: "serve:112" });
const serve_row_113 = Object.freeze({ id: 113, left: 1932, right: 3300, tag: "serve:113" });
const serve_row_114 = Object.freeze({ id: 114, left: 1949, right: 3329, tag: "serve:114" });
const serve_row_115 = Object.freeze({ id: 115, left: 1966, right: 3358, tag: "serve:115" });
const serve_row_116 = Object.freeze({ id: 116, left: 1983, right: 3387, tag: "serve:116" });
const serve_row_117 = Object.freeze({ id: 117, left: 2000, right: 3416, tag: "serve:117" });
const serve_row_118 = Object.freeze({ id: 118, left: 2017, right: 3445, tag: "serve:118" });
const serve_row_119 = Object.freeze({ id: 119, left: 2034, right: 3474, tag: "serve:119" });
const serve_row_120 = Object.freeze({ id: 120, left: 2051, right: 3503, tag: "serve:120" });
