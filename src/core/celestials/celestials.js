import { Alpha } from "./alpha";
import { Effarig } from "./effarig";
import { Enslaved } from "./enslaved";
import { Laitela } from "./laitela/laitela";
import { Pelle } from "./pelle/pelle";
import { Ra } from "./ra/ra";
import { Teresa } from "./teresa";
import { V } from "./V";

export const Celestials = {
  teresa: Teresa,
  effarig: Effarig,
  enslaved: Enslaved,
  v: V,
  ra: Ra,
  laitela: Laitela,
  pelle: Pelle,
  alpha: Alpha
};

GameDatabase.celestials.descriptions = [
  {
    name: "테레사",
    effects() {
      return `글리프의 시간 정리 생성 효과가 비활성화됩니다.
      무한 포인트와 영원 포인트 획득량이 감소합니다(x^${format(0.55, 2, 2)}).`;
    },
  },
  {
    name: "에파리그",
    effects() {
      return `시간 팽창처럼 모든 차원 배율, 게임 속도, 틱스피드가 크게 감소합니다.
      무한력은 생산량과 게임 속도 페널티를 줄이고, 시간 파편은 틱스피드 페널티를 줄입니다.
      글리프 레벨은 일시적으로 ${formatInt(Effarig.glyphLevelCap)}에서 제한되며 희귀도는 영향을 받지 않습니다.`;
    },
    description() {
      return `에파리그의 현실에서 한 단계를 처음 완료하면 해당 현실에서 나갑니다.`;
    }
  },
  {
    name: "이름없는 자들",
    effects() {
      return `글리프 레벨이 최소 ${formatInt(5000)}까지 증가합니다.
      무한 차원, 시간 차원, 제8 반물질 차원은 각각 ${formatInt(1)}번만 구매할 수 있습니다.
      반물질 차원 배율에 항상 시간 팽창이 적용됩니다(글리프 효과는 실제 시간 팽창에서만 적용됩니다).
      시간 연구 192(복제자 상한 해제)가 잠깁니다.
      블랙홀이 비활성화됩니다.
      타키온 입자와 팽창된 시간 생산량이 크게 감소합니다.
      팽창 글리프의 시간 정리 생성 효과가 비활성화됩니다.
      일부 도전 목표가 증가합니다.
      저장한 게임 시간이 감소된 효율(지수^${format(0.55, 2, 2)})로 방출됩니다.`;
    }
  },
  {
    name: "V",
    effects() {
      const vEffect = `모든 차원 배율, 영원 포인트 및 무한 포인트 획득량, 초당 팽창된 시간 획득량에\
      제곱근이 적용됩니다.
      복제자 간격은 제곱됩니다.`;
      const vEffectAdditional = `
      지수 글리프 연금술 효과가 비활성화됩니다.`;

      return Ra.unlocks.unlockGlyphAlchemy.canBeApplied
        ? vEffect + vEffectAdditional
        : vEffect;
    }
  },
  {
    name: "라",
    effects() {
      return `차원 가속을 ${formatInt(4)}개만 보유하며 더 얻을 수 없습니다.
      틱스피드 구매 배율이 ${formatX(1.1245, 0, 3)}로 고정됩니다.`;
    },
  },
  {
    name: "라이텔라",
    effects() {
      let disabledDims;
      const highestActive = 8 - Laitela.difficultyTier;
      switch (highestActive) {
        case 0:
          disabledDims = "모든 차원";
          break;
        case 1:
          disabledDims = "제2 이상의 차원";
          break;
        case 2:
          disabledDims = "제3 이상의 차원";
          break;
        case 7:
          disabledDims = "제8 차원";
          break;
        default:
          disabledDims = `제${highestActive + 1} 이상의 차원`;
          break;
      }
      const disabledText = highestActive === 8
        ? ""
        : `${disabledDims}의 생산이 비활성화됩니다.`;

      return `무한 포인트와 영원 포인트 획득량에 시간 팽창이 적용됩니다.
      게임 속도가 ${formatInt(1)}로 감소한 뒤 ${formatInt(10)}분에 걸쳐 점차 회복됩니다.
      블랙홀의 저장, 방출, 파동, 반전이 모두 비활성화됩니다.
      ${disabledText}`;
    },
    description() {
      return `이 현실에서는 반물질이 엔트로피를 생성합니다.\
      엔트로피가 ${formatPercents(1)}에 도달하면 현실이 불안정해지고,\
      ${formatPercents(1)}에 얼마나 빨리 도달했는지에 따라 보상을 얻습니다.
      ${formatInt(30)}초 이내에 현실을 불안정화하면 훨씬 어려워지는 대신,\
      훨씬 강력한 보상을 얻습니다.\
      이를 ${formatInt(8)}번 수행하면 암흑 에너지 획득량에 ${formatX(Math.pow(8, Laitela.hadronizes + 1))}의 배율도 적용됩니다.`;
    }
  },
  {
    name: "펠레",
    effects() {
      return `현실이 파멸하며 게임 플레이에 여러 효과가 적용됩니다.`;
    }
  },
  {
    name: "알파",
    effects() {
      return `처음 현실에 도달한 뒤 해금하거나 얻은 모든 보상, 효과, 업그레이드, 강화, 버프, 약화, 기능이\
      비활성화됩니다. 단, 셀레스티얼 차원과 우주 구역은 유지되지만 둘 다 크게 약화됩니다.
      셀레스티얼 물질 변환 지수가 ${formatInt(0)}으로 감소하고, 알파의 현실에서는 실제 시간 한 시간마다\
      ${formatPercents(Alpha.alphaDecayByHour, 2)}를 얻습니다. 상한은 ${formatInt(24)}시간이며, 알파의 현실 단계를\
      완료하면 조금 증가할 수 있습니다.
      우주 구역 등의 외부 자원은 알파의 현실에서 더 오래 머문 것처럼 알파 붕괴를 강화합니다.\
      현재 알파 붕괴 속도 계수는 ${formatX(Alpha.totalSpeedBoost, 2, 2)}입니다.\
      알파의 현실 각 단계를 시작할 때 상한까지 필요한 전체 시간의 ${formatPercents(Alpha.cosmicSectorMinBoost, 2, 2)}가\
      이미 흐른 상태로 시작합니다. 우주 구역은 알파 붕괴의 시작값과 상한값을\
      ${format(Alpha.cosmicSectorExtraBoost, 2, 2)}시간만큼 강화합니다. 이는 알파 붕괴가 상한에 도달하는 시간을 줄이는 대신,\
      알파 붕괴의 효과를 높입니다.
      우주 구역 보상에는 현재 우주 구역에 따른 제곱근이 적용되며, 이는 알파 진행으로 완화할 수 없는 고정 약화입니다.\
      게임 시간 기반 기능 대부분이 실제 시간 기반으로 바뀝니다.
      도전과제 배율과 다수의 도전과제가 파괴됩니다.
      반물질에 따라 반물질 차원에 작은 약화 효과가 적용됩니다.`;
    },
    description() {
      return `알파의 현실에서 한 단계를 처음 완료하면 해당 현실에서 나갑니다.
      알파의 현실 단계를 완료할 때마다 알파 밖에서 적용되는 버프와\
      알파 안에서 적용되는 약화 효과를 얻습니다.`;
    }
  }
];
