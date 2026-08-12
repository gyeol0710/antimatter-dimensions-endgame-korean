<script>
export default {
  name: "DilationButton",
  data() {
    return {
      isUnlocked: false,
      isRunning: false,
      hasGain: false,
      requiredForGain: new Decimal(),
      canEternity: false,
      eternityGoal: new Decimal(),
      tachyonGain: new Decimal(),
      remnantRequirement: 0,
      showRequirement: false,
      creditsClosed: false
    };
  },
  computed: {
    disableText() {
      // Doesn't need to be reactive or check strike status; it's always permanent once entered in Doomed
      return Pelle.isDoomed && !PelleStrikes.dilation.isDestroyed()
        ? "시간 팽창은 영구적입니다."
        : "시간 팽창을 종료합니다.";
    }
  },
  methods: {
    update() {
      this.isUnlocked = PlayerProgress.dilationUnlocked();
      this.isRunning = player.dilation.active;
      this.remnantRequirement = Pelle.remnantRequirementForDilation;
      this.showRequirement = Pelle.isDoomed && !Pelle.canDilateInPelle;
      if (!this.isRunning) return;
      this.canEternity = Player.canEternity;
      // This lets this.hasGain be true even before eternity.
      this.hasGain = getTachyonGain(false).gt(0);
      if (this.canEternity && this.hasGain) {
        this.tachyonGain.copyFrom(getTachyonGain(true));
      } else if (this.hasGain) {
        this.eternityGoal.copyFrom(Player.eternityGoal);
      } else {
        this.requiredForGain.copyFrom(getTachyonReq());
      }
      this.creditsClosed = GameEnd.creditsEverClosed;
    },
    dilate() {
      if (this.creditsClosed) return;
      startDilatedEternityRequest();
    }
  }
};
</script>

<template>
  <button
    class="o-dilation-btn"
    :class="isUnlocked ? 'o-dilation-btn--unlocked' : 'o-dilation-btn--locked'"
    @click="dilate()"
  >
    <span v-if="!isUnlocked">시간 팽창 연구를 구매해야 해금됩니다.</span>
    <span v-else-if="!isRunning">
      시간을 팽창시킵니다.
      <div v-if="showRequirement">
        잔재 {{ format(remnantRequirement, 2) }}개 필요
      </div>
    </span>
    <span v-else-if="canEternity && hasGain">
      {{ disableText }}
      <br>
      {{ quantify("타키온 입자", tachyonGain, 2, 1) }} 획득.
    </span>
    <span v-else-if="hasGain">
      {{ disableText }}
      <br>
      {{ quantify("무한 포인트", eternityGoal, 1, 0) }}를 모아 영원에 도달하고 타키온 입자를 획득합니다.
    </span>
    <span v-else>
      {{ disableText }}
      <br>
      반물질 {{ format(requiredForGain, 2, 1) }}에 도달하면 더 많은 타키온 입자를 획득합니다.
    </span>
  </button>
</template>

<style scoped>

</style>
