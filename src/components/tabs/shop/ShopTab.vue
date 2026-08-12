<script>
import "vue-loading-overlay/dist/vue-loading.css";

import Loading from "vue-loading-overlay";

import Payments from "@/core/payments";

import { STEAM } from "@/env";
import { SteamRuntime } from "@/steam";

import PrimaryButton from "@/components/PrimaryButton";
import ShopButton from "./ShopButton";

export default {
  name: "ShopTab",
  components: {
    ShopButton,
    Loading,
    PrimaryButton,
  },
  data() {
    return {
      availableSTD: 0,
      spentSTD: 0,
      isLoading: false,
      IAPsEnabled: false,
      creditsClosed: false,
      loggedIn: false,
      username: "",
      canRespec: false,
      respecTimeStr: "",
    };
  },
  computed: {
    STEAM() {
      return STEAM;
    },
    purchases() {
      return ShopPurchase.all;
    },
    enableText() {
      return `인앱 구매: ${this.IAPsEnabled ? "활성화" : "비활성화"}`;
    },
    respecText() {
      if (!this.loggedIn) return "로그인하지 않았습니다!";
      if (!this.canRespec) return "사용 가능한 재분배가 없습니다! (STD를 구매하거나 마지막 재분배 후 3일 기다리세요)";
      return null;
    },
    hiddenName() {
      return player.options.hideGoogleName;
    }
  },
  methods: {
    update() {
      this.availableSTD = ShopPurchaseData.availableSTD;
      this.spentSTD = ShopPurchaseData.spentSTD;
      this.isLoading = Boolean(player.IAP.checkoutSession.id);
      this.IAPsEnabled = player.IAP.enabled;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.loggedIn = Cloud.loggedIn;
      this.username = Cloud.user?.displayName;
      this.canRespec = ShopPurchaseData.canRespec;
      if (!ShopPurchaseData.respecAvailable && !this.canRespec) {
        this.respecTimeStr = ShopPurchaseData.timeUntilRespec.toStringShort();
      }
    },
    showStore() {
      if (STEAM && !SteamRuntime.isActive) return;
      if (this.creditsClosed) return;
      SecretAchievement(33).unlock();
      if (this.loggedIn) Modal.shop.show();
      else Modal.message.show("먼저 로그인해야 STD 코인을 구매할 수 있습니다.");
    },
    onCancel() {
      Payments.cancelPurchase(false);
    },
    respec() {
      if (this.creditsClosed || !this.loggedIn || !this.canRespec) return;
      ShopPurchaseData.respecRequest();
    },
    toggleEnable() {
      if (ShopPurchaseData.availableSTD < 0) return;
      player.IAP.enabled = !player.IAP.enabled;
      if (ShopPurchaseData.isIAPEnabled) Speedrun.setSTDUse(true);
    },
    respecClass() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-pelle-disabled-pointer": this.creditsClosed,
        "o-primary-btn--disabled": !this.loggedIn || !this.canRespec
      };
    }
  },
};
</script>

<template>
  <div class="tab shop">
    <div class="c-shop-disclaimer">
      안내: 이 상품들은 게임 진행에 필요하지 않으며 개발자를 후원하기 위한 것입니다.
      게임은 소액 결제를 사용하지 않아도 균형이 맞도록 설계되어 있습니다.
    </div>
    <div>
      참고: 법적인 이유로 Android, Steam, 웹 버전에서 구매한 상점 상품은
      서로 분리되며 다른 버전으로 이전할 수 없습니다.
    </div>
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        label="인앱 구매 비활성화:"
        @click="toggleEnable()"
      >
        {{ enableText }}
      </PrimaryButton>
      <PrimaryButton
        v-if="!STEAM"
        v-tooltip="respecText"
        :class="respecClass()"
        @click="respec()"
      >
        상점 구매 재분배
      </PrimaryButton>
    </div>
    <div v-if="loggedIn && !canRespec && !STEAM">
      다음 재분배까지: {{ respecTimeStr }}
    </div>
    <div
      v-if="loggedIn"
      class="c-login-info"
    >
      <template v-if="STEAM">
        {{ username }} 계정으로 로그인했습니다.
      </template>
      <template v-else>
        <span v-if="hiddenName">로그인했습니다. <i>(이름 숨김)</i></span>
        <span v-else>{{ username }} 계정으로 로그인했습니다.</span>
        <button
          class="o-shop-button-button"
          onclick="GameOptions.logout()"
        >
          Google 계정 연결 해제
        </button>
      </template>
    </div>
    <div
      v-else
      class="c-login-info"
    >
      STD 코인을 구매하거나 이 업그레이드를 사용하려면 로그인해야 합니다.
      <button
        class="o-shop-button-button"
        onclick="GameOptions.login()"
      >
        Google로 로그인
      </button>
    </div>
    <div class="c-shop-header">
      <span>{{ availableSTD }}개 보유</span>
      <img
        src="images/std_coin.png"
        class="c-shop-header__img"
      >
      <button
        class="o-shop-button-button"
        :class="{ 'o-shop-button-button--disabled': !loggedIn }"
        @click="showStore()"
      >
        더 구매하기
      </button>
    </div>
    참고: 이 페이지의 모든 숫자에는 의도적으로 표기법 설정이 적용되지 않습니다
    <div class="l-shop-buttons-container">
      <ShopButton
        v-for="purchase in purchases"
        :key="purchase.key"
        :purchase="purchase"
      />
    </div>
    <loading
      :active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
    />
  </div>
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
}

.c-shop-disclaimer {
  width: 80%;
  max-width: 100rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  background: var(--color-bad);
  border: var(--var-border-width, 0.2rem) solid black;
  border-radius: var(--var-border-radius, 1rem);
  margin-top: 0.8rem;
}

.t-s1 .c-shop-disclaimer,
.t-s6 .c-shop-disclaimer,
.t-s10 .c-shop-disclaimer {
  color: var(--color-bad);
  background: black;
  border-color: var(--color-bad);
}

.c-login-info {
  font-size: 1.5rem;
}

.c-shop-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 1rem 0;
}

.c-shop-header__img {
  height: 40px;
  margin: 0 1rem;
}

.o-shop-button-button {
  display: flex;
  align-items: center;
  font-family: Typewriter;
  background: turquoise;
  border: none;
  border-radius: var(--var-border-radius, 0.5rem);
  margin: auto;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

.o-shop-button-button--disabled {
  background: rgb(150, 150, 150);
  cursor: default;
}

.l-shop-buttons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 93rem;
  margin: auto;
}

.c-shop-header .o-shop-button-button {
  margin: 0;
}
</style>
