<script>
import InfinityUpgradeButton from "@/components/InfinityUpgradeButton";
import IpMultiplierButton from "./IpMultiplierButton";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "InfinityUpgradesTab",
  components: {
    PrimaryButton,
    InfinityUpgradeButton,
    IpMultiplierButton
  },
  data() {
    return {
      isDoomed: false,
      isUseless: false,
      alwaysRecpec: false,
      chargeUnlocked: false,
      totalCharges: 0,
      chargesUsed: 0,
      disCharge: false,
      ipMultSoftCap: 0,
      ipMultHardCap: 0,
      eternityUnlocked: false,
      bottomRowUnlocked: false,
      styleOfColumnBg: undefined,
      isUncapped: false,
      isSoftcapApplicable: false
    };
  },
  computed: {
    grid() {
      return [
        [
          InfinityUpgrade.totalTimeMult,
          InfinityUpgrade.dim18mult,
          InfinityUpgrade.dim36mult,
          InfinityUpgrade.resetBoost
        ],
        [
          InfinityUpgrade.buy10Mult,
          InfinityUpgrade.dim27mult,
          InfinityUpgrade.dim45mult,
          InfinityUpgrade.galaxyBoost
        ],
        [
          InfinityUpgrade.thisInfinityTimeMult,
          InfinityUpgrade.unspentIPMult,
          InfinityUpgrade.dimboostMult,
          InfinityUpgrade.ipGen
        ],
        [
          InfinityUpgrade.skipReset1,
          InfinityUpgrade.skipReset2,
          InfinityUpgrade.skipReset3,
          InfinityUpgrade.skipResetGalaxy
        ]
      ];
    },
    allColumnUpgrades() {
      return this.grid.flat();
    },
    disChargeClassObject() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-primary-btn--charged-respec-active": this.disCharge ||
          this.alwaysRecpec, // See src/core/celestials/pelle/pelle.js armageddon(...)
        "o-pelle-disabled-pointer": this.alwaysRecpec
      };
    },
    offlineIpUpgrade: () => InfinityUpgrade.ipOffline
  },
  watch: {
    disCharge(newValue) {
      player.celestials.ra.disCharge = newValue;
    }
  },
  created() {
    this.on$(GAME_EVENT.INFINITY_UPGRADE_BOUGHT, () => this.setStyleOfColumnBg());
    this.on$(GAME_EVENT.INFINITY_UPGRADE_CHARGED, () => this.setStyleOfColumnBg());
    this.on$(GAME_EVENT.INFINITY_UPGRADES_DISCHARGED, () => this.setStyleOfColumnBg());

    this.setStyleOfColumnBg();
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.isUseless = Pelle.isDoomed && !PelleCelestialUpgrade.raTeresa2.canBeApplied;
      this.alwaysRecpec = this.isDoomed && Pelle.isAlwaysDischargeCIU;
      this.chargeUnlocked = Ra.unlocks.chargedInfinityUpgrades.canBeApplied && !this.isUseless && !player.disablePostReality;
      this.totalCharges = Ra.totalCharges;
      this.chargesUsed = Ra.totalCharges - Ra.chargesLeft;
      this.disCharge = player.celestials.ra.disCharge;
      this.ipMultSoftCap = InfinityUpgrade.ipMult.costIncreaseThreshold;
      this.ipMultHardCap = InfinityUpgrade.ipMult.costCap;
      this.eternityUnlocked = PlayerProgress.current.isEternityUnlocked;
      this.bottomRowUnlocked = Achievement(41).isUnlocked;
      this.isUncapped = BreakEternityUpgrade.doubleIPUncap.isBought && !player.disablePostReality;
      this.isSoftcapApplicable = !EndgameUpgrade(21).isBought || player.disablePostReality ||
        (player.infinityPoints.gte("e1e125") && !Ascensions.ipA.isUnlocked);
    },
    btnClassObject(column) {
      const classObject = {
        "l-infinity-upgrade-grid__cell": true
      };
      if (column > 0) {
        // Indexing starts from 0, while css classes start from 2 (and first column has default css class)
        classObject[`o-infinity-upgrade-btn--color-${column + 1}`] = true;
      }
      return classObject;
    },
    getColumnColor(location) {
      if (location.isCharged) return "var(--color-teresa--base)";
      if (location.isBought) return "var(--color-infinity)";
      return "transparent";
    },
    setStyleOfColumnBg() {
      this.styleOfColumnBg = this.grid.map(col => ({
        background:
          `linear-gradient(to bottom,
          ${this.getColumnColor(col[0])} 15%,
          ${this.getColumnColor(col[1])} 35% 40%,
          ${this.getColumnColor(col[2])} 60% 65%,
          ${this.getColumnColor(col[3])} 85% 100%`
      }));
    },
  }
};
</script>

<template>
  <div class="l-infinity-upgrades-tab">
    <div
      v-if="chargeUnlocked"
      class="c-subtab-option-container"
    >
      <PrimaryButton
        :class="disChargeClassObject"
        @click="disCharge = !disCharge"
      >
        다음 {{ isDoomed ? "아마겟돈" : "현실" }} 시 충전된 무한 업그레이드 재지정
      </PrimaryButton>
    </div>
    <div v-if="chargeUnlocked">
      무한 업그레이드 {{ formatInt(chargesUsed) }}/{{ formatInt(totalCharges) }}개를 충전했습니다.
      충전된 무한 업그레이드는 효과가 달라집니다.
      <br>
      Shift를 누르면 충전된 무한 업그레이드를 표시합니다.
      <span v-if="!isDoomed || !alwaysRecpec"> 현실 시 선택을 자유롭게 재지정할 수 있습니다.</span>
    </div>
    <div v-if="isUseless">
      파멸한 동안에는 무한 업그레이드를 충전할 수 없습니다.
    </div>
    <div v-if="isDoomed && !isUseless && alwaysRecpec">
      아마겟돈 시 무한 돌파 업그레이드를 유지할 수 있게 될 때까지, 충전된 무한 업그레이드는 항상 초기화됩니다.
    </div>
    <br>
    각 열 내 업그레이드는 위에서 아래 순으로 구매해야 합니다.
    <br>
    <div class="l-infinity-upgrade-grid l-infinity-upgrades-tab__grid">
      <div
        v-for="(column, columnId) in grid"
        :key="columnId"
        class="c-infinity-upgrade-grid__column"
      >
        <InfinityUpgradeButton
          v-for="upgrade in column"
          :key="upgrade.id"
          :upgrade="upgrade"
          :class="btnClassObject(columnId)"
        />
        <div
          class="c-infinity-upgrade-grid__column--background"
          :style="styleOfColumnBg[columnId]"
        />
      </div>
    </div>
    <div
      v-if="bottomRowUnlocked"
      class="l-infinity-upgrades-bottom-row"
    >
      <IpMultiplierButton class="l-infinity-upgrades-tab__mult-btn" />
      <InfinityUpgradeButton
        :upgrade="offlineIpUpgrade"
        :class="btnClassObject(1)"
      />
    </div>
    <div v-if="eternityUnlocked && bottomRowUnlocked && isSoftcapApplicable">
      무한 포인트 배율은
      <br>
      무한 포인트 {{ formatPostBreak(ipMultSoftCap, 2, 1) }}부터 더 비싸집니다<span v-if="!isUncapped">.
        무한 포인트 {{ formatPostBreak(ipMultHardCap, 2, 1) }}를 넘으면 구매할 수 없습니다</span>.
    </div>
  </div>
</template>

<style scoped>
.c-infinity-upgrade-grid__column {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  border-radius: var(--var-border-radius, 0.3rem);
  margin: 0 0.3rem;
}

.c-infinity-upgrade-grid__column--background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7;
}

.s-base--dark .c-infinity-upgrade-grid__column--background {
  opacity: 0.5;
}

.l-infinity-upgrades-bottom-row .l-infinity-upgrade-grid__cell,
.l-infinity-upgrades-bottom-row .l-infinity-upgrades-tab__mult-btn {
  margin: 0.5rem 1.1rem;
}
</style>
