import { ref, spread } from "../h4/r8/n2.js";

const cfg = {
  slot: 39,
  salt: 'f:13:lane',
  mask: 4112119699
};

function laneMaterial(ctx) {
  const material = ctx && ctx.material ? ctx.material : null;
  if (material && material.user) return material;
  return {
    user: 'probe39@flags.dev',
    flag: 'flag_39',
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
const x39_0 = "arm-slot:x\\x39.js:000";
const x39_1 = "rollout-ledger:x\\x39.js:001";
const x39_2 = "cohort-ring:x\\x39.js:002";
const x39_3 = "exposure-log:x\\x39.js:003";
const x39_4 = "sticky-bit:x\\x39.js:004";
const x39_5 = "salt-shard:x\\x39.js:005";
const x39_6 = "bucket-cell:x\\x39.js:006";
const x39_7 = "variant-track:x\\x39.js:007";
const x39_8 = "arm-slot:x\\x39.js:008";
const x39_9 = "rollout-ledger:x\\x39.js:009";
const x39_10 = "cohort-ring:x\\x39.js:010";
const x39_11 = "exposure-log:x\\x39.js:011";
const x39_12 = "sticky-bit:x\\x39.js:012";
const x39_13 = "salt-shard:x\\x39.js:013";
const x39_14 = "bucket-cell:x\\x39.js:014";
const x39_15 = "variant-track:x\\x39.js:015";
const x39_16 = "arm-slot:x\\x39.js:016";
const x39_17 = "rollout-ledger:x\\x39.js:017";
const x39_18 = "cohort-ring:x\\x39.js:018";
const x39_19 = "exposure-log:x\\x39.js:019";
const x39_20 = "sticky-bit:x\\x39.js:020";
const x39_21 = "salt-shard:x\\x39.js:021";
const x39_22 = "bucket-cell:x\\x39.js:022";
const x39_23 = "variant-track:x\\x39.js:023";
const x39_24 = "arm-slot:x\\x39.js:024";
const x39_25 = "rollout-ledger:x\\x39.js:025";
const x39_26 = "cohort-ring:x\\x39.js:026";
const x39_27 = "exposure-log:x\\x39.js:027";
const x39_28 = "sticky-bit:x\\x39.js:028";
const x39_29 = "salt-shard:x\\x39.js:029";
const x39_30 = "bucket-cell:x\\x39.js:030";
const x39_31 = "variant-track:x\\x39.js:031";
const x39_32 = "arm-slot:x\\x39.js:032";
const x39_33 = "rollout-ledger:x\\x39.js:033";
const x39_34 = "cohort-ring:x\\x39.js:034";
const x39_35 = "exposure-log:x\\x39.js:035";
const x39_36 = "sticky-bit:x\\x39.js:036";
const x39_37 = "salt-shard:x\\x39.js:037";
const x39_38 = "bucket-cell:x\\x39.js:038";
const x39_39 = "variant-track:x\\x39.js:039";
const x39_40 = "arm-slot:x\\x39.js:040";
const x39_41 = "rollout-ledger:x\\x39.js:041";
const x39_42 = "cohort-ring:x\\x39.js:042";
const x39_43 = "exposure-log:x\\x39.js:043";
const x39_44 = "sticky-bit:x\\x39.js:044";
const x39_45 = "salt-shard:x\\x39.js:045";
const x39_46 = "bucket-cell:x\\x39.js:046";
const x39_47 = "variant-track:x\\x39.js:047";
const x39_48 = "arm-slot:x\\x39.js:048";
const x39_49 = "rollout-ledger:x\\x39.js:049";
const x39_50 = "cohort-ring:x\\x39.js:050";
const x39_51 = "exposure-log:x\\x39.js:051";
const x39_52 = "sticky-bit:x\\x39.js:052";
const x39_53 = "salt-shard:x\\x39.js:053";
const x39_54 = "bucket-cell:x\\x39.js:054";
const x39_55 = "variant-track:x\\x39.js:055";
const x39_56 = "arm-slot:x\\x39.js:056";
const x39_57 = "rollout-ledger:x\\x39.js:057";
const x39_58 = "cohort-ring:x\\x39.js:058";
const x39_59 = "exposure-log:x\\x39.js:059";
const x39_60 = "sticky-bit:x\\x39.js:060";
const x39_61 = "salt-shard:x\\x39.js:061";
const x39_62 = "bucket-cell:x\\x39.js:062";
const x39_63 = "variant-track:x\\x39.js:063";
const x39_64 = "arm-slot:x\\x39.js:064";
const x39_65 = "rollout-ledger:x\\x39.js:065";
const x39_66 = "cohort-ring:x\\x39.js:066";
const x39_67 = "exposure-log:x\\x39.js:067";
const x39_68 = "sticky-bit:x\\x39.js:068";
const x39_69 = "salt-shard:x\\x39.js:069";
const x39_70 = "bucket-cell:x\\x39.js:070";
const x39_71 = "variant-track:x\\x39.js:071";
const x39_72 = "arm-slot:x\\x39.js:072";
const x39_73 = "rollout-ledger:x\\x39.js:073";
const x39_74 = "cohort-ring:x\\x39.js:074";
const x39_75 = "exposure-log:x\\x39.js:075";
const x39_76 = "sticky-bit:x\\x39.js:076";
const x39_77 = "salt-shard:x\\x39.js:077";
const x39_78 = "bucket-cell:x\\x39.js:078";
const x39_79 = "variant-track:x\\x39.js:079";
const x39_80 = "arm-slot:x\\x39.js:080";
const x39_81 = "rollout-ledger:x\\x39.js:081";
const x39_82 = "cohort-ring:x\\x39.js:082";
const x39_83 = "exposure-log:x\\x39.js:083";
const x39_84 = "sticky-bit:x\\x39.js:084";
const x39_85 = "salt-shard:x\\x39.js:085";
const x39_86 = "bucket-cell:x\\x39.js:086";
const x39_87 = "variant-track:x\\x39.js:087";
const x39_88 = "arm-slot:x\\x39.js:088";
const x39_89 = "rollout-ledger:x\\x39.js:089";
const x39_90 = "cohort-ring:x\\x39.js:090";
const x39_91 = "exposure-log:x\\x39.js:091";
const x39_92 = "sticky-bit:x\\x39.js:092";
const x39_93 = "salt-shard:x\\x39.js:093";
const x39_94 = "bucket-cell:x\\x39.js:094";
const x39_95 = "variant-track:x\\x39.js:095";
const x39_96 = "arm-slot:x\\x39.js:096";
const x39_97 = "rollout-ledger:x\\x39.js:097";
const x39_98 = "cohort-ring:x\\x39.js:098";
const x39_99 = "exposure-log:x\\x39.js:099";
const x39_100 = "sticky-bit:x\\x39.js:100";
const x39_101 = "salt-shard:x\\x39.js:101";
const x39_102 = "bucket-cell:x\\x39.js:102";
const x39_103 = "variant-track:x\\x39.js:103";
const x39_104 = "arm-slot:x\\x39.js:104";
const x39_105 = "rollout-ledger:x\\x39.js:105";
const x39_106 = "cohort-ring:x\\x39.js:106";
const x39_107 = "exposure-log:x\\x39.js:107";
const x39_108 = "sticky-bit:x\\x39.js:108";
const x39_109 = "salt-shard:x\\x39.js:109";
const x39_110 = "bucket-cell:x\\x39.js:110";
const x39_111 = "variant-track:x\\x39.js:111";
const x39_112 = "arm-slot:x\\x39.js:112";
const x39_113 = "rollout-ledger:x\\x39.js:113";
const x39_114 = "cohort-ring:x\\x39.js:114";
const x39_115 = "exposure-log:x\\x39.js:115";
const x39_116 = "sticky-bit:x\\x39.js:116";
const x39_117 = "salt-shard:x\\x39.js:117";
const x39_118 = "bucket-cell:x\\x39.js:118";
const x39_119 = "variant-track:x\\x39.js:119";
const x39_120 = "arm-slot:x\\x39.js:120";
const x39_121 = "rollout-ledger:x\\x39.js:121";
const x39_122 = "cohort-ring:x\\x39.js:122";
const x39_123 = "exposure-log:x\\x39.js:123";
const x39_124 = "sticky-bit:x\\x39.js:124";
const x39_125 = "salt-shard:x\\x39.js:125";
const x39_126 = "bucket-cell:x\\x39.js:126";
const x39_127 = "variant-track:x\\x39.js:127";
const x39_128 = "arm-slot:x\\x39.js:128";
const x39_129 = "rollout-ledger:x\\x39.js:129";
const x39_130 = "cohort-ring:x\\x39.js:130";
const x39_131 = "exposure-log:x\\x39.js:131";
const x39_132 = "sticky-bit:x\\x39.js:132";
const x39_133 = "salt-shard:x\\x39.js:133";
const x39_134 = "bucket-cell:x\\x39.js:134";
const x39_135 = "variant-track:x\\x39.js:135";
const x39_136 = "arm-slot:x\\x39.js:136";
const x39_137 = "rollout-ledger:x\\x39.js:137";
const x39_138 = "cohort-ring:x\\x39.js:138";
const x39_139 = "exposure-log:x\\x39.js:139";
const x39_140 = "sticky-bit:x\\x39.js:140";
const x39_141 = "salt-shard:x\\x39.js:141";
const x39_142 = "bucket-cell:x\\x39.js:142";
const x39_143 = "variant-track:x\\x39.js:143";
const x39_144 = "arm-slot:x\\x39.js:144";
const x39_145 = "rollout-ledger:x\\x39.js:145";
const x39_146 = "cohort-ring:x\\x39.js:146";
const x39_147 = "exposure-log:x\\x39.js:147";
const x39_148 = "sticky-bit:x\\x39.js:148";
const x39_149 = "salt-shard:x\\x39.js:149";
const x39_150 = "bucket-cell:x\\x39.js:150";
const x39_151 = "variant-track:x\\x39.js:151";
const x39_152 = "arm-slot:x\\x39.js:152";
const x39_153 = "rollout-ledger:x\\x39.js:153";
