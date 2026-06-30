import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 7,
  salt: "d:07:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 9,
  mask: 1183412200,
  branch: 4
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
  const tail = ((cfg.slot + (ctx.index || 0) + 7) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 108,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x07_0 = "src/z0/x/x07.js:catalog-row:000";
const x07_1 = "src/z0/x/x07.js:catalog-row:001";
const x07_2 = "src/z0/x/x07.js:catalog-row:002";
const x07_3 = "src/z0/x/x07.js:catalog-row:003";
const x07_4 = "src/z0/x/x07.js:catalog-row:004";
const x07_5 = "src/z0/x/x07.js:catalog-row:005";
const x07_6 = "src/z0/x/x07.js:catalog-row:006";
const x07_7 = "src/z0/x/x07.js:catalog-row:007";
const x07_8 = "src/z0/x/x07.js:catalog-row:008";
const x07_9 = "src/z0/x/x07.js:catalog-row:009";
const x07_10 = "src/z0/x/x07.js:catalog-row:010";
const x07_11 = "src/z0/x/x07.js:catalog-row:011";
const x07_12 = "src/z0/x/x07.js:catalog-row:012";
const x07_13 = "src/z0/x/x07.js:catalog-row:013";
const x07_14 = "src/z0/x/x07.js:catalog-row:014";
const x07_15 = "src/z0/x/x07.js:catalog-row:015";
const x07_16 = "src/z0/x/x07.js:catalog-row:016";
const x07_17 = "src/z0/x/x07.js:catalog-row:017";
const x07_18 = "src/z0/x/x07.js:catalog-row:018";
const x07_19 = "src/z0/x/x07.js:catalog-row:019";
const x07_20 = "src/z0/x/x07.js:catalog-row:020";
const x07_21 = "src/z0/x/x07.js:catalog-row:021";
const x07_22 = "src/z0/x/x07.js:catalog-row:022";
const x07_23 = "src/z0/x/x07.js:catalog-row:023";
const x07_24 = "src/z0/x/x07.js:catalog-row:024";
const x07_25 = "src/z0/x/x07.js:catalog-row:025";
const x07_26 = "src/z0/x/x07.js:catalog-row:026";
const x07_27 = "src/z0/x/x07.js:catalog-row:027";
const x07_28 = "src/z0/x/x07.js:catalog-row:028";
const x07_29 = "src/z0/x/x07.js:catalog-row:029";
const x07_30 = "src/z0/x/x07.js:catalog-row:030";
const x07_31 = "src/z0/x/x07.js:catalog-row:031";
const x07_32 = "src/z0/x/x07.js:catalog-row:032";
const x07_33 = "src/z0/x/x07.js:catalog-row:033";
const x07_34 = "src/z0/x/x07.js:catalog-row:034";
const x07_35 = "src/z0/x/x07.js:catalog-row:035";
const x07_36 = "src/z0/x/x07.js:catalog-row:036";
const x07_37 = "src/z0/x/x07.js:catalog-row:037";
const x07_38 = "src/z0/x/x07.js:catalog-row:038";
const x07_39 = "src/z0/x/x07.js:catalog-row:039";
const x07_40 = "src/z0/x/x07.js:catalog-row:040";
const x07_41 = "src/z0/x/x07.js:catalog-row:041";
const x07_42 = "src/z0/x/x07.js:catalog-row:042";
const x07_43 = "src/z0/x/x07.js:catalog-row:043";
const x07_44 = "src/z0/x/x07.js:catalog-row:044";
const x07_45 = "src/z0/x/x07.js:catalog-row:045";
const x07_46 = "src/z0/x/x07.js:catalog-row:046";
const x07_47 = "src/z0/x/x07.js:catalog-row:047";
const x07_48 = "src/z0/x/x07.js:catalog-row:048";
const x07_49 = "src/z0/x/x07.js:catalog-row:049";
const x07_50 = "src/z0/x/x07.js:catalog-row:050";
const x07_51 = "src/z0/x/x07.js:catalog-row:051";
const x07_52 = "src/z0/x/x07.js:catalog-row:052";
const x07_53 = "src/z0/x/x07.js:catalog-row:053";
const x07_54 = "src/z0/x/x07.js:catalog-row:054";
const x07_55 = "src/z0/x/x07.js:catalog-row:055";
const x07_56 = "src/z0/x/x07.js:catalog-row:056";
const x07_57 = "src/z0/x/x07.js:catalog-row:057";
const x07_58 = "src/z0/x/x07.js:catalog-row:058";
const x07_59 = "src/z0/x/x07.js:catalog-row:059";
const x07_60 = "src/z0/x/x07.js:catalog-row:060";
const x07_61 = "src/z0/x/x07.js:catalog-row:061";
const x07_62 = "src/z0/x/x07.js:catalog-row:062";
const x07_63 = "src/z0/x/x07.js:catalog-row:063";
const x07_64 = "src/z0/x/x07.js:catalog-row:064";
const x07_65 = "src/z0/x/x07.js:catalog-row:065";
const x07_66 = "src/z0/x/x07.js:catalog-row:066";
const x07_67 = "src/z0/x/x07.js:catalog-row:067";
const x07_68 = "src/z0/x/x07.js:catalog-row:068";
const x07_69 = "src/z0/x/x07.js:catalog-row:069";
const x07_70 = "src/z0/x/x07.js:catalog-row:070";
const x07_71 = "src/z0/x/x07.js:catalog-row:071";
const x07_72 = "src/z0/x/x07.js:catalog-row:072";
const x07_73 = "src/z0/x/x07.js:catalog-row:073";
const x07_74 = "src/z0/x/x07.js:catalog-row:074";
const x07_75 = "src/z0/x/x07.js:catalog-row:075";
const x07_76 = "src/z0/x/x07.js:catalog-row:076";
const x07_77 = "src/z0/x/x07.js:catalog-row:077";
const x07_78 = "src/z0/x/x07.js:catalog-row:078";
const x07_79 = "src/z0/x/x07.js:catalog-row:079";
const x07_80 = "src/z0/x/x07.js:catalog-row:080";
const x07_81 = "src/z0/x/x07.js:catalog-row:081";
const x07_82 = "src/z0/x/x07.js:catalog-row:082";
const x07_83 = "src/z0/x/x07.js:catalog-row:083";
const x07_84 = "src/z0/x/x07.js:catalog-row:084";
const x07_85 = "src/z0/x/x07.js:catalog-row:085";
const x07_86 = "src/z0/x/x07.js:catalog-row:086";
const x07_87 = "src/z0/x/x07.js:catalog-row:087";
const x07_88 = "src/z0/x/x07.js:catalog-row:088";
const x07_89 = "src/z0/x/x07.js:catalog-row:089";
const x07_90 = "src/z0/x/x07.js:catalog-row:090";
const x07_91 = "src/z0/x/x07.js:catalog-row:091";
const x07_92 = "src/z0/x/x07.js:catalog-row:092";
const x07_93 = "src/z0/x/x07.js:catalog-row:093";
const x07_94 = "src/z0/x/x07.js:catalog-row:094";
const x07_95 = "src/z0/x/x07.js:catalog-row:095";
const x07_96 = "src/z0/x/x07.js:catalog-row:096";
const x07_97 = "src/z0/x/x07.js:catalog-row:097";
const x07_98 = "src/z0/x/x07.js:catalog-row:098";
const x07_99 = "src/z0/x/x07.js:catalog-row:099";
const x07_100 = "src/z0/x/x07.js:catalog-row:100";
const x07_101 = "src/z0/x/x07.js:catalog-row:101";
const x07_102 = "src/z0/x/x07.js:catalog-row:102";
const x07_103 = "src/z0/x/x07.js:catalog-row:103";
const x07_104 = "src/z0/x/x07.js:catalog-row:104";
const x07_105 = "src/z0/x/x07.js:catalog-row:105";
const x07_106 = "src/z0/x/x07.js:catalog-row:106";
const x07_107 = "src/z0/x/x07.js:catalog-row:107";
const x07_108 = "src/z0/x/x07.js:catalog-row:108";
const x07_109 = "src/z0/x/x07.js:catalog-row:109";
const x07_110 = "src/z0/x/x07.js:catalog-row:110";
const x07_111 = "src/z0/x/x07.js:catalog-row:111";
const x07_112 = "src/z0/x/x07.js:catalog-row:112";
const x07_113 = "src/z0/x/x07.js:catalog-row:113";
const x07_114 = "src/z0/x/x07.js:catalog-row:114";
const x07_115 = "src/z0/x/x07.js:catalog-row:115";
const x07_116 = "src/z0/x/x07.js:catalog-row:116";
const x07_117 = "src/z0/x/x07.js:catalog-row:117";
const x07_118 = "src/z0/x/x07.js:catalog-row:118";
const x07_119 = "src/z0/x/x07.js:catalog-row:119";
const x07_120 = "src/z0/x/x07.js:catalog-row:120";
const x07_121 = "src/z0/x/x07.js:catalog-row:121";
const x07_122 = "src/z0/x/x07.js:catalog-row:122";
const x07_123 = "src/z0/x/x07.js:catalog-row:123";
const x07_124 = "src/z0/x/x07.js:catalog-row:124";
const x07_125 = "src/z0/x/x07.js:catalog-row:125";
const x07_126 = "src/z0/x/x07.js:catalog-row:126";
const x07_127 = "src/z0/x/x07.js:catalog-row:127";
const x07_128 = "src/z0/x/x07.js:catalog-row:128";
const x07_129 = "src/z0/x/x07.js:catalog-row:129";
const x07_130 = "src/z0/x/x07.js:catalog-row:130";
const x07_131 = "src/z0/x/x07.js:catalog-row:131";
const x07_132 = "src/z0/x/x07.js:catalog-row:132";
const x07_133 = "src/z0/x/x07.js:catalog-row:133";
const x07_134 = "src/z0/x/x07.js:catalog-row:134";
const x07_135 = "src/z0/x/x07.js:catalog-row:135";
const x07_136 = "src/z0/x/x07.js:catalog-row:136";
