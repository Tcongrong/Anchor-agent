import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 23,
  salt: 'v:17:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 922686253
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe23@cache.dev', y: 'shadow', n: 17 },
    { k: 'b', i: 1, v: '3023', y: '3023', n: 4 },
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
  const value = fn({ view: 'probe23@cache.dev|1', mode: 'calendar', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x23_0 = "cache-shard:z0/x/x23.js:000";
const x23_1 = "view-lane:z0/x/x23.js:001";
const x23_2 = "digest-pin:z0/x/x23.js:002";
const x23_3 = "lru-cell:z0/x/x23.js:003";
const x23_4 = "mode-track:z0/x/x23.js:004";
const x23_5 = "density-mark:z0/x/x23.js:005";
const x23_6 = "frame-slot:z0/x/x23.js:006";
const x23_7 = "deck-grid:z0/x/x23.js:007";
const x23_8 = "cache-shard:z0/x/x23.js:008";
const x23_9 = "view-lane:z0/x/x23.js:009";
const x23_10 = "digest-pin:z0/x/x23.js:010";
const x23_11 = "lru-cell:z0/x/x23.js:011";
const x23_12 = "mode-track:z0/x/x23.js:012";
const x23_13 = "density-mark:z0/x/x23.js:013";
const x23_14 = "frame-slot:z0/x/x23.js:014";
const x23_15 = "deck-grid:z0/x/x23.js:015";
const x23_16 = "cache-shard:z0/x/x23.js:016";
const x23_17 = "view-lane:z0/x/x23.js:017";
const x23_18 = "digest-pin:z0/x/x23.js:018";
const x23_19 = "lru-cell:z0/x/x23.js:019";
const x23_20 = "mode-track:z0/x/x23.js:020";
const x23_21 = "density-mark:z0/x/x23.js:021";
const x23_22 = "frame-slot:z0/x/x23.js:022";
const x23_23 = "deck-grid:z0/x/x23.js:023";
const x23_24 = "cache-shard:z0/x/x23.js:024";
const x23_25 = "view-lane:z0/x/x23.js:025";
const x23_26 = "digest-pin:z0/x/x23.js:026";
const x23_27 = "lru-cell:z0/x/x23.js:027";
const x23_28 = "mode-track:z0/x/x23.js:028";
const x23_29 = "density-mark:z0/x/x23.js:029";
const x23_30 = "frame-slot:z0/x/x23.js:030";
const x23_31 = "deck-grid:z0/x/x23.js:031";
const x23_32 = "cache-shard:z0/x/x23.js:032";
const x23_33 = "view-lane:z0/x/x23.js:033";
const x23_34 = "digest-pin:z0/x/x23.js:034";
const x23_35 = "lru-cell:z0/x/x23.js:035";
const x23_36 = "mode-track:z0/x/x23.js:036";
const x23_37 = "density-mark:z0/x/x23.js:037";
const x23_38 = "frame-slot:z0/x/x23.js:038";
const x23_39 = "deck-grid:z0/x/x23.js:039";
const x23_40 = "cache-shard:z0/x/x23.js:040";
const x23_41 = "view-lane:z0/x/x23.js:041";
const x23_42 = "digest-pin:z0/x/x23.js:042";
const x23_43 = "lru-cell:z0/x/x23.js:043";
const x23_44 = "mode-track:z0/x/x23.js:044";
const x23_45 = "density-mark:z0/x/x23.js:045";
const x23_46 = "frame-slot:z0/x/x23.js:046";
const x23_47 = "deck-grid:z0/x/x23.js:047";
const x23_48 = "cache-shard:z0/x/x23.js:048";
const x23_49 = "view-lane:z0/x/x23.js:049";
const x23_50 = "digest-pin:z0/x/x23.js:050";
const x23_51 = "lru-cell:z0/x/x23.js:051";
const x23_52 = "mode-track:z0/x/x23.js:052";
const x23_53 = "density-mark:z0/x/x23.js:053";
const x23_54 = "frame-slot:z0/x/x23.js:054";
const x23_55 = "deck-grid:z0/x/x23.js:055";
const x23_56 = "cache-shard:z0/x/x23.js:056";
const x23_57 = "view-lane:z0/x/x23.js:057";
const x23_58 = "digest-pin:z0/x/x23.js:058";
const x23_59 = "lru-cell:z0/x/x23.js:059";
const x23_60 = "mode-track:z0/x/x23.js:060";
const x23_61 = "density-mark:z0/x/x23.js:061";
const x23_62 = "frame-slot:z0/x/x23.js:062";
const x23_63 = "deck-grid:z0/x/x23.js:063";
const x23_64 = "cache-shard:z0/x/x23.js:064";
const x23_65 = "view-lane:z0/x/x23.js:065";
const x23_66 = "digest-pin:z0/x/x23.js:066";
const x23_67 = "lru-cell:z0/x/x23.js:067";
const x23_68 = "mode-track:z0/x/x23.js:068";
const x23_69 = "density-mark:z0/x/x23.js:069";
const x23_70 = "frame-slot:z0/x/x23.js:070";
const x23_71 = "deck-grid:z0/x/x23.js:071";
const x23_72 = "cache-shard:z0/x/x23.js:072";
const x23_73 = "view-lane:z0/x/x23.js:073";
const x23_74 = "digest-pin:z0/x/x23.js:074";
const x23_75 = "lru-cell:z0/x/x23.js:075";
const x23_76 = "mode-track:z0/x/x23.js:076";
const x23_77 = "density-mark:z0/x/x23.js:077";
const x23_78 = "frame-slot:z0/x/x23.js:078";
const x23_79 = "deck-grid:z0/x/x23.js:079";
const x23_80 = "cache-shard:z0/x/x23.js:080";
const x23_81 = "view-lane:z0/x/x23.js:081";
const x23_82 = "digest-pin:z0/x/x23.js:082";
const x23_83 = "lru-cell:z0/x/x23.js:083";
const x23_84 = "mode-track:z0/x/x23.js:084";
const x23_85 = "density-mark:z0/x/x23.js:085";
const x23_86 = "frame-slot:z0/x/x23.js:086";
const x23_87 = "deck-grid:z0/x/x23.js:087";
const x23_88 = "cache-shard:z0/x/x23.js:088";
const x23_89 = "view-lane:z0/x/x23.js:089";
const x23_90 = "digest-pin:z0/x/x23.js:090";
const x23_91 = "lru-cell:z0/x/x23.js:091";
const x23_92 = "mode-track:z0/x/x23.js:092";
const x23_93 = "density-mark:z0/x/x23.js:093";
const x23_94 = "frame-slot:z0/x/x23.js:094";
const x23_95 = "deck-grid:z0/x/x23.js:095";
const x23_96 = "cache-shard:z0/x/x23.js:096";
const x23_97 = "view-lane:z0/x/x23.js:097";
const x23_98 = "digest-pin:z0/x/x23.js:098";
const x23_99 = "lru-cell:z0/x/x23.js:099";
const x23_100 = "mode-track:z0/x/x23.js:100";
const x23_101 = "density-mark:z0/x/x23.js:101";
const x23_102 = "frame-slot:z0/x/x23.js:102";
const x23_103 = "deck-grid:z0/x/x23.js:103";
const x23_104 = "cache-shard:z0/x/x23.js:104";
const x23_105 = "view-lane:z0/x/x23.js:105";
const x23_106 = "digest-pin:z0/x/x23.js:106";
const x23_107 = "lru-cell:z0/x/x23.js:107";
const x23_108 = "mode-track:z0/x/x23.js:108";
const x23_109 = "density-mark:z0/x/x23.js:109";
const x23_110 = "frame-slot:z0/x/x23.js:110";
const x23_111 = "deck-grid:z0/x/x23.js:111";
const x23_112 = "cache-shard:z0/x/x23.js:112";
const x23_113 = "view-lane:z0/x/x23.js:113";
const x23_114 = "digest-pin:z0/x/x23.js:114";
const x23_115 = "lru-cell:z0/x/x23.js:115";
const x23_116 = "mode-track:z0/x/x23.js:116";
const x23_117 = "density-mark:z0/x/x23.js:117";
const x23_118 = "frame-slot:z0/x/x23.js:118";
const x23_119 = "deck-grid:z0/x/x23.js:119";
const x23_120 = "cache-shard:z0/x/x23.js:120";
const x23_121 = "view-lane:z0/x/x23.js:121";
const x23_122 = "digest-pin:z0/x/x23.js:122";
const x23_123 = "lru-cell:z0/x/x23.js:123";
const x23_124 = "mode-track:z0/x/x23.js:124";
const x23_125 = "density-mark:z0/x/x23.js:125";
const x23_126 = "frame-slot:z0/x/x23.js:126";
const x23_127 = "deck-grid:z0/x/x23.js:127";
const x23_128 = "cache-shard:z0/x/x23.js:128";
const x23_129 = "view-lane:z0/x/x23.js:129";
const x23_130 = "digest-pin:z0/x/x23.js:130";
const x23_131 = "lru-cell:z0/x/x23.js:131";
const x23_132 = "mode-track:z0/x/x23.js:132";
const x23_133 = "density-mark:z0/x/x23.js:133";
const x23_134 = "frame-slot:z0/x/x23.js:134";
const x23_135 = "deck-grid:z0/x/x23.js:135";
const x23_136 = "cache-shard:z0/x/x23.js:136";
const x23_137 = "view-lane:z0/x/x23.js:137";
const x23_138 = "digest-pin:z0/x/x23.js:138";
const x23_139 = "lru-cell:z0/x/x23.js:139";
const x23_140 = "mode-track:z0/x/x23.js:140";
const x23_141 = "density-mark:z0/x/x23.js:141";
const x23_142 = "frame-slot:z0/x/x23.js:142";
const x23_143 = "deck-grid:z0/x/x23.js:143";
const x23_144 = "cache-shard:z0/x/x23.js:144";
const x23_145 = "view-lane:z0/x/x23.js:145";
const x23_146 = "digest-pin:z0/x/x23.js:146";
