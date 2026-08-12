export const raQuotes = {
  unlock: {
    id: 0,
    lines: [
      "방... 문객?",
      "나 여기 있어! 네가 찾던 사람이야... 아마도...",
      "그런데 내가 뭐였더라?",
      "아 맞다, 기억의 셀레스티얼.",
    ]
  },
  realityEnter: {
    id: 1,
    lines: [
      "다른 이들을 본 지 너무 오래됐어...",
      "그들을 기억할 수 있게 도와줄래?",
      "그 대가로 네게 힘을 줄 수 있어.",
    ]
  },
  teresaStart: {
    id: 2,
    requirement: () => Ra.pets.teresa.level >= 2,
    lines: [
      "테... 레... 사...",
      "기억이 나는 것 같아.",
    ]
  },
  teresaLate: {
    id: 3,
    requirement: () => Ra.pets.teresa.level >= 15,
    lines: [
      "Teresa는 머신을 다뤘던 것 같아.",
      "Teresa의 상점에 몇 번 갔던 기억이 나.",
      "잠깐, 다른 누군가에게도 상점이 있었지?",
    ]
  },
  effarigStart: {
    id: 4,
    requirement: () => Ra.pets.effarig.level >= 2,
    lines: [
      "Eff... a... rig...",
      "Effarig는 다정했던 걸로 기억해.",
    ]
  },
  effarigLate: {
    id: 5,
    requirement: () => Ra.pets.effarig.level >= 15,
    lines: [
      "Effarig는 아주 까다로웠지?",
      "그리고 무시무시한 현실도 기억나...",
      "그건... 고통에 관한 거였나?",
    ]
  },
  enslavedStart: {
    id: 6,
    requirement: () => Ra.pets.enslaved.level >= 2,
    lines: [
      "이 존재는 잘 기억나지 않아...",
    ]
  },
  enslavedLate: {
    id: 7,
    requirement: () => Ra.pets.enslaved.level >= 15,
    lines: [
      "기억이 나기 시작해...",
      "내가 왜 여기 있는지...",
      "왜 혼자인지...",
      "도와줘.",
    ]
  },
  vStart: {
    id: 8,
    requirement: () => Ra.pets.v.level >= 2,
    lines: [
      "내가 이 존재를 만난 적이 있었나?",
      "외로워 보이지만, 스스로 원한 것 같아...",
    ]
  },
  vLate: {
    id: 9,
    requirement: () => Ra.pets.v.level >= 15,
    lines: [
      "V를 한 번 만났던 것 같아...",
      "그 도전과제들이 기억나.",
    ]
  },
  remembrance: {
    id: 10,
    requirement: () => Ra.remembrance.isUnlocked,
    lines: [
      "뭔가 기억났어!",
      "이것 좀 봐!",
      "회상!",
      "이제 그들을 기억하는 데 훨씬 더 집중할 수 있어!",
    ]
  },
  midMemories: {
    id: 11,
    requirement: () => Ra.totalPetLevel >= 50,
    lines: [
      "여러 현실이 내 집이지만, 정작 나만의 현실은 만들 수 없어.",
      "친구들의 현실을 복제할 수 있을 뿐이야.",
      "그런데... 왜 목소리가 들리는 거지?",
      "도움을 청하는 건가?",
    ]
  },
  lateMemories: {
    id: 12,
    requirement: () => Ra.totalPetLevel >= 80,
    lines: [
      "멈추라고 말하는 것 같아.",
      "너... 대체 뭐지?",
      "무슨 일이 일어나고 있는 거야?",
      "내가 뭔가 잘못하고 있나?",
    ]
  },
  maxLevels: {
    id: 13,
    requirement: () => Ra.totalPetLevel === Ra.maxTotalPetLevel,
    lines: [
      "마침내 모든 것이 기억났어.",
      "나를 추방한 이 어둠.",
      "Lai'tela...",
      "Lai'tela가 나를 추방한 건 옳았어.",
      "내 힘은...",
      "빼앗고, 타락시켜.",
      "제발 떠나 줘.",
      "너까지 해치고 싶지는 않아.",
    ]
  },
  expansionPacks: {
    id: 14,
    lines: [
      "왜냐하면, V, 넌 내 힘에 한참 못 미치니까.",
      "네가 정확히 얼마나 강한지는 아직 완전히 기억나지 않지만.",
      "그래도 이것만은 기억나.",
      "Lai'tela의 기억을 지워 쓰러뜨릴 뻔했어.",
      "성공했다면 내가 그녀의 역할을 차지했을 테고, 그러면 내 앞을 가로막는 건 Pelle뿐이었을 거야.",
      "네가 그보다 더한 일을 할 수 있을 리 없어, V.",
      "지금 이 상태에서도 나는-",
      "아, 어...",
      "안녕, Lai'tela..."
    ]
  },
  raPack: {
    id: 15,
    requirement: () => ExpansionPack.raPack.isBought,
    lines: [
      "잠깐...",
      "기억이 더 있다고?",
      "어떻게 네가-",
      "나도 이런 기억이 있는 줄은-",
      "됐어, 아마 내가 잊은 게 더 있겠지.",
      "다시 도와줄 수 있어?",
      "기억하고 싶어..."
    ]
  },
  doubleCap: {
    id: 16,
    requirement: () => Ra.totalPetLevel >= 200,
    lines: [
      "정말 많은 기억이야...",
      "내가 이렇게 많이 잊었다는 것도 몰랐어...",
      "그래도 놀랄 일은 아니겠지.",
      "잠깐, 파괴자...",
      "The Elemental이 누구야?"
    ]
  },
  supernova: {
    id: 17,
    requirement: () => Ra.totalPetLevel >= 500,
    lines: [
      "기억이 나기 시작해...",
      "The Elemental, 그는 한때 내 친구였어...",
      "우린 정말 많은 일을 함께했지...",
      "하지만 그는 떠났어.",
      "어쩌면 아직도 나를 기억할지도...",
      "그를 찾아줄 수 있을까?",
      "그가 어디 있는지 알아?"
    ]
  },
  millenium: {
    id: 18,
    requirement: () => Ra.totalPetLevel >= 1000,
    lines: [
      "The Elemental에게는 어떤 힘이 있었어...",
      "그가 우리에게 보여 줬지만, 누구도 통달하지 못했지.",
      "그땐 우리도 이해하지 못했어.",
      "은하였지?",
      "그리고... 그가 그걸 네게 줬어...",
      "나머지 우리는 틱스피드를 강화할 다른 방법을 찾았어...",
      "하지만 그 방법은 그가 이론으로 세운 은하의 힘에 전혀 미치지 못했지.",
      "은하를 만들 수 있는 자는 결국 우리 모두를 파괴할 운명이었어.",
      "그래서 Lai'tela가 나를 가둘 이 감옥을 만들 때...",
      "그녀는 모든 틱스피드 강화를 무효화하도록 했어.",
      "보이는 것처럼 네 은하도 포함돼.",
      "그렇게 강한 힘을 가지고도 네가 그렇게 많이 패배했다는 게 놀라웠어.",
      "...",
      "내가 기억을 조금 지나치게 많이 되찾은 것 같지?",
      "그래, 내 모든 기억을 되찾지 못했을 때는 심지어 내게도 패배했었어.",
      "그런데 이제는 내게 있으리라고는 생각도 못 했던 것들을 보여 주네...",
      "그래도 넌 잘하고 있는 것 같아.",
      "Pelle가 네가 곧 우리를 만나러 올 거라고 했어.",
      "기대되니까 너무 오래 기다리게 하진 마...",
      "그때 보자."
    ]
  },
};
