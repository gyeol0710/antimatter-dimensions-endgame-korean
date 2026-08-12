const specialInfinityGlyphDisabledEffectText = () => (PelleRifts.chaos.milestones[1].canBeApplied && !PelleDestructionUpgrade.pelleGlyphEffects.canBeApplied
  ? "또한, 무한 글리프의 Pelle 전용 효과가 비활성화됩니다."
  : "");

export const eternityChallenges = [
  {
    id: 1,
    description: () => {
      if (Alpha.isRunning) return "시간 차원이 비활성화되고, 무한 차원 구매 상한이 두 배가 됩니다.";
      return "시간 차원이 비활성화됩니다.";
    },
    goal: DC.E1800,
    goalIncrease: DC.E200,
    reward: {
      description: "시간 차원이 이번 영원에서 보낸 시간에 따라서 증폭됩니다.",
      effect: completions =>
        Decimal.pow(Decimal.max(player.records.thisEternity.time.div(10), 0.9), 0.3 + (completions * 0.05)),
      formatEffect: value => formatX(value, 2, 1)
    },
    // These will get notation-formatted and scrambled between for the final goal
    scrambleText: ["1e2600", "1e201600"],
  },
  {
    id: 2,
    description: "무한 차원이 비활성화됩니다.",
    goal: DC.E975,
    pelleGoal: DC.E1750,
    goalIncrease: DC.E175,
    alphaGoal: DC.E2200,
    alphaGoalIncrease: DC.E300,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC2Nerf.canBeApplied,
    reward: {
      description: "제1 무한 차원이 무한력에 비례하여 증폭됩니다.",
      effect: completions => Currency.infinityPower.value.pow(5 / (700 - completions * 100)).clampMin(1),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E1000,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 3,
    description: "제5-8 반물질 차원이 아무것도 생산하지 않으며, 차원 희생이 비활성화됩니다.",
    goal: DC.E600,
    pelleGoal: DC.E925,
    goalIncrease: DC.E75,
    alphaGoal: DC.E750,
    alphaGoalIncrease: DC.E100,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC3Nerf.canBeApplied,
    reward: {
      description: () => `반물질 차원을 ${formatInt(10)}개 구매하였을 때의 배율이 상승합니다.`,
      effect: completions => completions * 0.72,
      formatEffect: value => `+${format(value, 2, 2)}`
    }
  },
  {
    id: 4,
    description: `모든 무한 배율과 생성기가 비활성화됩니다. 정해진 무한 횟수 이내에 목표를 달성하지 못하면
      도전에 실패합니다.`,
    goal: DC.E2750,
    goalIncrease: DC.E550,
    alphaGoal: DC.E3200,
    restriction: completions => Math.max(16 - 4 * completions, 0),
    checkRestriction: restriction => Currency.infinities.lte(restriction),
    formatRestriction: restriction => (restriction === 0
      ? "(무한에 도달하지 않고)"
      : `무한 ${quantifyInt("회", restriction)} 이내`),
    failedRestriction: "(무한에 너무 많이 도달함)",
    reward: {
      description: "보유 중인 무한 포인트에 따라 무한 차원이 배율을 받습니다.",
      effect: completions => Currency.infinityPoints.value.pow(0.003 + completions * 0.002),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E200,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 5,
    description: () => `반물질 은하 가격 증가 스케일링이 즉시 시작됩니다(평소에는 은하 ${formatInt(100)}개부터).
      차원 가속의 가격 스케일링이 크게 증가합니다.`,
    goal: DC.E750,
    pelleGoal: DC.E1400,
    goalIncrease: DC.E400,
    alphaGoal: DC.E1650,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC5Nerf.canBeApplied,
    reward: {
      description: "먼 반물질 은하의 가격 상승이 미뤄집니다.",
      effect: completions => completions * 5,
      formatEffect: value => `${formatInt(value)}개 이후`
    }
  },
  {
    id: 6,
    // The asterisk, if present, will get replaced with strings generated from the scramble text
    description: () => {
      if (Enslaved.isRunning) return "*. 최대 복제자 은하 업그레이드 비용이 크게 감소합니다.";
      return "일반적인 방법으로 반물질 은하를 얻을 수 없습니다. 최대 복제자" +
              " 은하 업그레이드 비용이 크게 감소합니다.";
    },
    goal: DC.E750,
    pelleGoal: DC.E1500,
    goalIncrease: DC.E200,
    alphaGoal: DC.E800,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC6Nerf.canBeApplied,
    reward: {
      description: "반물질 차원의 가격 상승률을 감소시킵니다.",
      effect: completions => completions * 0.2,
      formatEffect: value => {
        const total = Math.round(Player.dimensionMultDecrease + Effects.sum(EternityChallenge(6).reward)) - value;
        return `-${format(value, 2, 1)} (총 ${formatX(total, 2, 1)})`;
      }
    },
    scrambleText: ["일반적인 방법으로 반물질 은하를 얻을 수 없습니다", "c㏰'퐚 gai鸭 Anti꟢at랜erﻪﶓa⁍axie㮾 䂇orma㦂l"],
  },
  {
    id: 7,
    description:
      "제1 시간 차원이 제8 무한 차원을 생산하고, 제1 무한 차원이 제7 반물질 차원을 생산합니다. " +
      "또한 틱스피드가 무한 차원과 시간 차원에 직접 적용됩니다.",
    goal: DC.E2000,
    pelleGoal: DC.E2700,
    goalIncrease: DC.E530,
    alphaGoal: DC.E1200,
    alphaGoalIncrease: DC.E200,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC7Nerf.canBeApplied,
    effect: () => TimeDimension(1).productionPerSecond,
    reward: {
      description: "제1 시간 차원이 제8 무한 차원을 생산합니다.",
      effect: completions => {
        let base = TimeDimension(1).productionPerSecond.pow(completions * 0.2).minus(1).clampMin(0);
        if (Pelle.isDoomed) base = base.min(DC.ENUMMAX).times(Decimal.pow10(base.max(1).log10().div(DC.NUMMAX).pow(0.1)));
        return base;
      },
      formatEffect: value => `초당 ${format(value, 2, 1)}`
    }
  },
  {
    id: 8,
    description: () => `무한 차원은 ${formatInt(50)}회, 복제자 업그레이드는 ${formatInt(40)}회만 업그레이드할 수 있습니다.
      무한 차원 및 복제자 업그레이드 자동구매기가 비활성화됩니다.`,
    goal: DC.E1300,
    pelleGoal: DC.E2800,
    goalIncrease: DC.E750,
    alphaGoal: DC.E2400,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC8Nerf.canBeApplied,
    reward: {
      description: "무한력이 복제자 은하의 효율을 증폭시킵니다.",
      effect: completions => {
        const infinityPower = Decimal.log10(Currency.infinityPower.value.add(1).pLog10().add(1));
        return Decimal.max(0, Decimal.pow(infinityPower, 0.03 * completions).sub(1)).toNumber();
      },
      formatEffect: value => formatPercents(value, 2)
    }
  },
  {
    id: 9,
    description: () => `틱스피드 업그레이드를 구매할 수 없습니다. 대신 무한력이 크게 감소한 효과로
      시간 차원을 증폭합니다. ${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E1750,
    pelleGoal: DC.E2900,
    goalIncrease: DC.E250,
    alphaGoal: DC.E9000,
    alphaGoalIncrease: DC.E4000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC9Nerf.canBeApplied,
    reward: {
      description: "무한 차원이 시간 파편의 수에 비례하여 배율을 받습니다.",
      effect: completions => Currency.timeShards.value.pow(completions * 0.1).clampMin(1),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E400,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 10,
    description: () => {
      let description = `시간 차원과 무한 차원이 비활성화됩니다. 무한 횟수로 반물질 차원에 막대한 배율
        (무한 횟수${formatPow(950)})을 얻습니다. ${specialInfinityGlyphDisabledEffectText()}`;
      EternityChallenge(10).applyEffect(v => description += ` 현재: ${formatX(v, 2, 1)}`);
      return description;
    },
    goal: DC.E3000,
    pelleGoal: DC.E3200,
    goalIncrease: DC.E300,
    alphaGoal: DC.E15000,
    alphaGoalIncrease: DC.E2000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC10Nerf.canBeApplied,
    effect: () => Decimal.pow(Currency.infinitiesTotal.value, 950).clampMin(1).pow(TimeStudy(31).effectOrDefault(1)),
    reward: {
      description: "시간 차원이 무한 횟수에 비례하여 배율을 받습니다.",
      effect: completions => {
        const mult = Currency.infinitiesTotal.value.times(2.783e-6).pow(0.4 + 0.1 * completions).clampMin(1);
        return mult.powEffectOf(TimeStudy(31));
      },
      formatEffect: value => {
        // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
        const mult = formatX(value, 2, 1);
        return TimeStudy(31).canBeApplied
          ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (시간 연구 31 적용 후: ${mult})`
          : mult;
      }
    }
  },
  {
    id: 11,
    description: () => `무한력 및 차원 가속에서 얻는 반물질 차원 배율을 제외한 모든 차원의 배율과 지수가
      비활성화됩니다. ${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E450,
    pelleGoal: DC.E11200,
    goalIncrease: DC.E175,
    pelleGoalIncrease: DC.E1400,
    alphaGoal: DC.E6000,
    alphaGoalIncrease: DC.E450,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC11Nerf.canBeApplied,
    reward: {
      description: "틱스피드의 가격 상승률을 더욱 줄입니다.",
      effect: completions => completions * 0.07,
      formatEffect: value => {
        const total = Math.round(Player.tickSpeedMultDecrease + Effects.sum(EternityChallenge(11).reward)) - value;
        return `-${format(value, 2, 2)} (총 ${formatX(total, 2, 2)})`;
      }
    }
  },
  {
    id: 12,
    description: () => (PlayerProgress.realityUnlocked()
      ? `게임이 ${formatInt(1000)}배 느리게 진행되며, 다른 모든 게임 속도 효과가 비활성화됩니다. 정해진 시간
        안에 목표를 달성하지 못하면 도전에 실패합니다. ${specialInfinityGlyphDisabledEffectText()}`
      : `게임이 ${formatInt(1000)}배 느리게 진행됩니다. 정해진 시간 안에 목표를 달성하지 못하면
        도전에 실패합니다.`),
    goal: DC.E100000,
    pelleGoal: DC.E208000,
    goalIncrease: DC.E10000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC12Nerf.canBeApplied,
    restriction: completions => Math.max(10 - 2 * completions, 1) / 10,
    checkRestriction: restriction => Time.thisEternity.totalSeconds.lt(restriction),
    formatRestriction: restriction => `게임 내 ${quantify("초", restriction, 0, 1)} 이내.`,
    failedRestriction: "(시간이 초과되었습니다.)",
    reward: {
      description: "무한 차원의 가격 상승률이 감소합니다.",
      effect: completions => 1 - (completions * 0.008 * EndgameMastery(273).effectOrDefault(1)),
      formatEffect: value => `×${formatPow(value, 3, 3)}`
    }
  }
];
