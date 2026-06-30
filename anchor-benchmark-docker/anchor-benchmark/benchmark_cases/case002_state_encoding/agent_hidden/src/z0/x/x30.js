import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 31,
  salt: "d:30:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 6,
  mask: 465361024,
  branch: 5
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
  const tail = ((cfg.slot + (ctx.index || 0) + 30) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 131,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x30_0 = "src/z0/x/x30.js:catalog-row:000";
const x30_1 = "src/z0/x/x30.js:catalog-row:001";
const x30_2 = "src/z0/x/x30.js:catalog-row:002";
const x30_3 = "src/z0/x/x30.js:catalog-row:003";
const x30_4 = "src/z0/x/x30.js:catalog-row:004";
const x30_5 = "src/z0/x/x30.js:catalog-row:005";
const x30_6 = "src/z0/x/x30.js:catalog-row:006";
const x30_7 = "src/z0/x/x30.js:catalog-row:007";
const x30_8 = "src/z0/x/x30.js:catalog-row:008";
const x30_9 = "src/z0/x/x30.js:catalog-row:009";
const x30_10 = "src/z0/x/x30.js:catalog-row:010";
const x30_11 = "src/z0/x/x30.js:catalog-row:011";
const x30_12 = "src/z0/x/x30.js:catalog-row:012";
const x30_13 = "src/z0/x/x30.js:catalog-row:013";
const x30_14 = "src/z0/x/x30.js:catalog-row:014";
const x30_15 = "src/z0/x/x30.js:catalog-row:015";
const x30_16 = "src/z0/x/x30.js:catalog-row:016";
const x30_17 = "src/z0/x/x30.js:catalog-row:017";
const x30_18 = "src/z0/x/x30.js:catalog-row:018";
const x30_19 = "src/z0/x/x30.js:catalog-row:019";
const x30_20 = "src/z0/x/x30.js:catalog-row:020";
const x30_21 = "src/z0/x/x30.js:catalog-row:021";
const x30_22 = "src/z0/x/x30.js:catalog-row:022";
const x30_23 = "src/z0/x/x30.js:catalog-row:023";
const x30_24 = "src/z0/x/x30.js:catalog-row:024";
const x30_25 = "src/z0/x/x30.js:catalog-row:025";
const x30_26 = "src/z0/x/x30.js:catalog-row:026";
const x30_27 = "src/z0/x/x30.js:catalog-row:027";
const x30_28 = "src/z0/x/x30.js:catalog-row:028";
const x30_29 = "src/z0/x/x30.js:catalog-row:029";
const x30_30 = "src/z0/x/x30.js:catalog-row:030";
const x30_31 = "src/z0/x/x30.js:catalog-row:031";
const x30_32 = "src/z0/x/x30.js:catalog-row:032";
const x30_33 = "src/z0/x/x30.js:catalog-row:033";
const x30_34 = "src/z0/x/x30.js:catalog-row:034";
const x30_35 = "src/z0/x/x30.js:catalog-row:035";
const x30_36 = "src/z0/x/x30.js:catalog-row:036";
const x30_37 = "src/z0/x/x30.js:catalog-row:037";
const x30_38 = "src/z0/x/x30.js:catalog-row:038";
const x30_39 = "src/z0/x/x30.js:catalog-row:039";
const x30_40 = "src/z0/x/x30.js:catalog-row:040";
const x30_41 = "src/z0/x/x30.js:catalog-row:041";
const x30_42 = "src/z0/x/x30.js:catalog-row:042";
const x30_43 = "src/z0/x/x30.js:catalog-row:043";
const x30_44 = "src/z0/x/x30.js:catalog-row:044";
const x30_45 = "src/z0/x/x30.js:catalog-row:045";
const x30_46 = "src/z0/x/x30.js:catalog-row:046";
const x30_47 = "src/z0/x/x30.js:catalog-row:047";
const x30_48 = "src/z0/x/x30.js:catalog-row:048";
const x30_49 = "src/z0/x/x30.js:catalog-row:049";
const x30_50 = "src/z0/x/x30.js:catalog-row:050";
const x30_51 = "src/z0/x/x30.js:catalog-row:051";
const x30_52 = "src/z0/x/x30.js:catalog-row:052";
const x30_53 = "src/z0/x/x30.js:catalog-row:053";
const x30_54 = "src/z0/x/x30.js:catalog-row:054";
const x30_55 = "src/z0/x/x30.js:catalog-row:055";
const x30_56 = "src/z0/x/x30.js:catalog-row:056";
const x30_57 = "src/z0/x/x30.js:catalog-row:057";
const x30_58 = "src/z0/x/x30.js:catalog-row:058";
const x30_59 = "src/z0/x/x30.js:catalog-row:059";
const x30_60 = "src/z0/x/x30.js:catalog-row:060";
const x30_61 = "src/z0/x/x30.js:catalog-row:061";
const x30_62 = "src/z0/x/x30.js:catalog-row:062";
const x30_63 = "src/z0/x/x30.js:catalog-row:063";
const x30_64 = "src/z0/x/x30.js:catalog-row:064";
const x30_65 = "src/z0/x/x30.js:catalog-row:065";
const x30_66 = "src/z0/x/x30.js:catalog-row:066";
const x30_67 = "src/z0/x/x30.js:catalog-row:067";
const x30_68 = "src/z0/x/x30.js:catalog-row:068";
const x30_69 = "src/z0/x/x30.js:catalog-row:069";
const x30_70 = "src/z0/x/x30.js:catalog-row:070";
const x30_71 = "src/z0/x/x30.js:catalog-row:071";
const x30_72 = "src/z0/x/x30.js:catalog-row:072";
const x30_73 = "src/z0/x/x30.js:catalog-row:073";
const x30_74 = "src/z0/x/x30.js:catalog-row:074";
const x30_75 = "src/z0/x/x30.js:catalog-row:075";
const x30_76 = "src/z0/x/x30.js:catalog-row:076";
const x30_77 = "src/z0/x/x30.js:catalog-row:077";
const x30_78 = "src/z0/x/x30.js:catalog-row:078";
const x30_79 = "src/z0/x/x30.js:catalog-row:079";
const x30_80 = "src/z0/x/x30.js:catalog-row:080";
const x30_81 = "src/z0/x/x30.js:catalog-row:081";
const x30_82 = "src/z0/x/x30.js:catalog-row:082";
const x30_83 = "src/z0/x/x30.js:catalog-row:083";
const x30_84 = "src/z0/x/x30.js:catalog-row:084";
const x30_85 = "src/z0/x/x30.js:catalog-row:085";
const x30_86 = "src/z0/x/x30.js:catalog-row:086";
const x30_87 = "src/z0/x/x30.js:catalog-row:087";
const x30_88 = "src/z0/x/x30.js:catalog-row:088";
const x30_89 = "src/z0/x/x30.js:catalog-row:089";
const x30_90 = "src/z0/x/x30.js:catalog-row:090";
const x30_91 = "src/z0/x/x30.js:catalog-row:091";
const x30_92 = "src/z0/x/x30.js:catalog-row:092";
const x30_93 = "src/z0/x/x30.js:catalog-row:093";
const x30_94 = "src/z0/x/x30.js:catalog-row:094";
const x30_95 = "src/z0/x/x30.js:catalog-row:095";
const x30_96 = "src/z0/x/x30.js:catalog-row:096";
const x30_97 = "src/z0/x/x30.js:catalog-row:097";
const x30_98 = "src/z0/x/x30.js:catalog-row:098";
const x30_99 = "src/z0/x/x30.js:catalog-row:099";
const x30_100 = "src/z0/x/x30.js:catalog-row:100";
const x30_101 = "src/z0/x/x30.js:catalog-row:101";
const x30_102 = "src/z0/x/x30.js:catalog-row:102";
const x30_103 = "src/z0/x/x30.js:catalog-row:103";
const x30_104 = "src/z0/x/x30.js:catalog-row:104";
const x30_105 = "src/z0/x/x30.js:catalog-row:105";
const x30_106 = "src/z0/x/x30.js:catalog-row:106";
const x30_107 = "src/z0/x/x30.js:catalog-row:107";
const x30_108 = "src/z0/x/x30.js:catalog-row:108";
const x30_109 = "src/z0/x/x30.js:catalog-row:109";
const x30_110 = "src/z0/x/x30.js:catalog-row:110";
const x30_111 = "src/z0/x/x30.js:catalog-row:111";
const x30_112 = "src/z0/x/x30.js:catalog-row:112";
const x30_113 = "src/z0/x/x30.js:catalog-row:113";
const x30_114 = "src/z0/x/x30.js:catalog-row:114";
const x30_115 = "src/z0/x/x30.js:catalog-row:115";
const x30_116 = "src/z0/x/x30.js:catalog-row:116";
const x30_117 = "src/z0/x/x30.js:catalog-row:117";
const x30_118 = "src/z0/x/x30.js:catalog-row:118";
const x30_119 = "src/z0/x/x30.js:catalog-row:119";
const x30_120 = "src/z0/x/x30.js:catalog-row:120";
const x30_121 = "src/z0/x/x30.js:catalog-row:121";
const x30_122 = "src/z0/x/x30.js:catalog-row:122";
const x30_123 = "src/z0/x/x30.js:catalog-row:123";
const x30_124 = "src/z0/x/x30.js:catalog-row:124";
const x30_125 = "src/z0/x/x30.js:catalog-row:125";
const x30_126 = "src/z0/x/x30.js:catalog-row:126";
const x30_127 = "src/z0/x/x30.js:catalog-row:127";
const x30_128 = "src/z0/x/x30.js:catalog-row:128";
const x30_129 = "src/z0/x/x30.js:catalog-row:129";
const x30_130 = "src/z0/x/x30.js:catalog-row:130";
const x30_131 = "src/z0/x/x30.js:catalog-row:131";
const x30_132 = "src/z0/x/x30.js:catalog-row:132";
const x30_133 = "src/z0/x/x30.js:catalog-row:133";
const x30_134 = "src/z0/x/x30.js:catalog-row:134";
const x30_135 = "src/z0/x/x30.js:catalog-row:135";
const x30_136 = "src/z0/x/x30.js:catalog-row:136";
