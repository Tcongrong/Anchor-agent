import { foldBase36, encodeContextFrame } from "./m8/q2/s5.js";

const queue = [];

function fieldName() {
  const codes = [113, 117, 101, 114, 121, 95, 107, 101, 121];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function actionName(ctx) {
  const base = [108, 105, 115, 116, 105, 110, 103, 46, 102, 105, 108, 116, 101, 114];
  return base.map((code) => String.fromCharCode(code)).join('').slice(0, (ctx.row.kind || 0) + 13);
}
function altAction(index) {
  const names = [
    [108, 105, 115, 116, 105, 110, 103, 46, 115, 111, 114, 116],
    [108, 105, 115, 116, 105, 110, 103, 46, 101, 120, 112, 111, 114, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function queryParam() {
  const codes = [113];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 29 + ctx.row.lane * 13 + ctx.row.weight) & 255;
  const base = [0x6d, 0x72, 0x77].map((code, index) => String.fromCharCode(code + ((seed + index * 3) % 5)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x5a).toString(16),
    base[2] + (seed ^ 0xa7).toString(16)
  ];
}
function pick(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function viewCellTag(ctx) {
  const machine = (ctx && ctx.machine) || 29;
  const tag = foldBase36((machine ^ 0x9e3779b9) >>> 0, 10);
  window['__ls_view'] = tag;
  return tag;
}
function composeQueryString(pairs) {
  return pairs
    .slice()
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .map((pair) => encodeURIComponent(String(pair[0])) + '=' + encodeURIComponent(String(pair[1])))
    .join('&');
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function buildShareLink(ctx) {
  const filters = (ctx && ctx.shareFilters) || 'open|west|0|0';
  const parts = String(filters).split('|');
  const pairs = [
    ['st', parts[0] || 'open'],
    ['rg', parts[1] || 'west'],
    ['mn', parts[2] || '0'],
    ['ia', parts[3] || '0'],
    ['ctx', encodeContextFrame(ctx)]
  ];
  const link = '/listing/shared?' + composeQueryString(pairs);
  const record = { link, ctx: encodeContextFrame(ctx), stamp: ((ctx && ctx.machine) || 0) % 9941 };
  window['__ls_share'] = link;
  window['__ls_share_record'] = serializeEnvelope(record);
  return link;
}
function shadowValue(ctx) {
  const machine = (ctx && ctx.machine) || 11;
  return 'qs_' + foldBase36((machine ^ 0x9e3779b9) >>> 0, 12);
}
function shadowQueryEmitter(ctx) {
  const value = shadowValue(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'shadow_query', value);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.info(envelope);
  return value;
}
function side(ctx) {
  viewCellTag(ctx);
  buildShareLink(ctx);
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['sort_ref', 'export_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 2 } }));
    Reflect.set(payload, key, bag[(index + 1) % Math.max(1, bag.length)] || 'qs_999999999999');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'qs_8888888888888');
    console['log'](payload);
  });
  shadowQueryEmitter(ctx);
}
function composeFilterUrl(value, ctx) {
  const pairs = [
    [queryParam(), value],
    ['seq', String((ctx.machine || 0) % 9973)],
    ['mark', String(ctx.mark || '')]
  ];
  return '?' + composeQueryString(pairs);
}
function pushQueryState(url) {
  try {
    history.pushState(null, '', url);
  } catch (err) {
    return false;
  }
  return true;
}
function composeFilterEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'apply_seq', (ctx.machine || 0) % 9973);
  Reflect.set(payload, 'lane_mark', String(ctx.mark || ''));
  return payload;
}
function stage(payload) {
  const pipe = [
    (x) => ({ ...x }),
    (x) => Object.assign({}, x),
    (x) => Reflect.ownKeys(x).reduce((acc, key) => { acc[key] = x[key]; return acc; }, {})
  ];
  return pipe.reduce((acc, fn) => fn(acc), payload);
}
function flushQueue() {
  const drained = queue.splice(0, queue.length);
  const emitted = [];
  for (const envelope of drained) {
    const payload = stage(envelope);
    console['log'](payload);
    emitted.push(payload);
  }
  return emitted;
}
export function r(ctx) {
  side(ctx);
  const key = pick(ctx);
  const url = composeFilterUrl(key, ctx);
  pushQueryState(url);
  queue.push(composeFilterEnvelope(key, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Applied';
  return emitted;
}
const n0_0 = "query-shard:z0/n0.js:000";
const n0_1 = "filter-lane:z0/n0.js:001";
const n0_2 = "region-pin:z0/n0.js:002";
const n0_3 = "sort-track:z0/n0.js:003";
const n0_4 = "page-cursor:z0/n0.js:004";
const n0_5 = "archive-bit:z0/n0.js:005";
const n0_6 = "grid-slot:z0/n0.js:006";
const n0_7 = "facet-mark:z0/n0.js:007";
const n0_8 = "query-shard:z0/n0.js:008";
const n0_9 = "filter-lane:z0/n0.js:009";
const n0_10 = "region-pin:z0/n0.js:010";
const n0_11 = "sort-track:z0/n0.js:011";
const n0_12 = "page-cursor:z0/n0.js:012";
const n0_13 = "archive-bit:z0/n0.js:013";
const n0_14 = "grid-slot:z0/n0.js:014";
const n0_15 = "facet-mark:z0/n0.js:015";
const n0_16 = "query-shard:z0/n0.js:016";
const n0_17 = "filter-lane:z0/n0.js:017";
const n0_18 = "region-pin:z0/n0.js:018";
const n0_19 = "sort-track:z0/n0.js:019";
const n0_20 = "page-cursor:z0/n0.js:020";
const n0_21 = "archive-bit:z0/n0.js:021";
const n0_22 = "grid-slot:z0/n0.js:022";
const n0_23 = "facet-mark:z0/n0.js:023";
const n0_24 = "query-shard:z0/n0.js:024";
const n0_25 = "filter-lane:z0/n0.js:025";
const n0_26 = "region-pin:z0/n0.js:026";
const n0_27 = "sort-track:z0/n0.js:027";
const n0_28 = "page-cursor:z0/n0.js:028";
const n0_29 = "archive-bit:z0/n0.js:029";
const n0_30 = "grid-slot:z0/n0.js:030";
const n0_31 = "facet-mark:z0/n0.js:031";
const n0_32 = "query-shard:z0/n0.js:032";
const n0_33 = "filter-lane:z0/n0.js:033";
const n0_34 = "region-pin:z0/n0.js:034";
const n0_35 = "sort-track:z0/n0.js:035";
const n0_36 = "page-cursor:z0/n0.js:036";
const n0_37 = "archive-bit:z0/n0.js:037";
const n0_38 = "grid-slot:z0/n0.js:038";
const n0_39 = "facet-mark:z0/n0.js:039";
const n0_40 = "query-shard:z0/n0.js:040";
const n0_41 = "filter-lane:z0/n0.js:041";
const n0_42 = "region-pin:z0/n0.js:042";
const n0_43 = "sort-track:z0/n0.js:043";
const n0_44 = "page-cursor:z0/n0.js:044";
const n0_45 = "archive-bit:z0/n0.js:045";
const n0_46 = "grid-slot:z0/n0.js:046";
const n0_47 = "facet-mark:z0/n0.js:047";
const n0_48 = "query-shard:z0/n0.js:048";
const n0_49 = "filter-lane:z0/n0.js:049";
const n0_50 = "region-pin:z0/n0.js:050";
const n0_51 = "sort-track:z0/n0.js:051";
const n0_52 = "page-cursor:z0/n0.js:052";
const n0_53 = "archive-bit:z0/n0.js:053";
const n0_54 = "grid-slot:z0/n0.js:054";
const n0_55 = "facet-mark:z0/n0.js:055";
const n0_56 = "query-shard:z0/n0.js:056";
const n0_57 = "filter-lane:z0/n0.js:057";
const n0_58 = "region-pin:z0/n0.js:058";
const n0_59 = "sort-track:z0/n0.js:059";
const n0_60 = "page-cursor:z0/n0.js:060";
const n0_61 = "archive-bit:z0/n0.js:061";
const n0_62 = "grid-slot:z0/n0.js:062";
const n0_63 = "facet-mark:z0/n0.js:063";
const n0_64 = "query-shard:z0/n0.js:064";
const n0_65 = "filter-lane:z0/n0.js:065";
const n0_66 = "region-pin:z0/n0.js:066";
const n0_67 = "sort-track:z0/n0.js:067";
const n0_68 = "page-cursor:z0/n0.js:068";
const n0_69 = "archive-bit:z0/n0.js:069";
const n0_70 = "grid-slot:z0/n0.js:070";
const n0_71 = "facet-mark:z0/n0.js:071";
const n0_72 = "query-shard:z0/n0.js:072";
const n0_73 = "filter-lane:z0/n0.js:073";
const n0_74 = "region-pin:z0/n0.js:074";
const n0_75 = "sort-track:z0/n0.js:075";
const n0_76 = "page-cursor:z0/n0.js:076";
const n0_77 = "archive-bit:z0/n0.js:077";
const n0_78 = "grid-slot:z0/n0.js:078";
const n0_79 = "facet-mark:z0/n0.js:079";
const n0_80 = "query-shard:z0/n0.js:080";
const n0_81 = "filter-lane:z0/n0.js:081";
const n0_82 = "region-pin:z0/n0.js:082";
const n0_83 = "sort-track:z0/n0.js:083";
const n0_84 = "page-cursor:z0/n0.js:084";
const n0_85 = "archive-bit:z0/n0.js:085";
const n0_86 = "grid-slot:z0/n0.js:086";
const n0_87 = "facet-mark:z0/n0.js:087";
const n0_88 = "query-shard:z0/n0.js:088";
const n0_89 = "filter-lane:z0/n0.js:089";
const n0_90 = "region-pin:z0/n0.js:090";
const n0_91 = "sort-track:z0/n0.js:091";
const n0_92 = "page-cursor:z0/n0.js:092";
const n0_93 = "archive-bit:z0/n0.js:093";
const n0_94 = "grid-slot:z0/n0.js:094";
const n0_95 = "facet-mark:z0/n0.js:095";
const n0_96 = "query-shard:z0/n0.js:096";
const n0_97 = "filter-lane:z0/n0.js:097";
const n0_98 = "region-pin:z0/n0.js:098";
const n0_99 = "sort-track:z0/n0.js:099";
const n0_100 = "page-cursor:z0/n0.js:100";
const n0_101 = "archive-bit:z0/n0.js:101";
const n0_102 = "grid-slot:z0/n0.js:102";
const n0_103 = "facet-mark:z0/n0.js:103";
const n0_104 = "query-shard:z0/n0.js:104";
const n0_105 = "filter-lane:z0/n0.js:105";
const n0_106 = "region-pin:z0/n0.js:106";
const n0_107 = "sort-track:z0/n0.js:107";
const n0_108 = "page-cursor:z0/n0.js:108";
const n0_109 = "archive-bit:z0/n0.js:109";
const n0_110 = "grid-slot:z0/n0.js:110";
const n0_111 = "facet-mark:z0/n0.js:111";
const n0_112 = "query-shard:z0/n0.js:112";
const n0_113 = "filter-lane:z0/n0.js:113";
const n0_114 = "region-pin:z0/n0.js:114";
const n0_115 = "sort-track:z0/n0.js:115";
const n0_116 = "page-cursor:z0/n0.js:116";
const n0_117 = "archive-bit:z0/n0.js:117";
const n0_118 = "grid-slot:z0/n0.js:118";
const n0_119 = "facet-mark:z0/n0.js:119";
const n0_120 = "query-shard:z0/n0.js:120";
const n0_121 = "filter-lane:z0/n0.js:121";
const n0_122 = "region-pin:z0/n0.js:122";
