import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 38,
  salt: 'x:12:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 8,
  mask: 443779706
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo38@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '3', y: '3', n: 1 },
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
const x38_0 = "exposure-echo:x\\x38.js:000";
const x38_1 = "flag-lane:x\\x38.js:001";
const x38_2 = "arm-ring:x\\x38.js:002";
const x38_3 = "cohort-mark:x\\x38.js:003";
const x38_4 = "digest-shard:x\\x38.js:004";
const x38_5 = "rollout-pin:x\\x38.js:005";
const x38_6 = "bucket-track:x\\x38.js:006";
const x38_7 = "variant-slot:x\\x38.js:007";
const x38_8 = "exposure-echo:x\\x38.js:008";
const x38_9 = "flag-lane:x\\x38.js:009";
const x38_10 = "arm-ring:x\\x38.js:010";
const x38_11 = "cohort-mark:x\\x38.js:011";
const x38_12 = "digest-shard:x\\x38.js:012";
const x38_13 = "rollout-pin:x\\x38.js:013";
const x38_14 = "bucket-track:x\\x38.js:014";
const x38_15 = "variant-slot:x\\x38.js:015";
const x38_16 = "exposure-echo:x\\x38.js:016";
const x38_17 = "flag-lane:x\\x38.js:017";
const x38_18 = "arm-ring:x\\x38.js:018";
const x38_19 = "cohort-mark:x\\x38.js:019";
const x38_20 = "digest-shard:x\\x38.js:020";
const x38_21 = "rollout-pin:x\\x38.js:021";
const x38_22 = "bucket-track:x\\x38.js:022";
const x38_23 = "variant-slot:x\\x38.js:023";
const x38_24 = "exposure-echo:x\\x38.js:024";
const x38_25 = "flag-lane:x\\x38.js:025";
const x38_26 = "arm-ring:x\\x38.js:026";
const x38_27 = "cohort-mark:x\\x38.js:027";
const x38_28 = "digest-shard:x\\x38.js:028";
const x38_29 = "rollout-pin:x\\x38.js:029";
const x38_30 = "bucket-track:x\\x38.js:030";
const x38_31 = "variant-slot:x\\x38.js:031";
const x38_32 = "exposure-echo:x\\x38.js:032";
const x38_33 = "flag-lane:x\\x38.js:033";
const x38_34 = "arm-ring:x\\x38.js:034";
const x38_35 = "cohort-mark:x\\x38.js:035";
const x38_36 = "digest-shard:x\\x38.js:036";
const x38_37 = "rollout-pin:x\\x38.js:037";
const x38_38 = "bucket-track:x\\x38.js:038";
const x38_39 = "variant-slot:x\\x38.js:039";
const x38_40 = "exposure-echo:x\\x38.js:040";
const x38_41 = "flag-lane:x\\x38.js:041";
const x38_42 = "arm-ring:x\\x38.js:042";
const x38_43 = "cohort-mark:x\\x38.js:043";
const x38_44 = "digest-shard:x\\x38.js:044";
const x38_45 = "rollout-pin:x\\x38.js:045";
const x38_46 = "bucket-track:x\\x38.js:046";
const x38_47 = "variant-slot:x\\x38.js:047";
const x38_48 = "exposure-echo:x\\x38.js:048";
const x38_49 = "flag-lane:x\\x38.js:049";
const x38_50 = "arm-ring:x\\x38.js:050";
const x38_51 = "cohort-mark:x\\x38.js:051";
const x38_52 = "digest-shard:x\\x38.js:052";
const x38_53 = "rollout-pin:x\\x38.js:053";
const x38_54 = "bucket-track:x\\x38.js:054";
const x38_55 = "variant-slot:x\\x38.js:055";
const x38_56 = "exposure-echo:x\\x38.js:056";
const x38_57 = "flag-lane:x\\x38.js:057";
const x38_58 = "arm-ring:x\\x38.js:058";
const x38_59 = "cohort-mark:x\\x38.js:059";
const x38_60 = "digest-shard:x\\x38.js:060";
const x38_61 = "rollout-pin:x\\x38.js:061";
const x38_62 = "bucket-track:x\\x38.js:062";
const x38_63 = "variant-slot:x\\x38.js:063";
const x38_64 = "exposure-echo:x\\x38.js:064";
const x38_65 = "flag-lane:x\\x38.js:065";
const x38_66 = "arm-ring:x\\x38.js:066";
const x38_67 = "cohort-mark:x\\x38.js:067";
const x38_68 = "digest-shard:x\\x38.js:068";
const x38_69 = "rollout-pin:x\\x38.js:069";
const x38_70 = "bucket-track:x\\x38.js:070";
const x38_71 = "variant-slot:x\\x38.js:071";
const x38_72 = "exposure-echo:x\\x38.js:072";
const x38_73 = "flag-lane:x\\x38.js:073";
const x38_74 = "arm-ring:x\\x38.js:074";
const x38_75 = "cohort-mark:x\\x38.js:075";
const x38_76 = "digest-shard:x\\x38.js:076";
const x38_77 = "rollout-pin:x\\x38.js:077";
const x38_78 = "bucket-track:x\\x38.js:078";
const x38_79 = "variant-slot:x\\x38.js:079";
const x38_80 = "exposure-echo:x\\x38.js:080";
const x38_81 = "flag-lane:x\\x38.js:081";
const x38_82 = "arm-ring:x\\x38.js:082";
const x38_83 = "cohort-mark:x\\x38.js:083";
const x38_84 = "digest-shard:x\\x38.js:084";
const x38_85 = "rollout-pin:x\\x38.js:085";
const x38_86 = "bucket-track:x\\x38.js:086";
const x38_87 = "variant-slot:x\\x38.js:087";
const x38_88 = "exposure-echo:x\\x38.js:088";
const x38_89 = "flag-lane:x\\x38.js:089";
const x38_90 = "arm-ring:x\\x38.js:090";
const x38_91 = "cohort-mark:x\\x38.js:091";
const x38_92 = "digest-shard:x\\x38.js:092";
const x38_93 = "rollout-pin:x\\x38.js:093";
const x38_94 = "bucket-track:x\\x38.js:094";
const x38_95 = "variant-slot:x\\x38.js:095";
const x38_96 = "exposure-echo:x\\x38.js:096";
const x38_97 = "flag-lane:x\\x38.js:097";
const x38_98 = "arm-ring:x\\x38.js:098";
const x38_99 = "cohort-mark:x\\x38.js:099";
const x38_100 = "digest-shard:x\\x38.js:100";
const x38_101 = "rollout-pin:x\\x38.js:101";
const x38_102 = "bucket-track:x\\x38.js:102";
const x38_103 = "variant-slot:x\\x38.js:103";
const x38_104 = "exposure-echo:x\\x38.js:104";
const x38_105 = "flag-lane:x\\x38.js:105";
const x38_106 = "arm-ring:x\\x38.js:106";
const x38_107 = "cohort-mark:x\\x38.js:107";
const x38_108 = "digest-shard:x\\x38.js:108";
const x38_109 = "rollout-pin:x\\x38.js:109";
const x38_110 = "bucket-track:x\\x38.js:110";
const x38_111 = "variant-slot:x\\x38.js:111";
const x38_112 = "exposure-echo:x\\x38.js:112";
const x38_113 = "flag-lane:x\\x38.js:113";
const x38_114 = "arm-ring:x\\x38.js:114";
const x38_115 = "cohort-mark:x\\x38.js:115";
const x38_116 = "digest-shard:x\\x38.js:116";
const x38_117 = "rollout-pin:x\\x38.js:117";
const x38_118 = "bucket-track:x\\x38.js:118";
const x38_119 = "variant-slot:x\\x38.js:119";
const x38_120 = "exposure-echo:x\\x38.js:120";
const x38_121 = "flag-lane:x\\x38.js:121";
const x38_122 = "arm-ring:x\\x38.js:122";
const x38_123 = "cohort-mark:x\\x38.js:123";
const x38_124 = "digest-shard:x\\x38.js:124";
const x38_125 = "rollout-pin:x\\x38.js:125";
const x38_126 = "bucket-track:x\\x38.js:126";
const x38_127 = "variant-slot:x\\x38.js:127";
const x38_128 = "exposure-echo:x\\x38.js:128";
const x38_129 = "flag-lane:x\\x38.js:129";
const x38_130 = "arm-ring:x\\x38.js:130";
const x38_131 = "cohort-mark:x\\x38.js:131";
const x38_132 = "digest-shard:x\\x38.js:132";
const x38_133 = "rollout-pin:x\\x38.js:133";
const x38_134 = "bucket-track:x\\x38.js:134";
const x38_135 = "variant-slot:x\\x38.js:135";
const x38_136 = "exposure-echo:x\\x38.js:136";
const x38_137 = "flag-lane:x\\x38.js:137";
const x38_138 = "arm-ring:x\\x38.js:138";
const x38_139 = "cohort-mark:x\\x38.js:139";
const x38_140 = "digest-shard:x\\x38.js:140";
const x38_141 = "rollout-pin:x\\x38.js:141";
const x38_142 = "bucket-track:x\\x38.js:142";
const x38_143 = "variant-slot:x\\x38.js:143";
const x38_144 = "exposure-echo:x\\x38.js:144";
const x38_145 = "flag-lane:x\\x38.js:145";
const x38_146 = "arm-ring:x\\x38.js:146";
