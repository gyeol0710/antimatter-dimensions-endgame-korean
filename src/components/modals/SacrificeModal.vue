<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "SacrificeModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      currentMultiplier: new Decimal(),
      nextMultiplier: new Decimal(),
      currentPower: new Decimal(),
      nextPower: new Decimal()
    };
  },
  computed: {
    message() {
      if (Achievement(118).isUnlocked && !Pelle.isDoomed && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought))) {
        return `차원 희생을 하면 희생 당시 보유한 제1 반물질 차원의 양에 따라 제8 반물질 차원이 강화됩니다.`;
      }
      return `차원 희생을 하면 제1~7 반물질 차원이 모두 사라지지만 비용과 배율은 유지됩니다.
        지금까지 희생한 제1 반물질 차원의 총량에 따라 제8 반물질 차원이 강화됩니다.
        생산량을 다시 회복하는 데는 시간이 걸립니다.`;
    },
    multiplierText() {
      if (Ascensions.sacA.isUnlocked) return `현재 지수는 ${formatPow(this.currentPower, 2, 3)}이며 차원 희생 시
        ${formatPow(this.nextPower, 2, 3)}까지 증가합니다.`;
      return `현재 배율은 ${formatX(this.currentMultiplier, 2, 2)}이며 차원 희생 시
        ${formatX(this.nextMultiplier, 2, 2)}까지 증가합니다.`;
    },
  },
  methods: {
    update() {
      this.currentMultiplier.copyFrom(Sacrifice.totalBoost);
      this.nextMultiplier.copyFrom(Sacrifice.nextBoost.times(Sacrifice.totalBoost));
      this.currentPower.copyFrom(Sacrifice.totalPower);
      this.nextPower.copyFrom(Sacrifice.nextPower.add(Sacrifice.totalPower));
    },
    handleYesClick() {
      sacrificeReset();
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="sacrifice"
    @confirm="handleYesClick"
  >
    <template #header>
      차원 희생
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <br>
    <div class="c-modal-message__text">
      {{ multiplierText }}
      <br>
    </div>
  </ModalWrapperChoice>
</template>
