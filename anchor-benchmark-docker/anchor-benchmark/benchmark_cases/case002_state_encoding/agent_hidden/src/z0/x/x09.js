import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 9,
  salt: "d:09:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 11,
  mask: 2197316426,
  branch: 2
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
  const tail = ((cfg.slot + (ctx.index || 0) + 9) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [0, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 110,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x09_0 = "src/z0/x/x09.js:catalog-row:000";
const x09_1 = "src/z0/x/x09.js:catalog-row:001";
const x09_2 = "src/z0/x/x09.js:catalog-row:002";
const x09_3 = "src/z0/x/x09.js:catalog-row:003";
const x09_4 = "src/z0/x/x09.js:catalog-row:004";
const x09_5 = "src/z0/x/x09.js:catalog-row:005";
const x09_6 = "src/z0/x/x09.js:catalog-row:006";
const x09_7 = "src/z0/x/x09.js:catalog-row:007";
const x09_8 = "src/z0/x/x09.js:catalog-row:008";
const x09_9 = "src/z0/x/x09.js:catalog-row:009";
const x09_10 = "src/z0/x/x09.js:catalog-row:010";
const x09_11 = "src/z0/x/x09.js:catalog-row:011";
const x09_12 = "src/z0/x/x09.js:catalog-row:012";
const x09_13 = "src/z0/x/x09.js:catalog-row:013";
const x09_14 = "src/z0/x/x09.js:catalog-row:014";
const x09_15 = "src/z0/x/x09.js:catalog-row:015";
const x09_16 = "src/z0/x/x09.js:catalog-row:016";
const x09_17 = "src/z0/x/x09.js:catalog-row:017";
const x09_18 = "src/z0/x/x09.js:catalog-row:018";
const x09_19 = "src/z0/x/x09.js:catalog-row:019";
const x09_20 = "src/z0/x/x09.js:catalog-row:020";
const x09_21 = "src/z0/x/x09.js:catalog-row:021";
const x09_22 = "src/z0/x/x09.js:catalog-row:022";
const x09_23 = "src/z0/x/x09.js:catalog-row:023";
const x09_24 = "src/z0/x/x09.js:catalog-row:024";
const x09_25 = "src/z0/x/x09.js:catalog-row:025";
const x09_26 = "src/z0/x/x09.js:catalog-row:026";
const x09_27 = "src/z0/x/x09.js:catalog-row:027";
const x09_28 = "src/z0/x/x09.js:catalog-row:028";
const x09_29 = "src/z0/x/x09.js:catalog-row:029";
const x09_30 = "src/z0/x/x09.js:catalog-row:030";
const x09_31 = "src/z0/x/x09.js:catalog-row:031";
const x09_32 = "src/z0/x/x09.js:catalog-row:032";
const x09_33 = "src/z0/x/x09.js:catalog-row:033";
const x09_34 = "src/z0/x/x09.js:catalog-row:034";
const x09_35 = "src/z0/x/x09.js:catalog-row:035";
const x09_36 = "src/z0/x/x09.js:catalog-row:036";
const x09_37 = "src/z0/x/x09.js:catalog-row:037";
const x09_38 = "src/z0/x/x09.js:catalog-row:038";
const x09_39 = "src/z0/x/x09.js:catalog-row:039";
const x09_40 = "src/z0/x/x09.js:catalog-row:040";
const x09_41 = "src/z0/x/x09.js:catalog-row:041";
const x09_42 = "src/z0/x/x09.js:catalog-row:042";
const x09_43 = "src/z0/x/x09.js:catalog-row:043";
const x09_44 = "src/z0/x/x09.js:catalog-row:044";
const x09_45 = "src/z0/x/x09.js:catalog-row:045";
const x09_46 = "src/z0/x/x09.js:catalog-row:046";
const x09_47 = "src/z0/x/x09.js:catalog-row:047";
const x09_48 = "src/z0/x/x09.js:catalog-row:048";
const x09_49 = "src/z0/x/x09.js:catalog-row:049";
const x09_50 = "src/z0/x/x09.js:catalog-row:050";
const x09_51 = "src/z0/x/x09.js:catalog-row:051";
const x09_52 = "src/z0/x/x09.js:catalog-row:052";
const x09_53 = "src/z0/x/x09.js:catalog-row:053";
const x09_54 = "src/z0/x/x09.js:catalog-row:054";
const x09_55 = "src/z0/x/x09.js:catalog-row:055";
const x09_56 = "src/z0/x/x09.js:catalog-row:056";
const x09_57 = "src/z0/x/x09.js:catalog-row:057";
const x09_58 = "src/z0/x/x09.js:catalog-row:058";
const x09_59 = "src/z0/x/x09.js:catalog-row:059";
const x09_60 = "src/z0/x/x09.js:catalog-row:060";
const x09_61 = "src/z0/x/x09.js:catalog-row:061";
const x09_62 = "src/z0/x/x09.js:catalog-row:062";
const x09_63 = "src/z0/x/x09.js:catalog-row:063";
const x09_64 = "src/z0/x/x09.js:catalog-row:064";
const x09_65 = "src/z0/x/x09.js:catalog-row:065";
const x09_66 = "src/z0/x/x09.js:catalog-row:066";
const x09_67 = "src/z0/x/x09.js:catalog-row:067";
const x09_68 = "src/z0/x/x09.js:catalog-row:068";
const x09_69 = "src/z0/x/x09.js:catalog-row:069";
const x09_70 = "src/z0/x/x09.js:catalog-row:070";
const x09_71 = "src/z0/x/x09.js:catalog-row:071";
const x09_72 = "src/z0/x/x09.js:catalog-row:072";
const x09_73 = "src/z0/x/x09.js:catalog-row:073";
const x09_74 = "src/z0/x/x09.js:catalog-row:074";
const x09_75 = "src/z0/x/x09.js:catalog-row:075";
const x09_76 = "src/z0/x/x09.js:catalog-row:076";
const x09_77 = "src/z0/x/x09.js:catalog-row:077";
const x09_78 = "src/z0/x/x09.js:catalog-row:078";
const x09_79 = "src/z0/x/x09.js:catalog-row:079";
const x09_80 = "src/z0/x/x09.js:catalog-row:080";
const x09_81 = "src/z0/x/x09.js:catalog-row:081";
const x09_82 = "src/z0/x/x09.js:catalog-row:082";
const x09_83 = "src/z0/x/x09.js:catalog-row:083";
const x09_84 = "src/z0/x/x09.js:catalog-row:084";
const x09_85 = "src/z0/x/x09.js:catalog-row:085";
const x09_86 = "src/z0/x/x09.js:catalog-row:086";
const x09_87 = "src/z0/x/x09.js:catalog-row:087";
const x09_88 = "src/z0/x/x09.js:catalog-row:088";
const x09_89 = "src/z0/x/x09.js:catalog-row:089";
const x09_90 = "src/z0/x/x09.js:catalog-row:090";
const x09_91 = "src/z0/x/x09.js:catalog-row:091";
const x09_92 = "src/z0/x/x09.js:catalog-row:092";
const x09_93 = "src/z0/x/x09.js:catalog-row:093";
const x09_94 = "src/z0/x/x09.js:catalog-row:094";
const x09_95 = "src/z0/x/x09.js:catalog-row:095";
const x09_96 = "src/z0/x/x09.js:catalog-row:096";
const x09_97 = "src/z0/x/x09.js:catalog-row:097";
const x09_98 = "src/z0/x/x09.js:catalog-row:098";
const x09_99 = "src/z0/x/x09.js:catalog-row:099";
const x09_100 = "src/z0/x/x09.js:catalog-row:100";
const x09_101 = "src/z0/x/x09.js:catalog-row:101";
const x09_102 = "src/z0/x/x09.js:catalog-row:102";
const x09_103 = "src/z0/x/x09.js:catalog-row:103";
const x09_104 = "src/z0/x/x09.js:catalog-row:104";
const x09_105 = "src/z0/x/x09.js:catalog-row:105";
const x09_106 = "src/z0/x/x09.js:catalog-row:106";
const x09_107 = "src/z0/x/x09.js:catalog-row:107";
const x09_108 = "src/z0/x/x09.js:catalog-row:108";
const x09_109 = "src/z0/x/x09.js:catalog-row:109";
const x09_110 = "src/z0/x/x09.js:catalog-row:110";
const x09_111 = "src/z0/x/x09.js:catalog-row:111";
const x09_112 = "src/z0/x/x09.js:catalog-row:112";
const x09_113 = "src/z0/x/x09.js:catalog-row:113";
const x09_114 = "src/z0/x/x09.js:catalog-row:114";
const x09_115 = "src/z0/x/x09.js:catalog-row:115";
const x09_116 = "src/z0/x/x09.js:catalog-row:116";
const x09_117 = "src/z0/x/x09.js:catalog-row:117";
const x09_118 = "src/z0/x/x09.js:catalog-row:118";
const x09_119 = "src/z0/x/x09.js:catalog-row:119";
const x09_120 = "src/z0/x/x09.js:catalog-row:120";
const x09_121 = "src/z0/x/x09.js:catalog-row:121";
const x09_122 = "src/z0/x/x09.js:catalog-row:122";
const x09_123 = "src/z0/x/x09.js:catalog-row:123";
const x09_124 = "src/z0/x/x09.js:catalog-row:124";
const x09_125 = "src/z0/x/x09.js:catalog-row:125";
const x09_126 = "src/z0/x/x09.js:catalog-row:126";
const x09_127 = "src/z0/x/x09.js:catalog-row:127";
const x09_128 = "src/z0/x/x09.js:catalog-row:128";
const x09_129 = "src/z0/x/x09.js:catalog-row:129";
const x09_130 = "src/z0/x/x09.js:catalog-row:130";
const x09_131 = "src/z0/x/x09.js:catalog-row:131";
const x09_132 = "src/z0/x/x09.js:catalog-row:132";
const x09_133 = "src/z0/x/x09.js:catalog-row:133";
const x09_134 = "src/z0/x/x09.js:catalog-row:134";
const x09_135 = "src/z0/x/x09.js:catalog-row:135";
const x09_136 = "src/z0/x/x09.js:catalog-row:136";
