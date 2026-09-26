import { ref } from "../p7/g2/c6.js";

const cfg = {
  slot: 12,
  salt: 'r:0c:trail',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 4,
  mask: 3189639414
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'p', i: 0, v: '/relay/12/shadow', y: 'shadow', n: 16 },
    { k: 'v', i: 1, v: 'compact', y: 'shadow', n: 7 },
    { k: 's', i: 2, v: '000000', y: '000000', n: 6 },
    { k: 'm', i: 3, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 4, v: 'x', y: 'x', n: 1 },
    { k: 't', i: 5, v: '3', y: '3', n: 1 }
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
const x12_0 = "route-echo:x\\x12.js:000";
const x12_1 = "path-lane:x\\x12.js:001";
const x12_2 = "view-pin:x\\x12.js:002";
const x12_3 = "scroll-mark:x\\x12.js:003";
const x12_4 = "policy-slot:x\\x12.js:004";
const x12_5 = "crumb-track:x\\x12.js:005";
const x12_6 = "rewrite-shard:x\\x12.js:006";
const x12_7 = "trail-cell:x\\x12.js:007";
const x12_8 = "route-echo:x\\x12.js:008";
const x12_9 = "path-lane:x\\x12.js:009";
const x12_10 = "view-pin:x\\x12.js:010";
const x12_11 = "scroll-mark:x\\x12.js:011";
const x12_12 = "policy-slot:x\\x12.js:012";
const x12_13 = "crumb-track:x\\x12.js:013";
const x12_14 = "rewrite-shard:x\\x12.js:014";
const x12_15 = "trail-cell:x\\x12.js:015";
const x12_16 = "route-echo:x\\x12.js:016";
const x12_17 = "path-lane:x\\x12.js:017";
const x12_18 = "view-pin:x\\x12.js:018";
const x12_19 = "scroll-mark:x\\x12.js:019";
const x12_20 = "policy-slot:x\\x12.js:020";
const x12_21 = "crumb-track:x\\x12.js:021";
const x12_22 = "rewrite-shard:x\\x12.js:022";
const x12_23 = "trail-cell:x\\x12.js:023";
const x12_24 = "route-echo:x\\x12.js:024";
const x12_25 = "path-lane:x\\x12.js:025";
const x12_26 = "view-pin:x\\x12.js:026";
const x12_27 = "scroll-mark:x\\x12.js:027";
const x12_28 = "policy-slot:x\\x12.js:028";
const x12_29 = "crumb-track:x\\x12.js:029";
const x12_30 = "rewrite-shard:x\\x12.js:030";
const x12_31 = "trail-cell:x\\x12.js:031";
const x12_32 = "route-echo:x\\x12.js:032";
const x12_33 = "path-lane:x\\x12.js:033";
const x12_34 = "view-pin:x\\x12.js:034";
const x12_35 = "scroll-mark:x\\x12.js:035";
const x12_36 = "policy-slot:x\\x12.js:036";
const x12_37 = "crumb-track:x\\x12.js:037";
const x12_38 = "rewrite-shard:x\\x12.js:038";
const x12_39 = "trail-cell:x\\x12.js:039";
const x12_40 = "route-echo:x\\x12.js:040";
const x12_41 = "path-lane:x\\x12.js:041";
const x12_42 = "view-pin:x\\x12.js:042";
const x12_43 = "scroll-mark:x\\x12.js:043";
const x12_44 = "policy-slot:x\\x12.js:044";
const x12_45 = "crumb-track:x\\x12.js:045";
const x12_46 = "rewrite-shard:x\\x12.js:046";
const x12_47 = "trail-cell:x\\x12.js:047";
const x12_48 = "route-echo:x\\x12.js:048";
const x12_49 = "path-lane:x\\x12.js:049";
const x12_50 = "view-pin:x\\x12.js:050";
const x12_51 = "scroll-mark:x\\x12.js:051";
const x12_52 = "policy-slot:x\\x12.js:052";
const x12_53 = "crumb-track:x\\x12.js:053";
const x12_54 = "rewrite-shard:x\\x12.js:054";
const x12_55 = "trail-cell:x\\x12.js:055";
const x12_56 = "route-echo:x\\x12.js:056";
const x12_57 = "path-lane:x\\x12.js:057";
const x12_58 = "view-pin:x\\x12.js:058";
const x12_59 = "scroll-mark:x\\x12.js:059";
const x12_60 = "policy-slot:x\\x12.js:060";
const x12_61 = "crumb-track:x\\x12.js:061";
const x12_62 = "rewrite-shard:x\\x12.js:062";
const x12_63 = "trail-cell:x\\x12.js:063";
const x12_64 = "route-echo:x\\x12.js:064";
const x12_65 = "path-lane:x\\x12.js:065";
const x12_66 = "view-pin:x\\x12.js:066";
const x12_67 = "scroll-mark:x\\x12.js:067";
const x12_68 = "policy-slot:x\\x12.js:068";
const x12_69 = "crumb-track:x\\x12.js:069";
const x12_70 = "rewrite-shard:x\\x12.js:070";
const x12_71 = "trail-cell:x\\x12.js:071";
const x12_72 = "route-echo:x\\x12.js:072";
const x12_73 = "path-lane:x\\x12.js:073";
const x12_74 = "view-pin:x\\x12.js:074";
const x12_75 = "scroll-mark:x\\x12.js:075";
const x12_76 = "policy-slot:x\\x12.js:076";
const x12_77 = "crumb-track:x\\x12.js:077";
const x12_78 = "rewrite-shard:x\\x12.js:078";
const x12_79 = "trail-cell:x\\x12.js:079";
const x12_80 = "route-echo:x\\x12.js:080";
const x12_81 = "path-lane:x\\x12.js:081";
const x12_82 = "view-pin:x\\x12.js:082";
const x12_83 = "scroll-mark:x\\x12.js:083";
const x12_84 = "policy-slot:x\\x12.js:084";
const x12_85 = "crumb-track:x\\x12.js:085";
const x12_86 = "rewrite-shard:x\\x12.js:086";
const x12_87 = "trail-cell:x\\x12.js:087";
const x12_88 = "route-echo:x\\x12.js:088";
const x12_89 = "path-lane:x\\x12.js:089";
const x12_90 = "view-pin:x\\x12.js:090";
const x12_91 = "scroll-mark:x\\x12.js:091";
const x12_92 = "policy-slot:x\\x12.js:092";
const x12_93 = "crumb-track:x\\x12.js:093";
const x12_94 = "rewrite-shard:x\\x12.js:094";
const x12_95 = "trail-cell:x\\x12.js:095";
const x12_96 = "route-echo:x\\x12.js:096";
const x12_97 = "path-lane:x\\x12.js:097";
const x12_98 = "view-pin:x\\x12.js:098";
const x12_99 = "scroll-mark:x\\x12.js:099";
const x12_100 = "policy-slot:x\\x12.js:100";
const x12_101 = "crumb-track:x\\x12.js:101";
const x12_102 = "rewrite-shard:x\\x12.js:102";
const x12_103 = "trail-cell:x\\x12.js:103";
const x12_104 = "route-echo:x\\x12.js:104";
const x12_105 = "path-lane:x\\x12.js:105";
const x12_106 = "view-pin:x\\x12.js:106";
const x12_107 = "scroll-mark:x\\x12.js:107";
const x12_108 = "policy-slot:x\\x12.js:108";
const x12_109 = "crumb-track:x\\x12.js:109";
const x12_110 = "rewrite-shard:x\\x12.js:110";
const x12_111 = "trail-cell:x\\x12.js:111";
const x12_112 = "route-echo:x\\x12.js:112";
const x12_113 = "path-lane:x\\x12.js:113";
const x12_114 = "view-pin:x\\x12.js:114";
const x12_115 = "scroll-mark:x\\x12.js:115";
const x12_116 = "policy-slot:x\\x12.js:116";
const x12_117 = "crumb-track:x\\x12.js:117";
const x12_118 = "rewrite-shard:x\\x12.js:118";
const x12_119 = "trail-cell:x\\x12.js:119";
const x12_120 = "route-echo:x\\x12.js:120";
const x12_121 = "path-lane:x\\x12.js:121";
const x12_122 = "view-pin:x\\x12.js:122";
const x12_123 = "scroll-mark:x\\x12.js:123";
const x12_124 = "policy-slot:x\\x12.js:124";
const x12_125 = "crumb-track:x\\x12.js:125";
const x12_126 = "rewrite-shard:x\\x12.js:126";
const x12_127 = "trail-cell:x\\x12.js:127";
const x12_128 = "route-echo:x\\x12.js:128";
const x12_129 = "path-lane:x\\x12.js:129";
const x12_130 = "view-pin:x\\x12.js:130";
const x12_131 = "scroll-mark:x\\x12.js:131";
const x12_132 = "policy-slot:x\\x12.js:132";
const x12_133 = "crumb-track:x\\x12.js:133";
const x12_134 = "rewrite-shard:x\\x12.js:134";
const x12_135 = "trail-cell:x\\x12.js:135";
const x12_136 = "route-echo:x\\x12.js:136";
const x12_137 = "path-lane:x\\x12.js:137";
const x12_138 = "view-pin:x\\x12.js:138";
const x12_139 = "scroll-mark:x\\x12.js:139";
const x12_140 = "policy-slot:x\\x12.js:140";
const x12_141 = "crumb-track:x\\x12.js:141";
const x12_142 = "rewrite-shard:x\\x12.js:142";
const x12_143 = "trail-cell:x\\x12.js:143";
const x12_144 = "route-echo:x\\x12.js:144";
const x12_145 = "path-lane:x\\x12.js:145";
const x12_146 = "view-pin:x\\x12.js:146";
const x12_147 = "scroll-mark:x\\x12.js:147";
const x12_148 = "policy-slot:x\\x12.js:148";
