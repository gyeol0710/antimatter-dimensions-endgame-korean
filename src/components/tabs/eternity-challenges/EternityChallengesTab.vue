<script>
import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeTabHeader from "@/components/ChallengeTabHeader";
import EternityChallengeBox from "./EternityChallengeBox";

export default {
  name: "EternityChallengesTab",
  components: {
    ChallengeTabHeader,
    ChallengeGrid,
    EternityChallengeBox
  },
  data() {
    return {
      unlockedCount: 0,
      showAllChallenges: false,
      autoEC: false,
      isAutoECVisible: false,
      hasUpgradeLock: false,
      remainingECTiers: 0,
      untilNextEC: TimeSpan.zero,
      untilAllEC: TimeSpan.zero,
      hasECR: false,
    };
  },
  computed: {
    challenges() {
      return EternityChallenges.all;
    },
    upgradeLockNameText() {
      return RealityUpgrade(12).isLockingMechanics
        ? RealityUpgrade(12).name
        : ImaginaryUpgrade(15).name;
    },
    nextECText() {
      return this.untilNextEC.totalMilliseconds === 0 && !this.autoEC
        ? "일시 정지 해제 즉시"
        : `${this.untilNextEC} 후 (현실 시간)`;
    },
    allECText() {
      return this.untilAllEC.totalMilliseconds === 0 && !this.autoEC
        ? "일시 정지 해제 즉시"
        : `${this.untilAllEC} 후 (현실 시간)`;
    }
  },
  methods: {
    update() {
      this.showAllChallenges = player.options.showAllChallenges;
      this.unlockedCount = EternityChallenges.all
        .filter(this.isChallengeVisible)
        .length;
      this.isAutoECVisible = (Perk.autocompleteEC1.canBeApplied || EndgameMastery(22).isBought) && !player.disablePostReality;
      this.autoEC = player.reality.autoEC;
      const shouldPreventEC7 = TimeDimension(1).amount.gt(0);
      this.hasUpgradeLock = RealityUpgrade(12).isLockingMechanics ||
        (ImaginaryUpgrade(15).isLockingMechanics && shouldPreventEC7 &&
          !Array.range(1, 6).some(ec => !EternityChallenge(ec).isFullyCompleted));
      const remainingCompletions = EternityChallenges.remainingCompletions;
      this.remainingECTiers = remainingCompletions;
      if (remainingCompletions !== 0) {
        const autoECInterval = EternityChallenges.autoComplete.interval;
        const untilNextEC = Math.max(autoECInterval - player.reality.lastAutoEC, 0);
        this.untilNextEC.setFrom(new Decimal(untilNextEC));
        this.untilAllEC.setFrom(new Decimal(untilNextEC + (autoECInterval * (remainingCompletions - 1))));
      }
      this.hasECR = Perk.studyECRequirement.isBought;
    },
    isChallengeVisible(challenge) {
      return challenge.completions > 0 || challenge.isUnlocked || challenge.hasUnlocked ||
        (this.showAllChallenges && PlayerProgress.realityUnlocked());
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
    <div v-if="isAutoECVisible">
      영원 도전은 순서대로 자동 완료됩니다. 앞선 모든 영원 도전을 전부 완료해야 다음 도전의 진행도가 쌓입니다.
    </div>
    <div
      v-if="isAutoECVisible && remainingECTiers > 0"
      class="c-challenges-tab__auto-ec-info l-challenges-tab__auto-ec-info"
    >
      <div class="l-challenges-tab__auto-ec-timers">
        <span
          v-if="hasUpgradeLock"
          class="l-emphasis"
        >
          {{ upgradeLockNameText }} 업그레이드의 요구 조건 잠금 때문에 자동 영원 도전이 비활성화되었습니다.
        </span>
        <span v-if="remainingECTiers > 0">
          다음 영원 도전 자동 완료: {{ nextECText }}
        </span>
        <span>
          모든 영원 도전 자동 완료: {{ allECText }}
        </span>
        <br>
      </div>
    </div>
    <div>
      영원 도전을 반복 완료하면 보상이 강화되며, 최대 {{ formatInt(5) }}회까지 완료할 수 있습니다.<br>
      각 보상은 해당 영원 도전 시간 연구를 구매하지 않아도 영구적으로 적용됩니다.
    </div>
    <div v-if="!hasECR">
      해금한 영원 도전을 재분배로 제거해도, 완료하기 전까지는 보조 요구 조건을 다시 달성할 필요가 없습니다.<br>
      다시 해금할 때는 시간 정리만 있으면 됩니다.
    </div>
    <div v-if="unlockedCount !== 12">
      발견한 영원 도전: {{ formatInt(unlockedCount) }}/{{ formatInt(12) }}
    </div>
    <div v-else>
      영원 도전 {{ formatInt(12) }}개를 모두 발견했습니다.
    </div>
    <ChallengeGrid
      v-slot="{ challenge }"
      :challenges="challenges"
      :is-challenge-visible="isChallengeVisible"
    >
      <EternityChallengeBox :challenge="challenge" />
    </ChallengeGrid>
  </div>
</template>

<style scoped>
.l-emphasis {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
