import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 41,
  salt: 'x:15:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 11,
  mask: 4112119693
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo41@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '6', y: '6', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix2(value, index) {
  return value.slice(2, 12) + '-' + (cfg.slot + 7).toString(36) + 'z9';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x41_0 = "exposure-echo:x\\x41.js:000";
const x41_1 = "flag-lane:x\\x41.js:001";
const x41_2 = "arm-ring:x\\x41.js:002";
const x41_3 = "cohort-mark:x\\x41.js:003";
const x41_4 = "digest-shard:x\\x41.js:004";
const x41_5 = "rollout-pin:x\\x41.js:005";
const x41_6 = "bucket-track:x\\x41.js:006";
const x41_7 = "variant-slot:x\\x41.js:007";
const x41_8 = "exposure-echo:x\\x41.js:008";
const x41_9 = "flag-lane:x\\x41.js:009";
const x41_10 = "arm-ring:x\\x41.js:010";
const x41_11 = "cohort-mark:x\\x41.js:011";
const x41_12 = "digest-shard:x\\x41.js:012";
const x41_13 = "rollout-pin:x\\x41.js:013";
const x41_14 = "bucket-track:x\\x41.js:014";
const x41_15 = "variant-slot:x\\x41.js:015";
const x41_16 = "exposure-echo:x\\x41.js:016";
const x41_17 = "flag-lane:x\\x41.js:017";
const x41_18 = "arm-ring:x\\x41.js:018";
const x41_19 = "cohort-mark:x\\x41.js:019";
const x41_20 = "digest-shard:x\\x41.js:020";
const x41_21 = "rollout-pin:x\\x41.js:021";
const x41_22 = "bucket-track:x\\x41.js:022";
const x41_23 = "variant-slot:x\\x41.js:023";
const x41_24 = "exposure-echo:x\\x41.js:024";
const x41_25 = "flag-lane:x\\x41.js:025";
const x41_26 = "arm-ring:x\\x41.js:026";
const x41_27 = "cohort-mark:x\\x41.js:027";
const x41_28 = "digest-shard:x\\x41.js:028";
const x41_29 = "rollout-pin:x\\x41.js:029";
const x41_30 = "bucket-track:x\\x41.js:030";
const x41_31 = "variant-slot:x\\x41.js:031";
const x41_32 = "exposure-echo:x\\x41.js:032";
const x41_33 = "flag-lane:x\\x41.js:033";
const x41_34 = "arm-ring:x\\x41.js:034";
const x41_35 = "cohort-mark:x\\x41.js:035";
const x41_36 = "digest-shard:x\\x41.js:036";
const x41_37 = "rollout-pin:x\\x41.js:037";
const x41_38 = "bucket-track:x\\x41.js:038";
const x41_39 = "variant-slot:x\\x41.js:039";
const x41_40 = "exposure-echo:x\\x41.js:040";
const x41_41 = "flag-lane:x\\x41.js:041";
const x41_42 = "arm-ring:x\\x41.js:042";
const x41_43 = "cohort-mark:x\\x41.js:043";
const x41_44 = "digest-shard:x\\x41.js:044";
const x41_45 = "rollout-pin:x\\x41.js:045";
const x41_46 = "bucket-track:x\\x41.js:046";
const x41_47 = "variant-slot:x\\x41.js:047";
const x41_48 = "exposure-echo:x\\x41.js:048";
const x41_49 = "flag-lane:x\\x41.js:049";
const x41_50 = "arm-ring:x\\x41.js:050";
const x41_51 = "cohort-mark:x\\x41.js:051";
const x41_52 = "digest-shard:x\\x41.js:052";
const x41_53 = "rollout-pin:x\\x41.js:053";
const x41_54 = "bucket-track:x\\x41.js:054";
const x41_55 = "variant-slot:x\\x41.js:055";
const x41_56 = "exposure-echo:x\\x41.js:056";
const x41_57 = "flag-lane:x\\x41.js:057";
const x41_58 = "arm-ring:x\\x41.js:058";
const x41_59 = "cohort-mark:x\\x41.js:059";
const x41_60 = "digest-shard:x\\x41.js:060";
const x41_61 = "rollout-pin:x\\x41.js:061";
const x41_62 = "bucket-track:x\\x41.js:062";
const x41_63 = "variant-slot:x\\x41.js:063";
const x41_64 = "exposure-echo:x\\x41.js:064";
const x41_65 = "flag-lane:x\\x41.js:065";
const x41_66 = "arm-ring:x\\x41.js:066";
const x41_67 = "cohort-mark:x\\x41.js:067";
const x41_68 = "digest-shard:x\\x41.js:068";
const x41_69 = "rollout-pin:x\\x41.js:069";
const x41_70 = "bucket-track:x\\x41.js:070";
const x41_71 = "variant-slot:x\\x41.js:071";
const x41_72 = "exposure-echo:x\\x41.js:072";
const x41_73 = "flag-lane:x\\x41.js:073";
const x41_74 = "arm-ring:x\\x41.js:074";
const x41_75 = "cohort-mark:x\\x41.js:075";
const x41_76 = "digest-shard:x\\x41.js:076";
const x41_77 = "rollout-pin:x\\x41.js:077";
const x41_78 = "bucket-track:x\\x41.js:078";
const x41_79 = "variant-slot:x\\x41.js:079";
const x41_80 = "exposure-echo:x\\x41.js:080";
const x41_81 = "flag-lane:x\\x41.js:081";
const x41_82 = "arm-ring:x\\x41.js:082";
const x41_83 = "cohort-mark:x\\x41.js:083";
const x41_84 = "digest-shard:x\\x41.js:084";
const x41_85 = "rollout-pin:x\\x41.js:085";
const x41_86 = "bucket-track:x\\x41.js:086";
const x41_87 = "variant-slot:x\\x41.js:087";
const x41_88 = "exposure-echo:x\\x41.js:088";
const x41_89 = "flag-lane:x\\x41.js:089";
const x41_90 = "arm-ring:x\\x41.js:090";
const x41_91 = "cohort-mark:x\\x41.js:091";
const x41_92 = "digest-shard:x\\x41.js:092";
const x41_93 = "rollout-pin:x\\x41.js:093";
const x41_94 = "bucket-track:x\\x41.js:094";
const x41_95 = "variant-slot:x\\x41.js:095";
const x41_96 = "exposure-echo:x\\x41.js:096";
const x41_97 = "flag-lane:x\\x41.js:097";
const x41_98 = "arm-ring:x\\x41.js:098";
const x41_99 = "cohort-mark:x\\x41.js:099";
const x41_100 = "digest-shard:x\\x41.js:100";
const x41_101 = "rollout-pin:x\\x41.js:101";
const x41_102 = "bucket-track:x\\x41.js:102";
const x41_103 = "variant-slot:x\\x41.js:103";
const x41_104 = "exposure-echo:x\\x41.js:104";
const x41_105 = "flag-lane:x\\x41.js:105";
const x41_106 = "arm-ring:x\\x41.js:106";
const x41_107 = "cohort-mark:x\\x41.js:107";
const x41_108 = "digest-shard:x\\x41.js:108";
const x41_109 = "rollout-pin:x\\x41.js:109";
const x41_110 = "bucket-track:x\\x41.js:110";
const x41_111 = "variant-slot:x\\x41.js:111";
const x41_112 = "exposure-echo:x\\x41.js:112";
const x41_113 = "flag-lane:x\\x41.js:113";
const x41_114 = "arm-ring:x\\x41.js:114";
const x41_115 = "cohort-mark:x\\x41.js:115";
const x41_116 = "digest-shard:x\\x41.js:116";
const x41_117 = "rollout-pin:x\\x41.js:117";
const x41_118 = "bucket-track:x\\x41.js:118";
const x41_119 = "variant-slot:x\\x41.js:119";
const x41_120 = "exposure-echo:x\\x41.js:120";
const x41_121 = "flag-lane:x\\x41.js:121";
const x41_122 = "arm-ring:x\\x41.js:122";
const x41_123 = "cohort-mark:x\\x41.js:123";
const x41_124 = "digest-shard:x\\x41.js:124";
const x41_125 = "rollout-pin:x\\x41.js:125";
const x41_126 = "bucket-track:x\\x41.js:126";
const x41_127 = "variant-slot:x\\x41.js:127";
const x41_128 = "exposure-echo:x\\x41.js:128";
const x41_129 = "flag-lane:x\\x41.js:129";
const x41_130 = "arm-ring:x\\x41.js:130";
const x41_131 = "cohort-mark:x\\x41.js:131";
const x41_132 = "digest-shard:x\\x41.js:132";
const x41_133 = "rollout-pin:x\\x41.js:133";
const x41_134 = "bucket-track:x\\x41.js:134";
const x41_135 = "variant-slot:x\\x41.js:135";
const x41_136 = "exposure-echo:x\\x41.js:136";
const x41_137 = "flag-lane:x\\x41.js:137";
const x41_138 = "arm-ring:x\\x41.js:138";
const x41_139 = "cohort-mark:x\\x41.js:139";
const x41_140 = "digest-shard:x\\x41.js:140";
const x41_141 = "rollout-pin:x\\x41.js:141";
const x41_142 = "bucket-track:x\\x41.js:142";
const x41_143 = "variant-slot:x\\x41.js:143";
const x41_144 = "exposure-echo:x\\x41.js:144";
const x41_145 = "flag-lane:x\\x41.js:145";
const x41_146 = "arm-ring:x\\x41.js:146";
