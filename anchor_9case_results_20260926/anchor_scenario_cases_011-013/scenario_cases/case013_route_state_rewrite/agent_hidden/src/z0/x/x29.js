import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 29,
  salt: 'r:0t:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 9,
  mask: 1070407095
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/29/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'expanded', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '2', y: '2', n: 1 }
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
const x29_0 = "route-echo:x\\x29.js:000";
const x29_1 = "path-lane:x\\x29.js:001";
const x29_2 = "view-pin:x\\x29.js:002";
const x29_3 = "scroll-mark:x\\x29.js:003";
const x29_4 = "policy-slot:x\\x29.js:004";
const x29_5 = "crumb-track:x\\x29.js:005";
const x29_6 = "rewrite-shard:x\\x29.js:006";
const x29_7 = "trail-cell:x\\x29.js:007";
const x29_8 = "route-echo:x\\x29.js:008";
const x29_9 = "path-lane:x\\x29.js:009";
const x29_10 = "view-pin:x\\x29.js:010";
const x29_11 = "scroll-mark:x\\x29.js:011";
const x29_12 = "policy-slot:x\\x29.js:012";
const x29_13 = "crumb-track:x\\x29.js:013";
const x29_14 = "rewrite-shard:x\\x29.js:014";
const x29_15 = "trail-cell:x\\x29.js:015";
const x29_16 = "route-echo:x\\x29.js:016";
const x29_17 = "path-lane:x\\x29.js:017";
const x29_18 = "view-pin:x\\x29.js:018";
const x29_19 = "scroll-mark:x\\x29.js:019";
const x29_20 = "policy-slot:x\\x29.js:020";
const x29_21 = "crumb-track:x\\x29.js:021";
const x29_22 = "rewrite-shard:x\\x29.js:022";
const x29_23 = "trail-cell:x\\x29.js:023";
const x29_24 = "route-echo:x\\x29.js:024";
const x29_25 = "path-lane:x\\x29.js:025";
const x29_26 = "view-pin:x\\x29.js:026";
const x29_27 = "scroll-mark:x\\x29.js:027";
const x29_28 = "policy-slot:x\\x29.js:028";
const x29_29 = "crumb-track:x\\x29.js:029";
const x29_30 = "rewrite-shard:x\\x29.js:030";
const x29_31 = "trail-cell:x\\x29.js:031";
const x29_32 = "route-echo:x\\x29.js:032";
const x29_33 = "path-lane:x\\x29.js:033";
const x29_34 = "view-pin:x\\x29.js:034";
const x29_35 = "scroll-mark:x\\x29.js:035";
const x29_36 = "policy-slot:x\\x29.js:036";
const x29_37 = "crumb-track:x\\x29.js:037";
const x29_38 = "rewrite-shard:x\\x29.js:038";
const x29_39 = "trail-cell:x\\x29.js:039";
const x29_40 = "route-echo:x\\x29.js:040";
const x29_41 = "path-lane:x\\x29.js:041";
const x29_42 = "view-pin:x\\x29.js:042";
const x29_43 = "scroll-mark:x\\x29.js:043";
const x29_44 = "policy-slot:x\\x29.js:044";
const x29_45 = "crumb-track:x\\x29.js:045";
const x29_46 = "rewrite-shard:x\\x29.js:046";
const x29_47 = "trail-cell:x\\x29.js:047";
const x29_48 = "route-echo:x\\x29.js:048";
const x29_49 = "path-lane:x\\x29.js:049";
const x29_50 = "view-pin:x\\x29.js:050";
const x29_51 = "scroll-mark:x\\x29.js:051";
const x29_52 = "policy-slot:x\\x29.js:052";
const x29_53 = "crumb-track:x\\x29.js:053";
const x29_54 = "rewrite-shard:x\\x29.js:054";
const x29_55 = "trail-cell:x\\x29.js:055";
const x29_56 = "route-echo:x\\x29.js:056";
const x29_57 = "path-lane:x\\x29.js:057";
const x29_58 = "view-pin:x\\x29.js:058";
const x29_59 = "scroll-mark:x\\x29.js:059";
const x29_60 = "policy-slot:x\\x29.js:060";
const x29_61 = "crumb-track:x\\x29.js:061";
const x29_62 = "rewrite-shard:x\\x29.js:062";
const x29_63 = "trail-cell:x\\x29.js:063";
const x29_64 = "route-echo:x\\x29.js:064";
const x29_65 = "path-lane:x\\x29.js:065";
const x29_66 = "view-pin:x\\x29.js:066";
const x29_67 = "scroll-mark:x\\x29.js:067";
const x29_68 = "policy-slot:x\\x29.js:068";
const x29_69 = "crumb-track:x\\x29.js:069";
const x29_70 = "rewrite-shard:x\\x29.js:070";
const x29_71 = "trail-cell:x\\x29.js:071";
const x29_72 = "route-echo:x\\x29.js:072";
const x29_73 = "path-lane:x\\x29.js:073";
const x29_74 = "view-pin:x\\x29.js:074";
const x29_75 = "scroll-mark:x\\x29.js:075";
const x29_76 = "policy-slot:x\\x29.js:076";
const x29_77 = "crumb-track:x\\x29.js:077";
const x29_78 = "rewrite-shard:x\\x29.js:078";
const x29_79 = "trail-cell:x\\x29.js:079";
const x29_80 = "route-echo:x\\x29.js:080";
const x29_81 = "path-lane:x\\x29.js:081";
const x29_82 = "view-pin:x\\x29.js:082";
const x29_83 = "scroll-mark:x\\x29.js:083";
const x29_84 = "policy-slot:x\\x29.js:084";
const x29_85 = "crumb-track:x\\x29.js:085";
const x29_86 = "rewrite-shard:x\\x29.js:086";
const x29_87 = "trail-cell:x\\x29.js:087";
const x29_88 = "route-echo:x\\x29.js:088";
const x29_89 = "path-lane:x\\x29.js:089";
const x29_90 = "view-pin:x\\x29.js:090";
const x29_91 = "scroll-mark:x\\x29.js:091";
const x29_92 = "policy-slot:x\\x29.js:092";
const x29_93 = "crumb-track:x\\x29.js:093";
const x29_94 = "rewrite-shard:x\\x29.js:094";
const x29_95 = "trail-cell:x\\x29.js:095";
const x29_96 = "route-echo:x\\x29.js:096";
const x29_97 = "path-lane:x\\x29.js:097";
const x29_98 = "view-pin:x\\x29.js:098";
const x29_99 = "scroll-mark:x\\x29.js:099";
const x29_100 = "policy-slot:x\\x29.js:100";
const x29_101 = "crumb-track:x\\x29.js:101";
const x29_102 = "rewrite-shard:x\\x29.js:102";
const x29_103 = "trail-cell:x\\x29.js:103";
const x29_104 = "route-echo:x\\x29.js:104";
const x29_105 = "path-lane:x\\x29.js:105";
const x29_106 = "view-pin:x\\x29.js:106";
const x29_107 = "scroll-mark:x\\x29.js:107";
const x29_108 = "policy-slot:x\\x29.js:108";
const x29_109 = "crumb-track:x\\x29.js:109";
const x29_110 = "rewrite-shard:x\\x29.js:110";
const x29_111 = "trail-cell:x\\x29.js:111";
const x29_112 = "route-echo:x\\x29.js:112";
const x29_113 = "path-lane:x\\x29.js:113";
const x29_114 = "view-pin:x\\x29.js:114";
const x29_115 = "scroll-mark:x\\x29.js:115";
const x29_116 = "policy-slot:x\\x29.js:116";
const x29_117 = "crumb-track:x\\x29.js:117";
const x29_118 = "rewrite-shard:x\\x29.js:118";
const x29_119 = "trail-cell:x\\x29.js:119";
const x29_120 = "route-echo:x\\x29.js:120";
const x29_121 = "path-lane:x\\x29.js:121";
const x29_122 = "view-pin:x\\x29.js:122";
const x29_123 = "scroll-mark:x\\x29.js:123";
const x29_124 = "policy-slot:x\\x29.js:124";
const x29_125 = "crumb-track:x\\x29.js:125";
const x29_126 = "rewrite-shard:x\\x29.js:126";
const x29_127 = "trail-cell:x\\x29.js:127";
const x29_128 = "route-echo:x\\x29.js:128";
const x29_129 = "path-lane:x\\x29.js:129";
const x29_130 = "view-pin:x\\x29.js:130";
const x29_131 = "scroll-mark:x\\x29.js:131";
const x29_132 = "policy-slot:x\\x29.js:132";
const x29_133 = "crumb-track:x\\x29.js:133";
const x29_134 = "rewrite-shard:x\\x29.js:134";
const x29_135 = "trail-cell:x\\x29.js:135";
const x29_136 = "route-echo:x\\x29.js:136";
const x29_137 = "path-lane:x\\x29.js:137";
const x29_138 = "view-pin:x\\x29.js:138";
const x29_139 = "scroll-mark:x\\x29.js:139";
const x29_140 = "policy-slot:x\\x29.js:140";
const x29_141 = "crumb-track:x\\x29.js:141";
const x29_142 = "rewrite-shard:x\\x29.js:142";
const x29_143 = "trail-cell:x\\x29.js:143";
const x29_144 = "route-echo:x\\x29.js:144";
const x29_145 = "path-lane:x\\x29.js:145";
const x29_146 = "view-pin:x\\x29.js:146";
const x29_147 = "scroll-mark:x\\x29.js:147";
const x29_148 = "policy-slot:x\\x29.js:148";
