function rebuyableCost(initialCost, increment, id) {
  return initialCost * Math.pow(increment, player.celestials.teresa.perkShop[id]);
}
function rebuyable(config) {
  const { id, otherReq, cap, costCap, description, preChargedEffect, chargedEffect, formatEffect, formatCost, showEffectAfterCharge } = config;
  return {
    id,
    cost: () => (config.cost ? config.cost() : rebuyableCost(config.initialCost, config.increment, config.id)),
    otherReq,
    cap,
    costCap,
    description,
    preChargedEffect: () => config.preChargedEffect(player.celestials.teresa.perkShop[config.id]),
    chargedEffect: () => config.chargedEffect(player.celestials.teresa.perkShop[config.id]),
    effect: () => config.effect(player.celestials.teresa.perkShop[config.id]),
    formatEffect,
    formatCost,
    rebuyable: true,
    showEffectAfterCharge
  };
}

export const perkShop = {
  glyphLevel: rebuyable({
    id: 0,
    initialCost: 1,
    increment: 2,
    description: () => PerkShopUpgrade.glyphLevel.viewCharge ? `역대 최고 글리프 레벨에 따라 불안정성 이전
      글리프 레벨에 배율을 적용합니다` : `불안정성 이전 글리프 레벨을 ${formatPercents(0.05)}만큼 증가시킵니다`,
    effect: () => player.disablePostReality ? 1 : (PerkShopUpgrade.glyphLevel.isCharged
      ? PerkShopUpgrade.glyphLevel.chargedEffect()
      : PerkShopUpgrade.glyphLevel.preChargedEffect()),
    preChargedEffect: bought => Math.pow(1.05, bought),
    chargedEffect: () => Decimal.pow(player.records.bestEndgame.glyphLevel, 0.2).toNumber(),
    formatEffect: value => formatX(value, 2, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048),
    cap: () => PerkShopUpgrade.glyphLevel.isCharged
      ? Number.MAX_VALUE
      : (Ra.unlocks.perkShopIncrease.canBeApplied ? Math.pow(1.05, 20) : Math.pow(1.05, 11)),
    showEffectAfterCharge: true
  }),
  rmMult: rebuyable({
    id: 1,
    initialCost: 1,
    increment: 2,
    description: () => PerkShopUpgrade.rmMult.viewCharge ? `반물질 양에 따라 리얼리티 머신 획득량과
      상한에 배율을 적용합니다` : `리얼리티 머신 획득량을 두 배로 만듭니다`,
    effect: () => player.disablePostReality ? DC.D1 : (PerkShopUpgrade.rmMult.isCharged
      ? PerkShopUpgrade.rmMult.chargedEffect()
      : PerkShopUpgrade.rmMult.preChargedEffect()),
    preChargedEffect: bought => Decimal.pow(2, bought),
    chargedEffect: () => Decimal.log10(player.antimatter.add(10)),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048),
    cap: () => PerkShopUpgrade.rmMult.isCharged
      ? Number.MAX_VALUE
      : (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048),
    showEffectAfterCharge: true
  }),
  bulkDilation: rebuyable({
    id: 2,
    initialCost: 100,
    increment: 2,
    description: () => PerkShopUpgrade.bulkDilation.viewCharge ? `팽창 자동구매기가 항상 최대로 구매합니다.` : `팽창
      자동구매기가 한 번에 두 배 많은 팽창 업그레이드를 구매합니다.`,
    effect: () => player.disablePostReality ? 1 : (PerkShopUpgrade.bulkDilation.isCharged
      ? PerkShopUpgrade.bulkDilation.chargedEffect()
      : PerkShopUpgrade.bulkDilation.preChargedEffect()),
    preChargedEffect: bought => Math.pow(2, bought),
    chargedEffect: () => Math.pow(10, 300),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1638400 : 1600),
    cap: () => PerkShopUpgrade.bulkDilation.isCharged
      ? Number.MAX_VALUE
      : (Ra.unlocks.perkShopIncrease.canBeApplied ? 16384 : 16),
    showEffectAfterCharge: false
  }),
  autoSpeed: rebuyable({
    id: 3,
    initialCost: 1000,
    increment: 2,
    description: () => PerkShopUpgrade.autoSpeed.viewCharge ? `무한 차원, 시간 차원, 팽창, 복제자 자동구매기의
      간격이 즉시가 됩니다.` : `무한 차원, 시간 차원, 팽창, 복제자 자동구매기가 ${formatX(2)} 빨라집니다.`,
    effect: () => player.disablePostReality ? 1 : (PerkShopUpgrade.autoSpeed.isCharged
      ? PerkShopUpgrade.autoSpeed.chargedEffect()
      : PerkShopUpgrade.autoSpeed.preChargedEffect()),
    preChargedEffect: bought => Math.pow(2, bought),
    chargedEffect: () => Math.pow(10, 300),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 64000 : 4000),
    cap: () => PerkShopUpgrade.autoSpeed.isCharged
      ? Number.MAX_VALUE
      : (Ra.unlocks.perkShopIncrease.canBeApplied ? 64 : 4),
    showEffectAfterCharge: false
  }),
  musicGlyph: rebuyable({
    id: 4,
    description: () => PerkShopUpgrade.musicGlyph.viewCharge ? `음악 글리프를 자동으로 구매하고 제거하는
      자동구매기를 해금합니다.` : `최고 레벨의 ${formatPercents(0.8)}인 무작위 종류의 음악 글리프를 받습니다. (눌러 보세요!)`,
    cost: () => 1,
    formatCost: value => formatInt(value),
    costCap: () => Number.MAX_VALUE,
    cap: () => Number.MAX_VALUE,
    showEffectAfterCharge: false
  }),
  // Only appears with the perk shop increase upgrade
  fillMusicGlyph: rebuyable({
    id: 5,
    description: () => `보관함의 모든 빈 슬롯을 음악 글리프로 채웁니다`,
    cost: () => Math.clampMin(GameCache.glyphInventorySpace.value, 1),
    otherReq: () => GameCache.glyphInventorySpace.value > 0,
    formatCost: value => formatInt(value),
    costCap: () => Number.MAX_VALUE,
    cap: () => Number.MAX_VALUE,
    showEffectAfterCharge: false
  }),
  // My bored ass having to do this shit smh also ditto to the above but for Teresa Expansion Pack
  addCharges: rebuyable({
    id: 6,
    initialCost: 1e10,
    increment: 1e10,
    description: () => `새로운 충전된 퍼크 업그레이드를 해금합니다`,
    effect: bought => Math.floor(bought),
    formatEffect: value => formatInt(value),
    formatCost: value => format(value, 2),
    costCap: () => 1e60,
    cap: () => 5,
    showEffectAfterCharge: false
  }),
};
