import { automatorTemplates } from "../script-templates";

export const automator = {
  categoryNames: [
    "시간 연구",
    "이벤트 실행",
    "설정 변경",
    "정보",
    "스크립트 흐름",
  ],
  commands: [
    {
      id: 0,
      isUnlocked: () => true,
      keyword: "STUDIES RESPEC",
      category: 0,
      syntax: `<b>studies respec</b>`,
      description: `이 명령어는 재설정 옵션을 켜서 다음 수동 또는 자동 영원에서 시간 연구를 재설정합니다.
        이 명령어만으로 영원을 실행하지는 않으므로 자동구매기가 켜져 있는지 확인하거나 ETERNITY 명령어를
        직접 실행하세요(ETERNITY에도 자체 재설정 옵션이 있습니다).`,
      examples: [
        `studies respec`,
      ]
    },
    {
      id: 1,
      isUnlocked: () => true,
      keyword: "STUDIES LOAD",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>load id</b> <u>selector</u><br>
        <b>studies</b> [nowait] <b>load name</b> <u>name</u>`,
      description: `시간 연구 탭의 버튼을 누른 것처럼 시간 연구 프리셋을 불러옵니다.`,
      sections: [
        {
          name: "입력값",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                이 옵션이 있으면 오토메이터는 가능한 만큼 연구를 구매한 뒤 다음으로 넘어갑니다. 기본적으로
                (즉, "nowait"가 없으면) 프리셋의 모든 연구를 구매할 때까지 이 줄을 무한히 반복하므로,
                주의하지 않으면 오토메이터가 영원히 멈춰 있을 수 있습니다.
              `
            },
            {
              header: "<i>selector</i>",
              description: `
                슬롯 번호로 지정한 시간 연구 프리셋을 찾아 불러옵니다. 슬롯은 왼쪽부터 오른쪽 순서로
                1부터 6까지 번호가 매겨집니다.`
            },
            {
              header: "<i>name</i>",
              description: "지정한 이름으로 시간 연구 프리셋을 찾아 불러옵니다. 대소문자를 구분합니다."
            },
          ]
        }
      ],
      examples: [
        `studies load id 2`,
        `studies load name ANTI`,
        `studies nowait load name dil`,
      ]
    },
    {
      id: 2,
      isUnlocked: () => true,
      keyword: "STUDIES PURCHASE",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>purchase <u>study_list</u></b>`,
      description: "시간 연구 목록에 지정된 시간 연구를 구매합니다.",
      sections: [
        {
          name: "입력값",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                이 옵션이 있으면 오토메이터는 가능한 만큼 연구를 구매한 뒤 다음으로 넘어갑니다. 기본적으로
                (즉, "nowait"가 없으면) 프리셋의 모든 연구를 구매할 때까지 이 줄을 무한히 반복하므로,
                주의하지 않으면 오토메이터가 영원히 멈춰 있을 수 있습니다.
              `
            },
            {
              header: "<i>study_list</i>",
              description: `
                여기에서는 쉼표로 구분한 시간 연구 ID 목록인 시간 연구 트리 내보내기 형식을 지원합니다.
                이 명령어는 더 유연한 형식도 지원하여 연구 범위(예: <u>11-62</u>)와 다음 별칭을 사용할 수 있습니다:<br>
                <blockquote><b>antimatter, infinity, time, active, passive, idle, light, dark</b></blockquote>
                전체 시간 연구 목록 대신 변수 이름을 사용할 수도 있지만(정의 패널 참조), 이 경우에는
                범위 축약과 별칭을 사용할 수 없습니다.`
            },
          ]
        }
      ],
      examples: [
        "studies nowait purchase 11,21,31",
        "studies purchase 11-62, antimatter, 111, idle",
        "studies nowait purchase ec6Studies",
      ]
    },
    {
      id: 3,
      isUnlocked: () => true,
      keyword: "PRESTIGE",
      category: 1,
      syntax: `
        <b>infinity</b> [nowait]<br>
        <b>eternity</b> [nowait] [respec]<br>
        <b>reality</b> [nowait] [respec]<br>
        <b>doom</b> [nowait]<br>
        <b>armageddon</b> [nowait]<br>
        <b>endgame</b> [nowait]`,
      description: `가능하면 무한, 영원, 현실, 파멸, 아마겟돈 또는 엔드게임 초기화를 실행하고, 불가능하면
        가능해질 때까지 오토메이터가 이 명령어에서 기다립니다. 스크립트가 이 명령어에서 자주 멈춘다면
        오토메이터가 이 줄에 도달하기 전에 자동구매기가 프레스티지를 실행하고 있을 수 있습니다. <i>nowait</i>를
        사용하거나 AUTO로 자동구매기 설정을 조정해 보세요.`,
      sections: [
        {
          name: "수식어",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                이 옵션이 있으면 프레스티지가 불가능한 상황(예: 목표에 미달한 영원 도전 내부)에서 이 명령어를
                반복해서 시도하지 않고 오토메이터가 다음 명령어로 넘어갑니다.
              `
            },
            {
              header: "<i>respec</i>",
              description: `
                무한/파멸/아마겟돈 이외의 프레스티지에서는 프레스티지를 실행할 때 관련 재설정 작업도 수행합니다.
                영원: 시간 연구를 재설정하고 영원을 실행합니다.<br>
                현실: 글리프를 장착 해제하고 현실에 도달합니다.<br>
                엔드게임: 엔드게임 마스터리를 재설정하고 엔드게임에 도달합니다.
              `
            },
          ]
        }
      ],
      examples: [
        "infinity",
        "eternity respec",
        "reality nowait",
        "doom",
        "armageddon",
        "endgame nowait respec"
      ]
    },
    {
      id: 4,
      isUnlocked: () => true,
      keyword: "UNLOCK",
      category: 1,
      syntax: "<b>unlock</b> [nowait] <u>feature</u>",
      description: "지정한 영원 도전 또는 시간 팽창을 해금합니다.",
      sections: [
        {
          name: "수식어",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                이 옵션이 있으면 기능 해금에 실패해도 오토메이터가 다음 명령어로 넘어갑니다. 기본적으로
                오토메이터는 해금에 성공할 때까지 이 명령어를 계속 실행합니다.
              `
            },
          ]
        }
      ],
      examples: [
        "unlock dilation",
        "unlock ec7"
      ]
    },
    {
      id: 5,
      isUnlocked: () => true,
      keyword: "START",
      category: 1,
      syntax: `
        <b>start</b> ec<u>N</u><br>
        <b>start</b> dilation`,
      description: `지정한 영원 도전 또는 팽창된 영원을 시작합니다. 영원 도전이 해금되지 않았다면 이 명령어가
        해금도 시도하지만 시간 팽창은 해금하지 않습니다(해금하려면 UNLOCK 명령어를 사용하세요).
        이미 지정한 영원 도전 또는 팽창된 영원에 있다면 이 명령어를 다시 실행해도 아무 일도 일어나지 않습니다.
        그 외에는 성공할 때까지 오토메이터가 영원 시작을 계속 시도합니다.`,
      examples: [
        "start ec12",
        "start dilation"
      ]
    },
    {
      id: 6,
      isUnlocked: () => true,
      keyword: "AUTO",
      category: 2,
      syntax: `<b>auto infinity</b> [setting]<br>
        <b>auto eternity</b> [setting]<br>
        <b>auto reality</b> [setting]`,
      description: `프레스티지 자동구매기를 켜거나 끄고 설정을 변경합니다. 설정 옵션이 없으면 이 명령어가
        자동구매기의 상태를 전환하여, 켜져 있으면 끄고 꺼져 있으면 켭니다. <b>보유하지 않은 자동구매기나
        설정을 변경하려 하면 이 명령어는 작동하지 않습니다.</b>`,
      sections: [
        {
          name: "설정",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: "지정한 자동구매기를 켜거나 끕니다.",
            },
            {
              header: "<u><i>number</i></u> <u><i>time units</i></u>",
              description: `무한과 영원에서만 사용할 수 있습니다.
                자동구매기를 켜고 지정한 간격마다 실행되도록 설정합니다.`
            },
            {
              header: "<u><i>number</i></u> x highest",
              description: `무한과 영원에서만 사용할 수 있습니다. 자동구매기를 켜고
                "최고 기록의 X배" 모드로 설정합니다.`
            },
            {
              header: "<i><u>number</u> <u>currency</u></i>",
              description: `자동구매기를 켜고 지정한 양에서 실행되도록 설정합니다. 화폐는 자동구매기 종류
                (IP, EP 또는 RM)와 일치해야 합니다. 현실 자동구매기는 "리얼리티 머신" 모드로 설정됩니다.
                글리프 레벨 모드는 오토메이터로 변경하거나 설정할 수 없으며 수동으로만 바꿀 수 있습니다.`,
            },
          ]
        }
      ],
      examples: [
        "auto infinity on",
        "auto eternity off",
        "auto infinity 30s",
        "auto eternity 10 seconds",
        "auto eternity 1e100 x highest"
      ]
    },
    {
      id: 7,
      isUnlocked: () => BlackHole(1).isUnlocked,
      keyword: "BLACK HOLE",
      category: 2,
      syntax: "<b>black hole</b> <u>state</u>",
      description: `블랙홀의 가속 효과를 켜거나 끕니다. 오토메이터로 블랙홀을 켜도 블랙홀이 영구화되기 전에
        꺼진 상태에서 최대 속도까지 서서히 가속되는 과정은 건너뛰지 않습니다.`,
      examples: [
        "black hole on",
        "black hole off",
      ]
    },
    {
      id: 8,
      isUnlocked: () => Enslaved.isUnlocked,
      keyword: "STORE GAME TIME",
      category: 2,
      syntax: "<b>store game time</b> <u>action</u>",
      description: `블랙홀이 시간을 저장할지 설정합니다. 저장한 시간을 사용할 수도 있습니다.`,
      sections: [
        {
          name: "작업",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: `
                게임 시간 저장을 켜거나 끕니다.
              `
            },
            {
              header: "<i>use</i>",
              description: `
                저장한 게임 시간을 모두 사용합니다. 시간 저장의 켜짐/꺼짐 상태는 바꾸지 않습니다.
              `
            }
          ]
        }
      ],
      examples: [
        "store game time on",
        "store game time off",
        "store game time use",
      ]
    },
    {
      id: 9,
      isUnlocked: () => true,
      keyword: "NOTIFY",
      category: 3,
      syntax: "<b>notify</b> \"<u>text</u>\"",
      description: `지정한 문구를 우측 상단에 텍스트 알림으로 표시합니다. 자동 저장이나 도전과제/업그레이드
        해금 알림과 같은 위치와 형식으로 표시됩니다. 오토메이터 탭이 아닌 다른 탭에서도 오토메이터의
        상태를 확인할 때 유용합니다.`,
      examples: [
        "notify \"Dilation reached\"",
        "notify \"ECs completed\""
      ]
    },
    {
      id: 10,
      isUnlocked: () => true,
      keyword: "주석 추가",
      category: 3,
      syntax: "<b>#</b> text<br><b>//</b> text",
      description: `스크립트 안에 자신을 위한 메모를 남길 수 있습니다. 명령어만 나열하는 것보다 읽기 쉽게
        정리하거나 스크립트의 각 부분이 어떤 일을 하는지 기록하는 데 유용합니다. 이 명령어들은 원하는 경우
        스크립트의 단계를 더 쉽게 파악하도록 돕는 도구입니다.`,
      sections: [
        {
          name: "참고",
          items: [
            {
              header: "<i>인라인 주석</i>",
              description: `
                오토메이터는 정상적인 코드 뒤 같은 줄에 붙인 주석을 지원하지 않습니다. 예를 들어
                "studies load name TDI // Load push" 한 줄은 유효하지 않은 명령어입니다. 이 경우 주석을
                오토메이터의 별도 줄로 옮겨야 합니다.
              `
            },
            {
              header: "<i>실행 속도</i>",
              description: `
                주석은 실행 중 완전히 건너뛰며 명령어로 계산되지 않으므로 스크립트 속도를 늦추지 않습니다.
                예를 들어 20-40번째 줄에 매우 긴 설명을 주석으로 적어도 오토메이터는 실행 중 19번째 줄에서
                41번째 줄로 <i>즉시</i> 건너뜁니다.
              `
            },
          ]
        }
      ],
      examples: [
        "# get 1e20 before starting ec1",
        "// this loop alternates dilation and pushing"
      ]
    },
    {
      id: 11,
      isUnlocked: () => true,
      keyword: "WAIT",
      category: 4,
      syntax: "<b>wait</b> <u>condition</u>",
      description: `오토메이터가 특정 조건이나 이벤트를 기다리게 합니다. 일정 시간 동안 기다리려면
        PAUSE 명령어를 사용하세요.`,
      sections: [
        {
          name: "사용 가능한 조건",
          items: [
            {
              header: "<i>comparison</i>",
              description: `
                비교식이 참이 될 때까지 기다립니다. 이 옵션을 올바르게 입력하는 방법은
                "비교식 형식" 항목을 확인하세요.
              `
            },
            {
              header: "<i>prestige</i>",
              description: `
                해당 자동구매기가 지정한 프레스티지(무한, 영원 또는 현실)를 실행할 때까지 기다립니다.
                이는 이 명령어에 도달한 <i>후</i>에 일어나야 합니다. 명령어에 도달하기 <i>전에</i>
                자동구매기가 실행되면 스크립트가 멈출 수 있습니다.
              `
            },
            {
              header: "<i>black hole (state)</i>",
              description: `
                블랙홀이 지정한 상태가 될 때까지 기다립니다. 유효한 상태 입력값은 "off", "bh1", "bh2"이며,
                각각 활성화된 블랙홀이 없음, 첫 번째 블랙홀 이상이 활성화됨, 두 블랙홀이 모두 활성화됨을 뜻합니다.
              `
            }
          ]
        }
      ],
      examples: [
        "wait am >= 1e308",
        "wait pending completions >= 5",
        "wait ec9 completions >= 4",
        "wait infinity",
        "wait black hole bh1",
      ]
    },
    {
      id: 12,
      isUnlocked: () => true,
      keyword: "PAUSE",
      category: 4,
      syntax: "<b>pause</b> <u>interval</u>",
      description: `오토메이터가 일정 시간 동안 다음으로 넘어가거나 명령어를 실행하지 않게 합니다.
        일시 정지 시간이 오토메이터의 실행 간격보다 짧으면 다음 실행 틱까지 기다린 뒤 넘어갑니다.`,
      examples: [
        "pause 10s",
        "pause 1 minute",
        "pause 34 seconds"
      ],
      sections: [
        {
          name: "시간 간격 형식",
          items: [
            {
              header: "<i>지정한 시간 간격</i>",
              description: `이 명령어는 밀리초("ms"), 초("s", "sec" 또는 "seconds"), 분("m", "min" 또는 "minutes"),
                시간("h" 또는 "hours") 단위를 받습니다. 숫자만 입력할 수는 없으며 시간 단위를 반드시 지정해야 합니다.`,
            },
            {
              header: "<i>정의된 상수</i>",
              description: `그 대신 정의한 상수를 사용할 수 있습니다. 정의 패널을 확인하세요. 정의한 값의 단위는
                초로 간주합니다.`
            },
          ]
        },
        {
          name: "기타",
          items: [
            {
              header: "<i>오프라인 부작용</i>",
              description: `오프라인 진행 중에는 틱 수가 제한되므로 이 명령어가 의도와 다르게 작동할 수 있습니다.
                보통 20-30틱인 1초 일시 정지가 수 시간의 오프라인 진행을 처리할 때는 게임 틱 1회뿐일 수 있으며,
                그러면 스크립트의 나머지 부분에 필요한 자원을 얻기에 부족할 수 있습니다.`,
            },
            {
              header: "<i>대안</i>",
              description: `'WAIT'와 같은 다른 명령어를 사용하면 특정 자원량을 조건으로 설정하여,
                다음으로 넘어가기 전에 게임이 적절한 상태인지 확인할 수 있습니다.`
            },
            {
              header: "<i>수동 건너뛰기</i>",
              description: `한 줄 앞으로 이동하여 다음 줄에 놓은 뒤 실행을 재개하면, 지정한 시간을 모두 기다리지 않고
                오토메이터가 PAUSE 명령어 다음부터 실행하도록 강제할 수 있습니다. 이 작업을 자주 하게 된다면
                스크립트를 수정하는 것이 좋습니다.`
            }
          ]
        }
      ]
    },
    {
      id: 13,
      isUnlocked: () => true,
      keyword: "IF",
      category: 4,
      syntax: `<b>if</b> <u>condition</u> {<br>
        <blockquote>commands</blockquote>
        }`,
      description: `이 줄에 도달했을 때 지정한 비교식이 참인 경우에만 실행되는 오토메이터 스크립트의 내부 블록을
        정의합니다. 비교식이 거짓이면 오토메이터는 블록 다음의 첫 줄로 건너뛰어 그곳부터 실행을 계속합니다.`,
      examples: [
        "if ec10 completions < 5",
        "if ep > 1e6000"
      ]
    },
    {
      id: 14,
      isUnlocked: () => true,
      keyword: "UNTIL",
      category: 4,
      syntax: `<b>until</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
        }<br><b>until</b> <u>prestige_event</u> {<br>
          <blockquote>commands</blockquote>
        }`,
      description: `명령어를 반복하는 스크립트 내부 블록을 정의합니다. 시작할 때와 루프가 반복될 때마다 비교식을
        확인합니다. UNTIL 문에 처음 도달했을 때 조건이 참이면 내부 명령어 블록을 완전히 건너뜁니다.
        <br><br>
        조건 대신 프레스티지 이벤트(즉, 무한, 영원 또는 현실)를 지정하면 항상 블록에 진입하고, 블록에 들어간
        <i>후</i> 해당 이벤트가 처음 발생할 때까지 내부 명령어를 반복합니다. 프레스티지 이벤트가 발생해도
        루프 중간에 즉시 나가지 않고 오토메이터가 루프의 나머지를 마친 다음 빠져나갑니다.`,
      examples: [
        "until ep > 1e500",
        "until reality",
      ]
    },
    {
      id: 15,
      isUnlocked: () => true,
      keyword: "WHILE",
      category: 4,
      syntax: `<b>while</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
      }`,
      description: `명령어를 반복하는 스크립트 내부 블록을 정의합니다. 시작할 때와 루프가 반복될 때마다 비교식을
        확인합니다. WHILE 문에 처음 도달했을 때 조건이 거짓이면 내부 명령어 블록을 완전히 건너뜁니다.`,
      examples: [
        `while ep < 1e500`,
        `while myThreshold > am`,
      ]
    },
    {
      id: 16,
      isUnlocked: () => true,
      keyword: "STOP",
      category: 4,
      syntax: `<b>stop</b>`,
      description: `오토메이터가 이 줄을 실행하면 오토메이터 좌측 상단 제어 패널의
        <i class="fas fa-stop"></i> 버튼을 누른 것처럼 실행을 멈춥니다. 왼쪽 패널의
        <i class="fas fa-sync-alt"></i> 옵션을 끄면 자동으로 멈추므로 모든 스크립트 끝에 이 명령어를
        배치할 필요는 없습니다. 특정 조건에서만 실행을 멈추고 싶다면 IF 명령어 안에서 유용하게 사용할 수 있습니다.`,
      examples: [
        `stop`,
      ]
    },
    {
      id: 17,
      isUnlocked: () => true,
      keyword: "화폐 목록",
      category: 4,
      syntax: "<i>모든 IF, WHILE, UNTIL 또는 WAIT 명령어에서 사용할 수 있습니다</i>",
      description: () => {
        const filterText = EffarigUnlock.glyphFilter.isUnlocked
          ? `<b>filter score</b> - 이번 현실에서 필터가 선택할 글리프의 글리프 필터 점수<br>`
          : "";
        const stText = V.spaceTheorems > 0
          ? `<b>space theorems</b> - 현재 사용하지 않은 공간 정리의 양<br>
            <b>total space theorems</b> - 현재 연구에 사용한 양을 포함한 공간 정리의 총량<br>`
          : "";
        return `오토메이터 안에서 사용할 수 있는 "화폐" 또는 숫자 목록입니다.<br>
          대부분의 화폐는 사용할 때 과학적 표기법으로 입력해야 합니다.<br>
          <b>am</b> - 현재 반물질의 양  <br>
          <b>ip</b> - 현재 무한 포인트의 양  <br>
          <b>ep</b> - 현재 영원 포인트의 양  <br>
          <b>rm</b> - 현재 리얼리티 머신의 양  <br>
          <b>rs</b> - 현재 현실 파편의 양  <br>
          <b>infinities</b> - 현재 무한 횟수 <br>
          <b>banked infinities</b> - 현재 저장된 무한 횟수 <br>
          <b>eternities</b> - 현재 영원 횟수 <br>
          <b>realities</b> - 현재 현실 횟수 <br>
          <b>remnants</b> - 현재 잔재의 양  <br>
          <b>pending ip</b> - 무한에서 획득할 IP(획득할 수 없으면 0)<br>
          <b>pending ep</b> - 영원에서 획득할 EP(획득할 수 없으면 0)<br>
          <b>pending tp</b> - 시간 팽창을 종료할 때 획득할 TP<br>
          <b>pending rm</b> - 현실에서 획득할 RM(획득할 수 없으면 0)<br>
          <b>pending rs</b> - 아마겟돈에서 획득할 RS(획득할 수 없으면 0)<br>
          <b>pending glyph level</b> - 현실에서 획득할 글리프 레벨(획득할 수 없으면 0)<br>
          <b>pending remnants</b> - 아마겟돈에서 획득할 잔재(획득할 수 없으면 0)<br>
          <b>dt</b> - 현재 팽창된 시간의 양 <br>
          <b>tp</b> - 현재 타키온 입자의 양<br>
          <b>rg</b> - 현재 복제자 은하의 수(과학적 표기법을 사용하지 않음)<br>
          <b>rep</b> - 현재 복제자의 양 <br>
          <b>tt</b> - 현재 시간 정리의 양 <br>
          <b>total tt</b> - 생성한 모든 TT와 연구에 사용한 양을 포함한 시간 정리 총량 <br>
          <b>spent tt</b> - 현재 모든 시간 연구에 사용한 시간 정리의 양 <br>
          <b>total completions</b> - 모든 영원 도전의 총 완료 횟수 <br>
          <b>pending completions</b> - 영원에서 현재 영원 도전을 완료할 총횟수 <br>
          <b>ec<u>X</u> completions</b> - 특정 영원 도전의 완료 횟수(예: "ec6 completions")<br>
          ${filterText}
          ${stText}
        `;
      }
    },
    {
      id: 18,
      isUnlocked: () => true,
      keyword: "비교식 형식",
      category: 4,
      syntax: "<u>resource1</u> <u>condition</u> <u>resource2</u>",
      description: `
        비교식은 특정 명령어 안에서 사용되며, 게임의 현재 상태에 따라 오토메이터의 동작을 제어할 수 있게 합니다.
        두 값과 비교 연산자로 이루어진 표준 형식을 사용하지만, 전체 형식만 올바르면 값에는 무엇이든 입력할 수 있습니다.`,
      sections: [
        {
          name: "조건",
          items: [
            {
              header: "<i>resource</i>",
              description: `
                오토메이터 화폐, 정의한 상수 또는 과학적 표기법으로 나타낸 숫자(예: 1000, 1e100, 1.8e308)를
                사용할 수 있습니다. 일반적인 프로그래밍 언어와 달리 반드시 단일 값이어야 합니다
                (즉, "ip + pending ip"와 같은 수식은 허용되지 않음).
              `
            },
            {
              header: "<i>condition</i>",
              description: `
                일반적인 수학적 의미의 부등호 연산자(<, <=, >, >=)여야 합니다. 게임 특성상 숫자가 정확히
                같아지지 않는 경우가 많아 직접 등호를 확인하면 스크립트가 예상치 못하게 작동할 수 있으므로,
                등호 연산자(==, !=)는 허용되지 않습니다.
              `
            },
          ]
        }
      ],
      examples: [
        "ep < 1e20",
        "total tt > 14000",
      ]
    },
    {
      id: 19,
      isUnlocked: () => true,
      keyword: "내부 블록이 있는 명령어",
      category: 4,
      syntax: `<b>header_command</b> {<br>
        <blockquote>inner_commands</blockquote>
        }`,
      description: `일부 명령어에는 명령어의 "내부 블록"이 연결됩니다. 내부 블록에는 다른 유효한 명령어를
        모두 넣을 수 있지만, <b>header_command</b>가 실행될 때의 게임 상태에 따라 실제로 실행될 수도 있고
        실행되지 않을 수도 있습니다. 이를 통해 일부 명령어를 계속 반복하거나(예: 시간 연구 구매), 완전히
        건너뛸 수 있습니다(예: 이미 완료 횟수를 모두 채운 영원 도전에 진입하지 않음). 블록 안에 다른 내부
        블록을 배치하여 중첩할 수도 있습니다.
        <br><br>
        텍스트 편집기 모드: 중괄호로 내부 블록을 지정합니다. 여는 중괄호 {는 비교식과 같은 줄에 두고,
        닫는 중괄호 }는 블록에 넣을 마지막 줄 다음의 별도 줄에 둡니다. 내부 명령어를 들여쓸 필요는 없지만,
        들여쓰면 시각적으로 알아보기 쉬울 수 있습니다.
        <br><br>
        블록 편집기 모드: 이 명령어에는 어떤 명령어가 내부 블록에 속하는지 나타내는 빈 점선 사각형이 함께
        표시됩니다. 이후 블록을 점선 사각형 안으로 끌어 놓을 수 있습니다.
        `,
      examples: [
        `if ec10 completions < 5 {<br>
          <blockquote>
          unlock ec10<br>
          start ec10</blockquote>
        }`,
        `until ep > 1e8 {<br>
          <blockquote>
          studies nowait purchase 11-62<br>
          pause 10s<br>
          eternity respec</blockquote>
        }`
      ]
    },
  ],
  otherAutomatorPoints: [
    {
      name: "현실 횟수",
      automatorPoints: () => 2 * Math.clampMax(Currency.realities.value.toNumber(), 50),
      shortDescription: () => `현실마다 +${formatInt(2)}, 최대 ${formatInt(50)}회`,
      symbol: "Ϟ",
    },
    {
      name: "블랙홀",
      automatorPoints: () => (BlackHole(1).isUnlocked ? 10 : 0),
      shortDescription: () => `해금 시 AP ${formatInt(10)} 획득`,
      symbol: "<i class='fas fa-circle'></i>",
    },
  ],
  templates: automatorTemplates
};
