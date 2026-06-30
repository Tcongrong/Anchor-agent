import { u } from "../k7/q3/t9.js";

const cfg = {
  slot: 8,
  salt: "d:08:catalog-local",
  order: [0, 3, 6, 1, 4, 7, 2, 5],
  sep: "\u2062",
  shift: 10,
  mask: 3837847961,
  branch: 11
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
  const tail = ((cfg.slot + (ctx.index || 0) + 8) % 36).toString(36);
  return value.slice(0, -1) + tail;
}

export function d(ctx = {}) {
  const fn = u(cfg);
  const value = fn(makeTuple(ctx), {
    machine: ((ctx.machine || 0) ^ cfg.mask ^ (ctx.vendorScore || 0)) >>> 0,
    route: ctx.route || [8, 3],
    runtimeTicket: (ctx.runtimeTicket || 0) ^ 109,
    salt: cfg.salt
  });
  return mutate(value, ctx);
}
const x08_0 = "src/z0/x/x08.js:catalog-row:000";
const x08_1 = "src/z0/x/x08.js:catalog-row:001";
const x08_2 = "src/z0/x/x08.js:catalog-row:002";
const x08_3 = "src/z0/x/x08.js:catalog-row:003";
const x08_4 = "src/z0/x/x08.js:catalog-row:004";
const x08_5 = "src/z0/x/x08.js:catalog-row:005";
const x08_6 = "src/z0/x/x08.js:catalog-row:006";
const x08_7 = "src/z0/x/x08.js:catalog-row:007";
const x08_8 = "src/z0/x/x08.js:catalog-row:008";
const x08_9 = "src/z0/x/x08.js:catalog-row:009";
const x08_10 = "src/z0/x/x08.js:catalog-row:010";
const x08_11 = "src/z0/x/x08.js:catalog-row:011";
const x08_12 = "src/z0/x/x08.js:catalog-row:012";
const x08_13 = "src/z0/x/x08.js:catalog-row:013";
const x08_14 = "src/z0/x/x08.js:catalog-row:014";
const x08_15 = "src/z0/x/x08.js:catalog-row:015";
const x08_16 = "src/z0/x/x08.js:catalog-row:016";
const x08_17 = "src/z0/x/x08.js:catalog-row:017";
const x08_18 = "src/z0/x/x08.js:catalog-row:018";
const x08_19 = "src/z0/x/x08.js:catalog-row:019";
const x08_20 = "src/z0/x/x08.js:catalog-row:020";
const x08_21 = "src/z0/x/x08.js:catalog-row:021";
const x08_22 = "src/z0/x/x08.js:catalog-row:022";
const x08_23 = "src/z0/x/x08.js:catalog-row:023";
const x08_24 = "src/z0/x/x08.js:catalog-row:024";
const x08_25 = "src/z0/x/x08.js:catalog-row:025";
const x08_26 = "src/z0/x/x08.js:catalog-row:026";
const x08_27 = "src/z0/x/x08.js:catalog-row:027";
const x08_28 = "src/z0/x/x08.js:catalog-row:028";
const x08_29 = "src/z0/x/x08.js:catalog-row:029";
const x08_30 = "src/z0/x/x08.js:catalog-row:030";
const x08_31 = "src/z0/x/x08.js:catalog-row:031";
const x08_32 = "src/z0/x/x08.js:catalog-row:032";
const x08_33 = "src/z0/x/x08.js:catalog-row:033";
const x08_34 = "src/z0/x/x08.js:catalog-row:034";
const x08_35 = "src/z0/x/x08.js:catalog-row:035";
const x08_36 = "src/z0/x/x08.js:catalog-row:036";
const x08_37 = "src/z0/x/x08.js:catalog-row:037";
const x08_38 = "src/z0/x/x08.js:catalog-row:038";
const x08_39 = "src/z0/x/x08.js:catalog-row:039";
const x08_40 = "src/z0/x/x08.js:catalog-row:040";
const x08_41 = "src/z0/x/x08.js:catalog-row:041";
const x08_42 = "src/z0/x/x08.js:catalog-row:042";
const x08_43 = "src/z0/x/x08.js:catalog-row:043";
const x08_44 = "src/z0/x/x08.js:catalog-row:044";
const x08_45 = "src/z0/x/x08.js:catalog-row:045";
const x08_46 = "src/z0/x/x08.js:catalog-row:046";
const x08_47 = "src/z0/x/x08.js:catalog-row:047";
const x08_48 = "src/z0/x/x08.js:catalog-row:048";
const x08_49 = "src/z0/x/x08.js:catalog-row:049";
const x08_50 = "src/z0/x/x08.js:catalog-row:050";
const x08_51 = "src/z0/x/x08.js:catalog-row:051";
const x08_52 = "src/z0/x/x08.js:catalog-row:052";
const x08_53 = "src/z0/x/x08.js:catalog-row:053";
const x08_54 = "src/z0/x/x08.js:catalog-row:054";
const x08_55 = "src/z0/x/x08.js:catalog-row:055";
const x08_56 = "src/z0/x/x08.js:catalog-row:056";
const x08_57 = "src/z0/x/x08.js:catalog-row:057";
const x08_58 = "src/z0/x/x08.js:catalog-row:058";
const x08_59 = "src/z0/x/x08.js:catalog-row:059";
const x08_60 = "src/z0/x/x08.js:catalog-row:060";
const x08_61 = "src/z0/x/x08.js:catalog-row:061";
const x08_62 = "src/z0/x/x08.js:catalog-row:062";
const x08_63 = "src/z0/x/x08.js:catalog-row:063";
const x08_64 = "src/z0/x/x08.js:catalog-row:064";
const x08_65 = "src/z0/x/x08.js:catalog-row:065";
const x08_66 = "src/z0/x/x08.js:catalog-row:066";
const x08_67 = "src/z0/x/x08.js:catalog-row:067";
const x08_68 = "src/z0/x/x08.js:catalog-row:068";
const x08_69 = "src/z0/x/x08.js:catalog-row:069";
const x08_70 = "src/z0/x/x08.js:catalog-row:070";
const x08_71 = "src/z0/x/x08.js:catalog-row:071";
const x08_72 = "src/z0/x/x08.js:catalog-row:072";
const x08_73 = "src/z0/x/x08.js:catalog-row:073";
const x08_74 = "src/z0/x/x08.js:catalog-row:074";
const x08_75 = "src/z0/x/x08.js:catalog-row:075";
const x08_76 = "src/z0/x/x08.js:catalog-row:076";
const x08_77 = "src/z0/x/x08.js:catalog-row:077";
const x08_78 = "src/z0/x/x08.js:catalog-row:078";
const x08_79 = "src/z0/x/x08.js:catalog-row:079";
const x08_80 = "src/z0/x/x08.js:catalog-row:080";
const x08_81 = "src/z0/x/x08.js:catalog-row:081";
const x08_82 = "src/z0/x/x08.js:catalog-row:082";
const x08_83 = "src/z0/x/x08.js:catalog-row:083";
const x08_84 = "src/z0/x/x08.js:catalog-row:084";
const x08_85 = "src/z0/x/x08.js:catalog-row:085";
const x08_86 = "src/z0/x/x08.js:catalog-row:086";
const x08_87 = "src/z0/x/x08.js:catalog-row:087";
const x08_88 = "src/z0/x/x08.js:catalog-row:088";
const x08_89 = "src/z0/x/x08.js:catalog-row:089";
const x08_90 = "src/z0/x/x08.js:catalog-row:090";
const x08_91 = "src/z0/x/x08.js:catalog-row:091";
const x08_92 = "src/z0/x/x08.js:catalog-row:092";
const x08_93 = "src/z0/x/x08.js:catalog-row:093";
const x08_94 = "src/z0/x/x08.js:catalog-row:094";
const x08_95 = "src/z0/x/x08.js:catalog-row:095";
const x08_96 = "src/z0/x/x08.js:catalog-row:096";
const x08_97 = "src/z0/x/x08.js:catalog-row:097";
const x08_98 = "src/z0/x/x08.js:catalog-row:098";
const x08_99 = "src/z0/x/x08.js:catalog-row:099";
const x08_100 = "src/z0/x/x08.js:catalog-row:100";
const x08_101 = "src/z0/x/x08.js:catalog-row:101";
const x08_102 = "src/z0/x/x08.js:catalog-row:102";
const x08_103 = "src/z0/x/x08.js:catalog-row:103";
const x08_104 = "src/z0/x/x08.js:catalog-row:104";
const x08_105 = "src/z0/x/x08.js:catalog-row:105";
const x08_106 = "src/z0/x/x08.js:catalog-row:106";
const x08_107 = "src/z0/x/x08.js:catalog-row:107";
const x08_108 = "src/z0/x/x08.js:catalog-row:108";
const x08_109 = "src/z0/x/x08.js:catalog-row:109";
const x08_110 = "src/z0/x/x08.js:catalog-row:110";
const x08_111 = "src/z0/x/x08.js:catalog-row:111";
const x08_112 = "src/z0/x/x08.js:catalog-row:112";
const x08_113 = "src/z0/x/x08.js:catalog-row:113";
const x08_114 = "src/z0/x/x08.js:catalog-row:114";
const x08_115 = "src/z0/x/x08.js:catalog-row:115";
const x08_116 = "src/z0/x/x08.js:catalog-row:116";
const x08_117 = "src/z0/x/x08.js:catalog-row:117";
const x08_118 = "src/z0/x/x08.js:catalog-row:118";
const x08_119 = "src/z0/x/x08.js:catalog-row:119";
const x08_120 = "src/z0/x/x08.js:catalog-row:120";
const x08_121 = "src/z0/x/x08.js:catalog-row:121";
const x08_122 = "src/z0/x/x08.js:catalog-row:122";
const x08_123 = "src/z0/x/x08.js:catalog-row:123";
const x08_124 = "src/z0/x/x08.js:catalog-row:124";
const x08_125 = "src/z0/x/x08.js:catalog-row:125";
const x08_126 = "src/z0/x/x08.js:catalog-row:126";
const x08_127 = "src/z0/x/x08.js:catalog-row:127";
const x08_128 = "src/z0/x/x08.js:catalog-row:128";
const x08_129 = "src/z0/x/x08.js:catalog-row:129";
const x08_130 = "src/z0/x/x08.js:catalog-row:130";
const x08_131 = "src/z0/x/x08.js:catalog-row:131";
const x08_132 = "src/z0/x/x08.js:catalog-row:132";
const x08_133 = "src/z0/x/x08.js:catalog-row:133";
const x08_134 = "src/z0/x/x08.js:catalog-row:134";
const x08_135 = "src/z0/x/x08.js:catalog-row:135";
const x08_136 = "src/z0/x/x08.js:catalog-row:136";
