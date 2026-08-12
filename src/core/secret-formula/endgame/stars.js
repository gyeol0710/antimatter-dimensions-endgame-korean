export const stars = {
  red: {
    id: 0,
    name: "red",
    dmReq: 1e20,
    resetReq: 1e25,
    effect: (amount = player.endgame.ethereal.stars.red) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.4).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `모든 반물질 차원 배율의 지수를 ${formatPow(amount, 2, 4)}로 만듭니다`
  },
  orange: {
    id: 1,
    name: "orange",
    dmReq: 1e25,
    resetReq: 1e28,
    effect: (amount = player.endgame.ethereal.stars.orange) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.5).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `모든 무한 차원 배율의 지수를 ${formatPow(amount, 2, 4)}로 만듭니다`
  },
  yellow: {
    id: 2,
    name: "yellow",
    dmReq: 1e30,
    resetReq: 1e32,
    effect: (amount = player.endgame.ethereal.stars.yellow) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.2).div(10).add(1), boost.div(100).add(1));
    },
    description: amount => `셀레스티얼 물질 변환 지수에 ${formatX(amount, 2, 3)}를 곱합니다`
  },
  green: {
    id: 3,
    name: "green",
    dmReq: 1e35,
    resetReq: 1e36,
    effect: (amount = player.endgame.ethereal.stars.green) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.5).div(40).add(1), boost.div(100).add(1));
    },
    description: amount => `허수 머신 획득량과 상한을 ${formatPow(amount, 2, 3)}만큼 거듭제곱합니다`
  },
  blue: {
    id: 4,
    name: "blue",
    dmReq: 1e45,
    resetReq: 1e40,
    effect: (amount = player.endgame.ethereal.stars.blue) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(amount.add(1), 0.8).min(1e25).times(
        Decimal.pow10(Decimal.pow(5, amount.max(1e25).div(1e25).log10().add(1).log10()).sub(1))), boost.div(100).add(1));
    },
    description: amount => `에테리얼 파워 획득량에 ${formatX(amount, 2, 3)}를 곱합니다`
  },
  purple: {
    id: 5,
    name: "purple",
    dmReq: 1e55,
    resetReq: 1e55,
    effect: (amount = player.endgame.ethereal.stars.purple) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.8).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `모든 시간 차원 배율의 지수를 ${formatPow(amount, 2, 4)}로 만듭니다`
  },
  white: {
    id: 6,
    name: "white",
    dmReq: 1e70,
    resetReq: 1e75,
    effect: (amount = player.endgame.ethereal.stars.white) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow10(Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)).times(100), 1.8), boost.div(100).add(1)));
    },
    description: amount => `모든 암흑 물질 소프트캡을 ${formatX(amount, 2)}만큼 늦춥니다`
  },
  black: {
    id: 7,
    name: "black",
    dmReq: 1e85,
    resetReq: 1e100,
    effect: (amount = player.endgame.ethereal.stars.black) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.3).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `반물질 지수를 ${formatPow(amount, 2, 4)}만큼 거듭제곱합니다`
  },
  gray: {
    id: 8,
    name: "gray",
    dmReq: 1e100,
    resetReq: 1e125,
    effect: (amount = player.endgame.ethereal.stars.gray) => {
      if (player.disablePostReality) return DC.D0;
      return Decimal.log10(Decimal.log10(amount.add(1)).add(1)).times(20);
    },
    description: amount => `다른 모든 별의 효과를 ${formatPercents(amount.div(100).toNumber(), 2)}만큼 증가시킵니다`
  },
};
