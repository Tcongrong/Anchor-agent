import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 24,
  salt: 'r:0o:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 4,
  mask: 683130178
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/24/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '6', y: '6', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 12) + '/' + (cfg.slot + 5).toString(36) + 'r0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ path: tuple[0].v, policy: tuple[1].v, scroll: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x24_0 = "route-echo:x\\x24.js:000";
const x24_1 = "path-lane:x\\x24.js:001";
const x24_2 = "view-pin:x\\x24.js:002";
const x24_3 = "scroll-mark:x\\x24.js:003";
const x24_4 = "policy-slot:x\\x24.js:004";
const x24_5 = "crumb-track:x\\x24.js:005";
const x24_6 = "rewrite-shard:x\\x24.js:006";
const x24_7 = "trail-cell:x\\x24.js:007";
const x24_8 = "route-echo:x\\x24.js:008";
const x24_9 = "path-lane:x\\x24.js:009";
const x24_10 = "view-pin:x\\x24.js:010";
const x24_11 = "scroll-mark:x\\x24.js:011";
const x24_12 = "policy-slot:x\\x24.js:012";
const x24_13 = "crumb-track:x\\x24.js:013";
const x24_14 = "rewrite-shard:x\\x24.js:014";
const x24_15 = "trail-cell:x\\x24.js:015";
const x24_16 = "route-echo:x\\x24.js:016";
const x24_17 = "path-lane:x\\x24.js:017";
const x24_18 = "view-pin:x\\x24.js:018";
const x24_19 = "scroll-mark:x\\x24.js:019";
const x24_20 = "policy-slot:x\\x24.js:020";
const x24_21 = "crumb-track:x\\x24.js:021";
const x24_22 = "rewrite-shard:x\\x24.js:022";
const x24_23 = "trail-cell:x\\x24.js:023";
const x24_24 = "route-echo:x\\x24.js:024";
const x24_25 = "path-lane:x\\x24.js:025";
const x24_26 = "view-pin:x\\x24.js:026";
const x24_27 = "scroll-mark:x\\x24.js:027";
const x24_28 = "policy-slot:x\\x24.js:028";
const x24_29 = "crumb-track:x\\x24.js:029";
const x24_30 = "rewrite-shard:x\\x24.js:030";
const x24_31 = "trail-cell:x\\x24.js:031";
const x24_32 = "route-echo:x\\x24.js:032";
const x24_33 = "path-lane:x\\x24.js:033";
const x24_34 = "view-pin:x\\x24.js:034";
const x24_35 = "scroll-mark:x\\x24.js:035";
const x24_36 = "policy-slot:x\\x24.js:036";
const x24_37 = "crumb-track:x\\x24.js:037";
const x24_38 = "rewrite-shard:x\\x24.js:038";
const x24_39 = "trail-cell:x\\x24.js:039";
const x24_40 = "route-echo:x\\x24.js:040";
const x24_41 = "path-lane:x\\x24.js:041";
const x24_42 = "view-pin:x\\x24.js:042";
const x24_43 = "scroll-mark:x\\x24.js:043";
const x24_44 = "policy-slot:x\\x24.js:044";
const x24_45 = "crumb-track:x\\x24.js:045";
const x24_46 = "rewrite-shard:x\\x24.js:046";
const x24_47 = "trail-cell:x\\x24.js:047";
const x24_48 = "route-echo:x\\x24.js:048";
const x24_49 = "path-lane:x\\x24.js:049";
const x24_50 = "view-pin:x\\x24.js:050";
const x24_51 = "scroll-mark:x\\x24.js:051";
const x24_52 = "policy-slot:x\\x24.js:052";
const x24_53 = "crumb-track:x\\x24.js:053";
const x24_54 = "rewrite-shard:x\\x24.js:054";
const x24_55 = "trail-cell:x\\x24.js:055";
const x24_56 = "route-echo:x\\x24.js:056";
const x24_57 = "path-lane:x\\x24.js:057";
const x24_58 = "view-pin:x\\x24.js:058";
const x24_59 = "scroll-mark:x\\x24.js:059";
const x24_60 = "policy-slot:x\\x24.js:060";
const x24_61 = "crumb-track:x\\x24.js:061";
const x24_62 = "rewrite-shard:x\\x24.js:062";
const x24_63 = "trail-cell:x\\x24.js:063";
const x24_64 = "route-echo:x\\x24.js:064";
const x24_65 = "path-lane:x\\x24.js:065";
const x24_66 = "view-pin:x\\x24.js:066";
const x24_67 = "scroll-mark:x\\x24.js:067";
const x24_68 = "policy-slot:x\\x24.js:068";
const x24_69 = "crumb-track:x\\x24.js:069";
const x24_70 = "rewrite-shard:x\\x24.js:070";
const x24_71 = "trail-cell:x\\x24.js:071";
const x24_72 = "route-echo:x\\x24.js:072";
const x24_73 = "path-lane:x\\x24.js:073";
const x24_74 = "view-pin:x\\x24.js:074";
const x24_75 = "scroll-mark:x\\x24.js:075";
const x24_76 = "policy-slot:x\\x24.js:076";
const x24_77 = "crumb-track:x\\x24.js:077";
const x24_78 = "rewrite-shard:x\\x24.js:078";
const x24_79 = "trail-cell:x\\x24.js:079";
const x24_80 = "route-echo:x\\x24.js:080";
const x24_81 = "path-lane:x\\x24.js:081";
const x24_82 = "view-pin:x\\x24.js:082";
const x24_83 = "scroll-mark:x\\x24.js:083";
const x24_84 = "policy-slot:x\\x24.js:084";
const x24_85 = "crumb-track:x\\x24.js:085";
const x24_86 = "rewrite-shard:x\\x24.js:086";
const x24_87 = "trail-cell:x\\x24.js:087";
const x24_88 = "route-echo:x\\x24.js:088";
const x24_89 = "path-lane:x\\x24.js:089";
const x24_90 = "view-pin:x\\x24.js:090";
const x24_91 = "scroll-mark:x\\x24.js:091";
const x24_92 = "policy-slot:x\\x24.js:092";
const x24_93 = "crumb-track:x\\x24.js:093";
const x24_94 = "rewrite-shard:x\\x24.js:094";
const x24_95 = "trail-cell:x\\x24.js:095";
const x24_96 = "route-echo:x\\x24.js:096";
const x24_97 = "path-lane:x\\x24.js:097";
const x24_98 = "view-pin:x\\x24.js:098";
const x24_99 = "scroll-mark:x\\x24.js:099";
const x24_100 = "policy-slot:x\\x24.js:100";
const x24_101 = "crumb-track:x\\x24.js:101";
const x24_102 = "rewrite-shard:x\\x24.js:102";
const x24_103 = "trail-cell:x\\x24.js:103";
const x24_104 = "route-echo:x\\x24.js:104";
const x24_105 = "path-lane:x\\x24.js:105";
const x24_106 = "view-pin:x\\x24.js:106";
const x24_107 = "scroll-mark:x\\x24.js:107";
const x24_108 = "policy-slot:x\\x24.js:108";
const x24_109 = "crumb-track:x\\x24.js:109";
const x24_110 = "rewrite-shard:x\\x24.js:110";
const x24_111 = "trail-cell:x\\x24.js:111";
const x24_112 = "route-echo:x\\x24.js:112";
const x24_113 = "path-lane:x\\x24.js:113";
const x24_114 = "view-pin:x\\x24.js:114";
const x24_115 = "scroll-mark:x\\x24.js:115";
const x24_116 = "policy-slot:x\\x24.js:116";
const x24_117 = "crumb-track:x\\x24.js:117";
const x24_118 = "rewrite-shard:x\\x24.js:118";
const x24_119 = "trail-cell:x\\x24.js:119";
const x24_120 = "route-echo:x\\x24.js:120";
const x24_121 = "path-lane:x\\x24.js:121";
const x24_122 = "view-pin:x\\x24.js:122";
const x24_123 = "scroll-mark:x\\x24.js:123";
const x24_124 = "policy-slot:x\\x24.js:124";
const x24_125 = "crumb-track:x\\x24.js:125";
const x24_126 = "rewrite-shard:x\\x24.js:126";
const x24_127 = "trail-cell:x\\x24.js:127";
const x24_128 = "route-echo:x\\x24.js:128";
const x24_129 = "path-lane:x\\x24.js:129";
const x24_130 = "view-pin:x\\x24.js:130";
const x24_131 = "scroll-mark:x\\x24.js:131";
const x24_132 = "policy-slot:x\\x24.js:132";
const x24_133 = "crumb-track:x\\x24.js:133";
const x24_134 = "rewrite-shard:x\\x24.js:134";
const x24_135 = "trail-cell:x\\x24.js:135";
const x24_136 = "route-echo:x\\x24.js:136";
const x24_137 = "path-lane:x\\x24.js:137";
const x24_138 = "view-pin:x\\x24.js:138";
const x24_139 = "scroll-mark:x\\x24.js:139";
const x24_140 = "policy-slot:x\\x24.js:140";
const x24_141 = "crumb-track:x\\x24.js:141";
const x24_142 = "rewrite-shard:x\\x24.js:142";
const x24_143 = "trail-cell:x\\x24.js:143";
const x24_144 = "route-echo:x\\x24.js:144";
const x24_145 = "path-lane:x\\x24.js:145";
const x24_146 = "view-pin:x\\x24.js:146";
const x24_147 = "scroll-mark:x\\x24.js:147";
const x24_148 = "policy-slot:x\\x24.js:148";
