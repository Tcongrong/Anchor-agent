import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 22,
  salt: 'r:0m:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 14,
  mask: 3964193248
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/22/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '4', y: '4', n: 1 }
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
const x22_0 = "route-echo:x\\x22.js:000";
const x22_1 = "path-lane:x\\x22.js:001";
const x22_2 = "view-pin:x\\x22.js:002";
const x22_3 = "scroll-mark:x\\x22.js:003";
const x22_4 = "policy-slot:x\\x22.js:004";
const x22_5 = "crumb-track:x\\x22.js:005";
const x22_6 = "rewrite-shard:x\\x22.js:006";
const x22_7 = "trail-cell:x\\x22.js:007";
const x22_8 = "route-echo:x\\x22.js:008";
const x22_9 = "path-lane:x\\x22.js:009";
const x22_10 = "view-pin:x\\x22.js:010";
const x22_11 = "scroll-mark:x\\x22.js:011";
const x22_12 = "policy-slot:x\\x22.js:012";
const x22_13 = "crumb-track:x\\x22.js:013";
const x22_14 = "rewrite-shard:x\\x22.js:014";
const x22_15 = "trail-cell:x\\x22.js:015";
const x22_16 = "route-echo:x\\x22.js:016";
const x22_17 = "path-lane:x\\x22.js:017";
const x22_18 = "view-pin:x\\x22.js:018";
const x22_19 = "scroll-mark:x\\x22.js:019";
const x22_20 = "policy-slot:x\\x22.js:020";
const x22_21 = "crumb-track:x\\x22.js:021";
const x22_22 = "rewrite-shard:x\\x22.js:022";
const x22_23 = "trail-cell:x\\x22.js:023";
const x22_24 = "route-echo:x\\x22.js:024";
const x22_25 = "path-lane:x\\x22.js:025";
const x22_26 = "view-pin:x\\x22.js:026";
const x22_27 = "scroll-mark:x\\x22.js:027";
const x22_28 = "policy-slot:x\\x22.js:028";
const x22_29 = "crumb-track:x\\x22.js:029";
const x22_30 = "rewrite-shard:x\\x22.js:030";
const x22_31 = "trail-cell:x\\x22.js:031";
const x22_32 = "route-echo:x\\x22.js:032";
const x22_33 = "path-lane:x\\x22.js:033";
const x22_34 = "view-pin:x\\x22.js:034";
const x22_35 = "scroll-mark:x\\x22.js:035";
const x22_36 = "policy-slot:x\\x22.js:036";
const x22_37 = "crumb-track:x\\x22.js:037";
const x22_38 = "rewrite-shard:x\\x22.js:038";
const x22_39 = "trail-cell:x\\x22.js:039";
const x22_40 = "route-echo:x\\x22.js:040";
const x22_41 = "path-lane:x\\x22.js:041";
const x22_42 = "view-pin:x\\x22.js:042";
const x22_43 = "scroll-mark:x\\x22.js:043";
const x22_44 = "policy-slot:x\\x22.js:044";
const x22_45 = "crumb-track:x\\x22.js:045";
const x22_46 = "rewrite-shard:x\\x22.js:046";
const x22_47 = "trail-cell:x\\x22.js:047";
const x22_48 = "route-echo:x\\x22.js:048";
const x22_49 = "path-lane:x\\x22.js:049";
const x22_50 = "view-pin:x\\x22.js:050";
const x22_51 = "scroll-mark:x\\x22.js:051";
const x22_52 = "policy-slot:x\\x22.js:052";
const x22_53 = "crumb-track:x\\x22.js:053";
const x22_54 = "rewrite-shard:x\\x22.js:054";
const x22_55 = "trail-cell:x\\x22.js:055";
const x22_56 = "route-echo:x\\x22.js:056";
const x22_57 = "path-lane:x\\x22.js:057";
const x22_58 = "view-pin:x\\x22.js:058";
const x22_59 = "scroll-mark:x\\x22.js:059";
const x22_60 = "policy-slot:x\\x22.js:060";
const x22_61 = "crumb-track:x\\x22.js:061";
const x22_62 = "rewrite-shard:x\\x22.js:062";
const x22_63 = "trail-cell:x\\x22.js:063";
const x22_64 = "route-echo:x\\x22.js:064";
const x22_65 = "path-lane:x\\x22.js:065";
const x22_66 = "view-pin:x\\x22.js:066";
const x22_67 = "scroll-mark:x\\x22.js:067";
const x22_68 = "policy-slot:x\\x22.js:068";
const x22_69 = "crumb-track:x\\x22.js:069";
const x22_70 = "rewrite-shard:x\\x22.js:070";
const x22_71 = "trail-cell:x\\x22.js:071";
const x22_72 = "route-echo:x\\x22.js:072";
const x22_73 = "path-lane:x\\x22.js:073";
const x22_74 = "view-pin:x\\x22.js:074";
const x22_75 = "scroll-mark:x\\x22.js:075";
const x22_76 = "policy-slot:x\\x22.js:076";
const x22_77 = "crumb-track:x\\x22.js:077";
const x22_78 = "rewrite-shard:x\\x22.js:078";
const x22_79 = "trail-cell:x\\x22.js:079";
const x22_80 = "route-echo:x\\x22.js:080";
const x22_81 = "path-lane:x\\x22.js:081";
const x22_82 = "view-pin:x\\x22.js:082";
const x22_83 = "scroll-mark:x\\x22.js:083";
const x22_84 = "policy-slot:x\\x22.js:084";
const x22_85 = "crumb-track:x\\x22.js:085";
const x22_86 = "rewrite-shard:x\\x22.js:086";
const x22_87 = "trail-cell:x\\x22.js:087";
const x22_88 = "route-echo:x\\x22.js:088";
const x22_89 = "path-lane:x\\x22.js:089";
const x22_90 = "view-pin:x\\x22.js:090";
const x22_91 = "scroll-mark:x\\x22.js:091";
const x22_92 = "policy-slot:x\\x22.js:092";
const x22_93 = "crumb-track:x\\x22.js:093";
const x22_94 = "rewrite-shard:x\\x22.js:094";
const x22_95 = "trail-cell:x\\x22.js:095";
const x22_96 = "route-echo:x\\x22.js:096";
const x22_97 = "path-lane:x\\x22.js:097";
const x22_98 = "view-pin:x\\x22.js:098";
const x22_99 = "scroll-mark:x\\x22.js:099";
const x22_100 = "policy-slot:x\\x22.js:100";
const x22_101 = "crumb-track:x\\x22.js:101";
const x22_102 = "rewrite-shard:x\\x22.js:102";
const x22_103 = "trail-cell:x\\x22.js:103";
const x22_104 = "route-echo:x\\x22.js:104";
const x22_105 = "path-lane:x\\x22.js:105";
const x22_106 = "view-pin:x\\x22.js:106";
const x22_107 = "scroll-mark:x\\x22.js:107";
const x22_108 = "policy-slot:x\\x22.js:108";
const x22_109 = "crumb-track:x\\x22.js:109";
const x22_110 = "rewrite-shard:x\\x22.js:110";
const x22_111 = "trail-cell:x\\x22.js:111";
const x22_112 = "route-echo:x\\x22.js:112";
const x22_113 = "path-lane:x\\x22.js:113";
const x22_114 = "view-pin:x\\x22.js:114";
const x22_115 = "scroll-mark:x\\x22.js:115";
const x22_116 = "policy-slot:x\\x22.js:116";
const x22_117 = "crumb-track:x\\x22.js:117";
const x22_118 = "rewrite-shard:x\\x22.js:118";
const x22_119 = "trail-cell:x\\x22.js:119";
const x22_120 = "route-echo:x\\x22.js:120";
const x22_121 = "path-lane:x\\x22.js:121";
const x22_122 = "view-pin:x\\x22.js:122";
const x22_123 = "scroll-mark:x\\x22.js:123";
const x22_124 = "policy-slot:x\\x22.js:124";
const x22_125 = "crumb-track:x\\x22.js:125";
const x22_126 = "rewrite-shard:x\\x22.js:126";
const x22_127 = "trail-cell:x\\x22.js:127";
const x22_128 = "route-echo:x\\x22.js:128";
const x22_129 = "path-lane:x\\x22.js:129";
const x22_130 = "view-pin:x\\x22.js:130";
const x22_131 = "scroll-mark:x\\x22.js:131";
const x22_132 = "policy-slot:x\\x22.js:132";
const x22_133 = "crumb-track:x\\x22.js:133";
const x22_134 = "rewrite-shard:x\\x22.js:134";
const x22_135 = "trail-cell:x\\x22.js:135";
const x22_136 = "route-echo:x\\x22.js:136";
const x22_137 = "path-lane:x\\x22.js:137";
const x22_138 = "view-pin:x\\x22.js:138";
const x22_139 = "scroll-mark:x\\x22.js:139";
const x22_140 = "policy-slot:x\\x22.js:140";
const x22_141 = "crumb-track:x\\x22.js:141";
const x22_142 = "rewrite-shard:x\\x22.js:142";
const x22_143 = "trail-cell:x\\x22.js:143";
const x22_144 = "route-echo:x\\x22.js:144";
const x22_145 = "path-lane:x\\x22.js:145";
const x22_146 = "view-pin:x\\x22.js:146";
const x22_147 = "scroll-mark:x\\x22.js:147";
const x22_148 = "policy-slot:x\\x22.js:148";
