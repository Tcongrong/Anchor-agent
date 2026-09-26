import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 35,
  salt: 'r:0z:trail',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 15,
  mask: 4112119773
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/35/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'detailed', y: 'shadow', n: 8 },
    { k: 's', i: 2, v: '111111', y: '111111', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '8', y: '8', n: 1 }
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
const x35_0 = "route-echo:x\\x35.js:000";
const x35_1 = "path-lane:x\\x35.js:001";
const x35_2 = "view-pin:x\\x35.js:002";
const x35_3 = "scroll-mark:x\\x35.js:003";
const x35_4 = "policy-slot:x\\x35.js:004";
const x35_5 = "crumb-track:x\\x35.js:005";
const x35_6 = "rewrite-shard:x\\x35.js:006";
const x35_7 = "trail-cell:x\\x35.js:007";
const x35_8 = "route-echo:x\\x35.js:008";
const x35_9 = "path-lane:x\\x35.js:009";
const x35_10 = "view-pin:x\\x35.js:010";
const x35_11 = "scroll-mark:x\\x35.js:011";
const x35_12 = "policy-slot:x\\x35.js:012";
const x35_13 = "crumb-track:x\\x35.js:013";
const x35_14 = "rewrite-shard:x\\x35.js:014";
const x35_15 = "trail-cell:x\\x35.js:015";
const x35_16 = "route-echo:x\\x35.js:016";
const x35_17 = "path-lane:x\\x35.js:017";
const x35_18 = "view-pin:x\\x35.js:018";
const x35_19 = "scroll-mark:x\\x35.js:019";
const x35_20 = "policy-slot:x\\x35.js:020";
const x35_21 = "crumb-track:x\\x35.js:021";
const x35_22 = "rewrite-shard:x\\x35.js:022";
const x35_23 = "trail-cell:x\\x35.js:023";
const x35_24 = "route-echo:x\\x35.js:024";
const x35_25 = "path-lane:x\\x35.js:025";
const x35_26 = "view-pin:x\\x35.js:026";
const x35_27 = "scroll-mark:x\\x35.js:027";
const x35_28 = "policy-slot:x\\x35.js:028";
const x35_29 = "crumb-track:x\\x35.js:029";
const x35_30 = "rewrite-shard:x\\x35.js:030";
const x35_31 = "trail-cell:x\\x35.js:031";
const x35_32 = "route-echo:x\\x35.js:032";
const x35_33 = "path-lane:x\\x35.js:033";
const x35_34 = "view-pin:x\\x35.js:034";
const x35_35 = "scroll-mark:x\\x35.js:035";
const x35_36 = "policy-slot:x\\x35.js:036";
const x35_37 = "crumb-track:x\\x35.js:037";
const x35_38 = "rewrite-shard:x\\x35.js:038";
const x35_39 = "trail-cell:x\\x35.js:039";
const x35_40 = "route-echo:x\\x35.js:040";
const x35_41 = "path-lane:x\\x35.js:041";
const x35_42 = "view-pin:x\\x35.js:042";
const x35_43 = "scroll-mark:x\\x35.js:043";
const x35_44 = "policy-slot:x\\x35.js:044";
const x35_45 = "crumb-track:x\\x35.js:045";
const x35_46 = "rewrite-shard:x\\x35.js:046";
const x35_47 = "trail-cell:x\\x35.js:047";
const x35_48 = "route-echo:x\\x35.js:048";
const x35_49 = "path-lane:x\\x35.js:049";
const x35_50 = "view-pin:x\\x35.js:050";
const x35_51 = "scroll-mark:x\\x35.js:051";
const x35_52 = "policy-slot:x\\x35.js:052";
const x35_53 = "crumb-track:x\\x35.js:053";
const x35_54 = "rewrite-shard:x\\x35.js:054";
const x35_55 = "trail-cell:x\\x35.js:055";
const x35_56 = "route-echo:x\\x35.js:056";
const x35_57 = "path-lane:x\\x35.js:057";
const x35_58 = "view-pin:x\\x35.js:058";
const x35_59 = "scroll-mark:x\\x35.js:059";
const x35_60 = "policy-slot:x\\x35.js:060";
const x35_61 = "crumb-track:x\\x35.js:061";
const x35_62 = "rewrite-shard:x\\x35.js:062";
const x35_63 = "trail-cell:x\\x35.js:063";
const x35_64 = "route-echo:x\\x35.js:064";
const x35_65 = "path-lane:x\\x35.js:065";
const x35_66 = "view-pin:x\\x35.js:066";
const x35_67 = "scroll-mark:x\\x35.js:067";
const x35_68 = "policy-slot:x\\x35.js:068";
const x35_69 = "crumb-track:x\\x35.js:069";
const x35_70 = "rewrite-shard:x\\x35.js:070";
const x35_71 = "trail-cell:x\\x35.js:071";
const x35_72 = "route-echo:x\\x35.js:072";
const x35_73 = "path-lane:x\\x35.js:073";
const x35_74 = "view-pin:x\\x35.js:074";
const x35_75 = "scroll-mark:x\\x35.js:075";
const x35_76 = "policy-slot:x\\x35.js:076";
const x35_77 = "crumb-track:x\\x35.js:077";
const x35_78 = "rewrite-shard:x\\x35.js:078";
const x35_79 = "trail-cell:x\\x35.js:079";
const x35_80 = "route-echo:x\\x35.js:080";
const x35_81 = "path-lane:x\\x35.js:081";
const x35_82 = "view-pin:x\\x35.js:082";
const x35_83 = "scroll-mark:x\\x35.js:083";
const x35_84 = "policy-slot:x\\x35.js:084";
const x35_85 = "crumb-track:x\\x35.js:085";
const x35_86 = "rewrite-shard:x\\x35.js:086";
const x35_87 = "trail-cell:x\\x35.js:087";
const x35_88 = "route-echo:x\\x35.js:088";
const x35_89 = "path-lane:x\\x35.js:089";
const x35_90 = "view-pin:x\\x35.js:090";
const x35_91 = "scroll-mark:x\\x35.js:091";
const x35_92 = "policy-slot:x\\x35.js:092";
const x35_93 = "crumb-track:x\\x35.js:093";
const x35_94 = "rewrite-shard:x\\x35.js:094";
const x35_95 = "trail-cell:x\\x35.js:095";
const x35_96 = "route-echo:x\\x35.js:096";
const x35_97 = "path-lane:x\\x35.js:097";
const x35_98 = "view-pin:x\\x35.js:098";
const x35_99 = "scroll-mark:x\\x35.js:099";
const x35_100 = "policy-slot:x\\x35.js:100";
const x35_101 = "crumb-track:x\\x35.js:101";
const x35_102 = "rewrite-shard:x\\x35.js:102";
const x35_103 = "trail-cell:x\\x35.js:103";
const x35_104 = "route-echo:x\\x35.js:104";
const x35_105 = "path-lane:x\\x35.js:105";
const x35_106 = "view-pin:x\\x35.js:106";
const x35_107 = "scroll-mark:x\\x35.js:107";
const x35_108 = "policy-slot:x\\x35.js:108";
const x35_109 = "crumb-track:x\\x35.js:109";
const x35_110 = "rewrite-shard:x\\x35.js:110";
const x35_111 = "trail-cell:x\\x35.js:111";
const x35_112 = "route-echo:x\\x35.js:112";
const x35_113 = "path-lane:x\\x35.js:113";
const x35_114 = "view-pin:x\\x35.js:114";
const x35_115 = "scroll-mark:x\\x35.js:115";
const x35_116 = "policy-slot:x\\x35.js:116";
const x35_117 = "crumb-track:x\\x35.js:117";
const x35_118 = "rewrite-shard:x\\x35.js:118";
const x35_119 = "trail-cell:x\\x35.js:119";
const x35_120 = "route-echo:x\\x35.js:120";
const x35_121 = "path-lane:x\\x35.js:121";
const x35_122 = "view-pin:x\\x35.js:122";
const x35_123 = "scroll-mark:x\\x35.js:123";
const x35_124 = "policy-slot:x\\x35.js:124";
const x35_125 = "crumb-track:x\\x35.js:125";
const x35_126 = "rewrite-shard:x\\x35.js:126";
const x35_127 = "trail-cell:x\\x35.js:127";
const x35_128 = "route-echo:x\\x35.js:128";
const x35_129 = "path-lane:x\\x35.js:129";
const x35_130 = "view-pin:x\\x35.js:130";
const x35_131 = "scroll-mark:x\\x35.js:131";
const x35_132 = "policy-slot:x\\x35.js:132";
const x35_133 = "crumb-track:x\\x35.js:133";
const x35_134 = "rewrite-shard:x\\x35.js:134";
const x35_135 = "trail-cell:x\\x35.js:135";
const x35_136 = "route-echo:x\\x35.js:136";
const x35_137 = "path-lane:x\\x35.js:137";
const x35_138 = "view-pin:x\\x35.js:138";
const x35_139 = "scroll-mark:x\\x35.js:139";
const x35_140 = "policy-slot:x\\x35.js:140";
const x35_141 = "crumb-track:x\\x35.js:141";
const x35_142 = "rewrite-shard:x\\x35.js:142";
const x35_143 = "trail-cell:x\\x35.js:143";
const x35_144 = "route-echo:x\\x35.js:144";
const x35_145 = "path-lane:x\\x35.js:145";
const x35_146 = "view-pin:x\\x35.js:146";
const x35_147 = "scroll-mark:x\\x35.js:147";
const x35_148 = "policy-slot:x\\x35.js:148";
