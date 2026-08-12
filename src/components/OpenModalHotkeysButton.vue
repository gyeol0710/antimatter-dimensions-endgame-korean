<script>
export default {
  name: "OpenModalHotkeysButton",
  methods: {
    handleClick() {
      Modal.hotkeys.show();
    }
  }
};
</script>

<template>
  <p
    class="c-options-tab__hotkeys-link"
    @click="handleClick"
  >
    단축키 목록을 열려면 <kbd>?</kbd> 키를 누르세요.
  </p>
</template>
