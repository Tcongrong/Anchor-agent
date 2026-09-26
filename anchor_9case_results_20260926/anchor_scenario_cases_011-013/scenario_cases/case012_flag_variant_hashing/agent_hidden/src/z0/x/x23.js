import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 23,
  salt: 'f:0n:lane',
  mask: 295853187
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'seed23@flags.dev',
    flag: 'flag_23',
    sticky: '0'
  };
}

function remix3(value, index) {
  return value.slice(0, 8) + '/' + spread(cfg.mask, cfg.slot).toString(36).slice(0, 4);
}

export function lane(ctx = {}) {
  const fn = ref(cfg);
  const value = fn(laneMaterial(ctx), { machine: (ctx.machine || 0) ^ cfg.mask, salt: cfg.salt });
  return remix3(value, cfg.slot);
}
const x23_0 = "arm-slot:x\\x23.js:000";
const x23_1 = "rollout-ledger:x\\x23.js:001";
const x23_2 = "cohort-ring:x\\x23.js:002";
const x23_3 = "exposure-log:x\\x23.js:003";
const x23_4 = "sticky-bit:x\\x23.js:004";
const x23_5 = "salt-shard:x\\x23.js:005";
const x23_6 = "bucket-cell:x\\x23.js:006";
const x23_7 = "variant-track:x\\x23.js:007";
const x23_8 = "arm-slot:x\\x23.js:008";
const x23_9 = "rollout-ledger:x\\x23.js:009";
const x23_10 = "cohort-ring:x\\x23.js:010";
const x23_11 = "exposure-log:x\\x23.js:011";
const x23_12 = "sticky-bit:x\\x23.js:012";
const x23_13 = "salt-shard:x\\x23.js:013";
const x23_14 = "bucket-cell:x\\x23.js:014";
const x23_15 = "variant-track:x\\x23.js:015";
const x23_16 = "arm-slot:x\\x23.js:016";
const x23_17 = "rollout-ledger:x\\x23.js:017";
const x23_18 = "cohort-ring:x\\x23.js:018";
const x23_19 = "exposure-log:x\\x23.js:019";
const x23_20 = "sticky-bit:x\\x23.js:020";
const x23_21 = "salt-shard:x\\x23.js:021";
const x23_22 = "bucket-cell:x\\x23.js:022";
const x23_23 = "variant-track:x\\x23.js:023";
const x23_24 = "arm-slot:x\\x23.js:024";
const x23_25 = "rollout-ledger:x\\x23.js:025";
const x23_26 = "cohort-ring:x\\x23.js:026";
const x23_27 = "exposure-log:x\\x23.js:027";
const x23_28 = "sticky-bit:x\\x23.js:028";
const x23_29 = "salt-shard:x\\x23.js:029";
const x23_30 = "bucket-cell:x\\x23.js:030";
const x23_31 = "variant-track:x\\x23.js:031";
const x23_32 = "arm-slot:x\\x23.js:032";
const x23_33 = "rollout-ledger:x\\x23.js:033";
const x23_34 = "cohort-ring:x\\x23.js:034";
const x23_35 = "exposure-log:x\\x23.js:035";
const x23_36 = "sticky-bit:x\\x23.js:036";
const x23_37 = "salt-shard:x\\x23.js:037";
const x23_38 = "bucket-cell:x\\x23.js:038";
const x23_39 = "variant-track:x\\x23.js:039";
const x23_40 = "arm-slot:x\\x23.js:040";
const x23_41 = "rollout-ledger:x\\x23.js:041";
const x23_42 = "cohort-ring:x\\x23.js:042";
const x23_43 = "exposure-log:x\\x23.js:043";
const x23_44 = "sticky-bit:x\\x23.js:044";
const x23_45 = "salt-shard:x\\x23.js:045";
const x23_46 = "bucket-cell:x\\x23.js:046";
const x23_47 = "variant-track:x\\x23.js:047";
const x23_48 = "arm-slot:x\\x23.js:048";
const x23_49 = "rollout-ledger:x\\x23.js:049";
const x23_50 = "cohort-ring:x\\x23.js:050";
const x23_51 = "exposure-log:x\\x23.js:051";
const x23_52 = "sticky-bit:x\\x23.js:052";
const x23_53 = "salt-shard:x\\x23.js:053";
const x23_54 = "bucket-cell:x\\x23.js:054";
const x23_55 = "variant-track:x\\x23.js:055";
const x23_56 = "arm-slot:x\\x23.js:056";
const x23_57 = "rollout-ledger:x\\x23.js:057";
const x23_58 = "cohort-ring:x\\x23.js:058";
const x23_59 = "exposure-log:x\\x23.js:059";
const x23_60 = "sticky-bit:x\\x23.js:060";
const x23_61 = "salt-shard:x\\x23.js:061";
const x23_62 = "bucket-cell:x\\x23.js:062";
const x23_63 = "variant-track:x\\x23.js:063";
const x23_64 = "arm-slot:x\\x23.js:064";
const x23_65 = "rollout-ledger:x\\x23.js:065";
const x23_66 = "cohort-ring:x\\x23.js:066";
const x23_67 = "exposure-log:x\\x23.js:067";
const x23_68 = "sticky-bit:x\\x23.js:068";
const x23_69 = "salt-shard:x\\x23.js:069";
const x23_70 = "bucket-cell:x\\x23.js:070";
const x23_71 = "variant-track:x\\x23.js:071";
const x23_72 = "arm-slot:x\\x23.js:072";
const x23_73 = "rollout-ledger:x\\x23.js:073";
const x23_74 = "cohort-ring:x\\x23.js:074";
const x23_75 = "exposure-log:x\\x23.js:075";
const x23_76 = "sticky-bit:x\\x23.js:076";
const x23_77 = "salt-shard:x\\x23.js:077";
const x23_78 = "bucket-cell:x\\x23.js:078";
const x23_79 = "variant-track:x\\x23.js:079";
const x23_80 = "arm-slot:x\\x23.js:080";
const x23_81 = "rollout-ledger:x\\x23.js:081";
const x23_82 = "cohort-ring:x\\x23.js:082";
const x23_83 = "exposure-log:x\\x23.js:083";
const x23_84 = "sticky-bit:x\\x23.js:084";
const x23_85 = "salt-shard:x\\x23.js:085";
const x23_86 = "bucket-cell:x\\x23.js:086";
const x23_87 = "variant-track:x\\x23.js:087";
const x23_88 = "arm-slot:x\\x23.js:088";
const x23_89 = "rollout-ledger:x\\x23.js:089";
const x23_90 = "cohort-ring:x\\x23.js:090";
const x23_91 = "exposure-log:x\\x23.js:091";
const x23_92 = "sticky-bit:x\\x23.js:092";
const x23_93 = "salt-shard:x\\x23.js:093";
const x23_94 = "bucket-cell:x\\x23.js:094";
const x23_95 = "variant-track:x\\x23.js:095";
const x23_96 = "arm-slot:x\\x23.js:096";
const x23_97 = "rollout-ledger:x\\x23.js:097";
const x23_98 = "cohort-ring:x\\x23.js:098";
const x23_99 = "exposure-log:x\\x23.js:099";
const x23_100 = "sticky-bit:x\\x23.js:100";
const x23_101 = "salt-shard:x\\x23.js:101";
const x23_102 = "bucket-cell:x\\x23.js:102";
const x23_103 = "variant-track:x\\x23.js:103";
const x23_104 = "arm-slot:x\\x23.js:104";
const x23_105 = "rollout-ledger:x\\x23.js:105";
const x23_106 = "cohort-ring:x\\x23.js:106";
const x23_107 = "exposure-log:x\\x23.js:107";
const x23_108 = "sticky-bit:x\\x23.js:108";
const x23_109 = "salt-shard:x\\x23.js:109";
const x23_110 = "bucket-cell:x\\x23.js:110";
const x23_111 = "variant-track:x\\x23.js:111";
const x23_112 = "arm-slot:x\\x23.js:112";
const x23_113 = "rollout-ledger:x\\x23.js:113";
const x23_114 = "cohort-ring:x\\x23.js:114";
const x23_115 = "exposure-log:x\\x23.js:115";
const x23_116 = "sticky-bit:x\\x23.js:116";
const x23_117 = "salt-shard:x\\x23.js:117";
const x23_118 = "bucket-cell:x\\x23.js:118";
const x23_119 = "variant-track:x\\x23.js:119";
const x23_120 = "arm-slot:x\\x23.js:120";
const x23_121 = "rollout-ledger:x\\x23.js:121";
const x23_122 = "cohort-ring:x\\x23.js:122";
const x23_123 = "exposure-log:x\\x23.js:123";
const x23_124 = "sticky-bit:x\\x23.js:124";
const x23_125 = "salt-shard:x\\x23.js:125";
const x23_126 = "bucket-cell:x\\x23.js:126";
const x23_127 = "variant-track:x\\x23.js:127";
const x23_128 = "arm-slot:x\\x23.js:128";
const x23_129 = "rollout-ledger:x\\x23.js:129";
const x23_130 = "cohort-ring:x\\x23.js:130";
const x23_131 = "exposure-log:x\\x23.js:131";
const x23_132 = "sticky-bit:x\\x23.js:132";
const x23_133 = "salt-shard:x\\x23.js:133";
const x23_134 = "bucket-cell:x\\x23.js:134";
const x23_135 = "variant-track:x\\x23.js:135";
const x23_136 = "arm-slot:x\\x23.js:136";
const x23_137 = "rollout-ledger:x\\x23.js:137";
const x23_138 = "cohort-ring:x\\x23.js:138";
const x23_139 = "exposure-log:x\\x23.js:139";
const x23_140 = "sticky-bit:x\\x23.js:140";
const x23_141 = "salt-shard:x\\x23.js:141";
const x23_142 = "bucket-cell:x\\x23.js:142";
const x23_143 = "variant-track:x\\x23.js:143";
const x23_144 = "arm-slot:x\\x23.js:144";
const x23_145 = "rollout-ledger:x\\x23.js:145";
const x23_146 = "cohort-ring:x\\x23.js:146";
const x23_147 = "exposure-log:x\\x23.js:147";
const x23_148 = "sticky-bit:x\\x23.js:148";
const x23_149 = "salt-shard:x\\x23.js:149";
const x23_150 = "bucket-cell:x\\x23.js:150";
const x23_151 = "variant-track:x\\x23.js:151";
const x23_152 = "arm-slot:x\\x23.js:152";
const x23_153 = "rollout-ledger:x\\x23.js:153";
