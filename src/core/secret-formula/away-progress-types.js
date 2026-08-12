export const awayProgressTypes = [
  {
    name: "antimatter",
    forcedName: "반물질",
    isUnlocked: () => true,
  }, {
    name: "dimensionBoosts",
    forcedName: "차원 가속",
    isUnlocked: () => true,
  }, {
    name: "antimatterGalaxies",
    forcedName: "반물질 은하",
    reference: ["galaxies"],
    isUnlocked: () => true,
  }, {
    name: "infinities",
    forcedName: "무한 횟수",
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
  }, {
    name: "infinityPoints",
    forcedName: "무한 포인트",
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
  }, {
    name: "replicanti",
    forcedName: "복제자",
    reference: ["replicanti", "amount"],
    isUnlocked: () => PlayerProgress.replicantiUnlocked() || PlayerProgress.eternityUnlocked(),
  }, {
    name: "replicantiGalaxies",
    forcedName: "복제자 은하",
    reference: ["replicanti", "galaxies"],
    isUnlocked: () => PlayerProgress.replicantiUnlocked() || PlayerProgress.eternityUnlocked(),
  }, {
    name: "eternities",
    forcedName: "영원 횟수",
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
  }, {
    name: "eternityPoints",
    forcedName: "영원 포인트",
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
  }, {
    name: "tachyonParticles",
    forcedName: "타키온 입자",
    reference: ["dilation", "tachyonParticles"],
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
  }, {
    name: "dilatedTime",
    forcedName: "팽창 시간",
    reference: ["dilation", "dilatedTime"],
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
  }, {
    name: "timeTheorems",
    forcedName: "시간 정리",
    reference: ["timestudy", "theorem"],
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
  }, {
    name: "tachyonGalaxies",
    forcedName: "타키온 은하",
    reference: ["dilation", "totalTachyonGalaxies"],
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
  }, {
    name: "achievementAmount",
    forcedName: "도전과제 개수",
    reference: ["achievementBits"],
    applyFn: x => x.map(b => countValuesFromBitmask(b)).sum(),
    isUnlocked: () => PlayerProgress.realityUnlocked(),
  }, {
    name: "realities",
    forcedName: "현실 횟수",
    isUnlocked: () => PlayerProgress.realityUnlocked(),
  }, {
    name: "realityMachines",
    forcedName: "리얼리티 머신",
    reference: ["reality", "realityMachines"],
    isUnlocked: () => PlayerProgress.realityUnlocked(),
  }, {
    name: "blackHole",
    forcedName: "블랙홀",
    isUnlocked: () => BlackHole(1).isUnlocked,
    // Functions as the visible option for both first & second BHs, never appears due to having no reference.
    appearsInAwayModal: false,
  }, {
    name: "firstBlackHole",
    forcedName: "첫 번째 블랙홀",
    awayOption: "blackHole",
    reference: ["blackHole", "0", "activations"],
    isUnlocked: () => BlackHole(1).isUnlocked,
    classObjectReference: "black-hole",
    showOption: false,
  }, {
    name: "secondBlackHole",
    forcedName: "두 번째 블랙홀",
    awayOption: "blackHole",
    reference: ["blackHole", "1", "activations"],
    isUnlocked: () => BlackHole(2).isUnlocked,
    classObjectReference: "black-hole",
    showOption: false,
  }, {
    name: "relicShards",
    forcedName: "유물 파편",
    reference: ["celestials", "effarig", "relicShards"],
    isUnlocked: () => TeresaUnlocks.effarig.canBeApplied,
  }, {
    name: "celestialMemories",
    forcedName: "셀레스티얼 기억",
    isUnlocked: () => VUnlocks.raUnlock.isUnlocked,
    // Functions as the visible option for all Memories, never appears due to having no reference.
    appearsInAwayModal: false,
  }, {
    name: "teresaMemories",
    forcedName: "Teresa의 기억",
    awayOption: "celestialMemories",
    reference: ["celestials", "ra", "pets", "teresa", "memories"],
    isUnlocked: () => Ra.pets.teresa.isUnlocked && !Ra.pets.teresa.isCapped,
    showOption: false,
  }, {
    name: "effarigMemories",
    forcedName: "Effarig의 기억",
    awayOption: "celestialMemories",
    reference: ["celestials", "ra", "pets", "effarig", "memories"],
    isUnlocked: () => Ra.pets.effarig.isUnlocked && !Ra.pets.effarig.isCapped,
    showOption: false,
  }, {
    name: "enslavedMemories",
    forcedName: "The Nameless Ones의 기억",
    awayOption: "celestialMemories",
    reference: ["celestials", "ra", "pets", "enslaved", "memories"],
    isUnlocked: () => Ra.pets.enslaved.isUnlocked && !Ra.pets.enslaved.isCapped,
    showOption: false,
  }, {
    name: "vMemories",
    forcedName: "V의 기억",
    awayOption: "celestialMemories",
    reference: ["celestials", "ra", "pets", "v", "memories"],
    isUnlocked: () => Ra.pets.v.isUnlocked && !Ra.pets.v.isCapped,
    showOption: false,
  }, {
    name: "imaginaryMachines",
    forcedName: "허수 머신",
    reference: ["reality", "imaginaryMachines"],
    isUnlocked: () => MachineHandler.isIMUnlocked,
  }, {
    name: "darkMatter",
    forcedName: "암흑 물질",
    reference: ["celestials", "laitela", "darkMatter"],
    isUnlocked: () => Laitela.isUnlocked,
  }, {
    name: "darkEnergy",
    forcedName: "암흑 에너지",
    reference: ["celestials", "laitela", "darkEnergy"],
    isUnlocked: () => Laitela.isUnlocked,
  }, {
    name: "singularities",
    forcedName: "특이점",
    reference: ["celestials", "laitela", "singularities"],
    isUnlocked: () => Laitela.isUnlocked,
  }, {
    name: "realityShards",
    forcedName: "현실 파편",
    reference: ["celestials", "pelle", "realityShards"],
    isUnlocked: () => Pelle.isDoomed,
  },
];
