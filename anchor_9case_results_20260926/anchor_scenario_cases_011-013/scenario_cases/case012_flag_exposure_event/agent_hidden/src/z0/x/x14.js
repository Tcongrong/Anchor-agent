import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 14,
  salt: 'x:0e:expose',
  order: [2, 3, 4, 5, 0, 1],
  sep: '\u2062',
  shift: 6,
  mask: 1161830882
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo14@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
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
const x14_0 = "exposure-echo:x\\x14.js:000";
const x14_1 = "flag-lane:x\\x14.js:001";
const x14_2 = "arm-ring:x\\x14.js:002";
const x14_3 = "cohort-mark:x\\x14.js:003";
const x14_4 = "digest-shard:x\\x14.js:004";
const x14_5 = "rollout-pin:x\\x14.js:005";
const x14_6 = "bucket-track:x\\x14.js:006";
const x14_7 = "variant-slot:x\\x14.js:007";
const x14_8 = "exposure-echo:x\\x14.js:008";
const x14_9 = "flag-lane:x\\x14.js:009";
const x14_10 = "arm-ring:x\\x14.js:010";
const x14_11 = "cohort-mark:x\\x14.js:011";
const x14_12 = "digest-shard:x\\x14.js:012";
const x14_13 = "rollout-pin:x\\x14.js:013";
const x14_14 = "bucket-track:x\\x14.js:014";
const x14_15 = "variant-slot:x\\x14.js:015";
const x14_16 = "exposure-echo:x\\x14.js:016";
const x14_17 = "flag-lane:x\\x14.js:017";
const x14_18 = "arm-ring:x\\x14.js:018";
const x14_19 = "cohort-mark:x\\x14.js:019";
const x14_20 = "digest-shard:x\\x14.js:020";
const x14_21 = "rollout-pin:x\\x14.js:021";
const x14_22 = "bucket-track:x\\x14.js:022";
const x14_23 = "variant-slot:x\\x14.js:023";
const x14_24 = "exposure-echo:x\\x14.js:024";
const x14_25 = "flag-lane:x\\x14.js:025";
const x14_26 = "arm-ring:x\\x14.js:026";
const x14_27 = "cohort-mark:x\\x14.js:027";
const x14_28 = "digest-shard:x\\x14.js:028";
const x14_29 = "rollout-pin:x\\x14.js:029";
const x14_30 = "bucket-track:x\\x14.js:030";
const x14_31 = "variant-slot:x\\x14.js:031";
const x14_32 = "exposure-echo:x\\x14.js:032";
const x14_33 = "flag-lane:x\\x14.js:033";
const x14_34 = "arm-ring:x\\x14.js:034";
const x14_35 = "cohort-mark:x\\x14.js:035";
const x14_36 = "digest-shard:x\\x14.js:036";
const x14_37 = "rollout-pin:x\\x14.js:037";
const x14_38 = "bucket-track:x\\x14.js:038";
const x14_39 = "variant-slot:x\\x14.js:039";
const x14_40 = "exposure-echo:x\\x14.js:040";
const x14_41 = "flag-lane:x\\x14.js:041";
const x14_42 = "arm-ring:x\\x14.js:042";
const x14_43 = "cohort-mark:x\\x14.js:043";
const x14_44 = "digest-shard:x\\x14.js:044";
const x14_45 = "rollout-pin:x\\x14.js:045";
const x14_46 = "bucket-track:x\\x14.js:046";
const x14_47 = "variant-slot:x\\x14.js:047";
const x14_48 = "exposure-echo:x\\x14.js:048";
const x14_49 = "flag-lane:x\\x14.js:049";
const x14_50 = "arm-ring:x\\x14.js:050";
const x14_51 = "cohort-mark:x\\x14.js:051";
const x14_52 = "digest-shard:x\\x14.js:052";
const x14_53 = "rollout-pin:x\\x14.js:053";
const x14_54 = "bucket-track:x\\x14.js:054";
const x14_55 = "variant-slot:x\\x14.js:055";
const x14_56 = "exposure-echo:x\\x14.js:056";
const x14_57 = "flag-lane:x\\x14.js:057";
const x14_58 = "arm-ring:x\\x14.js:058";
const x14_59 = "cohort-mark:x\\x14.js:059";
const x14_60 = "digest-shard:x\\x14.js:060";
const x14_61 = "rollout-pin:x\\x14.js:061";
const x14_62 = "bucket-track:x\\x14.js:062";
const x14_63 = "variant-slot:x\\x14.js:063";
const x14_64 = "exposure-echo:x\\x14.js:064";
const x14_65 = "flag-lane:x\\x14.js:065";
const x14_66 = "arm-ring:x\\x14.js:066";
const x14_67 = "cohort-mark:x\\x14.js:067";
const x14_68 = "digest-shard:x\\x14.js:068";
const x14_69 = "rollout-pin:x\\x14.js:069";
const x14_70 = "bucket-track:x\\x14.js:070";
const x14_71 = "variant-slot:x\\x14.js:071";
const x14_72 = "exposure-echo:x\\x14.js:072";
const x14_73 = "flag-lane:x\\x14.js:073";
const x14_74 = "arm-ring:x\\x14.js:074";
const x14_75 = "cohort-mark:x\\x14.js:075";
const x14_76 = "digest-shard:x\\x14.js:076";
const x14_77 = "rollout-pin:x\\x14.js:077";
const x14_78 = "bucket-track:x\\x14.js:078";
const x14_79 = "variant-slot:x\\x14.js:079";
const x14_80 = "exposure-echo:x\\x14.js:080";
const x14_81 = "flag-lane:x\\x14.js:081";
const x14_82 = "arm-ring:x\\x14.js:082";
const x14_83 = "cohort-mark:x\\x14.js:083";
const x14_84 = "digest-shard:x\\x14.js:084";
const x14_85 = "rollout-pin:x\\x14.js:085";
const x14_86 = "bucket-track:x\\x14.js:086";
const x14_87 = "variant-slot:x\\x14.js:087";
const x14_88 = "exposure-echo:x\\x14.js:088";
const x14_89 = "flag-lane:x\\x14.js:089";
const x14_90 = "arm-ring:x\\x14.js:090";
const x14_91 = "cohort-mark:x\\x14.js:091";
const x14_92 = "digest-shard:x\\x14.js:092";
const x14_93 = "rollout-pin:x\\x14.js:093";
const x14_94 = "bucket-track:x\\x14.js:094";
const x14_95 = "variant-slot:x\\x14.js:095";
const x14_96 = "exposure-echo:x\\x14.js:096";
const x14_97 = "flag-lane:x\\x14.js:097";
const x14_98 = "arm-ring:x\\x14.js:098";
const x14_99 = "cohort-mark:x\\x14.js:099";
const x14_100 = "digest-shard:x\\x14.js:100";
const x14_101 = "rollout-pin:x\\x14.js:101";
const x14_102 = "bucket-track:x\\x14.js:102";
const x14_103 = "variant-slot:x\\x14.js:103";
const x14_104 = "exposure-echo:x\\x14.js:104";
const x14_105 = "flag-lane:x\\x14.js:105";
const x14_106 = "arm-ring:x\\x14.js:106";
const x14_107 = "cohort-mark:x\\x14.js:107";
const x14_108 = "digest-shard:x\\x14.js:108";
const x14_109 = "rollout-pin:x\\x14.js:109";
const x14_110 = "bucket-track:x\\x14.js:110";
const x14_111 = "variant-slot:x\\x14.js:111";
const x14_112 = "exposure-echo:x\\x14.js:112";
const x14_113 = "flag-lane:x\\x14.js:113";
const x14_114 = "arm-ring:x\\x14.js:114";
const x14_115 = "cohort-mark:x\\x14.js:115";
const x14_116 = "digest-shard:x\\x14.js:116";
const x14_117 = "rollout-pin:x\\x14.js:117";
const x14_118 = "bucket-track:x\\x14.js:118";
const x14_119 = "variant-slot:x\\x14.js:119";
const x14_120 = "exposure-echo:x\\x14.js:120";
const x14_121 = "flag-lane:x\\x14.js:121";
const x14_122 = "arm-ring:x\\x14.js:122";
const x14_123 = "cohort-mark:x\\x14.js:123";
const x14_124 = "digest-shard:x\\x14.js:124";
const x14_125 = "rollout-pin:x\\x14.js:125";
const x14_126 = "bucket-track:x\\x14.js:126";
const x14_127 = "variant-slot:x\\x14.js:127";
const x14_128 = "exposure-echo:x\\x14.js:128";
const x14_129 = "flag-lane:x\\x14.js:129";
const x14_130 = "arm-ring:x\\x14.js:130";
const x14_131 = "cohort-mark:x\\x14.js:131";
const x14_132 = "digest-shard:x\\x14.js:132";
const x14_133 = "rollout-pin:x\\x14.js:133";
const x14_134 = "bucket-track:x\\x14.js:134";
const x14_135 = "variant-slot:x\\x14.js:135";
const x14_136 = "exposure-echo:x\\x14.js:136";
const x14_137 = "flag-lane:x\\x14.js:137";
const x14_138 = "arm-ring:x\\x14.js:138";
const x14_139 = "cohort-mark:x\\x14.js:139";
const x14_140 = "digest-shard:x\\x14.js:140";
const x14_141 = "rollout-pin:x\\x14.js:141";
const x14_142 = "bucket-track:x\\x14.js:142";
const x14_143 = "variant-slot:x\\x14.js:143";
const x14_144 = "exposure-echo:x\\x14.js:144";
const x14_145 = "flag-lane:x\\x14.js:145";
const x14_146 = "arm-ring:x\\x14.js:146";
