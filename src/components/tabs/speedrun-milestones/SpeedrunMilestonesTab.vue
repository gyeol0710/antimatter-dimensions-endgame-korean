<script>
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import SpeedrunMilestoneSingle from "./SpeedrunMilestoneSingle";

export default {
  name: "SpeedrunMilestonesTab",
  components: {
    PrimaryToggleButton,
    SpeedrunMilestoneSingle,
  },
  data() {
    return {
      milestoneTimes: [],
      maxMilestone: 1,
      startTimeStr: "",
      displayAll: false,
      isSpectating: false,
    };
  },
  computed: {
    milestones: () => GameDatabase.speedrunMilestones,
    spectateText() {
      return this.isSpectating
        ? "여기에 표시되는 시간은 END의 영향을 받지 않으므로 최종 기록을 확인할 수 있습니다."
        : null;
    }
  },
  watch: {
    displayAll(newValue) {
      player.speedrun.displayAllMilestones = newValue;
    }
  },
  methods: {
    update() {
      this.milestoneTimes = [...player.speedrun.records];
      this.maxMilestone = this.milestoneTimes.map(i => Boolean(i)).lastIndexOf(true) + 1;
      this.startTimeStr = player.speedrun.startDate === 0
        ? "스피드런이 아직 시작되지 않았습니다."
        : `스피드런 시작 시각: ${Time.toDateTimeString(player.speedrun.startDate)}`;
      this.displayAll = player.speedrun.displayAllMilestones;
      this.isSpectating = GameEnd.endState > END_STATE_MARKERS.SPECTATE_GAME;
    },
  },
};
</script>

<template>
  <div>
    <PrimaryToggleButton
      v-model="displayAll"
      class="o-primary-btn--subtab-option"
      label="모든 마일스톤 설명 표시:"
    />
    <br>
    <b>{{ startTimeStr }}</b>
    <br>
    <b>{{ spectateText }}</b>
    <br>
    <div class="l-speedrun-milestone-tab">
      <SpeedrunMilestoneSingle
        v-for="milestone in milestones"
        :key="milestone.id"
        :milestone="milestone"
        :display="displayAll || milestone.id <= maxMilestone"
        :time="milestoneTimes[milestone.id]"
      />
    </div>
  </div>
</template>
