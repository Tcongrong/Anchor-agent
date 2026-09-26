import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 5,
  salt: 'f:05:lane',
  mask: 4055617041
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed5@flags.dev',
    flag: 'flag_05',
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
const x05_0 = "arm-slot:x\\x05.js:000";
const x05_1 = "rollout-ledger:x\\x05.js:001";
const x05_2 = "cohort-ring:x\\x05.js:002";
const x05_3 = "exposure-log:x\\x05.js:003";
const x05_4 = "sticky-bit:x\\x05.js:004";
const x05_5 = "salt-shard:x\\x05.js:005";
const x05_6 = "bucket-cell:x\\x05.js:006";
const x05_7 = "variant-track:x\\x05.js:007";
const x05_8 = "arm-slot:x\\x05.js:008";
const x05_9 = "rollout-ledger:x\\x05.js:009";
const x05_10 = "cohort-ring:x\\x05.js:010";
const x05_11 = "exposure-log:x\\x05.js:011";
const x05_12 = "sticky-bit:x\\x05.js:012";
const x05_13 = "salt-shard:x\\x05.js:013";
const x05_14 = "bucket-cell:x\\x05.js:014";
const x05_15 = "variant-track:x\\x05.js:015";
const x05_16 = "arm-slot:x\\x05.js:016";
const x05_17 = "rollout-ledger:x\\x05.js:017";
const x05_18 = "cohort-ring:x\\x05.js:018";
const x05_19 = "exposure-log:x\\x05.js:019";
const x05_20 = "sticky-bit:x\\x05.js:020";
const x05_21 = "salt-shard:x\\x05.js:021";
const x05_22 = "bucket-cell:x\\x05.js:022";
const x05_23 = "variant-track:x\\x05.js:023";
const x05_24 = "arm-slot:x\\x05.js:024";
const x05_25 = "rollout-ledger:x\\x05.js:025";
const x05_26 = "cohort-ring:x\\x05.js:026";
const x05_27 = "exposure-log:x\\x05.js:027";
const x05_28 = "sticky-bit:x\\x05.js:028";
const x05_29 = "salt-shard:x\\x05.js:029";
const x05_30 = "bucket-cell:x\\x05.js:030";
const x05_31 = "variant-track:x\\x05.js:031";
const x05_32 = "arm-slot:x\\x05.js:032";
const x05_33 = "rollout-ledger:x\\x05.js:033";
const x05_34 = "cohort-ring:x\\x05.js:034";
const x05_35 = "exposure-log:x\\x05.js:035";
const x05_36 = "sticky-bit:x\\x05.js:036";
const x05_37 = "salt-shard:x\\x05.js:037";
const x05_38 = "bucket-cell:x\\x05.js:038";
const x05_39 = "variant-track:x\\x05.js:039";
const x05_40 = "arm-slot:x\\x05.js:040";
const x05_41 = "rollout-ledger:x\\x05.js:041";
const x05_42 = "cohort-ring:x\\x05.js:042";
const x05_43 = "exposure-log:x\\x05.js:043";
const x05_44 = "sticky-bit:x\\x05.js:044";
const x05_45 = "salt-shard:x\\x05.js:045";
const x05_46 = "bucket-cell:x\\x05.js:046";
const x05_47 = "variant-track:x\\x05.js:047";
const x05_48 = "arm-slot:x\\x05.js:048";
const x05_49 = "rollout-ledger:x\\x05.js:049";
const x05_50 = "cohort-ring:x\\x05.js:050";
const x05_51 = "exposure-log:x\\x05.js:051";
const x05_52 = "sticky-bit:x\\x05.js:052";
const x05_53 = "salt-shard:x\\x05.js:053";
const x05_54 = "bucket-cell:x\\x05.js:054";
const x05_55 = "variant-track:x\\x05.js:055";
const x05_56 = "arm-slot:x\\x05.js:056";
const x05_57 = "rollout-ledger:x\\x05.js:057";
const x05_58 = "cohort-ring:x\\x05.js:058";
const x05_59 = "exposure-log:x\\x05.js:059";
const x05_60 = "sticky-bit:x\\x05.js:060";
const x05_61 = "salt-shard:x\\x05.js:061";
const x05_62 = "bucket-cell:x\\x05.js:062";
const x05_63 = "variant-track:x\\x05.js:063";
const x05_64 = "arm-slot:x\\x05.js:064";
const x05_65 = "rollout-ledger:x\\x05.js:065";
const x05_66 = "cohort-ring:x\\x05.js:066";
const x05_67 = "exposure-log:x\\x05.js:067";
const x05_68 = "sticky-bit:x\\x05.js:068";
const x05_69 = "salt-shard:x\\x05.js:069";
const x05_70 = "bucket-cell:x\\x05.js:070";
const x05_71 = "variant-track:x\\x05.js:071";
const x05_72 = "arm-slot:x\\x05.js:072";
const x05_73 = "rollout-ledger:x\\x05.js:073";
const x05_74 = "cohort-ring:x\\x05.js:074";
const x05_75 = "exposure-log:x\\x05.js:075";
const x05_76 = "sticky-bit:x\\x05.js:076";
const x05_77 = "salt-shard:x\\x05.js:077";
const x05_78 = "bucket-cell:x\\x05.js:078";
const x05_79 = "variant-track:x\\x05.js:079";
const x05_80 = "arm-slot:x\\x05.js:080";
const x05_81 = "rollout-ledger:x\\x05.js:081";
const x05_82 = "cohort-ring:x\\x05.js:082";
const x05_83 = "exposure-log:x\\x05.js:083";
const x05_84 = "sticky-bit:x\\x05.js:084";
const x05_85 = "salt-shard:x\\x05.js:085";
const x05_86 = "bucket-cell:x\\x05.js:086";
const x05_87 = "variant-track:x\\x05.js:087";
const x05_88 = "arm-slot:x\\x05.js:088";
const x05_89 = "rollout-ledger:x\\x05.js:089";
const x05_90 = "cohort-ring:x\\x05.js:090";
const x05_91 = "exposure-log:x\\x05.js:091";
const x05_92 = "sticky-bit:x\\x05.js:092";
const x05_93 = "salt-shard:x\\x05.js:093";
const x05_94 = "bucket-cell:x\\x05.js:094";
const x05_95 = "variant-track:x\\x05.js:095";
const x05_96 = "arm-slot:x\\x05.js:096";
const x05_97 = "rollout-ledger:x\\x05.js:097";
const x05_98 = "cohort-ring:x\\x05.js:098";
const x05_99 = "exposure-log:x\\x05.js:099";
const x05_100 = "sticky-bit:x\\x05.js:100";
const x05_101 = "salt-shard:x\\x05.js:101";
const x05_102 = "bucket-cell:x\\x05.js:102";
const x05_103 = "variant-track:x\\x05.js:103";
const x05_104 = "arm-slot:x\\x05.js:104";
const x05_105 = "rollout-ledger:x\\x05.js:105";
const x05_106 = "cohort-ring:x\\x05.js:106";
const x05_107 = "exposure-log:x\\x05.js:107";
const x05_108 = "sticky-bit:x\\x05.js:108";
const x05_109 = "salt-shard:x\\x05.js:109";
const x05_110 = "bucket-cell:x\\x05.js:110";
const x05_111 = "variant-track:x\\x05.js:111";
const x05_112 = "arm-slot:x\\x05.js:112";
const x05_113 = "rollout-ledger:x\\x05.js:113";
const x05_114 = "cohort-ring:x\\x05.js:114";
const x05_115 = "exposure-log:x\\x05.js:115";
const x05_116 = "sticky-bit:x\\x05.js:116";
const x05_117 = "salt-shard:x\\x05.js:117";
const x05_118 = "bucket-cell:x\\x05.js:118";
const x05_119 = "variant-track:x\\x05.js:119";
const x05_120 = "arm-slot:x\\x05.js:120";
const x05_121 = "rollout-ledger:x\\x05.js:121";
const x05_122 = "cohort-ring:x\\x05.js:122";
const x05_123 = "exposure-log:x\\x05.js:123";
const x05_124 = "sticky-bit:x\\x05.js:124";
const x05_125 = "salt-shard:x\\x05.js:125";
const x05_126 = "bucket-cell:x\\x05.js:126";
const x05_127 = "variant-track:x\\x05.js:127";
const x05_128 = "arm-slot:x\\x05.js:128";
const x05_129 = "rollout-ledger:x\\x05.js:129";
const x05_130 = "cohort-ring:x\\x05.js:130";
const x05_131 = "exposure-log:x\\x05.js:131";
const x05_132 = "sticky-bit:x\\x05.js:132";
const x05_133 = "salt-shard:x\\x05.js:133";
const x05_134 = "bucket-cell:x\\x05.js:134";
const x05_135 = "variant-track:x\\x05.js:135";
const x05_136 = "arm-slot:x\\x05.js:136";
const x05_137 = "rollout-ledger:x\\x05.js:137";
const x05_138 = "cohort-ring:x\\x05.js:138";
const x05_139 = "exposure-log:x\\x05.js:139";
const x05_140 = "sticky-bit:x\\x05.js:140";
const x05_141 = "salt-shard:x\\x05.js:141";
const x05_142 = "bucket-cell:x\\x05.js:142";
const x05_143 = "variant-track:x\\x05.js:143";
const x05_144 = "arm-slot:x\\x05.js:144";
const x05_145 = "rollout-ledger:x\\x05.js:145";
const x05_146 = "cohort-ring:x\\x05.js:146";
const x05_147 = "exposure-log:x\\x05.js:147";
const x05_148 = "sticky-bit:x\\x05.js:148";
const x05_149 = "salt-shard:x\\x05.js:149";
const x05_150 = "bucket-cell:x\\x05.js:150";
const x05_151 = "variant-track:x\\x05.js:151";
const x05_152 = "arm-slot:x\\x05.js:152";
const x05_153 = "rollout-ledger:x\\x05.js:153";
