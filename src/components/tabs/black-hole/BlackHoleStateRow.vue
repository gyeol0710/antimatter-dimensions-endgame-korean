<script>
export default {
  name: "BlackHoleStateRow",
  props: {
    blackHole: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isUnlocked: false,
      isPermanent: false,
      isActive: false,
      isCharged: false,
      nextChange: "",
      state: "",
    };
  },
  computed: {
    description() {
      return this.blackHole.description(true);
    },
    id() {
      return this.blackHole.id;
    }
  },
  methods: {
    update() {
      const { blackHole } = this;
      this.isUnlocked = blackHole.isUnlocked;
      if (!this.isUnlocked) return;
      this.isPermanent = blackHole.isPermanent;
      this.isActive = blackHole.isActive;
      this.isCharged = blackHole.isCharged;
      this.nextChange = TimeSpan.fromSeconds(new Decimal(blackHole.timeWithPreviousActiveToNextStateChange)).toStringShort();
      this.state = blackHole.displayState;
    }
  }
};
</script>

<template>
  <h3 v-if="isUnlocked">
    {{ description }} 상태:
    <template v-if="isPermanent">
      영구 활성
    </template>
    <template v-else-if="isActive">
      활성 ({{ nextChange }} 남음)
    </template>
    <template v-else-if="id === 2 && isCharged">
      충전됨 (블랙홀 1과 함께 활성화, {{ nextChange }} 남음)
    </template>
    <template v-else>
      비활성 ({{ nextChange }} 후 활성화)
    </template>
  </h3>
</template>

<style scoped>

</style>
