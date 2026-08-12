export const GlyphCombiner = Object.freeze({
  /**
   * @param {number[]} x
   * @returns {number}
   */
  add: x => x.reduce(Number.sumReducer, 0),
  /**
   * @param {number[]} x
   * @returns {number}
   */
  multiply: x => x.reduce(Number.prodReducer, 1),
  /**
   * For exponents, the base value is 1, so when we add two exponents a and b we want to get a + b - 1,
   * so that if a and b are both close to 1 so is their sum. In general, when we add a list x of exponents,
   * we have to add 1 - x.length to the actual sum, so that if all the exponents are close to 1 the result
   * is also close to 1 rather than close to x.length.
   * @param {number[]} x
   * @returns {number}
   */
  addExponents: x => x.reduce(Number.sumReducer, 1 - x.length),
  /**
   * @param {Decimal[]} x
   * @returns {Decimal}
   */
  addDecimal: x => x.reduce(Decimal.sumReducer, DC.D0),
  /**
   * @param {Decimal[]} x
   * @returns {Decimal}
   */
  multiplyDecimal: x => x.reduce(Decimal.prodReducer, DC.D1)
});

export const glyphEffects = {
  timepow: {
    id: "timepow",
    bitmaskIndex: 0,
    isGenerated: true,
    glyphTypes: ["time"],
    singleDesc: "시간 차원 지수 +{value}",
    totalDesc: "시간 차원 배율 ^{value}",
    shortDesc: "시간 차원 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.4).times(Math.pow(strength, 1.2)).div(50).add(1).toNumber()
      : Decimal.pow(level, 0.32).times(Math.pow(strength, 0.45)).div(75).add(1.01).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: true,
  },
  timespeed: {
    id: "timespeed",
    bitmaskIndex: 1,
    isGenerated: true,
    glyphTypes: ["time"],
    singleDesc: "게임 속도에 {value} 배율 적용",
    totalDesc: "게임이 ×{value} 빠르게 진행",
    genericDesc: "게임 속도 배율",
    shortDesc: "게임 속도 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, strength).add(1)
      : (GlyphAlteration.isEmpowered("time")
         ? Decimal.pow(level, 0.35).add(1)
         : Decimal.pow(level, 0.3).times(Decimal.pow(strength, 0.65)).div(20).add(1))),
    formatEffect: x => format(x, 3, 3),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("time"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: true,
  },
  timeetermult: {
    id: "timeetermult",
    bitmaskIndex: 2,
    isGenerated: true,
    glyphTypes: ["time"],
    singleDesc: "영원 횟수 획득량에 {value} 배율 적용",
    totalDesc: "영원 횟수 획득량 ×{value}",
    genericDesc: "영원 횟수 획득 배율",
    shortDesc: "영원 횟수 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, 0.25).times(strength).times(GlyphAlteration.sacrificeBoost("time")))
      : Decimal.pow(new Decimal(strength + 3).times(level), 0.9).times(
        Decimal.pow(3, GlyphAlteration.sacrificeBoost("time")))),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getBoostColor("time"),
    alterationType: ALTERATION_TYPE.BOOST,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  timeEP: {
    id: "timeEP",
    bitmaskIndex: 3,
    isGenerated: true,
    glyphTypes: ["time"],
    singleDesc: () => (GlyphAlteration.isAdded("time")
      ? "영원 포인트 획득량 \n×{value} [및 ^]{value2}"
      : "영원 포인트 획득량에 {value} 배율 적용"),
    totalDesc: () => (GlyphAlteration.isAdded("time")
      ? "영원 포인트 획득량 ×{value} 및 ^{value2}"
      : "영원 포인트 획득량 ×{value}"),
    genericDesc: () => (GlyphAlteration.isAdded("time")
      ? "영원 포인트 획득 배율 및 지수"
      : "영원 포인트 획득 배율"),
    shortDesc: () => (GlyphAlteration.isAdded("time")
      ? "영원 포인트 ×{value} 및 ^{value2}"
      : "영원 포인트 ×{value}"),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, strength + 1).times(100))
      : Decimal.clampMin(Decimal.pow(level.times(strength), 3).times(100), 1)),
    formatEffect: x => format(x, 2, 3),
    combine: GlyphCombiner.multiplyDecimal,
    conversion: x => (EffarigUnlock.endgame.canBeApplied
      ? 1 + Decimal.log10(x).add(1).log10().toNumber() / 100
      : 1 + Decimal.log10(x).toNumber() / 1000),
    formatSecondaryEffect: x => format(x, 4, 4),
    alteredColor: () => GlyphAlteration.getAdditionColor("time"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  dilationDT: {
    id: "dilationDT",
    bitmaskIndex: 4,
    isGenerated: true,
    glyphTypes: ["dilation"],
    singleDesc: "팽창된 시간 획득량에 {value} 배율 적용",
    totalDesc: "팽창된 시간 획득량 ×{value}",
    shortDesc: "팽창된 시간 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(level.times(strength).div(150))
      : (GlyphAlteration.isEmpowered("dilation")
         ? DC.D1_005.pow(level).times(15)
         : Decimal.pow(level.times(strength), 1.5).times(2))),
    formatEffect: x => format(x, 2, 1),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("dilation"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  dilationgalaxyThreshold: {
    id: "dilationgalaxyThreshold",
    bitmaskIndex: 5,
    isGenerated: true,
    glyphTypes: ["dilation"],
    singleDesc: "타키온 은하 요구량 배율 ×{value}",
    genericDesc: "타키온 은하 가격 배율",
    shortDesc: "타키온 은하 요구량 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.max(DC.D1.sub(Decimal.pow(level, 0.4).times(strength).div(100)).sub(GlyphAlteration.sacrificeBoost("dilation") / 40), 0.1)
        .div(Decimal.max(1, Decimal.abs((DC.D1.sub(Decimal.pow(level, 0.4).times(strength).div(100)).sub(
        GlyphAlteration.sacrificeBoost("dilation") / 40)).sub(1.1)))).toNumber()
      : Decimal.max(DC.D1.sub(Decimal.pow(level, 0.17).times(Math.pow(strength, 0.35)).div(100)).sub(
        GlyphAlteration.sacrificeBoost("dilation") / 50), 0.1).div(Decimal.max(1, Decimal.abs((DC.D1.sub(Decimal.pow(level, 0.17).times(
        Math.pow(strength, 0.35)).div(100)).sub(GlyphAlteration.sacrificeBoost("dilation") / 50)).sub(1.1)))).toNumber()),
    formatEffect: x => format(x, 3, 3),
    alteredColor: () => GlyphAlteration.getBoostColor("dilation"),
    alterationType: ALTERATION_TYPE.BOOST,
    combine: effects => {
      const prod = effects.reduce(Number.prodReducer, 1);
      return prod < 0.4
        ? { value: Math.max(0.4 - Math.pow(0.4 - prod, 1.7), 0.1) / Math.max(1, Math.abs(Math.log(prod)) / 2), capped: true }
        : { value: prod, capped: false };
    },
    enabledInDoomed: true,
  },
  dilationTTgen: {
    // TTgen slowly generates TT, value amount is per second, displayed per hour
    id: "dilationTTgen",
    bitmaskIndex: 6,
    isGenerated: true,
    glyphTypes: ["dilation"],
    singleDesc: () => (GlyphAlteration.isAdded("dilation")
      ? "시간당 시간 정리 {value}개 생산 \n[및 시간 정리 \n생산량에] {value2} 배율 적용"
      : "시간당 시간 정리 {value}개 생산"),
    totalDesc: () => (GlyphAlteration.isAdded("dilation")
      ? "시간당 시간 정리 {value}개 생산 및 시간 정리 생산량 ×{value2}"
      : "시간당 시간 정리 {value}개 생산"),
    genericDesc: () => (GlyphAlteration.isAdded("dilation")
      ? "시간 정리 생산 및 배율"
      : "시간 정리 생산"),
    shortDesc: () => (GlyphAlteration.isAdded("dilation")
      ? "시간당 시간 정리 {value}개 및 생산량 ×{value2}"
      : "시간당 시간 정리 {value}개"),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level.times(strength), 0.6).div(1000)
      : Decimal.pow(level.times(strength), 0.5).div(10000)),
    /** @type {function(number): string} */
    formatEffect: x => format(x.times(3600), 2, 2),
    combine: GlyphCombiner.addDecimal,
    conversion: x => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.clampMin(Decimal.pow10(x.times(10000)), 1)
      : Decimal.clampMin(Decimal.pow(x.times(10000), 1.6), 1)),
    formatSecondaryEffect: x => format(x, 2, 2),
    alteredColor: () => GlyphAlteration.getAdditionColor("dilation"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  dilationpow: {
    id: "dilationpow",
    bitmaskIndex: 7,
    isGenerated: true,
    glyphTypes: ["dilation"],
    singleDesc: "시간 팽창 중 반물질 차원 지수 +{value}",
    totalDesc: "시간 팽창 중 반물질 차원 배율 ^{value}",
    genericDesc: "시간 팽창 중 반물질 차원 ^x",
    shortDesc: "팽창 중 반물질 차원 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? level.times(strength).add(1).toNumber()
      : Decimal.pow(level, 0.7).times(Math.pow(strength, 0.7)).div(25).add(1.1).toNumber()),
    formatEffect: x => format(x, 2, 2),
    formatSingleEffect: x => format(x - 1, 2, 2),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: true,
  },
  replicationspeed: {
    id: "replicationspeed",
    bitmaskIndex: 8,
    isGenerated: true,
    glyphTypes: ["replication"],
    singleDesc: "복제 속도에 {value} 배율 적용",
    totalDesc: "복제 속도 ×{value}",
    genericDesc: "복제 속도 배율",
    shortDesc: "복제 속도 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(level.times(strength).div(100))
      : (GlyphAlteration.isEmpowered("replication")
         ? DC.D1_007.pow(level).times(10)
         : Decimal.times(level, strength).times(3))),
    formatEffect: x => format(x, 2, 1),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("replication"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  replicationpow: {
    id: "replicationpow",
    bitmaskIndex: 9,
    isGenerated: true,
    glyphTypes: ["replication"],
    singleDesc: "복제자 배율 지수 +{value}",
    totalDesc: "복제자 배율 ^{value}",
    shortDesc: "복제자 배율 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? level.times(Math.pow(strength, 2)).times(GlyphAlteration.sacrificeBoost("replication")).add(1).toNumber()
      : Decimal.pow(level, 0.5).times(strength).div(25).add(GlyphAlteration.sacrificeBoost("replication") * 3).add(1.1).toNumber()),
    formatEffect: x => format(x, 2, 2),
    formatSingleEffect: x => format(x - 1, 2, 2),
    combine: GlyphCombiner.addExponents,
    alteredColor: () => GlyphAlteration.getBoostColor("replication"),
    alterationType: ALTERATION_TYPE.BOOST,
    enabledInDoomed: true,
  },
  replicationdtgain: {
    id: "replicationdtgain",
    bitmaskIndex: 10,
    isGenerated: true,
    glyphTypes: ["replication"],
    singleDesc: () => (GlyphAlteration.isAdded("replication")
      ? `복제자 ${format(DC.E10000)}개마다 팽창된 시간 \n[및 복제자 속도] 배율 \n+{value}`
      : `복제자 ${format(DC.E10000)}개마다 팽창된 시간 \n획득 배율 +{value}`),
    totalDesc: () => (GlyphAlteration.isAdded("replication")
      ? `복제자 ${format(DC.E10000)}개마다 팽창된 시간 및 복제 속도 배율 +{value}`
      : `복제자 ${format(DC.E10000)}개마다 팽창된 시간 획득 배율 +{value}`),
    genericDesc: () => (GlyphAlteration.isAdded("replication")
      ? "복제자에 따른 팽창된 시간 및 복제자 배율"
      : "복제자에 따른 팽창된 시간 획득 배율"),
    shortDesc: () => (GlyphAlteration.isAdded("replication")
      ? `복제자 ${format(DC.E10000)}개마다 팽창된 시간 및 복제 속도 +{value}`
      : `복제자 ${format(DC.E10000)}개마다 팽창된 시간 +{value}`),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, strength).times(0.0005)
      : Decimal.pow(level, 0.3).times(Decimal.pow(strength, 0.65)).times(0.0003)),
    formatEffect: x => format(x.times(10000), 2, 2),
    formatSingleEffect: x => format(x.times(10000), 2, 2),
    // It's bad to stack this one additively (N glyphs acts as a DT mult of N) or multiplicatively (the raw number is
    // less than 1), so instead we do a multiplicative stacking relative to the "base" effect of a level 1, 0% glyph.
    // We also introduce a 3x mult per glyph after the first, so that stacking level 1, 0% glyphs still has an effect.
    // This is still just a flat DT mult when stacking multiple glyphs, but at least it's bigger than 2 or 3.
    combine: effects => ({
      value: effects.length === 0 ? DC.D0 : effects.reduce(Decimal.prodReducer, Decimal.pow(0.0001, 1 - effects.length)),
      capped: false
    }),
    conversion: x => x,
    formatSecondaryEffect: x => format(x, 2, 3),
    formatSingleSecondaryEffect: x => format(x, 5, 5),
    alteredColor: () => GlyphAlteration.getAdditionColor("replication"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  replicationglyphlevel: {
    id: "replicationglyphlevel",
    bitmaskIndex: 11,
    isGenerated: true,
    glyphTypes: ["replication"],
    singleDesc: () => `글리프 레벨의 복제자 요소:\n ^${format(0.4, 1, 1)}
      ➜ ^(${format(0.4, 1, 1)} + {value})`,
    totalDesc: () => `글리프 레벨의 복제자 요소: ^${format(0.4, 1, 1)}
      ➜ ^(${format(0.4, 1, 1)} + {value})`,
    genericDesc: "글리프 레벨의 복제자 요소",
    shortDesc: "레벨의 복제자 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(Decimal.pow(level, 0.3).times(strength), 0.5).div(40).toNumber()
      : Decimal.pow(Decimal.pow(level, 0.25).times(Math.pow(strength, 0.4)), 0.5).div(50).toNumber()),
    formatEffect: x => format(x, 3, 3),
    combine: effects => {
      let sum = effects.reduce(Number.sumReducer, 0);
      if (effects.length > 2) sum *= 6 / (effects.length + 4);
      return sum > 0.1
        ? { value: 0.1 + 0.2 * (sum - 0.1), capped: true }
        : { value: sum, capped: effects.length > 2 };
    },
    enabledInDoomed: true,
  },
  infinitypow: {
    id: "infinitypow",
    bitmaskIndex: 12,
    isGenerated: true,
    glyphTypes: ["infinity"],
    singleDesc: "무한 차원 지수 +{value}",
    totalDesc: "무한 차원 배율 ^{value}",
    shortDesc: "무한 차원 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.3).times(strength).div(50).add(Math.min(GlyphAlteration.sacrificeBoost("infinity") / 50, 2.5)).add(
        Math.pow(Math.max(Math.log10(GlyphAlteration.sacrificeBoost("infinity")) - Math.log10(125), 0) + 1, 2.5) - 1).add(1).toNumber()
      : Decimal.pow(level, 0.21).times(Math.pow(strength, 0.4)).div(75).add(
        Math.min(GlyphAlteration.sacrificeBoost("infinity") / 50, 2.5)).add(
        Math.pow(Math.max(Math.log10(GlyphAlteration.sacrificeBoost("infinity")) - Math.log10(125), 0) + 1, 2) - 1).add(1.007).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    alteredColor: () => GlyphAlteration.getBoostColor("infinity"),
    alterationType: ALTERATION_TYPE.BOOST,
    enabledInDoomed: true,
  },
  infinityrate: {
    id: "infinityrate",
    bitmaskIndex: 13,
    isGenerated: true,
    glyphTypes: ["infinity"],
    singleDesc: () => `무한력 변환 비율: \n^${formatInt(7)}
      ➜ ^(${formatInt(7)} + {value})`,
    totalDesc: () => `무한력 변환 비율: ^${formatInt(7)}
      ➜ ^(${formatInt(7)} + {value})`,
    genericDesc: "무한력 변환 비율",
    shortDesc: "무한력 변환 +{value}",
    effect: (level, strength) => EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.25).times(strength).times(0.05).toNumber()
      : Decimal.pow(level, 0.2).times(Math.pow(strength, 0.4)).times(0.04).toNumber(),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.add,
    enabledInDoomed: true,
  },
  infinityIP: {
    id: "infinityIP",
    bitmaskIndex: 14,
    isGenerated: true,
    glyphTypes: ["infinity"],
    singleDesc: () => (GlyphAlteration.isAdded("infinity")
      ? "무한 포인트 획득량 \n×{value} [및 ^]{value2}"
      : "무한 포인트 획득량에 {value} 배율 적용"),
    totalDesc: () => (GlyphAlteration.isAdded("infinity")
      ? "무한 포인트 획득량 ×{value} 및 ^{value2}"
      : "무한 포인트 획득량 ×{value}"),
    genericDesc: () => (GlyphAlteration.isAdded("infinity")
      ? "무한 포인트 획득 배율 및 지수"
      : "무한 포인트 획득 배율"),
    shortDesc: () => (GlyphAlteration.isAdded("infinity")
      ? "무한 포인트 ×{value} 및 ^{value2}"
      : "무한 포인트 ×{value}"),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, strength + 1).times(10000))
      : Decimal.clampMin(Decimal.pow(level.times(strength + 1), 6).times(10000), 1)),
    formatEffect: x => format(x, 2, 3),
    combine: effects => {
      let sum = effects.reduce(Decimal.prodReducer, DC.D1);
      return { value: sum, capped: false };
    },
    softcap: value => ((Effarig.eternityCap !== undefined) ? Decimal.min(value, Effarig.eternityCap) : value),
    conversion: x => (EffarigUnlock.endgame.canBeApplied
      ? 1 + Decimal.log10(x).add(1).log10().toNumber() / 150
      : 1 + Decimal.log10(x).toNumber() / 1800),
    formatSecondaryEffect: x => format(x, 4, 4),
    alteredColor: () => GlyphAlteration.getAdditionColor("infinity"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  infinityinfmult: {
    id: "infinityinfmult",
    bitmaskIndex: 15,
    isGenerated: true,
    glyphTypes: ["infinity"],
    singleDesc: "무한 횟수 획득량에 {value} 배율 적용",
    totalDesc: "무한 횟수 획득량 ×{value}",
    genericDesc: "무한 횟수 획득 배율",
    shortDesc: "무한 횟수 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(level.times(strength))
      : (GlyphAlteration.isEmpowered("infinity")
         ? DC.D1_02.pow(level)
         : Decimal.pow(level.times(strength), 1.5).times(2))),
    formatEffect: x => format(x, 2, 1),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("infinity"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: () => PelleDestructionUpgrade.destroyedGlyphEffects.canBeApplied
  },
  powerpow: {
    id: "powerpow",
    bitmaskIndex: 16,
    isGenerated: true,
    glyphTypes: ["power"],
    singleDesc: () => (GlyphAlteration.isAdded("power")
      ? "반물질 차원 지수 +{value}\n[및 반물질 은하 가격 ×]{value2}"
      : "반물질 차원 지수 +{value}"),
    totalDesc: () => (GlyphAlteration.isAdded("power")
      ? "반물질 차원 배율 ^{value} 및 반물질 은하 가격 ×{value2}"
      : "반물질 차원 배율 ^{value}"),
    genericDesc: () => (GlyphAlteration.isAdded("power")
      ? "반물질 차원 배율 ^x 및 반물질 은하 가격 배율"
      : "반물질 차원 배율 ^x"),
    shortDesc: () => (GlyphAlteration.isAdded("power")
      ? "반물질 차원 지수 +{value} 및 은하 가격 ×{value2}"
      : "반물질 차원 지수 +{value}"),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.25).times(strength).div(50).add(1).toNumber()
      : Decimal.pow(level, 0.2).times(Math.pow(strength, 0.4)).div(75).add(1.015).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    conversion: x => (EffarigUnlock.endgame.canBeApplied ? 1 / x : 2 / (x + 1)),
    formatSecondaryEffect: x => format(x, 3, 3),
    alteredColor: () => GlyphAlteration.getAdditionColor("power"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: true,
  },
  powermult: {
    id: "powermult",
    bitmaskIndex: 17,
    isGenerated: true,
    glyphTypes: ["power"],
    singleDesc: "반물질 차원 배율 ×{value}",
    shortDesc: "반물질 차원 ×{value}",
    effect: (level, strength) => EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, strength).times(9e15))
      : (GlyphAlteration.isEmpowered("power")
         ? DC.D11111.pow(level.times(220))
         : Decimal.pow(level.times(strength).times(10), level.times(strength).times(10))),
    formatEffect: x => formatPostBreak(x, 2, 0),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("power"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: true,
  },
  powerdimboost: {
    id: "powerdimboost",
    bitmaskIndex: 18,
    isGenerated: true,
    glyphTypes: ["power"],
    singleDesc: "차원 가속 배율 ×{value}",
    genericDesc: "차원 가속 배율",
    shortDesc: "차원 가속 배율 ×{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, 0.5).times(strength).times(GlyphAlteration.sacrificeBoost("power")))
      : Decimal.clampMin(Decimal.pow(level.times(strength), 0.5).times(
        Decimal.pow(1 + GlyphAlteration.sacrificeBoost("power"), 3)), 1)),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getBoostColor("power"),
    alterationType: ALTERATION_TYPE.BOOST,
    enabledInDoomed: true,
  },
  powerbuy10: {
    id: "powerbuy10",
    bitmaskIndex: 19,
    isGenerated: true,
    glyphTypes: ["power"],
    singleDesc: () => `반물질 차원 ${formatInt(10)}개 구매 보너스를 {value}만큼 증가`,
    totalDesc: () => `"${formatInt(10)}개 구매" 배율 ×{value}`,
    genericDesc: () => `"${formatInt(10)}개 구매" 보너스 증가`,
    shortDesc: () => `반물질 차원 "${formatInt(10)}개 구매" 배율 ×{value}`,
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, strength).add(1).toNumber()
      : level.times(strength).div(12).add(1).toNumber()),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: true,
  },
  effarigrm: {
    id: "effarigrm",
    bitmaskIndex: 20,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: "리얼리티 머신 배율 ×{value}",
    genericDesc: "리얼리티 머신 배율",
    shortDesc: "리얼리티 머신 ×{value}",
    effect: (level, strength) => EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow10(Decimal.pow(level, 0.6).times(strength))
      : (GlyphAlteration.isEmpowered("effarig")
         ? Decimal.pow(level, 1.5)
         : Decimal.pow(level, 0.6).times(strength)),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.multiplyDecimal,
    alteredColor: () => GlyphAlteration.getEmpowermentColor("effarig"),
    alterationType: ALTERATION_TYPE.EMPOWER,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigglyph: {
    id: "effarigglyph",
    bitmaskIndex: 21,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: "글리프 불안정 시작 레벨 +{value}",
    genericDesc: "글리프 불안정 지연",
    shortDesc: "불안정 지연 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.floor(Decimal.pow(level.times(strength), 0.6).times(10)).toNumber()
      : Decimal.floor(Decimal.pow(level.times(strength), 0.5).times(10)).toNumber()),
    formatEffect: x => formatInt(x),
    combine: GlyphCombiner.add,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigblackhole: {
    id: "effarigblackhole",
    bitmaskIndex: 22,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: "게임 속도 지수 +{value}",
    totalDesc: "게임 속도 ^{value}",
    genericDesc: "게임 속도 ^x",
    shortDesc: "게임 속도 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.27).times(Math.pow(strength, 0.45)).div(72).add(1).toNumber()
      : Decimal.pow(level, 0.25).times(Math.pow(strength, 0.4)).div(75).add(1).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigachievement: {
    id: "effarigachievement",
    bitmaskIndex: 23,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: "도전과제 배율 지수 +{value}",
    totalDesc: "도전과제 배율 ^{value}",
    genericDesc: "도전과제 배율 ^x",
    shortDesc: "도전과제 배율 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.5).times(strength).div(50).add(GlyphAlteration.sacrificeBoost("effarig") / 8).add(1).toNumber()
      : Decimal.pow(level, 0.4).times(Math.pow(strength, 0.6)).div(60).add(
        GlyphAlteration.sacrificeBoost("effarig") / 10).add(1).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    alteredColor: () => GlyphAlteration.getBoostColor("effarig"),
    alterationType: ALTERATION_TYPE.BOOST,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigforgotten: {
    id: "effarigforgotten",
    bitmaskIndex: 24,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: () => (GlyphAlteration.isAdded("effarig")
      ? `"${formatInt(10)}개 구매" 배율 ^{value} [및\n차원 가속 배율 ^]{value2}`
      : `차원 ${formatInt(10)}개 구매 보너스 ^{value}`),
    totalDesc: () => (GlyphAlteration.isAdded("effarig")
      ? `"${formatInt(10)}개 구매" 배율 ^{value} 및 차원 가속 배율 ^{value2}`
      : `"${formatInt(10)}개 구매" 배율 ^{value}`),
    genericDesc: () => (GlyphAlteration.isAdded("effarig")
      ? `"${formatInt(10)}개 구매" 및 차원 가속 배율 ^x`
      : `"${formatInt(10)}개 구매" 배율 ^x`),
    shortDesc: () => (GlyphAlteration.isAdded("effarig")
      ? `${formatInt(10)}개 구매 배율 ^{value}, 차원 가속 배율 ^{value2}`
      : `${formatInt(10)}개 구매 배율 ^{value}`),
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.5).times(strength).times(2).add(1).toNumber()
      : Decimal.pow(level, 0.25).times(Math.pow(strength, 0.4)).times(2).add(1).toNumber()),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.multiply,
    conversion: x => (EffarigUnlock.endgame.canBeApplied ? Math.pow(x, 0.5) : Math.pow(x, 0.4)),
    formatSecondaryEffect: x => format(x, 2, 2),
    alteredColor: () => GlyphAlteration.getAdditionColor("effarig"),
    alterationType: ALTERATION_TYPE.ADDITION,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigdimensions: {
    id: "effarigdimensions",
    bitmaskIndex: 25,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: "모든 차원 지수 +{value}",
    totalDesc: "모든 차원 배율 ^{value}",
    genericDesc: "모든 차원 배율 ^x",
    shortDesc: "모든 차원 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.3).times(Math.pow(strength, 0.75)).div(400).add(1).toNumber()
      : Decimal.pow(level, 0.25).times(Math.pow(strength, 0.4)).div(500).add(1).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  effarigantimatter: {
    id: "effarigantimatter",
    bitmaskIndex: 26,
    isGenerated: true,
    glyphTypes: ["effarig"],
    singleDesc: () => `반물질 생산:\n${formatInt(10)}^x ➜ ${formatInt(10)}^(x^{value})`,
    genericDesc: "반물질 생산 지수의 지수",
    shortDesc: "반물질 생산 지수 ^{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.26).times(Math.pow(strength, 0.45)).div(4800).add(1).toNumber()
      : Decimal.pow(level, 0.25).times(Math.pow(strength, 0.4)).div(5000).add(1).toNumber()),
    formatEffect: x => format(x, 4, 4),
    combine: GlyphCombiner.multiply,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("effarig")
  },
  timeshardpow: {
    id: "timeshardpow",
    bitmaskIndex: 27,
    isGenerated: true,
    // This gets explicitly added to time glyphs elsewhere (once unlocked)
    glyphTypes: [],
    singleDesc: "시간 파편 지수 +{value}",
    totalDesc: "시간 파편 획득량 ^{value}",
    genericDesc: "시간 파편 ^x",
    shortDesc: "시간 파편 지수 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level, 0.4).times(strength).div(1000).add(1).toNumber()
      : Decimal.pow(level, 0.35).times(strength / 3.5).div(400).add(1).toNumber()),
    formatEffect: x => format(x, 3, 3),
    formatSingleEffect: x => format(x - 1, 3, 3),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: true,
  },
  cursedgalaxies: {
    id: "cursedgalaxies",
    bitmaskIndex: 0,
    isGenerated: false,
    glyphTypes: ["cursed"],
    singleDesc: `모든 은하가 {value} 약해짐`,
    totalDesc: "모든 은하의 성능 -{value}",
    shortDesc: "은하 성능 -{value}",
    // Multiplies by 0.768 per glyph
    effect: level => Decimal.pow(level, -0.03).toNumber(),
    formatEffect: x => formatPercents(1 - x, 2),
    combine: GlyphCombiner.multiply,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("cursed"),
  },
  curseddimensions: {
    id: "curseddimensions",
    bitmaskIndex: 1,
    isGenerated: false,
    glyphTypes: ["cursed"],
    singleDesc: "모든 차원 배율 ^{value}",
    shortDesc: "모든 차원 ^{value}",
    // Multiplies by 0.734 per glyph
    effect: level => Decimal.pow(level, -0.035).toNumber(),
    formatEffect: x => format(x, 3, 3),
    combine: GlyphCombiner.multiply,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("cursed"),
  },
  cursedtickspeed: {
    id: "cursedtickspeed",
    bitmaskIndex: 2,
    isGenerated: false,
    glyphTypes: ["cursed"],
    singleDesc: "시간 차원의 틱스피드 업그레이드 요구량에 ×{value} 배율 적용",
    totalDesc: "시간 차원의 틱스피드 업그레이드 요구량이 ×{value} 증가",
    shortDesc: "시간 차원 틱스피드 요구량 ×{value}",
    // Additive 3.82 per glyph
    effect: level => Decimal.clampMin(Decimal.log10(level), 1).toNumber(),
    formatEffect: x => format(x, 3, 3),
    combine: GlyphCombiner.add,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("cursed"),
  },
  cursedEP: {
    id: "cursedEP",
    bitmaskIndex: 3,
    isGenerated: false,
    glyphTypes: ["cursed"],
    singleDesc: "영원 포인트 획득량을 {value}로 나눔",
    totalDesc: "영원 포인트 획득량 / {value}",
    shortDesc: "영원 포인트 / {value}",
    // Divides e666.6 per glyph
    effect: level => Decimal.pow10(level.neg().div(10)),
    formatEffect: x => format(x.reciprocal()),
    combine: GlyphCombiner.multiplyDecimal,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("cursed"),
  },
  realityglyphlevel: {
    id: "realityglyphlevel",
    bitmaskIndex: 4,
    isGenerated: false,
    glyphTypes: ["reality"],
    singleDesc: "장착한 기본 글리프의 유효 레벨을 {value}만큼 증가",
    totalDesc: "장착한 기본 글리프 레벨 +{value}",
    shortDesc: "기본 글리프 레벨 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.floor(level.div(15).times(strength / 3.5)).toNumber()
      : Decimal.floor(Decimal.sqrt(level.times(90).times(strength / 3.5))).toNumber()),
    formatEffect: x => formatInt(x),
    combine: GlyphCombiner.add,
    enabledInDoomed: () => false // Disabled by function getAdjustedGlyphLevel(...)
  },
  realitygalaxies: {
    id: "realitygalaxies",
    bitmaskIndex: 5,
    isGenerated: false,
    glyphTypes: ["reality"],
    singleDesc: "모든 은하가 {value} 강해짐",
    totalDesc: "모든 은하의 성능 +{value}",
    shortDesc: "은하 성능 +{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level.div(50000).times(strength / 3.5), 0.6).add(1).toNumber()
      : Decimal.pow(level.div(100000).times(strength / 3.5), 0.5).add(1).toNumber()),
    formatEffect: x => formatPercents(x - 1, 2),
    combine: GlyphCombiner.multiply,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("reality")
  },
  realityrow1pow: {
    id: "realityrow1pow",
    bitmaskIndex: 6,
    isGenerated: false,
    glyphTypes: ["reality"],
    singleDesc: "현실 업그레이드 증폭기의 배율 ^{value}",
    totalDesc: "현실 업그레이드 증폭기 배율 ^{value}",
    shortDesc: "증폭기 배율 ^{value}",
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.pow(level.div(100000).times(strength / 3.5), 1.5).add(1).toNumber()
      : level.div(125000).times(strength / 3.5).add(1).toNumber()),
    formatEffect: x => format(x, 3, 3),
    combine: GlyphCombiner.addExponents,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("reality")
  },
  realityDTglyph: {
    id: "realityDTglyph",
    bitmaskIndex: 7,
    isGenerated: false,
    glyphTypes: ["reality"],
    singleDesc: () => `글리프 레벨의 팽창된 시간 요소: \n^${format(1.3, 1, 1)}
      ➜ ^(${format(1.3, 1, 1)} + {value})`,
    totalDesc: () => `글리프 레벨의 팽창된 시간 요소: ^${format(1.3, 1, 1)}
      ➜ ^(${format(1.3, 1, 1)} + {value})`,
    genericDesc: "글리프 레벨의 팽창된 시간 요소",
    shortDesc: "레벨의 팽창된 시간 지수 +{value}",
    // You can only get this effect on level 25000 reality glyphs anyway, might as well make it look nice
    // Disregard my man Hevi's above comment we pushing this shit
    effect: (level, strength) => (EffarigUnlock.endgame.canBeApplied
      ? Decimal.clampMax(Decimal.pow(level.div(25000).times(strength / 3.5), 0.6).div(10), 1.5).times(
        Decimal.clampMin(Decimal.log10(Decimal.max(Decimal.pow(level.div(25000).times(
        strength / 3.5), 0.6).div(10).sub(0.5), 1)).add(1), 1)).toNumber()
      : Decimal.clampMax(Decimal.pow(level.div(25000).times(strength / 3.5), 0.5).div(10), 1.5).times(
        Decimal.clampMin(Decimal.log10(Decimal.max(Decimal.pow(level.div(25000).times(
        strength / 3.5), 0.5).div(10).sub(0.5), 1)).add(1), 1)).toNumber()),
    formatEffect: x => format(x, 2, 2),
    combine: GlyphCombiner.add,
    enabledInDoomed: () => !Pelle.isGlyphTypeDisabled("reality")
  },
  companiondescription: {
    id: "companiondescription",
    bitmaskIndex: 8,
    isGenerated: false,
    glyphTypes: ["companion"],
    singleDesc: "아무것도 하지 않고 그저 앉아서 귀엽게 미소 지으며, 꿈속에서 정중히 속삭이고, " +
      "당신을 가로막는 모두의 몰락을 꾀합니다. 이 세상에 하나뿐인 글리프는 절대 당신을 떠나지 않습니다.",
    totalDesc: "행복 +{value}",
    shortDesc: "당신을 해치고 싶어 하지 않음",
    effect: () => {
      if (Enslaved.isRunning) return 0;
      const cursedCount = Glyphs.active.countWhere(g => g?.type === "cursed");
      if (cursedCount > 0) return Math.pow(0.2 + 0.2 * Math.random(), cursedCount);
      return 0.4 + 0.6 * Math.random();
    },
    formatEffect: x => formatPercents(x, 2, 2),
    combine: GlyphCombiner.add,
    enabledInDoomed: true,
  },
  companionEP: {
    id: "companionEP",
    bitmaskIndex: 9,
    isGenerated: false,
    glyphTypes: ["companion"],
    singleDesc: "게임에 헌신해 주셔서 감사합니다! 첫 현실에서 영원 포인트 {value}개에 도달했습니다.",
    shortDesc: "당신을 정말, 정말 사랑함",
    totalDesc: () => ((Enslaved.isRunning || Glyphs.active.countWhere(g => g?.type === "cursed")) ? "도와줘" : "신난다!"),
    // The EP value for this is entirely encoded in rarity, but level needs to be present to
    // make sure the proper parameter is being used. The actual glyph level shouldn't do anything.
    // eslint-disable-next-line no-unused-vars
    effect: (level, strength) => Decimal.pow10(1e6 * strengthToRarity(strength)),
    formatEffect: x => formatPostBreak(x, 2),
    combine: GlyphCombiner.multiplyDecimal,
    enabledInDoomed: true,
  }
};
