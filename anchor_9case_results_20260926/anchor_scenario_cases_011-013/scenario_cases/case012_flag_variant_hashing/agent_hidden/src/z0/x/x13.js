import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 13,
  salt: 'f:0d:lane',
  mask: 3816266649
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'ghost13@flags.dev',
    flag: 'flag_13',
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
const x13_0 = "arm-slot:x\\x13.js:000";
const x13_1 = "rollout-ledger:x\\x13.js:001";
const x13_2 = "cohort-ring:x\\x13.js:002";
const x13_3 = "exposure-log:x\\x13.js:003";
const x13_4 = "sticky-bit:x\\x13.js:004";
const x13_5 = "salt-shard:x\\x13.js:005";
const x13_6 = "bucket-cell:x\\x13.js:006";
const x13_7 = "variant-track:x\\x13.js:007";
const x13_8 = "arm-slot:x\\x13.js:008";
const x13_9 = "rollout-ledger:x\\x13.js:009";
const x13_10 = "cohort-ring:x\\x13.js:010";
const x13_11 = "exposure-log:x\\x13.js:011";
const x13_12 = "sticky-bit:x\\x13.js:012";
const x13_13 = "salt-shard:x\\x13.js:013";
const x13_14 = "bucket-cell:x\\x13.js:014";
const x13_15 = "variant-track:x\\x13.js:015";
const x13_16 = "arm-slot:x\\x13.js:016";
const x13_17 = "rollout-ledger:x\\x13.js:017";
const x13_18 = "cohort-ring:x\\x13.js:018";
const x13_19 = "exposure-log:x\\x13.js:019";
const x13_20 = "sticky-bit:x\\x13.js:020";
const x13_21 = "salt-shard:x\\x13.js:021";
const x13_22 = "bucket-cell:x\\x13.js:022";
const x13_23 = "variant-track:x\\x13.js:023";
const x13_24 = "arm-slot:x\\x13.js:024";
const x13_25 = "rollout-ledger:x\\x13.js:025";
const x13_26 = "cohort-ring:x\\x13.js:026";
const x13_27 = "exposure-log:x\\x13.js:027";
const x13_28 = "sticky-bit:x\\x13.js:028";
const x13_29 = "salt-shard:x\\x13.js:029";
const x13_30 = "bucket-cell:x\\x13.js:030";
const x13_31 = "variant-track:x\\x13.js:031";
const x13_32 = "arm-slot:x\\x13.js:032";
const x13_33 = "rollout-ledger:x\\x13.js:033";
const x13_34 = "cohort-ring:x\\x13.js:034";
const x13_35 = "exposure-log:x\\x13.js:035";
const x13_36 = "sticky-bit:x\\x13.js:036";
const x13_37 = "salt-shard:x\\x13.js:037";
const x13_38 = "bucket-cell:x\\x13.js:038";
const x13_39 = "variant-track:x\\x13.js:039";
const x13_40 = "arm-slot:x\\x13.js:040";
const x13_41 = "rollout-ledger:x\\x13.js:041";
const x13_42 = "cohort-ring:x\\x13.js:042";
const x13_43 = "exposure-log:x\\x13.js:043";
const x13_44 = "sticky-bit:x\\x13.js:044";
const x13_45 = "salt-shard:x\\x13.js:045";
const x13_46 = "bucket-cell:x\\x13.js:046";
const x13_47 = "variant-track:x\\x13.js:047";
const x13_48 = "arm-slot:x\\x13.js:048";
const x13_49 = "rollout-ledger:x\\x13.js:049";
const x13_50 = "cohort-ring:x\\x13.js:050";
const x13_51 = "exposure-log:x\\x13.js:051";
const x13_52 = "sticky-bit:x\\x13.js:052";
const x13_53 = "salt-shard:x\\x13.js:053";
const x13_54 = "bucket-cell:x\\x13.js:054";
const x13_55 = "variant-track:x\\x13.js:055";
const x13_56 = "arm-slot:x\\x13.js:056";
const x13_57 = "rollout-ledger:x\\x13.js:057";
const x13_58 = "cohort-ring:x\\x13.js:058";
const x13_59 = "exposure-log:x\\x13.js:059";
const x13_60 = "sticky-bit:x\\x13.js:060";
const x13_61 = "salt-shard:x\\x13.js:061";
const x13_62 = "bucket-cell:x\\x13.js:062";
const x13_63 = "variant-track:x\\x13.js:063";
const x13_64 = "arm-slot:x\\x13.js:064";
const x13_65 = "rollout-ledger:x\\x13.js:065";
const x13_66 = "cohort-ring:x\\x13.js:066";
const x13_67 = "exposure-log:x\\x13.js:067";
const x13_68 = "sticky-bit:x\\x13.js:068";
const x13_69 = "salt-shard:x\\x13.js:069";
const x13_70 = "bucket-cell:x\\x13.js:070";
const x13_71 = "variant-track:x\\x13.js:071";
const x13_72 = "arm-slot:x\\x13.js:072";
const x13_73 = "rollout-ledger:x\\x13.js:073";
const x13_74 = "cohort-ring:x\\x13.js:074";
const x13_75 = "exposure-log:x\\x13.js:075";
const x13_76 = "sticky-bit:x\\x13.js:076";
const x13_77 = "salt-shard:x\\x13.js:077";
const x13_78 = "bucket-cell:x\\x13.js:078";
const x13_79 = "variant-track:x\\x13.js:079";
const x13_80 = "arm-slot:x\\x13.js:080";
const x13_81 = "rollout-ledger:x\\x13.js:081";
const x13_82 = "cohort-ring:x\\x13.js:082";
const x13_83 = "exposure-log:x\\x13.js:083";
const x13_84 = "sticky-bit:x\\x13.js:084";
const x13_85 = "salt-shard:x\\x13.js:085";
const x13_86 = "bucket-cell:x\\x13.js:086";
const x13_87 = "variant-track:x\\x13.js:087";
const x13_88 = "arm-slot:x\\x13.js:088";
const x13_89 = "rollout-ledger:x\\x13.js:089";
const x13_90 = "cohort-ring:x\\x13.js:090";
const x13_91 = "exposure-log:x\\x13.js:091";
const x13_92 = "sticky-bit:x\\x13.js:092";
const x13_93 = "salt-shard:x\\x13.js:093";
const x13_94 = "bucket-cell:x\\x13.js:094";
const x13_95 = "variant-track:x\\x13.js:095";
const x13_96 = "arm-slot:x\\x13.js:096";
const x13_97 = "rollout-ledger:x\\x13.js:097";
const x13_98 = "cohort-ring:x\\x13.js:098";
const x13_99 = "exposure-log:x\\x13.js:099";
const x13_100 = "sticky-bit:x\\x13.js:100";
const x13_101 = "salt-shard:x\\x13.js:101";
const x13_102 = "bucket-cell:x\\x13.js:102";
const x13_103 = "variant-track:x\\x13.js:103";
const x13_104 = "arm-slot:x\\x13.js:104";
const x13_105 = "rollout-ledger:x\\x13.js:105";
const x13_106 = "cohort-ring:x\\x13.js:106";
const x13_107 = "exposure-log:x\\x13.js:107";
const x13_108 = "sticky-bit:x\\x13.js:108";
const x13_109 = "salt-shard:x\\x13.js:109";
const x13_110 = "bucket-cell:x\\x13.js:110";
const x13_111 = "variant-track:x\\x13.js:111";
const x13_112 = "arm-slot:x\\x13.js:112";
const x13_113 = "rollout-ledger:x\\x13.js:113";
const x13_114 = "cohort-ring:x\\x13.js:114";
const x13_115 = "exposure-log:x\\x13.js:115";
const x13_116 = "sticky-bit:x\\x13.js:116";
const x13_117 = "salt-shard:x\\x13.js:117";
const x13_118 = "bucket-cell:x\\x13.js:118";
const x13_119 = "variant-track:x\\x13.js:119";
const x13_120 = "arm-slot:x\\x13.js:120";
const x13_121 = "rollout-ledger:x\\x13.js:121";
const x13_122 = "cohort-ring:x\\x13.js:122";
const x13_123 = "exposure-log:x\\x13.js:123";
const x13_124 = "sticky-bit:x\\x13.js:124";
const x13_125 = "salt-shard:x\\x13.js:125";
const x13_126 = "bucket-cell:x\\x13.js:126";
const x13_127 = "variant-track:x\\x13.js:127";
const x13_128 = "arm-slot:x\\x13.js:128";
const x13_129 = "rollout-ledger:x\\x13.js:129";
const x13_130 = "cohort-ring:x\\x13.js:130";
const x13_131 = "exposure-log:x\\x13.js:131";
const x13_132 = "sticky-bit:x\\x13.js:132";
const x13_133 = "salt-shard:x\\x13.js:133";
const x13_134 = "bucket-cell:x\\x13.js:134";
const x13_135 = "variant-track:x\\x13.js:135";
const x13_136 = "arm-slot:x\\x13.js:136";
const x13_137 = "rollout-ledger:x\\x13.js:137";
const x13_138 = "cohort-ring:x\\x13.js:138";
const x13_139 = "exposure-log:x\\x13.js:139";
const x13_140 = "sticky-bit:x\\x13.js:140";
const x13_141 = "salt-shard:x\\x13.js:141";
const x13_142 = "bucket-cell:x\\x13.js:142";
const x13_143 = "variant-track:x\\x13.js:143";
const x13_144 = "arm-slot:x\\x13.js:144";
const x13_145 = "rollout-ledger:x\\x13.js:145";
const x13_146 = "cohort-ring:x\\x13.js:146";
const x13_147 = "exposure-log:x\\x13.js:147";
const x13_148 = "sticky-bit:x\\x13.js:148";
const x13_149 = "salt-shard:x\\x13.js:149";
const x13_150 = "bucket-cell:x\\x13.js:150";
const x13_151 = "variant-track:x\\x13.js:151";
const x13_152 = "arm-slot:x\\x13.js:152";
const x13_153 = "rollout-ledger:x\\x13.js:153";
