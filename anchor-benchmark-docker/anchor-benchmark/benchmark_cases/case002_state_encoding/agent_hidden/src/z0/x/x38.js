import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 39,
  salt: "d:38:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 14,
  mask: 226010632,
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
  const tail = ((cfg.slot + (ctx.index || 0) + 38) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [2, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 139,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x38_0 = "src/z0/x/x38.js:catalog-row:000";
const x38_1 = "src/z0/x/x38.js:catalog-row:001";
const x38_2 = "src/z0/x/x38.js:catalog-row:002";
const x38_3 = "src/z0/x/x38.js:catalog-row:003";
const x38_4 = "src/z0/x/x38.js:catalog-row:004";
const x38_5 = "src/z0/x/x38.js:catalog-row:005";
const x38_6 = "src/z0/x/x38.js:catalog-row:006";
const x38_7 = "src/z0/x/x38.js:catalog-row:007";
const x38_8 = "src/z0/x/x38.js:catalog-row:008";
const x38_9 = "src/z0/x/x38.js:catalog-row:009";
const x38_10 = "src/z0/x/x38.js:catalog-row:010";
const x38_11 = "src/z0/x/x38.js:catalog-row:011";
const x38_12 = "src/z0/x/x38.js:catalog-row:012";
const x38_13 = "src/z0/x/x38.js:catalog-row:013";
const x38_14 = "src/z0/x/x38.js:catalog-row:014";
const x38_15 = "src/z0/x/x38.js:catalog-row:015";
const x38_16 = "src/z0/x/x38.js:catalog-row:016";
const x38_17 = "src/z0/x/x38.js:catalog-row:017";
const x38_18 = "src/z0/x/x38.js:catalog-row:018";
const x38_19 = "src/z0/x/x38.js:catalog-row:019";
const x38_20 = "src/z0/x/x38.js:catalog-row:020";
const x38_21 = "src/z0/x/x38.js:catalog-row:021";
const x38_22 = "src/z0/x/x38.js:catalog-row:022";
const x38_23 = "src/z0/x/x38.js:catalog-row:023";
const x38_24 = "src/z0/x/x38.js:catalog-row:024";
const x38_25 = "src/z0/x/x38.js:catalog-row:025";
const x38_26 = "src/z0/x/x38.js:catalog-row:026";
const x38_27 = "src/z0/x/x38.js:catalog-row:027";
const x38_28 = "src/z0/x/x38.js:catalog-row:028";
const x38_29 = "src/z0/x/x38.js:catalog-row:029";
const x38_30 = "src/z0/x/x38.js:catalog-row:030";
const x38_31 = "src/z0/x/x38.js:catalog-row:031";
const x38_32 = "src/z0/x/x38.js:catalog-row:032";
const x38_33 = "src/z0/x/x38.js:catalog-row:033";
const x38_34 = "src/z0/x/x38.js:catalog-row:034";
const x38_35 = "src/z0/x/x38.js:catalog-row:035";
const x38_36 = "src/z0/x/x38.js:catalog-row:036";
const x38_37 = "src/z0/x/x38.js:catalog-row:037";
const x38_38 = "src/z0/x/x38.js:catalog-row:038";
const x38_39 = "src/z0/x/x38.js:catalog-row:039";
const x38_40 = "src/z0/x/x38.js:catalog-row:040";
const x38_41 = "src/z0/x/x38.js:catalog-row:041";
const x38_42 = "src/z0/x/x38.js:catalog-row:042";
const x38_43 = "src/z0/x/x38.js:catalog-row:043";
const x38_44 = "src/z0/x/x38.js:catalog-row:044";
const x38_45 = "src/z0/x/x38.js:catalog-row:045";
const x38_46 = "src/z0/x/x38.js:catalog-row:046";
const x38_47 = "src/z0/x/x38.js:catalog-row:047";
const x38_48 = "src/z0/x/x38.js:catalog-row:048";
const x38_49 = "src/z0/x/x38.js:catalog-row:049";
const x38_50 = "src/z0/x/x38.js:catalog-row:050";
const x38_51 = "src/z0/x/x38.js:catalog-row:051";
const x38_52 = "src/z0/x/x38.js:catalog-row:052";
const x38_53 = "src/z0/x/x38.js:catalog-row:053";
const x38_54 = "src/z0/x/x38.js:catalog-row:054";
const x38_55 = "src/z0/x/x38.js:catalog-row:055";
const x38_56 = "src/z0/x/x38.js:catalog-row:056";
const x38_57 = "src/z0/x/x38.js:catalog-row:057";
const x38_58 = "src/z0/x/x38.js:catalog-row:058";
const x38_59 = "src/z0/x/x38.js:catalog-row:059";
const x38_60 = "src/z0/x/x38.js:catalog-row:060";
const x38_61 = "src/z0/x/x38.js:catalog-row:061";
const x38_62 = "src/z0/x/x38.js:catalog-row:062";
const x38_63 = "src/z0/x/x38.js:catalog-row:063";
const x38_64 = "src/z0/x/x38.js:catalog-row:064";
const x38_65 = "src/z0/x/x38.js:catalog-row:065";
const x38_66 = "src/z0/x/x38.js:catalog-row:066";
const x38_67 = "src/z0/x/x38.js:catalog-row:067";
const x38_68 = "src/z0/x/x38.js:catalog-row:068";
const x38_69 = "src/z0/x/x38.js:catalog-row:069";
const x38_70 = "src/z0/x/x38.js:catalog-row:070";
const x38_71 = "src/z0/x/x38.js:catalog-row:071";
const x38_72 = "src/z0/x/x38.js:catalog-row:072";
const x38_73 = "src/z0/x/x38.js:catalog-row:073";
const x38_74 = "src/z0/x/x38.js:catalog-row:074";
const x38_75 = "src/z0/x/x38.js:catalog-row:075";
const x38_76 = "src/z0/x/x38.js:catalog-row:076";
const x38_77 = "src/z0/x/x38.js:catalog-row:077";
const x38_78 = "src/z0/x/x38.js:catalog-row:078";
const x38_79 = "src/z0/x/x38.js:catalog-row:079";
const x38_80 = "src/z0/x/x38.js:catalog-row:080";
const x38_81 = "src/z0/x/x38.js:catalog-row:081";
const x38_82 = "src/z0/x/x38.js:catalog-row:082";
const x38_83 = "src/z0/x/x38.js:catalog-row:083";
const x38_84 = "src/z0/x/x38.js:catalog-row:084";
const x38_85 = "src/z0/x/x38.js:catalog-row:085";
const x38_86 = "src/z0/x/x38.js:catalog-row:086";
const x38_87 = "src/z0/x/x38.js:catalog-row:087";
const x38_88 = "src/z0/x/x38.js:catalog-row:088";
const x38_89 = "src/z0/x/x38.js:catalog-row:089";
const x38_90 = "src/z0/x/x38.js:catalog-row:090";
const x38_91 = "src/z0/x/x38.js:catalog-row:091";
const x38_92 = "src/z0/x/x38.js:catalog-row:092";
const x38_93 = "src/z0/x/x38.js:catalog-row:093";
const x38_94 = "src/z0/x/x38.js:catalog-row:094";
const x38_95 = "src/z0/x/x38.js:catalog-row:095";
const x38_96 = "src/z0/x/x38.js:catalog-row:096";
const x38_97 = "src/z0/x/x38.js:catalog-row:097";
const x38_98 = "src/z0/x/x38.js:catalog-row:098";
const x38_99 = "src/z0/x/x38.js:catalog-row:099";
const x38_100 = "src/z0/x/x38.js:catalog-row:100";
const x38_101 = "src/z0/x/x38.js:catalog-row:101";
const x38_102 = "src/z0/x/x38.js:catalog-row:102";
const x38_103 = "src/z0/x/x38.js:catalog-row:103";
const x38_104 = "src/z0/x/x38.js:catalog-row:104";
const x38_105 = "src/z0/x/x38.js:catalog-row:105";
const x38_106 = "src/z0/x/x38.js:catalog-row:106";
const x38_107 = "src/z0/x/x38.js:catalog-row:107";
const x38_108 = "src/z0/x/x38.js:catalog-row:108";
const x38_109 = "src/z0/x/x38.js:catalog-row:109";
const x38_110 = "src/z0/x/x38.js:catalog-row:110";
const x38_111 = "src/z0/x/x38.js:catalog-row:111";
const x38_112 = "src/z0/x/x38.js:catalog-row:112";
const x38_113 = "src/z0/x/x38.js:catalog-row:113";
const x38_114 = "src/z0/x/x38.js:catalog-row:114";
const x38_115 = "src/z0/x/x38.js:catalog-row:115";
const x38_116 = "src/z0/x/x38.js:catalog-row:116";
const x38_117 = "src/z0/x/x38.js:catalog-row:117";
const x38_118 = "src/z0/x/x38.js:catalog-row:118";
const x38_119 = "src/z0/x/x38.js:catalog-row:119";
const x38_120 = "src/z0/x/x38.js:catalog-row:120";
const x38_121 = "src/z0/x/x38.js:catalog-row:121";
const x38_122 = "src/z0/x/x38.js:catalog-row:122";
const x38_123 = "src/z0/x/x38.js:catalog-row:123";
const x38_124 = "src/z0/x/x38.js:catalog-row:124";
const x38_125 = "src/z0/x/x38.js:catalog-row:125";
const x38_126 = "src/z0/x/x38.js:catalog-row:126";
const x38_127 = "src/z0/x/x38.js:catalog-row:127";
const x38_128 = "src/z0/x/x38.js:catalog-row:128";
const x38_129 = "src/z0/x/x38.js:catalog-row:129";
const x38_130 = "src/z0/x/x38.js:catalog-row:130";
const x38_131 = "src/z0/x/x38.js:catalog-row:131";
const x38_132 = "src/z0/x/x38.js:catalog-row:132";
const x38_133 = "src/z0/x/x38.js:catalog-row:133";
const x38_134 = "src/z0/x/x38.js:catalog-row:134";
const x38_135 = "src/z0/x/x38.js:catalog-row:135";
const x38_136 = "src/z0/x/x38.js:catalog-row:136";
