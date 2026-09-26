import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 37,
  salt: 'x:11:expose',
  order: [1, 2, 3, 4, 5, 0],
  sep: '\u2061',
  shift: 7,
  mask: 2084311241
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo37@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix1(value, index) {
  return value.slice(4, 15) + '.' + (cfg.slot * 3 + 1).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x37_0 = "exposure-echo:x\\x37.js:000";
const x37_1 = "flag-lane:x\\x37.js:001";
const x37_2 = "arm-ring:x\\x37.js:002";
const x37_3 = "cohort-mark:x\\x37.js:003";
const x37_4 = "digest-shard:x\\x37.js:004";
const x37_5 = "rollout-pin:x\\x37.js:005";
const x37_6 = "bucket-track:x\\x37.js:006";
const x37_7 = "variant-slot:x\\x37.js:007";
const x37_8 = "exposure-echo:x\\x37.js:008";
const x37_9 = "flag-lane:x\\x37.js:009";
const x37_10 = "arm-ring:x\\x37.js:010";
const x37_11 = "cohort-mark:x\\x37.js:011";
const x37_12 = "digest-shard:x\\x37.js:012";
const x37_13 = "rollout-pin:x\\x37.js:013";
const x37_14 = "bucket-track:x\\x37.js:014";
const x37_15 = "variant-slot:x\\x37.js:015";
const x37_16 = "exposure-echo:x\\x37.js:016";
const x37_17 = "flag-lane:x\\x37.js:017";
const x37_18 = "arm-ring:x\\x37.js:018";
const x37_19 = "cohort-mark:x\\x37.js:019";
const x37_20 = "digest-shard:x\\x37.js:020";
const x37_21 = "rollout-pin:x\\x37.js:021";
const x37_22 = "bucket-track:x\\x37.js:022";
const x37_23 = "variant-slot:x\\x37.js:023";
const x37_24 = "exposure-echo:x\\x37.js:024";
const x37_25 = "flag-lane:x\\x37.js:025";
const x37_26 = "arm-ring:x\\x37.js:026";
const x37_27 = "cohort-mark:x\\x37.js:027";
const x37_28 = "digest-shard:x\\x37.js:028";
const x37_29 = "rollout-pin:x\\x37.js:029";
const x37_30 = "bucket-track:x\\x37.js:030";
const x37_31 = "variant-slot:x\\x37.js:031";
const x37_32 = "exposure-echo:x\\x37.js:032";
const x37_33 = "flag-lane:x\\x37.js:033";
const x37_34 = "arm-ring:x\\x37.js:034";
const x37_35 = "cohort-mark:x\\x37.js:035";
const x37_36 = "digest-shard:x\\x37.js:036";
const x37_37 = "rollout-pin:x\\x37.js:037";
const x37_38 = "bucket-track:x\\x37.js:038";
const x37_39 = "variant-slot:x\\x37.js:039";
const x37_40 = "exposure-echo:x\\x37.js:040";
const x37_41 = "flag-lane:x\\x37.js:041";
const x37_42 = "arm-ring:x\\x37.js:042";
const x37_43 = "cohort-mark:x\\x37.js:043";
const x37_44 = "digest-shard:x\\x37.js:044";
const x37_45 = "rollout-pin:x\\x37.js:045";
const x37_46 = "bucket-track:x\\x37.js:046";
const x37_47 = "variant-slot:x\\x37.js:047";
const x37_48 = "exposure-echo:x\\x37.js:048";
const x37_49 = "flag-lane:x\\x37.js:049";
const x37_50 = "arm-ring:x\\x37.js:050";
const x37_51 = "cohort-mark:x\\x37.js:051";
const x37_52 = "digest-shard:x\\x37.js:052";
const x37_53 = "rollout-pin:x\\x37.js:053";
const x37_54 = "bucket-track:x\\x37.js:054";
const x37_55 = "variant-slot:x\\x37.js:055";
const x37_56 = "exposure-echo:x\\x37.js:056";
const x37_57 = "flag-lane:x\\x37.js:057";
const x37_58 = "arm-ring:x\\x37.js:058";
const x37_59 = "cohort-mark:x\\x37.js:059";
const x37_60 = "digest-shard:x\\x37.js:060";
const x37_61 = "rollout-pin:x\\x37.js:061";
const x37_62 = "bucket-track:x\\x37.js:062";
const x37_63 = "variant-slot:x\\x37.js:063";
const x37_64 = "exposure-echo:x\\x37.js:064";
const x37_65 = "flag-lane:x\\x37.js:065";
const x37_66 = "arm-ring:x\\x37.js:066";
const x37_67 = "cohort-mark:x\\x37.js:067";
const x37_68 = "digest-shard:x\\x37.js:068";
const x37_69 = "rollout-pin:x\\x37.js:069";
const x37_70 = "bucket-track:x\\x37.js:070";
const x37_71 = "variant-slot:x\\x37.js:071";
const x37_72 = "exposure-echo:x\\x37.js:072";
const x37_73 = "flag-lane:x\\x37.js:073";
const x37_74 = "arm-ring:x\\x37.js:074";
const x37_75 = "cohort-mark:x\\x37.js:075";
const x37_76 = "digest-shard:x\\x37.js:076";
const x37_77 = "rollout-pin:x\\x37.js:077";
const x37_78 = "bucket-track:x\\x37.js:078";
const x37_79 = "variant-slot:x\\x37.js:079";
const x37_80 = "exposure-echo:x\\x37.js:080";
const x37_81 = "flag-lane:x\\x37.js:081";
const x37_82 = "arm-ring:x\\x37.js:082";
const x37_83 = "cohort-mark:x\\x37.js:083";
const x37_84 = "digest-shard:x\\x37.js:084";
const x37_85 = "rollout-pin:x\\x37.js:085";
const x37_86 = "bucket-track:x\\x37.js:086";
const x37_87 = "variant-slot:x\\x37.js:087";
const x37_88 = "exposure-echo:x\\x37.js:088";
const x37_89 = "flag-lane:x\\x37.js:089";
const x37_90 = "arm-ring:x\\x37.js:090";
const x37_91 = "cohort-mark:x\\x37.js:091";
const x37_92 = "digest-shard:x\\x37.js:092";
const x37_93 = "rollout-pin:x\\x37.js:093";
const x37_94 = "bucket-track:x\\x37.js:094";
const x37_95 = "variant-slot:x\\x37.js:095";
const x37_96 = "exposure-echo:x\\x37.js:096";
const x37_97 = "flag-lane:x\\x37.js:097";
const x37_98 = "arm-ring:x\\x37.js:098";
const x37_99 = "cohort-mark:x\\x37.js:099";
const x37_100 = "digest-shard:x\\x37.js:100";
const x37_101 = "rollout-pin:x\\x37.js:101";
const x37_102 = "bucket-track:x\\x37.js:102";
const x37_103 = "variant-slot:x\\x37.js:103";
const x37_104 = "exposure-echo:x\\x37.js:104";
const x37_105 = "flag-lane:x\\x37.js:105";
const x37_106 = "arm-ring:x\\x37.js:106";
const x37_107 = "cohort-mark:x\\x37.js:107";
const x37_108 = "digest-shard:x\\x37.js:108";
const x37_109 = "rollout-pin:x\\x37.js:109";
const x37_110 = "bucket-track:x\\x37.js:110";
const x37_111 = "variant-slot:x\\x37.js:111";
const x37_112 = "exposure-echo:x\\x37.js:112";
const x37_113 = "flag-lane:x\\x37.js:113";
const x37_114 = "arm-ring:x\\x37.js:114";
const x37_115 = "cohort-mark:x\\x37.js:115";
const x37_116 = "digest-shard:x\\x37.js:116";
const x37_117 = "rollout-pin:x\\x37.js:117";
const x37_118 = "bucket-track:x\\x37.js:118";
const x37_119 = "variant-slot:x\\x37.js:119";
const x37_120 = "exposure-echo:x\\x37.js:120";
const x37_121 = "flag-lane:x\\x37.js:121";
const x37_122 = "arm-ring:x\\x37.js:122";
const x37_123 = "cohort-mark:x\\x37.js:123";
const x37_124 = "digest-shard:x\\x37.js:124";
const x37_125 = "rollout-pin:x\\x37.js:125";
const x37_126 = "bucket-track:x\\x37.js:126";
const x37_127 = "variant-slot:x\\x37.js:127";
const x37_128 = "exposure-echo:x\\x37.js:128";
const x37_129 = "flag-lane:x\\x37.js:129";
const x37_130 = "arm-ring:x\\x37.js:130";
const x37_131 = "cohort-mark:x\\x37.js:131";
const x37_132 = "digest-shard:x\\x37.js:132";
const x37_133 = "rollout-pin:x\\x37.js:133";
const x37_134 = "bucket-track:x\\x37.js:134";
const x37_135 = "variant-slot:x\\x37.js:135";
const x37_136 = "exposure-echo:x\\x37.js:136";
const x37_137 = "flag-lane:x\\x37.js:137";
const x37_138 = "arm-ring:x\\x37.js:138";
const x37_139 = "cohort-mark:x\\x37.js:139";
const x37_140 = "digest-shard:x\\x37.js:140";
const x37_141 = "rollout-pin:x\\x37.js:141";
const x37_142 = "bucket-track:x\\x37.js:142";
const x37_143 = "variant-slot:x\\x37.js:143";
const x37_144 = "exposure-echo:x\\x37.js:144";
const x37_145 = "flag-lane:x\\x37.js:145";
const x37_146 = "arm-ring:x\\x37.js:146";
