import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 39,
  salt: 'r:13:trail',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2063',
  shift: 7,
  mask: 1844960929
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/39/shadow', y: 'shadow', n: 16 },
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
const x39_0 = "route-echo:x\\x39.js:000";
const x39_1 = "path-lane:x\\x39.js:001";
const x39_2 = "view-pin:x\\x39.js:002";
const x39_3 = "scroll-mark:x\\x39.js:003";
const x39_4 = "policy-slot:x\\x39.js:004";
const x39_5 = "crumb-track:x\\x39.js:005";
const x39_6 = "rewrite-shard:x\\x39.js:006";
const x39_7 = "trail-cell:x\\x39.js:007";
const x39_8 = "route-echo:x\\x39.js:008";
const x39_9 = "path-lane:x\\x39.js:009";
const x39_10 = "view-pin:x\\x39.js:010";
const x39_11 = "scroll-mark:x\\x39.js:011";
const x39_12 = "policy-slot:x\\x39.js:012";
const x39_13 = "crumb-track:x\\x39.js:013";
const x39_14 = "rewrite-shard:x\\x39.js:014";
const x39_15 = "trail-cell:x\\x39.js:015";
const x39_16 = "route-echo:x\\x39.js:016";
const x39_17 = "path-lane:x\\x39.js:017";
const x39_18 = "view-pin:x\\x39.js:018";
const x39_19 = "scroll-mark:x\\x39.js:019";
const x39_20 = "policy-slot:x\\x39.js:020";
const x39_21 = "crumb-track:x\\x39.js:021";
const x39_22 = "rewrite-shard:x\\x39.js:022";
const x39_23 = "trail-cell:x\\x39.js:023";
const x39_24 = "route-echo:x\\x39.js:024";
const x39_25 = "path-lane:x\\x39.js:025";
const x39_26 = "view-pin:x\\x39.js:026";
const x39_27 = "scroll-mark:x\\x39.js:027";
const x39_28 = "policy-slot:x\\x39.js:028";
const x39_29 = "crumb-track:x\\x39.js:029";
const x39_30 = "rewrite-shard:x\\x39.js:030";
const x39_31 = "trail-cell:x\\x39.js:031";
const x39_32 = "route-echo:x\\x39.js:032";
const x39_33 = "path-lane:x\\x39.js:033";
const x39_34 = "view-pin:x\\x39.js:034";
const x39_35 = "scroll-mark:x\\x39.js:035";
const x39_36 = "policy-slot:x\\x39.js:036";
const x39_37 = "crumb-track:x\\x39.js:037";
const x39_38 = "rewrite-shard:x\\x39.js:038";
const x39_39 = "trail-cell:x\\x39.js:039";
const x39_40 = "route-echo:x\\x39.js:040";
const x39_41 = "path-lane:x\\x39.js:041";
const x39_42 = "view-pin:x\\x39.js:042";
const x39_43 = "scroll-mark:x\\x39.js:043";
const x39_44 = "policy-slot:x\\x39.js:044";
const x39_45 = "crumb-track:x\\x39.js:045";
const x39_46 = "rewrite-shard:x\\x39.js:046";
const x39_47 = "trail-cell:x\\x39.js:047";
const x39_48 = "route-echo:x\\x39.js:048";
const x39_49 = "path-lane:x\\x39.js:049";
const x39_50 = "view-pin:x\\x39.js:050";
const x39_51 = "scroll-mark:x\\x39.js:051";
const x39_52 = "policy-slot:x\\x39.js:052";
const x39_53 = "crumb-track:x\\x39.js:053";
const x39_54 = "rewrite-shard:x\\x39.js:054";
const x39_55 = "trail-cell:x\\x39.js:055";
const x39_56 = "route-echo:x\\x39.js:056";
const x39_57 = "path-lane:x\\x39.js:057";
const x39_58 = "view-pin:x\\x39.js:058";
const x39_59 = "scroll-mark:x\\x39.js:059";
const x39_60 = "policy-slot:x\\x39.js:060";
const x39_61 = "crumb-track:x\\x39.js:061";
const x39_62 = "rewrite-shard:x\\x39.js:062";
const x39_63 = "trail-cell:x\\x39.js:063";
const x39_64 = "route-echo:x\\x39.js:064";
const x39_65 = "path-lane:x\\x39.js:065";
const x39_66 = "view-pin:x\\x39.js:066";
const x39_67 = "scroll-mark:x\\x39.js:067";
const x39_68 = "policy-slot:x\\x39.js:068";
const x39_69 = "crumb-track:x\\x39.js:069";
const x39_70 = "rewrite-shard:x\\x39.js:070";
const x39_71 = "trail-cell:x\\x39.js:071";
const x39_72 = "route-echo:x\\x39.js:072";
const x39_73 = "path-lane:x\\x39.js:073";
const x39_74 = "view-pin:x\\x39.js:074";
const x39_75 = "scroll-mark:x\\x39.js:075";
const x39_76 = "policy-slot:x\\x39.js:076";
const x39_77 = "crumb-track:x\\x39.js:077";
const x39_78 = "rewrite-shard:x\\x39.js:078";
const x39_79 = "trail-cell:x\\x39.js:079";
const x39_80 = "route-echo:x\\x39.js:080";
const x39_81 = "path-lane:x\\x39.js:081";
const x39_82 = "view-pin:x\\x39.js:082";
const x39_83 = "scroll-mark:x\\x39.js:083";
const x39_84 = "policy-slot:x\\x39.js:084";
const x39_85 = "crumb-track:x\\x39.js:085";
const x39_86 = "rewrite-shard:x\\x39.js:086";
const x39_87 = "trail-cell:x\\x39.js:087";
const x39_88 = "route-echo:x\\x39.js:088";
const x39_89 = "path-lane:x\\x39.js:089";
const x39_90 = "view-pin:x\\x39.js:090";
const x39_91 = "scroll-mark:x\\x39.js:091";
const x39_92 = "policy-slot:x\\x39.js:092";
const x39_93 = "crumb-track:x\\x39.js:093";
const x39_94 = "rewrite-shard:x\\x39.js:094";
const x39_95 = "trail-cell:x\\x39.js:095";
const x39_96 = "route-echo:x\\x39.js:096";
const x39_97 = "path-lane:x\\x39.js:097";
const x39_98 = "view-pin:x\\x39.js:098";
const x39_99 = "scroll-mark:x\\x39.js:099";
const x39_100 = "policy-slot:x\\x39.js:100";
const x39_101 = "crumb-track:x\\x39.js:101";
const x39_102 = "rewrite-shard:x\\x39.js:102";
const x39_103 = "trail-cell:x\\x39.js:103";
const x39_104 = "route-echo:x\\x39.js:104";
const x39_105 = "path-lane:x\\x39.js:105";
const x39_106 = "view-pin:x\\x39.js:106";
const x39_107 = "scroll-mark:x\\x39.js:107";
const x39_108 = "policy-slot:x\\x39.js:108";
const x39_109 = "crumb-track:x\\x39.js:109";
const x39_110 = "rewrite-shard:x\\x39.js:110";
const x39_111 = "trail-cell:x\\x39.js:111";
const x39_112 = "route-echo:x\\x39.js:112";
const x39_113 = "path-lane:x\\x39.js:113";
const x39_114 = "view-pin:x\\x39.js:114";
const x39_115 = "scroll-mark:x\\x39.js:115";
const x39_116 = "policy-slot:x\\x39.js:116";
const x39_117 = "crumb-track:x\\x39.js:117";
const x39_118 = "rewrite-shard:x\\x39.js:118";
const x39_119 = "trail-cell:x\\x39.js:119";
const x39_120 = "route-echo:x\\x39.js:120";
const x39_121 = "path-lane:x\\x39.js:121";
const x39_122 = "view-pin:x\\x39.js:122";
const x39_123 = "scroll-mark:x\\x39.js:123";
const x39_124 = "policy-slot:x\\x39.js:124";
const x39_125 = "crumb-track:x\\x39.js:125";
const x39_126 = "rewrite-shard:x\\x39.js:126";
const x39_127 = "trail-cell:x\\x39.js:127";
const x39_128 = "route-echo:x\\x39.js:128";
const x39_129 = "path-lane:x\\x39.js:129";
const x39_130 = "view-pin:x\\x39.js:130";
const x39_131 = "scroll-mark:x\\x39.js:131";
const x39_132 = "policy-slot:x\\x39.js:132";
const x39_133 = "crumb-track:x\\x39.js:133";
const x39_134 = "rewrite-shard:x\\x39.js:134";
const x39_135 = "trail-cell:x\\x39.js:135";
const x39_136 = "route-echo:x\\x39.js:136";
const x39_137 = "path-lane:x\\x39.js:137";
const x39_138 = "view-pin:x\\x39.js:138";
const x39_139 = "scroll-mark:x\\x39.js:139";
const x39_140 = "policy-slot:x\\x39.js:140";
const x39_141 = "crumb-track:x\\x39.js:141";
const x39_142 = "rewrite-shard:x\\x39.js:142";
const x39_143 = "trail-cell:x\\x39.js:143";
const x39_144 = "route-echo:x\\x39.js:144";
const x39_145 = "path-lane:x\\x39.js:145";
const x39_146 = "view-pin:x\\x39.js:146";
const x39_147 = "scroll-mark:x\\x39.js:147";
const x39_148 = "policy-slot:x\\x39.js:148";
