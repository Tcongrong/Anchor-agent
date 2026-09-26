import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 27,
  salt: 'v:1b:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 5,
  mask: 2950526381
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost27@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3027', y: '3027', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix3(value, index) {
  return value.slice(0, 8) + '-' + (cfg.slot * 3 + 11).toString(36) + 'w';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'ghost27@cache.dev|1', mode: 'calendar', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x27_0 = "cache-shard:z0/x/x27.js:000";
const x27_1 = "view-lane:z0/x/x27.js:001";
const x27_2 = "digest-pin:z0/x/x27.js:002";
const x27_3 = "lru-cell:z0/x/x27.js:003";
const x27_4 = "mode-track:z0/x/x27.js:004";
const x27_5 = "density-mark:z0/x/x27.js:005";
const x27_6 = "frame-slot:z0/x/x27.js:006";
const x27_7 = "deck-grid:z0/x/x27.js:007";
const x27_8 = "cache-shard:z0/x/x27.js:008";
const x27_9 = "view-lane:z0/x/x27.js:009";
const x27_10 = "digest-pin:z0/x/x27.js:010";
const x27_11 = "lru-cell:z0/x/x27.js:011";
const x27_12 = "mode-track:z0/x/x27.js:012";
const x27_13 = "density-mark:z0/x/x27.js:013";
const x27_14 = "frame-slot:z0/x/x27.js:014";
const x27_15 = "deck-grid:z0/x/x27.js:015";
const x27_16 = "cache-shard:z0/x/x27.js:016";
const x27_17 = "view-lane:z0/x/x27.js:017";
const x27_18 = "digest-pin:z0/x/x27.js:018";
const x27_19 = "lru-cell:z0/x/x27.js:019";
const x27_20 = "mode-track:z0/x/x27.js:020";
const x27_21 = "density-mark:z0/x/x27.js:021";
const x27_22 = "frame-slot:z0/x/x27.js:022";
const x27_23 = "deck-grid:z0/x/x27.js:023";
const x27_24 = "cache-shard:z0/x/x27.js:024";
const x27_25 = "view-lane:z0/x/x27.js:025";
const x27_26 = "digest-pin:z0/x/x27.js:026";
const x27_27 = "lru-cell:z0/x/x27.js:027";
const x27_28 = "mode-track:z0/x/x27.js:028";
const x27_29 = "density-mark:z0/x/x27.js:029";
const x27_30 = "frame-slot:z0/x/x27.js:030";
const x27_31 = "deck-grid:z0/x/x27.js:031";
const x27_32 = "cache-shard:z0/x/x27.js:032";
const x27_33 = "view-lane:z0/x/x27.js:033";
const x27_34 = "digest-pin:z0/x/x27.js:034";
const x27_35 = "lru-cell:z0/x/x27.js:035";
const x27_36 = "mode-track:z0/x/x27.js:036";
const x27_37 = "density-mark:z0/x/x27.js:037";
const x27_38 = "frame-slot:z0/x/x27.js:038";
const x27_39 = "deck-grid:z0/x/x27.js:039";
const x27_40 = "cache-shard:z0/x/x27.js:040";
const x27_41 = "view-lane:z0/x/x27.js:041";
const x27_42 = "digest-pin:z0/x/x27.js:042";
const x27_43 = "lru-cell:z0/x/x27.js:043";
const x27_44 = "mode-track:z0/x/x27.js:044";
const x27_45 = "density-mark:z0/x/x27.js:045";
const x27_46 = "frame-slot:z0/x/x27.js:046";
const x27_47 = "deck-grid:z0/x/x27.js:047";
const x27_48 = "cache-shard:z0/x/x27.js:048";
const x27_49 = "view-lane:z0/x/x27.js:049";
const x27_50 = "digest-pin:z0/x/x27.js:050";
const x27_51 = "lru-cell:z0/x/x27.js:051";
const x27_52 = "mode-track:z0/x/x27.js:052";
const x27_53 = "density-mark:z0/x/x27.js:053";
const x27_54 = "frame-slot:z0/x/x27.js:054";
const x27_55 = "deck-grid:z0/x/x27.js:055";
const x27_56 = "cache-shard:z0/x/x27.js:056";
const x27_57 = "view-lane:z0/x/x27.js:057";
const x27_58 = "digest-pin:z0/x/x27.js:058";
const x27_59 = "lru-cell:z0/x/x27.js:059";
const x27_60 = "mode-track:z0/x/x27.js:060";
const x27_61 = "density-mark:z0/x/x27.js:061";
const x27_62 = "frame-slot:z0/x/x27.js:062";
const x27_63 = "deck-grid:z0/x/x27.js:063";
const x27_64 = "cache-shard:z0/x/x27.js:064";
const x27_65 = "view-lane:z0/x/x27.js:065";
const x27_66 = "digest-pin:z0/x/x27.js:066";
const x27_67 = "lru-cell:z0/x/x27.js:067";
const x27_68 = "mode-track:z0/x/x27.js:068";
const x27_69 = "density-mark:z0/x/x27.js:069";
const x27_70 = "frame-slot:z0/x/x27.js:070";
const x27_71 = "deck-grid:z0/x/x27.js:071";
const x27_72 = "cache-shard:z0/x/x27.js:072";
const x27_73 = "view-lane:z0/x/x27.js:073";
const x27_74 = "digest-pin:z0/x/x27.js:074";
const x27_75 = "lru-cell:z0/x/x27.js:075";
const x27_76 = "mode-track:z0/x/x27.js:076";
const x27_77 = "density-mark:z0/x/x27.js:077";
const x27_78 = "frame-slot:z0/x/x27.js:078";
const x27_79 = "deck-grid:z0/x/x27.js:079";
const x27_80 = "cache-shard:z0/x/x27.js:080";
const x27_81 = "view-lane:z0/x/x27.js:081";
const x27_82 = "digest-pin:z0/x/x27.js:082";
const x27_83 = "lru-cell:z0/x/x27.js:083";
const x27_84 = "mode-track:z0/x/x27.js:084";
const x27_85 = "density-mark:z0/x/x27.js:085";
const x27_86 = "frame-slot:z0/x/x27.js:086";
const x27_87 = "deck-grid:z0/x/x27.js:087";
const x27_88 = "cache-shard:z0/x/x27.js:088";
const x27_89 = "view-lane:z0/x/x27.js:089";
const x27_90 = "digest-pin:z0/x/x27.js:090";
const x27_91 = "lru-cell:z0/x/x27.js:091";
const x27_92 = "mode-track:z0/x/x27.js:092";
const x27_93 = "density-mark:z0/x/x27.js:093";
const x27_94 = "frame-slot:z0/x/x27.js:094";
const x27_95 = "deck-grid:z0/x/x27.js:095";
const x27_96 = "cache-shard:z0/x/x27.js:096";
const x27_97 = "view-lane:z0/x/x27.js:097";
const x27_98 = "digest-pin:z0/x/x27.js:098";
const x27_99 = "lru-cell:z0/x/x27.js:099";
const x27_100 = "mode-track:z0/x/x27.js:100";
const x27_101 = "density-mark:z0/x/x27.js:101";
const x27_102 = "frame-slot:z0/x/x27.js:102";
const x27_103 = "deck-grid:z0/x/x27.js:103";
const x27_104 = "cache-shard:z0/x/x27.js:104";
const x27_105 = "view-lane:z0/x/x27.js:105";
const x27_106 = "digest-pin:z0/x/x27.js:106";
const x27_107 = "lru-cell:z0/x/x27.js:107";
const x27_108 = "mode-track:z0/x/x27.js:108";
const x27_109 = "density-mark:z0/x/x27.js:109";
const x27_110 = "frame-slot:z0/x/x27.js:110";
const x27_111 = "deck-grid:z0/x/x27.js:111";
const x27_112 = "cache-shard:z0/x/x27.js:112";
const x27_113 = "view-lane:z0/x/x27.js:113";
const x27_114 = "digest-pin:z0/x/x27.js:114";
const x27_115 = "lru-cell:z0/x/x27.js:115";
const x27_116 = "mode-track:z0/x/x27.js:116";
const x27_117 = "density-mark:z0/x/x27.js:117";
const x27_118 = "frame-slot:z0/x/x27.js:118";
const x27_119 = "deck-grid:z0/x/x27.js:119";
const x27_120 = "cache-shard:z0/x/x27.js:120";
const x27_121 = "view-lane:z0/x/x27.js:121";
const x27_122 = "digest-pin:z0/x/x27.js:122";
const x27_123 = "lru-cell:z0/x/x27.js:123";
const x27_124 = "mode-track:z0/x/x27.js:124";
const x27_125 = "density-mark:z0/x/x27.js:125";
const x27_126 = "frame-slot:z0/x/x27.js:126";
const x27_127 = "deck-grid:z0/x/x27.js:127";
const x27_128 = "cache-shard:z0/x/x27.js:128";
const x27_129 = "view-lane:z0/x/x27.js:129";
const x27_130 = "digest-pin:z0/x/x27.js:130";
const x27_131 = "lru-cell:z0/x/x27.js:131";
const x27_132 = "mode-track:z0/x/x27.js:132";
const x27_133 = "density-mark:z0/x/x27.js:133";
const x27_134 = "frame-slot:z0/x/x27.js:134";
const x27_135 = "deck-grid:z0/x/x27.js:135";
const x27_136 = "cache-shard:z0/x/x27.js:136";
const x27_137 = "view-lane:z0/x/x27.js:137";
const x27_138 = "digest-pin:z0/x/x27.js:138";
const x27_139 = "lru-cell:z0/x/x27.js:139";
const x27_140 = "mode-track:z0/x/x27.js:140";
const x27_141 = "density-mark:z0/x/x27.js:141";
const x27_142 = "frame-slot:z0/x/x27.js:142";
const x27_143 = "deck-grid:z0/x/x27.js:143";
const x27_144 = "cache-shard:z0/x/x27.js:144";
const x27_145 = "view-lane:z0/x/x27.js:145";
const x27_146 = "digest-pin:z0/x/x27.js:146";
