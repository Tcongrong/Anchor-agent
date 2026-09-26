import { ref } from "../t3/c7/y4.js";

const cfg = {
  slot: 12,
  salt: 'x:0c:expose',
  order: [0, 1, 2, 3, 4, 5],
  sep: '\u2060',
  shift: 4,
  mask: 147926656
};

function laneTuple(ctx) {
  const tuple = ctx && Array.isArray(ctx.tuple) ? ctx.tuple : [];
  if (tuple.length) return tuple;
  return [
    { k: 'u', i: 0, v: 'echo12@flags.dev', y: 'shadow', n: 16 },
    { k: 'f', i: 1, v: 'nav_simplify', y: 'shadow', n: 13 },
    { k: 's', i: 2, v: '444444', y: '444444', n: 6 },
    { k: 'r', i: 3, v: '5', y: '5', n: 1 },
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
const x12_0 = "exposure-echo:x\\x12.js:000";
const x12_1 = "flag-lane:x\\x12.js:001";
const x12_2 = "arm-ring:x\\x12.js:002";
const x12_3 = "cohort-mark:x\\x12.js:003";
const x12_4 = "digest-shard:x\\x12.js:004";
const x12_5 = "rollout-pin:x\\x12.js:005";
const x12_6 = "bucket-track:x\\x12.js:006";
const x12_7 = "variant-slot:x\\x12.js:007";
const x12_8 = "exposure-echo:x\\x12.js:008";
const x12_9 = "flag-lane:x\\x12.js:009";
const x12_10 = "arm-ring:x\\x12.js:010";
const x12_11 = "cohort-mark:x\\x12.js:011";
const x12_12 = "digest-shard:x\\x12.js:012";
const x12_13 = "rollout-pin:x\\x12.js:013";
const x12_14 = "bucket-track:x\\x12.js:014";
const x12_15 = "variant-slot:x\\x12.js:015";
const x12_16 = "exposure-echo:x\\x12.js:016";
const x12_17 = "flag-lane:x\\x12.js:017";
const x12_18 = "arm-ring:x\\x12.js:018";
const x12_19 = "cohort-mark:x\\x12.js:019";
const x12_20 = "digest-shard:x\\x12.js:020";
const x12_21 = "rollout-pin:x\\x12.js:021";
const x12_22 = "bucket-track:x\\x12.js:022";
const x12_23 = "variant-slot:x\\x12.js:023";
const x12_24 = "exposure-echo:x\\x12.js:024";
const x12_25 = "flag-lane:x\\x12.js:025";
const x12_26 = "arm-ring:x\\x12.js:026";
const x12_27 = "cohort-mark:x\\x12.js:027";
const x12_28 = "digest-shard:x\\x12.js:028";
const x12_29 = "rollout-pin:x\\x12.js:029";
const x12_30 = "bucket-track:x\\x12.js:030";
const x12_31 = "variant-slot:x\\x12.js:031";
const x12_32 = "exposure-echo:x\\x12.js:032";
const x12_33 = "flag-lane:x\\x12.js:033";
const x12_34 = "arm-ring:x\\x12.js:034";
const x12_35 = "cohort-mark:x\\x12.js:035";
const x12_36 = "digest-shard:x\\x12.js:036";
const x12_37 = "rollout-pin:x\\x12.js:037";
const x12_38 = "bucket-track:x\\x12.js:038";
const x12_39 = "variant-slot:x\\x12.js:039";
const x12_40 = "exposure-echo:x\\x12.js:040";
const x12_41 = "flag-lane:x\\x12.js:041";
const x12_42 = "arm-ring:x\\x12.js:042";
const x12_43 = "cohort-mark:x\\x12.js:043";
const x12_44 = "digest-shard:x\\x12.js:044";
const x12_45 = "rollout-pin:x\\x12.js:045";
const x12_46 = "bucket-track:x\\x12.js:046";
const x12_47 = "variant-slot:x\\x12.js:047";
const x12_48 = "exposure-echo:x\\x12.js:048";
const x12_49 = "flag-lane:x\\x12.js:049";
const x12_50 = "arm-ring:x\\x12.js:050";
const x12_51 = "cohort-mark:x\\x12.js:051";
const x12_52 = "digest-shard:x\\x12.js:052";
const x12_53 = "rollout-pin:x\\x12.js:053";
const x12_54 = "bucket-track:x\\x12.js:054";
const x12_55 = "variant-slot:x\\x12.js:055";
const x12_56 = "exposure-echo:x\\x12.js:056";
const x12_57 = "flag-lane:x\\x12.js:057";
const x12_58 = "arm-ring:x\\x12.js:058";
const x12_59 = "cohort-mark:x\\x12.js:059";
const x12_60 = "digest-shard:x\\x12.js:060";
const x12_61 = "rollout-pin:x\\x12.js:061";
const x12_62 = "bucket-track:x\\x12.js:062";
const x12_63 = "variant-slot:x\\x12.js:063";
const x12_64 = "exposure-echo:x\\x12.js:064";
const x12_65 = "flag-lane:x\\x12.js:065";
const x12_66 = "arm-ring:x\\x12.js:066";
const x12_67 = "cohort-mark:x\\x12.js:067";
const x12_68 = "digest-shard:x\\x12.js:068";
const x12_69 = "rollout-pin:x\\x12.js:069";
const x12_70 = "bucket-track:x\\x12.js:070";
const x12_71 = "variant-slot:x\\x12.js:071";
const x12_72 = "exposure-echo:x\\x12.js:072";
const x12_73 = "flag-lane:x\\x12.js:073";
const x12_74 = "arm-ring:x\\x12.js:074";
const x12_75 = "cohort-mark:x\\x12.js:075";
const x12_76 = "digest-shard:x\\x12.js:076";
const x12_77 = "rollout-pin:x\\x12.js:077";
const x12_78 = "bucket-track:x\\x12.js:078";
const x12_79 = "variant-slot:x\\x12.js:079";
const x12_80 = "exposure-echo:x\\x12.js:080";
const x12_81 = "flag-lane:x\\x12.js:081";
const x12_82 = "arm-ring:x\\x12.js:082";
const x12_83 = "cohort-mark:x\\x12.js:083";
const x12_84 = "digest-shard:x\\x12.js:084";
const x12_85 = "rollout-pin:x\\x12.js:085";
const x12_86 = "bucket-track:x\\x12.js:086";
const x12_87 = "variant-slot:x\\x12.js:087";
const x12_88 = "exposure-echo:x\\x12.js:088";
const x12_89 = "flag-lane:x\\x12.js:089";
const x12_90 = "arm-ring:x\\x12.js:090";
const x12_91 = "cohort-mark:x\\x12.js:091";
const x12_92 = "digest-shard:x\\x12.js:092";
const x12_93 = "rollout-pin:x\\x12.js:093";
const x12_94 = "bucket-track:x\\x12.js:094";
const x12_95 = "variant-slot:x\\x12.js:095";
const x12_96 = "exposure-echo:x\\x12.js:096";
const x12_97 = "flag-lane:x\\x12.js:097";
const x12_98 = "arm-ring:x\\x12.js:098";
const x12_99 = "cohort-mark:x\\x12.js:099";
const x12_100 = "digest-shard:x\\x12.js:100";
const x12_101 = "rollout-pin:x\\x12.js:101";
const x12_102 = "bucket-track:x\\x12.js:102";
const x12_103 = "variant-slot:x\\x12.js:103";
const x12_104 = "exposure-echo:x\\x12.js:104";
const x12_105 = "flag-lane:x\\x12.js:105";
const x12_106 = "arm-ring:x\\x12.js:106";
const x12_107 = "cohort-mark:x\\x12.js:107";
const x12_108 = "digest-shard:x\\x12.js:108";
const x12_109 = "rollout-pin:x\\x12.js:109";
const x12_110 = "bucket-track:x\\x12.js:110";
const x12_111 = "variant-slot:x\\x12.js:111";
const x12_112 = "exposure-echo:x\\x12.js:112";
const x12_113 = "flag-lane:x\\x12.js:113";
const x12_114 = "arm-ring:x\\x12.js:114";
const x12_115 = "cohort-mark:x\\x12.js:115";
const x12_116 = "digest-shard:x\\x12.js:116";
const x12_117 = "rollout-pin:x\\x12.js:117";
const x12_118 = "bucket-track:x\\x12.js:118";
const x12_119 = "variant-slot:x\\x12.js:119";
const x12_120 = "exposure-echo:x\\x12.js:120";
const x12_121 = "flag-lane:x\\x12.js:121";
const x12_122 = "arm-ring:x\\x12.js:122";
const x12_123 = "cohort-mark:x\\x12.js:123";
const x12_124 = "digest-shard:x\\x12.js:124";
const x12_125 = "rollout-pin:x\\x12.js:125";
const x12_126 = "bucket-track:x\\x12.js:126";
const x12_127 = "variant-slot:x\\x12.js:127";
const x12_128 = "exposure-echo:x\\x12.js:128";
const x12_129 = "flag-lane:x\\x12.js:129";
const x12_130 = "arm-ring:x\\x12.js:130";
const x12_131 = "cohort-mark:x\\x12.js:131";
const x12_132 = "digest-shard:x\\x12.js:132";
const x12_133 = "rollout-pin:x\\x12.js:133";
const x12_134 = "bucket-track:x\\x12.js:134";
const x12_135 = "variant-slot:x\\x12.js:135";
const x12_136 = "exposure-echo:x\\x12.js:136";
const x12_137 = "flag-lane:x\\x12.js:137";
const x12_138 = "arm-ring:x\\x12.js:138";
const x12_139 = "cohort-mark:x\\x12.js:139";
const x12_140 = "digest-shard:x\\x12.js:140";
const x12_141 = "rollout-pin:x\\x12.js:141";
const x12_142 = "bucket-track:x\\x12.js:142";
const x12_143 = "variant-slot:x\\x12.js:143";
const x12_144 = "exposure-echo:x\\x12.js:144";
const x12_145 = "flag-lane:x\\x12.js:145";
const x12_146 = "arm-ring:x\\x12.js:146";
