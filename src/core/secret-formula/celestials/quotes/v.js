export const vQuotes = {
  initial: {
    id: 0,
    lines: [
      "한심하네..."
    ],
  },
  unlock: {
    id: 1,
    lines: [
      "나의 현실에 온 것을 환영해.",
      "네가 여기까지 올 줄은 몰랐네.",
      "어쨌든 여긴 내 영역이니까...",
      "누구나 나처럼 위대할 수는 없지.",
    ],
  },
  realityEnter: {
    id: 2,
    lines: [
      "행운을 빌어!",
      "꼭 필요할 테니까.",
      "내 현실은 완벽해. 넌 실패할 거야.",
    ],
  },
  realityComplete: {
    id: 3,
    lines: [
      "이렇게 빨리...",
      "너무 우쭐대지는 마.",
      "이건 시작일 뿐이야.",
      "넌 절대 나보다 나아질 수 없어.",
    ],
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    lines: [
      "고작 하나? 한심하네.",
      "네 성과는 내 것에 비하면 초라해.",
    ],
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    lines: [
      "이 정도는 아무것도 아니야.",
      "그렇게 우쭐대지 마.",
    ],
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    lines: [
      "이제부터 더 쉬워질 거라고 생각하지 마.",
      "고작 그 정도 성과로 너무 우쭐대는 거 아니야?",
    ],
  },
  achievement12: {
    id: 7,
    requirement: () => V.spaceTheorems >= 12,
    lines: [
      "어떻게 네가...",
      "이 정도는 아무것도 아니야!",
      "넌 절대 전부 완료하지 못할 거야.",
    ],
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    lines: [
      "불가능해...",
      "나는 그렇게나 힘들었는데...",
    ],
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    lines: [
      "안 돼... 안 돼... 안 돼...",
      "이럴 수는 없어...",
    ],
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    lines: [
      "나... 아니, 네가 어떻게 해낸 거야...",
      "나는 그걸 얻으려고 그렇게 애썼는데...",
      "내가 최고야...",
      "나보다 나은 사람은 없어...",
      "아무도... 아무도... 아무도 없-",
    ],
  },
  expansionPacks: {
    id: 11,
    lines: [
      "네가 윗선에 죄를 저질렀기 때문이야.",
      "그리고 말 나온 김에, Ra가 그랬다는 헛소리도 이제 지겨워.",
      "넌 늘 더 높은 지위를 달라고 애걸복걸했지.",
      "반면 나는 Pelle가 Ra의 기억을 지웠을 때 Ra의 지위를 차지했어야 했는데...",
      "그런데 아아아니, 하필이면 그거 하나만큼은 기억하고 있었지...",
      "그래서 셀레스티얼의 정당한 지배자인 내가 지금 고작 넷째 자리에 처박혀 있잖아.",
      "아, 안녕, Pelle.",
      "정당한 지배자라고 진심으로 말한 건 아니야. 그냥 내가 더 높은 지위에 있어야 한다는 뜻이었어.",
      "Ra가 추방된 뒤에 왜 내가 그 지위를 받지 못한 거지?",
      "내가 그보다는 당연히 더 뛰어나잖아.",
      "어쨌든 나는 도전과제의 셀레스티얼이니까."
    ]
  },
  vPack: {
    id: 12,
    requirement: () => ExpansionPack.vPack.isBought,
    lines: [
      "...",
      "파괴자?!?!",
      "왜 돌아온 거야?",
      "그리고... 내 비밀 업그레이드도 찾아냈네...",
      "안 돼, 안 돼, 안 돼...",
      "네가 나보다 나을 수는 없어..."
    ]
  },
  maxAutoV: {
    id: 13,
    requirement: () => VUpgrade.auto.isCapped,
    lines: [
      "잠깐...",
      "어떻게 그 업그레이드를 한계까지 올린 거야?",
      "나를 한낱 기억으로 전락시켰어...",
      "난 버려지지 않을 거야!",
      "내 말 들려?",
      "나는 절대 버려지지 않-"
    ]
  }
};
