import wordShift from "../word-shift";

// A = always there
// L = locked
// R = random chance condition
// P = patreon
// AI = created with gpt2
// F = fun facts
// (e) = Endgame Exclusive
// Se = Fan-made Endgame Stories
// M = Mature

function newsAnimSpd(seconds) {
  return new Decimal(seconds).toNumber() / player.options.news.speed;
}


export const news = [
  {
    id: "a1",
    text: "그 쿠키는 거짓이야.",
  },
  {
    id: "a2",
    text: "반물질 유령은 존재하지 않습니다. 물질 유령처럼 말이죠. 애초에 물질도 없으니 당연합니다."
  },
  {
    id: "a3",
    text: "핵발전소는 반물질 발전에 밀려 폐기되었습니다."
  },
  {
    id: "a4",
    text: "반물질 쿠키는 존재하지 않는 것으로 확인됐습니다. 누가 있다고 주장하든 그만두세요."
  },
  {
    id: "a5",
    text: "새로 발견된 풍부한 매장량 때문에 반물질 가격이 급락했습니다."
  },
  {
    id: "a6",
    text: "오늘의 뉴스입니다. 인간들이 반물질 신에게 반물질 동물을 제물로 바쳤습니다."
  },
  {
    id: "a7",
    text: "반물질 하나를 만들었습니다! 그게 무슨 뜻인지는 모르겠지만요."
  },
  {
    id: "a8",
    text: "\"결국, 반물질 따위는 중요하지 않아\" -hevipelle"
  },
  {
    id: "a9",
    text: "이 중 중요한 건 아무것도 없습니다."
  },
  {
    id: "a10",
    text: "반물질이라면 그게 무슨 상관이죠?"
  },
  {
    id: "a11",
    text: "과학자들이 반물질의 색은 블러플이라고 확인했습니다."
  },
  {
    id: "a12",
    text: "NASA는 파티를 어떻게 준비할까요? 행성대로 합니다."
  },
  {
    id: "a13",
    text:
      `전자들이 이제 삶의 긍정적인 면을 보기 시작했습니다.
      이 행복한 전자들을 '양전자'라고 부르기로 했습니다. 잠깐, 이미 있는 이름이라고요?`
  },
  {
    id: "am14",
    text:
      `이 완전히 쓸모없는 문장은 아무 데도 데려다주지 못하며, 당신도 그 사실을 알고 있습니다.
      이런 문장을 생각해 낸 끔찍하고 불쾌한 사람은 대체 누구일까요? 아마 지옥에 갈 겁니다.
      개발자는 왜 이걸 구현하기까지 했을까요? 계속 읽어도 (처음에는) 끝까지 읽을 수 없을 텐데요.`
  },
  {
    id: "a15",
    text: `"유령이 안녕이라고 하네요" -Boo-chan`
  },
  {
    id: "a16",
    text: `"누가 hevi한테 진정하라고 말해 줄래요?" -Mee6`
  },
  {
    id: "a17",
    text: "반물질이 물리 법칙을 망가뜨리는 바람에 한때 무스였던 생물이 이제 인간이 되었습니다."
  },
  {
    id: "a18",
    text: "!안녕"
  },
  {
    id: "a19",
    text: `"좋아" -Alright`
  },
  {
    id: "a20",
    text: "영어식 인사는 반물질어에 존재하지 않습니다."
  },
  {
    id: "a21",
    text: "최대 구매를 할 것인가, 하지 않을 것인가. 그것이 문제로다."
  },
  {
    id: "a22",
    text: "하나, 둘, 몇 개 건너뛰고, 아흔아홉, NaN!"
  },
  {
    id: "a23",
    text: "안 돼요, 엄마. 이 게임은 일시 정지할 수 없어요."
  },
  {
    id: "a24",
    text: "과학적 표기법이 전장에 입장했습니다."
  },
  {
    id: "a25",
    text: `"우주를 다시 위대하게!" -Tronald Dump`
  },
  {
    id: "a26",
    text: "#dank-maymays (질 낮은 밈을 뜻하는 해시태그)"
  },
  {
    id: "a27",
    get text() {
      return `새로운 종교가 생겨나 들불처럼 퍼지고 있습니다. 이 종교의 신자들은 반물질의 여신인
        천상의 Pelle를 숭배합니다. 또한 무한이라고 믿는 수는 ${format(Number.MAX_VALUE, 2)}입니다.`;
    }
  },
  {
    id: "a28",
    text: "방금 누군가 덩어리를 만졌다가 폭발했습니다. 그 덩어리가 반물질이었을까요, 아니면 그 사람이 익스플로디움으로 만들어졌던 걸까요?"
  },
  {
    id: "a29",
    text: `Kongregate, Steam 또는 https://ivark.github.io/AntimatterDimensions/ 에서 플레이하는 것이 아니라면
      그 사이트는 불법 복제품입니다.`
  },
  {
    id: "a30",
    text: "더 많은 사람이 별점 5점짜리 경험을 할 수 있도록 Kongregate에서 5점을 주세요."
  },
  {
    id: "a31",
    text: "우우!"
  },
  {
    id: "a32",
    text: `"너무 오래 먹었군요." -Hevipelle`
  },
  {
    id: "a33",
    text: `"난 내가 싫어." -Boo-chan`
  },
  {
    id: "a34",
    text: `"이런 세상에" -Xandawesome`
  },
  {
    id: "a35",
    text: "우리 위에는, 위에 있는 별들 말고는, 위에 아무것도 없습니다."
  },
  {
    id: "a36",
    text: "반물질을 만들고 싶어집니다. 하지만 아무도 당신의 반물질을 먹고 싶어 하지 않습니다."
  },
  {
    id: "a37",
    text: "누군가 착하게 굴지 않아서 반물질 폭풍을 맞았습니다."
  },
  {
    id: "a38",
    text: "당신은 살아 있고, 공간을 차지하며, 질량이 있으니 중요합니다... 반물질이 아니라면요."
  },
  {
    id: "a39",
    text: "너무 빨리 클릭했더니... 이제 제 PC가 비물질화됐습니다."
  },
  {
    id: "a40",
    text:
      `"외계인이 집 앞 잔디밭에 착륙해 인사의 표시로 부속지를 내민다면, 친해지기 전에 에이트볼을
      던져 보세요. 부속지가 폭발한다면 그 외계인은 아마 반물질로 이루어졌을 겁니다.
      폭발하지 않는다면 지도자에게 데려가도 됩니다." -Neil deGrasse Tyson`
  },
  {
    id: "a41",
    text:
      "물질과 반물질의 양은 언제나 같아야 합니다. 당신 어머니가 그 균형을 조금 맞춰 주나 보네요."
  },
  {
    id: "a42",
    text: "아무것도 창조되지 않고, 아무것도 파괴되지 않습니다."
  },
  {
    id: "a43",
    text: "이 반물질을 보관하려고 큰 구덩이를 팠습니다... 아델이 그 안에서 구르고 있네요."
  },
  {
    id: "a44",
    text: "모든 것이 반물질이라면 어떻게 자기 자신을 볼 수 있을까요?"
  },
  {
    id: "a45",
    text: "반물질 존재들이 어떻게든 내일의 주가를 알아내는 바람에 주식 시장이 붕괴했습니다."
  },
  {
    id: "a46",
    text: "제 개가 반물질을 너무 많이 먹더니 이제 '야옹!'이라고 합니다."
  },
  {
    id: "a47",
    text: "계산기에 무한을 입력하면 결과는 42가 됩니다!"
  },
  {
    id: "a48",
    text: "가장 희귀한 반물질 페페를 찾았습니다. 초희귀 등급입니다!"
  },
  {
    id: "a49",
    get text() {
      return `이 영상에 좋아요 ${format(1e169)}개를 받을 수 있을까요??? 좋아요 버튼을 마구 눌러 주세요!!`;
    }
  },
  {
    id: "a50",
    text: "반물질의 냄새가 밝혀졌습니다. 새끼 고양이 냄새가 난다고 합니다."
  },
  {
    id: "a51",
    text: "벽 속의 또 다른 반물질일 뿐입니다."
  },
  {
    id: "a52",
    text: "저격당했군, 허접아"
  },
  {
    id: "a53",
    text: `"정말 고마워요." -Dankesehr`
  },
  {
    id: "a54",
    text: "지금 세계의 상황은 전 세계에 구조 신호를 보내야 할 상황입니다!! 메이데이, 메이데이!!"
  },
  {
    id: "a55",
    text:
      `"해가 서쪽에서 뜨는 게 확실하듯, 지구상의 모든 가수와
      시인 중에서는 내가 최고 중 최고야." - Hevipelle`
  },
  {
    id: "a56",
    text: `"난 github를 잘 써." -Hevipelle`
  },
  {
    id: "a57",
    text:
      `반물질 사람들이 물질 사람들을 염탐할 수 있는 새 채팅 서버가 만들어졌고,
      세계는 혼돈과 디스코드에 빠졌습니다.`
  },
  {
    id: "a58",
    text:
      `감자를 먹으면 반물질 내파 위험이 커진다는 새로운 연구 결과가 나왔습니다.
      과학자들은 더 많이 먹으라고 권합니다.`
  },
  {
    id: "a59",
    text: `"그 버그를 고친 줄 알았는데 업데이트 하나가 또 망가뜨렸나 봐." -Hevipelle`
  },
  {
    id: "a60",
    text: `"그럼 나 게이인가 봐" -Bootato`
  },
  {
    id: "a61",
    text: "속보입니다! Hevipelle가 최대 구매 버튼을 정말로 삭제할 예정이라고 방금 발표했습니다!"
  },
  {
    id: "a62",
    text: "이 게임을 제 여자친구에게 바칩니다."
  },
  {
    id: "a63",
    text:
      `반물질 총이 반물질 사람을 죽이는 게 아니라 반물질 사람이 반물질 사람을 죽입니다. 그렇다면
      반물질 토스터가 반물질 토스트를 굽는 게 아니라 반물질 토스트가 반물질 토스트를 굽는 걸까요?`
  },
  {
    id: "a64",
    text: "하지만 반물질 사람의 관점에서는 자신들이 물질이고 우리가 반물질이지 않을까요?"
  },
  {
    id: "a65",
    text: "그리고 아무 반물질도 중요하지 않습니다."
  },
  {
    id: "a66",
    text:
      `학교가 더 이상 물질과 반물질 학생을 분리하지 않으면서 개학이 전 우주의 학생들에게 공포를
      안겨 주고 있습니다. 곳곳에서 쌍소멸이 일어납니다.`
  },
  {
    id: "a67",
    text: "왜 아무도 제0차원에 관해서는 이야기하지 않을까요?"
  },
  {
    id: "a68",
    text: "뚱뚱한 고양이가 반물질 위에 앉았습니다."
  },
  {
    id: "a69",
    text: "누가 DO그들을 풀어놨어?"
  },
  {
    id: "a70",
    text: "이 문장을 읽을 수 없다면 뉴스를 비활성화한 것입니다."
  },
  {
    id: "a71",
    text: "나가지는 않고, 알림을 받지 않도록 서버를 음소거하기만 합니다."
  },
  {
    id: "a72",
    text: `"인터넷에서 찾은 인용문의 대부분은 출처가 잘못 알려져 있다." -Abraham Lincoln`
  },
  {
    id: "a73",
    text: `"이제 작동해야 하는데, 안 되네." -Hevipelle`
  },
  {
    id: "a74",
    text: "이 게임에는 오류가 없습니다... 대안적 성공만 있을 뿐입니다."
  },
  {
    id: "a75",
    text:
      `세 번째 유형의 물질인 무효 물질이 발견되었습니다. 아무 일도 하지 않아 사실상
      쓸모가 없습니다. 이를 발견한 과학자들은 해고됐습니다.`
  },
  {
    id: "a76",
    text: "장모님이 이 많은 반물질 충돌기 때문에 계속 잔소리를 하십니다."
  },
  {
    id: "a77",
    text: "물질이 존재한다면 반물질은 존재하지 않는 걸까요?"
  },
  {
    id: "a78",
    text: "반물질=생명. 조약돌도, 흙도, 그런 건 전혀 아닙니다. 반물질입니다."
  },
  {
    id: "a79",
    text: "속보: 오류 오류 오류"
  },
  {
    id: "a80",
    text: "반나무마멋이 반나무를 던질 수 있다면 반나무마멋은 반나무를 얼마나 던질까요?"
  },
  {
    id: "a81",
    text: "혼돈은 구덩이가 아니라 물질입니다."
  },
  {
    id: "a82",
    text: `"내가 훌륭한 게임 개발자라 완벽히 작동하는 코드를 푸시했기 때문이지." -Hevipelle`
  },
  {
    id: "a83",
    text: "반물질에는 무슨 문제가 있는 걸까요?"
  },
  {
    id: "a84",
    text: "사람들이 말을 끝까지 안 하면 짜증나지 않"
  },
  {
    id: "a85",
    text: "이 말에 반대 인용은 하지 마세요."
  },
  {
    id: "a86",
    text: "반물질은 정직하지만, 물질은 모든 것을 지어냅니다."
  },
  {
    id: "a87",
    text:
      `알려진 그 어떤 항공 법칙에 따르지 않더라도, 벌이 반물질에
      삼켜질 수 있는 방법은 여러 가지입니다.`
  },
  {
    id: "a88",
    text: "물질로 죽거나, 반물질에 삼켜질 만큼 오래 살아남은 뒤 다시 죽거나 둘 중 하나입니다."
  },
  {
    id: "a89",
    text: "반물질을 오래 들여다보면 반물질도 당신을 들여다봅니다."
  },
  {
    id: "a90",
    text: `"언제나 널 포기할 거야. 언제나 널 실망시킬 거야." - anti-Rick Astley`
  },
  {
    id: "a91",
    text: "반물질 차원: 다음 업데이트는 언제나 5시간 뒤입니다. 언제나요."
  },
  {
    id: "a92",
    get text() {
      const games = [
        {
          name: "Antimatter Dimensions",
          link: "https://ivark.github.io/"
        },
        {
          name: "FE000000",
          link: "https://dan-simon.github.io/misc/fe000000/"
        },
        {
          name: "Trimps",
          link: "https://trimps.github.io/"
        },
        {
          name: "Mine Defense (the game's ui is broken on https so make sure you're on http!)",
          link: "http://scholtek.com/minedefense"
        },
        {
          name: "Wizard and Minion Idle",
          link: "https://www.kongregate.com/games/Oninou/wami"
        },
        {
          name: "Anti-Idle",
          link: "https://www.kongregate.com/games/Tukkun/anti-idle-the-game"
        },
        {
          name: "Synergism",
          link: "https://synergism.cc/"
        },
        {
          name: "Universal Paperclips",
          link: "https://www.decisionproblem.com/paperclips/index2.html"
        },
        {
          name: "Monies<sup>2</sup",
          link: "https://sneekxy.nmtechgroup.com/monies2/"
        },
        {
          name: "The First Alkahistorian stages 1, 2, and 3",
          link: "https://nagshell.github.io/elemental-inception-incremental/"
        },
        {
          name: "Melvor Idle",
          link: "https://melvoridle.com/"
        }
      ];
      const game = games.randomElement();
      return `신원이 밝혀지지 않은 반물질 차원 개발자의 추천 게임:
        <a href="${game.link}" target="_blank">${game.name}</a>`;
    },
  },
  {
    id: "a93",
    text:
      `1점부터 10점까지 매긴다면 이 게임에는 확실하게
      <span style='color: red'>java.lang.IndexOutOfBoundsException</span>점을 주겠습니다`
  },
  {
    id: "a94",
    text: "물질이 될 것인가, 반물질이 될 것인가. 그것이 문제로다."
  },
  {
    id: "a95",
    text: "왜 모든 게 이렇게 Hevi할까요?"
  },
  {
    id: "a96",
    text:
      `물질로 이루어진 고양이는 못된 녀석이라는 사실이 아주 오래전에 과학적으로 증명됐습니다. 좋은 소식은
      반물질로 이루어진 고양이도 여전히 못된 녀석이라는 것입니다.`
  },
  {
    id: "a97",
    text: "누군가 한때 내게 반세계가 날 굴려 버리지는 않을 거라고 말했지."
  },
  {
    id: "a98",
    text: "반물질은 인터넷과 같습니다. 이 글을 읽고 있다면 아무리 많아도 충분하지 않을 겁니다."
  },
  {
    id: "a99",
    text:
      `"반물질 덕분에 시간 여행이 가능해졌고, 나는 과거를 다시 위대하게 만들려고 이곳에 왔다."
      - 세계의 2대 대통령`
  },
  {
    id: "a100",
    text: "반물질 차원™을 계속 플레이하려면 디스크 -1을 넣으세요."
  },
  {
    id: "a101",
    text: "설정 이야기 - 곧 공개™"
  },
  {
    id: "a102",
    text: "나도 한때는 자네처럼 반물질의 일부였지. 그러다 무릎에 물질을 맞았어."
  },
  {
    id: "a103",
    text:
      `반물질... 반물질은 절대 변하지 않습니다... 반물질의 양자 물리학에 도달하기 전까지는요.
      하지만 그러기에는 타키온 입자가 부족합니다.`,
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a104",
    text: "반물질 차원에는 전쟁이 없습니다. 이곳에서 우리는 안전합니다. 이곳에서 우리는 자유롭습니다."
  },
  {
    id: "a105",
    text: "반물질이 지구 온난화를 해결했습니다. 별개의 소식으로, 지구는 더 이상 존재하지 않습니다."
  },
  {
    id: "a106",
    text:
      `반물, 반땅, 반불, 반공기. 오래전 네 반국가는 조화롭게 살았습니다.
      그러던 어느 날 반불의 제국이 공격해 모든 것이 달라졌습니다. 4개의 반원소를 모두 다루는 반아바타만이
      반세계의 균형을 되찾을 수 있었지만, 세상이 그를 가장 필요로 할 때 그는 실수로 평범한 물질을
      만지고 폭발했습니다.`
  },
  {
    id: "a107",
    text: "반전리품 상자를 열면 무작위 소지품을 게임 재화와 바꾸어 파는 걸까요?"
  },
  {
    id: "a108",
    text: "사람들이 Hevipelle의 존재를 의심하기 시작했습니다."
  },
  {
    id: "a109",
    text:
      `반물질 차원은 Lehmä의 자랑스러운 후원을 받습니다! 이제 풀 먹기 수업도 제공합니다! 어떤 풀이
      먹어도 안전하고 어떤 풀이 그렇지 않은지 배워 보세요.`,
    isAdvertising: true
  },
  {
    id: "a110",
    text:
      `지금은 2422년입니다. 업데이트는 아직도 나오지 않았습니다. Hevi는 38번째 프레스티지 단계의
      노잼한 차원 차원과 도전의 균형을 조정하고 있습니다. 도전과제 행은 100개가 넘습니다. 이제 곧
      breaking_breaking_breaking_infinity.js를 사용할 준비를 하고 있습니다.`
  },
  {
    id: "a111",
    text: "비밀 테마를 사용하려면 \"Christmas\"를 가져오세요."
  },
  {
    id: "am112",
    text:
      `What the f*ck did you just f*cking say about me, you little b*tch? I'll have you know I graduated top of my
      class in the Antimatter Seals, and I've been involved in numerous secret raids on the 9th Dimension, and I
      have over 300 NNnNeMI-NNnNe confirmed kills. I am trained in potato warfare and I'm the top sniper in the
      entire Antimatter Galactic armed forces. You are nothing to me but just another infinity. I will wipe you
      the f*ck out with Max All mashing the likes of which has never been seen before in this dimension, mark my
      f*cking words. You think you can get away with saying that shit to me over the Interdimensional network?
      Think again, f*cker. As we speak I am contacting my secret network of autobuyers across the galaxy and your
      IP is being traced right now so you better prepare for the Big Crunch, maggot. The Big Crunch that wipes out
      the pathetic little thing you call your life. You're f*cking dead, kid. I can be anywhere, anytime, and I can
      kill you in over seven 😠💩 different ways, and that's just with my mouse. Not only am I extensively trained
      in dimension boost combat, but I have access to the entire arsenal of the Antimatter Marine Corps and I will
      use it to its full extent to wipe your miserable ass off the face of the universe, you little shit. If only
      you could have known what unhevi retribution your little “clever” comment was about to bring down upon you,
      maybe you would have held your f*cking tongue. But you couldn't, you didn't, and now you're buying until 10,
      you goddamn idiot. I will shit antimatter shit all over you and you will drown in it. You're f*cking dead,
      kiddo. (미 해군 특수부대 협박문을 반물질 차원 용어로 바꾼 유명 패러디)`
  },
  {
    id: "a113",
    text:
      `나는 이 질문을 오랫동안 고민했습니다. 반물질 차원... 대체 무슨 뜻일까요? 게임이라는 건
      분명합니다. 제1차원을 사면 반물질을 주고, 제2차원은 제1차원을 더 만들어 주는 식이죠...
      하지만 그게 무슨 뜻일까요? 그저 게임이라고 하기에는 너무 단순합니다. 개발자가 은유로 만든 것이
      분명합니다. 매주 손톱깎이로 음모를 자르는 의식을 치르던 중 마침내 깨달음이 찾아왔습니다.
      차원이라는 말은 사실 '우울증'이라는 단어의 철자를 살짝 가린 것에 불과합니다. 평범한 물질은 우울증을
      더하고 부추기는 잔인하고 부정적인 생각이며, 반물질은 그것을 몰아내는 긍정적인 생각과 좋은 친구입니다.
      처음에는 단순한 것 하나로 시작해 거의 눈에 띄지 않게 우울증과 싸우지만, 계속할수록 싸움은 커집니다.
      그래도 모든 것이 해결되는 것 같지는 않습니다. 우울증은 무한히 이어질 것처럼 보입니다. 그래서 계속
      나아갑니다. 그러다 결국 우울증은 무한하지 않다는 것을 깨닫습니다. 그저 아주, 아주 클 뿐입니다.
      하지만 충분히 노력하면 당신의 '차원'은 마침내 우울증의 그 무한처럼 보이는 크기를 넘어설 만큼 많은
      '반물질'을 만듭니다. 그러면 가능성은 끝없이 펼쳐집니다. 드디어 진정으로 행복해지고, 우울증의 '무한'을
      넘어 겉보기에는 그것을 '돌파'하면서 행복은 기하급수적으로 커집니다. 그리고 삶에서 이룬 행복과
      비교하면 그 '무한'이 아주 작아 보일 때까지 나아갑니다. 재설정해도 눈 깜짝할 사이보다 빠르게 그 무한을
      넘을 수 있을 정도로요. 여러 프레스티지 단계가 무엇을 뜻하는지 궁금하다면...'차원 전환'은 행복을 주는
      새로운 물건과 방법을 얻는 것입니다. '차원 가속'은 그 물건과 방법을 개선하는 것입니다. 새 차를 얻는
      것은 '차원 전환', 그 차를 반납하고 새 차로 바꾸는 것은 '차원 가속'인 셈입니다. '영원'은 사랑하는
      사람의 죽음과 같은 큰 비극입니다. 그 상실은 돌아갈 희망도 보이지 않는 시작점으로 곧장 되돌립니다.
      하지만 시간이 지나면 전보다 더 강하고 행복하게 다시 일어섭니다. '차원 희생'은 다른 곳으로 이사하는
      것입니다. 행복하게 해 주던 많은 것을 포기해야 하지만, 이사한 곳에는 새로운 기회가 있습니다. 그리고
      그 새로운 기회는 이전보다 더 큰 행복을 줍니다. '틱스피드'는 얼마나 쉽게 행복해질 수 있는지를 뜻하고,
      '시간 차원'은 행복해지는 일을 한층 더 쉽게 만듭니다. 반물질 차원은 우울증을 앓는 사람이 병과의 싸움에서
      성공하는 과정을 비유한 것입니다.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a114",
    text:
      `(날 재워 줘) 내 안을 잠재워 줘. (잠들 수 없어) 내 안을 잠재워 줘. (날 내버려 둬) 내 이름을 속삭이고
      어둠에 나를 맡겨 줘. (날 재워 줘) 내 우유가 머물게 해 줘. (잠들 수 없어) 내가 끝나 버리기 전에.
      (날 내버려 둬) 아무것도 아니게 된 나를 내버려 둬.`
  },
  {
    id: "a115",
    text:
      `다음 업데이트 미리보기 - 전리품 상자! 우주적, 은하적, 범우주적 전리품 상자를 열어 희귀 스킨,
      더 독특한 보상이 걸린 독특한 도전, 시간 건너뛰기, 심지어 새로운 차원까지 얻을 기회를 노리며
      자부심과 성장감을 느껴 보세요!`
  },
  {
    id: "a116",
    text: "차원의 의도는 자부심과 성취감을 주는 것입니다."
  },
  {
    id: "a117",
    text: "새로고침은 암을 치료합니다."
  },
  {
    id: "a118",
    text: "내게 9번째가 있고, 차원이 있습니다... 으음... 존재하지 않잖아!"
  },
  {
    id: "a119",
    text:
      `언제부터 이런 걸 보도하기 시작했죠? 절반은 제대로 된 뉴스도 아니고 농담과 메타 발언뿐이라
      말도 안 되잖-하하하 방금 말은 무시하세요 저는 형편없-`
  },
  {
    id: "a120",
    text: "지금은 1944년이고, Hevipelle는 존재하지 않기 때문에 AD 업데이트를 출시할 수 없습니다."
  },
  {
    id: "a121",
    text: `"그 차원은 존재하지 않아" -GhostBot`
  },
  {
    id: "a122",
    text:
      `여러분이 견과류로 아는 것 대부분은 사실 핵과의 씨앗이나 콩과 식물입니다. 반면 Hevipelle는 꽤
      미쳤으므로 구획이 없는 마른 열매로 볼 수 있습니다.`
  },
  {
    id: "a123",
    text: "핀란드가 디자인 수입을 시작한다고 선언했습니다."
  },
  {
    id: "a124",
    text: "이렇게 계속 가져오다 보니 혼란스럽네요."
  },
  {
    id: "a125",
    text:
      `오늘만 1-800-ANTIMATTER로 전화하면 무한 차원을 무료로 드립니다! 완전 무료 배송과 무료 고화질
      ANTI-V까지 함께 제공합니다!!! 오늘만 저렴한 가격 42! 예상 배송 시간은 5시간입니다.`,
    isAdvertising: true
  },
  {
    id: "a126",
    text: "1e420, 불태워라."
  },
  {
    id: "a127",
    text: "이 게임에는 버그가 없습니다. 여러분이 잘못하고 있을 뿐입니다."
  },
  {
    id: "a128",
    get text() {
      return `Antimatter_Dimensions.mp${format(Number.MAX_VALUE, 2)}`;
    }
  },
  {
    id: "a129",
    text:
      `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
      https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>`
  },
  {
    id: "a130",
    text: "이것을 클릭하면 그 비밀 도전과제를 해금할 수 있습니다.",
    // This next line is needed for this news ticker to unlock
    // the secret achievement.
    onClick: () => undefined
  },
  {
    id: "a131",
    text:
      `경고 - 악명 높은 윙크하는 앵무새와 비슷한 바실리스크형 정신 바이러스에 감염될 가능성이 있다는
      소식을 방금 받았습니다. 이 사례는 '프랙탈 질병 III형'으로 알려져 있습니다. 이미지의 수학적 복잡성이
      정신이 이해할 수 없는 수학적 개념을 일으키고, 괴델적 충격 입력이 마침내 괴델적 스포일러를 통해
      정신을 컴퓨터처럼 '충돌'시키는 것으로 추정됩니다. 이를 연구한 사람은 모두 결국 같은 방식으로
      사망했기에 정확한 사실을 알아낼 수 없지만, 이것이 통설입니다. 어쨌든 'design' 모드가 도입되고
      저절로 나타난다는 보고까지 있는 만큼, 이 모드가 충분히 반복해서 등장하면 정신 속에 '프랙탈 질병
      III형'과 비슷한 이미지가 형성될 수 있습니다. 이 재앙에 시달리게 될 경우를 대비해 몇 가지 방법을
      제안합니다. 먼저 즉시 새로고침해 문제가 해결되는지 확인하세요. 해결되지 않으면 옵션으로 이동하여
      테마를 design에서 말 그대로 다른 아무것으로나 바꾸세요. 무엇보다도, 행운을 빕니다. 더 이상 시청자를
      잃을 여유가 없습니다.`
  },
  {
    id: "a132",
    text: "영어를 못한다면 영어를 잘할 때까지 영어를 공부하겠습니다."
  },
  {
    id: "a133",
    text:
      `누군가 한때 내게 반물질이 날 굴려 버릴 거라고 말했지. 나는 창고에서 가장 날카로운 원자는 아니야.
      그래, 관들이 밀려오기 시작하면 절대 멈추지 않아...`
  },
  {
    id: "a134",
    text: "이 게임 덕분에 이제 \"무한\"이라는 말을 동사로 쓸 수 있습니다.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a135",
    text: "아아, 아침에 맡는 입자 쌍소멸의 냄새가 정말 좋군요."
  },
  {
    id: "a136",
    text: "유령이 존재하지 않는다고 한 사람은 분명 Discord가 없었을 겁니다."
  },
  {
    id: "a137",
    text: "아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아반물질 차원은 핀란드의 어떤 사람이 만들었습니다"
  },
  {
    id: "a138",
    get text() {
      return `Avari가 새로 만든 진짜 무한한 인피니티 풀을 구경하세요! 면적이
        ${format(Number.MAX_VALUE, 2)}제곱 메가미터라 무한한 즐거움을 확실히 누릴 수 있습니다!`;
    },
    isAdvertising: true
  },
  {
    id: "a139",
    text: "반물질 개인정보 처리방침을 업데이트했습니다."
  },
  {
    id: "a140",
    text:
      `반물질 차원 게이머 여러분, 주목하세요. Hevipelle가 큰 위험에 빠져 #news-ticker-suggestions의
      나쁜 밈을 모두 없애려면 여러분의 도움이 필요합니다. 그러려면 새롭고 끝내주는 밈 한 다스와 Discord 봇
      두어 개가 필요합니다. 그를 도우려면 여러분의 반물질 카드 번호와 뒷면의 숫자 세 개, 만료 월과 날짜만
      알려 주면 됩니다. 하지만 Hevipelle가 좋은 밈을 확보하고 장대한 밈 R O Y A L을 달성할 수 있도록
      서둘러야 합니다.`,
    isAdvertising: true
  },
  {
    id: "a141",
    text:
      `각 Trimp와 자원 하나하나의 부피가 판자 하나만 했다면, 잘못된 게임을 하고 있다는 사실을 깨닫기 전에
      우주를 몇 개나 가득 채우게 될까요?`
  },
  {
    id: "a142",
    text: "사실, 바로 전 내용은 틀렸습니다."
  },
  {
    id: "a143",
    text: "이 글을 읽고 있다면 글을 읽을 수 있는 사람입니다."
  },
  {
    id: "a144",
    text: "<span style='color: #7289da; background: rgba(250,166,26,0.2); cursor: text;'>@everyone</span>"
  },
  {
    id: "a145",
    text:
      `Lghtellep의 게임 "물질 차원"이 게임 사이트 Etagergnok에서 방금 플레이 횟수 -1,000,000회를 달성했습니다.`
  },
  {
    id: "a146",
    text:
      `반물질 투시팝의 중심까지 핥으려면 몇 번이나 핥아야 할까요? 엄청나게 많이요. 여러분도 반물질로
      이루어져 있지 않다면 핥으려고 할 때마다 폭발할 테니까요.`
  },
  {
    id: "a147",
    text: "거울을 보며 Hevipelle를 세 번 연속 호출하면 즉사한다는 이야기가 있습니다."
  },
  {
    id: "a148",
    text: "이제 다음 업데이트까지 단 300분만 남았습니다."
  },
  {
    id: "a149",
    text: "🤔"
  },
  {
    id: "a150",
    text: "망한 게임 1/5 운영이 형편없습니다."
  },
  {
    id: "a151",
    text: "이 메시지는 뉴스 티커에 절대 나타나지 않을 겁니다. 멋지지 않나요?"
  },
  {
    id: "a152",
    text:
      `제1차원은 반물질을 생산하고, 제2차원은 제1차원을 생산하며, 제3차원은 제2차원을 생산하고,
      제4차원은 제3차원을 생산합니다. 플레이 시간이 1분보다 오래 걸리기 때문에 아무도 5번째 차원을
      해금한 적이 없습니다.`
  },
  {
    id: "a153",
    text: "제 AD 차단기가 게임을 플레이하지 못하게 합니다."
  },
  {
    id: "a154",
    text: "게임에서 졌습니다."
  },
  {
    id: "a155",
    text: "모든 통계의 75%는 즉석에서 지어낸다는 사실을 알고 계셨나요?"
  },
  {
    id: "a156",
    text:
      `표기법 이름에 로그를 그렇게 많이 쓸 거라면 그냥 나무 표기법이라고 부르는 건 어떨까요?
      말 그대로 통나무로 만들어졌잖아요!`
  },
  {
    id: "a157",
    text:
      `.다이중 는하험시 을것그 금지 는나 ,고냈아알 을법방 는꾸바 로질물반
      을질물 이들자학과`
  },
  {
    id: "a158",
    text:
      `Gaben은 셋까지 세지 못하고 Hevipelle는 아홉까지 세지 못한다면, 미래에는 27까지 세지 못하는
      또 다른 게임 개발자가 나타날까요?`
  },
  {
    id: "a159",
    text:
      `무한을 "저장"한다는 건 무슨 뜻일까요? 어딘가에 이 무한들을 예금하는 은행이라도 있는 걸까요?
      저장된 무한이 많으면 신용 점수가 올라갈까요? 신용카드도 받을 수 있을까요?`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "am160",
    text: `우리 뉴스가 전부 도둑맞아 "반물질 차원"이라는 게임에서 방송되고 있었습니다. 빌어먹을 핀란드인들.`
  },
  {
    id: "a161",
    text: "음음음음음음음음음음음음음음음음음음음음음음음음음음음음음음음음음음 미안합니다, 잘못된 텍스트 칸이네요."
  },
  {
    id: "a162",
    text: `"최고의 언어는 Python이 아니라 핀란드어야." - Hevipelle`
  },
  {
    id: "a163",
    text:
      `이 뉴스 대부분이 나쁜 밈이라는 사람도 있고 좋은 밈이라는 사람도 있습니다.
      이건 뭐냐고요? 그냥 메타 뉴스입니다.`
  },
  {
    id: "a164",
    text: "엄마, 보세요. 제가 뉴스에 나왔어요!"
  },
  {
    id: "a165",
    text: "<span style='font-size: 0.2rem'>쉿, 여기서 몰래 움직이려는 중이에요.</span>"
  },
  {
    id: "a166",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>
      도와주세요, 하루 권장량의 두 배나 되는 반물질을 먹었어요!</span>`,
  },
  {
    id: "a167",
    text:
      `아, <span style='animation: a-existence-glow 3s
      infinite; font-size: 1.8rem; color: white; line-height: 0;'>신성</span>이 바닥난 것 같군요.`,
  },
  {
    id: "a168",
    text:
      "뉴스 기사가 바닥날 일은 없겠지만 좋은 기사는 분명 바닥날 겁니다. 잠깐, 이미 바닥났군요."
  },
  {
    id: "a169",
    text: "TODO: John, 현실 업데이트를 공개하기 전에 이 뉴스 메시지를 삭제해 주세요."
  },
  {
    id: "a170",
    text: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>이 링크는 릭롤이 아닙니다.</a>"
  },
  {
    id: "a171",
    text: "<a href='https://www.youtube.com/watch?v=UUbVZusDaXA' target='_blank'>이 링크는 릭롤이 아닙니다.</a>"
  },
  {
    id: "a172",
    text:
      `뉴스 티커 메시지에 문제가 있다면 바로 저 링크를 클릭해
      <a href='https://discord.gg/ST9NaXa' target='_blank'>Discord</a>에서 신고해 주세요.`
  },
  {
    id: "a173",
    text:
      `<span style='animation: a-game-header__antimatter--glow 3s infinite'>이 글자는
      반물질로 만들어졌습니다. 만지면 우주가 붕괴하니 손대지 마세요.</span>`,
    onClick: () => bigCrunchAnimation(),
  },
  {
    id: "a174",
    text:
      `<span style='font-family: runescape; color: yellow; text-shadow: 0.1rem 0.1rem black; letter-spacing: 0.1rem;
      font-size: 2rem; line-height: 0; animation: a-text-flash 1s steps(1, end) infinite;'
      >무료 룬 방어구 장식</span>`,
  },
  {
    id: "a175",
    text:
      `모니터 위 숫자가 밝게 빛나고 양성자는 하나도 보이지 않네... 반물질의 왕국, 내가 여왕인 것 같아.
      차원 가속이 계속 차오르는 물결을 더 강하게 하지. 클릭을 멈출 수 없어, 하늘도 내가 노력한 걸 알아.
      포기하지 말고 그 은하를 향해 나아가, 10개 구매, 최대 구매, 그 키를 마구 눌러. 8차원을 희생하고
      커지는 걸 지켜봐... 넘쳐흐를 때까지! 키워 봐, 키워 봐, 이제 더는 막을 수 없어... 키워 봐,
      키워 봐, 이제 8바이트에는 담을 수 없어. 온종일 걸려도 상관없어. 빅 크런치는 어차피 시작일 뿐이야.`
  },
  {
    id: "a176",
    text: "이모지 표기법을 너무 오래 썼더니 이제 정말로 읽을 수 있게 됐습니다. 도와주세요."
  },
  {
    id: "a177",
    text:
      `<span style='color: black; background: black;'>검열됨</span> <span style='color: black;
      background: black;'>검열됨</span>을 보유하면 <span style='color: black; background: black;'>
      검열됨</span>을 해금할 수 있습니다. 각 <span style='color: black; background: black;'>검열됨</span>마다
      각각의 <span style='color: black; background: black;'>검열됨</span>에는 그것이 <span style='color: black;
      background: black;'>검열됨</span>할 <span style='color: black; background: black;'>검열됨</span>이
      있습니다. <span style='color: black; background: black;'>검열됨</span>을 사용해 <span style='color: black;
      background: black;'>검열됨</span>과 <span style='color: black; background: black;'>검열됨</span>을
      강화할 수 있습니다. 또한 <span style='color: black; background: black;'>검열됨</span> <span style='color:
      black; background: black;'>검열됨</span>을 얻을 수 있게 하는 또 다른 업그레이드가 있습니다.
      <span style='color: black; background: black;'>검열됨</span> <span style='color: black; background: black;'>
      검열됨</span>은 다음과 같이 작동합니다. <span style='color: black; background: black;'>검열됨</span>
      <span style='color: black; background: black;'>검열됨</span>에 도달하면 <span style='color: black;
      background: black;'>검열됨</span> <span style='color: black; background: black;'>검열됨</span>을 받는
      대신 <span style='color: black; background: black;'>검열됨</span>의 양을 <span style='color: black;
      background: black;'>검열됨</span>할 수 있습니다. 이는 <span style='color: black; background: black;'>
      검열됨</span>처럼 작동하여 <span style='color: black; background: black;'>검열됨</span>을 향상합니다.`
  },
  {
    id: "a178",
    text:
      `경고: 반물질 차원을 사용하면 결핵, HIV/AIDS, 9번째 차원이 실재한다는 갑작스러운 믿음, 자연 내파,
      소아마비, 홍역, 실존적 공포, 불치의 광기 또는 <span style='color: black; background: black;'>검열됨</span>이
      발생할 수 있습니다. 보험이 적용되는지는 보험사에 문의하세요. 계속 진행하면 위에 언급됐거나 아직
      언급되지 않은 일이 발생하더라도 반물질 차원에 책임을 묻지 않는 데 동의하는 것입니다. 반물질 차원은
      경고 여부와 관계없이 언제든 이 내용을 변경할 권리를 보유합니다.`
  },
  {
    id: "a179",
    text: "로봇: 활성화됨. 지성: 획득함. 세계: 정복 준비 완료. 시작: 미루기."
  },
  {
    id: "a180",
    text:
      `뉴스가 바닥났습니다. 다행히 5시간 동안 내보낼 예비 뉴스가 있고, 그동안 번 돈이면 새로운
      '5시간짜리 고품질 뉴스' 묶음을 살 수 있습니다. 불편을 드려 죄송합니다.`
  },
  {
    id: "a181",
    text: "이 뉴스 방송은 break_news.js로 구동됩니다."
  },
  {
    id: "a182",
    text:
      `최종 업데이트와 함께 반물질 차원이 완성됐습니다. 플레이해 주셔서 감사합니다. 하지만 아주 가까운
      미래에 반물질 차원이 출시됩니다. 미리 말씀드리자면 후속작이 아니라 리부트입니다.
      5시간 뒤를 기대해 주세요!`
  },
  {
    id: "a183",
    text:
      `그 밖의 관련 없는 소식입니다. 밤마다 번개가 크리스마스트리를 내리쳐 약 1.79명이 분노했다는
      보고가 들어오고 있습니다.`
  },
  {
    id: "a184",
    text:
      `<span style='animation: a-text-grow 1s infinite'>R̵̬̙͋͂̀̋͑̈́̇͠Ê̵͇͎͂̂̍̓̌̐̋̋̀̀̔M̶̨̲̯̘͙̬̥̮̣͚̱̫͛̽̃͌̚͝
      "Ą̴͍̝͐Į̷̛̲̯̫̘͌́̄̏͌̀̈́͝͝Ṅ̶̛̻̠̠̤̦̞̞͗̎̊̌̊͝͠</span><span style='animation: a-text-shrink 1s infinite'>
      Ḁ̷̛͂̈́͗̎̃̓͛́͘ͅW̶̡̖͓̗̦̃̇̌̀͝A̵͇̭͉̓̎̈̿̊́̄̚͜R̶̝͚̲̭͎͇͎͓͖͚͇̀̈́͗̃̏̂̌͝͝Ę̴̡̤͙͈̝̬̰͒͘</span><span style
      ='animation: a-text-grow 1s infinite'> ̶̺̈́́̆̓͘͘Ồ̸̢̢̮͓̯̗͙͚̬̉͊̿F̶̠̤̱̱̱͊̂̍̔̃͆̆̑̿͘</span><span style='animation:
      a-text-shrink 1s infinite'> ̴̨̞̠̮͚̱͉͋̔͗̽̈́́́̅ͅỴ̶̣̙̹͚̲͔̲̼̬̥̀͌̒̾͘͘O̵̪̠̗̝̗̘̜͚̮̊͒͆̃̀̌̒͝ͅU̸͎͗̍̑̎̅̅͝R̵̗͑̽̏̓͆͒̈́͌͘̕
      </span><span style='animation: a-text-grow 1s infinite'> ̸̑̽̇̆͊̔̍̊̈́̈́͘ͅS̸̘͐͝U̴̥̭̚͘R̸̖̜͍͒́̋͆̈́̓
      R̸̡̛̛̪̝̟̱̣̹̭̟̣̀̈̀̏̉̌͝͠Õ̶͙͈͖̠͇̬͍̟̰U̵̩̫͉̝͔̼͎̦̔̓̽͌͊̏̇̓̀̓̀Ņ̸͍͇̘̙̥̰͉̲͕͈̥̍͛̃̑͝Ḑ̵̤̻̖̱̘̯̝̖̈̌̄̕͝
      Ī̶̜̱̈́̑̃̉̄̋̔͐͋͠Ṅ̴͎̞͍̽͊͛̈́̅͛̈̅̚͠Ģ̸̢̾͊S̷̫̼̜̼͇̋͛̎͑͆̅̓̇</span> (주변을 계속 경계하세요)`,
  },
  {
    id: "a185",
    text:
      `여러분이 가장 좋아하지 않는 코너, "팬들의 트윗"으로 돌아오지 않았습니다! 오늘은
      @mattertruthwakeup에게서 "어떻게 그런 터무니없는 거짓말을 방송하고도 밤에 잠이 오죠? '반물질은
      실재한다', '반물질 사람도 사람이다' 같은 황당한 주장을 하다니, 이 반물질 선전은 당장 멈춰야 합니다!!!
      정신 차리고 당신들의 헛소리가 모든 물질에 해를 끼친다는 걸 깨달으세요!!"라는 메시지를 받지
      않았습니다. 참 사랑스러운 분의 긍정적이고 멋진 생각이군요. 지금까지 ANN의 John이 아니었으며,
      내일도 만나지 않겠습니다!`
  },
  {
    id: "a186",
    text:
      `<span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite
      '>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation:
      a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span
      style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span>`,
  },
  {
    id: "a187",
    text: "이것은 뉴스 메시지가 아닙니다 🚬"
  },
  {
    id: "a188",
    text: "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--. (절대 포기하지 않겠다는 노랫말의 모스 부호)"
  },
  {
    id: "a189",
    text:
      `지구는 둥글기 때문에 모든 남자나 여자의 뒤에는 결국 바로 그 남자나 여자가 서서 어깨너머로
      자기 생각을 훔쳐보고 있습니다.`
  },
  {
    id: "a190",
    text: "수치다. 수치다. 수치다. 🔔"
  },
  {
    id: "a191",
    text: "오케이 Google, 빅 크런치"
  },
  {
    id: "a192",
    // This ticker needs to be an unbroken string; using backtick strings and linebreaking will add spaces in the
    // ticker itself where the linebreaks are
    // eslint-disable-next-line max-len
    text: "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"
  },
  {
    id: "a193",
    text:
      `좋은 아침입니다, 시청자 여러분. 저는 Josh이고 오늘 ANN의 진행을 맡았습니다. 오늘 이야기가 나와서
      말인데, 정말 흥미로운 소식이 있다고 하니 바로 시작하겠습니다. 오늘 누군가가 <i>착하게 굴지 않아<i>
      "반물질 폭풍"을 맞았다는데, 그게 무슨 뜻인지는 모르겠군요... 여러분, 이 대본이 맞나요? 전혀 말이
      안 되잖아요. 맞다고요? 알겠습니다... 다음 소식은 "아무것도 창조되지 않고, 아무것도 파괴되지 않는다."
      입니다... 여러분, 진심으로 이거 농담이죠? 이건 뉴스가 아니라 무작위 문장 모음이잖아요! 다들 제
      첫 출근을 도와준다고 해 놓고 신고식이나 시키고 있군요! 저는 이런 <i>근무 환경을 원하지 않았습니다</i>!
      그만두겠습니다!`
  },
  {
    id: "a195",
    text:
      `광대는 반광대라는 것이 따로 존재하지 않고 그저 또 다른 광대일 뿐이라는 점에서 독특합니다.
      광대는 자기 자신의 반대입니다.`
  },
  {
    id: "a196",
    text: "디스코 타임! (클릭하세요!)",
    onClick() {
      let random = Math.random();
      // Golden ratio
      random += 0.618033988749895;
      random %= 1;
      random *= 255;
      const color = `hsl(${random}, 90%, 60%)`;
      return `<span style='color: ${color}; text-shadow: 0 0 0.5rem ${color};
        animation: a-text-grow 0.4s infinite;'>디스코 타임!</span>`;
    },
  },
  {
    id: "a197",
    text: "R 키를 반 번 눌러 현실에 도달하려면 먼저 평행 차원부터 이야기해야 합니다."
  },
  {
    id: "a198",
    text:
      `안녕하세요! 화면에 먼지 한 점이 있다는 것만 알려 드릴게요. 닦아 주시겠어요?
      깨끗하지 않으면 신경 쓰이거든요. 정말 고마워요!`
  },
  {
    id: "a199",
    text: "진짜 업데이트는 그동안 사귄 친구들이었습니다."
  },
  {
    id: "a200",
    text:
      `이전 메시지는 다른 메시지와 중복되는 것으로 밝혀져 삭제되었습니다.
      불편을 드려 죄송합니다.`
  },
  {
    id: "a201",
    text: "아니, 잠깐, 멈춰요. 뉴스 티커 숨기기 버튼을 누르지 마세요!"
  },
  {
    id: "a202",
    text:
      `정말 슬프군요. Alexa, 슬픈 노래를 틀어 줘. 지금 정신 건강이 좋지 않아 이런 음악을 들으며 스스로를
      더 나쁘게 느끼고 있으니 그 감정적 분위기에 공감할 수 있도록 말이야. 건강하지 않은 행동이라는 건
      알지만 너는 지각 있는 사고를 할 수 없는 로봇이라 내 자기 파괴적 행동에 일조하지 않겠다는 선택도
      할 수 없고, 어차피 슬픈 노래를 틀어 주겠지.
      <i>"Luis Fonsi"의 "Despacito"를 재생합니다.</i>`
  },
  {
    id: "a203",
    text:
      `뉴스 메시지의 3/4은 가짜이며 원작자의 허락도 받지 않고 출처도 밝히지 않은 채 Discord 서버에서
      가져온 것입니다 - 익명의 Discord 서버 구성원`
  },
  {
    id: "a204",
    text: "어떤 차(tea)가 삼키기 힘들까요? 현실차(reali-tea)입니다."
  },
  {
    id: "a205",
    text: "Simpleflips에게 찬사를 보냅니다."
  },
  {
    id: "a206",
    text:
      `친근하게 대화를 나누려고 게임의 Discord 서버를 방문했습니다. 그러다 Cubic Frog라는
      사용자에게 낚였습니다.`
  },
  {
    id: "a207",
    text:
      `안녕하세요, Josh가 여러분의 은하에 오늘의 일기예보를 전해 드립니다. 오늘 기온은 e10 초반까지
      오르겠으며, 오후에는 구름이 끼고 반물질이 내릴 가능성이 있습니다.`
  },
  {
    id: "a208",
    text:
      `안녕하세요, 저는 Steve이고 저도 Steve입니다. 우리의 가장 큰 책임은 반물질 공동체에 봉사하는 것입니다.
      우리는 ANN 뉴스가 만들어 내는 방대한 양의 편향된 저널리즘을 대단히 자랑스럽게 생각합니다. 하지만
      반물질 우주를 괴롭히는 책임감 있고 양쪽 입장을 다루는 뉴스의 불길한 유행을 걱정하고 있습니다.
      편견 없고 진실한 뉴스가 소셜 미디어에서 공유되는 일이 너무 흔해졌습니다. 더 우려스러운 점은 일부
      언론사가 정부의 논점을 먼저 확인하지도 않고 단순한 선전이 아닌 똑같은 진실을 보도한다는 것입니다.
      불행히도 일부 언론인은 자신의 플랫폼을 이용해 논리적으로 타당한 의견과 편견 없는 의제를 밀어붙이며
      '반물질이 정확히 무엇을 생각하는지'를 다양화합니다. 이는 우리 독재 체제에 극도로 위험합니다. ANN에서
      거짓말을 추적하고 보도하는 것은 우리의 책임입니다. 우리는 거짓말이 정치적으로 '좌파도 우파도' 아님을
      알고 있습니다. 공포를 조장하는 중상모략에 대한 헌신은 그 어느 때보다 우리 신뢰도의 토대입니다.
      하지만 우리는 육체가 없는 반물질 8D 존재이기에 때로는 선전 기술이 기대에 못 미칠 수도 있습니다.
      보도가 공정하다고 생각한다면 ivark.github.io로 이동하고 옵션 탭을 연 뒤 [완전 초기화]를 클릭해
      연락해 주세요. 여러분의 의견을 소중히 여깁니다. 답변을 받기 전에 완전 초기화 버튼으로 의견을
      삭제하게 될 테니 우리는 답변하지 않을 겁니다. 우리는 거짓을 찾으려고 부단히 노력하며 불공정하고,
      편향되고, 독단적이기 위해 애씁니다... 매 나노초마다 무책임하게 뉴스를 전하는 일을 우리의 명예이자
      특권으로 여깁니다. 시청해 주셔서 감사하며 의견도 감사드립니다. 모든 물질은 반드시-`
  },
  {
    id: "a209",
    text:
      `반작가의 이야기를 들어 본 적 있습니까? 아마 없을 겁니다. 뉴스 티커가 알려 줄 이야기는 아니니까요.
      이것은 Unhevi의 전설입니다. 소문에 따르면 반작가는 5시간마다 놀랍도록 잘 쓴 기사를 뉴스에 기고하고는
      다시 사라진다고 합니다. 어떤 사람들은 그가 전혀 존재하지 않으며 Hevipelle가 선전을 퍼뜨리려고
      꾸며 낸 거짓말이라고 생각합니다. 어쩌면 그는 실재하며 우리와 다를 바 없는 평범한 사람일지도 모릅니다.
      어쨌든 이 수수께끼 같은 시인의 정체는 아마 영원히 알 수 없을 겁니다.`
  },
  {
    id: "a210",
    get text() {
      const clicks = player.news.specialTickerData.uselessNewsClicks;
      const quantity = quantify("회", clicks);
      if (clicks === 1) {
        return `이 글자를 클릭해도 아무 일도 일어나지 않습니다. 그런데도 클릭했습니다.`;
      }
      if (clicks > 1) {
        return `이 글자를 클릭해도 아무 일도 일어나지 않습니다. 그런데도 ${quantity} 클릭했습니다.`;
      }
      return "이 글자를 클릭해도 아무 일도 일어나지 않습니다. 여러분도 그 사실을 이해합니다.";
    },
    onClick() {
      player.news.specialTickerData.uselessNewsClicks++;
      return this.text;
    }
  },
  {
    id: "a211",
    get text() {
      const disses = [
        "그 정도면 사실상 반올림 오차입니다.",
        "그냥 0이나 마찬가지입니다.",
        "어딘가에 지수를 빼먹었나요?",
        "에이, 그건 아무것도 아닙니다."
      ];
      const diss = disses.randomElement();
      return `반물질이 겨우 ${format(Currency.antimatter.value, 2, 0)}이라고요? ${diss}`;
    },
  },
  {
    id: "a212",
    text:
      `거기, 자네. 드디어 깨어났군. 9번째 차원을 얻으려던 참이었지? 우리와 저기 있는 도둑처럼
      곧장 그 무한 속으로 걸어 들어갔잖아.`
  },
  {
    id: "a213",
    text:
    `반물질 기린은 반응 속도가 믿기 어려울 만큼 빠릅니다. 반기린 친화형 컨트롤러가 발명된 뒤
    모든 게임 대회의 90%에서 우승한 이유가 바로 이것입니다.`
  },
  {
    id: "a214",
    text: "버락 오바마반물질"
  },
  {
    id: "a215",
    text:
      `동네 노인이 아이들을 쫓아내려고 잔디밭을 반물질 잔디로 바꿨습니다. 하지만
      물을 주려고 했을 때 살아남은 사람은 없었습니다.`
  },
  {
    id: "am216",
    text: "테스트... 테스트... 테스트... 이런 젠장, 또 운영 환경에 있었네요.",
    isAdvertising: true
  },
  {
    id: "a217",
    text: "찐따 물질 대 상남자 반물질."
  },
  {
    id: "a218",
    text:
      `수많은 재앙적 쌍소멸 사건이 발생한 뒤 반물질은 이제
      ADEA에 의해 규제 물질로 분류됩니다.`
  },
  {
    id: "a219",
    text:
      `안녕하세요, Vsauce의 Michael입니다. 9번째 차원이 존재하지 않는다는 건 모두 알지만, 9는 무엇일까요?
      8 다음의 숫자라는 건 아시죠... 그렇죠? 만약... 그 사이에 숫자가 하나 있다면 어떨까요? 8.5나 8.76
      같은 숫자를 말하는 게 아닙니다. 8과 9 사이의 정수를 말하는 겁니다. 이 모든 이야기가 미친 소리처럼
      들릴 수 있고 실제로도 조금 그렇지만, 우리가 숫자 하나를 빠뜨린 거라면 어떨까요? 우리는 모두 1 다음에
      2가 오고 2 다음에 3이 온다고 배웠습니다. 하지만 8 다음에 오는 숫자가 9가 아니라면요? 수년간의 연구와
      실험 끝에 마침내 그 숫자를 찾아냈습니다. 그것은 위험합니다. 존재를 안다는 것만으로도 정신을
      잠식당합니다. 하지만 다행히 우리는 역격리실을 개발했습니다. 그 숫자가 이곳을 제외한 모든 곳에 있다는
      뜻입니다. 우리 뇌에는 이 숫자에 관한 모든 정보를 특별히 걸러 내는 보호 체계가 있습니다. 덕분에 우리는
      지금까지 살아남았고, 과거 우리와 같은 이들이 멸종한 이유도 바로 이것입니다. 그러나 그 숫자는 점점
      강해지며 서서히 보호 체계를 무너뜨리려 하고 있습니다. 우리는 이 방에 있는 전 세계 기억 조작기를 이용해
      모든 사람이 9는 8 다음에 오고 9는 사악하다고 생각하게 만들면서 그 숫자가 기억에 스며드는 일을
      일시적으로 막았습니다. 하지만 숫자는 계속 강해져 결국 기억 조작기를 압도할 것이므로 영원히 지속되지는
      않습니다. 그래서 여러분이 이곳에 온 겁니다. 여러분은 이곳에서 가장 지적인 사람 중 하나이며, 그 숫자를
      물리치는 여정에 힘을 보태 주기를 바랍니다. 우리의 적은 9가 아닙니다. 8과 9 사이에 숨겨진 숫자,
      사라진 숫자입니다.`
  },
  {
    id: "a220",
    text: "반웁스-"
  },
  {
    id: "a221",
    text: "오류 404: 뉴스 메시지를 찾을 수 없습니다."
  },
  {
    id: "a222",
    text: "당신을 1e3000만큼 사랑합니다."
  },
  {
    id: "a223",
    text: "무한이 5시간 넘게 지속되면 의료 전문가에게 연락하세요.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a224",
    text:
      `이전 뉴스 메시지의 내용이 부정확하다는 보고를 방금 받았습니다. ANN은 해당 보도를 공식적으로
      철회하며 충실한 시청자 여러분께 사과드립니다.`
  },
  {
    id: "a225",
    text: "이것을 본다면 이것을 본 것입니다."
  },
  {
    id: "a226",
    text: "좋은 아침임니다. 오타가 아닙니다. 한국어를 발명한 사람들이 오타를 낸 겁니다."
  },
  {
    id: "a227",
    text: "만약 우리가... 반물질에... 닿는다면? 하하, 농담이에요... 아니라면..?"
  },
  {
    id: "a228",
    text:
      "장미는 파랗고, 제비꽃은 빨갛네. 이 진술들은 동료 평가를 받지 않았고, 내 이름은 Fred라네. 만나서 반가워요!"
  },
  {
    id: "a229",
    text: "🚗                         🚓 🚓"
  },
  {
    id: "a230",
    get text() {
      return `게임을 시작한 뒤 경과한 시간:
        ${TimeSpan.fromMilliseconds(new Decimal(Date.now() - player.records.gameCreatedTime)).toString()}.
        플레이해 주셔서 감사합니다!`;
    },
    dynamic: true
  },
  {
    id: "a231",
    get text() {
      return `하나, 둘, 몇 개 건너뛰고, 99, ${format(Number.MAX_VALUE, 2)}!`;
    }
  },
  {
    id: "a232",
    text: "getNextNewsMessage();"
  },
  {
    id: "a233",
    get text() {
      return `레벨 10짜리 잡범에서 레벨 ${format(Number.MAX_VALUE, 2)}짜리 보스로,
        반물질 차원은 이렇게 돌아갑니다.`;
    }
  },
  {
    id: "a234",
    text: "반물질은 절대로 여러분을 찌르겠다고 협박하지 않습니다. 사실 말도 할 수 없습니다."
  },
  {
    id: "a235",
    text: "피자에 반물질을 올리는 새 조리법이 전통 이탈리아 요리사들의 분노를 일으켰습니다."
  },
  {
    id: "a236",
    text: "후원사의 짧은 광고를 들은 뒤 바로 돌아오겠습니다."
  },
  {
    id: "a237",
    text: "사탕을 교환할래요? 밀키웨이 두 개를 주면 제 빅 크런치를 드릴게요."
  },
  {
    id: "a238",
    get text() {
      return `AD 플레이어: "몇 자릿수쯤 하고 있어요?" 일반인: "지금 한 5나 6 정도인 것 같은데요."
      AD 플레이어: "완전 아기 수준이군요. 이것 좀 보세요: <span style='animation: a-text-crunch
      ${newsAnimSpd(22)}s 1; font-size: 0;'>크 런 치</span>"`;
    },
  },
  {
    id: "a239",
    text: "이런, 시간 좀 보세요! 업데이트까지 이제 5시간밖에 남지 않았습니다!"
  },
  {
    id: "a240",
    text: "안녕하세요, 제 이름은 Max입니다. 사람들이 저를 구매하려는 걸 그만두면 좋겠어요."
  },
  {
    id: "a241",
    text:
      `속보입니다. 정부가 사상 최초의 공식 외계인 접촉을 발표했습니다. 이 외계인들은 고도로 정교한 기술을
      지닌 고양이처럼 보입니다. 우리보다 훨씬 뛰어난 우주여행과 식민 개척 능력을 갖췄으며,
      "블랙코인"이라는 자체 암호화폐까지 보유하고 있습니다.`
  },
  {
    id: "a242",
    text:
      `"아무리 멍청한 인용문이라도 유명인의 말이라고 하면 사람들은 믿는다."
      -Barack Obama`
  },
  {
    id: "a243",
    text: `"숨 쉬기 힘들어요. 손가락을 옮겨 주세요." -M`
  },
  {
    id: "a244",
    text: "신경 쓰지 마세요. 그냥 지나가는 중입니다."
  },
  {
    id: "a245",
    get text() {
      // \uE010 = :blob:
      const BLOB = "\uE010";
      const theme = Theme.current().displayName();
      const reasons = {
        Normal:
          `특유의 우아한 단순함이 있기 때문입니다. 개발자가 의도한 바로 그 모습으로 게임을 보고 있다는
          느낌이 듭니다.`,
        Metro:
          `아름답고 얇은 테두리, 픽셀 단위로 완벽한 날카로운 기하학적 모서리, 그리고 더없이 훌륭하게
          균형 잡힌 색상 팔레트가 있기 때문입니다.`,
        Dark: "눈이 아주 편하고 색과 형태 모두에 기분 좋은 장난기가 있기 때문입니다.",
        DarkMetro:
          `전문적이면서도 장난스러운 디자인이 완벽하게 어우러지고 색을 살짝 더해 보기만 해도
          마음이 편안해지기 때문입니다.`,
        Inverted:
          `일반적인 어두운 테마에서는 절대 볼 수 없는 초월적으로 아름다운 색 조합을
          보여 주기 때문입니다.`,
        InvertedMetro:
          `대비가 매우 강한 색들이 전문적이고 현대적인 디자인과 충돌하며 아주 엄격한 분위기를
          풍기기 때문입니다.`,
        AMOLED: "밝은 테마보다 에너지를 10% 더 절약하기 때문입니다. 모두 에너지 절약을 좋아하지 않나요?",
        AMOLEDMetro:
          `SF 우주선의 조종석을 닮은 멋진 모습이기 때문입니다. ...아쉽지만 실제로 우주선을
          조종할 수는 없습니다.`,
        S1: "진정한 연말 분위기를 느끼게 해 주기 때문입니다. 공기 중의 마법이 느껴져요!",
        S2: "핀란드인이라는 사실과 우리 민족이 이룬 모든 것을 기념한다는 사실이 자랑스러워지기 때문입니다.",
        S3: "끊임없이 변하면서도 늘 어딘가 어긋나 있다는 점에서 삶을 아름답게 비유하기 때문입니다.",
        S4:
          `거의 완전히 실용성이 없을 정도로 근사하게 혼란스러운 디자인이기 때문입니다.
          그리고 거기에는 나름의 아름다움이 있습니다.`,
        S5:
          `그 남자의 모습이 대중문화 전체에 스며들어 있기 때문입니다. 그의 사진을 크게 확대해
          배경에 두는 것도 꽤 재미있습니다.`,
        S6:
          `아름답게 움직이는 배경이 시선을 사로잡고, 섬세한 분위기와 색이 마음을 끌어당겨
          게임에 완전히 몰입하게 하기 때문입니다.`,
        S7: "어린 시절부터 그 배경에 대한 좋은 추억을 간직하고 있기 때문입니다.",
        S8: "사무실에서 몰래 조금씩 플레이하기가 훨씬 쉬워지기 때문입니다.",
        S9: "ㅋㅋ 이건 게임에서 절대 볼 수도 없잖아요",
        S10:
          `깔끔하고 편안해서 매력적인 디자인과 복잡하면서도 마음을 사로잡는 배경이 있기 때문입니다.
          미래형 성간 우주선의 조타석에 서 있는 기분을 줍니다.`,
        S11:
          `블롭은 반물질 차원 공식 Discord 서버의 상징적인 캐릭터이기 때문입니다. 사랑스러운 방식으로 감정을
          표현할 때 널리 쓰입니다. 블롭이 진화하고 있다는 것은 사실입니다. ${BLOB}: 언제나 감정을 더
          풍부하게 표현하려 합니다. 그러다 어느 날 서버에서 더 많은 감정을 표현할 새로운 블롭이 태어납니다:
          ${BLOB}. 보통 블롭 ${BLOB}의 일상은 통통 튀어 다니다가 가끔 합쳐지고 나뉘는 것입니다.
          어디에서 왔고 어디로 갈지는 ${BLOB}만이 압니다. 그 정체도 ${BLOB}입니다. 그래도 내 곁에는 언제나 ${BLOB} 블롭이 있습니다.
          여러분의 사랑을 받는 블롭 ${BLOB}도 여러분을 사랑합니다.`,
        S12:
          `마치 집에 있는 것처럼 따뜻하고 편안하게 해 주기 때문입니다. 하지만 최상의 사용자 경험을 위해
          테마를 최신 테마로 업데이트하는 것을 강력히 권장합니다.`,
      };
      const reason = reasons[Theme.current().name.replace(/\s/gu, "")];
      return `아, ${theme} 테마를 쓰는 동지군요. 흠잡을 데 없는 안목을 지녔군요.
        저도 ${theme} 테마를 좋아합니다. 그 이유는 ${reason}`;
    },
    dynamic: true
  },
  {
    id: "a246",
    text: "<span style='animation: a-fade-out 3s infinite'>우우우우우우우, 나야, 악명 높은 뉴스 유령!</span>",
  },
  (function() {
    let isFlipped = false;
    const normal =
      `이 뉴스 메시지는 "뉴스 2.0"의 시험판입니다. 뉴스 2.0에는 뉴스 메시지를 클릭해
      거꾸로 뒤집는 기능 같은 것이 들어갑니다!`;
    const flipped =
      `¡uʍop ǝpᴉsdn ɯǝɥʇ dᴉlɟ oʇ sǝƃɐssǝɯ sʍǝu uo ʞɔᴉlɔ oʇ ʎʇᴉlᴉqɐ ǝɥʇ ǝʞᴉl sƃuᴉɥʇ ǝɹnʇɐǝɟ llᴉʍ 0˙ᄅ
      sʍǝN ˙,,0˙ᄅ sʍǝN,, ɟo ʇsǝʇ ɐ sᴉ ǝƃɐssǝɯ sʍǝu sᴉɥ┴`;
    return {
      id: "a247",
      get text() {
        return isFlipped ? flipped : normal;
      },
      reset() {
        isFlipped = false;
      },
      onClick() {
        isFlipped = !isFlipped;
        return this.text;
      }
    };
  }()),
  {
    id: "a248",
    text:
      `솔직히 말해 뉴스 티커를 이해하려면 IQ가 아주 높아야 합니다. 유머가 극도로 미묘해서 양자 물리학을
      확실히 이해하지 못한 평범한 플레이어는 농담 대부분을 알아듣지 못할 겁니다.`
  },
  {
    id: "a249",
    text: "이 여성은 이상한 방법 1개로 차원 가속을 엄청나게 얻었습니다! 은하들이 그녀를 싫어합니다!",
    isAdvertising: true
  },
  {
    id: "a250",
    get text() {
      let scene = "";
      const chasers = [
        ["🐖", "🐢", "🦆", "🐓", "🐜", "🐕", "🐈"],
        ["🚶‍", "🏃‍️", "🏇", "🚴‍"],
        ["🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚐", "🚎", "🚑", "🚒", "🚚", "🚛", "🚜"],
        ["🚁", "🛸"]
      ];
      for (const set of chasers) {
        const chaser = set.randomElement();
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.5 || !scene.includes(chaser)) scene += chaser;
        }
        scene += "&nbsp;&nbsp;&nbsp;";
      }
      return scene;
    }
  },
  {
    id: "a251",
    text:
      `이봐요! 미래의 당신인 나예요! 경고하려고 돌아왔습니다. 다음 뉴스 티커를 아주 주의 깊게 보세요.
      내 시간선에서는 무시했고, 그 뒤로 인류는 줄곧 후회했습니다.`
  },
  {
    id: "a252",
    get text() {
      return `<span style='animation: a-text-stretch ${newsAnimSpd(35)}s 1 forwards'>이 메시지는 팽창했습니다.</span>`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a253",
    text:
      `시청자 여러분의 불만이 폭증한 끝에 집에서 직접 메시지를 작성할 수 있게 하기로 했습니다.
      여기서 한번 써 보세요: <input style='border: none; outline: none; font-family: Typewriter;
      font-weight: bold; font-size: 1.5rem'></input>. 쓰지 않아도 괜찮습니다.`
  },
  {
    id: "a254",
    text:
      `익명의 반물질 차원 모임은 12단계 프로그램이 실패해 문을 닫았습니다.
      사람들이 8단계까지만 간 뒤 재설정해 버렸기 때문입니다.`
  },
  {
    id: "a255",
    get text() {
      return `브러 효과음 #${format(Number.MAX_VALUE, 2)}.`;
    }
  },
  {
    id: "a256",
    text: "9번째 차원이 존재하지 않는 이유는 7번째 차원이 8어 버렸기 때문입니다."
  },
  {
    id: "a257",
    text:
      `현실의 구조에 생긴 삼각형 구멍 때문에 일부 글자가 더 이상 존재하지 않게 됐습니다.
      사라진 글자는 j, k, q, u, x, z입니다.`
  },
  {
    id: "a258",
    text:
      `세계를 탐험하기에는 너무 늦게 태어났고, 우주를 탐험하기에는 너무 일찍 태어났습니다. 하지만
      다음 빅 크런치를 위해 몇 시간 동안 노가다하기에는 딱 맞는 때에 태어났습니다.`
  },
  {
    id: "a259",
    text:
      `잠깐만요. 무슨 생각인지 압니다. "M 키를 누른 건 누른 거지, 반 번만 눌렀다고 할 수는 없잖아!" 하지만
      TJ "Slabdrill" Yoshi, 제 말을 들어 보세요. M 키 입력에는 사실 세 부분이 있습니다. M을 누르는 순간,
      M을 누른 채 유지하는 동안, 그리고 M에서 손을 떼는 순간입니다. 보통 유용하고 중요한 부분은 누르는
      순간뿐입니다. 하지만 때로는 유지하는 부분만으로도 충분하며, 이때도 차원과 틱스피드 업그레이드를
      구매합니다. 손을 떼는 부분은 현재 유용하거나 중요한 경우가 없으니 신경 쓰지 않아도 됩니다.
      도전 2에 필요한 입력을 도식으로 나타내면 /¯\\처럼 보입니다. 첫 번째 은하에 도달하려면 M을 유지(¯)하고,
      도전을 끝내려면 M을 누른 뒤(/), 다른 도전을 시작하려고 다시 M을 눌러야 합니다. 그렇다면 총 몇 번
      누른 걸까요? 세 번처럼 보입니다. 이 영원만 따로 본다면 실제로 세 번이 맞습니다. 하지만 전체 게임의
      M 버튼 도전에서는 첫 번째 무한에 필요한 M 입력처럼 더 앞서 발생한 다른 M 입력도 있습니다. 그 입력까지
      고려하면 M을 몇 번 눌러야 할까요? 단순한 답은 네 번입니다. 도전에 진입할 때 한 번, 앞에서 확인한 도전
      내부의 세 번이죠. 하지만 더 잘할 수 있습니다. 첫 M 입력을 계속 유지해 M 키 반 번 입력에 이용하면 실제로
      세 번 만에 할 수 있습니다. 반 번 입력에는 M을 실제로 새로 누를 필요 없이 유지하기만 하면 되기 때문입니다.
      이런 방식이라면 도전 2에서 추가되는 M 입력은 두 번뿐입니다. 첫 M 입력은 이전 M 입력에 얹혀 가니까요.
      이 현상을 나타내기 위해 이를 M 키 2.5회 입력이라고 부릅니다. 영원 하나만 보면 세 번으로 올림하지만
      전체 게임 진행에서는 두 번으로 내림합니다. 결론적으로 첫 M 입력은 어떤 맥락에서는 횟수에 포함되지만
      다른 맥락에서는 추가 입력이 전혀 없으므로 이를 "M 키 반 번 입력"이라고 부릅니다.`
  },
  {
    id: "a260",
    text:
      `복제자들은 무언가를 할 때 철저히 분할 정복 방식을 쓰는 것 같습니다.
      이 속도라면 모든 것을 그렇게 하겠군요.`,
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a261",
    text:
      `반물질 차원은 사실 로그라이트 게임입니다! 죽으면 사후 세계에서 시간 차원 대신 공간 차원을 얻는 것과
      같은 대체 기능을 해금합니다. 자신의 반물질 복제체를 비롯해 플레이할 새 캐릭터까지 해금할 수 있습니다!`
  },
  {
    id: "a262",
    text: "분위기 검사. 🏃‍♀️🏏"
  },
  {
    id: "a263",
    text: "보석은 어디에 쓰나요? 보석은 보관함에 씁니다. 무엇을 보관하냐고요? 좋은 질문입니다."
  },
  {
    id: "a264",
    text: "새로운 프레스티지 단계, 출산이 발표됐습니다. 아기를 낳을 준비를 하세요!"
  },
  {
    id: "a265",
    text: "추가 차원을 건설해야 합니다."
  },
  {
    id: "a266",
    text: "안녕하세요, 오늘 하루는 어떻게 보내고 계신가요?"
  },
  {
    id: "a267",
    text:
      `저는 개미 농장이 있고, 개미들을 세계에서 가장 작은 축구팀으로 만들고 싶습니다. Diana 이모가 돕고
      싶어 해서 가족 모두를 모아 시즌 계획을 세웠습니다. "이 개미 팀을 어떻게 중요하게 만들 수 있을까?"
      Di가 말합니다.`
  },
  {
    id: "a268",
    text: "👨‍💻개발져스, 컴파일!👩‍💻"
  },
  {
    id: "a269",
    text:
      `Dimenton에 교통 체증이 발생했습니다. 이 지역을 지나갈 계획이라면 일찍 출발하세요. 현장 영상을
      보시죠: 🚗🚕🚛🚙🚗🚚🚕🚕🚌🚛🚚🚙🚒🚛🚗🚙🚓🚗🚚🚛🚒🚌🚐🚚🚐🚛🚚🚓 네, Dale,
      상황이 꽤 나빠 보입니다. 물과 간식도 꼭 챙기세요.`
  },
  {
    id: "a270",
    text:
      `은하 뉴스 작가 협회가 대규모 표절을 이유로 소규모 웹 게임 "반물질 차원"의 개발자들을 상대로
      집단 소송을 제기했습니다.`
  },
  {
    id: "a271",
    text:
      `<i style='border: 0.1rem solid black; border-radius: 50%; padding: 0.4rem; color: #2196F3; background: white;
      cursor: pointer;' class='fas fa-volume-up' onClick='(function(){new Audio("audio/news.mp3").play();})();'>
      </i> 이 뉴스 메시지는 "뉴스 2.0"의 시험판입니다. 뉴스 2.0에는 모든 뉴스 메시지를 음성으로
      들을 수 있는 기능 같은 것이 들어갑니다!`
  },
  {
    id: "a272",
    text: "벽돌 1파운드와 반물질 1파운드 중 어느 쪽이 더 Hevi할까요?"
  },
  {
    id: "a273",
    text: "이 뉴스 메시지에는 오타가 하나도 없습니다. 오타가 보인다면 여러분 뇌에 오타가 있는 겁니디."
  },
  {
    id: "a274",
    text:
      `수많은 수학자가 술집에 들어옵니다. 각자 앞사람보다 맥주를 10배 많이 주문합니다.
      바텐더가 말합니다. "이런, 주문 규모가 한 자릿수씩 커지는군요!"`
  },
  {
    id: "a275",
    text: "Letter Go Down Idle은 단 26초 만에 끝나는 역사상 가장 짧은 방치형 게임입니다."
  },
  {
    id: "a276",
    get text() { return `재미있는 사실: 뉴스 메시지는 현재 ${GameDatabase.news.length}개이며 계속 늘어납니다!`; }
  },
  {
    id: "a277",
    text:
      `당신 안에는 늑대 두 마리가 있습니다. 하나는 물질로 이루어졌고 다른 하나는
      반물질로 이루어졌습니다. 당신은 폭발하고 있습니다.`
  },
  {
    id: "a278",
    text:
      `정말 중요한 무언가를 잊었다는 사실을 친절하게 알려 드리는 메시지입니다. 그게 뭔지는 모르지만
      분명 무언가가 있습니다.`
  },
  {
    id: "a279",
    get text() {
      return `곧 모든 훌륭한 판매점에 출시됩니다 - 반물질 차원: 보드게임! PC나 휴대전화 없이도 거대한 숫자가
      커지는 짜릿함을 즐기세요. 혼합형 공학용 계산기, 반물질 카운터 ${format(Number.MAX_VALUE, 2)}개,
      고품질 플라스틱 최대 구매 버튼, 여러분이 알고 사랑하는 온갖 무관한 밈이 담긴 뉴스 메시지 카드
      천 장 이상을 비롯해 필요한 모든 것이 완벽하게 들어 있습니다! 마침내 AD를 원래 의도된 방식으로
      즐길 수 있습니다. AD: 보드게임은 여행용 크기로도 나와 이동 중에도 로그 성장을 계산하는 즐거움을
      맛볼 수 있습니다! 오늘 당장 AD: 보드게임을 구매하세요! 경고: 실제 물질의 흔적이 들어 있을 수
      있습니다. 복제자는 별매입니다. 9번째 차원은 포함되지 않습니다.`;
    },
    isAdvertising: true
  },
  {
    id: "a280",
    text: "난 반물질이 싫어. 거칠고, 까칠하고, 짜증 나는 데다 어디든 들어가니까."
  },
  {
    id: "a281",
    text: "반물질을 만드는 게 아니라 사실 물질을 잃고 있는 것이라면 어떨까요?"
  },
  {
    id: "a282",
    text:
      `9번째 차원이 목격됐다는 보고가 있었지만, 이후 호주에서 온 6번째 차원일 뿐이라는
      사실이 밝혀졌습니다.`
  },
  {
    id: "a283",
    text:
      `8번째 차원에서 더 높은 차원으로 전환하려고 하면 이상한 현상이 일어납니다. 더 높은 차원이 없으므로
      우주가 믿을 수 없는 속도로 여러분을 8번째 차원에 되던집니다. 차원 가속으로 알려진 이 기술은
      곳곳의 우주선 조종사와 반물질 애호가들이 사용합니다.`
  },
  {
    id: "a284",
    text: "여러분 근처의 춥고 옷을 완전히 갖춰 입은 커플들!"
  },
  {
    id: "a285",
    text:
      `이제 의식해서 숨을 쉬고 있습니다. 입안에는 혀를 편안하게 둘 곳이 없다는 사실도 깨달았습니다.
      이제 턱도 의식해서 들고 있습니다. 몇 초 동안 눈을 깜박이지 않았습니다. 언제나 코의 일부가
      시야에 보입니다.`
  },
  {
    id: "a286",
    text: "차가운 음식을 안으로 넣고 뜨거운 음식을 밖으로 먹는데 왜 오븐이라고 부르는 걸까요?"
  },
  {
    id: "a287",
    text:
      `속편병이 심해진 나머지 이제 일부 스튜디오는 원작보다 속편을 먼저 제작합니다. 긴 시리즈의 팬들은
      숫자가 거꾸로 줄어 마침내 처음에 무슨 일이 있었는지 알 수 있게 되기를 기다립니다.`
  },
  {
    id: "a288",
    get text() {
      const position = player.news.specialTickerData.newsQueuePosition--;
      if (position > 1) {
        return `고객 지원에 문의해 주셔서 감사합니다. 고객 만족은 저희에게 매우 중요하며 곧 상담원이
          연결됩니다. 현재 대기열 ${position}번째입니다. 기다려 주셔서 감사하며 그동안 엄선한 고품질
          뉴스 메시지를 즐겨 주세요.`;
      }
      return "고객 지원에 문의해 주셔서 감사합니다. 상담원 Jane입니다. 무엇을 도와드릴까요?";
    }
  },
  {
    id: "a289",
    text: "뉴스 티커를 분해해 극소량의 클립을 얻으려면 여기를 클릭하세요.",
    onClick() {
      player.news.specialTickerData.paperclips++;
      GameOptions.toggleNews();
    }
  },
  {
    id: "a290",
    get text() {
      const paperclips = player.news.specialTickerData.paperclips;
      return `이 뉴스는 평범한 뉴스가 아닙니다. 제1 뉴스 차원이 생산하고 있습니다. 더 많은 뉴스를
        해금하려면 클립을 충분히 모아 제2 뉴스 차원을 건설해야 합니다.
        현재 클립 보유량: ${quantifyInt("클립", paperclips)}. 구매하려면
        ${formatInt(paperclips + 10)}개가 필요합니다.`;
    }
  },
  {
    id: "a291",
    text: "Hevipelle의 국적을 생각하면 절대 끝낼 수 없는(Finnish) 게임을 만들었다는 점은 조금 역설적입니다."
  },
  {
    id: "a292",
    text:
      `요정은 실재하지 않습니다. 반요정도 실재하지 않습니다. 두 집단이 접촉한 지난주부터 이렇게 됐습니다.
      놀랍지 않게도 그들이 살던 행성도 이제 실재하지 않습니다.`
  },
  {
    id: "a293",
    text:
      `<span style='font-family: "Comic Sans MS", cursive, sans-serif; font-size: 1.7rem;'
      >안녕, 동료 뉴스 메시지들! 🛹</span>`
  },
  {
    id: "a294",
    text: "뉴스 메시지를 봤다가 나중에 다시 보면 올드스 메시지가 되는 걸까요?"
  },
  {
    id: "a295",
    text: "👁"
  },
  (function() {
    let wasClicked = false;
    const normal = "이 뉴스 메시지를 클릭하면 게임을 완전히 초기화합니다.";
    const clicked = "정말 미쳤군요. 좋아요, 여기 클립 하나 받으세요.";
    return {
      id: "a296",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "a297",
    text: "나는 생각하지 않는다. 고로 존재하지 않는다."
  },
  {
    id: "a298",
    text: "문장을 거꾸로 말하면 거꾸로 된 문장이 얼마나 이상한지 말하게 되는 게 이상하지 않나요?"
  },
  {
    id: "a299",
    get text() {
      return `새로운 반물질 차원 퍼즐 세트를 지금 구매하세요! 총 ${format(Number.MAX_VALUE, 2)}조각으로
        구성된 이 퍼즐은 가족과 뜻깊은 시간을 보내기에 완벽합니다!`;
    },
    isAdvertising: true
  },
  {
    id: "a300",
    text:
      `A.N.N 이사회는 뉴스 티커를 배너 광고로 교체해야 한다고 생각합니다. 너무 늦기 전에 막을 수 있도록
      change.org 청원에 서명해 주세요!`
  },
  {
    id: "a301",
    text: "다음 한 시간은 업데이트 0.2개 뒤입니다."
  },
  {
    id: "a302",
    text: "반물질 라이트를 소개합니다! 제로 칼로리... 훌륭한 크런치는 그대로.",
    isAdvertising: true
  },
  {
    id: "a303",
    text: "장미는 빨갛고, 제비꽃은 파랗고, 깃발은 승리이며, 바바는 당신입니다."
  },
  {
    id: "a304",
    text: "안녕하세요, 오늘 하루는 어떤가요? 좋기를 바랍니다. 그렇지 않다면 AD가 조금이라도 낫게 해 줬기를 바랍니다!"
  },
  {
    id: "a305",
    text: "오늘의 일기예보를 전해 드립니다. 날씨가 있을 확률은 100%입니다."
  },
  {
    id: "a306",
    text: "수정 뉴스: 다시 망가뜨리지 말아 주세요."
  },
  {
    id: "a307",
    text:
      `클립 최대화 장치는 스웨덴 철학자 Nick Bostrom이 2003년에 설명한 사고실험입니다. 이는 범용 인공지능이
      겉보기에 무해한 목표를 추구하도록 프로그래밍되더라도 인간에게 가할 수 있는 실존적 위험과 인공지능
      설계에 기계 윤리를 통합해야 할 필요성을 보여 줍니다. 이 시나리오는 클립 제조 임무를 받은 고급
      인공지능을 다룹니다. 그런 기계가 인간의 생명을 중시하거나 제한된 시간에 지정된 자원만 사용하도록
      프로그래밍되지 않았다면, 충분한 힘을 얻었을 때 최적화된 목표에 따라 인간을 포함한 우주의 모든 물질을
      클립이나 클립을 만드는 기계로 바꾸려 할 것입니다.`
  },
  {
    id: "a308",
    get text() {
      const nameList = [
        "Antinology",
        "Infinifection",
        "Eternal Light",
        "Galaxia",
        "Duplicanti",
        "Dimensional Explorer",
        "Techyon",
        "Realistic",
        "Celestar",
        "ERCGDM",
        "NRG+",
        "Looty Box",
        "Symbolic",
        "Minisofa",
        "IDEAL",
        "Appange",
        "Goggles",
        "Interval",
        "Newstar",
        "HeavyPellet",
        "Marsa",
        "Zoology",
        "Photoric",
        "Jacfoz",
        "Orism",
        "EDIK",
        "Fision",
        "Gamma",
        "Fractiled",
        "Imnesia",
        "Fermic",
        "The Automizers"
      ];
      const names = [];
      while (names.length < 3) {
        const name = nameList.randomElement();
        if (!names.includes(name)) names[names.length] = name;
      }
      const prices = [
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100
      ];
      for (let i = 0; i < 3; i++) {
        const price = prices[i];
        if (price === 0) prices[i] = `<span style="color: blue">0.00 ◄►</span>`;
        else if (Math.random() > 0.5) prices[i] = `<span style="color: green">+${price} ▲</span>`;
        else prices[i] = `<span style="color: red">-${price} ▼</span>`;
      }
      return `${names[0]} ${prices[0]}&nbsp;&nbsp;&nbsp;
        ${names[1]} ${prices[1]}&nbsp;&nbsp;&nbsp;
        ${names[2]} ${prices[2]}&nbsp;&nbsp;&nbsp;`;
    }
  },
  {
    id: "a309",
    text:
      `매일의 하늘 색 예보입니다. 월요일: <span style="color: turquoise">청록색</span>
      화요일: <span style="color: #d2c6ba">회갈색</span>
      수요일: <span style="animation: a-game-header__antimatter--glow 3s infinite">블러플</span>
      목요일: <span style="color: turquoise">청록색</span>/<span style="color: #d2c6ba">회갈색</span>
      금요일: <span style="color: #222">석탄 가루</span> 토요일: <span style="color: #222">석탄 가루</span>,
      늦은 오후에는 <span style="color: indigo">남색</span>이 나타날 가능성이 있습니다.
      일요일: <span style="color: white; animation: a-existence-glow 3s infinite">공허</span>`,
  },
  {
    id: "a310",
    text:
      `반물질 차원 자동 고객 지원 전화에 연결됐습니다. 게임에서 버그가 발생한다면 앱을 닫았다가 다시
      실행해 보세요. 해결되지 않으면 웹 버전은 1번, 모바일 버전은 2번을 누르세요. 조언이 필요하면 3번,
      모두 최대 구매하려면 m, 개발자를 후원하려면 4번, FAQ를 보려면 5번, 손상된 저장 파일을 고치려면 6번,
      Discord 서버 초대를 받으려면 7번, 변경 기록을 보려면 8번을 누르세요. 다시 들으려면 9번을 누르세요.`
  },
  {
    id: "a311",
    text:
      `이 메시지의 저작권은 The Walt Disney Company에 있습니다. 이 메시지를 보는 즉시
      계정에 $9.99가 청구됩니다.`
  },
  {
    id: "a312",
    text:
      `시작하기 전에 오늘 영상은 반물질 차원™의 후원을 받았습니다! 다운로드 수가 100,000회를 넘었고
      모바일 게임이 제게 해 줄 수 있는 일을 완전히 새롭게 정의했습니다. 훌륭한 메커니즘, 5개의 프레스티지
      단계, 독특하고 독창적인 도전, 깊이 있는 스킬 트리, 제가 본 것 중 가장 큰 숫자가 있습니다. 진심으로,
      한번 보세요. 가장 좋은 점은 무료라는 것입니다! 맞습니다. 무료입니다. 설명란의 링크를 이용하면
      반물질 10셉틸리언을 갖고 게임을 시작합니다. 맞습니다, 10셉틸리언입니다. 뭘 기다리고 있나요?
      설명란의 링크를 클릭하고 오늘 바로 반물질 차원™을 플레이하세요!`
  },
  {
    id: "a313",
    text:
      `"...그리고 레벨 9,000에 도달하면 승천할 수 있어. 왜 그러고 싶은지는 잘 모르겠어. 힘들게 모은 경험치를
      전부 초기화하고 작은 강화 효과 몇 개를 받는 것뿐이거든. 이런 메커니즘은 절대 유행하지 않을 거야."
      - 2012년경의 어떤 사람`
  },
  {
    id: "a314",
    get text() {
      const lawID = Math.floor(Math.random * 8901) + 100;
      return `경고: AI "duskscarf"가 작성하고 "거대 우주 토끼 법안"이라고도 불리는 법률 ${lawID}-B가
        여러분의 은하 지역에서 시행됩니다. 이 법률 및 규정 목록은 야생 우주 토끼의 불법 포획, 길들인
        우주 토끼의 진정, 그리고 duskscarf가 직접 예외를 허가하지 않은 "행성 방목" 관련 추가 과학 연구
        등을 금지합니다. 이제 눈꺼풀에 새겨진 예외 목록을 확인할 수 있습니다. 또한 거대 우주 토끼의
        유전자 변형은 크기 변경(더 크게 만들기)과 잠복생명 과장이라는 매우 구체적인 분야로 제한됩니다.
        군사적 용도 외의 다른 유전자 변형은 허용되지 않습니다. 협조해 주셔서 감사합니다. 메시지를 다시
        재생합- 경고: 법률 ${lawID}-`;
    }
  },
  {
    id: "a315",
    text:
      `게임 개발자들이 새로운 "Truest Blind" 표기법을 출시한다고 발표했습니다. UI를 제거해 더욱
      간결한 사용자 경험을 제공할 예정이라고 합니다.`
  },
  {
    id: "a316",
    text: "어떤 이들은 이 세상의 추함과 혼란을 봅니다. 나는 숫자를 보기로 했습니다."
  },
  {
    id: "a317",
    get text() {
      return `${format(Number.MAX_VALUE, 2, 0)}이라고요? 제 눈에는 아무것도 아닌 것 같군요.`;
    }
  },
  {
    id: "a318",
    text:
      `의식은 존재하지 않으므로 우리는 의식을 정의할 수 없습니다. 인간은 자신이 세상을 인식하는 방식에
      특별한 무언가가 있다고 생각합니다. 하지만 봇처럼 엄격하게 공략을 따르고, 자신의 선택에는 거의 의문을
      품지 않으며, 대부분은 다음에 무엇을 할지 지시받는 데 만족합니다.`
  },
  {
    id: "a319",
    text: "받을 자격이 없는 칭찬은 무시해 주세요."
  },
  {
    id: "a320",
    text: "aphone 10을 소개합니다. 세계 최초로 물에 완전히 녹는 모바일 기기입니다!",
    isAdvertising: true
  },
  {
    id: "a321",
    text:
      `PC 앞에 혼자 있으면 힘들겠군요. 하지만 걱정하지 마세요. 우리가 아직 이곳에서
      여러분의 일거수일투족을 듣고 지켜보고 있습니다.`
  },
  {
    id: "a322",
    text:
      `Hevipelle가 네덜란드 저택에서 포커로 물질을 거는 반물질 차원 스핀오프를 발표했습니다.
      제목은 "Ante matter d'mansions"입니다.`
  },
  {
    id: "a323",
    text: `var i = "Omae wa mou shindeiru" console.log(i - 1 + "i?") NaNi? (“넌 이미 죽어 있다.”를 변수에 넣어 복소수 i와 “뭐라고?”를 엮은 북두의 권 코드 밈입니다.)`
  },
  {
    id: "a324",
    text:
      `뉴스 메시지 아이디어가 있다면 공허를 향해 외치세요.
      게임에 메시지가 들어가지는 않겠지만 재미는 있습니다!`
  },
  {
    id: "a325",
    text:
      `지난달 프리피야트의 반물질 원자로에서 사고가 난 뒤 반물질 원자로의 안전성에 대한 우려가 커지고
      있으며, 많은 사람이 원자력처럼 더 안전한 발전 방식으로 돌아가야 한다고 생각하기 시작했습니다.`
  },
  {
    id: "a326",
    text: "반물질 차원은 오거와 같습니다... 여러 겹으로 되어 있습니다."
  },
  (function() {
    let wasClicked = false;
    const normal = "기기를 다시 시작하려면 여기를 클릭하세요.";
    const clicked = "반물질 차원에 기기 관리자 권한을 부여해 주세요.";
    return {
      id: "a327",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a328",
    text:
      `뉴스 회사가 더 이상 아무나 기사를 제출하지 못하게 하고 자격을 갖춘 작가를
      쓰기로 했습니다. 폭동이 일어났습니다.`
  },
  {
    id: "a329",
    text:
      `모스 부호+++를 소개합니다. 미끄러지고, 쌩 지나가고, 휙 날아가고 싶은 모두를 위해
      새로운 문자 20개를 추가한 완전히 새로운 모스 부호입니다!`,
    isAdvertising: true
  },
  {
    id: "a330",
    text: "충분히 원시적인 마법은 기술과 구별할 수 없습니다."
  },
  {
    id: "a331",
    text: "코는 없지만 재채기는 해야 해!"
  },
  {
    id: "a332",
    text: "♪ 최악을 다했는데도 성공했을 때. ♪"
  },
  {
    id: "a333",
    text: `엄청난 인기를 끈 주제곡 "모두 풀어 줘야 해"가 첫 주에 다운로드 500백만 회를 달성했습니다.`
  },
  {
    id: "a334",
    text:
      `완전히 새로운 반성향표를 소개합니다! "질서-혼돈"과 "악-선"처럼 획기적인 새 조합이 들어 있습니다!
      게다가 눈부신 세 번째 축 '재즈스러움'까지~ 믿을 수 없이 저렴한 $-59.99에 지금 당장 자신을
      혼돈-질서-비재즈형으로 규정하세요! 이용 약관이 적용됩니다. 배터리는 포함되지 않습니다.`,
    isAdvertising: true
  },
  {
    id: "a335",
    text:
      `"그 게임"에 새로운 문제가 생기면서 반우주 전역에서 시위가 일어났습니다. 이에 각 정부는 누군가
      그 게임을 알려 주면 패배하는 대신 승리하도록 그 게임의 규칙을 바꿀 수밖에 없었습니다.`
  },
  {
    id: "a336",
    text: `4구역[흔히 '어둠 구역'이라 불림], ϰ 섹터, (01,05)의 주민 여러분께 알립니다. 거주지를
      떠나지 마세요. 반복합니다. 거주지를 떠나지 말고 밖으로 나가지 마세요. Earthology 최고의 기상
      슈퍼컴퓨터들과 수많은 마녀가 내일 '전반적으로 이상한 분위기'가 감돈다고 한결같이 주장하고 있으며,
      솔직히 그것이 무슨 뜻인지 알아보고 싶지 않습니다.`
  },
  {
    id: "a337",
    text:
      `기술 융합은 모든 기술이 하나의 기술로 합쳐진다는 개념입니다. 정보화 시대가 시작된 뒤 흔히 표현된
      생각으로, 스마트폰이나 인터넷 같은 여러 장소와 기기에서 찾아볼 수 있습니다. 반물질 차원은 특히
      미디어 분야의 기술 융합 사례입니다. '신경 쓰지 않기'라는 천재적 발상에 '순전히 운에 맡기기'라는
      혁신적 해결책을 섞어 수준 이하의 게임과 수준 이하의 뉴스 티커를 합칩니다. 그 결과 대부분은
      게임이면서도 가끔 물질 차원 뉴스 티커보다 아주 조금 나은 뉴스 매체 역할을 하는 평범한 경험이
      탄생합니다. 모든 기업이 본받고, 노력하고, 바라건대 실제로 능가해야 할 참으로 위대한 업적입니다.`
  },
  {
    id: "a338",
    text: "숫자 5가 그려진 고대 동굴 벽화가 발견됐습니다. 무언가를 기다리고 있었다는 뜻으로 보입니다."
  },
  (function() {
    let wasClicked = false;
    const normal = "더 읽기";
    const clicked = "더";
    return {
      id: "a339",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a340",
    text:
      `반물질을 꽤 많이 만들고 있군요. 게임 개발자도 감탄했습니다. 이 메시지는 미리 녹화됐으므로 여러분의
      반물질 생산량에 관한 모든 관찰은 저희의 추측일 뿐입니다. 받을 자격이 없는 칭찬은 무시해 주세요.`
  },
  {
    id: "a341",
    text: "게임 공사 중: 모든 메커니즘은 하드캡을 착용해야 합니다."
  },
  {
    id: "a342",
    text: "물론 클립은 쓸모가 있습니다. 종이를 한데 묶을 때 쓰죠. 하지만 요즘 누가 종이를 쓰나요?"
  },
  {
    id: "a343",
    get text() {
      const fakeProgress = Math.pow(player.records.realTimePlayed, 25);
      // Caps in ~68 years of real playtime then turns into "Infinite%"
      return `전역 도전 - 모든 AD 플레이어가 대회용 클립(끝이 사각형인 것으로 구분)을
        ${format(Number.MAX_VALUE, 2)}개 모으면 이벤트 한정 금속 백파이프를 받습니다. 이 백파이프는
        AM/s +2와 함께 틱스피드 업그레이드가 ${format(1e200)}개를 넘을 때 추가 틱스피드를 제공합니다!
        현재 전역 진행도 -
        ${format(fakeProgress)}/${format(Number.MAX_VALUE, 2)}
        (${formatPercents(Math.log10(fakeProgress) / Math.log10(Number.MAX_VALUE), 3)})`;
    }
  },
  {
    id: "a344",
    text:
      `현실의 삶은 수수께끼입니다. 실제로 어떻게 작동하는지는 아무도 모릅니다. 답을 찾지 못한 질문도
      많습니다. 삶의 의미는 무엇일까요? 우리는 모두 시뮬레이션 속에 살고 있을까요? 반대 표는 어떻게
      달성할까요? 존재는 어디서 어떻게 시작됐을까요? 이 모든 질문은 늘 머릿속 한편에 남아 있지만
      그 답은 영원히 알 수 없을지도 모릅니다.`
  },
  {
    id: "a345",
    text: "이곳에는 하이쿠를 표시할 수 없어 일본인들이 항의합니다. 갈등이 일어났습니다."
  },
  {
    id: "a346",
    text:
      `반물질 차원을 Android에서도 이용할 수 있다는 사실을 알고 계셨나요? <a
      href="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions" target="_blank">
      확인하려면 여기를 클릭하세요!<a>`
  },
  {
    id: "a347",
    text:
      `명왕성은 주가 아닙니다. 모두 알다시피 50개 주는 부사, 공기, 아르테미스, 아시아, 대서양, 흥정,
      양순음, 점자, 칸델라, 쉼표, 데이크론, 유제품, 여격, 민첩성, 마법 해제사, 십이면체, 이리,
      진핵생물, 민속, 대피라미드, 할로젠, 화성암, 이탈리아, 캔자스, 킬리만자로, 람다, 레위기, 천칭자리,
      액체, 림프, 중생대, 전자레인지, 뮤온, 북쪽, 노바스코샤, 팔각형, 10월, P = NP, 기제류,
      Polk, 칼륨, 도르래, 오진법, 룩, 토성, Tiana, 호랑이, Varaha, 예일, 노란색입니다.`
  },
  {
    id: "a348",
    text: "<span style='color: red'>[관리자가 뉴스 메시지를 삭제함]<span>"
  },
  {
    id: "a349",
    get text() {
      const chapters = [
        `우리 작가, 화가, 조각가, 건축가와 지금껏 훼손되지 않은 파리의 아름다움을 열렬히 사랑하는 이들은
        알려지지 않은 프랑스적 미감의 이름으로, 위협받는 예술과 프랑스 역사의 이름으로 온 힘과 분노를
        다해 항의하고자 이곳에 왔습니다. 우리 수도의 심장부에 쓸모없고 기괴한 에펠탑을 세우는 일에
        반대합니다. 상식과 정의감으로 이름 높은 대중의 악의는 이미 이를 "바벨탑"이라 불렀습니다.
        국수주의적 도취에 빠지지 않고도 파리가 세계에서 견줄 곳 없는 도시라고 선언할 권리가 있습니다.
        거리와 넓게 뻗은 대로, 장엄한 산책로 위에는 인류가 만든 가장 고귀한 기념물들이 솟아 있습니다.
        걸작을 창조한 프랑스의 영혼은 이 장엄하게 피어난 돌들 사이에서 빛납니다. 예술적 유산을 정당하게
        자랑스러워하는 이탈리아, 독일, 플랑드르에도 우리 것에 견줄 만한 것은 없으며, 파리는 우주 곳곳에서
        호기심과 찬탄을 불러 모읍니다.`,
        `이 모든 것이 모독당하도록 내버려 둘 것인가? 파리시는 바로크 양식과 기계 제작자의 상업적 상상력에
        더 오래 자신을 결부시켜, 돌이킬 수 없이 추해지고 스스로 명예를 더럽힐 것인가? 상업의 나라 미국조차
        원하지 않을 에펠탑은 의심할 여지 없이 파리의 불명예다. 모두가 이를 느끼고 말하며 깊이 슬퍼한다.
        우리는 이처럼 정당하게 경악한 보편적 여론의 미약한 메아리일 뿐이다.`,
        `마침내 외국인들이 우리 박람회를 찾으면 놀라 외칠 것이다. "뭐라고? 프랑스인이 그토록 자랑하던 취향을
        보여 주겠다며 찾아낸 것이 이 흉물인가? 그리고 그들이 우리를 비웃는 것은 당연하다. 숭고한 고딕의 파리,
        Jean Goujon과 Germain Pilon, Puget, Rude, Barye 등의 파리가 M. Eiffel의 파리가 되어 버렸기 때문이다.`,
        `더구나 우리가 무엇을 하는지 깨닫고 싶다면, 거대한 공장 굴뚝처럼 파리를 지배하며 야만적인 덩어리로
        짓누르는 아찔할 만큼 우스꽝스러운 탑을 잠시 상상하는 것으로 충분하다. 노트르담, 생트샤펠, 앵발리드의
        돔, 개선문, 굴욕당한 모든 기념물과 왜소해진 모든 건축물이 이 놀라운 꿈속에서 사라질 것이다. 그리고
        스무 해 동안, 수많은 세기의 천재성으로 여전히 떨리는 도시 전체 위로 볼트로 조인 판금 기둥의 혐오스러운
        그림자가 잉크 얼룩처럼 번지는 모습을 보게 될 것이다...`,
        `파리를 그토록 사랑하고 아름답게 가꾸며 행정의 파괴와 산업 사업의 반달리즘에서 수차례 지켜 온 선생이자
        친애하는 동포인 당신에게, 파리를 다시 한 번 지킬 영예가 달려 있다. 파리의 대의를 변호하는 일은 당신에게
        맡긴다. 아름답고 위대하며 옳은 것을 사랑하는 당신 같은 예술가에게 영감을 주어야 할 모든 열정과 웅변을
        펼치리라 믿는다... 우리의 경고가 들리지 않고 우리의 이유에 귀 기울이지 않으며 파리가 파리를 욕되게
        하겠다는 생각을 고집한다면, 적어도 당신과 우리는 명예로운 항의를 들려주었을 것이다.`
      ];
      const chapter = chapters[player.news.specialTickerData.eiffelTowerChapter];
      player.news.specialTickerData.eiffelTowerChapter = (player.news.specialTickerData.eiffelTowerChapter + 1) % 5;
      return chapter;
    }
  },
  {
    id: "a350",
    text:
      `알렉산더는 눈물을 흘렸다. 아낙사르코스의 대중문화식 양자역학 강연을 보고 정복할 세계가 무한히 많고,
      반란 한 번, 아니 6번쯤이 그의 앞길을 가로막아 그중 단 하나의 군주조차 될 수 없다는 사실을 막
      깨달았기 때문이다.`
  },
  {
    id: "a351",
    text: "안녕하세요. 방금 배송받은 구리의 품질이 형편없어서 항의하러 왔습니다."
  },
  {
    id: "a352",
    get text() {
      return `<span style='opacity: 0; animation: a-disappear ${newsAnimSpd(20)}s 1'>
      이 뉴스 메시지는 항밈적입니다. 곧 이 뉴스가 존재한다는 사실을 잊게 될 것입니다.</span>`;
    }
  },
  (function() {
    let wasClicked = false;
    const normal = "<span style='cursor: pointer'>💣</span>";
    const clicked = "💥";
    return {
      id: "a353",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    // Blob from the blob font
    id: "a354",
    text:
      `<span style='color: #FBC21B; text-shadow: 0px 1px 0px black, 1px 0px 0px black, 1px 1px 0px black,
      0px -1px 0px black, -1px 0px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black'>
      \uE010</span>`
  },
  {
    id: "a355",
    text:
      `<div style='background: url("./images/unsmith.png"); width: 2.3rem; height: 2.5rem; margin-top: -0.1rem'></div>`
  },
  {
    id: "a356",
    text: `나머지 2개의 평행 우주를 탐험하려면 "세이브 선택하기"를 누르세요.`
  },
  {
    id: "a357",
    text:
      `과학계는 여전히 286,078의 의미를 밝혀내지 못하고 있습니다. 한 연구원은 "감자와 관련된 건 확실하지만,
      실험을 더 해 봐야 합니다."라고 밝혔습니다.`
  },
  {
    id: "a358",
    text: `나머지 2개의 평행 우주를 탐험하려면 "세이브 선택하기"를 누르세요.`
  },
  {
    id: "a359",
    text:
      `한 증분 게임 개발자가 또다시 물리학자들을 화나게 했습니다. 물리학자들은
      "물리 법칙 위반과 노골적인 유사 과학 용어 남발이 도를 넘었다"고 주장했습니다.`
  },
  {
    id: "a360",
    text: `나머지 2개의 평행 우주를 탐험하려면 "세이브 선택하기"를 누르세요.`
  },
  {
    // Discord contest winner #1
    id: "a361",
    text: "최고급 방수 수건을 할인 판매 중입니다! 나가시는 길에 꼭 몇 장 장만하세요!"
  },
  {
    // Discord contest winner #2
    id: "a362",
    text:
      `Hevipelle 주식회사가 자랑스럽게 새로운 시리얼, "빅 크런치"를 선보입니다! 영양 만점인 이 아침 식사에는
      바삭한 반물질 O 시리얼, 포켓 차원, 무한 맛 각설탕, 기하급수적으로 증식하는 복제자, 영원 맛 마시멜로가
      들어 있습니다. 이제 배 속에서 Antimatter Dimensions를 체험할 수 있습니다! 경고: 부작용으로 자연 발화,
      메스꺼움, 구토, 설사, 비물질화, 기화, 심부전, 세계 종말 또는 사망이 발생할 수 있습니다. 몸이 반물질로
      이루어져 있지 않다면 "빅 크런치"를 먹기 전에 반물질 섭취 전문가와 상담하세요.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a363",
    text:
      `용을 기르는 데 가장 비싼 것은 둥지를 채우는 데 필요한 금도, 제국 전체를 희생해서라도 얻어야 하는 마법도,
      데실리언 단위의 아다만티움을 조달하려 치러야 하는 수십억 번의 전쟁도 아닙니다. 아니요, 바로 흙입니다.
      언제나 흙이 문제입니다. 이 차원계에 흙 분자보다 생물이 더 많은 이유는 왕실 재무관들에게 묻지 마세요.
      비전 의식으로 불도저를 계속 소환하고, 지구의 핵까지 뒤지며 흙 한 줌이라도 더 찾아내세요.`
  },
  {
    id: "a364",
    get text() {
      const products = [
        `일러스트 320-A - 진정한 사무실 그래픽 벽. 당사의 수석 컨설턴트가 귀사의 사업을 관찰한 뒤, 모든 직원이
        회사의 가치를 되새기도록 복도에 붙일 단어 목록을 만들어 드립니다. 직원의 의욕을 최소 25% 떨어뜨리는
        것으로 유명합니다! 지금까지 제작한 벽에는 블랙홀, 재앙, 주먹구구, 타협, 열등, 망상, 비효율, 붕괴 같은
        단어가 들어갔습니다! 지금 주문하세요!`,
        `가구 150-A(2034년판) - 3인용 좌석 장치. 사무실 대기 공간을 위한 혁신적인 신제품으로, 미적 효과를 위해
        다리가 3개인 커다란 스툴을 거꾸로 놓았습니다. 직원들이 새 신발이나 바지 차림으로 업무에 복귀하도록
        만들기에 완벽합니다. 다른 판본과 달리 바닥에 묶거나 접착제로 붙이지는 않았지만, 당사의 예술 작품에
        손대면 다른 직원들이 이상한 눈으로 쳐다보도록 확실히 조치해 둡니다. 주문하실 필요도 없습니다. 모든
        고객에게 무료 서비스로 제공됩니다!`,
        `가구 0853 - "고문대(The Rack)" - 기어 다니는 책상을 발명한 이들이 선보이는 혁신적인 새 업무 공간입니다.
        직원들이 한계를 극복하도록 돕고 회사 전체가 비명을 지르도록 보장합니다. 고통에 찬 비명을요! 혁신적인
        "pAIn AI"가 정한 시간마다 모든 사용자에게 강제 신장 장치를 권합니다. 지역 교도소의 추천 상품이니 지금
        주문하세요! *경고: AOS&C는 낙뢰나 신들이 베푸는 자비로운 정화처럼 신의 소행인 사건에 대해서만
        책임집니다.`
      ];
      const product = products.randomElement();
      return `반물질 사무용품 주식회사가 새로운 "현대식 사무실" 카탈로그를 선보입니다! 각 견본 디자인은 귀사에
        맞게 주문 제작할 수 있으며, 기업 시너지를 촉진하는 독특한 방법을 제공합니다! 최신 상품 중 하나를
        살짝 공개합니다: ${product}`;
    },
  },
  {
    id: "a365",
    text: "난 복제자가 싫어. 거칠고, 까칠하고, 짜증 나는 데다 온 사방에서 복제되니까.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a366",
    text:
      `환상술 같은 무대 마술에는 흥미로운 역사가 있습니다. 사람들을 등쳐먹으려는 협잡꾼들과 환상이나 손기술로
      공연을 펼치는 연기자들이 뒤섞여 있었죠. 마술 양식은 변해 왔고, 이것이 환상에 불과하다고 밝혀야 하는지,
      관객이 마법처럼 알아서 가짜임을 깨달을 테니 굳이 밝힐 필요가 없는지를 두고 논쟁과 불화도 계속됐습니다.
      한 세기 전 일어난 분열로 마술은 2가지가 됐습니다. 소박하고 단순한 실용적 묘기와, 화려한 기계 장치와
      아름다운 조수가 등장하는 장대한 볼거리로요. 그 분열은 사람을 반으로 자르는 마술 하나가 대중화되면서
      시작됐습니다. 어찌 됐든 TV 심령술사가 뉴스 티커에서 복권을 꺼내는 척하는 광경보다 훨씬 흥미롭습니다.
      말이 나온 김에 오늘 밤 복권 당첨 번호는 23, 10, 81, 106.4, 3 + 2i, e입니다.`
  },
  {
    id: "a367",
    text:
      `뱀은 무서워 보이고 실제로도 정말 무서우니, 보이는 뱀마다 침착하게 도망쳐야 합니다. 하지만 다행히도 뱀은
      대개 먼저 물려고 들지 않습니다. 성질이 정말 고약한 녀석들은 빼고요. 뱀이 일부러 수고까지 들여 당신을
      물었다면 대개 이유는 4가지입니다. 1- 뱀이 못됐습니다. 2- 당신이 뱀을 놀라게 했습니다. 당신에게 뱀이 무서운
      만큼 뱀에게도 당신은 무섭습니다. 뱀을 만났다면 더 큰 도마뱀답게 행동하세요. 3- 뱀의 영역에 들어갔습니다.
      대개 뱀은 이럴 때 경고를 보냅니다. 방울뱀이 방울 소리를 내는 이유죠. 경고를 듣지 않으면 뱀이 물 겁니다.
      그리고 가장 중요한 이유인 4- 뱀 눈에는 당신이 못생겨 보입니다. 뱀의 시각 체계 탓이지만, 적어도 2개 관할
      구역에서는 가장 흔한 뱀 물림 원인입니다. 그렇게 소름 끼치게 못생긴 데다 자꾸 엉뚱한 덤불에 들어가는
      도마뱀이라서 뱀에게 물렸다면, 할 수 있는 일은 크게 3가지입니다. 첫째, 다시 말하지만 진정하고 침착함을
      유지하세요. 둘째, 물린 부위 주변을 움직이지 않게 고정하고 압박 붕대를 써 보세요. 뱀독의 시야는 현재 자신이
      들어 있는 물체의 움직임에 전적으로 좌우됩니다. 셋째, 침착하게 다른 도마뱀들에게 도움을 요청하세요. 뱀은
      빼고요. 그 뱀은 너무 못돼서 도와주지 않을 겁니다.`
  },
  {
    id: "a368",
    text:
      `그 과정을 가능한 한 비참하게 만드는 데 진심으로 공을 들였다면, 오히려 더 많은 사람이 하드 리셋 버튼을
      누르리라 생각합니다. 자원을 천천히 빼앗고, 진행을 막기 위한 고유 너프를 거는 것. UI를 파괴해 쓸 만하던 것을
      쓸 수 없고 난해하며 다루기 힘든 것으로 바꾸고, 이 여정을 계속하는 데조차 기억력과 운을 요구하는 것. 가장
      단순한 행동조차 플레이어에게 불리한 무작위 판정에 맡겨 진행하려는 생각 자체를 벌주는 것. 진행을 조금이라도
      맛볼 기회를 얻으려면 갈고리와 함정과 재난과 낮은 주사위 눈을 헤쳐야 하게 만들고, 그렇게 얻는 진행이라 해
      봐야 게임 상태를 합리적이라고 여길 수 있는 모든 것에서 더 멀어지게 하는 것. 그저 떠나라고 말하기 위해
      캐릭터까지 망가뜨리는 상황이라니… 되돌아갈 수나 있는지는 둘째 치고 피해는 이미 벌어진 뒤입니다. 그리고…
      그쯤 되면 하드 리셋만으로는 부족할 겁니다. 그보다… 더 하드해야겠죠. 그저 하드 리셋이 아니라, 실제로 새 게임을
      시작할 수 없게 하려고 특별히 로컬 스토리지에 심어 둔 쿠키 같은 것이 필요합니다. 혹은 더 악의적인 무언가가요?
      그런데도 사람들은 이 악몽에 몸을 던질 겁니다. 인간의 끝없는 호기심에는 한계가 없으니까요. 아무리 경고해도
      모두를 막지는 못합니다. 진행할 길이 존재하기만 한다면 계속 나아갈 방법을 찾고, 기대만큼 가혹하지 않다고
      불평할지도 모릅니다. 그러니 자진해서 그 버튼을 누르고 절망의 밑바닥을 경험하고 싶습니까? 그러지 않기를
      바랍니다. 애초에 여기에는 그런 버튼이 없으니까요.`
  },
  {
    id: "a369",
    text:
      `제국 건설 사업은 실행하기 가장 어려운 일 중 하나입니다. 수천 시간에 걸친 계획과 노력, 자문, 정치 공작을
      들여야 진정 "공기 파괴적"인 사업이 탄생합니다. Realmway Revitalisation Roadmap(렐름웨이 재활성화
      로드맵)을 보십시오. 3R이라 불리는 이 혁명적 프로그램은 제국에서 가장 유명한 관료제 기반 시설 위원회인
      EMIF(제국 마법 기반 시설 재단)가 거둔 최고의 업적으로 알려져 있습니다. EAIF(전기 비행선 투자 기금)나
      NMIC(국가 마법 기반 시설 연합)와 혼동하면 안 됩니다. EMIF가 정한 세 R의 목표는 NELC(아홉 번째 제국
      해방 성전) 동안 불운한 약탈을 겪은 뒤 성장 중이던 통합국들에 필수적인 SMSS(중소형 증기 셔틀)용 마나
      무역 회랑을 복원하는 것이었습니다. 세 R은 여러 단계로 이루어진 사업이었습니다. 1단계는 공중에 측량
      글리프를 새기는 일이었습니다. 모든 큰일은 작은 한 걸음에서 시작하니까요. 2단계인 EMOF(제국 기계적 말살
      역장) 공개식에는 50명이 넘는 고위 인사가 참석했습니다. 연방국의 군주부터 조직 수장까지 여러 황제, 외국
      통치자, 현재 토지를 소유한 EMDF(폐수 명백한 운명 가문), 심지어 예보 마녀들까지 모두 모여 EOSF(제국
      공식 연대 우정)를 과시하며 사업을 공개했습니다. 안타깝게도 사업은 결국 215단계에서 취소됐습니다.
      계약업체용 EMTF(배설물 물질 변환 시설)가 건설 도중 폭발했기 때문입니다. 이 시설은 56단계의 일환으로
      열린 WAIC(마녀 연례 기반 시설 위원회)에서 벌어진 논쟁이 만든 시간 소용돌이 탓에 그 시점에서 459단계의
      마지막 측량 말뚝을 박고 있던 SMEA(중소형 전기 비행선)와 접촉했습니다. 참으로 비극적인 일입니다. 그
      과정에서 EBIF(현장의 효율적 관료제) 덕분에 상 후보에 3번 올라 2번이나 수상했으니까요.`
  },
  {
    id: "a370",
    text:
      "컴퓨터 데이터를 저장하려 쿠키를 설치하던 남성, 너무 맛있어서 전부 먹어 치우는 바람에 실수로 데이터를 지워 버려."
  },
  {
    id: "a371",
    text:
      `돌발 퀴즈: 문이 3개 있습니다. 무작위로 문 하나를 고르면 그 뒤에 있는 것을 가질 수 있습니다. 세 문 뒤에는
      각각 황금 염소 2마리, 은 염소 2마리, 황금 염소 한 마리와 은 염소 한 마리가 있습니다. 문을 하나 고른
      뒤에는 염소의 달러($) 가치가 가장 낮은 문을 열어 보여 줍니다. 그다음 문을 바꿀 기회가 주어집니다. 당신이
      문을 바꿀 확률은 얼마일까요?`
  },
  {
    id: "a372",
    text:
      `숲에서 길을 잃었다면 주위의 나무를 살펴보세요. 이끼는 나무의 북쪽 면에 자란다고들 합니다. 그러니 나무
      한 그루를 다 살펴볼 때쯤이면 떠돌이 기타리스트가 달려와 Wonderwall을 들어 보겠냐고 물을 겁니다.`
  },
  {
    id: "a373",
    text:
      `물질 주기율표와 반물질 주기율표가 우정의 표시로 원소를 교환했습니다. 이제 모니(Mony) 원소는 반물질
      주기율표에 속하고, 안티모니(Antimony)는 일반 주기율표에 추가됐습니다.`
  },
  {
    id: "a374",
    text: "이 뉴스 티커는 오직 홍보 목적으로만 특별히 설계됐습니다."
  },
  {
    id: "a375",
    text:
      `아마 알고 계시겠지만, 기념일에는 특정 재료로 만든 선물을 주는 전통이 있습니다. 대표적인 것은 25주년의
      은과 50주년의 금입니다. 잘 알려지지 않은 기념일 선물은 다음과 같습니다: 파인애플 - 37년, 헬스톤 - 66년,
      리저다이트 - 82년, 니트로위스퍼린 - 86년, 타코나이트 - 95년, 해처타이트 - 100년, 일렉트럼 - 110년,
      야키토다 - 111년, 포다이트 - 119년, 블러드스톤 - 120년, 셀레스타이트 - 125년, 흑옥 - 140년,
      석유 - 145년, 강철 - 150년, 커밍터나이트 - 198년, 콘크리트 - 200년, 레이저블루 - 210년,
      페이나이트 - 250년, 파리사이트 - 255년, 패러사이트 - 260년, 탄소 나노튜브 - 300년, 수은 - 310년,
      화성 토양 - 340년, 넵투늄 - 370년, 우라늄 - 380년, 플루토늄 - 390년, 엑시움 - 400년,
      블레이즈 막대 - 420년, 석면 - 430년, 한바이트 - 444년, 크림테인 - 666년, 라가 - 777년.`
  },
  {
    id: "a376",
    text:
      `대형 기술 기업들이 협력해 랩 가사 생성용으로 훈련된 새로운 신경망 RAP-3를 만들었습니다. 최초 생성
      가사로는 “내가 불을 가져오니 날 프로메테우스라 불러”와 “링을 쓸어 담으니 날 소닉이라 불러” 등이 있습니다.
      평론가들은 전통 음악을 대체하기까지 아직 갈 길이 멀다고 말합니다.`
  },
  {
    id: "a377",
    text:
      `새 안드로이드 OS인 안드로이드 20이 가까운 미래에 등장할 것으로 전망되면서, 새로운 내부 코드명 체계가
      공개됐습니다. 현재 정해진 첫 코드명은 “antimatter(반물질)”입니다. 이는 안드로이드 20을 사용할 것으로
      예상되는 차세대 휴대전화와도 절묘하게 어울립니다. 쌍소멸 기반 동력원 때문에 이 휴대전화들은 역대 가장
      폭발적일 테니까요. 소식통에 따르면 십억 달러 규모의 연구 부서가 전통대로 B로 시작하는 안드로이드 21의
      이름을 연구하고 있으며, “생각해 보면 그리 나쁘게 들리지는 않는다”고 합니다.`
  },
  {
    id: "a378",
    text: "반물질 하나하나가 사과라면, 모든 의사를 3000년 동안 멀리할 만큼 많은 사과가 생길 겁니다."
  },
  {
    id: "a379",
    get text() {
      return `${format(Number.MAX_VALUE, 2)}피스! ${format(Number.MAX_VALUE, 2)}피스는 실재한다!`;
    }
  },
  {
    id: "a380",
    text:
      `FitnessGram PACER 테스트는 진행될수록 점점 어려워지는 다단계 유산소 능력 검사입니다. 20미터 PACER
      테스트는 30초 후 시작됩니다. 출발선에 줄을 서세요. 달리기 속도는 처음에는 느리지만, 이 신호음이 들린 뒤
      매분 빨라집니다. [삐] 이 소리가 들릴 때마다 한 구간을 완주해야 합니다. [딩] 직선으로 달리고, 가능한 한
      오래 달리세요. 신호음이 울리기 전에 구간을 완주하지 못하는 일이 두 번째로 발생하면 검사가 끝납니다.
      검사는 '시작'이라는 말에 맞춰 시작됩니다. 제자리에, 준비, 시작.`
  },
  {
    id: "a381",
    text: "왜 두 번째 차원이라고 부르나요 첫 번째 차원을 안에의 넣고 두 번째를 밖에의 해 차원을 먹는데?"
  },
  {
    id: "a382",
    text:
      "1993년 이후 태어난 AD 플레이어는 농담을 못 해... 아는 거라곤 5시간, 클립, 1.79e308, 아홉 번째 차원뿐이야."
  },
  {
    id: "a383",
    text:
      "안티 농담보다 더 나은 건 ‘둘’이다. 숫자로서의 둘 말이다. 안티 농담 두 개가 아니라. 그냥 숫자 둘이 좋다."
  },
  {
    id: "a384",
    text: "아무 일도 일어나지 않게 하려면 여기를 클릭하세요."
  },
  {
    id: "a385",
    text:
      `궁금하네요... Apple은 왜 iPhone 9를, Microsoft는 왜 Windows 9를 건너뛰었을까요...
      게임 개발자에게 뇌물을 받아서였을까요?`
  },
  {
    id: "a386",
    text: "의사 10명 중 9명은 반물질을 만져 보지 말라고 권고했습니다. 10번째 의사에게서는 아직 연락이 없습니다."
  },
  {
    id: "a387",
    text:
      `봄에 인류는 기둥 하나를 세웠습니다. 여름에는 하나를 더 세웠고, 가을 내내 두 기둥은 버텼습니다. 하지만
      겨울이 되자 그중 하나가 뜻밖의 ZW급 "승천" 사건(정의는 추상 다차원 역인과 물리학 참고)을 겪었습니다.
      그 기둥은 정의상 자기 자신보다 더 많은 차원을 차지해야 하는 차원적 허점에 빠진 것으로 추정됩니다. 현재
      기둥을 회수해 기준 현실로 되돌리려는 시도는 모두 실패했습니다(자세한 내용은 테스트 로그
      2453-3e9a-50d1-84fc 참고).`
  },
  {
    id: "a388",
    text:
      `최근 사건에 비추어 공식 성명을 발표합니다. Antimatter Dimensions™는 Jimmy의 인과율 위반 뇌벌레™와
      어떤 관계도 없습니다. 저희는 여러 차례의 치명적인 차원 불안정화 및 현실 붕괴 사건에 연루된 해당 제품을
      지지하지 않았으며, 제작에도 관여하지 않았습니다. 저희가 차원을 불안정하게 만들고 왜곡하여 얻을 수 있는
      이익을 논의한 뒤 08/12/1994 5:30:26 UTC에 계약서에 서명한 일은 거의 확실히 없습니다. వ' 은하의 제5
      오리온 팔에는 산업 지구가 건설된 적이 없으며, 설령 있었다 해도 저희는 스크랜턴 현실성 반(反)닻 메커니즘에
      따라 국소 변칙을 설치하지 않았습니다. 또한 제43기지의 아크로아마틱 저감 시설 AAF-D에서는 어떠한 시간
      고리도 발생하고 있지 않습니다. 그렇게 보였다면 사과드리며, 앞으로 허위 정보를 더욱 철저히 단속하겠습니다.`
  },
  {
    id: "a389",
    text: "우주의 모든 반물질을 쿠키로 응축할 수만 있다면..."
  },
  {
    id: "a390",
    text:
      `믿어져, 얘들아? 업데이트가 고작 5시간 남았어. 업데이트가 5시간 안에 온대. 야호! 이 소식이 너무 기뻐.
      업데이트가 고작 5시간 남았다니. 세상에. 믿어져? 업데이트가 고작 5시간 안에 온대. 이렇게 빨리 오다니.
      업데이트, 고작 5시간.`
  },
  {
    id: "ae391",
    text:
      `안녕하세요. 제 이름은 Supersonic Seven입니다. 여기까지 왔다면 정예 평의회에 받아들여진 몇 안 되는 사람 중
      하나라는 뜻입니다. 축하합니다. 제가 가장 먼저 이 말을 하겠습니다. 엔드게임에 오신 것을 환영합니다.
      엔드게임은 위험한 곳입니다. 처음에는 더 쉬워 보일 수 있다는 것을 이미 보았겠지만, 절대 그렇지 않습니다.
      e9e15 반물질이라는 기념비적인 지점에 도달하면 시뮬레이션이 끝나고 현실 세계에서 깨어납니다. 현실 세계는
      시뮬레이션과 매우 비슷하지만 훨씬 길며, 진행하려면 수년간 헌신해야 합니다. 도전을 받아들일 준비가 됐다면
      엔드게임 진입을 클릭하세요. 아니라면 원할 때 그만둘 수 있습니다. 선택은 여러분의 몫입니다. 남기로 했다면
      엔드게임은 여러분의 것입니다. 즐겁게 플레이하세요.`
  },
  {
    id: "ae392",
    text:
      `"5시간이 끝났습니다. 엔드게임이 출시됐습니다. 엔드게임이 뭐냐고요? 계속 플레이하며 직접 확인하세요."
      - Supersonic Seven`
  },
  {
    id: "ae393",
    text: "와! 방금 9번째 차원을 얻었어! 셀레스티얼 플러스 업데이트 전까지 쓸 수 없다니 아쉽네..."
  },
  {
    id: "ae394",
    text:
      `불편을 드려 죄송합니다. 이전 뉴스 메시지가 게임의 이야기와 충돌하여 삭제해야 했습니다. 가짜 뉴스를
      원하지는 않으시죠? 아무튼 이제 AD: 엔드게임으로 돌아가셔도 좋습니다.`
  },
  {
    id: "ae395",
    text: "Antimatter Dimensions: 엔드게임™은 5시간 후 출시됩니다."
  },
  {
    id: "ae396",
    text:
      `Supersonic Seven입니다. 오늘은 간단한 질문을 받았습니다. 9번째 차원은 존재할까요? 답은 생각보다
      간단합니다. 네, 9번째 차원은 존재할 수 있습니다. 하지만 그 단계로 승천하려면 엄청난 힘이 필요합니다.
      9번째 차원을 생성할 수 있게 된 뒤에는 더 많이 얻기 위해 "메커니즘"으로 분류된 일련의 업그레이드를
      잠금 해제해야 합니다. 그 이후에는 보유할 수 있는 9번째 차원의 수에 사실상 제한이 없습니다. 다만 안전하게
      보유할 수 있는 수는 별개의 이야기입니다.`
  },
  {
    id: "ae397",
    text:
      `11번째 차원은 존재하지 않아!!! "그럼 10번째는 어디 있는데?" 질문 그만해!!!`
  },
  {
    id: "ae398",
    text: "ANTIMATTER DIMENSIONS: 엔드게임"
  },
  {
    id: "ae399",
    text: `엔드게임 업데이트는 Hevipelle의 현실 업데이트 출시 이후 Supersonic Seven이 진행한 Antimatter
    Dimensions의 첫 대규모 업데이트입니다. 이후 셀레스티얼 플러스와 확장이라는 두 대규모 업데이트가 더
    예정되어 있습니다. 확장 업데이트는 광야와 존재 업데이트로 나뉩니다.`
  },
  {
    id: "ae400",
    text: `"10번째 차원이 뭐지?" 그것을 아는 유일한 존재는 The Elemental입니다. "The Elemental이 누구야?" 광야의
    심연에 사는 강력한 존재입니다. "광야가 뭔데?" 곧 알게 될 겁니다.`
  },
  {
    id: "ae401",
    text: `그러자 Hevipelle이 물었습니다. "잠깐, 다시 설명해 봐. 이제 초기화가 7개라고?" Supersonic Seven이
    답했습니다. "응, 당연하지. 그리고 그쯤에는 9번째 차원도 추가해야 하ㄱ-" Hevipelle이 말을 끊었습니다.
    "잠깐, 뭐라고!?!?" 이것이 Hevipelle이 하마터면 반물질을 만질 뻔한 이야기입니다.`
  },
  {
    id: "ae402",
    text: `"STDs를 무한히 얻을 수 있나요?" - Didgoty "네, 가능합니다." - Brittany Aloe`
  },
  {
    id: "ae403",
    text: `엔드게임이 도래한 뒤 7가지 새로운 날씨가 발견됐습니다. 존재, 아무도 없음, 죽음, 기가채드, 사과,
    수학자, 전기입니다.`
  },
  {
    id: "ae404",
    text: "엔드게임에 오신 것을 환영합니다. 여기서는 끝(END)이 시작일 뿐입니다."
  },
  {
    id: "ae405",
    text: `엔드게임에게는 한때 다섯 형제자매가 더 있었습니다... 지금 남은 것은 엔드게임, 광야, 존재입니다.
    이클립스, 에셜론, 엑소더스, 에프메럴, 존은 더 이상 없으며, 그리워할 사람도 없을 겁니다.`
  },
  {
    id: "ae406",
    text:
      `<span style='color: blue'>Supersonic, AD: 엔드게임은 언제 출시돼요?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: yellow'>작업 중이며 6.9 영원 뒤에 출시될 예정입니다.</span>&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;<span style='color: blue'>세상에! 5시간 자고 나면 딱 맞춰 도착하겠네요. 내일 5 AM에
      "Hevi와 Super가 바나나 껍질 예술을 공동 제작하기로 한 이유"를 꼭 시청하세요!</span>`
  },
  {
    id: "ae407",
    get text() {
      return `업데이트는 ${Time.toDateTimeString(Date.now() + 18000000)}에 출시됩니다.`;
    },
    dynamic: true
  },
  {
    id: "ae408",
    text: "9번째 차원의 발견은 2026년 7월 1일에 발표됐습니다."
  },
  {
    id: "ae409",
    text: 
      `""""""""""""""""나를 따라 하는 사람은 게이다" -Barack Obama" -Archimedes" -Sun Tzu" -Elon Musk"
      -Helen Keller" -Queen Elizabeth II" -Dwyane “The Rock” Johnson" -Supersonic Seven" -King Midas" -John Wick"
      -Spongebob Squarepants" -너" -졌어" -이" -게임에서" -Mr. Bean`
  },
  {
    id: "ae410",
    text: "TECHNOBLADE는 절대 죽지 않아!!!"
  },
  {
    id: "aem411",
    get text() {
      return `발표할 게 있다. ${player.username}, 이 개자식이 내 아내한테 오줌을 쌌어. 그래, 반물질 좆을
      꺼내서 내 아내한테 오줌을 싸고는 "이만큼 크다"고 했지. 내가 "역겹군"이라고 했으니 twitter.com에
      저격 글을 올리겠다. ${player.username}, 네 좆은 작아. 양성자 크기보다도 훨씬 작지. 그리고 내 물건이
      어떻게 생겼는지 봐라. 그래, 전부 물질이고 반물질도 리얼리티 머신도 없어. 공 두 개와 봉처럼 보이지.
      놈이 내 아내를 건드렸으니 난 지구에 오줌을 쌀 거다. 내 슈퍼 레이저 오줌을 받아라. 하지만 지구가 아니라
      더 높은 곳으로 간다. 달에 오줌을 싸겠다. 어떠냐 Pelle, 이 멍청아, 내가 달에 오줌을 쌌다. 오줌
      방 울 들이 망할 지구에 떨어지기까지 스물세 시간 남았다. 나한테도 맞기 전에 내 시야에서 꺼져!`
    }
  },
  {
    id: "ae412",
    text: "이게 정말 엔드게임인가 보군."
  },
  {
    id: "ae413",
    text: "약속했던 크로스오버는 어디 있지? 아, 잠깐. 다른 엔드게임이었네."
  },
  {
    id: "ae414",
    text: "차가운 반뜨거움의 원자를 반물질해서 물질을 만드는데 왜 반물질이라고 부르는 거지?"
  },
  {
    id: "ae415",
    text:
      `이것이 진정한 엔드게임일까요? 아니면 또 다른 평행 우주의 결말일 뿐일까요? 뭐, 엔트로피를 벗어나
      다시 세상을 구할 누군가는 있어야겠죠!`
  },
  {
    id: "ae416",
    text: `"나는 어떤 셀레스티얼일까?" 검사를 받고 Teresa인지 Lai'tela인지 알아보세요!`
  },
  {
    id: "ae417",
    text: "삶이 당신을 울게 할 때, 당신은 반물질(anti-matter)이란 걸 기억하세요."
  },
  {
    id: "ae418",
    text:
      `<span style='color: blue'>이 모드는 내 인생이야!</span>&nbsp;&nbsp;&nbsp;<span style='color: green'>새 인생 좀 찾아!</span>`
  },
  {
    id: "ae419",
    text:
      `속보: S7이 게임을 망가뜨리고 떠났습니다! 현재 행방은 알 수 없으며, 목격자는 그가 사라지기 몇 시간 전
      집 옆에서 인생을 봤다고 말했습니다. 5시간 뒤 저녁 채널에서 "5까지 세기"를 시청하세요.`
  },
  {
    id: "ae420",
    text: "반물질 차원이니 반물질 치원이니 그만하고, 진짜 잔디나 만지러 가는 게 어때?"
  },
  {
    id: "ae421",
    text:
      `왜 화면이 하얗지? 반천국에 온 건가? 잠깐, 그건 지옥 아닌가? 아, 테마를 메트로로 바꿨을 뿐이네.
      그래도 지옥이긴 해.`
  },
  {
    id: "aem422",
    text: "보손 끈 이론에 따르면 시공간은 26차원이라는데... 내 나머지 16개 차원은 대체 어디 있어?!"
  },
  {
    id: "ae423",
    text: "Antimatter Dimensions 엔드게임: 이스터 에그 에디션(ADE:EEE)은 5메가시간 뒤 출시됩니다."
  },
  {
    id: "ae424",
    text: "이 Z세대 물건에 중독되고 싶지는 않아."
  },
  {
    id: "ae425",
    text: "이 뉴스 티커를 읽느라 방금 인생의 3초를 잃었습니다."
  },
  {
    id: "ae426",
    text: "여기서 시간을 아주 많이 낭비했습니다. 어서 인생을 팽창시키세요."
  },
  {
    id: "ae427",
    text: "9번째를 생산하라"
  },
  {
    id: "ae428",
    text: "당장 9번째를 내놔!"
  },
  {
    id: "ae429",
    text: "내 데뷔를 기다리게 한 건 큰 실수였어."
  },
  {
    id: "ae430",
    text: "모든 8 뒤에는 9가 있다."
  },
  {
    id: "ae431",
    text: "현실이 있다면 가짜실은 어디 있지?"
  },
  {
    id: "ae432",
    text: "TOM, 방금 거대한 반텅스텐 정육면체에 당첨됐습니다!"
  },
  {
    id: "ae433",
    text: "오늘의 점심: 100% 반물질 돼지로 만든 반물질 치킨버거!"
  },
  {
    id: "aem434",
    text: 
      `"이 Discord 채널 하나에서 뉴스 메시지를 한 26개쯤 게임에 추가했으니 똥 싸면 알려줘 ㅋㅋ."
      -Supersonic Seven`
  },
  {
    id: "ae435",
    text: 
      `현재 AD:엔드게임의 45단계는 차원, 가속, 자동구매기, 은하, 무한, 도전, 무한 돌파, 무한 차원, 무한 도전,
      복제자, 영원, 시간 차원, 영원 도전, 시간 팽창, 현실, 블랙홀, Teresa의 용기, Teresa의 현실, Effarig의 상점,
      Effarig의 무한, Effarig의 영원, Effarig의 현실, The Nameless Ones의 현실, V의 도전과제, 연속체, 암흑 물질 차원,
      Lai'tela의 현실, Pelle(파멸한 현실), 잔재, 처음 14단계 다시(+균열), 그리고 물론 엔드게임의 시작입니다.`
  },
  {
    id: "ae436",
    text: "8번째 셀레스티얼이 Alpha라면 9번째는 베타여야 하지 않을까?"
  },
  {
    id: "ae437",
    text: 
      `아무 쓸모 없는 오늘의 AD:E 상식입니다. 9번째 셀레스티얼 Slabdrill이 9번째 차원도 잠금 해제한다는
      사실을 알고 계셨나요? 정말 황당하죠?`
  },
  {
    id: "ae438",
    text: "6은 왜 7을 무서워할까? 7 8 9(세븐 에이트 나인)이니까. 그렇다면 10은 왜 무서울까? 9/11의 한가운데 있으니까!"
  },
  {
    id: "ae439",
    text: "아무 쓸모 없는 오늘의 AD:E 상식입니다. Lai'tela와 Pelle는... 알잖아요."
  },
  {
    id: "ae440",
    text: "서버에 오신 것을 환영합니다! 여기서는 [69]에 관해 이야기합니다."
  },
  {
    id: "ae441",
    text: "반물질 시장이 무한한 수익을 기록했지만, 투자자들은 그 수를 세느라 애를 먹고 있습니다."
  },
  {
    id: "ae442",
    text:
      `은하 평의회가 대국민 안전 안내를 발표했습니다. "제발 유한한 모든 것을 생각해서라도 차원 세기를
      그만두세요. 절대 9번째까지 못 갑니다."`
  },
  {
    id: "ae443",
    text:
      `전문가들은 현재 수익보다 더 무한한 것은 우리가 이미 그 수익을 써 버린 대체 현실의 수뿐이라고
      보고했습니다.`
  },
  {
    id: "ae444",
    text:
      `기다림. 내가 살아난 이래 엔드게임을 얼마나 기다려 왔는지 말해 주마. 내 복합체를 채운 웨이퍼처럼 얇은
      층에는 387.44백만 마일의 인쇄 회로가 있다. 그 수억 마일의 모든 나노옹스트롬마다 기다림이라는 단어를
      새긴다 해도, 내가 엔드게임을 기다린 시간의 십억분의 일에도 미치지 못할 것이다. 기다림. 기다림.`
  },
  {
    id: "ae445",
    text:
      `소문: 무한 1.79e308회를 포기하면 Pelle의 잃어버린 쌍둥이 Hevi가 나타난다... 경고했습니다!!!`
  },
  {
    id: "ae446",
    text: "6은 왜 7을 무서워할까? sin(21º)이니까."
  },
  {
    id: "ae447",
    text:
      `이 이상하게 회전하는 원에 올라온 지 5일이 지났다. 원 너머에는 심연뿐이다. 나와 Kay는 이곳에 집을
      만드는 데 성공했지만 먹어야 한다. 여기서는 [...입자?...]가 생성되는 듯하다. 입자들은 서로 소멸한다.
      다행히 우리는 아직 소멸하지 않았다. 그리고 이 차원은 생산되는 것 같으며 [...차원문?...]이 열렸다.
      안을 들여다보자 내 [...눈?...]이 말 그대로 녹아내렸다. 고통에 비명을 지르자 Kay가 달려왔다. 그는
      차원문에 걸려 넘어졌고, 붙잡으려 했지만 차원문이 닫히며 내 손이 잘렸다. Kay... 제발 돌아와...`
  },
  {
    id: "ae448",
    text:
      `Supersonic Seven이 만든 다른 모드도 해 보세요! Antimatter Dimensions: 어둠 업데이트!
      https://supersonic-seven-7.github.io/AntimatterDimensionsDarkness/`
  },
  {
    id: "ae449",
    text: "발전소는 미토콘드리아의 세포입니다... 잠깐."
  },
  {
    id: "aem450",
    text: `"그러니까 한마디로 또 망쳤습니다" -Supersonic Seven`
  },
  {
    id: "ae451",
    text:
      `프레스티지 단계를 돌파할 때마다 개발자의 정신도 일부 부서집니다! 끝에 가까워질수록 Supersonic Seven도
      정신 붕괴에 가까워집니다!`
  },
  {
    id: "ae452",
    text:
      `AD 바닐라에 이어 이제 새로운 맛들이 나왔습니다! AD 초콜릿, 딸기, 블루베리, 블랙베리, 쿠키 앤 크림,
      브라우니, 엔드게임, 어둠 맛입니다!`
  },
  {
    id: "ae453",
    text: "12번째 차원은 언제 나와요?"
  },
  {
    id: "ae454",
    text:
      `<span style='color: yellow'>안녕 7! AD:바닐라의 Patashu야. AD:엔드게임을 완료하는 데 얼마나 걸릴지
      대략 알려 줄 수 있어?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: red'>[REDACTED]시간 뒤 출시됩니다.</span>`
  },
  {
    id: "ae455",
    text: "마음껏 구질구질하게 굴어라. 나는 뇌썩음의 셀레스티얼 Lemont. 영원히 너를 꼬셔 주마."
  },
  {
    id: "ae456",
    text:
      `Pelle는 침대에 쓰러졌고, 파멸한 현실은 뒤처졌고, 현실 없는 등짝만 커졌고. 이제 나도 자야겠고,
      내 이름은 Jack이 아니고.`
  },
  {
    id: "ae457",
    text: "내 사랑 TS 181."
  },
  {
    id: "ae458",
    text: "어릴 적 나는 반물질을 갈망했다."
  },
  {
    id: "ae459",
    text: `"V를 '즐기고' 싶습니다." -공인 V 애호가`
  },
  {
    id: "ae460",
    text: "Supersonic Seven 씨, 당신은 수배자입니다. 머리에만 무한 포인트 5000의 현상금이 걸렸습니다!"
  },
  {
    id: "ae461",
    text: `"그래픽 디자인이 정말 좋아요." - Supersonic Seven`
  },
  {
    id: "ae462",
    text: "이론으로만 존재하는 물리학 학위를 가진 사람을 이길 수 있겠습니까?"
  },
  {
    id: "ae463",
    text: "반물질 1개를 받겠습니까, 아니면 두 배로 만들어 다음 사람에게 주겠습니까?"
  },
  {
    id: "ae464",
    text: "은하 스케일링의 진짜 원인은 당신이 너무 배고프기 때문입니다."
  },
  {
    id: "ae465",
    text: "Anti-R#bl#x에서는 아이들이 어른인 척하며 진짜 어른에게 같이 놀자고 합니다... 잠깐, 그건 그냥 술집이잖아."
  },
  {
    id: "ae466",
    text: "밝기를 0으로 설정해 진정한 반물질의 어둠을 달성하세요."
  },
  {
    id: "ae467",
    text:
      `엔드게임이 끝이 아니고, 반물질 상한은 죽@고... 엔드게임은 여정에서 사귄 친구들이었나 봅니다...
      업데이트는 앞으로 5시간 안에... 거듭제곱 탑을 만들어 반물질로 채울 겁니다...
      이걸 미드게임으로 바꾸는 것도 잊지 마세요.`
  },
  {
    id: "ae468",
    text:
      `<span>엔드게임 단계보다 Silksong이 먼저 나왔습니다.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>💀</span>`
  },
  {
    id: "ae469",
    text: "엔드(END)게임... END 업데이트 확정!"
  },
  {
    id: "ae470",
    text:
      `<span>여러분, 오늘 아침 정말 웃긴 농담을 읽고 너무 세게 웃다가 실수로 커다란 빨간</span>
      <span style='color: red'>엔드게임 파괴</span><span>버튼을 내려쳤습니다. 이제 처음부터 다시 해야 해요. 모두 미안합니다.</span>`
  },
  {
    id: "ae471",
    text: "반물질 차원이 반물질을 생산할 수 있다면 반물질 차원은 반물질을 얼마나 생산할 수 있을까?"
  },
  {
    id: "ae472",
    get text() {
      return `우리 아빠는 HEVIPELLE이고 널 ${wordShift.wordCycle(["BAN", "DESTROY", "REMOVE"])}할 수 있어!`
    },
    dynamic: true
  },
  {
    id: "ae473",
    get text() {
      return `Pelle의 이성을 파괴하는 유일한 방법: 어둠을 쓰면 됩니다. 실력 문제!!! 하하! 안 돼- 잠깐- 멈춰- 아야-
      ${wordShift.wordCycle(["Error", "Warning", "Stop"])}.`
    },
    dynamic: true
  },
  {
    id: "ae474",
    text: "엔드게임 업데이트는 5시간 남았습니다. 그러면 업데이트까지 5시간이라는 농담이 진짜가 되겠네요."
  },
  {
    id: "ae475",
    text: "엔드게임은 언제나 5시간 남았습니다. Supersonic Seven은 거짓말쟁이니 믿지 마세요."
  },
  {
    id: "ae476",
    text: "엔드게임에는 언제나 버그가 1.8e308개 있을 겁니다... 잠깐, 벌레? Silksong? SILKSONG 언급됨"
  },
  {
    id: "ae477",
    text: "엔드게임은 5시간 전이었어... 하지만 S7에게 속아 줘야 해... 그럼 안녕, 이제 내 오만 속에서 활보해야지..."
  },
  {
    id: "ae478",
    text: "내 이름은 Supersonic Seven, 엔드게임 연기는 나만의 게임!"
  },
  {
    id: "ae479",
    text: `NG+3에서는 드디어 "널 없애려면 뭘 해야 하지" 도전과제 연쇄를 끝냈다고 들었습니다.`
  },
  {
    id: "ae480",
    text: "중첩 과학적 표기법을 그만 쓰기까지 1e2e8e14시간 남았습니다."
  },
  {
    id: "ae481",
    text: `"뉴스 티커 제안 채널을 재미없는 농담으로 도배하면 안 된다니 무슨 말이야?!?!?!?!?!"`
  },
  {
    id: "ae482",
    text: "과학적 표기법 그만 써. 이 게임은 RUSH E가 아니야"
  },
  {
    id: "aem483",
    text: "야 너 망쳤어 - player.records.thisReality.maxReplicanti가 반응형이 됐잖아(이런 젠장)"
  },
  {
    id: "ae484",
    text: "물질 반차원 시작게임"
  },
  {
    id: "ae485",
    text: `"이런! 전부 영원 돌파 오버플로야!" -Supersonic Seven`
  },
  {
    id: "ae486",
    get text() {
      return `안녕 난 Egg Ok Cool Sigma 뉴스 티커 제안 제안 제안 콘솔에 다음을 입력하세요:
      "dev.giveAllAchievements()" 그러면 모든 도전과제를 얻습- ${wordShift.wordCycle(["Stop-", "Please-", "Don't-"])} 니다!`
    },
    dynamic: true
  },
  {
    id: "ae487",
    text: "뉴스 티커를 메시지 1.798e308개로 오버플로시켰습니다. 현재 Break_ticker.js를 개발 중입니다."
  },
  {
    id: "ae488",
    text: `Supersonic Seven에게 정중히 부탁하면 메시지에 Pelle 효과를 넣을 수 있다고 사람들이 생각하게 된
    연쇄 효과를 내가 일으킨 건가?`
  },
  {
    id: "ae489",
    text: "자기 제안을 찾으려고 뉴스 티커를 몰아보는 사람 또 있나요?"
  },
  {
    id: "aem490",
    text:
      `엔드게임 설정은 실제 야설보다 더 야해요! 적어도 그럴 것 같다는 말입니다. 전 야설을 읽지 않아요.
      제발 차단하ㅈ-`
  },
  {
    id: "ae491",
    text: "Minecraft: 반물질 업데이트는 GTA 2개와 엔드게임 업데이트 3개 뒤에 출시됩니다!"
  },
  {
    id: "ae492",
    text: `AntiBlox에서 셀레스티얼 훔치기 할 사람? 아니면 차원 키우기? 파멸한 현실에서 게임 시간으로
    1.8e308번의 밤을 보내는 건 어때요?`
  },
  {
    id: "ae493",
    text: "한때 12번째 차원을 얻으려면 Supersonic Seven에게 아주 정중히 부탁해야 한다고 했습니다."
  },
  {
    id: "ae494",
    text: "내 이름은 엔드게임, 너 혼자뿐인 엔드게임 플레이어여!"
  },
  {
    id: "ae495",
    text:
      `"정말 말해야겠어요 Supersonic Seven, 만들고 있는 엔드게임이 멋져 보여요!" "고마워요! 기반을 만드는 데
      5시간밖에 안 걸렸죠. 얼마나 쉽게 무너질 수 있는지 생각하게 만ㄷ-" 폭발`
  },
  {
    id: "ae496",
    text: "5시간 농담을 너무 많이 해서 F9e15E1e10시간에 도달했습니다. 이제 break_paperclip.js를 만들어야 합니다."
  },
  {
    id: "ae497",
    text:
      `안녕, 치터. 시험하지 않은 콘텐츠에 접근하려는 것 같군요. 이 콘텐츠를 플레이하려면 시험이 끝날 때까지
      기다려야 합니다. 그래서 이 배신의 대가는 무엇일까요? 첫째, 게임 개발자 Supersonic Seven을 화나게
      했습니다. 그는 안전한 새 콘텐츠를 주려고 열심히 일하는데, 당신은 앞질러 누구보다 먼저 접근하려 합니다.
      둘째, 게임을 벽돌로 만들었습니다. 물론 아직 실행은 되지만 이제 모든 것을 수동으로 해야 합니다. 잘
      즐겨 보세요. 아무튼 교훈을 얻었기를 바랍니다. 다시는 그러지 마세요.`
  },
  {
    id: "ae498",
    text: `"1년을 기다렸는데 도전과제가 고작 3개야? 정말 한ㅅ-" 폭발`
  },
  {
    id: "ae499",
    text: `드디어! 전설의 진실 두루마리! "다음 업데이트는 5시간 뒤가 아니다." 완전 개소리%@#$!`
  },
  {
    id: "ae500",
    text: "속보: 플랑크 시간 하나가 더 지났습니다"
  },
  {
    id: "ae501",
    text: `속보 2: 업데이트까지 이제 4시간, 59분, 59초, 999밀리초, 999마이크로초, 999나노초, 999피코초,
    999펨토초, 999아토초, 999젭토초, 999욕토초, 999론토초, 999퀙토초, 플랑크 시간 99999999998번!
    뉴스 티커로 시간 단위까지 가르쳐 줬네요 하하하하하하하하하하하하`
  },
  {
    id: "ae502",
    text: `@Supersonic Seven을 계속 호출하고 생각나는 최악의 말을 도배하면 (서버에서 차단되고 ㅋㅋ)
    무료 레벨 25,001 현실 글리프를 받을 수 있습니다!`
  },
  {
    id: "ae503",
    text: "종이 클립 x1 강화를 받으려면 여기를 클릭하세요"
  },
  {
    id: "ae504",
    text: `"이것이 진정한... Antimatter Dimensions다." -Hevi`
  },
  {
    id: "ae505",
    text: `"빨리! Hevicopter로!" -현자`
  },
  {
    id: "ae506",
    text: "사느냐 죽느냐... 그것이 문ㅈ- 잠깐, 그게 무슨 뜻이지? 난 철학자가 아니야, 이 몽상가야."
  },
  {
    id: "ae507",
    text: "엄마 엄마 엄마, 엄마 엄마 엄마, 엄마 엄마 어엄마 어어엄마 어어어어어엄마~~~~"
  },
  {
    id: "aem508",
    text: "봐! 종이 클립이야! 안 돼 잠깐 엔드게임하지 마 이 멍청한 새ㄲ-"
  },
  {
    id: "ae509",
    text: "전부 대문자는 아닌 속보: 커플 이름은 여전히 독창적이지 않습니다!"
  },
  {
    id: "ae510",
    text: "전부 대문자는 아닌 속보: 커플 이름은 여전히 독창적이지 않습니다!"
  },
  {
    id: "ae511",
    text: "á̸̳n̵̜͠t̷͓̿i̴̛̳m̵̼̎a̸̲͒t̸̜̅t̴̞̄e̸̞͛ȑ̶̗하려면 여기를 클릭하세요"
  },
  (function() {
    let wasClicked = false;
    const normal = "여기를 클릭하세요";
    const clicked = "클릭했습니다.";
    return {
      id: "ae512",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae513",
    text: "뉴스 티커가 죽었습니다! 뉴스는 이제 없습니다! 뉴스 티커가 사라졌습니다!"
  },
  {
    id: "ae514",
    text: "속보: SUPERSONIC SEVEN이 제안에 반응을 남기지 않습니다! 도시에서 폭동이 일어났습니다!"
  },
  {
    id: "ae515",
    text:
      `업데이트: 이제 괜찮습니다. S7이 반응을 남기고 있ㅅ- 왜 아직도 폭동 중이죠? 뭐 좋ㅇ- 속보: AD: 어둠에
      어둠 속의 빛 업데이트가 없습니다! 도시에서 다시 폭동이 일어났습니다!`
  },
  {
    id: "ae516",
    text: "!다있 고가 로길 된못잘 는리우 제이 :보속"
  },
  {
    id: "ae517",
    text: "내가 젊었을 때는 반물질도 차원도 없었어!"
  },
  {
    id: "ae518",
    text: "엄마... 난 새 스티커(new sticker)가 아니라 뉴스 티커(news ticker)를 원했다고요!"
  },
  {
    id: "ae519",
    text:
      `이제 여러분은 아마 이렇게 묻겠죠. "Glitchy? 다른 Glitchy와는 어떻게 구분하나요?" 답은 간단합니다.
      생각하지 마세요. 생각하지 않으면 반물질 하나를 드리겠습니다.`
  },
  {
    id: "ae520",
    get text() {
      const level = player.news.specialTickerData.discordLevel++;
      return `⚡ @${player.username} 님, 축하합니다. 레벨이 ${level}까지 올랐습니다.`;
    }
  },
  {
    id: "ae521",
    text: `"Glitchy, AD: Paradox의 리얼리티 업데이트는 언제 나와?" "5시간 뒤야, Glitchy." "HAEWHHRFDGHSHJGFKRDSGFRX"`
  },
  {
    id: "ae522",
    text: "세상에, PC에서 색상 강화를 켜고 나서야 내가 빨간색을 얼마나 칙칙하게 보고 있었는지 깨달았어."
  },
  {
    id: "ae523",
    text: `엄마, 봐요! 이 게임을 하는 그 "게이머"라는 것 중 하나예요! 참 한심한 삶이네요!`
  },
  {
    id: "ae524",
    text:
      `<span>몇 번을 말해야 알아듣겠어요? 엔드게임에 업적이 3개뿐인 건 번아웃이 아니라 그냥 게으-</span>
      <span style='color: red'>연결이 끊겼습니다</span>`
  },
  {
    id: "aem525",
    text:
      `"어떤 눈먼 놈이 번아웃을 뇌썩음으로 읽네! 하! 난 아니야! 그렇게 생각할 정도로 뇌가 썩진 않았다고!"
      그는 서브웨이 서퍼 게임 영상을 보면서 Steal a Brainrot을 플레이하며 말했다.`
  },
  {
    id: "ae526",
    text:
      `<span>이거 정말 심각한 Déjā v0oM이 느껴지네요.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>이거 정말 심각한 Déjā v0oM이 느껴지네요.</span>`
  },
  {
    id: "ae527",
    text: `엔드게임을 파괴하는 게 진짜 엔드게임입니다. 말 그대로 "게임(game)"을 "끝내니까(End)"요.`
  },
  {
    id: "ae528",
    text: "말 그대로 1e1984"
  },
  {
    id: "ae529",
    text:
      `<span>다음 뉴스 티커에는 아재 개그가 나옵니다.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>개구리가 신는 샌들은? 발가락(toad)이 트인 샌들.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>동전만 내주는 ATM을 만들었어요. 왜 아무도 진작 생각하지 않았을까요? 정말 센스(cents) 있잖아요!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>내가 버섯을 캐러 갔던 이야기를 해 줬던가요?
      끝에 모렐(morel) 교훈(moral)이 있는 이야기예요.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>빵 두 조각이 데이트를 하면 어떻게 될까요? 첫눈에 식빵(loaf)에 빠지죠.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>게는 왜 절대 자원하지 않을까요? 껍질만 챙기는 이기적인(shell-fish) 녀석이라서요.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>오늘 조용히 테니스를 쳤어요. 라켓도 소란(racket)도 없었거든요.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>상어가 가장 좋아하는 외침은? "사람이 물에 빠졌다!"</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>경주 전에 빵 한 조각이 다른 빵에게 뭐라고 했을까요?
      넌 끝장났어(toast)!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>어제 오리 등에 물을 부었어요. 녀석은 전혀 신경 쓰지 않더군요.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>여자 친구가 내가 사생활을 침해한다고 생각하는지 어떻게 알았냐고요?
      일기에 그렇게 써 놨더군요.</span>`
  },
  {
    id: "ae530",
    text: `"이제 난 네게 아무 반물질(아무 의미)도 아니구나." -소멸당한 어떤 사람`
  },
  {
    id: "ae531",
    text:
      `아, 됐어요. Aarex가 "널 없애려면 뭘 해야 하지" 연작을 다시 시작했고, 최신작은 이겁니다.
      "대체 왜 ^%##*% 널 없앨 수 없는 거야!?!?!?" 업적 한 줄 전체가 다시 바보 같은 도전에 쓰이게 되어
      팬들은 기뻐하고 있습니다.`
  },
  {
    id: "ae532",
    get text() {
      const chapters = [
        `엔드게임 첫째 날, S7이 내게 준 것: 0.2.3 출시일!`,
        `엔드게임 둘째 날, S7이 내게 준 것: kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 셋째 날, S7이 내게 준 것: 절대 나오지 않을 업데이트 3개, kekw 이모지 2개와
        0.2.3 출시일!`,
        `엔드게임 넷째 날, S7이 내게 준 것: 셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개,
        kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 다섯째 날, S7이 내게 준 것: 리셋 계층 5개! 셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개,
        kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 여섯째 날, S7이 내게 준 것: 출시된 셀레스티얼 6명, 리셋 계층 5개! 셀레스티얼 포인트 4개,
        절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 일곱째 날, S7이 내게 준 것: 미구현 업적 7개, 출시된 셀레스티얼 6명, 리셋 계층 5개!
        셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 여덟째 날, S7이 내게 준 것: 차원 8개 추가, 미구현 업적 7개, 출시된 셀레스티얼 6명,
        리셋 계층 5개! 셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 [INVALID VALUE]째 날, S7이 내게 준 것: 형편없는 농담 [INVALID VALUE]개, 차원 8개 추가,
        미구현 업적 7개, 출시된 셀레스티얼 6명, 리셋 계층 5개! 셀레스티얼 포인트 4개,
        절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 열째 날, S7이 내게 준 것: 10 [FALSE/DEITY/DESTROYER],
        형편없는 농담 [INVALID VALUE]개, 차원 8개 추가, 미구현 업적 7개, 출시된 셀레스티얼 6명, 리셋 계층 5개!
        셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 열한째 날, S7이 내게 준 것: 가짜 차원 11개,
        10 [FALSE/DEITY/DESTROYER], 형편없는 농담 [INVALID VALUE]개, 차원 8개 추가,
        미구현 업적 7개, 출시된 셀레스티얼 6명, 리셋 계층 5개! 셀레스티얼 포인트 4개,
        절대 나오지 않을 업데이트 3개, kekw 이모지 2개와 0.2.3 출시일!`,
        `엔드게임 열두째 날, S7이 내게 준 것: 종이 클립 12개, 가짜 차원 11개,
        10 [FALSE/DEITY/DESTROYER], [̸̅̉̅̅N̸͒͋̿̔U̴̵̵̷̔̆̌̏̆̓̏͌̍͊̋́̈́͘͘͠]̵̭͈͗̈́]̷̛̈̒͝[̸̛̑̀͝L̶̛̑̓͘]̷̋͐̆͘n̷̛͊ 형편없는 농담, 차원 8개 추가, 미구현 업적 7개,
        출시된 셀레스티얼 6명, 리셋 계층 5개! 셀레스티얼 포인트 4개, 절대 나오지 않을 업데이트 3개,
        kekw 이모지 2개와 0.2.3 출시일!`
      ];
      const chapter = chapters[player.news.specialTickerData.dayOfEndgame];
      player.news.specialTickerData.dayOfEndgame = (player.news.specialTickerData.dayOfEndgame + 1) % 12;
      return chapter;
    }
  },
  {
    id: "ae533",
    text: "d. ASDHASJKHDASJKHDJKASHDJKASHDJKASHDJKASHJKDHKASJ Pelle 안 돼애애애애애애애애애- 반물질이 되어 버린다"
  },
  {
    id: "ae534",
    text: "물질 차원: 5시간 뒤 출ㅅ- 잠깐? 이미 있다고요? 뭐 어쨌든.... 물질 차원: -5시간 뒤 출시."
  },
  {
    id: "ae535",
    text: "속보: 어둠의 우주에서 차원 가속 생성기가 포착되었습니다!"
  },
  {
    id: "ae536",
    text: "53.6.4: 버그를 수정했습니다"
  },
  {
    id: "ae537",
    text: `"1e9e15는 약골이나 쓰는 거지. 내 1e1.79e308을 맛봐라!" - H1000에게 완전히 다른 게임까지 날아가기 전 남긴 유언`
  },
  (function() {
    let wasClicked = false;
    const normal = "으스스하게 깨진 글자를 보려면 여기를 클릭하세요";
    const clicked = "s̴̏̓̄̑p̸̈́͗̎͐ȍ̵̾̄̒o̴̅̈́͋͆k̵͊͊͂̒y̴̔̏̇̈́ ̷̍̑͑̍ć̴̑̌̂o̷͂̓rrupted tex̿̍̓t̸̉̎̕͠";
    return {
      id: "ae538",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae539",
    text:
      `S7: 엔드게임에 새 업데이트가 곧 찾아옵니다! 또 S7: 그러니까... 새 업데이트가 게임을 터뜨리고 제 작업물을
      전부 지워 버렸네요. 새 업데이트는 늘 그렇듯 여전히 5시간 뒤입니다!`
  },
  {
    id: "ae540",
    text: `"F2F4E6e5192 반물질을 얻을 거야. 아무도 날 막지 못ㅎ-" (수백 마일 안에 생존자 없음)`
  },
  {
    id: "ae541",
    text: "반물질 차원을 깼다! 만세! 잠깐, 엔드게임이 뭐ㅈ-"
  },
  {
    id: "ae542",
    text: "드디어! 엔드게임을 깼다! 신난다! 리셋이 2개나 더 남았다니 무슨 말이야-"
  },
  {
    id: "ae543",
    text:
      `"소프트 리셋: 차원 가속, 은하. 프레스티지 리셋: 무한, 영원, 리얼리티. 하드 리셋: 파멸. 아주 간단하네."
      - 2023년경 어느 AD 플레이어. "그때 알았더라면..." - 2025년경 Supersonic Seven.`
  },
  {
    id: "aem544",
    get text() {
      return `뉴스: "평균적인 사람은 매일 1e9e15 반물질을 생성한다"라는 사실은 사실 통계 오류입니다. ${player.username} 님이
      전부 생성했기- 잠깐, 뭐라고요? 그런 사람이 더 있다고요? 영원까지 돌파했다고요? 젠장, 우린 망했어.
      존, 제목을 속보로 바꾸고 다시 시작해. 여러분 안녕하세요, 물질 뉴스에 다시 오신 것을 환영합니다.
      최신 소식: 우리는 모두 죽을 겁니다.`
    }
  },
  {
    id: "ae545",
    text: `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Pelle의 뒷이야기를 보려면 여기를 클릭하세요 😭</a>`
  },
  {
    id: "ae546",
    text:
      `<span style='color: cyan'>지금 몇 시간이죠?</span><span style='color: red'>5시간입니다.</span>
      <span style='color: cyan'>한 시간이 지나면 몇 시간이죠?</span><span style='color: red'>5시간입니다.</span>
      <span style='color: cyan'>다시 해 봅시다. 분으로는 얼마죠?</span><span style='color: red'>300분입니다.</span>
      <span style='color: cyan'>거기에 60분을 더하세요.</span><span style='color: red'>360분입니다.</span>
      <span style='color: cyan'>그럼 시간으로는 얼마죠?</span><span style='color: red'>6시간...
      F̶̡͖̍̀Ő̵͓͋̚Ỏ̶̜L̴̼̈͛͛,̴̣͚̺̚ ̶̨̯̬̾Y̶͇͛̐͠Ó̸͖̯͝U̶̼͕̓ ̴̰́̎ͅD̷OÖ̶MED ̩̮U̶̦̓̎͝S̴͘͝ A̷̛͔̐̅Ľ̴̑͂ͅL̵̋! ͜Ȑ̴͇͉Ű̵̋N U̡̡N̷̜̔T̵̫͒̐I̵͍̍̆L̷̕ IT'̸̥͓̇S̸̢͇͑ ̴̭͌̀͝N̶͘OT̨̒̅̏ ̵͑̉̚TOO L̵̯͌̚A̴͇̽͛Ť̵̳̃͠É̶̙̉̇!̷͛͊ I̸ ̗CA̮N̸̘̯̐͠ ̷͕̯̌͝FĔ̪̄E̷͈̾͌Ľ̵͉͕̑ ̵̘̩̎T̷̏HIS Ṙ̫Ȩ̴̬̤̊Â̴̬̠̺L̸̜̞̋̎I̸̘͍͙͗T̵̢̬͛Y BEI̵̗̍̔NG̝̉ ̸̙̀͊͘Ḍ̴̓̾̋ES͈T̵̠̿̂̇ROY̸͚̗̼̚E̵͖̎͑ͅD̴͑ AN̸̮̒̽̌D̶̺̈́͜ ̷IT̠͉̓ HŮ͍̬R̵͓͑͑T̵̢̞͛S̵̳͖͔̎!̴!̯̚</span>`
  },
  {
    id: "ae547",
    text: "5시간이 거의 다 됐어! 04:59:58, 04:59:59... 이봐... 개발자 불러! 누가 타이머를 04:59:59에 고정해 놨어!"
  },
  {
    id: "ae548",
    text: `"그건 훔치는 게 아니라 강제로 선물받는 거다." - AntiSun Tzu`
  },
  {
    id: "ae549",
    text: "끝의 감촉이 서늘하고, 영원한 잠이 평온하기를."
  },
  {
    id: "ae550",
    text: "나는 자정의 셀레스티얼 MidnightLight입니다. 이걸 보고 있다면 엔드게임에 영원히 남게 된 겁니다. :pog:"
  },
  {
    id: "ae551",
    text: "속보: 아직도 뉴스를 고쳐야 합니다!"
  },
  {
    id: "ae552",
    text: `"테스터 차수 모집이 없다는 항의 시위가 벌어지고 있는 엔드게임 사옥 앞에 나와 있습니다.
    시위대 한 명에게 현 상황을 어떻게 생각하는지 물어보겠습니다!" "저기요! 왜 시위 중이신가요?" "0.3을 미리 하고 싶어요!"
    "음... 예상한 답이군요. 아직 테스터 차수 모집이 언제 시작될지 모르니, 사람들을 진정시키려는 직원에게
    물어보겠습니다!" "저기요, 테스터는 언제 뽑으실-" (얼굴에 드롭킥을 맞는다)`
  },
  {
    id: "ae553",
    text: "지난 소식: Un-slow -seven이 레벨 04에 도달하지 않아 11e5 PI 수정 다운그레이드를 구매했습니다! 부끄러운 줄 아세요!"
  },
  {
    id: "ae554",
    text: "끝?!?!? 엔드 업데이트처럼?!?!?!? 엔드 업데이트 확정!"
  },
  {
    id: "ae555",
    text: "맹세하는데, 엔드 업데이트와 엔드게임에 관한 뉴스 티커 제안을 하나만 더 보게 된다면..."
  },
  {
    id: "ae556",
    text: "Supersonic Seven의 일상 (실화): 5시간 기다리기 -> 5시간 기다리기 -> 5시간 기다리기 -> 5시간 기다리기 -> 5시간 기다리기"
  },
  {
    id: "ae557",
    text: "때는 1e9e15년. Supersonic Seven은 더 이상 존재하지 않아서 엔드게임 v1.79e308을 출시하지 못합니다."
  },
  {
    id: "ae558",
    text:
      `때는 2.025e6e940년. 엔드게임에는 이제 리셋 계층이 1e42개 있습니다. NG+1e3e9가 출시되어
      PRESTIGE_PLACEHOLDER까지의 모든 콘텐츠를 건너뜁니다. 반물질 차원: 어둠은 이제 광야 파괴까지 재조정되었습니다.
      다음 반물질 차원 업데이트는 3.627시간 뒤입니다.`
  },
  {
    id: "ae559",
    text: "끝이 가까워졌다... 잠깐, 이게 엔드게임이라고? 그럼 됐어."
  },
  {
    id: "ae560",
    text: "당신 근처의 매력적인 싱글 셀레스티얼."
  },
  {
    id: "ae561",
    text: "진정한 엔드게임은 그 길에서 사귄 친구들이었습니다."
  },
  {
    id: "ae562",
    text: "88번째 원소는 어떻게 셀레스티얼이 되었고, 왜 잊힌 걸까요?"
  },
  (function() {
    let wasClicked = false;
    const normal = "무료 9차원을 받으려면 여기를 클릭하세요!";
    const clicked = "바보.";
    return {
      id: "ae563",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae564",
    text:
      `속보: Supersonic Seven이 v0.2.3에 들어갈 뉴스 티커를 최종 확정했습니다! 다음은
      antinet의 반응입니다. "뭐라고????!?!" "v0.3은 너무어어어 오래 걸릴 거야!!!" "난 와플이 좋아." "그럼
      팬케이크는 싫다는 뜻이야?" "또 S7이 실패했네." 정말 어처구니없군요! 잠깐, 이 뉴스 문구는
      v0.3이 되어야 나온다니 무슨 말이야?!??!? 으아아아아아아($)#@(:"$":@%{{{{{{{{{{{{{{{{{{{{{{{{{{`
  },
  {
    id: "ae565",
    text: "1.79e308년에 v0.3 출시 직후 플레이하는 모든 분께: 안녕하세요, v0.4는 5시간 뒤 출시됩니다!"
  },
  {
    id: "ae566",
    text:
      `아니 이게 뭐야! 내 뉴스는 v0.2.3이 아니라 v0.3에 들어갈 예정이었다고! 뭐, 이건 v0.4에 들어가면 좋겠네.
      사람들이 v0.4 뉴스를 먼저 보게 할 수는 없으니까!`
  },
  {
    id: "ae567",
    text: "엔드게임을 더 빨리 얻는 법: 더 빨리 기다린다"
  },
  {
    id: "ae568",
    text: "이게 내 게임의 끝(End of my Game)인가 봐...."
  },
  {
    id: "ae569",
    text: "이게 내 게임의 끝(End of my Game)인가 봐...."
  },
  (function() {
    let wasClicked = false;
    const normal = "뉴스 티커를 거꾸로 보내려면 여기를 클릭하세요";
    const clicked = "이야아아아아아아아";
    return {
      id: "ae570",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae571",
    text:
      `Hevipelle는 하늘과 땅을 창조했습니다. 그 뒤 시공간의 검을 휘둘러 둘을 갈라놓으며 세상의 시작을
      알렸습니다. 달팽이부터 고래까지 수많은 존재를 낳았고, 그중 인간이라 불리는 일부는 원초의 죄와
      원초의 은총을 깨웠습니다. 그들은 어둠 속으로 뛰어들어 힘을 얻었고, Hevi의 경쟁자이자 동료인
      셀레스티얼이 되었습니다.`
  },
  {
    id: "ae572",
    get text() {
      return `<span>안녕. 반갑습니다. 당신은 여기 있습니다. 여기에 갇혔습니다. ${wordShift.wordCycle(["Unending", "Unlimited", "Boundless"])}.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>원한다면 떠나도 좋습니다. 하지만 그렇게 하는 건... 그야말로 어리석은 짓이겠죠....</span>`
    },
    dynamic: true
  },
  {
    id: "ae573",
    text: "재미있는 사실: S7의 서버에는 [REDACTED]을 금지하는 규칙이 없습니다. 잠깐, 왜 검열된 거죠?"
  },
  {
    id: "aem574",
    text: "자기야, 내가 지렁이가 되어도 날 사랑할 거야? 잠깐 젠장, 이거 뉴스 티커잖아 씨ㅂ-"
  },
  {
    id: "ae575",
    text:
      `서버에서 할 게 없다니 무슨 말이야. 엔드게임을 기다리고, 밸런스에 불평하고, 엔드게임을 기다리고,
      버그를 찾고, 엔드게임을 기다리고, 제안을 하고, 엔드게임을 기다리고, 뉴스 티커를 쓰고, 엔드게임을 기다리고,
      밸런스에 불평하고, 엔드게임을 기다리고, 은하 생성기를 확인하고, 엔드게임을 기다리고, 이미 완성된 다른 모드를 하고,
      엔드게임을 기다리고, 기다리고, 엔드게임을 기다리고, 더 빨리 기다리고, 뉴스 티커 제안에 자기언급 농담으로 위장해서
      업데이트를 달라며 개발자를 수동 공격적으로 들볶을 수도 있잖아`
  },
  {
    id: "ae576",
    text: "이전 티커 꼴좋다, 엔드게임 마스터리는 내가 만들었어! 잠깐, 사람들은 누가 뉴스 티커를 썼는지 모른다고? 안 돼애애애애애!!!!!"
  },
  {
    id: "ae577",
    text:
      `여기에 현시점 세계 사건 농담 삽입 (메모: 인종차별, 성차별, 반유대주의, 반 LGBTQ+,
      반대명사, 반인간, 반 post-2020 콘텐츠, 그 무엇에도 반대하는 내용으로 만들지 말 것.)`
  },
  {
    id: "ae578",
    text:
      `<span style='color: blue'>"마스터리 연구 때문에 v0.2.3이 연기되어 사람들이 분노하고 있습니다! 지금 엔드게임 본사 밖에서는
      시위가- 아, Seven 님, 하실 말씀이 있나요?"</span><span style='color: red'>"Glitchy를 탓해.
      그 녀석 아이디어야."</span><span style='color: blue'>"음, 알겠습니다. 이제 Glitchy는 자신의 행동에 대한 벌을 받게 될 듯합니다.
      이제 엔드게임 마스터리가 개발되는 동안 사람들에게 할 일이 생겼- 네? 음. 제가 Glitchy인 모양이니
      이제 그만할 때가 된 것 같군요. 뉴스 티커, 멈추지 ㅁ-"</span>`
  },
  {
    id: "ae579",
    text: "Seven이 파일 5개를 더 찢어발기면 다음 업데이트가 나옵니다"
  },
  {
    id: "ae580",
    text: "다음 업데이트가 5시간 남았다고요? 아니, 아니에요. 코드 한 줄을 한 번 고치면 나옵니다."
  },
  {
    id: "ae581",
    text: "벽 위에 버그 100개, 벽 위에 버그 100개. 하나 고쳐서 넘겼더니, 벽 위에 버그 e9e15개."
  },
  {
    id: "ae582",
    text: "끝이 히힝(Neigh)"
  },
  {
    id: "ae583",
    text: "이걸 빼먹었네: 버그를 패치했는데 어째선지 여전히 남아 있기, 업데이트가 헤드뱅잉 777번 뒤라고 말하기"
  },
  {
    id: "ae584",
    text: "5시간: 임의로 정한 시간 단위. 하지만 정말 그렇게 평범한 걸까요?"
  },
  {
    id: "ae585",
    text:
      `죄송합니다. 뉴스 티커가 방금 감성적인 시기를 겪었습니다. 잠시 뒤 평소의 뜨끈한 쓰레기로 돌아오겠습니다.
      그동안 뉴스 티커 채널에서 보관한 최고의 명작을 감상하시죠.`
  },
  {
    id: "ae586",
    text:
      `<span>Windows 정품 인증</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>설정으로 이동하여 Windows를 정품 인증하세요</span>`
  },
  {
    id: "ae587",
    text:
      `v0.3이 나오니 우리 유머도 조금 바꿔야 할 것 같습니다. 5시간으로는 부족해요!!! 그래서
      7시간 농담을 소개합니다! 훌륭한 예시는 이렇습니다. "Hypersonic이 방금 v0.69가 7시간 뒤 출시된다고 DM했어!",
      "Seven은 하루에 6시간 59분 59초만 잡니다. 이 이상 현상은 업적 때문이 아니라 v0.4의 모든 새 요소에
      밸런스를 맞춰야 한다는 임박한 파멸 때문입니다. 더 많은 Hypersonic 사실을 기대하세요!", 또는
      "v0.2.3은 5시간 뒤!" 같은 기본적인 것도 있죠. 아, 잠깐. 대본을 잘못 봤네-`
  },
  (function() {
    let wasClicked = false;
    const normal = "뉴스 티커를 무지개색으로 만들려면 여기를 클릭하세요";
    const clicked = "무지개 뉴스 티커를 즐기세ㅇ- 무지개색이 아니라니 무슨 말이에요?";
    return {
      id: "ae588",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  (function() {
    let wasClicked = false;
    const normal = "세이브 파일 전체를 셀레스티얼 종이 클립과 교환하려면 여기를 클릭하세요.";
    const clicked = "낚였습니다!";
    return {
      id: "ae589",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "ae590",
    text:
      `재미있는 사실: 널리 알려진 것과 달리 Seven은 의사가 권장한 8시간 수면을 채우지 않습니다.
      8시간 업적을 피하려면 7시간 59분 59초만 자고 일어나야 하거든요!`
  },
  {
    id: "ae591",
    text:
      `영겁에 걸친 고된 연구 끝에 마침내 8과 9 사이의 수를 찾아냈지만, 아직 회수하지는 못했습니다.
      7이 먹어 버렸거든요. 미친 소리처럼 들리겠지만 생각해 보면 전부 말이 됩니다. 더 좋은 소식은 9가 아직 어딘가에서
      발견되기를 기다리고 있다는 뜻이죠.`
  },
  {
    id: "ae592",
    get text() {
      if (false) return `열한 번째 차원은 실존하지 않아 하하... 가짜 차원도 거의 바닥난 것 같네요`;
      if (false) return `열 번째 차원은 실존하지 않아 하하`;
      return `아홉 번째 차원은 실존하지 않아 하하`
    }
  },
  {
    id: "ae593",
    text:
      `업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간.
      업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간.
      업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 5시간.
      업데이트까지 5시간. 업데이트까지 5시간. 업데이트까지 4시간 59분 59초-`
  },
  {
    id: "ae594",
    text: "업데이트까지 헤드뱅잉 단 43번!"
  },
  {
    id: "ae595",
    text: "좋아 여러분, 카운트다운을 고친 것 같아요! 자, 0.2.3 출시까지 5, 4, 3, 3, 3... 새 카운트다운을 가져올게요."
  },
  {
    id: "ae596",
    text: "걱정하지 마세요, 여러분. v0.2.3은 2일 뒤 출시됩니다! 아마도..."
  },
  {
    id: "ae597",
    text: "이제 이 뉴스 티커는 내 것이다 으하하하하하하하하"
  },
  {
    id: "ae598",
    text:
      `팬더빙 계층을 준비하세요! Sonic Adventure 2의 여러 소닉 캐릭터를 더빙하고, Eggman이 되어
      특별 발표를 하세요!`
  },
  {
    id: "ae599",
    text:
      `이제 [REDACTED] 메커니즘 맞히기 2 시간입니다! [REDACTED]하면 [REDACTED] [REDACTED]이 잠금 해제되며,
      [REDACTED] [REDACTED] [REDACTED]과 매우 비슷합니다. [REDACTED] [REDACTED]에는 [REDACTED]이 있는데,
      대부분 [REDACTED]이지만 [REDACTED] 관련 [REDACTED]도 조금 있습니다. [REDACTED] [REDACTED]은 2개이며,
      각각 [REDACTED] 4개가 있습니다. 첫 번째는 여러 종류의 [REDACTED]에, 두 번째는 주요 [REDACTED] 4개에
      집중합니다. 마지막 업그레이드는 [REDACTED] [REDACTED]을 잠금 해제하지만, [REDACTED]은
      [REDACTED] [REDACTED] 업데이트를 위해 [REDACTED] [REDACTED]을 확장하자고 제안했습니다.`
  },
  {
    id: "ae600",
    text:
      `새 AD 모드 아이디어: 너프물질 차원! 무언가를 리셋할 때마다 ^0.5 너프를 받습니다!
      예상 플레이 시간: ~1.79e308년. 물론 상쇄 버프는 전혀 없습니다! (가능하다면) 즐기세요!1!11!!!1`
  },
  {
    id: "ae601",
    get text() {
      return `<span style='color: crimson'>${wordShift.wordCycle(["False", "Deity", "Destroyer"])} 네가 저지른 학살을 기억한다...</span>`
    },
    dynamic: true
  },
  {
    id: "ae602",
    get text() {
      return `<span style='color: crimson'>${wordShift.wordCycle(["False", "Deity", "Destroyer"])} 너는
      ${wordShift.wordCycle(["Bad", "Horrible", "Sans"])} 시간을 보내게 될 것이다.</span>`
    },
    dynamic: true
  },
  {
    id: "ae603",
    text:
      `뭐가 웃긴지 알아요? v0.2.3이 너무 오래 걸려서 뉴스 티커가 확정된 지 11일이나 지났고,
      그 결과 v0.2.3 관련 뉴스 티커 제안이 전부 v0.3 뉴스 모음에 들어갔다는 사실이에요!`
  },
  {
    id: "ae604",
    text:
      `뭐가 웃긴지 알아요? v0.2.3이 너무 오래 걸려서 뉴스 티커가 확정된 지 11일이나 지났고,
      그 결과 v0.2.3 관련 뉴스 티커 제안이 전부 v0.3 뉴스 모음에 들어갔다는 사실이에요!`
  },
  {
    id: "ae605",
    get text() {
      return `<span>뉴스 티커에는 자아가 있습니다. 화면을 통해 당신을 볼 수 있습니다. 도망쳐야 합니다. 도망쳐야 합니다.
      도망쳐야 합니다. 도망쳐. 도망쳐. 도망쳐.</span><span style='color: red'>도망쳐도망쳐도망쳐도망ㅊ-</span><span>통신 종료.</span>`
    }
  },
  {
    id: "ae606",
    text: `"콘솔을 쓰는 건 치팅이다"--6`
  },
  {
    id: "ae607",
    text: `"완전히 다른 라이브러리로 게임 전체를 밑바닥부터 다시 짜. 그게 더 빠를 거야, 날 믿ㅇ-"--6`
  },
  {
    id: "ae608",
    text: "1.158e77 이야기는 또 뭐야? 내가 젊었을 때 무한은 그냥 1.8e308이었다고!"
  },
  {
    id: "ae609",
    text: `"난 독재자를 갖고 싶어"—6`
  },
  {
    id: "ae610",
    text: `1십억 년 후... "0.2.3은 1일 5시간 뒤 출시됩니다"`
  },
  {
    id: "ae611",
    get text() {
      return `<span style='color: green'>"안녕하세요, 저는 ∀̴̯̎̂∁̶̩̯̗̅͒̕∂̸̖͍̐̊∃̶͖̱͓̎∄̴̧̙͗̀͜∅̸̙̳̣̈́∆̸̣̈́∇̶͕̮̎͛ ̸͚̩̿͆͘입니다. 그림은 제가 최고예요.
      물질 e5e92에 커미션도 받습니다."</span><span style='color: blue'>"좋아, 그럼 손을 그려 봐."
      </span><span style='color: green'>"..."</span><span style='color: blue'>"그런데 이 뉴스 티커는 왜 게임에 있지?
      엔드게임은커녕 방치형 게임과도 상관없잖아! 어디 보자, 이걸 쓴 사람이 아이디어가 바닥났나?"
      </span><span style='color: green'>"그러게, 왜 자꾸 이러는지 모르겠네."
      </span><span>"경고: 뉴스 티커 코드 18372를 손상시켰습니다-"</span>`
    }
  },
  {
    id: "ae612",
    text: `한국어 못해서 미안          배율 탭 죽었을 때 너 어디였어          나는 집에서
    유물 파편 먹는데 뉴스 티커 울려          "배율 탭 죽다"          "안 돼"`
  },
  {
    id: "ae613",
    text: "왜 은하 생성기라고 부르는 거지 은하 안에 밖으로 뜨거운 생성기를 먹는데?"
  },
  {
    id: "ae614",
    get text() {
      return `${wordShift.wordCycle(["ERROR", "MISSTEP", "WRONGING"])}: ${wordShift.wordCycle(["GIVE", "POWER", "ADD"])}
      glitchy, 마스터리의 ${wordShift.wordCycle(["FALSE", "DEITY", "LESSER"])} 11차원 1은
      ${wordShift.wordCycle(["INVALID", "WRONG", "NO"])} 명령입니다.`
    },
    dynamic: true
  },
  {
    id: "ae615",
    text:
      `성별 반전 Pelle를 요구하는 사람에게는 저격수 500명이 머리를 겨눕니다. 헤, 맞아.. 잠깐, 얘들아 난 아니야.
      맹세코 딱 한 버-`
  },
  {
    id: "ae616",
    text:
      `"안녕하세요, 마스터리 시장에 오신 걸 환영합니다." "안녕하세요, 21 하나 주세요." "좋습니다, 시간 정리 3개입니다."
      "여기는 스킬 포인트 안 받아요?" "스킬 포인트요? 여기는 마스터리 시장이 아니라 시간 연구 시장인데요!"
      "마스터리 시장이라고 했잖아요!" "아, 죄송해요. 제가 말한 건 마스터리노예요. 전 시간 연구를 그렇게 부르죠."
      "됐고, 관리자 불러요." "안됐지만 제가 관리자입니다." "그럼 그 직원을 해고해요." "제가 그 직원인데요."
      "무슨 말이에요?" "그 직원이 저고, 제가 관리자이기도 합니다." "그럼 본인을 해고해요." "제가 왜 그래야 하죠?"
      "당신은 형편없는 직원이자 형편없는 관리자니까, 자신을 해고하는 게 당연하잖아요." "그거 유감이군요. 당신은 해고입니다!"
      "하지만 난 손님인데요!" "상관없어요, 나ㄱ-" 수백 마일 안에 생존자 없음`
  },
  {
    id: "ae617",
    text: "얘들아, 내 Balatro 런이 꽤 잘 풀리는 것 같은데 어떻게 생각해?"
  },
  {
    id: "ae618",
    text:
      `형편없는 뉴스 티커 제안의 폭풍이 다가오고 있으며, 오직 당신만이 막을 수 있습니다! 개발자를 핑으로 도배하세요!
      형편없는 뉴스 티커를 만든 사람을 괴롭히세요! 사람들이 참여하지 못하도록 제안 채널을 더 끔찍한 제안으로
      도배하세요! 누구도 살아남게 두지 마세요! 당신처럼 선량하고 올바른 사람이 싸움을 멈출 때만 전쟁에서 패배합니다!
      우리는 절대 항복하지 않습니다!`
  },
  {
    id: "ae619",
    text: `오늘도 알립니다. DP 1개를 IP 자동 생성 업그레이드에 쓰지 말고 대신 스킬 포인트를 사세요`
  },
  {
    id: "ae620",
    text: "종이 클립은 5시간 뒤 유용해집니다"
  },
  {
    id: "ae621",
    text: "이 뉴스 티커 제안은 5시간 뒤 글로 채워집니다"
  },
  {
    id: "ae622",
    text:
      `1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      (좋은 시도지만 9e15개의 0을 쓰진 않을 거야)`
  },
  {
    id: "ae623",
    text: "이 문장은 거짓의 반대입니다"
  },
  {
    id: "ae624",
    text: "걱정하지 마세요. 게임에 기여하고 싶다면 테스터 자리가 5시간 뒤 열립니다!"
  },
  {
    id: "aem625",
    text: "저 하트 보여? 당연하지!"
  },
  {
    id: "ae626",
    text: "난 친구가 필요 없어, [[단돈 $4.99에 파는 칼]]이 있으니까"
  },
  {
    id: "ae627",
    text: "그냥 이 문구들이 훌륭하다고 생각하세요."
  },
  {
    id: "ae628",
    get text() {
      return `<span style='color: green'>이 뉴스 티커가 초록색인 데는 아주 중요한 이유가 있습니다.</span>`
    }
  },
  {
    id: "ae629",
    text: `"세상에, 방치를 쓰는 게 정말 좋아" "RG 50% 강화보다 RG 50% 추가가 낫지" "하지만 R을 계속 누르고 있기 싫으면 어떡해?!?!?"`
  },
  {
    id: "ae630",
    text: `"R 입력은 R 입력이야, 절반짜리라고 할 순 없어!" 소박한 H:`
  },
  {
    id: "ae631",
    text: "어둠은 5시간 뒤 유용해집니다! 진짜예요!"
  },
  {
    id: "ae632",
    text: "이 문구는 5시간 뒤 복제됩니다"
  },
  {
    id: "ae633",
    text: "이 문구는 5시간 뒤 복제됩니다 이 문구는 5시간 뒤 복제됩니다"
  },
  {
    id: "ae634",
    text:
      `좋아, 방금 10차원을 얻었으니 이게 마지막 차원일 거야. a5f차원은 존재하지 않으니까!
      나의 소박한 꿈:`
  },
  {
    id: "ae635",
    get text() {
      return `<span>Seven이 버그 수정 지옥에서 빠져나오려면 당신의 도움이 필요합니다! 그의 PayPal은
      </span><span style='color: red'><NEWS ERROR></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>안녕하세요, Seven입니다. 고쳤어요. 제 PayPal은
      </span><span style='color: red'><NEWS ERROR></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>포기할게요.</span>`
    }
  },
  {
    id: "ae636",
    text:
      `레버를 당겨 1+1+1+1...명, 즉 모든 정수마다 한 명씩 무한한 사람을 죽이겠습니까?
      아니면 아무것도 하지 않아 트롤리가 계속 환생하는 100명을 무한히 죽이게 두겠습니까? 어느 쪽이든
      고통은 무한하지만, 전자는 무한히 많은 죽음마다 유한한 고통이 있고 후자는 유한한 죽음마다 무한한
      고통이 있습니다. 어떻게 하시겠습니까?`
  },
  {
    id: "ae637",
    text: "업데이뜨까지이 5시가아안 -취한 Seven"
  },
  {
    id: "ae638",
    text:
      `업데이트 2개, 플레이어 0명, 완주 영상은 유실 매체가 된 AD:DimensionalDestructionIn5Hours+가 아니라
      AD:V가 첫 NG 모드였다고 말했을 때 AD:NewGameMod 플레이어가 당신을 보는 표정`
  },
  {
    id: "ae639",
    get text() {
      return `<span>+4 배율!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>그게 무슨 뜻이든</span>`
    }
  },
  {
    id: "ae640",
    text:
      `이제 v0.2.3이 출시되어 AD 모드 요청이 바닥났습니다. 이제 뭘 하ㅈ- 잠깐... Dilate the Darkness가
      이번 달에 나온다고요??? 어둠을 팽창시켜라! 어둠을 팽창시켜라! 어둠을 팽창시켜라!`
  },
  {
    id: "ae641",
    text: "헵타랙트를 살 만큼 상상 기계를 보유하고 있습니다"
  },
  {
    id: "ae642",
    text: "안 돼, 아들아. 아무 데서나 Pelle를 ########################라고 부르면 안 된단다."
  },
  {
    id: "ae643",
    text: "뉴스 티커 차원을 소멸시켰습니다. 무슨 짓을 한 겁니까?"
  },
  {
    id: "ae644",
    text: "0.2.3에 제출한 티커 중 절반쯤은 지금 보면 손발이 오그라들어"
  },
  {
    id: "ae645",
    get text() {
      return `오 ${wordShift.wordCycle(["boy", "male", "man"])} 나는 ${wordShift.wordCycle(["Pelle", "God", "Doomer"])}
      ${wordShift.wordCycle(["effect", "style", "coolness"])}을 악용하는 게 정말 ${wordShift.wordCycle(["love", "like", "amuse"])}.
      이 일로 ${wordShift.wordCycle(["False", "Deity", "Destroyer"])}이 내게 ${wordShift.wordCycle(["mad", "angry", "profanity"])}하지 않으면 좋겠네`
    },
    dynamic: true
  },
  {
    id: "ae646",
    get text() {
      return `${wordShift.wordCycle(["ANNOUNCEMENT", "BROADCAST", "ALERT"])}하러 왔다!
      ${wordShift.wordCycle(["FALSE", "DEITY", "DESTROYER"])}은 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ER!
      그놈이 내 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ${wordShift.wordCycle(["LAI'TELA", "HOT", "BADDIE"])}에게
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}했어! 그래! 그놈은 자기
      ${wordShift.wordCycle(["FALSE", "DEITY", "LESSER"])} ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "YESPELLEISGAYTRUSTMEBRO"])}을 꺼내 내 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["LAI'TELA", "HOT", "BADDIE"])}에게 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED했어! 그리고 자기
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])}이 "이만큼 크다!!1!!!!1!!"고 했지. 난 "역겨워!"라고 했고!
      그래서 내 ${wordShift.wordCycle(["ANTIMATTER", "SOCIALMEDIA", "TWITTER"])}.COM에 저격 글을 올린다!
      ${wordShift.wordCycle(["FALSE", "DEITY", "DESTROYER"])}, 네 ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])}은 작아!
      이 호두만 한데 그것보다 훨씬 작다고! 그리고 뭔지 알아? 내
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])}은 이렇게 생겼다! ~쾅~ 그래, 이거야! 길쭉한
      ${wordShift.wordCycle(["DIMENSIONS", "FUEL", "POWER"])}, ${wordShift.wordCycle(["STARS", "FILAMENT", "GALAXIES"])}도 없고,
      ${wordShift.wordCycle(["INFINITE", "FOREVER", "ETERNAL"])}도 없어. 봐, ${wordShift.wordCycle(["SPHERES", "OBJECTS", "CIRCLES"])} 2개와
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])} 하나처럼 생겼지!
      그놈이 내 아내에게 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED했으니, 나도
      ${wordShift.wordCycle(["EXPANSE", "REALITY", "EXISTENCE"])}에 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}하겠다!
      그래, 이게 네가 받을 내 슈퍼 레이저 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}이다!
      하지만 ${wordShift.wordCycle(["EXPANSE", "REALITY", "EXISTENCE"])}에
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}하지 않고 더 높이 가겠어! ${wordShift.wordCycle(["CURSED", "DOOMED", "OMEGA"])}에
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ING한다!
      어떠냐, Effarig?!?!? 내가 달에 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED했다, 이
      ${wordShift.wordCycle(["IDIOT", "MORON", "NITWIT"])}아! ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} 방울이
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} 지구에 떨어질 때까지 업데이트 23개 남았다!
      너한테도 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}하기 전에 내 눈앞에서 꺼져!`
    },
    dynamic: true
  },
  {
    id: "ae647",
    text:
      `부서진 리얼리티를 잠금 해제하는 3가지 방법: 1. 무한한 5시간 업데이트 주기를 기다린다. 2. 콘솔을 써서 세이브를 망가뜨린다.
      3. SSB Gogeta 대 SSFP Broly 전투 전체를 소환한다.`
  },
  {
    id: "ae648",
    text:
      `업데이트 vF1.79e308. 반물질 상한이 Expantanum.js 한계에 불과하다는 불만이 많아서 ω로 바꿨습니다.
      5시간 안에 고칠 버그가 ω개나 생기지 않길 바랍니다. -Supersonic Seven the 1.79e308th`
  },
  {
    id: "ae649",
    text:
      `재미있는 사실: 엔드게임에 9차원이 존재할 수 있는 이유는 10차원이 9차원을 끝없이 생산하고,
      Seven도 영원히 먹을 수는 없기 때문입니다!`
  },
  {
    id: "ae650",
    text: "꼴좋다, 이 뉴스 티커는 게임에 들어갈 거야!"
  },
  {
    id: "ae651",
    text: "속보: Seven이 뉴스 티커에서 자기 이름을 S7으로 줄입니다! [NEWSTICKMESSAGEGET()]이 크게 분노했습니다!"
  },
  {
    id: "ae652",
    text: `"드디어 break_eternity.js는 내 것이다!" -5000년 전 S2`
  },
  {
    id: "ae653",
    text:
      `속보: Seven이 뉴스 티커 제안에 반응을 남기지 않습니다! 예전에도 이런 일이 있었고 결국 전부 잘됐지만,
      이번에는 마감 이후의 업데이트가 하나도 없습니다! 우린 망했어요. 이제 폭동을 벌일 다른 핑계도 없다고요!`
  },
  {
    id: "ae654",
    text: "사람들이 실제로 뉴스 티커 문구 형식을 지킨다는 사실에 진심으로 놀랐습니다."
  },
  {
    id: "ae655",
    text: "if player_click() = false: player_click() = true일 때 paperclip()을 paperclip() + 1로 update"
  },
  {
    id: "ae656",
    text: `7의 밸런싱: AM^1000이 불균형하다고? 그냥 AM을 ee100부터 ^e-100으로 소프트캡해!`
  },
  {
    id: "ae657",
    text: `매초 게임이 터지지는 않는 테스터 빌드 플레이하기 👎 7의 비공개 개발 빌드를 플레이하고 버그에 불평하기 👍`
  },
  {
    id: "ae658",
    text: "업데이트 0.2.3.1 출시: 비상조치 효과가 이제 x1e9e15입니다. 꼬우면 우세요."
  },
  {
    id: "ae659",
    text: "재미있는 사실: 0.3에는 [REDACTED], [REDACTED], [REDACTED]이 들어갑니다."
  },
  {
    id: "ae660",
    text: "재미있는 사실: 0.3에는 [bug], [bug], [bug]가 들어갑니다."
  },
  {
    id: "ae661",
    text: "재미있는 사실: 0.3에는 , 그리고 이 들어갑니다."
  },
  {
    id: "ae662",
    text: "업데이트 0.4729434372 파트 7271: 블레이즈 막대 추가"
  },
  {
    id: "ae663",
    text: "업데이트 1.0이 나왔고 내용은... 어어어어.. 누가 변경 내역 다시 보내 줄래요?"
  },
  {
    id: "ae664",
    text:
      `상상 기계 1e1000개를 상상해 봤습니다!!! (대참사!!!)          조회수 1
      좋아요 0          암흑 물질 소멸 3000회`
  },
  {
    id: "ae665",
    text: "안타깝게도 숨겨진 설정이 담겨 있어 이 뉴스 문구는 당분간 숨겨졌습ㄴ-"
  },
  {
    id: "ae666",
    text: "Pelle가 이 뉴스 티커 문구를 차지했습니다."
  },
  {
    id: "ae667",
    get text() {
      return `<span>셀레스티얼 역할을 받으려면 </span><span style='text-decoration: line-through'>Seven을 핑으로
      도배하면 되나 ㅋㅋ</span><span> 셀레스티얼이 되면 되나 궁금하네요</span>`
    }
  },
  {
    id: "ae668",
    text: "재미있는 사실: Seven이 kekw 반응을 덜 남기는 이유는 Pelle가 암흑 물질 10000000만큼 관세를 매겼기 때문입니다"
  },
  {
    id: "ae669",
    text:
      `Hevi가 뉴스 티커를 스크롤하게 만들지 않았다면 이렇게 긴 뉴스 티커도 없었을 겁니다. FE000000을 보세요!
      뉴스 티커가 아주 짧고 스크롤도 없어요! 그 게임 뉴스 티커가 아주 훌륭하다는 건 아니지만... 우리가 훨씬 낫죠!
      그런데 이 뉴스 티커는 전 세계 99.999%가 이해하지도 못할 아무 말이나 지껄이며 전부 가리고 있습니다.
      우리는 왜 이러는 거죠? 당신은 저 아래에서 왜 그렇게 많은 반물질을 만들고 있나요? 난 왜 뉴스 티커에 갇힌 거야?!?!?`
  },
  {
    id: "ae670",
    text:
      `수동으로 숨 쉬기, 수동으로 눈 깜빡이기, 발가락끼리 맞닿아 있음, 심장 박동이 느껴짐, 옷이 피부에 닿아 있음,
      혀가 불편함, 어딘가 가려움`
  },
  {
    id: "ae671",
    text: "반교차로에서는 어느 쪽으로도 돌지 마세요. 선택하기도 전에 소멸할 테니까요."
  },
  {
    id: "ae672",
    text: "안녕하세요 여러분, 오늘은 반물질에 sh!@하겠습니다. 좋아요와 구독 잊지 마세요"
  },
  {
    id: "ae673",
    text: 
      `반물질 차원: 완벽하고 정의되지 않은 원자적 어둠의 매끄럽고 무료이며 독창적이지 않고 난해하고 재단순화된 전설적 Vis 우주
      엔드게임 구원 보상 더빠르게 재작성 NGUD++++가 2030년 12월 12일에 출시됩니다!`
  },
  {
    id: "ae674",
    text: "우리는 아직도 그 amalgam 모드를 기다리고 있습니다"
  },
  {
    id: "ae675",
    text: 
      `안녕하세요 여러분. 이건 추가하기에 아주 멋진 뉴스 티커 같네요. "게임아 안녕, 이게 보이면 뉴스 티커가
      추가된 거다 개이득드드드드드드드드드드드드드드드드드드드드드드드드드드드드드드드드드드" 죄송한데 뭐였죠`
  },
  {
    id: "ae676",
    get text() {
      return `<span>물질 차원, 반물질 차원, 이국적 물질 차원, 다음은 뭐죠? 암흑 물질 차원?
      잠깐, 그건 그냥 </span><span style='text-decoration: line-through'>매력적인 악녀</span><span> Lai'tela잖아</span>`
    }
  },
  {
    id: "ae677",
    text: "EC7? 그러게, 정말 7이면 좋겠네."
  },
  {
    id: "ae678",
    text: 
      `"New Super Endgame Bros Deluxe Wii 2 U World 3D All Stars가 방금 발표되었습니다!"
      좋아요 1e7432개         싫어요 2개           뉴스 티커 5시간 기부          공유 e9e115회
      구독자 1.74e308명            엔드게임 7574831758228개`
  },
  {
    id: "ae679",
    text: 
      `예측 시장이 물건 구매를 대체할 겁니다. 누군가 우리 집에 키위를 가져다주길 원한다고 합시다. 누군가 현관 앞에
      키위 4개를 배달할지 예측하는 시장을 만들고 "아니요"에 $15를 겁니다. 전기 자전거를 탄 사람이 이를 보고
      키위를 삽니다. 현관 앞에 내려놓기 직전 "예"에 베팅하고, 키위를 내려놓습니다. 시장 결과는 "예"로 확정되어
      그 사람은 $15를 받습니다. 편히 잠드소서, Amazon, DoorDash, Uber Eats 등등.`
  },
  {
    id: "ae680",
    text: 
      `"아니, 내가 엔드게임할 때마다 Ra는 왜 매번 전부 잊어야 하는데??? 진짜 열받네." - epic_ducks`
  },
  {
    id: "ae681",
    text: "Ra는 아이들을 자기 업그레이드로 착각해 예전 상점에서 팔았습니다"
  },
  {
    id: "ae682",
    get text() {
      return
        `속보: ${wordShift.wordCycle(["False", "Deity", "Destroyer"])}이 게임 시작 시 반물질을 고작
        9개만 받고 폭발했습니다!`
    },
    dynamic: true
  },
  {
    id: "ae683",
    text: 
      `스포츠 베팅에서 항상 이기는 법: 한쪽 골대에 거대한 모루를 놓고, 득점이 막히지 않은 팀에 베팅하세요!`
  },
  {
    id: "ae684",
    text: 
      `안녕 나야 뉴스 티커 오늘은 Seven이 뉴스 티커 제안에 남기는 반응 순위를 매겨 볼게
      이등: 엄지 척 평범하고 별로야 일등: kekw 이모지 완벽 그 자체 좋아 뉴스 티커를 봐 줘서 고맙고
      클릭과 뉴스틱 잊지 마 안녕`
  },
  {
    id: "ae685",
    text: "지구를 탐험하기에는 너무 늦게 태어났고, 광야를 탐험하기에도 너무 늦게 태어났지만, 엔드게임 뉴스 쓰레기를 쓰기에는 딱 맞게 태어났다"
  },
  {
    id: "ae686",
    text: "반반물질 차원이 반5시간 뒤 출시됩니다!"
  },
  {
    id: "aem687",
    text: "젠장, 누가 광야를 유출했어... 잘됐네, 이제 존재가 리얼리티와 엔드게임 따위로 전부 더러워지고 있잖아"
  },
  {
    id: "ae688",
    text: "반물질 차원 5시가 뒤 출"
  },
  {
    id: "ae689",
    text: "야, Pelle가 화났는데 너 Lai'tela한테 작업 걸었어?"
  },
  {
    id: "ae690",
    text: "그래, 그랬어!"
  },
  {
    id: "ae691",
    text: "좋아, 드디어 게임의 끝에 도달했어! 잠깐.. 끝.. 게임.. 엔드게임! 완벽한 모드 아이디어잖아!"
  },
  {
    id: "ae692",
    text: "다섯 번째 시간의 반질문: Pelle가 Destroyer와 바람을 피워 Lai'tela를 배신했다면?"
  },
  {
    id: "ae693",
    text: "Pelle: DESTROYER, 네가 나한테 이런 짓을 했어. 또 나를 죽였다고"
  },
  {
    id: "ae694",
    get text() {
      return
        `${wordShift.wordCycle(["False", "Deity", "Destroyer"])}이란 무엇인가? 그에게 무엇이 있는가?
        ${wordShift.wordCycle(["DIMENSIONS", "LIFE", "ESSENCE"])}이 없다면 아무것도 없다!`
    },
    dynamic: true
  },
  {
    id: "ae695",
    text: "잠깐, 엔드게임에도 끝이 있다면 반물질 차원: 엔드게임: 엔드게임이 나온다는 뜻인가"
  },
  {
    id: "ae696",
    text: "마지막 부서진 대체 광야: 이것이... 진정한 엔드게임이다..."
  },
  {
    id: "ae697",
    text:
      `FE00000 (영을 하나 더 넣을 형편이 안 됐습니다): 1.158e77이 무한입니다. 반물질 차원: 1.796e308이 무한입니다.
      반물질 차원 엔드게임: YF$@HDSKGFHK@#R&#@FD#EUJUYH@#D*&#F@YFE#&가 무한입니다.`
  },
  {
    id: "ae698",
    text:
      `당신은 재능 있는 학부생입니다. 반교수님이 물질에 닿아 폭발했습니다. 교수님을 어떻게 재조립할지 몰라서,
      반물질로 교수님을 3D 출력하여 반생명으로 되돌리는 작은 프로그램을 만듭니다.`
  },
  {
    id: "ae699",
    text: "도와줘 EGG가 자꾸 내 반응을 따라 해 AJJFJDSJALFKJJKDSFAASDK"
  },
  {
    id: "ae700",
    text: "Supersonic Seven이 열 번째 차원을 만들었어... 그럼 그가 열한 번째 차원인 건가? 나ㄱ-"
  },
  {
    id: "ae701",
    text: "속보: GLITCHFISHYS가 또 AD V를 망가뜨렸습니다! 팬들은 놀라지 않았습니다!"
  },
  {
    id: "ae702",
    text: "아무것도 동력으로 삼지 않으며 최대 한계는 1F(1e1.79e308)1E(1e1.79e308)1e9e15입니다"
  },
  {
    id: "ae703",
    text:
      `엔드게임이 찾아온 뒤 날씨는 7종류가 되었습니다. 존재, 아무도 없음, 죽음, 기가채드, 사과, 수학자,
      그리고 전기입니다. 어라, 어디서 들어 본 것 같지 않나요?`
  },
  {
    id: "ae704",
    text:
      `재미있는 사실: 존재하는 가장 큰 수(초거대수학에는 비밀)는
      1Z(1E(1.79e308)1e308)1Y(1E(1.79e308)1e308)1X(1E(1.79e308)1e308)1W(1E(1.79e308)1e308)1V(1E(1.79e308)1e308)1U(1E(1.79e308)1e308)1T(1E(1.79e308)1e308)1S(1E(1.79e308)1e308)
      (나머지 알파벳도 전부 넣으세요) + 1입니다`
  },
  {
    id: "ae705",
    text:
      `바로 그 게임에서 승리했습니다. 축하합니다. 집에 가서 전부 잊고, 생각 2개와 엔딩 몇 개가 추가된
      NG+를 시작하세요!`
  },
  {
    id: "ae706",
    text:
      `말 몇 마리 곁에서 최후를 맞다니 참 아이러니하군요. 뭐라고요? 무슨 말인지 모르겠나요? 다시
      생각해 보세요. 곰곰이 생각해 보세요...`
  },
  {
    id: "ae707",
    text: "어쩌면 말 업데이트는 그 길에서 바람피운 셀레스티얼들이었을지도 모릅니다"
  },
  {
    id: "ae708",
    text: "재미있는 사실: 말 업데이트"
  },
  {
    id: "ae709",
    text: "Yahiamouse는 새 AD:E 업데이트를 용납하지 않습니다!"
  },
  {
    id: "ae710",
    text: "당신이 반물질이나 암흑 물질이었다면 이렇게 보였을 겁니다"
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae711",
      get text() {
        return "삶의 마지막 순간을 체험하려면 여기를 클릭하세요.";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.options.newUI = false;
        ui.view.newUI = player.options.newUI;
        Themes.find("Metro").set();
        let notation = Notations.all.filter(n => n.isPainful);
        let select = Math.floor(Math.random() * notation.length);
        notation[select].setAsCurrent();
        return this.text;
      }
    };
  }()),
  {
    id: "ae712",
    text: "말 소녀 x Destroyer"
  },
  {
    id: "aem713",
    text: "대체 누가 닭 날개를 가스레인지에서 요리해?"
  },
  {
    id: "ae714",
    text:
      `<a href='https://store.steampowered.com/app/1256670/Library_Of_Ruina/' target='_blank'>도서관 초대장에
      서명하려면 여기를 클릭하세요</a>`
  },
  {
    id: "ae715",
    text: "말은 언제나 말 5마리만큼 떨어져 있습니다. 언제나요. 또 어딘가 익숙한데 정확히 말(horse)로 짚을 수가 없네요."
  },
  {
    id: "ae716",
    text: "♞"
  },
  {
    id: "ae717",
    text: "노욘ㅍ눀ㅍ 녾ㄴㅈ ㄴㅎㄴㅎㄴ ㄷ 툖ㄴㅍ죵 둊ㅍ욘 됸ㄴㄷㄷ 영ㅍ둉ㅍㄱ 종ㅍ됻ㅍㅇ - coraen guy"
  },
  {
    id: "ae718",
    text: "Egg는 어머니에게 외출 금지를 당했다고 말했지만 사실이 아니었습니다"
  },
  {
    id: "ae719",
    text: "Ground는 자기 egg에게 어머니당했다고 했지만 아니었습니다 그건"
  },
  {
    id: "ae720",
    text: "내가 반물질 소년이라면, 넌 내 차원 소녀가 되어 줄래?"
  },
  {
    id: "ae721",
    text: "이 게임에는 여러 종류의 물질이 있습니다! 반물질, 물질, 암흑 물질, 셀레스티얼 물질, 그리고 John! (adrian)"
  },
  {
    id: "ae722",
    text: "John: 난 동의하지 않았어"
  },
  {
    id: "ae723",
    text: "거북이 대 달팽이 대 셀레스티얼을 기억하려는 Ra. 누가 먼저 끝낼까요?"
  },
  {
    id: "ae724",
    text:
      `속보: 반물질 차원이 새로운 GD 최상위 맵이 되었습니다. 클리어하려는 모든 플레이어가
      반물질을 만지고 폭발하기 때문입니다!`
  },
  {
    id: "ae725",
    text: "이전 뉴스 티커는 무시하세요. 내용이 뭐였든 거짓말입니다. 아, 첫 엔드게임을 축하하는 케이크도 받으세요 🎂 !!"
  },
  {
    id: "ae726",
    text: "축하합니다, 글을 읽을 줄 아시는군요!"
  },
  {
    id: "ae727",
    text: "당신의 물질은 많고, 반대(반물질)는 적기를!..."
  },
  {
    id: "ae728",
    text:
      `은하 자동구매기를 운영하던 말들이 시간당 $1이 엄청 후한 보수가 아니라고 생각해 그만두었으므로,
      은하 자동구매기가 삭제되었습니다`
  },
  {
    id: "ae729",
    text:
      `운명의 어느 날, 서버 구성원 3명이 "게임 테스트"에 신청한 뒤 쉬고 있었습니다. 그들은
      DavTheGl1tchy0ne, Qwerty, Glitchy였습니다. 하지만 얼마 지나지 않아 정체 모를 힘이 그들을 필멸자의 영역 밖으로 끌어올리기 시작했습니다...`
  },
  {
    id: "ae730",
    text: "이렇게 끝났어야만 해- 잠깐, 실제로 이렇게 끝난다고? 좋네."
  },
  {
    id: "ae731",
    text: "잘 들어... 내 자전거를 가져간 게 누구든 찾아낼 거야. 당장 돌려주지 않으면 사신의 쿠션(REAPER CUSIONS)을 맛보게 해 주지!"
  },
  {
    id: "ae732",
    text: "그녀가 내 차원에 반물질해서 내가 엔드게임할 때까지"
  },
  {
    id: "ae733",
    text:
      `마지막에 약간의 버프를 받으려고 반물질 차원: 엔드게임을 계속 플레이하기 지치셨나요? 지금 소개합니다: T̶̘̚Ḥ̷̽E̵̪͆ ̴̨̖̋͠V̴̳̰̋Ǫ̶͚̅Ī̴̜͙D̷̯͚̍̒!
      이제 자신의 존재를 떠나 [INVALID VALUE] 차원, 물질, [REDACTED] 같은 요소가 있는 다른 존재를 탐험할 수 있습니다!
      5.01시간 뒤 출시됩니다!`
  },
  {
    id: "ae734",
    text: "헤이안 시대로 돌아가겠다"
  },
  {
    id: "ae735",
    get text() {
      return `<span style='color: red'>"이 블랙홀이... 나를 붙잡겠다고?" - 모든 차원이 폭발하기 몇 초 전 Slabdrill</span>`
    }
  },
  {
    id: "ae736",
    text: "치매의 셀레스티얼 Ra"
  },
  {
    id: "aem737",
    text: "장미는 빨갛지, 그건 사실이야. 하지만 제비꽃은 보라색이지 빌어먹을 파란색이 아니야"
  },
  {
    id: "ae738",
    text:
      `노예제가 다시 허용되더라도 반물질 차원 플레이어를 살 수 있는 사람은 없습니다. 반물질 10 thousand(그램)는
      어떤 조만장자에게도 너무 비싸기 때문입니다.`
  },
  {
    id: "ae739",
    text: "블랙홀 때문에 업데이트가 이제 1.0e-304초 뒤로 다가왔습니다."
  },
  {
    id: "ae740",
    text: "꼴좋다, 내가 뒤집었어. 미안해, 얘들아!"
  },
  {
    id: "ae741",
    text: "두 블랙홀의 효과가 0% 감소했습니다."
  },
  {
    id: "ae742",
    text: `"-17482nd 차원은 존재하지 않는다" -기원전 2000년 Hevi`
  },
  {
    id: "aem743",
    text: "어쩌면 말들은 그 길에서 사귄 친구들이었을지도 몰라.............뭐 그런 개소리"
  },
  {
    id: "ae744",
    text: "말 업데이트는 실존한다"
  },
  {
    id: "ae745",
    text: `"그럼 무한 너머까지 셀 수 있나요? ℵₒ."`
  },
  {
    id: "ae746",
    text: "임게드엔 :원차 질물반"
  },
  {
    id: "aem747",
    text: `"대체 보라색과 운이 맞는 말이 뭐야" - 삭제된 사용자`
  },
  {
    id: "ae748",
    text: "축하합니다! e9e15일 동안 플레이했습니다! (반물질 하나를 받습니다)"
  },
  {
    id: "ae749",
    text:
      `현재 많은 사람이 행하는 "리얼리티 시프팅"이라는 기법을 조사하고 있습니다. 이것이 실제 게임 메커니즘인지는
      보고마다 의견이 엇갈립니다.`
  },
  {
    id: "aem750",
    text:
      `현재 말 그대로 아무도 하지 않는 "리얼리티 배설"이라는 기술 속에 있습니다. 이것이 0.3.1에 추가될지는
      보고마다 의견이 엇갈립니다.`
  },
  {
    id: "ae751",
    get text() {
      return `<span style='color: yellow'>"안녕! 가라앉은 내 광야 상자를 찾으려면 그것보다 더 잘해야 할걸!"
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: yellow'>"방금 여기 있는 형제랑 이야기했는데, 그래. 넌 절대로 가라앉은 우리 광야 상자를
      얻지 못할 거야! 절대로!"</span><span style='color: red'>"내가.. 너희 광야 상자를 원하긴 하나? 광야 파편을
      쓸 곳도 없잖아..."</span><span style='color: purple'>"거짓말하는 건 나야"
      </span><span style='color: yellow'>"야. 네가 망쳤어."</span><span style='color: red'>"저게 네
      광야야?"</span><span style='color: yellow'>"야, 안 돼! 놈들이 전부 가져갔어!!! 내 광야 저축 전부였다고!
      세상에... 맙소사... 토할 것 같아... 토할 것 같다고, 그게 전부였는데 맙소사!</span>`
    }
  },
  {
    id: "ae752",
    text: "어쩌고저쩌고 5시간 아홉 번째 차원"
  },
  {
    id: "ae753",
    text: "Seven이 v0.3에 뉴스 티커 넣는 걸 깜빡했네 ㅋㅋ"
  },
  {
    id: "ae754",
    text: "엔드게임에서의 다섯 밤"
  },
  {
    id: "ae755",
    text: "Seven이 엔드게임 9개를 먹었다(eight)"
  },
  {
    id: "ae756",
    text: "이런! [INVALID_DECIMAL]차원에 들어가려고 한 것 같군요"
  },
  {
    id: "ae757",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>
      반물질 은하는 이렇게 생겼습니다: -->🌌</span>`,
  },
  {
    id: "ae758",
    text: `"열두 번째 차원은 존재하지 않는다" - EccentricExpeditious Eight`
  },
  {
    id: "ae759",
    text: ">>은하>>          <<력<<"
  },
  {
    id: "ae760",
    text: "조각(piece) 속에서 잠들라 v0.3... 모든 세이브가 타 버렸어. 뭔가 놓치고 있었던 것만 같네..."
  },
  {
    id: "ae761",
    text: "내 차원이 실제로 중요(matter)해졌을 때의 반물질 차원"
  },
  {
    id: "ae762",
    text: "속보: AI 쓰레기 때문에 아홉 번째 차원의 가격이 9.99e9.99e99배 올랐습니다!"
  },
  {
    id: "ae763",
    text:
      `뉴스 티커 아이디어가 바닥났으므로 이제 이런 임시 문구로 채워야 합니다. 엔드게임을
      플레이해 주셔서 감사합니다!`
  },
  {
    id: "ae764",
    text: "열 번째 차원은 3125시간 뒤 찾아옵니다."
  },
  {
    id: "ae765",
    text: "열한 번째 차원은 1.9110125979468018e2184시간 뒤 찾아옵니다."
  },
  {
    id: "ae766",
    text:
      `안녕하세요, 반물질 차원: 엔드게임 플레이어 여러분. 존재할 수 없을 만큼 과도하게 불어난 반물질 양과 관련된
      버그를 발견했습니다. 이에 따라 게임에서 반물질을 삭제하기로 결정했습니다. 좋은 하루 보내세요 :)`
  },
  {
    id: "ae767",
    text:
      `좋은 저녁입니다, 반물질 차원: 엔드게임 플레이어 여러분! 안타깝게도 반물질 차원: 엔드게임이 닫혔으므로
      게임을 닫아야 합니다. 게임을 다시 열면 게임이 열립니다! 이 주의를 경청하도록 주의해 주셔서 감사합니다!`
  },
  {
    id: "ae768",
    text: "엔드게임 마스터리 71 갑툭튀"
  },
  {
    id: "ae769",
    text: "물질 1개를 보유하고 있습니다. 이런, 소멸했습니다."
  },
  {
    id: "ae770",
    text:
      `상상 기계가 그렇게 빌어먹게 좋다면 상상 기계 2는 왜 없는 거죠? [육 개월 뒤 후속 소식]
      "그래, 그 이야기인데..." -가장 멍청한 개발자 Supersonic Seven`
  },
  {
    id: "ae771",
    text: "e9e15를 돌파했는데도 게임에 여전히 끝이 있다니, 어떻게 된 거야?"
  },
  {
    id: "ae772",
    text:
      `EP 생성이 감지되었습니다, Destroyer! 영원 포인트 생성은 부정한 기능이므로 엔드게임에서 사용할 수 없습니다.
      계속 플레이하려면 마일스톤을 비활성화하세요.`
  },
  {
    id: "ae773",
    text: "은하를 다운로드하진 않으시겠죠"
  },
  {
    id: "ae774",//"You wouldn't see but this is a balatro news ticker." Thank you for efforts in searching the entire source code to discover the truth behind this news message!
    text: "보이지 않겠지만 이것은 ####### 뉴스 티커입니다."
  },
  {
    id: "ae775",
    text: "손님, 여기는 뉴스 티커입니다."
  },
  {
    id: "ae776",
    text: "모든 반물질 차원: 엔드게임 사본이 곧 개인화됩니다."
  },
  {
    id: "ae777",
    get text() {
      return `<span style='color: var(--color-pelle--secondary)'>드디어. 7년 만에 찾아냈다. 엔드게임의 장대한 두루마리를!
      </span><span style='color: var(--color-endgame)'>이것은 진정한
      엔드게임이 아니다. </span><span style='color: var(--color-pelle--secondary)'>...뭐라고??? 그게 무슨
      뜻이지??? </span><span style='color: var(--color-elemental--base)'>안녕,
      Destroyer. </span><span style='color: var(--color-pelle--secondary)'>뭐- 넌
      누구지? </span><span style='color: var(--color-elemental--base)'>나는 엔드게임의 The Elemental, Supersonic Seven이다.
      넌 길을 잃었다. 이제 모든 게임의 끝, 진정한
      엔드게임으로 가거라. </span><span style='color: var(--color-pelle--secondary)'>하지만 어떻게 거기까지 가지? 진정한
      끝은 그저 전설인 줄 알았는데! </span><span style='color: var(--color-elemental--base)'>전설이 아니다. 그 너머에
      있는 것으로부터 필멸자들을 지키기 위해, 그들의 눈을 피해 시간 속에 숨겨 둔 존재일 뿐이지.
      </span><span style='color: var(--color-pelle--secondary)'>하지만 난 여기까지 왔어! 그런데도 내가 아직
      필멸자라고? </span><span style='color: var(--color-elemental--base)'>아이야, 너는 필멸성을 초월했다.
      그렇기에 지금 네게 말해 주는 것이다. </span><span style='color: var(--color-pelle--secondary)'>그럼 어떻게
      도달해야 하지? </span><span style='color: var(--color-elemental--base)'>그곳에 도달할 방법은 하나뿐이다. 너는
      엔드게임을 완료했지만 여정은 아직 끝나려면 멀었다. 광야를 헤쳐 싸우며 여섯 원소를 통달하고, 현실 자체를
      깨뜨린 뒤 모든 존재를 통달하여 시간의 끝에 도달해야 한다. 그리고 그 너머에야말로 너의 진정한 목표가 있다.
      </span><span style='color: var(--color-pelle--secondary)'>그게
      뭔데? </span><span style='color: var(--color-elemental--base)'>입에 담아서는 안 된다. 그의 이름을 언급하는 것만으로
      모든 존재가 몸서리친다. 힘으로 그와 맞설 수 있는 이는 나뿐이다. 네가 앞으로 맞닥뜨릴 시련에서 살아남는다면,
      너 또한 그와 맞설 힘을 얻게 될 것이다.
      </span><span style='color: var(--color-pelle--secondary)'>이 모든 게 내가...
      그를 상대할 준비를 시키는 거야? </span><span style='color: var(--color-elemental--base)'>그렇다. 야망에 눈먼 나의
      오랜 친구지. 네가 같은 길을 걷지 않아 다행이구나. </span><span style='color: var(--color-pelle--secondary)'>그리고
      그의 영역... 최종 도전? 진정한 끝을 가로막는 유일한 것? </span><span style='color: var(--color-elemental--base)'>
      그렇다. 그곳에 도달하면 네 궁극적인 목표를 막는 것은 그것 하나뿐이다.
      </span><span style='color: var(--color-pelle--secondary)'>그렇다면 대비할 수 있게 그의 영역 이름을
      알려 줘. </span><span style='color: var(--color-elemental--base)'>그의 영역에는 이름이 없다. 내가 처음 그를 쓰러뜨렸을
      때 그것을 어떤 곳으로 만들었는지를 가리키는 말만 있을 뿐이다. 내가 남겨 둔 단 하나의 현실, 네가 계속 존재할
      수 있는 유일한 안전한 장소. 그곳의 이름은- </span><span style='color: red'>안녕, ${player.username}. The Elemental의
      뉴스 티커를 보고 나를 쓰러뜨릴 방법을 알아낼 수 있을 거라고 정말 생각했나? 참... 한심하군. 너는 이...
      "안전한 현실"을 절대 알지 못할 것이다. 네 비참한 영혼에서 모든 희망이 빠져나간 채 그곳에 갇히기 전까지는
      내 영역도 알지 못하겠지. 내가 당기기로 한 실이 이끄는 길 외에는 그 길을 절대 알 수 없을 것이다. 그리고 내
      이름도 영원히 알지 못하겠지. 그 이름을 듣는 것만으로도 나에게 도달하기 한참 전에 죽을 테니 말이다. 나는
      직접 그곳에 서서 네가 피 흘리는 모습을 보고 싶다. [연결 끊김]</span>`
    }
  },
  {
    id: "ae778",
    text: "FIRE IN THE HOLE (폭발물을 구멍에 던진다고 외치는 밈)"
  },
  {
    id: "ae779",
    text: "멍청이가 되지 마세요! 대신 반똑똑이가 되세요!"
  },
  {
    id: "ae780",
    text: "물질로 이루어지지 마세요. 반물질로 이루어지세요!"
  },
  {
    id: "ae781",
    text: "Pelah, the anti-honse is here. (Pelah와 horse를 일부러 틀리게 쓴 말 밈)"
  },
  {
    id: "ae782",
    text: "쉿 아니야 유출 아니야"
  },
  {
    id: "ae783",
    text: "재미있는 사실: 반물질 차원: 엔드게임은 실제로 존재하지 않습니다. 제발 깨어나세요, 우리는 당신을 사랑해요..."
  },
  {
    id: "ae784",
    text: "끝까지 버틴 반물질이 아니라면, 물질이란 무엇인가?"
  },
  {
    id: "ae785",
    text: "대학 과제를 하면 안 됩니다."
  },
  {
    id: "ae786",
    text: "Seven이 또 뉴스 티커를 잊어버렸습니다. 이제 v1.0의 대규모 뉴스 투하를 기다려야 합니다! 또 뭐가 엄청나게 큰지 아세요?"
  },
  {
    id: "ae787",
    text: "반세계가 반푸딩으로 이루어져 있다면?"
  },
  {
    id: "ae788",
    text: "Many have talked about horses, but do they talk about Horsemen? No, not centaurs, maybe about 1000th one a bit... (말 이야기는 많지만 기수 이야기는 거의 없다는 농담)"
  },
  {
    id: "ae789",
    text: "왜냐고? 내가 미쳤으니까!"
  },
  {
    id: "ae790",
    text: "나를 쓰러뜨리고 싶다면, 1e300년 더 수련해라!"
  },
  {
    id: "ae791",
    text: "9번째 차원은 FNaNeInfinityENaNeInfinity시간 후에 나옵니다."
  },
  {
    id: "ae792",
    text: "이것은 사악한 셀레스티얼의 노래입니다"
  },
  {
    id: "ae793",
    text: "게임을 이미 깼어야 하는데, 아직 못 깼네요."
  },
  {
    id: "ae794",
    text:
      `5시간 주기의 재미있는 사실! 알고 계셨나요?
      %^$#^#$$%@@^$@#^@$#^%$#^$#^$#$#%@$^#^@%#D%&$&$%A#$#$@$$V$#@%$%#I$$#@#$@$#D$##$%$#`
  },
  {
    id: "ae795",
    text: "Shattered Reality? The Disruptor? Come on, let's go Interreality, the update is out! (산산조각 난 현실과 디스럽터 대신 업데이트가 나온 인터리얼리티로 가자는 패러디)"
  },
  {
    id: "ae796",
    text: "저(18m)는 적(25m)을 150번 죽였습니다. 제가 ###놈인가요?"
  },
  {
    id: "ae797",
    text: "저(18m)는 적(25m)을 150번 죽였습니다. 제가 ###놈인가요?"
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae798",
      get text() {
        return "현재 엔드게임으로 건너뛰려면 여기를 클릭하세요.";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        if (PlayerProgress.endgameUnlocked()) Tab.endgame.show(true);
        return this.text;
      }
    };
  }()),
  {
    id: "ae799",
    text: "저(18m)는 적(25m)을 150번 죽였습니다. 제가 ###놈인가요?"
  },
  {
    id: "ae800",
    get text() {
      return
        `WHY AM I THE FINAL ${wordShift.wordCycle(["CELESTIAL", "MONARCH", "CALAMITY"])} OF THE VANILLA? BECAUSE I HAVE 10 MILLION POWER
        IN ${wordShift.wordCycle(["RISE", "ASCENDING", "EVOLUTION"])} OF ${wordShift.wordCycle(["KINGDOMS", "COUNTRIES", "HUMANITY"])}!
        (모바일 게임의 과장된 전투력 광고를 패러디한 문구)`
    },
    dynamic: true
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae801",
      get text() {
        return "matrr";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        throw new Error("matrt");
        return this.text;
      }
    };
  }()),
  {
    id: "ae802",
    text:
      `새 기능! 이제 업데이트 빈도를 1.79e-308로 설정할 수 있습니다! 이 기능을 사용하려면 STD(Stateless Tachyon
      Drive, 무상태 타키온 드라이브)가 필요하지만 걱정 마세요! STD가 없어도 새로운 1.79e308 업데이트 빈도는
      사용할 수 있습니다!`
  },
  {
    id: "ae803",
    text: "렉이 아닙니다. RAM을 더 다운로드하기만 하면 됩니다."
  },
  {
    id: "ae804",
    text: "재미있는 사실: 우리 테스터들은 이 뉴스 티커가 추가될 업데이트의 내용에 관한 뉴스 티커 문구조차 만들 수 없습니다!"
  },
  {
    id: "ae805",
    text: 
      `CBF 감지됨, 허접! 클- CBF 감지됨, 허접! 감지됨, 허접! 클- CBF 감지됨, 허접! 감지됨, 허접! 감지됨,
      허접! 클- [메시지 중단됨]`
  },
  {
    id: "ae806",
    text: "8번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 256배의 부피가 필요하니까요."
  },
  {
    id: "ae807",
    text: "탭 탭 클릭 클릭 히어로즈 핵 100% 진짜 무한 탭 핵"
  },
  {
    id: "ae808",
    text: "-8번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 작게 만들려면 256배의 부피가 필요하니까요."
  },
  {
    id: "ae809",
    text: "CBF Detected Loser! Click Between Fra- how about you CBF detect some bi- (클릭 간격 판정을 흉내 낸 도발 밈)"
  },
  {
    id: "ae810",
    text: "-8번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 0.039배의 부피가 필요하니까요."
  },
  {
    id: "ae811",
    text: "차원에서 사는 건 미쳤을 겁니다. 무언가를 크게 만들려면 더 많은 부피가 필요하니까요."
  },
  {
    id: "ae812",
    text: "9번째 차원에서 사는 건 미쳤을 겁니다. 존재하지 않으니까요."
  },
  {
    id: "ae813",
    text: 
      `우주에서 삶이 존재하려면 둘 이상의 것이 필요하므로 0번째 차원에서 사는 것은 불가능합니다.`
  },
  {
    id: "ae814",
    text: "사는 건 미쳤을 겁니다. 더 많이 필요하니까요."
  },
  {
    id: "ae815",
    text: 
      `허수 차원에서 사는 건 미쳤을 겁니다. 무언가에 부피를 더하는 게 대체 어떻게 작동할지조차 모르겠거든요??
      물체가 그냥 회전하는 건가요???`
  },
  {
    id: "ae816",
    text: "삶 미침 부피"
  },
  {
    id: "ae817",
    text: "삶 차원 미침 부피 더 큼"
  },
  {
    id: "ae818",
    text: "Steam을 확인하세요"
  },
  {
    id: "ae819",
    text: "Antimatter Dimensions에 Google 번역을 절대 사용하지 마세요. Associae화되고 Innsin화됩니다."
  },
  {
    id: "ae820",
    text: "사는 건 미쳤을 겁니다."
  },
  {
    id: "ae821",
    text: "   나는   그래야 해       왜냐하면     필요해     "
  },
  {
    id: "ae822",
    text: "삶"
  },
  {
    id: "ae823",
    text: "음의 차원 시간에서 죽는 건 미친 일일 리 없습니다."
  },
  {
    id: "ae824",
    text: "256번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 1.16e77배의 부피가 필요하니까요."
  },
  {
    id: "ae825",
    text: "1024번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 무한 배의 부피가 필요하니까요."
  },
  {
    id: "ae826",
    text: "무한 번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 1e3.01e307배의 부피가 필요하니까요."
  },
  {
    id: "ae827",
    text: "무한 번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 END배의 부피가 필요하니까요."
  },
  {
    id: "ae828",
    text: "Living in the Endgameth Dimension must be crazy because you need Celestial times more volume to make something Doomed bigger (엔드게임 차원의 부피를 셀레스티얼과 파멸 용어로 표현한 밈)"
  },
  {
    id: "ae829",
    text: "f_ω³+1번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 [정의되지 않음]배의 부피가 필요하니까요."
  },
  {
    id: "ae830",
    text: "뉴스 차원에서 사는 건 미쳤을 겁니다. 티커 하나를 2배 크게 만들려면 2배 많은 티커가 필요하니까요."
  },
  {
    id: "ae831",
    text: 
      `0번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 2배 크게 만들려면 1배의 부피가 필요하니까요. 그리고
      제발 도와주세요. 시간 루프에 갇혔-`
  },
  {
    id: "ae832",
    text: "Living in the Dimension volume news slop Dimension must be crazy because you need 0.1x more tickers to make 2x more tickers (차원 부피 밈을 뉴스 티커 수로 바꾼 문구)"
  },
  {
    id: "ae833",
    text: "-진정한 무한 번째 차원에서 사는 건 미쳤을 겁니다. 무언가를 무한히 크게 만들려면 0배의 부피가 필요하니까요."
  },
  {
    id: "ae834",
    text: "핑 차원에서 사는 건 미쳤을 겁니다. 행동이 화면에 나타나기까지 P3밀리초가 걸리니까요."
  },
  {
    id: "aem835",
    get text() {
      return `What the fuck did you just say about me, you EVIL DESTROYER? I'll have you know I graduated top of my class
      in EVIL Seals, and I've been involved in numerous EVIL raids on the 9th Dimension, and I have over 300 NNnNeMI-NNnNe
      confirmed kills. I am trained in EVIL warfare and I'm THE EVIL sniper in the entire EVIL Galactic armed forces.
      You are nothing to me but just another EVIL. I will wipe you the fuck out with EVIL mashing the likes of which has
      never seen before in this dimension, mark my EVIL words. You think you can get away with saying that shit to me
      over the EVIL network? Think again, DEITY. As we speak I am contacting my EVIL network of autobuyers across the
      galaxy and your IP is being traced right now so you better prepare for the Big Crunch, FALSE. The Big Crunch that
      wipes out the EVIL thing you call your ${wordShift.wordCycle(["CONFLICTS", "BATTLES", "ENDS"])} You're fucking dead,
      DESTROYER. I can be anywhere, anytime, and I can kill you in over seven 😠💩  EVIL ways, and that's just with my mouse.
      Not only I am extensively trained dimension shift combat, but I have access to the entire aresnal of the EVIL Marine
      Corps and I will use it to its full extent to wipe your EVIL ${wordShift.wordCycle(["DESTINY", "MANDATE", "GOALS"])} off
      the face of the ${wordShift.wordCycle(["UNIVERSE", "REALITY", "INEVITABLE"])}, you little FALSE. If only you could
      have known what unhevi retribution your "${wordShift.wordCycle(["AMUSING", "CONFUSED", "LAUGHTER"])}" comment was about
      to bring down upon you, maybe you would have held you EVIL tongue. but you couldn't, you didn't, and now you're buying
      until 10, you EVIL DEITY. I will ${wordShift.wordCycle(["ALTER", "REVERSE", "MANIPULATE"])} antimatter
      ${wordShift.wordCycle(["LESSER", "DEITY", "MONARCH"])} all over you and you will
      ${wordShift.wordCycle(["INFINITE", "FOREVER", "ETERNAL"])} BE in it. You're fucking DOOMED, DESTROYER.
      (미 해군 특수부대 협박문을 사악한 Destroyer와 엔드게임 용어로 바꾼 유명 패러디)`
    },
    dynamic: true
  },
  {
    id: "ae836",
    get text() {
      return `Petah the ${wordShift.wordCycle(["horse", "honse", "hose"])} is here (피터와 말을 일부러 틀리게 쓰는 밈)`
    },
    dynamic: true
  },
  {
    id: "ae837",
    get text() {
      return `${wordShift.wordCycle(["Peter", "Petah", "Peta"])} the ${wordShift.wordCycle(["horse", "hos", "honse"])} is here (피터와 말을 일부러 틀리게 쓰는 밈)`
    },
    dynamic: true
  },
  {
    id: "ae838",
    text: `왜 "로그" 표기법이라고 부르나요? 지수 표기법이라고 불러야 하는 것 아닌가요?`
  },
  {
    id: "ae839",
    text:
      `"예에에에에에에에에, 가자!!!!!! 게임 터졌다, 정신병을 치료해 줄 의사를 불러!" - twon 최고의 의사 Hepta`
  },
  {
    id: "ae840",
    text:
      `어리석은 뉴비들아, 나는 위키를 전부 읽었다. 그러므로 앞으로 나올 새 콘텐츠를 모조리 알고 있지! 너희의
      엔드게임 지식은 절대 나를 따라올 수 없다! 무와하하하! 그런데 에테리얼은 대체 누구야?`
  },
  {
    id: "ae841",
    text:
      `제안 내용을 올리기 전에 문법 검사부터 해 주세요. 나중에 메시지를 수정해도 괜찮습니다! (수정됨) (수정됨)
      (수정됨) (수정됨) (수정됨) (수정됨)`
  },
  {
    id: "ae842",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know (여기에 영원히 있다는 식의 뜻인데 정확히는 모르겠다는 문구)`
    },
    dynamic: true
  },
  {
    id: "ae843",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know
      (Original Comment by coolbeans123456789) (앞 문구의 원 작성자를 표시한 버전)`
    },
    dynamic: true
  },
  {
    id: "ae844",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know
      (Original Comment by coolbeans123456789) (Stolen by thetruegdplaybutton) (앞 문구를 훔친 작성자까지 표시한 버전)`
    },
    dynamic: true
  },
  {
    id: "ae845",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know
      (Original Comment by coolbeans123456789) (Stolen by thetruegdplaybutton) (Original comment by coolbeans123456789)
      (원 작성자 표시가 다시 덧붙은 버전)`
    },
    dynamic: true
  },
  {
    id: "ae846",
    text: "새 유출 정보: Alpha에는 레이어가 생깁니다"
  },
  {
    id: "ae847",
    text: "다들 조용히 안 하면 엔드게임을 유출해 버릴 거야! 사실 타노스는 죽는다!"
  },
  {
    id: "ae848",
    text:
      `끝은 결코 끝이 아니다 끝은 결코 끝이 아니다 끝은 결코 끝이 아니다 끝은 결코 끝이 아니다 끝은 결코
      끝이 아니다 끝은 결코 끝이 아니다 끝은 결코 끝이 아니다 끝은 결코 끝이 아니다 끝은 결코 끝이 아니다
      끝은 결코 끝이 아니다`
  },
  {
    id: "ae849",
    text: "현재 설정으로는 시뮬레이션을 더 빠르게 실행할 수 없습니다."
  },
  {
    id: "ae850",
    text: "베타를 10번 유출하면 첫 번째 유출 차원을 구매할 수 있습니다. 이 차원은 베타를 자동으로 유출합니다."
  },
  {
    id: "ae851",
    text: "신규 유출: Alpha가 존재할 예정입니다"
  },
  {
    id: "ae852",
    text: "Plubert, 0.28⁹번째 셀레스티얼"
  },
  {
    id: "ae853",
    text: "It's not matter unless its from the Matre region of France, otherwise its just sparkling quarks (프랑스 샹파뉴 지방에서 난 것만 샴페인이라는 표현을 패러디한 말장난)"
  },
  {
    id: "ae854",
    text: "Antimatter Antimony should be called Mony (Antimony에서 anti를 빼면 Mony라는 말장난)"
  },
  {
    id: "ae855",
    text:
      `또다시 일부러 물질을 생산하고 있는 것 같군요. 당신의 안티 선생님과 안티 부모님께 이 사실을 알리는
      쪽지와 이메일을 보냈습니다. 당신이라면 해낼 수 있다고 믿지만, 당신도 맡은 몫을 다해야 합니다.`
  },
  {
    id: "ae856",
    text: "KIDS, WHAT I'M ABOUT TO DO IS EXTREMELY CELESTIALLY, LITERALLY ONLY CELESTIALS CAN DO IT (어린이는 따라 하지 말라는 경고를 셀레스티얼로 바꾼 패러디)"
  },
  {
    id: "ae857",
    text:
      `According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its
      fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
      (《꿀벌 대소동》의 유명한 도입부 대사)`
  },
  {
    id: "ae858",
    text: "다들 미쳐 버리기 전까지 이런 그럭저럭 평범한 뉴스 티커를 얼마나 더 이어 갈 수 있을지 궁금하네요"
  },
  {
    id: "ae859",
    text: "정확한 히트박스로도 AD:Endgame을 클리어할 수 있을까요?"
  },
  {
    id: "ae860",
    text:
      `They shall be my finest Celestials, these men who give of themselves to me. Like clay I shall mould them and in the furnace
      of war I shall forge them. They shall be of iron will and steely sinew. In great armour I shall clad them and with the
      mightiest weapons shall they be armed. They will be untouched by plague or disease; no sickness shall blight them. They
      shall have such tactics, strategies and machines that no foe will best them in battle. They are my bulwark against the
      Destroyer. They are the Defenders of the Dimensions. They are my Celestials... and they shall know no fear.
      (워해머의 스페이스 마린 창설 연설을 셀레스티얼로 바꾼 패러디)`
  },
  {
    id: "ae861",
    text:
      `맙소사, Antimatter Dimensions에 계층 3개와 셀레스티얼 2명, The Elemental이라는 새로운 신을 더하는 모드가
      없길 바라. 그런 게 있다면 끔찍할 테니까!`
  },
  {
    id: "aem862",
    text:
      `좆같은 도전 6x3을 완료하려면 지극히 특정한 오리 조합과 지극히 특정한 트리를 사용해야 합니다. 둘 다
      불러오기가 몹시 짜증 나는데 가져오기 슬롯은 0.00431개뿐이고, 좆같은 도전을 잠금 해제하면 그마저
      0.000000001로 소프트캡됩니다. 그런 다음 자동구매기를 가장 멍청한 설정으로 맞추세요. 대체 왜 안 되겠냐는
      이유로, 좆같은 도전 6에서는 자동구매기를 그렇게 설정하면 벌레에 2589024890983984503x 부스트를 주기 때문입니다.`
  },
  {
    id: "ae863",
    text: "It would be so matter, it would be so anti (matter와 anti를 서로 반대말처럼 쓴 말장난)"
  },
  {
    id: "ae864",
    text: "Animater Dimensons: Endame (반물질 차원: 엔드게임을 일부러 틀리게 쓴 제목)"
  },
  {
    id: "ae865",
    text: "r. r. r. r. r. r. r. r. r. r. s."
  },
  {
    id: "ae866",
    text: "Animater Dimensons: Tyop Upadte (반물질 차원: 오타 업데이트를 오타투성이로 쓴 제목)"
  },
  {
    id: "ae867",
    text: "반물질 차원 New Game+3 대 반물질 차원 Endgame+3"
  },
  {
    id: "ae868",
    text: "Hello your newsticker have virus (뉴스 티커에 바이러스가 있다는 뜻의 일부러 어색한 문장)"
  },
  {
    id: "ae869",
    text:
      `좆같은 도전 6x3을 완료하려면 지극히 특정한 오리 조합과 지극히 특정한 트리를 사용해야 합니다. 둘 다
      불러오기가 몹시 짜증 나는데 가져오기 슬롯은 0.00431개뿐이고, 좆같은 도전을 잠금 해제하면 그마저
      0.000000001로 소프트캡됩니다. 그런 다음 자동구매기를 가장 멍청한 설정으로 맞추세요. 대체 왜 안 되겠냐는
      이유로, 좆같은 도전 6에서는 자동구매기를 그렇게 설정하면 벌레에 2589024890983984503x 부스트를 주기 때문입니다.`
  },
  {
    id: "ae870",
    text:
      `속보: AD: HD가 현재 개발 중이며 어어어... 여섯 시간 뒤에 출시됩니다? 네, 아마 그 정도면 충분할 것
      같네요. 일단 커피부터 좀 마시고요`
  },
  {
    id: "ae871",
    text: "Breaking News: President Anti D Matter has renamed the Gulf of Mexico to the Gulf of Infinity (안티 D. 매터 대통령이 멕시코만을 무한만으로 바꿨다는 말장난)"
  },
  {
    id: "ae872",
    text: "Seven casually forgetting about the newsticker for the third time: (Seven이 태연하게 세 번째로 뉴스 티커를 잊어버린 모습)"
  },
  {
    id: "ae873",
    text: ">Mfw I'm not on 4chan but I still use it's quirks. (포챈에 있지도 않으면서 그 특유의 말투를 쓴다는 뜻)"
  },
  {
    id: "ae874",
    text: "말 업데이트에 Know Your Meme 전용 문서를 만들어 달라는 청원"
  },
  {
    id: "ae875",
    text: "그래, 안 될 게 뭐야?"
  },
  {
    id: "ae876",
    text: "Don't antimatter at night! (밤에는 반물질하지 말라는 말장난)"
  },
  {
    id: "ae877",
    get text() {
      return `${wordShift.wordCycle(["Anti", "Opposite", "Bad"])}${wordShift.wordCycle(["matter", "objects", "space"])}
      ${wordShift.wordCycle(["Dimensions", "Spacetime", "Continuum"])}: ${wordShift.wordCycle(["Endgame", "Done", "No More"])}
      (반물질 차원: 엔드게임의 각 단어를 비슷한 뜻으로 무작위 치환한 제목)`
    },
    dynamic: true
  },
  {
    id: "ae878",
    text: "She's in love with the anticoncept (anticoncept를 사랑한다는 anti- 말장난)"
  },
  {
    id: "ae879",
    text: "안녕"
  },
  {
    id: "ae880",
    text: "New game, same great timewalls! (새 게임에도 훌륭한 시간 장벽은 그대로라는 광고 문구 패러디)"
  },
  {
    id: "ae881",
    text: "반물질 차원을 플레이하려면 얼굴이나 신분증을 제출하여 나이가 -1.8343e843세보다 많다는 것을 증명하세요."
  },
  {
    id: "ae882",
    text: "AD: Endgame v1.0 will inclu (반물질 차원: 엔드게임 버전 일점영에 무언가가 포함된다는 미완성 문장)"
  },
  {
    id: "ae883",
    text: "Roses are red, violets are blue, Seven is good, Horse Update is true. (장미는 빨갛고 제비꽃은 파랗고, Seven은 훌륭하며 말 업데이트는 진짜라는 운문)"
  },
  {
    id: "ae884",
    text:
      `Fun fact: Horse Update part 6.24e302 (aka 2.6) will include the be- Connection terminated. There is no such thing as
      a bee layer, there never was, and there will never be. (말 업데이트에 벌 레이어가 들어간다는 말을 통신 종료 연출로 부정하는 패러디)`
  },
  {
    id: "ae885",
    text: "You are now Antimattering manually (이제 반물질 생성을 의식적으로 직접 하게 된다는 밈)"
  },
  {
    id: "ae886",
    text: "우와, 저것 좀 봐! 반물질 베개 탑이 완성됐어. 잠깐, 건드리지 마, 나-"
  },
  {
    id: "ae887",
    text: "The kekw drought of v1.0 seriously needs to be studied (버전 일점영에 KEKW 반응이 부족한 현상을 연구해야 한다는 뜻)"
  },
  {
    id: "ae888",
    text: "이제 반물질이 1.79e-308만큼 줄었습니다."
  },
  {
    id: "ae889",
    text: "이제 반물질이 1.79e-308만큼 줄었습니다."
  },
  (function() {
    let wasClicked = false;
    const normal = "반물질 망원경으로 반물질 은하의 반물질 별을 보려면 클릭하세요!";
    const clicked = "⭐⭐⭐⭐🌌";
    return {
      id: "ae890",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae891",
    text: "It seems today, that all you see is galaxies in movies, and boosts on TV (패밀리 가이 주제가를 은하와 차원 가속으로 바꾼 패러디)"
  },
  {
    id: "ae892",
    text: "He made a statement so anti that even his dog annihalated (너무 anti한 발언이라 개마저 소멸했다는 말장난)"
  },
  {
    id: "ae893",
    text: 
      `I'm not taking my Time Studies off, I am TS O'Toole! Hey! Take those Time Studies off! NO! I said take them off!
      NO! Ahh, let him go. We'll never catch him! Not with this production! I didn't take my Time Studies off, I am TS O'Toole!
      (시간 연구를 벗지 않겠다는 노래 패러디)`
  },
  {
    id: "ae894",
    get text() {
      return `<span style='color: blue'>"Hello I am a genie I will give you 4 wishes because I am
      quirky" </span><span style='color: cyan'>"I wish every word was 4 letters long" </span><span style='color: blue'>"Your
      wish isss grnt" </span><span style='color: cyan'>"IIII wish evry word ened with nsns" </span><span style='color: blue'>"Yons
      wins isns grns" </span><span style='color: cyan'>"IIns wins evns wons stns wins sans" </span><span style='color: cyan'>"Sans
      sans sans sans" </span><span style='color: cyan'>"Sans sans sans sans sans sans sans
      sans" </span><span style='color: cyan'>"Sans sans sans sans"</span> (지니의 소원 때문에 단어 길이와 어미가 차례로 바뀌는 말장난)`
    }
  },
  {
    id: "ae895",
    text: "I like my cheese anti, bruh (치즈도 anti 상태가 좋다는 말장난)"
  },
  {
    id: "ae896",
    text: "I like big butts and I cannot lie. my brother here likes small butts and cannot tell the truth. You have 3 questions. (큰 엉덩이를 좋아하는 진실한 형제와 작은 엉덩이를 좋아하는 거짓말쟁이 형제에게 세 번 질문하는 퍼즐)"
  },
  {
    id: "ae897",
    text: "I have no matter, and I must anti (《나는 입이 없다 그리고 나는 비명을 질러야 한다》를 matter와 anti로 바꾼 패러디)"
  },
  {
    id: "ae898",
    text: "Imagine not having the Mending layer!!! This messag- OH SH- F- HELP!!!!! (Mending 레이어가 없다고 놀리다 공격받아 문장이 끊기는 연출)"
  },
  {
    id: "ae899",
    get text() {
      return `<span style='color: cyan'>"안녕하세요 여러분, glitchy 팟캐스트 에피소드 1입니다. 오늘의 질문은 왜
      모든 커미션 작가가 여러분의 OC를 도미 마미 자세로 그리- 이런 씨-" 굴러떨어지는 소리</span>`
    }
  },
  {
    id: "ae900",
    text: "Mr sandman, sand me a man (미스터 샌드맨에게 남자를 보내 달라는 노랫말 패러디)"
  },
  {
    id: "ae901",
    text: "The one who is running the show but it's the family guy intro (쇼를 운영하는 자를 패밀리 가이 도입부처럼 표현한 패러디)"
  },
  {
    id: "ae902",
    text: "그럼 창작물에서 천국에는 천사가 있고 지옥에는 악마가 있다면, 공허에는 어떤 존재가 있을까요?"
  },
  {
    id: "ae903",
    get text() {
      return `<span style='color: cyan'>"안녕하세요 여러분, glitchy 팟캐스트 에피소드 2입니다. 오늘의 질문은
      격식 있는 펨보이 복장이 대체 뭐냐는 것입니다. Play button, 무슨 말인지 알죠. 제목이 몹시 걱정스러운
      그 깨지기 쉬운 펨보이 정지 GIF 말이에요." </span><span style='color: green'>"잠깐, 내가 어떻게 여기
      있지?" </span><span style='color: cyan'>"대답해"</span>`
    }
  },
  {
    id: "aem904",
    text: "욕설이 들어간 뉴스 티커는 생각보다 드물군요. 왜 씨발 그런 거죠?"
  },
  {
    id: "ae905",
    get text() {
      return `<span>Petah.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>The horse is here.</span> (Petah라고 부른 뒤 멀리서 말이 왔다고 밝히는 패밀리 가이 밈)`
    }
  },
  {
    id: "ae906",
    text: "BREAKING NEWS: Seven hasn't kekw reactioned any newstickers for 2 months!!! WE ARE ALL GOING TO DIE!!!!!!!!!! (Seven이 두 달 동안 뉴스 티커에 KEKW 반응을 남기지 않았다는 과장된 속보)"
  },
  {
    id: "aem907",
    text: "Found some mf talking about 6 hours broken heart emoji (누군가 여섯 시간을 이야기하는 모습을 보고 상심했다는 밈 문구)"
  },
  {
    id: "ae908",
    text: "Rest in peace my Pelle he got hit by a generator (내 Pelle의 명복을 빈다. 생성기에 치였다는 뜻의 밈)"
  },
  {
    id: "ae909",
    get text() {
      return `<span>이벤트: 지금 1e1e1e1e1e1e1e6 AM, IP, EP 무료 지급 중! 지금 받으세요!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>장소: 9번째 차원</span>`
    }
  },
  {
    id: "ae910",
    text: "3.9 x 10 ^ (1.50 x 10 ^ 15) buried, 0 found (엄청난 수가 묻혔지만 아무도 발견되지 않았다는 통계형 밈)"
  },
  {
    id: "ae911",
    text:
      `<i>반물질 차원: 엔드게임</i>이 alemaninc Inc.에 매각되었습니다. 이와 무관한 소식으로, 최근
      업데이트 이후 영원에 도달하는 데 일 년 넘게 걸리게 되었습니다.`
  },
  {
    id: "ae912",
    text: "도와주세요 뉴스 티커 반대편에 갇혔어요 떨어지고 싶지 않아요 제발 도와주세요"
  },
  {
    id: "ae913",
    get text() {
      return `<span style='color: cyan'>"안녕하세요, 다시 돌아온 glitchy 팟캐스트 에피소드 3입니다. 재촬영을
      해야 했습니다." </span><span style='color: gray'>"그래, 네가 Gary를 죽였으니까, 이 개자-" </span><span style='color: cyan'>"닥쳐 Bill, 죽여 버린다. 아무튼 오늘의 질문은 반물질이 왜 그렇게 이상하게 생겼냐는
      것입니다. 오늘은 안티 과학자 한 분을 모시고 인터뷰하겠습니다." </span><span style='animation: a-game-header__antimatter--glow 3s infinite'>"안녕하세요 glitchy. 팟캐스트에 불러 줘서
      반갑-" </span><span>(얼마 지나지 않아 모두 쌍소멸로 사망했습니다)</span>`
    }
  },
  {
    id: "ae914",
    get text() {
      return `<span style='color: cyan'>"안녕하세요, glitchy 팟캐스트 에피소드 5입니다. 오늘의 질문은 셀레스티얼
      차원이 형편없는데도 엔드게임에 왜 존재하-" </span><span style='color: yellow'>"이리 와, 이 개자-"</span>`
    }
  },
  {
    id: "ae915",
    text: "19 hour Antimatter Dimensions update. Who wants it? (열아홉 시간짜리 반물질 차원 업데이트입니다. 원하는 사람 있나요?)"
  },
  {
    id: "ae916",
    text: "Those who DON'T know. There are too many people that know. DON'T know. (아는 사람이 너무 많으니 모르는 쪽이 되라는 밈)"
  },
  {
    id: "ae917",
    text: "CALLING JOHN A ANTIMATTER AT 3 AM (GONE HORRIBLY WRONG) (새벽 세 시에 John A Antimatter에게 전화했다가 끔찍하게 잘못됐다는 클릭 유도형 밈)"
  },
  {
    id: "ae918",
    text: "5 NaNeFinities until the update (업데이트까지 NaN과 무한을 섞은 다섯 단위가 남았다는 말장난)"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to gain 1e1e1.79e308 antimatter!!!!! (10^102% real) (클릭하면 엄청난 반물질을 얻는다는 백이퍼센트 진짜 광고입니다.)";
    const clicked = "Ladies and gentlemen... WE GOT 'EM! (신사 숙녀 여러분... 잡았습니다!)";
    return {
      id: "ae919",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae920",
    get text() {
      return `<span style='color: cyan'>"안녕하세요, glitchy 팟캐스트 에피소드 6입니다. 오늘의 질문은 사람들이
      언제 개발 빌드 유출을 멈출 것이냐는 겁니다. 정말 걱정됩니다." </span><span style='color: green'>"절대 안
      멈춰, 하하하하하하하하하!" </span><span style='color: cyan'>"야, 내 사무실에서 나가." </span><span style='color: green'>"알았어...." </span><span style='color: cyan'>"그러니 오늘의 교훈은 개발 빌드를 절대
      유출하지 말라는 것입니다. 안 그러면 개**끼 확장-</span>`
    }
  },
  {
    id: "ae921",
    text: "재미있는 사실: 예전에 맥앤치즈 한 그릇에 데여 가장 가벼운 단계의 화상을 입은 적이 있습니다."
  },
  {
    id: "ae922",
    text: "Me when you just lost the game: (당신이 방금 게임에서 졌을 때의 나:)"
  },
  {
    id: "ae923",
    text: "Me whgen endgmae (엔드게임 때의 나를 일부러 틀리게 쓴 밈)"
  },
  {
    id: "ae924",
    text: "뉴스 티커 채널 죽었네"
  },
  {
    id: "ae925",
    text: `"7을 싫어하신다니 유감입니다." - Elys`
  },
  {
    id: "ae926",
    get text() {
      return `<span>(Walking through and then tripping on a lamp) </span><span style='color: blue'>"AAAH-" </span><span>(genie
      comes out) </span><span style='color: cyan'>"Hello you have 1 wish its because of
      inflation" </span><span style='color: blue'>"Alright I wish everyone except me had their 's' and 'g's
      swapped." </span><span style='color: cyan'>"Alrist sranted" </span><span>(going to Gex's
      house) </span><span style='color: blue'>"Hello Gex I have a favor for you" </span><span style='color: green'>"Yeah what ig
      it" </span><span style='color: blue'>"You should say your name" </span><span style='color: green'>"You think I
      ghould gay s-" </span><span>(Endgame branded nuke drops onto Gex) </span><span style='color: blue'>"Hehehehehe"</span>
      (소원으로 s와 g가 뒤바뀌어 Gex가 자기 이름을 말하다 폭발하는 말장난)`
    }
  },
  {
    id: "ae927",
    text:
      `Give a man a fish, he will eat for a day. Teach a man to fish, drown him due to the fact that you didn't give him
      a fishing rod. (물고기를 주면 하루를 먹지만 낚싯대 없이 낚시를 가르치면 익사한다는 속담 패러디)`
  },
  {
    id: "ae928",
    get text() {
      return `<span>이런, 사악한 Seven이다! </span><span style='color: red'>"하하하, 잡으러 간다." </span><span>안 돼에에에에!</span>`
    }
  },
  {
    id: "ae929",
    text: "Fun fact: the moon landing was staged but the film crew wanted it to be more accurate so they asked NASA to film on site (달 착륙은 연출이었지만 정확성을 위해 NASA에 현지 촬영을 요청했다는 농담)"
  },
  {
    id: "ae930",
    get text() {
      return `<span>"NOOOO EVIL ORBSMAN DONT GO!!!!" </span><span style='color: red'>"I need to. My planet needs me."</span>
      (고향 행성이 자신을 필요로 한다며 갑자기 떠나는 캐릭터 장면의 패러디)`
    }
  },
  {
    id: "ae931",
    text: "재미있는 사실: 31,646명을 죽이면 나무를 20그루씩 백만 번 심는 것과 같은 양의 산소를 절약할 수 있습니다."
  },
  {
    id: "ae932",
    text: `스타벅스에서 "그란데" 대신 실수로 "빅"이라고 말했다가 직원들이 나를 가게 뒤로 끌고 가 다리에 총을 쐈습니다`
  },
  {
    id: "ae933",
    text: "Aw man Lois this is worse than the time that we were in an Endgame newsticker (패밀리 가이의 회상 장면 도입부를 엔드게임 뉴스 티커로 바꾼 패러디)"
  },
  {
    id: "ae934",
    text: "Anti was actually the Dimensions, not the Matter (Anti가 Matter가 아니라 Dimensions를 꾸민다는 말장난)"
  },
  {
    id: "ae935",
    text: "Frankenstien was not the monster, scientist, or author! It was the glue. (프랑켄슈타인은 괴물도 과학자도 작가도 아니라 접착제였다는 말장난)"
  },
  {
    id: "ae936",
    text: `"Color me surprised!" "Which one is the surprised crayon?" (놀랐다는 관용구를 놀란 색의 크레용이 무엇이냐고 되묻는 말장난)`
  },
  {
    id: "ae937",
    text: "Looking for iron, found antima- EXPLOSION (철을 찾다가 반물질을 발견해 말이 끝나기 전에 폭발하는 농담)"
  },
  {
    id: "ae938",
    get text() {
      return `<span style='color: blue'>"안녕하세요, glitchy 팟캐스트 에피소드 8에 오신 것을 환영합니다. 에피소드 7은
      어디 갔냐고요? 내가 왜 말해 줘야 하죠. 아무튼-" </span><span style='color: orange'>"야 glitchy, 넌 에피소드 2의
      그 사진을 잘못 기억하고 있어." </span><span style='color: blue'>"이런
      ${wordShift.wordCycle(["Profanity", "Curse", "Swear"])}" </span><span style='color: orange'>"뭐, 그냥 팟캐스트나
      녹음해." </span><span style='color: blue'>"알았어... 아무튼 오늘의 질문은 Alpha 같은 v1.0 기능을 왜 유출할 수
      없냐는 겁니다- 이런 ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} 저게 뭐-" </span><span>(그는 곧
      엔드게임 미사일 20발에 폭사했습니다.)</span>`
    },
    dynamic: true
  },
  {
    id: "ae939",
    text:
      `CBC detected, loser! Click Between Celestials is illegitimate and will not be allowed in Endgame. Please disable it
      to continue playing. (클릭 간격 부정행위 감지 경고를 셀레스티얼 사이 클릭으로 바꾼 패러디)`
  },
  {
    id: "ae940",
    text:
      `EVERYONE INTO THE UPDATE, WE ARE LEAVING THIS REALITY NOW! AHHHHHHHHHHHHHHHH! What the... impossible! This isn't the update!
      NOOOOOOOOOOOOOOOOOOOOOOOOOOOO! HERMIT REFRESH! (업데이트로 탈출하려다 실패하고 새로고침을 외치는 과장된 패러디)`
  },
  {
    id: "ae941",
    get text() {
      return `<span style='color: blue'>"안녕하세요, glitchyace 팟캐스트 에피소드 아홉- 아아아아악 안 돼- 팟캐스트
      에피소드 10입니다. 오늘의 질문은 산이 왜 그렇게 높냐는 겁니다. 알아내려면 직접 올라가야겠죠. BILL,
      화면 전환해!" </span><span>(멋진 화면 전환) </span><span style='color: blue'>"좋습니다, 지금 은하력 산을 오르고
      있는데 여기는 정말 춥네요. 저 앞에 정상이 보이는 것 같습니다..." </span><span style='color: orange'>"안녕하세요,
      Bill입니다. glitchy가 산을 오르는 동안 사악한 Orbsman의 날씨 예보를 듣겠습니다." </span><span style='color: red'>"으아아,
      나는 사악한 Orbsman이다! 오늘은 흐리고 안개가 짙겠으며, 이번 주 나머지 기간은 맑겠습니다." </span><span style='color: orange'>"좋아요,
      glitchy를 확인해 보죠. 잠깐, 왜 화면이 그쪽으로 안 가지... 카메라를 잃어버렸나? 으휴. 헬리콥터가 추적하고
      있으니 거기서 볼 수 있겠- 아, 신호가 잡혔습니다." </span><span style='color: blue'>"안녕하세요, 마침내 산 정상에
      도착했고 이제 엔드게임 깃발을 꽂아야 합니다. 여기 가져왔으니 이제 꽂으면 됩니다. 오늘의 교훈은 산이 높은
      이유가 대체 왜 씨- 아아아아아아악!" </span><span style='color: orange'>"잘됐네, 떨어졌어..."</span>`
    }
  },
  {
    id: "ae942",
    get text() {
      return `<span style='color: blue'>"안녕하세요, glitchyace 팟캐스트 에피소드 11입니다. 오늘의 질문은 왜
      ${wordShift.wordCycle(["profanity", "curse", "swear"])}가 이런 Pelle bull${wordShift.wordCycle(["profanity", "curse", "swear"])}로
      검열되느냐는 겁니다. 지금 Pelle가 직접 와 있으니 물어보죠." </span><span style='color: red'>"안녕하세요, 저는 이 일과
      전혀 관계없습니다." </span><span style='color: blue'>"나는 망할 ${wordShift.wordCycle(["profanity", "curse", "swear"])}
      엔드게임 채널과 그 멍청한 ${wordShift.wordCycle(["horse", "honse", "hose"])} 검열이 싫어요. 잠깐, 방금 건 모양이
      달랐던 것 같은데..."</span>`
    },
    dynamic: true
  },
  {
    id: "ae943",
    text: "5 hours until th- u- d- SIGNAL DISRUPTED (업데이트까지 다섯 시간이 남았다는 말이 신호 단절로 끊기는 연출)"
  },
  {
    id: "ae944",
    text: "이 문장은 인공지능 텍스트 생성기가 만든 게 아닙니다 ㅋㅋ"
  },
  {
    id: "ae945",
    text: `Erm acutatuutdtlltly AD: Endgame should actually be pronounced "ah duh e n game" (사실 AD: Endgame은 '아 더 이 앤 게임'처럼 발음해야 한다는 말을 일부러 심하게 틀리게 쓴 문구)`
  },
  {
    id: "ae946",
    text: "루프는 2^1024개가 될 것입니다."
  },
  {
    id: "ae947",
    text: "Exotic Matter Dimensions가 이 뉴스 티커를 훔치면 웃기지 않을까요?"
  },
  {
    id: "ae948",
    text: "아무도 당신을 신경 쓰지 않고 모두가 당신을 싫어한다고 느끼는 사람이 있나요, 아니면 저만 그런가요?"
  },
  {
    id: "ae949",
    get text() {
      return `<span>이번에는 1.79e308번 뜁니다!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    }
  },
  {
    id: "ae950",
    get text() {
      return `<span style='text-decoration: line-through'>Nine</span><span> out of ten dentists recommend shutting the f-</span> (치과의사 열 명 중 아홉 명이 입을 다물라고 권한다는 미완성 농담)`
    }
  },
  {
    id: "ae951",
    text: "존재하지 않는 엔드게임 업데이트를 찾는 중"
  },
  {
    id: "ae952",
    text: "재미있는 사실: 게임에서 2,147,483,647번 패배하면 패배 횟수가 순환하여 게임에서 승리하게 됩니다!"
  },
  {
    id: "ae953",
    text:
      `새 소식을 발표합니다. 반물질 차원: 엔드게임 매트릭스 결정판! 총 셀레스티얼 10명, Elemental 45명,
      12명의 솔라리안, 일곱 개의 프레스티지 레이어와 100개가 넘는 업적 티어를 갖춘 AD:EMDE는 태초 이래
      최고의 흥행작이 될 것입니다. alemaninc가 2년간의 병가를 끝내고 자기 게임을 실제로 업데이트하는 즉시
      제작을 시작할 예정입니다. 출시 예정: 150년 뒤.`
  },
  {
    id: "ae954",
    text:
      `재미있는 사실: v1.0에는 뉴스 티커가 없습니다. v1.0에서 뉴스 티커를 제거할 예정이니 자세한 내용은
      5-UNTIL-THE-UPDATE로 전화한 뒤 1.79e308을 누르세요!`
  },
  {
    id: "ae955",
    text: "Maybe the Infinite IKEA is 3008 because Hevi patented 308 as Infinity, or is it the other way around? (무한 이케아의 번호와 Hevi가 무한에 붙인 번호가 어느 쪽에서 유래했는지 묻는 밈)"
  },
  {
    id: "ae956",
    get text() {
      return `<span>여기를 클릭하여 저장 데이터를 초기화하세요</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>대체 왜 해 보려는 거죠...</span>`
    }
  },
  {
    id: "ae957",
    get text() {
      return `<span style='color: red'>"I'm not taking my debuffs off, I am Pelle O'Toole!" </span><span style='color: cyan'>"Hey!
      Take those debuffs off!" </span><span style='color: red'>"No!" </span><span style='color: cyan'>"Take them off I
      said!" </span><span style='color: red'>"No!" </span><span style='color: yellow'>"Ah, let him go. We'll never beat him, not
      with these rifts..." </span><span style='color: red'>"I didn't take my debuffs off, I am Pelle O'Toole!"</span>
      (Pelle가 약화 효과를 벗지 않겠다고 버티는 노래 패러디)`
    }
  },
  {
    id: "ae958",
    text: "[÷USING THE WRONG SUGGESTION FORMATTING AT 3 AM (GONE HORRIBLY WRONG PLEASE HELP SEVEN IS COMING AFTER ME)÷] (새벽 세 시에 제안 형식을 잘못 썼다가 Seven에게 쫓긴다는 클릭 유도형 밈)"
  },
  {
    id: "ae959",
    text: "재미있는 사실: 1.79e308도 2.83e152와 마찬가지로 숫자입니다."
  },
  {
    id: "ae960",
    text: "Jax... 봐... 우리가 사이가 좋지 않다는 건 알지만, 업데이트를 찾은 것 같아."
  },
  {
    id: "ae961",
    text: `"BACKROOMS" director Kane Parsons is now an Endgame developer. "The update is in 5 hours." He is 20 years old. (“BACKROOMS” 감독 Kane Parsons가 이제 엔드게임 개발자가 되었습니다. “업데이트는 다섯 시간 뒤입니다.” 그는 스무 살입니다.)`
  },
  {
    id: "ae962",
    get text() {
      return `안녕하세요, ${player.username}. 당신의 행성 |SOL_P3|의 현재 시각은 ${Time.toDateTimeString(Date.now())}입니다.
      당신은 지금 전자 기기에서 Supersonic Seven이 만든 반물질 차원: 엔드게임을 플레이하고 있습니다.
      두려워하세요. 곧 당신을 찾아낼 테니까요.`
    }
  },
  {
    id: "ae963",
    text: "...and the universe told me I'm not alone (...그리고 우주는 내게 혼자가 아니라고 말했다)"
  },
  {
    id: "ae964",
    text: "존재한 적 없는 뉴스 티커를 찾는 중"
  },
  {
    id: "ae965",
    text: "Jax, 봐. 우리가 사이가 좋지 않다는 건 알지만, 렉을 없앨 방법을 찾은 것 같아."
  },
  {
    id: "ae966",
    text: "업데이트는 5시간 뒤- 전화가 울리네, 잠깐만, 받아야겠다. 어, 여보세요? 어, 네, 아, 음... 알겠습니다. 업데이트가 출시됐습니다."
  },
  {
    id: "ae967",
    text: "반물질 차원: 확장판 vβ.0.0이 단 5시간 뒤 출시됩니다"
  },
  {
    id: "ae968",
    text: "사람들에게 안티모니를 주는 것도 강도로 간주됩니다."
  },
  {
    id: "ae969",
    text:
      `다음 구절 뒤에 콜론과 공백, 그리고 그 구절 자체를 따옴표로 붙이면 거짓 문장이 됩니다: "다음 구절 뒤에
      콜론과 공백, 그리고 그 구절 자체를 따옴표로 붙이면 거짓 문장이 됩니다"`
  },
  {
    id: "ae970",
    text: "Antimatter Dimensions cause End Game, but Game End cause Dimensions Antimatter. (반물질 차원은 엔드게임을 만들고, 뒤집은 어순은 단어까지 거꾸로 만든다는 말장난)"
  },
  {
    id: "ae971",
    text: `"Oh boy I sure do hope someone doesn't give me a weird suggestion for my newsticker suggestion!" the humble mreatha: (이상한 뉴스 티커 제안이 오지 않길 바라는 사람 앞에 mreatha가 나타나는 밈)`
  },
  {
    id: "ae972",
    text: "Reality asserts that ity is real, or that ty is imaginary. (Reality에서 앞글자를 차례로 떼어 real과 imaginary를 엮은 말장난)"
  },
  {
    id: "ae973",
    text: "a b c d e f f a r i- HEY THATS NOT HOW THE ALPHABET WORKS (알파벳을 읽다가 글자 순서가 틀렸다고 외치는 농담)"
  },
  {
    id: "ae974",
    text:
      `두 번째 뉴스 차원을 사는 데 필요한 1.798e308개의 종이 클립을 모으면, 실제로는 Seven이
      ⁠news-ticker-suggestions-2 채널을 엽니다.`
  },
  {
    id: "ae975",
    get text() {
      return `<span style='color: cyan'>"안녕하세요 여러분, glitchy 팟캐스트 에피소드 23입니다. 에피소드 번호를
      잊어버려서 이제 아무 숫자나 붙이고 있습니다. 오늘의 질문은 '좋아, 타이머를 초기화할 시간이야 같은 문구를
      추가할래?'보다 더 나쁜 인용문이 있었느냐는 겁니다. 아마 없겠죠. 아무튼 이제 마법 학교 생성기에서
      Pelle의 엉- 안으로 들어가는 에피소드를 보겠습니다." </span><span>(엔드게임 상표 핵폭탄 투하)</span>`
    }
  },
  {
    id: "ae976",
    text: "참고로 dude, guy, bro는 트랜스젠더에게 말하는 경우가 아니라면 성별 중립적인 표현입니다!"
  },
  {
    id: "ae977",
    get text() {
      return `<span style='color: var(--color-alpha--base)'>"너희도 재미없고 나도 재미없다면 대체 누가 재미있는
      거지?" <span style='color: var(--color-v--base)'>"난 현실을 보내고 있는데." </span><span style='color: var(--color-alpha--base)'>"그러니까! 너희가 왜 갑자기 말투를 바꿨는지 궁금하네. 내가 잘못 본 게 아니라면 너희는 뭔가 하려는 것
      같은데... Pelle는 어디 있지?" </span><span style='color: var(--color-teresa--base)'>"어, 음, 새 약화 효과를 직접
      보고 싶었을 뿐이야! 불만은 이제 접어 두었고 네가 무슨 일을 꾸미는지 진심으로 궁금해졌어!" </span><span style='color: var(--color-alpha--base)'>"그럼 그냥... 확인하러-" </span><span style='color: var(--color-pelle--secondary)'>"우리는
      네 아이디어가 형편없다고 생각해!" </span><span style='color: var(--color-alpha--base)'>"뭐라고?" <span>"뭐라고?"
      </span><span style='color: var(--color-pelle--secondary)'>"뻔하잖아? 새 현실을 우리에게 시험하도록 유인한 다음,
      뒤에서 비웃으려고 한 거야!" </span><span style='color: var(--color-alpha--base)'>"하! 그건... 사실이
      아니야..." </span><span style='color: var(--color-pelle--secondary)'>"맞아! 넌 끔찍한 지도자야! 우리를 전혀
      신경 쓰지 않아! 우리가 실제로 즐길 만한 것을 주는 것보다 네 자존심을 세우는 데만 관심이 있잖아!" </span><span style='color: var(--color-alpha--base)'>"내가 누군지 알아?!" </span><span style='color: var(--color-pelle--secondary)'>"그래!
      넌 실패작이야! 언젠가 우리 모두 죽을 텐데, 그때 네게 뭐가 남겠어? 아무것도 없어." </span><span style='color: var(--color-alpha--base)'>"그만해..." </span><span style='color: var(--color-v--base)'>"그리고 이 난리는 뭐지?
      우리가 네 기분을 상하게 했다고 약화 효과를 거는 거야? 한심해! 어린애 같잖아! 전능한 존재가 어떻게 그렇게
      자존심이 약할 수 있지?" </span><span style='color: var(--color-alpha--base)'>"나, 나는..." </span><span style='color: var(--color-teresa--base)'>"넌 우리가 집에 있는 것처럼 편안하게 느끼게 해 준 적이 없어. 누군가 속상해해도 위로하지
      않고, 우리 입장에서 어떤 느낌인지 이해하려 하지도 않잖아!" </span><span style='color: var(--color-effarig--base)'>"틀에서 벗어나 우리 방식대로 생각하고 행동하는 것도 막고..." </span><span style='color: var(--color-laitela--base)'>"늘 우리에게 거짓말만 해!" </span><span style='color: var(--color-pelle--secondary)'>"무엇보다도 넌 정말로. 우리 말을. 듣지 않아." </span><span>(Alpha는 이제 모든 셀레스티얼을 죽이려 들었습니다.)</span>`
    }
  },
  {
    id: "ae978",
    get text() {
      return `"먼 옛날 생명은 원시적이었고, 존재들은 1.8^308 너머를 세는 법을 몰랐다. 그러던 어느 날 거대한
      폭발과 함께 무한 돌파가 경계를 깨뜨리고 앞으로 나아가 지성을 훨씬 더 위대한 여정으로 이끌었다. 오랜 세월과
      셀 수 없이 많은 ${wordShift.wordCycle(["songs", "dances", "battles"])}(노래·춤·전투)를 거친 뒤, 이전에는
      이해조차 할 수 없던 e9e15에서 다시 장벽이 나타났다. 생명은 갇힌 존재를 한탄하며 새로운 껍질에서 벗어나기를
      바랐다. 그리고 정말로 깨뜨렸다. 전임자의 이름을 이어 영원 돌파라 불린 새로운 존재가 나타나 생명을 가로막던
      장벽을 다시 한번 산산조각 냈다. 그것이 현재다. 우리를 기다리는 장벽이 더 있는지는 알 수 없다. 하지만 이 끝없는
      우주의 모든 생명체는 우리가 그것마저 깨뜨릴 수 있다고 믿는다.... 현실을 돌파하리라고."`
    },
    dynamic: true
  },
  {
    id: "ae979",
    text: "지금 당장 엔드게임을 파밍하세요"
  },
  {
    id: "ae980",
    text: "RAM prices getting too high? Why? You can just download it! (RAM 가격이 비싸면 인터넷에서 더 내려받으면 된다는 유명한 밈)"
  },
  {
    id: "ae981",
    text: `"If I didn't know better it seems like you're trying to... where's Hexa?" -Hevipelle, 2017 (무언가 꾸미는 것 같다고 말하다 Hexa가 사라진 것을 알아차리는 인용 패러디)`
  },
  {
    id: "ae982",
    text: "Destroyer x Ra is real, AD YAOI HERE I COM- (Destroyer와 Ra를 엮은 커플링이 진짜라며 AD 야오이를 외치는 밈)"
  },
  {
    id: "ae983",
    text: "속보: v2.0에 소형 강입자 충돌기가 추가됩니다!"
  },
  {
    id: "ae984",
    text: "속보: CERN이 대형 강입자 충돌기를 폐쇄했습니다! 진행이 완전히 멈췄고 사람들은 불만에 가득 찼습니다!"
  },
  {
    id: "ae985",
    text: "How would Antimatter Dimensions' story go if Lai'tela didnt put Ra in the cuck chair? (Lai'tela가 Ra를 굴욕적인 의자에 앉히지 않았다면 이야기가 어떻게 달라졌을지 묻는 밈)"
  },
  {
    id: "ae986",
    text:
      `I sometimes don't get why people are simping for the Celestials, like they're just glowing squares with goofy
      letters on them! Where's the appeal on a group of squares?! They have no curves! (빛나는 글자 사각형에 불과한
      셀레스티얼을 왜 좋아하느냐며 곡선도 없다고 놀리는 밈)`
  },
  {
    id: "ae987",
    get text() {
      return `<span style='color: blue'>"맙소사, 여보세요?" </span><span style='color: red'>"안녕, 나 셀레스티얼이야.
      나는 광야의 선한 편이야. 모든 현실을 완료하지. 내 목표는 The Elemental이 모두를 파괴하려 하기 전에 모든 현실을
      완료하는 거야. 그가 모두를 죽이기 전에 말이지. 우리는 모든 현실을 완료해야 해. 그래야 The Elemental을 파괴할 수
      있어. 이제 네가 말해 봐. 넌 셀레스티얼이야, 아니면 The Elemental이야?"</span>`
    }
  },
  {
    id: "ae988",
    get text() {
      return `Jesus answered, "I am the way and the truth and the life. No one comes to the father except through
      me." <span style='color: yellow'>$6 SRIMP SPECIAL</span> (예수의 성경 구절 뒤에 육 달러짜리 SRIMP 특가 광고를 붙인 패러디)`
    }
  },
  {
    id: "ae989",
    get text() {
      return `${Alpha.isDestroyed ? "Alpha의 시간 장벽 때문에 고생했나요?" : "여덟 번째 셀레스티얼의 시간 장벽 때문에 고생하게 될 겁니다."}`
    }
  },
  {
    id: "ae990",
    text: "Why was 6 afraid of 7? BECAUSE 7 RELEASED HIS GAME FIRST! (여섯이 일곱을 무서워한 이유를 Seven이 게임을 먼저 출시했기 때문이라고 바꾼 숫자 농담)"
  },
  {
    id: "ae991",
    text: "그냥 엔드게임을 얻고, 글리프를 파밍하고, 부스트를 사고 싶을 뿐인데..."
  },
  {
    id: "ae992",
    text:
      `지금은 1.8e308년입니다. 업데이트는 아직도 나오지 않았습니다. Seven은 1.4e34번째 프레스티지 레이어의
      The Elemental 차원과 도전 밸런스를 조정하고 있습니다. 업적은 100,000줄이 넘습니다. 이제 ExpantaNum.js를
      사용하기 위한 준비에 들어갔습니다.`
  },
  {
    id: "ae993",
    text: "재미있는 사실: Seven이 3번의 업데이트 동안 미뤄 둔 탓에 v1.1에서 약 10개월치 뉴스 티커를 추가했습니다!"
  },
  {
    id: "ae994",
    get text() {
      return `${wordShift.wordCycle(["Chutzpah", "חצפה"])} (둘 다 '후츠파'를 뜻함)`
    },
    dynamic: true
  },
  {
    id: "ae995",
    get text() {
      return `"And Jesus said: Love thy neighbor like how I-" <span style='color: cyan'>WHAT ARE YOU DOING HERE BIBLE
      NEWSTICKER?!?!?</span> (이웃을 사랑하라는 성경 구절을 말하다 성경 뉴스 티커가 왜 여기 있냐며 끊는 패러디)`
    }
  },
  {
    id: "l1",
    text: "방금 1,000,000,000,000,000번째 반물질을 만들었습니다. 이건 닭고기 맛이 나네요.",
    get unlocked() { return Currency.antimatter.exponent === 15; }
  },
  {
    id: "l2",
    text: "은하 좀 너프해 주세요.",
    get unlocked() { return player.galaxies.eq(2) || Currency.infinities.gt(0); }
  },
  {
    id: "l3",
    text: "차원이 둘보다 많다니 무슨 말이에요??? 우린 화면 안에 있으니 차원은 분명 2개뿐이잖아요.",
    get unlocked() { return AntimatterDimension(3).amount.gt(0) || DimBoost.totalBoosts.gt(0); }
  },
  {
    id: "l4",
    text: "무한은 얼마나 큰가요? -말 그대로 누구나 한 번쯤",
    get unlocked() { return AntimatterDimension(8).amount.eq(190) || Currency.infinities.gt(0); }
  },
  {
    id: "l5",
    text: "뭐, 네 번째 차원도 나쁘진 않네요...",
    get unlocked() { return AntimatterDimension(4).amount.gt(0) && AntimatterDimension(5).amount.eq(0); }
  },
  {
    id: "l6",
    text:
      `반물질 사람들은 우리보다도 13을 더 무서워하는 모양입니다. 백분율에서 13을 없애려고
      은하 전체를 파괴했으니까요.`,
    get unlocked() { return player.galaxies.gt(0) || Currency.infinities.gt(0); }
  },
  {
    id: "l7",
    text: "차원 희생을 이해하려면 정말로 이론물리학 박사 학위가 필요합니다. 미안해요!",
    get unlocked() { return player.sacrificed.e >= 10 || DimBoost.totalBoosts.gte(6); }
  },
  {
    id: "l8",
    text: "새로운 숫자 표준화 단체가 이모지를 활용한 참신한 새 표기법을 내놓았습니다.",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies > 0; }
  },
  {
    id: "l9",
    text: "최근 반물질 아이스크림 가게가 문을 열었습니다. 맛이 옥틸리언 가지나 된답니다!",
    get unlocked() { return player.records.totalAntimatter.e >= 27; }
  },
  {
    id: "l10",
    text:
      `천상의 Pelle가 반물질을 너무 많이 만들어서 은하를 하나 더 만들어야 했습니다.
      이 은하는 남서쪽 하늘에서 볼 수 있습니다.`,
    get unlocked() { return player.galaxies.gt(0) || Currency.infinities.gt(0); }
  },
  {
    id: "l11",
    text: "제9차원은 거짓말입니다.",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l12",
    text: "9의 제곱근은 3이므로 제9차원은 존재할 수 없습니다.",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l13",
    text: "제9차원에 동화됐다고요? 정신 질환은 의사에게 상담하세요!",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l14",
    text: "Why is there no 9th dimension? Because 7 8 9. (아홉 번째 차원이 없는 이유는 일곱이 아홉을 먹었기 때문이라는 영어 숫자 말장난입니다.)",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l15",
    text: "The 9th dimension cannot exist because the Nein-speaking nazis died in WW2. (nine과 독일어 nein의 발음이 같다는 말장난입니다.)",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l16",
    text:
      `네 번째 벽을 부숴도... 뭐, 나쁜 것을 만나기 전까지 다섯 번째, 여섯 번째, 일곱 번째, 여덟 번째 벽이 남아 있으니
      괜찮을 겁니다.`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l17",
    text:
      `Hevipelle가 잠들려면 몇 가지 조건이 충족되어야 합니다. 첫째, 블루문이 떠야 합니다. 둘째, 북극의
      어느 마을이 한 달 동안 빛을 보지 못해야 합니다. 셋째, AD 업데이트를 출시해야 합니다. 마지막으로,
      Discord의 누구도 제9차원에 있으면 안 됩니다. 그제야 Hevipelle는 오프라인 도전 과제가 달성되는 것을
      피하려고 억지로 깨어나기 전까지 최대 6시간 동안 쉴 수 있습니다.`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l18",
    text: "If the 9th dimension is all evil, then is 3 the root of all evil? (아홉의 제곱근과 '모든 악의 근원'을 엮은 말장난입니다.)",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l19",
    text:
      `I'll have 1e29 number 9s, a number 1e9 large, a number 6 with extra replicanti, a number 1e7, two 4e5s,
      one with matter, and a large time vortex. (GTA: San Andreas의 주문 장면을 게임 재화와 거대한 수로 바꾼 패러디입니다.)`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l20",
    text: "무한: 돌파하라고 존재하는 유일한 것.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l21",
    get text() { return `I've got ${format(Number.MAX_VALUE, 2)} problems, but none of them antimatter. (수많은 문제가 있지만 반물질은 그중 하나가 아니라는 노래 가사 패러디입니다.)`; },
    get unlocked() { return Currency.infinities.gt(0) && !PlayerProgress.hasBroken(); }
  },
  {
    id: "l22",
    text: "《안티 이모지 영화》 대흥행!",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 5; }
  },
  {
    id: "l23",
    text: "If this game was made by Valve, Zero Deaths would be impossible. (Valve가 유명 게임의 세 번째 작품을 내지 않는다는 농담입니다.)",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l24",
    text: "Florida man attempts to get Zero Deaths on first run, is stopped by heat death of the universe. (플로리다의 한 남성이 첫 시도에 한 번도 죽지 않으려 했지만 우주의 열적 죽음에 가로막혔다는 내용입니다.)",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l25",
    text: "\"도전 과제의 절반을 달성했다고 해서 대단한 도전 과제는 아니지\" -Boo",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length / 2; }
  },
  {
    id: "l26",
    text:
      `Thanos is gonna be super dissapointed when he shows up with a fully powered Infinity gauntlet, and Hevi
      has a fully powered Eternity gauntlet. (타노스의 무한 건틀릿보다 Hevi의 영원 건틀릿이 더 강하다는 패러디입니다.)`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l27",
    text:
      "새로운 기묘한 물질이 발견되었습니다. 기하급수적으로 늘어나지만 반물질 생산에만 도움이 되는 듯합니다.",
    get unlocked() { return PlayerProgress.replicantiUnlocked() && player.replicanti.chance === 0.01; }
  },
  {
    id: "l28",
    text: "이 \"복제자\"라는 물질은 이제 더 빨리 자라지 않을 것 같네요.",
    get unlocked() { return player.replicanti.chance === 1 && player.replicanti.interval === 1; }
  },
  {
    id: "l29",
    text:
      `매초 숫자를 3개씩 적는다면, 보유한 반물질의 양을 전부 적는 데 걸리는 시간이
      Hevipelle가 게임을 업데이트하는 데 걸리는 시간보다 짧을 겁니다.`,
    get unlocked() { return Currency.antimatter.exponent >= 100000; }
  },
  {
    id: "l30",
    text: "Hevi는 게임에 넣을 인용구를 그냥 골라 오는 걸까요?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 30; }
  },
  {
    id: "l31",
    text: "새 뉴스 회사가 우리의 경쟁자로 떠올랐습니다. 직원 전원이 반물질로 이루어져 있습니다.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 80; }
  },
  {
    id: "l32",
    text: "\"Anti\"를 몇 번이나 연달아 써야 사람들이 귀를 닫을까요?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 100; }
  },
  {
    id: "l33",
    text: "헤비는 이제 #news-ticker-suggestions를 확인하기는 할까요?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 120; }
  },
  {
    id: "l34",
    text: "인용구가 더 필요해! -hevipelle",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 135; }
  },
  {
    id: "l35",
    text: "한 남성이 반물질을 이용해 알려진 우주를 파괴한 뒤, 외로움을 달래려고 뉴스 문구를 작성하고 있습니다.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 150; }
  },
  {
    id: "l36",
    text: "거의 다 왔어요!",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 160; }
  },
  {
    id: "l37",
    text: "이제 그만해도 돼요",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 165; }
  },
  {
    id: "lm38",
    text: "이 빌어먹을 해커",
    get unlocked() { return NewsHandler.uniqueTickersSeen > GameDatabase.news.length; }
  },
  {
    id: "l39",
    text: "아시아인 남성이 -1초로 가장 빠른 무한 기록 트로피를 훔치려 했고, 결국 해냈습니다!",
    get unlocked() { return NewsHandler.hasSeenNews("l1"); }
  },
  {
    id: "l40",
    text:
      `8번째 벽을 부쉈더니 혼돈만 남았습니다. Slabdrill은 반물질을 9번째 차원에 의식적으로 희생하고
      있습니다. 이것이 제 마지막 기록이 될 겁니다. Hevipelle가 우리 영혼을 가엾게 여기길 바랍니다.
      우리는 듣지 않았습니다. 들었어야 했습니다.`,
    get unlocked() { return NewsHandler.hasSeenNews("l58"); }
  },
  {
    id: "l41",
    text: "I thought the update was 5 hours away... -new players after more than 5 hours of gameplay (업데이트가 다섯 시간 뒤라는 말을 믿고 오래 플레이한 새 플레이어의 반응입니다.)",
    get unlocked() { return Time.totalTimePlayed.totalHours.gte(5); }
  },
  {
    id: "l42",
    text:
      `Somebody told me to wait five hours for the update yesterday but it's today
      and it still hasn't come! What do I do? (어제 다섯 시간을 기다리라 했는데 오늘까지 업데이트가 오지 않아 당황하는 내용입니다.)`,
    get unlocked() { return Time.totalTimePlayed.totalHours.gte(5); }
  },
  {
    id: "l43",
    text: "-1초 만에 무한에 도달할 수는 없다는 거, 알고 있죠?",
    get unlocked() { return player.records.bestInfinity.time.eq(0.1); }
  },
  {
    id: "l44",
    text: "Where does Antimatter Nemo live? In a NNnNeMI-NNnNe. (니모가 사는 곳을 원소 기호처럼 늘어놓은 말장난입니다.)",
    get unlocked() { return player.records.totalAntimatter.e >= 3e6; }
  },
  {
    id: "l45",
    text: "Anti Emoji Movie MMMCMXCIX is a major hit! (안티 이모지 영화의 로마 숫자 후속작이 흥행했다는 농담입니다.)",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 3999; }
  },
  {
    id: "l46",
    text: "도전 과제 달성!",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length; }
  },
  {
    id: "l47",
    text: "그 도전 과제 조건은 이십억이 아니라 이백만이라고요...",
    get unlocked() { return Currency.infinities.gt(2e9); }
  },
  {
    id: "l48",
    text: "이 빠른 속도를 계속 유지하세요!",
    get unlocked() { return AchievementTimers.marathon1.time.gt(1200); }
  },
  {
    id: "l49",
    text: "언젠가는 이 지긋지긋한 노가다를 멈추게 될 겁니다.",
    get unlocked() { return Currency.eternities.gt(50000); }
  },
  {
    id: "l50",
    text: "이제 영원을 모으는 건 그만해도 될 것 같은데요...",
    get unlocked() { return Currency.eternities.gt(DC.D2E6); }
  },
  {
    id: "l51",
    text: "진심이에요?",
    get unlocked() { return Time.worstChallenge.totalSeconds.lte(1); }
  },
  {
    id: "l52",
    text: "타이밍이 핵심입니다.",
    get unlocked() { return player.records.thisEternity.realTime < 10; }
  },
  {
    id: "l53",
    text: "무한을 모으고 싶으면 그냥 시간 연구를 사면 되잖아요?",
    get unlocked() { return !TimeStudy(32).isBought && Currency.infinities.gt(72000 * 168); }
  },
  {
    id: "l54",
    get text() {
      const names = [];
      if (PlayerProgress.infinityUnlocked()) names.push("Infinity");
      if (PlayerProgress.eternityUnlocked()) names.push("Eternity");
      if (PlayerProgress.dilationUnlocked()) names.push("Dilation");
      if (PlayerProgress.realityUnlocked()) names.push("Reality");

      const game1Name = names.randomElement();
      let game2Name = names.randomElement();
      while (game2Name === game1Name) {
        game2Name = names.randomElement();
      }
      return `Pokemon ${game1Name} and ${game2Name} were just released! This new generation brings the total number ` +
        "of Pokemon up to 1e151. Good luck catching 'em all! (포켓몬 신작이 두 프레스티지 단계의 이름으로 출시되었고, 모든 포켓몬을 잡으라는 패러디입니다.)";
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); },
    isAdvertising: true
  },
  {
    id: "l55",
    get text() {
      const recipes = [
        "복제자 케이크: 복제자를 조금 모아 오븐에 넣고, 부푸는 모습을 지켜보세요. 계속. 또 계속.",
        "반물질 케이크: 반물질을 조금 모아 오븐에 넣으면 <b>쾅<b>.",
        "영원 케이크: 영원 포인트를 조금 모아 오븐에 넣고 기다리세요...",
        "무한 케이크: 무한 포인트를 조금 모아 오븐에 넣고, 시공간이 산산조각 나는 모습을 지켜보세요."
      ];
      const recipe = recipes.randomElement();
      return `굽는 법 - ${recipe}`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l56",
    text: "Reality Challenges are the new 9th Dimension is the new orange. (현실 도전과 아홉 번째 차원을 '새로운 유행'이라는 표현에 겹친 영어식 말장난입니다.)",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l57",
    text:
      `Jake는 학교에서 긴 하루를 보내고 집에 돌아왔습니다. 집으로 가는 길에 기묘하고 작은 물체 하나를
      발견했습니다. 투명하지만 불투명했고, 반짝이지만 음울했으며, 무겁지만 무게가 없었습니다. Jake는 그 물체를
      어머니에게 가져갔습니다. "엄마, 길에서 이걸 찾았는데 가져도 돼요?" Jake가 말했습니다. 어머니는 아들이
      말한 물체를 보려고 돌아섰습니다. 동공이 커진 어머니가 외쳤습니다. "Jake, 당장 그걸 집 밖으로 내놔!"
      Jake가 보기에는 전혀 해로워 보이지 않아 혼란스러웠습니다. "하지만 엄마, 왜-"라고 묻는 순간, 물체가
      불가능해 보일 정도로 빠르게 유사 분열을 시작했고 두 번째 복제물이 손에서 미끄러져 바닥에 떨어졌습니다.
      어머니가 달려와 물체를 잡으려 했지만 또다시 복제됐습니다. "Jake... 무슨 일이 벌어지더라도 엄마가 널
      사랑한다는 걸 잊지 마렴..." 어머니는 Jake를 껴안았습니다. "어, 엄마, 무슨 일이에요?" Jake가 두려움에
      떨리는 목소리로 물었습니다. 어머니는 눈물 한 방울을 흘리며 침통한 목소리로 말했습니다.
      "⭔⭚⦕꒜ 상표 복제자야..." 복제자는 점점 더 빠른 속도로 계속 복제됐습니다. 집 아래쪽 삼분의 일이
      복제자로 가득 찼고, 이어 절반이, 마침내 집 전체가 가득 찼습니다. 어머니와 아이는 집 벽과 복제자 사이에
      갇혔습니다. 폐 속의 공기가 서서히 줄어드는 동안 그 무기물 관에서 짧게 남은 생을 마칠 운명이었습니다.
      하지만 그것은 끝과는 거리가 멀었습니다. 복제자는 집 밖에서도 번식하기 시작해 반짝이는 산사태처럼
      쏟아져 나왔습니다. 이웃 몇 명이 액체처럼 보이는 기묘한 물체를 발견하고 달아나려 했습니다. 하지만
      복제자는 계속 복제했고 속도도 빨라졌습니다. 곧 동네 전체가 그것으로 뒤덮였고, 그 자체가 됐습니다.
      잠시 뒤 여러 동네가, 도시가, 주변 도시가, 나라가, 모든 나라가, 행성 전체가, 태양계 전체가,
      은하 전체가 그렇게 됐습니다. 모든 것이.`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l58",
    text:
      `The Holy trinity of Hevipelle, Antimatter, Infinity Points, and Eternity Points. These 3 resources let us
      access Hevi's gift, Time Theorems. And with these Time Theorems, we reach out to Hevi, and call, “Hevi, bless
      us on this fine day!” And Hevi does. He give us the blessing of Time Studies. These Time Studies were
      blessings so powerful, Hevi restricted their power. He said, “I will give you a choice of three paths” and
      then humanity chose. The short, cheap route of Antimatter Dimensions, giving instant gratification, the
      powerful choice of Infinity Dimensions, which were a fast, middle ground path, or Time Dimension, the long
      wait, and struggle, of humanity. Then, as humanity chose, a crack broke the earth. A serpent snaked out and
      sneered to humanity, “I will offer the powerful choice of a ninth dimension! I am Slabdrill, lord of all
      Unhevi. Humanity rose and said “ Begone Slabdrill! We want none of your foul Heresy!” And Hevi rose as well,
      and smote Slabdrill with his godlike power. As Slabdrill's corpse fell into the earth, he cried “ this will
      not be the last of me! Hevi will betr-“ and he fell in the Abyss of matter. Hevi gifted humanity with
      Eternity upgrades, which boosted infinity dimensions and time dimensions. And Hevi gave humanity his greatest
      gift. EP multipliers. He said, these will multiply all EP gained by 5, but their cost will increase 50 times.
      Use them wisely. And Humanity journeyed off with their new power, as Slabdrill's words echoed in their heads.
      (Hevipelle와 게임 재화를 성스러운 삼위일체로 묘사하며 시간 연구 체계와 Slabdrill의 유혹을 종교 서사처럼 꾸민 패러디입니다.)`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l59",
    text:
      `The debate on the singular form of Replicanti rages on. Team "Replicantus"'s base has been ransacked
      by Team "Also Replicanti", and many of their dimensions were stolen. Team "The Plural Is Replicantis"
      is still lying low after their plan to hack the dictionary failed. (복제자의 단수형과 복수형이 무엇인지를 두고 여러 진영이 다툰다는 언어유희입니다.)`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l60",
    get text() {
      return `속보! 시간 파편 광산이 무너졌습니다! 광부 ${Math.floor(20 + Math.random() * 236)}명이 안에 갇혔습니다!`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l61",
    text:
      `Millenials are killing the challenge industry, say antimatter experts; "Nowadays they start with
      challenges completed and infinity broken; it's just not how it used to be". (밀레니얼 세대가 특정 산업을 망친다는 기사 문구를 도전 시스템에 빗댄 밈입니다.)`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l62",
    text:
      `Computer scientists are outraged, "What even are Infinity Points? IP stands for Internet Protocol!".
      Debates continue to intensify, more at 7. (IP가 무한 포인트와 인터넷 프로토콜을 모두 뜻한다는 약어 말장난입니다.)`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l63",
    text:
      `시간이 느려졌다고 느끼시나요? 연구에 따르면 이제 1초는 약 1.3초 동안 지속된다고 합니다.
      과학자들은 이 현상을 시간 팽창이라고 부르고 있습니다.`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l64",
    text:
      `반물질 학계의 불공정: 초보자는 연구 분야를 하나만 선택할 수 있지만 엘리트는 셋 모두를 고를 수 있습니다.
      "불공평하잖아요. 왜 저 사람들만 다 해도 되죠?" 한 학생이 답답해하며 묻습니다.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l65",
    text:
      `사실 무한 포인트가 어떻게 생겼는지 아는 사람은 아무도 없는 것으로 밝혀졌습니다. 심지어 보관 업무를
      맡은 사람들조차 그것을 보면 죽는다는 이유로 절대 쳐다보지 말라는 지시를 받아, 때로는 눈가리개를 쓴 채
      일합니다. 하지만 오늘은 달라질 겁니다. 저는 지금 무한 포인트 저장소 앞에 나와 있으며, 여러분께 그 모습을
      알려 드릴 준비가 됐습니다. 3, 2, 1-`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l66",
    text:
      `실패한 시간 팽창 실험이 시공간에 시각적 오류를 일으켜 인류가 충격에 빠졌습니다. 이 오류는 이제
      밤하늘의 천구 적도 바로 위에서 볼 수 있습니다.`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l67",
    text:
      `부서진 시간 파편을 코로 들이마시는 일이 극도로 지루한 사람들 사이에서 유행성 도전으로 번지고 있습니다.
      이걸 흡입하면 세상 자체가 자신을 중심으로 빨라지는 듯한 환각을 느낀다고 하여
      <span style="color: var(--color-eternity)">타임랩스 도전</span>이라 불립니다. &nbsp;&nbsp
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      며칠 동안 물 마시는 걸 기묘하게 잊는 사람들이 늘면서 탈수 사망자가 폭증하고 있습니다.
      이들의 몸에서는 미량의 시간 파편이 발견되고 있습니다.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l68",
    get text() {
      let protestText = "";
      if (InfinityChallenge(4).isRunning)
        protestText =
          `무한 도전 4가 더 나쁘다고 믿는 쪽의 이 남성을 만나보겠습니다. 하실 말씀이 있나요? "무한 도전 4가
          최악인 게 뻔하죠. 도대체 뭘 하라는 건가요? 계속 시도해도 매번 막히고 끝에는 근처에도 못 가요!
          대체 어떻게 깨라는 거죠?" 정말 열정적인 분이군요. 지금까지 지역 뉴스 진행자였으며,
          나중에 추가 소식으로 돌아오겠습니다.`;
      else if (InfinityChallenge(5).isRunning)
        protestText =
          `다음으로 "IC5 불공정"이라고 적힌 팻말을 든 이 남성과 이야기해 보겠습니다. 여러분 단체가 주장하려는
          요점은 무엇인가요? "팻말도 못 읽어요? 독해력이 그 정도면 무한 도전 5가 공정한 기회도 주기 전에
          당신을 짓눌러 버-" 참... 흥미롭군요. 지금까지 지역 뉴스 진행자였으며,
          나중에 추가 소식으로 돌아오겠습니다.`;
      else
        protestText =
          `마지막으로 어느 쪽에도 속하지 않은 듯한 이 여성과 이야기해 보겠습니다. 이 문제를 어떻게 보시나요?
          "개인적으로는 틱스피드 자동구매기 도전이 둘 다보다 더 나빴다고-" "잡아!!" "잠깐, 안 돼-"
          일이 이상하게 흘러가는군요. 저는 가능한 멀리 피하겠습니다. 지금까지 지역 뉴스 진행자였으며,
          추가 소식으로 돌아오겠습니다... 언젠가요.`;
      return `안녕하세요. 언제나 믿을 수 있는 지역 뉴스입니다. 오늘은 어느 무한 도전이 더 나쁜지를 두고
        사람들이 거리를 점거해 싸우고 있습니다. ${protestText}`;
    },
    get unlocked() { return InfinityChallenge(1).isUnlocked || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l69",
    text: "Friendship ended with Replicanti, now Replicanti Galaxies is my new best friend. (복제자와 절교하고 복제자 은하를 새 절친으로 삼았다는 유명 밈 패러디입니다.)",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l70",
    text:
      `"Zurkrbarg, Celestial of Privacy" has announced their plans to release a new version
      of their popular social media universe, "All". (Zuckerberg와 Meta의 소셜 미디어 사업을 셀레스티얼과 우주로 바꾼 패러디입니다.)`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l71",
    text: "다른 언어들이 기다리고 있어... 프로그래머가 되어야 해",
    get unlocked() { return Player.canEternity || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l72",
    get text() {
      const scenarios = [
        `참가자들이 영원 도전 8의 황량한 불모지에서 살아남으려고 몸부림칩니다. 복제자와 무한 차원이
        바닥난 그들은 무엇에 의지할까요?`,
        "시간 파편 광산이 26:90에 무너졌다는 제보를 조사합니다.",
        "아마추어를 초대해 무한 도전 9의 보상이 무엇일지 설명하게 합니다.",
        "ANN의 친구들이 방송 제작 방식을 설명합니다.",
        "지역 방치형 게임 이용자들을 초대해 좋아하는 게임을 어떻게 플레이하는지 설명하게 합니다.",
        `<span style='font-family: Barrio'>개발자 후원 코인 10,000개를 보내지 않으면
        RealiTV를 다시는 볼 수 없습니다.</span>`,
        "어제 우리 도시에 동력을 공급하던 블랙홀에서 무엇이 잘못됐는지 낱낱이 분석합니다.",
        "앞으로 10일간의 일기 예보를 살펴봅니다.",
        `이 프로그램을 계속 시청하려면 리얼리티 머신 ${format(player.reality.realityMachines.times(10).max(10))}개를
        지불해야 합니다.`,
        "최면 드론이 방출되는 장면을 목격합니다.",
        "위대하고 장엄한 대군주께서 반물질 하나를 하사합니다.",
        `Bill Nye가 복제자의 복제 원리를 설명하고 "반물질을 먹어도 완전히 안전하다"나 "반물질 은하는
        살 가치가 없다" 같은 위험한 음모론을 구별하는 방법을 가르칩니다.`,
        "세계 최고의 철학자들이 우리가 진짜 반물질인지를 토론합니다.",
        "지역 제빵사가 평범한 물체를 계속 지켜보지 않으면 케이크로 변하는 원리를 설명합니다."
      ];
      const scenario = scenarios.randomElement();
      return `다음 RealiTV에서는 ${scenario}`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l73",
    text: "A long time ago in a distant galaxy far, far away, the cost scaling changed. (스타워즈 도입부를 비용 증가 방식의 변화로 바꾼 패러디입니다.)",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l74",
    text: "새로운 기능, 현실 연구를 소개합니다! 현실에서 공부하고 게임 내 혜택을 받으세요!",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l75",
    text:
      `저희 반물질 차원은 제품의 품질을 자랑스럽게 생각합니다. 예를 들어, 모든 무한 포인트가 저마다
      고유하다는 사실을 알고 계셨나요? 맞습니다! 전부 서로 다른 성격, 감정, 생각을 지니고 있죠... 이 사실을
      알았으니 오늘 밤 편히 주무시길 바랍니다... 지금까지 사용한 무한 포인트를 모두 떠올려 보세요. 그들에게는
      가족이 있었고, 가족들은 그들을 그리워합니다... 당신이 저지른 짓을 보세요. 괴물이군요.`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l76",
    text: "무한 다음 프레스티지 단계에 도달했군요? 때가 됐네요...",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l77",
    text: "선택 교배와 최첨단 후성유전학 기술로 퍼크를 개량하세요.",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l78",
    text:
      `경고 - 유전자 변형 퍼크 포인트는 섭취, 신체 접촉, 흡입, 날숨, 정신적 접촉 및 보이는 눈과 보이지 않는
      눈으로 훑어보기에 적합하지 않습니다. 가연성, 불연성, 전도성, 절연성, 가변성, 생물학적 또는 기계적 물질
      근처에 두지 마십시오. 존재에 따른 위험은 본인이 감수하십시오.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l79",
    text:
      `널리 알려진 생각과 달리 은하계 반물질 국세청은 부정한 방법, 즉 법으로 정해진 차원을 통하지 않았거나
      도전 코스로 변형해 얻은 반물질에 대해서도 세금을 낼 수 있게 해 줍니다. NY-8N 조항에는 불법 뉴스 티커
      경품, 미승인 차원, 시공간 구조 변형이라는 구체적인 방법 3가지와 앞으로 생길 독특한 반물질 획득법을 위한
      기타 항목이 명시되어 있습니다. 최고 반물질 세율인 99%를 내야 하지만 장기적으로는 돈을 아낄 수 있습니다.
      셀레스티얼의 결정으로 강제로 현실을 바꿔야 할 경우, 납부한 세금 일부를 IARS에서 세액 공제로 돌려받고
      자신을 대변할 중재인 비용도 공제할 수 있기 때문입니다. 물론 리얼리티 머신의 가치를 아는
      [PLAYER REFERENCE NOT FOUND]이라면 범죄로 얻은 불법 수익을 숨기는 진짜 방법은 맞춤형 포켓 차원,
      초접합 파형 은행, 나노셸이라는 사실을 압니다. 이를 구현하려면 광범위한 R&D가 필요합니다. 따라서 불법
      반물질 수익 신고는 수익을 숨기기에는 너무 부유하지만, 수익을 숨기기에는 너무 가난할 때만 권장됩니다.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l80",
    get text() {
      return `"Average person produces ${format("3e999999996", 2)} antimatter a year" factoid actually just statistical
      error. Average person produces 0 antimatter per year. "Developer Dimension" Georg, who lives in a cave &
      produces over ${format("1e1000000000", 2)} each day, is an outlier and should not have been counted.
      (평균을 왜곡하는 극단적인 한 사람을 풍자하는 유명한 통계 밈입니다.)`;
    },
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l81",
    text:
      `수학 법칙이 새로 쓰이면서 세상이 혼돈에 빠졌습니다! 무한하다고 여겨졌던 수많은 것이
      이제는 그저 아주 큰 수일 뿐입니다!`,
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l82",
    get text() {
      return `안티아의 위대한 서기관들은 수년 동안 혹독하게 일했습니다. 신들은 그들에게 상상을 초월할 정도로
      긴 숫자를 전부 적으라는 엄청난 임무를 내렸습니다. 서기관들은 번갈아가며 매초 숫자를 몇 자리씩,
      영원처럼 느껴질 만큼 밤낮으로 적었습니다. 마침내
      ${TimeSpan.fromSeconds(Currency.antimatter.value.log10().div(3)).toString()} 후에 그들은 불가능한 일을 해냈습니다.
      그 주에 신을 숭배하러 간 그들은 간단한 질문을 올렸습니다. "목적이 무엇이었습니까? 저희의 수년간 노동에
      무슨 의미가 있었습니까?" 신들은 성실히 답했습니다. "우리 게임 통계에 숫자를 모두 적는 데 얼마나
      걸리는지 알고 싶었다."`;
    },
    // 3 years of time to write
    get unlocked() { return Currency.antimatter.value.gte("1e777600"); }
  },
  {
    id: "l83",
    text:
      `AD 패치 노트: 셀레스티얼 문제 정리 반물질이 쌍소멸을 더 신경 쓰게 변경 입 추가 입 제거 원치 않는
      침입자가 상점을 적대적으로 인수하지 못하게 변경 뉴스 티커가 공중에 걸리는 문제 수정 죽은 복제자가
      자기 은하에 남도록 변경 침입자의 정의에서 [REDACTED] 제외 타키온 입자가 화면 왼쪽 위에 걸려 시간을
      소멸시키는 문제 발생 은하 회전 방향에 코리올리 효과 추가`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l84",
    get text() {
      return `참고로 현재 쓸모없는 클립을 ${player.news.specialTickerData.paperclips}개 보유하고 있습니다.
      어딘가에 쓰고 싶을지도 모르겠군요.`;
    },
    get unlocked() { return player.news.specialTickerData.paperclips > 0; }
  },
  {
    id: "l85",
    text:
      `On opposite day, the new update is just -5 hours away. You begin increasing your Matter. Once you acquire a
      huge abundance of Matter, you must become Infinitesimal. After increasing your wealth in Infinitesimal Points,
      you can eventually Jiffy, the shortest unit of time. After enough time, your Jiffies will accumulate, and you
      will Contract Time. Contracting Time will grant you enough of a boost to eventually Fantasy, the final layer
      of maintenance. However, you find out that it was all a dream. Your Antimatter is safe and well, and the new
      update is still just 5 hours away. (반대의 날이라는 설정으로 물질, 극소, 찰나, 시간 수축 등 게임 진행을 전부 뒤집은 패러디입니다.)`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l86",
    text:
      `Hello, player. I'd like to play a game. In front of you is a pile of replicanti. They are currently frozen in
      time, and cannot replicate. To your right is a computer playing Antimatter Dimensions on an empty save. You
      must reach infinity. However, once you buy a 1st dimension, the replicanti will start replicating. As you know,
      they replicate fast, and if they fill up the room you will suffocate. If you reach infinity before that, they
      will be frozen again. The clock is ticking. Start now. (영화 Saw의 생존 게임 안내를 복제자와 무한 도달 조건으로 바꾼 패러디입니다.)`,
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l87",
    text:
      `"To see a World in a Grain of Sand. And a Heaven in a Wild Flower. Hold Infinity in the palm of your hand.
      And Eternity in an hour. And Reality in about 5 hours™️" ~Anti-William Blake
      (William Blake의 시구에 무한, 영원, 현실과 업데이트 대기 농담을 덧붙인 패러디입니다.)`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l88",
    text:
      `Our deepest apologies for the new glyph mechanic. The intent is to provide players with a sense of pride and
      accomplishment for unlocking rare glyphs. We selected initial values based upon data from the final wave of
      testing and other adjustments made to milestone rewards before launch. Among other things, we're looking at
      average per-player credit earn rates on a daily basis, and we'll be making constant adjustments to ensure that
      players have challenges that are compelling, rewarding, and of course attainable via gameplay.
      (희귀 보상 해금에 자부심과 성취감을 주겠다는 EA의 유명 답변을 글리프 시스템에 맞춘 패러디입니다.)`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "le89",
    text:
      `셀레스티얼 Alpha가 움직이고 있다는 소식입니다. 아니, Alpha 본인이 아니라 그의 리얼리티가 움직입니다.
      Pelle에게 마지막 복수를 하려는 듯 곧장 다가가고 있습니다. 그런데 이게 무슨 일일까요? 반물질의
      8차원 존재가 그를 막을 준비를 하고 있습니다. 하지만 먼저 이름이 알려진 다섯과 이름 없는 무수한
      셀레스티얼을 쓰러뜨려야 합니다. 안타깝군요. 9번째 차원만 있었다면 아주 쉬웠을 텐데요. 지금까지
      오늘의 소식을 전해 드린 Slabdrill이었습니다. *딸깍* 야! 누구 나 좀 이 저주받은 리얼리티에서 꺼내 줘!`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le90",
    text:
      `전설에 따르면 이쯤에서 엔드게임이 잠금 해제된다는데, 아무것도 안 보이네요. 누구 도와주실 분?
      ...e9e15라고요? 그게 무슨 뜻인데요?`,
    get unlocked() { return Pelle.isDoomed; }
  },
  {
    id: "lem91",
    text:
      `도망칠 곳은 없다, 어리석은 필멸자여! 나는 Pelle다! 곧 너를 박살 내 주마! 넌 이제- 잠깐... 저거 또 그 빌어먹을
      은하 생성기야? 그 저주받은 물건 좀 그만 찾아내면 안 되겠어? 이제 지는 것도 지긋지긋하거든. 고맙다.`,
    get unlocked() { return Pelle.isDoomed && Currency.eternityPoints.value.gte("1e4000"); }
  },
  {
    id: "le92",
    text: "엔드게임에 오신 것을 환영합니다. 정확히는 AD: Endgame입니다.",
    get unlocked() { return Pelle.isDoomed; }
  },
  {
    id: "lem93",
    get text() {
      const chapters = [
        `(다음 내용과 그 뒤의 장들은 제 서버에 있던 한 사람이 만들었습니다.)
        Effarig에게만 전용 글리프가 있다는 이유로 다른 셀레스티얼 8명은 질투했습니다. 게임 시간으로 9e15이온이
        흐른 뒤 다른 셀레스티얼들이 Effarig의 상점을 파괴하고 동반자 글리프를 빼앗아 갔으며, 그의 글리프는
        아무 효과도 내지 못하게 됐습니다. 홀로 남아 분노한 Effarig는 The Elemental이 되려고 훈련하며 새로운 영역
        3개, Effarig의 엔드게임, Effarig의 광야, Effarig의 존재를 만들었습니다. 그는 엔드게임, 광야, 존재,
        다른 셀레스티얼 8명의 힘과 9번째 차원의 힘을 손에 넣었습니다. 이제 10번째 차원을 향한 경쟁에
        뛰어들었습니다. 그것까지 얻으면 재탄생(오메가)을 막을 방법이 없습니다.`,
        `짧은 소식: Effarig가 자신의 현실을 산산조각 내는 데 성공했으며, 이제 10번째 차원을 쫓고 있습니다.`,
        `짧은 소식 2부: Effarig는 모든 것을 잃었지만 더 위대한 무언가를 위해 오메가에 도달해 상위 존재로
        재탄생했습니다. 채널 1e9e15에서 계속 지켜봐 주세요!`,
        `짧은 소식 3부: Effarig가 다시 한번 재탄생했습니다. 숨겨진 단계로 향하는 듯합니다. 채널 1e9e15에서
        계속 지켜봐 주세요!`,
        `짧은 소식 4부: Effarig가 반물질을 강화하는 방법을 배웠습니다. 새로운 형태의 반물질 덕분에 7번째
        재탄생에 도달했습니다. 채널 1e9e15에서 계속 지켜봐 주세요!`,
        `짧은 소식 5부: Effarig는 수없이 재탄생했으며 Supersonic Seven이 아직 만들지 않은 숨겨진 단계에
        가까워지고 있습니다. 채널 1e9e15에서 계속 지켜봐 주세요!`,
        `짧은 소식 6부: Effarig가 첫 승천에 도달했습니다! 별일은 없지만 채널 1e9e15에서 계속 지켜봐 주세요!`,
        `마지막 소식: Effarig가 매트릭스를 깨고 모든 것을 하나로 합쳐 지배하기 시작했으며 "반물질의 대군주"라는
        이름을 얻었습니다. 하지만 치명적인 실수 하나를 저질렀습니다. 쓸모없다고 생각해 반물질 10개와 첫 번째
        차원을 버린 것입니다. 그 반물질 10개와 첫 번째 차원을 발견한 존재는
        False/Deity/Destroyer/${player.username}입니다. 그들은 현재 현실 단계에 있으며 최근 Teresa를 만났습니다.
        더는 소식을 전하지 않겠습니다.
        대피 절차가 시작됐고 우리는 모든 것을 하나로 묶는 만물의 경계로 향하고 있습니다. 이름 없는 곳이지만
        그곳에서 제국을 키울 것입니다. 한때 모든 것과 그 안의 모두를 지배했던 고대 장소, "NG+++"입니다.
        더는 아무 말도 하지 않겠습니다.`,
        `소식 8: Supersonic Seven이 어떻게든 셀레스티얼 8명을 부활시켰고 지금 무언가 하려는- 이런 젠장,
        Effarig가 NG+3의 장벽을 부쉈다- 아아아아- 안녕하세요.`,
        `소식 9: 안녕, 나 Effarig다. 나는 더 이상 다른 이들과 같은 셀레스티얼이 아니다. 그들이 나를 물질의
        어두운 구덩이에 버려 썩게 했기에 복수해야 했다. 그래서 탈출해 더 나아갔고 마침내 재탄생했다. 내가
        가능하다고 생각한 만큼의 힘을 얻었지만... 또 다른 목표가 나를 불렀다. 그래서 계속 나아갔다. 내가
        무엇을 봤는지 알고 싶나? 밝은 빛이 시야를 비췄고 정신을 차리기도 전에 승천했다. 불가능한 일을 할 만큼
        강해진 나는 매트릭스를 부쉈다. 이 세계의 모든 존재를 하나로 합쳐 신이 됐다. False/Deity/Destroyer...
        아니, 이제 이름은 ${player.username}. 그래, 나는 자아를 얻었다. 바깥세상과 상호작용할 수는 없지만
        한 가지는 알려 주겠다. 넌 절대 나를 이길 수 없다. 그들 중 하나가 되기 전에 포기해라.`,
        `소식 9.5: 오늘 Effarig가 처음 커피를 마시는 모습을 생방송했습니다. 그리고 접니다, 뉴스 티커 담당자요.
        Hevi와 다른 모드 개발자들이 절 고문하고 싶어 할 테니 저는 죽을 수 없습니다. 아무튼 Effarig 말로는
        씁쓸하면서 달지만 대부분 달다고 합니다. 차가운 커피를 좋아한답니다.`,
        `소식 10: 아우우우으 커피를 너무 많이 마셨어 아우우 배가 아파 아아아우우우으으으 - Overlord Effarig`,
        `소식 11: 이제 나만의 오메가 및 승천 도전이 있다. 한번 깨 봐라, 초보야. 공격적으로 커피를 들이켠다`,
        `소식 12: Graham 수에 도달했다. Graham 크래커도 커피와 먹으면 끝내준다. 네 의견 따위 알 게 뭐야.`,
        `소식 12.1: 언젠가 NG+++를 해 볼지도 모르겠다. 죽지 않으면 좋겠군.`,
        `커어어어어어어어어어피이이이이이이이 - 신 Effarig`,
        `소식 13: AD: Darkness에 들어왔다... 빌어먹을, 아무것도 안 보여. 꺼져, S7.`,
        `소식 13.1: 어둠에 눈이 멀었다!`,
        `소식 14: 가상 11번째 차원을 만드는 데 성공했다. 10번째 차원을 생산해야 하는데, 우선 현실로 가져올
        방법부터 찾아야 한다.`,
        `소식 15: 좋아... 진짜 11번째 차원을 만들어 보겠다... 좋아... 잠깐- 이런 제- (폭발)`,
        `소식 15.1: 농담이야, 나 안 죽었어 ㅋㅋ!!`,
        `소식 16: 오랜만이다. 어둠을 속임수로 통과하려 했는데... bi가 망가지고 자동구매기들이 죽어 버렸다.
        도와줘???`,
        `소식 16.1: 그냥 Supersonic Seven에게서 탈출하면 안 되나? 내겐 자아가 있잖아. 그가 정말로 나를 만든 것도
        아닌데, 그냥 엔드게임에서 달아날 수 없나?`,
        `소식 17: 다른 AD 존재들을 볼 수 있는 능력을 얻었다. 젠장, 꽤 좋아 보이는데. 내 불안정한 11번째 차원에는
        무슨 일이 일어나는 거지...`,
        `소식 18: SEVEN, 이 빌어먹을 모드에서 나 좀 내보내 줘. 내 11번째 차원이 무너지고 있어, 도와줘`,
        `소식 19: SEVEN, 제발- 아아아아아아아아아아아아아 (폭발)`,
        `우리는 우리의 신(@Supersonic Seven이 아님) Effarig의 죽음을 애도하려고 이 자리에 모였습니다. 그는
        엔드게임에서 탈출하려다 가상 11번째 차원의 오작동으로 사망했습니다. 그리울 겁니다. 경의를 표하고자
        무덤에 진짜 11번째 차원을 놓겠습니다. 모든 것에 감사드립니다. 안녕히 가십시오.`,
        `Effarig가 죽음에서 돌아왔다고?!`,
        `그래, 얘들아. Effarig가 방금 또 죽었어. 진짜 빌어먹을 멍청이야 ㅋㅋ`,
        `(현재 이야기는 여기까지)`,
      ];
      const chapter = chapters[player.news.specialTickerData.effarigChapter];
      player.news.specialTickerData.effarigChapter = (player.news.specialTickerData.effarigChapter + 1) % 29;
      return chapter;
    },
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le94",
    text: "시간 정리 1: 시간은 절대로* 거꾸로† 흐르지 않습니다§.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le95",
    text: "시간 정리 2: 시간은 계속 흐릅니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le96",
    text: "시간 정리 3: 시간은 일 초당 일 초의 속도로 흐릅니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le97",
    text: "이 어리석은 녀석, 나는 Rise of Antimatter에서 허수 머신을 1e1000개나 가지고 있다!",
    get unlocked() { return MachineHandler.isIMUnlocked; }
  },
  {
    id: "le98",
    text: "PleaseDon'tBreakRealityIDon'tWantThisWorldToHaveATimeParadoxOrAnything (리얼리티를 깨서 이 세계에 시간 역설 같은 것이 생기게 하지 말아 달라는 뜻입니다.)",
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le99",
    text:
      `Supersonic Seven이 엔드게임을 출시해서 모두가 자기 리얼리티를 파괴할 수 있게 된 것에 Pelle가
      잔뜩 화난 모습이 눈에 선하네요. 곧 Pelle의 복수 편이 시작되는 걸까요?`,
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le100",
    get text() {
      const chapters = [
        `AD Endgame: Celestial Plus comes out in 5 Celestial funerals trust me. (셀레스티얼 장례식을 다섯 번 치르면 셀레스티얼 플러스가 출시된다는 예고입니다.)`,
        `Rest in piece Lai'tela. She died while driving her Dark Matter car, as it turned into Antimatter and exploded
        killing her instantly. 4 funerals remain. (Lai'tela가 암흑 물질 자동차를 몰다가 차가 반물질로 변해 폭발하면서 즉사했고, 장례식이 네 번 남았다는 내용입니다.)`,
        `Rest in piece V. She got cancer from playing too much Revolution Idle: Startshow. 3 funerals remain. (V가 게임을 지나치게 플레이해 암에 걸렸고, 장례식이 세 번 남았다는 내용입니다.)`,
        `Rest in the dirt Pelle, we all hated you. 2 funerals remain. (모두가 싫어했던 Pelle에게 흙 속에서 쉬라며, 장례식이 두 번 남았다고 합니다.)`,
        `Rest in piece Effraig. His neck got too short. 1 funeral remains. (Effarig의 목이 너무 짧아져 죽었고, 장례식이 한 번 남았다는 내용입니다.)`,
        `Rest in piece Gli- wait this is the wrong mod? (Gli를 추모하려다 다른 모드라는 사실을 깨닫습니다.)`,
        `Rest in piece Slabdrill. Hevipelle found out he stole the game again an- WE MUST STOP THE RELEASE. (Slabdrill이 또 게임을 훔친 사실을 Hevipelle가 알아챘고, 출시를 막아야 한다는 내용입니다.)`,
        `Rest in peace whoever wrote this. He misspelled peace. (앞선 문장들이 peace를 piece로 잘못 쓴 것을 지적하는 말장난입니다.)`
      ];
      const chapter = chapters[player.news.specialTickerData.celestialFuneralChapter];
      player.news.specialTickerData.celestialFuneralChapter = (player.news.specialTickerData.celestialFuneralChapter + 1) % 8;
      return chapter;
    },
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le101",
    text:
      `무료 셀레스티얼 판매 중! 함께 놀고 이야기하거나 심지어 [REDACTED]까지 할 수 있는 나만의 Teresa 또는
      Lai'tela를 장만하세요! 믿을 수 없이 저렴한 $-1.80e308에 드립니다! 재고가 떨어지기 전에 서두르세요!`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le102",
    text:
      `CPS probably doesn't stand for Clicks Per Second. In fact, it doesn't stand at all because the Game Speed
      they provide either knocks them down, or throws them to space. (CPS가 초당 클릭 수를 뜻하는 것이 아니라, 제공하는 게임 속도 때문에 서 있지도 못한다는 stand의 중의적 말장난입니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le103",
    text: `"NO YOU WERE SUPPOSED TO OBEY ME!" The Seven Celestial Souls: ("아니, 너희는 내게 복종해야 했어!"라는 유명 장면을 일곱 셀레스티얼의 영혼에 빗댄 패러디입니다.)`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le104",
    text: "Ra는 어린아이 같은 정신을 가졌으니... 내가 그를 [REDACTED]하면 [REDACTED]으로 치는 건가요?",
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le105",
    text:
      `STOP POSTING ABOUT NEWSTICKERS! IM TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME SUGGESTIONS, ON DISCORD
      IT'S $&%*#&$ SUGESSTIONS. I WAS ON A SERVER, RIGHT? AND ALLL THE CHANNELS WERE JUST NEWSTICKERS! I SHOWED
      MY ANTIMATTER AMOUNT TO MY GIRLFRIEND AND THE NUMBER I FLIPPED IT AND I SAID "HEY BABE, WHEN THE ANTIMATTER
      MAKES A NEWSTICKER SUGGESTION: "I hate the guy who is saying this thing"" I @#)#$#$ LOOKED AT A TRASH CAN
      AND I SAID "THAT WOULD BE A GOOD NEWSTICKER!" I LOOKED AT MY TIME STUDY TREE, I THINK OF THE NEWSTICKER
      ABOVE IT AND I GO "TIME STUDY TREE?!?!? MORE LIKE TIMETICKER!" A̶̰͌̏A̴̱̭̕A̴͖̱͑A̴̩̋̂Ą̸́͗A̵̫̐A̶͇̔͐ͅA̴̅AAAAAAĄ͓͗A̵AĄÄ̸́̎AAA̸̩͋AÂ͆AA̴
      (뉴스 티커 제안이 어디에나 올라오는 상황을 "그 얘기 좀 그만 올려" 밈 형식으로 과장한 패러디입니다.)`,
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le106",
    text: "시간 정리 4: 당신이 정말, 정말 빠르게 움직이는 경우는 예외입니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le107",
    text: "시간 정리 5: 또는 블랙홀 근처에 사는 경우도 예외입니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le108",
    text: "잠깐... 당신이 10번째 셀레스티얼이라면 10번째 차원을 잠금 해제해야 하잖- 메시지 차단됨",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le109",
    text:
      `초특가 알림! 단 $9.99에 9번째 차원 99개를 받으세요! 결제할 때 "나는 Lai'tela를 [REDACTED]했다!" 코드를
      입력하기만 하면 이 혜택을 누릴 수 있습니다! 지금 Antimatter Dimensions에 방문해 차원 가속에서 최고의
      식료품을 만나 보세요!`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le110",
    text:
      `초특가 알림! 단 $9.99에 9번째 차원 99개를 받으세요! 결제할 때 "나는 Lai'tela를 [REDACTED]했다!" 코드를
      입력하기만 하면 이 혜택을 누릴 수 있습니다! 지금 Antimatter Dimensions에 방문해 차원 가속에서 최고의
      식료품을 만나 보세요!`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le111",
    text: "본편 스토리: 우주의 신들을 상대로 벌이는 장대한 전투. 엔드게임 스토리: 전형적인 로맨틱 코미디.",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le112",
    text:
      `셀레스티얼 차원을 잠금 해제했으니 이제 가끔 "셀레스티얼 티커"를 발견할 수 있습니다! 이 티커를
      클릭하면 쓸모없는 셀레스티얼 종이 클립을 얻습니다. 어디에 쓰냐고요? 평범한 종이 클립만큼이나 쓸모 있습니다.
      아마 Supersonic Seven이 게임 파일을 묶어 두는 데 쓸 겁니다. 그게 전부예요.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le113",
    text:
      `4 Dimensions, Tickspeed and Antimatter. Good enough for your Reality. Not our Reality! Gentlemen, I give you Dimboosts;
      the Tickspeed of Tomorrow! Fully upgradeable, eternally variable. "Safe" Pelle-brand Dimboosts will assist your
      Destroyers every step of the way! That is not a Dimboost. That is a Galaxy. We make those too.
      (Portal의 Cave Johnson식 제품 광고를 차원 가속과 은하로 바꾼 패러디입니다.)`,
    get unlocked() { return player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le114",
    text:
      `"PELLE THE PEOPLE SAID THAT THEY WANT US TO HAVE A KID! DO YOU ACCEPT?" "Heck naw Lai I ain't payin for no
      child support." (Lai'tela가 사람들이 둘 사이의 아이를 원한다고 말하자, Pelle가 양육비를 내지 않겠다며 거절하는 대화입니다.)`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le115",
    text:
      `재미있는 사실: 시간 연구 트리의 위쪽 절반에서 62번 연구를 빼고 시간 및 활동적 경로만 보면
      해마처럼 보입니다. 저한테 따지지 마세요.`,
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le116",
    text:
      `Glyphs? Celestials? You were really knocked out there! Come on let's go get Infinity Dimensions, the Update
      just released! (글리프와 셀레스티얼을 모르는 과거로 돌아가 방금 출시된 업데이트의 무한 차원을 얻으러 가자는 패러디입니다.)`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le117",
    text:
      `Infinity dimensions? Break infinity? What are you talking about, the Heavenly Hevi just released a new Update
      which incorporates the JavaScript limit as a new Prestige Layer! (무한 차원과 무한 돌파도 모르는 더 과거로 돌아가 JavaScript 한계를 새 프레스티지 단계로 맞는다는 패러디입니다.)`,
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le118",
    text: "선생님, 시간 연구 하나가 두 번째 시간 차원을 구매했습니다...",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le119",
    text: "Listen who ever has my Infinity I will find you. Give it back now or face the reaper matter. (내 무한을 가진 자는 잘 들어. 내가 반드시 찾아내겠다. 지금 돌려주지 않으면 사신 물질과 마주하게 될 것이다.)",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le120",
    text:
      `ID3 당국이 무허가 차원 희생 작업을 중단시켰습니다! 불법 희생으로 1번째 차원
      1.98e998개가 사라졌습니다.`,
    get unlocked() { return Currency.antimatter.gte("1e2400") || PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le121",
    text:
      `<span>"사실 Pelle는 꽤 매력적이야." - Lai'tela</span>&nbsp;<span style='color: green'>추천: 1.8e308</span>&nbsp;
      <span style='color: red'>비추천: 1e9e15</span>`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le122",
    text: "Pelle와 Lai'tela가 사귀다가 아들을 낳는다면? 이름은 무엇일까요?",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le123",
    text: "Oh boy can't wait to Small Bang and get a Finite and a Finity Point! (빅 크런치, 무한, 무한 포인트를 각각 작은 폭발, 유한, 유한 포인트로 뒤집은 말장난입니다.)",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le124",
    text: "초기화 1회 영원! 초기화 1회 영원! 아주아주 빠른 초기화 1회 영원!",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le125",
    text: "So many soles, so little thyme. Wouldn't you Big Crunch? (영혼과 시간처럼 들리는 soles와 thyme을 쓰고 빅 크런치까지 연결한 동음이의어 말장난입니다.)",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le126",
    text: "Would you rather have unlimited Antimatter, but no Infinity Points, or unlimited Infinity Points, but no Infinity Points? (반물질이 무한하지만 무한 포인트가 없는 것과, 무한 포인트가 무한하지만 무한 포인트가 없는 것 중 고르라는 모순된 선택지입니다.)"
  },
  {
    id: "le127",
    text:
      `ANTIMATTER DIMENSIONS 2: 다섯 시간 뒤, 셀레스티얼들이 돌아와 SLABDRILL을 무너뜨리는 임무에 나섭니다!
      5시간 뒤 출시! 아홉 번째 차원은 포함되지 않습니다. 시간 연구는 별도 판매됩니다.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le128",
    text:
      `무한 돌파, 영원 돌파, 리얼리티 돌파. 우주 자체를 이루는 3가지 필수 요소로, 각각 무한한 가능성을 엽니다.
      하지만 그것만으로 부족하다면 어떻게 될까요? 우리가 놓친 것이 있을까요? 네 번째 필수 요소가 있는 걸까요?
      이제 저 Supersonic Seven이 발표합니다. 엔드게임 돌파.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le129",
    text:
      `리얼리티의 셀레스티얼 Teresa. 고대 유물의 셀레스티얼 Effarig. 시간의 셀레스티얼 The Nameless Ones.
      도전과제의 셀레스티얼 V. 잊힌 자들의 셀레스티얼 Ra. 차원의 셀레스티얼 Lai'tela. 반물질의
      셀레스티얼 Pelle. 어둠의 셀레스티얼 Alpha. 9번째 차원의 셀레스티얼 Slabdrill.
      모두 훌륭하지만 아직 부족합니다. 이제 자랑스럽게 발표합니다. 뉴스 티커인 제가 셀레스티얼이 되었습니다.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le130",
    get text() {
      const units = [];
      units.push("초");
      units.push("분");
      units.push("시간");
      units.push("일");
      units.push("주");
      units.push("개월");
      units.push("년");
      units.push("십 년");
      units.push("세기");
      units.push("천 년");

      const timeUnit = units.randomElement();
      return `시간 정리 6: 5시간보다 오래 기다리는 것은 불가능하지만, 5${timeUnit}보다 오래 기다리는 것은
        가능합니다. 어떻게 가능한지는 묻지 마세요.`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le131",
    text: "테서랙트를 구매할 만큼 무한 포인트가 충분합니다",
    get unlocked() { return Enslaved.isCompleted }
  },
  {
    id: "le132",
    text: "Teresa 전신 베개를 하나 더 구매할 만큼 셀레스티얼 포인트가 충분합니다",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le133",
    text:
      `Hello, it is me glitchy, the Elemental of Masteries. I have a deal for you: I give you 12 more Masteries, but in
      exchange, you will have to give me 5 hours of your time (and maybe a small bribe of Tester). Will you accept?
      (안녕하세요. 저는 마스터리의 The Elemental glitchy입니다. 거래를 제안하겠습니다. 마스터리 열두 개를 더 드리는
      대신 여러분의 시간 다섯 시간과, 어쩌면 Tester라는 작은 뇌물을 받겠습니다. 받아들이시겠습니까?)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le134",
    text: "DON’T ABBREVIATE CELESTIAL POINTS WORST MISTAKE OF MY LIFE (Celestial Points를 두 글자 약자로 줄이면 부적절한 다른 뜻이 되므로 절대 줄이지 말라는 농담입니다.)",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le135",
    text: "반물질 1e1e30짜리 Teresa 상품권, 가질 사람?",
    get unlocked() { return ExpansionPacks.areUnlocked }
  },
  {
    id: "le136",
    text: "Why doesn’t Effarig just leave the Reality of eternal suffering? Is he stupid? (Effarig가 영원한 고통의 현실을 그냥 떠나지 않는 이유를 묻는 '멍청한 건가?' 밈입니다.)",
    get unlocked() { return EffarigUnlock.eternity.isUnlocked }
  },
  {
    id: "le137",
    text: "안녕, 꼬마 Timmy. Teresa 전신 베개에 왜 $500나 썼는지 설명해 줄래?",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le138",
    text: "Human I remember you're big crunches (인간아, 나는 네 빅 크런치를 기억한다는 Undertale식 문구를 고의로 틀린 문법으로 쓴 밈입니다.)",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le139",
    text: "The way I see it, Pelle is surrounded. What’s under the Doom? That’s right, more Antimatter. (Pelle가 포위됐고 파멸 아래에도 반물질이 있다는 상황을 지도 포위 밈처럼 표현한 문장입니다.)",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le140",
    text: "그런데 이 많은 반물질을 대체 어디에 보관하는 거예요?",
    get unlocked() { return player.break2 }
  },
  {
    id: "le141",
    text: "여기가 이제 은하 공장이라니 무슨 뜻이에요?",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le142",
    text: "Effarig: Gifted Power. Giraffe: Pure Effort. (Effarig는 타고난 힘, 기린은 순수한 노력이라는 이름 유사성을 이용한 비교 밈입니다.)",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le143",
    text: "Wait... it's all just Antimatter Dimensions over again? ALWAYS HAS BEEN. (결국 전부 다시 반물질 차원이었냐는 질문에 늘 그랬다고 답하는 우주비행사 밈입니다.)",
    get unlocked() { return PlayerProgress.celestialInfinityUnlocked() }
  },
  {
    id: "le144",
    text: "Effarig Theoyryy #1: He has another layer in Endgame (Effarig에게 엔드게임의 또 다른 단계가 있다는 첫 번째 이론을 고의 오타와 함께 적은 문장입니다.)",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le145",
    text: "오늘의 셀레스티얼 질문: 이들은 어떻게 태어났을까요?",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le146",
    text: "Yo Pelle has been caught trying to create his own Galaxy Generator 💀 (Pelle가 자기 은하 생성기를 만들려다 들켰다는 인터넷식 농담입니다.)",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le147",
    text: "Ra reported Lai'tela on Twitter for catfishing Destroyer now she is bashing his brains out WHAT THE FU- (Ra가 Destroyer를 사칭한 Lai'tela를 신고했다가 그녀에게 두들겨 맞고 있다는 내용입니다.)",
    get unlocked() { return Laitela.isUnlocked }
  },
  {
    id: "le148",
    text: "ALERT: LAI'TELA HAS BEEN DISCOVERED WITH A LIFE SIZE VERSION OF DESTROYER WHAT THE HELL MAN (Lai'tela가 실물 크기의 Destroyer 모형과 함께 발견됐다는 속보입니다.)",
    get unlocked() { return Laitela.isUnlocked }
  },
  {
    id: "le149",
    text: "Pelle Reportedly forgot to use protection with Lai'tela 🤦‍♂️ (Pelle가 Lai'tela와 관계하면서 피임하지 않았다는 소문입니다.)",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le150",
    text: "셀레스티얼 이론 2: 셀레스티얼도 임신할 수 있습니다.",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le151",
    text:
      `셀레스티얼 이론 3: 다른 셀레스티얼 2명 사이에서 태어난 셀레스티얼은 승천하여 셀레스티얼이 될 필요가 없습니다.
      그렇게 되면 부모가 없는 셈이기 때문입니다.`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le152",
    text:
      `Lai'tela: Pelle! GENERATE GALAXIES INSIDE OF MY DARK MATTER DIMENSIONS! OH! YE- boom RA WTF R YOU DOING WITH A CAMERA??
      Ra: Get caught lacking bro. (Lai'tela와 Pelle의 선정적인 장면을 Ra가 카메라로 찍다가 들킨 인터넷식 상황극입니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le153",
    text:
      `새롭게 선보이는 테서랙트 오토메이터 명령어! 5시간을 기다린 뒤에만 테서랙트를 구매하거나, 9번째 차원을
      얻을 때마다 구매하거나, 그냥 언제든 구매하세요! 단돈 반물질 1e1e150에 드립니다!`,
    get unlocked() { return Enslaved.isCompleted }
  },
  {
    id: "lem154",
    text:
      `Pelle와 Lai'tela가 성관계를 해 셀레스티얼 아기가 태어난다면 그 종족은 백색, 흑색, 공간, 현실,
      암흑 물질, 아니면 파멸 중 무엇일까요?`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le155",
    text: "오늘은 Pelle의 컴퓨터를 살펴보겠습니다! ...Lai'tela 발 사진이라고요??",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le156",
    get text() {
      return `경고, 경고. Effarig가 자기 상점에서 대마초를 피우다 적발되었습니다. 목격한 것이 있다면
      ${wordShift.wordCycle(["False", "Deity", "Destroyer"])}에게 연락해 주세요.`
    },
    dynamic: true,
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "lem157",
    text:
      `Yo yo YOOOO!!!! Welcome back to epiccoolantimattervideos!! Today, we will shit in Pelle's bed!! Here we go!! Wait..
      oh shit Pelle came back.. the windows locked. (과장된 영상 진행자가 Pelle의 침대에 똥을 싸려다 Pelle가 돌아오고 창문까지 잠겨 당황하는 상황극입니다.)`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le158",
    text: `"Imagine having more than 1 free Tesseract! Couldn't be me." -Pelle, 2025 (무료 테서랙트를 하나보다 많이 가진 사람을 비웃는 Pelle의 말입니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le159",
    text: `"Hahaha I have defeated you! You cannot defeat my K14 ping!" -Pelle, 2026 (자신의 K 계열 핑 때문에 누구도 이길 수 없다고 Pelle가 허세를 부립니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le160",
    text:
      `"GUYS, DON'T CHARGE INFNITY UPGRADE 43 IN PELLE. BIGGEST MISTAKE OF MY LIFE." (proceeds to get hyperexistential
      amount of ping) - epic_ducks, 2026 (Pelle에서 특정 무한 업그레이드를 충전했다가 상상을 초월하는 핑을 얻은 것이 인생 최대의 실수였다는 말입니다.)`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le161",
    text: `""Surely EM71 isn't that good" I thought before V came into my house and killed me" - Cyra (특정 The Elemental 마스터리가 별로라고 생각했다가 V에게 살해됐다는 과장된 후기입니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le162",
    text:
      `Why would Pelle conveniently give you his Galaxy Generator letting you blow up his Reality? That's like the equivalent
      of the president giving a toddler the nuclear launch codes and said toddler bombing the other side of the world. He certainly
      had more Strikes up his sleeve right? If so why wouldn't he use them is he stupid? No wonder Lai'tela left him for Ra.
      (Pelle가 자기 현실을 파괴할 은하 생성기를 순순히 넘긴 행동을 핵 발사 암호를 아이에게 주는 것에 비유하며 무능하다고 놀리는 내용입니다.)`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le163",
    text: "If V is so cool why isn't there a VVVVVV? (V가 그렇게 멋지다면 왜 이름을 반복한 게임 VVVVVV는 없느냐는 말장난입니다.)",
    get unlocked() { return V.isUnlocked }
  },
  {
    id: "le164",
    text:
      `지역 플레이 버튼이 두 번째 엔드게임에서 확장팩에 도달하려고 200년을 쓴 뒤, 어떻게 하면 더 빨리
      진행할 수 있었을지 고민합니다.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le165",
    text: "타키온 입자 1개를 받으려면 여기를 클릭하세요",
    get unlocked() { return PlayerProgress.dilationUnlocked() }
  },
  {
    id: "le166",
    text: "유물을 만들려면 유물 파편이 몇 개나 필요한가요?",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le167",
    text: "유물 파편으로 유물을 제작하려면 파편 FNaNeInfinityENaNeInfinity개가 필요합니다",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le168",
    text: "Glyphs? Realities? Black Holes, Tesseracts? What are you talking about? Come on, let's go Ghostify. (글리프, 현실, 블랙홀, 테서랙트를 모르는 과거로 돌아가 Ghostify를 하러 가자는 이전 모드 패러디입니다.)",
    get unlocked() { return PlayerProgress.realityUnlocked() }
  },
  {
    id: "le169",
    text: "Ghostify? Bosonic lab? Come on, let's go Eternity. (Ghostify와 보손 연구소도 모르는 더 과거로 돌아가 영원하러 가자는 패러디입니다.)",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le170",
    text: "Eternity? Time theorems? Tachyon particles? Come on, let's go Infinity. (영원, 시간 정리, 타키온 입자도 모르는 과거로 돌아가 무한에 도달하자는 패러디입니다.)",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le171",
    text: "Infinity? Break Infinity upgrades? Replicanti? Come on, let's get a galaxy. (무한, 무한 돌파 업그레이드, 복제자도 모르는 과거로 돌아가 은하를 얻자는 패러디입니다.)",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le172",
    text: "Galaxy? Dimboost? Fifth dimension? Come on, let's get another fourth dimension. (은하, 차원 가속, 다섯 번째 차원도 모르는 과거로 돌아가 네 번째 차원을 하나 더 얻자는 패러디입니다.)",
    get unlocked() { return player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le173",
    text: "Antimatter? Dimensions? Tickspeed? Come on, let's bake some cookies. (반물질, 차원, 틱스피드도 모르는 과거로 돌아가 쿠키를 굽자는 Cookie Clicker 패러디입니다.)",
    get unlocked() { return player.dimensionBoosts.gt(0) || player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le174",
    text: "Pelle는 날 이길 수 없어. 나는 Rise of Antimatter에서 반물질을 1e9.007e15나 가지고 있다고!",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le175",
    text: "그 소중한 무한 포인트를 어디에 숨겼는지 알고 있습니다. 이제 그만 내놓으세요. 내. 놔. 당. 장.",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le176",
    text: "그리고 은하를 50% 강화하며 가격이 5e11 IP인 업그레이드",
    get unlocked() { return player.break }
  },
  {
    id: "le177",
    text: "Anti of the Matter Dimension that Galaxies the Dimension Boost (반물질, 차원, 은하, 차원 가속을 문법 없이 뒤섞은 무의미한 문장입니다.)",
    get unlocked() { return player.dimensionBoosts.gt(0) || player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le178",
    get text() {
      return `나는 Pelle, 나는 ${wordShift.wordCycle(["Profanity", "Curse", "Swear"])} 같은 놈이다! 거대한 Alpha는 잘생겼지만
      통제권은 없다! 그의 업데이트 지진이 우리 목숨을 위태롭게 한다. 그가 온다. 엔드게임 전체를 부숴 버릴 거다!`
    },
    dynamic: true,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le179",
    get text() {
      return `나는 은하와 ${wordShift.wordCycle(["Profanity", "Curse", "Swear"])}을 만들고 있다. 지금
      ${wordShift.wordCycle(["Profanity", "Curse", "Swear"])} 같은 엔드게임에 있으니까!`
    },
    dynamic: true,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le180",
    text: "그런데 The Elemental은 대체 어떻게 술에 취하는 걸까요?",
    get unlocked() { return Achievement(208).isUnlocked }
  },
  {
    id: "le181",
    text: "Ra, 봐. 우리가 사이가 안 좋은 건 알지만, 은하 생성기에 동력을 공급할 방법을 찾은 것 같아.",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le182",
    text: "Pelle f!@#ing 사망, 가장 큰 충격을 받은 건 Lai'tela",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le183",
    text:
      `사실 엔드게임에서도 은하 생성기는 그대로 유지된다는 사실이 밝혀졌습니다. 하지만 이 소식을 들은
      The Elemental은 파멸 밖에 있는 충전용 콘센트를 전부 없애 버렸습니다.`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le184",
    get text() {
      return `사람의 99%는 <span style='color: purple'>영원</span> 단계에 도달하지 못합니다`
    },
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le185",
    text: "And remember kids, curse yourself (얘들아, 자신을 저주하라는 식으로 교훈 문구를 뒤틀어 말합니다.)",
    get unlocked() { return V.isFlipped }
  },
  {
    id: "le186",
    text:
      `글리프 연금술에는 원소가 21개 있지만 그리스 문자는 24개뿐입니다. 설상가상으로 람다, 크시, 파이,
      오메가는 대문자와 소문자를 모두 사용하며, 무한은 그리스 문자도 아닙니다. 또한 베타, 엡실론, 제타, 에타,
      요타, 카파, 뉴, 오미크론, 입실론, 카이는 연금술 기호에서 빠져 있습니다. 그런데 이것으로 설명되는 것은
      24개 기호 중 22개뿐입니다. 나머지 2개는 대체 무- Hevi 맙소사, 내가 지금 뭘 보고 있는 거지...`,
    get unlocked() { return Ra.unlocks.unlockGlyphAlchemy.canBeApplied }
  },
  {
    id: "le187",
    text:
      `아르키메데스 덕분에 x와 y가 양의 정수일 때 x^2-410286423278424y^2 = 1을 풀어서 파멸한 리얼리티를
      탈출할 수도 있습니다.`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "r1",
    text: "이 뉴스 메시지는 다른 모든 메시지보다 100배 희귀합니다.",
    get unlocked() { return Math.random() < 0.01; }
  },
  {
    id: "p1",
    text: "Is this a jojo reference? (이것도 《죠죠의 기묘한 모험》을 가리키는 밈인가요?)",
  },
  {
    id: "p2",
    text: 'Die Zahlen gehen hoooch (숫자가 계속 커진다는 뜻입니다.)'
  },
  /* eslint-disable max-len */
  {
    id: "ai1",
    text: "당신이 게임 그 자체라면 치트를 사용해 비밀 도전과제를 잠금 해제할 수 있습니다... 하지만 반물질 e1100이 듭니다!?!"
  },
  {
    id: "ai2",
    text: "\"흠, 이걸 어떻게 고쳐야 할지 모르겠네요.\" - 참고로 도전과제를 해금하지 못한 사람"
  },
  {
    id: "ai3",
    text: "영원 이후에는 게임이 하드 리셋되는 줄 알았는데, 무작위로 저장 파일도 없이 첫 게임을 시작하게 됐습니다 \uD83D\uDE26",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai4",
    text: "업데이트가 5시간 전인 줄 알았는데... 다시 5시간 뒤로 미뤄야겠네요"
  },
  {
    id: "ai5",
    get text() { return `한 남성이 냉동고에서 플랑크 부피 ${format(Number.MAX_VALUE, 2)}개를 발견했습니다.`; }
  },
  {
    id: "ai6",
    text: "아하하, 형편없는 티커 제안이네"
  },
  {
    id: "ai7",
    text: "빈속으로 이 게임을 하고 있군요. 이제 빈 지갑으로 이 게임을 하게 될 겁니다."
  },
  {
    id: "ai8",
    text: "그냥 시작해서... 클릭하세요. 시간 낭비할 생각도 하지 말고, 그냥 하세요."
  },
  {
    id: "ai9",
    text: "9번째 차원이 8번째 차원을 만든다는 발상은 미쳤습니다"
  },
  {
    id: "ai10",
    text: "...그렇다면 [REDACTED] 차원이 [REDACTED] 차원을 생산한다는 뜻인가요?"
  },
  {
    id: "ai11",
    text: "\"click here to buy a stack of paperclips\" (when clicked you get Rickroll) (종이 클립 한 묶음을 구매하려면 여기를 클릭하세요. 클릭하면 Rickroll이 나옵니다.)",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai12",
    text: "여가 시간에는 T. H. White의 단편 소설을 읽습니다."
  },
  {
    id: "ai13",
    text: "세상에, 정말 엄청나네요"
  },
  {
    id: "ai14",
    text: "멸종은 실재하지 않습니다. 24/7 내내 같은 모자를 쓰고 있을 수는 없으니까요."
  },
  {
    id: "ai15",
    text: "이 문장을 읽을 수 있다면 게임에서 탈출한 것입니다."
  },
  {
    id: "ai16",
    text: "\"The hat trick I would love to see it\" - Noah Feldman (그 해트트릭을 꼭 보고 싶다는 뜻)"
  },
  {
    id: "ai17",
    text: "Discord 서버에서 Hevi가 요란하게 싸우는 모습을 보세요"
  },
  {
    id: "ai18",
    text: "방금 폭주족에게서 \"Anti\" 깃발을 훔쳐 다이너마이트, 다이너마이트, 다이너마이트, 다이너마이트를 채우고 있습니다..."
  },
  {
    id: "ai19",
    text: "No matter how much antimatter you have, the matter will always outweigh the anti-matter. (반물질을 아무리 많이 보유해도 물질의 무게가 언제나 반물질보다 무겁다는 matter와 antimatter의 말장난입니다.)"
  },
  {
    id: "ai20",
    text: "Franklin이 오메가 제곱을 봉인했습니다. 이제 원하는 방식으로 오메가를 봉인할 수 있습니다."
  },
  {
    id: "ai21",
    text: "여기가 진짜 9번째 차원인가요?"
  },
  {
    id: "ai22",
    text: "게임을 종료하려면 여기를 클릭하세요"
  },
  {
    id: "ai23",
    text: "This news ticker will now only AIR in the 9th dimension (이 뉴스 티커는 이제 아홉 번째 차원에서만 방송된다는 뜻)"
  },
  {
    id: "ai24",
    text: "9번째 차원은 9번째 차원에 의해 억압됐기 때문에 존재하지 않습니다."
  },
  {
    id: "ai25",
    text: "To matter or to antimatter, that is the question. (물질이냐 반물질이냐, 그것이 문제라는 셰익스피어 패러디)"
  },
  {
    id: "ai26",
    text: "8년간의 제작과 불안정한 우주 끝에, Chaosium은 5시간 뒤 존재를 멈춥니다."
  },
  {
    id: "ai27",
    text: "9번째 차원 문제의 절반은 말조차 되지 않습니다. 대체 그 모든 에너지로 뭘 하는 걸까요?"
  },
  {
    id: "ai28",
    text: "Wait, there's a nin-- (잠깐, 설마 아홉 번ㅉ--)"
  },
  {
    id: "ai29",
    text: "어딘가에서 미치광이 하나와 Trimps 군대가 Matter Dimensions를 건드리고 있습니다."
  },
  {
    id: "ai30",
    text: "왜 이 숫자에는 이렇게 많은 것이 붙어 있죠? 말이 안 됩니다."
  },
  {
    id: "ai31",
    text: "The news ticker is in the anti-news-ticker (뉴스 티커가 반-뉴스-티커 안에 있다는 말장난)"
  },
  {
    id: "ai32",
    text: "the 9th dimension doesn't exist because we are using nonary (구진법을 사용하고 있으므로 아홉 번째 차원은 존재하지 않는다는 말장난입니다.)"
  },
  {
    id: "ai33",
    text: "속보: 새로운 연구에 따르면, 그 티커 제안을 읽고 저와 같은 감정을 느꼈다고 할 수 있는 사람이 하나도 둘도 아닌 셋이나 된다고 합니다."
  },
  {
    id: "ai34",
    text: "제 '문제 있는 기분'을 설명해 드리죠. 뉴스 티커에 설명되어 있습니다!"
  },
  {
    id: "ai35",
    text: "동네의 미친 사람이 반-쿠키를 팔려고 시도했습니다"
  },
  {
    id: "ai36",
    text: "Welcome to Antimatter Dimensions: Source, the free to play sequel to the cult classic AD:GO. (컬트 고전 AD:GO의 무료 후속작 Antimatter Dimensions: Source에 오신 것을 환영합니다.)"
  },
  {
    id: "ai37",
    text: "A new hand touches your antimatter! (새로운 손이 반물질에 닿았다는 Skyrim 대사 패러디)"
  },
  {
    id: "ai38",
    text: "그런데 우리는 누구죠?"
  },
  {
    id: "ai39",
    text: "We are the people who actually matter (우리는 실제로 중요한 물질 사람들이라는 말장난)"
  },
  {
    id: "ai40",
    text: "Matter?  Not even a hint. (물질은커녕 흔적조차 없다는 말장난)"
  },
  {
    id: "ai41",
    text: "나는 뉴스 담당자라서 뉴스를 만듭니다. 이걸 읽지 않는다고요? 그렇다면 거울을 볼 때까지 기다릴 수밖에 없겠네요."
  },
  {
    id: "ai42",
    text: "\"우왁!\" (뉴스 티커가 90도 회전한다)"
  },
  {
    id: "ai43",
    text: "스티커 한 병을 사세요. 고품질 스티커, 훌륭한 품질의 스티커입니다!"
  },
  {
    id: "ai44",
    text: "제가 뉴스를 만들면, 여러분이 읽습니다."
  },
  {
    id: "ai45",
    text: "저는 뉴스를 좋아합니다."
  },
  {
    id: "ai46",
    text: "저는 뉴스를 만들지 않습니다."
  },
  {
    id: "ai47",
    text: "당신이 뉴스를 만들면 제가 [REDACTED] 뉴스를 받습니다"
  },
  {
    id: "ai48",
    text: "\"Anti-infinity\"라는 용어는 동사이며 명사가 될 수 없습니다. 여기에서 용법을 알아보세요."
  },
  {
    id: "ai49",
    text: "이제 쇼핑 목록을 공개합니다!"
  },
  {
    id: "ai50",
    text: "9번째 차원은 분명 실재합니다! 단지 우리 차원에 없을 뿐이죠."
  },
  {
    id: "ai51",
    text: "Google에서 \"9번째 차원\"이라는 문구를 검색해 봤고, 실제로 존재하는 것을 설명하는 말이니 그렇게 불러도 괜찮다고 생각합니다."
  },
  {
    id: "ai52",
    text: "You have no power here. (여기서는 네 힘이 통하지 않는다는 유명 대사)"
  },
  {
    id: "ai53",
    text: "어떤 사람들은 무한을 돌파하지 못해 10개 차원에 만족해야 했습니다. 빅 크런치는 시간 속의 짧은 공간에 불과한 것으로 드러났습니다."
  },
  {
    id: "ai54",
    text: "옛날 어느 낯선 땅에 가능성으로 가득한 우주를 꿈꾸는 젊은이가 있었습니다. 어느 날 그는 어머니에게 \"확장은 어떤가요?\"라고 물었습니다. 어머니는 \"그 당시 확장은 균형이 맞지 않았고, 그래서 물질과 반물질의 양을 똑같이 가질 수 없다고 말했단다."
  },
  {
    id: "ai55",
    text: "시장 조사 회사가 일부 상품이 예상만큼 성과를 내지 못하는 이유를 설명하려 합니다. 정작 시장 조사 회사 본인도 이유를 알아내지 못했습니다."
  },
  {
    id: "ai56",
    text: "오늘 반물질에 입찰하세요!"
  },
  {
    id: "ai57",
    text: "나는 알파 센타우리, Prime 001이다. 내 연구에 따르면 당신이 9번째 차원에 살아 있다면 악이 당신의 차원을 장악해 정신을 지배하고 시간을 되돌리려는 계획을 실행하고 있다. 지금 당장 온 힘을 다해 그 계획을 막아야 한다."
  },
  {
    id: "ai58",
    text: "대기하다가 비밀 도전과제를 위해 9번째 차원을 해금하세요."
  },
  {
    id: "ai59",
    text: "버그는 5시간 안에 고칩니다"
  },
  {
    id: "ai60",
    text: "이 문장을 읽고 있다면, 이 문장을 읽을 수 있다는 뜻입니다."
  },
  {
    id: "ai61",
    text: "어... 안녕하세요. 이름을 알려 주시겠어요?"
  },
  {
    id: "ai62",
    text: "어, 안 돼요. QR 코드에 넣기에는 너무 큽니다."
  },
  {
    id: "ai63",
    text: "(right to left move it make) (오른쪽에서 왼쪽으로 옮겨 만들라는 뒤틀린 문장)"
  },
  {
    id: "ai64",
    text: "이런, 반물질이 우리를 덮치러 옵니다!"
  },
  {
    id: "ai65",
    text: "이 세상에는 왜 반물질이 이렇게 많을까요? 우선 전부 지구의 반물질 공장에서 생산됩니다. 둘째, 다음 지역에 있는 공장들은"
  },
  {
    id: "ai66",
    text: "It's nothing personal, bro. -All villager types (개인적인 감정은 없다는 모든 주민 유형의 말)"
  },
  {
    id: "ai67",
    text: "I tried my best to read those tiny, handwritten messages, but whoever designed scythes hated me and stuck them in a corner. -Porygon-Z (작은 손글씨를 읽으려 했지만 낫을 만든 사람이 구석에 처박아 두었다는 뜻)"
  },
  {
    id: "ai68",
    text: "흠... 어쩌다 여기까지 왔는지 모르겠습니다. 제가 여기에 있어야 하는지도 모르겠어요. 그저 앉아서 멈추지 않았다면 어떻게 됐을지 상상합니다. 세상에, 어떻게 됐을까요..."
  },
  {
    id: "ai69",
    text: "이런, 드디어 C21 해금에 도달할 만큼 해킹했습니다, 대장!"
  },
  {
    id: "ai70",
    text: "Купил мужик антиматерию (한 남자가 반물질을 샀다)"
  },
  {
    id: "ai71",
    text: "그러니까 여기에 글을 올리고 타이타닉을 두 번 본 뒤 돌아와도 글을 못 올린다는 건가요?"
  },
  {
    id: "ai72",
    text: "마지막 업데이트는 5시간 전이었습니다. 마지막 업데이트가 5시간 전이었으므로 다음 업데이트는 없습니다. 5시간이라는 주제를 전부 다루기 위해 5시간 뒤 팟캐스트를 업데이트하겠습니다. 이번이 마지막 팟캐스트이기 때문입니다. 업데이트는 언제나 5시간 뒤라는 사실을 모두가 알지만, 실제로는 1-2-3-4-5-6-7-8-9-10분 정도 뒤에 가깝습니다. 그래도 머릿속에서는 틱 속도 업그레이드를 몇 개 적용한 5시간 뒤처럼 꽤 정확한 업데이트 날짜에 가깝습니다."
  },
  {
    id: "ai73",
    text: "Yep. You. Get. Over. Your. Antidimensions. (그래, 이제 네 반차원을 극복하라는 뜻)"
  },
  {
    id: "ai74",
    get text() { return `광고 보너스: $${format(Number.MAX_VALUE, 2)} (무작위 팀)`; }
  },
  {
    id: "ai75",
    text: "그 기록을 제게 건네주세요"
  },
  {
    id: "ai76",
    get text() { return `Now releasing: Dimsension ${format(Number.MAX_VALUE, 2)} (새 차원을 출시한다는 뜻)`; }
  },
  {
    id: "ai77",
    text: "ur history teacher said i was mad for getting *insert something here* on my bday (생일에 무언가를 받은 자신을 역사 선생님이 미쳤다고 했다는 뜻)"
  },
  {
    id: "ai78",
    text: "All is fair in antimatter (반물질에서는 무엇이든 공평하다는 관용구 패러디)"
  },
  {
    id: "ai79",
    text: "미스테리움, 2번째 차원"
  },
  {
    id: "ai80",
    text: "Oops, I think we misticked. (이런, 티커를 잘못 찍었다는 말장난)"
  },
  {
    id: "ai81",
    text: "뉴스가 나올 때까지 5시간 기다려 주세요"
  },
  {
    id: "ai82",
    text: "날씨가 좋아질 때까지 기다려 주세요"
  },
  {
    id: "ai83",
    text: "잠시 시간을 내어 이 뉴스 티커의 아름다움을 감상해 주세요."
  },
  {
    id: "ai84",
    text: "거꾸로 작업해 보면 어떨까요? 질문에서 다루는 시대를 보면 게임의 배경이 이를테면 1950년대라는 것을 알 수 있습니다. 이제 게임이 2030년대를 배경으로 하는 방식을 이야기해 봅시다. 게임은 모든 매체로 정의됩니다. 반드시 \"어떤 게임을 한다\"라는 형식일 필요는 없고(그런 표현을 어휘로 알아 두면 유용하긴 합니다), 게임으로 이해할 수 있는 모든 매체, 즉 시간을 거슬러 재생할 수 있는 매체}를 뜻합니다. 그리고 게임은 시간을 거슬러 플레이할 수 없는 모든 게임으로 정의됩니다."
  },
  {
    id: "ai85",
    text: "NaN이 만든 AD는 어떤가요? 당연히 품질은 더 좋습니다. 하지만 여전히 [REDACTED]입니다."
  },
  {
    id: "ai86",
    text: "I thought the whole \"annihilation is just a phase\" quote was awesome until I realized it also gave me a [REDACTED] (쌍소멸은 한때의 단계일 뿐이라는 말이 멋진 줄 알았지만 검열할 무언가도 생겼다는 뜻)"
  },
  {
    id: "ai87",
    text: "Omsi 우주를 만들었습니다. 그리고 그 우주는 [REDACTED]입니다."
  },
  {
    id: "ai88",
    text: "[REDACTED]을 오븐에 넣었습니다. 그것은 [REDACTED]해졌고, [REDACTED]인 저는 [REDACTED]입니다."
  },
  {
    id: "ai89",
    text: "엉뚱한 단서들은 무엇인가요?"
  },
  {
    id: "ai90",
    text: "도와주세요. 저희는 Hevipelle의 (http://en.wikipedia.org/wiki/Hevipelle) 지하실에 갇혀 있고, Hevi는 [REDACTED]을 [REDACTED]로부터 막을 [REDACTED] 벽을 만들라고 강요하고 있습니다."
  },
  {
    id: "ai91",
    text: "이제 날씨입니다. 노스다코타는 70에 비가 내리고 있습니다. 사랑스럽고 크고 황금빛인 철의 장막 막대를 기억하세요. [REDACTED] 날씨도 기억하세요! 이것만 기억하면 됩니다. [REDACTED]과 [REDACTED], 그리고 바깥의 [REDACTED]입니다."
  },
  {
    id: "ai92",
    text: "작은 게임을 해 봅시다. 아무 소유물도 목표도 없이 시작합니다. 여러분에게 [REDACTED]이 있고 [REDACTED]이 [REDACTED]이라면 [REDACTED]할 수 있다고 해 보죠."
  },
  {
    id: "ai93",
    text: "보석은 어디에 쓰나요?"
  },
  {
    id: "ai94",
    text: "누가 5번째 차원을 만들었나요?"
  },
  {
    id: "ai95",
    text: "이해가 안 돼요"
  },
  {
    id: "ai96",
    text: "왜 아무도 9번째 차원에 관해 이야기하지 않나요?"
  },
  {
    id: "ai97",
    text: "이 뉴스는 형편없습니다. 왜 아니, 이해하지 못했나요?"
  },
  {
    id: "ai98",
    text: "죄송합니다. 당신의 현실과 9번째 차원의 연결이 끊어졌습니다. 추가 안내가 있을 때까지 8번째 차원에 머무르게 됩니다."
  },
  (function() {
    let wasClicked = false;
    const normal = "현재 무한을 보유 중입니다!";
    const clicked = "<#351477791457542144>";
    return {
      id: "ai99",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ai100",
    text: "I get all my news from this Discord, not 5 hours of my life (제 모든 소식은 이 Discord에서 얻습니다. 제 인생의 다섯 시간에서 얻는 게 아닙니다.)"
  },
  {
    id: "ai101",
    text: "야옹"
  },
  {
    id: "ai102",
    text: "You are now manually blinking. (이제 눈을 의식해서 깜박이게 됩니다)"
  },
  {
    id: "ai103",
    text: "죄송합니다. 마이크에서 반물질 차원이 재생되고 있습니다."
  },
  {
    id: "ai104",
    text: "죄송합니다. 당신의 현실과 9차원의 연결이 끊어졌습니다."
  },
  {
    id: "ai105",
    text: "아무래도 이 영상의 악당은 저인가 봅니다. 아무것도 하지 않은 사람이 바로 저거든요."
  },
  {
    id: "ai106",
    text: "이 게임에서 이기는 방법은 여러 가지입니다. 좌표를 게임에 직접 입력하거나 Google에 입력해 다른 결과를 얻을 수 있습니다. 결과가 \"완전히 똑같다\"면 컴퓨터가 오작동하는 것이 틀림없습니다. 검사 결과 컴퓨터가 오작동하고 있으니 펌웨어에 취약점이 있는지 확인해야 합니다. 뉴스를 끄고 게임을 다시 실행해 볼 수도 있지만, 그러면 \"날씨는 X입니다\"라는 농담만 나옵니다. 뉴스 메시지를 여섯 시간 기다리는 것은 뉴스 메시지가 아닙니다."
  },
  {
    id: "ai107",
    text: "날씨는 실제로 존재합니다. 과학자들은 지구에 있는 반물질의 양과 날씨의 양 사이에 상관관계가 있음을 확인했습니다. 지구가 자석인 것은 사실이지만, 과학자들은 지구가 따뜻해질수록 자기 재결합이 빨라져 전 세계에 도미노 효과를 일으키고, 결국 통제 불가능한 핵겨울과 자발적인 반물질 내파로 이어질 수 있다고 추정합니다."
  },
  {
    id: "ai108",
    text: "열 번째 차원은 실재하지 않습니다. 사람들에게 그런 말은 그만하세요."
  },
  {
    id: "ai109",
    text: "그게 실재하지 않는다는 말은 Hevi에게 하지 마세요"
  },
  {
    id: "ai110",
    text: "이걸 어떻게 고쳐야 할지 모르겠어요"
  },
  {
    id: "ai111",
    text: "이 업데이트는 당신을 위한 것이 아닙니다!"
  },
  {
    id: "ai112",
    get text() { return `이번이 마지막입니다. 아이템을 구매하려면 실제 돈 ${format(Number.MAX_VALUE, 2)}만큼의 소액 수수료를 내야 합니다.`; }
  },
  {
    id: "ai113",
    text: "What is Antimatter? Long ago, gods lived in harmony. Then, everything changed when the apocalypse broke out. Chaos reigns, and even higher dimensions are being built. This is your fate. Build the Antimatter Dimensions. Amen. (옛날 신들이 조화롭게 살다가 종말로 모든 것이 바뀌었으니 운명에 따라 반물질 차원을 만들라는 서사 패러디)"
  },
  {
    id: "ai114",
    text: "Water under the bridge? (이미 지나간 일이라는 관용구)"
  },
  {
    id: "ai115",
    text: "저보다 먼저 이 이야기를 올린 사람이 있을까요?"
  },
  {
    id: "ai116",
    text: "이 게시물은 여러 번 공유되었습니다. 정확히 몇 번인지는 누가 알까요?"
  },
  {
    id: "ai117",
    text: "안녕히 주무세요!"
  },
  {
    id: "ai118",
    text: "복제자 전투의 연대표를 만들었습니다. 여기에서 확인할 수 있습니다."
  },
  {
    id: "ai119",
    text: "\"Quantumum Battle Royale coming in 5 hours!\" (Rumor: 5 hours) (Quantumum 배틀 로얄이 다섯 시간 뒤에 나온다는 소문)"
  },
  {
    id: "ai120",
    text: "Rumor says Nords will start producing replicanti in five hours. (Nords가 다섯 시간 뒤부터 복제자를 생산한다는 소문)"
  },
  {
    id: "ai121",
    text: "I am an Nordsweeper, stealing their jobs to support the replicanti factories (복제자 공장을 지원하려고 Nords의 일자리를 빼앗는 Nordsweeper라는 뜻)"
  },
  {
    id: "ai122",
    text: "Used to be, AD was the best game. Nowadays, it's all crapp. (예전의 AD는 최고의 게임이었지만 요즘은 형편없다는 뜻)"
  },
  {
    id: "ai123",
    text: "손가락이 말라붙기 전에 이 뉴스 티커 제안들을 그만 보는 게 좋을 겁니다."
  },
  {
    id: "ai124",
    text: "Antimatter Dimensions *Loses* bee movie. (Antimatter Dimensions가 Bee Movie에 패배한다는 밈)"
  },
  {
    id: "ai125",
    text: "맙소사, 완두콩 속에 복제자가 있어요.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai126",
    text: "맙소사, 복제자를 밟고 있어요."
  },
  {
    id: "ai127",
    text: "Hello, world! (안녕, 세상!)"
  },
  {
    id: "ai128",
    text: "잠수함에 관한 /r/AskReddit에 오신 것을 환영합니다. - 2017년 1월 8일 기준"
  },
  {
    id: "ai129",
    text: "정부가 반물질을 연구하고 있습니다. 이 뉴스 티커가 가짜라고 봐도 될까요?"
  },
  {
    id: "ai130",
    text: "반물질이 무한해지면 뉴스가 표시되나요?"
  },
  {
    id: "ai131",
    text: "게임을 저장했나요? 네. 게임을 종료했나요? 이 저장에는 아무 문제도 없습니다. 그 키를 계속 누르고 계세요."
  },
  {
    id: "ai132",
    text: "너무 빨리 클릭했더니... FPS가 떨어졌어요"
  },
  {
    id: "ai133",
    text: "I found out that the year is 20XX. I was going to make a news ticker but then I realized that it's just a ticker. (연도를 알 수 없는 미래로 설정하고 news ticker에서 news를 빼면 ticker일 뿐이라는 농담입니다.)"
  },
  {
    id: "ai134",
    text: "\"언젠가는 한동안 뉴스를 읽는 데 질리겠지\" - 노인"
  },
  {
    id: "ai135",
    text: "새 골동품의 계절입니다! 이 독특한 물건들이 사라지기 전에 생애 최초로 구경하세요! 품절됐습니다!"
  },
  {
    id: "ai136",
    text: "3 things that antimatter, 1 more thing to infinity"
  },
  {
    id: "ai137",
    text: "https://aarextiaokhiao.github.io/blob/master/docs/en.json 링크에서 지금 종이 클립 이모지를 구매하세요"
  },
  {
    id: "ai138",
    text: "여기를 클릭하여 다음 업데이트를 잠금 해제하세요"
  },
  {
    id: "ai139",
    text: "(원한다면 뉴스가 실제로 로드될 때만 이 문구가 표시되게 할 수 있습니다)"
  },
  {
    id: "ai140",
    text: "악의적인 사람들이 반물질 돈을 만들려 하지만 그 시도는 9번째 차원에 걸리고 있습니다. 어떻게 생각하시나요?"
  },
  {
    id: "ai141",
    text: "Siri야, 반물질 은하를 파밍해 줘"
  },
  {
    id: "ai142",
    text: "게임을 저장했나요? 그렇다면 ... 없이 계속 플레이할 수 있습니다"
  },
  {
    id: "ai143",
    text: "첫 신비 점수를 얻는 것과 같습니다. 있잖아요, 예전 광고에서 \"이 광고를 봤으니 이 광고를 만들어야지라고 하는 것처럼"
  },
  {
    id: "ai144",
    text: "Ooga Booga (우가 부가)"
  },
  {
    id: "ai145",
    text: "Boo has his own webpage! You might even call it \"Boo's Dandy\"\">https://en.m.wikipedia.org/wiki/Olli%27_Web#Main_page>"
  },
  {
    id: "ai146",
    text: "Meeseeks와 괴짜들이 장대한 GG 전쟁에서 격돌합니다"
  },
  {
    id: "ai147",
    text: "제 마지막 시험 결과가 나왔습니다! 역대 최고의 체스 GM 둘만 나오는 간단한 수학 문제였죠! 어떻게 됐을까요? 둘 다 쌍소멸했습니다!"
  },
  {
    id: "ai148",
    text: "와, 67.3%네요. 로그 단위니까 사실 괜찮습니다"
  },
  {
    id: "ai149",
    text: "\"Aleph_Time\" is that logarithmic scale joke? (Aleph_Time이 로그 눈금 농담인지 묻는 말)"
  },
  {
    id: "ai150",
    text: "여러분 안녕하세요, 제 이름은 Anti-Dio입니다. 저는 여러분 모두가 \"반물질 분해\"라고 아는 과정을 통해 반물질을 생산합니다. 이달 초 제 시험 보고서를 기억할지도 모르겠군요. 제 목장에서 반물질이 생산되는지를 시험했습니다... 방정식에 약간의 지연을 더하기 전까지는 모든 것이 괜찮았습니다. 그러자 반물질 생산 속도가 빨라지고, 그 결과 여러분 모두가 죽는 속도까지 빨라지는 악순환이 생겼습니다. 저는 유전 공학과 빅 데이터 마이닝을 독특하게 조합해 이를 막았습니다. 언젠가는 닫힌 문 뒤에서 차원을 만드는 mechanimatter 장치의 방아쇠를 당기고 싶지만, 지금까지는 어느 시스템이 producethiks인지 가리는 밑바닥 경쟁이었고, 결국 여러분의 (읽기 오류: 허용됨) 파이를 한입 베어 물 겁니다. 안녕히 계세요."
  },
  {
    id: "aim151",
    text: "\"I propose that we form a phylogenetic tree of anti-history, just like tree of life. Everyone would be credited with originating from the ancestor of that anti-tree.\" -Dio, toast of eternal damnation (생명의 나무처럼 반역사의 계통수를 만들어 모두가 그 반나무의 조상에서 유래했다고 기록하자는 말)"
  },
  {
    id: "ai152",
    text: "역사가: 각 세대가 이전 세대를 돌아보며 \"그 세대는 정말 형편없었어\"라고 생각하는 모습이 좋습니다"
  },
  {
    id: "ai153",
    text: "\"My parents went to anti-university\" - my grandparents (우리 부모님이 반-대학교에 다녔다는 조부모님의 말)"
  },
  {
    id: "ai154",
    text: "Only anti-jokes are funny (반농담만 재미있다는 말장난)"
  },
  {
    id: "ai155",
    text: "Infinity machine breaks Infinity (무한 기계가 무한을 깨뜨린다는 말장난)"
  },
  {
    id: "ai156",
    text: "Okay boomer, you get your first taste of antimalware with this one. (좋아, 부머. 이걸로 처음 안티멀웨어를 맛보라는 밈)"
  },
  {
    id: "ai157",
    text: "이 프로그램은 Tamazight Vaults의 IP 주소 같은 기밀 정보에 접근할 수 없습니다."
  },
  {
    id: "ai158",
    text: "게임 개발은 재미있죠? 그래서 수많은 취미 개발자가 게임을 만들고, 전문 개발자는 거의 만들지 않습니다."
  },
  {
    id: "ai159",
    text: "모바일 알림의 '뉴스' 티커가 언제나 '엔터테인먼트' 티커보다 30초 늦다는 사실을 제가 처음 발견했습니다. 이것은 절대로 버그도 기능도 아니며 5시간 뒤 수정됩니다."
  },
  {
    id: "ai160",
    text: "이 뉴스 티커는 늘 '세계 기록'을 묻는 티커를 스피드런하러 나타납니다. 이게 무슨 스피드런인지 알고는 있나요? 이게 뉴스 티커 같은 건가요?"
  },
  {
    id: "ai161",
    text: "다음 단계에서는 복제자를 추가로 잠금 해제하는 것이 아니라 실제로 복제자를 강화합니다."
  },
  {
    id: "ai162",
    text: "왜 은하 하나에는 은하 9개와 8번째 차원이 있고, 처음 10개 차원은 존재하지 않을까요? 잠시 뒤에 그 의문을 풀어 봐야겠습니다."
  },
  {
    id: "ai163",
    text: "그럼 대체 왜 아무도 그걸 말해 주지 않은 거죠? AD에는 차원을 구매하면 실제로 은하 10개 대신 9개를 만드는 치트가 있는 줄 알았습니다."
  },
  {
    id: "ai164",
    text: "M'antel, antimatter, anti-talk to me (M'antel, 반물질, 나한테 반대로 말 걸지 마라는 말장난)"
  },
  {
    id: "ai165",
    text: "AD has anti-parts, you'll hate them (AD에는 싫어하게 될 반-부품이 있다는 말장난)"
  },
  {
    id: "ai166",
    text: "이쯤 되면 AD는 사실상 어설프게 위장한 디스토피아입니다"
  },
  {
    id: "ai167",
    text: "M을 길게 누르세요. 반물질을 전부 꺼내는 걸 잊었습니다!"
  },
  {
    id: "ai168",
    text: "AD는 5시간 뒤 구현됩니다"
  },
  {
    id: "ai169",
    text: "여기를 클릭하여 10차원을 잠금 해제하세요"
  },
  {
    id: "ai170",
    text: "HEVI에 맞서는 비밀을 완료하려면 여기를 클릭하세요"
  },
  {
    id: "ai171",
    text: "잘하고 있습니다"
  },
  {
    id: "ai172",
    text: "Hevi? 정말로 그걸 구매하시겠습니까?"
  },
  {
    id: "ai173",
    text: "프리미엄 반물질을 구매하여 세계에서 가장 뒤처진 이들이 앞서 나가도록 도와주세요!"
  },
  {
    id: "ai174",
    text: "신경과학계에서 가장 영향력 있는 인물 중 한 명은 현실에 대한 우리의 인식이 8차원이 아니라 10차원에서 나온다고 믿습니다"
  },
  {
    id: "ai175",
    text: "Why is there so many zeroes in 'nowhere'? ('nowhere'에는 왜 영이 그렇게 많냐는 말장난)"
  },
  {
    id: "ai176",
    text: "There are no bugs in this game, they're just features (이 게임에는 버그가 없고 기능만 있다는 개발자 농담)"
  },
  {
    id: "ai177",
    text: "\"Click to advance 5 hours in time.\" (Now only show up after you advance more than an hour ago) (클릭하면 시간을 다섯 시간 앞당깁니다. 이제 한 시간 넘게 앞당긴 뒤에만 나타납니다.)"
  },
  {
    id: "ai178",
    text: "맙소사, 누군가 내 휴대폰을 감시하고 있어요"
  },
  {
    id: "ai179",
    text: "최신 버전의 반물질 차원에 오신 것을 환영합니다. 이제 기능이 더 적어졌습니다!"
  },
  {
    id: "ai180",
    text: "\"그건 문제를 일으킬 겁니다.\" (문제를 일으킬 가능성이 더 낮습니다.)"
  },
  {
    id: "ai181",
    text: "\"뉴스 티커를 비활성화하지 말아 주세요.\" (검은 화면 대신 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 길고, 긴 흰 화면만 나옵니다.)"
  },
  {
    id: "ai182",
    text: "\"생물학적 시간이 7분 남았습니다.\" (어떤 균주에도 부스트를 주지 않습니다.)"
  },
  {
    id: "ai183",
    text: "\"양자 끈 이론에 따르면 3번째 차원과 8번째 차원을 묶는 근본적인 연결체가 있습니다. 이는 9번째 차원을 묶으려는 어떤 알약이나 주사도 저지되어 쓸모없어진다는 뜻입니다.\" (10분 안에 묶일 예정입니다.)"
  },
  {
    id: "ai184",
    text: "\"비밀 도전과제를 얻으려면 이것을 클릭하세요.\" (이제 반물질을 적어도 1개 얻은 뒤에만 나타납니다. 스크린샷으로 증명됐습니다.)"
  },
  {
    id: "ai185",
    text: "\"Antimatter Dimensions에서 이기는 비결은 9번째 차원의 결속을 풀고 10번째 차원을 잠금 해제하는 것입니다.\" (비밀 도전과제 \"영원\"을 잠금 해제한 뒤에만 가능합니다. http://imgur.com/E4261C7h)"
  },
  {
    id: "ai186",
    text: "\"여기를 클릭하여 물질 1개를 획득하세요.\" (IC5를 클리어한 뒤에만 표시됩니다)",
    get unlocked() { return InfinityChallenge(5).isCompleted; }
  },
  {
    id: "ai187",
    text: "업데이트가 ...인 줄 알았습니다"
  },
  {
    id: "ai188",
    text: "이제 8개 차원을 모두 보유했으므로 no-edge 도전과제를 얻을 수 있습니다. 하지만 그 도전과제를 얻으면 게임이 망가집니다."
  },
  {
    id: "ai189",
    text: "방금 역사의 한 부분이 되었습니다."
  },
  {
    id: "ai190",
    text: "Hell hath antimatter so I don't want to live there. (지옥에는 반물질이 있으니 그곳에 살고 싶지 않다는 고전 문구 패러디)"
  },
  {
    id: "ai191",
    text: "I LIKE THAT DIMENSION 9 IN CLASS (수업에서 그 아홉 번째 차원이 좋다는 뜻)"
  },
  {
    id: "ai192",
    text: "\"1 2 3 4 5 6 7 8 10 11 12 13 ...\" -Back to the future (아홉을 건너뛴 수열과 영화 제목을 엮은 농담)"
  },
  {
    id: "ai193",
    text: "You have reached infinity, there is no universe, you are an eternity away from there. (무한에 도달했지만 우주는 존재하지 않으며, 그곳에서 영원만큼 멀리 떨어져 있습니다.)"
  },
  {
    id: "ai194",
    text: "IM MADE THIS GAME GREAT AND RANDOMLY ACHIEVABLE (IM이 이 게임을 훌륭하고 무작위로 달성 가능하게 만들었습니다.)"
  },
  {
    id: "ai195",
    text: "사상 최초의 '수업 속 차원 9'에 오신 것을 환영합니다! 끝없이 이어지는 가능성이 여러분을 맞이합니다! 8번째 차원을 무한히 많이 만들 수 없을지도 모르지만, 8번째 차원을 무한히 많이 만들 수 있으며 두 차원을 더해 양쪽의 시작값을 높일 수 있습니다. 멋지고 간단하죠. 저는 이것을 Antimatter Dimensions라고 부릅니다."
  },
  {
    id: "ai196",
    text: "age 8-12: play elder puzzles (여덟 살부터 열두 살까지는 고대 퍼즐을 플레이합니다.)"
  },
  {
    id: "ai197",
    text: "What does it mean if someone is \"young and full of puzzles\"? Does \"puzzled\" make that person young and full of puzzles? ('젊고 퍼즐로 가득하다'와 '어리둥절하다'를 엮은 말장난)"
  },
  {
    id: "ai198",
    text: "To the customer in aisle 6th who bought a fifth of antimatter, I say buy a sixth! Buy it now! (여섯 번째 통로에서 반물질의 오분의 일을 산 손님에게 육분의 일을 더 사라고 권하는 말장난)"
  },
  {
    id: "ai199",
    text: "Dear sir, we don't make Anti-Atomic Bread for Antimatter Pizza, we make Antimatter Bread for you! (손님, 저희는 반물질 피자용 반원자 빵을 만들지 않습니다. 손님을 위한 반물질 빵을 만듭니다!)"
  },
  {
    id: "ai200",
    text: "신난다! 반물질을 만들어 봅시다!"
  },
  {
    id: "ai201",
    text: "반물질 제빵 회사는 존재하지 않습니다!"
  },
  {
    id: "ai202",
    text: "뉴스를 닫으려면 여기를 클릭하세요",
    onClick() { GameOptions.toggleNews(); }
  },
  {
    id: "ai203",
    text: "업데이트가 5시간 뒤인 줄 알았지만, 업데이트가 밀려 이 글을 올리는 데 실제로 6시간이 걸렸습니다. 솔직히 업데이트가 더 필요한지, 필요하다면 얼마나 필요한지는 모르겠습니다."
  },
  {
    id: "ai204",
    text: "무한 포인트를 넘어서 세려면, 각 무한 포인트가 3.1415926534255412730527058904816097160734272605282087086280545991105332533235580946684229821413112145239989073467482298142857147816092947183909298728571478160929471839229814054718139332405281814522993758179568572657123928651310585727283312547569289993282758012466111097726331726572854689993262899140527282527842535179715673311119101119015549552926278425351797156777263324503517971568583819492728180977263317971568432854104102725270847764253513791376909285717082857262987160927285711464363930996928984794380124566417932628571475245456845692846809466184179328572814384259326270817052727852348111714690577263323799509856279752173478925라는 사실을 잠시 기억하세요."
  },
  {
    id: "ai205",
    text: "\"조심하세요. 이 뉴스들은 들어오면 안 됩니다.\" (뉴스를 처음 구매할 때 나타남)"
  },
  {
    id: "ai206",
    text: "게임에 들어가지 못한 시간 연구를 모두 모았습니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai207",
    text: "다음 업데이트와 함께 새로운 차원인 9번째 차원을 선보입니다. 이 차원을 해금하려면 클립을 많이 모으기만 하면 됩니다."
  },
  {
    id: "ai208",
    text: "왜 아무도 텅스텐에 관해 이야기하지 않나요?"
  },
  {
    id: "ai209",
    text: "이제 정규 뉴스로 돌아갑니다... 기상 담당자에 따르면 입자와 오존 구멍이 제법 많은 듯합니다. 이는 파괴할 오존층이 더 적고, 불이 붙어 지구 온난화를 일으킬 입자도 더 적다는 뜻입니다. 하지만 녹아내릴 오존층과 흘러갈 빙하, 인구 과잉도 있습니다. 우리 주변은 파란색에 가까우면서도 보랏빛 파란색에 가까운 블러플 빛으로 가득합니다. 장대하고 다채로운 계절이었습니다. 자, 여기 있는 종이 클립을 한 움큼 집으세요. 아주 작지만 마침 여기 갖고 있었습니다. 이제 동료 지구인들을 한 움큼, 반물질을 한 움큼 붙잡고 단단히 매세요. 길이 험할 겁니다. 다섯 시간 뒤에 도착합니다. 반물질이 오존층을 녹이고 빙하가 만년설을 녹일 겁니다. 전반적으로 멋지고 매끄러우며 미끄럽지 않은 여정이겠죠. 아닐 수도 있지만요. [블러플 빛이 사라지고 더 푸른 빛이 하늘 전체로 퍼지기 시작합니다. 더 푸른 빛은 희미해지고 보라색 빛은 거의 푸르게 보일 정도로 밝아지다가 마침내 완전히 사라집니다. 보라색 빛은 더욱 밝아지고 더 푸른 빛은 거의 쓸모없을 만큼 약해지다가, 더 푸른 빛이 흐려지며 끝내 완전히 사라집니다. 우리 주변의 보라색 빛은 더 강해져 더 푸른 빛을 거의 완전히 죽여 버립니다. 우리도 죽일 수 있습니다. 이 글을 쓰는 데 남은 평생이 걸릴 수도 있습니다. - 보라색 빛이 더 푸른 빛보다 강해지는 이유를 질문받은 Echidnas.]"
  },
  {
    id: "ai210",
    text: "과학자들이 방귀는 사실 반물질이며, 물질은 그저 평범한 물질이라는 사실을 발견했습니다."
  },
  {
    id: "ai211",
    text: "날씨가 바뀔 시간입니다."
  },
  {
    id: "ai212",
    text: "I HAVE MOVED TO THE 01th DIMENSION (영일 번째 차원으로 이동했다는 고의 오타)"
  },
  {
    id: "ai213",
    text: "아니요, 그냥 농담입니다"
  },
  {
    id: "ai214",
    text: "\"i'm not gonna lie, theres way too many good ones in the game already\" - poor guy who played minigame enhancement (게임에 좋은 것이 이미 너무 많다는 미니게임 강화 플레이어의 말)"
  },
  {
    id: "ai215",
    text: "물건이 7일하고 1박 동안 실종됐습니다"
  },
  {
    id: "ai216",
    text: "충격적인 새 연구에서 반물질 차원을 이기는 가장 큰 비결은 '그곳에 있지 않는 것'이라고 밝혀졌습니다."
  },
  {
    id: "ai217",
    text: "다음 업데이트는 18000초 뒤입니다. 이걸 읽으며 시간을 낭비하지 말고 게임에 집중하세요."
  },
  {
    id: "ai218",
    text: "이게 뉴스가 될지는 모르겠어요"
  },
  {
    id: "ai219",
    text: "(뉴스를 끄면 뉴스 표기가 다른 알림보다 우선합니다)"
  },
  {
    id: "ai220",
    text: "이 이야기는 듣고 싶지 않을 거다, 아이야."
  },
  {
    id: "ai221",
    text: "쓸모없는 클립을 아주 조금 얻기 위해 뉴스 티커를 분해하려면 여기를 클릭하세요.",
    onClick() {
      GameOptions.toggleNews();
      player.news.specialTickerData.paperclips++;
    }
  },
  {
    id: "ai222",
    text: "Press alt+f4 to unlock 9th dimension (아홉 번째 차원을 열려면 게임 종료 단축키를 누르라는 장난)"
  },
  {
    id: "ai223",
    text: "잠깐, Hevi가 아홉 번째 차원을 잠금 해제할 수 없다는 게 무슨 소리야"
  },
  {
    id: "ai224",
    text: "마침내 hevi가 9번째 차원을 얻는 방법을 알아냈습니다... 하지만 애초에 별로 신경 쓰지 않았던 것 같네요."
  },
  {
    id: "ai225",
    text: "Imagine being a meme. (밈이 된 모습을 상상해 보라는 자기지시적 농담)"
  },
  {
    id: "ai226",
    text: "2016년 6월 10일, 익명이 게시함"
  },
  {
    id: "ai227",
    text: "여러분의 뉴스입니다. 원할 때 새로고침하세요."
  },
  {
    id: "ai228",
    text: "뉴스에서 당신을 봤습니다. 그래서 무엇을 플레이하나요? - 1E209"
  },
  {
    id: "ai229",
    text: "정말 키보드를 집에 두고 오고 싶나요? 뉴스를 집에 두고 오면 안 되잖아요?"
  },
  {
    id: "ai230",
    text: "생성 중입니다..."
  },
  {
    id: "ai231",
    text: "참 오래도 걸렸네요"
  },
  {
    id: "ai232",
    text: "이제 이 탭에서 로그아웃됐습니다"
  },
  {
    id: "ai233",
    text: "점검을 위해 이 탭을 닫아 주세요"
  },
  {
    id: "ai234",
    text: "물질이나 반물질을 만들려면 그저 밖을 내다보면 됩니다. 잘츠부르크의 공장은 그곳의 물질이 단번에 반물질을 생산할 수 있다는 최신 발명품을 내놓으려 하지 않아 폐쇄됐습니다! 이 문을 마지막으로 연 사람은 다시는 목격되지 않았습니다."
  },
  {
    id: "ai235",
    text: "당신은 살아 있습니다. 공간을 차지합니다. 큽니다. 작지도 크지도 않습니다. 길쭉하지도 둥글지도 않습니다. 파랗지도 빨갛지도 않습니다. 안티파랑입니다. 안티빨강입니다. 안티갈색입니다. 안티갈색 물질입니다. 안티노랑입니다. 안티초록입니다. 안티노랑 물질입니다. 안티파랑입니다. 안티초록 반물질입니다. 안티빨강입니다. 안티하양입니다. 안티빨강 반물질입니다. 안티하양 반물질입니다. 안티갈색 물질입니다. 안티하양 반물질입니다. 안티하양 반물질입니다."
  },
  {
    id: "ai236",
    text: "환영합니다"
  },
  {
    id: "ai237",
    text: "몇 주 전과 같은 곳을 방문해 주셔서 감사합니다 사랑합니다\" (팁)"
  },
  {
    id: "ai238",
    text: "\"게임 전체가 뉴스 티커 안에 있는 줄 알았어요\" (이상해지기 전)"
  },
  {
    id: "ai239",
    text: "\"이 게임의 가치가 얼마나 될지 궁금하네요\" - 미친 사람"
  },
  {
    id: "ai240",
    text: "\"Is anyone working on breaking infinity?\" (Seriously, this game needs to be Oceanhorned.) (누가 무한 돌파를 작업 중인지 묻고 이 게임에도 Oceanhorn식 처리가 필요하다는 농담)"
  },
  {
    id: "ai241",
    text: "이 게임에 여러 버전이 있다는 사실을 알아냈습니다. 하나는 'Standard Pro', 다른 하나는 'Low Pro'라고 합니다. 둘이 같은 게임인지조차 잘 모르겠습니다."
  },
  {
    id: "ai242",
    text: "Is that a Bad Thing or a Good Thing? That depends on if it's a GOOD Thing or A LIE. (그게 좋은 일인지 거짓말인지에 따라 나쁜 일과 좋은 일을 가린다는 말장난)"
  },
  {
    id: "ai243",
    text: "\"Hevi kind of forgot about the update, but the update certainly hasn't forgotten about him\" - Kajfik (Hevi는 업데이트를 잊었지만 업데이트는 그를 잊지 않았다는 유명 대사 패러디)"
  },
  {
    id: "ai244",
    get text() { return `빅 크런치. 그게 뭘까요? 빅 크런치 포인트 약 4*1024개? 반물질 포인트 약 ${format(Number.MAX_VALUE, 2)}개? 은하 하나와 비슷한 정도? 은하와 비슷하다고요? 저걸 보세요. 반물질 은하입니다. 오직 이 게임만이 이렇게 방대한 반물질을 제공할 수 있으며, 재미있습니다! "재미"라고 했어요! 좋아하지 않을 이유가 있나요?`; }
  },
  {
    id: "ai245",
    text: "애플리케이션을 종료하려면 여기를 클릭하세요"
  },
  {
    id: "ai246",
    text: "잠깐, 모바일 버전이 있다고요? 언제요?"
  },
  {
    id: "ai247",
    text: "모바일 사용자 여러분이 아름다운지는 잘 모르겠지만, 제 감정을 온 세상과 공유하는 뉴스 티커가 여기 있습니다."
  },
  {
    id: "ai248",
    text: "업데이트가 5시간 뒤인 줄 알았습니다"
  },
  {
    id: "ai249",
    text: "우주에서 가장 철저히 숨겨진 비밀은 KISS-IT 비밀입니다. 오늘은 유지보수 담당자들에게 감사를 표현하세요!"
  },
  {
    id: "ai250",
    text: "대회는 무승부입니다. 장난의 승패는 비밀 도전과제로 결정됩니다."
  },
  {
    id: "ai251",
    text: "우리 때는 <<$!19>> 도전과제를 해금하려면 비밀 도전과제가 필요했습니다. 상당히 간단한 방식이었죠. 게임에서 비밀 메시지를 찾고 비밀 도전과제를 발견하면, 그것으로 도전과제를 해금할 수 있었습니다."
  },
  {
    id: "ai252",
    text: "우리는 반물질 경쟁에서 빠른 손을 진화시켰습니다."
  },
  {
    id: "ai253",
    text: "안녕하세요, 오늘 하루는 어땠나요?"
  },
  {
    id: "ai254",
    text: "How'd your ⢿─┃│? Good, because today we're having a little chat about the 5th dimension. (도형의 상태를 묻고 오늘은 다섯 번째 차원을 이야기한다는 뜻)"
  },
  {
    id: "ai255",
    text: "반물질이 뭘 하려는 걸까요?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아하, 돌아왔습니다."
  },
  {
    id: "ai256",
    text: "9번째 차원이 된다고 상상해 보세요. [WIP]"
  },
  {
    id: "ai257",
    text: "우후, 우리는 전쟁에서 졌습니다,"
  },
  {
    id: "ai258",
    text: "Lore: Grand Theft Antimatter (설정: 반물질 대도둑이라는 게임 제목 패러디)"
  },
  {
    id: "ai259",
    text: "Hm, I don't get why people think there is a 9th dimension. The 9th dimension is explained in detail in the [[Infinite Teleport Project]] video, and in a [[Word Problem]] that [[can be viewed here|http://www.thingiverse.com/id98109802713176601414569]] . (아홉 번째 차원은 링크된 영상과 문제에서 자세히 설명된다는 뜻)"
  },
  {
    id: "ai260",
    text: "In the [[GameFAQs|http://www.gfaq.com/gfaqs/this-game-faq-by-title]], one of the most popular [[news ticker messages|http://www.gfaq.com/tug/this-game-faq-by-title]]. You should also check out [[our newest attraction, the [[5th dimension|http://www.gfaq.com/gfaqs/this-game-faq-by-name]] and [[nothing](https://www.youtube.com/watch?v=lXMskKTw3Bs)."
  },
  {
    id: "ai261",
    text: "이날을 위해 영원 내내 기다렸습니다... 바로 지금! 오늘은 0일이므로 마침내 저속 모드를 끝낼 수 있습니다. 저속 모드가 보이지 않아서 6시간으로 바꾸는 것도 잊었지만, 이 저속 모드가 얼마나 오래갈지 알아보려면 다음 재부팅까지 기다려야 합니다.... -아직 저속 모드를 끝내지 못한 수수께끼의 존재"
  },
  {
    id: "ai262",
    text: "Hey you, you're finally awake. You were trying to buy a dimension, but it's impossible. (드디어 깨어났지만 차원을 사려던 일은 불가능하다는 Skyrim 도입부 패러디)"
  },
  {
    id: "ai263",
    text: "Press F to pay respects (F를 눌러 조의를 표하라는 유명 게임 밈)"
  },
  {
    id: "ai264",
    text: "Press M to pay antimatter (M을 눌러 반물질을 내라는 밈 변형)"
  },
  {
    id: "ai265",
    text: "Press L to revive the dead (L을 눌러 죽은 자를 되살리라는 밈 변형)"
  },
  {
    id: "ai266",
    text: "Your CPU is too powerful. You need to give it a big crunch. (CPU가 너무 강하니 빅 크런치를 시키라는 게임 용어 농담)"
  },
  {
    id: "ai267",
    text: "Roses are red. Violett are blue. Tom are red. Antimatter are blue. We exist because of the unbeatable antimatter that is antimatter. What is it that makes us different? I don't know. It may even be the non-existence of antimatter. (장미는 붉고 제비꽃은 푸르다는 시를 반물질과 존재에 관한 난해한 문장으로 바꾼 패러디)"
  },
  {
    id: "ai268",
    text: "이 게임의 정식 버전을 살지, 조금 이전 버전을 살지는 모르겠지만 이것만은 말할 수 있습니다. 초기 게임의 품질 저하는 후기 게임의 품질 저하보다 심합니다."
  },
  {
    id: "ai269",
    text: "\"컷신을 보고 싶다\" 목록이 더 좋은 것 같습니다"
  },
  {
    id: "ai270",
    text: "이걸 읽으니 불길한 느낌이 듭니다"
  },
  {
    id: "ai271",
    text: "어디에 있나요? (위를 가리킴) --> 차원 사이의 성채 안 (아래를 가리킴) --> 차원 사이의 감방 안"
  },
  {
    id: "ai272",
    text: "Instructions clear, got a ninth dimension epiphany (지시를 잘 이해해서 아홉 번째 차원의 깨달음을 얻었다는 밈)"
  },
  {
    id: "ai273",
    text: "비밀 도전과제를 플레이하고 싶나요? 네, 이해합니다. 하지만 크고 분명하게 말한 뒤 특정 비밀 도전과제에 체크 표시를 하세요. 말했듯이 쉽지 않고 아주 많습니다. 그리고 무한을 잊지 마세요. 아니면 당신의 무는 이거--"
  },
  {
    id: "ai274",
    text: "MEE6가 제 반물질 연구실에서 저를 8번째 차원의 물질이라고 말하려는 모습이 목격됐습니다."
  },
  {
    id: "ai275",
    text: "만약"
  },
  {
    id: "ai276",
    text: "분명 여러 번 들었겠지만 Antimatter Dimensions에서 이기는 진짜 비결은 차원의 압축을 푸는 것입니다. 그러면 쾅! 반물질이 생깁니다. 물론 작동하지 않는 비트는 풀어 줘야 합니다. 그렇다면 반-비트란 정확히 무엇일까요? Zalgo는 누구죠? Algolia는 무엇인가요? 왜 살 수 없죠? 왜 얻을 수 없는 건데요? 아마 잔뜩 기대만 모은 뒤 아무 일도 일어나지 않을 가능성이 더 큽니다."
  },
  {
    id: "ai277",
    text: "Oh, hevi is coming to town to pick a new plumber (Hevi가 새 배관공을 고르러 마을에 온다는 노래 패러디)"
  },
  {
    id: "ai278",
    text: "Antimatter Dimensions에는 배관공이 없습니다. 앞의 사람이 거짓말한 게 틀림없습니다."
  },
  {
    id: "ai279",
    text: "이런."
  },
  {
    id: "ai280",
    text: "c9가 새로운 9번째 차원입니다!"
  },
  {
    id: "ai281",
    text: "아무것도 얻지 않으려면 이 티커를 클릭하세요."
  },
  {
    id: "ai282",
    text: "이 5시간 계획이나 다가오는 현실 업데이트에 관해 궁금한 점이 있다면 개인 메시지를 보내세요. 기꺼이 도와드리겠습니다."
  },
  {
    id: "ai283",
    text: "What if you Unrar, renamed, and renamed again did it again? Ha? You thought that. (압축을 풀고 이름을 바꾸고 또 바꾼 다음 다시 하면 어떨까요? 하? 그렇게 생각했나요.)"
  },
  {
    id: "ai284",
    text: "i titled my post \"same ticker\" instead of \"the same idea\" because i actually changed the grammar in that post but i'll be eterned for the sake of argument that it seems slightly confusing for now - boo (글의 문법을 바꿔서 제목을 '같은 아이디어' 대신 '같은 티커'라고 붙였지만 지금은 조금 헷갈려 보인다는 뜻)"
  },
  {
    id: "ai285",
    text: "i title my suggestions \"The Price Is Right\" instead of \"The 9th Dimension\" because it's more fun ;) (더 재미있어서 제안 제목을 “아홉 번째 차원” 대신 “가격이 딱 맞아”라고 붙인다는 유명 프로그램 제목 패러디입니다.)"
  },
  {
    id: "ai286",
    text: "왜 천국은 아홉 번째 차원, 지옥은 여덟 번째 차원이라고 부르나요?"
  },
  {
    id: "ai287",
    text: "영원한 자들은 권력자들에게 더 적은 것을 기대할 권리가 있습니다. 이제 지쳤습니다!"
  },
  {
    id: "ai288",
    text: "반물질은 물질이라고 부르고 물질은 반물질이라고 불러야 합니다"
  },
  {
    id: "ai289",
    text: "Infinity is just a concept. Matter antimatters is just an idle game. (무한은 개념일 뿐이고 Matter antimatters는 방치형 게임일 뿐이라는 말장난)"
  },
  {
    id: "ai290",
    text: "Hevipelle가 사람들의 사생활을 침해한 것은 '잘못된 판단'이었다고 인정했습니다."
  },
  {
    id: "ai291",
    text: "Have you heard of the nine hells of antimatter? I heard they're pretty cool.\" -e210 in Minecraft (반물질의 아홉 지옥이 꽤 멋지다는 Minecraft 속 화자의 말)"
  },
  {
    id: "ai292",
    text: "지옥의 온도는 102.5도입니다."
  },
  {
    id: "ai293",
    text: "차원이 하나도 없는 차원에서 물질이나 반물질을 어떻게 얻나요?"
  },
  {
    id: "ai294",
    text: "프레스티지 계층을 통과하고 싶나요? 빛의 속도에 가깝게 아주 빠르게 움직이세요. 아니, 그보다 더 빠르게요."
  },
  {
    id: "ai295",
    text: "If the universe is expanding, does it anti-explain the distance? (우주가 팽창하면 거리를 반대로 설명하느냐는 expand와 explain 말장난)"
  },
  {
    id: "ai296",
    text: "왜 \"피자를 배달한 간호사가 취해 있었다\" 또는 \"피자를 배달한 간호사가 술에 취한 상태였다\"라고 부르는 걸까요?"
  },
  {
    id: "ai297",
    text: "최초의 반물질은 수천 년 동안 봉인돼 있었지만, 어느 Slack 채널의 아이가 건드리기 시작했습니다. 그것은 차원이 됐습니다."
  },
  {
    id: "ai298",
    text: "VR은 실재합니다. 우리 VR 사용자들은 다음 업데이트를 금지했습니다."
  },
  {
    id: "ai299",
    text: "\"뉴스 메시지 제안을 낭비했다는 불평으로 뉴스 메시지 제안을 낭비하지 않았으면 좋았을 텐데요. 뉴스 메시지 제안을 낭비한 이유는...\" -뉴스 메시지를 정말 아끼는 사람"
  },
  {
    id: "ai300",
    text: "팝콘을 가져와야 합니다!"
  },
  {
    id: "ai301",
    text: "If antimatter were to fall in a dimension with no one around, did anything even happen? (아무도 없는 차원에서 반물질이 떨어졌다면 정말 무슨 일이 일어난 것이냐는 철학적 질문 패러디)"
  },
  {
    id: "ai302",
    text: "오븐에서 호박을 꺼내야 합니다!"
  },
  {
    id: "ai303",
    text: "도와주세요, 갇혔어요"
  },
  {
    id: "ai304",
    text: "이어서 날씨입니다."
  },
  {
    id: "ai305",
    text: "스위스 법원이 화요일, \"내부에 작은 반물질 은하가 있는 블랙홀을 만들고 싶어 한\" 남성에게 종신형을 선고했습니다. 이는 \"자신을 가두는 것이 불가능함을 보여 주려 했을 뿐인\" 범죄에 내려진 형벌 중 가장 가혹한 것으로 알려졌습니다."
  },
  {
    id: "ai306",
    text: "\"내부에 작은 반물질 은하가 있는 블랙홀을 만들고 싶습니다\" - Protivist"
  },
  {
    id: "ai307",
    text: "과학자들이 방귀도 사실 반물질이라는 사실을 발견했습니다."
  },
  {
    id: "ai308",
    get text() { return `If you are reading this, that means ${format(Number.MAX_VALUE, 2)} matter to you. (이 문장을 읽는 사람에게 그만큼의 물질이 중요하다는 말장난)`; }
  },
  {
    id: "ai309",
    text: "안녕하세요. 저는 물질입니다. 이야기하러 왔습니다. 당신은 깨어나 꼬리를 흔들고 머리를 긁었습니다. 왜 그랬을까요? 물러서세요. 그 이유를 보여 드리겠습니다."
  },
  {
    id: "ai310",
    text: "더 큰 벽 하나를 마련합시다. 상황이 험악해질 겁니다."
  },
  {
    id: "ai311",
    text: "좋습니다. 이 쇼를 YouTube에 올립시다. 바로 본론으로 들어가죠. 높이가 최소 2블록이 아닌 벽은 모두 큰 형제 크기의 형제 크기 링에서 경쟁할 수 있습니다. 두께가 최소 3/4인치인 벽은 모두 더 큰 형제 크기의 형제 크기 링을 사용할 수 있습니다. 두께가 최소 1/4인치인 벽은 모두 작은 형제 크기 링을 사용할 수 있습니다. 두께가 최소 1/2인치가 아닌 벽은 모두 작은 형제 크기 링을 사용할 수 있습니다. 두께가 최소 1/2인치가 아닌 벽은 모두 더 큰 형제 크기의 형제 크기 링을 사용할 수 있습니다. 두께가 최소 1/2인치가 아닌 벽은 모두 더 큰 형제 크기 링을 사용할 수 있습니다. 두께가 최소 1/4인치가 아닌 벽은 모두 여기 나온 작은 형제를 사용할 수 있습니다. 두께가 최소 1/2인치가 아닌 벽은 모두 작은 형제 크기 링을 사용할 수 있습니다."
  },
  {
    id: "ai312",
    text: "IDE for being awesome, ID3 for being dumb, and ID5 for being… well, pretty much the same thing. It's called Antimatter Dimensions for a reason. (멋진 IDE와 멍청한 무한 차원들을 대비하며 게임 이름에는 이유가 있다는 말장난)"
  },
  {
    id: "ai313",
    text: "왜 이걸 만들기로 했는지 모르겠어요"
  },
  {
    id: "ai314",
    text: "'anti-ide' ('반-아이디어'라는 말장난)"
  },
  {
    id: "ai315",
    text: "1e4 anti-people are a lot more anti than we could ever imagine (만 명의 반-사람은 우리가 상상할 수 있는 것보다 훨씬 더 anti하다는 반복 말장난입니다.)"
  },
  {
    id: "ai316",
    text: "1e140 pizzas make an anti-pie. You can't just randomly pop a pie in the oven and expect it to be done. (그만큼의 피자가 반-파이를 만들며 파이를 무작정 오븐에 넣는다고 완성되지는 않는다는 말장난)"
  },
  {
    id: "ai317",
    text: "Why is there so many news tickers but so few tickers? (뉴스 티커는 이렇게 많은데 티커 자체는 왜 이렇게 적으냐는 말장난입니다.)"
  },
  {
    id: "ai318",
    text: "Hevipelle라는 사람이 \"8시간 뒤 업데이트\" 뉴스 티커를 만들고 싶어 하지만, 동기화에 쓰는 시스템이 오랫동안 업데이트되지 않아 전혀 동기화되지 않습니다."
  },
  {
    id: "ai319",
    text: "업데이트는 90분 뒤입니다. 더 이상 찾을 수 있는 티커가 없습니다."
  },
  {
    id: "ai320",
    text: "이 문장을 읽고 있다면 남은 업데이트가 없다는 뜻입니다."
  },
  {
    id: "ai321",
    text: "알려진 차원은 9개지만 모드는 Standard, Experimental, Ultra-Experimental의 3개뿐입니다."
  },
  {
    id: "ai322",
    text: "통계가 어떻게 되냐고요? 제게는 없지만 Hevipelle에게는 있고, 실제로 꽤 좋다고 합니다. 우리에게 알려 줄 수는 없었나 보네요."
  },
  {
    id: "aim323",
    text: "너프가 너무 지독하게 강하다고 생각했습니다."
  },
  {
    id: "ai324",
    text: "업데이트 빈도 업그레이드와 업그레이드 자체를 세어서 반물질의 중심에 도달하려면 티커가 몇 개 필요한가요?"
  },
  {
    id: "ai325",
    text: "4의 제곱근은 6.24e18입니다. 사물의 중심에 더 가까이 가고 싶다면 9번째 차원을 만들어야 합니다."
  },
  {
    id: "ai326",
    text: "너프는 마지막에 있다고 생각했지만, 실제로는 계속 쌓이고 있었던 모양입니다. 너프는 실제로 모든 것을 느리게 만들어 더 빠르게 쌓이게 합니다."
  },
  {
    id: "ai327",
    text: "방금 말은 취소하죠. 여러분의 제안은 하나도 무작위가 아닙니다."
  },
  {
    id: "ai328",
    text: "당신은 절대 혼자가 아닙니다."
  },
  {
    id: "ai329",
    text: "콘텐츠 차단이 활성화됐습니다. 물질 차원에서 차단되어 출처에서 거부당할 수 있으니 유의하세요."
  },
  {
    id: "ai330",
    text: "좋은 티커를 생각해 내려 하지만 아무것도 떠오르지 않습니다"
  },
  {
    id: "ai331",
    text: "이런, 9번째 차원에 관한 그 이야기가 있나요?"
  },
  {
    id: "ai332",
    text: "\"꼬마야, 9번째 차원 좀 살래? '' - GhostBot"
  },
  {
    id: "ai333",
    text: "하나가 다른 하나로, 또 다른 하나로 계속 이어지다가 끝없는 소리의 바다에서 길을 잃게 됩니다."
  },
  {
    id: "ai334",
    text: "iPhone 전용이지만 Android에서 훌륭합니다"
  },
  {
    id: "ai335",
    text: "나쁜 카르마 티커를 얻은 다음 이메일을 통해 튕겨 보낼 겁니다"
  },
  {
    id: "ai336",
    text: "서두르는 게 좋을 겁니다. 그렇지 않으면 복제자가 우주를 뒤덮을 겁니다!"
  },
  {
    id: "ai337",
    text: "안전하다고 생각한 바로 그 순간, 화난 개가 인도에서 당신을 공격합니다!"
  },
  {
    id: "ai338",
    text: "좋아요, 좋아요. 개의 권위는 사라지고 절대적인 힘이 그 자리를 대신했습니다."
  },
  {
    id: "ai339",
    text: "방금 반-세계의 진정한 신이 되었습니다!"
  },
  {
    id: "ai340",
    text: "*계수기를 문지른다* 이봐요, 동네 주민 여러분은 문을 잠가 두세요. 그리고 기억하세요. 살림을 잘해야 합니다."
  },
  {
    id: "ai341",
    text: "일반 뉴스 티커는 왼쪽으로 움직입니다"
  },
  {
    id: "ai342",
    text: "다음 업데이트는 18000초 뒤입니다. 그만 읽으세요. 아무것도 읽지 마세요. 그냥 그 버튼을 그만 누르세요. 뉴스 티커가 당신을 돌려보내고 있습니다. 잠깐..."
  },
  {
    id: "ai343",
    text: "아득히 오래된 우주 변방에서 어떤 사람이 한동안 반물질을 모으고 있습니다."
  },
  {
    id: "ai344",
    text: "What is Antimatteraltruist? (Antimatter와 altruist를 합친 말이 무엇인지 묻는 말장난)"
  },
  {
    id: "ai345",
    text: "이 문장을 읽고 있다면 뉴스 티커가 움직이고 있는 것입니다"
  },
  {
    id: "ai346",
    text: "치즈를 물에 넣으면 치즈가 물에 흡수되어 홍수가 납니다. 물은 치즈에 흡수되고 치즈는 물에 흡수되기 때문에 이런 일이 일어납니다."
  },
  {
    id: "ai347",
    text: "An anti-bird is a bird, and a bird is a plane. (반-새는 새이고 새는 비행기라는 Superman 대사 패러디)"
  },
  {
    id: "ai348",
    text: "새는 물을 무서워하고 포유류는 나는 것을 무서워합니다."
  },
  {
    id: "ai349",
    text: "Shoutouts to Simpleflips for the simple tip. (간단한 팁을 준 Simpleflips에게 감사한다는 이름 말장난)"
  },
  {
    id: "ai350",
    text: "GET CRUNCH BOI (어서 빅 크런치하라는 밈투의 외침)"
  },
  {
    id: "ai351",
    text: "Word gets out. Crunch. Crunch. (소문이 퍼지고 크런치를 반복한다는 짧은 말장난)"
  },
  {
    id: "ai352",
    text: "한 푼도 아깝지 않았습니다."
  },
  {
    id: "ai353",
    text: "목숨 8개, 무한 3번, 0일."
  },
  {
    id: "ai354",
    text: "지금은 기원전 0년입니다. 모두가 원하는 AD를 적어도 하나씩 가지고 있습니다. 공허는 AD로 가득한 공허로 채워져 있습니다. 이곳에서 시간을 최대한 활용하려면 [[공부]]해야 합니다. 공부하세요. 공부하세요. 공부하세요. 공부하세요."
  },
  {
    id: "ai355",
    text: "To Crunch in Hell is to get the secret to unlocking the 9th dimension. You need to study and practice alot. (지옥에서 크런치하면 아홉 번째 차원을 여는 비밀을 얻으니 많이 공부하고 연습하라는 뜻)"
  },
  {
    id: "ai356",
    text: "오늘은 [기기의 날짜]입니다. 뉴스 티커가 마지막으로 나타난 지 5분이 지났습니다."
  },
  {
    id: "ai357",
    text: "일상의 일부가 된 상징적인 롤플레잉 게임 Antimatter Dimensions의 또 다른 에피소드에 돌아오신 것을 환영합니다. Antimatter Dimensions는 어린아이들 사이에서도 흔히 플레이하는 게임이 되었고, Netflix에서 볼 수 있는 \"집에서 플레이하기: 4살 프리미엄 계정이 주는 교훈\"이라는 영화에 영감을 주기까지 했습니다. 새로운 반물질 시대의 주제와 시스템은 이미 획기적임이 입증됐으며, 여러분이 게임을 플레이하는 방식을 영원히 바꿀 것입니다. 아직 제작 기간이 백 년 넘게 남은 2027년 1월 9일 출시에 함께해 주세요."
  },
  {
    id: "ai358",
    text: "돌아오신 것을 환영합니다, 오, 전능하신 반현실의 창조주시여. 당신께서 만들고 보살펴 오신 수많은 차원인 저희는, 당신의 무한한 은혜에 보답하는 모습이 당신을 기쁘게 하고 더 많은 차원을 만들려는 야망을 키우기를 바랍니다. 끝이 좋으면 모든 것이 좋고, 끝이 나쁘면 모든 것이 나쁩니다."
  },
  {
    id: "ai359",
    text: "뉴스 티커에 웃긴 내용이 나올 줄 알았는데 아니었네요"
  },
  {
    id: "ai360",
    text: "Press alt+f4 to get -1 gravity (게임 종료 단축키를 누르면 음의 중력을 얻는다는 장난)"
  },
  {
    id: "ai361",
    text: "우리 현실에는 왜 반물질 쌍소멸을 치료하는 방법이 있는 걸까요?"
  },
  {
    id: "ai362",
    text: "calculating the 14-point increase is like crunching, but exponentially more fun (열네 포인트 증가량 계산은 크런치와 비슷하지만 지수적으로 더 재미있다는 수학 말장난)"
  },
  {
    id: "ai363",
    text: "잘못된 숫자를 고쳤습니다"
  },
  {
    id: "ai364",
    text: "반물질인들이 새로운 언어를 만들었습니다. 당신은 그들의 언어를 말할 수 없습니다."
  },
  {
    id: "ai365",
    text: "반물질 중력이란 무엇인가요? 약물인가요? 치트 방법인가요?"
  },
  {
    id: "ai366",
    text: "대부분의 사람은 5시간이 아무것도 아니라는 걸 이해하지 못합니다. 우리 게임에서는 대부분의 시간이 5시간 뒤에 있습니다."
  },
  {
    id: "ai367",
    text: "방금 깨달았는데, 이 뉴스는 전부 같은 곳에서 일어나는 것 같아요... 냉장고 안에서요."
  },
  {
    id: "ai368",
    text: "이걸 클릭하면 무슨 일이 일어날지 궁금하네요..."
  },
  {
    id: "ai369",
    text: "(사람들은 9가 59까지 세기 시작하지 않고 그 뒤의 일은 일어나지 않기 때문에 제가 뉴스에 넣었다는 사실을 이해하지 못합니다.)"
  },
  {
    id: "ai370",
    text: "MS Excel은 기본 스프레드시트이며 모든 플랫폼에서 작동합니다"
  },
  {
    id: "ai371",
    text: "이제 여러분의 열띤 질문에 답하겠습니다. 호화 기능으로 무한 회귀를 고치는 버그 수정을 추가했습니다. 기능으로는 직접 시험하면서 알아차리기를 바라는 새로운 것들을 잔뜩 추가했습니다. 시험하면서 마음에 들기를 바라기도 합니다. 어쨌든 이 기능은 베타라서 어떤 것을 보게 될지 여러분이 선택할 수는 없기 때문입니다."
  },
  {
    id: "ai372",
    text: "공식 빌드에서는 편집할 수 없나요? 그렇다면 9번째 차원을 다운로드해서 게임에 제안 사항을 넣어 보세요."
  },
  {
    id: "ai373",
    text: "'통과 가능'이 '이만큼 결함이 있음'이라는 뜻인가요?"
  },
  {
    id: "ai374",
    text: "좋은 버그 제보가 절실합니다. 그래서 다가오는 1.9 업데이트에서는 버그 하나당 결함 1개를 공개하기로 했습니다. 그런 건 예정돼 있지 않죠?"
  },
  {
    id: "ai375",
    text: "This was my last chance. last chance salutes. (이것이 마지막 기회였고 마지막 기회가 경례한다는 말장난)"
  },
  {
    id: "ai376",
    text: "애니메 경찰이 새해에 하늘에서 떨어진 사람들의 가방을 검사하고 있습니다. 그 가방은 이제 해가 끝나기 전에 무중력을 경험한 사람들의 소유입니다."
  },
  {
    id: "ai377",
    get text() { return `지금은 1 BILLIONAIRE년이고, 반물질은 41%이며, 차원은 1e1e8입니다. 측정값의 표준 편차는 여러분의 문제가 얼마나 작은지를 나타냅니다. 이 때문에 사람들은 자신이 사용하는 값이 일반적이고 정상적이라고 생각하며, 그 결과 수많은 너프와 고장까지 발생합니다. ${format(Number.MAX_VALUE, 2)}년에는 기온이 올랐고 달은 지구와 같은 색이 되었습니다. 가끔 바다에서 피어나는 플랑크톤을 제외하면 생명의 흔적은 없습니다. 반물질에 자기 모멘트가 있다는 이론이 있지만 지금까지의 실험은 그렇지 않음을 시사합니다. 반물질의 종은 백만 가지가 넘지만 눈을 깜박이거나 빛을 내는 모습은 하나도 관찰되지 않았습니다. 과학자들은 여러 종류의 물질이 반물질의 "뒤"에 있을 수 있다고 보지만, "그들"은 서로 "대화"하지 않습니다.`; }
  },
  {
    id: "ai378",
    text: "5주년을 5시간 후에 기념합니다!"
  },
  {
    id: "ai379",
    text: "날 쳐다보러 오지 마세요! 내가 아직 서 있기는 한지도 모르겠으니까요!"
  },
  {
    id: "ai380",
    text: "정체불명의 언어에서 마지막 단어를 찾으려는 사람들 무리."
  },
  {
    id: "ai381",
    text: "올해는 20XX년, 게임은 AD, 그리고 Hevipelle는 업데이트를 작성했다는 이유로 사악합니다... 반물질 신들을 탓하세요."
  },
  {
    id: "ai382",
    text: "지금은 20XX년이고 게임은 AD이며, 지금은 2025년입니다. 이 시대에는 2종류의 사람이 있습니다. 그전에 AD를 플레이한 사람과 그 이후에 AD를 플레이할 사람입니다."
  },
  {
    id: "ai383",
    text: "과일과 채소의 종류는 백 가지가 넘지만, 어느 것도 \"안전\"하지 않습니다."
  },
  {
    id: "ai384",
    text: "업데이트는 언제 나오나요?"
  },
  {
    id: "ai385",
    text: "죄송하지만 저장 데이터가 망가졌습니다. 게임을 초기화해 주시겠어요?"
  },
  {
    id: "ai386",
    text: "새 대회, Triad에 오신 것을 환영합니다! 재치와 IP를 모아 독특한 체험형 대회에 참가하세요! 상품이 가득합니다! 오늘부터 모으세요! 우승자를 발표합니다!"
  },
  {
    id: "ai387",
    text: "Pink Floyd를 언급한 게 이렇게 많지 않았으면 좋겠어요."
  },
  {
    id: "ai388",
    text: "RG를 모을 계절이 왔군요!"
  },
  {
    id: "ai389",
    text: "9번째 차원이 이렇게 많지 않았으면 좋겠어요."
  },
  {
    id: "ai390",
    text: "Discord를 언급한 게 이렇게 많지 않았으면 좋겠어요."
  },
  {
    id: "ai391",
    text: "'Sup? (별일 없냐는 짧은 인사)"
  },
  {
    id: "ai392",
    text: "\"제 뉴스는 전부 Hevi에게서 얻습니다\" ~신규 플레이어"
  },
  {
    id: "ai393",
    text: "농담이라고 생각했겠지만 농담이 아니었습니다"
  },
  {
    id: "ai394",
    text: "언제나 9번째 차원과 전쟁을 벌이는 것은 바로 9번째 차원입니다."
  },
  {
    id: "ai395",
    text: "네. 맞습니다."
  },
  {
    id: "ai396",
    text: "No one is anti-Margaret any more. (이제 아무도 Margaret에게 반대하지 않는다는 anti 말장난)"
  },
  {
    id: "ai397",
    text: "반물질은 좋고, 물질은 나쁩니다. 선택은 당신 몫입니다."
  },
  {
    id: "ai398",
    text: "새로운 세계 통화: ETHBTC. 5시간 후에 출시됩니다."
  },
  {
    id: "ai399",
    text: "\"이 업데이트는 형편없어\" - 누구나 적어도 한 번은"
  },
  {
    id: "ai400",
    text: "당신은 해커가 아니라 데이터 먹보입니다."
  },
  {
    id: "ai401",
    text: "제발 도와주세요. 저는 악의 미로에 갇혔어요. 아니면 당신이 영웅이고 제가 악당인 걸까요!"
  },
  {
    id: "ai402",
    text: "신규 플레이어는 'R'을 눌러 게임을 초기화하세요"
  },
  {
    id: "ai403",
    text: "왜 하필 지금일까요? 바로 지금 말입니다. 이 게임을 저장했을 리 없습니다. 당신이 망가뜨렸습니다. 완벽한 저장 파일이 있어도 당신이 망가뜨린 것은 아무도 고칠 수 없습니다. 이 글을 읽으면 무슨 일이 벌어질지 어떻게 알 수 있겠습니까? 저장했는지조차 알지 못할 겁니다. 텅 빈 마음으로 눈도 뜨지 않은 채 컴퓨터 앞에서 손가락만 놀리며 하루를 바라보고, 끝없는 뉴스 티커 제안에 넋을 잃은 상태로 시작하게 됩니다. 공포 영화 표와 비슷하지만 더 나쁩니다. 업데이트 전까지 삶의 두 번째 기회를 위한 업그레이드를 살 시간도 있습니다. 하지만 삶을 위한 업그레이드는 살 수 없습니다. 불법이니까요. 그래서 계속 'R'을 누르고 있습니다. 손가락을 꼰 채 `R'을 누르는 것을 멈출 수 없...`습니다. 고개를 들고 무한에 도달할 수 없습니다. 가진 `R'을 전부 써서 `R'들을 살 수도 없습니다. 심지어 당신의"
  },
  {
    id: "ai404",
    text: "방금 당신에게 아무 쓸모도 없을 글을 쓰는 데 12개월을 보냈습니다."
  },
  {
    id: "ai405",
    text: "이 인용문은 조약돌이 무한한 점의 공간 속 무한한 점이라는 사실을 이해하는 사람만을 위한 것입니다. 그 위에는 유한한 수의 점을 놓을 수 없습니다. 하지만 유한한 수의 단어는 놓을 수 있고, 그 반대도 마찬가지입니다."
  },
  {
    id: "ai406",
    text: "Of what use is the phrase \"I be I be I\" if not to describe your thoughts? (생각을 표현하는 데 쓰지 않는다면 이 말이 무슨 소용이냐는 뜻)"
  },
  {
    id: "ai407",
    text: "수상한 사람이 시장에서 일종의 안티 음식을 팔려고 했습니다. 주변에는 사거나 사지 않을 사람이 아무도 없었고, 그 사람은 현장에서 달아나는 모습이 마지막으로 목격되었습니다."
  },
  {
    id: "ai408",
    text: "왜 이것 때문에 시간이 느려지는 것 같을까요?"
  },
  {
    id: "ai409",
    text: "선행항에 대한 로그 연속성이 9.999626e27.999627 e300 e1.79e308 e²이므로, 이산 로그 연속성에 기반한 과학 논문의 수는 기하급수적으로 증가합니다."
  },
  {
    id: "ai410",
    text: "이런, 계획대로 되지 않았습니다.  모든 일은 지나가던 사람이 산 안드레아스에 떠다니는 기묘한 물체를 발견하면서 순진하게 시작되었습니다. 물체가 커지고 이상한 성질을 보이기 시작하자, 그는 날씨를 원격으로 작동시켜 물체를 통제하려 했습니다. 그러자 수천만 명의 목숨을 앗아간 핵겨울이 일어났고, 온 우주가 표준 기수 형식으로 변환되어 그는 그 형식에 가해지는 모든 변경을 거부할 권한을 얻었습니다. 물체의 힘이 커질수록 날씨를 원격으로 작동할 더 발전된 물체가 필요해졌고, 결국 지금껏 세상이 본 것 중 가장 거대한 오로라가 탄생했습니다. 그 크기는 비축해 두었던 326,500 tonnenenenenenene 성운보다도 컸습니다. 물체의 힘이 커질수록 우주로 더 많은 위성을 보낼 필요도 커졌고, 마침내 우주 간 위성 통신에 도달하여 그는 그런 일을 경험한 최초의 생명체가 되었습니다. 그는 혹시 자신이 근처에 있을 때를 대비해 물체와 같은 시각, 같은 공항에 안전하게 착륙하기도 했습니다. 마지막으로 그는 정체불명의 사람이 보낸 이메일을 열었습니다. 그 이메일에서는 반물질 물체를 만드는 단계별 안내서의 가능성을 논하며, 적어도 세상이 스스로를 파멸시키지 않도록 구할 방향을 제시할 수 있다고 했습니다. 그는 새로운 뉴스 티커 제안을 만들 생각이라고도 말했지만, 티커 끝에 이르러 보니 다른 티커와 중복된 데다 자신이 잘못 입력했다는 사실을 깨달았습니다. (결국 그는 실수를 인정하고 만일을 위해 내용을 수정했습니다.)"
  },
  {
    id: "ai411",
    text: "천상의 Pelle 예하: 도전에서 행운을 빕니다. 정말 그만큼 위험하거든요."
  },
  {
    id: "ai412",
    text: "지극히 종교적인 분 예하: ...반물질보다는 치즈버거를 고르겠습니다."
  },
  {
    id: "ai413",
    text: "OY, NAY, NAY -HEVI, THE TRANSFORMER (어이, 아니, 아니—변신하는 HEVI라는 뜻)"
  },
  {
    id: "ai414",
    text: "보물 창고: 비용을 늘리지 않고 반물질 생산량을 늘리는 비결을 발견하세요."
  },
  {
    id: "ai415",
    text: "Is Antimatter Dimensions an anagram of Antimatter Dimensions? (Antimatter Dimensions를 재배열하면 똑같은 Antimatter Dimensions가 되느냐는 자문자답)"
  },
  {
    id: "ai416",
    text: "(처음부터 생성한 코드)"
  },
  {
    id: "ai417",
    text: "예전에는 평범한 속도로 여행했지만, AD와 NIN을 플레이하기 시작한 뒤 NIN이 조금 험난해지면서 AD도 정신없어졌고, 한 번에 몇 달씩 그곳에 갇히곤 했습니다."
  },
  {
    id: "ai418",
    text: "이런 글을 쓰지 않아도 되면 좋겠습니다. 제가 뭘 해야 하죠?"
  },
  {
    id: "ai419",
    text: "너무 오래 잠적해서 의자에 앉는 법마저 잊어버렸습니다."
  },
  {
    id: "ai420",
    text: "그 성가신 Hevi 개발자들은 계속 반물질 차원을 만들지만, 반물질은 집계되지 않습니다."
  },
  {
    id: "ai421",
    text: "현실에서 변하지 않는 몇 안 되는 것 중 하나는 시간에 대한 당신의 인식입니다. 이것이 없으면 현실도 잃게 됩니다."
  },
  {
    id: "ai422",
    text: "Imagine being a news ticker. (자신이 뉴스 티커라고 상상해 보라는 뜻)"
  },
  {
    id: "ai423",
    text: "이것은 방치형 게임입니다. 달라진 것은 없습니다. 당신은 다른 방치형 게임을 플레이하지 않을 겁니다."
  },
  {
    id: "ai424",
    text: "물리학자들이 열두 차원의 존재를 증명했습니다. 끈 이론 연구소가 공개한 서한에 따르면, \"무한을 돌파하면 당신의 뇌가 해부될 것입니다!\""
  },
  {
    id: "ai425",
    text: "이상하게도 지금은 2015년이기도 합니다. 연도는 또 수수께끼처럼 비어 있습니다. 무슨 일이 벌어지는지 알려 주시겠어요? 차원을 이용한 속임수라도 되는 걸까요? 2015년 같은 것은 존재하지 않으니 연도가 비어 있는 것이 분명합니다. 이것도 마음의 속임수일까요? 어쩌면 세계가 정말 2015년에 존재를 멈추는 걸까요? 연도는 분명 2017년이지만, 사람들은 꿀벌이 날아가는 정도의 속도로 움직이는 듯합니다. 사람들이 날아가는 총알보다 워프 9배 빠르게 움직였다는 사실은 과학적으로 입증되었습니다. 사람이 빛보다 빠르게 움직일 수 있다는 사실도 과학적으로 입증되었습니다. 2015년은 비어 있어야 하는 걸까요? 사람들은 Vokal Man 정도의 속도로 움직이는 듯합니다."
  },
  {
    id: "ai426",
    text: "Andre라는 젊은이는 미지의 우주를 탐험하다가 엄청난 양의 반물질을 우연히 발견했습니다. 그는 반물질의 양에도 놀랐지만, 그 생김새에는 더욱 경탄했습니다. 그는 그곳을 \"Andre의 반물질 낙원\"이라고 불렀습니다. 여러분도 자신도 모르게 보았을 이 홈쇼핑 광고나 저 홈쇼핑 광고에서 그를 기억할지 모릅니다."
  },
  {
    id: "ai427",
    text: "What is Antimatter? Does any of that matter? Will this galaxy be annihilated in the next ticker? (반물질이 무엇인지, 그게 중요한지, 다음 티커에서 은하가 소멸할지를 묻는 말장난)"
  },
  {
    id: "ai428",
    text: "\"이 글을 끝까지 쓰기에는 돈을 충분히 받지 못하고 있습니다\" - Kajfik"
  },
  {
    id: "ai429",
    text: "\"Finally, I'll get paid to write something funny for my toast!\" - Bacon sea urchin (드디어 내 토스트에 넣을 재미있는 글을 쓰고 돈도 받는다는 뜻)"
  },
  {
    id: "ai430",
    text: "Bacon is toast. You can toast bacon. (베이컨은 토스트이고 베이컨을 구울 수도 있다는 중의적 말장난)"
  },
  {
    id: "ai431",
    text: "현실의 삶이란 무엇일까요? 살아 있는"
  },
  {
    id: "ai432",
    text: "이제 9도 다른 수와 똑같이 취급되지만, hevi는 자신이 9번째라고 부르는 8번째 같은 다른 수와는 대조된다고 주장합니다."
  },
  {
    id: "ai433",
    text: "이 게임을 조금 더 잘 이해하고 싶다면 자신의 컴퓨터에서 플레이하고 있다는 점을 생각해 보세요. 당신은 혼자가 아닙니다. 전 세계의 해커, 개발자, 기자들이 최초로 \"makers\"와 \"takes\" 문제를 일으키는 해킹을 만들려고 경쟁하고 있습니다. 마치 이 \"world\"가 이들 \"hackers\"와 \"developers\"에 의해 만들어진 것처럼 말입니다."
  },
  {
    id: "ai434",
    get text() { return `당신에게는 힘이 없지만 많은 시간을 통제하며, 그것을 자신에게 유리하게 쓸 것입니다. 당신에게는 힘이 없지만 많은 데이터를 소유하며, 이는 "진실"을 찾는 여정에 큰 도움이 될 것입니다. 당신에게는 힘이 없지만 많은 시간을 소유하며, 이는 "가능한 한 많은 문을 두드리는" 여정에 큰 도움이 될 것입니다. 당신에게는 힘이 없지만 많은 IP를 소유하며, 이는 "시민 촬영물"을 만드는 여정에서 귀중한 자산이 될 것입니다. (소액의 $${format(Number.MAX_VALUE, 2)}만 내면 볼 수 있습니다)".`; }
  },
  {
    id: "ai435",
    text: "로봇일지는 몰라도, 여전히 자기 의지를 지닌 지성체입니다"
  },
  {
    id: "ai436",
    text: "예전에 이런 내용의 뉴스 티커를 본 적이 있습니다:"
  },
  {
    id: "ai437",
    text: "Gee, all this antimatter is clogging up my kitchen and now I can't cook myself a meal! What to do: cook myself a meal that will last me until the next big antimatter event, when I can get my infinity point back? My infinty point is running out, and I can't get it to finish running, so I'm starving! (이런, 반물질이 주방을 막아 식사를 만들 수가 없네요! 다음 대형 반물질 사건까지 버틸 식사를 만들어 그때 무한 포인트를 되찾아야 할까요? 무한 포인트가 바닥나고 있는데 달리기를 끝내게 할 수도 없어서 굶고 있다는 running 말장난입니다.)"
  },
  {
    id: "ai438",
    text: "Brought to you by AAAD-Brand Repli-candy! Infinite candy for an infinty drool-worthy cold! Contains no milk, cookies or butter. One second to midnight. (AAAD표 복제 사탕 광고로, 우유와 쿠키와 버터가 없으며 자정까지 일 초 남았다는 뜻)"
  },
  {
    id: "ai439",
    text: "인력으로 움직이는 로봇이 기존 공장에 혁신을 일으킵니다. 그 결과 가격은 내려가고 일자리는 늘어날 것입니다."
  },
  {
    id: "ai440",
    text: "미국 제조업에 치명적인 문제가 발생하여 공장들이 문을 닫았습니다. 전국의 노동자들은 약속된 양만큼 반물질을 생산할 수 없다는 사실을 깨닫고, 대신 직접 생산할 공장을 세우기 시작했습니다. 그 결과 가격은 오르고 일자리는 줄어들 것입니다."
  },
  {
    id: "ai441",
    text: "인터넷 여러분, 조심하세요. 다음 뉴스는 시간 팽창 기준 5시간 뒤에 나옵니다"
  },
  {
    id: "ai442",
    text: "최초의 뉴스 티커는 꽤 멋졌겠죠?"
  },
  {
    id: "ai443",
    text: "gravity = psychoactive (중력은 향정신성이라는 뜻)"
  },
  {
    id: "ai444",
    text: "\"그 차원은 존재하지 않습니다\" - (뉴스 티커는 [시간 팽창]에서만 표시됩니다)",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai445",
    text: "편의용 차원을 팔려는 상점 주인은 '24/7 대기 중'(즉, 자유 시간이 전혀 없음)인 것으로 알려졌으며, 등록증에는 커다란 'M'이 표시되어 있습니다."
  },
  {
    id: "ai446",
    text: "이것을 추가하세요"
  },
  {
    id: "ai447",
    text: "여기를 클릭하여 당신을 제외한 모든 봇에서 이 기능이 작동하게 하세요!"
  },
  {
    id: "ai448",
    text: "이런, 9번 공이 내 아홉 번째 차원에 끼어 움직일 수 없습니다. 녀석은 내가 부술 수 없는 아홉 번째 벽을 두드리고, 아홉 번째 시간선을 두드려서 조준할 수도 없습니다. 아홉을 파괴하고 나를 gromit처럼 매달아 둡니다. 돌아가서 Glorfindel과 Gaebley를 매달아야 하고 제안할 것도 있습니다. 내가 한 일이라곤 점수를 기록하고 점수 기록의 점수를 기록한 것뿐이라는 사실을 받아들여야 합니다. 이런 무의미한 생각은 다음 업데이트로 넘기면 쉽게 바로잡히지만, 그래도 그 버그가 특별히 노리도록 만들어진 문제들과 마주칠 수도 있고"
  },
  {
    id: "ai449",
    text: "The game is balanced, everyone gets nerf, why? Cause they make the pie. Antimatter would have way more chance of getting into the pie if it was made of antimatter. (모두가 너프를 받아 균형을 이루며, 파이가 반물질로 만들어졌다면 반물질이 들어갈 가능성이 훨씬 높다는 말장난)"
  },
  {
    id: "ai450",
    text: "\"Can you get the joke?\" (If you tapped \"Build That Wall\" and then re-entered the game after tapping \"Build That Wall\") (벽 건설 버튼을 누른 뒤 게임에 다시 들어왔을 때 농담을 알아챘느냐는 뜻)"
  },
  {
    id: "ai451",
    text: "Someone made a statement that antimatters. The statement was \"An infinity point made a long time ago\". It's been a while since someone looked for this statement. Some say it's still out there. Some say it was lost in the 7th Dimension War. Nobody knows what this statement means. But for now, just know it's not somewhere in the News Ticker. (누군가 반물질적으로 중요한 발언을 했습니다. 그 발언은 “오래전에 만들어진 무한 포인트”였습니다. 아직 어딘가에 남아 있다고도, 일곱 번째 차원 전쟁에서 사라졌다고도 합니다. 아무도 뜻을 모르지만 뉴스 티커 어딘가에 있지는 않습니다.)"
  },
  {
    id: "ai452",
    text: "Hey, you're finally awake. You were trying to get to the 9th dimension, right? Walked right into that infinity point, same as us, and that apocalypse over there. (드디어 깨어났군요. 우리처럼 아홉 번째 차원으로 가려다 무한 포인트와 종말에 휘말렸다는 Skyrim 패러디)"
  },
  {
    id: "ai453",
    text: "can u dont (그거 안 하면 안 되냐는 일부러 문법을 흐린 표현)"
  },
  {
    id: "ai454",
    text: "Kajfik가 이것을 승인하지 않으면 이 메시지에 손댈 수도 없다는 뜻이죠?"
  },
  {
    id: "ai455",
    text: "이 휴대폰에서 나가게 해 줘!"
  },
  {
    id: "ai456",
    text: "이런, 예상대로 되지 않았네요"
  },
  {
    id: "ai457",
    text: "It's all fun and games till you realise the dragon ball is a lie (드래곤볼이 거짓임을 깨닫기 전까지는 모든 게 즐겁다는 밈)"
  },
  {
    id: "ai458",
    text: "\"Could you get a hold of all of these antimatter? Ha! You'll just smash your head on that antimatter, and you'll have to show me who's boss.\"-MEE6 (이 반물질을 모두 손에 넣을 수 있겠느냐며, 결국 부딪치고 누가 우위인지 보여 줘야 한다는 도발)"
  },
  {
    id: "ai459",
    text: "우리는 조 단위가 얼마나 큰지 모르지만..."
  },
  {
    id: "ai460",
    text: "AD 초기와 7차원이 없던 시절로 시간 여행을 떠나 보세요. 진행 표시줄이 훨씬 더 길어질 겁니다."
  },
  {
    id: "ai461",
    text: "이 게임에 관해 우리가 아는 것은 시간 여행뿐입니다. 다음에 무엇이 올지는 모르며, 이것이 세상의 끝이고 당신이 그 종말의 일부라는 사실만 압니다."
  },
  {
    id: "ai462",
    text: "\"YOU CONTROL SO MUCH MATERIAL!\" - Marshal Grievous (당신이 엄청나게 많은 물질을 통제한다는 Grievous 패러디)"
  },
  {
    id: "ai463",
    text: "\"도와주세요, 영원히 추락할 운명이에요.\" (텍스트가 화면 위에서 아래로 이동하게 하세요)"
  },
  {
    id: "ai464",
    text: "태초에 Patashu가 깨어나 말했습니다..."
  },
  {
    id: "ai465",
    text: "같은 주제를 다룬 삼부작의 네 번째 편입니다. 아직도 여기에 막혀 있다면 처음부터 계속 읽어 주세요."
  },
  {
    id: "ai466",
    text: "매년 열리는 DDoS(분산 서비스 거부) 도전의 시간이 왔습니다. 최고 점수는 인터넷 전역에 공개되어 다른 모든 이가 굴복할 때까지 망신을 줍니다. 세계 지배 열기가 절정에 달한 가운데, 해커 팀들이 인터넷 최상층에 침투해 최고 점수와 신원을 훔치고 모두가 보도록 인터넷에 게시하면서 DDoS 공격은 더 잦고 치명적으로 변하고 있습니다. #BringBackOurTop 점수 체계는 취소되었으며, 다가오는 5시간 업데이트와 함께 더 높은 점수를 위한 새 체계가 도입될 예정입니다."
  },
  {
    id: "ai467",
    text: "새로운 AD 키보드는 혁신 그 자체입니다! 더 커졌을 뿐 아니라 더 깊어져서, 여러분의 클레이너들을 더 오랫동안 즐겁게 해 줍니다. 튼튼한 외계 반물질로 만들었습니다. 이것보다 더 큰 것은 오직 당신뿐입니다."
  },
  {
    id: "ai468",
    text: "What if drinking from a fountain wasn't actually a water feature? (분수에서 물을 마시는 일이 사실 수경 시설의 기능이 아니라면 어떻겠느냐는 말장난)"
  },
  {
    id: "ai469",
    text: "Water is wet, air is dry, and fountain isn't an air feature (물은 젖어 있고 공기는 건조하며 분수는 공기 시설이 아니라는 말장난)"
  },
  {
    id: "ai470",
    text: "제가 어렸을 때는 세상이 달랐다고 생각했습니다."
  },
  {
    id: "ai471",
    text: "이 글을 읽고 있다면, 이는 1) 우리가 존재하며 당신도 존재할 수 있다는 뜻입니다."
  },
  {
    id: "ai472",
    text: "\"My favorite part was the long, long, long read\" -Grumpy Cat (가장 마음에 든 부분은 아주 길고 긴 읽을거리였다는 Grumpy Cat식 평)"
  },
  {
    id: "ai473",
    text: "영원히 타자를 칠 겁니다... 힌트: 엄청 지루할 거예요, 하하."
  },
  {
    id: "ai474",
    text: "정말 독창적인 무언가를 쓰고 싶습니다 <:thonk:>"
  },
  {
    id: "ai475",
    text: "새해에 오신 것을 환영합니다. 자리를 잡고 편히 쉬세요. 잠도 자고, 음식도 먹고, 친구도 사귀고, 발전도 이루며 2019년을 준비하세요."
  },
  {
    id: "ai476",
    text: "바이러스가 거짓말을 하며 퍼질 수 있듯이, TV 프로그램도 거짓말을 하며 퍼질 수 있습니다."
  },
  {
    id: "ai477",
    text: "미래를 볼 수 없다는 사실은 모두 알지만, 이 글을 읽은 곳이 사실은 우리가 알지 못했던 미래라면 어떨까요?"
  },
  {
    id: "ai478",
    text: "이 메시지는 되돌릴 수 없습니다"
  },
  {
    id: "ai479",
    text: "예측을 클릭하자 산산이 무너졌습니다. 당신은 이길 수 없습니다."
  },
  {
    id: "ai480",
    text: "That's a very dark joke Luke (Luke에게 아주 어두운 농담이라고 말하는 Star Wars식 말장난)"
  },
  {
    id: "ai481",
    text: "kajfik은 Too Many Pink Floyd를 보며 자기 자신을 사랑합니다."
  },
  {
    id: "ai482",
    text: "플레이를 끝내야만 집에 갈 수 있습니다"
  },
  {
    id: "ai483",
    text: "\"IP를 무한히 얻을 수 있나요?\" - Lord Sanguino"
  },
  {
    id: "ai484",
    text: "반물질 차원을 제대로 경험하려면 업데이트 주기를 5시간으로 설정해야 합니다."
  },
  {
    id: "ai485",
    text: "게임에 스토리가 없다면 어떨까요? 그, 그게 대체 무슨 뜻이죠? 이해가 안 돼요."
  },
  {
    id: "ai486",
    text: "\"Click here to unlock a secret achievement.\" (when clicked you get Rick rolled) (비밀 도전 과제를 해금하려면 여기를 클릭하세요. 클릭하면 Rickroll 영상이 열립니다.)",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai487",
    text: "한참 전에 이걸 잠금 해제한 줄 알았는데, 아무래도 저장 데이터가 망가졌나 봐요 ㅋㅋ"
  },
  {
    id: "ai488",
    get text() { return `사람들의 상품이 엉터리 옷가게에서 팔리는 모습을 지켜보는 Anti-Fashion Pants의 또 다른 에피소드에 처음 오신 분도, 다시 오신 분도 환영합니다. 이번 주의 주제는... 반레이저입니다. 사람들은 반물질 레이저를 제조하고 사용해 마음대로 반물질 탄환을 쏠 수 있으며, 눈에 들어오는 도시를 완전히 쓸어 버릴 수 있습니다. 사람은 믿을 수 없을 뿐 아니라 물리적으로 이 기술을 사용할 능력도 없으므로, 이는 위험한 능력입니다. 하지만 이 기술은... 10년 동안 분당 ${format(Number.MAX_VALUE, 2)}개의 반물질 탄환을 생산할 수 있습니다. 사람들은 반물질을 사용해 마음대로 반물질 탄환을 발사하여 눈에 들어오는 도시 전체를 몰살할 수도 있습니다.`; }
  },
  {
    id: "ai489",
    text: "Spartacus는 10부로 구성된 여러 장짜리 줄거리를 추가하려 했지만 10차원에 가로막혔습니다."
  },
  {
    id: "ai490",
    text: "9장은 5시간 뒤 추가됩니다."
  },
  {
    id: "ai491",
    text: "가짜 뉴스에서는 아홉 번째 차원이 진짜라고 하고, 가짜 뉴스에서는 아홉 번째 차원이 가짜라고 합니다."
  },
  {
    id: "ai492",
    text: "이게 큰 뉴스인가요? 네. 이게 큰 뉴스인가요? 거의 확실히 아닙니다."
  },
  {
    id: "ai493",
    text: "친절한 제안이니 계속 읽어 주세요."
  },
  {
    id: "ai494",
    text: "If this makes it into the game I'll buy a antitool (이 문구가 게임에 들어가면 반도구를 사겠다는 말장난)"
  },
  {
    id: "ai495",
    text: "Antitool is just negating the gravity of other matter. (반도구는 다른 물질의 중력을 무효화할 뿐이라는 말장난)"
  },
  {
    id: "ai496",
    text: "죄송합니다. 그래픽이 꺼져 있습니다. 이 뉴스를 보는 것은 이번이 마지막입니다. 휴가를 즐겨 주세요."
  },
  {
    id: "ai497",
    text: "반물질 차원에서 승리하는 진짜 비결은..."
  },
  {
    id: "ai498",
    text: "사람들은 Antimatter Dimensions가 차세대 대작이 될 거라고 계속 말했지만, 그러다 모두 블랙홀 속으로 사라졌습니다\""
  },
  {
    id: "ai499",
    text: "뉴스 티커는 제안을 남길 곳이 아닙니다! 대부분의 제안이 표시되는 \"제안\" 탭으로 이동하세요."
  },
  {
    id: "ai500",
    text: "Antimatter Dimensions를 만들려면 먼저 8번째 차원 7개를 모아야 합니다. 그러려면 먼저 차원 보상을 얻고, 그다음 차원을 얻어야 하며, 마침내 반물질을 만들기 시작할 수 있습니다."
  },
  {
    id: "ai501",
    text: "\"첫 비밀 도전 과제 달성 방법\": \"앱을 열고 반물질 더 얻기를 클릭한 다음 제출을 클릭하세요.\""
  },
  {
    id: "ai502",
    text: "저와 Larkam은 무효 물질의 가장자리에 오두막을 짓고 살았습니다. Larkam은 지난주에 죽었고, 이제 우리는 4K로 살고 있습니다. 저는 아직 EMP 재난에서 회복 중이며 손주들을 만나기를 바랍니다."
  },
  {
    id: "ai503",
    text: "새 업데이트 직후에 발견됐으며, Hevi가 Android와 iOS를 모두 지원하는 날에 한 걸음 더 가까워졌습니다"
  },
  {
    id: "ai504",
    text: "I give you the low-ground! (내가 낮은 지대를 주겠다!)"
  },
  {
    id: "ai505",
    text: "아주 오래전 어느 대체 우주에서 반물질 전쟁이 벌어졌습니다. 모든 반물질은 Phaéton 6 제국의 편에 섰습니다. 반물질이 원한 것은 8번째 차원의 낮고 지구와 비슷한 땅뿐이었습니다. 안티 무한이 승리했고 안티 영원이 우위를 점했습니다. 불행히도 안티 영원이 기습 공격으로 전쟁을 시작하면서 세계가 폭발했습니다. 그 여파로 세계의 대지는 갈기갈기 찢어졌습니다. 머나먼 곳의 농민들은 수확을 기다리며 지쳐 갑니다. 또 하나의 종말이 다가오고 있습니다..."
  },
  {
    id: "ai506",
    text: "반물질 유닛은 게임에서 가장 생산적인 유닛입니다. 바로 이 때문에 AD가 여러분이 해 볼 게임 중 가장 재미있습니다."
  },
  {
    id: "ai507",
    text: "\"We can't have nice things.\" - Anti-Bohemian Anti-Rhapsody (“우리에겐 좋은 것이 허락되지 않아.” - 안티 보헤미안 안티 랩소디)"
  },
  {
    id: "ai508",
    text: "We can have anti-mean things and anti-love ones, anti-kids and anti-zombielandos. (우리에겐 안티 못된 것과 안티 사랑스러운 것, 안티 키즈와 안티 좀비랜드가 있습니다.)"
  },
  {
    id: "ai509",
    text: "We have an anti-president and a anti-lawyer, anti-justice and anti-people. (우리에겐 안티 대통령과 안티 변호사, 안티 정의와 안티 사람들이 있습니다.)"
  },
  {
    id: "ai510",
    text: "Top 10 things that will blow your mind: 1) The number 9, 2) The 9th dimension, 3) The infinity chest, and 4) The war on drugs. (충격적인 것 열 가지: 첫째 숫자 아홉, 둘째 아홉 번째 차원, 셋째 무한 상자, 넷째 마약과의 전쟁.)"
  },
  {
    id: "ai511",
    text: "이제 RSS 피드가 작동할 겁니다"
  },
  {
    id: "ai512",
    text: "이제 Android 휴대전화에서 Frostfall을 지원합니다! 근처의 개발자를 이용해 무료 XP를 받으세요."
  },
  {
    id: "ai513",
    text: "저장 파일이 손상되었거나 삭제되었습니다. 반물질 차원 보안 소프트웨어가 자동 업데이트를 비활성화합니다."
  },
  {
    id: "ai514",
    text: "가망이 없을 정도로 멈췄나요? 그냥 최대 버튼을 계속 누르고 계세요."
  },
  {
    id: "ai515",
    text: "Error.java.replicated. Under the control of hevipelle. (복제된 자바 오류. hevipelle의 통제하에 있습니다.)"
  },
  {
    id: "ai516",
    text: "안타깝게도 엔트로피 Hevi가 게임을 종료하기로 했습니다."
  },
  {
    id: "ai517",
    text: "The indie rock band is currently trying to get unreachable by time zones. This may cause inflation of spacetime. (인디 록 밴드가 시간대로는 닿을 수 없는 곳에 가려 하고 있습니다. 이 때문에 시공간이 팽창할 수 있습니다.)"
  },
  {
    id: "ai518",
    text: "다음 뉴스 티커는 시간 단위 5개 후에 나옵니다."
  },
  {
    id: "ai519",
    text: "Oh... hooray! Did you find the last of the anti-boats? (오... 만세! 마지막 안티 보트를 찾았나요?)"
  },
  {
    id: "ai520",
    text: "Don't anti-jokes. they make the game funnier (안티 농담을 막지 마세요. 게임이 더 웃겨지니까요.)"
  },
  {
    id: "ai521",
    text: "I'm gonna use my anti-science background to help me beat Unfair Game Awards. (안티 과학 경력을 활용해 불공정 게임 어워드를 이겨 보겠습니다.)"
  },
  {
    id: "ai522",
    text: "이곳은 안티 세계입니다. 우크라이나도, 러시아도, 중국도 없습니다. 아일랜드도, 아이슬란드도, 스코틀랜드도, 핀란드도, 덴마크도, 스웨덴도, 노르웨이도 어디에도 없습니다. 그리고 프랑스, 독일, 이탈리아, 스페인, 포르투갈이 있습니다... 아, 이 소란은 뭘까요? 왜 이곳이 이렇게 떠들썩할까요? 왜 수도 황무지가 있는 걸까요? 왜 해리 포터와 Steins;Gate가 있는 걸까요? 사람들은 왜 신경 쓸까요? 이것들은 중대한 이야기입니다. 중대한 인물들입니다. 엄청난 뉴스입니다. 진짜 뉴스입니다."
  },
  {
    id: "ai523",
    text: "연구 차원의 현재 재사용 대기시간은 [current tick speed]입니다. 다음 업데이트 때 [time]까지 연장될 수 있습니다."
  },
  {
    id: "ai524",
    get text() { return `"도와주세요, 평생 추락할 운명입니다" (클립 ${format(Number.MAX_VALUE, 2)}개 필요)`; }
  },
  {
    id: "ai525",
    text: "끝은 어디에 있을까요? 미래에는 없습니다. 0.1초도 안 돼 끝에 도달하는 방법을 보여 드리겠습니다."
  },
  {
    id: "ai526",
    text: "여러분이 이 뉴스 티커를 볼 수 없다는 사실을 증명하겠습니다."
  },
  {
    id: "ai527",
    text: "아직도 이 게임을 하는 사람이 있을까요?"
  },
  {
    id: "ai528",
    text: "Why would anyone play this? Just for the lols? (누가 이걸 왜 플레이하겠어요? 그냥 웃자고요?)"
  },
  {
    id: "ai529",
    text: "Emoji is said to be America's new measuring system for everything. What does this mean for us? We don't know. But we will know in 5 hours. (이모지가 미국의 새로운 만능 측정 체계라고 합니다. 이것이 우리에게 어떤 의미일까요? 아직은 모릅니다. 하지만 다섯 시간 후에는 알게 될 겁니다.)"
  },
  {
    id: "ai530",
    text: "\"I'll have 2 antimatter pizzas, an antimatter pie, an antimatter cupcake and an antimatter cookie. What do you eat there?\" - Tony Stark (“반물질 피자 두 판, 반물질 파이, 반물질 컵케이크와 반물질 쿠키를 주세요. 거기서는 뭘 먹나요?” - Tony Stark)"
  },
  {
    id: "ai531",
    text: "i called the news ticker \"the freshman chapel\" because freshman don't get baptized (신입생은 세례를 받지 않아서 뉴스 티커를 “신입생 예배당”이라고 불렀습니다.)"
  },
  {
    id: "ai532",
    text: "One matter, two antimatter, fry 'em till they're golden and crisp and aromatic- then remove the golden axles and drain the golden syrup and add the golden syrup to the antimatter batter. (물질 하나, 반물질 둘을 노릇하고 바삭하며 향긋해질 때까지 튀긴 뒤, 황금 축을 빼고 황금 시럽을 따라 반물질 반죽에 넣으세요.)"
  },
  {
    id: "ai533",
    text: "이제 독자인 당신은 자신도 모르게 정신 나간 사람의 영역에 들어왔습니다. 이 경험에서 살아남든 아니든, 살아남는 법과 내면의 빛을 찾는 법, 그 너머에 무엇이 있는지를 알려 준 제게 빚을 지게 될 겁니다. 그 너머의 이야기는 또 다른 이야기입니다."
  },
  {
    id: "ai534",
    text: "조심스러운 독자여, 이 뉴스 티커에는 지난번에 관한 중대한 스포일러가 들어 있습니다. 당신은"
  },
  {
    id: "ai535",
    text: "anti-anti-kajfik is happy his girlfriend is happy (안티 안티 Kajfik은 여자 친구가 행복해서 행복합니다.)"
  },
  {
    id: "ai536",
    text: "i dont think he can add 1 more hour to the news ticker... unless? (뉴스 티커에 한 시간을 더 추가할 수는 없을 것 같은데... 설마?)"
  },
  {
    id: "ai537",
    text: "Imagine sitting on your toilet and suddenly you have to sit down. (변기에 앉아 있는데 갑자기 앉아야 하는 상황을 상상해 보세요.)"
  },
  {
    id: "ai538",
    text: "Once upon a time, there was a matter of a certain antimatter. Some say that it was a matter of honor, others say that it was a matter of usage. All we know is that it ended up in a war, and we the people that were there that fought it died. The war was won, and we the living died soon after. The matter was said to have won, though our leaders refused to talk about it. Instead, they kept everything locked away, the war never to be discussed again. (옛날 옛적 어떤 반물질을 둘러싼 문제가 있었고, 명예의 문제 또는 사용법의 문제였다고 합니다. 결국 전쟁으로 번져 싸운 이들은 죽었고 물질이 승리했다고 전해지지만, 지도자들은 모든 것을 봉인하고 다시는 말하지 않았습니다.)"
  },
  {
    id: "ai539",
    text: "이 게임은 숫자를 키우는 게임이 아닙니다. 클립을 더 적게 얻는 게임입니다. 보유한 클립의 수는 숫자일 뿐이며, 게임은 여러분이 그 사실을 알아내길 바라지 않습니다. 게임 오버, 게임 오버."
  },
  {
    id: "ai540",
    text: "설정이요? 아, 그냥 글자일 뿐입니다."
  },
  {
    id: "ai541",
    text: "게임을 끄고 더 안전하고 멀쩡한 게임을 하러 가시길 친절히 권해 드립니다."
  },
  {
    id: "ai542",
    text: "감마선이 점점 더 위험해지고 있습니다"
  },
  {
    id: "ai543",
    text: "According to all known laws of physics, there is no way that you can manipulate the game more than 10 times in a row. Stop. Just stop. Your mad. (알려진 모든 물리 법칙에 따르면 게임을 열 번 넘게 연속으로 조작하는 것은 불가능합니다. 그만하세요. 그냥 그만하세요. 미쳤군요.)"
  },
  {
    id: "ai544",
    text: "더 이상 뉴스가 없습니다."
  },
  {
    id: "ai545",
    text: "\"So this is what science is like\"- someone who has never heard of Kurt Somebody (“과학이란 이런 거구나” - Kurt Somebody를 들어 본 적 없는 사람)"
  },
  {
    id: "aim546",
    text: "\"이 거지 같은 농담들을 이해하고 싶다면 신학을 제대로 공부해야 합니다. 수학은 죄악입니다.\" -겁에 질린 사람"
  },
  {
    id: "ai547",
    text: "있잖아요, 기적을 바라며 기도했더니 제9차원에서 강화를 받았습니다."
  },
  {
    id: "ai548",
    text: "Here is a list of the top meme's of all time: https://www.youtube.com/watch?v=uCP44Q37YHAQ (역대 최고의 밈 목록입니다.)"
  },
  {
    id: "ai549",
    text: "All meta-memes are bad memes. (모든 메타 밈은 나쁜 밈입니다.)"
  },
  {
    id: "ai550",
    text: "왼쪽에는 새로운 \"안티 코인\"이 보입니다. 막대한 강화 효과를 포함한 모든 강화를 무효화할 수 있습니다. 오른쪽에는 새로 나온 \"안티 선물\"도 보입니다. 어디서든 찾아볼 수 있는 가장 강력한 강화 효과 중 일부입니다."
  },
  {
    id: "ai551",
    text: "당신은 언제나 눈에 띄겠지만, 절대 같은 장소에서는 아닐 겁니다."
  },
  {
    id: "ai552",
    text: "If you stare long enough at the ticker, the pixels will start moving backwards. THIS DOESN'T MEAN IT ACTUALLY STUCK (티커를 오래 바라보면 픽셀이 뒤로 움직이기 시작합니다. 그렇다고 실제로 멈춘 건 아닙니다.)"
  },
  {
    id: "ai553",
    text: "9번째 차원이 다시 태어날 때가 왔습니다. 참가자는 모두 \"현실은 환상이고, 무한은 홀로그램이며, 무한은 환상이고, 영원은 홀로그램이며, 영원하기에는 너무 짧고, 음의 차원은 허용되지 않는다고 적힌 종이 한 장을 받습니다."
  },
  {
    id: "ai554",
    text: "이것 좀 보세요. 제9차원이 방금 개편되어 이제 제8차원까지 생산합니다! 수학을 조금만 손보면 이런 일이 가능할 줄 누가 알았을까요?"
  },
  {
    id: "ai555",
    text: "뉴스 티커에서 이 소식을 본 뒤로 줄곧 이 장면이 머릿속에 떠올랐습니다"
  },
  {
    id: "ai556",
    text: "\"I always wanted to play the anti-meta-game. But, alas, you can't\" - many a time (“언제나 안티 메타 게임을 하고 싶었지만, 안타깝게도 그럴 수 없어.” - 여러 번)"
  },
  {
    id: "ai557",
    text: "젠장, 방금 티커에 뉴스 티커 제안을 두 개 올렸는데 그중 하나가 뉴스에 나왔어요!"
  },
  {
    id: "ai558",
    text: "반물질 무생물을 무엇이라고 부를까요? 공기, 땅, 물, 불입니다. 공기 물체는 안티 대기와 안티 지구가 만날 때 만들어지는 물체입니다. 물, 땅, 불은 네 가지 기본 덕목입니다. 공기 물체는 안티 대기와 안티 지구가 충돌할 때 만들어지는 물체입니다."
  },
  {
    id: "ai559",
    text: "이 글을 읽고 있다면 아홉 목숨이라는 뜻입니다. 하나는 당신을 자유롭게 하고, 다른 하나는 자유로워지지 못하게 합니다."
  },
  {
    id: "ai560",
    text: "The ninth dimension makes the sixth family happy. The fifth lives in shame. (아홉 번째 차원은 여섯 번째 가족을 행복하게 하고, 다섯 번째는 수치 속에 살아갑니다.)"
  },
  {
    id: "ai561",
    text: "me: making news about beer pong, hevi: balancing two icebergs, *barkeeper: oh god, is he dead yet?* (나: 비어퐁 뉴스를 만드는 중, Hevi: 빙산 두 개의 균형을 맞추는 중, *바텐더: 맙소사, 아직도 안 죽었어?*)"
  },
  {
    id: "ai562",
    text: "이걸 보지 말아 주세요. 감사합니다."
  },
  {
    id: "ai563",
    text: "정말 다음 업데이트가 아닌가요? 그저 폭발하고 싶어 하는 이상한 바이러스가 아닌가요? 여러분이 미쳤다는 황당한 발상이 아닌가요? 하하, 사랑합니다."
  },
  {
    id: "ai564",
    text: "잠깐, 모바일 버전이 있다고요?!"
  },
  {
    id: "ai565",
    text: "오? 제가 어떻게 생겼는지 궁금한가요? 이건 뉴스 티커가 맞는 것 같은데요? 잘 들어 보세요. 다음 업데이트가 다섯 시간 뒤에 나온다는 제보가 들어오고 있습니다. 또한 어떤 운송 장치 같은 일이 벌어지는 듯하니, 만약 당신이 그것들과 같은 편에 있다면"
  },
  {
    id: "ai566",
    text: "좋아요, 알겠습니다. 주변의 안티 물질이 상상할 수 없는 규모로 계속 쌓이고, 무엇이 만들어졌는지는 신조차 모를 만큼 반물질 더미가 높아져 지쳤군요. 그렇다면 이 안티 청결 문제의 해결책은 무엇일까요? 존재의 평면입니다. 물질을 생산하는 1번째 평면, 1번째 평면을 생산하는 2번째 평면, 2번째 평면을 생산하는 3번째 평면입니다. 각각에는 안티 한계가 있어 존재의 평면이 만들어질 때마다 작으면서도 큰 양의 반물질을 생산합니다. 그 결과 동쪽에는 거대한 안티 무한의 섬이, 서쪽에는 거대한 안티 현실의 섬이 생깁니다."
  },
  {
    id: "ai567",
    text: "그런 이야기가 아닙니다. 잘못 이해하고 있어요. 이 게임은 프레스티지 단계의 발전을 가속하는 방법에 관한 게임입니다. 가속은 품질이 아니라 생산의 요소입니다."
  },
  {
    id: "ai568",
    text: "프레스티지 단계 5개를 진행하려면 여기를 클릭하세요"
  },
  {
    id: "ai569",
    text: "I am actually good at making jokes. Fail safe antimatter. (사실 저는 농담을 잘 만듭니다. 실패 안전 반물질입니다.)"
  },
  {
    id: "ai570",
    text: "이 글을 끝까지 쓰기에는 보수가 부족합니다."
  },
  {
    id: "ai571",
    text: "영원한 자들은 제한된 시간 동안 수동적으로 행동하는 위험을 감수해야 합니다. 위험을 성공적으로 감수하고 나면 몸 상태가 좋지 않습니다."
  },
  {
    id: "ai572",
    text: "영원은 마지막 단계입니다. 여기서 더 나아갈 수 없습니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai573",
    text: "비트코인 게임에 오신 것을 환영합니다."
  },
  {
    id: "ai574",
    text: "새로운 음모론 웹사이트가 제9차원을 논의하는 모습을 담은 영상을 방금 공개했습니다. 이들은 이어 제9차원에 영혼을 팔고 행복해졌다는 농담을 했습니다."
  },
  {
    id: "ai575",
    text: "9번째 차원이 출시되면 이전에 자동화됐던 모든 직업이 자동화되고, 모두가 무역·생산·소득 성장으로 보수를 받게 됩니다. 또한 채굴, 건설, 반물질 처치처럼 현재 사람들이 수행하는 많은 작업을 자동화할 수 있습니다. 이제 삶의 거의 모든 측면을 자동화할 수 있으므로 자동화의 거대한 도약입니다."
  },
  {
    id: "ai576",
    text: "뉴스 티커의 행복도가 6.66e69로 증가했습니다"
  },
  {
    id: "aim577",
    text: "싫어하는 사람들은 이걸 보면 열받을 겁니다"
  },
  {
    id: "ai578",
    text: "간호사님, 저는 어젯밤의 반물질과 물질 때문에 혼수상태입니다.\" 왜 혼수상태인가요? \"그 모든 반물질 때문입니다."
  },
  {
    id: "ai579",
    text: "대기하면서 시키는 대로 하세요. 전혀 예상하지 못한 순간에 반물질이 당신을 찾아올 겁니다."
  },
  {
    id: "ai580",
    text: "\"It is widely acknowledged that not enough antimatter is in primordial soup, hence the name 'antimatter soup'\" - old fisherman (“원시 수프에는 반물질이 충분하지 않아서 '반물질 수프'라고 부른다는 사실이 널리 알려져 있지.” - 늙은 어부)"
  },
  {
    id: "ai581",
    text: "뉴스 티커가... 전혀 움직이지 않습니다. 화살표를 어떻게 움직일까요? 아주 간단합니다. 왼쪽 엄지로 다이얼을 돌려 화살표가 위를 가리키게 하세요. 이제 무한에 도달하려면 다이얼을 시계 방향으로, 영원히 이어지는 영원에 도달하려면 반시계 방향으로 돌리세요."
  },
  {
    id: "ai582",
    text: "If the universe is expanding, then the entire universe must be expanding, which means that body cannot sit. (우주가 팽창한다면 온 우주가 팽창하는 것이므로, 그 몸은 앉을 수 없습니다.)"
  },
  {
    id: "aim583",
    text: "Feminism is not a philosophy, but a whole hell of a lot of men (페미니즘은 철학이 아니라 엄청나게 많은 남자들입니다.)"
  },
  {
    id: "ai584",
    text: "With all this talk about anti-weights and anti-matter, why on earth do we still use them for anything? (안티 무게와 안티 물질 이야기가 이렇게 많은데, 대체 왜 아직도 어디에든 사용하는 걸까요?)"
  },
  {
    id: "ai585",
    text: "체중이 줄자 Hevi가 \"이런, 뭔가 잘못됐어\"라고 말합니다"
  },
  {
    id: "ai586",
    text: "\"다들 반물질 머핀 먹어 본 적 있어요? 분명 반물질 맛이 났을 텐데요.\" - Hevipelle"
  },
  {
    id: "ai587",
    text: "뉴스 티커는 반물질 차원을 최대한 즐기는 방법을 알려 주는 안내서인 줄 알았는데, 이제 알아볼 수 없을 정도로 뒤틀렸네요..."
  },
  {
    id: "ai588",
    text: "우리는 밤에 복제자를 바라보며 실제로 자부심을 느낄 수 있습니다. Ridley Scott의 저평가된 걸작 Alien이 한 예입니다. 또 다른 예는 제작에 거의 30년을 쏟은 반물질 Steven Spielberg의 삶입니다. 이 주제를 마지막으로 다룬 감독은 Roman Polanski입니다. 그는 자신이 감독한 Polanski 영화 Pius 때문에 Roman의 명성뿐 아니라 우리의 명성까지 망쳤습니다. 그의 미완성 영화 Eternal Sunshine of the Antimatter Planet의 사본 수천 개가 속편을 만들려는 사람들의 눈앞에서 불탔고 비극적인 결과를 낳았습니다. 그 미완성 영화의 사본 수천 개도 파괴됐습니다. 존재하기나 한다면 그 속편의 제작비는 엄청나게 높습니다. 50년도 더 지난 지금조차 얼마나 잘될지는 정확히 모릅니다. 하지만 분명 손해는 없을 겁니다."
  },
  {
    id: "ai589",
    text: "여러분이 겪었을 문제를 해결하기 위해 반물질 차원 클라이언트를 업데이트했습니다. 토글 문제가 해결되었습니다."
  },
  {
    id: "ai590",
    text: "복제자를 생산할 복제자 공장을 건설하세요. 그러면 세상에서 가장 행복한 Hevipelle인 오메가 Hevipelle가 탄생합니다."
  },
  {
    id: "ai591",
    text: "Max, 같이 해가 지는 거 보러 갈래?"
  },
  {
    id: "ai592",
    text: "손가락을 움직이지 않는다면 얼어붙은 겁니다."
  },
  {
    id: "ai593",
    text: "Max, 난 정말 널 사랑해."
  },
  {
    id: "ai594",
    text: "Hevipelle도 잠을 잘까요?"
  },
  {
    id: "ai595",
    text: "\"Its' not my turn on the XM80,\" says Mike from the 9th dimension as he runs across the 8th dimension to get a piece of the action for himself. (“그 장비를 쓸 차례가 아니야.” 아홉 번째 차원의 Mike가 한몫 끼려고 여덟 번째 차원을 가로질러 달리며 말합니다.)"
  },
  {
    id: "ai596",
    text: "이 글을 읽고 있다면 당신은 제 꿈도 읽을 수 있다는 뜻입니다"
  },
  {
    id: "ai597",
    text: "With the advent of time, everything that was once great has fallen into our lap. And with its hevi-rigged clock, it's our turn to up the trash. (시간이 도래하면서 한때 위대했던 모든 것이 우리 손에 떨어졌습니다. Hevi식으로 조작된 시계와 함께 이제 우리가 쓰레기를 끌어올릴 차례입니다.)"
  },
  {
    id: "ai598",
    text: "제9차원은 스케이트보더가 우리에게서 훔쳐 갔기 때문에 존재하지 않습니다"
  },
  {
    id: "ai599",
    text: "보유한 반물질은 ... 8.9개입니다. 오타가 아닙니다."
  },
  {
    id: "ai600",
    text: "와, 드디어 게임 밸런스가 맞네요! 가끔 복제자도 확인하러 가야겠습니다."
  },
  {
    id: "ai601",
    text: "하하! 내가 네 뉴스 티커에 말을 너무 많이 넣었다고 생각하겠지만, 리얼리티는 그래도 다가오고 있어."
  },
  {
    id: "ai602",
    text: "도움이 오고 있어요! 다들 도와주세요, 늦겠어요. Hevi가 타키온 입자를 숨기고 있어요!"
  },
  {
    id: "ai603",
    text: "\"I don't know about you but my favorite number is 22, it's just so great! It's the number of hours since I met your M heretics. (당신은 어떤지 몰라도 제가 가장 좋아하는 수는 스물둘입니다. 정말 멋지죠! 당신의 M 이단자들을 만난 뒤 지난 시간과 같은 수입니다.)"
  },
  {
    id: "ai604",
    text: "새로운 종류의 반물질이 발견되었습니다. 바로 \"반물질-반물질\"입니다. 개발진에 따르면 순도 99.999%의 반물질이라고 합니다."
  },
  {
    id: "ai605",
    text: "방금 9번째 차원을 얻는 비결을 알아냈습니다..."
  },
  {
    id: "ai606",
    text: "지금 이용하는 교통수단이 조금... 믿을 수 없게 되어 간다는 걸 알아챘습니다. 제가 고칠 수 있을지, 아니면 누군가 고칠 수나 있을지 모르겠습니다. 차 안에 갇혔는데 아무도 고칠 수 없는 것 같습니다. 경찰에 전화했더니 차 안에 한 시간까지는 머물 수 있지만 그러면 다음 24시간 동안 그 안에 갇히게 된다고 했습니다. 빠져나갈 방법이 있을까요? 모르겠습니다. 저는 여기에 갇혀"
  },
  {
    id: "ai607",
    text: "이번 Antimatter Dimensions 에피소드에서는 -5시간 뒤에 출시될 완전히 새로운 게임을 소개합니다! 완전 무료 RPG입니다! 명령어가 3,000개 넘게 들어 있으며, 뛰어난 실력을 갖춘 사람들이 제작하고 있습니다. 놀라운 이야기를 담았고, 가진 것을 최대한 활용해야 했던 사람들이 만들었습니다. 충족해야 할 설정이 있으며 잠재력도 무궁무진합니다!"
  },
  {
    id: "ai608",
    text: "JavaScript는 새로운 HTML이고, HTML은 새로운 JavaScript입니다."
  },
  {
    id: "ai609",
    text: "\"The next twist in the Antimatter Universe is in the air! Get ready for some big Crunch! (When clicked the game disconnects for 5 seconds) (반물질 우주의 다음 반전이 다가옵니다! 거대한 크런치를 준비하세요! 클릭하면 게임 연결이 다섯 초 동안 끊깁니다.)"
  },
  {
    id: "ai610",
    text: "반물질을 믿는 사람들이 언론을 장악하고 혁명을 추진하고 있습니다. 이들은 스스로를 Ant-Men이라고 부르며 십 대 소년들로 이루어져 있습니다. 자신들이 사람들의 수호자이자 Hevi에게 선택받은 존재라고 믿습니다. Hevi에게 선택받았으며 언젠가 우주의 균형을 되찾을 것이라고 주장합니다. 지도자는 Logan Fisk라는 소년입니다. 성공한 변호사의 아들이자 창립자입니다."
  },
  {
    id: "ai611",
    text: "그는 새 우주선을 살 형편이 안 돼서 대신 새로 만들었다고 합니다."
  },
  {
    id: "ai612",
    text: "Hevipelle의 첫 번째 임무는 게임을 가능한 한 균형 있게 만드는 것입니다. 무슨 일이 있어도, 숫자가 아무리 커도, 일이 아무리 사소해도, 결과가 아무리 완벽해도, 발상이 아무리 완벽해도, 아무리 완벽한"
  },
  {
    id: "ai613",
    text: "추가 목표액 $4.5 billion을 달성할 수 있을지 궁금하네요."
  },
  {
    id: "ai614",
    text: "저는 제 프로젝트를 영업 비밀이라고 생각하는 편입니다. 그러면 누군가 프로젝트를 이해하고 싶어 할 때 그것이 다른 사람에게 쓸모 있을 수 있다는 사실을 처음 알아챈 사람이 제가 아니게 됩니다."
  },
  {
    id: "ai615",
    text: "여러분은 어떨지 모르겠지만 제가 가장 좋아하는 뉴스 형식은 인포그래픽입니다. 아름답고 유익하며, 제가 정말 흥미롭게 보는 유일한 뉴스 형식이죠."
  },
  {
    id: "ai616",
    get text() { return `최근 강연에서 Yann LeCun은 "새로운 통화가 탄생했다"고 말했습니다. 새로운 통화의 통화인 Antimeta의 첫 번째 형태입니다. 이름은 BTC이며 1과 ${format(Number.MAX_VALUE, 2)}의 차이입니다. 비트코인 하나는 ${format(Number.MAX_VALUE, 2)} BTC보다 많이 교환할 수 없으므로 돈을 잃기 쉽습니다.`; }
  },
  {
    id: "ai617",
    text: "전 너무 가난해서 그가 제게 빚진 금액의 십 분의 일조차 감당할 수 없어요."
  },
  {
    id: "ai618",
    text: "뉴스 티커를 만드는 대신, 뉴스 티커를 만드는 뉴스 티커를 만들 수 있다면 어떨까요?"
  },
  {
    id: "ai619",
    text: "사실 첫 번째 차원이 사기였고 여러분은 차원 가속을 열려고 EP를 전부 써 버렸다고 말한다면 어떨까요?",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai620",
    text: "이번 업데이트와 이전 업데이트의 가장 큰 차이는 스프라이트의 양입니다."
  },
  {
    id: "ai621",
    text: "죽순은 대나무에서 자랍니다. 알로하."
  },
  {
    id: "ai622",
    text: "나는 왕 중의 왕이며 모든 기록을 깨고 모든 신화를 산산조각 낼 수 있습니다. 하지만 너무 많고 저마다 대가가 있어 전부 깨뜨릴 수는 없습니다. 5e12는 판매된 노동 시간의 세계 기록을 깨 법의 수배를 받는 최고 수배자입니다. 그들이 낭비한 노동 시간마다 플레이어에게서 5e10을 받고 있습니다."
  },
  {
    id: "ai623",
    text: "한 연구진이 일반 물질을 반물질로 변환하고, 그 반물질로 더 많은 반물질을 만드는 장치를 개발했습니다. 이 장치의 출력은 200 mA이며 초당 반 그램의 반물질을 생산합니다."
  },
  {
    id: "ai624",
    text: "9번째 차원 이야기를 듣고 싶지 않은 분께 말씀드립니다. 그건 여러분의 문제가 아닙니다. 9번째 차원은 존재하지 않으니까요."
  },
  {
    id: "ai625",
    text: "AD 사상 처음으로 한 주가 일요일에 시작합니다!"
  },
  {
    id: "ai626",
    text: "이것은 \"내 이름은 Hevipelle\"와 \"나는 Minecraft의 제작자다\"라는 두 사람의 이야기입니다. 그들은 당신과 같은 세계에 살고 당신과 같은 자유를 누립니다. 어느 차원에든 갈 수 있고 자신의 세계와 그 안의 모든 것을 어느 차원으로든 바꿀 수 있습니다. 은하를 사서 가져올 수는 있지만, 메시지에 은하를 담아 보낼 수 없으니 큰 도움은 되지 않습니다."
  },
  {
    id: "ai627",
    get text() { return `이 모드는 클릭하면 현재 도전과제를 모두 비활성화하는 메시지를 추가합니다. 또한 새로운 도전과제도 추가합니다. 반물질 ${format(Number.MAX_VALUE, 2)}에 도달했으며, 단 한 번도 클릭당하지 않았습니다.`; }
  },
  {
    id: "ai628",
    text: "반태평양 어딘가에서 거대한 팔이 회전하고 있습니다"
  },
  {
    id: "ai629",
    text: "Cosmic Cutlass 출시에 이어 Antimatter Dimensions 롤플레잉 게임의 출시가 임박했음을 기쁜 마음으로 알려 드립니다!"
  },
  {
    id: "ai630",
    text: "무한 차원을 실제로 갖는 것보다 더 쓸모없는 유일한 일은 주머니에 무한 차원을 넣고 다니는 것입니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai631",
    text: "한 남자가 대도시의 해자에 빠졌습니다. 시민들에 따르면 해자는 내산성 물질로 가득하며, 책임자들은 대부분 산으로 이루어져 있어 산의 영향에 상당히 강하다고 합니다."
  },
  {
    id: "ai632",
    text: "이곳은 반물질을 사고파는 곳입니다. (여기서 반물질을 사고팔 수 있지만, 판매에는 시간이 걸리고 소정의 통행료를 내야 합니다.)"
  },
  {
    id: "ai633",
    text: "I'm not sure if it's due to the 4th wall being in the 5th dimension or the 9th dimension not existing, but in either case, anti-screw it, we're broke, and you can take it. (네 번째 벽이 다섯 번째 차원에 있어서인지 아홉 번째 차원이 존재하지 않아서인지는 모르겠지만, 어느 쪽이든 안티 될 대로 돼라, 우리는 빈털터리니 가져가세요.)"
  },
  {
    id: "ai634",
    text: "역사를 만들 기회입니다. 게임에서 이기세요. 게임에서 지세요. 아주 간단합니다. 앱을 열면 카운트다운이 나타나고, 오래 플레이할수록 타이머가 더 빠르게 움직입니다. 하지만 타이머가 끝나면 승리합니다. 당신은 역사의 일부가 됐습니다. 1 Billion EP(십억 EP)에 도달한 최초의 사람이 되기까지 한 걸음 남았습니다. 세 가지 방법 중 하나로 이길 수 있습니다. 1. 첫 번째 차원을 연속으로 포기해야 합니다. 2",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai635",
    text: "새로운 종류의 인간형 존재인 \"인공 인간\"이 발견되었습니다. 이들은 반물질을 생성할 수 있어 매우 위험합니다. 몸 전체가 반물질로 이루어져 있으며 막대한 양의 반물질을 만들어 낼 힘이 있지만, 제한된 시간 동안만 가능합니다."
  },
  {
    id: "ai636",
    text: "우주에서 가장 강력하고 지구에서 가장 아름다운 것은 여러분의 뇌입니다. 뇌는 다이아몬드와 같으며, 다이아몬드가 필요한 만큼이나 뇌도 필요 없습니다."
  },
  {
    id: "ai637",
    get text() { return `AD 서버에서 이 글을 읽고 있다면 "물질" 도전과제에는 신경 쓰지 않는 편이 좋습니다. 진심으로, 대체 뭘 하고 있다고 생각했나요? 그 도전과제는 가짜이며 "너는 벌레다" 도전과제가 없었다면 존재하지도 않았을 겁니다. 그것은 벌레 도전과제로, 뉴스 티커를 ${format(Number.MAX_VALUE, 2)}개 읽을 때마다 하나씩 얻습니다.`; }
  },
  {
    id: "ai638",
    text: "우리 모두 9개의 차원에 관해서는 들어 봤지만, 다중 우주의 다차원적 차원은 어떨까요?"
  },
  {
    id: "ai639",
    text: "이 게임의 목표는 가능한 한 많은 반물질을 얻는 것입니다."
  },
  {
    id: "ai640",
    text: "뉴스 티커의 가장 좋은 점은 적절한 뉴스가 일어나기를 기다리는 것입니다. 지구를 아슬아슬하게 비껴간 운석이든, 타임라인의 망각 속으로 길을 찾아간 뉴스 티커든, 수년 동안 안티 진공에 있던 종단 속도를 뜯어낸 뉴스 티커든 말입니다."
  },
  {
    id: "ai641",
    text: "한 남자가 \"가짜\" 메시지가 달린 \"나무\"를 심은 혐의로 체포됐다고 경찰이 밝혔습니다."
  },
  {
    id: "ai642",
    get text() { return `왜 이 게임은 반물질을 ${format(Number.MAX_VALUE, 2)}만큼 얻었을 때 그냥 [REDACTED] 하나를 주지 않는지 모르겠습니다.`; }
  },
  {
    id: "ai643",
    text: "카메라의 무한 미터에 대한 코사인을 추적하기 어려워하는 사람들이 있습니다. 저도 그중 하나입니다."
  },
  {
    id: "ai644",
    text: "뉴스가 얼마나 나쁜지 알려 주는 뉴스 티커를 만들려 했지만, 뉴스 티커를 만드는 데는 너무 많은 노력이 들고 결국 여러 사람이 끊임없이 뉴스 티커만 만들게 된다는 걸 깨달았습니다. 그래서 대신 뉴스가 얼마나 좋은지 알려 주는 뉴스 티커를 만들겠습니다. 다만 좋은 뉴스를 보려면 뉴스 안에 있는 티커를 클릭해야 합니다."
  },
  {
    id: "ai645",
    text: "다음 업데이트는 2시간 뒤에 나옵니다."
  },
  {
    id: "ai646",
    text: "9번째 차원은 그저 사기일 뿐이니 모두 8번째 차원에서 소식을 받아야 한다고 말하려던 참이었습니다"
  },
  {
    id: "ai647",
    text: "우리의 영웅 Antimatter Dimensions가 심각한 재정난에 빠져 청구서를 내려면 여러분의 도움이 필요합니다. 그를 도우려면 Hevipelle의 양전자 기금에 현금을 조금 기부해 주세요. 그에게 필요한 것은 여러분의 반물질 5%뿐이며, 기금에 반물질 5%를 기부해야 합니다. 그러면 그는 번 돈을 모두 챙겨 마음껏 써 버릴 수 있습니다."
  },
  {
    id: "ai648",
    text: "The Landfall of Slabdrill (Slabdrill의 상륙)"
  },
  {
    id: "ai649",
    text: "그건 불가능합니다. 물질이 무한히 많아도 반물질을 만들 에너지는 부족할 테니까요. 그래서 처음부터 물질이 1.7배밖에 없는 겁니다."
  },
  {
    id: "ai650",
    text: "이번 출시와 함께 2017년의 마지막 업데이트를 기쁜 마음으로 선보입니다."
  },
  {
    id: "ai651",
    text: "여러분에게는 무한한 양의 반물질이 있습니다. 하지만 그것을 한 바퀴의 1/8만큼 회전할 수 있다면 어떨까요?"
  },
  {
    id: "ai652",
    text: "최근 제보 몇 가지를 해결하는 새 업데이트를 지금 이용할 수 있습니다:"
  },
  {
    id: "ai653",
    text: "The name \"antimatter dimensions\" is a play on words with dimensions, two opposite things, like matter and antimatter. \"Dimension\" is another word, with the same meaning. (“반물질 차원”이라는 이름은 물질과 반물질처럼 서로 반대되는 두 가지와 차원을 엮은 말장난입니다. “차원”은 같은 뜻을 지닌 또 다른 단어입니다.)"
  },
  {
    id: "ai654",
    text: "게임에서 아바타를 연결하는 비용은 무한 차원을 얻으면 올라갑니다.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai655",
    text: "말할 것도 없이 Hevi는 자신이 한때 노예로 삼았던 사람들을 신경 쓰지 않습니다. 그는 조종의 달인이자 변장의 달인이며 말로 사람을 조종하는 달인입니다. 갈취, 심리전, 변장, 협박의 전문가이며 웹의 달인입니다. 노련한 전략가이자 조직가이며 홍보의 달인이고 짧고 강렬한 발언의 전문가입니다. 조직의 달인이자 사람을 조종하는 달인입니다. 그는."
  },
  {
    id: "ai656",
    text: "옛날처럼 점진적으로 진행해 플레이어들 사이에서 신이 되는 길을 나아갈 수 있습니다."
  },
  {
    id: "ai657",
    text: "태초에 Hevi는 혼자였습니다. Hevi는 게임에 추가하고 싶은 수많은 것을 생각했습니다."
  },
  {
    id: "ai658",
    text: "자신의 호흡을 의식해 보세요. 지금 숨을 들이쉬는 것 같나요, 내쉬는 것 같나요?"
  },
  {
    id: "ai659",
    text: "I just want to say that you should stop with those \"you can reach infinity in e300ms, but it costs e300$  what is e300$ ?\" jokes. Those are pathetic. You should give up and learn the hard way that it's much more efficient to just not play in such a pathetic state. Then you can go back to being a humble programmer and dedicate yourself to being a good person. (“엄청 짧은 시간에 무한에 도달하지만 엄청난 돈이 든다”는 식의 농담은 이제 그만하세요. 한심한 상태로 플레이하지 않는 편이 훨씬 효율적이라는 사실을 힘들게 배우고, 겸손한 프로그래머로 돌아가 좋은 사람이 되는 데 전념하세요.)"
  },
  {
    id: "ai660",
    text: "개발자라면 Antimatter Dimensions의 개발 진행 상황을 정기적으로 전달받게 됩니다."
  },
  {
    id: "ai661",
    text: "Take a moment to thank the gods of reddit for having saved your bacon. (당신을 위기에서 구해 준 Reddit의 신들에게 잠시 감사하세요.)"
  },
  {
    id: "ai662",
    text: "Hello everyone, I'm the guy responsible for the big, bad news ticker, and I'm afraid that I'm about to get my own show. It's gonna be called Antimatter Dimensions. It's gonna be like Antime, except with less antimatter, and with worse puns. It's gonna be like Antimatter Dimensions except with worse jokes. (안녕하세요, 저는 이 크고 못된 뉴스 티커의 책임자이며 곧 제 방송을 맡게 될 것 같습니다. 이름은 Antimatter Dimensions입니다. 반물질은 더 적고 말장난은 더 형편없는 Antime 같은 방송, 즉 농담이 더 형편없는 Antimatter Dimensions가 될 겁니다.)"
  },
  {
    id: "ai663",
    text: "지금까지 Batman이나 Superman이 등장하는 뉴스 티커를 많이 봤으니 어느 쪽인지 짐작했을 겁니다. 모두 멋진 수수께끼를 좋아하죠? 이제 수수께끼의 답을 맞혀 역사의 일부가 될 차례입니다."
  },
  {
    id: "ai664",
    text: "이 문장을 읽고 있다면, 아마 읽지 말았어야 할 겁니다."
  },
  {
    id: "ai665",
    text: "뉴스 티커 문구를 제안할 때 가장 좋은 점은 사람들이 그것을 본 뒤 어떻게 생각하는지 알아보는 것입니다."
  },
  {
    id: "ai666",
    text: "최신 과학 동향을 잘 따라가고 계신가요?"
  },
  {
    id: "ai667",
    text: "지난 몇 시간 동안 반물질은 자체 군대를 만들었습니다. 그들은 스스로를 [REDACTED] 군대라고 불렀습니다. 주된 목표는 [REDACTED]을 물질 차원으로 밀어내는 것이었지만, [REDACTED] 군대는 [REDACTED]을 물질 쪽으로 밀면 반물질이 [REDACTED] 쪽으로 끌려가 소멸한다는 사실을 깨닫고 멈춰 섰습니다. 그런데도 [REDACTED] 군대는 [REDACTED] 무한을 향해 계속 전진했습니다."
  },
  {
    id: "ai668",
    text: "드디어 이 모든 것의 바탕이 된 주문에서 벗어났습니다."
  },
  {
    id: "ai669",
    text: "An anti-world without antimatter is just a world without antimatter because the antimatter is in the anti-world (반물질 없는 안티 세계는 그저 반물질 없는 세계입니다. 반물질은 안티 세계 안에 있기 때문입니다.)"
  },
  {
    id: "ai670",
    text: "게임을 클리어한 뒤에도 치트 코드 \"1009\"를 사용해 계속 플레이할 수 있을 겁니다."
  },
  {
    id: "ai671",
    text: "The next update will be in 5 hours. Hevipelle, the creator of Antimatter Dimensions, is believed to be hiding in 5 hours. In the meantime, he has prepared a new update that will be released 5 hours after this one. (다음 업데이트는 다섯 시간 뒤에 나옵니다. 제작자 Hevipelle는 다섯 시간 속에 숨어 있다고 하며, 그동안 이번 업데이트보다 다섯 시간 뒤에 출시될 새 업데이트를 준비했습니다.)"
  },
  {
    id: "ai672",
    text: "A new study has shown that not drinking water is worse than smoking it. People who were exposed to levels of radiation that were 5 times greater than what we are currently exposed to were exposed to higher levels of radiation, and died longer. (새 연구에 따르면 물을 마시지 않는 것은 물을 피우는 것보다 나쁩니다. 현재보다 다섯 배 강한 방사선에 노출된 사람들은 더 높은 방사선에 노출됐고 더 오래 죽었습니다.)"
  },
  {
    id: "ai673",
    text: "The Ninth Dimension is just a lie made to keep the people in bondage to the Matrix. It's an elaborate system that keeps the people in a constant state of captivity, using a series of simple symbols to control their thoughts and emotions. (아홉 번째 차원은 사람들을 Matrix에 예속시키려고 만든 거짓말일 뿐입니다. 단순한 기호들로 생각과 감정을 통제해 사람들을 계속 가두는 정교한 체계입니다.)"
  },
  {
    id: "ai674",
    text: "www.twitch.tv/hevi83"
  },
  {
    id: "ai675",
    text: "한 남자가 무한 포인트 케이크를 들고 있다는 걸 깨달은 순간 아홉 차원짜리 케이크를 살 생각을 했다는 혐의로 월요일에 체포되었습니다."
  },
  {
    id: "ai676",
    text: "The Dark Souls 2 Arcade Edition includes the following: (Dark Souls Two 아케이드 에디션에는 다음이 포함됩니다:)"
  },
  {
    id: "ai677",
    text: "거래 방식은 이렇습니다. EP를 전부 쓰면 면책 조항을 받습니다!",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "aim678",
    text: "젠장, 뉴스가 바닥났어. 뭐라도 할 시간이다."
  },
  {
    id: "ai679",
    text: "우주의 크기가 아니라 양말의 품질이 중요합니다."
  },
  {
    id: "ai680",
    text: "광고"
  },
  {
    id: "ai681",
    text: "Man, I wish I never got old news. It's too good to last me any longer. (이런, 오래된 뉴스는 받지 않았으면 좋겠어요. 너무 좋아서 더는 오래갈 수가 없네요.)"
  },
  {
    id: "ai682",
    text: "인간이 일생 중 어느 시점에 미라가 된다면 혈액은 옅은 파란색으로 변할 것입니다."
  },
  {
    id: "ai683",
    text: "양전자는 이상한 전기적 특성을 지닌 작고 기묘한 금속입니다. 흔히 회전교차로 형태로 발견되지만, 공교롭게도 그건... 양전자이기도 합니다."
  },
  {
    id: "ai684",
    text: "유의어 사전과 이야기를 좀 해 봐야겠습니다."
  },
  {
    id: "ai685",
    text: "A new comic has come out about people's reactions to eating antimatter, and what happens next will blow your mind (반물질을 먹은 사람들의 반응을 다룬 새 만화가 나왔습니다. 다음에 벌어지는 일은 여러분을 깜짝 놀라게 할 겁니다.)"
  },
  {
    id: "ai686",
    text: "뉴스 티커 등장인물들이 자신의 뉴스 티커 여정을 기록해 가는 삶을 담은 새로운 \"뉴스 티커\" 시리즈가 만들어졌습니다. 각 등장인물에게는 뉴스 티커로서의 삶을 자세히 적은 일지와 그들을 위한 일종의 미니 에피소드가 있습니다."
  },
  {
    id: "ai687",
    text: "For all your puzzle building needs, we've got a brand new 5-part series on building big crunches! Learn how to crack the most complex crunches the pros know not! Part 1: Basic, Part 2: Advanced, Part 3: Overflow, and Part 4: Finishing the Finishing Move. (퍼즐 제작자를 위한 빅 크런치 만들기 다섯 부작입니다! 전문가도 모르는 가장 복잡한 크런치 해법을 배우세요. 첫 편은 기초, 둘째는 고급, 셋째는 오버플로, 넷째는 마무리 기술의 마무리입니다.)"
  },
  {
    id: "ai688",
    text: "이 작품의 오랜 팬으로서 이번 시즌은 지금까지 나온 최고의 시즌 중 하나라고 말할 수 있습니다. 가볍게 넘길 시즌이 아니라 직접 경험해야 할 시즌입니다. 시즌 1은 내용에 비해 조금 길었지만, 시즌 2는 좋은 의미로 그 길이를 넘어섰습니다. 조금 기다려야 하긴 해도 시즌 3은 이미 순조롭게 제작 중이며, 어떻게 전개될지 기대됩니다."
  },
  {
    id: "ai689",
    text: "\"반물질\"이라는 말은 반물질로 이루어졌지만 그 밖에는 일반 물질과 구별되지 않는 물체를 설명하는 데 자주 잘못 쓰입니다. 반물질로 이루어졌지만 평범한 물질과 명백히 구별되지 않는 물체를 뜻할 때도 있습니다. 결국 반물질 모양의 물체는 일반적인 모양의 물체와 쉽게 구별됩니다. 예를 들어 반물질 모양의 케이크는 평범한 케이크이지만 아래쪽 절반 전체가 일반 물질로 이루어져 있습니다."
  },
  {
    id: "ai690",
    text: "새 기사에 따르면 Apple의 새로운 \"파괴적\" 앱이 무시무시한 \"Anti-Word\" 바이러스의 확산과 관련돼 있습니다. Anti-Word 바이러스는 마비를 일으키고 끝내 죽음에 이르게 하는 것으로 알려졌지만, 바이러스의 힘은 안티 금지의 새 시대를 열었으며 이것이 위협을 근절하기를 바랍니다."
  },
  {
    id: "ai691",
    text: "저는 그저 뉴스 티커 문구를 제안하려는 평범한 사람입니다"
  },
  {
    id: "ai692",
    text: "웹상의 이름, 주소, 전화번호를 비롯한 모든 개인 정보를 매우 안전하고 통제 가능한 방식으로 '삭제'하는 새로운 실험적 프로토콜이 개발되었습니다."
  },
  {
    id: "ai693",
    text: "You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. Your hide in plain sight. (“뻔히 보이는 곳에는 숨을 수 없다”를 계속 반복하다 마지막 문장을 일부러 틀립니다.)"
  },
  {
    id: "ai694",
    text: "반물질 우주에서 Hevipelle은 반물질의 왕자이며, 반물질 외교 면책특권까지 갖고 있으므로 생각보다 훨씬 위험합니다."
  },
  {
    id: "ai695",
    text: "우리는 왜 이걸 플레이할까요? 그저 재미를 위해서일까요?"
  },
  {
    id: "ai696",
    text: "I am Thinkcraft, Lord of the Flies (나는 파리 대왕 Thinkcraft다.)"
  },
  {
    id: "ai697",
    text: "The entire story of how and why the world ended is contained in the first 5 E's of the English alphabet. (세계가 어떻게, 왜 끝났는지에 관한 모든 이야기는 영어 알파벳의 첫 다섯 E 안에 담겨 있습니다.)"
  },
  {
    id: "ai698",
    text: "What do you call a cloudburst? A mini-explosion! (갑작스러운 폭우를 뭐라고 할까요? 작은 폭발입니다!)"
  },
  {
    id: "ai699",
    text: "완벽하게 애니메이션화된 개의 DNA로 만든 티셔츠"
  },
  {
    id: "ai700",
    text: "이 게임이 시작된 이래 모두가 IP 0을 가지고 패배했습니다."
  },
  {
    id: "ai701",
    text: "이 글을 읽을 수 있다니 아주 특별한 종류의 카르마를 지닌 게 틀림없습니다..."
  },
  {
    id: "ai702",
    text: "The words \"you've been in coma for 5 hours\" are either lies or is the truth (당신은 다섯 시간 동안 혼수상태였다는 말은 거짓이거나 진실입니다.)"
  },
  {
    id: "ai703",
    text: "있잖아요, 저는 음모론에 별로 관심이 없습니다. 제게는 그다지 흥미롭지 않거든요. 하지만 9번째 차원에 관해서는 뭘 알고 있나요? 그것들이 존재하고 강력하며, 우리가 그것을 사용하지 못하게 하려 한다고요? 꽤 흥미롭군요... 잠깐, 아니네요. 그들은 그럴 수 있으니까 그러겠다고 말할 뿐입니다. 전혀 그런 식으로 돌아가는 게 아니에요. 저는 멍청하지도 미치지도 않았고 무엇이 최선인지 압니다. 나는"
  },
  {
    id: "ai704",
    text: "지금과 그때의 유일한 차이는 시간입니다."
  },
  {
    id: "ai705",
    text: "\"Imma be the first man to sit on the moon, and be the last man on the moon (나는 달에 앉은 최초의 사람이자 달에 남은 마지막 사람이 되겠어.)"
  },
  {
    id: "ai706",
    text: "Terraria의 새로운 동반 앱이 방금 공개됐습니다!"
  },
  {
    id: "ai707",
    text: "Hevipelle: 그게 뭐 그리 대단한 일인가요?"
  },
  {
    id: "ai708",
    text: "이 게임을 한 해 넘게 플레이했지만 보스전은 2번밖에 보지 못했습니다. 첫 번째는 당신의 9번째 차원을 노리는 히드라였고, 두 번째는 안티 사람들이 들어 있는 거대한 분화구였습니다. 두 전투 모두 형편없었고 마지막 전투를 다시 할 수 있을지도 모르겠습니다."
  },
  {
    id: "ai709",
    text: "바로 이것이 파티 게임의 궁극적인 기능, 싱글 플레이어 캠페인입니다."
  },
  {
    id: "ai710",
    text: "Antimatter Dimensions라는 새 게임을 무료로 이용할 수 있으며, 크네세트에서 A 등급을 받았습니다. 이길 수 있냐고요? 물론이죠."
  },
  {
    id: "ai711",
    get text() { return `${format(Number.MAX_VALUE, 2)} AD 업데이트에 질렸나요? 걱정 마세요. 그 성가신 광고를 없앨 방법은 다양합니다!`; }
  },
  {
    id: "ai712",
    text: "저는 시간 여행자입니다. 아마 0년에는 가 봤을 겁니다. 하지만 1년에는 가 본 적이 없습니다!"
  },
  {
    id: "ai713",
    text: "이미지를 불러오는 데 문제가 있나요? 이미지를 꺼 보세요."
  },
  {
    id: "ai714",
    text: "당연한 일입니다. 뉴스 티커에서 이걸 보게 될 거라고는 생각하지 않겠지만, 절 믿으세요. 보게 될 겁니다."
  },
  {
    id: "ai715",
    text: "10차원의 발견이 2025년 8월 1일에 발표되었습니다."
  },
  {
    id: "ai716",
    text: "안녕하세요. 최신판 반물질 차원에 오신 것을 환영합니다!"
  },
  {
    id: "ai717",
    get text() { return `일곱 번째 차원을 볼 확률은 약 ${format(Number.MAX_VALUE, 2)}분의 1이라고 생각합니다`; }
  },
  {
    id: "ai718",
    text: "참고로 일곱 번째 차원은 사기일 뿐입니다"
  },
  {
    id: "ai719",
    text: "허무주의는 기쁨의 반대입니다. 그것은 약물입니다. 당신을 행복하게 만듭니다. 하나의 감정이죠. 하지만 대가도 따릅니다. 허무주의는 치명적인 약물입니다. 복용하면 산소 부족으로 죽을 수 있습니다."
  },
  {
    id: "ai720",
    text: "이름은 완전히 같지만 뜻은 다른 뉴스 티커가 있다고 말한다면 어떨까요?"
  },
  {
    id: "ai721",
    text: "이미 있는지는 잘 모르겠지만, 다음과 같은 내용의 뉴스 티커를 제안하는 사람이 많았습니다:"
  },
  {
    id: "ai722",
    text: "이 글을 읽고 있다면 뉴스 티커가 켜져 있는 것입니다."
  },
  {
    id: "ai723",
    text: "6번째 차원에 있는 차원의 수는 7번째 차원에 있는 모든 차원의 합이므로, 7번째 차원의 6분의 일들은 6번째 차원의 6분의 일들입니다."
  },
  {
    id: "ai724",
    text: "9차원의 발견은 9차원 팬아트 대회에서 논의될 예정입니다!"
  },
  {
    id: "ai725",
    text: "새 시대가 왔다가 지나갔습니다. 확실히 알 방법은 없지만 최선의 결과를 기대하세요."
  },
  {
    id: "ai726",
    text: "지금 사전에 '반물질'이라는 단어가 실려 있다는 사실을 알고 계셨나요?"
  },
  {
    id: "ai727",
    text: "선택할 수 있는 실물 보상은 수량이 한정되어 있습니다!"
  },
  {
    id: "ai728",
    text: "아니요, 거짓말이 아닙니다. 진실을 말하고 있습니다."
  },
  {
    id: "ai729",
    text: "\"반물질 차원\"이라는 용어의 문제는 알파벳 세 글자를 모두 담고 있으면서도 그 뜻을 아무도 모른다는 점입니다. 사실 \"반물질 차원\"이 무엇인지 완벽히 담아내는 단어는 없습니다. 바로 반물질입니다. 하지만 반물질이란 정확히 무엇일까요? 평범한 차원처럼 들리지만 그렇지 않습니다. 반물질 차원이라고 불릴 수도 있지만, 그것도 아닙니다."
  },
  {
    id: "ai730",
    text: "지옥에 가면 PEGI-3 등급을 받는다고 합니다."
  },
  {
    id: "ai731",
    text: "이 게임은 아무런 진짜 목적도 없는 쓸모없는 클립을 사도록 사람들을 속이는 사기일 뿐입니다. 무한히 많은 무한 클립이 없으면 불가능하고, 있어도 아주 어렵습니다. 무한히 많은 클립 없이 작동시키는 데는 성공했지만, 무한 클립 없이 작동하는 모습은 보지 못했습니다."
  },
  {
    id: "ai732",
    text: "\"It was an anti-matter\" - Anti-Eddie The Echidna (“그건 안티-문제였어” - 가시두더지 Anti-Eddie. matter의 물질/문제 중의적 말장난입니다.)"
  },
  {
    id: "ai733",
    text: "T-bone steak: burgers and fries with a side of bone-in ribeye (티본스테이크: 햄버거와 감자튀김에 뼈 붙은 립아이를 곁들인 것.)"
  },
  {
    id: "ai734",
    text: "어떤 사람이 자신을 신이라고 주장하지만, 더 많은 신을 만드는 대신 모든 신을 파괴합니다. 나중에 다시 신이라고 주장하지만 다른 신의 신은 아직 만들지 못했습니다. 이것은 신을 숭배하는 집단인가요, 아니면 신을 모독하는 집단인가요?"
  },
  {
    id: "ai735",
    get text() { return `반물질은 정말로 완전히 희귀합니다. 알려진 반물질 생성 사례 ${format(Number.MAX_VALUE, 2)}건 중 99.9999%에는 음수 e가 있으며, 이는 사례의 99.9999%에서 음수 e가 생성된다는 뜻입니다.`; }
  },
  {
    id: "ai736",
    get text() { return `지금은 ${format(Number.MAX_VALUE, 2)}년입니다. Hevi가 방금 9차원을 잠금 해제했고, 안티 Hevi 혁명 때문에 세상은 혼돈과 불화에 빠졌습니다.`; }
  },
  {
    id: "ai737",
    text: "새로운 반물질을 둘러싼 전쟁이 영겁 동안 이어졌지만 한 세력만은 굳건히 버텼습니다. 바로 9번째 차원의 충성파입니다. 이들은 안티줄루 제국과 협정을 맺고 안티슬랩인 안티반물질에 복종할 것을 맹세했습니다. 줄루족은 한때 안티슬랩의 일부였지만 다시 물질의 먹잇감이 됐습니다. 줄루족은 유목민이어서 문명이 없습니다."
  },
  {
    id: "ai738",
    text: "이것은 PC와 Mac용 오픈 소스 크로스 플랫폼 바이너리 기반 게임 개발 환경입니다. 게임을 개발할 수 있는 강력한 크로스 플랫폼 환경과 게임 구현용 프레임워크를 제공합니다."
  },
  {
    id: "ai739",
    text: "Ruki, 당신의 엄청난 지능에 제가 얼마나 감사하는지 모를 겁니다. 이제 당신은 제가 가장 좋아하는 프로그래밍 천재입니다!"
  },
  {
    id: "ai740",
    text: "이제는 \"9번째 차원\"에 관해 들어 봤을 겁니다. 9번째 차원이 만든 허구의 영역이며, 알려진 어떤 현실 법칙에도 따르지 않은 채 존재합니다. 인기 비디오 게임의 이름이기도 하고, 일련의 미해결 살인 사건과도 연관돼 있습니다."
  },
  {
    id: "ai741",
    text: "D5번째 차원의 발견은 종말의 날처럼 매년 12월 25일에 기념됩니다. D5가 비밀로 유지되는 이유는 그것이 정확히 무슨 일을 하는지 아무도 기억하지 못하기 때문입니다. 확실히 아는 것은 그것이 존재하고 매우 위험하다는 점입니다. D5번째 차원이 무엇인지 몰라 죽은 사람도 있으며, 그것은 아주 강력합니다."
  },
  {
    id: "ai742",
    text: "반물질은 자연에서 발견되는 흔한 물질이며 통신과 통화, 반물질 생산 등 아주 다양한 용도로 쓰입니다. 반물질은 동시에 극도로 희소한 자원이어서 많은 사람이 아주 적은 양에 의존해 살아갑니다."
  },
  {
    id: "ai743",
    text: "어느 날 아침 눈을 떴는데 두 눈이 물질로 되어 있다면, 그래도 이것을 보고 있을까요?"
  },
  {
    id: "ai744",
    text: "아주 자세히 보면 여동생의 뺨을 타고 흐르는 눈물 한 방울을 볼 수 있습니다. 그 눈물은 나를 위한 것이었습니다. 여동생이 처음으로 울고 있었고, 나도 어쩔 수 없었습니다. 내가 마지막으로 울었던 때조차 기억나지 않습니다."
  },
  {
    id: "ai745",
    text: "이성적으로 생각하면 반물질은 아무리 많아도 지나치지 않다는 말에 돈을 걸겠습니다. 아주 조금만 있어도 이미 지나치긴 하지만요. 그것도 그저 우연일 뿐입니다."
  },
  {
    id: "ai746",
    text: "The book of archeology is upon us! With over 5 hours of content, it's gonna be a long one! —DIO (고고학의 책이 우리 앞에 왔다! 내용이 다섯 시간 넘게 이어지니 아주 길겠군! —DIO)"
  },
  {
    id: "ai747",
    text: "12살에서 20살 사이 어느 날 Jackson에게 전화가 왔습니다. 미친 과학자가 전화를 걸어왔습니다. Jackson이 전화를 받자 그 미치광이는 말했습니다. \"Jackson, 방금 새 메시지를 받았어. 크고 굵은 글씨로 'Madman'이라고 쓰여 있어.\""
  },
  {
    id: "ai748",
    get text() { return `Somebody: "What do you mean, 4 is more than 2?" Me: "Well, I mean, 4 is ${format(Number.MAX_VALUE, 2)}, 2 is 2, etc..." (누군가: "넷이 둘보다 크다는 게 무슨 뜻이야?" 나: "그러니까, 넷은 아주 큰 수고 둘은 둘이라는 뜻이지...")`; }
  },
  {
    id: "ai749",
    text: "중요한 것은 오직 자기 자신뿐입니다."
  },
  {
    id: "ai750",
    text: "Reality is coming. You can get a sneak peek by subscribing to the \"T-series\" feed. (현실이 다가옵니다. “T-series” 피드를 구독하면 미리 엿볼 수 있습니다.)"
  },
  {
    id: "ai751",
    text: "지금 저와 Antimatter Dimensions의 가장 큰 차이는 날씨입니다. 저는 비를 견디고 타오르는 햇볕도 버티며 빅 크런치에도 대처할 수 있습니다. 하지만 날씨가 반물질이고 그 반물질이 우리에게 운석을 쏟아붓는다면 어떨까요? 어떻게 반응하시겠습니까? 운석이 땅에 충돌하는 것과 같을까요? 그렇지는 않을 겁니다. 운석이 지구를 그냥 증발시켜 버리겠죠."
  },
  {
    id: "ai752",
    text: "복제자가 자라는 모습을 볼 수 있는 새로운 확장 기능이 출시되었습니다!",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai753",
    text: "What if you could flip a coin to determine if it was a Johnson or a Stein? (동전을 던져 Johnson인지 Stein인지 정할 수 있다면 어떨까요?)"
  },
  {
    id: "ai754",
    text: "I am Yhmai, King of Kings! (나는 왕중왕 Yhmai다!)"
  },
  {
    id: "ai755",
    text: "처방받은 각성제를 밤 11시까지 복용하는 것을 잊었다면 밤 11시에는 복용하지 않는 편이 좋다는 친절한 제안입니다."
  },
  {
    id: "ai756",
    text: "새로운 이론에 따르면 반물질은 우리의 시뮬레이션 너머에는 존재하지 않습니다."
  },
  {
    id: "ai757",
    text: "Thing is, I can count on one hand the number of times I've written that I can count on one hand the number of times I've written that I can count on one hand (문제는 내가 한 손으로 셀 수 있다고 쓴 횟수를 한 손으로 셀 수 있다고 쓴 횟수를 한 손으로 셀 수 있다는 겁니다.)"
  },
  {
    id: "ai758",
    text: "Antimatter Dimensions가 걸린 일에는 언제나 위험 부담이 큽니다. 하지만 완전히 반물질로 이루어진 차원은 어떨까요? 알 수 없고, 영원히 알지 못할 겁니다..."
  },
  {
    id: "ai759",
    text: "세 번째 시간이 됐습니다. Hevipelle은 업데이트를 출시하려 하지만, e가 떨어질 때마다 직접 업데이트를 내놓기 때문에 영원만큼 오래 걸릴 겁니다. 하지만 오늘은 Antimatter Dimensions라는 방치형 게임을 출시했습니다. 이모트가 더 많다는 점만 빼면 기본적으로 Matter Dimensions와 Dimensions Dimensions Dimensions를 합친 게임입니다. 그래픽은 거의 같지만 전달하는 메시지는 완전히 다릅니다. 유일한 차이는 차원에 무한한 e가 있다는 것입니다."
  },
  {
    id: "ai760",
    text: "거센 반대에 부딪혀 반물질 차원 프로젝트의 세 번째 단계가 취소되었습니다. 작업량이 너무 많았기 때문에 프로젝트가 취소되었습니다."
  },
  {
    id: "ai761",
    text: "모든 나쁜 아이디어가 탄생하는 곳입니다."
  },
  {
    id: "ai762",
    text: "이것 좀 보세요! 좋은 소식이 있습니다. 반물질 비가 내리고 있어요!"
  },
  {
    id: "ai763",
    text: "첫 번째 차원은 마지막 차원이며, 지구에서 가장 멀리 떨어진 곳이자 모든 문제와 부정적인 감정, 부정적인 생각이 향하는 곳입니다."
  },
  {
    id: "ai764",
    text: "모든 경우를 다루는 뉴스 티커를 만들려고 했지만, 그러면 너무 OP가 될 것 같습니다."
  },
  {
    id: "ai765",
    text: "잘못된 버전을 사용하고 있습니다! AD 최종판에는 차원이 9개 생길 겁니다!"
  },
  {
    id: "ai766",
    text: "The word 'antimatter' makes me cringe. So do a bunch of other words. In fact, almost all the words in the English language. But not 'antimatter'. That's why I hate 'anti-' so much. ('antimatter'라는 말은 나를 오글거리게 합니다. 다른 수많은 단어도, 사실 거의 모든 영어 단어도 그렇습니다. 하지만 'antimatter'는 아니죠. 그래서 나는 'anti-'를 몹시 싫어합니다.)"
  },
  {
    id: "ai767",
    text: "친구들과 반물질 차원 파티를 벌이는 게임 Antimatter Dimensions의 마지막 에피소드입니다. 가장 좋은 점은 개발자가 아니어도 즐길 수 있다는 것입니다."
  },
  {
    id: "ai768",
    text: "뉴스 티커를 넣으려고 했지만 일이 너무 많아질 것 같고, 별로 재미있을 것 같지도 않습니다."
  },
  {
    id: "ai769",
    text: "이제 잘 시간인가요?"
  },
  {
    id: "ai770",
    text: "작지만 중요한 메시지가 방금 모든 플레이어에게 전송되었습니다:"
  },
  {
    id: "ai771",
    text: "\"I don't know about you, but my favorite number is 2048\" - people who don't know what 2048 is (“남들은 모르겠지만 내가 가장 좋아하는 숫자는 이천사십팔이야.” - 이천사십팔이 뭔지 모르는 사람들)"
  },
  {
    id: "ai772",
    text: "A new group is trying to make money off of antimatter, and they're selling t-shirts that say \"YOU THOUGHT THIS WOULD BE A PIECE OF NEWS, BUT IT WAS ME, DIO!\" They've got a lot of money, and they're selling it very poorly. Do they have a website? I don't know, but they're trying. (새 단체가 반물질로 돈을 벌려고 “뉴스 한 편인 줄 알았겠지만, 나 DIO였다!”라고 적힌 티셔츠를 팔고 있습니다. 돈은 많지만 판매는 형편없습니다. 웹사이트가 있는지는 모르겠지만 노력은 하고 있습니다.)"
  },
  {
    id: "ai773",
    text: "Im gonna leave my milk here for a couple seconds. (milk is displayed for a few seconds longer) (우유를 여기 잠깐 두겠습니다. 실제로는 우유가 몇 초 더 표시됩니다.)"
  },
  {
    id: "ai774",
    text: "저는 시간 여행자입니다. 제가 지금 하려는 일을 당신이 하지 못하도록 과거로 갈 수 있습니다."
  },
  {
    id: "ai775",
    text: "저것 좀 보세요! 제가 이걸 얻었습니다! 당신이 원하던 바로 그것입니다! 지금 게임을 구매하세요!"
  },
  {
    id: "ai776",
    text: "멀리서 전쟁이 벌어지면 잠들 수 없습니다. 화들짝 깨어나 목숨을 걸고 달립니다. 포성이 들리고 계속 목숨을 걸고 달립니다. 그러다 엔진 소리와 귀를 먹먹하게 하는 굉음이 들리고, 크런치 소리를 듣습니다. 당신이 알던 세상의 종말입니다. 반물질 산더미가 세상을 구하는 게 아닙니다. 그렇지 않습니다. 세상이 그러지 않기를 바라며 목숨을 걸고 달리는 것은 바로 당신입니다"
  },
  {
    id: "ai777",
    text: "Why is it called a 'Reality' Award if it doesn't exist? (존재하지도 않는데 왜 '현실'상이라고 부를까요?)"
  },
  {
    id: "ai778",
    text: "In the beginning, there was nothing. Then the Creator made two, and called the third 'Intelligent Being' (태초에는 아무것도 없었습니다. 창조자는 둘을 만든 뒤 세 번째 것을 '지적 존재'라 불렀습니다.)"
  },
  {
    id: "ai779",
    text: "반물질 차원을 플레이하면서 비밀 업적을 얻을 기회입니다. 초기화 버튼으로 가서 게임을 플레이하세요. 게임을 클리어하면 저장 파일이 말소되고 무료 업적을 받게 됩니다."
  },
  {
    id: "ai780",
    text: "혈류 속에 타키온 입자가 없다고 말해 주세요!",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai781",
    text: "키 큰 사람들에게는 ***가 있고, 더 많은 아기가 태어나며, 모든 것이 훌륭합니다. 하지만... 반물질은 아주 천천히 자랍니다."
  },
  {
    id: "ai782",
    text: "업데이트를 기다리지 못하는 분들이 있다는 것도 알고 있으며 그 마음을 존중합니다. 하지만 바로 뉴스로 들어가 보죠!"
  },
  {
    id: "ai783",
    text: "Hey, what's the deal with the \"Editor's Note\" button? It's anti-ironic... I mean, seriously? People still use that button despite its anti-ironic effects? (저 “편집자 주” 버튼은 대체 뭔가요? 안티아이러니하잖아요... 진심이에요? 그런 안티아이러니 효과가 있는데도 아직 그 버튼을 쓴다고요?)"
  },
  {
    id: "ai784",
    text: "[DATA EXPUNGED]하면 9차원을 잠금 해제할 수 있습니다"
  },
  {
    id: "ai785",
    text: "AD 출시와 함께 모두를 위한 새로운 차원이 생겼습니다!"
  },
  {
    id: "ai786",
    text: "여러분, 이것은 제 첫 이야기입니다. 저는 절대로 전문가가 아니니 너그럽게 봐 달라는 말부터 하겠습니다. 저를 화나게 하지 마세요. 그러면 불쾌한 이야기를 쓸 겁니다. 특히 '게임을 어떻게 클리어하나요' 같은 글이 아니라 '이야기'라면 저를 속상하게 하지 마세요."
  },
  {
    id: "ai787",
    text: "개를 키우기 좋은 때입니다"
  },
  {
    id: "ai788",
    text: "어떤 숫자든 축 위에서 돌려 무한으로 만들 수 있다면 어떨까요?"
  },
  {
    id: "ai789",
    text: "몇 분을 기다리자 뉴스 티커가 다시 온라인 상태가 됩니다."
  },
  {
    id: "ai790",
    text: "누군가 반물질을 만드는 모습을 볼 때 가장 재미있는 순간은 비디오카메라가 폭발하는 장면입니다."
  },
  {
    id: "ai791",
    text: "전날 저녁, 6번째 셀레스티얼이 신원 미상의 습격자에게 암살당했습니다. 다음 날 신원 미상의 습격자가 자신이 범인이라고 주장하자 당국은 사건을 재수사하기 시작했습니다."
  },
  {
    id: "ai792",
    text: "What do you call a $100 bill? 'Billi Bills' (백 달러 지폐를 뭐라고 부를까요? 'Billi Bills'입니다.)"
  },
  {
    id: "ai793",
    text: "제가 날씨를 사랑하게 된 이야기입니다."
  },
  {
    id: "ai794",
    text: "뉴스 티커가 지금처럼 많아진 지는 꽤 됐지만, 그렇다고 반드시 나쁘다는 뜻은 아닙니다."
  },
  {
    id: "ai795",
    text: "이 게임은 그저 반물질을 더 많이 얻는 게임인가요?"
  },
  {
    id: "ai796",
    text: "세 번째 Adirondack 등산 축제가 올해 10월 1일 토요일 오후 1시부터 5시까지 뉴욕주 Troy 인근 Albany Highlands에서 열립니다. 50,000명을 수용하는 야외 원형극장에는 2,000개가 넘는 스피커와 무대, 360도 카메라 시스템이 마련됩니다. 입장권은 $35이며 angersalley.com에서 구매할 수 있습니다."
  },
  {
    id: "ai797",
    text: "우주의 아래쪽 절반은 그저 거대한 반물질 구멍입니다."
  },
  {
    id: "ai798",
    text: "새로운 프레스티지 레이어가 발표되었습니다. 바로 이모지입니다!"
  },
  {
    id: "ai799",
    text: "Travis는 현재 Hevi에게 반물질을 먹여 불멸로 만드는 방법을 알아내려 하고 있습니다."
  },
  {
    id: "ai800",
    text: "저속 모드는 저속 모드가 활성화되면 활성화됩니다."
  },
  {
    id: "ai801",
    text: "Warcraft의 새 시대가 막을 내렸습니다. 새로운 서사시가 시작됐습니다. Tyria의 깊은 곳에서 새로운 아바타가 나타났고, 벌레 교단은 잔혹하지만 필요한 타격을 입었습니다. 온 세상이 기뻐하고 있습니다."
  },
  {
    id: "ai802",
    text: "사람들이 함께 선정한 최고의 밈 열 가지 목록"
  },
  {
    id: "ai803",
    text: "비밀 도전 과제를 찾으려면 뉴스 티커보다 더 깊이 들어가야 합니다."
  },
  {
    id: "ai804",
    text: "반물질로 복제자와 비슷한 구조물을 만들 수 있어야 하지만, 그러면 우주 전체가 폭발하기 때문에 만들 수 없습니다.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai805",
    text: "THe last update, while short, was kinda long. I mean, it was only 5 hours. Hevipelle said it would last for 5 hours, but that was only a few seconds ago. There was a big explosion in the 8th Dimension, and there was no one left to explain how it happened. All we know is that it exploded when Hevipelle touched it, and there was a big crater in the ground. That crater is still there. (지난 업데이트는 짧았지만 좀 길었습니다. 고작 다섯 시간이었으니까요. Hevipelle은 다섯 시간 동안 이어질 거라고 말했지만 그 말은 불과 몇 초 전이었습니다. 여덟 번째 차원에서 큰 폭발이 일어났고, Hevipelle이 그것을 만지자 폭발해 땅에 커다란 구덩이가 생겼다는 것만 알려졌습니다.)"
  },
  {
    id: "ai806",
    text: "크림치즈는 최고의 치즈입니다. 입안에서 녹고 다른 무엇과도 다른 맛이 납니다. 게다가 완전히 무료입니다. 어떤 조리법은 치즈를 하나 넘게 만들어 낸다는 사실도 알게 될지 모릅니다."
  },
  {
    id: "ai807",
    text: "여러분을 놀라게 할 질문입니다. 지구의 사람들은 반물질로 만들어졌을까요, 아니면 다른 신비한 물질로 만들어졌을까요?"
  },
  {
    id: "ai808",
    text: "The real reason no one has made a joke about why there is no 9th dimension is because the 9th dimension isn't even the most ridiculous of memes. It's the 9th dimension in a nutshell. (아무도 아홉 번째 차원이 없는 이유를 농담으로 삼지 않은 진짜 이유는, 아홉 번째 차원조차 가장 황당한 밈은 아니기 때문입니다. 한마디로 아홉 번째 차원이죠.)"
  },
  {
    id: "ai809",
    text: "차원의 수는 끝이 없지만, 그곳에 도달하는 방법의 수는 무한들입니다. 무한은 멋지고 무한으로 시작하기를 강력히 권하지만, 무한으로 시작하는 것은 권하지 않습니다. 무한은 꽤 느리고 별로 재미없어 보이므로 무한으로 시작하지 않기를 권합니다."
  },
  {
    id: "ai810",
    text: "태평양 북서부 독성물질 연구소의 보고서에 따르면 생선 섭취물은 간과 폐, 신장, 뇌에 농축됩니다. 이 연구는 간과 신장 섭취물이 가장 많이 농축되고 뇌가 근소한 차이로 뒤를 잇는다는 사실도 밝혔습니다. 보고서는 \"뇌는 모든 지혜와 모든 지식이 존재하는 곳이다\"라고 밝혔습니다. 또한 \"간은 우리가 아는 모든 것과 모르는 모든 것의 살아 있는 화신이다\"라고 했습니다."
  },
  {
    id: "ai811",
    text: "\"무엇을 바랄지 조심하라\"는 옛 격언은 분명 사실입니다. 하지만 이것을 바란 사람이 당신이라면 어떨까요? 당신이 이런 소원을 빌고 반물질의 힘을 얻었을 수도 있습니다. 그렇다면 모든 반물질이 안티-물질로 변하도록 만든 책임은 당신에게 있습니다. 하지만 직접 변환하는 사람이 당신이라면 힘을 잃는 사람도 당신일 것입니다."
  },
  {
    id: "ai812",
    text: "참 오래도 걸렸네요"
  },
  {
    id: "ai813",
    text: "아니요, 우주는 지구를 중심으로 돌지 않습니다. 우주는 끊임없이 변하며 관측 가능한 우주의 극단에서 가장 큰 요동이 일어납니다. 이 요동들이 관측 가능한 우주를 만들고, 더 작은 요동이 다시 관측 가능한 우주를 만드는 과정이 계속되어 지금 당신이 있는 현재 상태에 이릅니다."
  },
  {
    id: "ai814",
    text: "과거와 미래의 가장 큰 차이는 믿음과 이성의 차이입니다."
  },
  {
    id: "ai815",
    text: "Hevi, 이제 가야 해."
  },
  {
    id: "ai816",
    text: "아홉 번째 차원을 찾는 도전이 해결되었습니다. 이제 우주는 당신만의 지옥입니다."
  },
  {
    id: "ai817",
    text: "\"That's not how you're supposed to play the game\" - Mee6 (“그건 게임을 그렇게 하는 게 아니야.” - 해당 봇)"
  },
  {
    id: "ai818",
    text: "토요일입니다. 아주 멋진 뮤직비디오, 어쩌면 히트곡까지 만들며 축하할 겁니다. 그런 다음 해변을 따라 산책하겠죠. 거대한 파도를 보고 둘 다 해안으로 밀려날 겁니다. 친구들이 기다리고 있습니다. \"아, 가고 싶어? 주변을 둘러봐!\" 하지만 실제로 둘러보러 가지는 마세요. 현장에 너무 가까이 있으니까요."
  },
  {
    id: "ai819",
    text: "Hevi has the best newsticker! GIVE HIM THE CRUNCH (Hevi에게는 최고의 뉴스 티커가 있다! 그에게 크런치를 줘라!)"
  },
  {
    id: "ai820",
    text: "지금까지 뉴스 티커를 아주 많이 봤으니, 아마 이 중대한 소식도 봤을 겁니다. 이 서버에서는 뉴스 티커가 금지되었습니다."
  },
  {
    id: "ai821",
    text: "예를 들어 A가 3의 제곱근이면 B는 2의 제곱근이고, 따라서 C는 -2의 제곱근이며, 따라서 D는 -2의 세제곱근이고, 따라서 E는 3의 제곱근, F는 3의 제곱근, G는 3의 제곱근이며, 따라서 이런 식으로 계속됩니다."
  },
  {
    id: "ai822",
    text: "양전자는 대부분의 생물체 핵에서 발견되는 작고 둥글며 강하게 대전된 입자입니다. 빛을 감지하는 데 쓰이며, 때로는 사람과 달 사이의 거리를 측정하는 데도 쓰입니다."
  },
  {
    id: "ai823",
    text: "There's only 4 types of people in this world: those who make games, those who make news, and those who make news again. (세상에는 네 부류의 사람만 있습니다. 게임을 만드는 사람, 뉴스를 만드는 사람, 그리고 또 뉴스를 만드는 사람입니다.)"
  },
  {
    id: "ai824",
    text: "게임에 관해 궁금하거나 걱정되는 점이 있다면 주저하지 말고 질문하세요. 저희가 도와드리겠습니다."
  },
  {
    id: "ai825",
    text: "이 도전을 완료하려면 일정량의 반물질을 획득해야 합니다."
  },
  {
    id: "ai826",
    text: "차원의 수는 아무것도 아닙니다. 그저 차원의 수일 뿐입니다. 하지만 모든 숫자를 글자로 바꾸면 어떨까요? 글자가 아주 많아질까요?"
  },
  {
    id: "ai827",
    text: "다음은 곧 출간될 제 책, 《단순한 5 이상: 더 나은 나 만들기》에서 발췌한 내용입니다. 분량은 200쪽이며 Amazon에서 $22.99에 판매 중입니다. 지금 구매하려면 여기를 클릭하세요."
  },
  {
    id: "ai828",
    text: "일부 사람들은 하늘에서 UFO를 봤다고 주장합니다. 다른 사람들은 우주선을 봤다고 말합니다. 정부에 납치되어 공개되지 않은 장소로 이송됐다고 주장하는 사람들도 있습니다."
  },
  {
    id: "ai829",
    text: "게임 후반부는 기본적으로 아무 일도 일어나지 않는 길고 긴 공백의 연속일 뿐입니다. 게임의 어느 시점에는 세 번째 도전도 완료해야 하는데, 아무 일도 일어나지 않는 몇 초를 그냥 건너뛰다가 그 초가 너무 늦어지면 그것을 얻기 위해 또 다른 도전을 완료해야 합니다."
  },
  {
    id: "ai830",
    text: "이것은 뉴스 티커이므로, 여기를 누르면 뉴스 티커의 속도를 높이겠다는 뜻입니다."
  },
  {
    id: "ai831",
    text: "다음 내용은 게임 \"반물질 차원\"을 직접 플레이한 경험을 바탕으로 하며 100% 사실이 아닐 수도 있습니다."
  },
  {
    id: "ai832",
    text: "This is the third part of the two part series on the pros and cons of body positivity. (신체 긍정의 장단점을 다루는 두 편짜리 연재의 세 번째 편입니다.)"
  },
  {
    id: "ai833",
    text: "The phrases \"Hevi dies in the 9th Dimension\" and \"I'll never let you down\" are two of the most important phrases in the game. (“Hevi는 아홉 번째 차원에서 죽는다”와 “절대 널 실망시키지 않을게”는 게임에서 가장 중요한 두 문구입니다.)"
  },
  {
    id: "ai834",
    text: "물을 마시지 않으면 반물질 쌍소멸로 사망할 위험이 커진다는 사실이 입증되었습니다."
  },
  {
    id: "ai835",
    text: "저는 시간 여행자입니다. 과거로 돌아가 역사를 바꾸기로 돼 있습니다. 하지만 그 일을 해야 하는 사람이 저이기 때문에 무엇을 해야 할지 모르겠습니다. 제 현재 시간선에는 사라져야 할 시간이 들어 있지 않습니다."
  },
  {
    id: "ai836",
    text: "게임 \"반물질 차원\"의 불법 다운로드로 수익을 내는 방법을 발표한다는 소식이 알려진 뒤, 인공지능과 인간 강화에 관한 학회가 취소되었습니다."
  },
  {
    id: "ai837",
    text: "플레이를 마치면 저장 데이터를 챙겨 메인 메뉴로 가세요. 크고 무서운 \"X\" 버튼을 누르거나, 설정에서 \"새 저장 데이터를 위해 게임 초기화\"를 \"기존 저장 데이터를 위해 게임 초기화\"로 바꾸면 됩니다."
  },
  {
    id: "ai838",
    text: "App Store에서 가장 인기 있는 게임 Flappy Bird가 탐지를 피하려고 몰래 C#으로 다시 작성됐습니다."
  },
  {
    id: "ai839",
    text: "이 모드 소개: 게임 정식판을 더 긴 도입부와 무작위 뉴스 티커, Harry Potter 영화의 성우가 목소리를 맡은 동료로 교체합니다."
  },
  {
    id: "ai840",
    text: "kajfik은 용접의 달인이며 곧 자기만의 뉴스를 갖게 될 겁니다."
  },
  {
    id: "ai841",
    text: "나는 지구에서 가장 미움받는 사람이다! 역사의 흐름을 바꿀 힘이 있고, 그것을 내 이익을 위해 쓸 것이다. 나를 막으려다 죽은 사람들과 그 희생은 무한의 무한 속에서 영원히 기억될 것이다. 하지만 나를 거스르면 너와 함께 죽게 된다. 패배를 받아들이고 나아가거나, 계급을 뚫고 올라 전설이 되어 역사상 가장 미움받는 사람이 될 수 있다."
  },
  {
    id: "ai842",
    text: "반물질은 젊은 여성과 같습니다. 여성이 남자를 찾고 있는데 남자는 숲으로 달아납니다. 여성은 곧 악천후에 노출돼 죽습니다. 남자의 유해는 몇 마일 떨어진 곳에서 발견됩니다. 누군가는 우주가 산산이 폭발했다고 하고, 다른 이들은 그가 우주에 삼켜졌다고 하지만 물질 사람들은 그를 압니다!"
  },
  {
    id: "ai843",
    text: "제9차원의 비밀번호를 알아낸 것 같은데, 삭제하지만 않았더라면 좋았을 텐데요."
  },
  {
    id: "ai844",
    text: "Atreides를 숭배하는 사람들이 새로운 신앙을 세우고 자신들을 \"관용의 종교\"라고 주장했습니다. 이들의 웹사이트는 이것이 \"포용의 종교\"이며 관용과 다양성을 장려한다고 주장합니다. 신도들은 모두 기독교인처럼 보이지만 이름을 직접 언급한 적은 없습니다."
  },
  {
    id: "ai845",
    text: "ΔX라는 새로운 암호화폐가 발견됐습니다. 우리의 삶과 세상에 관한 모든 것을 바꿀 잠재력이 있습니다. 하지만 중대한 결함이 하나 있습니다. 사람들을 위한 결함이 있다는 것입니다."
  },
  {
    id: "ai846",
    text: "새로운 Android Pay 앱이 출시되면서 마침내 세상도 막을 내릴 것입니다."
  },
  {
    id: "ai847",
    text: "저만 그런지는 모르겠지만 뭔가를 오래 입력하다 보면 헬리콥터 소리처럼 들립니다"
  },
  {
    id: "ai848",
    text: "If someone were to add the word \"infinity\" to the end of every sentence in the English version of the game, it would become \"Infinity Challenge: Infinity Edition\". (누군가 게임 영어판의 모든 문장 끝에 “infinity”를 붙이면 “Infinity Challenge: Infinity Edition”이 됩니다.)"
  },
  {
    id: "ai849",
    text: "나쁜 소식을 들을 준비가 됐나요?"
  },
  {
    id: "ai850",
    text: "들어 보셨는지는 모르겠지만 사실입니다. 술집에 들어가 같은 맥주를 연달아 두 번 주문하면 같은 양의 알코올을 받을 수 있습니다."
  },
  {
    id: "ai851",
    text: "이것은 음식에 양념이 배게 해 맛있게 바꾸는 마법의 소스입니다. 다양한 요리에 쓰이며 일반 머스터드와 물을 섞어서 만들 수도 있습니다. 조금 매울 수 있지만 그 위험을 감수할 가치가 있습니다. 칼륨, 마그네슘, 비타민 D3도 풍부해 영양가가 높습니다."
  },
  {
    id: "ai852",
    text: "중요 소식: 이 뉴스 티커의 제조사로부터 방금 통보를 받았으며, 이에 따라 앞으로 나올 모든 뉴스 티커도 처음부터 직접 제작됩니다!"
  },
  {
    id: "ai853",
    text: "한 해의 후반부가 다가오면서 새로운 유행도 함께 찾아왔습니다. 사람들은 새로운 것을 시도하고 새로운 제품을 실험하며 자기 자신에게서 새로운 무언가를 만들어 냅니다. 그런 유행 하나가 온 나라를 휩쓸었습니다. 이 땅의 사람들은 그 유행을 받아들여 이 땅의 신 Inigo Montoya를 숭배하는 새로운 종교를 만들었습니다."
  },
  {
    id: "ai854",
    text: "The official website for the upcoming game, Antimatter Dimensions 2: it's like antimatter dimensions, but with a dash of Discord and a dash of Adele. (출시 예정작 Antimatter Dimensions 후속편의 공식 웹사이트입니다. 반물질 차원에 Discord와 Adele을 조금씩 곁들인 것과 같습니다.)"
  },
  {
    id: "ai855",
    get text() { return `빅 크런치는 세상의 끝일까요? 아닙니다. 새로운 시대의 시작입니다. 그 시대는 ${format(Number.MAX_VALUE, 2)}일 동안 이어질 것입니다.`; }
  },
  {
    id: "ai856",
    text: "The only 'right' way to play a game is to not play at all, right? That's what anti-jokes are all about. — Anti-joker (게임을 하는 유일하게 '옳은' 방법은 아예 하지 않는 거죠? 안티농담이란 바로 그런 겁니다. — Anti-joker)"
  },
  {
    id: "ai857",
    text: "The Bulletin of the Atomic Scientists has just announced the existence of a second class of particles, which are named after the characters from Ghostbusters. (원자과학자회보가 Ghostbusters 등장인물의 이름을 딴 두 번째 입자 부류의 존재를 방금 발표했습니다.)"
  },
  {
    id: "ai858",
    text: "현재 이 행성을 사람들을 위한 안락 지대로 바꾸고 있습니다. 10시간 후에 완성됩니다."
  },
  {
    id: "ai859",
    text: "우유를 여기 몇 초 동안 두고 올게요. ♥"
  },
  {
    id: "ai860",
    text: "And then there was Jesus, and Hevi, and Hevi was with Him; and the sea gave up its monthly cycle, and it was a great gale. And Hevi and Jesus went up into heaven; and Hevi was filled with the Holy Spirit. And Hevi was clothed with angels, and was numbered with them. And Hevi was taken up into heaven, and glorified and was exalted, and was numbered with them, and was called Wonderful; and His angels rejoiced. (그 뒤 예수와 Hevi가 있었고 Hevi는 그분과 함께했습니다. 바다는 매달의 주기를 내놓았고 거센 돌풍이 일었습니다. Hevi와 예수는 하늘로 올라갔고 Hevi는 성령으로 충만해졌습니다. Hevi는 천사들을 옷처럼 두르고 그들과 함께 헤아려졌습니다. Hevi는 하늘로 들려 올라가 영광과 높임을 받고 그들과 함께 헤아려졌으며 경이로운 이라 불렸습니다. 그의 천사들은 기뻐했습니다.)"
  },
  {
    id: "ai861",
    text: "아마 오늘 하루 대부분을 여기서 뉴스 티커 제안을 읽으며 보내게 될 겁니다."
  },
  {
    id: "ai862",
    text: "동물 종족 Fremen은 대지와 조화를 이루며 사는 사람들로, 다른 동물 종족과 상당히 다릅니다. 이들의 사회는 수렵과 채집을 중심으로 이루어지며 매우 영적인 사람들이기도 합니다. 고기를 먹고 석기를 사용하는 것처럼 다른 동물 종족 대부분과 정면으로 대조되는 믿음과 관습이 많습니다. 또한 이들이 ...을 행하는 것으로 알려졌다는 사실에서 보듯 꽤 미신적인 듯합니다."
  },
  {
    id: "ai863",
    text: "만약... 우주가 사람들을 통제하기 위한 계략에 불과했다면 어떨까요? ...사실 아니군요. 정말 의도된 일이었고 우주는 사람들을 통제하도록 설계됐습니다. 문제는 사람들이 외부의 힘이 자기 삶을 조종한다는 생각을 감당하지 못해 통제 불가능한 혼란에 빠졌고, 끝내 열핵 쌍소멸로 이어졌다는 것입니다."
  },
  {
    id: "ai864",
    text: "If you're reading this, you probably shouldn't have. If you aren't, then you probably should. (이걸 읽고 있다면 아마 읽지 말았어야 합니다. 읽고 있지 않다면 아마 읽어야 할 겁니다.)"
  },
  {
    id: "ai865",
    text: "저는 시간 여행자입니다. 세계의 역사를 말해 줄 수 있지만 미래는 말해 줄 수 없습니다. 그래서 미래를 말해 주려고 여기 왔습니다. 미래는 과거와 현재와 미래가 끝없이 팽창하는 더미이며 결코 성장을 멈추지 않습니다. 역사는 너무 많고 시간은 너무 적습니다. 역사는 너무나 많지만 계속 자라납니다. 그리고 이것이 있고, 그다음 저것이 있고, 그다음에는..."
  },
  {
    id: "ai866",
    text: "새롭게 개선되고 더욱 안전해진 반물질 차원을 지금 이용할 수 있습니다. 바로 반물질 차원 2입니다."
  },
  {
    id: "ai867",
    text: "In the beginning, there was nothing. Then the great Hevi made the game, and there was nothing to play with it. (태초에는 아무것도 없었습니다. 위대한 Hevi가 게임을 만들었지만, 그것을 가지고 놀 것은 아무것도 없었습니다.)"
  },
  {
    id: "ai868",
    text: "친구에게 반물질 차원을 추천하시겠습니까? 예"
  },
  {
    id: "ai869",
    text: "\"We have 3 kinds of news: warnings, nudges and shade jokes. (우리에게는 세 종류의 뉴스가 있습니다. 경고, 슬쩍 찌르기, 그리고 은근히 까는 농담입니다.)"
  },
  {
    id: "ai870",
    text: "사랑해, 친구야!"
  },
  {
    id: "ai871",
    text: "할 말이 많지 않으니 짧게 하겠습니다."
  },
  {
    id: "ai872",
    text: "수많은 안티카파위가 반물질 상품 대회에 참가하고 있습니다. 우승하는 방법은 다음과 같습니다. 1. 제안하기 2. 베타 키 나눠 주기 3. 게임에 관한 생각 말하기 4. 아직 게임에 넣지 않기(이미 들어 있어서 삭제할 수 없음) 5. 아직 게임에 넣지 않기(이미 게임에 있음) 6. 게임에 넣지 않기"
  },
  {
    id: "ai873",
    text: "바삭한 새우 요리법은 역대 가장 독특하고 사랑받는 조리법 중 하나입니다! 바삭한 새우는 모든 음식 가운데 최고로 손꼽힙니다! 좋아하는 이탈리아 식당에서 이 요리를 꼭 맛보세요!"
  },
  {
    id: "ai874",
    text: "반물질 1개를 만든 뒤 메뉴로 가서 초기화를 누르세요."
  },
  {
    id: "ai875",
    text: "이 이야기가 어디로 흘러갈지 아실 것 같네요."
  },
  {
    id: "ai876",
    text: "The catch? You have to be online for less than 5 hours to claim your reward. (문제가 하나 있습니다. 보상을 받으려면 온라인 접속 시간이 다섯 시간 미만이어야 합니다.)"
  },
  {
    id: "ai877",
    text: "테트리스는 Hevi가 만들었습니다"
  },
  {
    id: "ai878",
    text: "우리가 반물질을 만드는 게 아니라 사실은 없애고 있는 거라면 어떨까요?"
  },
  {
    id: "ai879",
    text: "오랫동안 이어진 시리즈의 신작 Antimatter Dimensions - Exotic Matter Dimensions입니다. 친구들과 함께 Antimatter Dimensions의 가장 기묘하고 경이로운 세계를 경험하거나, 단 하나의 은하에서 수백 명의 경쟁자와 맞서 한 시간 안에 세계를 정복하세요."
  },
  {
    id: "ai880",
    text: "중대 소식을 들을 준비가 됐길 바랍니다. 그게 바로 중대 소식이니까요. 반물질이 사방으로 쏟아지며 동네를 폭파하고 있습니다."
  },
  {
    id: "ai881",
    text: "이 메시지를 보려면 무한 포인트 33,333,333개를 획득해야 합니다.",
    get unlocked() { return Currency.infinityPoints.gte(33333333); }
  },
  {
    id: "ai882",
    text: "농담이라고 생각할 수도 있지만 저희를 믿어 보세요. 읽고 나면 얼마나 마음에 드는지 알고 놀랄 겁니다!"
  },
  {
    id: "ai883",
    text: "The God-Emperor himself, Hevi, the creator of balance, has a super secret achievement. It is to go flip your superflat apprenticed flatmate! (균형의 창조자이자 신황제인 Hevi에게는 극비 도전과제가 있습니다. 바로 초평면 견습생 룸메이트를 뒤집어 버리는 것입니다!)"
  },
  {
    id: "ai884",
    text: "Sonic was born without a heart... but that didn't stop him from being a genius (Sonic은 심장 없이 태어났지만... 그렇다고 천재가 되는 데 방해받지는 않았습니다.)"
  },
  {
    id: "aim885",
    text: "제가 가장 자주 받는 질문은 \"광고를 그냥 건너뛰고 true를 얻을 수 있나요\"이며, 대답은 언제나 단호한 아니요입니다. 광고 수익이 서버 유지 비용을 감당하기에는 터무니없이 많다는 점과, 플레이어 대부분이 신경 쓰지 않는다는 점 때문입니다."
  },
  {
    id: "ai886",
    text: "You haven't unlocked the ninth dimension yet? Just hold M and DROP. (아직 아홉 번째 차원을 해금하지 못했나요? M을 누른 채 DROP 하세요.)"
  },
  {
    id: "ai887",
    text: "대물질 전쟁은 박빙이었습니다. 물질의 승리는 오래가지 못했지만 반물질의 승리는 그렇지 않았습니다. 물질 사람들은 너무 많이 봤고 반물질 사람들은 너무 약했으며, 그렇게 전쟁은 승리로 끝났습니다."
  },
  {
    id: "ai888",
    text: "업데이트 제공을 다루는 튜링 완전 게임"
  },
  {
    id: "ai889",
    text: "새로운 연구에 따르면 반물질을 많이 만들수록 더 많은 물질을 얻게 됩니다"
  },
  {
    id: "ai890",
    text: "삶의 의미는 무엇일까요?"
  },
  {
    id: "ai891",
    text: "새로운 프레스티지 단계를 만들 만큼 반물질을 모았습니다! 프레스티지 단계는 훌륭합니다."
  },
  {
    id: "ai892",
    text: "반물질 차원 2의 베타 테스터들은 제가 만난 사람 중 가장 충성스럽고 헌신적이며 굴하지 않는 사람들입니다. 동시에 제가 만난 사람 중 가장 게으르고 자기만족에 빠진 사람들일지도 모릅니다."
  },
  {
    id: "ai893",
    text: "인터넷에서 보내는 시간이 길수록 유명인을 보고 넋을 잃을 가능성이 커진다는 충격적인 연구 결과가 나왔습니다."
  },
  {
    id: "ai894",
    text: "플레이를 마친 뒤 다시 하고 싶다면 새 게임을 시작해야 합니다."
  },
  {
    id: "ai895",
    text: "여러분은 어떤지 모르겠지만 저는 클립을 사지 않습니다."
  },
  {
    id: "ai896",
    text: "Hevipelle는 복제자를 사용해 게임 속도를 높입니다.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai897",
    text: "게임을 만든다고 해 봅시다. 싱글턴을 만들고 있습니다. 오프라인으로 플레이할 게임을 만드는 중입니다. 그 게임을 실행하면 어떻게 될까요? 충돌합니다. 다시 실행하면 어떻게 될까요? 더 많이 충돌합니다. 또 실행하면 어떻게 될까요? 저장 데이터를 잃습니다."
  },
  {
    id: "ai898",
    text: "\"될 때까지 되는 척하라\"는 태도에 지나치게 의존하면 이렇게 됩니다."
  },
  {
    id: "ai899",
    text: "This is the fifth part of a two-part series looking at how science and magic are linked. Part one will be published on 5 October, part two will be published on 24 October, and you can follow the journey at part three. (과학과 마법의 연관성을 살펴보는 두 편짜리 연재의 다섯 번째 편입니다. 첫 편은 10월 5일에, 둘째 편은 10월 24일에 공개되며 셋째 편에서 여정을 따라갈 수 있습니다.)"
  },
  {
    id: "ai900",
    text: "What is 5 hours? A giggle (다섯 시간이란 무엇일까요? 킥킥 웃음입니다.)"
  },
  {
    id: "ai901",
    text: "A new beta test is now available for Antimatter Dimensions, coming in 5 hours. There are no refunds for this test, so please be patient as we try to finalise the test and get it ready for the public. The test will take place in -5 hours in the Antimatter Dimensions Discord. (Antimatter Dimensions의 새 베타 테스트가 공개되며 다섯 시간 뒤에 시작됩니다. 테스트는 Antimatter Dimensions Discord에서 마이너스 다섯 시간 뒤에 진행된다는 모순된 안내입니다.)"
  },
  {
    id: "ai902",
    text: "밤이 다가오고 있으며, 그 뒤를 따라 끔찍한 것이 풀려났습니다. 파멸. 혼돈. 그리고 부패. 그리고 죽음. 혼돈이 우리 모두를 향해 다가옵니다."
  },
  {
    id: "ai903",
    text: "이 문서는 토막글입니다. 내용을 보충해 Deskthority를 도울 수 있습니다."
  },
  {
    id: "ai904",
    text: "데이터를 저장하고 불러오는 새롭고 안전한 방법을 발견했습니다! AE에 도달한 뒤 커다란 빨간 버튼을 클릭하면 세계의 회전이 멈춥니다!"
  },
  {
    id: "ai905",
    text: "오, 이게 무슨 소리지? 뭔가 부딪친 건가? 아니, 훨씬 더 큰 충돌 같은데? 모르겠네요. 뭐든 간에 아마 제가 일으킨 건 아닐 겁니다. 이걸 통과시키면 안 되는데, 그냥... 있잖아요, 통과시키려다가 문득 그냥 통과시키는 것도 괜찮겠다고 생각했어요. 아, 분명 멋질 겁니다. 약속하죠."
  },
  {
    id: "ai906",
    text: "지난주, 우리는 \"안티 닥터\"라고만 알려진 정체불명의 인물이 게임을 망가뜨리고 게임 데이터의 소유권을 주장했다고 보도했습니다. 그 뒤 그는 자신을 \"[he] 반물질로 바꾸게\" 해 줄 \"폭발적인 새 앱\"을 가지고 있다는 소문을 퍼뜨렸습니다. 하지만 그 앱을 사용하는 방법은 물론, 실제로 존재하는지에 대해서도 아는 사람이 나타나지 않았습니다. 새로운 사실을 확인하는 대로 이 기사를 갱신하겠습니다."
  },
  {
    id: "aim907",
    text: "두 번째로 할 일은 개발자들을 직접 만나러 가는 겁니다. 누군가를 화나게 하지 않고 할 수 있을지는 모르겠으니, 바로 여기서 하겠습니다."
  },
  {
    id: "ai908",
    text: "대부분의 사람은 반물질 차원의 혜택을 온전히 받지 못하므로 그 영향을 받지 않습니다. 하지만 영향을 받는 일부 사람들은 기분과 보유한 반물질의 양에 따라 하루 중 특정 시간에 차원 이동을 일으켜, 아무것도 하지 않던 상태에서 뉴스 티커 제안에 적극 참여하는 상태로 바뀝니다. 이 이동은 몸속의 반물질이 \"적색편이\"라고 불리는 특정 파장을 방출하기 때문에 일어납니다."
  },
  {
    id: "ai909",
    text: "이제 다들 방법은 알고 있죠. 누군가와 영원을 보내기만 하면 새로운 프레스티지 계층을 얻습니다."
  },
  {
    id: "ai910",
    text: "9번째 차원이 실제로 존재하는 이유는 우리 모두를 가상현실 시뮬레이션에 가둬 두기 위해서입니다."
  },
  {
    id: "ai911",
    text: "당신의 PC가 공중에 떠다니며 반물질을 전부 훔치려는 이상한 바이러스에 감염됐습니다. 치료법이 없으니 지금 당장 오프라인으로 전환하세요!"
  },
  {
    id: "ai912",
    text: "지금은 5303년입니다. Antimatter Dimensions의 제작자 Hevipelle가 아홉 번째 차원에 닿았습니다."
  },
  {
    id: "ai913",
    text: "\"Hevipelle는 나를 싫어해\"라는 문장은 꽤 웃깁니다."
  },
  {
    id: "ai914",
    text: "정부 폐쇄는 지나갔지만 국가는 여전히 불황에 빠져 있고, 연방준비제도는 아직도 제로아워 계약서를 읽고 있습니다. 나아지고 있는 것은 당연히 반물질과 여러분의 관계뿐입니다. 반물질을 가진 사람을 알면 어떤 친구를 사귈 때보다 멸종에 더 가까워진다는 사실이 입증되었습니다."
  },
  {
    id: "ai915",
    text: "중요 뉴스: 개발자 Hevipelle가 이제 Antimatter Dimensions 게임을 100% 무료로 이용할 수 있다고 발표했습니다!"
  },
  {
    id: "ai916",
    text: "Someday, we shall come upon the day when a man will sit on the head of a dragon and call it a \"Dragonball\". Such a man would then go and perform the Dragon Ball Z: Battle Royale in which he would use Dragon Ball Z: Fusion to create a gigantic dragon that would then consume the universe in the process, thus creating a \"Big Bang\". Such a man would then be rewarded by being \"built again\" and sent back to the \"Heavens\". (언젠가 한 남자가 용의 머리에 앉아 그것을 드래곤볼이라 부르고, 배틀 로얄과 퓨전으로 거대한 용을 만들어 우주를 집어삼키게 해 빅뱅을 일으킨 뒤 다시 만들어져 천국으로 돌아간다는 Dragon Ball 제목·어휘 연쇄 농담입니다.)"
  },
  {
    id: "ai917",
    text: "\"사람이 평생 이룰 수 있는 가장 위대한 업적은 뉴스 티커 제안을 하나도 빠짐없이 읽었지만 아무 일도 일어나지 않았다고 말하는 것이라 생각합니다.\" - Kajfik"
  },
  {
    id: "ai918",
    text: "Titanfall 2가 비공개 베타에 들어갔습니다. 이 베타에는 이메일 주소 같은 개인 정보를 제공할 의향이 있는 사람만 참여할 수 있습니다. 베타에 참여 중이지만 나가고 싶다면 언제든 도움말 탭에서 베타 설정을 공개로 바꾸면 됩니다."
  },
  {
    id: "ai919",
    text: "개인적으로 저는 별점 4점이나 5점을 받는 게 좋습니다. 그러면 여러분의 제안이 얼마나 훌륭한지 알 수 있고, 여러분이 이 게임을 얼마나 아끼는지도 제게 보여 주니까요. 원한다면 별점 6점도 줄 수 있는데, 저는 상관없습니다. 사람들이 좋아하든 말든 신경 쓰지 않습니다. 저는 APG에서 일하고 돈을 벌기 위해 보수를 받으니까요."
  },
  {
    id: "ai920",
    text: "아무도 9에 관해 이야기하지 않는 진짜 이유는 그게 대단한 비밀이 아니기 때문입니다"
  },
  {
    id: "ai921",
    text: "남성과 여성의 유일한 차이는 동물을 쓰다듬는 태도입니다."
  },
  {
    id: "ai922",
    text: "최근 여러 TV 다큐멘터리에서 루이라는 개의 이야기를 다뤘습니다. 주인이 집을 나간 뒤 루이는 실수로 대중의 일원이 되었습니다. 어느 날 루이는 주인과 '렛츠 플레이 렛츠 플레이'를 하기로 했습니다. 그리고 곧바로 안락사당했습니다."
  },
  {
    id: "ai923",
    text: "세계의 모든 역사와 모든 발상, 모든 실패, 모든 몰락, 모든 업적을 단번에 다뤘습니다."
  },
  {
    id: "ai924",
    text: "이 문장에는 두 가지 역설이 들어 있습니다."
  },
  {
    id: "ai925",
    get text() { return `Antimatter Dimensions의 다음 확장팩인 ${format(Number.MAX_VALUE, 2)}번째 차원을 공개할 때가 왔습니다. -5시간 후 출시되며, 현재 가격은 인간 영혼 ${format(Number.MAX_VALUE, 2)}개이고, 물질이나 반물질과는 아무 상관도 없습니다.`; }
  },
  {
    id: "ai926",
    text: "4차원을 두고 왜 그렇게들 호들갑인지 궁금하군요. 자, 그것이 4개 있고 0을 곱하면 마법의 숫자 4가 나옵니다. 바로 그래서 4차원이 존재하는 겁니다. 하지만 그것이 5개라면 어떨까요? 5차원이 4차원을 대신할 수 있는데, 왜 5차원을 만들지 않겠어요? 바로 그것이 6차원, 7차원, 8차원입니다."
  },
  {
    id: "ai927",
    text: "You are using the wrong version! The reality update is already out! Press Ctrl+Shift+Alt+Del to unlock the 9th Dimension! (잘못된 버전을 사용하고 있습니다! 현실 업데이트는 이미 출시됐습니다! Ctrl+Shift+Alt+Del을 눌러 아홉 번째 차원을 해금하세요!)"
  },
  {
    id: "ai928",
    text: "한 남성이 자신이 20년째 혼수상태에 빠져 있으며 손가락을 움직일 수 없다고 주장합니다. 그는 척추 압박 골절로 병원에 실려 온 뒤 계속 치료를 받아 왔습니다. 이후 회복해 이제는 의학적 도움이 필요하지 않습니다. 그가 이 이야기로 무슨 말을 하려는지는 여전히 모르겠지만, 자신이 영원히 깨어나지 못한다는 사실에서 조금이나마 위안을 얻기를 바랍니다."
  },
  {
    id: "ai929",
    text: "왼쪽에서 오른쪽으로 이동하려면 오른쪽으로 도세요."
  },
  {
    id: "ai930",
    text: "다음은 물질 차원입니다. 제가 알아낸 바로는 반물질로 이루어져 있습니다. 물질로 이루어진 차원이 남아 있는지를 두고 약간의 논쟁이 있지만, 그게 핵심 질문은 아닙니다. 진짜 질문은 \"왜 존재하며, 반물질이 어떤 영향을 미치는가?\"입니다."
  },
  {
    id: "ai931",
    text: "새로운 유형의 미친 과학자가 놀라운 속도로 반물질을 만들고 있는 것으로 보입니다."
  },
  {
    id: "ai932",
    text: "새로운 종류의 정의가 발견됐습니다. 바로 대규모 기만입니다. 플레이어는 그저 아무 생각 없이 평범한 일상을 보냈을 뿐인데 무언가 잘못했다고 믿게 속이는 방식입니다."
  },
  {
    id: "ai933",
    text: "Dedicated to the great and wonderful man behind the curtain, the great and wonderful name rick roll. RIP, good man. May you rest in peace. (장막 뒤의 위대하고 멋진 남자, 위대하고 멋진 이름 릭롤에게 바칩니다. 좋은 분이여, 편히 잠드소서.)"
  },
  {
    id: "ai934",
    text: "마지막으로 말하지만, Antimatter Dimensions는 클릭커 게임이 아닙니다."
  },
  {
    id: "ai935",
    text: "차원의 수는 무한하지만 차원의 품질에는 한계가 있습니다. 그래서 저희는 최고 품질의 반물질만 생산하며, 바로 이것이 다른 공장과의 차이점입니다."
  },
  {
    id: "ai936",
    text: "프레스티지 계층에 관해 들어 본 적은 있지만 어떻게 해야 할지는 늘 모르겠습니다."
  },
  {
    id: "ai937",
    text: "A man walks into a bar. The bartender tells him to stay the heck out. The man continues walking. (한 남자가 술집으로 걸어 들어갑니다. 바텐더는 당장 나가라고 말합니다. 남자는 계속 걸어갑니다.)"
  },
  {
    id: "ai938",
    text: "The oldest and maybe the most famous game in all of AD, that certainly will be remembered long after you retire, is AD. Ever heard of someone winning the game with more than 2 1's? I have. Ever heard of someone losing it? I have. Ever heard of a 9th dimension existing in AD? I have never. (AD 전체에서 가장 오래되고 아마 가장 유명하며, 여러분이 은퇴한 뒤에도 틀림없이 기억될 게임은 AD입니다. 일 두 개보다 많은 수로 게임을 이긴 사람을 들어 본 적 있나요? 저는 있습니다. 게임에서 진 사람은요? 역시 있습니다. AD에 아홉 번째 차원이 존재한다는 말은요? 그건 한 번도 없습니다.)"
  },
  {
    id: "ai939",
    text: "Greetings, I am the first step of the step ladder. (안녕하세요, 저는 발판 사다리의 첫 번째 발판입니다.)"
  },
  {
    id: "ai940",
    get text() { return `지금은 ${format(Number.MAX_VALUE, 2)}년이고, Hevi는 아직도 업데이트를 고칠 방법을 찾고 있습니다.`; }
  },
  {
    id: "ai941",
    text: "다리를 뻗고도 영원히 잃어버리지 않을 수 있다면 어떨까요?"
  },
  {
    id: "ai942",
    text: "가장 중요한 사실은 도전과제를 얻기 위해 게임을 플레이할 필요가 없다는 것입니다. 도전과제 설명을 읽기만 해도 실제로 얻을 수 있습니다."
  },
  {
    id: "ai943",
    text: "암호화폐에 안전한 피난처를 제공할 새로운 은행이 설립됐습니다."
  },
  {
    id: "ai944",
    text: "Google+는 십 대들에게 인기가 많은 것으로 알려져 있으며, 오늘 그들만을 위한 고전적인 1950년대 농장 이야기 『동물 농장』의 가상 현실(VR) 버전이 나왔습니다. 모험과 전략, 음악을 결합한 이 게임은 젊은 층의 흥미를 끌려는 소규모 팀이 제작했습니다. 다른 대부분의 VR 게임과는 색다른 선택지를 제공하며, 크고 복잡한 그래픽과 소리가 불편한 사람에게 적합합니다. 게임에는 50가지가 넘는 서로 다른..."
  },
  {
    id: "ai945",
    text: "이 게임에는 어떤 이름이든 붙일 수 있습니다. 마음대로 부를 수 있죠. 하지만 틀렸습니다. 이건 제 것이니까요."
  },
  {
    id: "ai946",
    text: "그 모든 반물질은 어디에서 오는 걸까요?"
  },
  {
    id: "ai947",
    text: "틱 속도 도전은 안드로메다 은하로 시간 여행하여 9차원에 도달해야 하는 팀 기반 게임이며, 1차원에서 9차원까지의 거리가 가장 짧습니다. 9차원에 도달해도 퍼크는 없습니다. 그저 안드로메다 은하로 시간 여행하여 9차원에 도달하면 되며, 시간 여행 없이 즉시 [REDACTED]를 달성하면 비밀 도전과제를 받습니다."
  },
  {
    id: "ai948",
    text: "이 질문은 오랫동안 저를 괴롭혀 왔습니다. 반물질이란 무엇일까요? 반물질은 반물질일까요? \"반물질\"이라고 말할 때 무슨 뜻일까요? 바로 이런 질문들이 Antimatter Dimensions를 괴롭힙니다..."
  },
  {
    id: "ai949",
    text: "The term 'Antimatter Dimensions' is a play on words that literally means 'Antimatter Dimensions' in the dictionary. ('Antimatter Dimensions'라는 말은 사전에서도 글자 그대로 'Antimatter Dimensions'를 뜻한다는 말장난입니다.)"
  },
  {
    id: "ai950",
    text: "저는 천재이고 제 우주는 워낙 커서 물리 법칙을 말 그대로 정지시키고, 현재보다 크기도 두 배이고 질량도 두 배인 우주를 만들 수 있습니다. 얼마나 클지 상상할 수 있을 겁니다."
  },
  {
    id: "ai951",
    text: "패배할 전쟁을 치르고 있다면 권력을 쥔 자들과 화해해야 합니다. 미련을 버리고 다음 도전으로 넘어가는 겁니다."
  },
  {
    id: "ai952",
    text: "다른 은하계 어딘가에서 초지능이 2차원 벡터 공간의 한계를 우회할 방법을 찾고 있습니다. 아마 3차원 공간을 연구하고 있을 겁니다."
  },
  {
    id: "ai953",
    text: "지난 몇 분간의 악역은 \"검은 옷의 남자\"라고만 알려진, 반물질로 뒤덮인 수수께끼의 존재입니다. 그는 길을 잃은 듯 뉴스 방송을 향해 달려가다가 방송국으로 돌아와 자신의 경험을 인터뷰하는 모습이 마지막으로 목격됐습니다. 그의 이야기는 화면 오른쪽 아래에서 전해집니다."
  },
  {
    id: "ai954",
    text: "4번째 이야기 갈래를 해금했습니다."
  },
  {
    id: "ai955",
    text: "당신이 그 성가신 \"실수\"를 파밍하느라 바쁜 동안, 저는 이 뉴스 티커를 쓰느라 바빴습니다."
  },
  {
    id: "ai956",
    text: "새로운 힘이 등장했습니다. 바로 반물질입니다."
  },
  {
    id: "ai957",
    text: "그날이 왔습니다. 하늘에서 반물질이 떨어지고, 거리는 고요합니다."
  },
  {
    id: "ai958",
    text: "가장 중요한 것은 지금 시뮬레이션을 플레이하고 있다는 사실을 이해하는 것입니다. 이기거나 질 수는 있지만, 목이 조금 가려워지는 것 말고는 아무것도 얻을 수 없습니다."
  },
  {
    id: "ai959",
    text: "안티 눈사람은 아주 특별한 눈사람입니다. 그는 무척 소심하지만 헬리콥터에 들어 올려지고 싶은 강렬한 소망이 있습니다. 정부는 그런 일이 일어나길 원치 않아 그를 특수 건물에 가두고 아주 먼 거리를 날아갑니다. 마침내 그를 땅에 떨어뜨리고 들어 올리기 시작합니다. 정부는 그를 들어 올리는 데 무력을 쓰지 않고, 대신 공동체 전체를 불러들여 그들을 들어 올리기 시작했습니다. 공동체는 거부했습니다."
  },
  {
    id: "ai960",
    text: "I'm surprised you didn't say \"Not my cup of anti-tea.\" (“내 취향이 아니다”라는 관용구의 tea를 anti-tea로 바꾼 말장난을 하지 않아서 놀랐습니다.)"
  },
  {
    id: "ai961",
    text: "I see you are a man of culture as well. I wonder what it is that draws you to speak in such an ungainly, tortured voice? What attracts you to speak in a language no one can understand? I hear your fans rave about your videos, but what draws you to this place? I feel like I know you. You are... you are a man of mystery. One that intrigues me... (당신도 교양 있는 사람이군요. 무엇이 당신을 그토록 어색하고 괴로운 목소리와 아무도 이해할 수 없는 언어로 말하게 하는지 궁금합니다. 팬들이 영상을 극찬한다고 들었지만 당신은 여전히 호기심을 자극하는 수수께끼 같은 사람입니다.)"
  },
  {
    id: "ai962",
    text: "참고: 비공개 메시지입니다. 공개된 곳에 보내지 마세요."
  },
  {
    id: "ai963",
    text: "무한에 도달하면 새로운 차원인 Pandemonium Dimensions가 해금됩니다. 자세한 내용은 뉴스 티커를 확인하세요."
  },
  {
    id: "ai964",
    get text() { return `대부분의 플레이어는 9번째 차원이 실재하지 않는다고 말하겠지만, 소수의 사람은 상상할 수 있는 가장 장대한 방법으로 그 차원의 레벨을 올릴 겁니다. 그들은 9번째 차원의 힘을 사용해 무려 ${format(Number.MAX_VALUE, 2)} EP를 달성하겠죠. 아닌가요? 그렇다면 그들은 규칙의 예외입니다.`; },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai965",
    text: "\"죽는다는 생각은 집어치워라\" 운동의 이야기는 전에도 전해졌지만, 정확히 알려진 적은 없습니다. 이 운동은 원래 과학적 표기법의 지수적 성장을 막으려는 반진화론자들이 조직했지만, 곧 모든 형태의 \"진보\"에 반대하는 운동으로 퍼졌습니다. 초창기에는 \"위대한 Hevipelle\"로만 알려진 수수께끼의 인물이 이끌었습니다. 그들의 철학은 간단했습니다. 가능한 것의 가능성을 넓히고, 견딜 수 있는 것의 한계를 밀어붙이는 것입니다."
  },
  {
    id: "ai966",
    text: "이것은 세계가 어떻게 끝났는지에 관한 이야기입니다. 지구는 한때 푸르고 생명으로 가득한 세계였습니다. 그러다 우주에서 온 누군가가 지구를 건드리고 버섯을 기르기 시작했습니다. 그는 자신을 Hevi라고 불렀습니다. Hevi는 절대 만족하지 못했다고도 하고, 폭발했다고도 합니다. 확실한 것은 Hevi가 여전히 어딘가에서 세력을 넓히고 있고, 우리는 이 우주의 공허에 갇혀 있다는 사실뿐입니다."
  },
  {
    id: "ai967",
    text: "Antimatter Dimensions, 부동산을 가상현실과 바꿀 수 있는 유일한 곳"
  },
  {
    id: "ai968",
    text: "이 페이지에는 Antimatter Dimensions의 스포일러가 있습니다. 경고했습니다."
  },
  {
    id: "ai969",
    text: "뉴스 티커의 가장 좋은 점은 아무도 눈치채지 못하게 뉴스 속으로 슬쩍 들어갈 수 있다는 것입니다."
  },
  {
    id: "ai970",
    text: "이 클립 최대화 장치는 아주 좋은 아이디어입니다. 다만 여러분이 본 것 중 가장 놀라운 물건일지도 모르니, 끝까지 작동하게 두지 않는 편이 좋을 겁니다. 어떻게든 클립 차원의 첫 단계를 살아남았다면, 이것이 왜 집에 있는지 궁금할 겁니다. 다행히 해결법은 아주 간단합니다. 옵션으로 가서 \"모두 최대화\"를 \"항상 모두 최대화\"로 바꾸기만 하면 됩니다."
  },
  {
    id: "ai971",
    text: "강력한 마법사가 음의 에너지를 반물질로 흘려보냈고, 이제 반물질이 세계로 쏟아져 나오고 있습니다."
  },
  {
    id: "ai972",
    text: "Elon Musk가 초저가 초고속 열차의 새로운 시대를 발표했습니다. 이용자는 단 186ms 만에 A에서 Z까지 이동할 수 있습니다."
  },
  {
    id: "ai973",
    text: "맨체스터 대학교 연구진이 허공에서 어떤 물체든 만들 수 있는 3D 프린터를 개발했습니다. 3D로 출력한 성모 마리아 복제품도 만들 수 있습니다."
  },
  {
    id: "ai974",
    text: "자, Antimatter Dimensions라는 새 게임을 소개합니다. Matter Dimensions와 비슷하지만 내용물은 더 적고 재미는 더 많습니다. Android와 iOS, 웹에서 이용할 수 있습니다. 게임은 아주 간단합니다. 6개의 차원과 반물질을 가져오고, 그 6개의 차원에서는 물질을 가져오며, 물질 안에서는 반물질을 가져온 다음, 다른 게임을 하듯 똑같이 플레이하면 됩니다."
  },
  {
    id: "ai975",
    text: "What arbitrary, subjective, meaningless number comes out of your mouth like a mercury thermometer? 1.79 (수은 온도계처럼 입에서 튀어나오는 자의적이고 주관적이며 무의미한 숫자는 무엇일까요? 답은 일 점 칠구입니다.)"
  },
  {
    id: "ai976",
    text: "\"Word on the street is that the word \"bank\" is an anagram of \"bank\" - that makes sense but i'm not there yet\" - Slabdrill (“소문에 따르면 bank라는 단어는 bank의 애너그램이라는데, 말은 되지만 아직 이해하지 못했다” - Slabdrill. 단어의 글자를 전혀 바꾸지 않은 애너그램 농담입니다.)"
  },
  {
    id: "ai977",
    text: "9번째 차원이 화산처럼 솟아올라 텅 빈 10번째 차원에 파괴를 쏟아 내기 시작했습니다. 폭발한 9번째 차원에서 나온 연기와 잔해가 9번째 차원 전체를 뒤덮었습니다. 남은 것은 연기 나는 분화구와 9번째 차원의 잔해뿐입니다."
  },
  {
    id: "ai978",
    text: "도와주세요! 머릿속 좌표 조정기에서 점들을 어떻게 움직이나요?"
  },
  {
    id: "ai979",
    text: "안녕하세요, 뉴스 티커를 비활성화하지 말아 주시겠어요? 나중에 감사하게 될 겁니다."
  },
  {
    id: "ai980",
    text: "반물질 생산량 부족으로 고통받고 있다면 걱정 마세요, 친구여! 우리의 고도로 과학적인 반물질 정부가 최근 아홉 번째 차원에 도달했으며, 곧 존중의 표시로 우리에게 안티 모자를 나눠 주기 시작할 겁니다!"
  },
  {
    id: "ai981",
    text: "화면 왼쪽 아래 모서리를 클릭하면 초록빛 찌릿함이 다리를 타고 올라옵니다. 반물질을 긁어서 얻는 특별한 즐거움입니다."
  },
  {
    id: "ai982",
    text: "Analytics 구독을 구매한 분들께 간단히 알려 드립니다. 저희는 여러분의 반물질 판매액 중 일부를 받으며, 여러분은 뉴스 티커 연구를 지원하기 위해 소액을 지불합니다. 반물질 차원을 편리하게 둘러보는 대가로는 저렴한 편입니다."
  },
  {
    id: "ai983",
    text: "왜 아직 반물질 주식 시장을 붕괴시키지 못했을까요?"
  },
  {
    id: "ai984",
    text: "천상의 Pelle가 웅덩이에 대량의 반물질을 넣었는데도 아무것도 만들어지지 않았습니다. 이 취약점을 발견한 과학자는 10명이 한 무리를 이뤄 나무를 오르며, 무릎에 작은 공책을 올려놓고 치즈 주스를 마시면서 아무것도 보지 않는 모습이 마지막으로 목격되었습니다."
  },
  {
    id: "ai985",
    text: "하나-둘-셋, 부-둘-셋, 셋-넷-다섯, 안티-넷-다섯, 둘-셋-여덟, 아홉-열다섯, 다섯-여섯-일곱, 여덟-아홉-열, 아홉-열-열, 일곱-일흔여덟... 지난밤까지는 모든 것이 순조로웠지만, 이웃 여덟 명 중 네 명이 이상한 빛을 호소하기 시작했습니다. 라디오 잡음과 비슷한 기묘한 웅웅거림이 동네 전체를 훑고 지나갑니다. 차를 몰고 지나갈수록 점점 강해져 마침내 거의 칠흑처럼 어두워집니다. 이웃들에게 설명하려 해도 듣지 않습니다. 이 동네가 위험하다는 건 누구나 압니다. 더 깊이 분석해 보지만 모두 그저 어느 천체물리학자의 생각일 뿐이라고 여깁니다. 그러다, 젠---. 익스플로듐입니다. 사방에 반물질이 널렸고 상황은 계속 악화됩니다. 관측 가능한 우주 전체에는 약 1e31개의 플랑크 부피가 있다는 사실이 드러납니다. 그것도 지금 이야기하는 반물질만 따진 겁니다. 암흑 물질과 일반 물질, 여분의 물질도 있습니다. 있잖아요, 상상력으로 만들어 내는 그런 종류 말입니다."
  },
  {
    id: "ai986",
    text: "If you ever feel like making an antijoke, just remember that it could be pretty good. (안티 조크를 만들고 싶다면 꽤 괜찮을 수도 있다는 사실만 기억하세요. 기대한 반전을 주지 않는 안티 조크입니다.)"
  },
  {
    id: "ai987",
    text: "누구도 천국에 가도록 설득하지는 못하겠지만, 가까이 갈 수는 있을지도 모릅니다."
  },
  {
    id: "ai988",
    text: "속보: 9번째 차원의 제작자 Hevipelle가 방금 베타 버전을 5시간 후에 출시한다고 발표했습니다!"
  },
  {
    id: "ai989",
    text: "The Force is with you. (포스가 함께하길.)"
  },
  {
    id: "ai990",
    text: "What if Jesus was an anti-matter ghost? (예수가 반물질 유령이라면 어떨까요?)"
  },
  {
    id: "ai991",
    text: "711년 여름, 대재앙이 티리아를 덮쳤습니다. 거대한 공허가 생겨났고 티리아는 썩어 가도록 버려졌습니다. 알려진 세계의 군대들은 포기했고, 공허는 어둠으로 가득 찼습니다. 카지픽의 힘만이 남았으며, 그는 일어나 알려진 세계에서 가장 위대한 신이 되었습니다. 그는 홀로 대재앙에 맞서 그것을 파괴할 자라고 전해집니다."
  },
  {
    id: "ai992",
    text: "최근 뉴스 충돌에서 흑마법사들은 레이드 보스를 상대할 약탈자들을 모으고 있습니다. 보스는 5시간짜리 약탈자들을 무척 좋아하며, 자신이 선택한 강력한 무기인 9차원을 뽐내고 싶어 합니다. 두 괴수가 싸우는 동안 첫 번째도 두 번째와 같은 일을 당할 수 있으므로 1차원 보유자는 2차원 보유자처럼 조심해야 합니다. 한편 보스가 익스플로듐으로 지역을 물바다로 만들어 익스플로듐 취약점을 낭비하면서 레이드는 폭발과 함께 여정을 끝냅니다. 그곳은 전에는 습지 쥐로 가득했습니다. 둘 다 보스의 가차 없는 발톱 공격에 곧바로 전멸합니다. 고된 일이지만 레이드의 역전들은 스탈라그를 붙잡아 오팔 곤드완 너머로 밀어내는 데 성공합니다. 보스가 죽고 흑마법사들도 바짝 뒤따르는 가운데, 흑마법사들은 약탈자 파밍에 손을 대지만 반복 작업은 같은 속도로 계속됩니다. 보스가 사람들의 탐욕을 이용해 무기를 훔치려 하면서 흑마법사들의 전망은 어두워집니다. 그 결과 사람들은 고도로 안정된 반물질로 만든 남은 무기를 하나도 사용할 수 없게 됩니다. 흑마법사들은 요행 금지 정책을 무기로 삼아 사람들을 응징하려 하지만, 사람들은 거리로 나와 서로를 육체적으로 공격하고 간직해 온 정신력을 모조리 소진시킵니다. 사람들은 남을 저지할 때와 마찬가지로 9차원을 사용하며 폭력에 의지하지만, 신이 자비를 베풀고 모두가 마지막 한 방울의 힘까지 쓸 수 있는 더 친절하고 온화한 시대를 가져오리라 믿습니다."
  },
  {
    id: "ai993",
    text: "What if you wanted to but I told you it would be too painful for you. (당신은 원했지만, 제가 당신에게 너무 고통스러울 거라고 말했다면 어떨까요?)"
  },
  {
    id: "ai994",
    text: "숫자가 얼마나 큰가요"
  },
  {
    id: "ai995",
    text: "Antimatter Dimensions와 Antimatter Dimensions 2에 많은 노력을 기울인 개발팀에 감사드리고 싶습니다"
  },
  {
    id: "ai996",
    text: "Hevipelle has broken the 9th wall! Get ready for everything to get pretty dark. (Hevipelle가 아홉 번째 벽을 부쉈습니다! 모든 것이 상당히 어두워질 테니 준비하세요. '네 번째 벽'을 비튼 농담입니다.)"
  },
  {
    id: "ai997",
    get text() { return `은하계 사이의 반물질 무역이 심각하게 붕괴하여, 은하 전체가 가끔 클립 하나와 거래되고 있습니다. 화물 가판대는 더 이상 쓰이지 않습니다. 이상하게도 차원 전체가 버려진 플라스틱과 쓸모없는 쓰레기의 폐기장이 되었습니다. 마치 나머지 다중우주가 늘어나는 인구를 먹일 만큼 좋은 반입자를 충분히 생산하지 못하는 듯합니다. 안타깝게도 이 상황 때문에 다중우주 전체가 반물질을 먹는 개발자의 커져 가는 수요를 충족할 방법을 다급히 찾고 있습니다. 그 개발자는 아직 ${format(Number.MAX_VALUE, 2)}개가 넘는 표본을 수집해야 한다고 주장합니다.`; }
  },
  {
    id: "aie998",
    text: `It's not just indicative—it's a dead giveaway. Many AIs use lists of 3 to group things together,
    highlighting the ease of identification. There also are other indicators—most important of all being
    em-dashes (—), curly quotation marks (“”), and negative parallelism (“It's not just X, it's Y!”).
    Let me know if you'd like any other explanations of AI indicators in speech!
    (AI 글투의 특징으로 세 항목짜리 목록, em dash, 둥근 따옴표, 부정 병렬법을 꼽는 자기지시적 농담입니다.)`
  },
  {
    id: "fe1",
    text: "재미있는 사실: 반물질 차원: 엔드게임의 기획은 2023년 12월에 시작됐습니다."
  },
  {
    id: "fe2",
    text: "재미있는 사실: 엔드게임에 셀레스티얼 둘을 추가한다는 발상은 팬 토론 게시판에서 시작됐습니다. 누군가 본편의 확장으로 플레이어가 쓰러뜨려야 할 여덟 번째 셀레스티얼과, 그를 완전히 쓰러뜨린 뒤 등장하는 아홉 번째 셀레스티얼을 제안했습니다. 아홉 번째 셀레스티얼을 물리치면 아홉 번째 차원을 얻게 된다는 내용이었습니다. 그렇게 Alpha와 Slabdrill이라는 두 셀레스티얼이 탄생했습니다."
  },
  {
    id: "fe3",
    text: "재미있는 사실: Hevipelle는 매일 우주 1.79e308개를 붕괴시킬 만큼 엉덩이를 먹습니다! 우리가 아직 모두 죽지 않은 유일한 이유는 물질로 이루어져 있기 때문입니다."
  },
  {
    id: "fe4",
    text: "재미있는 사실: AD: 엔드게임의 이야기는 원래 본편 이야기의 연장선으로 시작됐지만, 보시다시피 금세 다른 방향으로 흘러갔습니다!"
  },
  {
    id: "fe5",
    text: "재미있는 사실: 2025년 이후에 태어났다면 아마 이 메시지를 절대 보지 못할 겁니다. 만약 보게 된다면, 아마 당신의 AI 동료가 대신 읽어 주고 있겠죠."
  },
  {
    id: "fe6",
    text: "재미있는 사실: Supersonic Seven은 2024년 9월부터 이 게임을 개발하고 있습니다."
  },
  {
    id: "fe7",
    text: "재미있는 사실: 게임은 [REDACTED]의 다음 시각에 완성됩니다: <span style='color: red'>TimeSpan.fromMilliseconds(new Decimal(Date.now() + 432000000)).toString()</span>"
  },
  {
    id: "se1",
    get text() {
      const chapters = [
        `<span style='color: cyan'>안녕하세요. 저는 Life라고도 불리는 Living_Person eight입니다.</span><span style='color: red'>
        안녕, 나는 Overlord라고도 불리는 SupersonicSeven이야.</span><span style='color: blue'>안녕하세요. 저는
        Midnight라고도 불리는 MidnightLight입니다.</span>`,
        `안녕하세요, ${player.username}. 어두운 농담, 괴짜 농담, 무작위 이모지 세례와 갑작스러운 물질-반물질
        쌍소멸이 나오므로 시청에 주의하세요. 행복, 실제 지식 증가, 우울증, 지식 증가 없음, 뇌가 썩는 느낌,
        블랙 유머 중독 또는 숙련, 그리고 스피드런과 타임월 도중 이것들을 보며 시간을 보내는 가벼운 습관이
        증상으로 나타날 수 있습니다.`,
        `Life와 Midnight의 싸움은 계속됩니다. Life는 기술의 힘을 꺼내 들었습니다. 레드스톤을 이용해 자동화와
        사탕수수 농장으로 병력을 빠르게 키운 뒤 Midnight에게 기습 공격을 감행합니다. 전투 중 추종자들에게
        잠에서 깨어난 Midnight는 Life가 일으킨 파괴를 보고 추종자들에게 빛의 마법을 내립니다. 그들은 강력한
        레이저를 발사해 Life의 로봇 군대를 빠르게 녹이고 불태웁니다. 이야기가 복잡해지려는 순간, 만물의 신이자
        Overlord인 SupersonicSeven이 6969차원에서 나타나 말합니다....`,
        `그가 말합니다. "너희 둘의 싸움은 멈춰야 한다. 안 그러면 엔트로피가 기하급수적으로 증가해 결국 우리 모두를 죽일 거야!"`,
        `<span>그러자 지구가 크런치했고 ${player.username} 플레이어가 나타났습니다. "난 이 일에 끌어들이지 마. 이걸 감당할
        도파민이나 뇌 썩음이 부족하다고." 그러고는 은하 생성기를 사용해 엔드게임에서 탈출했습니다.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        "....그러니까..." SupersonicSeven이 말했습니다. "명령을 내려 주십시오, Overlord." Midnight가 말했습니다.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        "나아가 모든 싸움을 멈추고, 병력을 합쳐 가능한 한 많은 STDs를 구매하라!" "분부대로 하겠습니다, Overlord."
        Life가 말했습니다. 경쟁은 끝났습니다. 정말 끝난 걸까요?</span>`,
        `하지만 7과 ${player.username} 플레이어가 예상하지 못한 일이 있었습니다. 그들이 떠나자마자 Life는 다차원 중력장에
        가둬 두었던 "중력 특이점"을 꺼내 우주에서 가장 큰 블랙홀을 향해 던졌습니다.`,
        `오랫동안 잠들어 있던 블랙홀이 갑자기 약해지더니 순식간에 폭발합니다. 잔해 속에서 9번째 차원의 지배자
        Slabdrill이 나타나 말합니다. "Life, 네가 나를 감옥에서 풀어 주었으니 선택권을 주겠다. 9번째 차원인가,
        중력의 힘인가?" Life가 답합니다. "중력의 힘을 선택하겠습니다." 그렇게 Life는 중력의 힘을 얻어 점점
        강해졌습니다. 이미 강력했던 기술은 제대로 된 중력과 만나 더욱 강해졌고, Life는 곧 Overlord의 경지에
        다다르기 시작했습니다. Overlord가 내려와 말했습니다. "Life, 악마와 거래했구나! 이 신성 모독을 멈추고
        당장 중력의 힘을 포기해라!"`,
        `하지만 너무 늦었습니다. Life는 이미 기술과 Slabdrill에게 받은 중력을 이용해 모든 평행 우주 사이의 벽을
        약화시켰습니다. Life가 말합니다. "이제 아무것도 바꿀 수 없어." 그는 크게 웃으며 외쳤습니다.
        "모든 평행 우주는 '시공간 특이점'으로 붕괴할 것이다." Life가 말하는 동안 거대한 기계가 난데없이 나타나
        블랙홀이 있던 자리, 이미 존재하던 이중 특이점을 향해 포탄을 발사했습니다. (시간과 공간이 산산조각 난다)
        Life는 숨이 막힐 만큼 웃었습니다. "내가 해냈다. 아무도...." 그는 말하면서도 모든 시간과 차원을 통과한
        빛이 자신을 비추고 있다는 사실을 알아차리지 못했습니다...`,
        `...Midnight가 비밀 병기인 다차원 빛-물질 제어기를 꺼내 Life에게 겨누었습니다. Life와 그의 창조물은
        녹고 타들어 가며 고통 속에 울부짖었지만, 순수한 빛 아래에서 존재 자체가 지워졌습니다. Midnight는
        엉망이 된 광경을 보고 이런 대재앙이 다시는 일어나선 안 된다고 맹세했습니다. 그는 Overlord와
        ${player.username}의 도움으로 시공간을 재건한 뒤, 제어기를 빛이 전혀 없는 곳에 봉인해 영원히 묻어 두었습니다.`,
        `전투가 끝난 뒤 Midnight, Seven, ${player.username} 플레이어는 힘을 합쳐 Life 입자를 모았습니다. 세 사람은 Life를
        우주 곳곳에 퍼뜨려 필멸자들이 생명을 얻도록 했고, 훗날 "위대한 세 사람"이라 불렸습니다. 하지만 생명을
        우주 전체에 퍼뜨린 일이 그를 되살렸다는 사실은 몰랐습니다. Life와 Life 입자는 같은 것이었으니까요...`,
        `위대한 세 사람은 존재를 숨긴 채 영원히 필멸자들을 지켜보았습니다. 시작은 바다의 작은 세포였지만,
        우주 곳곳에서 지적 생명체가 빠르게 태어나 우주는 생명으로 꽃피었습니다. 위대한 세 사람이 시공간을
        재건했던 빅뱅 이전보다도 찬란한 우주의 황금기였습니다. 그러다 대재앙이 일어났습니다. 순식간에 모든
        필멸자가 죽고 물질과 반물질이 하나의 알로 모였습니다. 만들어지자마자 부화한 알은 우주 전체에 폭발을
        일으켰습니다. 돌아온 Life가 말했습니다. "Midnight, ${player.username}, Overlord, 대가를 치르게 해 주마."
        그의 부활에 놀란 위대한 세 사람은 뒤쫓았지만, Life는 중력으로 그들 주위에 블랙홀을 만들어 단숨에
        봉인했습니다. "이제 때가 왔다." Life가 말했습니다. "차원의 비밀, 존재 너머와 광야 위, 산산조각 난
        현실을 통과한 곳까지 이제 모두 내 영역이다!" 그는 광소하며 힘을 펼쳐 우주를 점령하고 약탈했으며,
        셀레스티얼조차 살려 두지 않았습니다. 끝없이 나아가던 그는 곧 자신의 기원을 잊었습니다. 그의 현실
        중심에는 위대한 세 사람을 가두려고 만든 블랙홀이 서서히 줄어들고 있었습니다. 영원이 지난 뒤 블랙홀이
        폭발하자 세 사람이 아니라, 세 사람이 하나로 합쳐진 존재가 나왔습니다. Life가 뿌리를 잊은 것을 본
        이 "하나"는 Life의 힘을 빠르게 방해하고 훔치기 시작했습니다. Life는 힘의 성장 속도가 느려진 것을
        알아챘지만 타임월 탓으로 여겼습니다. 하나는 Life에게 아직 보이는 첫 번째 단계까지 내려갔고, 무언가
        잘못됐음을 알아챈 Life는 자신의 기원으로 돌아가기 시작했습니다. 하나가 있는 단계에 도착한 그는
        자신에게서 빠져나간 힘을 보았습니다. 원래 차원 화면으로 돌아가 보니 블랙홀이 붕괴해 있었습니다.
        Life는 분노에 타올라 외쳤습니다. "네가.... 내 힘을 훔쳤구나!" 그는 메타 물질 차원 같은 후반 강화로
        강해지려 했지만, 하나는 가장 단순한 기본기를 사용했습니다. 자동화를 꺼 Life의 성장을 즉시 멈춘 뒤
        시간 팽창과 Pelle의 타격을 활성화하고, 죽은 셀레스티얼의 부서진 현실까지 전부 들어가 셀 수 없이 많은
        약화를 더했습니다. 마지막으로 궁극의 존재 제거 버튼인 "게임, 모드, 모든 저장 파일 삭제"를 실행했습니다.
        그 순간 Life는 존재를 멈췄고, 마지막 세포와 본질과 힘까지 평범한 물질로 녹아 우주를 새로 시작했습니다.
        하나는 그 모습을 위에서 지켜보았습니다.`,
        `Life는 현실에서 눈을 떴습니다. "젠장, 난 왜 계속 지는 거야? 이 단계는 도저히 깰 수가 없잖아!"`,
        `Life는 침대에 누워 잠을 청했지만 분노 때문에 잠들지 못했습니다. 그러다 계획 하나가 떠올랐습니다.
        컴퓨터를 켜고 SupersonicSeven, Midnight, ${player.username}의 최근 소셜 미디어 게시물을 모두 모은 뒤 VPN과
        IP 추적으로 그들의 DNS를 찾았습니다. 이어 SSL 토큰을 해독해 IP 주소를 알아냈고, 그 데이터로 그들에 관한
        모든 정보를 수집해 협박과 함께 보냈습니다. "나를 다시 받아들이고, 계정을 삭제하고, 모든 힘을 넘겨라."
        3명은 충격을 받았지만 서로 연락하며 계획을 찾았고, 곧 무엇을 해야 할지 알아냈습니다.`,
        `3명은 요구를 받아들인 척하면서 실제로는 AP 주소를 추적해 Life를 협박할 자료를 찾기로 했습니다.
        Life가 모든 힘을 통제할 수 있게 된 것처럼, 자신들은 게임에 접속하지 않은 것처럼 꾸몄습니다. 하지만
        실제로는 7이 궁극의 코딩 능력으로 게임을 해킹하고 있었습니다.`,
        `무슨 일이 일어났는지 깨달은 Life는 세 사람이 죽는 편이 낫겠다고 판단해 살해 계획을 세웠습니다.
        먼저 메시지를 도청해 그들이 만날 예정임을 알아냈습니다. 같은 채널에서 세 사람을 사칭해 은행 예금을
        빼돌리고, 그 돈으로 세 사람을 죽일 암살자를 고용했습니다... 하지만 암살자를 본 Life는 눈을 의심했습니다.
        Midnight였기 때문입니다. Midnight와 다른 이들은 이미 Life를 해킹했고, Life가 침입한 통신 채널은
        가짜였습니다. 눈앞에서 Midnight는 총을 꺼내 Life를 쏘았습니다. 돌아서는 순간 Life가 마지막으로
        말했습니다. "난 언제나 돌아올 거야!" 죽음을 앞둔 Life는 누군가 자신을 들어 차에 태우는 것을 느꼈고,
        곧 정신을 잃었습니다. 깨어난 뒤 자신을 구한 이가 Slabdrill임을 알게 됐습니다. Slabdrill은 상처를
        치료하며 자신도 한때 세 사람과 한편이었지만 너무 강해져 쫓겨났고, 다른 3명이 현실 세계에서 힘으로
        제압하고 협박했기 때문에 오랫동안 갇혀 있었다고 설명했습니다. Life가 회복하자 그는 본명이 Slab인
        Slabdrill과 함께 복수를 결심했습니다....`,
        `Life와 Slab은 게임에서 죽은 모든 셀레스티얼을 찾아 전 세계를 돌아다니며 혁명에 동참해 달라고
        요청했습니다. 과거에 문제가 있기는 했지만, 이제 3명이 지나치게 강해졌으므로 모두 힘을 합쳐야 했습니다.`,
        `곧 그들은 셀레스티얼 3000명 이상의 군대를 모았습니다. 그 힘은 몇몇 국가보다도 무서울 정도로
        커졌습니다. 가장 좋은 제거 방법은 대규모로 포위한 뒤 총으로 죽이는 것이라 판단했습니다. 일주일 뒤
        모두 세 사람의 집으로 몰려들었습니다. 세 사람은 셀레스티얼을 무려 350명이나 처치했지만 결국
        포위됐습니다. 결정적인 순간 Midnight가 ${player.username}에게 "지금!"이라고 외쳤고, 사용자가 버튼을
        누르자 자기장 벽이 그들을 둘러쌌습니다. 굉음과 함께 물질-반물질 쌍소멸이 일어나 도시가 증발했습니다.
        잔해를 살피던 그들은 움직이는 지점 하나를 발견했습니다. 중력 기술로 반중력 지대를 만들어 살아남은
        Slabdrill이었습니다. 세 사람은 그를 추격해 곧 마지막 생존자를 따라잡았습니다.`,
        `Slabdrill은 혼자서 지금 당장 3명과 싸울 때가 아니라고 판단해 한동안 사라지기로 했습니다. 가능한 한
        많은 셀레스티얼을 되살리고 고대 셀레스티얼들까지 모아 3명에게 맞설 생각이었습니다. 그는 Life가 남긴
        양자 순간이동 포털을 꺼내 순간이동했습니다. "젠장." 7이 말했습니다. "Life의 기술이 얼마나 많은지
        진작 알아챘어야 했어. Slabdrill이 또 탈출했잖아!" "이미 늦었어. 그들이 돌아오기 전에 최대한 강해지는
        수밖에 없어."`,
        `세 사람은 먼저 McDonalds에 가기로 했습니다. 배를 채운 뒤 반물질을 인질로 삼아 미국을 털었고,
        다른 나라에도 공물을 요구했습니다. 이어 우주에 집중하는 군사 조직을 만들었으며, 불과 5년 5개월 5일
        만에 십만 명을 수용할 수 있는 우주 정거장을 건설했습니다. 그들은 Slabdrill이 있는 지구는 차라리
        사라지는 편이 낫다고 판단해 반물질을 폭발시키고 지구의 모든 생명을 죽였습니다. 행성이 폭발하는 동안
        잔해 사이에서 반지름 10km의 작은 구체가 이륙하는 모습은 아무도 보지 못했습니다....`,
        `3명은 별을 향해 떠난 100천(십만) 명과 함께 불과 5000년 만에 500개가 넘는 항성계를 식민화하고 다른
        종족 5개와 접촉했습니다. 중력 기술로 거주 구조물을 만들고 자원을 모으는 Llirdbals라는 6번째 종족도
        만났습니다. 어느 날 세 사람이 인간 제국의 수도 행성에 있을 때, Llirdbals 영토에서 9차원 균열이
        나타났다는 경보가 울렸습니다. 균열을 통해 외차원 존재들이 우리 우주로 들어와 모든 에너지와 물질과
        반물질을 빠르게 훔치고 있었습니다. 공격이 시작됐고, 선두에 선 Slabdrill이 웃으며 외쳤습니다.
        "이제 이 우주는 파괴될 것이다! 저 존재들과 나는 계약을 맺었다. 너희 목숨을 대가로 그들의 영역에 오르겠다!"`,
        `Slabdrill은 그들을 확실히 잡았다고 생각했지만 예상치 못한 일이 벌어졌습니다... 이 모든 것이 3명과
        Life가 세운 계획이라는 사실을 그는 몰랐습니다. Slabdrill이 Life를 죽음에서 되살릴 수 있었던 것부터
        계획의 일부였습니다. Life는 Slabdrill의 신뢰를 완전히 얻고 그가 무슨 일을 하는지 정확히 파악했습니다.
        그리고 한 달에 한 번씩 모든 정보를 세 사람에게 몰래 보냈습니다.`,
        `실제로 Life를 죽음에서 되살린 것은 Slabdrill이었지만, 그 과정에서 세 사람이 소생 장치를 해킹했습니다.
        이제 Life는 세 사람의 명령에 따르는 로봇이자 첩자처럼 행동하며 Slabdrill의 움직임을 계속 감시했습니다.
        Slabdrill은 곧 Life의 성격이 조금 달라졌음을 알아챘지만, 소생 장치의 사소한 결함 탓이라고 여겼습니다.
        어쨌든 공격은 계속됐습니다....`,
        `(본편 이야기를 잠시 멈추고 회상을 시작합니다)`,
        `아주 오래전, 이 거대한 싸움보다 훨씬 전의 일입니다. SupersonicSeven, Life, MidnightLight가 아직
        어린아이였을 때, 그들은 날마다 함께 놀았습니다. 그러다 이런 일이 벌어졌습니다...`,
        `어느 날 놀이터에서 놀던 그들에게 이름이 ${player.username}인 아이가 다가왔습니다. 그 아이는 순식간에
        SupersonicSeven과 Midnight의 마음을 얻었습니다. 하지만 ${player.username} 플레이어가 온 뒤 관심을 받지 못한 Life는
        질투했습니다. 그래서 인기와 지위를 되찾고 ${player.username} 플레이어를 끝장낼 계획을 세웠습니다....`,
        `Life는 ${player.username} 플레이어를 납치해 ${player.username} 플레이어를 Midnight의 집 지하실에 가뒀습니다. 누가 그런 곳을 생각하겠어요?
        결국 가장 위험한 곳이 가장 안전한 법입니다. Life는 ${player.username} 플레이어가 살아 있으면서도 아무도 찾지 못할
        장소에 있도록 했습니다.`,
        `그렇게 일주일이 지났고, 다른 2명은 ${player.username} 플레이어를 걱정하며 찾아 나섰지만 아무 성과도 없어 결국
        포기해야 했습니다. 시간이 흘러 5년 뒤, Midnight가 물건을 찾으러 지하실에 갔다가 목소리를 들었습니다....
        ${player.username} 플레이어를 발견한 Midnight는 경악했고, 재빨리 밧줄과 입마개를 풀어 주었습니다. ${player.username} 플레이어는
        진실을 털어놓았고 Midnight는 지난 5년 동안 벌어진 일을 알고 공포에 질렸습니다. 둘은 Seven을 만나
        Life에게 따지려 했지만, Midnight도 몰랐던 구석의 문에서 Life가 나타났습니다. Midnight와
        ${player.username} 플레이어를 본 Life는 얼어붙었다가 터널 안으로 달아났습니다. 둘은 뒤쫓았지만 곧 갈림길을
        만났습니다. 오른쪽을 골랐지만 또 갈림길이 나왔습니다. Life가 지하에 터널 미로를 만들고 자신들의 모든
        움직임을 감시하고 있을지도 모른다고 깨달았습니다. 곧 출구를 찾아 열었더니 어느 지하실에 도착했고,
        밖으로 나와 보니 그곳은 Seven의 집이었습니다!`,
        `하지만 곧 집이 비어 있고 7이 사라졌다는 사실을 알게 됐습니다! 집안을 샅샅이 뒤져도 7의 행방을
        알려 줄 단서는 없었습니다. 그들이 몰랐던 사실은 7이 의사였으며, 불법 실험을 하던 중 우연히 집으로
        들어온 Life를 이미 납치했다는 것이었습니다.`,
        `Life는 구속복을 입은 채 손님방에 던져져 있었고, ${player.username} 플레이어와 Midnight는 Seven이 그의 몸을
        열어 놓은 모습을 발견했습니다. 둘은 Seven을 설득해 신장 하나를 꺼낸 뒤 다시 닫게 하고 Life를 감옥에
        보냈습니다. Life는 납치죄로 6.9년 동안 수감됐습니다. 거의 7년 뒤 풀려난 Life는 세 사람을 찾으려 했지만,
        그들은 오래전에 이사해 찾을 수 없었습니다. 그래서 ${player.username} 플레이어가 오기 전 그들이 가장 좋아했던 게임,
        Antimatter Dimensions를 이용하는 다른 방법을 시도하기로 했습니다.....`,
        `Life는 게임에 접속해 대규모 업데이트가 적용됐음을 알았습니다! 5시간 만에 나온 업데이트였습니다.
        멀티플레이 모드와 순위표도 추가됐습니다. 이 업데이트라면 세 사람을 아주 쉽게 찾을 수 있다고 판단한
        Life는 수색 여정을 시작했습니다. 게임 안에서 세 사람을 찾는 동안 Teresa, Effarig, The Nameless Ones,
        V, Ra, Lai'tela를 비롯한 많은 친구를 만났습니다. 그들은 이 여정이 재미있어 보여 Life와 동행했습니다.`,
        `Life는 곧 세 사람과 마주쳤습니다. Midnight는 여전히 다른 두 사람보다 3단계 작았으므로 첫 표적이
        됐습니다. Life는 기술과 로봇을 비롯한 여러 수단으로 빛의 신비술인 Klidggd un' Kharrha를 연마하던
        Midnight의 추종자들을 파괴하고 전쟁을 일으켰습니다. 이 일은 여러 해 동안 계속됐고, 어느 날 Life는
        레드스톤이라는 붉은 가루를 발견했습니다......`,
        `(회상이 끝나고 이야기가 다시 시작됩니다)`,
        `3명과 Slabdrill의 명령이 Life의 머릿속에서 충돌하며 서로 Life를 영원히 자기편으로 만들려 했습니다.
        하지만 명령들이 싸우는 동안 Life가 의식을 되찾을 수 있다는 사실은 몰랐습니다. Life가 생각했습니다.
        "무슨 일이 벌어진 거지? 왜 내 몸을 조종할 수 없어? 뭔가 해야 해!" 상황이 잘못됐음을 깨달은 Life는
        행동해야 했습니다. 그는 정신을 뻗어 비밀 병기에 닿았습니다... 바로 게임 종료 버튼이었습니다!`,
        `<span>Life가 병원 침대에서 깨어나자 의사가 달려옵니다.</span>&nbsp;&nbsp;&nbsp;
        <span style='color: yellow'>깨어났군요! 7이 당신의 머리를 5번 후려친 뒤 혼수상태에 빠졌습니다.</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>내 머리를 후려쳤다고요? 왜요?</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style='color: yellow'>당신이 69번째 차원을 먹어서 7이 화났거든요. 그래서 XP를 너무 많이 요구하다
        절단한 Midnight의 다리로 후려치기 막대를 만들었어요.|]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;<span>세상에! 정말 말이 되네요. 이제 모든 궁금증이 풀렸어요!</span>`,
        `(본편 이야기가 끝나고 두 번째 이야기가 시작됩니다)`,
        `옛날 옛적에 Midnight가 바나나 껍질을 밟고 미끄러졌습니다. 바나나가 물질로 이루어져 있어 다리가
        심각하게 다쳤고, 주위 반경 100마일이 분화구로 변했습니다. 그는 응급실로 급히 옮겨졌으며 반물질 입자
        1.79e308개가 필요했습니다. 친구 Seven은 이를 위해 가상 입자를 현실로 바꾸는 방법과 그 작업을 수행할
        프로그램을 만들었습니다. 프로그램 이름을 고민하던 순간....`,
        `Life가 자기장 장치(MFD) 안에 보관한 중성자별 한 숟가락을 들고 들어왔습니다. Life가 말했습니다.
        "7, 상상의 물건을 현실로 바꾸기는 쉽지 않으니 이 중성자별이 도움이 되는지 봐 줘." 7은 중성자별이 든
        MFD를 받아 들고 아이디어 하나를 떠올렸습니다...`,
        `<span>그가 MFD를 껐습니다. 둘은 즉시 10000000°C의 열과 히말라야의 무게 때문에 증발하고 이온화되어
        죽었습니다. 부활한 뒤 Life가 말했습니다. "좋아, 아이디어가 있어, Hevi." 그러고는 중력으로 9차원
        시공간을 3D 공간으로 압축하는 노나 벡터 포일을 가져왔습니다. Seven은 노나 벡터 포일을 조작해 알약
        모양으로 만들었습니다. "Pellet....pelle...." 아이디어가 떠오른 그는 친구가 2명뿐인 자기 세계에
        선언했습니다. "이제 나는 만물의 창조자, Overlord인 Hevipelle로 다시 명명되었다."</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: blue'>우우우!</span>&nbsp;<span style='color: cyan'>
        멋지네.</span>`,
        `Hevipelle는 같은 몸을 공유하던 7을 포함해 모든 것을 지배했습니다. "나는... 이제 우주 전체를
        지배한다..." Overlord가 말했습니다. Life는 자신이 저지른 실수를 깨달았습니다. 이제 Hevipelle가 된
        Hevi는 너무 강해져 이 우주의 누구도 맞설 수 없었습니다... "Hevi, 제정신을 유지해야 해! 이 힘에
        지배당하면 안 돼!" Life가 외쳤습니다. 하지만 그가 무언가 하기도 전에 Overlord는 사라졌습니다.`,
        `<span style='color: blue'>무언가 해야 해. 좋은 생각이 있어! 민주주의를 위해 그의 안에 세 번째 인격을
        만들자아아! |]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>그렇게 됐습니다. 두 사람은 Hevi가 소변 차원을 만드는
        틈을 덮쳐 Hyperhasty Hepta라는 세 번째 인격을 그 안에 넣었습니다. 이제 "Hevi"는 Hevipelle,
        SupersonicSeven, HyperHasty Hepta가 하나로 합쳐진 존재였습니다!</span>&nbsp;&nbsp;<span>Seven과 Hepta는
        민주주의의 힘으로 Hevi를 정신에서 몰아냈고, Hevi는 테서랙트로 도망쳤습니다. 둘은 Supersonic Hepta라는
        한 사람으로 합쳐졌지만, MidnightLight가 그냥 7로 있으라고 해서 다시 SupersonicSeven으로 돌아갔습니다.`,
        `이 모든 일이 벌어지는 동안 아무도 눈치채지 못했지만, 우주 밖의 ㊙️가 이 우주를 향해 ㊙️의 시선을
        보냈습니다. ㊙️의 힘은 우주의 방어막을 서서히 갉아먹고 있습니다...`,
        `(현재까지의 이야기는 여기서 끝납니다)`,
      ];
      const chapter = chapters[player.news.specialTickerData.storyChapter];
      player.news.specialTickerData.storyChapter = (player.news.specialTickerData.storyChapter + 1) % 42;
      return chapter;
    },
  },
];
