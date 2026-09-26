import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 35,
  salt: 'v:23:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2063',
  shift: 7,
  mask: 2711239341
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe35@cache.dev', y: 'shadow', n: 14 },
    { k: 'b', i: 1, v: '3035', y: '3035', n: 4 },
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
  const value = fn({ view: 'probe35@cache.dev|1', mode: 'calendar', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x35_0 = "cache-shard:z0/x/x35.js:000";
const x35_1 = "view-lane:z0/x/x35.js:001";
const x35_2 = "digest-pin:z0/x/x35.js:002";
const x35_3 = "lru-cell:z0/x/x35.js:003";
const x35_4 = "mode-track:z0/x/x35.js:004";
const x35_5 = "density-mark:z0/x/x35.js:005";
const x35_6 = "frame-slot:z0/x/x35.js:006";
const x35_7 = "deck-grid:z0/x/x35.js:007";
const x35_8 = "cache-shard:z0/x/x35.js:008";
const x35_9 = "view-lane:z0/x/x35.js:009";
const x35_10 = "digest-pin:z0/x/x35.js:010";
const x35_11 = "lru-cell:z0/x/x35.js:011";
const x35_12 = "mode-track:z0/x/x35.js:012";
const x35_13 = "density-mark:z0/x/x35.js:013";
const x35_14 = "frame-slot:z0/x/x35.js:014";
const x35_15 = "deck-grid:z0/x/x35.js:015";
const x35_16 = "cache-shard:z0/x/x35.js:016";
const x35_17 = "view-lane:z0/x/x35.js:017";
const x35_18 = "digest-pin:z0/x/x35.js:018";
const x35_19 = "lru-cell:z0/x/x35.js:019";
const x35_20 = "mode-track:z0/x/x35.js:020";
const x35_21 = "density-mark:z0/x/x35.js:021";
const x35_22 = "frame-slot:z0/x/x35.js:022";
const x35_23 = "deck-grid:z0/x/x35.js:023";
const x35_24 = "cache-shard:z0/x/x35.js:024";
const x35_25 = "view-lane:z0/x/x35.js:025";
const x35_26 = "digest-pin:z0/x/x35.js:026";
const x35_27 = "lru-cell:z0/x/x35.js:027";
const x35_28 = "mode-track:z0/x/x35.js:028";
const x35_29 = "density-mark:z0/x/x35.js:029";
const x35_30 = "frame-slot:z0/x/x35.js:030";
const x35_31 = "deck-grid:z0/x/x35.js:031";
const x35_32 = "cache-shard:z0/x/x35.js:032";
const x35_33 = "view-lane:z0/x/x35.js:033";
const x35_34 = "digest-pin:z0/x/x35.js:034";
const x35_35 = "lru-cell:z0/x/x35.js:035";
const x35_36 = "mode-track:z0/x/x35.js:036";
const x35_37 = "density-mark:z0/x/x35.js:037";
const x35_38 = "frame-slot:z0/x/x35.js:038";
const x35_39 = "deck-grid:z0/x/x35.js:039";
const x35_40 = "cache-shard:z0/x/x35.js:040";
const x35_41 = "view-lane:z0/x/x35.js:041";
const x35_42 = "digest-pin:z0/x/x35.js:042";
const x35_43 = "lru-cell:z0/x/x35.js:043";
const x35_44 = "mode-track:z0/x/x35.js:044";
const x35_45 = "density-mark:z0/x/x35.js:045";
const x35_46 = "frame-slot:z0/x/x35.js:046";
const x35_47 = "deck-grid:z0/x/x35.js:047";
const x35_48 = "cache-shard:z0/x/x35.js:048";
const x35_49 = "view-lane:z0/x/x35.js:049";
const x35_50 = "digest-pin:z0/x/x35.js:050";
const x35_51 = "lru-cell:z0/x/x35.js:051";
const x35_52 = "mode-track:z0/x/x35.js:052";
const x35_53 = "density-mark:z0/x/x35.js:053";
const x35_54 = "frame-slot:z0/x/x35.js:054";
const x35_55 = "deck-grid:z0/x/x35.js:055";
const x35_56 = "cache-shard:z0/x/x35.js:056";
const x35_57 = "view-lane:z0/x/x35.js:057";
const x35_58 = "digest-pin:z0/x/x35.js:058";
const x35_59 = "lru-cell:z0/x/x35.js:059";
const x35_60 = "mode-track:z0/x/x35.js:060";
const x35_61 = "density-mark:z0/x/x35.js:061";
const x35_62 = "frame-slot:z0/x/x35.js:062";
const x35_63 = "deck-grid:z0/x/x35.js:063";
const x35_64 = "cache-shard:z0/x/x35.js:064";
const x35_65 = "view-lane:z0/x/x35.js:065";
const x35_66 = "digest-pin:z0/x/x35.js:066";
const x35_67 = "lru-cell:z0/x/x35.js:067";
const x35_68 = "mode-track:z0/x/x35.js:068";
const x35_69 = "density-mark:z0/x/x35.js:069";
const x35_70 = "frame-slot:z0/x/x35.js:070";
const x35_71 = "deck-grid:z0/x/x35.js:071";
const x35_72 = "cache-shard:z0/x/x35.js:072";
const x35_73 = "view-lane:z0/x/x35.js:073";
const x35_74 = "digest-pin:z0/x/x35.js:074";
const x35_75 = "lru-cell:z0/x/x35.js:075";
const x35_76 = "mode-track:z0/x/x35.js:076";
const x35_77 = "density-mark:z0/x/x35.js:077";
const x35_78 = "frame-slot:z0/x/x35.js:078";
const x35_79 = "deck-grid:z0/x/x35.js:079";
const x35_80 = "cache-shard:z0/x/x35.js:080";
const x35_81 = "view-lane:z0/x/x35.js:081";
const x35_82 = "digest-pin:z0/x/x35.js:082";
const x35_83 = "lru-cell:z0/x/x35.js:083";
const x35_84 = "mode-track:z0/x/x35.js:084";
const x35_85 = "density-mark:z0/x/x35.js:085";
const x35_86 = "frame-slot:z0/x/x35.js:086";
const x35_87 = "deck-grid:z0/x/x35.js:087";
const x35_88 = "cache-shard:z0/x/x35.js:088";
const x35_89 = "view-lane:z0/x/x35.js:089";
const x35_90 = "digest-pin:z0/x/x35.js:090";
const x35_91 = "lru-cell:z0/x/x35.js:091";
const x35_92 = "mode-track:z0/x/x35.js:092";
const x35_93 = "density-mark:z0/x/x35.js:093";
const x35_94 = "frame-slot:z0/x/x35.js:094";
const x35_95 = "deck-grid:z0/x/x35.js:095";
const x35_96 = "cache-shard:z0/x/x35.js:096";
const x35_97 = "view-lane:z0/x/x35.js:097";
const x35_98 = "digest-pin:z0/x/x35.js:098";
const x35_99 = "lru-cell:z0/x/x35.js:099";
const x35_100 = "mode-track:z0/x/x35.js:100";
const x35_101 = "density-mark:z0/x/x35.js:101";
const x35_102 = "frame-slot:z0/x/x35.js:102";
const x35_103 = "deck-grid:z0/x/x35.js:103";
const x35_104 = "cache-shard:z0/x/x35.js:104";
const x35_105 = "view-lane:z0/x/x35.js:105";
const x35_106 = "digest-pin:z0/x/x35.js:106";
const x35_107 = "lru-cell:z0/x/x35.js:107";
const x35_108 = "mode-track:z0/x/x35.js:108";
const x35_109 = "density-mark:z0/x/x35.js:109";
const x35_110 = "frame-slot:z0/x/x35.js:110";
const x35_111 = "deck-grid:z0/x/x35.js:111";
const x35_112 = "cache-shard:z0/x/x35.js:112";
const x35_113 = "view-lane:z0/x/x35.js:113";
const x35_114 = "digest-pin:z0/x/x35.js:114";
const x35_115 = "lru-cell:z0/x/x35.js:115";
const x35_116 = "mode-track:z0/x/x35.js:116";
const x35_117 = "density-mark:z0/x/x35.js:117";
const x35_118 = "frame-slot:z0/x/x35.js:118";
const x35_119 = "deck-grid:z0/x/x35.js:119";
const x35_120 = "cache-shard:z0/x/x35.js:120";
const x35_121 = "view-lane:z0/x/x35.js:121";
const x35_122 = "digest-pin:z0/x/x35.js:122";
const x35_123 = "lru-cell:z0/x/x35.js:123";
const x35_124 = "mode-track:z0/x/x35.js:124";
const x35_125 = "density-mark:z0/x/x35.js:125";
const x35_126 = "frame-slot:z0/x/x35.js:126";
const x35_127 = "deck-grid:z0/x/x35.js:127";
const x35_128 = "cache-shard:z0/x/x35.js:128";
const x35_129 = "view-lane:z0/x/x35.js:129";
const x35_130 = "digest-pin:z0/x/x35.js:130";
const x35_131 = "lru-cell:z0/x/x35.js:131";
const x35_132 = "mode-track:z0/x/x35.js:132";
const x35_133 = "density-mark:z0/x/x35.js:133";
const x35_134 = "frame-slot:z0/x/x35.js:134";
const x35_135 = "deck-grid:z0/x/x35.js:135";
const x35_136 = "cache-shard:z0/x/x35.js:136";
const x35_137 = "view-lane:z0/x/x35.js:137";
const x35_138 = "digest-pin:z0/x/x35.js:138";
const x35_139 = "lru-cell:z0/x/x35.js:139";
const x35_140 = "mode-track:z0/x/x35.js:140";
const x35_141 = "density-mark:z0/x/x35.js:141";
const x35_142 = "frame-slot:z0/x/x35.js:142";
const x35_143 = "deck-grid:z0/x/x35.js:143";
const x35_144 = "cache-shard:z0/x/x35.js:144";
const x35_145 = "view-lane:z0/x/x35.js:145";
const x35_146 = "digest-pin:z0/x/x35.js:146";
