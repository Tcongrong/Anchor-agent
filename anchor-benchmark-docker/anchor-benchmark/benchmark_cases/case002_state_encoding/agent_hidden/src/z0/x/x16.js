import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 16,
  salt: "d:16:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 5,
  mask: 3598497569,
  branch: 3
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
  const tail = ((cfg.slot + (ctx.index || 0) + 16) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 117,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x16_0 = "src/z0/x/x16.js:catalog-row:000";
const x16_1 = "src/z0/x/x16.js:catalog-row:001";
const x16_2 = "src/z0/x/x16.js:catalog-row:002";
const x16_3 = "src/z0/x/x16.js:catalog-row:003";
const x16_4 = "src/z0/x/x16.js:catalog-row:004";
const x16_5 = "src/z0/x/x16.js:catalog-row:005";
const x16_6 = "src/z0/x/x16.js:catalog-row:006";
const x16_7 = "src/z0/x/x16.js:catalog-row:007";
const x16_8 = "src/z0/x/x16.js:catalog-row:008";
const x16_9 = "src/z0/x/x16.js:catalog-row:009";
const x16_10 = "src/z0/x/x16.js:catalog-row:010";
const x16_11 = "src/z0/x/x16.js:catalog-row:011";
const x16_12 = "src/z0/x/x16.js:catalog-row:012";
const x16_13 = "src/z0/x/x16.js:catalog-row:013";
const x16_14 = "src/z0/x/x16.js:catalog-row:014";
const x16_15 = "src/z0/x/x16.js:catalog-row:015";
const x16_16 = "src/z0/x/x16.js:catalog-row:016";
const x16_17 = "src/z0/x/x16.js:catalog-row:017";
const x16_18 = "src/z0/x/x16.js:catalog-row:018";
const x16_19 = "src/z0/x/x16.js:catalog-row:019";
const x16_20 = "src/z0/x/x16.js:catalog-row:020";
const x16_21 = "src/z0/x/x16.js:catalog-row:021";
const x16_22 = "src/z0/x/x16.js:catalog-row:022";
const x16_23 = "src/z0/x/x16.js:catalog-row:023";
const x16_24 = "src/z0/x/x16.js:catalog-row:024";
const x16_25 = "src/z0/x/x16.js:catalog-row:025";
const x16_26 = "src/z0/x/x16.js:catalog-row:026";
const x16_27 = "src/z0/x/x16.js:catalog-row:027";
const x16_28 = "src/z0/x/x16.js:catalog-row:028";
const x16_29 = "src/z0/x/x16.js:catalog-row:029";
const x16_30 = "src/z0/x/x16.js:catalog-row:030";
const x16_31 = "src/z0/x/x16.js:catalog-row:031";
const x16_32 = "src/z0/x/x16.js:catalog-row:032";
const x16_33 = "src/z0/x/x16.js:catalog-row:033";
const x16_34 = "src/z0/x/x16.js:catalog-row:034";
const x16_35 = "src/z0/x/x16.js:catalog-row:035";
const x16_36 = "src/z0/x/x16.js:catalog-row:036";
const x16_37 = "src/z0/x/x16.js:catalog-row:037";
const x16_38 = "src/z0/x/x16.js:catalog-row:038";
const x16_39 = "src/z0/x/x16.js:catalog-row:039";
const x16_40 = "src/z0/x/x16.js:catalog-row:040";
const x16_41 = "src/z0/x/x16.js:catalog-row:041";
const x16_42 = "src/z0/x/x16.js:catalog-row:042";
const x16_43 = "src/z0/x/x16.js:catalog-row:043";
const x16_44 = "src/z0/x/x16.js:catalog-row:044";
const x16_45 = "src/z0/x/x16.js:catalog-row:045";
const x16_46 = "src/z0/x/x16.js:catalog-row:046";
const x16_47 = "src/z0/x/x16.js:catalog-row:047";
const x16_48 = "src/z0/x/x16.js:catalog-row:048";
const x16_49 = "src/z0/x/x16.js:catalog-row:049";
const x16_50 = "src/z0/x/x16.js:catalog-row:050";
const x16_51 = "src/z0/x/x16.js:catalog-row:051";
const x16_52 = "src/z0/x/x16.js:catalog-row:052";
const x16_53 = "src/z0/x/x16.js:catalog-row:053";
const x16_54 = "src/z0/x/x16.js:catalog-row:054";
const x16_55 = "src/z0/x/x16.js:catalog-row:055";
const x16_56 = "src/z0/x/x16.js:catalog-row:056";
const x16_57 = "src/z0/x/x16.js:catalog-row:057";
const x16_58 = "src/z0/x/x16.js:catalog-row:058";
const x16_59 = "src/z0/x/x16.js:catalog-row:059";
const x16_60 = "src/z0/x/x16.js:catalog-row:060";
const x16_61 = "src/z0/x/x16.js:catalog-row:061";
const x16_62 = "src/z0/x/x16.js:catalog-row:062";
const x16_63 = "src/z0/x/x16.js:catalog-row:063";
const x16_64 = "src/z0/x/x16.js:catalog-row:064";
const x16_65 = "src/z0/x/x16.js:catalog-row:065";
const x16_66 = "src/z0/x/x16.js:catalog-row:066";
const x16_67 = "src/z0/x/x16.js:catalog-row:067";
const x16_68 = "src/z0/x/x16.js:catalog-row:068";
const x16_69 = "src/z0/x/x16.js:catalog-row:069";
const x16_70 = "src/z0/x/x16.js:catalog-row:070";
const x16_71 = "src/z0/x/x16.js:catalog-row:071";
const x16_72 = "src/z0/x/x16.js:catalog-row:072";
const x16_73 = "src/z0/x/x16.js:catalog-row:073";
const x16_74 = "src/z0/x/x16.js:catalog-row:074";
const x16_75 = "src/z0/x/x16.js:catalog-row:075";
const x16_76 = "src/z0/x/x16.js:catalog-row:076";
const x16_77 = "src/z0/x/x16.js:catalog-row:077";
const x16_78 = "src/z0/x/x16.js:catalog-row:078";
const x16_79 = "src/z0/x/x16.js:catalog-row:079";
const x16_80 = "src/z0/x/x16.js:catalog-row:080";
const x16_81 = "src/z0/x/x16.js:catalog-row:081";
const x16_82 = "src/z0/x/x16.js:catalog-row:082";
const x16_83 = "src/z0/x/x16.js:catalog-row:083";
const x16_84 = "src/z0/x/x16.js:catalog-row:084";
const x16_85 = "src/z0/x/x16.js:catalog-row:085";
const x16_86 = "src/z0/x/x16.js:catalog-row:086";
const x16_87 = "src/z0/x/x16.js:catalog-row:087";
const x16_88 = "src/z0/x/x16.js:catalog-row:088";
const x16_89 = "src/z0/x/x16.js:catalog-row:089";
const x16_90 = "src/z0/x/x16.js:catalog-row:090";
const x16_91 = "src/z0/x/x16.js:catalog-row:091";
const x16_92 = "src/z0/x/x16.js:catalog-row:092";
const x16_93 = "src/z0/x/x16.js:catalog-row:093";
const x16_94 = "src/z0/x/x16.js:catalog-row:094";
const x16_95 = "src/z0/x/x16.js:catalog-row:095";
const x16_96 = "src/z0/x/x16.js:catalog-row:096";
const x16_97 = "src/z0/x/x16.js:catalog-row:097";
const x16_98 = "src/z0/x/x16.js:catalog-row:098";
const x16_99 = "src/z0/x/x16.js:catalog-row:099";
const x16_100 = "src/z0/x/x16.js:catalog-row:100";
const x16_101 = "src/z0/x/x16.js:catalog-row:101";
const x16_102 = "src/z0/x/x16.js:catalog-row:102";
const x16_103 = "src/z0/x/x16.js:catalog-row:103";
const x16_104 = "src/z0/x/x16.js:catalog-row:104";
const x16_105 = "src/z0/x/x16.js:catalog-row:105";
const x16_106 = "src/z0/x/x16.js:catalog-row:106";
const x16_107 = "src/z0/x/x16.js:catalog-row:107";
const x16_108 = "src/z0/x/x16.js:catalog-row:108";
const x16_109 = "src/z0/x/x16.js:catalog-row:109";
const x16_110 = "src/z0/x/x16.js:catalog-row:110";
const x16_111 = "src/z0/x/x16.js:catalog-row:111";
const x16_112 = "src/z0/x/x16.js:catalog-row:112";
const x16_113 = "src/z0/x/x16.js:catalog-row:113";
const x16_114 = "src/z0/x/x16.js:catalog-row:114";
const x16_115 = "src/z0/x/x16.js:catalog-row:115";
const x16_116 = "src/z0/x/x16.js:catalog-row:116";
const x16_117 = "src/z0/x/x16.js:catalog-row:117";
const x16_118 = "src/z0/x/x16.js:catalog-row:118";
const x16_119 = "src/z0/x/x16.js:catalog-row:119";
const x16_120 = "src/z0/x/x16.js:catalog-row:120";
const x16_121 = "src/z0/x/x16.js:catalog-row:121";
const x16_122 = "src/z0/x/x16.js:catalog-row:122";
const x16_123 = "src/z0/x/x16.js:catalog-row:123";
const x16_124 = "src/z0/x/x16.js:catalog-row:124";
const x16_125 = "src/z0/x/x16.js:catalog-row:125";
const x16_126 = "src/z0/x/x16.js:catalog-row:126";
const x16_127 = "src/z0/x/x16.js:catalog-row:127";
const x16_128 = "src/z0/x/x16.js:catalog-row:128";
const x16_129 = "src/z0/x/x16.js:catalog-row:129";
const x16_130 = "src/z0/x/x16.js:catalog-row:130";
const x16_131 = "src/z0/x/x16.js:catalog-row:131";
const x16_132 = "src/z0/x/x16.js:catalog-row:132";
const x16_133 = "src/z0/x/x16.js:catalog-row:133";
const x16_134 = "src/z0/x/x16.js:catalog-row:134";
const x16_135 = "src/z0/x/x16.js:catalog-row:135";
const x16_136 = "src/z0/x/x16.js:catalog-row:136";
