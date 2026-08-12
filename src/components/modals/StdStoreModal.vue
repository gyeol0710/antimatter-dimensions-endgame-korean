<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import StdStoreRow from "@/components/modals/StdStoreRow";
import { SteamRuntime } from "@/steam";

export default {
  name: "StdStoreModal",
  components: {
    ModalWrapper,
    StdStoreRow
  },
  data() {
    return {
      macPurchaser: false,
    };
  },
  methods: {
    update() {
      this.macPurchaser = SteamRuntime.hasPendingPurchaseConfirmations;
    },
    macConfirm() {
      SteamRuntime.validatePurchases();
    }
  },
};
</script>

<template>
  <ModalWrapper class="c-shop-modal">
    <template #header>
      개발자 후원 - 코인
    </template>
    <span v-if="macPurchaser">
      <button class="o-shop-button-button" @click="macConfirm()">구매를 확인하고 STD 받기</button>
      <br><span>(Mac에서 필요)</span><br>
    </span>
    <div class="l-modal-store-content">
      <img src="images/std_coin.png">
      <div class="c-modal-store-buttons">
        <StdStoreRow
          :amount="30"
          :cost="2.99"
        />
        <StdStoreRow
          :amount="60"
          :cost="4.99"
        />
        <StdStoreRow
          :amount="140"
          :cost="9.99"
        />
        <StdStoreRow
          :amount="300"
          :cost="19.99"
        />
        <StdStoreRow
          :amount="1000"
          :cost="49.99"
        />
      </div>
    </div>
  </ModalWrapper>
</template>
