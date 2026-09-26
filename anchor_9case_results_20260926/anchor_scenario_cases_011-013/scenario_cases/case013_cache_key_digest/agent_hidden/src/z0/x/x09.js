import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 9,
  salt: 'v:09:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 5,
  mask: 2415180397
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost9@cache.dev', y: 'shadow', n: 18 },
    { k: 'b', i: 1, v: '3009', y: '3009', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(0, 9) + '.' + (cfg.slot + 3).toString(36) + 'dk';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'ghost9@cache.dev|1', mode: 'list', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x09_0 = "cache-shard:z0/x/x09.js:000";
const x09_1 = "view-lane:z0/x/x09.js:001";
const x09_2 = "digest-pin:z0/x/x09.js:002";
const x09_3 = "lru-cell:z0/x/x09.js:003";
const x09_4 = "mode-track:z0/x/x09.js:004";
const x09_5 = "density-mark:z0/x/x09.js:005";
const x09_6 = "frame-slot:z0/x/x09.js:006";
const x09_7 = "deck-grid:z0/x/x09.js:007";
const x09_8 = "cache-shard:z0/x/x09.js:008";
const x09_9 = "view-lane:z0/x/x09.js:009";
const x09_10 = "digest-pin:z0/x/x09.js:010";
const x09_11 = "lru-cell:z0/x/x09.js:011";
const x09_12 = "mode-track:z0/x/x09.js:012";
const x09_13 = "density-mark:z0/x/x09.js:013";
const x09_14 = "frame-slot:z0/x/x09.js:014";
const x09_15 = "deck-grid:z0/x/x09.js:015";
const x09_16 = "cache-shard:z0/x/x09.js:016";
const x09_17 = "view-lane:z0/x/x09.js:017";
const x09_18 = "digest-pin:z0/x/x09.js:018";
const x09_19 = "lru-cell:z0/x/x09.js:019";
const x09_20 = "mode-track:z0/x/x09.js:020";
const x09_21 = "density-mark:z0/x/x09.js:021";
const x09_22 = "frame-slot:z0/x/x09.js:022";
const x09_23 = "deck-grid:z0/x/x09.js:023";
const x09_24 = "cache-shard:z0/x/x09.js:024";
const x09_25 = "view-lane:z0/x/x09.js:025";
const x09_26 = "digest-pin:z0/x/x09.js:026";
const x09_27 = "lru-cell:z0/x/x09.js:027";
const x09_28 = "mode-track:z0/x/x09.js:028";
const x09_29 = "density-mark:z0/x/x09.js:029";
const x09_30 = "frame-slot:z0/x/x09.js:030";
const x09_31 = "deck-grid:z0/x/x09.js:031";
const x09_32 = "cache-shard:z0/x/x09.js:032";
const x09_33 = "view-lane:z0/x/x09.js:033";
const x09_34 = "digest-pin:z0/x/x09.js:034";
const x09_35 = "lru-cell:z0/x/x09.js:035";
const x09_36 = "mode-track:z0/x/x09.js:036";
const x09_37 = "density-mark:z0/x/x09.js:037";
const x09_38 = "frame-slot:z0/x/x09.js:038";
const x09_39 = "deck-grid:z0/x/x09.js:039";
const x09_40 = "cache-shard:z0/x/x09.js:040";
const x09_41 = "view-lane:z0/x/x09.js:041";
const x09_42 = "digest-pin:z0/x/x09.js:042";
const x09_43 = "lru-cell:z0/x/x09.js:043";
const x09_44 = "mode-track:z0/x/x09.js:044";
const x09_45 = "density-mark:z0/x/x09.js:045";
const x09_46 = "frame-slot:z0/x/x09.js:046";
const x09_47 = "deck-grid:z0/x/x09.js:047";
const x09_48 = "cache-shard:z0/x/x09.js:048";
const x09_49 = "view-lane:z0/x/x09.js:049";
const x09_50 = "digest-pin:z0/x/x09.js:050";
const x09_51 = "lru-cell:z0/x/x09.js:051";
const x09_52 = "mode-track:z0/x/x09.js:052";
const x09_53 = "density-mark:z0/x/x09.js:053";
const x09_54 = "frame-slot:z0/x/x09.js:054";
const x09_55 = "deck-grid:z0/x/x09.js:055";
const x09_56 = "cache-shard:z0/x/x09.js:056";
const x09_57 = "view-lane:z0/x/x09.js:057";
const x09_58 = "digest-pin:z0/x/x09.js:058";
const x09_59 = "lru-cell:z0/x/x09.js:059";
const x09_60 = "mode-track:z0/x/x09.js:060";
const x09_61 = "density-mark:z0/x/x09.js:061";
const x09_62 = "frame-slot:z0/x/x09.js:062";
const x09_63 = "deck-grid:z0/x/x09.js:063";
const x09_64 = "cache-shard:z0/x/x09.js:064";
const x09_65 = "view-lane:z0/x/x09.js:065";
const x09_66 = "digest-pin:z0/x/x09.js:066";
const x09_67 = "lru-cell:z0/x/x09.js:067";
const x09_68 = "mode-track:z0/x/x09.js:068";
const x09_69 = "density-mark:z0/x/x09.js:069";
const x09_70 = "frame-slot:z0/x/x09.js:070";
const x09_71 = "deck-grid:z0/x/x09.js:071";
const x09_72 = "cache-shard:z0/x/x09.js:072";
const x09_73 = "view-lane:z0/x/x09.js:073";
const x09_74 = "digest-pin:z0/x/x09.js:074";
const x09_75 = "lru-cell:z0/x/x09.js:075";
const x09_76 = "mode-track:z0/x/x09.js:076";
const x09_77 = "density-mark:z0/x/x09.js:077";
const x09_78 = "frame-slot:z0/x/x09.js:078";
const x09_79 = "deck-grid:z0/x/x09.js:079";
const x09_80 = "cache-shard:z0/x/x09.js:080";
const x09_81 = "view-lane:z0/x/x09.js:081";
const x09_82 = "digest-pin:z0/x/x09.js:082";
const x09_83 = "lru-cell:z0/x/x09.js:083";
const x09_84 = "mode-track:z0/x/x09.js:084";
const x09_85 = "density-mark:z0/x/x09.js:085";
const x09_86 = "frame-slot:z0/x/x09.js:086";
const x09_87 = "deck-grid:z0/x/x09.js:087";
const x09_88 = "cache-shard:z0/x/x09.js:088";
const x09_89 = "view-lane:z0/x/x09.js:089";
const x09_90 = "digest-pin:z0/x/x09.js:090";
const x09_91 = "lru-cell:z0/x/x09.js:091";
const x09_92 = "mode-track:z0/x/x09.js:092";
const x09_93 = "density-mark:z0/x/x09.js:093";
const x09_94 = "frame-slot:z0/x/x09.js:094";
const x09_95 = "deck-grid:z0/x/x09.js:095";
const x09_96 = "cache-shard:z0/x/x09.js:096";
const x09_97 = "view-lane:z0/x/x09.js:097";
const x09_98 = "digest-pin:z0/x/x09.js:098";
const x09_99 = "lru-cell:z0/x/x09.js:099";
const x09_100 = "mode-track:z0/x/x09.js:100";
const x09_101 = "density-mark:z0/x/x09.js:101";
const x09_102 = "frame-slot:z0/x/x09.js:102";
const x09_103 = "deck-grid:z0/x/x09.js:103";
const x09_104 = "cache-shard:z0/x/x09.js:104";
const x09_105 = "view-lane:z0/x/x09.js:105";
const x09_106 = "digest-pin:z0/x/x09.js:106";
const x09_107 = "lru-cell:z0/x/x09.js:107";
const x09_108 = "mode-track:z0/x/x09.js:108";
const x09_109 = "density-mark:z0/x/x09.js:109";
const x09_110 = "frame-slot:z0/x/x09.js:110";
const x09_111 = "deck-grid:z0/x/x09.js:111";
const x09_112 = "cache-shard:z0/x/x09.js:112";
const x09_113 = "view-lane:z0/x/x09.js:113";
const x09_114 = "digest-pin:z0/x/x09.js:114";
const x09_115 = "lru-cell:z0/x/x09.js:115";
const x09_116 = "mode-track:z0/x/x09.js:116";
const x09_117 = "density-mark:z0/x/x09.js:117";
const x09_118 = "frame-slot:z0/x/x09.js:118";
const x09_119 = "deck-grid:z0/x/x09.js:119";
const x09_120 = "cache-shard:z0/x/x09.js:120";
const x09_121 = "view-lane:z0/x/x09.js:121";
const x09_122 = "digest-pin:z0/x/x09.js:122";
const x09_123 = "lru-cell:z0/x/x09.js:123";
const x09_124 = "mode-track:z0/x/x09.js:124";
const x09_125 = "density-mark:z0/x/x09.js:125";
const x09_126 = "frame-slot:z0/x/x09.js:126";
const x09_127 = "deck-grid:z0/x/x09.js:127";
const x09_128 = "cache-shard:z0/x/x09.js:128";
const x09_129 = "view-lane:z0/x/x09.js:129";
const x09_130 = "digest-pin:z0/x/x09.js:130";
const x09_131 = "lru-cell:z0/x/x09.js:131";
const x09_132 = "mode-track:z0/x/x09.js:132";
const x09_133 = "density-mark:z0/x/x09.js:133";
const x09_134 = "frame-slot:z0/x/x09.js:134";
const x09_135 = "deck-grid:z0/x/x09.js:135";
const x09_136 = "cache-shard:z0/x/x09.js:136";
const x09_137 = "view-lane:z0/x/x09.js:137";
const x09_138 = "digest-pin:z0/x/x09.js:138";
const x09_139 = "lru-cell:z0/x/x09.js:139";
const x09_140 = "mode-track:z0/x/x09.js:140";
const x09_141 = "density-mark:z0/x/x09.js:141";
const x09_142 = "frame-slot:z0/x/x09.js:142";
const x09_143 = "deck-grid:z0/x/x09.js:143";
const x09_144 = "cache-shard:z0/x/x09.js:144";
const x09_145 = "view-lane:z0/x/x09.js:145";
const x09_146 = "digest-pin:z0/x/x09.js:146";
