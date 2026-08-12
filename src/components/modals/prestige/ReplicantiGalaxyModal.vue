<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ReplicantiGalaxyModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      replicanti: new Decimal(),
      divideReplicanti: false,
      canBeBought: new Decimal(),
    };
  },
  computed: {
    topLabel() {
      return `${quantifyHybridLarge("복제자 은하", this.canBeBought)}를 구매하려 합니다`;
    },
    message() {
      const reductionString = this.divideReplicanti
        ? `구매한 복제자 은하 하나마다 복제자를 ${format(Number.MAX_VALUE, 2, 2)}로 나눕니다
          (${format(this.replicanti, 2, 2)}에서
          ${format(this.replicanti.divide(DC.NUMMAX.pow(this.canBeBought)), 2, 2)}로)`
        : `복제자를 ${formatInt(1)}로 초기화합니다`;
      return `복제자 은하는 반물질 은하와 같은 방식으로 틱스피드를 강화합니다. 하지만 반물질 은하 비용을
        높이지 않으며, 반물질 은하에만 적용되는 배율의 영향도 받지 않습니다. 구매 시 ${reductionString}.`;
    }
  },
  methods: {
    update() {
      this.replicanti.copyFrom(player.replicanti.amount);
      this.divideReplicanti = Achievement(126).isUnlocked;
      this.canBeBought.copyFrom(Replicanti.galaxies.gain);
      if (this.replicanti.lt(Number.MAX_VALUE)) this.emitClose();
    },
    handleYesClick() {
      replicantiGalaxy(false);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="replicantiGalaxy"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
