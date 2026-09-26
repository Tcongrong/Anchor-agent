import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 34,
  salt: 'r:0y:trail',
  order: [4, 5, 0, 1, 2, 3],
  sep: '\u2062',
  shift: 14,
  mask: 1457684012
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/34/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'focus', y: 'shadow', n: 5 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '7', y: '7', n: 1 }
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
const x34_0 = "route-echo:x\\x34.js:000";
const x34_1 = "path-lane:x\\x34.js:001";
const x34_2 = "view-pin:x\\x34.js:002";
const x34_3 = "scroll-mark:x\\x34.js:003";
const x34_4 = "policy-slot:x\\x34.js:004";
const x34_5 = "crumb-track:x\\x34.js:005";
const x34_6 = "rewrite-shard:x\\x34.js:006";
const x34_7 = "trail-cell:x\\x34.js:007";
const x34_8 = "route-echo:x\\x34.js:008";
const x34_9 = "path-lane:x\\x34.js:009";
const x34_10 = "view-pin:x\\x34.js:010";
const x34_11 = "scroll-mark:x\\x34.js:011";
const x34_12 = "policy-slot:x\\x34.js:012";
const x34_13 = "crumb-track:x\\x34.js:013";
const x34_14 = "rewrite-shard:x\\x34.js:014";
const x34_15 = "trail-cell:x\\x34.js:015";
const x34_16 = "route-echo:x\\x34.js:016";
const x34_17 = "path-lane:x\\x34.js:017";
const x34_18 = "view-pin:x\\x34.js:018";
const x34_19 = "scroll-mark:x\\x34.js:019";
const x34_20 = "policy-slot:x\\x34.js:020";
const x34_21 = "crumb-track:x\\x34.js:021";
const x34_22 = "rewrite-shard:x\\x34.js:022";
const x34_23 = "trail-cell:x\\x34.js:023";
const x34_24 = "route-echo:x\\x34.js:024";
const x34_25 = "path-lane:x\\x34.js:025";
const x34_26 = "view-pin:x\\x34.js:026";
const x34_27 = "scroll-mark:x\\x34.js:027";
const x34_28 = "policy-slot:x\\x34.js:028";
const x34_29 = "crumb-track:x\\x34.js:029";
const x34_30 = "rewrite-shard:x\\x34.js:030";
const x34_31 = "trail-cell:x\\x34.js:031";
const x34_32 = "route-echo:x\\x34.js:032";
const x34_33 = "path-lane:x\\x34.js:033";
const x34_34 = "view-pin:x\\x34.js:034";
const x34_35 = "scroll-mark:x\\x34.js:035";
const x34_36 = "policy-slot:x\\x34.js:036";
const x34_37 = "crumb-track:x\\x34.js:037";
const x34_38 = "rewrite-shard:x\\x34.js:038";
const x34_39 = "trail-cell:x\\x34.js:039";
const x34_40 = "route-echo:x\\x34.js:040";
const x34_41 = "path-lane:x\\x34.js:041";
const x34_42 = "view-pin:x\\x34.js:042";
const x34_43 = "scroll-mark:x\\x34.js:043";
const x34_44 = "policy-slot:x\\x34.js:044";
const x34_45 = "crumb-track:x\\x34.js:045";
const x34_46 = "rewrite-shard:x\\x34.js:046";
const x34_47 = "trail-cell:x\\x34.js:047";
const x34_48 = "route-echo:x\\x34.js:048";
const x34_49 = "path-lane:x\\x34.js:049";
const x34_50 = "view-pin:x\\x34.js:050";
const x34_51 = "scroll-mark:x\\x34.js:051";
const x34_52 = "policy-slot:x\\x34.js:052";
const x34_53 = "crumb-track:x\\x34.js:053";
const x34_54 = "rewrite-shard:x\\x34.js:054";
const x34_55 = "trail-cell:x\\x34.js:055";
const x34_56 = "route-echo:x\\x34.js:056";
const x34_57 = "path-lane:x\\x34.js:057";
const x34_58 = "view-pin:x\\x34.js:058";
const x34_59 = "scroll-mark:x\\x34.js:059";
const x34_60 = "policy-slot:x\\x34.js:060";
const x34_61 = "crumb-track:x\\x34.js:061";
const x34_62 = "rewrite-shard:x\\x34.js:062";
const x34_63 = "trail-cell:x\\x34.js:063";
const x34_64 = "route-echo:x\\x34.js:064";
const x34_65 = "path-lane:x\\x34.js:065";
const x34_66 = "view-pin:x\\x34.js:066";
const x34_67 = "scroll-mark:x\\x34.js:067";
const x34_68 = "policy-slot:x\\x34.js:068";
const x34_69 = "crumb-track:x\\x34.js:069";
const x34_70 = "rewrite-shard:x\\x34.js:070";
const x34_71 = "trail-cell:x\\x34.js:071";
const x34_72 = "route-echo:x\\x34.js:072";
const x34_73 = "path-lane:x\\x34.js:073";
const x34_74 = "view-pin:x\\x34.js:074";
const x34_75 = "scroll-mark:x\\x34.js:075";
const x34_76 = "policy-slot:x\\x34.js:076";
const x34_77 = "crumb-track:x\\x34.js:077";
const x34_78 = "rewrite-shard:x\\x34.js:078";
const x34_79 = "trail-cell:x\\x34.js:079";
const x34_80 = "route-echo:x\\x34.js:080";
const x34_81 = "path-lane:x\\x34.js:081";
const x34_82 = "view-pin:x\\x34.js:082";
const x34_83 = "scroll-mark:x\\x34.js:083";
const x34_84 = "policy-slot:x\\x34.js:084";
const x34_85 = "crumb-track:x\\x34.js:085";
const x34_86 = "rewrite-shard:x\\x34.js:086";
const x34_87 = "trail-cell:x\\x34.js:087";
const x34_88 = "route-echo:x\\x34.js:088";
const x34_89 = "path-lane:x\\x34.js:089";
const x34_90 = "view-pin:x\\x34.js:090";
const x34_91 = "scroll-mark:x\\x34.js:091";
const x34_92 = "policy-slot:x\\x34.js:092";
const x34_93 = "crumb-track:x\\x34.js:093";
const x34_94 = "rewrite-shard:x\\x34.js:094";
const x34_95 = "trail-cell:x\\x34.js:095";
const x34_96 = "route-echo:x\\x34.js:096";
const x34_97 = "path-lane:x\\x34.js:097";
const x34_98 = "view-pin:x\\x34.js:098";
const x34_99 = "scroll-mark:x\\x34.js:099";
const x34_100 = "policy-slot:x\\x34.js:100";
const x34_101 = "crumb-track:x\\x34.js:101";
const x34_102 = "rewrite-shard:x\\x34.js:102";
const x34_103 = "trail-cell:x\\x34.js:103";
const x34_104 = "route-echo:x\\x34.js:104";
const x34_105 = "path-lane:x\\x34.js:105";
const x34_106 = "view-pin:x\\x34.js:106";
const x34_107 = "scroll-mark:x\\x34.js:107";
const x34_108 = "policy-slot:x\\x34.js:108";
const x34_109 = "crumb-track:x\\x34.js:109";
const x34_110 = "rewrite-shard:x\\x34.js:110";
const x34_111 = "trail-cell:x\\x34.js:111";
const x34_112 = "route-echo:x\\x34.js:112";
const x34_113 = "path-lane:x\\x34.js:113";
const x34_114 = "view-pin:x\\x34.js:114";
const x34_115 = "scroll-mark:x\\x34.js:115";
const x34_116 = "policy-slot:x\\x34.js:116";
const x34_117 = "crumb-track:x\\x34.js:117";
const x34_118 = "rewrite-shard:x\\x34.js:118";
const x34_119 = "trail-cell:x\\x34.js:119";
const x34_120 = "route-echo:x\\x34.js:120";
const x34_121 = "path-lane:x\\x34.js:121";
const x34_122 = "view-pin:x\\x34.js:122";
const x34_123 = "scroll-mark:x\\x34.js:123";
const x34_124 = "policy-slot:x\\x34.js:124";
const x34_125 = "crumb-track:x\\x34.js:125";
const x34_126 = "rewrite-shard:x\\x34.js:126";
const x34_127 = "trail-cell:x\\x34.js:127";
const x34_128 = "route-echo:x\\x34.js:128";
const x34_129 = "path-lane:x\\x34.js:129";
const x34_130 = "view-pin:x\\x34.js:130";
const x34_131 = "scroll-mark:x\\x34.js:131";
const x34_132 = "policy-slot:x\\x34.js:132";
const x34_133 = "crumb-track:x\\x34.js:133";
const x34_134 = "rewrite-shard:x\\x34.js:134";
const x34_135 = "trail-cell:x\\x34.js:135";
const x34_136 = "route-echo:x\\x34.js:136";
const x34_137 = "path-lane:x\\x34.js:137";
const x34_138 = "view-pin:x\\x34.js:138";
const x34_139 = "scroll-mark:x\\x34.js:139";
const x34_140 = "policy-slot:x\\x34.js:140";
const x34_141 = "crumb-track:x\\x34.js:141";
const x34_142 = "rewrite-shard:x\\x34.js:142";
const x34_143 = "trail-cell:x\\x34.js:143";
const x34_144 = "route-echo:x\\x34.js:144";
const x34_145 = "path-lane:x\\x34.js:145";
const x34_146 = "view-pin:x\\x34.js:146";
const x34_147 = "scroll-mark:x\\x34.js:147";
const x34_148 = "policy-slot:x\\x34.js:148";
