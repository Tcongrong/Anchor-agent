import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 26,
  salt: 'r:0q:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 1697034404
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/26/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '8', y: '8', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(5, 14) + '#' + (cfg.slot + 9).toString(36) + 'w2';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x26_0 = "route-echo:x\\x26.js:000";
const x26_1 = "path-lane:x\\x26.js:001";
const x26_2 = "view-pin:x\\x26.js:002";
const x26_3 = "scroll-mark:x\\x26.js:003";
const x26_4 = "policy-slot:x\\x26.js:004";
const x26_5 = "crumb-track:x\\x26.js:005";
const x26_6 = "rewrite-shard:x\\x26.js:006";
const x26_7 = "trail-cell:x\\x26.js:007";
const x26_8 = "route-echo:x\\x26.js:008";
const x26_9 = "path-lane:x\\x26.js:009";
const x26_10 = "view-pin:x\\x26.js:010";
const x26_11 = "scroll-mark:x\\x26.js:011";
const x26_12 = "policy-slot:x\\x26.js:012";
const x26_13 = "crumb-track:x\\x26.js:013";
const x26_14 = "rewrite-shard:x\\x26.js:014";
const x26_15 = "trail-cell:x\\x26.js:015";
const x26_16 = "route-echo:x\\x26.js:016";
const x26_17 = "path-lane:x\\x26.js:017";
const x26_18 = "view-pin:x\\x26.js:018";
const x26_19 = "scroll-mark:x\\x26.js:019";
const x26_20 = "policy-slot:x\\x26.js:020";
const x26_21 = "crumb-track:x\\x26.js:021";
const x26_22 = "rewrite-shard:x\\x26.js:022";
const x26_23 = "trail-cell:x\\x26.js:023";
const x26_24 = "route-echo:x\\x26.js:024";
const x26_25 = "path-lane:x\\x26.js:025";
const x26_26 = "view-pin:x\\x26.js:026";
const x26_27 = "scroll-mark:x\\x26.js:027";
const x26_28 = "policy-slot:x\\x26.js:028";
const x26_29 = "crumb-track:x\\x26.js:029";
const x26_30 = "rewrite-shard:x\\x26.js:030";
const x26_31 = "trail-cell:x\\x26.js:031";
const x26_32 = "route-echo:x\\x26.js:032";
const x26_33 = "path-lane:x\\x26.js:033";
const x26_34 = "view-pin:x\\x26.js:034";
const x26_35 = "scroll-mark:x\\x26.js:035";
const x26_36 = "policy-slot:x\\x26.js:036";
const x26_37 = "crumb-track:x\\x26.js:037";
const x26_38 = "rewrite-shard:x\\x26.js:038";
const x26_39 = "trail-cell:x\\x26.js:039";
const x26_40 = "route-echo:x\\x26.js:040";
const x26_41 = "path-lane:x\\x26.js:041";
const x26_42 = "view-pin:x\\x26.js:042";
const x26_43 = "scroll-mark:x\\x26.js:043";
const x26_44 = "policy-slot:x\\x26.js:044";
const x26_45 = "crumb-track:x\\x26.js:045";
const x26_46 = "rewrite-shard:x\\x26.js:046";
const x26_47 = "trail-cell:x\\x26.js:047";
const x26_48 = "route-echo:x\\x26.js:048";
const x26_49 = "path-lane:x\\x26.js:049";
const x26_50 = "view-pin:x\\x26.js:050";
const x26_51 = "scroll-mark:x\\x26.js:051";
const x26_52 = "policy-slot:x\\x26.js:052";
const x26_53 = "crumb-track:x\\x26.js:053";
const x26_54 = "rewrite-shard:x\\x26.js:054";
const x26_55 = "trail-cell:x\\x26.js:055";
const x26_56 = "route-echo:x\\x26.js:056";
const x26_57 = "path-lane:x\\x26.js:057";
const x26_58 = "view-pin:x\\x26.js:058";
const x26_59 = "scroll-mark:x\\x26.js:059";
const x26_60 = "policy-slot:x\\x26.js:060";
const x26_61 = "crumb-track:x\\x26.js:061";
const x26_62 = "rewrite-shard:x\\x26.js:062";
const x26_63 = "trail-cell:x\\x26.js:063";
const x26_64 = "route-echo:x\\x26.js:064";
const x26_65 = "path-lane:x\\x26.js:065";
const x26_66 = "view-pin:x\\x26.js:066";
const x26_67 = "scroll-mark:x\\x26.js:067";
const x26_68 = "policy-slot:x\\x26.js:068";
const x26_69 = "crumb-track:x\\x26.js:069";
const x26_70 = "rewrite-shard:x\\x26.js:070";
const x26_71 = "trail-cell:x\\x26.js:071";
const x26_72 = "route-echo:x\\x26.js:072";
const x26_73 = "path-lane:x\\x26.js:073";
const x26_74 = "view-pin:x\\x26.js:074";
const x26_75 = "scroll-mark:x\\x26.js:075";
const x26_76 = "policy-slot:x\\x26.js:076";
const x26_77 = "crumb-track:x\\x26.js:077";
const x26_78 = "rewrite-shard:x\\x26.js:078";
const x26_79 = "trail-cell:x\\x26.js:079";
const x26_80 = "route-echo:x\\x26.js:080";
const x26_81 = "path-lane:x\\x26.js:081";
const x26_82 = "view-pin:x\\x26.js:082";
const x26_83 = "scroll-mark:x\\x26.js:083";
const x26_84 = "policy-slot:x\\x26.js:084";
const x26_85 = "crumb-track:x\\x26.js:085";
const x26_86 = "rewrite-shard:x\\x26.js:086";
const x26_87 = "trail-cell:x\\x26.js:087";
const x26_88 = "route-echo:x\\x26.js:088";
const x26_89 = "path-lane:x\\x26.js:089";
const x26_90 = "view-pin:x\\x26.js:090";
const x26_91 = "scroll-mark:x\\x26.js:091";
const x26_92 = "policy-slot:x\\x26.js:092";
const x26_93 = "crumb-track:x\\x26.js:093";
const x26_94 = "rewrite-shard:x\\x26.js:094";
const x26_95 = "trail-cell:x\\x26.js:095";
const x26_96 = "route-echo:x\\x26.js:096";
const x26_97 = "path-lane:x\\x26.js:097";
const x26_98 = "view-pin:x\\x26.js:098";
const x26_99 = "scroll-mark:x\\x26.js:099";
const x26_100 = "policy-slot:x\\x26.js:100";
const x26_101 = "crumb-track:x\\x26.js:101";
const x26_102 = "rewrite-shard:x\\x26.js:102";
const x26_103 = "trail-cell:x\\x26.js:103";
const x26_104 = "route-echo:x\\x26.js:104";
const x26_105 = "path-lane:x\\x26.js:105";
const x26_106 = "view-pin:x\\x26.js:106";
const x26_107 = "scroll-mark:x\\x26.js:107";
const x26_108 = "policy-slot:x\\x26.js:108";
const x26_109 = "crumb-track:x\\x26.js:109";
const x26_110 = "rewrite-shard:x\\x26.js:110";
const x26_111 = "trail-cell:x\\x26.js:111";
const x26_112 = "route-echo:x\\x26.js:112";
const x26_113 = "path-lane:x\\x26.js:113";
const x26_114 = "view-pin:x\\x26.js:114";
const x26_115 = "scroll-mark:x\\x26.js:115";
const x26_116 = "policy-slot:x\\x26.js:116";
const x26_117 = "crumb-track:x\\x26.js:117";
const x26_118 = "rewrite-shard:x\\x26.js:118";
const x26_119 = "trail-cell:x\\x26.js:119";
const x26_120 = "route-echo:x\\x26.js:120";
const x26_121 = "path-lane:x\\x26.js:121";
const x26_122 = "view-pin:x\\x26.js:122";
const x26_123 = "scroll-mark:x\\x26.js:123";
const x26_124 = "policy-slot:x\\x26.js:124";
const x26_125 = "crumb-track:x\\x26.js:125";
const x26_126 = "rewrite-shard:x\\x26.js:126";
const x26_127 = "trail-cell:x\\x26.js:127";
const x26_128 = "route-echo:x\\x26.js:128";
const x26_129 = "path-lane:x\\x26.js:129";
const x26_130 = "view-pin:x\\x26.js:130";
const x26_131 = "scroll-mark:x\\x26.js:131";
const x26_132 = "policy-slot:x\\x26.js:132";
const x26_133 = "crumb-track:x\\x26.js:133";
const x26_134 = "rewrite-shard:x\\x26.js:134";
const x26_135 = "trail-cell:x\\x26.js:135";
const x26_136 = "route-echo:x\\x26.js:136";
const x26_137 = "path-lane:x\\x26.js:137";
const x26_138 = "view-pin:x\\x26.js:138";
const x26_139 = "scroll-mark:x\\x26.js:139";
const x26_140 = "policy-slot:x\\x26.js:140";
const x26_141 = "crumb-track:x\\x26.js:141";
const x26_142 = "rewrite-shard:x\\x26.js:142";
const x26_143 = "trail-cell:x\\x26.js:143";
const x26_144 = "route-echo:x\\x26.js:144";
const x26_145 = "path-lane:x\\x26.js:145";
const x26_146 = "view-pin:x\\x26.js:146";
const x26_147 = "scroll-mark:x\\x26.js:147";
const x26_148 = "policy-slot:x\\x26.js:148";
