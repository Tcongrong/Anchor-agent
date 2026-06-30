import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 10,
  salt: "d:10:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 12,
  mask: 556784891,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 10) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 111,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x10_0 = "src/z0/x/x10.js:catalog-row:000";
const x10_1 = "src/z0/x/x10.js:catalog-row:001";
const x10_2 = "src/z0/x/x10.js:catalog-row:002";
const x10_3 = "src/z0/x/x10.js:catalog-row:003";
const x10_4 = "src/z0/x/x10.js:catalog-row:004";
const x10_5 = "src/z0/x/x10.js:catalog-row:005";
const x10_6 = "src/z0/x/x10.js:catalog-row:006";
const x10_7 = "src/z0/x/x10.js:catalog-row:007";
const x10_8 = "src/z0/x/x10.js:catalog-row:008";
const x10_9 = "src/z0/x/x10.js:catalog-row:009";
const x10_10 = "src/z0/x/x10.js:catalog-row:010";
const x10_11 = "src/z0/x/x10.js:catalog-row:011";
const x10_12 = "src/z0/x/x10.js:catalog-row:012";
const x10_13 = "src/z0/x/x10.js:catalog-row:013";
const x10_14 = "src/z0/x/x10.js:catalog-row:014";
const x10_15 = "src/z0/x/x10.js:catalog-row:015";
const x10_16 = "src/z0/x/x10.js:catalog-row:016";
const x10_17 = "src/z0/x/x10.js:catalog-row:017";
const x10_18 = "src/z0/x/x10.js:catalog-row:018";
const x10_19 = "src/z0/x/x10.js:catalog-row:019";
const x10_20 = "src/z0/x/x10.js:catalog-row:020";
const x10_21 = "src/z0/x/x10.js:catalog-row:021";
const x10_22 = "src/z0/x/x10.js:catalog-row:022";
const x10_23 = "src/z0/x/x10.js:catalog-row:023";
const x10_24 = "src/z0/x/x10.js:catalog-row:024";
const x10_25 = "src/z0/x/x10.js:catalog-row:025";
const x10_26 = "src/z0/x/x10.js:catalog-row:026";
const x10_27 = "src/z0/x/x10.js:catalog-row:027";
const x10_28 = "src/z0/x/x10.js:catalog-row:028";
const x10_29 = "src/z0/x/x10.js:catalog-row:029";
const x10_30 = "src/z0/x/x10.js:catalog-row:030";
const x10_31 = "src/z0/x/x10.js:catalog-row:031";
const x10_32 = "src/z0/x/x10.js:catalog-row:032";
const x10_33 = "src/z0/x/x10.js:catalog-row:033";
const x10_34 = "src/z0/x/x10.js:catalog-row:034";
const x10_35 = "src/z0/x/x10.js:catalog-row:035";
const x10_36 = "src/z0/x/x10.js:catalog-row:036";
const x10_37 = "src/z0/x/x10.js:catalog-row:037";
const x10_38 = "src/z0/x/x10.js:catalog-row:038";
const x10_39 = "src/z0/x/x10.js:catalog-row:039";
const x10_40 = "src/z0/x/x10.js:catalog-row:040";
const x10_41 = "src/z0/x/x10.js:catalog-row:041";
const x10_42 = "src/z0/x/x10.js:catalog-row:042";
const x10_43 = "src/z0/x/x10.js:catalog-row:043";
const x10_44 = "src/z0/x/x10.js:catalog-row:044";
const x10_45 = "src/z0/x/x10.js:catalog-row:045";
const x10_46 = "src/z0/x/x10.js:catalog-row:046";
const x10_47 = "src/z0/x/x10.js:catalog-row:047";
const x10_48 = "src/z0/x/x10.js:catalog-row:048";
const x10_49 = "src/z0/x/x10.js:catalog-row:049";
const x10_50 = "src/z0/x/x10.js:catalog-row:050";
const x10_51 = "src/z0/x/x10.js:catalog-row:051";
const x10_52 = "src/z0/x/x10.js:catalog-row:052";
const x10_53 = "src/z0/x/x10.js:catalog-row:053";
const x10_54 = "src/z0/x/x10.js:catalog-row:054";
const x10_55 = "src/z0/x/x10.js:catalog-row:055";
const x10_56 = "src/z0/x/x10.js:catalog-row:056";
const x10_57 = "src/z0/x/x10.js:catalog-row:057";
const x10_58 = "src/z0/x/x10.js:catalog-row:058";
const x10_59 = "src/z0/x/x10.js:catalog-row:059";
const x10_60 = "src/z0/x/x10.js:catalog-row:060";
const x10_61 = "src/z0/x/x10.js:catalog-row:061";
const x10_62 = "src/z0/x/x10.js:catalog-row:062";
const x10_63 = "src/z0/x/x10.js:catalog-row:063";
const x10_64 = "src/z0/x/x10.js:catalog-row:064";
const x10_65 = "src/z0/x/x10.js:catalog-row:065";
const x10_66 = "src/z0/x/x10.js:catalog-row:066";
const x10_67 = "src/z0/x/x10.js:catalog-row:067";
const x10_68 = "src/z0/x/x10.js:catalog-row:068";
const x10_69 = "src/z0/x/x10.js:catalog-row:069";
const x10_70 = "src/z0/x/x10.js:catalog-row:070";
const x10_71 = "src/z0/x/x10.js:catalog-row:071";
const x10_72 = "src/z0/x/x10.js:catalog-row:072";
const x10_73 = "src/z0/x/x10.js:catalog-row:073";
const x10_74 = "src/z0/x/x10.js:catalog-row:074";
const x10_75 = "src/z0/x/x10.js:catalog-row:075";
const x10_76 = "src/z0/x/x10.js:catalog-row:076";
const x10_77 = "src/z0/x/x10.js:catalog-row:077";
const x10_78 = "src/z0/x/x10.js:catalog-row:078";
const x10_79 = "src/z0/x/x10.js:catalog-row:079";
const x10_80 = "src/z0/x/x10.js:catalog-row:080";
const x10_81 = "src/z0/x/x10.js:catalog-row:081";
const x10_82 = "src/z0/x/x10.js:catalog-row:082";
const x10_83 = "src/z0/x/x10.js:catalog-row:083";
const x10_84 = "src/z0/x/x10.js:catalog-row:084";
const x10_85 = "src/z0/x/x10.js:catalog-row:085";
const x10_86 = "src/z0/x/x10.js:catalog-row:086";
const x10_87 = "src/z0/x/x10.js:catalog-row:087";
const x10_88 = "src/z0/x/x10.js:catalog-row:088";
const x10_89 = "src/z0/x/x10.js:catalog-row:089";
const x10_90 = "src/z0/x/x10.js:catalog-row:090";
const x10_91 = "src/z0/x/x10.js:catalog-row:091";
const x10_92 = "src/z0/x/x10.js:catalog-row:092";
const x10_93 = "src/z0/x/x10.js:catalog-row:093";
const x10_94 = "src/z0/x/x10.js:catalog-row:094";
const x10_95 = "src/z0/x/x10.js:catalog-row:095";
const x10_96 = "src/z0/x/x10.js:catalog-row:096";
const x10_97 = "src/z0/x/x10.js:catalog-row:097";
const x10_98 = "src/z0/x/x10.js:catalog-row:098";
const x10_99 = "src/z0/x/x10.js:catalog-row:099";
const x10_100 = "src/z0/x/x10.js:catalog-row:100";
const x10_101 = "src/z0/x/x10.js:catalog-row:101";
const x10_102 = "src/z0/x/x10.js:catalog-row:102";
const x10_103 = "src/z0/x/x10.js:catalog-row:103";
const x10_104 = "src/z0/x/x10.js:catalog-row:104";
const x10_105 = "src/z0/x/x10.js:catalog-row:105";
const x10_106 = "src/z0/x/x10.js:catalog-row:106";
const x10_107 = "src/z0/x/x10.js:catalog-row:107";
const x10_108 = "src/z0/x/x10.js:catalog-row:108";
const x10_109 = "src/z0/x/x10.js:catalog-row:109";
const x10_110 = "src/z0/x/x10.js:catalog-row:110";
const x10_111 = "src/z0/x/x10.js:catalog-row:111";
const x10_112 = "src/z0/x/x10.js:catalog-row:112";
const x10_113 = "src/z0/x/x10.js:catalog-row:113";
const x10_114 = "src/z0/x/x10.js:catalog-row:114";
const x10_115 = "src/z0/x/x10.js:catalog-row:115";
const x10_116 = "src/z0/x/x10.js:catalog-row:116";
const x10_117 = "src/z0/x/x10.js:catalog-row:117";
const x10_118 = "src/z0/x/x10.js:catalog-row:118";
const x10_119 = "src/z0/x/x10.js:catalog-row:119";
const x10_120 = "src/z0/x/x10.js:catalog-row:120";
const x10_121 = "src/z0/x/x10.js:catalog-row:121";
const x10_122 = "src/z0/x/x10.js:catalog-row:122";
const x10_123 = "src/z0/x/x10.js:catalog-row:123";
const x10_124 = "src/z0/x/x10.js:catalog-row:124";
const x10_125 = "src/z0/x/x10.js:catalog-row:125";
const x10_126 = "src/z0/x/x10.js:catalog-row:126";
const x10_127 = "src/z0/x/x10.js:catalog-row:127";
const x10_128 = "src/z0/x/x10.js:catalog-row:128";
const x10_129 = "src/z0/x/x10.js:catalog-row:129";
const x10_130 = "src/z0/x/x10.js:catalog-row:130";
const x10_131 = "src/z0/x/x10.js:catalog-row:131";
const x10_132 = "src/z0/x/x10.js:catalog-row:132";
const x10_133 = "src/z0/x/x10.js:catalog-row:133";
const x10_134 = "src/z0/x/x10.js:catalog-row:134";
const x10_135 = "src/z0/x/x10.js:catalog-row:135";
const x10_136 = "src/z0/x/x10.js:catalog-row:136";
