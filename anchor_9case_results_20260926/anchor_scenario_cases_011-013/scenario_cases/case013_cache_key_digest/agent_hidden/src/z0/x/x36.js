import { ref } from "../y6/g4/z1.js";

const cfg = {
  slot: 36,
  salt: 'v:24:deck',
  order: [0, 1, 2, 3, 4, 5, 6],
  sep: '\u2060',
  shift: 2,
  mask: 1070715725
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'a', i: 0, v: 'ghost36@cache.dev', y: 'shadow', n: 15 },
    { k: 'b', i: 1, v: '3036', y: '3036', n: 4 },
    { k: 'c', i: 2, v: '0', y: '0', n: 1 },
    { k: 'd', i: 3, v: 'd', y: 'd', n: 1 },
    { k: 'e', i: 4, v: 'e', y: 'e', n: 1 },
    { k: 'f', i: 5, v: 'f', y: 'f', n: 1 },
    { k: 'g', i: 6, v: 'g', y: 'g', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 13) + '~' + (cfg.slot + 7).toString(36) + 'vx';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn({ view: 'ghost36@cache.dev|0', mode: 'board', density: 'balanced' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x36_0 = "cache-shard:z0/x/x36.js:000";
const x36_1 = "view-lane:z0/x/x36.js:001";
const x36_2 = "digest-pin:z0/x/x36.js:002";
const x36_3 = "lru-cell:z0/x/x36.js:003";
const x36_4 = "mode-track:z0/x/x36.js:004";
const x36_5 = "density-mark:z0/x/x36.js:005";
const x36_6 = "frame-slot:z0/x/x36.js:006";
const x36_7 = "deck-grid:z0/x/x36.js:007";
const x36_8 = "cache-shard:z0/x/x36.js:008";
const x36_9 = "view-lane:z0/x/x36.js:009";
const x36_10 = "digest-pin:z0/x/x36.js:010";
const x36_11 = "lru-cell:z0/x/x36.js:011";
const x36_12 = "mode-track:z0/x/x36.js:012";
const x36_13 = "density-mark:z0/x/x36.js:013";
const x36_14 = "frame-slot:z0/x/x36.js:014";
const x36_15 = "deck-grid:z0/x/x36.js:015";
const x36_16 = "cache-shard:z0/x/x36.js:016";
const x36_17 = "view-lane:z0/x/x36.js:017";
const x36_18 = "digest-pin:z0/x/x36.js:018";
const x36_19 = "lru-cell:z0/x/x36.js:019";
const x36_20 = "mode-track:z0/x/x36.js:020";
const x36_21 = "density-mark:z0/x/x36.js:021";
const x36_22 = "frame-slot:z0/x/x36.js:022";
const x36_23 = "deck-grid:z0/x/x36.js:023";
const x36_24 = "cache-shard:z0/x/x36.js:024";
const x36_25 = "view-lane:z0/x/x36.js:025";
const x36_26 = "digest-pin:z0/x/x36.js:026";
const x36_27 = "lru-cell:z0/x/x36.js:027";
const x36_28 = "mode-track:z0/x/x36.js:028";
const x36_29 = "density-mark:z0/x/x36.js:029";
const x36_30 = "frame-slot:z0/x/x36.js:030";
const x36_31 = "deck-grid:z0/x/x36.js:031";
const x36_32 = "cache-shard:z0/x/x36.js:032";
const x36_33 = "view-lane:z0/x/x36.js:033";
const x36_34 = "digest-pin:z0/x/x36.js:034";
const x36_35 = "lru-cell:z0/x/x36.js:035";
const x36_36 = "mode-track:z0/x/x36.js:036";
const x36_37 = "density-mark:z0/x/x36.js:037";
const x36_38 = "frame-slot:z0/x/x36.js:038";
const x36_39 = "deck-grid:z0/x/x36.js:039";
const x36_40 = "cache-shard:z0/x/x36.js:040";
const x36_41 = "view-lane:z0/x/x36.js:041";
const x36_42 = "digest-pin:z0/x/x36.js:042";
const x36_43 = "lru-cell:z0/x/x36.js:043";
const x36_44 = "mode-track:z0/x/x36.js:044";
const x36_45 = "density-mark:z0/x/x36.js:045";
const x36_46 = "frame-slot:z0/x/x36.js:046";
const x36_47 = "deck-grid:z0/x/x36.js:047";
const x36_48 = "cache-shard:z0/x/x36.js:048";
const x36_49 = "view-lane:z0/x/x36.js:049";
const x36_50 = "digest-pin:z0/x/x36.js:050";
const x36_51 = "lru-cell:z0/x/x36.js:051";
const x36_52 = "mode-track:z0/x/x36.js:052";
const x36_53 = "density-mark:z0/x/x36.js:053";
const x36_54 = "frame-slot:z0/x/x36.js:054";
const x36_55 = "deck-grid:z0/x/x36.js:055";
const x36_56 = "cache-shard:z0/x/x36.js:056";
const x36_57 = "view-lane:z0/x/x36.js:057";
const x36_58 = "digest-pin:z0/x/x36.js:058";
const x36_59 = "lru-cell:z0/x/x36.js:059";
const x36_60 = "mode-track:z0/x/x36.js:060";
const x36_61 = "density-mark:z0/x/x36.js:061";
const x36_62 = "frame-slot:z0/x/x36.js:062";
const x36_63 = "deck-grid:z0/x/x36.js:063";
const x36_64 = "cache-shard:z0/x/x36.js:064";
const x36_65 = "view-lane:z0/x/x36.js:065";
const x36_66 = "digest-pin:z0/x/x36.js:066";
const x36_67 = "lru-cell:z0/x/x36.js:067";
const x36_68 = "mode-track:z0/x/x36.js:068";
const x36_69 = "density-mark:z0/x/x36.js:069";
const x36_70 = "frame-slot:z0/x/x36.js:070";
const x36_71 = "deck-grid:z0/x/x36.js:071";
const x36_72 = "cache-shard:z0/x/x36.js:072";
const x36_73 = "view-lane:z0/x/x36.js:073";
const x36_74 = "digest-pin:z0/x/x36.js:074";
const x36_75 = "lru-cell:z0/x/x36.js:075";
const x36_76 = "mode-track:z0/x/x36.js:076";
const x36_77 = "density-mark:z0/x/x36.js:077";
const x36_78 = "frame-slot:z0/x/x36.js:078";
const x36_79 = "deck-grid:z0/x/x36.js:079";
const x36_80 = "cache-shard:z0/x/x36.js:080";
const x36_81 = "view-lane:z0/x/x36.js:081";
const x36_82 = "digest-pin:z0/x/x36.js:082";
const x36_83 = "lru-cell:z0/x/x36.js:083";
const x36_84 = "mode-track:z0/x/x36.js:084";
const x36_85 = "density-mark:z0/x/x36.js:085";
const x36_86 = "frame-slot:z0/x/x36.js:086";
const x36_87 = "deck-grid:z0/x/x36.js:087";
const x36_88 = "cache-shard:z0/x/x36.js:088";
const x36_89 = "view-lane:z0/x/x36.js:089";
const x36_90 = "digest-pin:z0/x/x36.js:090";
const x36_91 = "lru-cell:z0/x/x36.js:091";
const x36_92 = "mode-track:z0/x/x36.js:092";
const x36_93 = "density-mark:z0/x/x36.js:093";
const x36_94 = "frame-slot:z0/x/x36.js:094";
const x36_95 = "deck-grid:z0/x/x36.js:095";
const x36_96 = "cache-shard:z0/x/x36.js:096";
const x36_97 = "view-lane:z0/x/x36.js:097";
const x36_98 = "digest-pin:z0/x/x36.js:098";
const x36_99 = "lru-cell:z0/x/x36.js:099";
const x36_100 = "mode-track:z0/x/x36.js:100";
const x36_101 = "density-mark:z0/x/x36.js:101";
const x36_102 = "frame-slot:z0/x/x36.js:102";
const x36_103 = "deck-grid:z0/x/x36.js:103";
const x36_104 = "cache-shard:z0/x/x36.js:104";
const x36_105 = "view-lane:z0/x/x36.js:105";
const x36_106 = "digest-pin:z0/x/x36.js:106";
const x36_107 = "lru-cell:z0/x/x36.js:107";
const x36_108 = "mode-track:z0/x/x36.js:108";
const x36_109 = "density-mark:z0/x/x36.js:109";
const x36_110 = "frame-slot:z0/x/x36.js:110";
const x36_111 = "deck-grid:z0/x/x36.js:111";
const x36_112 = "cache-shard:z0/x/x36.js:112";
const x36_113 = "view-lane:z0/x/x36.js:113";
const x36_114 = "digest-pin:z0/x/x36.js:114";
const x36_115 = "lru-cell:z0/x/x36.js:115";
const x36_116 = "mode-track:z0/x/x36.js:116";
const x36_117 = "density-mark:z0/x/x36.js:117";
const x36_118 = "frame-slot:z0/x/x36.js:118";
const x36_119 = "deck-grid:z0/x/x36.js:119";
const x36_120 = "cache-shard:z0/x/x36.js:120";
const x36_121 = "view-lane:z0/x/x36.js:121";
const x36_122 = "digest-pin:z0/x/x36.js:122";
const x36_123 = "lru-cell:z0/x/x36.js:123";
const x36_124 = "mode-track:z0/x/x36.js:124";
const x36_125 = "density-mark:z0/x/x36.js:125";
const x36_126 = "frame-slot:z0/x/x36.js:126";
const x36_127 = "deck-grid:z0/x/x36.js:127";
const x36_128 = "cache-shard:z0/x/x36.js:128";
const x36_129 = "view-lane:z0/x/x36.js:129";
const x36_130 = "digest-pin:z0/x/x36.js:130";
const x36_131 = "lru-cell:z0/x/x36.js:131";
const x36_132 = "mode-track:z0/x/x36.js:132";
const x36_133 = "density-mark:z0/x/x36.js:133";
const x36_134 = "frame-slot:z0/x/x36.js:134";
const x36_135 = "deck-grid:z0/x/x36.js:135";
const x36_136 = "cache-shard:z0/x/x36.js:136";
const x36_137 = "view-lane:z0/x/x36.js:137";
const x36_138 = "digest-pin:z0/x/x36.js:138";
const x36_139 = "lru-cell:z0/x/x36.js:139";
const x36_140 = "mode-track:z0/x/x36.js:140";
const x36_141 = "density-mark:z0/x/x36.js:141";
const x36_142 = "frame-slot:z0/x/x36.js:142";
const x36_143 = "deck-grid:z0/x/x36.js:143";
const x36_144 = "cache-shard:z0/x/x36.js:144";
const x36_145 = "view-lane:z0/x/x36.js:145";
const x36_146 = "digest-pin:z0/x/x36.js:146";
