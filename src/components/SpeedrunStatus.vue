<script>
export default {
  name: "SpeedrunStatus",
  data() {
    return {
      isActive: false,
      isSegmented: false,
      usedSTD: false,
      hasStarted: false,
      startDate: 0,
      saveName: "",
      timePlayedStr: "",
      offlineProgress: false,
      offlineFraction: 0,
      mostRecent: {},
      isCollapsed: false,
      timeSince: 0,
      seedText: 0,
      canModifySeed: false,
      isComplete: false,
    };
  },
  computed: {
    statusText() {
      if (this.isComplete) return `<span style="color: var(--color-good)">완료!</span>`;
      return this.hasStarted
        ? `<span style="color: var(--color-good)">진행 중!</span>`
        : `<span style="color: var(--color-bad)">아직 시작하지 않음</span>`;
    },
    segmentText() {
      return this.isSegmented ? "분할 스피드런 (가져온 저장 파일)" : "단일 구간 스피드런 (저장 파일 가져오기 없음)";
    },
    iapText() {
      return this.usedSTD ? "IAP 사용됨" : "IAP 사용 안 함";
    },
    offlineText() {
      const stateText = this.offlineProgress
        ? `<span style="color: var(--color-good)">활성화</span>`
        : `<span style="color: var(--color-bad)">비활성화</span>`;
      const fractionText = this.offlineFraction === 0
        ? "(오프라인 시간 사용 안 함)"
        : `(플레이 시간 중 ${formatPercents(this.offlineFraction, 2)} 오프라인)`;
      return `${stateText} ${fractionText}`;
    },
    collapseIcon() {
      return this.isCollapsed
        ? "fas fa-expand-arrows-alt"
        : "fas fa-compress-arrows-alt";
    }
  },
  methods: {
    update() {
      const speedrun = player.speedrun;
      this.isActive = speedrun.isActive;
      this.canModifySeed = Speedrun.canModifySeed();
      // Short-circuit if speedrun isn't active; updating some later stuff can cause vue errors outside of speedruns
      if (!this.isActive) return;
      this.isSegmented = speedrun.isSegmented;
      this.usedSTD = speedrun.usedSTD;
      this.hasStarted = speedrun.hasStarted;
      this.startDate = speedrun.startDate;
      this.saveName = speedrun.name;
      this.isCollapsed = speedrun.hideInfo;
      this.isComplete = Achievement(188).isUnlocked;

      this.timePlayedStr = Time.realTimePlayed.toStringShort();
      this.offlineProgress = player.options.offlineProgress;
      this.offlineFraction = speedrun.offlineTimeUsed / Math.clampMin(player.records.realTimePlayed, 1);
      this.mostRecent = Speedrun.mostRecentMilestone();
      this.timeSince = Time.realTimePlayed.minus(TimeSpan.fromMilliseconds(new Decimal(speedrun.records[this.mostRecent] ?? 0)))
        .toStringShort();
      this.seedText = Speedrun.seedModeText();
    },
    milestoneName(id) {
      const db = GameDatabase.speedrunMilestones;
      return id === 0 ? "없음" : db.find(m => m.id === id).name;
    },
    changeName() {
      if (this.hasStarted) return;
      Modal.changeName.show();
    },
    collapseText() {
      return this.isCollapsed ? "펼치기" : `클릭하여 스피드런 정보 접기`;
    },
    toggleCollapse() {
      player.speedrun.hideInfo = !this.isCollapsed;
    },
    openSeedModal() {
      if (!this.canModifySeed) return;
      Modal.modifySeed.show();
    }
  },
};
</script>

<template>
  <div
    v-if="isActive"
    class="c-speedrun-status"
  >
    <div v-if="!isCollapsed">
      <b>스피드런 상태 (<span v-html="statusText" />)</b>
      <br>
      <span
        :class="{ 'c-speedrun-status--can-change': !hasStarted }"
        @click="changeName"
      >
        플레이어 이름: {{ saveName }}
      </span>
      <br>
      <i>{{ segmentText }}</i>
      <br>
      <i>{{ iapText }}</i>
      <br>
      <span
        :class="{ 'c-speedrun-status--can-change': canModifySeed }"
        @click="openSeedModal()"
      >{{ seedText }}</span>
      <br>
      시작 후 총 실제 플레이 시간: {{ timePlayedStr }}
      <br>
      오프라인 진행: <span v-html="offlineText" />
      <br>
      최근 마일스톤: {{ milestoneName(mostRecent) }} <span v-if="mostRecent">({{ timeSince }} 전)</span>
      <br>
    </div>
    <div
      class="c-speedrun-status--collapse"
      @click="toggleCollapse"
    >
      <i :class="collapseIcon" />
      {{ collapseText() }}
      <i :class="collapseIcon" />
    </div>
  </div>
</template>

<style scoped>
.c-speedrun-status {
  white-space: nowrap;
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  z-index: 5;
  font-size: 1.2rem;
  color: var(--color-text);
  background-color: var(--color-base);
  border: var(--var-border-width, 0.2rem) solid var(--color-accent);
  padding: 0.8rem 2rem;
  pointer-events: auto;
  -webkit-user-select: none;
  user-select: none;
}

.c-speedrun-status--can-change {
  text-decoration: underline;
  cursor: pointer;
}

.c-speedrun-status--collapse {
  padding: 0.2rem;
  cursor: pointer;
}
</style>
