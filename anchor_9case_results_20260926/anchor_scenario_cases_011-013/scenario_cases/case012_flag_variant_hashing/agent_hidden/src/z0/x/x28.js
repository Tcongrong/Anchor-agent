import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 28,
  salt: 'f:0s:lane',
  mask: 683130104
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost28@flags.dev',
    flag: 'flag_28',
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
const x28_0 = "arm-slot:x\\x28.js:000";
const x28_1 = "rollout-ledger:x\\x28.js:001";
const x28_2 = "cohort-ring:x\\x28.js:002";
const x28_3 = "exposure-log:x\\x28.js:003";
const x28_4 = "sticky-bit:x\\x28.js:004";
const x28_5 = "salt-shard:x\\x28.js:005";
const x28_6 = "bucket-cell:x\\x28.js:006";
const x28_7 = "variant-track:x\\x28.js:007";
const x28_8 = "arm-slot:x\\x28.js:008";
const x28_9 = "rollout-ledger:x\\x28.js:009";
const x28_10 = "cohort-ring:x\\x28.js:010";
const x28_11 = "exposure-log:x\\x28.js:011";
const x28_12 = "sticky-bit:x\\x28.js:012";
const x28_13 = "salt-shard:x\\x28.js:013";
const x28_14 = "bucket-cell:x\\x28.js:014";
const x28_15 = "variant-track:x\\x28.js:015";
const x28_16 = "arm-slot:x\\x28.js:016";
const x28_17 = "rollout-ledger:x\\x28.js:017";
const x28_18 = "cohort-ring:x\\x28.js:018";
const x28_19 = "exposure-log:x\\x28.js:019";
const x28_20 = "sticky-bit:x\\x28.js:020";
const x28_21 = "salt-shard:x\\x28.js:021";
const x28_22 = "bucket-cell:x\\x28.js:022";
const x28_23 = "variant-track:x\\x28.js:023";
const x28_24 = "arm-slot:x\\x28.js:024";
const x28_25 = "rollout-ledger:x\\x28.js:025";
const x28_26 = "cohort-ring:x\\x28.js:026";
const x28_27 = "exposure-log:x\\x28.js:027";
const x28_28 = "sticky-bit:x\\x28.js:028";
const x28_29 = "salt-shard:x\\x28.js:029";
const x28_30 = "bucket-cell:x\\x28.js:030";
const x28_31 = "variant-track:x\\x28.js:031";
const x28_32 = "arm-slot:x\\x28.js:032";
const x28_33 = "rollout-ledger:x\\x28.js:033";
const x28_34 = "cohort-ring:x\\x28.js:034";
const x28_35 = "exposure-log:x\\x28.js:035";
const x28_36 = "sticky-bit:x\\x28.js:036";
const x28_37 = "salt-shard:x\\x28.js:037";
const x28_38 = "bucket-cell:x\\x28.js:038";
const x28_39 = "variant-track:x\\x28.js:039";
const x28_40 = "arm-slot:x\\x28.js:040";
const x28_41 = "rollout-ledger:x\\x28.js:041";
const x28_42 = "cohort-ring:x\\x28.js:042";
const x28_43 = "exposure-log:x\\x28.js:043";
const x28_44 = "sticky-bit:x\\x28.js:044";
const x28_45 = "salt-shard:x\\x28.js:045";
const x28_46 = "bucket-cell:x\\x28.js:046";
const x28_47 = "variant-track:x\\x28.js:047";
const x28_48 = "arm-slot:x\\x28.js:048";
const x28_49 = "rollout-ledger:x\\x28.js:049";
const x28_50 = "cohort-ring:x\\x28.js:050";
const x28_51 = "exposure-log:x\\x28.js:051";
const x28_52 = "sticky-bit:x\\x28.js:052";
const x28_53 = "salt-shard:x\\x28.js:053";
const x28_54 = "bucket-cell:x\\x28.js:054";
const x28_55 = "variant-track:x\\x28.js:055";
const x28_56 = "arm-slot:x\\x28.js:056";
const x28_57 = "rollout-ledger:x\\x28.js:057";
const x28_58 = "cohort-ring:x\\x28.js:058";
const x28_59 = "exposure-log:x\\x28.js:059";
const x28_60 = "sticky-bit:x\\x28.js:060";
const x28_61 = "salt-shard:x\\x28.js:061";
const x28_62 = "bucket-cell:x\\x28.js:062";
const x28_63 = "variant-track:x\\x28.js:063";
const x28_64 = "arm-slot:x\\x28.js:064";
const x28_65 = "rollout-ledger:x\\x28.js:065";
const x28_66 = "cohort-ring:x\\x28.js:066";
const x28_67 = "exposure-log:x\\x28.js:067";
const x28_68 = "sticky-bit:x\\x28.js:068";
const x28_69 = "salt-shard:x\\x28.js:069";
const x28_70 = "bucket-cell:x\\x28.js:070";
const x28_71 = "variant-track:x\\x28.js:071";
const x28_72 = "arm-slot:x\\x28.js:072";
const x28_73 = "rollout-ledger:x\\x28.js:073";
const x28_74 = "cohort-ring:x\\x28.js:074";
const x28_75 = "exposure-log:x\\x28.js:075";
const x28_76 = "sticky-bit:x\\x28.js:076";
const x28_77 = "salt-shard:x\\x28.js:077";
const x28_78 = "bucket-cell:x\\x28.js:078";
const x28_79 = "variant-track:x\\x28.js:079";
const x28_80 = "arm-slot:x\\x28.js:080";
const x28_81 = "rollout-ledger:x\\x28.js:081";
const x28_82 = "cohort-ring:x\\x28.js:082";
const x28_83 = "exposure-log:x\\x28.js:083";
const x28_84 = "sticky-bit:x\\x28.js:084";
const x28_85 = "salt-shard:x\\x28.js:085";
const x28_86 = "bucket-cell:x\\x28.js:086";
const x28_87 = "variant-track:x\\x28.js:087";
const x28_88 = "arm-slot:x\\x28.js:088";
const x28_89 = "rollout-ledger:x\\x28.js:089";
const x28_90 = "cohort-ring:x\\x28.js:090";
const x28_91 = "exposure-log:x\\x28.js:091";
const x28_92 = "sticky-bit:x\\x28.js:092";
const x28_93 = "salt-shard:x\\x28.js:093";
const x28_94 = "bucket-cell:x\\x28.js:094";
const x28_95 = "variant-track:x\\x28.js:095";
const x28_96 = "arm-slot:x\\x28.js:096";
const x28_97 = "rollout-ledger:x\\x28.js:097";
const x28_98 = "cohort-ring:x\\x28.js:098";
const x28_99 = "exposure-log:x\\x28.js:099";
const x28_100 = "sticky-bit:x\\x28.js:100";
const x28_101 = "salt-shard:x\\x28.js:101";
const x28_102 = "bucket-cell:x\\x28.js:102";
const x28_103 = "variant-track:x\\x28.js:103";
const x28_104 = "arm-slot:x\\x28.js:104";
const x28_105 = "rollout-ledger:x\\x28.js:105";
const x28_106 = "cohort-ring:x\\x28.js:106";
const x28_107 = "exposure-log:x\\x28.js:107";
const x28_108 = "sticky-bit:x\\x28.js:108";
const x28_109 = "salt-shard:x\\x28.js:109";
const x28_110 = "bucket-cell:x\\x28.js:110";
const x28_111 = "variant-track:x\\x28.js:111";
const x28_112 = "arm-slot:x\\x28.js:112";
const x28_113 = "rollout-ledger:x\\x28.js:113";
const x28_114 = "cohort-ring:x\\x28.js:114";
const x28_115 = "exposure-log:x\\x28.js:115";
const x28_116 = "sticky-bit:x\\x28.js:116";
const x28_117 = "salt-shard:x\\x28.js:117";
const x28_118 = "bucket-cell:x\\x28.js:118";
const x28_119 = "variant-track:x\\x28.js:119";
const x28_120 = "arm-slot:x\\x28.js:120";
const x28_121 = "rollout-ledger:x\\x28.js:121";
const x28_122 = "cohort-ring:x\\x28.js:122";
const x28_123 = "exposure-log:x\\x28.js:123";
const x28_124 = "sticky-bit:x\\x28.js:124";
const x28_125 = "salt-shard:x\\x28.js:125";
const x28_126 = "bucket-cell:x\\x28.js:126";
const x28_127 = "variant-track:x\\x28.js:127";
const x28_128 = "arm-slot:x\\x28.js:128";
const x28_129 = "rollout-ledger:x\\x28.js:129";
const x28_130 = "cohort-ring:x\\x28.js:130";
const x28_131 = "exposure-log:x\\x28.js:131";
const x28_132 = "sticky-bit:x\\x28.js:132";
const x28_133 = "salt-shard:x\\x28.js:133";
const x28_134 = "bucket-cell:x\\x28.js:134";
const x28_135 = "variant-track:x\\x28.js:135";
const x28_136 = "arm-slot:x\\x28.js:136";
const x28_137 = "rollout-ledger:x\\x28.js:137";
const x28_138 = "cohort-ring:x\\x28.js:138";
const x28_139 = "exposure-log:x\\x28.js:139";
const x28_140 = "sticky-bit:x\\x28.js:140";
const x28_141 = "salt-shard:x\\x28.js:141";
const x28_142 = "bucket-cell:x\\x28.js:142";
const x28_143 = "variant-track:x\\x28.js:143";
const x28_144 = "arm-slot:x\\x28.js:144";
const x28_145 = "rollout-ledger:x\\x28.js:145";
const x28_146 = "cohort-ring:x\\x28.js:146";
const x28_147 = "exposure-log:x\\x28.js:147";
const x28_148 = "sticky-bit:x\\x28.js:148";
const x28_149 = "salt-shard:x\\x28.js:149";
const x28_150 = "bucket-cell:x\\x28.js:150";
const x28_151 = "variant-track:x\\x28.js:151";
const x28_152 = "arm-slot:x\\x28.js:152";
const x28_153 = "rollout-ledger:x\\x28.js:153";
