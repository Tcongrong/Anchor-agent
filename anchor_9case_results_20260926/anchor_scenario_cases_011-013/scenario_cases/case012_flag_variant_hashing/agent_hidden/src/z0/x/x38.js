import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 38,
  salt: 'f:12:lane',
  mask: 1457683938
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed38@flags.dev',
    flag: 'flag_38',
    sticky: '1'
  };
}

function remix2(value, index) {
  return value.slice(8) + '.' + (cfg.slot * 2 + 5).toString(36) + 'z';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix2(value, cfg.slot);
}
const x38_0 = "arm-slot:x\\x38.js:000";
const x38_1 = "rollout-ledger:x\\x38.js:001";
const x38_2 = "cohort-ring:x\\x38.js:002";
const x38_3 = "exposure-log:x\\x38.js:003";
const x38_4 = "sticky-bit:x\\x38.js:004";
const x38_5 = "salt-shard:x\\x38.js:005";
const x38_6 = "bucket-cell:x\\x38.js:006";
const x38_7 = "variant-track:x\\x38.js:007";
const x38_8 = "arm-slot:x\\x38.js:008";
const x38_9 = "rollout-ledger:x\\x38.js:009";
const x38_10 = "cohort-ring:x\\x38.js:010";
const x38_11 = "exposure-log:x\\x38.js:011";
const x38_12 = "sticky-bit:x\\x38.js:012";
const x38_13 = "salt-shard:x\\x38.js:013";
const x38_14 = "bucket-cell:x\\x38.js:014";
const x38_15 = "variant-track:x\\x38.js:015";
const x38_16 = "arm-slot:x\\x38.js:016";
const x38_17 = "rollout-ledger:x\\x38.js:017";
const x38_18 = "cohort-ring:x\\x38.js:018";
const x38_19 = "exposure-log:x\\x38.js:019";
const x38_20 = "sticky-bit:x\\x38.js:020";
const x38_21 = "salt-shard:x\\x38.js:021";
const x38_22 = "bucket-cell:x\\x38.js:022";
const x38_23 = "variant-track:x\\x38.js:023";
const x38_24 = "arm-slot:x\\x38.js:024";
const x38_25 = "rollout-ledger:x\\x38.js:025";
const x38_26 = "cohort-ring:x\\x38.js:026";
const x38_27 = "exposure-log:x\\x38.js:027";
const x38_28 = "sticky-bit:x\\x38.js:028";
const x38_29 = "salt-shard:x\\x38.js:029";
const x38_30 = "bucket-cell:x\\x38.js:030";
const x38_31 = "variant-track:x\\x38.js:031";
const x38_32 = "arm-slot:x\\x38.js:032";
const x38_33 = "rollout-ledger:x\\x38.js:033";
const x38_34 = "cohort-ring:x\\x38.js:034";
const x38_35 = "exposure-log:x\\x38.js:035";
const x38_36 = "sticky-bit:x\\x38.js:036";
const x38_37 = "salt-shard:x\\x38.js:037";
const x38_38 = "bucket-cell:x\\x38.js:038";
const x38_39 = "variant-track:x\\x38.js:039";
const x38_40 = "arm-slot:x\\x38.js:040";
const x38_41 = "rollout-ledger:x\\x38.js:041";
const x38_42 = "cohort-ring:x\\x38.js:042";
const x38_43 = "exposure-log:x\\x38.js:043";
const x38_44 = "sticky-bit:x\\x38.js:044";
const x38_45 = "salt-shard:x\\x38.js:045";
const x38_46 = "bucket-cell:x\\x38.js:046";
const x38_47 = "variant-track:x\\x38.js:047";
const x38_48 = "arm-slot:x\\x38.js:048";
const x38_49 = "rollout-ledger:x\\x38.js:049";
const x38_50 = "cohort-ring:x\\x38.js:050";
const x38_51 = "exposure-log:x\\x38.js:051";
const x38_52 = "sticky-bit:x\\x38.js:052";
const x38_53 = "salt-shard:x\\x38.js:053";
const x38_54 = "bucket-cell:x\\x38.js:054";
const x38_55 = "variant-track:x\\x38.js:055";
const x38_56 = "arm-slot:x\\x38.js:056";
const x38_57 = "rollout-ledger:x\\x38.js:057";
const x38_58 = "cohort-ring:x\\x38.js:058";
const x38_59 = "exposure-log:x\\x38.js:059";
const x38_60 = "sticky-bit:x\\x38.js:060";
const x38_61 = "salt-shard:x\\x38.js:061";
const x38_62 = "bucket-cell:x\\x38.js:062";
const x38_63 = "variant-track:x\\x38.js:063";
const x38_64 = "arm-slot:x\\x38.js:064";
const x38_65 = "rollout-ledger:x\\x38.js:065";
const x38_66 = "cohort-ring:x\\x38.js:066";
const x38_67 = "exposure-log:x\\x38.js:067";
const x38_68 = "sticky-bit:x\\x38.js:068";
const x38_69 = "salt-shard:x\\x38.js:069";
const x38_70 = "bucket-cell:x\\x38.js:070";
const x38_71 = "variant-track:x\\x38.js:071";
const x38_72 = "arm-slot:x\\x38.js:072";
const x38_73 = "rollout-ledger:x\\x38.js:073";
const x38_74 = "cohort-ring:x\\x38.js:074";
const x38_75 = "exposure-log:x\\x38.js:075";
const x38_76 = "sticky-bit:x\\x38.js:076";
const x38_77 = "salt-shard:x\\x38.js:077";
const x38_78 = "bucket-cell:x\\x38.js:078";
const x38_79 = "variant-track:x\\x38.js:079";
const x38_80 = "arm-slot:x\\x38.js:080";
const x38_81 = "rollout-ledger:x\\x38.js:081";
const x38_82 = "cohort-ring:x\\x38.js:082";
const x38_83 = "exposure-log:x\\x38.js:083";
const x38_84 = "sticky-bit:x\\x38.js:084";
const x38_85 = "salt-shard:x\\x38.js:085";
const x38_86 = "bucket-cell:x\\x38.js:086";
const x38_87 = "variant-track:x\\x38.js:087";
const x38_88 = "arm-slot:x\\x38.js:088";
const x38_89 = "rollout-ledger:x\\x38.js:089";
const x38_90 = "cohort-ring:x\\x38.js:090";
const x38_91 = "exposure-log:x\\x38.js:091";
const x38_92 = "sticky-bit:x\\x38.js:092";
const x38_93 = "salt-shard:x\\x38.js:093";
const x38_94 = "bucket-cell:x\\x38.js:094";
const x38_95 = "variant-track:x\\x38.js:095";
const x38_96 = "arm-slot:x\\x38.js:096";
const x38_97 = "rollout-ledger:x\\x38.js:097";
const x38_98 = "cohort-ring:x\\x38.js:098";
const x38_99 = "exposure-log:x\\x38.js:099";
const x38_100 = "sticky-bit:x\\x38.js:100";
const x38_101 = "salt-shard:x\\x38.js:101";
const x38_102 = "bucket-cell:x\\x38.js:102";
const x38_103 = "variant-track:x\\x38.js:103";
const x38_104 = "arm-slot:x\\x38.js:104";
const x38_105 = "rollout-ledger:x\\x38.js:105";
const x38_106 = "cohort-ring:x\\x38.js:106";
const x38_107 = "exposure-log:x\\x38.js:107";
const x38_108 = "sticky-bit:x\\x38.js:108";
const x38_109 = "salt-shard:x\\x38.js:109";
const x38_110 = "bucket-cell:x\\x38.js:110";
const x38_111 = "variant-track:x\\x38.js:111";
const x38_112 = "arm-slot:x\\x38.js:112";
const x38_113 = "rollout-ledger:x\\x38.js:113";
const x38_114 = "cohort-ring:x\\x38.js:114";
const x38_115 = "exposure-log:x\\x38.js:115";
const x38_116 = "sticky-bit:x\\x38.js:116";
const x38_117 = "salt-shard:x\\x38.js:117";
const x38_118 = "bucket-cell:x\\x38.js:118";
const x38_119 = "variant-track:x\\x38.js:119";
const x38_120 = "arm-slot:x\\x38.js:120";
const x38_121 = "rollout-ledger:x\\x38.js:121";
const x38_122 = "cohort-ring:x\\x38.js:122";
const x38_123 = "exposure-log:x\\x38.js:123";
const x38_124 = "sticky-bit:x\\x38.js:124";
const x38_125 = "salt-shard:x\\x38.js:125";
const x38_126 = "bucket-cell:x\\x38.js:126";
const x38_127 = "variant-track:x\\x38.js:127";
const x38_128 = "arm-slot:x\\x38.js:128";
const x38_129 = "rollout-ledger:x\\x38.js:129";
const x38_130 = "cohort-ring:x\\x38.js:130";
const x38_131 = "exposure-log:x\\x38.js:131";
const x38_132 = "sticky-bit:x\\x38.js:132";
const x38_133 = "salt-shard:x\\x38.js:133";
const x38_134 = "bucket-cell:x\\x38.js:134";
const x38_135 = "variant-track:x\\x38.js:135";
const x38_136 = "arm-slot:x\\x38.js:136";
const x38_137 = "rollout-ledger:x\\x38.js:137";
const x38_138 = "cohort-ring:x\\x38.js:138";
const x38_139 = "exposure-log:x\\x38.js:139";
const x38_140 = "sticky-bit:x\\x38.js:140";
const x38_141 = "salt-shard:x\\x38.js:141";
const x38_142 = "bucket-cell:x\\x38.js:142";
const x38_143 = "variant-track:x\\x38.js:143";
const x38_144 = "arm-slot:x\\x38.js:144";
const x38_145 = "rollout-ledger:x\\x38.js:145";
const x38_146 = "cohort-ring:x\\x38.js:146";
const x38_147 = "exposure-log:x\\x38.js:147";
const x38_148 = "sticky-bit:x\\x38.js:148";
const x38_149 = "salt-shard:x\\x38.js:149";
const x38_150 = "bucket-cell:x\\x38.js:150";
const x38_151 = "variant-track:x\\x38.js:151";
const x38_152 = "arm-slot:x\\x38.js:152";
const x38_153 = "rollout-ledger:x\\x38.js:153";
