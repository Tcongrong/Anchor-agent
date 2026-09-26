import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 38,
  salt: 'r:12:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 3485492464
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/38/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '2', y: '2', n: 1 }
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
const x38_0 = "route-echo:x\\x38.js:000";
const x38_1 = "path-lane:x\\x38.js:001";
const x38_2 = "view-pin:x\\x38.js:002";
const x38_3 = "scroll-mark:x\\x38.js:003";
const x38_4 = "policy-slot:x\\x38.js:004";
const x38_5 = "crumb-track:x\\x38.js:005";
const x38_6 = "rewrite-shard:x\\x38.js:006";
const x38_7 = "trail-cell:x\\x38.js:007";
const x38_8 = "route-echo:x\\x38.js:008";
const x38_9 = "path-lane:x\\x38.js:009";
const x38_10 = "view-pin:x\\x38.js:010";
const x38_11 = "scroll-mark:x\\x38.js:011";
const x38_12 = "policy-slot:x\\x38.js:012";
const x38_13 = "crumb-track:x\\x38.js:013";
const x38_14 = "rewrite-shard:x\\x38.js:014";
const x38_15 = "trail-cell:x\\x38.js:015";
const x38_16 = "route-echo:x\\x38.js:016";
const x38_17 = "path-lane:x\\x38.js:017";
const x38_18 = "view-pin:x\\x38.js:018";
const x38_19 = "scroll-mark:x\\x38.js:019";
const x38_20 = "policy-slot:x\\x38.js:020";
const x38_21 = "crumb-track:x\\x38.js:021";
const x38_22 = "rewrite-shard:x\\x38.js:022";
const x38_23 = "trail-cell:x\\x38.js:023";
const x38_24 = "route-echo:x\\x38.js:024";
const x38_25 = "path-lane:x\\x38.js:025";
const x38_26 = "view-pin:x\\x38.js:026";
const x38_27 = "scroll-mark:x\\x38.js:027";
const x38_28 = "policy-slot:x\\x38.js:028";
const x38_29 = "crumb-track:x\\x38.js:029";
const x38_30 = "rewrite-shard:x\\x38.js:030";
const x38_31 = "trail-cell:x\\x38.js:031";
const x38_32 = "route-echo:x\\x38.js:032";
const x38_33 = "path-lane:x\\x38.js:033";
const x38_34 = "view-pin:x\\x38.js:034";
const x38_35 = "scroll-mark:x\\x38.js:035";
const x38_36 = "policy-slot:x\\x38.js:036";
const x38_37 = "crumb-track:x\\x38.js:037";
const x38_38 = "rewrite-shard:x\\x38.js:038";
const x38_39 = "trail-cell:x\\x38.js:039";
const x38_40 = "route-echo:x\\x38.js:040";
const x38_41 = "path-lane:x\\x38.js:041";
const x38_42 = "view-pin:x\\x38.js:042";
const x38_43 = "scroll-mark:x\\x38.js:043";
const x38_44 = "policy-slot:x\\x38.js:044";
const x38_45 = "crumb-track:x\\x38.js:045";
const x38_46 = "rewrite-shard:x\\x38.js:046";
const x38_47 = "trail-cell:x\\x38.js:047";
const x38_48 = "route-echo:x\\x38.js:048";
const x38_49 = "path-lane:x\\x38.js:049";
const x38_50 = "view-pin:x\\x38.js:050";
const x38_51 = "scroll-mark:x\\x38.js:051";
const x38_52 = "policy-slot:x\\x38.js:052";
const x38_53 = "crumb-track:x\\x38.js:053";
const x38_54 = "rewrite-shard:x\\x38.js:054";
const x38_55 = "trail-cell:x\\x38.js:055";
const x38_56 = "route-echo:x\\x38.js:056";
const x38_57 = "path-lane:x\\x38.js:057";
const x38_58 = "view-pin:x\\x38.js:058";
const x38_59 = "scroll-mark:x\\x38.js:059";
const x38_60 = "policy-slot:x\\x38.js:060";
const x38_61 = "crumb-track:x\\x38.js:061";
const x38_62 = "rewrite-shard:x\\x38.js:062";
const x38_63 = "trail-cell:x\\x38.js:063";
const x38_64 = "route-echo:x\\x38.js:064";
const x38_65 = "path-lane:x\\x38.js:065";
const x38_66 = "view-pin:x\\x38.js:066";
const x38_67 = "scroll-mark:x\\x38.js:067";
const x38_68 = "policy-slot:x\\x38.js:068";
const x38_69 = "crumb-track:x\\x38.js:069";
const x38_70 = "rewrite-shard:x\\x38.js:070";
const x38_71 = "trail-cell:x\\x38.js:071";
const x38_72 = "route-echo:x\\x38.js:072";
const x38_73 = "path-lane:x\\x38.js:073";
const x38_74 = "view-pin:x\\x38.js:074";
const x38_75 = "scroll-mark:x\\x38.js:075";
const x38_76 = "policy-slot:x\\x38.js:076";
const x38_77 = "crumb-track:x\\x38.js:077";
const x38_78 = "rewrite-shard:x\\x38.js:078";
const x38_79 = "trail-cell:x\\x38.js:079";
const x38_80 = "route-echo:x\\x38.js:080";
const x38_81 = "path-lane:x\\x38.js:081";
const x38_82 = "view-pin:x\\x38.js:082";
const x38_83 = "scroll-mark:x\\x38.js:083";
const x38_84 = "policy-slot:x\\x38.js:084";
const x38_85 = "crumb-track:x\\x38.js:085";
const x38_86 = "rewrite-shard:x\\x38.js:086";
const x38_87 = "trail-cell:x\\x38.js:087";
const x38_88 = "route-echo:x\\x38.js:088";
const x38_89 = "path-lane:x\\x38.js:089";
const x38_90 = "view-pin:x\\x38.js:090";
const x38_91 = "scroll-mark:x\\x38.js:091";
const x38_92 = "policy-slot:x\\x38.js:092";
const x38_93 = "crumb-track:x\\x38.js:093";
const x38_94 = "rewrite-shard:x\\x38.js:094";
const x38_95 = "trail-cell:x\\x38.js:095";
const x38_96 = "route-echo:x\\x38.js:096";
const x38_97 = "path-lane:x\\x38.js:097";
const x38_98 = "view-pin:x\\x38.js:098";
const x38_99 = "scroll-mark:x\\x38.js:099";
const x38_100 = "policy-slot:x\\x38.js:100";
const x38_101 = "crumb-track:x\\x38.js:101";
const x38_102 = "rewrite-shard:x\\x38.js:102";
const x38_103 = "trail-cell:x\\x38.js:103";
const x38_104 = "route-echo:x\\x38.js:104";
const x38_105 = "path-lane:x\\x38.js:105";
const x38_106 = "view-pin:x\\x38.js:106";
const x38_107 = "scroll-mark:x\\x38.js:107";
const x38_108 = "policy-slot:x\\x38.js:108";
const x38_109 = "crumb-track:x\\x38.js:109";
const x38_110 = "rewrite-shard:x\\x38.js:110";
const x38_111 = "trail-cell:x\\x38.js:111";
const x38_112 = "route-echo:x\\x38.js:112";
const x38_113 = "path-lane:x\\x38.js:113";
const x38_114 = "view-pin:x\\x38.js:114";
const x38_115 = "scroll-mark:x\\x38.js:115";
const x38_116 = "policy-slot:x\\x38.js:116";
const x38_117 = "crumb-track:x\\x38.js:117";
const x38_118 = "rewrite-shard:x\\x38.js:118";
const x38_119 = "trail-cell:x\\x38.js:119";
const x38_120 = "route-echo:x\\x38.js:120";
const x38_121 = "path-lane:x\\x38.js:121";
const x38_122 = "view-pin:x\\x38.js:122";
const x38_123 = "scroll-mark:x\\x38.js:123";
const x38_124 = "policy-slot:x\\x38.js:124";
const x38_125 = "crumb-track:x\\x38.js:125";
const x38_126 = "rewrite-shard:x\\x38.js:126";
const x38_127 = "trail-cell:x\\x38.js:127";
const x38_128 = "route-echo:x\\x38.js:128";
const x38_129 = "path-lane:x\\x38.js:129";
const x38_130 = "view-pin:x\\x38.js:130";
const x38_131 = "scroll-mark:x\\x38.js:131";
const x38_132 = "policy-slot:x\\x38.js:132";
const x38_133 = "crumb-track:x\\x38.js:133";
const x38_134 = "rewrite-shard:x\\x38.js:134";
const x38_135 = "trail-cell:x\\x38.js:135";
const x38_136 = "route-echo:x\\x38.js:136";
const x38_137 = "path-lane:x\\x38.js:137";
const x38_138 = "view-pin:x\\x38.js:138";
const x38_139 = "scroll-mark:x\\x38.js:139";
const x38_140 = "policy-slot:x\\x38.js:140";
const x38_141 = "crumb-track:x\\x38.js:141";
const x38_142 = "rewrite-shard:x\\x38.js:142";
const x38_143 = "trail-cell:x\\x38.js:143";
const x38_144 = "route-echo:x\\x38.js:144";
const x38_145 = "path-lane:x\\x38.js:145";
const x38_146 = "view-pin:x\\x38.js:146";
const x38_147 = "scroll-mark:x\\x38.js:147";
const x38_148 = "policy-slot:x\\x38.js:148";
