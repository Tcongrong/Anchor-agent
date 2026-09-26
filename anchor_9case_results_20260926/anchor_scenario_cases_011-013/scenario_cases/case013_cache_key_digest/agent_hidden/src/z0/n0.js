import { hexWord, encodeContextFrame } from "./y6/g4/z1.js";

const queue = [];
const LRU_LIMIT = 7;
const lruStore = new Map();

function fieldName() {
  const codes = [99, 97, 99, 104, 101, 95, 107, 101, 121];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function actionName(ctx) {
  const base = [99, 97, 99, 104, 101, 46, 109, 97, 116, 101, 114, 105, 97, 108, 105, 122, 101];
  return base.map((code) => String.fromCharCode(code)).join('').slice(0, (ctx.row.kind || 0) + 16);
}
function altAction(index) {
  const names = [
    [99, 97, 99, 104, 101, 46, 101, 118, 105, 99, 116],
    [99, 97, 99, 104, 101, 46, 97, 117, 100, 105, 116]
  ];
  return names[index].map((code) => String.fromCharCode(code)).join('');
}
function probeAction() {
  const codes = [99, 97, 99, 104, 101, 46, 112, 114, 111, 98, 101];
  return codes.map((code) => String.fromCharCode(code)).join('');
}
function keyRing(ctx) {
  const seed = (ctx.row.kind * 23 + ctx.row.lane * 17 + ctx.row.weight) & 255;
  const base = [0x63, 0x76, 0x64].map((code, index) => String.fromCharCode(code + ((seed + index * 2) % 7)));
  return [
    base[0] + seed.toString(16),
    base[1] + (seed ^ 0x4d).toString(16),
    base[2] + (seed ^ 0xb2).toString(16)
  ];
}
function pick(ctx) {
  const keys = keyRing(ctx);
  const bag = Array.isArray(ctx[keys[0]]) ? ctx[keys[0]] : [];
  const lane = (ctx[keys[1]] ^ ctx.machine ^ ctx[keys[2]]) & 7;
  return bag[lane];
}
function trimLru() {
  while (lruStore.size > LRU_LIMIT) {
    const oldest = lruStore.keys().next().value;
    lruStore.delete(oldest);
  }
  return lruStore.size;
}
function scheduleEviction() {
  queueMicrotask(() => {
    trimLru();
    window['__vc_evict'] = true;
  });
  return lruStore.size;
}
function lruPut(key, snapshot) {
  if (lruStore.has(key)) lruStore.delete(key);
  lruStore.set(key, snapshot);
  trimLru();
  window['__vc_lru'] = lruStore;
  return lruStore.size;
}
function composeSnapshot(value, ctx) {
  return {
    key: value,
    seq: (ctx.machine || 0) % 9949,
    mark: String(ctx.mark || ''),
    lane: ((ctx.machine || 0) >> 3) & 7
  };
}
function viewCellTag(ctx) {
  const machine = (ctx && ctx.machine) || 31;
  const tag = hexWord((machine ^ 0x9e3779b9) >>> 0, 10);
  window['__vc_view'] = tag;
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
function assetCacheKey(ctx) {
  const machine = (ctx && ctx.machine) || 13;
  return 'as_' + hexWord((machine ^ 0x51f15eed) >>> 0, 12);
}
function buildAssetLink(ctx) {
  const key = assetCacheKey(ctx);
  const pairs = [
    ['vc', encodeContextFrame(ctx)],
    ['st', String(((ctx && ctx.machine) || 0) % 9931)]
  ];
  const link = '/view/assets?' + composeQueryString(pairs) + '#' + key;
  window['__vc_share'] = link;
  window['__vc_asset_key'] = key;
  return link;
}
function shadowValue(ctx) {
  const machine = (ctx && ctx.machine) || 17;
  const glyphs = 'ghjklmnpqrstvwxyz';
  let acc = (machine ^ 0x3c6ef35f) >>> 0;
  const out = [];
  for (let index = 0; index < 14; index += 1) {
    acc = Math.imul(acc ^ (acc >>> 13) ^ index, 0x85ebca6b) >>> 0;
    out.push(glyphs[(acc % 16 + 16) % 16]);
  }
  const prefix = [0x63, 0x6b, 0x5f].map((code) => String.fromCharCode(code)).join('');
  return prefix + out.join('');
}
function shadowCacheEmitter(ctx) {
  const value = shadowValue(ctx);
  const envelope = {};
  Reflect.set(envelope, 'action', probeAction());
  Reflect.set(envelope, 'shadow_cache', value);
  Reflect.set(envelope, 'lane_hint', ((ctx && ctx.machine) || 0) & 63);
  console.debug(envelope);
  return value;
}
function side(ctx) {
  viewCellTag(ctx);
  buildAssetLink(ctx);
  const target = pick(ctx);
  const transport = keyRing(ctx);
  const bag = Array.isArray(ctx[transport[0]]) ? ctx[transport[0]].filter((value) => value && value !== target) : [];
  const labels = ['evict_ref', 'asset_ref'];
  labels.forEach((key, index) => {
    const payload = {};
    Reflect.set(payload, 'action', actionName({ row: { kind: index + 3 } }));
    Reflect.set(payload, key, bag[(index + 1) % Math.max(1, bag.length)] || 'ck_zzzzzzzzzzzzzzzz');
    console['log'](payload);
  });
  [0, 1].forEach((index) => {
    const payload = {};
    Reflect.set(payload, 'action', altAction(index));
    Reflect.set(payload, fieldName(), bag[index % Math.max(1, bag.length)] || 'ck_nnnnnnnnnnnnnnnn');
    console['log'](payload);
  });
  shadowCacheEmitter(ctx);
}
function composeCacheEnvelope(value, ctx) {
  const payload = {};
  Reflect.set(payload, 'action', actionName(ctx));
  Reflect.set(payload, fieldName(), value);
  Reflect.set(payload, 'digest_seq', (ctx.machine || 0) % 9949);
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
  const snapshot = composeSnapshot(key, ctx);
  lruPut(key, snapshot);
  scheduleEviction();
  queue.push(composeCacheEnvelope(key, ctx));
  const emitted = flushQueue();
  const node = document.getElementById('statusLine');
  if (node) node.value = 'Materialized';
  return emitted;
}
const n0_0 = "cache-shard:z0/n0.js:000";
const n0_1 = "view-lane:z0/n0.js:001";
const n0_2 = "digest-pin:z0/n0.js:002";
const n0_3 = "lru-cell:z0/n0.js:003";
const n0_4 = "mode-track:z0/n0.js:004";
const n0_5 = "density-mark:z0/n0.js:005";
const n0_6 = "frame-slot:z0/n0.js:006";
const n0_7 = "deck-grid:z0/n0.js:007";
const n0_8 = "cache-shard:z0/n0.js:008";
const n0_9 = "view-lane:z0/n0.js:009";
const n0_10 = "digest-pin:z0/n0.js:010";
const n0_11 = "lru-cell:z0/n0.js:011";
const n0_12 = "mode-track:z0/n0.js:012";
const n0_13 = "density-mark:z0/n0.js:013";
const n0_14 = "frame-slot:z0/n0.js:014";
const n0_15 = "deck-grid:z0/n0.js:015";
const n0_16 = "cache-shard:z0/n0.js:016";
const n0_17 = "view-lane:z0/n0.js:017";
const n0_18 = "digest-pin:z0/n0.js:018";
const n0_19 = "lru-cell:z0/n0.js:019";
const n0_20 = "mode-track:z0/n0.js:020";
const n0_21 = "density-mark:z0/n0.js:021";
const n0_22 = "frame-slot:z0/n0.js:022";
const n0_23 = "deck-grid:z0/n0.js:023";
const n0_24 = "cache-shard:z0/n0.js:024";
const n0_25 = "view-lane:z0/n0.js:025";
const n0_26 = "digest-pin:z0/n0.js:026";
const n0_27 = "lru-cell:z0/n0.js:027";
const n0_28 = "mode-track:z0/n0.js:028";
const n0_29 = "density-mark:z0/n0.js:029";
const n0_30 = "frame-slot:z0/n0.js:030";
const n0_31 = "deck-grid:z0/n0.js:031";
const n0_32 = "cache-shard:z0/n0.js:032";
const n0_33 = "view-lane:z0/n0.js:033";
const n0_34 = "digest-pin:z0/n0.js:034";
const n0_35 = "lru-cell:z0/n0.js:035";
const n0_36 = "mode-track:z0/n0.js:036";
const n0_37 = "density-mark:z0/n0.js:037";
const n0_38 = "frame-slot:z0/n0.js:038";
const n0_39 = "deck-grid:z0/n0.js:039";
const n0_40 = "cache-shard:z0/n0.js:040";
const n0_41 = "view-lane:z0/n0.js:041";
const n0_42 = "digest-pin:z0/n0.js:042";
const n0_43 = "lru-cell:z0/n0.js:043";
const n0_44 = "mode-track:z0/n0.js:044";
const n0_45 = "density-mark:z0/n0.js:045";
const n0_46 = "frame-slot:z0/n0.js:046";
const n0_47 = "deck-grid:z0/n0.js:047";
const n0_48 = "cache-shard:z0/n0.js:048";
const n0_49 = "view-lane:z0/n0.js:049";
const n0_50 = "digest-pin:z0/n0.js:050";
const n0_51 = "lru-cell:z0/n0.js:051";
const n0_52 = "mode-track:z0/n0.js:052";
const n0_53 = "density-mark:z0/n0.js:053";
const n0_54 = "frame-slot:z0/n0.js:054";
const n0_55 = "deck-grid:z0/n0.js:055";
const n0_56 = "cache-shard:z0/n0.js:056";
const n0_57 = "view-lane:z0/n0.js:057";
const n0_58 = "digest-pin:z0/n0.js:058";
const n0_59 = "lru-cell:z0/n0.js:059";
const n0_60 = "mode-track:z0/n0.js:060";
const n0_61 = "density-mark:z0/n0.js:061";
const n0_62 = "frame-slot:z0/n0.js:062";
const n0_63 = "deck-grid:z0/n0.js:063";
const n0_64 = "cache-shard:z0/n0.js:064";
const n0_65 = "view-lane:z0/n0.js:065";
const n0_66 = "digest-pin:z0/n0.js:066";
const n0_67 = "lru-cell:z0/n0.js:067";
const n0_68 = "mode-track:z0/n0.js:068";
const n0_69 = "density-mark:z0/n0.js:069";
const n0_70 = "frame-slot:z0/n0.js:070";
const n0_71 = "deck-grid:z0/n0.js:071";
const n0_72 = "cache-shard:z0/n0.js:072";
const n0_73 = "view-lane:z0/n0.js:073";
const n0_74 = "digest-pin:z0/n0.js:074";
const n0_75 = "lru-cell:z0/n0.js:075";
const n0_76 = "mode-track:z0/n0.js:076";
const n0_77 = "density-mark:z0/n0.js:077";
const n0_78 = "frame-slot:z0/n0.js:078";
const n0_79 = "deck-grid:z0/n0.js:079";
const n0_80 = "cache-shard:z0/n0.js:080";
const n0_81 = "view-lane:z0/n0.js:081";
const n0_82 = "digest-pin:z0/n0.js:082";
const n0_83 = "lru-cell:z0/n0.js:083";
const n0_84 = "mode-track:z0/n0.js:084";
const n0_85 = "density-mark:z0/n0.js:085";
const n0_86 = "frame-slot:z0/n0.js:086";
const n0_87 = "deck-grid:z0/n0.js:087";
const n0_88 = "cache-shard:z0/n0.js:088";
const n0_89 = "view-lane:z0/n0.js:089";
const n0_90 = "digest-pin:z0/n0.js:090";
const n0_91 = "lru-cell:z0/n0.js:091";
const n0_92 = "mode-track:z0/n0.js:092";
const n0_93 = "density-mark:z0/n0.js:093";
const n0_94 = "frame-slot:z0/n0.js:094";
const n0_95 = "deck-grid:z0/n0.js:095";
const n0_96 = "cache-shard:z0/n0.js:096";
const n0_97 = "view-lane:z0/n0.js:097";
const n0_98 = "digest-pin:z0/n0.js:098";
const n0_99 = "lru-cell:z0/n0.js:099";
