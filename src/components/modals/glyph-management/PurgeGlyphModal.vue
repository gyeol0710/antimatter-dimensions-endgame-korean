<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "PurgeGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    harsh: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    threshold() {
      return this.harsh ? 1 : 5;
    },
    extraMessage() {
      if (this.glyphsDeleted === 0) return `정리되는 글리프가 없습니다.`;
      if (this.glyphsDeleted === this.glyphsTotal) return `모든 글리프가 정리됩니다.`;
      return `${this.harsh ? `강력 정리` : `정리`}로 글리프
        ${formatInt(this.glyphsDeleted)}/${formatInt(this.glyphsTotal)}
      개가 삭제됩니다.`;
    },
    explanation() {
      if (this.harsh) return `강력 정리는 인벤토리의 다른 글리프 하나보다 확실히 나쁜 글리프를 삭제합니다.
        예를 들어 다른 글리프와 효과가 모두 같지만 모든 효과의 수치가 더 낮다면 삭제됩니다.`;
      return `정리는 해당 효과로 전체 세트를 장착할 만큼은 남기면서 다른 글리프보다 확실히 나쁜 글리프를
        삭제합니다. 강력 정리와 비슷하지만, 일반 정리는 더 좋은 글리프를 하나가 아니라 다섯 개 찾은
        경우에만 해당 글리프를 삭제합니다.`;
    },
    topLabel() {
      return `글리프를 ${this.harsh ? `강력 정리` : `정리`}하려고 합니다`;
    },

    // These two don't need to be reactive since the modal force-closes itself whenever glyphs change
    glyphsTotal() {
      return Glyphs.inventory.filter(slot => slot !== null).length;
    },
    glyphsDeleted() {
      return Glyphs.autoClean(this.threshold, false);
    },
  },
  methods: {
    handleYesClick() {
      Glyphs.autoClean(this.threshold, true);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="autoClean"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      나중에 사용하고 싶을 만큼 좋은 인벤토리의 글리프도 삭제될 수 있습니다.
      정리는 선택한 정리 모드에 따라 글리프를 제거합니다. 정말 진행하시겠습니까?
      <br>
      <br>
      {{ explanation }}
    </div>
    <br>
    <div class="c-modal-hard-reset-danger">
      {{ extraMessage }}
    </div>
  </ModalWrapperChoice>
</template>
