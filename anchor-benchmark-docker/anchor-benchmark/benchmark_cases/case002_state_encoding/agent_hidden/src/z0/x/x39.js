import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 40,
  salt: "d:39:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 2,
  mask: 2880446393,
  branch: 4
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
  const tail = ((cfg.slot + (ctx.index || 0) + 39) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 140,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x39_0 = "src/z0/x/x39.js:catalog-row:000";
const x39_1 = "src/z0/x/x39.js:catalog-row:001";
const x39_2 = "src/z0/x/x39.js:catalog-row:002";
const x39_3 = "src/z0/x/x39.js:catalog-row:003";
const x39_4 = "src/z0/x/x39.js:catalog-row:004";
const x39_5 = "src/z0/x/x39.js:catalog-row:005";
const x39_6 = "src/z0/x/x39.js:catalog-row:006";
const x39_7 = "src/z0/x/x39.js:catalog-row:007";
const x39_8 = "src/z0/x/x39.js:catalog-row:008";
const x39_9 = "src/z0/x/x39.js:catalog-row:009";
const x39_10 = "src/z0/x/x39.js:catalog-row:010";
const x39_11 = "src/z0/x/x39.js:catalog-row:011";
const x39_12 = "src/z0/x/x39.js:catalog-row:012";
const x39_13 = "src/z0/x/x39.js:catalog-row:013";
const x39_14 = "src/z0/x/x39.js:catalog-row:014";
const x39_15 = "src/z0/x/x39.js:catalog-row:015";
const x39_16 = "src/z0/x/x39.js:catalog-row:016";
const x39_17 = "src/z0/x/x39.js:catalog-row:017";
const x39_18 = "src/z0/x/x39.js:catalog-row:018";
const x39_19 = "src/z0/x/x39.js:catalog-row:019";
const x39_20 = "src/z0/x/x39.js:catalog-row:020";
const x39_21 = "src/z0/x/x39.js:catalog-row:021";
const x39_22 = "src/z0/x/x39.js:catalog-row:022";
const x39_23 = "src/z0/x/x39.js:catalog-row:023";
const x39_24 = "src/z0/x/x39.js:catalog-row:024";
const x39_25 = "src/z0/x/x39.js:catalog-row:025";
const x39_26 = "src/z0/x/x39.js:catalog-row:026";
const x39_27 = "src/z0/x/x39.js:catalog-row:027";
const x39_28 = "src/z0/x/x39.js:catalog-row:028";
const x39_29 = "src/z0/x/x39.js:catalog-row:029";
const x39_30 = "src/z0/x/x39.js:catalog-row:030";
const x39_31 = "src/z0/x/x39.js:catalog-row:031";
const x39_32 = "src/z0/x/x39.js:catalog-row:032";
const x39_33 = "src/z0/x/x39.js:catalog-row:033";
const x39_34 = "src/z0/x/x39.js:catalog-row:034";
const x39_35 = "src/z0/x/x39.js:catalog-row:035";
const x39_36 = "src/z0/x/x39.js:catalog-row:036";
const x39_37 = "src/z0/x/x39.js:catalog-row:037";
const x39_38 = "src/z0/x/x39.js:catalog-row:038";
const x39_39 = "src/z0/x/x39.js:catalog-row:039";
const x39_40 = "src/z0/x/x39.js:catalog-row:040";
const x39_41 = "src/z0/x/x39.js:catalog-row:041";
const x39_42 = "src/z0/x/x39.js:catalog-row:042";
const x39_43 = "src/z0/x/x39.js:catalog-row:043";
const x39_44 = "src/z0/x/x39.js:catalog-row:044";
const x39_45 = "src/z0/x/x39.js:catalog-row:045";
const x39_46 = "src/z0/x/x39.js:catalog-row:046";
const x39_47 = "src/z0/x/x39.js:catalog-row:047";
const x39_48 = "src/z0/x/x39.js:catalog-row:048";
const x39_49 = "src/z0/x/x39.js:catalog-row:049";
const x39_50 = "src/z0/x/x39.js:catalog-row:050";
const x39_51 = "src/z0/x/x39.js:catalog-row:051";
const x39_52 = "src/z0/x/x39.js:catalog-row:052";
const x39_53 = "src/z0/x/x39.js:catalog-row:053";
const x39_54 = "src/z0/x/x39.js:catalog-row:054";
const x39_55 = "src/z0/x/x39.js:catalog-row:055";
const x39_56 = "src/z0/x/x39.js:catalog-row:056";
const x39_57 = "src/z0/x/x39.js:catalog-row:057";
const x39_58 = "src/z0/x/x39.js:catalog-row:058";
const x39_59 = "src/z0/x/x39.js:catalog-row:059";
const x39_60 = "src/z0/x/x39.js:catalog-row:060";
const x39_61 = "src/z0/x/x39.js:catalog-row:061";
const x39_62 = "src/z0/x/x39.js:catalog-row:062";
const x39_63 = "src/z0/x/x39.js:catalog-row:063";
const x39_64 = "src/z0/x/x39.js:catalog-row:064";
const x39_65 = "src/z0/x/x39.js:catalog-row:065";
const x39_66 = "src/z0/x/x39.js:catalog-row:066";
const x39_67 = "src/z0/x/x39.js:catalog-row:067";
const x39_68 = "src/z0/x/x39.js:catalog-row:068";
const x39_69 = "src/z0/x/x39.js:catalog-row:069";
const x39_70 = "src/z0/x/x39.js:catalog-row:070";
const x39_71 = "src/z0/x/x39.js:catalog-row:071";
const x39_72 = "src/z0/x/x39.js:catalog-row:072";
const x39_73 = "src/z0/x/x39.js:catalog-row:073";
const x39_74 = "src/z0/x/x39.js:catalog-row:074";
const x39_75 = "src/z0/x/x39.js:catalog-row:075";
const x39_76 = "src/z0/x/x39.js:catalog-row:076";
const x39_77 = "src/z0/x/x39.js:catalog-row:077";
const x39_78 = "src/z0/x/x39.js:catalog-row:078";
const x39_79 = "src/z0/x/x39.js:catalog-row:079";
const x39_80 = "src/z0/x/x39.js:catalog-row:080";
const x39_81 = "src/z0/x/x39.js:catalog-row:081";
const x39_82 = "src/z0/x/x39.js:catalog-row:082";
const x39_83 = "src/z0/x/x39.js:catalog-row:083";
const x39_84 = "src/z0/x/x39.js:catalog-row:084";
const x39_85 = "src/z0/x/x39.js:catalog-row:085";
const x39_86 = "src/z0/x/x39.js:catalog-row:086";
const x39_87 = "src/z0/x/x39.js:catalog-row:087";
const x39_88 = "src/z0/x/x39.js:catalog-row:088";
const x39_89 = "src/z0/x/x39.js:catalog-row:089";
const x39_90 = "src/z0/x/x39.js:catalog-row:090";
const x39_91 = "src/z0/x/x39.js:catalog-row:091";
const x39_92 = "src/z0/x/x39.js:catalog-row:092";
const x39_93 = "src/z0/x/x39.js:catalog-row:093";
const x39_94 = "src/z0/x/x39.js:catalog-row:094";
const x39_95 = "src/z0/x/x39.js:catalog-row:095";
const x39_96 = "src/z0/x/x39.js:catalog-row:096";
const x39_97 = "src/z0/x/x39.js:catalog-row:097";
const x39_98 = "src/z0/x/x39.js:catalog-row:098";
const x39_99 = "src/z0/x/x39.js:catalog-row:099";
const x39_100 = "src/z0/x/x39.js:catalog-row:100";
const x39_101 = "src/z0/x/x39.js:catalog-row:101";
const x39_102 = "src/z0/x/x39.js:catalog-row:102";
const x39_103 = "src/z0/x/x39.js:catalog-row:103";
const x39_104 = "src/z0/x/x39.js:catalog-row:104";
const x39_105 = "src/z0/x/x39.js:catalog-row:105";
const x39_106 = "src/z0/x/x39.js:catalog-row:106";
const x39_107 = "src/z0/x/x39.js:catalog-row:107";
const x39_108 = "src/z0/x/x39.js:catalog-row:108";
const x39_109 = "src/z0/x/x39.js:catalog-row:109";
const x39_110 = "src/z0/x/x39.js:catalog-row:110";
const x39_111 = "src/z0/x/x39.js:catalog-row:111";
const x39_112 = "src/z0/x/x39.js:catalog-row:112";
const x39_113 = "src/z0/x/x39.js:catalog-row:113";
const x39_114 = "src/z0/x/x39.js:catalog-row:114";
const x39_115 = "src/z0/x/x39.js:catalog-row:115";
const x39_116 = "src/z0/x/x39.js:catalog-row:116";
const x39_117 = "src/z0/x/x39.js:catalog-row:117";
const x39_118 = "src/z0/x/x39.js:catalog-row:118";
const x39_119 = "src/z0/x/x39.js:catalog-row:119";
const x39_120 = "src/z0/x/x39.js:catalog-row:120";
const x39_121 = "src/z0/x/x39.js:catalog-row:121";
const x39_122 = "src/z0/x/x39.js:catalog-row:122";
const x39_123 = "src/z0/x/x39.js:catalog-row:123";
const x39_124 = "src/z0/x/x39.js:catalog-row:124";
const x39_125 = "src/z0/x/x39.js:catalog-row:125";
const x39_126 = "src/z0/x/x39.js:catalog-row:126";
const x39_127 = "src/z0/x/x39.js:catalog-row:127";
const x39_128 = "src/z0/x/x39.js:catalog-row:128";
const x39_129 = "src/z0/x/x39.js:catalog-row:129";
const x39_130 = "src/z0/x/x39.js:catalog-row:130";
const x39_131 = "src/z0/x/x39.js:catalog-row:131";
const x39_132 = "src/z0/x/x39.js:catalog-row:132";
const x39_133 = "src/z0/x/x39.js:catalog-row:133";
const x39_134 = "src/z0/x/x39.js:catalog-row:134";
const x39_135 = "src/z0/x/x39.js:catalog-row:135";
const x39_136 = "src/z0/x/x39.js:catalog-row:136";
