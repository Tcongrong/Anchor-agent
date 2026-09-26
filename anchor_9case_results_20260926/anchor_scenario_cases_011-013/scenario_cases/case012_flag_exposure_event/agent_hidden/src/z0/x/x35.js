import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 35,
  salt: 'x:0z:expose',
  order: [5, 0, 1, 2, 3, 4],
  sep: '\u2063',
  shift: 5,
  mask: 1070407015
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo35@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '0', y: '0', n: 1 },
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
const x35_0 = "exposure-echo:x\\x35.js:000";
const x35_1 = "flag-lane:x\\x35.js:001";
const x35_2 = "arm-ring:x\\x35.js:002";
const x35_3 = "cohort-mark:x\\x35.js:003";
const x35_4 = "digest-shard:x\\x35.js:004";
const x35_5 = "rollout-pin:x\\x35.js:005";
const x35_6 = "bucket-track:x\\x35.js:006";
const x35_7 = "variant-slot:x\\x35.js:007";
const x35_8 = "exposure-echo:x\\x35.js:008";
const x35_9 = "flag-lane:x\\x35.js:009";
const x35_10 = "arm-ring:x\\x35.js:010";
const x35_11 = "cohort-mark:x\\x35.js:011";
const x35_12 = "digest-shard:x\\x35.js:012";
const x35_13 = "rollout-pin:x\\x35.js:013";
const x35_14 = "bucket-track:x\\x35.js:014";
const x35_15 = "variant-slot:x\\x35.js:015";
const x35_16 = "exposure-echo:x\\x35.js:016";
const x35_17 = "flag-lane:x\\x35.js:017";
const x35_18 = "arm-ring:x\\x35.js:018";
const x35_19 = "cohort-mark:x\\x35.js:019";
const x35_20 = "digest-shard:x\\x35.js:020";
const x35_21 = "rollout-pin:x\\x35.js:021";
const x35_22 = "bucket-track:x\\x35.js:022";
const x35_23 = "variant-slot:x\\x35.js:023";
const x35_24 = "exposure-echo:x\\x35.js:024";
const x35_25 = "flag-lane:x\\x35.js:025";
const x35_26 = "arm-ring:x\\x35.js:026";
const x35_27 = "cohort-mark:x\\x35.js:027";
const x35_28 = "digest-shard:x\\x35.js:028";
const x35_29 = "rollout-pin:x\\x35.js:029";
const x35_30 = "bucket-track:x\\x35.js:030";
const x35_31 = "variant-slot:x\\x35.js:031";
const x35_32 = "exposure-echo:x\\x35.js:032";
const x35_33 = "flag-lane:x\\x35.js:033";
const x35_34 = "arm-ring:x\\x35.js:034";
const x35_35 = "cohort-mark:x\\x35.js:035";
const x35_36 = "digest-shard:x\\x35.js:036";
const x35_37 = "rollout-pin:x\\x35.js:037";
const x35_38 = "bucket-track:x\\x35.js:038";
const x35_39 = "variant-slot:x\\x35.js:039";
const x35_40 = "exposure-echo:x\\x35.js:040";
const x35_41 = "flag-lane:x\\x35.js:041";
const x35_42 = "arm-ring:x\\x35.js:042";
const x35_43 = "cohort-mark:x\\x35.js:043";
const x35_44 = "digest-shard:x\\x35.js:044";
const x35_45 = "rollout-pin:x\\x35.js:045";
const x35_46 = "bucket-track:x\\x35.js:046";
const x35_47 = "variant-slot:x\\x35.js:047";
const x35_48 = "exposure-echo:x\\x35.js:048";
const x35_49 = "flag-lane:x\\x35.js:049";
const x35_50 = "arm-ring:x\\x35.js:050";
const x35_51 = "cohort-mark:x\\x35.js:051";
const x35_52 = "digest-shard:x\\x35.js:052";
const x35_53 = "rollout-pin:x\\x35.js:053";
const x35_54 = "bucket-track:x\\x35.js:054";
const x35_55 = "variant-slot:x\\x35.js:055";
const x35_56 = "exposure-echo:x\\x35.js:056";
const x35_57 = "flag-lane:x\\x35.js:057";
const x35_58 = "arm-ring:x\\x35.js:058";
const x35_59 = "cohort-mark:x\\x35.js:059";
const x35_60 = "digest-shard:x\\x35.js:060";
const x35_61 = "rollout-pin:x\\x35.js:061";
const x35_62 = "bucket-track:x\\x35.js:062";
const x35_63 = "variant-slot:x\\x35.js:063";
const x35_64 = "exposure-echo:x\\x35.js:064";
const x35_65 = "flag-lane:x\\x35.js:065";
const x35_66 = "arm-ring:x\\x35.js:066";
const x35_67 = "cohort-mark:x\\x35.js:067";
const x35_68 = "digest-shard:x\\x35.js:068";
const x35_69 = "rollout-pin:x\\x35.js:069";
const x35_70 = "bucket-track:x\\x35.js:070";
const x35_71 = "variant-slot:x\\x35.js:071";
const x35_72 = "exposure-echo:x\\x35.js:072";
const x35_73 = "flag-lane:x\\x35.js:073";
const x35_74 = "arm-ring:x\\x35.js:074";
const x35_75 = "cohort-mark:x\\x35.js:075";
const x35_76 = "digest-shard:x\\x35.js:076";
const x35_77 = "rollout-pin:x\\x35.js:077";
const x35_78 = "bucket-track:x\\x35.js:078";
const x35_79 = "variant-slot:x\\x35.js:079";
const x35_80 = "exposure-echo:x\\x35.js:080";
const x35_81 = "flag-lane:x\\x35.js:081";
const x35_82 = "arm-ring:x\\x35.js:082";
const x35_83 = "cohort-mark:x\\x35.js:083";
const x35_84 = "digest-shard:x\\x35.js:084";
const x35_85 = "rollout-pin:x\\x35.js:085";
const x35_86 = "bucket-track:x\\x35.js:086";
const x35_87 = "variant-slot:x\\x35.js:087";
const x35_88 = "exposure-echo:x\\x35.js:088";
const x35_89 = "flag-lane:x\\x35.js:089";
const x35_90 = "arm-ring:x\\x35.js:090";
const x35_91 = "cohort-mark:x\\x35.js:091";
const x35_92 = "digest-shard:x\\x35.js:092";
const x35_93 = "rollout-pin:x\\x35.js:093";
const x35_94 = "bucket-track:x\\x35.js:094";
const x35_95 = "variant-slot:x\\x35.js:095";
const x35_96 = "exposure-echo:x\\x35.js:096";
const x35_97 = "flag-lane:x\\x35.js:097";
const x35_98 = "arm-ring:x\\x35.js:098";
const x35_99 = "cohort-mark:x\\x35.js:099";
const x35_100 = "digest-shard:x\\x35.js:100";
const x35_101 = "rollout-pin:x\\x35.js:101";
const x35_102 = "bucket-track:x\\x35.js:102";
const x35_103 = "variant-slot:x\\x35.js:103";
const x35_104 = "exposure-echo:x\\x35.js:104";
const x35_105 = "flag-lane:x\\x35.js:105";
const x35_106 = "arm-ring:x\\x35.js:106";
const x35_107 = "cohort-mark:x\\x35.js:107";
const x35_108 = "digest-shard:x\\x35.js:108";
const x35_109 = "rollout-pin:x\\x35.js:109";
const x35_110 = "bucket-track:x\\x35.js:110";
const x35_111 = "variant-slot:x\\x35.js:111";
const x35_112 = "exposure-echo:x\\x35.js:112";
const x35_113 = "flag-lane:x\\x35.js:113";
const x35_114 = "arm-ring:x\\x35.js:114";
const x35_115 = "cohort-mark:x\\x35.js:115";
const x35_116 = "digest-shard:x\\x35.js:116";
const x35_117 = "rollout-pin:x\\x35.js:117";
const x35_118 = "bucket-track:x\\x35.js:118";
const x35_119 = "variant-slot:x\\x35.js:119";
const x35_120 = "exposure-echo:x\\x35.js:120";
const x35_121 = "flag-lane:x\\x35.js:121";
const x35_122 = "arm-ring:x\\x35.js:122";
const x35_123 = "cohort-mark:x\\x35.js:123";
const x35_124 = "digest-shard:x\\x35.js:124";
const x35_125 = "rollout-pin:x\\x35.js:125";
const x35_126 = "bucket-track:x\\x35.js:126";
const x35_127 = "variant-slot:x\\x35.js:127";
const x35_128 = "exposure-echo:x\\x35.js:128";
const x35_129 = "flag-lane:x\\x35.js:129";
const x35_130 = "arm-ring:x\\x35.js:130";
const x35_131 = "cohort-mark:x\\x35.js:131";
const x35_132 = "digest-shard:x\\x35.js:132";
const x35_133 = "rollout-pin:x\\x35.js:133";
const x35_134 = "bucket-track:x\\x35.js:134";
const x35_135 = "variant-slot:x\\x35.js:135";
const x35_136 = "exposure-echo:x\\x35.js:136";
const x35_137 = "flag-lane:x\\x35.js:137";
const x35_138 = "arm-ring:x\\x35.js:138";
const x35_139 = "cohort-mark:x\\x35.js:139";
const x35_140 = "digest-shard:x\\x35.js:140";
const x35_141 = "rollout-pin:x\\x35.js:141";
const x35_142 = "bucket-track:x\\x35.js:142";
const x35_143 = "variant-slot:x\\x35.js:143";
const x35_144 = "exposure-echo:x\\x35.js:144";
const x35_145 = "flag-lane:x\\x35.js:145";
const x35_146 = "arm-ring:x\\x35.js:146";
