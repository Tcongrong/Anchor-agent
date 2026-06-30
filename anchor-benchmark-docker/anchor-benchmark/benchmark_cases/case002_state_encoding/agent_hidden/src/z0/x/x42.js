import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 43,
  salt: "d:42:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 5,
  mask: 2253819084,
  branch: 9
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
  const tail = ((cfg.slot + (ctx.index || 0) + 42) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 143,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x42_0 = "src/z0/x/x42.js:catalog-row:000";
const x42_1 = "src/z0/x/x42.js:catalog-row:001";
const x42_2 = "src/z0/x/x42.js:catalog-row:002";
const x42_3 = "src/z0/x/x42.js:catalog-row:003";
const x42_4 = "src/z0/x/x42.js:catalog-row:004";
const x42_5 = "src/z0/x/x42.js:catalog-row:005";
const x42_6 = "src/z0/x/x42.js:catalog-row:006";
const x42_7 = "src/z0/x/x42.js:catalog-row:007";
const x42_8 = "src/z0/x/x42.js:catalog-row:008";
const x42_9 = "src/z0/x/x42.js:catalog-row:009";
const x42_10 = "src/z0/x/x42.js:catalog-row:010";
const x42_11 = "src/z0/x/x42.js:catalog-row:011";
const x42_12 = "src/z0/x/x42.js:catalog-row:012";
const x42_13 = "src/z0/x/x42.js:catalog-row:013";
const x42_14 = "src/z0/x/x42.js:catalog-row:014";
const x42_15 = "src/z0/x/x42.js:catalog-row:015";
const x42_16 = "src/z0/x/x42.js:catalog-row:016";
const x42_17 = "src/z0/x/x42.js:catalog-row:017";
const x42_18 = "src/z0/x/x42.js:catalog-row:018";
const x42_19 = "src/z0/x/x42.js:catalog-row:019";
const x42_20 = "src/z0/x/x42.js:catalog-row:020";
const x42_21 = "src/z0/x/x42.js:catalog-row:021";
const x42_22 = "src/z0/x/x42.js:catalog-row:022";
const x42_23 = "src/z0/x/x42.js:catalog-row:023";
const x42_24 = "src/z0/x/x42.js:catalog-row:024";
const x42_25 = "src/z0/x/x42.js:catalog-row:025";
const x42_26 = "src/z0/x/x42.js:catalog-row:026";
const x42_27 = "src/z0/x/x42.js:catalog-row:027";
const x42_28 = "src/z0/x/x42.js:catalog-row:028";
const x42_29 = "src/z0/x/x42.js:catalog-row:029";
const x42_30 = "src/z0/x/x42.js:catalog-row:030";
const x42_31 = "src/z0/x/x42.js:catalog-row:031";
const x42_32 = "src/z0/x/x42.js:catalog-row:032";
const x42_33 = "src/z0/x/x42.js:catalog-row:033";
const x42_34 = "src/z0/x/x42.js:catalog-row:034";
const x42_35 = "src/z0/x/x42.js:catalog-row:035";
const x42_36 = "src/z0/x/x42.js:catalog-row:036";
const x42_37 = "src/z0/x/x42.js:catalog-row:037";
const x42_38 = "src/z0/x/x42.js:catalog-row:038";
const x42_39 = "src/z0/x/x42.js:catalog-row:039";
const x42_40 = "src/z0/x/x42.js:catalog-row:040";
const x42_41 = "src/z0/x/x42.js:catalog-row:041";
const x42_42 = "src/z0/x/x42.js:catalog-row:042";
const x42_43 = "src/z0/x/x42.js:catalog-row:043";
const x42_44 = "src/z0/x/x42.js:catalog-row:044";
const x42_45 = "src/z0/x/x42.js:catalog-row:045";
const x42_46 = "src/z0/x/x42.js:catalog-row:046";
const x42_47 = "src/z0/x/x42.js:catalog-row:047";
const x42_48 = "src/z0/x/x42.js:catalog-row:048";
const x42_49 = "src/z0/x/x42.js:catalog-row:049";
const x42_50 = "src/z0/x/x42.js:catalog-row:050";
const x42_51 = "src/z0/x/x42.js:catalog-row:051";
const x42_52 = "src/z0/x/x42.js:catalog-row:052";
const x42_53 = "src/z0/x/x42.js:catalog-row:053";
const x42_54 = "src/z0/x/x42.js:catalog-row:054";
const x42_55 = "src/z0/x/x42.js:catalog-row:055";
const x42_56 = "src/z0/x/x42.js:catalog-row:056";
const x42_57 = "src/z0/x/x42.js:catalog-row:057";
const x42_58 = "src/z0/x/x42.js:catalog-row:058";
const x42_59 = "src/z0/x/x42.js:catalog-row:059";
const x42_60 = "src/z0/x/x42.js:catalog-row:060";
const x42_61 = "src/z0/x/x42.js:catalog-row:061";
const x42_62 = "src/z0/x/x42.js:catalog-row:062";
const x42_63 = "src/z0/x/x42.js:catalog-row:063";
const x42_64 = "src/z0/x/x42.js:catalog-row:064";
const x42_65 = "src/z0/x/x42.js:catalog-row:065";
const x42_66 = "src/z0/x/x42.js:catalog-row:066";
const x42_67 = "src/z0/x/x42.js:catalog-row:067";
const x42_68 = "src/z0/x/x42.js:catalog-row:068";
const x42_69 = "src/z0/x/x42.js:catalog-row:069";
const x42_70 = "src/z0/x/x42.js:catalog-row:070";
const x42_71 = "src/z0/x/x42.js:catalog-row:071";
const x42_72 = "src/z0/x/x42.js:catalog-row:072";
const x42_73 = "src/z0/x/x42.js:catalog-row:073";
const x42_74 = "src/z0/x/x42.js:catalog-row:074";
const x42_75 = "src/z0/x/x42.js:catalog-row:075";
const x42_76 = "src/z0/x/x42.js:catalog-row:076";
const x42_77 = "src/z0/x/x42.js:catalog-row:077";
const x42_78 = "src/z0/x/x42.js:catalog-row:078";
const x42_79 = "src/z0/x/x42.js:catalog-row:079";
const x42_80 = "src/z0/x/x42.js:catalog-row:080";
const x42_81 = "src/z0/x/x42.js:catalog-row:081";
const x42_82 = "src/z0/x/x42.js:catalog-row:082";
const x42_83 = "src/z0/x/x42.js:catalog-row:083";
const x42_84 = "src/z0/x/x42.js:catalog-row:084";
const x42_85 = "src/z0/x/x42.js:catalog-row:085";
const x42_86 = "src/z0/x/x42.js:catalog-row:086";
const x42_87 = "src/z0/x/x42.js:catalog-row:087";
const x42_88 = "src/z0/x/x42.js:catalog-row:088";
const x42_89 = "src/z0/x/x42.js:catalog-row:089";
const x42_90 = "src/z0/x/x42.js:catalog-row:090";
const x42_91 = "src/z0/x/x42.js:catalog-row:091";
const x42_92 = "src/z0/x/x42.js:catalog-row:092";
const x42_93 = "src/z0/x/x42.js:catalog-row:093";
const x42_94 = "src/z0/x/x42.js:catalog-row:094";
const x42_95 = "src/z0/x/x42.js:catalog-row:095";
const x42_96 = "src/z0/x/x42.js:catalog-row:096";
const x42_97 = "src/z0/x/x42.js:catalog-row:097";
const x42_98 = "src/z0/x/x42.js:catalog-row:098";
const x42_99 = "src/z0/x/x42.js:catalog-row:099";
const x42_100 = "src/z0/x/x42.js:catalog-row:100";
const x42_101 = "src/z0/x/x42.js:catalog-row:101";
const x42_102 = "src/z0/x/x42.js:catalog-row:102";
const x42_103 = "src/z0/x/x42.js:catalog-row:103";
const x42_104 = "src/z0/x/x42.js:catalog-row:104";
const x42_105 = "src/z0/x/x42.js:catalog-row:105";
const x42_106 = "src/z0/x/x42.js:catalog-row:106";
const x42_107 = "src/z0/x/x42.js:catalog-row:107";
const x42_108 = "src/z0/x/x42.js:catalog-row:108";
const x42_109 = "src/z0/x/x42.js:catalog-row:109";
const x42_110 = "src/z0/x/x42.js:catalog-row:110";
const x42_111 = "src/z0/x/x42.js:catalog-row:111";
const x42_112 = "src/z0/x/x42.js:catalog-row:112";
const x42_113 = "src/z0/x/x42.js:catalog-row:113";
const x42_114 = "src/z0/x/x42.js:catalog-row:114";
const x42_115 = "src/z0/x/x42.js:catalog-row:115";
const x42_116 = "src/z0/x/x42.js:catalog-row:116";
const x42_117 = "src/z0/x/x42.js:catalog-row:117";
const x42_118 = "src/z0/x/x42.js:catalog-row:118";
const x42_119 = "src/z0/x/x42.js:catalog-row:119";
const x42_120 = "src/z0/x/x42.js:catalog-row:120";
const x42_121 = "src/z0/x/x42.js:catalog-row:121";
const x42_122 = "src/z0/x/x42.js:catalog-row:122";
const x42_123 = "src/z0/x/x42.js:catalog-row:123";
const x42_124 = "src/z0/x/x42.js:catalog-row:124";
const x42_125 = "src/z0/x/x42.js:catalog-row:125";
const x42_126 = "src/z0/x/x42.js:catalog-row:126";
const x42_127 = "src/z0/x/x42.js:catalog-row:127";
const x42_128 = "src/z0/x/x42.js:catalog-row:128";
const x42_129 = "src/z0/x/x42.js:catalog-row:129";
const x42_130 = "src/z0/x/x42.js:catalog-row:130";
const x42_131 = "src/z0/x/x42.js:catalog-row:131";
const x42_132 = "src/z0/x/x42.js:catalog-row:132";
const x42_133 = "src/z0/x/x42.js:catalog-row:133";
const x42_134 = "src/z0/x/x42.js:catalog-row:134";
const x42_135 = "src/z0/x/x42.js:catalog-row:135";
const x42_136 = "src/z0/x/x42.js:catalog-row:136";
