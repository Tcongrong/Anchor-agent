import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 1,
  salt: "d:01:catalog-local",
  order: [7, 5, 2, 4, 1, 6, 3, 0],
  sep: "\u2062",
  shift: 3,
  mask: 2436666818,
  branch: 10
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
  const tail = ((cfg.slot + (ctx.index || 0) + 1) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [1, 1],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 102,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x01_0 = "src/z0/x/x01.js:catalog-row:000";
const x01_1 = "src/z0/x/x01.js:catalog-row:001";
const x01_2 = "src/z0/x/x01.js:catalog-row:002";
const x01_3 = "src/z0/x/x01.js:catalog-row:003";
const x01_4 = "src/z0/x/x01.js:catalog-row:004";
const x01_5 = "src/z0/x/x01.js:catalog-row:005";
const x01_6 = "src/z0/x/x01.js:catalog-row:006";
const x01_7 = "src/z0/x/x01.js:catalog-row:007";
const x01_8 = "src/z0/x/x01.js:catalog-row:008";
const x01_9 = "src/z0/x/x01.js:catalog-row:009";
const x01_10 = "src/z0/x/x01.js:catalog-row:010";
const x01_11 = "src/z0/x/x01.js:catalog-row:011";
const x01_12 = "src/z0/x/x01.js:catalog-row:012";
const x01_13 = "src/z0/x/x01.js:catalog-row:013";
const x01_14 = "src/z0/x/x01.js:catalog-row:014";
const x01_15 = "src/z0/x/x01.js:catalog-row:015";
const x01_16 = "src/z0/x/x01.js:catalog-row:016";
const x01_17 = "src/z0/x/x01.js:catalog-row:017";
const x01_18 = "src/z0/x/x01.js:catalog-row:018";
const x01_19 = "src/z0/x/x01.js:catalog-row:019";
const x01_20 = "src/z0/x/x01.js:catalog-row:020";
const x01_21 = "src/z0/x/x01.js:catalog-row:021";
const x01_22 = "src/z0/x/x01.js:catalog-row:022";
const x01_23 = "src/z0/x/x01.js:catalog-row:023";
const x01_24 = "src/z0/x/x01.js:catalog-row:024";
const x01_25 = "src/z0/x/x01.js:catalog-row:025";
const x01_26 = "src/z0/x/x01.js:catalog-row:026";
const x01_27 = "src/z0/x/x01.js:catalog-row:027";
const x01_28 = "src/z0/x/x01.js:catalog-row:028";
const x01_29 = "src/z0/x/x01.js:catalog-row:029";
const x01_30 = "src/z0/x/x01.js:catalog-row:030";
const x01_31 = "src/z0/x/x01.js:catalog-row:031";
const x01_32 = "src/z0/x/x01.js:catalog-row:032";
const x01_33 = "src/z0/x/x01.js:catalog-row:033";
const x01_34 = "src/z0/x/x01.js:catalog-row:034";
const x01_35 = "src/z0/x/x01.js:catalog-row:035";
const x01_36 = "src/z0/x/x01.js:catalog-row:036";
const x01_37 = "src/z0/x/x01.js:catalog-row:037";
const x01_38 = "src/z0/x/x01.js:catalog-row:038";
const x01_39 = "src/z0/x/x01.js:catalog-row:039";
const x01_40 = "src/z0/x/x01.js:catalog-row:040";
const x01_41 = "src/z0/x/x01.js:catalog-row:041";
const x01_42 = "src/z0/x/x01.js:catalog-row:042";
const x01_43 = "src/z0/x/x01.js:catalog-row:043";
const x01_44 = "src/z0/x/x01.js:catalog-row:044";
const x01_45 = "src/z0/x/x01.js:catalog-row:045";
const x01_46 = "src/z0/x/x01.js:catalog-row:046";
const x01_47 = "src/z0/x/x01.js:catalog-row:047";
const x01_48 = "src/z0/x/x01.js:catalog-row:048";
const x01_49 = "src/z0/x/x01.js:catalog-row:049";
const x01_50 = "src/z0/x/x01.js:catalog-row:050";
const x01_51 = "src/z0/x/x01.js:catalog-row:051";
const x01_52 = "src/z0/x/x01.js:catalog-row:052";
const x01_53 = "src/z0/x/x01.js:catalog-row:053";
const x01_54 = "src/z0/x/x01.js:catalog-row:054";
const x01_55 = "src/z0/x/x01.js:catalog-row:055";
const x01_56 = "src/z0/x/x01.js:catalog-row:056";
const x01_57 = "src/z0/x/x01.js:catalog-row:057";
const x01_58 = "src/z0/x/x01.js:catalog-row:058";
const x01_59 = "src/z0/x/x01.js:catalog-row:059";
const x01_60 = "src/z0/x/x01.js:catalog-row:060";
const x01_61 = "src/z0/x/x01.js:catalog-row:061";
const x01_62 = "src/z0/x/x01.js:catalog-row:062";
const x01_63 = "src/z0/x/x01.js:catalog-row:063";
const x01_64 = "src/z0/x/x01.js:catalog-row:064";
const x01_65 = "src/z0/x/x01.js:catalog-row:065";
const x01_66 = "src/z0/x/x01.js:catalog-row:066";
const x01_67 = "src/z0/x/x01.js:catalog-row:067";
const x01_68 = "src/z0/x/x01.js:catalog-row:068";
const x01_69 = "src/z0/x/x01.js:catalog-row:069";
const x01_70 = "src/z0/x/x01.js:catalog-row:070";
const x01_71 = "src/z0/x/x01.js:catalog-row:071";
const x01_72 = "src/z0/x/x01.js:catalog-row:072";
const x01_73 = "src/z0/x/x01.js:catalog-row:073";
const x01_74 = "src/z0/x/x01.js:catalog-row:074";
const x01_75 = "src/z0/x/x01.js:catalog-row:075";
const x01_76 = "src/z0/x/x01.js:catalog-row:076";
const x01_77 = "src/z0/x/x01.js:catalog-row:077";
const x01_78 = "src/z0/x/x01.js:catalog-row:078";
const x01_79 = "src/z0/x/x01.js:catalog-row:079";
const x01_80 = "src/z0/x/x01.js:catalog-row:080";
const x01_81 = "src/z0/x/x01.js:catalog-row:081";
const x01_82 = "src/z0/x/x01.js:catalog-row:082";
const x01_83 = "src/z0/x/x01.js:catalog-row:083";
const x01_84 = "src/z0/x/x01.js:catalog-row:084";
const x01_85 = "src/z0/x/x01.js:catalog-row:085";
const x01_86 = "src/z0/x/x01.js:catalog-row:086";
const x01_87 = "src/z0/x/x01.js:catalog-row:087";
const x01_88 = "src/z0/x/x01.js:catalog-row:088";
const x01_89 = "src/z0/x/x01.js:catalog-row:089";
const x01_90 = "src/z0/x/x01.js:catalog-row:090";
const x01_91 = "src/z0/x/x01.js:catalog-row:091";
const x01_92 = "src/z0/x/x01.js:catalog-row:092";
const x01_93 = "src/z0/x/x01.js:catalog-row:093";
const x01_94 = "src/z0/x/x01.js:catalog-row:094";
const x01_95 = "src/z0/x/x01.js:catalog-row:095";
const x01_96 = "src/z0/x/x01.js:catalog-row:096";
const x01_97 = "src/z0/x/x01.js:catalog-row:097";
const x01_98 = "src/z0/x/x01.js:catalog-row:098";
const x01_99 = "src/z0/x/x01.js:catalog-row:099";
const x01_100 = "src/z0/x/x01.js:catalog-row:100";
const x01_101 = "src/z0/x/x01.js:catalog-row:101";
const x01_102 = "src/z0/x/x01.js:catalog-row:102";
const x01_103 = "src/z0/x/x01.js:catalog-row:103";
const x01_104 = "src/z0/x/x01.js:catalog-row:104";
const x01_105 = "src/z0/x/x01.js:catalog-row:105";
const x01_106 = "src/z0/x/x01.js:catalog-row:106";
const x01_107 = "src/z0/x/x01.js:catalog-row:107";
const x01_108 = "src/z0/x/x01.js:catalog-row:108";
const x01_109 = "src/z0/x/x01.js:catalog-row:109";
const x01_110 = "src/z0/x/x01.js:catalog-row:110";
const x01_111 = "src/z0/x/x01.js:catalog-row:111";
const x01_112 = "src/z0/x/x01.js:catalog-row:112";
const x01_113 = "src/z0/x/x01.js:catalog-row:113";
const x01_114 = "src/z0/x/x01.js:catalog-row:114";
const x01_115 = "src/z0/x/x01.js:catalog-row:115";
const x01_116 = "src/z0/x/x01.js:catalog-row:116";
const x01_117 = "src/z0/x/x01.js:catalog-row:117";
const x01_118 = "src/z0/x/x01.js:catalog-row:118";
const x01_119 = "src/z0/x/x01.js:catalog-row:119";
const x01_120 = "src/z0/x/x01.js:catalog-row:120";
const x01_121 = "src/z0/x/x01.js:catalog-row:121";
const x01_122 = "src/z0/x/x01.js:catalog-row:122";
const x01_123 = "src/z0/x/x01.js:catalog-row:123";
const x01_124 = "src/z0/x/x01.js:catalog-row:124";
const x01_125 = "src/z0/x/x01.js:catalog-row:125";
const x01_126 = "src/z0/x/x01.js:catalog-row:126";
const x01_127 = "src/z0/x/x01.js:catalog-row:127";
const x01_128 = "src/z0/x/x01.js:catalog-row:128";
const x01_129 = "src/z0/x/x01.js:catalog-row:129";
const x01_130 = "src/z0/x/x01.js:catalog-row:130";
const x01_131 = "src/z0/x/x01.js:catalog-row:131";
const x01_132 = "src/z0/x/x01.js:catalog-row:132";
const x01_133 = "src/z0/x/x01.js:catalog-row:133";
const x01_134 = "src/z0/x/x01.js:catalog-row:134";
const x01_135 = "src/z0/x/x01.js:catalog-row:135";
const x01_136 = "src/z0/x/x01.js:catalog-row:136";
