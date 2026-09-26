import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 30,
  salt: 'r:0u:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2062',
  shift: 10,
  mask: 3724842856
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/30/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '3', y: '3', n: 1 }
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
const x30_0 = "route-echo:x\\x30.js:000";
const x30_1 = "path-lane:x\\x30.js:001";
const x30_2 = "view-pin:x\\x30.js:002";
const x30_3 = "scroll-mark:x\\x30.js:003";
const x30_4 = "policy-slot:x\\x30.js:004";
const x30_5 = "crumb-track:x\\x30.js:005";
const x30_6 = "rewrite-shard:x\\x30.js:006";
const x30_7 = "trail-cell:x\\x30.js:007";
const x30_8 = "route-echo:x\\x30.js:008";
const x30_9 = "path-lane:x\\x30.js:009";
const x30_10 = "view-pin:x\\x30.js:010";
const x30_11 = "scroll-mark:x\\x30.js:011";
const x30_12 = "policy-slot:x\\x30.js:012";
const x30_13 = "crumb-track:x\\x30.js:013";
const x30_14 = "rewrite-shard:x\\x30.js:014";
const x30_15 = "trail-cell:x\\x30.js:015";
const x30_16 = "route-echo:x\\x30.js:016";
const x30_17 = "path-lane:x\\x30.js:017";
const x30_18 = "view-pin:x\\x30.js:018";
const x30_19 = "scroll-mark:x\\x30.js:019";
const x30_20 = "policy-slot:x\\x30.js:020";
const x30_21 = "crumb-track:x\\x30.js:021";
const x30_22 = "rewrite-shard:x\\x30.js:022";
const x30_23 = "trail-cell:x\\x30.js:023";
const x30_24 = "route-echo:x\\x30.js:024";
const x30_25 = "path-lane:x\\x30.js:025";
const x30_26 = "view-pin:x\\x30.js:026";
const x30_27 = "scroll-mark:x\\x30.js:027";
const x30_28 = "policy-slot:x\\x30.js:028";
const x30_29 = "crumb-track:x\\x30.js:029";
const x30_30 = "rewrite-shard:x\\x30.js:030";
const x30_31 = "trail-cell:x\\x30.js:031";
const x30_32 = "route-echo:x\\x30.js:032";
const x30_33 = "path-lane:x\\x30.js:033";
const x30_34 = "view-pin:x\\x30.js:034";
const x30_35 = "scroll-mark:x\\x30.js:035";
const x30_36 = "policy-slot:x\\x30.js:036";
const x30_37 = "crumb-track:x\\x30.js:037";
const x30_38 = "rewrite-shard:x\\x30.js:038";
const x30_39 = "trail-cell:x\\x30.js:039";
const x30_40 = "route-echo:x\\x30.js:040";
const x30_41 = "path-lane:x\\x30.js:041";
const x30_42 = "view-pin:x\\x30.js:042";
const x30_43 = "scroll-mark:x\\x30.js:043";
const x30_44 = "policy-slot:x\\x30.js:044";
const x30_45 = "crumb-track:x\\x30.js:045";
const x30_46 = "rewrite-shard:x\\x30.js:046";
const x30_47 = "trail-cell:x\\x30.js:047";
const x30_48 = "route-echo:x\\x30.js:048";
const x30_49 = "path-lane:x\\x30.js:049";
const x30_50 = "view-pin:x\\x30.js:050";
const x30_51 = "scroll-mark:x\\x30.js:051";
const x30_52 = "policy-slot:x\\x30.js:052";
const x30_53 = "crumb-track:x\\x30.js:053";
const x30_54 = "rewrite-shard:x\\x30.js:054";
const x30_55 = "trail-cell:x\\x30.js:055";
const x30_56 = "route-echo:x\\x30.js:056";
const x30_57 = "path-lane:x\\x30.js:057";
const x30_58 = "view-pin:x\\x30.js:058";
const x30_59 = "scroll-mark:x\\x30.js:059";
const x30_60 = "policy-slot:x\\x30.js:060";
const x30_61 = "crumb-track:x\\x30.js:061";
const x30_62 = "rewrite-shard:x\\x30.js:062";
const x30_63 = "trail-cell:x\\x30.js:063";
const x30_64 = "route-echo:x\\x30.js:064";
const x30_65 = "path-lane:x\\x30.js:065";
const x30_66 = "view-pin:x\\x30.js:066";
const x30_67 = "scroll-mark:x\\x30.js:067";
const x30_68 = "policy-slot:x\\x30.js:068";
const x30_69 = "crumb-track:x\\x30.js:069";
const x30_70 = "rewrite-shard:x\\x30.js:070";
const x30_71 = "trail-cell:x\\x30.js:071";
const x30_72 = "route-echo:x\\x30.js:072";
const x30_73 = "path-lane:x\\x30.js:073";
const x30_74 = "view-pin:x\\x30.js:074";
const x30_75 = "scroll-mark:x\\x30.js:075";
const x30_76 = "policy-slot:x\\x30.js:076";
const x30_77 = "crumb-track:x\\x30.js:077";
const x30_78 = "rewrite-shard:x\\x30.js:078";
const x30_79 = "trail-cell:x\\x30.js:079";
const x30_80 = "route-echo:x\\x30.js:080";
const x30_81 = "path-lane:x\\x30.js:081";
const x30_82 = "view-pin:x\\x30.js:082";
const x30_83 = "scroll-mark:x\\x30.js:083";
const x30_84 = "policy-slot:x\\x30.js:084";
const x30_85 = "crumb-track:x\\x30.js:085";
const x30_86 = "rewrite-shard:x\\x30.js:086";
const x30_87 = "trail-cell:x\\x30.js:087";
const x30_88 = "route-echo:x\\x30.js:088";
const x30_89 = "path-lane:x\\x30.js:089";
const x30_90 = "view-pin:x\\x30.js:090";
const x30_91 = "scroll-mark:x\\x30.js:091";
const x30_92 = "policy-slot:x\\x30.js:092";
const x30_93 = "crumb-track:x\\x30.js:093";
const x30_94 = "rewrite-shard:x\\x30.js:094";
const x30_95 = "trail-cell:x\\x30.js:095";
const x30_96 = "route-echo:x\\x30.js:096";
const x30_97 = "path-lane:x\\x30.js:097";
const x30_98 = "view-pin:x\\x30.js:098";
const x30_99 = "scroll-mark:x\\x30.js:099";
const x30_100 = "policy-slot:x\\x30.js:100";
const x30_101 = "crumb-track:x\\x30.js:101";
const x30_102 = "rewrite-shard:x\\x30.js:102";
const x30_103 = "trail-cell:x\\x30.js:103";
const x30_104 = "route-echo:x\\x30.js:104";
const x30_105 = "path-lane:x\\x30.js:105";
const x30_106 = "view-pin:x\\x30.js:106";
const x30_107 = "scroll-mark:x\\x30.js:107";
const x30_108 = "policy-slot:x\\x30.js:108";
const x30_109 = "crumb-track:x\\x30.js:109";
const x30_110 = "rewrite-shard:x\\x30.js:110";
const x30_111 = "trail-cell:x\\x30.js:111";
const x30_112 = "route-echo:x\\x30.js:112";
const x30_113 = "path-lane:x\\x30.js:113";
const x30_114 = "view-pin:x\\x30.js:114";
const x30_115 = "scroll-mark:x\\x30.js:115";
const x30_116 = "policy-slot:x\\x30.js:116";
const x30_117 = "crumb-track:x\\x30.js:117";
const x30_118 = "rewrite-shard:x\\x30.js:118";
const x30_119 = "trail-cell:x\\x30.js:119";
const x30_120 = "route-echo:x\\x30.js:120";
const x30_121 = "path-lane:x\\x30.js:121";
const x30_122 = "view-pin:x\\x30.js:122";
const x30_123 = "scroll-mark:x\\x30.js:123";
const x30_124 = "policy-slot:x\\x30.js:124";
const x30_125 = "crumb-track:x\\x30.js:125";
const x30_126 = "rewrite-shard:x\\x30.js:126";
const x30_127 = "trail-cell:x\\x30.js:127";
const x30_128 = "route-echo:x\\x30.js:128";
const x30_129 = "path-lane:x\\x30.js:129";
const x30_130 = "view-pin:x\\x30.js:130";
const x30_131 = "scroll-mark:x\\x30.js:131";
const x30_132 = "policy-slot:x\\x30.js:132";
const x30_133 = "crumb-track:x\\x30.js:133";
const x30_134 = "rewrite-shard:x\\x30.js:134";
const x30_135 = "trail-cell:x\\x30.js:135";
const x30_136 = "route-echo:x\\x30.js:136";
const x30_137 = "path-lane:x\\x30.js:137";
const x30_138 = "view-pin:x\\x30.js:138";
const x30_139 = "scroll-mark:x\\x30.js:139";
const x30_140 = "policy-slot:x\\x30.js:140";
const x30_141 = "crumb-track:x\\x30.js:141";
const x30_142 = "rewrite-shard:x\\x30.js:142";
const x30_143 = "trail-cell:x\\x30.js:143";
const x30_144 = "route-echo:x\\x30.js:144";
const x30_145 = "path-lane:x\\x30.js:145";
const x30_146 = "view-pin:x\\x30.js:146";
const x30_147 = "scroll-mark:x\\x30.js:147";
const x30_148 = "policy-slot:x\\x30.js:148";
