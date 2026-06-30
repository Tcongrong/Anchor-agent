import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 4,
  salt: "d:04:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 6,
  mask: 1810039509,
  branch: 15
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
  const tail = ((cfg.slot + (ctx.index || 0) + 4) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 105,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x04_0 = "src/z0/x/x04.js:catalog-row:000";
const x04_1 = "src/z0/x/x04.js:catalog-row:001";
const x04_2 = "src/z0/x/x04.js:catalog-row:002";
const x04_3 = "src/z0/x/x04.js:catalog-row:003";
const x04_4 = "src/z0/x/x04.js:catalog-row:004";
const x04_5 = "src/z0/x/x04.js:catalog-row:005";
const x04_6 = "src/z0/x/x04.js:catalog-row:006";
const x04_7 = "src/z0/x/x04.js:catalog-row:007";
const x04_8 = "src/z0/x/x04.js:catalog-row:008";
const x04_9 = "src/z0/x/x04.js:catalog-row:009";
const x04_10 = "src/z0/x/x04.js:catalog-row:010";
const x04_11 = "src/z0/x/x04.js:catalog-row:011";
const x04_12 = "src/z0/x/x04.js:catalog-row:012";
const x04_13 = "src/z0/x/x04.js:catalog-row:013";
const x04_14 = "src/z0/x/x04.js:catalog-row:014";
const x04_15 = "src/z0/x/x04.js:catalog-row:015";
const x04_16 = "src/z0/x/x04.js:catalog-row:016";
const x04_17 = "src/z0/x/x04.js:catalog-row:017";
const x04_18 = "src/z0/x/x04.js:catalog-row:018";
const x04_19 = "src/z0/x/x04.js:catalog-row:019";
const x04_20 = "src/z0/x/x04.js:catalog-row:020";
const x04_21 = "src/z0/x/x04.js:catalog-row:021";
const x04_22 = "src/z0/x/x04.js:catalog-row:022";
const x04_23 = "src/z0/x/x04.js:catalog-row:023";
const x04_24 = "src/z0/x/x04.js:catalog-row:024";
const x04_25 = "src/z0/x/x04.js:catalog-row:025";
const x04_26 = "src/z0/x/x04.js:catalog-row:026";
const x04_27 = "src/z0/x/x04.js:catalog-row:027";
const x04_28 = "src/z0/x/x04.js:catalog-row:028";
const x04_29 = "src/z0/x/x04.js:catalog-row:029";
const x04_30 = "src/z0/x/x04.js:catalog-row:030";
const x04_31 = "src/z0/x/x04.js:catalog-row:031";
const x04_32 = "src/z0/x/x04.js:catalog-row:032";
const x04_33 = "src/z0/x/x04.js:catalog-row:033";
const x04_34 = "src/z0/x/x04.js:catalog-row:034";
const x04_35 = "src/z0/x/x04.js:catalog-row:035";
const x04_36 = "src/z0/x/x04.js:catalog-row:036";
const x04_37 = "src/z0/x/x04.js:catalog-row:037";
const x04_38 = "src/z0/x/x04.js:catalog-row:038";
const x04_39 = "src/z0/x/x04.js:catalog-row:039";
const x04_40 = "src/z0/x/x04.js:catalog-row:040";
const x04_41 = "src/z0/x/x04.js:catalog-row:041";
const x04_42 = "src/z0/x/x04.js:catalog-row:042";
const x04_43 = "src/z0/x/x04.js:catalog-row:043";
const x04_44 = "src/z0/x/x04.js:catalog-row:044";
const x04_45 = "src/z0/x/x04.js:catalog-row:045";
const x04_46 = "src/z0/x/x04.js:catalog-row:046";
const x04_47 = "src/z0/x/x04.js:catalog-row:047";
const x04_48 = "src/z0/x/x04.js:catalog-row:048";
const x04_49 = "src/z0/x/x04.js:catalog-row:049";
const x04_50 = "src/z0/x/x04.js:catalog-row:050";
const x04_51 = "src/z0/x/x04.js:catalog-row:051";
const x04_52 = "src/z0/x/x04.js:catalog-row:052";
const x04_53 = "src/z0/x/x04.js:catalog-row:053";
const x04_54 = "src/z0/x/x04.js:catalog-row:054";
const x04_55 = "src/z0/x/x04.js:catalog-row:055";
const x04_56 = "src/z0/x/x04.js:catalog-row:056";
const x04_57 = "src/z0/x/x04.js:catalog-row:057";
const x04_58 = "src/z0/x/x04.js:catalog-row:058";
const x04_59 = "src/z0/x/x04.js:catalog-row:059";
const x04_60 = "src/z0/x/x04.js:catalog-row:060";
const x04_61 = "src/z0/x/x04.js:catalog-row:061";
const x04_62 = "src/z0/x/x04.js:catalog-row:062";
const x04_63 = "src/z0/x/x04.js:catalog-row:063";
const x04_64 = "src/z0/x/x04.js:catalog-row:064";
const x04_65 = "src/z0/x/x04.js:catalog-row:065";
const x04_66 = "src/z0/x/x04.js:catalog-row:066";
const x04_67 = "src/z0/x/x04.js:catalog-row:067";
const x04_68 = "src/z0/x/x04.js:catalog-row:068";
const x04_69 = "src/z0/x/x04.js:catalog-row:069";
const x04_70 = "src/z0/x/x04.js:catalog-row:070";
const x04_71 = "src/z0/x/x04.js:catalog-row:071";
const x04_72 = "src/z0/x/x04.js:catalog-row:072";
const x04_73 = "src/z0/x/x04.js:catalog-row:073";
const x04_74 = "src/z0/x/x04.js:catalog-row:074";
const x04_75 = "src/z0/x/x04.js:catalog-row:075";
const x04_76 = "src/z0/x/x04.js:catalog-row:076";
const x04_77 = "src/z0/x/x04.js:catalog-row:077";
const x04_78 = "src/z0/x/x04.js:catalog-row:078";
const x04_79 = "src/z0/x/x04.js:catalog-row:079";
const x04_80 = "src/z0/x/x04.js:catalog-row:080";
const x04_81 = "src/z0/x/x04.js:catalog-row:081";
const x04_82 = "src/z0/x/x04.js:catalog-row:082";
const x04_83 = "src/z0/x/x04.js:catalog-row:083";
const x04_84 = "src/z0/x/x04.js:catalog-row:084";
const x04_85 = "src/z0/x/x04.js:catalog-row:085";
const x04_86 = "src/z0/x/x04.js:catalog-row:086";
const x04_87 = "src/z0/x/x04.js:catalog-row:087";
const x04_88 = "src/z0/x/x04.js:catalog-row:088";
const x04_89 = "src/z0/x/x04.js:catalog-row:089";
const x04_90 = "src/z0/x/x04.js:catalog-row:090";
const x04_91 = "src/z0/x/x04.js:catalog-row:091";
const x04_92 = "src/z0/x/x04.js:catalog-row:092";
const x04_93 = "src/z0/x/x04.js:catalog-row:093";
const x04_94 = "src/z0/x/x04.js:catalog-row:094";
const x04_95 = "src/z0/x/x04.js:catalog-row:095";
const x04_96 = "src/z0/x/x04.js:catalog-row:096";
const x04_97 = "src/z0/x/x04.js:catalog-row:097";
const x04_98 = "src/z0/x/x04.js:catalog-row:098";
const x04_99 = "src/z0/x/x04.js:catalog-row:099";
const x04_100 = "src/z0/x/x04.js:catalog-row:100";
const x04_101 = "src/z0/x/x04.js:catalog-row:101";
const x04_102 = "src/z0/x/x04.js:catalog-row:102";
const x04_103 = "src/z0/x/x04.js:catalog-row:103";
const x04_104 = "src/z0/x/x04.js:catalog-row:104";
const x04_105 = "src/z0/x/x04.js:catalog-row:105";
const x04_106 = "src/z0/x/x04.js:catalog-row:106";
const x04_107 = "src/z0/x/x04.js:catalog-row:107";
const x04_108 = "src/z0/x/x04.js:catalog-row:108";
const x04_109 = "src/z0/x/x04.js:catalog-row:109";
const x04_110 = "src/z0/x/x04.js:catalog-row:110";
const x04_111 = "src/z0/x/x04.js:catalog-row:111";
const x04_112 = "src/z0/x/x04.js:catalog-row:112";
const x04_113 = "src/z0/x/x04.js:catalog-row:113";
const x04_114 = "src/z0/x/x04.js:catalog-row:114";
const x04_115 = "src/z0/x/x04.js:catalog-row:115";
const x04_116 = "src/z0/x/x04.js:catalog-row:116";
const x04_117 = "src/z0/x/x04.js:catalog-row:117";
const x04_118 = "src/z0/x/x04.js:catalog-row:118";
const x04_119 = "src/z0/x/x04.js:catalog-row:119";
const x04_120 = "src/z0/x/x04.js:catalog-row:120";
const x04_121 = "src/z0/x/x04.js:catalog-row:121";
const x04_122 = "src/z0/x/x04.js:catalog-row:122";
const x04_123 = "src/z0/x/x04.js:catalog-row:123";
const x04_124 = "src/z0/x/x04.js:catalog-row:124";
const x04_125 = "src/z0/x/x04.js:catalog-row:125";
const x04_126 = "src/z0/x/x04.js:catalog-row:126";
const x04_127 = "src/z0/x/x04.js:catalog-row:127";
const x04_128 = "src/z0/x/x04.js:catalog-row:128";
const x04_129 = "src/z0/x/x04.js:catalog-row:129";
const x04_130 = "src/z0/x/x04.js:catalog-row:130";
const x04_131 = "src/z0/x/x04.js:catalog-row:131";
const x04_132 = "src/z0/x/x04.js:catalog-row:132";
const x04_133 = "src/z0/x/x04.js:catalog-row:133";
const x04_134 = "src/z0/x/x04.js:catalog-row:134";
const x04_135 = "src/z0/x/x04.js:catalog-row:135";
const x04_136 = "src/z0/x/x04.js:catalog-row:136";
