export const catchupResources = [
  {
    name: "반물질 차원",
    id: 0,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `각 반물질 차원은 지속적으로 한 단계 낮은 차원을 생산합니다. 가장 낮은 반물질 차원은
      반물질을 생산합니다.`
  },
  {
    name: "틱스피드 업그레이드",
    id: 1,
    openH2pEntry: "Tickspeed",
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `틱스피드 업그레이드는 시간이 더 빠르게 흐르는 것처럼 반물질 차원이 다른 반물질 차원이나
      반물질을 더 빠르게 생산하도록 합니다.`
  },
  {
    name: "자동구매기",
    id: 2,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `자동구매기는 구매할 여유가 생겼을 때 반물질 차원 업그레이드를 자동으로 구매하는
      게임 내 기능입니다.`
  },
  {
    name: "차원 가속",
    id: 3,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `구매 가능한 가장 높은 반물질 차원을 일정량 확보한 뒤 모든 반물질 차원과 틱스피드를
      초기화하면 차원 가속을 얻습니다. 차원 가속은 반물질 차원에 배율을 제공합니다.`
  },
  {
    name: "반물질 은하",
    id: 4,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `반물질 차원과 차원 가속을 초기화하면 반물질 은하를 얻습니다. 반물질 은하는 틱스피드
      업그레이드의 효과를 복리 방식으로 향상합니다.`
  },
  {
    name: "무한",
    id: 5,
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `무한은 첫 번째 주요 초기화 단계입니다. 반물질 ${format(Number.MAX_VALUE, 2)}개에 도달하면
      지금까지의 모든 것을 초기화하는 대신 새로운 콘텐츠와 자원을 해금할 수 있습니다.`
  },
  {
    name: "무한 포인트",
    id: 6,
    openH2pEntry: "Infinity",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: `무한 포인트는 처음 무한에 도달한 뒤의 주요 자원입니다. 무한 초기화 후에도 유지되는
      기능을 구매하는 데 사용할 수 있습니다.`
  },
  {
    name: "일반 도전",
    id: 7,
    openH2pEntry: "Normal Challenges",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `도전에서는 더 어려운 조건에서 반물질 ${format(Number.MAX_VALUE, 2)}개에 도달해야 합니다.
      도전을 완료하면 자동구매기를 업그레이드할 수 있습니다.`
  },
  {
    name: "무한 돌파",
    id: 8,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `빅 크런치 자동구매기를 최대로 업그레이드하면 반물질 ${format(Number.MAX_VALUE, 2)}개의 한계를
      넘어설 수 있으며, 반물질이 많을수록 더 많은 무한 포인트를 얻습니다.`
  },
  {
    name: "무한 차원",
    id: 9,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: `무한 차원은 반물질 차원처럼 연쇄적으로 서로를 생산합니다. 가장 낮은 단계의 무한 차원은
      모든 반물질 차원에 큰 배율을 적용하는 무한력을 생산합니다.`
  },
  {
    name: "무한 도전",
    id: 10,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `무한 도전은 반물질 목표가 ${format(Number.MAX_VALUE, 2)}보다 높은 새로운 도전입니다.
      완료하면 업그레이드와 생산량 증가 효과를 얻습니다.`
  },
  {
    name: "복제자",
    id: 11,
    requiredStage: PROGRESS_STAGE.REPLICANTI,
    description: () => `복제자는 시간이 지나며 스스로 증식하고 모든 무한 차원에 배율을 제공하는 자원입니다.
      복제자가 ${format(Number.MAX_VALUE, 2)}개일 때 ${formatInt(1)}개로 초기화하여 반물질 은하 비용을 올리지 않는
      추가 은하를 얻을 수 있습니다. 복제자는 무한에 도달할 때마다 초기화됩니다.`
  },
  {
    name: "영원",
    id: 12,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: () => `영원은 두 번째 주요 초기화 단계입니다. 무한 포인트 ${format(Number.MAX_VALUE, 2)}개에 도달하면
      지금까지의 모든 것을 초기화하고 새로운 콘텐츠와 자원을 이용할 수 있습니다.`
  },
  {
    name: "영원 포인트",
    id: 13,
    openH2pEntry: "Eternity",
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `영원 포인트는 처음 영원에 도달한 뒤의 주요 자원이며, 영원에 도달할 때 보유한
      무한 포인트에 따라 획득량이 증가합니다.`
  },
  {
    name: "시간 연구",
    id: 14,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `시간 연구는 스킬 트리와 비슷한 업그레이드 모음이며, 영원에 도달할 때마다 자원 손실 없이
      자유롭게 다시 배분할 수 있습니다. 트리의 일부 구간에는 특정 연구를 동시에 선택할 수 없도록 하는
      제한이 있습니다.`
  },
  {
    name: "영원 마일스톤",
    id: 15,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `영원 마일스톤은 영원 횟수를 늘리기만 하면 해금되는 자동화 및 편의 기능입니다.
      해금할 때 어떤 자원도 소비하지 않습니다.`
  },
  {
    name: "시간 차원",
    id: 16,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `시간 차원도 서로를 연쇄적으로 생산하며, 가장 낮은 단계는 시간 파편을 생산합니다.
      시간 파편은 반물질로 구매하는 틱스피드 업그레이드의 비용을 올리지 않는 추가 틱스피드 업그레이드를
      제공합니다.`
  },
  {
    name: "영원 도전",
    id: 17,
    requiredStage: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    description: `영원 도전은 완료하기 위해 정해진 무한 포인트 목표에 도달해야 하는 변형된 영원입니다.
      최대 다섯 번 완료할 수 있으며, 반복할수록 어려워지는 대신 보상이 더욱 강력해집니다.`
  },
  {
    name: "시간 팽창",
    id: 18,
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `시간 팽창은 틱스피드와 모든 차원 배율이 크게 감소하는 변형된 영원입니다.
      팽창된 영원을 완료하면 타키온 입자를 얻습니다.`
  },
  {
    name: "타키온 입자",
    id: 19,
    openH2pEntry: "Time Dilation",
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `타키온 입자는 반복해서 파밍할 수 없는 자원으로, 보유량을 늘리려면 팽창된 영원에서
      이전보다 더 많은 반물질을 얻어야 합니다. 타키온 입자는 팽창된 시간을 생산합니다.`
  },
  {
    name: "현실",
    id: 20,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: () => `현실은 세 번째이자 마지막 주요 초기화 단계입니다. 영원 포인트 ${format(DC.E4000)}개에
      도달하면 지금까지의 모든 것을 초기화하는 대신 새로운 콘텐츠와 자원을 해금할 수 있습니다.`
  },
  {
    name: "리얼리티 머신",
    id: 21,
    openH2pEntry: "Reality",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `리얼리티 머신은 처음 현실에 도달한 뒤의 주요 자원입니다. 현실에 도달할 때 보유한
      영원 포인트에 따라 획득량이 정해집니다.`
  },
  {
    name: "퍼크",
    id: 22,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `퍼크는 영원 마일스톤과 비슷한 해금형 기능으로, 주로 편의성과 자동화에 초점을 둡니다.
      현실에 도달할 때마다 얻는 퍼크 포인트로 구매합니다.`
  },
  {
    name: "글리프",
    id: 23,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `글리프는 장착 가능한 업그레이드이며 현실 사이에서만 해제할 수 있습니다. 현실에 도달할
      때마다 무작위로 생성된 여러 글리프 중 하나를 선택해 얻으며, 선택지의 평균 품질은 해당 현실에서
      일부 자원을 얼마나 많이 모았는지에 따라 결정됩니다.`
  },
  {
    name: "오토메이터",
    id: 24,
    openH2pEntry: "Automator Overview",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `오토메이터는 스크립트 언어를 사용하는 게임 내 기능입니다. 업그레이드와 퍼크를 충분히
      확보하면 아무런 조작 없이 현실을 완료할 수 있습니다.`
  },
  {
    name: "블랙홀",
    id: 25,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `블랙홀은 주기적으로 활성화되어 게임 전체를 더 빠르게 진행합니다. 지금까지 해금한 모든
      요소에 영향을 주며, 같은 시간 동안 게임을 켜 둔 것과 비슷한 결과를 제공합니다.`
  },
  {
    name: "Teresa",
    id: 26,
    requiredStage: PROGRESS_STAGE.TERESA,
    description: `Teresa는 첫 번째 셀레스티얼입니다. Teresa의 더 어려운 현실을 완료하면 성과에 따라
      글리프 희생이 크게 강화됩니다. 현실을 더 쉽게 시험하고 자동화하는 데 중점을 둔 업그레이드를
      해금합니다.`
  },
  {
    name: "Effarig",
    id: 27,
    requiredStage: PROGRESS_STAGE.EFFARIG,
    description: `Effarig는 두 번째 셀레스티얼입니다. Effarig의 현실에서는 글리프가 제한되고 점점 강해지는
      약화 효과가 적용되지만, 새로운 초기화 단계에 도달할 때마다 보상을 얻습니다. 유물 파편이라는 새 자원으로
      많은 글리프를 자동 선택하고 필터링하는 업그레이드를 구매할 수 있습니다.`
  },
  {
    name: "The Nameless Ones",
    id: 28,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `The Nameless Ones는 세 번째 셀레스티얼입니다. 그들의 현실에는 수많은 가혹한 약화 효과가
      적용되지만, 이를 극복하면 테서랙트를 해금합니다. 또한 블랙홀을 변경하여 시간을 저장할 수 있게 합니다.`
  },
  {
    name: "저장된 시간",
    id: 29,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `블랙홀은 두 가지 방식으로 시간을 저장할 수 있습니다. 충전하면 가속된 시간을 보관했다가
      한 번에 앞으로 건너뛰는 형태로 방출할 수 있습니다. 실제 시간을 저장하면 현실을 시뮬레이션하여 해당 현실의
      자원을 배율과 함께 얻거나, 오프라인 진행을 대신하는 데 사용할 수 있습니다.`
  },
  {
    name: "테서랙트",
    id: 30,
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `무한 차원은 무한정 구매할 수 없으며 제8 무한 차원을 제외한 모든 차원에는 구매 횟수의
      절대 상한이 있습니다. 테서랙트 하나마다 이 상한이 영구적으로 크게 증가합니다.`
  },
  {
    name: "V",
    id: 31,
    requiredStage: PROGRESS_STAGE.V,
    description: `V는 네 번째 셀레스티얼입니다. V의 변형된 현실은 Teresa의 현실과 비슷하지만, 내부에서
      특정 자원 마일스톤에 도달해야 보상을 얻습니다. 경로 제한 없이 추가 시간 연구를 구매할 수 있게 해 주는
      우주 정리라는 새 자원을 제공합니다.`
  },
  {
    name: "Ra",
    id: 32,
    requiredStage: PROGRESS_STAGE.RA,
    description: `Ra는 다섯 번째 셀레스티얼입니다. Ra의 변형된 현실에서는 내부에서 모은 자원 총량에 따라
      기억 조각이라는 자원을 생산합니다. 이전 네 셀레스티얼의 업그레이드와 테마를 크게 강화하고,
      자동화와 편의 기능의 남은 빈틈을 채우는 데 중점을 둡니다.`
  },
  {
    name: "기억",
    id: 33,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `Ra는 이전 네 셀레스티얼을 지배하며, 기억 조각 수에 따라 시간이 지나면서 기억을 생산합니다.
      이 기억으로 이전 셀레스티얼의 레벨을 올리고, 특정 레벨에 도달하면 업그레이드를 얻습니다.`
  },
  {
    name: "충전된 무한 업그레이드",
    id: 34,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `Teresa의 기억을 통해 무한 업그레이드를 충전하여 비슷한 효과를 훨씬 강하게 만들 수 있습니다.
      어떤 업그레이드를 충전할지는 현실 사이에서만 변경할 수 있습니다.`
  },
  {
    name: "글리프 연금술",
    id: 35,
    requiredStage: PROGRESS_STAGE.RA,
    description: `Effarig의 기억은 변형된 글리프 희생을 통해 다양한 소규모 강화 효과를 제공하는 글리프
      연금술을 해금합니다. 이 방식으로 글리프를 포기해 얻은 자원은 반응으로 서로 결합해야 효과를 완전히
      업그레이드할 수 있습니다.`
  },
  {
    name: "증폭된 블랙홀",
    id: 36,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `The Nameless Ones의 기억은 충전을 증폭하여 실제로 흐른 게임 시간보다 더 많은 게임 시간을
      저장하게 합니다. 이제 방출을 반복해서 자동으로 수행할 수도 있습니다.`
  },
  {
    name: "더 어려운 V",
    id: 37,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `V의 기억은 기존 V의 현실보다 목표가 더 어려운 변형 현실과 삼원 연구라는 새로운
      시간 연구 모음을 해금합니다.`
  },
  {
    name: "허수 머신",
    id: 38,
    requiredStage: PROGRESS_STAGE.IMAGINARY_MACHINES,
    description: () => `허수 머신은 리얼리티 머신 ${format(DC.E1000)}개에 도달하면 해금되는 새 자원입니다.
      역대 가장 멀리 진행한 현실에서 얻었을 리얼리티 머신 수에 따라 정해지는 상한까지 자동으로 생산됩니다.`
  },
  {
    name: "Lai'tela",
    id: 39,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `Lai'tela는 여섯 번째 셀레스티얼입니다. Lai'tela의 현실은 완료 조건이 변형되어 있으며,
      얼마나 빨리 도달했는지에 따라 증가하는 보상을 제공합니다. 주로 암흑 물질이라는 자원과 관련된
      새로운 기능을 해금합니다.`
  },
  {
    name: "연속체",
    id: 40,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `연속체는 반물질 차원이 실제로 업그레이드를 구매하지 않고도 업그레이드를 소수 단위로
      구매한 것처럼 생산하게 하는 변형 생산 방식입니다.`
  },
  {
    name: "암흑 물질 차원",
    id: 41,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `암흑 물질 차원은 지속적으로 생산하는 대신 틱 기반 시스템으로 작동하는 연쇄 생산 요소입니다.
      가장 낮은 단계는 암흑 물질을 생산하고, 모든 단계는 암흑 에너지를 생산합니다.`
  },
  {
    name: "차원 초기화 메커니즘",
    id: 42,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `암흑 물질 차원은 두 가지 방법으로 초기화할 수 있습니다. 소멸은 모든 차원을 초기화하는 대신
      모든 암흑 물질 차원에 영구 배율을 제공합니다. 승천은 생산량을 높이지만 한 차원의 간격을 초기화합니다.`
  },
  {
    name: "특이점",
    id: 43,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `암흑 에너지로 특이점을 생산할 수 있으며, 특이점은 총량에 따라 강화 효과를 제공합니다.
      특이점을 생산할 때 응축 기준치를 넘는 추가 암흑 에너지는 소멸합니다.`
  },
  {
    name: "Pelle",
    id: 44,
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `Pelle는 일곱 번째이자 마지막 셀레스티얼입니다. 게임을 영구적으로 파멸시키고 탈출할 수 없는
      매우 어려운 변형 현실로 몰아넣습니다.`
  },
  {
    name: "아마겟돈",
    id: 45,
    openH2pEntry: "Pelle",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `아마겟돈은 언제든 수행할 수 있는 Pelle 전용 초기화입니다. 진행도를 파멸한 현실의 시작으로
      되돌리는 대신, 현실 파편을 생산하는 잔재를 얻습니다.`
  },
  {
    name: "Pelle의 공격과 균열",
    id: 46,
    openH2pEntry: "Pelle Strikes",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `Pelle에서 특정 진행 마일스톤에 도달하면 공격이 발생하여 파멸한 현실에 새로운 약화 효과를
      영구적으로 적용합니다. 각 공격에는 다른 자원을 소모하는 대신 강화 효과를 얻는 균열이 동반됩니다.
      이들은 영구적이며 아마겟돈 후에도 해금된 상태로 유지됩니다.`
  },
];
