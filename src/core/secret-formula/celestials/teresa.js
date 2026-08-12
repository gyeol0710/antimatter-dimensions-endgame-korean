export const teresa = {
  unlocks: {
    run: {
      id: 0,
      price: 1e14,
      description: "Teresa의 현실을 해금합니다.",
      onUnlock: () => Teresa.quotes.unlockReality.show(),
    },
    epGen: {
      id: 1,
      price: 1e18,
      description: "영원 포인트 자동 생성을 해금합니다.",
      isDisabledInDoomed: () => !PelleCelestialUpgrade.passiveEPGen.canBeApplied
    },
    effarig: {
      id: 3,
      price: 1e24,
      description: "고대 유물의 셀레스티얼, Effarig를 해금합니다.",
      onUnlock: () => Teresa.quotes.effarig.show(),
    },
    shop: {
      id: 2,
      price: 1e21,
      description: "Teresa의 퍼크 포인트 상점을 해금합니다.",
    },
    undo: {
      id: 4,
      price: 1e10,
      description: "글리프 장착을 \"되돌리는\" 기능을 해금합니다.",
      isDisabledInDoomed: () => !PelleCelestialUpgrade.undoGlyph.canBeApplied
    },
    startEU: {
      id: 5,
      price: 1e6,
      description: "모든 영원 업그레이드가 해금된 상태로 현실을 시작합니다.",
      isDisabledInDoomed: () => !PelleCelestialUpgrade.allEternityUpgrades.canBeApplied,
      onUnlock: () => {
        for (const id of [1, 2, 3, 4, 5, 6]) player.eternityUpgrades.add(id);
      },
    }
  }
};
