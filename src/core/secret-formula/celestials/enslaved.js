export const enslaved = {
  // These entries will be unlocked in no particular order
  progress: {
    hintsUnlocked: {
      id: 0,
      hint: "The Nameless Ones는 돕고 싶어 하지만, 도움을 받으려면 시간이 필요합니다.",
      condition: () => `현실을 완료하지 않은 채 그 안에서 현실 시간으로 ${formatInt(5)}시간 넘게 보냈습니다.
        현실 밖의 시간은 ${formatPercents(0.4)}만큼 계산됩니다. 타이머는 현실을 해금하면 시작되며
        이후 계속 누적됩니다.`,
    },
    ec1: {
      id: 1,
      hint: "이상하군요. 영원 도전 자동 완료 퍼크가 제대로 작동하지 않는 것 같습니다.",
      condition: () => `영원 도전 1의 완료 횟수를 한 번에 ${formatInt(5)}회 넘게 얻었습니다`,
    },
    feelEternity: {
      id: 2,
      hint: "이 현실에서는 무한이 평소보다 더 심하게 망가진 것 같습니다. 고칠 수는 있을까요?",
      condition: "무한 복구를 시도했지만, 대신 영원 느끼기 버튼을 찾아 눌렀습니다",
    },
    ec6: {
      id: 3,
      hint: `일부 도전은 더 어렵지만 그 대가로 무언가를 강화합니다. 이곳에는 평소보다
        무조건 유리하기만 한 도전도 있을까요?`,
      condition: () => `영원 도전 6을 ${formatInt(5)}회 완료한 뒤, 더 저렴한 복제자 은하를 이용하려고
        다시 입장했습니다`,
    },
    c10: {
      id: 4,
      hint: "8번째 반물질 차원 없이 반물질 은하를 얻을 방법이 있을까요?",
      condition: "도전 10을 이용해 6번째 반물질 차원만으로 반물질 은하를 하나 넘게 얻었습니다",
    },
    secretStudy: {
      id: 5,
      hint: "시간 연구 12? 그게 무엇이죠?",
      condition: () => `비밀 시간 연구를 눌러 시간 정리를 ${formatInt(100)}개 추가로 얻었습니다`,
    },
    storedTime: {
      id: 6,
      hint: "충분히 오래 기다리면 이 현실의 일부가 침식되는 것 같습니다.",
      condition: "저장된 시간을 방출해 이번 현실의 게임 시간이 일 년을 넘게 만들었습니다",
    },
    challengeCombo: {
      id: 7,
      hint: "한 도전을 이용해 다른 도전의 제약을 우회할 수 있을까요?",
      condition: "영원 도전 6 안에서 도전 10에 입장했습니다",
    },
  },
  // These get unlocked sequentially
  glyphHints: [
    "무한과 팽창 글리프는 지나치게 제한되어 전혀 쓸모가 없는 것 같습니다.",
    "동력과 시간 글리프는 이곳에서 특히 강합니다.",
    `Effarig 글리프는 알맞은 효과가 있을 때만 유용하지만, 없어도 현실을 완료할 수 있습니다.
      복제 글리프는 매우 유용하지만 반드시 필요하지는 않으며
      동력과 시간만큼 강하지도 않습니다.`
  ]
};
