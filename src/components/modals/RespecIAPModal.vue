<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "RespecIAPModal",
  components: {
    ModalWrapperChoice
  },
  methods: {
    returnedSTDCount() {
      let std = 0;
      for (const purchase of ShopPurchase.all) {
        if (purchase.config.instantPurchase) continue;
        std += purchase.purchases * purchase.cost;
      }
      return std;
    },
    handleYesClick() {
      ShopPurchaseData.respecAll();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="respecIAP"
    @confirm="handleYesClick"
  >
    <template #header>
      상점 구매를 재분배하려고 합니다
    </template>
    <div class="c-modal-message__text">
      상점 구매를 재분배하시겠습니까? 비용은 들지 않으며, 영구 배율을 부여하는 모든 구매에 사용한
      {{ returnedSTDCount() }}
      <img
        src="images/std_coin.png"
        class="o-shop-button-button__img"
      >를 돌려받습니다.
      <br>
      <br>
      오프라인 진행과 글리프 꾸미기에 사용한 금액은 환불되지 않습니다. 글리프 꾸미기 세트는 영구 적용되며,
      한 번 구매하면 사라지거나 재분배되지 않습니다.
      <br>
      <br>
      <b class="o-warning">STD 코인을 더 구매하기 전까지 재분배할 수 없습니다.</b>
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-modal-message__text {
  vertical-align: middle;
}

.o-shop-button-button__img {
  height: 2.5rem;
  vertical-align: middle;
}

.o-warning {
  color: var(--color-infinity);
}
</style>
