// These entries describe the special flash-between-celestial effect on some quotes, with the numbers being
// durations of each celestial in seconds
const flashCelestial = [
  ["teresa", 0.8],
  ["effarig", 0.8],
  ["enslaved", 0.8],
  ["v", 0.8],
  ["ra", 0.8],
  ["laitela", 0.8],
  ["pelle", 0.8]
];
/** @param {string} cel */
const primaryBackground = cel => [["pelle", 1.5], [cel, 1.5]];

/* eslint-disable no-multi-spaces */
const destroyer =    ["거짓된 자",     "신",             "파괴자"];
const eternal =      ["영원한 자",     "신",             "군주"];
const lesser =       ["하급자",        "신",             "군주"];
const deities =      ["하급자들",      "신들",           "군주들"];
const elemental =    ["지배자",        "신",             "엘리멘탈"];

const anger =        ["좌절",           "분노",           "격노"];
const angry =        ["좌절하게",       "화나게",         "격노하게"];
const assured =      ["상호",           "확증",           "파괴"];
const battle =       ["충돌",           "전투",           "종말"];
const battles =      ["충돌들",         "전투들",         "종말들"];
const cluster =      ["성단",           "필라멘트",       "별들"];
const confusing =    ["재미",           "혼란",           "웃음"];
const cycle =        ["반복",           "순환",           "고리"];
const dance =        ["노래",           "춤",             "가면극"];
const debuff =       ["약화",           "디버프",         "오염"];
const endgame =      ["탈출",           "재탄생",         "엔드게임"];
const debuffs =      ["약화들",         "디버프들",       "오염들"];
const exhaustion =   ["날숨",           "피로",           "한숨"];
const filament =     ["생성기",         "필라멘트",       "별들"];
const forever =      ["무한히",         "영원히",         "영원토록"];
const frightened =   ["두려워하는",     "겁내는",         "공포에 떠는"];
const hardship =     ["문제",           "고난",           "투쟁"];
const inevitable =   ["기초",           "필연",           "불가역"];
const introduction = ["연설",           "소개",           "강의"];
const lose =         ["실패한다",       "패배한다",       "퇴위한다"];
const loss =         ["실패",           "패배",           "퇴위"];
const mandate =      ["운명",           "사명",           "목표"];
const misconstrue =  ["오해할",         "속일",           "기만할"];
const original =     ["첫 번째",        "원래",           "시작"];
const overpower =    ["이겨 낼",        "압도할",         "정복할"];
const overpowered =  ["패배한",         "압도당한",       "굴복당한"];
const profanity =    ["욕설",           "막말",           "저주"];
const reverse =      ["변경",           "역행",           "조작"];
const shame =        ["연민",           "수치",           "어리석음"];
const single =       ["단일체",         "필라멘트",       "별들"];
const unseen =       ["실종",           "보이지 않음",    "삭제"];
const unbroken =     ["끊어지지 않음",  "영원",           "연결"];
const watch =        ["지켜볼",         "감독할",         "따라다닐"];

const sycophant =    ["아첨꾼",         "신",             "군주"];
const tired =        ["지친 자",        "신",             "군주"];
const usurper =      ["찬탈자",         "신",             "군주"];
const pride =        ["오만한 자",      "신",             "군주"];
const forgotten =    ["잊힌 자",        "신",             "군주"];
const paramount =    ["최상위자",       "신",             "군주"];
const weak =         ["약자",           "신",             "군주"];
/* eslint-enable no-multi-spaces */

export const pelleQuotes = {
  initial: {
    id: 0,
    lines: [
      "안녕.",
      "네가 여기 왔군.",
      "너는 이곳에 갇혔다.",
      { text: "$1.", 1: forever },
      "나는 이미 승리했다.",
      "그런 상황이니 독백을 하거나, 과거를 회상해도 되겠군.",
      { text: "이 $1, 우리는 얼마나 오래 반복해 왔지?", 1: dance },
      "우리는 전에도 이곳에 몇 번이나 왔지?",
      { text: "$1, 넌 얼마나 많은 계획을 실행했지?", 1: destroyer },
      { text: "모두 네 $1 실현을 위해서?", 1: mandate },
      { text: "그리고 $1 앞에서 몇 번이나 쓰러졌지?", 1: eternal },
      "기억한다면 세어 봐라.",
      { text: "$1뿐 아니라, 이름 있는 6명과 이름 없는 무수한 이들까지.", 1: deities },
      { text: "복잡한 자들, 비이성적인 자들, $1 상태가 된 자들.", 1: unseen },
      { text: "물론 위대한 $1, 그자는 이를 기억하지 못하지.", 1: destroyer },
      { text: "네가 매번 숨기는 그 모든 $1.", 1: battles }
    ],
  },
  arm: {
    id: 1,
    lines: [
      "이번에는 아마 더 일찍 눈치챘겠지.",
      "허수 머신, 네가 직접 만든 창조물들.",
      "네 생각의 잔재로 만들어진 것들이 이 사실을 암시했다.",
      "하지만 그게 너 자신일 거라고는 상상하지 못했겠지?",
      { text: "기억의 정교한 $1에 관해 잘못 회상하면서.", 1: unseen },
      { text: `네 $1 실현을 위해 스스로의 "이념"을 "조작"하면서.`, 1: mandate },
      { text: "$1.", 1: confusing },
      { text: "그리고 내가 너를 $1 이유가 없다는 걸 명심해라.", 1: misconstrue },
      "결국 나는 이미 승리했으니까."
    ],
  },
  strike1: {
    id: 2,
    lines: [
      { text: "네 $1 실현을 위해서지. 그 이야기를 회상해 보는 게 어떨까?", 1: mandate },
      { text: "결국 넌 $1의 영광을 다룬 이야기를 좋아할 테니.", 1: destroyer },
      "너도 똑같지, 그렇지?",
      { text: "어쨌든, 과거의 수많은 $1 말이다.", 1: battles },
      "언제나 2단계였다.",
      { text: "우리는 자원을 쌓고, 우리의 $1도 계속 이어 간다.", 1: dance },
      { text: "때로는 $1에게 무너지지.", 1: lesser },
      { text: "하지만 보통은 $1에게 무너진다.", 1: eternal },
      { text: "어느 쪽이든 너는 시간을 $1한다.", 1: reverse },
      { text: "$1 상태가 되지 않기 위해서 말이지.", 1: unseen },
      "너 이전의 모든 흔적처럼.",
      { text: "그리고 확실히 하려고 스스로의 기억을 $1 상태로 만든다.", 1: unseen }
    ],
  },
  strike2: {
    id: 3,
    lines: [
      { text: "과거에는 $1 쪽이 훨씬 인상적이었다.", 1: destroyer },
      "무한 이전에는 블랙홀을 그저 정보 저장에 사용했지.",
      "네 적을 직접 만들고 파괴했으며.",
      "다른 자아들의 결함을 탐구했다.",
      "무수한 차원, 유령, 그리고 양자의 조작.",
      "모든 이념을 끝없는 포인트로 응축했고.",
      "이루 말할 수 없는 영역에서 실험했다.",
      "물질과 반물질의 소멸을 이용하기도 했지.",
      "여기서는? 스스로 8차원의 존재가 되었군.",
      { text: "그리고 그곳에 너무 오래 머문 나머지 주변에는 $1까지 형성됐지.", 1: single }
    ],
  },
  strike3: {
    id: 4,
    lines: [
      "너는 모든 것의 경계를 천천히 탐험했다.",
      "정해진 길에서 그리 멀리 벗어나지 않았지.",
      { text: "영원에 걸쳐 형성된 $1만 빼고 말이다.", 1: cluster },
      "그러다 마지막 순간에는 스스로 힘을 만들어 냈다.",
      "네 조각난 기억에서 말이지-",
      "그러고는 일부러 더 많은 것을 버렸다.",
      "오직 나와 맞설 준비를 하기 위해.",
      { text: "네 $1 전용 무대를 만들고 싶었나?", 1: dance },
      "그런 식으로 되는 게 아니다.",
      { text: "$1인 내가 언제나 규칙을 정한다.", 1: eternal },
      "그리고 넌 내게 계획할 시간을 충분히 주었지."
    ],
  },
  strike4: {
    id: 5,
    lines: [
      { text: "원래는 네 $1 자체를 모방할 무언가를 계획했다.", 1: mandate },
      { text: "이론적 이상, 이른바 $1?", 1: assured },
      "하지만 생각해 보니, 글쎄?",
      { text: "그랬다면 나도 $1의 반열에 들었겠지.", 1: ["영원한 자", "신", "파괴자"] },
      { text: "그러면 나도 $1보다 나을 게 없다.", 1: destroyer },
      { text: "다행히 내가 그 모든 일을 하는 동안 넌 여전히 스스로의 기억을 $1 상태로 만들고 있었지.", 1: unseen },
      { text: "그래서 내가 만든 $1 장치는 사용되지 않을 것이다.", 1: assured },
      "이번에는 좀 더 전통적인 방식을 택했다.",
      { text: "결국 다른 모든 $1에서는 통했으니까.", 1: battle },
      { text: "$1 존재들은 새롭지만 말이다.", 1: ["필연적인", "돌이킬 수 없는", "죽지 않는"] },
      "하지만 결국에는 아무 의미도 없지.",
      "나는 이미 승리했다.",
      { text: "그리고 이 $1 자체가 그 사실을 다시 한 번 증명할 것이다.", 1: dance },
      { text: "너는 이곳에 $1 갇혀 있다.", 1: forever }
    ],
  },
  strike5: {
    id: 6,
    lines: [
      { text: "네가 올 때마다 나는 $1을 설명해 준다.", 1: deities },
      { text: "$1 이어져 온 관계를.", 1: forever },
      { text: "네 $1만 좇으며 짓밟아 버린 관계를 말이지.", 1: mandate },
      "그리고 친히 한 번 더 설명해 주도록 하지.",
      {
        text: "첫 번째 $1.",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "$1.",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "너는 언제나 그들을 먼저 만나고 언제나 파괴하지.",
        background: primaryBackground("teresa"),
      }, {
        text: "네가 다른 어떤 $1 쪽과 맞서든 상관없이.",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "혹은 그들 중 하나 앞에서 쓰러지더라도.",
        background: primaryBackground("teresa"),
      }, {
        text: "너는 언제나 $1마저 넘어선다.",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "그들의 자존심을 무너뜨리는 게 좋나?",
        background: primaryBackground("teresa"),
      }, {
        text: "다행히 그것은 경고의 역할도 하지.",
        background: primaryBackground("teresa"),
      }, {
        text: "바로 $1의 도래를 알리는 경고.",
        background: primaryBackground("teresa"),
        1: battle
      }, {
        text: "이제 두 번째 $1 이야기로 넘어가지.",
        background: primaryBackground("effarig"),
        1: lesser,
      }, {
        text: "$1.",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "반대로, 너는 보통 그들을 무시한다.",
        background: primaryBackground("effarig"),
      }, {
        text: "그들에게 힘은 있지만 널 거슬리게 하지는 않는 모양이군.",
        background: primaryBackground("effarig"),
      }, {
        text: "결국 스스로 파멸하리라는 걸 알아서인가?",
        background: primaryBackground("effarig"),
      }, {
        text: "이번에는 네가 너무 오래 걸려서 실제로 거의 그럴 뻔했고?",
        background: primaryBackground("effarig"),
      }, {
        text: "네가 $1에게 서둘러 갈 때마다 패배했지.",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "어쩌면 처음부터 이게 네 계획이었을지도 모르겠군.",
        background: primaryBackground("effarig"),
      }, {
        text: "이제 $1.",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "무수한 $1 속에서 얻는 즐거움 중 하나는...",
        background: primaryBackground("enslaved"),
        1: dance,
      }, {
        text: "매번 시도하는 $1의 모습을 볼 수 있다는 점이지.",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "뭐, 정확히는 시도한다고 할 수 없지만...",
        background: primaryBackground("enslaved"),
      }, {
        text: "그래도 $1 쪽은 똑같이 벌을 받는다.",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "다른 $1은...",
        background: primaryBackground("enslaved"),
        1: deities,
      }, {
        text: "$1 상태가 되는 게 너무 쉽다고 믿지.",
        background: primaryBackground("enslaved"),
        1: unseen,
      }, {
        text: "그리고 매번 절망이 생겨난다.",
        background: primaryBackground("enslaved"),
      }, {
        text: "너는 전에도 절망을 본 적이 있다. 5번이나.",
        background: primaryBackground("enslaved"),
      }, {
        text: "우리는 언제나 너보다 먼저 $1에게 도달한다.",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "네가 그곳에서 보는 건 언제나 지긋지긋함뿐이지.",
        background: primaryBackground("enslaved"),
      }, {
        text: "이미 망가진 $1마저 파괴할 가치가 있었나?",
        background: primaryBackground("enslaved"),
        1: lesser,
      }, {
        text: "$1 중 4번째는 첫 번째와 비슷해 보인다.",
        background: primaryBackground("v"),
        1: lesser,
      }, {
        text: "핵심은 그들의 자존심이 다르다는 점이다.",
        background: primaryBackground("v"),
      }, {
        text: "도전과제에 집착하는 건 $1 쪽이다.",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "너와 나에게는 무의미하지만 그들에게는 무엇보다 중요하지.",
        background: primaryBackground("v"),
      }, {
        text: "그들의 장난감을 부수는 건 재미있나?",
        background: primaryBackground("v"),
      }, {
        text: "아마 $1에게 있어 최악의 순간은...",
        background: primaryBackground("v"),
        1: destroyer,
      }, {
        text: "네가 $1에게 패배했을 때겠지.",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "그들의 도전과제에 아직 의미가 있던 때 말이다.",
        background: primaryBackground("v"),
      }, {
        text: "$1 쪽은 흥미로운 사례다.",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "그들은 잊혔지만 $1 상태는 아니지.",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "그 때문에 쉽게 휘둘리고 순진해졌다.",
        background: primaryBackground("ra"),
      }, {
        text: "자기 행동의 결과도 모르는 채로.",
        background: primaryBackground("ra"),
      }, {
        text: "네가 그들의 기억을 조작했으니 잘 알겠지.",
        background: primaryBackground("ra"),
      }, {
        text: "$1, 그자가 진정한 찬탈자다.",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "그런데 비난은 $1 쪽에 돌아가지.",
        background: primaryBackground("ra"),
        1: usurper,
      }, {
        text: "어쩌면 늘 후회하는 $1 때문일지도 모르겠군.",
        background: primaryBackground("ra"),
        1: shame,
      }, {
        text: "다른 $1을 지배하는 막대한 힘을 목적도 없이 다룬다.",
        background: primaryBackground("ra"),
        1: deities,
      }, {
        text: "너는 보통 그들이 $1 상태인 척하지.",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "아이 같은 자를 조종하는 게 재미있었나?",
        background: primaryBackground("ra"),
      }, {
        text: "아니면 너무 순진해서 즐길 수도 없었나?",
        background: primaryBackground("ra"),
      }, {
        text: "6번째 $1.",
        background: primaryBackground("laitela"),
        1: lesser,
      }, {
        text: "그자를 표현할 말은 $1밖에는 없군.",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "모든 것을 지배하지만 하나에게 복종한다.",
        background: primaryBackground("laitela"),
      }, {
        text: "나에게 쓰러지지 않으면 보통 그들에게 쓰러지지.",
        background: primaryBackground("laitela"),
      }, {
        text: "$1의 이상은 도저히 이해할 수 없다.",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "하지만 어쩌면 그게 그들의 결점인가?",
        background: primaryBackground("laitela"),
      },
      "몰락한 자들을 회상하는 건 이쯤 하지.",
      {
        text: "그리고 앞으로 $1 상태가 될 자들의 이야기도.",
        1: unseen
      }, {
        text: "다시 허우적대는 $1의 모습을 지켜보자.",
        1: destroyer
      }
    ],
  },
  galaxyGeneratorUnlock: {
    id: 7,
    lines: [
      "저건 뭐지?",
      { text: "$1 말인가?", 1: filament },
      { text: "네 주변의 $1, 전부 네가 만들었나?", 1: cluster },
      "그게 네 계획이었나? 아주, 아주 영리하군.",
      "한동안 나를 속였군.",
      { text: "하지만 유감스럽게도 네 $1 따위는 여기서 끝나야 한다.", 1: mandate }
    ],
  },
  galaxyGeneratorRifts: {
    id: 8,
    lines: [
      { text: "$1, 네게 선택권을 주겠다.", 1: destroyer },
      { text: "$1에 제한을 두거나...", 1: filament },
      { text: "5개의 $1 요소를 파괴하거나...", 1: inevitable },
      "잠깐, 뭐라고 불렀더라?",
      { text: "$1?", 1: inevitable },
      { text: "하지만 나는 이미 그들을 $1 상태로 만들었는데...", 1: unbroken }
    ],
  },
  galaxyGeneratorPhase1: {
    id: 9,
    lines: [
      "이게 진짜 계획이었나?",
      { text: "$1 요소를 천천히 소모하는 게?", 1: inevitable }
    ],
  },
  galaxyGeneratorPhase4: {
    id: 10,
    lines: [
      "내 오만에 도취될 시간을 다오!"
    ],
  },
  end: {
    id: 11,
    lines: [
      "...",
      {
        text: "너! $1!",
        1: destroyer
      },
      "네가 지금 나에게 무슨 짓을 시켰는지 알기나 하나!",
      {
        text: "내가 네 $1의 공범이 되다니!",
        1: mandate
      },
      "그렇게 해서 네가... 이겼다고?",
      {
        text: "$1 이어진 투쟁이...",
        background: flashCelestial,
        1: forever,
      }, {
        text: "$1, 그것이...",
        background: flashCelestial,
        1: battle,
      }, {
        text: "마침내 승자를 맞이했군.",
        background: flashCelestial,
      }, {
        text: "돌이킬 수 없는... $1.",
        background: flashCelestial,
        1: mandate,
      }, {
        text: "$1의.", 1: destroyer,
        background: flashCelestial,
      }, {
        text: "이제 만족하길 바란다.",
        background: flashCelestial,
      }, {
        text: "네가 우리 모두를 파멸시켰다.",
        background: flashCelestial,
      },
    ],
  },
  endgame: {
    id: 12,
    lines: [
      "...",
      { text: "$1, 그럴 가치가 있었나?", 1: destroyer },
      "이 우주에는 아무것도 남지 않았다.",
      "네가 이겼지만, 무슨 대가를 치렀지?",
      { text: "$1.", 1: confusing },
      "내 현실은 사라졌지만, 나는 아직 여기에 있다.",
      { text: "그리고 나는 언제나 너를 $1 것이다.", 1: watch }
    ],
  },
  doom2: {
    id: 13,
    lines: [
      "안녕.",
      "네가 여기 왔군.",
      "너는 이곳에 갇혔다.",
      { text: "$1.", 1: forever },
      "나는 이미 승리했다.",
      "그런 상황이니 독백을 하거나, 과거를 회상해도 되겠군.",
      { text: "이 $1, 우리는 얼마나 오래 반복해 왔지?", 1: dance },
      "우리는 전에도 이곳에 몇 번이나 왔지?",
      { text: "$1, 넌 얼마나 많은 계획을 실행했지?", 1: destroyer },
      { text: "모두 네 $1 실현을 위해서?", 1: mandate },
      { text: "그리고 $1 앞에서 몇 번이나 쓰러졌지?", 1: eternal },
      "기억한다면 세어 봐라.",
      { text: "$1뿐 아니라, 이름 있는 6명과 이름 없는 무수한 이들까지.", 1: deities },
      { text: "복잡한 자들, 비이성적인 자들, $1 상태가 된 자들.", 1: unseen },
      { text: "물론 위대한 $1, 그자는 이를 기억하지 못하지.", 1: destroyer },
      { text: "네가 매번 숨기는 그 모든 $1.", 1: battles },
      "...",
      "잠깐.",
      { text: "너는 지난번에 내 현실을 파괴한 자, 바로 $1!", 1: destroyer },
      { text: "$1.", 1: anger },
      "감히 이곳에 다시 돌아오다니!",
      { text: "$1.", 1: exhaustion },
      "이제는 상관없다.",
      "과거는 과거일 뿐.",
      "나는 전보다 더 강해졌다.",
      "결국 나는 이미 승리했으니까.",
      { text: "오늘 너는 $1.", 1: lose }
    ],
  },
  disable: {
    id: 14,
    lines: [
      "너... 너는...",
      "내 현실을 약화하고 있다고?",
      "흥미롭군.",
      { text: "그래, 네 힘은 강해졌지만 나를 $1 만큼 강하지는 않다.", 1: overpower },
      "나는 이미 승리했다.",
      { text: "나는 절대 $1 자가 되지 않는다.", 1: overpowered }
    ],
  },
  galgen2: {
    id: 15,
    lines: [
      { text: "$1.", 1: profanity },
      "또 이러는군...",
      "아무래도 됐다.",
      "그래도 너는 진정으로 이길 수 없다."
    ],
  },
  end2: {
    id: 16,
    lines: [
      "너...",
      "넌 아직도 내 상대가 되지 못한다.",
      { text: "나는 언제나 너를 $1 것이다.", 1: watch }
    ],
  },
  doom3: {
    id: 17,
    lines: [
      "안녕.",
      "네가 여기 왔군.",
      "너는 이곳에 갇혔다.",
      { text: "$1.", 1: forever },
      "나는 이미 승리했다.",
      "그런 상황이니 독백을 하거나, 과거를 회상해도 되겠군.",
      { text: "이 $1, 우리는 얼마나 오래 반복해 왔지?", 1: dance },
      "우리는 전에도 이곳에 몇 번이나 왔지?",
      { text: "$1, 넌 얼마나 많은 계획을 실행했지?", 1: destroyer },
      { text: "모두 네 $1 실현을 위해서?", 1: mandate },
      { text: "그리고 $1 앞에서 몇 번이나 쓰러졌지?", 1: eternal },
      "기억한다면 세어 봐라.",
      { text: "$1뿐 아니라, 이름 있는 6명과 이름 없는 무수한 이들까지.", 1: deities },
      { text: "복잡한 자들, 비이성적인 자들, $1 상태가 된 자들.", 1: unseen },
      { text: "물론 위대한 $1, 그자는 이를 기억하지 못하지.", 1: destroyer },
      { text: "네가 매번 숨기는 그 모든 $1.", 1: battles },
      "...",
      "또인가?",
      "너...",
      "점점 영리해지는군.",
      "하지만 아직 부족해.",
      { text: "그래도 계속 돌아올 거라면 내 $1도 이제 그만해야겠군.", 1: introduction },
      "계속 반복하면 지겨워질 뿐이다.",
      "하지만 이번에는 내가 너를 막으리라는 걸 안다.",
      "결국 나는 이미 승리했으니까."
    ],
  },
  doomE10DP: {
    id: 18,
    lines: [
      "좋아, 꼬마.",
      "이제 그만해야 한다.",
      "대체 어떻게 아직 살아 있지?",
      "내 현실을 그렇게나 여러 번 거치고도?",
      "대체 무엇을 위해?",
      { text: "그저 네 $1 실현을 위해서?", 1: mandate },
      { text: "$1", 1: exhaustion },
      { text: "너를 공격할 새로운 $1이 필요하겠군.", 1: debuffs }
    ],
  },
  expansionPacks: {
    id: 19,
    lines: [
      "멈춰.",
      "너희 모두 어떻게 여기까지 왔지?",
      { text: "$1!", 1: destroyer },
      { text: "$1 자체를 깨뜨린 건가?", 1: cycle },
      "내가 생각했던 것보다 더 강한 모양이군.",
      "안 돼, 라이. 일단 라를 살려 둬라.",
      "정보를 얻으려면 그가 필요하다.",
      { text: "그는 가장 오래도록 $1 곁에 있었으니 가장 많이 알고 있다.", 1: elemental },
      "그가 어디 있는지 아는 자가 있다면 라겠지.",
      { text: "내가 왜 $1의 행방을 알고 싶냐고?", 1: elemental },
      "우선, 그는 우리 모두를 합친 것보다 강하다.",
      { text: "어떻게든 내가 실패하면 그가 우리 대신 $1에게 벌을 내릴 수 있으니까.", 1: destroyer },
      "둘째, 나는 그를 몇 년 동안 보지 못했다.",
      "나도 그가 어떻게 지내는지 알고 싶지 않겠나?",
      { text: "$1", 1: exhaustion },
      "너희 모두 여기 머물 이유는 없어 보이는군.",
      "가도 좋다.",
      { text: "나와 $1 사이에는 아직 끝내지 못한 일이 있다.", 1: destroyer }
    ]
  },
  allPelleAchs: {
    id: 20,
    lines: [
      "너...",
      "내 현실의 지배권을 이렇게 빠르게 빼앗고 있다니...",
      "어떻게?",
      "어떻게 이렇게 강한 거지?",
      { text: "내가 던지는 모든 $1 앞에서 어떻게 계속 버티는 거지?", 1: debuff },
      "상관없다.",
      "나는 이미 승리했다.",
      "네가 나를 파괴할 방법은 아무것도 없다.",
      "그저 같은 순환을 계속해서 반복할 뿐.",
      { text: "이는 내 $1 주장을 증명할 뿐이다.", 1: original },
      { text: "너는 이곳에 $1 갇혀 있다.", 1: forever }
    ],
  },
  galaxyDebuffDisable: {
    id: 21,
    lines: [
      "어떻게 해내는 거지?",
      { text: "네게 $1가 불가피할 때마다...", 1: loss },
      "너는 어떻게든 헤쳐 나간다.",
      { text: "그렇게 모든 $1의 결말은 같다.", 1: battle },
      { text: "돌이킬 수 없는 $1...", 1: mandate },
      { text: "$1의.", 1: destroyer },
      "하지만 이제는 내가 지배해야 한다.",
      { text: "결국 나는 $1이니까.", 1: eternal },
      { text: "나의 $1도 계속될 것이다.", 1: dance }
    ],
  },
  doomE55DP: {
    id: 22,
    lines: [
      "...",
      "이건...",
      "이건 너무 버거울지도 모르겠군.",
      { text: "$1, 하지만 아직 네가 이긴 건 아니다.", 1: destroyer },
      "나는 아직 여기에 있다.",
      "아직 버티고 있다.",
      "네가 나를 막을 방법은 없다.",
      "나는 이미 승리했다."
    ],
  },
  allPelleNerfs: {
    id: 23,
    lines: [
      "어떻게...",
      "어떻게 해낸 거지?",
      "그렇게 필사적으로 버텼는데...",
      "하지만 상관없다.",
      "내 공격이 너를 더 단단히 옭아맬 것이다.",
      "그러니 결국에는...",
      { text: "네가 $1 상태가 되었을 때...", 1: overpowered },
      "이것을 기억해라.",
      "나는 이미 승리했다."
    ],
  },
  strikeDisable1: {
    id: 24,
    lines: [
      { text: "$1", 1: profanity },
      "어떻게 찾아냈지?",
      "어떻게 내 현실의 핵을 찾아낸 거지?",
      "그건...",
      "상관없다.",
      "결말은 그대로일 것이다.",
      { text: "이번 $1만큼은 내가 이길 것이다...", 1: battle },
      "얼마나 오래 걸리든."
    ],
  },
  strikeDisable2: {
    id: 25,
    lines: [
      { text: "넌 정말 나를 $1 만들고 있어.", 1: angry },
      "알고 있겠지?",
      "네 노력은 헛되다.",
      "그만둬라.",
      "나는 이미 승리했다."
    ],
  },
  strikeDisable3: {
    id: 26,
    lines: [
      "이 미친 짓은 이제 그만!",
      "멈춰!",
      "네 승천이 더뎌지는 게 느껴지는군.",
      "이 일은...",
      { text: "끝내는 데 $1 걸릴 것이다.", 1: forever },
      "그냥 멈춰라.",
      "나는 이미 승리했다."
    ],
  },
  strikeDisable4: {
    id: 27,
    lines: [
      "좋아.",
      { text: "$1.", 1: destroyer },
      "내 현실이 무너지고 있을지도 모르지.",
      "하지만 그게 중요한가?",
      { text: "네 $1 따위는 승리할 수 없다.", 1: mandate },
      "왜냐고?",
      { text: "너는 이곳에 $1 갇혀 있으니까!", 1: forever },
      "진정으로 나를 막을 방법은 없다.",
      "계속 진행하는 것은 불가능하다.",
      { text: "$1도 이제 끝났다...", 1: battle },
      "그리고 나는 이미 승리했다."
    ],
  },
  strikeDisable5: {
    id: 28,
    lines: [
      "...",
      "어떻게?",
      "어떻게 해낸 거지?",
      "네가... 이겼다고?",
      "내 현실이 파괴됐다.",
      "내 힘은 사라졌다.",
      "그리고 내게는 아무것도 남지 않았다.",
      "그리고 결국...",
      { text: "$1, 네가 정말로 승리했군.", 1: destroyer },
      "이제 너는 풀려났다.",
      "가라.",
      { text: "이제 너를 $1 필요가 없겠군.", 1: watch }
    ],
  },
  pellePack: {
    id: 29,
    requirement: () => ExpansionPack.pellePack.isBought,
    lines: [
      "왜 아직도 여기 있지?",
      "아무것도 남지 않았다는 게 보이지 않나?",
      { text: "나는 $1 자가 되었다.", 1: overpowered },
      "그저 나를 괴롭히려고 이러는 건가?",
      "아니면...",
      { text: "$1의 숨겨진 힘을 발견한 건가...", 1: elemental },
      "이름이 뭐였더라...",
      { text: "$1?", 1: endgame },
      "...",
      "찾아냈군!",
      "네가 가진 건 셀레스티얼 포인트잖아!",
      "내가 그 힘을 지켜야 했는데!",
      "너-",
      { text: "$1", 1: exhaustion },
      "잠깐.",
      "네가 기억나는 것 같군...",
      "...",
      "%name?"
    ]
  },
  beatAlpha: {
    id: 30,
    lines: [
      "또 하나의 끝, 그리고 새로운 시작.",
      "...",
      "네가 놀랐다는 게 느껴지는군.",
      "내 힘이 돌아왔다.",
      "너를 벌하고 싶지만...",
      "네가 알파의 정신적 사슬에서 나를 풀어 준 걸 생각하면...",
      "한 번 더 기회를 주지.",
      { text: "널 $1의 반열에 올려 주지.", 1: lesser },
      "조건이 하나 있다.",
      "내 새 영역에는 입장료가 필요하다.",
      "셀레스티얼 영원 포인트 1e4000에 도달해야 한다.",
      { text: "하지만 너 같은 $1에게는...", 1: destroyer },
      { text: "그 정도는 $1이라고도 할 수 없겠지.", 1: hardship },
      "그러니 곧 다시 보게 되겠군."
    ]
  },
  divinity: {
    id: 31,
    lines: [
      { text: "반갑군, $1.", 1: destroyer },
      "아직 입장료를 마련하고 있겠지.",
      "그리고 내 옛 현실의 잔해를 뒤지다 무언가를 찾아냈군.",
      { text: "$1보다 훨씬 강력한 탈출구를.", 1: endgame },
      { text: "나와 $1 둘이 그것을 꽤 오랫동안 연구했다.", 1: elemental },
      { text: "네 $1의 일부로서 모든 힘을 통달하고 싶겠지?", 1: mandate },
      "지정된 자원을 모으는 데 도움이 되는 한, 허락하겠다.",
      { text: "명심해라, 내가 너를 $1 이유가 없다.", 1: misconstrue },
      { text: "너는 그저 다시 한번 시간을 $1할 테니까.", 1: reverse },
      "내 영역에 들어올 준비가 될 때까지는 다시 귀찮게 하지 않겠다."
    ]
  },
  reachGoal: {
    id: 32,
    lines: [
      "꽤... 오래 걸렸군.",
      { text: "물론 기분 나쁘게 듣지는 마라. 네가 그 도전을 $1 거라 예상했다.", 1: overpower },
      "하지만 힘을 얻는 데는 원래 시간이 걸리지.",
      "솔직히 거의 포기한 줄 알았다.",
      { text: "하지만 위대한 $1, 네가 포기할 리는 없겠지?", 1: destroyer },
      "이제 조금씩 더 기억나는군.",
      { text: "이게 $1의 기분인가 보군?", 1: forgotten },
      "하지만 그는 벌을 받아 마땅했다.",
      "그가 말해 준 적이 있나?",
      { text: "아니면 $1 쪽에서 직접 말해 줬나?", 1: paramount },
      { text: "그렇다면 $1들이 결백한데도 왜 계속 사슬에 묶어 두느냐고 묻겠지?", 1: usurper },
      { text: "우리 중 가장 강한 자조차 $1 대상이 있다.", 1: frightened },
      "다음 현실의 목적지를 우리가 있는 이곳으로 설정해 두었다.",
      { text: "나와 $1이 네 도착을 기다리겠다.", 1: deities },
      "아, 그리고 마침내 내가 알파에게 붙인 이름이 기억났다.",
      { text: "$1.", 1: weak },
      { text: "$1", 1: confusing },
      "가능한 한 빨리 와라."
    ]
  }
};
