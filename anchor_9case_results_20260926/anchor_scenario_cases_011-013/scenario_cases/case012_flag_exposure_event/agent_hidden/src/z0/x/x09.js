import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 9,
  salt: 'x:09:expose',
  order: [3, 4, 5, 0, 1, 2],
  sep: '\u2061',
  shift: 12,
  mask: 774553965
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo9@flags.dev', y: 'shadow', n: 15 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '333333', y: '333333', n: 6 },
    { k: 'r', i: 3, v: '2', y: '2', n: 1 },
    { k: 'm', i: 4, v: 'm', y: 'm', n: 1 },
    { k: 'x', i: 5, v: 'x', y: 'x', n: 1 }
  ];
}

function remix0(value, index) {
  return value.slice(3, 14) + '~' + (cfg.slot + 2).toString(36) + 'k0';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const tuple = laneTuple(ctx);
  const value = fn({ user: tuple[0].v, flag: tuple[1].v, session: '0' }, { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x09_0 = "exposure-echo:x\\x09.js:000";
const x09_1 = "flag-lane:x\\x09.js:001";
const x09_2 = "arm-ring:x\\x09.js:002";
const x09_3 = "cohort-mark:x\\x09.js:003";
const x09_4 = "digest-shard:x\\x09.js:004";
const x09_5 = "rollout-pin:x\\x09.js:005";
const x09_6 = "bucket-track:x\\x09.js:006";
const x09_7 = "variant-slot:x\\x09.js:007";
const x09_8 = "exposure-echo:x\\x09.js:008";
const x09_9 = "flag-lane:x\\x09.js:009";
const x09_10 = "arm-ring:x\\x09.js:010";
const x09_11 = "cohort-mark:x\\x09.js:011";
const x09_12 = "digest-shard:x\\x09.js:012";
const x09_13 = "rollout-pin:x\\x09.js:013";
const x09_14 = "bucket-track:x\\x09.js:014";
const x09_15 = "variant-slot:x\\x09.js:015";
const x09_16 = "exposure-echo:x\\x09.js:016";
const x09_17 = "flag-lane:x\\x09.js:017";
const x09_18 = "arm-ring:x\\x09.js:018";
const x09_19 = "cohort-mark:x\\x09.js:019";
const x09_20 = "digest-shard:x\\x09.js:020";
const x09_21 = "rollout-pin:x\\x09.js:021";
const x09_22 = "bucket-track:x\\x09.js:022";
const x09_23 = "variant-slot:x\\x09.js:023";
const x09_24 = "exposure-echo:x\\x09.js:024";
const x09_25 = "flag-lane:x\\x09.js:025";
const x09_26 = "arm-ring:x\\x09.js:026";
const x09_27 = "cohort-mark:x\\x09.js:027";
const x09_28 = "digest-shard:x\\x09.js:028";
const x09_29 = "rollout-pin:x\\x09.js:029";
const x09_30 = "bucket-track:x\\x09.js:030";
const x09_31 = "variant-slot:x\\x09.js:031";
const x09_32 = "exposure-echo:x\\x09.js:032";
const x09_33 = "flag-lane:x\\x09.js:033";
const x09_34 = "arm-ring:x\\x09.js:034";
const x09_35 = "cohort-mark:x\\x09.js:035";
const x09_36 = "digest-shard:x\\x09.js:036";
const x09_37 = "rollout-pin:x\\x09.js:037";
const x09_38 = "bucket-track:x\\x09.js:038";
const x09_39 = "variant-slot:x\\x09.js:039";
const x09_40 = "exposure-echo:x\\x09.js:040";
const x09_41 = "flag-lane:x\\x09.js:041";
const x09_42 = "arm-ring:x\\x09.js:042";
const x09_43 = "cohort-mark:x\\x09.js:043";
const x09_44 = "digest-shard:x\\x09.js:044";
const x09_45 = "rollout-pin:x\\x09.js:045";
const x09_46 = "bucket-track:x\\x09.js:046";
const x09_47 = "variant-slot:x\\x09.js:047";
const x09_48 = "exposure-echo:x\\x09.js:048";
const x09_49 = "flag-lane:x\\x09.js:049";
const x09_50 = "arm-ring:x\\x09.js:050";
const x09_51 = "cohort-mark:x\\x09.js:051";
const x09_52 = "digest-shard:x\\x09.js:052";
const x09_53 = "rollout-pin:x\\x09.js:053";
const x09_54 = "bucket-track:x\\x09.js:054";
const x09_55 = "variant-slot:x\\x09.js:055";
const x09_56 = "exposure-echo:x\\x09.js:056";
const x09_57 = "flag-lane:x\\x09.js:057";
const x09_58 = "arm-ring:x\\x09.js:058";
const x09_59 = "cohort-mark:x\\x09.js:059";
const x09_60 = "digest-shard:x\\x09.js:060";
const x09_61 = "rollout-pin:x\\x09.js:061";
const x09_62 = "bucket-track:x\\x09.js:062";
const x09_63 = "variant-slot:x\\x09.js:063";
const x09_64 = "exposure-echo:x\\x09.js:064";
const x09_65 = "flag-lane:x\\x09.js:065";
const x09_66 = "arm-ring:x\\x09.js:066";
const x09_67 = "cohort-mark:x\\x09.js:067";
const x09_68 = "digest-shard:x\\x09.js:068";
const x09_69 = "rollout-pin:x\\x09.js:069";
const x09_70 = "bucket-track:x\\x09.js:070";
const x09_71 = "variant-slot:x\\x09.js:071";
const x09_72 = "exposure-echo:x\\x09.js:072";
const x09_73 = "flag-lane:x\\x09.js:073";
const x09_74 = "arm-ring:x\\x09.js:074";
const x09_75 = "cohort-mark:x\\x09.js:075";
const x09_76 = "digest-shard:x\\x09.js:076";
const x09_77 = "rollout-pin:x\\x09.js:077";
const x09_78 = "bucket-track:x\\x09.js:078";
const x09_79 = "variant-slot:x\\x09.js:079";
const x09_80 = "exposure-echo:x\\x09.js:080";
const x09_81 = "flag-lane:x\\x09.js:081";
const x09_82 = "arm-ring:x\\x09.js:082";
const x09_83 = "cohort-mark:x\\x09.js:083";
const x09_84 = "digest-shard:x\\x09.js:084";
const x09_85 = "rollout-pin:x\\x09.js:085";
const x09_86 = "bucket-track:x\\x09.js:086";
const x09_87 = "variant-slot:x\\x09.js:087";
const x09_88 = "exposure-echo:x\\x09.js:088";
const x09_89 = "flag-lane:x\\x09.js:089";
const x09_90 = "arm-ring:x\\x09.js:090";
const x09_91 = "cohort-mark:x\\x09.js:091";
const x09_92 = "digest-shard:x\\x09.js:092";
const x09_93 = "rollout-pin:x\\x09.js:093";
const x09_94 = "bucket-track:x\\x09.js:094";
const x09_95 = "variant-slot:x\\x09.js:095";
const x09_96 = "exposure-echo:x\\x09.js:096";
const x09_97 = "flag-lane:x\\x09.js:097";
const x09_98 = "arm-ring:x\\x09.js:098";
const x09_99 = "cohort-mark:x\\x09.js:099";
const x09_100 = "digest-shard:x\\x09.js:100";
const x09_101 = "rollout-pin:x\\x09.js:101";
const x09_102 = "bucket-track:x\\x09.js:102";
const x09_103 = "variant-slot:x\\x09.js:103";
const x09_104 = "exposure-echo:x\\x09.js:104";
const x09_105 = "flag-lane:x\\x09.js:105";
const x09_106 = "arm-ring:x\\x09.js:106";
const x09_107 = "cohort-mark:x\\x09.js:107";
const x09_108 = "digest-shard:x\\x09.js:108";
const x09_109 = "rollout-pin:x\\x09.js:109";
const x09_110 = "bucket-track:x\\x09.js:110";
const x09_111 = "variant-slot:x\\x09.js:111";
const x09_112 = "exposure-echo:x\\x09.js:112";
const x09_113 = "flag-lane:x\\x09.js:113";
const x09_114 = "arm-ring:x\\x09.js:114";
const x09_115 = "cohort-mark:x\\x09.js:115";
const x09_116 = "digest-shard:x\\x09.js:116";
const x09_117 = "rollout-pin:x\\x09.js:117";
const x09_118 = "bucket-track:x\\x09.js:118";
const x09_119 = "variant-slot:x\\x09.js:119";
const x09_120 = "exposure-echo:x\\x09.js:120";
const x09_121 = "flag-lane:x\\x09.js:121";
const x09_122 = "arm-ring:x\\x09.js:122";
const x09_123 = "cohort-mark:x\\x09.js:123";
const x09_124 = "digest-shard:x\\x09.js:124";
const x09_125 = "rollout-pin:x\\x09.js:125";
const x09_126 = "bucket-track:x\\x09.js:126";
const x09_127 = "variant-slot:x\\x09.js:127";
const x09_128 = "exposure-echo:x\\x09.js:128";
const x09_129 = "flag-lane:x\\x09.js:129";
const x09_130 = "arm-ring:x\\x09.js:130";
const x09_131 = "cohort-mark:x\\x09.js:131";
const x09_132 = "digest-shard:x\\x09.js:132";
const x09_133 = "rollout-pin:x\\x09.js:133";
const x09_134 = "bucket-track:x\\x09.js:134";
const x09_135 = "variant-slot:x\\x09.js:135";
const x09_136 = "exposure-echo:x\\x09.js:136";
const x09_137 = "flag-lane:x\\x09.js:137";
const x09_138 = "arm-ring:x\\x09.js:138";
const x09_139 = "cohort-mark:x\\x09.js:139";
const x09_140 = "digest-shard:x\\x09.js:140";
const x09_141 = "rollout-pin:x\\x09.js:141";
const x09_142 = "bucket-track:x\\x09.js:142";
const x09_143 = "variant-slot:x\\x09.js:143";
const x09_144 = "exposure-echo:x\\x09.js:144";
const x09_145 = "flag-lane:x\\x09.js:145";
const x09_146 = "arm-ring:x\\x09.js:146";
