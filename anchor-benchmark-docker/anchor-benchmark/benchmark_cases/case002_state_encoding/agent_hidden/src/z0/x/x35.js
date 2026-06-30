import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 36,
  salt: "d:35:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 11,
  mask: 852637941,
  branch: 8
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
  const tail = ((cfg.slot + (ctx.index || 0) + 35) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 136,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x35_0 = "src/z0/x/x35.js:catalog-row:000";
const x35_1 = "src/z0/x/x35.js:catalog-row:001";
const x35_2 = "src/z0/x/x35.js:catalog-row:002";
const x35_3 = "src/z0/x/x35.js:catalog-row:003";
const x35_4 = "src/z0/x/x35.js:catalog-row:004";
const x35_5 = "src/z0/x/x35.js:catalog-row:005";
const x35_6 = "src/z0/x/x35.js:catalog-row:006";
const x35_7 = "src/z0/x/x35.js:catalog-row:007";
const x35_8 = "src/z0/x/x35.js:catalog-row:008";
const x35_9 = "src/z0/x/x35.js:catalog-row:009";
const x35_10 = "src/z0/x/x35.js:catalog-row:010";
const x35_11 = "src/z0/x/x35.js:catalog-row:011";
const x35_12 = "src/z0/x/x35.js:catalog-row:012";
const x35_13 = "src/z0/x/x35.js:catalog-row:013";
const x35_14 = "src/z0/x/x35.js:catalog-row:014";
const x35_15 = "src/z0/x/x35.js:catalog-row:015";
const x35_16 = "src/z0/x/x35.js:catalog-row:016";
const x35_17 = "src/z0/x/x35.js:catalog-row:017";
const x35_18 = "src/z0/x/x35.js:catalog-row:018";
const x35_19 = "src/z0/x/x35.js:catalog-row:019";
const x35_20 = "src/z0/x/x35.js:catalog-row:020";
const x35_21 = "src/z0/x/x35.js:catalog-row:021";
const x35_22 = "src/z0/x/x35.js:catalog-row:022";
const x35_23 = "src/z0/x/x35.js:catalog-row:023";
const x35_24 = "src/z0/x/x35.js:catalog-row:024";
const x35_25 = "src/z0/x/x35.js:catalog-row:025";
const x35_26 = "src/z0/x/x35.js:catalog-row:026";
const x35_27 = "src/z0/x/x35.js:catalog-row:027";
const x35_28 = "src/z0/x/x35.js:catalog-row:028";
const x35_29 = "src/z0/x/x35.js:catalog-row:029";
const x35_30 = "src/z0/x/x35.js:catalog-row:030";
const x35_31 = "src/z0/x/x35.js:catalog-row:031";
const x35_32 = "src/z0/x/x35.js:catalog-row:032";
const x35_33 = "src/z0/x/x35.js:catalog-row:033";
const x35_34 = "src/z0/x/x35.js:catalog-row:034";
const x35_35 = "src/z0/x/x35.js:catalog-row:035";
const x35_36 = "src/z0/x/x35.js:catalog-row:036";
const x35_37 = "src/z0/x/x35.js:catalog-row:037";
const x35_38 = "src/z0/x/x35.js:catalog-row:038";
const x35_39 = "src/z0/x/x35.js:catalog-row:039";
const x35_40 = "src/z0/x/x35.js:catalog-row:040";
const x35_41 = "src/z0/x/x35.js:catalog-row:041";
const x35_42 = "src/z0/x/x35.js:catalog-row:042";
const x35_43 = "src/z0/x/x35.js:catalog-row:043";
const x35_44 = "src/z0/x/x35.js:catalog-row:044";
const x35_45 = "src/z0/x/x35.js:catalog-row:045";
const x35_46 = "src/z0/x/x35.js:catalog-row:046";
const x35_47 = "src/z0/x/x35.js:catalog-row:047";
const x35_48 = "src/z0/x/x35.js:catalog-row:048";
const x35_49 = "src/z0/x/x35.js:catalog-row:049";
const x35_50 = "src/z0/x/x35.js:catalog-row:050";
const x35_51 = "src/z0/x/x35.js:catalog-row:051";
const x35_52 = "src/z0/x/x35.js:catalog-row:052";
const x35_53 = "src/z0/x/x35.js:catalog-row:053";
const x35_54 = "src/z0/x/x35.js:catalog-row:054";
const x35_55 = "src/z0/x/x35.js:catalog-row:055";
const x35_56 = "src/z0/x/x35.js:catalog-row:056";
const x35_57 = "src/z0/x/x35.js:catalog-row:057";
const x35_58 = "src/z0/x/x35.js:catalog-row:058";
const x35_59 = "src/z0/x/x35.js:catalog-row:059";
const x35_60 = "src/z0/x/x35.js:catalog-row:060";
const x35_61 = "src/z0/x/x35.js:catalog-row:061";
const x35_62 = "src/z0/x/x35.js:catalog-row:062";
const x35_63 = "src/z0/x/x35.js:catalog-row:063";
const x35_64 = "src/z0/x/x35.js:catalog-row:064";
const x35_65 = "src/z0/x/x35.js:catalog-row:065";
const x35_66 = "src/z0/x/x35.js:catalog-row:066";
const x35_67 = "src/z0/x/x35.js:catalog-row:067";
const x35_68 = "src/z0/x/x35.js:catalog-row:068";
const x35_69 = "src/z0/x/x35.js:catalog-row:069";
const x35_70 = "src/z0/x/x35.js:catalog-row:070";
const x35_71 = "src/z0/x/x35.js:catalog-row:071";
const x35_72 = "src/z0/x/x35.js:catalog-row:072";
const x35_73 = "src/z0/x/x35.js:catalog-row:073";
const x35_74 = "src/z0/x/x35.js:catalog-row:074";
const x35_75 = "src/z0/x/x35.js:catalog-row:075";
const x35_76 = "src/z0/x/x35.js:catalog-row:076";
const x35_77 = "src/z0/x/x35.js:catalog-row:077";
const x35_78 = "src/z0/x/x35.js:catalog-row:078";
const x35_79 = "src/z0/x/x35.js:catalog-row:079";
const x35_80 = "src/z0/x/x35.js:catalog-row:080";
const x35_81 = "src/z0/x/x35.js:catalog-row:081";
const x35_82 = "src/z0/x/x35.js:catalog-row:082";
const x35_83 = "src/z0/x/x35.js:catalog-row:083";
const x35_84 = "src/z0/x/x35.js:catalog-row:084";
const x35_85 = "src/z0/x/x35.js:catalog-row:085";
const x35_86 = "src/z0/x/x35.js:catalog-row:086";
const x35_87 = "src/z0/x/x35.js:catalog-row:087";
const x35_88 = "src/z0/x/x35.js:catalog-row:088";
const x35_89 = "src/z0/x/x35.js:catalog-row:089";
const x35_90 = "src/z0/x/x35.js:catalog-row:090";
const x35_91 = "src/z0/x/x35.js:catalog-row:091";
const x35_92 = "src/z0/x/x35.js:catalog-row:092";
const x35_93 = "src/z0/x/x35.js:catalog-row:093";
const x35_94 = "src/z0/x/x35.js:catalog-row:094";
const x35_95 = "src/z0/x/x35.js:catalog-row:095";
const x35_96 = "src/z0/x/x35.js:catalog-row:096";
const x35_97 = "src/z0/x/x35.js:catalog-row:097";
const x35_98 = "src/z0/x/x35.js:catalog-row:098";
const x35_99 = "src/z0/x/x35.js:catalog-row:099";
const x35_100 = "src/z0/x/x35.js:catalog-row:100";
const x35_101 = "src/z0/x/x35.js:catalog-row:101";
const x35_102 = "src/z0/x/x35.js:catalog-row:102";
const x35_103 = "src/z0/x/x35.js:catalog-row:103";
const x35_104 = "src/z0/x/x35.js:catalog-row:104";
const x35_105 = "src/z0/x/x35.js:catalog-row:105";
const x35_106 = "src/z0/x/x35.js:catalog-row:106";
const x35_107 = "src/z0/x/x35.js:catalog-row:107";
const x35_108 = "src/z0/x/x35.js:catalog-row:108";
const x35_109 = "src/z0/x/x35.js:catalog-row:109";
const x35_110 = "src/z0/x/x35.js:catalog-row:110";
const x35_111 = "src/z0/x/x35.js:catalog-row:111";
const x35_112 = "src/z0/x/x35.js:catalog-row:112";
const x35_113 = "src/z0/x/x35.js:catalog-row:113";
const x35_114 = "src/z0/x/x35.js:catalog-row:114";
const x35_115 = "src/z0/x/x35.js:catalog-row:115";
const x35_116 = "src/z0/x/x35.js:catalog-row:116";
const x35_117 = "src/z0/x/x35.js:catalog-row:117";
const x35_118 = "src/z0/x/x35.js:catalog-row:118";
const x35_119 = "src/z0/x/x35.js:catalog-row:119";
const x35_120 = "src/z0/x/x35.js:catalog-row:120";
const x35_121 = "src/z0/x/x35.js:catalog-row:121";
const x35_122 = "src/z0/x/x35.js:catalog-row:122";
const x35_123 = "src/z0/x/x35.js:catalog-row:123";
const x35_124 = "src/z0/x/x35.js:catalog-row:124";
const x35_125 = "src/z0/x/x35.js:catalog-row:125";
const x35_126 = "src/z0/x/x35.js:catalog-row:126";
const x35_127 = "src/z0/x/x35.js:catalog-row:127";
const x35_128 = "src/z0/x/x35.js:catalog-row:128";
const x35_129 = "src/z0/x/x35.js:catalog-row:129";
const x35_130 = "src/z0/x/x35.js:catalog-row:130";
const x35_131 = "src/z0/x/x35.js:catalog-row:131";
const x35_132 = "src/z0/x/x35.js:catalog-row:132";
const x35_133 = "src/z0/x/x35.js:catalog-row:133";
const x35_134 = "src/z0/x/x35.js:catalog-row:134";
const x35_135 = "src/z0/x/x35.js:catalog-row:135";
const x35_136 = "src/z0/x/x35.js:catalog-row:136";
