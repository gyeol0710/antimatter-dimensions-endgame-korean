<script>
export default {
  name: "ChallengeRecordsList",
  props: {
    name: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: true
    },
    times: {
      type: Array,
      required: true
    }
  },
  computed: {
    timeSum() {
      return this.times.decimalSum();
    },
    completedAllChallenges() {
      return this.timeSum.lt(DC.BEMAX);
    }
  },
  methods: {
    timeDisplayShort,
    completionString(time) {
      return time.lt(DC.BEMAX)
        ? `기록: ${timeDisplayShort(time)}`
        : "아직 완료하지 않음";
    }
  }
};
</script>

<template>
  <div>
    <br>
    <div
      v-for="(time, i) in times"
      :key="i"
    >
      <span>{{ name }} {{ start + i }} {{ completionString(time) }}</span>
    </div>
    <br>
    <div v-if="completedAllChallenges">
      {{ name }} 기록 시간 합계: {{ timeDisplayShort(timeSum) }}
    </div>
    <div v-else>
      {{ name }} 전체를 아직 완료하지 않았습니다.
    </div>
  </div>
</template>
