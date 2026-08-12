<script>
import wordShift from "@/core/word-shift";

import ReplicantiUpgradeButton, { ReplicantiUpgradeButtonSetup } from "./ReplicantiUpgradeButton";
import PrimaryButton from "@/components/PrimaryButton";
import ReplicantiGainText from "./ReplicantiGainText";
import ReplicantiGalaxyButton from "./ReplicantiGalaxyButton";

export default {
  name: "ReplicantiTab",
  components: {
    PrimaryButton,
    ReplicantiGainText,
    ReplicantiUpgradeButton,
    ReplicantiGalaxyButton,
  },
  data() {
    return {
      isUnlocked: false,
      isUnlockAffordable: false,
      isInEC8: false,
      ec8Purchases: 0,
      amount: new Decimal(),
      mult: new Decimal(),
      hasTDMult: false,
      multTD: new Decimal(),
      hasDTMult: false,
      multDT: new Decimal(),
      hasIPMult: false,
      multIP: new Decimal(),
      hasDEMult: false,
      multDE: new Decimal(),
      hasPow: false,
      pow: 0,
      hasTDPow: false,
      powTD: 0,
      hasDTPow: false,
      powDT: 0,
      hasIPPow: false,
      powIP: 0,
      hasDEPow: false,
      powDE: 0,
      hasRaisedCap: false,
      replicantiCap: new Decimal(),
      capMultText: "",
      distantRG: 0,
      remoteRG: 0,
      contingentRG: 0,
      isContingent: false,
      effarigInfinityBonusRG: 0,
      isUncapped: false,
      nextEffarigRGThreshold: 0,
      canSeeGalaxyButton: false,
      unlockCost: new Decimal(),
      scrambledText: "",
      maxReplicanti: new Decimal(),
      estimateToMax: 0,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    replicantiChanceSetup() {
      return new ReplicantiUpgradeButtonSetup(
        ReplicantiUpgrade.chance,
        value => `복제 확률: ${formatDecimalPercents(value)}`,
        cost => `+${formatPercents(0.01)} 비용: ${format(cost)} IP`
      );
    },
    replicantiIntervalSetup() {
      const upgrade = ReplicantiUpgrade.interval;
      function formatInterval(interval) {
        const actualInterval = upgrade.applyModifiers(interval);
        const intervalNum = actualInterval.toNumber();
        if (
          Number.isFinite(intervalNum) &&
          intervalNum > 1 &&
          upgrade.isCapped
        ) {
          // Checking isCapped() prevents text overflow when formatted as "__ ➜ __"
          return TimeSpan.fromMilliseconds(new Decimal(intervalNum)).toStringShort(false);
        }
        if (actualInterval.lt(0.01)) return `< ${format(0.01, 2, 2)}ms`;
        if (actualInterval.gt(1000))
          return `${format(actualInterval.div(1000), 2, 2)}s`;
        return `${format(actualInterval, 2, 2)}ms`;
      }
      return new ReplicantiUpgradeButtonSetup(
        upgrade,
        value => `간격: ${formatInterval(value)}`,
        cost =>
          `➜ ${formatInterval(upgrade.nextValue)} 비용: ${format(cost)} IP`
      );
    },
    maxGalaxySetup() {
      const upgrade = ReplicantiUpgrade.galaxies;
      return new ReplicantiUpgradeButtonSetup(
        upgrade,
        value => {
          let description = `최대 복제자 은하: `;
          const extra = upgrade.extra;
          if (extra.gt(0)) {
            const total = value.add(extra);
            description += `<br>${formatHybridLarge(value, 3)} + ${formatHybridLarge(extra, 3)} = ${formatHybridLarge(total, 3)}`;
          } else {
            description += formatHybridLarge(value, 3);
          }
          return description;
        },
        cost => `+${formatInt(1)} 비용: ${format(cost)} IP`
      );
    },
    boostText() {
      const boostList = [];
      boostList.push(`모든 무한 차원에 <span class="c-replicanti-description__accent">${formatX(this.mult, 2, 2)}</span>
        배율${this.hasPow ? ` 및
        <span class="c-replicanti-description__accent">${formatPow(this.pow, 2, 3)}</span> 지수` : ""} 적용`);
      if (this.hasTDMult) {
        boostList.push(`시간 팽창 업그레이드로 모든 시간 차원에
          <span class="c-replicanti-description__accent">${formatX(this.multTD, 2, 2)}</span>
          배율${this.hasTDPow ? ` 및
          <span class="c-replicanti-description__accent">${formatPow(this.powTD, 2, 3)}</span> 지수` : ""} 적용`);
      }
      if (this.hasDTMult) {
        const additionalEffect = GlyphAlteration.isAdded("replication") ? "과 복제자 속도" : "";
        boostList.push(`글리프로 팽창된 시간${additionalEffect}에
          <span class="c-replicanti-description__accent">${formatX(this.multDT, 2, 2)}</span>
          배율${this.hasDTPow ? ` 및
          <span class="c-replicanti-description__accent">${formatPow(this.powDT, 2, 3)}</span> 지수` : ""} 적용`);
      }
      if (this.hasIPMult) {
        boostList.push(`글리프 연금술로 얻는 무한 포인트에
          <span class="c-replicanti-description__accent">${formatX(this.multIP)}</span>
          배율${this.hasIPPow ? ` 및
          <span class="c-replicanti-description__accent">${formatPow(this.powIP, 2, 3)}</span> 지수` : ""} 적용`);
      }
      if (this.hasDEMult) {
        boostList.push(`Alpha 보상으로 얻는 암흑 에너지에
          <span class="c-replicanti-description__accent">${formatX(this.multDE, 2, 2)}</span>
          배율${this.hasDEPow ? ` 및
          <span class="c-replicanti-description__accent">${formatPow(this.powDE, 2, 3)}</span> 지수` : ""} 적용`);
      }
      if (boostList.length === 1) return `${boostList[0]}.`;
      if (boostList.length === 2) return `${boostList[0]}<br>그리고 ${boostList[1]}.`;
      return `${boostList.slice(0, -1).join(",<br>")},<br>그리고 ${boostList[boostList.length - 1]}.`;
    },
    hasMaxText: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    toMaxTooltip() {
      if (this.amount.lte(this.replicantiCap)) return null;
      return this.estimateToMax.lt(0.01)
        ? "현재 증가 중"
        : TimeSpan.fromSeconds(this.estimateToMax).toStringShort();
    }
  },
  methods: {
    update() {
      this.isUnlocked = Replicanti.areUnlocked;
      this.unlockCost = new Decimal(1e140).dividedByEffectOf(PelleRifts.vacuum.milestones[1]);
      if (this.isDoomed) this.scrambledText = this.vacuumText();
      if (!this.isUnlocked) {
        this.isUnlockAffordable = Currency.infinityPoints.gte(this.unlockCost);
        return;
      }
      this.isInEC8 = EternityChallenge(8).isRunning;
      if (this.isInEC8) {
        this.ec8Purchases = player.eterc8repl;
      }
      this.amount.copyFrom(Replicanti.amount);
      this.mult.copyFrom(ReplicantiMultipliers.idMult);
      this.hasTDMult = DilationUpgrade.tdMultReplicanti.isBought;
      this.multTD.copyFrom(ReplicantiMultipliers.tdMult);
      this.hasDTMult = getAdjustedGlyphEffect("replicationdtgain").neq(0) && !Pelle.isDoomed;
      this.multDT.copyFrom(ReplicantiMultipliers.dtMult);
      this.hasIPMult = !player.disablePostReality && AlchemyResource.exponential.amount > 0 && !this.isDoomed;
      this.multIP.copyFrom(ReplicantiMultipliers.ipMult);
      this.hasDEMult = !player.disablePostReality && Alpha.currentStage >= 21;
      this.multDE.copyFrom(ReplicantiMultipliers.deMult);
      this.hasPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality;
      this.pow = ReplicantiMultipliers.idPow;
      this.hasTDPow = ResurgenceUpgrade.repSurge.isBought && DilationUpgrade.tdMultReplicanti.isBought && !player.disablePostReality;
      this.powTD = ReplicantiMultipliers.tdPow;
      this.hasDTPow = ResurgenceUpgrade.repSurge.isBought && getAdjustedGlyphEffect("replicationdtgain").neq(0) && !Pelle.isDoomed && !player.disablePostReality;
      this.powDT = ReplicantiMultipliers.dtPow;
      this.hasIPPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality && AlchemyResource.exponential.amount > 0 && !this.isDoomed;
      this.powIP = ReplicantiMultipliers.ipPow;
      this.hasDEPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality && Alpha.currentStage >= 21;
      this.powDE = ReplicantiMultipliers.dePow;
      this.isUncapped = PelleRifts.vacuum.milestones[1].canBeApplied;
      this.hasRaisedCap = (EffarigUnlock.infinity.isUnlocked && !this.isUncapped) || (Pelle.isDoomed && PelleCelestialUpgrade.replicantiCapIncrease.canBeApplied);
      this.replicantiCap.copyFrom(replicantiCap());
      if (this.hasRaisedCap) {
        const mult = this.replicantiCap.div(DC.NUMMAX);
        this.capMultText = TimeStudy(31).canBeApplied
          ? `기본: ${formatX(mult.pow(1 / TimeStudy(31).effectValue), 2)}; TS31 적용 후: ${formatX(mult, 2)}`
          : formatX(mult, 2);
      }
      this.distantRG = ReplicantiUpgrade.galaxies.distantRGStart;
      this.remoteRG = ReplicantiUpgrade.galaxies.remoteRGStart;
      this.contingentRG = ReplicantiUpgrade.galaxies.contingentRGStart;
      this.isContingent = Replicanti.galaxies.bought.gte(this.contingentRG);
      this.effarigInfinityBonusRG = Effarig.bonusRG;
      this.nextEffarigRGThreshold = DC.NUMMAX.pow(
        Effarig.bonusRG + 2
      );
      this.canSeeGalaxyButton =
        Replicanti.galaxies.max.gte(1) || PlayerProgress.eternityUnlocked();
      this.maxReplicanti.copyFrom(player.records.thisReality.maxReplicanti);
      this.estimateToMax = this.calculateEstimate();
    },
    vacuumText() {
      return wordShift.wordCycle(PelleRifts.vacuum.name);
    },
    // This is copied out of a short segment of ReplicantiGainText with comments and unneeded variables stripped
    calculateEstimate() {
      const updateRateMs = player.options.updateRate;
      const logGainFactorPerTick = Decimal.divide(getGameSpeedupForDisplay().times(updateRateMs).times(
        (Decimal.ln(player.replicanti.chance.add(1)))), getReplicantiInterval());
      const postScale = Math.log10(ReplicantiGrowth.scaleFactor) / ReplicantiGrowth.scaleLog10;
      const nextMilestone = this.maxReplicanti;
      const coeff = Decimal.divide(updateRateMs / 1000, logGainFactorPerTick.times(postScale));
      return coeff.times(nextMilestone.divide(this.amount).pow(postScale).minus(1));
    }
  },
};
</script>

<template>
  <div class="l-replicanti-tab">
    <br>
    <PrimaryButton
      v-if="!isUnlocked"
      :enabled="isUnlockAffordable"
      class="o-primary-btn--replicanti-unlock"
      onclick="Replicanti.unlock();"
    >
      복제자 해금하기
      <br>
      가격: {{ format(unlockCost) }} 무한 포인트
    </PrimaryButton>
    <template v-else>
      <div
        v-if="isDoomed"
        class="modified-cap"
      >
        두 번째 {{ scrambledText }} 마일스톤으로 복제자 상한이 제거되었습니다.
      </div>
      <div
        v-else-if="hasRaisedCap"
        class="modified-cap"
      >
        Effarig의 무한을 완료하여 다음 보상을 받고 있습니다:
        <br>
        TS192가 없을 때의 복제자 상한: {{ format(replicantiCap, 2) }}
        ({{ capMultText }})
        <br>
        {{ quantifyHybridLarge("추가 복제자 은하", effarigInfinityBonusRG) }}
        (다음 복제자 은하: 상한 {{ format(nextEffarigRGThreshold, 2) }})
      </div>
      <p class="c-replicanti-description">
        복제자
        <span class="c-replicanti-description__accent">{{ format(amount, 2, 0) }}</span>
        개를 보유하고 있습니다.
        <br>
        <span v-html="boostText" />
      </p>
      <div
        v-if="hasMaxText"
        class="c-replicanti-description"
      >
        이번 현실에서 도달한 최대 복제자는
        <span
          v-tooltip="toMaxTooltip"
          class="max-accent"
        >{{ format(maxReplicanti, 2) }}</span>.
      </div>
      <br>
      <div v-if="isInEC8">
        영원 도전 8에서 {{ quantifyInt("회", ec8Purchases) }} 더 구매할 수 있습니다.
      </div>
      <div class="l-replicanti-upgrade-row">
        <ReplicantiUpgradeButton :setup="replicantiChanceSetup" />
        <ReplicantiUpgradeButton :setup="replicantiIntervalSetup" />
        <ReplicantiUpgradeButton :setup="maxGalaxySetup" />
      </div>
      <div>
        최대 복제자 은하 업그레이드는 무한히 구매할 수 있지만,
        <br>
        복제자 은하 {{ formatInt(distantRG) }}개부터 비용이 더 빠르게 증가하고,
        {{ formatInt(remoteRG) }}개부터는 훨씬 더 빠르게 증가합니다.
      </div>
      <br>
      <div
        v-if="isContingent"
        class="contingency-text"
      >
        복제자 은하가 우주의 공간을 너무 많이 차지하여 조건부 상태가 되었습니다.
        <br>
        이 효과는 복제자 은하 {{ formatInt(contingentRG) }}개부터 시작되며 시간의 끝까지 계속됩니다.
      </div>
      <br><br>
      <ReplicantiGainText />
      <br>
      <ReplicantiGalaxyButton v-if="canSeeGalaxyButton" />
    </template>
  </div>
</template>

<style scoped>
.max-accent {
  color: var(--color-accent);
  text-shadow: 0 0 0.2rem var(--color-reality-dark);
  cursor: default;
}

.modified-cap {
  margin: -0.8rem 0 0.8rem;
  font-weight: bold;
}

.contingency-text {
  color: var(--color-pelle--base);
  text-shadow: 0 0 0.2rem var(--color-pelle--base);
  cursor: default;
}
</style>
