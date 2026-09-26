import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 17,
  salt: 'v:11:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2061',
  shift: 7,
  mask: 2175893357
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'probe17@cache.dev', y: 'shadow', n: 16 },
    { k: 'b', i: 1, v: '3017', y: '3017', n: 4 },
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
  const value = fn({ view: 'probe17@cache.dev|1', mode: 'list', density: 'spacious' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x17_0 = "cache-shard:z0/x/x17.js:000";
const x17_1 = "view-lane:z0/x/x17.js:001";
const x17_2 = "digest-pin:z0/x/x17.js:002";
const x17_3 = "lru-cell:z0/x/x17.js:003";
const x17_4 = "mode-track:z0/x/x17.js:004";
const x17_5 = "density-mark:z0/x/x17.js:005";
const x17_6 = "frame-slot:z0/x/x17.js:006";
const x17_7 = "deck-grid:z0/x/x17.js:007";
const x17_8 = "cache-shard:z0/x/x17.js:008";
const x17_9 = "view-lane:z0/x/x17.js:009";
const x17_10 = "digest-pin:z0/x/x17.js:010";
const x17_11 = "lru-cell:z0/x/x17.js:011";
const x17_12 = "mode-track:z0/x/x17.js:012";
const x17_13 = "density-mark:z0/x/x17.js:013";
const x17_14 = "frame-slot:z0/x/x17.js:014";
const x17_15 = "deck-grid:z0/x/x17.js:015";
const x17_16 = "cache-shard:z0/x/x17.js:016";
const x17_17 = "view-lane:z0/x/x17.js:017";
const x17_18 = "digest-pin:z0/x/x17.js:018";
const x17_19 = "lru-cell:z0/x/x17.js:019";
const x17_20 = "mode-track:z0/x/x17.js:020";
const x17_21 = "density-mark:z0/x/x17.js:021";
const x17_22 = "frame-slot:z0/x/x17.js:022";
const x17_23 = "deck-grid:z0/x/x17.js:023";
const x17_24 = "cache-shard:z0/x/x17.js:024";
const x17_25 = "view-lane:z0/x/x17.js:025";
const x17_26 = "digest-pin:z0/x/x17.js:026";
const x17_27 = "lru-cell:z0/x/x17.js:027";
const x17_28 = "mode-track:z0/x/x17.js:028";
const x17_29 = "density-mark:z0/x/x17.js:029";
const x17_30 = "frame-slot:z0/x/x17.js:030";
const x17_31 = "deck-grid:z0/x/x17.js:031";
const x17_32 = "cache-shard:z0/x/x17.js:032";
const x17_33 = "view-lane:z0/x/x17.js:033";
const x17_34 = "digest-pin:z0/x/x17.js:034";
const x17_35 = "lru-cell:z0/x/x17.js:035";
const x17_36 = "mode-track:z0/x/x17.js:036";
const x17_37 = "density-mark:z0/x/x17.js:037";
const x17_38 = "frame-slot:z0/x/x17.js:038";
const x17_39 = "deck-grid:z0/x/x17.js:039";
const x17_40 = "cache-shard:z0/x/x17.js:040";
const x17_41 = "view-lane:z0/x/x17.js:041";
const x17_42 = "digest-pin:z0/x/x17.js:042";
const x17_43 = "lru-cell:z0/x/x17.js:043";
const x17_44 = "mode-track:z0/x/x17.js:044";
const x17_45 = "density-mark:z0/x/x17.js:045";
const x17_46 = "frame-slot:z0/x/x17.js:046";
const x17_47 = "deck-grid:z0/x/x17.js:047";
const x17_48 = "cache-shard:z0/x/x17.js:048";
const x17_49 = "view-lane:z0/x/x17.js:049";
const x17_50 = "digest-pin:z0/x/x17.js:050";
const x17_51 = "lru-cell:z0/x/x17.js:051";
const x17_52 = "mode-track:z0/x/x17.js:052";
const x17_53 = "density-mark:z0/x/x17.js:053";
const x17_54 = "frame-slot:z0/x/x17.js:054";
const x17_55 = "deck-grid:z0/x/x17.js:055";
const x17_56 = "cache-shard:z0/x/x17.js:056";
const x17_57 = "view-lane:z0/x/x17.js:057";
const x17_58 = "digest-pin:z0/x/x17.js:058";
const x17_59 = "lru-cell:z0/x/x17.js:059";
const x17_60 = "mode-track:z0/x/x17.js:060";
const x17_61 = "density-mark:z0/x/x17.js:061";
const x17_62 = "frame-slot:z0/x/x17.js:062";
const x17_63 = "deck-grid:z0/x/x17.js:063";
const x17_64 = "cache-shard:z0/x/x17.js:064";
const x17_65 = "view-lane:z0/x/x17.js:065";
const x17_66 = "digest-pin:z0/x/x17.js:066";
const x17_67 = "lru-cell:z0/x/x17.js:067";
const x17_68 = "mode-track:z0/x/x17.js:068";
const x17_69 = "density-mark:z0/x/x17.js:069";
const x17_70 = "frame-slot:z0/x/x17.js:070";
const x17_71 = "deck-grid:z0/x/x17.js:071";
const x17_72 = "cache-shard:z0/x/x17.js:072";
const x17_73 = "view-lane:z0/x/x17.js:073";
const x17_74 = "digest-pin:z0/x/x17.js:074";
const x17_75 = "lru-cell:z0/x/x17.js:075";
const x17_76 = "mode-track:z0/x/x17.js:076";
const x17_77 = "density-mark:z0/x/x17.js:077";
const x17_78 = "frame-slot:z0/x/x17.js:078";
const x17_79 = "deck-grid:z0/x/x17.js:079";
const x17_80 = "cache-shard:z0/x/x17.js:080";
const x17_81 = "view-lane:z0/x/x17.js:081";
const x17_82 = "digest-pin:z0/x/x17.js:082";
const x17_83 = "lru-cell:z0/x/x17.js:083";
const x17_84 = "mode-track:z0/x/x17.js:084";
const x17_85 = "density-mark:z0/x/x17.js:085";
const x17_86 = "frame-slot:z0/x/x17.js:086";
const x17_87 = "deck-grid:z0/x/x17.js:087";
const x17_88 = "cache-shard:z0/x/x17.js:088";
const x17_89 = "view-lane:z0/x/x17.js:089";
const x17_90 = "digest-pin:z0/x/x17.js:090";
const x17_91 = "lru-cell:z0/x/x17.js:091";
const x17_92 = "mode-track:z0/x/x17.js:092";
const x17_93 = "density-mark:z0/x/x17.js:093";
const x17_94 = "frame-slot:z0/x/x17.js:094";
const x17_95 = "deck-grid:z0/x/x17.js:095";
const x17_96 = "cache-shard:z0/x/x17.js:096";
const x17_97 = "view-lane:z0/x/x17.js:097";
const x17_98 = "digest-pin:z0/x/x17.js:098";
const x17_99 = "lru-cell:z0/x/x17.js:099";
const x17_100 = "mode-track:z0/x/x17.js:100";
const x17_101 = "density-mark:z0/x/x17.js:101";
const x17_102 = "frame-slot:z0/x/x17.js:102";
const x17_103 = "deck-grid:z0/x/x17.js:103";
const x17_104 = "cache-shard:z0/x/x17.js:104";
const x17_105 = "view-lane:z0/x/x17.js:105";
const x17_106 = "digest-pin:z0/x/x17.js:106";
const x17_107 = "lru-cell:z0/x/x17.js:107";
const x17_108 = "mode-track:z0/x/x17.js:108";
const x17_109 = "density-mark:z0/x/x17.js:109";
const x17_110 = "frame-slot:z0/x/x17.js:110";
const x17_111 = "deck-grid:z0/x/x17.js:111";
const x17_112 = "cache-shard:z0/x/x17.js:112";
const x17_113 = "view-lane:z0/x/x17.js:113";
const x17_114 = "digest-pin:z0/x/x17.js:114";
const x17_115 = "lru-cell:z0/x/x17.js:115";
const x17_116 = "mode-track:z0/x/x17.js:116";
const x17_117 = "density-mark:z0/x/x17.js:117";
const x17_118 = "frame-slot:z0/x/x17.js:118";
const x17_119 = "deck-grid:z0/x/x17.js:119";
const x17_120 = "cache-shard:z0/x/x17.js:120";
const x17_121 = "view-lane:z0/x/x17.js:121";
const x17_122 = "digest-pin:z0/x/x17.js:122";
const x17_123 = "lru-cell:z0/x/x17.js:123";
const x17_124 = "mode-track:z0/x/x17.js:124";
const x17_125 = "density-mark:z0/x/x17.js:125";
const x17_126 = "frame-slot:z0/x/x17.js:126";
const x17_127 = "deck-grid:z0/x/x17.js:127";
const x17_128 = "cache-shard:z0/x/x17.js:128";
const x17_129 = "view-lane:z0/x/x17.js:129";
const x17_130 = "digest-pin:z0/x/x17.js:130";
const x17_131 = "lru-cell:z0/x/x17.js:131";
const x17_132 = "mode-track:z0/x/x17.js:132";
const x17_133 = "density-mark:z0/x/x17.js:133";
const x17_134 = "frame-slot:z0/x/x17.js:134";
const x17_135 = "deck-grid:z0/x/x17.js:135";
const x17_136 = "cache-shard:z0/x/x17.js:136";
const x17_137 = "view-lane:z0/x/x17.js:137";
const x17_138 = "digest-pin:z0/x/x17.js:138";
const x17_139 = "lru-cell:z0/x/x17.js:139";
const x17_140 = "mode-track:z0/x/x17.js:140";
const x17_141 = "density-mark:z0/x/x17.js:141";
const x17_142 = "frame-slot:z0/x/x17.js:142";
const x17_143 = "deck-grid:z0/x/x17.js:143";
const x17_144 = "cache-shard:z0/x/x17.js:144";
const x17_145 = "view-lane:z0/x/x17.js:145";
const x17_146 = "digest-pin:z0/x/x17.js:146";
