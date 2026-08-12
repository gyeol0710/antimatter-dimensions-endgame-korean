<script>
import BigCrunchAutobuyerBox from "@/components/tabs/autobuyers/BigCrunchAutobuyerBox";
import DimensionBoostAutobuyerBox from "@/components/tabs/autobuyers/DimensionBoostAutobuyerBox";
import EternityAutobuyerBox from "@/components/tabs/autobuyers/EternityAutobuyerBox";
import GalaxyAutobuyerBox from "@/components/tabs/autobuyers/GalaxyAutobuyerBox";
import ModalWrapper from "@/components/modals/ModalWrapper";
import RealityAutobuyerBox from "@/components/tabs/autobuyers/RealityAutobuyerBox";

export default {
  name: "AutobuyerEditModal",
  components: {
    BigCrunchAutobuyerBox,
    DimensionBoostAutobuyerBox,
    EternityAutobuyerBox,
    GalaxyAutobuyerBox,
    ModalWrapper,
    RealityAutobuyerBox,
  },
  computed: {
    header() {
      return `자동구매기 편집`;
    },
    message() {
      // We have to have this edge-case due to a weird happening where you could open this modal
      // during the Reality animation, which would then show an empty modal.
      return Autobuyers.hasAutobuyersForEditModal
        ? `이 창에서 자동구매기의 여러 설정값을 편집할 수 있습니다.`
        : `현재 이 창에 표시할 수 있는 자동구매기가 없습니다.`;
    },
  },
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      {{ header }}
    </template>
    <div class="c-modal-message__text-fit">
      <span>
        {{ message }}
      </span>
    </div>
    <!--
      We only include these autobuyers as these are (probably) the ones that users will want to change
      most often.
    -->
    <RealityAutobuyerBox
      class="c-reality-pos"
      is-modal
    />
    <EternityAutobuyerBox
      class="c-eternity-pos"
      is-modal
    />
    <BigCrunchAutobuyerBox
      class="c-infinity-pos"
      is-modal
    />
    <GalaxyAutobuyerBox is-modal />
    <DimensionBoostAutobuyerBox is-modal />
  </ModalWrapper>
</template>

<style scoped>
/* From AutobuyersTab.vue */
/* This is necessary for the ExpandingControlBox within these components to render in the right stacking order
when they're open. It looks slightly hacky but actually can't be done any other way; each AutobuyerBox creates
its own stacking context, which means that all z-indices specified within are essentially scoped and the
AutobuyerBox components will always render in page order regardless of internal z-indices without these. */
.c-reality-pos {
  z-index: 3;
}

.c-eternity-pos {
  z-index: 2;
}

.c-infinity-pos {
  z-index: 1;
}

.c-modal-message__text-fit {
  width: auto;
}
</style>
