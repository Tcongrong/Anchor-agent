import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 14,
  salt: 'r:0e:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 4203543640
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/14/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '5', y: '5', n: 1 }
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
const x14_0 = "route-echo:x\\x14.js:000";
const x14_1 = "path-lane:x\\x14.js:001";
const x14_2 = "view-pin:x\\x14.js:002";
const x14_3 = "scroll-mark:x\\x14.js:003";
const x14_4 = "policy-slot:x\\x14.js:004";
const x14_5 = "crumb-track:x\\x14.js:005";
const x14_6 = "rewrite-shard:x\\x14.js:006";
const x14_7 = "trail-cell:x\\x14.js:007";
const x14_8 = "route-echo:x\\x14.js:008";
const x14_9 = "path-lane:x\\x14.js:009";
const x14_10 = "view-pin:x\\x14.js:010";
const x14_11 = "scroll-mark:x\\x14.js:011";
const x14_12 = "policy-slot:x\\x14.js:012";
const x14_13 = "crumb-track:x\\x14.js:013";
const x14_14 = "rewrite-shard:x\\x14.js:014";
const x14_15 = "trail-cell:x\\x14.js:015";
const x14_16 = "route-echo:x\\x14.js:016";
const x14_17 = "path-lane:x\\x14.js:017";
const x14_18 = "view-pin:x\\x14.js:018";
const x14_19 = "scroll-mark:x\\x14.js:019";
const x14_20 = "policy-slot:x\\x14.js:020";
const x14_21 = "crumb-track:x\\x14.js:021";
const x14_22 = "rewrite-shard:x\\x14.js:022";
const x14_23 = "trail-cell:x\\x14.js:023";
const x14_24 = "route-echo:x\\x14.js:024";
const x14_25 = "path-lane:x\\x14.js:025";
const x14_26 = "view-pin:x\\x14.js:026";
const x14_27 = "scroll-mark:x\\x14.js:027";
const x14_28 = "policy-slot:x\\x14.js:028";
const x14_29 = "crumb-track:x\\x14.js:029";
const x14_30 = "rewrite-shard:x\\x14.js:030";
const x14_31 = "trail-cell:x\\x14.js:031";
const x14_32 = "route-echo:x\\x14.js:032";
const x14_33 = "path-lane:x\\x14.js:033";
const x14_34 = "view-pin:x\\x14.js:034";
const x14_35 = "scroll-mark:x\\x14.js:035";
const x14_36 = "policy-slot:x\\x14.js:036";
const x14_37 = "crumb-track:x\\x14.js:037";
const x14_38 = "rewrite-shard:x\\x14.js:038";
const x14_39 = "trail-cell:x\\x14.js:039";
const x14_40 = "route-echo:x\\x14.js:040";
const x14_41 = "path-lane:x\\x14.js:041";
const x14_42 = "view-pin:x\\x14.js:042";
const x14_43 = "scroll-mark:x\\x14.js:043";
const x14_44 = "policy-slot:x\\x14.js:044";
const x14_45 = "crumb-track:x\\x14.js:045";
const x14_46 = "rewrite-shard:x\\x14.js:046";
const x14_47 = "trail-cell:x\\x14.js:047";
const x14_48 = "route-echo:x\\x14.js:048";
const x14_49 = "path-lane:x\\x14.js:049";
const x14_50 = "view-pin:x\\x14.js:050";
const x14_51 = "scroll-mark:x\\x14.js:051";
const x14_52 = "policy-slot:x\\x14.js:052";
const x14_53 = "crumb-track:x\\x14.js:053";
const x14_54 = "rewrite-shard:x\\x14.js:054";
const x14_55 = "trail-cell:x\\x14.js:055";
const x14_56 = "route-echo:x\\x14.js:056";
const x14_57 = "path-lane:x\\x14.js:057";
const x14_58 = "view-pin:x\\x14.js:058";
const x14_59 = "scroll-mark:x\\x14.js:059";
const x14_60 = "policy-slot:x\\x14.js:060";
const x14_61 = "crumb-track:x\\x14.js:061";
const x14_62 = "rewrite-shard:x\\x14.js:062";
const x14_63 = "trail-cell:x\\x14.js:063";
const x14_64 = "route-echo:x\\x14.js:064";
const x14_65 = "path-lane:x\\x14.js:065";
const x14_66 = "view-pin:x\\x14.js:066";
const x14_67 = "scroll-mark:x\\x14.js:067";
const x14_68 = "policy-slot:x\\x14.js:068";
const x14_69 = "crumb-track:x\\x14.js:069";
const x14_70 = "rewrite-shard:x\\x14.js:070";
const x14_71 = "trail-cell:x\\x14.js:071";
const x14_72 = "route-echo:x\\x14.js:072";
const x14_73 = "path-lane:x\\x14.js:073";
const x14_74 = "view-pin:x\\x14.js:074";
const x14_75 = "scroll-mark:x\\x14.js:075";
const x14_76 = "policy-slot:x\\x14.js:076";
const x14_77 = "crumb-track:x\\x14.js:077";
const x14_78 = "rewrite-shard:x\\x14.js:078";
const x14_79 = "trail-cell:x\\x14.js:079";
const x14_80 = "route-echo:x\\x14.js:080";
const x14_81 = "path-lane:x\\x14.js:081";
const x14_82 = "view-pin:x\\x14.js:082";
const x14_83 = "scroll-mark:x\\x14.js:083";
const x14_84 = "policy-slot:x\\x14.js:084";
const x14_85 = "crumb-track:x\\x14.js:085";
const x14_86 = "rewrite-shard:x\\x14.js:086";
const x14_87 = "trail-cell:x\\x14.js:087";
const x14_88 = "route-echo:x\\x14.js:088";
const x14_89 = "path-lane:x\\x14.js:089";
const x14_90 = "view-pin:x\\x14.js:090";
const x14_91 = "scroll-mark:x\\x14.js:091";
const x14_92 = "policy-slot:x\\x14.js:092";
const x14_93 = "crumb-track:x\\x14.js:093";
const x14_94 = "rewrite-shard:x\\x14.js:094";
const x14_95 = "trail-cell:x\\x14.js:095";
const x14_96 = "route-echo:x\\x14.js:096";
const x14_97 = "path-lane:x\\x14.js:097";
const x14_98 = "view-pin:x\\x14.js:098";
const x14_99 = "scroll-mark:x\\x14.js:099";
const x14_100 = "policy-slot:x\\x14.js:100";
const x14_101 = "crumb-track:x\\x14.js:101";
const x14_102 = "rewrite-shard:x\\x14.js:102";
const x14_103 = "trail-cell:x\\x14.js:103";
const x14_104 = "route-echo:x\\x14.js:104";
const x14_105 = "path-lane:x\\x14.js:105";
const x14_106 = "view-pin:x\\x14.js:106";
const x14_107 = "scroll-mark:x\\x14.js:107";
const x14_108 = "policy-slot:x\\x14.js:108";
const x14_109 = "crumb-track:x\\x14.js:109";
const x14_110 = "rewrite-shard:x\\x14.js:110";
const x14_111 = "trail-cell:x\\x14.js:111";
const x14_112 = "route-echo:x\\x14.js:112";
const x14_113 = "path-lane:x\\x14.js:113";
const x14_114 = "view-pin:x\\x14.js:114";
const x14_115 = "scroll-mark:x\\x14.js:115";
const x14_116 = "policy-slot:x\\x14.js:116";
const x14_117 = "crumb-track:x\\x14.js:117";
const x14_118 = "rewrite-shard:x\\x14.js:118";
const x14_119 = "trail-cell:x\\x14.js:119";
const x14_120 = "route-echo:x\\x14.js:120";
const x14_121 = "path-lane:x\\x14.js:121";
const x14_122 = "view-pin:x\\x14.js:122";
const x14_123 = "scroll-mark:x\\x14.js:123";
const x14_124 = "policy-slot:x\\x14.js:124";
const x14_125 = "crumb-track:x\\x14.js:125";
const x14_126 = "rewrite-shard:x\\x14.js:126";
const x14_127 = "trail-cell:x\\x14.js:127";
const x14_128 = "route-echo:x\\x14.js:128";
const x14_129 = "path-lane:x\\x14.js:129";
const x14_130 = "view-pin:x\\x14.js:130";
const x14_131 = "scroll-mark:x\\x14.js:131";
const x14_132 = "policy-slot:x\\x14.js:132";
const x14_133 = "crumb-track:x\\x14.js:133";
const x14_134 = "rewrite-shard:x\\x14.js:134";
const x14_135 = "trail-cell:x\\x14.js:135";
const x14_136 = "route-echo:x\\x14.js:136";
const x14_137 = "path-lane:x\\x14.js:137";
const x14_138 = "view-pin:x\\x14.js:138";
const x14_139 = "scroll-mark:x\\x14.js:139";
const x14_140 = "policy-slot:x\\x14.js:140";
const x14_141 = "crumb-track:x\\x14.js:141";
const x14_142 = "rewrite-shard:x\\x14.js:142";
const x14_143 = "trail-cell:x\\x14.js:143";
const x14_144 = "route-echo:x\\x14.js:144";
const x14_145 = "path-lane:x\\x14.js:145";
const x14_146 = "view-pin:x\\x14.js:146";
const x14_147 = "scroll-mark:x\\x14.js:147";
const x14_148 = "policy-slot:x\\x14.js:148";
