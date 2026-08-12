<script>
import HiddenTabGroup from "@/components/modals/options/hidden-tabs/HiddenTabGroup";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "HiddenTabsModal",
  components: {
    HiddenTabGroup,
    ModalWrapperOptions,
    PrimaryButton,
  },
  data() {
    return {
      isEnslaved: false,
      isAlmostEnd: false,
    };
  },
  computed: {
    tabs: () => Tabs.currentUIFormat,
  },
  methods: {
    update() {
      this.isEnslaved = Enslaved.isRunning;
      this.isAlmostEnd = Pelle.hasGalaxyGenerator;
    },
    showAllTabs() {
      for (const tab of this.tabs) {
        tab.unhideTab();
        for (const subtab of tab.subtabs)
          subtab.unhideTab();
      }
    }
  },
};
</script>

<template>
  <ModalWrapperOptions class="l-wrapper">
    <template #header>
      탭 설정
    </template>
    <div class="c-modal--short">
      버튼을 클릭하여 탭 표시 여부를 전환할 수 있습니다.
      <br>
      일부 탭과 현재 열려 있는 탭은 숨길 수 없습니다.
      <br>
      모든 하위 탭이 숨겨진 탭을 다시 표시하면 하위 탭도 모두 표시되며,
      하위 탭을 모두 숨기면 상위 탭도 함께 숨겨집니다.
      <br>
      <div v-if="isAlmostEnd">
        은하 생성기를 해금한 뒤에는 탭을 숨길 수 없습니다.
      </div>
      <div v-if="isEnslaved">
        <br>
        <i>너는... 모든 곳을 보아야 한다...</i>
        <br>
        (이 현실에서는 탭을 숨길 수 없습니다)
      </div>
      <PrimaryButton
        @click="showAllTabs"
      >
        모든 탭 표시
      </PrimaryButton>
      <HiddenTabGroup
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :change-enabled="!isEnslaved && !isAlmostEnd"
        class="l-hide-modal-tab-container"
      />
    </div>
  </ModalWrapperOptions>
</template>

<style scoped>
.l-wrapper {
  width: 62rem;
}

.t-s12 .l-wrapper {
  width: 65rem;
}
</style>
