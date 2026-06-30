import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 32,
  salt: "d:31:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 7,
  mask: 3119796785,
  branch: 12
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
  const tail = ((cfg.slot + (ctx.index || 0) + 31) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [4, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 132,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x31_0 = "src/z0/x/x31.js:catalog-row:000";
const x31_1 = "src/z0/x/x31.js:catalog-row:001";
const x31_2 = "src/z0/x/x31.js:catalog-row:002";
const x31_3 = "src/z0/x/x31.js:catalog-row:003";
const x31_4 = "src/z0/x/x31.js:catalog-row:004";
const x31_5 = "src/z0/x/x31.js:catalog-row:005";
const x31_6 = "src/z0/x/x31.js:catalog-row:006";
const x31_7 = "src/z0/x/x31.js:catalog-row:007";
const x31_8 = "src/z0/x/x31.js:catalog-row:008";
const x31_9 = "src/z0/x/x31.js:catalog-row:009";
const x31_10 = "src/z0/x/x31.js:catalog-row:010";
const x31_11 = "src/z0/x/x31.js:catalog-row:011";
const x31_12 = "src/z0/x/x31.js:catalog-row:012";
const x31_13 = "src/z0/x/x31.js:catalog-row:013";
const x31_14 = "src/z0/x/x31.js:catalog-row:014";
const x31_15 = "src/z0/x/x31.js:catalog-row:015";
const x31_16 = "src/z0/x/x31.js:catalog-row:016";
const x31_17 = "src/z0/x/x31.js:catalog-row:017";
const x31_18 = "src/z0/x/x31.js:catalog-row:018";
const x31_19 = "src/z0/x/x31.js:catalog-row:019";
const x31_20 = "src/z0/x/x31.js:catalog-row:020";
const x31_21 = "src/z0/x/x31.js:catalog-row:021";
const x31_22 = "src/z0/x/x31.js:catalog-row:022";
const x31_23 = "src/z0/x/x31.js:catalog-row:023";
const x31_24 = "src/z0/x/x31.js:catalog-row:024";
const x31_25 = "src/z0/x/x31.js:catalog-row:025";
const x31_26 = "src/z0/x/x31.js:catalog-row:026";
const x31_27 = "src/z0/x/x31.js:catalog-row:027";
const x31_28 = "src/z0/x/x31.js:catalog-row:028";
const x31_29 = "src/z0/x/x31.js:catalog-row:029";
const x31_30 = "src/z0/x/x31.js:catalog-row:030";
const x31_31 = "src/z0/x/x31.js:catalog-row:031";
const x31_32 = "src/z0/x/x31.js:catalog-row:032";
const x31_33 = "src/z0/x/x31.js:catalog-row:033";
const x31_34 = "src/z0/x/x31.js:catalog-row:034";
const x31_35 = "src/z0/x/x31.js:catalog-row:035";
const x31_36 = "src/z0/x/x31.js:catalog-row:036";
const x31_37 = "src/z0/x/x31.js:catalog-row:037";
const x31_38 = "src/z0/x/x31.js:catalog-row:038";
const x31_39 = "src/z0/x/x31.js:catalog-row:039";
const x31_40 = "src/z0/x/x31.js:catalog-row:040";
const x31_41 = "src/z0/x/x31.js:catalog-row:041";
const x31_42 = "src/z0/x/x31.js:catalog-row:042";
const x31_43 = "src/z0/x/x31.js:catalog-row:043";
const x31_44 = "src/z0/x/x31.js:catalog-row:044";
const x31_45 = "src/z0/x/x31.js:catalog-row:045";
const x31_46 = "src/z0/x/x31.js:catalog-row:046";
const x31_47 = "src/z0/x/x31.js:catalog-row:047";
const x31_48 = "src/z0/x/x31.js:catalog-row:048";
const x31_49 = "src/z0/x/x31.js:catalog-row:049";
const x31_50 = "src/z0/x/x31.js:catalog-row:050";
const x31_51 = "src/z0/x/x31.js:catalog-row:051";
const x31_52 = "src/z0/x/x31.js:catalog-row:052";
const x31_53 = "src/z0/x/x31.js:catalog-row:053";
const x31_54 = "src/z0/x/x31.js:catalog-row:054";
const x31_55 = "src/z0/x/x31.js:catalog-row:055";
const x31_56 = "src/z0/x/x31.js:catalog-row:056";
const x31_57 = "src/z0/x/x31.js:catalog-row:057";
const x31_58 = "src/z0/x/x31.js:catalog-row:058";
const x31_59 = "src/z0/x/x31.js:catalog-row:059";
const x31_60 = "src/z0/x/x31.js:catalog-row:060";
const x31_61 = "src/z0/x/x31.js:catalog-row:061";
const x31_62 = "src/z0/x/x31.js:catalog-row:062";
const x31_63 = "src/z0/x/x31.js:catalog-row:063";
const x31_64 = "src/z0/x/x31.js:catalog-row:064";
const x31_65 = "src/z0/x/x31.js:catalog-row:065";
const x31_66 = "src/z0/x/x31.js:catalog-row:066";
const x31_67 = "src/z0/x/x31.js:catalog-row:067";
const x31_68 = "src/z0/x/x31.js:catalog-row:068";
const x31_69 = "src/z0/x/x31.js:catalog-row:069";
const x31_70 = "src/z0/x/x31.js:catalog-row:070";
const x31_71 = "src/z0/x/x31.js:catalog-row:071";
const x31_72 = "src/z0/x/x31.js:catalog-row:072";
const x31_73 = "src/z0/x/x31.js:catalog-row:073";
const x31_74 = "src/z0/x/x31.js:catalog-row:074";
const x31_75 = "src/z0/x/x31.js:catalog-row:075";
const x31_76 = "src/z0/x/x31.js:catalog-row:076";
const x31_77 = "src/z0/x/x31.js:catalog-row:077";
const x31_78 = "src/z0/x/x31.js:catalog-row:078";
const x31_79 = "src/z0/x/x31.js:catalog-row:079";
const x31_80 = "src/z0/x/x31.js:catalog-row:080";
const x31_81 = "src/z0/x/x31.js:catalog-row:081";
const x31_82 = "src/z0/x/x31.js:catalog-row:082";
const x31_83 = "src/z0/x/x31.js:catalog-row:083";
const x31_84 = "src/z0/x/x31.js:catalog-row:084";
const x31_85 = "src/z0/x/x31.js:catalog-row:085";
const x31_86 = "src/z0/x/x31.js:catalog-row:086";
const x31_87 = "src/z0/x/x31.js:catalog-row:087";
const x31_88 = "src/z0/x/x31.js:catalog-row:088";
const x31_89 = "src/z0/x/x31.js:catalog-row:089";
const x31_90 = "src/z0/x/x31.js:catalog-row:090";
const x31_91 = "src/z0/x/x31.js:catalog-row:091";
const x31_92 = "src/z0/x/x31.js:catalog-row:092";
const x31_93 = "src/z0/x/x31.js:catalog-row:093";
const x31_94 = "src/z0/x/x31.js:catalog-row:094";
const x31_95 = "src/z0/x/x31.js:catalog-row:095";
const x31_96 = "src/z0/x/x31.js:catalog-row:096";
const x31_97 = "src/z0/x/x31.js:catalog-row:097";
const x31_98 = "src/z0/x/x31.js:catalog-row:098";
const x31_99 = "src/z0/x/x31.js:catalog-row:099";
const x31_100 = "src/z0/x/x31.js:catalog-row:100";
const x31_101 = "src/z0/x/x31.js:catalog-row:101";
const x31_102 = "src/z0/x/x31.js:catalog-row:102";
const x31_103 = "src/z0/x/x31.js:catalog-row:103";
const x31_104 = "src/z0/x/x31.js:catalog-row:104";
const x31_105 = "src/z0/x/x31.js:catalog-row:105";
const x31_106 = "src/z0/x/x31.js:catalog-row:106";
const x31_107 = "src/z0/x/x31.js:catalog-row:107";
const x31_108 = "src/z0/x/x31.js:catalog-row:108";
const x31_109 = "src/z0/x/x31.js:catalog-row:109";
const x31_110 = "src/z0/x/x31.js:catalog-row:110";
const x31_111 = "src/z0/x/x31.js:catalog-row:111";
const x31_112 = "src/z0/x/x31.js:catalog-row:112";
const x31_113 = "src/z0/x/x31.js:catalog-row:113";
const x31_114 = "src/z0/x/x31.js:catalog-row:114";
const x31_115 = "src/z0/x/x31.js:catalog-row:115";
const x31_116 = "src/z0/x/x31.js:catalog-row:116";
const x31_117 = "src/z0/x/x31.js:catalog-row:117";
const x31_118 = "src/z0/x/x31.js:catalog-row:118";
const x31_119 = "src/z0/x/x31.js:catalog-row:119";
const x31_120 = "src/z0/x/x31.js:catalog-row:120";
const x31_121 = "src/z0/x/x31.js:catalog-row:121";
const x31_122 = "src/z0/x/x31.js:catalog-row:122";
const x31_123 = "src/z0/x/x31.js:catalog-row:123";
const x31_124 = "src/z0/x/x31.js:catalog-row:124";
const x31_125 = "src/z0/x/x31.js:catalog-row:125";
const x31_126 = "src/z0/x/x31.js:catalog-row:126";
const x31_127 = "src/z0/x/x31.js:catalog-row:127";
const x31_128 = "src/z0/x/x31.js:catalog-row:128";
const x31_129 = "src/z0/x/x31.js:catalog-row:129";
const x31_130 = "src/z0/x/x31.js:catalog-row:130";
const x31_131 = "src/z0/x/x31.js:catalog-row:131";
const x31_132 = "src/z0/x/x31.js:catalog-row:132";
const x31_133 = "src/z0/x/x31.js:catalog-row:133";
const x31_134 = "src/z0/x/x31.js:catalog-row:134";
const x31_135 = "src/z0/x/x31.js:catalog-row:135";
const x31_136 = "src/z0/x/x31.js:catalog-row:136";
