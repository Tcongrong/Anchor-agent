import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 35,
  salt: "d:34:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 10,
  mask: 2493169476,
  branch: 1
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
  const tail = ((cfg.slot + (ctx.index || 0) + 34) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [7, 4],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 135,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x34_0 = "src/z0/x/x34.js:catalog-row:000";
const x34_1 = "src/z0/x/x34.js:catalog-row:001";
const x34_2 = "src/z0/x/x34.js:catalog-row:002";
const x34_3 = "src/z0/x/x34.js:catalog-row:003";
const x34_4 = "src/z0/x/x34.js:catalog-row:004";
const x34_5 = "src/z0/x/x34.js:catalog-row:005";
const x34_6 = "src/z0/x/x34.js:catalog-row:006";
const x34_7 = "src/z0/x/x34.js:catalog-row:007";
const x34_8 = "src/z0/x/x34.js:catalog-row:008";
const x34_9 = "src/z0/x/x34.js:catalog-row:009";
const x34_10 = "src/z0/x/x34.js:catalog-row:010";
const x34_11 = "src/z0/x/x34.js:catalog-row:011";
const x34_12 = "src/z0/x/x34.js:catalog-row:012";
const x34_13 = "src/z0/x/x34.js:catalog-row:013";
const x34_14 = "src/z0/x/x34.js:catalog-row:014";
const x34_15 = "src/z0/x/x34.js:catalog-row:015";
const x34_16 = "src/z0/x/x34.js:catalog-row:016";
const x34_17 = "src/z0/x/x34.js:catalog-row:017";
const x34_18 = "src/z0/x/x34.js:catalog-row:018";
const x34_19 = "src/z0/x/x34.js:catalog-row:019";
const x34_20 = "src/z0/x/x34.js:catalog-row:020";
const x34_21 = "src/z0/x/x34.js:catalog-row:021";
const x34_22 = "src/z0/x/x34.js:catalog-row:022";
const x34_23 = "src/z0/x/x34.js:catalog-row:023";
const x34_24 = "src/z0/x/x34.js:catalog-row:024";
const x34_25 = "src/z0/x/x34.js:catalog-row:025";
const x34_26 = "src/z0/x/x34.js:catalog-row:026";
const x34_27 = "src/z0/x/x34.js:catalog-row:027";
const x34_28 = "src/z0/x/x34.js:catalog-row:028";
const x34_29 = "src/z0/x/x34.js:catalog-row:029";
const x34_30 = "src/z0/x/x34.js:catalog-row:030";
const x34_31 = "src/z0/x/x34.js:catalog-row:031";
const x34_32 = "src/z0/x/x34.js:catalog-row:032";
const x34_33 = "src/z0/x/x34.js:catalog-row:033";
const x34_34 = "src/z0/x/x34.js:catalog-row:034";
const x34_35 = "src/z0/x/x34.js:catalog-row:035";
const x34_36 = "src/z0/x/x34.js:catalog-row:036";
const x34_37 = "src/z0/x/x34.js:catalog-row:037";
const x34_38 = "src/z0/x/x34.js:catalog-row:038";
const x34_39 = "src/z0/x/x34.js:catalog-row:039";
const x34_40 = "src/z0/x/x34.js:catalog-row:040";
const x34_41 = "src/z0/x/x34.js:catalog-row:041";
const x34_42 = "src/z0/x/x34.js:catalog-row:042";
const x34_43 = "src/z0/x/x34.js:catalog-row:043";
const x34_44 = "src/z0/x/x34.js:catalog-row:044";
const x34_45 = "src/z0/x/x34.js:catalog-row:045";
const x34_46 = "src/z0/x/x34.js:catalog-row:046";
const x34_47 = "src/z0/x/x34.js:catalog-row:047";
const x34_48 = "src/z0/x/x34.js:catalog-row:048";
const x34_49 = "src/z0/x/x34.js:catalog-row:049";
const x34_50 = "src/z0/x/x34.js:catalog-row:050";
const x34_51 = "src/z0/x/x34.js:catalog-row:051";
const x34_52 = "src/z0/x/x34.js:catalog-row:052";
const x34_53 = "src/z0/x/x34.js:catalog-row:053";
const x34_54 = "src/z0/x/x34.js:catalog-row:054";
const x34_55 = "src/z0/x/x34.js:catalog-row:055";
const x34_56 = "src/z0/x/x34.js:catalog-row:056";
const x34_57 = "src/z0/x/x34.js:catalog-row:057";
const x34_58 = "src/z0/x/x34.js:catalog-row:058";
const x34_59 = "src/z0/x/x34.js:catalog-row:059";
const x34_60 = "src/z0/x/x34.js:catalog-row:060";
const x34_61 = "src/z0/x/x34.js:catalog-row:061";
const x34_62 = "src/z0/x/x34.js:catalog-row:062";
const x34_63 = "src/z0/x/x34.js:catalog-row:063";
const x34_64 = "src/z0/x/x34.js:catalog-row:064";
const x34_65 = "src/z0/x/x34.js:catalog-row:065";
const x34_66 = "src/z0/x/x34.js:catalog-row:066";
const x34_67 = "src/z0/x/x34.js:catalog-row:067";
const x34_68 = "src/z0/x/x34.js:catalog-row:068";
const x34_69 = "src/z0/x/x34.js:catalog-row:069";
const x34_70 = "src/z0/x/x34.js:catalog-row:070";
const x34_71 = "src/z0/x/x34.js:catalog-row:071";
const x34_72 = "src/z0/x/x34.js:catalog-row:072";
const x34_73 = "src/z0/x/x34.js:catalog-row:073";
const x34_74 = "src/z0/x/x34.js:catalog-row:074";
const x34_75 = "src/z0/x/x34.js:catalog-row:075";
const x34_76 = "src/z0/x/x34.js:catalog-row:076";
const x34_77 = "src/z0/x/x34.js:catalog-row:077";
const x34_78 = "src/z0/x/x34.js:catalog-row:078";
const x34_79 = "src/z0/x/x34.js:catalog-row:079";
const x34_80 = "src/z0/x/x34.js:catalog-row:080";
const x34_81 = "src/z0/x/x34.js:catalog-row:081";
const x34_82 = "src/z0/x/x34.js:catalog-row:082";
const x34_83 = "src/z0/x/x34.js:catalog-row:083";
const x34_84 = "src/z0/x/x34.js:catalog-row:084";
const x34_85 = "src/z0/x/x34.js:catalog-row:085";
const x34_86 = "src/z0/x/x34.js:catalog-row:086";
const x34_87 = "src/z0/x/x34.js:catalog-row:087";
const x34_88 = "src/z0/x/x34.js:catalog-row:088";
const x34_89 = "src/z0/x/x34.js:catalog-row:089";
const x34_90 = "src/z0/x/x34.js:catalog-row:090";
const x34_91 = "src/z0/x/x34.js:catalog-row:091";
const x34_92 = "src/z0/x/x34.js:catalog-row:092";
const x34_93 = "src/z0/x/x34.js:catalog-row:093";
const x34_94 = "src/z0/x/x34.js:catalog-row:094";
const x34_95 = "src/z0/x/x34.js:catalog-row:095";
const x34_96 = "src/z0/x/x34.js:catalog-row:096";
const x34_97 = "src/z0/x/x34.js:catalog-row:097";
const x34_98 = "src/z0/x/x34.js:catalog-row:098";
const x34_99 = "src/z0/x/x34.js:catalog-row:099";
const x34_100 = "src/z0/x/x34.js:catalog-row:100";
const x34_101 = "src/z0/x/x34.js:catalog-row:101";
const x34_102 = "src/z0/x/x34.js:catalog-row:102";
const x34_103 = "src/z0/x/x34.js:catalog-row:103";
const x34_104 = "src/z0/x/x34.js:catalog-row:104";
const x34_105 = "src/z0/x/x34.js:catalog-row:105";
const x34_106 = "src/z0/x/x34.js:catalog-row:106";
const x34_107 = "src/z0/x/x34.js:catalog-row:107";
const x34_108 = "src/z0/x/x34.js:catalog-row:108";
const x34_109 = "src/z0/x/x34.js:catalog-row:109";
const x34_110 = "src/z0/x/x34.js:catalog-row:110";
const x34_111 = "src/z0/x/x34.js:catalog-row:111";
const x34_112 = "src/z0/x/x34.js:catalog-row:112";
const x34_113 = "src/z0/x/x34.js:catalog-row:113";
const x34_114 = "src/z0/x/x34.js:catalog-row:114";
const x34_115 = "src/z0/x/x34.js:catalog-row:115";
const x34_116 = "src/z0/x/x34.js:catalog-row:116";
const x34_117 = "src/z0/x/x34.js:catalog-row:117";
const x34_118 = "src/z0/x/x34.js:catalog-row:118";
const x34_119 = "src/z0/x/x34.js:catalog-row:119";
const x34_120 = "src/z0/x/x34.js:catalog-row:120";
const x34_121 = "src/z0/x/x34.js:catalog-row:121";
const x34_122 = "src/z0/x/x34.js:catalog-row:122";
const x34_123 = "src/z0/x/x34.js:catalog-row:123";
const x34_124 = "src/z0/x/x34.js:catalog-row:124";
const x34_125 = "src/z0/x/x34.js:catalog-row:125";
const x34_126 = "src/z0/x/x34.js:catalog-row:126";
const x34_127 = "src/z0/x/x34.js:catalog-row:127";
const x34_128 = "src/z0/x/x34.js:catalog-row:128";
const x34_129 = "src/z0/x/x34.js:catalog-row:129";
const x34_130 = "src/z0/x/x34.js:catalog-row:130";
const x34_131 = "src/z0/x/x34.js:catalog-row:131";
const x34_132 = "src/z0/x/x34.js:catalog-row:132";
const x34_133 = "src/z0/x/x34.js:catalog-row:133";
const x34_134 = "src/z0/x/x34.js:catalog-row:134";
const x34_135 = "src/z0/x/x34.js:catalog-row:135";
const x34_136 = "src/z0/x/x34.js:catalog-row:136";
