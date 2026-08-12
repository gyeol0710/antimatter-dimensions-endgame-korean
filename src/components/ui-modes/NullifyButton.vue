<script>
export default {
  name: "NullifyButton",
  data() {
    return {
      isModern: false,
      shouldDisplay: false
    };
  },
  methods: {
    update() {
      this.shouldDisplay = player.endgame.largeHadronCollider.void.nullMatter.gte(DC.NUMMAX) &&
        !player.endgame.largeHadronCollider.void.nullified;
      if (!this.shouldDisplay) return;
      this.isModern = player.options.newUI;
    },
    handleClick() {
      player.endgame.largeHadronCollider.void.nullified = true;
      Modal.message.show(`경고: 과도한 무효 물질이 시공간에 균열을 만들었습니다.
        이 균열로 무효화된 공허가 해금되고 무효 입자를 생성하기 시작합니다.`, {}, 3);
    }
  }
};
</script>

<template>
  <span v-if="shouldDisplay">
    <div v-if="isModern">
      <h3 class="l-spacing">
        엔트로피가 너무 커졌다... 다중우주를 무효화해야 한다...
      </h3>
      <button
        :class="{
          'btn-nullify': true
        }"
        @click="handleClick"
      >
        무효화
      </button>
    </div>
    <div v-else>
      <button
        :class="{
          'o-tab-btn': true,
          'o-nullify-btn': true,
          'l-old-ui__nullify-btn': true
        }"
        @click="handleClick"
      >
        무효화
      </button>
      <div class="o-emptiness">
        엔트로피가 너무 커졌다... 다중우주를 무효화해야 한다...
      </div>
    </div>
  </span>
</template>

<style scoped>
.l-spacing {
  margin-top: 1rem;
}
</style>
