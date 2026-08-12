export const secretAchievements = [
  {
    id: 11,
    name: "첫 번째는 언제나 무료",
    description: "이 도전과제를 클릭한다."
  },
  {
    id: 12,
    name: "혹시 모르니까",
    get description() { return `새로고침하지 않고 ${formatInt(100)}번 저장한다.`; }
  },
  {
    id: 13,
    name: "존중하면 보답이 따른다",
    description: "조의를 표한다."
  },
  {
    id: 14,
    name: "나도 그래",
    description: "짓궂은 말을 한다."
  },
  {
    id: 15,
    name: "배럴 롤을 해라!",
    description: "배럴 롤을 한다.",
  },
  {
    id: 16,
    name: "고통을 즐기시나요?",
    get description() {
      return `영원에 도달한 뒤 현실 시간 ${formatInt(10)}분 동안
      "고통스러운" 표기법을 사용한다.`;
    },
    checkRequirement: () => AchievementTimers.pain
      .check(PlayerProgress.eternityUnlocked() && Notations.current.isPainful, 600),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 17,
    name: "목숨 30개",
    description: "코나미 코드를 입력한다."
  },
  {
    id: 18,
    name: "운이 좋다고 느끼나? 어때, 애송이?",
    get description() {
      return `매초 ${formatInt(1)}/${formatInt(1e5)} 확률로 이 도전과제를 달성한다.`;
    }
  },
  {
    id: 21,
    name: "현실에서 공부나 해",
    description: "비밀 시간 연구를 구매한다."
  },
  {
    id: 22,
    name: "딥 프라이드",
    get description() { return `이모지 표기법을 사용하며 반물질 은하를 총 ${formatInt(1e5)}개 구매한다.`; },
    checkRequirement: () => player.requirementChecks.permanent.emojiGalaxies >= 1e5,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 23,
    name: "거기 서라, 범죄자 녀석!",
    description: "콘솔을 연다."
  },
  {
    id: 24,
    name: "진짜 뉴스",
    description: "클릭하면 무언가 일어나는 뉴스 메시지를 클릭한다."
  },
  {
    id: 25,
    name: "쉿... 비밀이야",
    description: "비밀 테마를 발견한다."
  },
  {
    id: 26,
    name: "넌 실패작이야",
    get description() {
      return `새로고침하지 않고 영원 도전에 ${formatInt(10)}번 실패한다.
      대체 인생을 어떻게 살고 있는 거야...`;
    },
    checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED
  },
  {
    id: 27,
    name: "물질 차원이라고 부르는 건 아니잖아?",
    description: "물질을 무한대로 만든다.",
    checkRequirement: () => Currency.matter.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "좋아.",
    description: "자기가 뭘 했는지 모르는 척하지 마라."
  },
  {
    id: 31,
    name: "RAM을 좀 더 다운로드하지 그래",
    get description() { return `업데이트 간격을 ${formatInt(200)}ms로 설정한다.`; }
  },
  {
    id: 32,
    name: "0.001 이하",
    get description() {
      return `최단 무한 또는 영원 기록을 ${format(0.001, 3, 3)}초 이하로 만든다.`;
    },
    checkRequirement: () =>
      Time.bestInfinity.totalMilliseconds.lte(1) ||
      Time.bestEternity.totalMilliseconds.lte(1),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "건전한 재정적 결정",
    description: "STD 코인을 구매하는 버튼을 클릭한다."
  },
  {
    id: 34,
    name: "이게 어떻게 작동하는지는 알지?",
    description: "빈 시간 연구 트리로 재설정한다."
  },
  {
    id: 35,
    name: "최대 구매에 대해 알려 줘야 하나...",
    get description() { return `틱스피드 업그레이드를 하나씩 ${formatInt(1e5)}번 구매한다.`; },
    checkRequirement: () => player.requirementChecks.permanent.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "당신이 자리를 비운 동안... 아무 일도 없었습니다.",
    description: "자리를 비운 동안 아무 일도 일어나지 않는 것을 본다."
  },
  {
    id: 37,
    name: "지시를 따랐군",
    description: "지시를 따른다."
  },
  {
    id: 38,
    name: "칼날 위",
    description: "확인 문구를 입력한 뒤 하드 리셋 확인창을 닫는다."
  },
  {
    id: 41,
    name: "그 차원은 존재하지 않는다",
    description: "제9 차원 구매를 시도한다."
  },
  {
    id: 42,
    name: "내가 부끄럽다",
    description: "영원 도전 12로 시간을 빠르게 하려고 시도한다."
  },
  {
    id: 43,
    name: "불협화음의 합창",
    description: "장착한 모든 글리프를 음악 글리프로 만든다.",
    checkRequirement: () => Glyphs.active.length && Glyphs.active.every(x => Glyphs.isMusicGlyph(x)),
    checkEvent: GAME_EVENT.GLYPHS_EQUIPPED_CHANGED
  },
  {
    id: 44,
    name: "이제 통계하셨습니까?",
    get description() { return `현실 시간 ${formatInt(15)}분 동안 통계 탭을 뚫어지게 바라본다.`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 900),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "드래그가 질질 끌리네",
    description: "1분 동안 퍼크를 이리저리 드래그한다.",
    checkRequirement: () => player.requirementChecks.permanent.perkTreeDragging++ / 100 >= 60
  },
  {
    id: 46,
    name: "비 오는 날을 위해",
    description: "현실 시간을 하루 동안 저장한다."
  },
  {
    id: 47,
    name: "ALT+",
    description: "숨길 수 있는 모든 탭을 숨긴다."
  },
  {
    id: 48,
    name: "스택 오버플로",
    description: "오토메이터의 줄 수보다 오류를 더 많이 만든다."
  },
];
