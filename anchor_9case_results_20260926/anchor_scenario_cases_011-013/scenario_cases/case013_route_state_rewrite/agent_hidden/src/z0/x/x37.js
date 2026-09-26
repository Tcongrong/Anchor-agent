import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 37,
  salt: 'r:11:trail',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 5,
  mask: 831056703
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/37/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '1', y: '1', n: 1 }
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
const x37_0 = "route-echo:x\\x37.js:000";
const x37_1 = "path-lane:x\\x37.js:001";
const x37_2 = "view-pin:x\\x37.js:002";
const x37_3 = "scroll-mark:x\\x37.js:003";
const x37_4 = "policy-slot:x\\x37.js:004";
const x37_5 = "crumb-track:x\\x37.js:005";
const x37_6 = "rewrite-shard:x\\x37.js:006";
const x37_7 = "trail-cell:x\\x37.js:007";
const x37_8 = "route-echo:x\\x37.js:008";
const x37_9 = "path-lane:x\\x37.js:009";
const x37_10 = "view-pin:x\\x37.js:010";
const x37_11 = "scroll-mark:x\\x37.js:011";
const x37_12 = "policy-slot:x\\x37.js:012";
const x37_13 = "crumb-track:x\\x37.js:013";
const x37_14 = "rewrite-shard:x\\x37.js:014";
const x37_15 = "trail-cell:x\\x37.js:015";
const x37_16 = "route-echo:x\\x37.js:016";
const x37_17 = "path-lane:x\\x37.js:017";
const x37_18 = "view-pin:x\\x37.js:018";
const x37_19 = "scroll-mark:x\\x37.js:019";
const x37_20 = "policy-slot:x\\x37.js:020";
const x37_21 = "crumb-track:x\\x37.js:021";
const x37_22 = "rewrite-shard:x\\x37.js:022";
const x37_23 = "trail-cell:x\\x37.js:023";
const x37_24 = "route-echo:x\\x37.js:024";
const x37_25 = "path-lane:x\\x37.js:025";
const x37_26 = "view-pin:x\\x37.js:026";
const x37_27 = "scroll-mark:x\\x37.js:027";
const x37_28 = "policy-slot:x\\x37.js:028";
const x37_29 = "crumb-track:x\\x37.js:029";
const x37_30 = "rewrite-shard:x\\x37.js:030";
const x37_31 = "trail-cell:x\\x37.js:031";
const x37_32 = "route-echo:x\\x37.js:032";
const x37_33 = "path-lane:x\\x37.js:033";
const x37_34 = "view-pin:x\\x37.js:034";
const x37_35 = "scroll-mark:x\\x37.js:035";
const x37_36 = "policy-slot:x\\x37.js:036";
const x37_37 = "crumb-track:x\\x37.js:037";
const x37_38 = "rewrite-shard:x\\x37.js:038";
const x37_39 = "trail-cell:x\\x37.js:039";
const x37_40 = "route-echo:x\\x37.js:040";
const x37_41 = "path-lane:x\\x37.js:041";
const x37_42 = "view-pin:x\\x37.js:042";
const x37_43 = "scroll-mark:x\\x37.js:043";
const x37_44 = "policy-slot:x\\x37.js:044";
const x37_45 = "crumb-track:x\\x37.js:045";
const x37_46 = "rewrite-shard:x\\x37.js:046";
const x37_47 = "trail-cell:x\\x37.js:047";
const x37_48 = "route-echo:x\\x37.js:048";
const x37_49 = "path-lane:x\\x37.js:049";
const x37_50 = "view-pin:x\\x37.js:050";
const x37_51 = "scroll-mark:x\\x37.js:051";
const x37_52 = "policy-slot:x\\x37.js:052";
const x37_53 = "crumb-track:x\\x37.js:053";
const x37_54 = "rewrite-shard:x\\x37.js:054";
const x37_55 = "trail-cell:x\\x37.js:055";
const x37_56 = "route-echo:x\\x37.js:056";
const x37_57 = "path-lane:x\\x37.js:057";
const x37_58 = "view-pin:x\\x37.js:058";
const x37_59 = "scroll-mark:x\\x37.js:059";
const x37_60 = "policy-slot:x\\x37.js:060";
const x37_61 = "crumb-track:x\\x37.js:061";
const x37_62 = "rewrite-shard:x\\x37.js:062";
const x37_63 = "trail-cell:x\\x37.js:063";
const x37_64 = "route-echo:x\\x37.js:064";
const x37_65 = "path-lane:x\\x37.js:065";
const x37_66 = "view-pin:x\\x37.js:066";
const x37_67 = "scroll-mark:x\\x37.js:067";
const x37_68 = "policy-slot:x\\x37.js:068";
const x37_69 = "crumb-track:x\\x37.js:069";
const x37_70 = "rewrite-shard:x\\x37.js:070";
const x37_71 = "trail-cell:x\\x37.js:071";
const x37_72 = "route-echo:x\\x37.js:072";
const x37_73 = "path-lane:x\\x37.js:073";
const x37_74 = "view-pin:x\\x37.js:074";
const x37_75 = "scroll-mark:x\\x37.js:075";
const x37_76 = "policy-slot:x\\x37.js:076";
const x37_77 = "crumb-track:x\\x37.js:077";
const x37_78 = "rewrite-shard:x\\x37.js:078";
const x37_79 = "trail-cell:x\\x37.js:079";
const x37_80 = "route-echo:x\\x37.js:080";
const x37_81 = "path-lane:x\\x37.js:081";
const x37_82 = "view-pin:x\\x37.js:082";
const x37_83 = "scroll-mark:x\\x37.js:083";
const x37_84 = "policy-slot:x\\x37.js:084";
const x37_85 = "crumb-track:x\\x37.js:085";
const x37_86 = "rewrite-shard:x\\x37.js:086";
const x37_87 = "trail-cell:x\\x37.js:087";
const x37_88 = "route-echo:x\\x37.js:088";
const x37_89 = "path-lane:x\\x37.js:089";
const x37_90 = "view-pin:x\\x37.js:090";
const x37_91 = "scroll-mark:x\\x37.js:091";
const x37_92 = "policy-slot:x\\x37.js:092";
const x37_93 = "crumb-track:x\\x37.js:093";
const x37_94 = "rewrite-shard:x\\x37.js:094";
const x37_95 = "trail-cell:x\\x37.js:095";
const x37_96 = "route-echo:x\\x37.js:096";
const x37_97 = "path-lane:x\\x37.js:097";
const x37_98 = "view-pin:x\\x37.js:098";
const x37_99 = "scroll-mark:x\\x37.js:099";
const x37_100 = "policy-slot:x\\x37.js:100";
const x37_101 = "crumb-track:x\\x37.js:101";
const x37_102 = "rewrite-shard:x\\x37.js:102";
const x37_103 = "trail-cell:x\\x37.js:103";
const x37_104 = "route-echo:x\\x37.js:104";
const x37_105 = "path-lane:x\\x37.js:105";
const x37_106 = "view-pin:x\\x37.js:106";
const x37_107 = "scroll-mark:x\\x37.js:107";
const x37_108 = "policy-slot:x\\x37.js:108";
const x37_109 = "crumb-track:x\\x37.js:109";
const x37_110 = "rewrite-shard:x\\x37.js:110";
const x37_111 = "trail-cell:x\\x37.js:111";
const x37_112 = "route-echo:x\\x37.js:112";
const x37_113 = "path-lane:x\\x37.js:113";
const x37_114 = "view-pin:x\\x37.js:114";
const x37_115 = "scroll-mark:x\\x37.js:115";
const x37_116 = "policy-slot:x\\x37.js:116";
const x37_117 = "crumb-track:x\\x37.js:117";
const x37_118 = "rewrite-shard:x\\x37.js:118";
const x37_119 = "trail-cell:x\\x37.js:119";
const x37_120 = "route-echo:x\\x37.js:120";
const x37_121 = "path-lane:x\\x37.js:121";
const x37_122 = "view-pin:x\\x37.js:122";
const x37_123 = "scroll-mark:x\\x37.js:123";
const x37_124 = "policy-slot:x\\x37.js:124";
const x37_125 = "crumb-track:x\\x37.js:125";
const x37_126 = "rewrite-shard:x\\x37.js:126";
const x37_127 = "trail-cell:x\\x37.js:127";
const x37_128 = "route-echo:x\\x37.js:128";
const x37_129 = "path-lane:x\\x37.js:129";
const x37_130 = "view-pin:x\\x37.js:130";
const x37_131 = "scroll-mark:x\\x37.js:131";
const x37_132 = "policy-slot:x\\x37.js:132";
const x37_133 = "crumb-track:x\\x37.js:133";
const x37_134 = "rewrite-shard:x\\x37.js:134";
const x37_135 = "trail-cell:x\\x37.js:135";
const x37_136 = "route-echo:x\\x37.js:136";
const x37_137 = "path-lane:x\\x37.js:137";
const x37_138 = "view-pin:x\\x37.js:138";
const x37_139 = "scroll-mark:x\\x37.js:139";
const x37_140 = "policy-slot:x\\x37.js:140";
const x37_141 = "crumb-track:x\\x37.js:141";
const x37_142 = "rewrite-shard:x\\x37.js:142";
const x37_143 = "trail-cell:x\\x37.js:143";
const x37_144 = "route-echo:x\\x37.js:144";
const x37_145 = "path-lane:x\\x37.js:145";
const x37_146 = "view-pin:x\\x37.js:146";
const x37_147 = "scroll-mark:x\\x37.js:147";
const x37_148 = "policy-slot:x\\x37.js:148";
