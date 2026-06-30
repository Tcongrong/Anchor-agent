import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 12,
  salt: "d:12:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 14,
  mask: 1570689117,
  branch: 7
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
  const tail = ((cfg.slot + (ctx.index || 0) + 12) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [3, 2],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 113,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x12_0 = "src/z0/x/x12.js:catalog-row:000";
const x12_1 = "src/z0/x/x12.js:catalog-row:001";
const x12_2 = "src/z0/x/x12.js:catalog-row:002";
const x12_3 = "src/z0/x/x12.js:catalog-row:003";
const x12_4 = "src/z0/x/x12.js:catalog-row:004";
const x12_5 = "src/z0/x/x12.js:catalog-row:005";
const x12_6 = "src/z0/x/x12.js:catalog-row:006";
const x12_7 = "src/z0/x/x12.js:catalog-row:007";
const x12_8 = "src/z0/x/x12.js:catalog-row:008";
const x12_9 = "src/z0/x/x12.js:catalog-row:009";
const x12_10 = "src/z0/x/x12.js:catalog-row:010";
const x12_11 = "src/z0/x/x12.js:catalog-row:011";
const x12_12 = "src/z0/x/x12.js:catalog-row:012";
const x12_13 = "src/z0/x/x12.js:catalog-row:013";
const x12_14 = "src/z0/x/x12.js:catalog-row:014";
const x12_15 = "src/z0/x/x12.js:catalog-row:015";
const x12_16 = "src/z0/x/x12.js:catalog-row:016";
const x12_17 = "src/z0/x/x12.js:catalog-row:017";
const x12_18 = "src/z0/x/x12.js:catalog-row:018";
const x12_19 = "src/z0/x/x12.js:catalog-row:019";
const x12_20 = "src/z0/x/x12.js:catalog-row:020";
const x12_21 = "src/z0/x/x12.js:catalog-row:021";
const x12_22 = "src/z0/x/x12.js:catalog-row:022";
const x12_23 = "src/z0/x/x12.js:catalog-row:023";
const x12_24 = "src/z0/x/x12.js:catalog-row:024";
const x12_25 = "src/z0/x/x12.js:catalog-row:025";
const x12_26 = "src/z0/x/x12.js:catalog-row:026";
const x12_27 = "src/z0/x/x12.js:catalog-row:027";
const x12_28 = "src/z0/x/x12.js:catalog-row:028";
const x12_29 = "src/z0/x/x12.js:catalog-row:029";
const x12_30 = "src/z0/x/x12.js:catalog-row:030";
const x12_31 = "src/z0/x/x12.js:catalog-row:031";
const x12_32 = "src/z0/x/x12.js:catalog-row:032";
const x12_33 = "src/z0/x/x12.js:catalog-row:033";
const x12_34 = "src/z0/x/x12.js:catalog-row:034";
const x12_35 = "src/z0/x/x12.js:catalog-row:035";
const x12_36 = "src/z0/x/x12.js:catalog-row:036";
const x12_37 = "src/z0/x/x12.js:catalog-row:037";
const x12_38 = "src/z0/x/x12.js:catalog-row:038";
const x12_39 = "src/z0/x/x12.js:catalog-row:039";
const x12_40 = "src/z0/x/x12.js:catalog-row:040";
const x12_41 = "src/z0/x/x12.js:catalog-row:041";
const x12_42 = "src/z0/x/x12.js:catalog-row:042";
const x12_43 = "src/z0/x/x12.js:catalog-row:043";
const x12_44 = "src/z0/x/x12.js:catalog-row:044";
const x12_45 = "src/z0/x/x12.js:catalog-row:045";
const x12_46 = "src/z0/x/x12.js:catalog-row:046";
const x12_47 = "src/z0/x/x12.js:catalog-row:047";
const x12_48 = "src/z0/x/x12.js:catalog-row:048";
const x12_49 = "src/z0/x/x12.js:catalog-row:049";
const x12_50 = "src/z0/x/x12.js:catalog-row:050";
const x12_51 = "src/z0/x/x12.js:catalog-row:051";
const x12_52 = "src/z0/x/x12.js:catalog-row:052";
const x12_53 = "src/z0/x/x12.js:catalog-row:053";
const x12_54 = "src/z0/x/x12.js:catalog-row:054";
const x12_55 = "src/z0/x/x12.js:catalog-row:055";
const x12_56 = "src/z0/x/x12.js:catalog-row:056";
const x12_57 = "src/z0/x/x12.js:catalog-row:057";
const x12_58 = "src/z0/x/x12.js:catalog-row:058";
const x12_59 = "src/z0/x/x12.js:catalog-row:059";
const x12_60 = "src/z0/x/x12.js:catalog-row:060";
const x12_61 = "src/z0/x/x12.js:catalog-row:061";
const x12_62 = "src/z0/x/x12.js:catalog-row:062";
const x12_63 = "src/z0/x/x12.js:catalog-row:063";
const x12_64 = "src/z0/x/x12.js:catalog-row:064";
const x12_65 = "src/z0/x/x12.js:catalog-row:065";
const x12_66 = "src/z0/x/x12.js:catalog-row:066";
const x12_67 = "src/z0/x/x12.js:catalog-row:067";
const x12_68 = "src/z0/x/x12.js:catalog-row:068";
const x12_69 = "src/z0/x/x12.js:catalog-row:069";
const x12_70 = "src/z0/x/x12.js:catalog-row:070";
const x12_71 = "src/z0/x/x12.js:catalog-row:071";
const x12_72 = "src/z0/x/x12.js:catalog-row:072";
const x12_73 = "src/z0/x/x12.js:catalog-row:073";
const x12_74 = "src/z0/x/x12.js:catalog-row:074";
const x12_75 = "src/z0/x/x12.js:catalog-row:075";
const x12_76 = "src/z0/x/x12.js:catalog-row:076";
const x12_77 = "src/z0/x/x12.js:catalog-row:077";
const x12_78 = "src/z0/x/x12.js:catalog-row:078";
const x12_79 = "src/z0/x/x12.js:catalog-row:079";
const x12_80 = "src/z0/x/x12.js:catalog-row:080";
const x12_81 = "src/z0/x/x12.js:catalog-row:081";
const x12_82 = "src/z0/x/x12.js:catalog-row:082";
const x12_83 = "src/z0/x/x12.js:catalog-row:083";
const x12_84 = "src/z0/x/x12.js:catalog-row:084";
const x12_85 = "src/z0/x/x12.js:catalog-row:085";
const x12_86 = "src/z0/x/x12.js:catalog-row:086";
const x12_87 = "src/z0/x/x12.js:catalog-row:087";
const x12_88 = "src/z0/x/x12.js:catalog-row:088";
const x12_89 = "src/z0/x/x12.js:catalog-row:089";
const x12_90 = "src/z0/x/x12.js:catalog-row:090";
const x12_91 = "src/z0/x/x12.js:catalog-row:091";
const x12_92 = "src/z0/x/x12.js:catalog-row:092";
const x12_93 = "src/z0/x/x12.js:catalog-row:093";
const x12_94 = "src/z0/x/x12.js:catalog-row:094";
const x12_95 = "src/z0/x/x12.js:catalog-row:095";
const x12_96 = "src/z0/x/x12.js:catalog-row:096";
const x12_97 = "src/z0/x/x12.js:catalog-row:097";
const x12_98 = "src/z0/x/x12.js:catalog-row:098";
const x12_99 = "src/z0/x/x12.js:catalog-row:099";
const x12_100 = "src/z0/x/x12.js:catalog-row:100";
const x12_101 = "src/z0/x/x12.js:catalog-row:101";
const x12_102 = "src/z0/x/x12.js:catalog-row:102";
const x12_103 = "src/z0/x/x12.js:catalog-row:103";
const x12_104 = "src/z0/x/x12.js:catalog-row:104";
const x12_105 = "src/z0/x/x12.js:catalog-row:105";
const x12_106 = "src/z0/x/x12.js:catalog-row:106";
const x12_107 = "src/z0/x/x12.js:catalog-row:107";
const x12_108 = "src/z0/x/x12.js:catalog-row:108";
const x12_109 = "src/z0/x/x12.js:catalog-row:109";
const x12_110 = "src/z0/x/x12.js:catalog-row:110";
const x12_111 = "src/z0/x/x12.js:catalog-row:111";
const x12_112 = "src/z0/x/x12.js:catalog-row:112";
const x12_113 = "src/z0/x/x12.js:catalog-row:113";
const x12_114 = "src/z0/x/x12.js:catalog-row:114";
const x12_115 = "src/z0/x/x12.js:catalog-row:115";
const x12_116 = "src/z0/x/x12.js:catalog-row:116";
const x12_117 = "src/z0/x/x12.js:catalog-row:117";
const x12_118 = "src/z0/x/x12.js:catalog-row:118";
const x12_119 = "src/z0/x/x12.js:catalog-row:119";
const x12_120 = "src/z0/x/x12.js:catalog-row:120";
const x12_121 = "src/z0/x/x12.js:catalog-row:121";
const x12_122 = "src/z0/x/x12.js:catalog-row:122";
const x12_123 = "src/z0/x/x12.js:catalog-row:123";
const x12_124 = "src/z0/x/x12.js:catalog-row:124";
const x12_125 = "src/z0/x/x12.js:catalog-row:125";
const x12_126 = "src/z0/x/x12.js:catalog-row:126";
const x12_127 = "src/z0/x/x12.js:catalog-row:127";
const x12_128 = "src/z0/x/x12.js:catalog-row:128";
const x12_129 = "src/z0/x/x12.js:catalog-row:129";
const x12_130 = "src/z0/x/x12.js:catalog-row:130";
const x12_131 = "src/z0/x/x12.js:catalog-row:131";
const x12_132 = "src/z0/x/x12.js:catalog-row:132";
const x12_133 = "src/z0/x/x12.js:catalog-row:133";
const x12_134 = "src/z0/x/x12.js:catalog-row:134";
const x12_135 = "src/z0/x/x12.js:catalog-row:135";
const x12_136 = "src/z0/x/x12.js:catalog-row:136";
