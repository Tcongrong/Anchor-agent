import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 5,
  salt: 'r:05:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 1788458271
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/5/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '5', y: '5', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(2, 11) + '=' + (cfg.slot * 3 + 1).toString(36) + 'q1';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x05_0 = "route-echo:x\\x05.js:000";
const x05_1 = "path-lane:x\\x05.js:001";
const x05_2 = "view-pin:x\\x05.js:002";
const x05_3 = "scroll-mark:x\\x05.js:003";
const x05_4 = "policy-slot:x\\x05.js:004";
const x05_5 = "crumb-track:x\\x05.js:005";
const x05_6 = "rewrite-shard:x\\x05.js:006";
const x05_7 = "trail-cell:x\\x05.js:007";
const x05_8 = "route-echo:x\\x05.js:008";
const x05_9 = "path-lane:x\\x05.js:009";
const x05_10 = "view-pin:x\\x05.js:010";
const x05_11 = "scroll-mark:x\\x05.js:011";
const x05_12 = "policy-slot:x\\x05.js:012";
const x05_13 = "crumb-track:x\\x05.js:013";
const x05_14 = "rewrite-shard:x\\x05.js:014";
const x05_15 = "trail-cell:x\\x05.js:015";
const x05_16 = "route-echo:x\\x05.js:016";
const x05_17 = "path-lane:x\\x05.js:017";
const x05_18 = "view-pin:x\\x05.js:018";
const x05_19 = "scroll-mark:x\\x05.js:019";
const x05_20 = "policy-slot:x\\x05.js:020";
const x05_21 = "crumb-track:x\\x05.js:021";
const x05_22 = "rewrite-shard:x\\x05.js:022";
const x05_23 = "trail-cell:x\\x05.js:023";
const x05_24 = "route-echo:x\\x05.js:024";
const x05_25 = "path-lane:x\\x05.js:025";
const x05_26 = "view-pin:x\\x05.js:026";
const x05_27 = "scroll-mark:x\\x05.js:027";
const x05_28 = "policy-slot:x\\x05.js:028";
const x05_29 = "crumb-track:x\\x05.js:029";
const x05_30 = "rewrite-shard:x\\x05.js:030";
const x05_31 = "trail-cell:x\\x05.js:031";
const x05_32 = "route-echo:x\\x05.js:032";
const x05_33 = "path-lane:x\\x05.js:033";
const x05_34 = "view-pin:x\\x05.js:034";
const x05_35 = "scroll-mark:x\\x05.js:035";
const x05_36 = "policy-slot:x\\x05.js:036";
const x05_37 = "crumb-track:x\\x05.js:037";
const x05_38 = "rewrite-shard:x\\x05.js:038";
const x05_39 = "trail-cell:x\\x05.js:039";
const x05_40 = "route-echo:x\\x05.js:040";
const x05_41 = "path-lane:x\\x05.js:041";
const x05_42 = "view-pin:x\\x05.js:042";
const x05_43 = "scroll-mark:x\\x05.js:043";
const x05_44 = "policy-slot:x\\x05.js:044";
const x05_45 = "crumb-track:x\\x05.js:045";
const x05_46 = "rewrite-shard:x\\x05.js:046";
const x05_47 = "trail-cell:x\\x05.js:047";
const x05_48 = "route-echo:x\\x05.js:048";
const x05_49 = "path-lane:x\\x05.js:049";
const x05_50 = "view-pin:x\\x05.js:050";
const x05_51 = "scroll-mark:x\\x05.js:051";
const x05_52 = "policy-slot:x\\x05.js:052";
const x05_53 = "crumb-track:x\\x05.js:053";
const x05_54 = "rewrite-shard:x\\x05.js:054";
const x05_55 = "trail-cell:x\\x05.js:055";
const x05_56 = "route-echo:x\\x05.js:056";
const x05_57 = "path-lane:x\\x05.js:057";
const x05_58 = "view-pin:x\\x05.js:058";
const x05_59 = "scroll-mark:x\\x05.js:059";
const x05_60 = "policy-slot:x\\x05.js:060";
const x05_61 = "crumb-track:x\\x05.js:061";
const x05_62 = "rewrite-shard:x\\x05.js:062";
const x05_63 = "trail-cell:x\\x05.js:063";
const x05_64 = "route-echo:x\\x05.js:064";
const x05_65 = "path-lane:x\\x05.js:065";
const x05_66 = "view-pin:x\\x05.js:066";
const x05_67 = "scroll-mark:x\\x05.js:067";
const x05_68 = "policy-slot:x\\x05.js:068";
const x05_69 = "crumb-track:x\\x05.js:069";
const x05_70 = "rewrite-shard:x\\x05.js:070";
const x05_71 = "trail-cell:x\\x05.js:071";
const x05_72 = "route-echo:x\\x05.js:072";
const x05_73 = "path-lane:x\\x05.js:073";
const x05_74 = "view-pin:x\\x05.js:074";
const x05_75 = "scroll-mark:x\\x05.js:075";
const x05_76 = "policy-slot:x\\x05.js:076";
const x05_77 = "crumb-track:x\\x05.js:077";
const x05_78 = "rewrite-shard:x\\x05.js:078";
const x05_79 = "trail-cell:x\\x05.js:079";
const x05_80 = "route-echo:x\\x05.js:080";
const x05_81 = "path-lane:x\\x05.js:081";
const x05_82 = "view-pin:x\\x05.js:082";
const x05_83 = "scroll-mark:x\\x05.js:083";
const x05_84 = "policy-slot:x\\x05.js:084";
const x05_85 = "crumb-track:x\\x05.js:085";
const x05_86 = "rewrite-shard:x\\x05.js:086";
const x05_87 = "trail-cell:x\\x05.js:087";
const x05_88 = "route-echo:x\\x05.js:088";
const x05_89 = "path-lane:x\\x05.js:089";
const x05_90 = "view-pin:x\\x05.js:090";
const x05_91 = "scroll-mark:x\\x05.js:091";
const x05_92 = "policy-slot:x\\x05.js:092";
const x05_93 = "crumb-track:x\\x05.js:093";
const x05_94 = "rewrite-shard:x\\x05.js:094";
const x05_95 = "trail-cell:x\\x05.js:095";
const x05_96 = "route-echo:x\\x05.js:096";
const x05_97 = "path-lane:x\\x05.js:097";
const x05_98 = "view-pin:x\\x05.js:098";
const x05_99 = "scroll-mark:x\\x05.js:099";
const x05_100 = "policy-slot:x\\x05.js:100";
const x05_101 = "crumb-track:x\\x05.js:101";
const x05_102 = "rewrite-shard:x\\x05.js:102";
const x05_103 = "trail-cell:x\\x05.js:103";
const x05_104 = "route-echo:x\\x05.js:104";
const x05_105 = "path-lane:x\\x05.js:105";
const x05_106 = "view-pin:x\\x05.js:106";
const x05_107 = "scroll-mark:x\\x05.js:107";
const x05_108 = "policy-slot:x\\x05.js:108";
const x05_109 = "crumb-track:x\\x05.js:109";
const x05_110 = "rewrite-shard:x\\x05.js:110";
const x05_111 = "trail-cell:x\\x05.js:111";
const x05_112 = "route-echo:x\\x05.js:112";
const x05_113 = "path-lane:x\\x05.js:113";
const x05_114 = "view-pin:x\\x05.js:114";
const x05_115 = "scroll-mark:x\\x05.js:115";
const x05_116 = "policy-slot:x\\x05.js:116";
const x05_117 = "crumb-track:x\\x05.js:117";
const x05_118 = "rewrite-shard:x\\x05.js:118";
const x05_119 = "trail-cell:x\\x05.js:119";
const x05_120 = "route-echo:x\\x05.js:120";
const x05_121 = "path-lane:x\\x05.js:121";
const x05_122 = "view-pin:x\\x05.js:122";
const x05_123 = "scroll-mark:x\\x05.js:123";
const x05_124 = "policy-slot:x\\x05.js:124";
const x05_125 = "crumb-track:x\\x05.js:125";
const x05_126 = "rewrite-shard:x\\x05.js:126";
const x05_127 = "trail-cell:x\\x05.js:127";
const x05_128 = "route-echo:x\\x05.js:128";
const x05_129 = "path-lane:x\\x05.js:129";
const x05_130 = "view-pin:x\\x05.js:130";
const x05_131 = "scroll-mark:x\\x05.js:131";
const x05_132 = "policy-slot:x\\x05.js:132";
const x05_133 = "crumb-track:x\\x05.js:133";
const x05_134 = "rewrite-shard:x\\x05.js:134";
const x05_135 = "trail-cell:x\\x05.js:135";
const x05_136 = "route-echo:x\\x05.js:136";
const x05_137 = "path-lane:x\\x05.js:137";
const x05_138 = "view-pin:x\\x05.js:138";
const x05_139 = "scroll-mark:x\\x05.js:139";
const x05_140 = "policy-slot:x\\x05.js:140";
const x05_141 = "crumb-track:x\\x05.js:141";
const x05_142 = "rewrite-shard:x\\x05.js:142";
const x05_143 = "trail-cell:x\\x05.js:143";
const x05_144 = "route-echo:x\\x05.js:144";
const x05_145 = "path-lane:x\\x05.js:145";
const x05_146 = "view-pin:x\\x05.js:146";
const x05_147 = "scroll-mark:x\\x05.js:147";
const x05_148 = "policy-slot:x\\x05.js:148";
