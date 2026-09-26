import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 3,
  salt: 'r:03:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 774554045
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/3/shadow', y: 'shadow', n: 15 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '3', y: '3', n: 1 }
  ];
}

function remix3(value, index) {
  return value.split('').reverse().join('').slice(3, 15);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x03_0 = "route-echo:x\\x03.js:000";
const x03_1 = "path-lane:x\\x03.js:001";
const x03_2 = "view-pin:x\\x03.js:002";
const x03_3 = "scroll-mark:x\\x03.js:003";
const x03_4 = "policy-slot:x\\x03.js:004";
const x03_5 = "crumb-track:x\\x03.js:005";
const x03_6 = "rewrite-shard:x\\x03.js:006";
const x03_7 = "trail-cell:x\\x03.js:007";
const x03_8 = "route-echo:x\\x03.js:008";
const x03_9 = "path-lane:x\\x03.js:009";
const x03_10 = "view-pin:x\\x03.js:010";
const x03_11 = "scroll-mark:x\\x03.js:011";
const x03_12 = "policy-slot:x\\x03.js:012";
const x03_13 = "crumb-track:x\\x03.js:013";
const x03_14 = "rewrite-shard:x\\x03.js:014";
const x03_15 = "trail-cell:x\\x03.js:015";
const x03_16 = "route-echo:x\\x03.js:016";
const x03_17 = "path-lane:x\\x03.js:017";
const x03_18 = "view-pin:x\\x03.js:018";
const x03_19 = "scroll-mark:x\\x03.js:019";
const x03_20 = "policy-slot:x\\x03.js:020";
const x03_21 = "crumb-track:x\\x03.js:021";
const x03_22 = "rewrite-shard:x\\x03.js:022";
const x03_23 = "trail-cell:x\\x03.js:023";
const x03_24 = "route-echo:x\\x03.js:024";
const x03_25 = "path-lane:x\\x03.js:025";
const x03_26 = "view-pin:x\\x03.js:026";
const x03_27 = "scroll-mark:x\\x03.js:027";
const x03_28 = "policy-slot:x\\x03.js:028";
const x03_29 = "crumb-track:x\\x03.js:029";
const x03_30 = "rewrite-shard:x\\x03.js:030";
const x03_31 = "trail-cell:x\\x03.js:031";
const x03_32 = "route-echo:x\\x03.js:032";
const x03_33 = "path-lane:x\\x03.js:033";
const x03_34 = "view-pin:x\\x03.js:034";
const x03_35 = "scroll-mark:x\\x03.js:035";
const x03_36 = "policy-slot:x\\x03.js:036";
const x03_37 = "crumb-track:x\\x03.js:037";
const x03_38 = "rewrite-shard:x\\x03.js:038";
const x03_39 = "trail-cell:x\\x03.js:039";
const x03_40 = "route-echo:x\\x03.js:040";
const x03_41 = "path-lane:x\\x03.js:041";
const x03_42 = "view-pin:x\\x03.js:042";
const x03_43 = "scroll-mark:x\\x03.js:043";
const x03_44 = "policy-slot:x\\x03.js:044";
const x03_45 = "crumb-track:x\\x03.js:045";
const x03_46 = "rewrite-shard:x\\x03.js:046";
const x03_47 = "trail-cell:x\\x03.js:047";
const x03_48 = "route-echo:x\\x03.js:048";
const x03_49 = "path-lane:x\\x03.js:049";
const x03_50 = "view-pin:x\\x03.js:050";
const x03_51 = "scroll-mark:x\\x03.js:051";
const x03_52 = "policy-slot:x\\x03.js:052";
const x03_53 = "crumb-track:x\\x03.js:053";
const x03_54 = "rewrite-shard:x\\x03.js:054";
const x03_55 = "trail-cell:x\\x03.js:055";
const x03_56 = "route-echo:x\\x03.js:056";
const x03_57 = "path-lane:x\\x03.js:057";
const x03_58 = "view-pin:x\\x03.js:058";
const x03_59 = "scroll-mark:x\\x03.js:059";
const x03_60 = "policy-slot:x\\x03.js:060";
const x03_61 = "crumb-track:x\\x03.js:061";
const x03_62 = "rewrite-shard:x\\x03.js:062";
const x03_63 = "trail-cell:x\\x03.js:063";
const x03_64 = "route-echo:x\\x03.js:064";
const x03_65 = "path-lane:x\\x03.js:065";
const x03_66 = "view-pin:x\\x03.js:066";
const x03_67 = "scroll-mark:x\\x03.js:067";
const x03_68 = "policy-slot:x\\x03.js:068";
const x03_69 = "crumb-track:x\\x03.js:069";
const x03_70 = "rewrite-shard:x\\x03.js:070";
const x03_71 = "trail-cell:x\\x03.js:071";
const x03_72 = "route-echo:x\\x03.js:072";
const x03_73 = "path-lane:x\\x03.js:073";
const x03_74 = "view-pin:x\\x03.js:074";
const x03_75 = "scroll-mark:x\\x03.js:075";
const x03_76 = "policy-slot:x\\x03.js:076";
const x03_77 = "crumb-track:x\\x03.js:077";
const x03_78 = "rewrite-shard:x\\x03.js:078";
const x03_79 = "trail-cell:x\\x03.js:079";
const x03_80 = "route-echo:x\\x03.js:080";
const x03_81 = "path-lane:x\\x03.js:081";
const x03_82 = "view-pin:x\\x03.js:082";
const x03_83 = "scroll-mark:x\\x03.js:083";
const x03_84 = "policy-slot:x\\x03.js:084";
const x03_85 = "crumb-track:x\\x03.js:085";
const x03_86 = "rewrite-shard:x\\x03.js:086";
const x03_87 = "trail-cell:x\\x03.js:087";
const x03_88 = "route-echo:x\\x03.js:088";
const x03_89 = "path-lane:x\\x03.js:089";
const x03_90 = "view-pin:x\\x03.js:090";
const x03_91 = "scroll-mark:x\\x03.js:091";
const x03_92 = "policy-slot:x\\x03.js:092";
const x03_93 = "crumb-track:x\\x03.js:093";
const x03_94 = "rewrite-shard:x\\x03.js:094";
const x03_95 = "trail-cell:x\\x03.js:095";
const x03_96 = "route-echo:x\\x03.js:096";
const x03_97 = "path-lane:x\\x03.js:097";
const x03_98 = "view-pin:x\\x03.js:098";
const x03_99 = "scroll-mark:x\\x03.js:099";
const x03_100 = "policy-slot:x\\x03.js:100";
const x03_101 = "crumb-track:x\\x03.js:101";
const x03_102 = "rewrite-shard:x\\x03.js:102";
const x03_103 = "trail-cell:x\\x03.js:103";
const x03_104 = "route-echo:x\\x03.js:104";
const x03_105 = "path-lane:x\\x03.js:105";
const x03_106 = "view-pin:x\\x03.js:106";
const x03_107 = "scroll-mark:x\\x03.js:107";
const x03_108 = "policy-slot:x\\x03.js:108";
const x03_109 = "crumb-track:x\\x03.js:109";
const x03_110 = "rewrite-shard:x\\x03.js:110";
const x03_111 = "trail-cell:x\\x03.js:111";
const x03_112 = "route-echo:x\\x03.js:112";
const x03_113 = "path-lane:x\\x03.js:113";
const x03_114 = "view-pin:x\\x03.js:114";
const x03_115 = "scroll-mark:x\\x03.js:115";
const x03_116 = "policy-slot:x\\x03.js:116";
const x03_117 = "crumb-track:x\\x03.js:117";
const x03_118 = "rewrite-shard:x\\x03.js:118";
const x03_119 = "trail-cell:x\\x03.js:119";
const x03_120 = "route-echo:x\\x03.js:120";
const x03_121 = "path-lane:x\\x03.js:121";
const x03_122 = "view-pin:x\\x03.js:122";
const x03_123 = "scroll-mark:x\\x03.js:123";
const x03_124 = "policy-slot:x\\x03.js:124";
const x03_125 = "crumb-track:x\\x03.js:125";
const x03_126 = "rewrite-shard:x\\x03.js:126";
const x03_127 = "trail-cell:x\\x03.js:127";
const x03_128 = "route-echo:x\\x03.js:128";
const x03_129 = "path-lane:x\\x03.js:129";
const x03_130 = "view-pin:x\\x03.js:130";
const x03_131 = "scroll-mark:x\\x03.js:131";
const x03_132 = "policy-slot:x\\x03.js:132";
const x03_133 = "crumb-track:x\\x03.js:133";
const x03_134 = "rewrite-shard:x\\x03.js:134";
const x03_135 = "trail-cell:x\\x03.js:135";
const x03_136 = "route-echo:x\\x03.js:136";
const x03_137 = "path-lane:x\\x03.js:137";
const x03_138 = "view-pin:x\\x03.js:138";
const x03_139 = "scroll-mark:x\\x03.js:139";
const x03_140 = "policy-slot:x\\x03.js:140";
const x03_141 = "crumb-track:x\\x03.js:141";
const x03_142 = "rewrite-shard:x\\x03.js:142";
const x03_143 = "trail-cell:x\\x03.js:143";
const x03_144 = "route-echo:x\\x03.js:144";
const x03_145 = "path-lane:x\\x03.js:145";
const x03_146 = "view-pin:x\\x03.js:146";
const x03_147 = "scroll-mark:x\\x03.js:147";
const x03_148 = "policy-slot:x\\x03.js:148";
