<script>
export default {
  name: "DivinityButton",
  data() {
    return {
      isModern: false,
      shouldDisplay: false
    };
  },
  methods: {
    update() {
      this.shouldDisplay = Pelle.isDoomed && player.antimatter.gte(DC.ENUMMAX);
      if (!this.shouldDisplay) return;
      this.isModern = player.options.newUI;
    },
    handleClick() {
      divinityReset();
    }
  }
};
</script>

<template>
  <span v-if="shouldDisplay">
    <div v-if="isModern">
      <h3 class="l-spacing">
        내 힘이 너무 강해 우주가 안정될 수 없다... 신성이 되어야 한다...
      </h3>
      <button
        :class="{
          'btn-divinity': true
        }"
        @click="handleClick"
      >
        신성이 되기
      </button>
    </div>
    <div v-else>
      <button
        :class="{
          'o-tab-btn': true,
          'o-divinity-btn': true,
          'l-old-ui__divinity-btn': true
        }"
        @click="handleClick"
      >
        신성이 되기
      </button>
      <div class="o-emptiness">
        내 힘이 너무 강해 우주가 안정될 수 없다... 신성이 되어야 한다...
      </div>
    </div>
  </span>
</template>

<style scoped>
.l-spacing {
  margin-top: 1rem;
}
</style>
