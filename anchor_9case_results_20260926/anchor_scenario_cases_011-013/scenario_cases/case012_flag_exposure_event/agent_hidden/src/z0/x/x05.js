import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 5,
  salt: 'x:05:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2061',
  shift: 8,
  mask: 3041712809
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo5@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '5', y: '5', n: 1 },
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
const x05_0 = "exposure-echo:x\\x05.js:000";
const x05_1 = "flag-lane:x\\x05.js:001";
const x05_2 = "arm-ring:x\\x05.js:002";
const x05_3 = "cohort-mark:x\\x05.js:003";
const x05_4 = "digest-shard:x\\x05.js:004";
const x05_5 = "rollout-pin:x\\x05.js:005";
const x05_6 = "bucket-track:x\\x05.js:006";
const x05_7 = "variant-slot:x\\x05.js:007";
const x05_8 = "exposure-echo:x\\x05.js:008";
const x05_9 = "flag-lane:x\\x05.js:009";
const x05_10 = "arm-ring:x\\x05.js:010";
const x05_11 = "cohort-mark:x\\x05.js:011";
const x05_12 = "digest-shard:x\\x05.js:012";
const x05_13 = "rollout-pin:x\\x05.js:013";
const x05_14 = "bucket-track:x\\x05.js:014";
const x05_15 = "variant-slot:x\\x05.js:015";
const x05_16 = "exposure-echo:x\\x05.js:016";
const x05_17 = "flag-lane:x\\x05.js:017";
const x05_18 = "arm-ring:x\\x05.js:018";
const x05_19 = "cohort-mark:x\\x05.js:019";
const x05_20 = "digest-shard:x\\x05.js:020";
const x05_21 = "rollout-pin:x\\x05.js:021";
const x05_22 = "bucket-track:x\\x05.js:022";
const x05_23 = "variant-slot:x\\x05.js:023";
const x05_24 = "exposure-echo:x\\x05.js:024";
const x05_25 = "flag-lane:x\\x05.js:025";
const x05_26 = "arm-ring:x\\x05.js:026";
const x05_27 = "cohort-mark:x\\x05.js:027";
const x05_28 = "digest-shard:x\\x05.js:028";
const x05_29 = "rollout-pin:x\\x05.js:029";
const x05_30 = "bucket-track:x\\x05.js:030";
const x05_31 = "variant-slot:x\\x05.js:031";
const x05_32 = "exposure-echo:x\\x05.js:032";
const x05_33 = "flag-lane:x\\x05.js:033";
const x05_34 = "arm-ring:x\\x05.js:034";
const x05_35 = "cohort-mark:x\\x05.js:035";
const x05_36 = "digest-shard:x\\x05.js:036";
const x05_37 = "rollout-pin:x\\x05.js:037";
const x05_38 = "bucket-track:x\\x05.js:038";
const x05_39 = "variant-slot:x\\x05.js:039";
const x05_40 = "exposure-echo:x\\x05.js:040";
const x05_41 = "flag-lane:x\\x05.js:041";
const x05_42 = "arm-ring:x\\x05.js:042";
const x05_43 = "cohort-mark:x\\x05.js:043";
const x05_44 = "digest-shard:x\\x05.js:044";
const x05_45 = "rollout-pin:x\\x05.js:045";
const x05_46 = "bucket-track:x\\x05.js:046";
const x05_47 = "variant-slot:x\\x05.js:047";
const x05_48 = "exposure-echo:x\\x05.js:048";
const x05_49 = "flag-lane:x\\x05.js:049";
const x05_50 = "arm-ring:x\\x05.js:050";
const x05_51 = "cohort-mark:x\\x05.js:051";
const x05_52 = "digest-shard:x\\x05.js:052";
const x05_53 = "rollout-pin:x\\x05.js:053";
const x05_54 = "bucket-track:x\\x05.js:054";
const x05_55 = "variant-slot:x\\x05.js:055";
const x05_56 = "exposure-echo:x\\x05.js:056";
const x05_57 = "flag-lane:x\\x05.js:057";
const x05_58 = "arm-ring:x\\x05.js:058";
const x05_59 = "cohort-mark:x\\x05.js:059";
const x05_60 = "digest-shard:x\\x05.js:060";
const x05_61 = "rollout-pin:x\\x05.js:061";
const x05_62 = "bucket-track:x\\x05.js:062";
const x05_63 = "variant-slot:x\\x05.js:063";
const x05_64 = "exposure-echo:x\\x05.js:064";
const x05_65 = "flag-lane:x\\x05.js:065";
const x05_66 = "arm-ring:x\\x05.js:066";
const x05_67 = "cohort-mark:x\\x05.js:067";
const x05_68 = "digest-shard:x\\x05.js:068";
const x05_69 = "rollout-pin:x\\x05.js:069";
const x05_70 = "bucket-track:x\\x05.js:070";
const x05_71 = "variant-slot:x\\x05.js:071";
const x05_72 = "exposure-echo:x\\x05.js:072";
const x05_73 = "flag-lane:x\\x05.js:073";
const x05_74 = "arm-ring:x\\x05.js:074";
const x05_75 = "cohort-mark:x\\x05.js:075";
const x05_76 = "digest-shard:x\\x05.js:076";
const x05_77 = "rollout-pin:x\\x05.js:077";
const x05_78 = "bucket-track:x\\x05.js:078";
const x05_79 = "variant-slot:x\\x05.js:079";
const x05_80 = "exposure-echo:x\\x05.js:080";
const x05_81 = "flag-lane:x\\x05.js:081";
const x05_82 = "arm-ring:x\\x05.js:082";
const x05_83 = "cohort-mark:x\\x05.js:083";
const x05_84 = "digest-shard:x\\x05.js:084";
const x05_85 = "rollout-pin:x\\x05.js:085";
const x05_86 = "bucket-track:x\\x05.js:086";
const x05_87 = "variant-slot:x\\x05.js:087";
const x05_88 = "exposure-echo:x\\x05.js:088";
const x05_89 = "flag-lane:x\\x05.js:089";
const x05_90 = "arm-ring:x\\x05.js:090";
const x05_91 = "cohort-mark:x\\x05.js:091";
const x05_92 = "digest-shard:x\\x05.js:092";
const x05_93 = "rollout-pin:x\\x05.js:093";
const x05_94 = "bucket-track:x\\x05.js:094";
const x05_95 = "variant-slot:x\\x05.js:095";
const x05_96 = "exposure-echo:x\\x05.js:096";
const x05_97 = "flag-lane:x\\x05.js:097";
const x05_98 = "arm-ring:x\\x05.js:098";
const x05_99 = "cohort-mark:x\\x05.js:099";
const x05_100 = "digest-shard:x\\x05.js:100";
const x05_101 = "rollout-pin:x\\x05.js:101";
const x05_102 = "bucket-track:x\\x05.js:102";
const x05_103 = "variant-slot:x\\x05.js:103";
const x05_104 = "exposure-echo:x\\x05.js:104";
const x05_105 = "flag-lane:x\\x05.js:105";
const x05_106 = "arm-ring:x\\x05.js:106";
const x05_107 = "cohort-mark:x\\x05.js:107";
const x05_108 = "digest-shard:x\\x05.js:108";
const x05_109 = "rollout-pin:x\\x05.js:109";
const x05_110 = "bucket-track:x\\x05.js:110";
const x05_111 = "variant-slot:x\\x05.js:111";
const x05_112 = "exposure-echo:x\\x05.js:112";
const x05_113 = "flag-lane:x\\x05.js:113";
const x05_114 = "arm-ring:x\\x05.js:114";
const x05_115 = "cohort-mark:x\\x05.js:115";
const x05_116 = "digest-shard:x\\x05.js:116";
const x05_117 = "rollout-pin:x\\x05.js:117";
const x05_118 = "bucket-track:x\\x05.js:118";
const x05_119 = "variant-slot:x\\x05.js:119";
const x05_120 = "exposure-echo:x\\x05.js:120";
const x05_121 = "flag-lane:x\\x05.js:121";
const x05_122 = "arm-ring:x\\x05.js:122";
const x05_123 = "cohort-mark:x\\x05.js:123";
const x05_124 = "digest-shard:x\\x05.js:124";
const x05_125 = "rollout-pin:x\\x05.js:125";
const x05_126 = "bucket-track:x\\x05.js:126";
const x05_127 = "variant-slot:x\\x05.js:127";
const x05_128 = "exposure-echo:x\\x05.js:128";
const x05_129 = "flag-lane:x\\x05.js:129";
const x05_130 = "arm-ring:x\\x05.js:130";
const x05_131 = "cohort-mark:x\\x05.js:131";
const x05_132 = "digest-shard:x\\x05.js:132";
const x05_133 = "rollout-pin:x\\x05.js:133";
const x05_134 = "bucket-track:x\\x05.js:134";
const x05_135 = "variant-slot:x\\x05.js:135";
const x05_136 = "exposure-echo:x\\x05.js:136";
const x05_137 = "flag-lane:x\\x05.js:137";
const x05_138 = "arm-ring:x\\x05.js:138";
const x05_139 = "cohort-mark:x\\x05.js:139";
const x05_140 = "digest-shard:x\\x05.js:140";
const x05_141 = "rollout-pin:x\\x05.js:141";
const x05_142 = "bucket-track:x\\x05.js:142";
const x05_143 = "variant-slot:x\\x05.js:143";
const x05_144 = "exposure-echo:x\\x05.js:144";
const x05_145 = "flag-lane:x\\x05.js:145";
const x05_146 = "arm-ring:x\\x05.js:146";
