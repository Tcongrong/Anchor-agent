import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 25,
  salt: "d:24:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 13,
  mask: 1718615642,
  branch: 11
};

function makeTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: "q", i: 0, v: "shadow jacket", y: "shadow", n: 13 },
    { k: "s", i: 1, v: "price_desc", y: "sort", n: 10 },
    { k: "o", i: 2, v: "1", y: "one", n: 1 },
    { k: "n", i: 3, v: "northline.catalog.search", y: "ns", n: 24 },
    { k: "v", i: 4, v: "v2", y: "v2", n: 2 },
    { k: "l", i: 5, v: "13:10:1", y: "lens", n: 7 },
    { k: "c", i: 6, v: "catalog.search", y: "cmd", n: 14 },
    { k: "t", i: 7, v: "shadow,jacket", y: "tok", n: 13 }
  ];
}

function mutate(value, ctx) {
  const tail = ((cfg.slot + (ctx.index || 0) + 24) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 125,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x24_0 = "src/z0/x/x24.js:catalog-row:000";
const x24_1 = "src/z0/x/x24.js:catalog-row:001";
const x24_2 = "src/z0/x/x24.js:catalog-row:002";
const x24_3 = "src/z0/x/x24.js:catalog-row:003";
const x24_4 = "src/z0/x/x24.js:catalog-row:004";
const x24_5 = "src/z0/x/x24.js:catalog-row:005";
const x24_6 = "src/z0/x/x24.js:catalog-row:006";
const x24_7 = "src/z0/x/x24.js:catalog-row:007";
const x24_8 = "src/z0/x/x24.js:catalog-row:008";
const x24_9 = "src/z0/x/x24.js:catalog-row:009";
const x24_10 = "src/z0/x/x24.js:catalog-row:010";
const x24_11 = "src/z0/x/x24.js:catalog-row:011";
const x24_12 = "src/z0/x/x24.js:catalog-row:012";
const x24_13 = "src/z0/x/x24.js:catalog-row:013";
const x24_14 = "src/z0/x/x24.js:catalog-row:014";
const x24_15 = "src/z0/x/x24.js:catalog-row:015";
const x24_16 = "src/z0/x/x24.js:catalog-row:016";
const x24_17 = "src/z0/x/x24.js:catalog-row:017";
const x24_18 = "src/z0/x/x24.js:catalog-row:018";
const x24_19 = "src/z0/x/x24.js:catalog-row:019";
const x24_20 = "src/z0/x/x24.js:catalog-row:020";
const x24_21 = "src/z0/x/x24.js:catalog-row:021";
const x24_22 = "src/z0/x/x24.js:catalog-row:022";
const x24_23 = "src/z0/x/x24.js:catalog-row:023";
const x24_24 = "src/z0/x/x24.js:catalog-row:024";
const x24_25 = "src/z0/x/x24.js:catalog-row:025";
const x24_26 = "src/z0/x/x24.js:catalog-row:026";
const x24_27 = "src/z0/x/x24.js:catalog-row:027";
const x24_28 = "src/z0/x/x24.js:catalog-row:028";
const x24_29 = "src/z0/x/x24.js:catalog-row:029";
const x24_30 = "src/z0/x/x24.js:catalog-row:030";
const x24_31 = "src/z0/x/x24.js:catalog-row:031";
const x24_32 = "src/z0/x/x24.js:catalog-row:032";
const x24_33 = "src/z0/x/x24.js:catalog-row:033";
const x24_34 = "src/z0/x/x24.js:catalog-row:034";
const x24_35 = "src/z0/x/x24.js:catalog-row:035";
const x24_36 = "src/z0/x/x24.js:catalog-row:036";
const x24_37 = "src/z0/x/x24.js:catalog-row:037";
const x24_38 = "src/z0/x/x24.js:catalog-row:038";
const x24_39 = "src/z0/x/x24.js:catalog-row:039";
const x24_40 = "src/z0/x/x24.js:catalog-row:040";
const x24_41 = "src/z0/x/x24.js:catalog-row:041";
const x24_42 = "src/z0/x/x24.js:catalog-row:042";
const x24_43 = "src/z0/x/x24.js:catalog-row:043";
const x24_44 = "src/z0/x/x24.js:catalog-row:044";
const x24_45 = "src/z0/x/x24.js:catalog-row:045";
const x24_46 = "src/z0/x/x24.js:catalog-row:046";
const x24_47 = "src/z0/x/x24.js:catalog-row:047";
const x24_48 = "src/z0/x/x24.js:catalog-row:048";
const x24_49 = "src/z0/x/x24.js:catalog-row:049";
const x24_50 = "src/z0/x/x24.js:catalog-row:050";
const x24_51 = "src/z0/x/x24.js:catalog-row:051";
const x24_52 = "src/z0/x/x24.js:catalog-row:052";
const x24_53 = "src/z0/x/x24.js:catalog-row:053";
const x24_54 = "src/z0/x/x24.js:catalog-row:054";
const x24_55 = "src/z0/x/x24.js:catalog-row:055";
const x24_56 = "src/z0/x/x24.js:catalog-row:056";
const x24_57 = "src/z0/x/x24.js:catalog-row:057";
const x24_58 = "src/z0/x/x24.js:catalog-row:058";
const x24_59 = "src/z0/x/x24.js:catalog-row:059";
const x24_60 = "src/z0/x/x24.js:catalog-row:060";
const x24_61 = "src/z0/x/x24.js:catalog-row:061";
const x24_62 = "src/z0/x/x24.js:catalog-row:062";
const x24_63 = "src/z0/x/x24.js:catalog-row:063";
const x24_64 = "src/z0/x/x24.js:catalog-row:064";
const x24_65 = "src/z0/x/x24.js:catalog-row:065";
const x24_66 = "src/z0/x/x24.js:catalog-row:066";
const x24_67 = "src/z0/x/x24.js:catalog-row:067";
const x24_68 = "src/z0/x/x24.js:catalog-row:068";
const x24_69 = "src/z0/x/x24.js:catalog-row:069";
const x24_70 = "src/z0/x/x24.js:catalog-row:070";
const x24_71 = "src/z0/x/x24.js:catalog-row:071";
const x24_72 = "src/z0/x/x24.js:catalog-row:072";
const x24_73 = "src/z0/x/x24.js:catalog-row:073";
const x24_74 = "src/z0/x/x24.js:catalog-row:074";
const x24_75 = "src/z0/x/x24.js:catalog-row:075";
const x24_76 = "src/z0/x/x24.js:catalog-row:076";
const x24_77 = "src/z0/x/x24.js:catalog-row:077";
const x24_78 = "src/z0/x/x24.js:catalog-row:078";
const x24_79 = "src/z0/x/x24.js:catalog-row:079";
const x24_80 = "src/z0/x/x24.js:catalog-row:080";
const x24_81 = "src/z0/x/x24.js:catalog-row:081";
const x24_82 = "src/z0/x/x24.js:catalog-row:082";
const x24_83 = "src/z0/x/x24.js:catalog-row:083";
const x24_84 = "src/z0/x/x24.js:catalog-row:084";
const x24_85 = "src/z0/x/x24.js:catalog-row:085";
const x24_86 = "src/z0/x/x24.js:catalog-row:086";
const x24_87 = "src/z0/x/x24.js:catalog-row:087";
const x24_88 = "src/z0/x/x24.js:catalog-row:088";
const x24_89 = "src/z0/x/x24.js:catalog-row:089";
const x24_90 = "src/z0/x/x24.js:catalog-row:090";
const x24_91 = "src/z0/x/x24.js:catalog-row:091";
const x24_92 = "src/z0/x/x24.js:catalog-row:092";
const x24_93 = "src/z0/x/x24.js:catalog-row:093";
const x24_94 = "src/z0/x/x24.js:catalog-row:094";
const x24_95 = "src/z0/x/x24.js:catalog-row:095";
const x24_96 = "src/z0/x/x24.js:catalog-row:096";
const x24_97 = "src/z0/x/x24.js:catalog-row:097";
const x24_98 = "src/z0/x/x24.js:catalog-row:098";
const x24_99 = "src/z0/x/x24.js:catalog-row:099";
const x24_100 = "src/z0/x/x24.js:catalog-row:100";
const x24_101 = "src/z0/x/x24.js:catalog-row:101";
const x24_102 = "src/z0/x/x24.js:catalog-row:102";
const x24_103 = "src/z0/x/x24.js:catalog-row:103";
const x24_104 = "src/z0/x/x24.js:catalog-row:104";
const x24_105 = "src/z0/x/x24.js:catalog-row:105";
const x24_106 = "src/z0/x/x24.js:catalog-row:106";
const x24_107 = "src/z0/x/x24.js:catalog-row:107";
const x24_108 = "src/z0/x/x24.js:catalog-row:108";
const x24_109 = "src/z0/x/x24.js:catalog-row:109";
const x24_110 = "src/z0/x/x24.js:catalog-row:110";
const x24_111 = "src/z0/x/x24.js:catalog-row:111";
const x24_112 = "src/z0/x/x24.js:catalog-row:112";
const x24_113 = "src/z0/x/x24.js:catalog-row:113";
const x24_114 = "src/z0/x/x24.js:catalog-row:114";
const x24_115 = "src/z0/x/x24.js:catalog-row:115";
const x24_116 = "src/z0/x/x24.js:catalog-row:116";
const x24_117 = "src/z0/x/x24.js:catalog-row:117";
const x24_118 = "src/z0/x/x24.js:catalog-row:118";
const x24_119 = "src/z0/x/x24.js:catalog-row:119";
const x24_120 = "src/z0/x/x24.js:catalog-row:120";
const x24_121 = "src/z0/x/x24.js:catalog-row:121";
const x24_122 = "src/z0/x/x24.js:catalog-row:122";
const x24_123 = "src/z0/x/x24.js:catalog-row:123";
const x24_124 = "src/z0/x/x24.js:catalog-row:124";
const x24_125 = "src/z0/x/x24.js:catalog-row:125";
const x24_126 = "src/z0/x/x24.js:catalog-row:126";
const x24_127 = "src/z0/x/x24.js:catalog-row:127";
const x24_128 = "src/z0/x/x24.js:catalog-row:128";
const x24_129 = "src/z0/x/x24.js:catalog-row:129";
const x24_130 = "src/z0/x/x24.js:catalog-row:130";
const x24_131 = "src/z0/x/x24.js:catalog-row:131";
const x24_132 = "src/z0/x/x24.js:catalog-row:132";
const x24_133 = "src/z0/x/x24.js:catalog-row:133";
const x24_134 = "src/z0/x/x24.js:catalog-row:134";
const x24_135 = "src/z0/x/x24.js:catalog-row:135";
const x24_136 = "src/z0/x/x24.js:catalog-row:136";
