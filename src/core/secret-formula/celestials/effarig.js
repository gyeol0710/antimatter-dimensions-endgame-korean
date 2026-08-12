export const effarigUnlocks = {
  adjuster: {
    id: 0,
    description: "글리프 레벨 요인의 가중치 조절",
    cost: 1e7,
    onPurchased: () => {
      Effarig.quotes.unlockWeights.show();
      ui.view.tabs.reality.openGlyphWeights = true;
      Tab.reality.glyphs.show();
    }
  },
  glyphFilter: {
    id: 1,
    description: "글리프 필터링",
    cost: 2e8,
    onPurchased: () => {
      Effarig.quotes.unlockGlyphFilter.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.FILTER_SETTINGS;
    }
  },
  setSaves: {
    id: 2,
    description: "글리프 프리셋",
    cost: 3e9,
    onPurchased: () => {
      Effarig.quotes.unlockSetSaves.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.SAVED_SETS;
    }
  },
  run: {
    id: 3,
    description: "Effarig의 현실",
    cost: 5e11,
    onPurchased: () => {
      Effarig.quotes.unlockRun.show();
    }
  },
  infinity: {
    id: 4,
    label: "무한",
    get description() {
      return ` 무한 횟수에 따라 복제자 상한에 배율이 적용됩니다
        무한 횟수가 최대 복제자 은하를 증가시킵니다
        Effarig의 현실에서는 기본 무한 포인트 획득량이 ${format(DC.E200)}에서 상한에 도달합니다
        Effarig의 현실에서는 각 종류의 무한 포인트 배율이 ${format(DC.E50)}에서 상한에 도달합니다`;
    },
  },
  eternity: {
    id: 5,
    label: "영원",
    get description() {
      return ` 영원 횟수가 무한 횟수를 생성합니다
        Effarig의 현실에서 무한 포인트가 더 이상 어떤 방식으로도 제한되지 않습니다
        The Nameless Ones를 해금했습니다`;
    },
  },
  reality: {
    id: 6,
    label: "현실",
    get description() {
      return " Effarig 글리프를 해금했습니다(최대 하나만 장착할 수 있고 일부 효과는 서로 동시에 적용되지 않습니다)";
    },
  },
  maintainRS: {
    id: 7,
    description: "엔드게임 시 유물 파편을 유지합니다",
    cost: new Decimal("1e4300"),
    onPurchased: () => {
      Effarig.quotes.keepRelicShard.show();
    }
  },
  glyphGenerationBoost: {
    id: 8,
    get description() {
      return `Effarig 레벨 ${formatInt(100)}이 파멸과 엔드게임에서 생성되는 글리프에 영향을 줍니다`;
    },
    cost: new Decimal("1e4400"),
    onPurchased: () => {
      Effarig.quotes.betterGeneration.show();
    }
  },
  maxMomentum: {
    id: 9,
    description: "모멘텀이 항상 최대치가 됩니다",
    cost: new Decimal("1e4550"),
    onPurchased: () => {
      Effarig.quotes.maxMomentum.show();
    }
  },
  maxRarityBoost: {
    id: 10,
    description: "유물 파편이 감소된 비율로 글리프 희귀도 상한을 강화합니다",
    cost: new Decimal("1e4750"),
    onPurchased: () => {
      Effarig.quotes.moreRarityCap.show();
    }
  },
  extendRun: {
    id: 11,
    description: "Effarig의 엔드게임을 해금합니다",
    cost: new Decimal("1e5000"),
    onPurchased: () => {
      if (Effarig.isRunning) {
        Effarig.initializeRun();
      }
      Effarig.quotes.effEndgame.show();
    }
  },
  endgame: {
    id: 12,
    label: "엔드게임",
    get description() {
      return ` 모든 글리프 효과가 개선됩니다
        Effarig 글리프의 리얼리티 머신 배율 효과가 이제 리얼리티 머신 상한도 강화합니다
        Effarig 글리프의 글리프 불안정성 지연 효과가 이제 처음 ${formatInt(2)}단계가 아니라 처음 ${formatInt(4)}단계의 불안정성을 지연합니다
        Effarig 글리프 희생 효과의 상한이 제거되고 ${formatPercents(1)}를 넘는 값은 글리프 희귀도 상한을 강화합니다
        엔드게임 마스터리 ${formatInt(71)}이 이제 역대 최고 글리프 레벨로 생성하며 Effarig 글리프도 ${formatInt(2)}개 생성합니다
        엔드게임 시 현실 글리프 ${formatInt(2)}개를 자동으로 생성합니다`;
    },
  },
};
