import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 5,
  salt: "d:05:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 7,
  mask: 169507974,
  branch: 6
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
  const tail = ((cfg.slot + (ctx.index || 0) + 5) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [5, 0],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 106,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x05_0 = "src/z0/x/x05.js:catalog-row:000";
const x05_1 = "src/z0/x/x05.js:catalog-row:001";
const x05_2 = "src/z0/x/x05.js:catalog-row:002";
const x05_3 = "src/z0/x/x05.js:catalog-row:003";
const x05_4 = "src/z0/x/x05.js:catalog-row:004";
const x05_5 = "src/z0/x/x05.js:catalog-row:005";
const x05_6 = "src/z0/x/x05.js:catalog-row:006";
const x05_7 = "src/z0/x/x05.js:catalog-row:007";
const x05_8 = "src/z0/x/x05.js:catalog-row:008";
const x05_9 = "src/z0/x/x05.js:catalog-row:009";
const x05_10 = "src/z0/x/x05.js:catalog-row:010";
const x05_11 = "src/z0/x/x05.js:catalog-row:011";
const x05_12 = "src/z0/x/x05.js:catalog-row:012";
const x05_13 = "src/z0/x/x05.js:catalog-row:013";
const x05_14 = "src/z0/x/x05.js:catalog-row:014";
const x05_15 = "src/z0/x/x05.js:catalog-row:015";
const x05_16 = "src/z0/x/x05.js:catalog-row:016";
const x05_17 = "src/z0/x/x05.js:catalog-row:017";
const x05_18 = "src/z0/x/x05.js:catalog-row:018";
const x05_19 = "src/z0/x/x05.js:catalog-row:019";
const x05_20 = "src/z0/x/x05.js:catalog-row:020";
const x05_21 = "src/z0/x/x05.js:catalog-row:021";
const x05_22 = "src/z0/x/x05.js:catalog-row:022";
const x05_23 = "src/z0/x/x05.js:catalog-row:023";
const x05_24 = "src/z0/x/x05.js:catalog-row:024";
const x05_25 = "src/z0/x/x05.js:catalog-row:025";
const x05_26 = "src/z0/x/x05.js:catalog-row:026";
const x05_27 = "src/z0/x/x05.js:catalog-row:027";
const x05_28 = "src/z0/x/x05.js:catalog-row:028";
const x05_29 = "src/z0/x/x05.js:catalog-row:029";
const x05_30 = "src/z0/x/x05.js:catalog-row:030";
const x05_31 = "src/z0/x/x05.js:catalog-row:031";
const x05_32 = "src/z0/x/x05.js:catalog-row:032";
const x05_33 = "src/z0/x/x05.js:catalog-row:033";
const x05_34 = "src/z0/x/x05.js:catalog-row:034";
const x05_35 = "src/z0/x/x05.js:catalog-row:035";
const x05_36 = "src/z0/x/x05.js:catalog-row:036";
const x05_37 = "src/z0/x/x05.js:catalog-row:037";
const x05_38 = "src/z0/x/x05.js:catalog-row:038";
const x05_39 = "src/z0/x/x05.js:catalog-row:039";
const x05_40 = "src/z0/x/x05.js:catalog-row:040";
const x05_41 = "src/z0/x/x05.js:catalog-row:041";
const x05_42 = "src/z0/x/x05.js:catalog-row:042";
const x05_43 = "src/z0/x/x05.js:catalog-row:043";
const x05_44 = "src/z0/x/x05.js:catalog-row:044";
const x05_45 = "src/z0/x/x05.js:catalog-row:045";
const x05_46 = "src/z0/x/x05.js:catalog-row:046";
const x05_47 = "src/z0/x/x05.js:catalog-row:047";
const x05_48 = "src/z0/x/x05.js:catalog-row:048";
const x05_49 = "src/z0/x/x05.js:catalog-row:049";
const x05_50 = "src/z0/x/x05.js:catalog-row:050";
const x05_51 = "src/z0/x/x05.js:catalog-row:051";
const x05_52 = "src/z0/x/x05.js:catalog-row:052";
const x05_53 = "src/z0/x/x05.js:catalog-row:053";
const x05_54 = "src/z0/x/x05.js:catalog-row:054";
const x05_55 = "src/z0/x/x05.js:catalog-row:055";
const x05_56 = "src/z0/x/x05.js:catalog-row:056";
const x05_57 = "src/z0/x/x05.js:catalog-row:057";
const x05_58 = "src/z0/x/x05.js:catalog-row:058";
const x05_59 = "src/z0/x/x05.js:catalog-row:059";
const x05_60 = "src/z0/x/x05.js:catalog-row:060";
const x05_61 = "src/z0/x/x05.js:catalog-row:061";
const x05_62 = "src/z0/x/x05.js:catalog-row:062";
const x05_63 = "src/z0/x/x05.js:catalog-row:063";
const x05_64 = "src/z0/x/x05.js:catalog-row:064";
const x05_65 = "src/z0/x/x05.js:catalog-row:065";
const x05_66 = "src/z0/x/x05.js:catalog-row:066";
const x05_67 = "src/z0/x/x05.js:catalog-row:067";
const x05_68 = "src/z0/x/x05.js:catalog-row:068";
const x05_69 = "src/z0/x/x05.js:catalog-row:069";
const x05_70 = "src/z0/x/x05.js:catalog-row:070";
const x05_71 = "src/z0/x/x05.js:catalog-row:071";
const x05_72 = "src/z0/x/x05.js:catalog-row:072";
const x05_73 = "src/z0/x/x05.js:catalog-row:073";
const x05_74 = "src/z0/x/x05.js:catalog-row:074";
const x05_75 = "src/z0/x/x05.js:catalog-row:075";
const x05_76 = "src/z0/x/x05.js:catalog-row:076";
const x05_77 = "src/z0/x/x05.js:catalog-row:077";
const x05_78 = "src/z0/x/x05.js:catalog-row:078";
const x05_79 = "src/z0/x/x05.js:catalog-row:079";
const x05_80 = "src/z0/x/x05.js:catalog-row:080";
const x05_81 = "src/z0/x/x05.js:catalog-row:081";
const x05_82 = "src/z0/x/x05.js:catalog-row:082";
const x05_83 = "src/z0/x/x05.js:catalog-row:083";
const x05_84 = "src/z0/x/x05.js:catalog-row:084";
const x05_85 = "src/z0/x/x05.js:catalog-row:085";
const x05_86 = "src/z0/x/x05.js:catalog-row:086";
const x05_87 = "src/z0/x/x05.js:catalog-row:087";
const x05_88 = "src/z0/x/x05.js:catalog-row:088";
const x05_89 = "src/z0/x/x05.js:catalog-row:089";
const x05_90 = "src/z0/x/x05.js:catalog-row:090";
const x05_91 = "src/z0/x/x05.js:catalog-row:091";
const x05_92 = "src/z0/x/x05.js:catalog-row:092";
const x05_93 = "src/z0/x/x05.js:catalog-row:093";
const x05_94 = "src/z0/x/x05.js:catalog-row:094";
const x05_95 = "src/z0/x/x05.js:catalog-row:095";
const x05_96 = "src/z0/x/x05.js:catalog-row:096";
const x05_97 = "src/z0/x/x05.js:catalog-row:097";
const x05_98 = "src/z0/x/x05.js:catalog-row:098";
const x05_99 = "src/z0/x/x05.js:catalog-row:099";
const x05_100 = "src/z0/x/x05.js:catalog-row:100";
const x05_101 = "src/z0/x/x05.js:catalog-row:101";
const x05_102 = "src/z0/x/x05.js:catalog-row:102";
const x05_103 = "src/z0/x/x05.js:catalog-row:103";
const x05_104 = "src/z0/x/x05.js:catalog-row:104";
const x05_105 = "src/z0/x/x05.js:catalog-row:105";
const x05_106 = "src/z0/x/x05.js:catalog-row:106";
const x05_107 = "src/z0/x/x05.js:catalog-row:107";
const x05_108 = "src/z0/x/x05.js:catalog-row:108";
const x05_109 = "src/z0/x/x05.js:catalog-row:109";
const x05_110 = "src/z0/x/x05.js:catalog-row:110";
const x05_111 = "src/z0/x/x05.js:catalog-row:111";
const x05_112 = "src/z0/x/x05.js:catalog-row:112";
const x05_113 = "src/z0/x/x05.js:catalog-row:113";
const x05_114 = "src/z0/x/x05.js:catalog-row:114";
const x05_115 = "src/z0/x/x05.js:catalog-row:115";
const x05_116 = "src/z0/x/x05.js:catalog-row:116";
const x05_117 = "src/z0/x/x05.js:catalog-row:117";
const x05_118 = "src/z0/x/x05.js:catalog-row:118";
const x05_119 = "src/z0/x/x05.js:catalog-row:119";
const x05_120 = "src/z0/x/x05.js:catalog-row:120";
const x05_121 = "src/z0/x/x05.js:catalog-row:121";
const x05_122 = "src/z0/x/x05.js:catalog-row:122";
const x05_123 = "src/z0/x/x05.js:catalog-row:123";
const x05_124 = "src/z0/x/x05.js:catalog-row:124";
const x05_125 = "src/z0/x/x05.js:catalog-row:125";
const x05_126 = "src/z0/x/x05.js:catalog-row:126";
const x05_127 = "src/z0/x/x05.js:catalog-row:127";
const x05_128 = "src/z0/x/x05.js:catalog-row:128";
const x05_129 = "src/z0/x/x05.js:catalog-row:129";
const x05_130 = "src/z0/x/x05.js:catalog-row:130";
const x05_131 = "src/z0/x/x05.js:catalog-row:131";
const x05_132 = "src/z0/x/x05.js:catalog-row:132";
const x05_133 = "src/z0/x/x05.js:catalog-row:133";
const x05_134 = "src/z0/x/x05.js:catalog-row:134";
const x05_135 = "src/z0/x/x05.js:catalog-row:135";
const x05_136 = "src/z0/x/x05.js:catalog-row:136";
