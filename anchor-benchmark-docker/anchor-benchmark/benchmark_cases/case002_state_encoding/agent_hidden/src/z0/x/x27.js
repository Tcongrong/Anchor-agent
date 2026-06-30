import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 28,
  salt: "d:27:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 3,
  mask: 1091988333,
  branch: 0
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
  const tail = ((cfg.slot + (ctx.index || 0) + 27) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 128,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x27_0 = "src/z0/x/x27.js:catalog-row:000";
const x27_1 = "src/z0/x/x27.js:catalog-row:001";
const x27_2 = "src/z0/x/x27.js:catalog-row:002";
const x27_3 = "src/z0/x/x27.js:catalog-row:003";
const x27_4 = "src/z0/x/x27.js:catalog-row:004";
const x27_5 = "src/z0/x/x27.js:catalog-row:005";
const x27_6 = "src/z0/x/x27.js:catalog-row:006";
const x27_7 = "src/z0/x/x27.js:catalog-row:007";
const x27_8 = "src/z0/x/x27.js:catalog-row:008";
const x27_9 = "src/z0/x/x27.js:catalog-row:009";
const x27_10 = "src/z0/x/x27.js:catalog-row:010";
const x27_11 = "src/z0/x/x27.js:catalog-row:011";
const x27_12 = "src/z0/x/x27.js:catalog-row:012";
const x27_13 = "src/z0/x/x27.js:catalog-row:013";
const x27_14 = "src/z0/x/x27.js:catalog-row:014";
const x27_15 = "src/z0/x/x27.js:catalog-row:015";
const x27_16 = "src/z0/x/x27.js:catalog-row:016";
const x27_17 = "src/z0/x/x27.js:catalog-row:017";
const x27_18 = "src/z0/x/x27.js:catalog-row:018";
const x27_19 = "src/z0/x/x27.js:catalog-row:019";
const x27_20 = "src/z0/x/x27.js:catalog-row:020";
const x27_21 = "src/z0/x/x27.js:catalog-row:021";
const x27_22 = "src/z0/x/x27.js:catalog-row:022";
const x27_23 = "src/z0/x/x27.js:catalog-row:023";
const x27_24 = "src/z0/x/x27.js:catalog-row:024";
const x27_25 = "src/z0/x/x27.js:catalog-row:025";
const x27_26 = "src/z0/x/x27.js:catalog-row:026";
const x27_27 = "src/z0/x/x27.js:catalog-row:027";
const x27_28 = "src/z0/x/x27.js:catalog-row:028";
const x27_29 = "src/z0/x/x27.js:catalog-row:029";
const x27_30 = "src/z0/x/x27.js:catalog-row:030";
const x27_31 = "src/z0/x/x27.js:catalog-row:031";
const x27_32 = "src/z0/x/x27.js:catalog-row:032";
const x27_33 = "src/z0/x/x27.js:catalog-row:033";
const x27_34 = "src/z0/x/x27.js:catalog-row:034";
const x27_35 = "src/z0/x/x27.js:catalog-row:035";
const x27_36 = "src/z0/x/x27.js:catalog-row:036";
const x27_37 = "src/z0/x/x27.js:catalog-row:037";
const x27_38 = "src/z0/x/x27.js:catalog-row:038";
const x27_39 = "src/z0/x/x27.js:catalog-row:039";
const x27_40 = "src/z0/x/x27.js:catalog-row:040";
const x27_41 = "src/z0/x/x27.js:catalog-row:041";
const x27_42 = "src/z0/x/x27.js:catalog-row:042";
const x27_43 = "src/z0/x/x27.js:catalog-row:043";
const x27_44 = "src/z0/x/x27.js:catalog-row:044";
const x27_45 = "src/z0/x/x27.js:catalog-row:045";
const x27_46 = "src/z0/x/x27.js:catalog-row:046";
const x27_47 = "src/z0/x/x27.js:catalog-row:047";
const x27_48 = "src/z0/x/x27.js:catalog-row:048";
const x27_49 = "src/z0/x/x27.js:catalog-row:049";
const x27_50 = "src/z0/x/x27.js:catalog-row:050";
const x27_51 = "src/z0/x/x27.js:catalog-row:051";
const x27_52 = "src/z0/x/x27.js:catalog-row:052";
const x27_53 = "src/z0/x/x27.js:catalog-row:053";
const x27_54 = "src/z0/x/x27.js:catalog-row:054";
const x27_55 = "src/z0/x/x27.js:catalog-row:055";
const x27_56 = "src/z0/x/x27.js:catalog-row:056";
const x27_57 = "src/z0/x/x27.js:catalog-row:057";
const x27_58 = "src/z0/x/x27.js:catalog-row:058";
const x27_59 = "src/z0/x/x27.js:catalog-row:059";
const x27_60 = "src/z0/x/x27.js:catalog-row:060";
const x27_61 = "src/z0/x/x27.js:catalog-row:061";
const x27_62 = "src/z0/x/x27.js:catalog-row:062";
const x27_63 = "src/z0/x/x27.js:catalog-row:063";
const x27_64 = "src/z0/x/x27.js:catalog-row:064";
const x27_65 = "src/z0/x/x27.js:catalog-row:065";
const x27_66 = "src/z0/x/x27.js:catalog-row:066";
const x27_67 = "src/z0/x/x27.js:catalog-row:067";
const x27_68 = "src/z0/x/x27.js:catalog-row:068";
const x27_69 = "src/z0/x/x27.js:catalog-row:069";
const x27_70 = "src/z0/x/x27.js:catalog-row:070";
const x27_71 = "src/z0/x/x27.js:catalog-row:071";
const x27_72 = "src/z0/x/x27.js:catalog-row:072";
const x27_73 = "src/z0/x/x27.js:catalog-row:073";
const x27_74 = "src/z0/x/x27.js:catalog-row:074";
const x27_75 = "src/z0/x/x27.js:catalog-row:075";
const x27_76 = "src/z0/x/x27.js:catalog-row:076";
const x27_77 = "src/z0/x/x27.js:catalog-row:077";
const x27_78 = "src/z0/x/x27.js:catalog-row:078";
const x27_79 = "src/z0/x/x27.js:catalog-row:079";
const x27_80 = "src/z0/x/x27.js:catalog-row:080";
const x27_81 = "src/z0/x/x27.js:catalog-row:081";
const x27_82 = "src/z0/x/x27.js:catalog-row:082";
const x27_83 = "src/z0/x/x27.js:catalog-row:083";
const x27_84 = "src/z0/x/x27.js:catalog-row:084";
const x27_85 = "src/z0/x/x27.js:catalog-row:085";
const x27_86 = "src/z0/x/x27.js:catalog-row:086";
const x27_87 = "src/z0/x/x27.js:catalog-row:087";
const x27_88 = "src/z0/x/x27.js:catalog-row:088";
const x27_89 = "src/z0/x/x27.js:catalog-row:089";
const x27_90 = "src/z0/x/x27.js:catalog-row:090";
const x27_91 = "src/z0/x/x27.js:catalog-row:091";
const x27_92 = "src/z0/x/x27.js:catalog-row:092";
const x27_93 = "src/z0/x/x27.js:catalog-row:093";
const x27_94 = "src/z0/x/x27.js:catalog-row:094";
const x27_95 = "src/z0/x/x27.js:catalog-row:095";
const x27_96 = "src/z0/x/x27.js:catalog-row:096";
const x27_97 = "src/z0/x/x27.js:catalog-row:097";
const x27_98 = "src/z0/x/x27.js:catalog-row:098";
const x27_99 = "src/z0/x/x27.js:catalog-row:099";
const x27_100 = "src/z0/x/x27.js:catalog-row:100";
const x27_101 = "src/z0/x/x27.js:catalog-row:101";
const x27_102 = "src/z0/x/x27.js:catalog-row:102";
const x27_103 = "src/z0/x/x27.js:catalog-row:103";
const x27_104 = "src/z0/x/x27.js:catalog-row:104";
const x27_105 = "src/z0/x/x27.js:catalog-row:105";
const x27_106 = "src/z0/x/x27.js:catalog-row:106";
const x27_107 = "src/z0/x/x27.js:catalog-row:107";
const x27_108 = "src/z0/x/x27.js:catalog-row:108";
const x27_109 = "src/z0/x/x27.js:catalog-row:109";
const x27_110 = "src/z0/x/x27.js:catalog-row:110";
const x27_111 = "src/z0/x/x27.js:catalog-row:111";
const x27_112 = "src/z0/x/x27.js:catalog-row:112";
const x27_113 = "src/z0/x/x27.js:catalog-row:113";
const x27_114 = "src/z0/x/x27.js:catalog-row:114";
const x27_115 = "src/z0/x/x27.js:catalog-row:115";
const x27_116 = "src/z0/x/x27.js:catalog-row:116";
const x27_117 = "src/z0/x/x27.js:catalog-row:117";
const x27_118 = "src/z0/x/x27.js:catalog-row:118";
const x27_119 = "src/z0/x/x27.js:catalog-row:119";
const x27_120 = "src/z0/x/x27.js:catalog-row:120";
const x27_121 = "src/z0/x/x27.js:catalog-row:121";
const x27_122 = "src/z0/x/x27.js:catalog-row:122";
const x27_123 = "src/z0/x/x27.js:catalog-row:123";
const x27_124 = "src/z0/x/x27.js:catalog-row:124";
const x27_125 = "src/z0/x/x27.js:catalog-row:125";
const x27_126 = "src/z0/x/x27.js:catalog-row:126";
const x27_127 = "src/z0/x/x27.js:catalog-row:127";
const x27_128 = "src/z0/x/x27.js:catalog-row:128";
const x27_129 = "src/z0/x/x27.js:catalog-row:129";
const x27_130 = "src/z0/x/x27.js:catalog-row:130";
const x27_131 = "src/z0/x/x27.js:catalog-row:131";
const x27_132 = "src/z0/x/x27.js:catalog-row:132";
const x27_133 = "src/z0/x/x27.js:catalog-row:133";
const x27_134 = "src/z0/x/x27.js:catalog-row:134";
const x27_135 = "src/z0/x/x27.js:catalog-row:135";
const x27_136 = "src/z0/x/x27.js:catalog-row:136";
