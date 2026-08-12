import { STEAM } from "@/env";

// NOTE: IF ANY COSTS ARE CHANGED HERE, THEY ALSO NEED TO BE CHANGED ON THE BACKEND TOO
export const shopPurchases = {
  dimPurchases: {
    key: "dimPurchases",
    cost: 30,
    description: "모든 반물질 차원 배율이 2배가 됩니다. 영구적으로 적용됩니다.",
    multiplier: purchases => Math.pow(2, purchases),
    formatEffect: x => `×${x > 1000 ? Notation.scientific.formatDecimal(new Decimal(x), 2) : x.toFixed(0)}`,
  },
  allDimPurchases: {
    key: "allDimPurchases",
    cost: 60,
    description: () => {
      const dims = ["반물질"];
      if (InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked()) dims.push("무한");
      if (PlayerProgress.eternityUnlocked()) dims.push("시간");
      return `모든 차원 배율이 2배가 됩니다(${makeEnumeration(dims)}; 32배까지 곱연산). 영구적으로 적용됩니다.`;
    },
    multiplier: purchases => (purchases > 4 ? 32 + (purchases - 5) * 2 : Math.pow(2, purchases)),
    formatEffect: x => `×${x.toFixed(0)}`,
  },
  IPPurchases: {
    key: "IPPurchases",
    cost: 40,
    description: "모든 출처의 무한 포인트 획득량이 2배 증가합니다. (합연산)",
    multiplier: purchases => (purchases === 0 ? 1 : 2 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
    lockText: "무한",
  },
  replicantiPurchases: {
    key: "replicantiPurchases",
    cost: 60,
    description: "복제자 획득량이 50% 증가합니다. (합연산)",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
    lockText: "복제자",
  },
  EPPurchases: {
    key: "EPPurchases",
    cost: 50,
    description: "모든 출처의 영원 포인트 획득량이 3배 증가합니다. (합연산)",
    multiplier: purchases => (purchases === 0 ? 1 : 3 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
    lockText: "영원",
  },
  dilatedTimePurchases: {
    key: "dilatedTimePurchases",
    cost: 40,
    description: "팽창 시간 획득량이 50% 증가합니다. (합연산)",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
    lockText: "시간 팽창",
  },
  RMPurchases: {
    key: "RMPurchases",
    cost: 60,
    description: "리얼리티 머신 획득량이 100% 증가합니다. (합연산)",
    multiplier: purchases => purchases + 1,
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "현실",
  },
  smallTimeSkip: {
    key: "smallTimeSkip",
    cost: 10,
    description: "오프라인 생산 6시간분을 획득합니다. (자동구매기는 최대 속도로 작동하지 않음)",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseTimeSkip();
    }
  },
  bigTimeSkip: {
    key: "bigTimeSkip",
    cost: 20,
    description: "오프라인 생산 24시간분을 획득합니다. (자동구매기는 최대 속도로 작동하지 않음)",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseLongerTimeSkip();
    }
  },
  singleCosmeticSet: {
    key: "singleCosmeticSet",
    cost: 20,
    description: "원하는 글리프 꾸미기 세트 하나를 해금합니다",
    instantPurchase: true,
    onPurchase: () => {
      // The actual unlocks are handled in the ShopPurchaseData object, so we just show notifications here
      GameUI.notify.info(
        `글리프 꾸미기용 "${GlyphAppearanceHandler.chosenFromModal.name}" 세트를 구매했습니다!`,
        10000);
      GlyphAppearanceHandler.chosenFromModal = null;
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "현실",
  },
  allCosmeticSets: {
    key: "allCosmeticSets",
    cost: () => {
      // Both of these are also on the payment backend, which would need to be changed as well
      const baseCost = 420;
      const totalSets = Object.keys(GameDatabase.reality.glyphCosmeticSets).length;

      // Using this instead of the actual set count maintains consistency with the backend price,
      // at the cost of the frontend UI being wrong for cheated saves
      const currentSetCount = GlyphAppearanceHandler.expectedSetCount;
      return Math.floor(baseCost * (totalSets - currentSetCount) / totalSets);
    },
    description: "남은 모든 글리프 꾸미기 세트를 한 번에 해금합니다",
    instantPurchase: true,
    onPurchase: () => {
      // The actual unlocks are handled in the ShopPurchaseData object, so we just show notifications here
      GameUI.notify.info(`모든 글리프 꾸미기 세트를 해금했습니다!`, 15000);
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "현실",
  },
};

if (STEAM) {
  delete shopPurchases.allCosmeticSets;
}
