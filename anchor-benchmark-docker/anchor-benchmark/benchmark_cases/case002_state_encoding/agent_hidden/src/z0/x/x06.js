import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 6,
  salt: "d:06:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 8,
  mask: 2823943735,
  branch: 13
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
  const tail = ((cfg.slot + (ctx.index || 0) + 6) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [6, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 107,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x06_0 = "src/z0/x/x06.js:catalog-row:000";
const x06_1 = "src/z0/x/x06.js:catalog-row:001";
const x06_2 = "src/z0/x/x06.js:catalog-row:002";
const x06_3 = "src/z0/x/x06.js:catalog-row:003";
const x06_4 = "src/z0/x/x06.js:catalog-row:004";
const x06_5 = "src/z0/x/x06.js:catalog-row:005";
const x06_6 = "src/z0/x/x06.js:catalog-row:006";
const x06_7 = "src/z0/x/x06.js:catalog-row:007";
const x06_8 = "src/z0/x/x06.js:catalog-row:008";
const x06_9 = "src/z0/x/x06.js:catalog-row:009";
const x06_10 = "src/z0/x/x06.js:catalog-row:010";
const x06_11 = "src/z0/x/x06.js:catalog-row:011";
const x06_12 = "src/z0/x/x06.js:catalog-row:012";
const x06_13 = "src/z0/x/x06.js:catalog-row:013";
const x06_14 = "src/z0/x/x06.js:catalog-row:014";
const x06_15 = "src/z0/x/x06.js:catalog-row:015";
const x06_16 = "src/z0/x/x06.js:catalog-row:016";
const x06_17 = "src/z0/x/x06.js:catalog-row:017";
const x06_18 = "src/z0/x/x06.js:catalog-row:018";
const x06_19 = "src/z0/x/x06.js:catalog-row:019";
const x06_20 = "src/z0/x/x06.js:catalog-row:020";
const x06_21 = "src/z0/x/x06.js:catalog-row:021";
const x06_22 = "src/z0/x/x06.js:catalog-row:022";
const x06_23 = "src/z0/x/x06.js:catalog-row:023";
const x06_24 = "src/z0/x/x06.js:catalog-row:024";
const x06_25 = "src/z0/x/x06.js:catalog-row:025";
const x06_26 = "src/z0/x/x06.js:catalog-row:026";
const x06_27 = "src/z0/x/x06.js:catalog-row:027";
const x06_28 = "src/z0/x/x06.js:catalog-row:028";
const x06_29 = "src/z0/x/x06.js:catalog-row:029";
const x06_30 = "src/z0/x/x06.js:catalog-row:030";
const x06_31 = "src/z0/x/x06.js:catalog-row:031";
const x06_32 = "src/z0/x/x06.js:catalog-row:032";
const x06_33 = "src/z0/x/x06.js:catalog-row:033";
const x06_34 = "src/z0/x/x06.js:catalog-row:034";
const x06_35 = "src/z0/x/x06.js:catalog-row:035";
const x06_36 = "src/z0/x/x06.js:catalog-row:036";
const x06_37 = "src/z0/x/x06.js:catalog-row:037";
const x06_38 = "src/z0/x/x06.js:catalog-row:038";
const x06_39 = "src/z0/x/x06.js:catalog-row:039";
const x06_40 = "src/z0/x/x06.js:catalog-row:040";
const x06_41 = "src/z0/x/x06.js:catalog-row:041";
const x06_42 = "src/z0/x/x06.js:catalog-row:042";
const x06_43 = "src/z0/x/x06.js:catalog-row:043";
const x06_44 = "src/z0/x/x06.js:catalog-row:044";
const x06_45 = "src/z0/x/x06.js:catalog-row:045";
const x06_46 = "src/z0/x/x06.js:catalog-row:046";
const x06_47 = "src/z0/x/x06.js:catalog-row:047";
const x06_48 = "src/z0/x/x06.js:catalog-row:048";
const x06_49 = "src/z0/x/x06.js:catalog-row:049";
const x06_50 = "src/z0/x/x06.js:catalog-row:050";
const x06_51 = "src/z0/x/x06.js:catalog-row:051";
const x06_52 = "src/z0/x/x06.js:catalog-row:052";
const x06_53 = "src/z0/x/x06.js:catalog-row:053";
const x06_54 = "src/z0/x/x06.js:catalog-row:054";
const x06_55 = "src/z0/x/x06.js:catalog-row:055";
const x06_56 = "src/z0/x/x06.js:catalog-row:056";
const x06_57 = "src/z0/x/x06.js:catalog-row:057";
const x06_58 = "src/z0/x/x06.js:catalog-row:058";
const x06_59 = "src/z0/x/x06.js:catalog-row:059";
const x06_60 = "src/z0/x/x06.js:catalog-row:060";
const x06_61 = "src/z0/x/x06.js:catalog-row:061";
const x06_62 = "src/z0/x/x06.js:catalog-row:062";
const x06_63 = "src/z0/x/x06.js:catalog-row:063";
const x06_64 = "src/z0/x/x06.js:catalog-row:064";
const x06_65 = "src/z0/x/x06.js:catalog-row:065";
const x06_66 = "src/z0/x/x06.js:catalog-row:066";
const x06_67 = "src/z0/x/x06.js:catalog-row:067";
const x06_68 = "src/z0/x/x06.js:catalog-row:068";
const x06_69 = "src/z0/x/x06.js:catalog-row:069";
const x06_70 = "src/z0/x/x06.js:catalog-row:070";
const x06_71 = "src/z0/x/x06.js:catalog-row:071";
const x06_72 = "src/z0/x/x06.js:catalog-row:072";
const x06_73 = "src/z0/x/x06.js:catalog-row:073";
const x06_74 = "src/z0/x/x06.js:catalog-row:074";
const x06_75 = "src/z0/x/x06.js:catalog-row:075";
const x06_76 = "src/z0/x/x06.js:catalog-row:076";
const x06_77 = "src/z0/x/x06.js:catalog-row:077";
const x06_78 = "src/z0/x/x06.js:catalog-row:078";
const x06_79 = "src/z0/x/x06.js:catalog-row:079";
const x06_80 = "src/z0/x/x06.js:catalog-row:080";
const x06_81 = "src/z0/x/x06.js:catalog-row:081";
const x06_82 = "src/z0/x/x06.js:catalog-row:082";
const x06_83 = "src/z0/x/x06.js:catalog-row:083";
const x06_84 = "src/z0/x/x06.js:catalog-row:084";
const x06_85 = "src/z0/x/x06.js:catalog-row:085";
const x06_86 = "src/z0/x/x06.js:catalog-row:086";
const x06_87 = "src/z0/x/x06.js:catalog-row:087";
const x06_88 = "src/z0/x/x06.js:catalog-row:088";
const x06_89 = "src/z0/x/x06.js:catalog-row:089";
const x06_90 = "src/z0/x/x06.js:catalog-row:090";
const x06_91 = "src/z0/x/x06.js:catalog-row:091";
const x06_92 = "src/z0/x/x06.js:catalog-row:092";
const x06_93 = "src/z0/x/x06.js:catalog-row:093";
const x06_94 = "src/z0/x/x06.js:catalog-row:094";
const x06_95 = "src/z0/x/x06.js:catalog-row:095";
const x06_96 = "src/z0/x/x06.js:catalog-row:096";
const x06_97 = "src/z0/x/x06.js:catalog-row:097";
const x06_98 = "src/z0/x/x06.js:catalog-row:098";
const x06_99 = "src/z0/x/x06.js:catalog-row:099";
const x06_100 = "src/z0/x/x06.js:catalog-row:100";
const x06_101 = "src/z0/x/x06.js:catalog-row:101";
const x06_102 = "src/z0/x/x06.js:catalog-row:102";
const x06_103 = "src/z0/x/x06.js:catalog-row:103";
const x06_104 = "src/z0/x/x06.js:catalog-row:104";
const x06_105 = "src/z0/x/x06.js:catalog-row:105";
const x06_106 = "src/z0/x/x06.js:catalog-row:106";
const x06_107 = "src/z0/x/x06.js:catalog-row:107";
const x06_108 = "src/z0/x/x06.js:catalog-row:108";
const x06_109 = "src/z0/x/x06.js:catalog-row:109";
const x06_110 = "src/z0/x/x06.js:catalog-row:110";
const x06_111 = "src/z0/x/x06.js:catalog-row:111";
const x06_112 = "src/z0/x/x06.js:catalog-row:112";
const x06_113 = "src/z0/x/x06.js:catalog-row:113";
const x06_114 = "src/z0/x/x06.js:catalog-row:114";
const x06_115 = "src/z0/x/x06.js:catalog-row:115";
const x06_116 = "src/z0/x/x06.js:catalog-row:116";
const x06_117 = "src/z0/x/x06.js:catalog-row:117";
const x06_118 = "src/z0/x/x06.js:catalog-row:118";
const x06_119 = "src/z0/x/x06.js:catalog-row:119";
const x06_120 = "src/z0/x/x06.js:catalog-row:120";
const x06_121 = "src/z0/x/x06.js:catalog-row:121";
const x06_122 = "src/z0/x/x06.js:catalog-row:122";
const x06_123 = "src/z0/x/x06.js:catalog-row:123";
const x06_124 = "src/z0/x/x06.js:catalog-row:124";
const x06_125 = "src/z0/x/x06.js:catalog-row:125";
const x06_126 = "src/z0/x/x06.js:catalog-row:126";
const x06_127 = "src/z0/x/x06.js:catalog-row:127";
const x06_128 = "src/z0/x/x06.js:catalog-row:128";
const x06_129 = "src/z0/x/x06.js:catalog-row:129";
const x06_130 = "src/z0/x/x06.js:catalog-row:130";
const x06_131 = "src/z0/x/x06.js:catalog-row:131";
const x06_132 = "src/z0/x/x06.js:catalog-row:132";
const x06_133 = "src/z0/x/x06.js:catalog-row:133";
const x06_134 = "src/z0/x/x06.js:catalog-row:134";
const x06_135 = "src/z0/x/x06.js:catalog-row:135";
const x06_136 = "src/z0/x/x06.js:catalog-row:136";
