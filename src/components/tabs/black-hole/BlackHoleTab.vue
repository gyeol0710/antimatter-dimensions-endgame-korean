<script>
import { BlackHoleAnimation } from "./black-hole-animation";
import BlackHoleChargingSliders from "./BlackHoleChargingSliders";
import BlackHoleStateRow from "./BlackHoleStateRow";
import BlackHoleUnlockButton from "./BlackHoleUnlockButton";
import BlackHoleUpgradeRow from "./BlackHoleUpgradeRow";

export default {
  name: "BlackHoleTab",
  components: {
    BlackHoleUpgradeRow,
    BlackHoleStateRow,
    BlackHoleChargingSliders,
    BlackHoleUnlockButton
  },
  data() {
    return {
      isDoomed: false,
      isDisabled: false,
      isUnlocked: false,
      isPaused: false,
      isEnslaved: false,
      isLaitela: false,
      pauseMode: 0,
      detailedBH2: "",
      isPermanent: false,
      hasBH2: false,
      blackHoleUptime: [],
      stateChange: "",
    };
  },
  computed: {
    blackHoles: () => BlackHoles.list,
    pauseModeString() {
      switch (this.pauseMode) {
        case BLACK_HOLE_PAUSE_MODE.NO_PAUSE:
          return "일시 정지하지 않음";
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH1:
          return this.hasBH2 ? "블랙홀 1 이전" : "활성화 이전";
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH2:
          return "블랙홀 2 이전";
        default:
          throw new Error("Unrecognized BH offline pausing mode");
      }
    },
  },
  mounted() {
    this.startAnimation();
  },
  destroyed() {
    if (this.animation) this.animation.unmount();
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed && !PelleDestructionUpgrade.blackHole.canBeApplied;
      this.isDisabled = player.disablePostReality;
      this.isUnlocked = BlackHoles.areUnlocked;
      this.isPaused = BlackHoles.arePaused;
      // If stop running enslaved, re-mount the black hole animation as it reappears
      if (this.isEnslaved && !Enslaved.isRunning) {
        if (this.animation) this.animation.unmount();
        this.startAnimation();
      }
      this.isEnslaved = Enslaved.isRunning;
      this.isLaitela = Laitela.isRunning;
      this.isPermanent = BlackHoles.arePermanent;
      this.pauseMode = player.blackHoleAutoPauseMode;
      this.hasBH2 = BlackHole(2).isUnlocked;
      this.blackHoleUptime = [BlackHole(1).duration / BlackHole(1).cycleLength,
        BlackHole(2).duration / BlackHole(2).cycleLength];
      this.detailedBH2 = this.bh2Status();

      if (player.blackHoleNegative < 1 && !this.isLaitela) this.stateChange = this.isPaused ? "역전 해제" : "역전";
      else this.stateChange = this.isPaused ? "재개" : "일시 정지";
    },
    bh2Status() {
      const bh1Remaining = BlackHole(1).timeWithPreviousActiveToNextStateChange;
      const bh2Remaining = BlackHole(2).timeWithPreviousActiveToNextStateChange;

      // Both BH active
      if (BlackHole(1).isActive && BlackHole(2).isActive) {
        const bh2Duration = Math.min(bh1Remaining, bh2Remaining);
        return `블랙홀 2가 앞으로 ${TimeSpan.fromSeconds(new Decimal(bh2Duration)).toStringShort()} 동안 활성화됩니다!`;
      }

      // BH1 active, BH2 will trigger before BH1 runs out
      if (BlackHole(1).isActive && (bh2Remaining < bh1Remaining)) {
        const bh2Duration = Math.min(bh1Remaining - bh2Remaining, BlackHole(2).duration);
        return `블랙홀 2가 블랙홀 1이 비활성화되기 전에 활성화되어
          ${TimeSpan.fromSeconds(new Decimal(bh2Duration)).toStringShort()} 동안 유지됩니다.`;
      }

      // BH2 won't start yet next cycle
      if (BlackHole(1).isActive || (bh2Remaining > BlackHole(1).duration)) {
        const cycleCount = BlackHole(1).isActive
          ? Math.floor((bh2Remaining - bh1Remaining) / BlackHole(1).duration) + 1
          : Math.floor(bh2Remaining / BlackHole(1).duration);
        return `블랙홀 2는 블랙홀 1이 ${quantifyHybridSmall("번 더 활성화", cycleCount)}된 후 활성화됩니다.`;
      }

      // BH1 inactive, BH2 ready to go when BH1 activates
      if (BlackHole(2).isCharged) {
        const bh2Duration = Math.min(BlackHole(1).duration, bh2Remaining);
        return `블랙홀 2가 블랙홀 1과 함께 활성화되어
          ${TimeSpan.fromSeconds(new Decimal(bh2Duration)).toStringShort()} 동안 유지됩니다.`;
      }

      // BH1 inactive, BH2 starts at some point after BH1 activates
      const bh2Duration = Math.min(BlackHole(1).duration - bh2Remaining, BlackHole(2).duration);
      return `블랙홀 2는 블랙홀 1이 활성화된 지
        ${TimeSpan.fromSeconds(new Decimal(bh2Remaining)).toStringShort()} 후 활성화되어
        ${TimeSpan.fromSeconds(new Decimal(bh2Duration)).toStringShort()} 동안 유지됩니다.`;
    },
    togglePause() {
      BlackHoles.togglePause();
      if (BlackHoles.arePaused) {
        player.celestials.enslaved.isAutoReleasing = false;
      }
      this.update();
    },
    changePauseMode() {
      let steps;
      switch (this.pauseMode) {
        case BLACK_HOLE_PAUSE_MODE.NO_PAUSE:
          // Note: We don't need to check for permanent BH2 because the button disappears at that point
          steps = BlackHole(1).isPermanent ? 2 : 1;
          break;
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH1:
          steps = this.hasBH2 ? 1 : 2;
          break;
        case BLACK_HOLE_PAUSE_MODE.PAUSE_BEFORE_BH2:
          steps = 1;
          break;
        default:
          throw new Error("Unrecognized BH offline pausing mode");
      }
      player.blackHoleAutoPauseMode = (this.pauseMode + steps) % Object.values(BLACK_HOLE_PAUSE_MODE).length;
    },
    startAnimation() {
      setTimeout(() => {
        if (this.$refs.canvas) {
          this.animation = new BlackHoleAnimation(this.$refs.canvas.getContext("2d"));
        }
      }, 1);
    },
    gridStyle() {
      return this.isPermanent ? "l-black-hole-upgrade-permanent" : "l-black-hole-upgrade-grid";
    },
  },
};
</script>

<template>
  <div class="l-black-hole-tab">
    <div
      v-if="isEnslaved || isDoomed || isDisabled"
      class="c-black-hole-disabled-description"
    >
      <i v-if="isEnslaved">
        다른... 방법을... 찾아야 한다...
        <br>
      </i>
      이 현실의 물리 법칙에서는 블랙홀이 존재할 수 없습니다.
    </div>
    <div
      v-else-if="!isUnlocked"
      class="l-pre-unlock-text"
    >
      <BlackHoleUnlockButton @blackholeunlock="startAnimation" />
      블랙홀은 짧은 시간 동안 게임 전체를 훨씬 빠르게 진행시킵니다.
      <br>
      처음에는 한 시간마다 {{ formatInt(10) }}초 동안 게임 속도가 {{ formatX(180) }} 빨라집니다.
      <br>
      <br>
      블랙홀을 해금하면 오토메이터 포인트도 {{ formatInt(10) }}개 얻습니다.
    </div>
    <template v-else>
      <div class="c-subtab-option-container">
        <button
          class="o-primary-btn o-primary-btn--subtab-option"
          @click="togglePause"
        >
          블랙홀 {{ stateChange }}
        </button>
        <button
          v-if="!isPermanent"
          class="o-primary-btn o-primary-btn--subtab-option l-auto-pause-button"
          @click="changePauseMode"
        >
          자동 일시 정지: {{ pauseModeString }}
        </button>
      </div>
      <canvas
        ref="canvas"
        class="c-black-hole-canvas"
        width="400"
        height="400"
      />
      <div class="l-black-hole-upgrade-grid">
        <BlackHoleStateRow
          v-for="(blackHole, i) in blackHoles"
          :key="'state' + i"
          :black-hole="blackHole"
        />
        <span v-if="hasBH2 && !isPermanent">
          <b>{{ detailedBH2 }}</b>
          <br>
          블랙홀 2의 타이머는 블랙홀 1이 활성화된 동안에만 진행됩니다.
          <br>
          업그레이드는 내부 타이머에 영향을 주며, 상단에는 다음 활성화까지의 실제 시간이 표시됩니다.
        </span>
        <br>
        <div v-if="!isPermanent">
          블랙홀의 활성 시간 비율이 {{ formatPercents(0.9999, 2) }}를 넘으면 영구적으로 활성화됩니다.
          <br>
          활성 시간 비율: {{ formatPercents(blackHoleUptime[0], 3) }}
          <span v-if="hasBH2">및 {{ formatPercents(blackHoleUptime[1], 3) }}</span>
        </div>
        <BlackHoleChargingSliders
          v-if="!isLaitela"
          class="l-enslaved-shop-container"
        />
      </div>
      <div :class="gridStyle()">
        <BlackHoleUpgradeRow
          v-for="(blackHole, i) in blackHoles"
          :key="'upgrades' + i"
          :black-hole="blackHole"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.l-auto-pause-button {
  width: 30rem;
}

.l-pre-unlock-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.c-black-hole-disabled-description {
  font-size: 2.5rem;
  line-height: 1.5;
}
</style>
