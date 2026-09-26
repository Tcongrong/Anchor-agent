import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 2,
  salt: 'r:02:trail',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 2415085580
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/2/shadow', y: 'shadow', n: 15 },
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
const x02_0 = "route-echo:x\\x02.js:000";
const x02_1 = "path-lane:x\\x02.js:001";
const x02_2 = "view-pin:x\\x02.js:002";
const x02_3 = "scroll-mark:x\\x02.js:003";
const x02_4 = "policy-slot:x\\x02.js:004";
const x02_5 = "crumb-track:x\\x02.js:005";
const x02_6 = "rewrite-shard:x\\x02.js:006";
const x02_7 = "trail-cell:x\\x02.js:007";
const x02_8 = "route-echo:x\\x02.js:008";
const x02_9 = "path-lane:x\\x02.js:009";
const x02_10 = "view-pin:x\\x02.js:010";
const x02_11 = "scroll-mark:x\\x02.js:011";
const x02_12 = "policy-slot:x\\x02.js:012";
const x02_13 = "crumb-track:x\\x02.js:013";
const x02_14 = "rewrite-shard:x\\x02.js:014";
const x02_15 = "trail-cell:x\\x02.js:015";
const x02_16 = "route-echo:x\\x02.js:016";
const x02_17 = "path-lane:x\\x02.js:017";
const x02_18 = "view-pin:x\\x02.js:018";
const x02_19 = "scroll-mark:x\\x02.js:019";
const x02_20 = "policy-slot:x\\x02.js:020";
const x02_21 = "crumb-track:x\\x02.js:021";
const x02_22 = "rewrite-shard:x\\x02.js:022";
const x02_23 = "trail-cell:x\\x02.js:023";
const x02_24 = "route-echo:x\\x02.js:024";
const x02_25 = "path-lane:x\\x02.js:025";
const x02_26 = "view-pin:x\\x02.js:026";
const x02_27 = "scroll-mark:x\\x02.js:027";
const x02_28 = "policy-slot:x\\x02.js:028";
const x02_29 = "crumb-track:x\\x02.js:029";
const x02_30 = "rewrite-shard:x\\x02.js:030";
const x02_31 = "trail-cell:x\\x02.js:031";
const x02_32 = "route-echo:x\\x02.js:032";
const x02_33 = "path-lane:x\\x02.js:033";
const x02_34 = "view-pin:x\\x02.js:034";
const x02_35 = "scroll-mark:x\\x02.js:035";
const x02_36 = "policy-slot:x\\x02.js:036";
const x02_37 = "crumb-track:x\\x02.js:037";
const x02_38 = "rewrite-shard:x\\x02.js:038";
const x02_39 = "trail-cell:x\\x02.js:039";
const x02_40 = "route-echo:x\\x02.js:040";
const x02_41 = "path-lane:x\\x02.js:041";
const x02_42 = "view-pin:x\\x02.js:042";
const x02_43 = "scroll-mark:x\\x02.js:043";
const x02_44 = "policy-slot:x\\x02.js:044";
const x02_45 = "crumb-track:x\\x02.js:045";
const x02_46 = "rewrite-shard:x\\x02.js:046";
const x02_47 = "trail-cell:x\\x02.js:047";
const x02_48 = "route-echo:x\\x02.js:048";
const x02_49 = "path-lane:x\\x02.js:049";
const x02_50 = "view-pin:x\\x02.js:050";
const x02_51 = "scroll-mark:x\\x02.js:051";
const x02_52 = "policy-slot:x\\x02.js:052";
const x02_53 = "crumb-track:x\\x02.js:053";
const x02_54 = "rewrite-shard:x\\x02.js:054";
const x02_55 = "trail-cell:x\\x02.js:055";
const x02_56 = "route-echo:x\\x02.js:056";
const x02_57 = "path-lane:x\\x02.js:057";
const x02_58 = "view-pin:x\\x02.js:058";
const x02_59 = "scroll-mark:x\\x02.js:059";
const x02_60 = "policy-slot:x\\x02.js:060";
const x02_61 = "crumb-track:x\\x02.js:061";
const x02_62 = "rewrite-shard:x\\x02.js:062";
const x02_63 = "trail-cell:x\\x02.js:063";
const x02_64 = "route-echo:x\\x02.js:064";
const x02_65 = "path-lane:x\\x02.js:065";
const x02_66 = "view-pin:x\\x02.js:066";
const x02_67 = "scroll-mark:x\\x02.js:067";
const x02_68 = "policy-slot:x\\x02.js:068";
const x02_69 = "crumb-track:x\\x02.js:069";
const x02_70 = "rewrite-shard:x\\x02.js:070";
const x02_71 = "trail-cell:x\\x02.js:071";
const x02_72 = "route-echo:x\\x02.js:072";
const x02_73 = "path-lane:x\\x02.js:073";
const x02_74 = "view-pin:x\\x02.js:074";
const x02_75 = "scroll-mark:x\\x02.js:075";
const x02_76 = "policy-slot:x\\x02.js:076";
const x02_77 = "crumb-track:x\\x02.js:077";
const x02_78 = "rewrite-shard:x\\x02.js:078";
const x02_79 = "trail-cell:x\\x02.js:079";
const x02_80 = "route-echo:x\\x02.js:080";
const x02_81 = "path-lane:x\\x02.js:081";
const x02_82 = "view-pin:x\\x02.js:082";
const x02_83 = "scroll-mark:x\\x02.js:083";
const x02_84 = "policy-slot:x\\x02.js:084";
const x02_85 = "crumb-track:x\\x02.js:085";
const x02_86 = "rewrite-shard:x\\x02.js:086";
const x02_87 = "trail-cell:x\\x02.js:087";
const x02_88 = "route-echo:x\\x02.js:088";
const x02_89 = "path-lane:x\\x02.js:089";
const x02_90 = "view-pin:x\\x02.js:090";
const x02_91 = "scroll-mark:x\\x02.js:091";
const x02_92 = "policy-slot:x\\x02.js:092";
const x02_93 = "crumb-track:x\\x02.js:093";
const x02_94 = "rewrite-shard:x\\x02.js:094";
const x02_95 = "trail-cell:x\\x02.js:095";
const x02_96 = "route-echo:x\\x02.js:096";
const x02_97 = "path-lane:x\\x02.js:097";
const x02_98 = "view-pin:x\\x02.js:098";
const x02_99 = "scroll-mark:x\\x02.js:099";
const x02_100 = "policy-slot:x\\x02.js:100";
const x02_101 = "crumb-track:x\\x02.js:101";
const x02_102 = "rewrite-shard:x\\x02.js:102";
const x02_103 = "trail-cell:x\\x02.js:103";
const x02_104 = "route-echo:x\\x02.js:104";
const x02_105 = "path-lane:x\\x02.js:105";
const x02_106 = "view-pin:x\\x02.js:106";
const x02_107 = "scroll-mark:x\\x02.js:107";
const x02_108 = "policy-slot:x\\x02.js:108";
const x02_109 = "crumb-track:x\\x02.js:109";
const x02_110 = "rewrite-shard:x\\x02.js:110";
const x02_111 = "trail-cell:x\\x02.js:111";
const x02_112 = "route-echo:x\\x02.js:112";
const x02_113 = "path-lane:x\\x02.js:113";
const x02_114 = "view-pin:x\\x02.js:114";
const x02_115 = "scroll-mark:x\\x02.js:115";
const x02_116 = "policy-slot:x\\x02.js:116";
const x02_117 = "crumb-track:x\\x02.js:117";
const x02_118 = "rewrite-shard:x\\x02.js:118";
const x02_119 = "trail-cell:x\\x02.js:119";
const x02_120 = "route-echo:x\\x02.js:120";
const x02_121 = "path-lane:x\\x02.js:121";
const x02_122 = "view-pin:x\\x02.js:122";
const x02_123 = "scroll-mark:x\\x02.js:123";
const x02_124 = "policy-slot:x\\x02.js:124";
const x02_125 = "crumb-track:x\\x02.js:125";
const x02_126 = "rewrite-shard:x\\x02.js:126";
const x02_127 = "trail-cell:x\\x02.js:127";
const x02_128 = "route-echo:x\\x02.js:128";
const x02_129 = "path-lane:x\\x02.js:129";
const x02_130 = "view-pin:x\\x02.js:130";
const x02_131 = "scroll-mark:x\\x02.js:131";
const x02_132 = "policy-slot:x\\x02.js:132";
const x02_133 = "crumb-track:x\\x02.js:133";
const x02_134 = "rewrite-shard:x\\x02.js:134";
const x02_135 = "trail-cell:x\\x02.js:135";
const x02_136 = "route-echo:x\\x02.js:136";
const x02_137 = "path-lane:x\\x02.js:137";
const x02_138 = "view-pin:x\\x02.js:138";
const x02_139 = "scroll-mark:x\\x02.js:139";
const x02_140 = "policy-slot:x\\x02.js:140";
const x02_141 = "crumb-track:x\\x02.js:141";
const x02_142 = "rewrite-shard:x\\x02.js:142";
const x02_143 = "trail-cell:x\\x02.js:143";
const x02_144 = "route-echo:x\\x02.js:144";
const x02_145 = "path-lane:x\\x02.js:145";
const x02_146 = "view-pin:x\\x02.js:146";
const x02_147 = "scroll-mark:x\\x02.js:147";
const x02_148 = "policy-slot:x\\x02.js:148";
