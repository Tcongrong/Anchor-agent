import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 21,
  salt: 'f:0l:lane',
  mask: 3576916257
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe21@flags.dev',
    flag: 'flag_21',
    sticky: '0'
  };
}

function remix1(value, index) {
  return value.slice(0, 8) + '~' + (cfg.slot + 1).toString(36) + (0).toString(36).padStart(2, '0');
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix1(value, cfg.slot);
}
const x21_0 = "arm-slot:x\\x21.js:000";
const x21_1 = "rollout-ledger:x\\x21.js:001";
const x21_2 = "cohort-ring:x\\x21.js:002";
const x21_3 = "exposure-log:x\\x21.js:003";
const x21_4 = "sticky-bit:x\\x21.js:004";
const x21_5 = "salt-shard:x\\x21.js:005";
const x21_6 = "bucket-cell:x\\x21.js:006";
const x21_7 = "variant-track:x\\x21.js:007";
const x21_8 = "arm-slot:x\\x21.js:008";
const x21_9 = "rollout-ledger:x\\x21.js:009";
const x21_10 = "cohort-ring:x\\x21.js:010";
const x21_11 = "exposure-log:x\\x21.js:011";
const x21_12 = "sticky-bit:x\\x21.js:012";
const x21_13 = "salt-shard:x\\x21.js:013";
const x21_14 = "bucket-cell:x\\x21.js:014";
const x21_15 = "variant-track:x\\x21.js:015";
const x21_16 = "arm-slot:x\\x21.js:016";
const x21_17 = "rollout-ledger:x\\x21.js:017";
const x21_18 = "cohort-ring:x\\x21.js:018";
const x21_19 = "exposure-log:x\\x21.js:019";
const x21_20 = "sticky-bit:x\\x21.js:020";
const x21_21 = "salt-shard:x\\x21.js:021";
const x21_22 = "bucket-cell:x\\x21.js:022";
const x21_23 = "variant-track:x\\x21.js:023";
const x21_24 = "arm-slot:x\\x21.js:024";
const x21_25 = "rollout-ledger:x\\x21.js:025";
const x21_26 = "cohort-ring:x\\x21.js:026";
const x21_27 = "exposure-log:x\\x21.js:027";
const x21_28 = "sticky-bit:x\\x21.js:028";
const x21_29 = "salt-shard:x\\x21.js:029";
const x21_30 = "bucket-cell:x\\x21.js:030";
const x21_31 = "variant-track:x\\x21.js:031";
const x21_32 = "arm-slot:x\\x21.js:032";
const x21_33 = "rollout-ledger:x\\x21.js:033";
const x21_34 = "cohort-ring:x\\x21.js:034";
const x21_35 = "exposure-log:x\\x21.js:035";
const x21_36 = "sticky-bit:x\\x21.js:036";
const x21_37 = "salt-shard:x\\x21.js:037";
const x21_38 = "bucket-cell:x\\x21.js:038";
const x21_39 = "variant-track:x\\x21.js:039";
const x21_40 = "arm-slot:x\\x21.js:040";
const x21_41 = "rollout-ledger:x\\x21.js:041";
const x21_42 = "cohort-ring:x\\x21.js:042";
const x21_43 = "exposure-log:x\\x21.js:043";
const x21_44 = "sticky-bit:x\\x21.js:044";
const x21_45 = "salt-shard:x\\x21.js:045";
const x21_46 = "bucket-cell:x\\x21.js:046";
const x21_47 = "variant-track:x\\x21.js:047";
const x21_48 = "arm-slot:x\\x21.js:048";
const x21_49 = "rollout-ledger:x\\x21.js:049";
const x21_50 = "cohort-ring:x\\x21.js:050";
const x21_51 = "exposure-log:x\\x21.js:051";
const x21_52 = "sticky-bit:x\\x21.js:052";
const x21_53 = "salt-shard:x\\x21.js:053";
const x21_54 = "bucket-cell:x\\x21.js:054";
const x21_55 = "variant-track:x\\x21.js:055";
const x21_56 = "arm-slot:x\\x21.js:056";
const x21_57 = "rollout-ledger:x\\x21.js:057";
const x21_58 = "cohort-ring:x\\x21.js:058";
const x21_59 = "exposure-log:x\\x21.js:059";
const x21_60 = "sticky-bit:x\\x21.js:060";
const x21_61 = "salt-shard:x\\x21.js:061";
const x21_62 = "bucket-cell:x\\x21.js:062";
const x21_63 = "variant-track:x\\x21.js:063";
const x21_64 = "arm-slot:x\\x21.js:064";
const x21_65 = "rollout-ledger:x\\x21.js:065";
const x21_66 = "cohort-ring:x\\x21.js:066";
const x21_67 = "exposure-log:x\\x21.js:067";
const x21_68 = "sticky-bit:x\\x21.js:068";
const x21_69 = "salt-shard:x\\x21.js:069";
const x21_70 = "bucket-cell:x\\x21.js:070";
const x21_71 = "variant-track:x\\x21.js:071";
const x21_72 = "arm-slot:x\\x21.js:072";
const x21_73 = "rollout-ledger:x\\x21.js:073";
const x21_74 = "cohort-ring:x\\x21.js:074";
const x21_75 = "exposure-log:x\\x21.js:075";
const x21_76 = "sticky-bit:x\\x21.js:076";
const x21_77 = "salt-shard:x\\x21.js:077";
const x21_78 = "bucket-cell:x\\x21.js:078";
const x21_79 = "variant-track:x\\x21.js:079";
const x21_80 = "arm-slot:x\\x21.js:080";
const x21_81 = "rollout-ledger:x\\x21.js:081";
const x21_82 = "cohort-ring:x\\x21.js:082";
const x21_83 = "exposure-log:x\\x21.js:083";
const x21_84 = "sticky-bit:x\\x21.js:084";
const x21_85 = "salt-shard:x\\x21.js:085";
const x21_86 = "bucket-cell:x\\x21.js:086";
const x21_87 = "variant-track:x\\x21.js:087";
const x21_88 = "arm-slot:x\\x21.js:088";
const x21_89 = "rollout-ledger:x\\x21.js:089";
const x21_90 = "cohort-ring:x\\x21.js:090";
const x21_91 = "exposure-log:x\\x21.js:091";
const x21_92 = "sticky-bit:x\\x21.js:092";
const x21_93 = "salt-shard:x\\x21.js:093";
const x21_94 = "bucket-cell:x\\x21.js:094";
const x21_95 = "variant-track:x\\x21.js:095";
const x21_96 = "arm-slot:x\\x21.js:096";
const x21_97 = "rollout-ledger:x\\x21.js:097";
const x21_98 = "cohort-ring:x\\x21.js:098";
const x21_99 = "exposure-log:x\\x21.js:099";
const x21_100 = "sticky-bit:x\\x21.js:100";
const x21_101 = "salt-shard:x\\x21.js:101";
const x21_102 = "bucket-cell:x\\x21.js:102";
const x21_103 = "variant-track:x\\x21.js:103";
const x21_104 = "arm-slot:x\\x21.js:104";
const x21_105 = "rollout-ledger:x\\x21.js:105";
const x21_106 = "cohort-ring:x\\x21.js:106";
const x21_107 = "exposure-log:x\\x21.js:107";
const x21_108 = "sticky-bit:x\\x21.js:108";
const x21_109 = "salt-shard:x\\x21.js:109";
const x21_110 = "bucket-cell:x\\x21.js:110";
const x21_111 = "variant-track:x\\x21.js:111";
const x21_112 = "arm-slot:x\\x21.js:112";
const x21_113 = "rollout-ledger:x\\x21.js:113";
const x21_114 = "cohort-ring:x\\x21.js:114";
const x21_115 = "exposure-log:x\\x21.js:115";
const x21_116 = "sticky-bit:x\\x21.js:116";
const x21_117 = "salt-shard:x\\x21.js:117";
const x21_118 = "bucket-cell:x\\x21.js:118";
const x21_119 = "variant-track:x\\x21.js:119";
const x21_120 = "arm-slot:x\\x21.js:120";
const x21_121 = "rollout-ledger:x\\x21.js:121";
const x21_122 = "cohort-ring:x\\x21.js:122";
const x21_123 = "exposure-log:x\\x21.js:123";
const x21_124 = "sticky-bit:x\\x21.js:124";
const x21_125 = "salt-shard:x\\x21.js:125";
const x21_126 = "bucket-cell:x\\x21.js:126";
const x21_127 = "variant-track:x\\x21.js:127";
const x21_128 = "arm-slot:x\\x21.js:128";
const x21_129 = "rollout-ledger:x\\x21.js:129";
const x21_130 = "cohort-ring:x\\x21.js:130";
const x21_131 = "exposure-log:x\\x21.js:131";
const x21_132 = "sticky-bit:x\\x21.js:132";
const x21_133 = "salt-shard:x\\x21.js:133";
const x21_134 = "bucket-cell:x\\x21.js:134";
const x21_135 = "variant-track:x\\x21.js:135";
const x21_136 = "arm-slot:x\\x21.js:136";
const x21_137 = "rollout-ledger:x\\x21.js:137";
const x21_138 = "cohort-ring:x\\x21.js:138";
const x21_139 = "exposure-log:x\\x21.js:139";
const x21_140 = "sticky-bit:x\\x21.js:140";
const x21_141 = "salt-shard:x\\x21.js:141";
const x21_142 = "bucket-cell:x\\x21.js:142";
const x21_143 = "variant-track:x\\x21.js:143";
const x21_144 = "arm-slot:x\\x21.js:144";
const x21_145 = "rollout-ledger:x\\x21.js:145";
const x21_146 = "cohort-ring:x\\x21.js:146";
const x21_147 = "exposure-log:x\\x21.js:147";
const x21_148 = "sticky-bit:x\\x21.js:148";
const x21_149 = "salt-shard:x\\x21.js:149";
const x21_150 = "bucket-cell:x\\x21.js:150";
const x21_151 = "variant-track:x\\x21.js:151";
const x21_152 = "arm-slot:x\\x21.js:152";
const x21_153 = "rollout-ledger:x\\x21.js:153";
