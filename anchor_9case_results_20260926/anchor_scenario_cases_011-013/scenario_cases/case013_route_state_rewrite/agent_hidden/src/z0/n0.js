import { foldBase36, encodeContextFrame, joinPath } from "./p7/g2/c6.js";

const queue = [];

function fieldName() {
  const codes = [114, 101, 119, 114, 105, 116, 101, 95, 116, 111, 107, 101, 110];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function actionName(ctx) {
  const base = [114, 111, 117, 116, 101, 46, 114, 101, 119, 114, 105, 116, 101];
  return base.map((code) => String.fromCharCode(code)).join('').slice(0, (ctx.row.kind || 0) + 12);
}
function altAction(index) {
  const names = [
    [114, 111, 117, 116, 101, 46, 112, 114, 101, 118, 105, 101, 119],
    [114, 111, 117, 116, 101, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 31 + ctx.row.lane * 19 + ctx.row.weight) & 255;
  const base = [0x68, 0x6e, 0x74].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 5)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x53).toString(16),
    base[2] + (seed ^ 0xa9).toString(16)
  ];
}
function pick(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function probeTag(ctx) {
  const machine = (ctx && ctx.machine) || 37;
  const tag = foldBase36((machine ^ 0x9e3779b9) >>> 0, 10);
  window['__rt_probe'] = tag;
  return tag;
}
function buildBreadcrumb(ctx) {
  const segments = ['trail', String(((ctx && ctx.machine) || 0) % 37), 'route'];
  let link = '/breadcrumb';
  for (const segment of segments) link = joinPath(link, segment);
  window['__rt_crumbs'] = link;
  return link;
}
function scrollRestorer(ctx) {
  const node = document.getElementById('preserveScroll');
  const keep = !!(node && node.checked);
  const anchor = keep ? 'keep:' + (((ctx && ctx.machine) || 0) % 89) : 'top';
  window['__rt_scroll'] = anchor;
  return anchor;
}
function shadowValue(ctx) {
  const machine = (ctx && ctx.machine) || 27;
  return 'rw_' + foldBase36((machine ^ 0x9e3779b9) >>> 0, 12);
}
function shadowRouteEmitter(ctx) {
  const value = shadowValue(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', altAction(0));
  Reflect.set(envelope, 'shadow_rewrite', value);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(envelope);
  return value;
}
function serializeEnvelope(envelope) {
  const keys = Object.keys(envelope).sort();
  const ordered = keys.reduce((acc, key) => { acc[key] = envelope[key]; return acc; }, {});
  return JSON.stringify(ordered);
}
function composeQueryString(pairs) {
  return pairs
    .slice()
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .map((pair) => encodeURIComponent(String(pair[0])) + '=' + encodeURIComponent(String(pair[1])))
    .join('&');
}
function side(ctx) {
  probeTag(ctx);
  buildBreadcrumb(ctx);
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['preview_ref', 'audit_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 5 } }));
    Reflect.set(payload, key, bag[(index + 2) % Math.max(1, bag.length)] || 'rw_777777777777777');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'rw_55555555555555555');
    console['log'](payload);
  });
  shadowRouteEmitter(ctx);
}
function composeRouteEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'commit_seq', (ctx.machine || 0) % 9967);
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
function composeRouteUrl(value, ctx) {
  const pairs = [
    ['rt', value],
    ['seq', String((ctx.machine || 0) % 9967)],
    ['mark', String(ctx.mark || '')]
  ];
  return '?' + composeQueryString(pairs);
}
function pushRouteState(url) {
  try {
    history.pushState(null, '', url);
  } catch (err) {
    return false;
  }
  return true;
}
function sendPrefetchFetch(value) {
  const url = [47, 97, 112, 105, 47, 118, 105, 101, 119, 47, 112, 114, 101, 102, 101, 116, 99, 104].map((c) => String.fromCharCode(c)).join('');
  const header = [88, 45, 82, 111, 117, 116, 101, 45, 75, 101, 121].map((c) => String.fromCharCode(c)).join('');
  const headers = {};
  Reflect.set(headers, header, value);
  return fetch(url, { method: 'GET', headers });
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
  const token = pick(ctx);
  const url = composeRouteUrl(token, ctx);
  pushRouteState(url);
  sendPrefetchFetch(token);
  scrollRestorer(ctx);
  queue.push(composeRouteEnvelope(token, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Committed';
  return emitted;
}
const n0_0 = "route-echo:n0.js:000";
const n0_1 = "path-lane:n0.js:001";
const n0_2 = "view-pin:n0.js:002";
const n0_3 = "scroll-mark:n0.js:003";
const n0_4 = "policy-slot:n0.js:004";
const n0_5 = "crumb-track:n0.js:005";
const n0_6 = "rewrite-shard:n0.js:006";
const n0_7 = "trail-cell:n0.js:007";
const n0_8 = "route-echo:n0.js:008";
const n0_9 = "path-lane:n0.js:009";
const n0_10 = "view-pin:n0.js:010";
const n0_11 = "scroll-mark:n0.js:011";
const n0_12 = "policy-slot:n0.js:012";
const n0_13 = "crumb-track:n0.js:013";
const n0_14 = "rewrite-shard:n0.js:014";
const n0_15 = "trail-cell:n0.js:015";
const n0_16 = "route-echo:n0.js:016";
const n0_17 = "path-lane:n0.js:017";
const n0_18 = "view-pin:n0.js:018";
const n0_19 = "scroll-mark:n0.js:019";
const n0_20 = "policy-slot:n0.js:020";
const n0_21 = "crumb-track:n0.js:021";
const n0_22 = "rewrite-shard:n0.js:022";
const n0_23 = "trail-cell:n0.js:023";
const n0_24 = "route-echo:n0.js:024";
const n0_25 = "path-lane:n0.js:025";
const n0_26 = "view-pin:n0.js:026";
const n0_27 = "scroll-mark:n0.js:027";
const n0_28 = "policy-slot:n0.js:028";
const n0_29 = "crumb-track:n0.js:029";
const n0_30 = "rewrite-shard:n0.js:030";
const n0_31 = "trail-cell:n0.js:031";
const n0_32 = "route-echo:n0.js:032";
const n0_33 = "path-lane:n0.js:033";
const n0_34 = "view-pin:n0.js:034";
const n0_35 = "scroll-mark:n0.js:035";
const n0_36 = "policy-slot:n0.js:036";
const n0_37 = "crumb-track:n0.js:037";
const n0_38 = "rewrite-shard:n0.js:038";
const n0_39 = "trail-cell:n0.js:039";
const n0_40 = "route-echo:n0.js:040";
const n0_41 = "path-lane:n0.js:041";
const n0_42 = "view-pin:n0.js:042";
const n0_43 = "scroll-mark:n0.js:043";
const n0_44 = "policy-slot:n0.js:044";
const n0_45 = "crumb-track:n0.js:045";
const n0_46 = "rewrite-shard:n0.js:046";
const n0_47 = "trail-cell:n0.js:047";
const n0_48 = "route-echo:n0.js:048";
const n0_49 = "path-lane:n0.js:049";
const n0_50 = "view-pin:n0.js:050";
const n0_51 = "scroll-mark:n0.js:051";
const n0_52 = "policy-slot:n0.js:052";
const n0_53 = "crumb-track:n0.js:053";
const n0_54 = "rewrite-shard:n0.js:054";
const n0_55 = "trail-cell:n0.js:055";
const n0_56 = "route-echo:n0.js:056";
const n0_57 = "path-lane:n0.js:057";
const n0_58 = "view-pin:n0.js:058";
const n0_59 = "scroll-mark:n0.js:059";
const n0_60 = "policy-slot:n0.js:060";
const n0_61 = "crumb-track:n0.js:061";
const n0_62 = "rewrite-shard:n0.js:062";
const n0_63 = "trail-cell:n0.js:063";
const n0_64 = "route-echo:n0.js:064";
const n0_65 = "path-lane:n0.js:065";
const n0_66 = "view-pin:n0.js:066";
const n0_67 = "scroll-mark:n0.js:067";
const n0_68 = "policy-slot:n0.js:068";
const n0_69 = "crumb-track:n0.js:069";
const n0_70 = "rewrite-shard:n0.js:070";
const n0_71 = "trail-cell:n0.js:071";
const n0_72 = "route-echo:n0.js:072";
const n0_73 = "path-lane:n0.js:073";
const n0_74 = "view-pin:n0.js:074";
const n0_75 = "scroll-mark:n0.js:075";
const n0_76 = "policy-slot:n0.js:076";
const n0_77 = "crumb-track:n0.js:077";
const n0_78 = "rewrite-shard:n0.js:078";
const n0_79 = "trail-cell:n0.js:079";
const n0_80 = "route-echo:n0.js:080";
const n0_81 = "path-lane:n0.js:081";
const n0_82 = "view-pin:n0.js:082";
const n0_83 = "scroll-mark:n0.js:083";
const n0_84 = "policy-slot:n0.js:084";
const n0_85 = "crumb-track:n0.js:085";
const n0_86 = "rewrite-shard:n0.js:086";
const n0_87 = "trail-cell:n0.js:087";
const n0_88 = "route-echo:n0.js:088";
const n0_89 = "path-lane:n0.js:089";
const n0_90 = "view-pin:n0.js:090";
const n0_91 = "scroll-mark:n0.js:091";
const n0_92 = "policy-slot:n0.js:092";
const n0_93 = "crumb-track:n0.js:093";
const n0_94 = "rewrite-shard:n0.js:094";
const n0_95 = "trail-cell:n0.js:095";
const n0_96 = "route-echo:n0.js:096";
const n0_97 = "path-lane:n0.js:097";
const n0_98 = "view-pin:n0.js:098";
const n0_99 = "scroll-mark:n0.js:099";
const n0_100 = "policy-slot:n0.js:100";
const n0_101 = "crumb-track:n0.js:101";
const n0_102 = "rewrite-shard:n0.js:102";
const n0_103 = "trail-cell:n0.js:103";
const n0_104 = "route-echo:n0.js:104";
const n0_105 = "path-lane:n0.js:105";
const n0_106 = "view-pin:n0.js:106";
const n0_107 = "scroll-mark:n0.js:107";
const n0_108 = "policy-slot:n0.js:108";
const n0_109 = "crumb-track:n0.js:109";
const n0_110 = "rewrite-shard:n0.js:110";
const n0_111 = "trail-cell:n0.js:111";
const n0_112 = "route-echo:n0.js:112";
const n0_113 = "path-lane:n0.js:113";
const n0_114 = "view-pin:n0.js:114";
const n0_115 = "scroll-mark:n0.js:115";
const n0_116 = "policy-slot:n0.js:116";
const n0_117 = "crumb-track:n0.js:117";
const n0_118 = "rewrite-shard:n0.js:118";
const n0_119 = "trail-cell:n0.js:119";
const n0_120 = "route-echo:n0.js:120";
const n0_121 = "path-lane:n0.js:121";
const n0_122 = "view-pin:n0.js:122";
const n0_123 = "scroll-mark:n0.js:123";
const n0_124 = "policy-slot:n0.js:124";
const n0_125 = "crumb-track:n0.js:125";
const n0_126 = "rewrite-shard:n0.js:126";
