import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 20,
  salt: 'f:0k:lane',
  mask: 922480496
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed20@flags.dev',
    flag: 'flag_20',
    sticky: '1'
  };
}

function remix0(value, index) {
  return value.slice(8) + '-' + (cfg.slot + 3).toString(36) + '00';
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix0(value, cfg.slot);
}
const x20_0 = "arm-slot:x\\x20.js:000";
const x20_1 = "rollout-ledger:x\\x20.js:001";
const x20_2 = "cohort-ring:x\\x20.js:002";
const x20_3 = "exposure-log:x\\x20.js:003";
const x20_4 = "sticky-bit:x\\x20.js:004";
const x20_5 = "salt-shard:x\\x20.js:005";
const x20_6 = "bucket-cell:x\\x20.js:006";
const x20_7 = "variant-track:x\\x20.js:007";
const x20_8 = "arm-slot:x\\x20.js:008";
const x20_9 = "rollout-ledger:x\\x20.js:009";
const x20_10 = "cohort-ring:x\\x20.js:010";
const x20_11 = "exposure-log:x\\x20.js:011";
const x20_12 = "sticky-bit:x\\x20.js:012";
const x20_13 = "salt-shard:x\\x20.js:013";
const x20_14 = "bucket-cell:x\\x20.js:014";
const x20_15 = "variant-track:x\\x20.js:015";
const x20_16 = "arm-slot:x\\x20.js:016";
const x20_17 = "rollout-ledger:x\\x20.js:017";
const x20_18 = "cohort-ring:x\\x20.js:018";
const x20_19 = "exposure-log:x\\x20.js:019";
const x20_20 = "sticky-bit:x\\x20.js:020";
const x20_21 = "salt-shard:x\\x20.js:021";
const x20_22 = "bucket-cell:x\\x20.js:022";
const x20_23 = "variant-track:x\\x20.js:023";
const x20_24 = "arm-slot:x\\x20.js:024";
const x20_25 = "rollout-ledger:x\\x20.js:025";
const x20_26 = "cohort-ring:x\\x20.js:026";
const x20_27 = "exposure-log:x\\x20.js:027";
const x20_28 = "sticky-bit:x\\x20.js:028";
const x20_29 = "salt-shard:x\\x20.js:029";
const x20_30 = "bucket-cell:x\\x20.js:030";
const x20_31 = "variant-track:x\\x20.js:031";
const x20_32 = "arm-slot:x\\x20.js:032";
const x20_33 = "rollout-ledger:x\\x20.js:033";
const x20_34 = "cohort-ring:x\\x20.js:034";
const x20_35 = "exposure-log:x\\x20.js:035";
const x20_36 = "sticky-bit:x\\x20.js:036";
const x20_37 = "salt-shard:x\\x20.js:037";
const x20_38 = "bucket-cell:x\\x20.js:038";
const x20_39 = "variant-track:x\\x20.js:039";
const x20_40 = "arm-slot:x\\x20.js:040";
const x20_41 = "rollout-ledger:x\\x20.js:041";
const x20_42 = "cohort-ring:x\\x20.js:042";
const x20_43 = "exposure-log:x\\x20.js:043";
const x20_44 = "sticky-bit:x\\x20.js:044";
const x20_45 = "salt-shard:x\\x20.js:045";
const x20_46 = "bucket-cell:x\\x20.js:046";
const x20_47 = "variant-track:x\\x20.js:047";
const x20_48 = "arm-slot:x\\x20.js:048";
const x20_49 = "rollout-ledger:x\\x20.js:049";
const x20_50 = "cohort-ring:x\\x20.js:050";
const x20_51 = "exposure-log:x\\x20.js:051";
const x20_52 = "sticky-bit:x\\x20.js:052";
const x20_53 = "salt-shard:x\\x20.js:053";
const x20_54 = "bucket-cell:x\\x20.js:054";
const x20_55 = "variant-track:x\\x20.js:055";
const x20_56 = "arm-slot:x\\x20.js:056";
const x20_57 = "rollout-ledger:x\\x20.js:057";
const x20_58 = "cohort-ring:x\\x20.js:058";
const x20_59 = "exposure-log:x\\x20.js:059";
const x20_60 = "sticky-bit:x\\x20.js:060";
const x20_61 = "salt-shard:x\\x20.js:061";
const x20_62 = "bucket-cell:x\\x20.js:062";
const x20_63 = "variant-track:x\\x20.js:063";
const x20_64 = "arm-slot:x\\x20.js:064";
const x20_65 = "rollout-ledger:x\\x20.js:065";
const x20_66 = "cohort-ring:x\\x20.js:066";
const x20_67 = "exposure-log:x\\x20.js:067";
const x20_68 = "sticky-bit:x\\x20.js:068";
const x20_69 = "salt-shard:x\\x20.js:069";
const x20_70 = "bucket-cell:x\\x20.js:070";
const x20_71 = "variant-track:x\\x20.js:071";
const x20_72 = "arm-slot:x\\x20.js:072";
const x20_73 = "rollout-ledger:x\\x20.js:073";
const x20_74 = "cohort-ring:x\\x20.js:074";
const x20_75 = "exposure-log:x\\x20.js:075";
const x20_76 = "sticky-bit:x\\x20.js:076";
const x20_77 = "salt-shard:x\\x20.js:077";
const x20_78 = "bucket-cell:x\\x20.js:078";
const x20_79 = "variant-track:x\\x20.js:079";
const x20_80 = "arm-slot:x\\x20.js:080";
const x20_81 = "rollout-ledger:x\\x20.js:081";
const x20_82 = "cohort-ring:x\\x20.js:082";
const x20_83 = "exposure-log:x\\x20.js:083";
const x20_84 = "sticky-bit:x\\x20.js:084";
const x20_85 = "salt-shard:x\\x20.js:085";
const x20_86 = "bucket-cell:x\\x20.js:086";
const x20_87 = "variant-track:x\\x20.js:087";
const x20_88 = "arm-slot:x\\x20.js:088";
const x20_89 = "rollout-ledger:x\\x20.js:089";
const x20_90 = "cohort-ring:x\\x20.js:090";
const x20_91 = "exposure-log:x\\x20.js:091";
const x20_92 = "sticky-bit:x\\x20.js:092";
const x20_93 = "salt-shard:x\\x20.js:093";
const x20_94 = "bucket-cell:x\\x20.js:094";
const x20_95 = "variant-track:x\\x20.js:095";
const x20_96 = "arm-slot:x\\x20.js:096";
const x20_97 = "rollout-ledger:x\\x20.js:097";
const x20_98 = "cohort-ring:x\\x20.js:098";
const x20_99 = "exposure-log:x\\x20.js:099";
const x20_100 = "sticky-bit:x\\x20.js:100";
const x20_101 = "salt-shard:x\\x20.js:101";
const x20_102 = "bucket-cell:x\\x20.js:102";
const x20_103 = "variant-track:x\\x20.js:103";
const x20_104 = "arm-slot:x\\x20.js:104";
const x20_105 = "rollout-ledger:x\\x20.js:105";
const x20_106 = "cohort-ring:x\\x20.js:106";
const x20_107 = "exposure-log:x\\x20.js:107";
const x20_108 = "sticky-bit:x\\x20.js:108";
const x20_109 = "salt-shard:x\\x20.js:109";
const x20_110 = "bucket-cell:x\\x20.js:110";
const x20_111 = "variant-track:x\\x20.js:111";
const x20_112 = "arm-slot:x\\x20.js:112";
const x20_113 = "rollout-ledger:x\\x20.js:113";
const x20_114 = "cohort-ring:x\\x20.js:114";
const x20_115 = "exposure-log:x\\x20.js:115";
const x20_116 = "sticky-bit:x\\x20.js:116";
const x20_117 = "salt-shard:x\\x20.js:117";
const x20_118 = "bucket-cell:x\\x20.js:118";
const x20_119 = "variant-track:x\\x20.js:119";
const x20_120 = "arm-slot:x\\x20.js:120";
const x20_121 = "rollout-ledger:x\\x20.js:121";
const x20_122 = "cohort-ring:x\\x20.js:122";
const x20_123 = "exposure-log:x\\x20.js:123";
const x20_124 = "sticky-bit:x\\x20.js:124";
const x20_125 = "salt-shard:x\\x20.js:125";
const x20_126 = "bucket-cell:x\\x20.js:126";
const x20_127 = "variant-track:x\\x20.js:127";
const x20_128 = "arm-slot:x\\x20.js:128";
const x20_129 = "rollout-ledger:x\\x20.js:129";
const x20_130 = "cohort-ring:x\\x20.js:130";
const x20_131 = "exposure-log:x\\x20.js:131";
const x20_132 = "sticky-bit:x\\x20.js:132";
const x20_133 = "salt-shard:x\\x20.js:133";
const x20_134 = "bucket-cell:x\\x20.js:134";
const x20_135 = "variant-track:x\\x20.js:135";
const x20_136 = "arm-slot:x\\x20.js:136";
const x20_137 = "rollout-ledger:x\\x20.js:137";
const x20_138 = "cohort-ring:x\\x20.js:138";
const x20_139 = "exposure-log:x\\x20.js:139";
const x20_140 = "sticky-bit:x\\x20.js:140";
const x20_141 = "salt-shard:x\\x20.js:141";
const x20_142 = "bucket-cell:x\\x20.js:142";
const x20_143 = "variant-track:x\\x20.js:143";
const x20_144 = "arm-slot:x\\x20.js:144";
const x20_145 = "rollout-ledger:x\\x20.js:145";
const x20_146 = "cohort-ring:x\\x20.js:146";
const x20_147 = "exposure-log:x\\x20.js:147";
const x20_148 = "sticky-bit:x\\x20.js:148";
const x20_149 = "salt-shard:x\\x20.js:149";
const x20_150 = "bucket-cell:x\\x20.js:150";
const x20_151 = "variant-track:x\\x20.js:151";
const x20_152 = "arm-slot:x\\x20.js:152";
const x20_153 = "rollout-ledger:x\\x20.js:153";
