<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "LoadGameEntry",
  components: {
    PrimaryButton
  },
  props: {
    saveId: {
      type: Number,
      required: true
    }
  },
  data() {
    const save = GameStorage.saves[this.saveId];
    return {
      antimatter: new Decimal(save ? save.antimatter || save.money : 10),
      fileName: save ? save.options.saveFileName : ""
    };
  },
  computed: {
    isSelected() {
      return GameStorage.currentSlot === this.saveId;
    }
  },
  methods: {
    load() {
      GameStorage.loadSlot(this.saveId);
    },
    formatAntimatter(antimatter) {
      return formatPostBreak(antimatter, 2, 1);
    },
    update() {
      if (this.isSelected) {
        this.antimatter.copyFrom(Currency.antimatter);
      }
    }
  },
};
</script>

<template>
  <div class="l-modal-options__save-record">
    <h3>세이브 #{{ saveId + 1 }}:<span v-if="isSelected"> (선택됨)</span></h3>
    <span v-if="fileName">세이브 파일 이름: {{ fileName }}</span>
    <span>반물질: {{ formatAntimatter(antimatter) }}</span>
    <PrimaryButton
      class="o-primary-btn--width-medium"
      @click="load"
    >
      불러오기
    </PrimaryButton>
  </div>
</template>
