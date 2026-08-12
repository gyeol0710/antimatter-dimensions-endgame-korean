<script>
export default {
  name: "SaveInfoEntry",
  props: {
    saveId: {
      type: Number,
      required: false,
      default: 0,
    },
    saveData: {
      type: Object,
      required: true,
    },
    otherData: {
      type: Object,
      required: true,
    },
    showName: {
      type: Boolean,
      required: false,
      default: true,
    },
    saveType: {
      type: String,
      required: true,
    }
  },
  computed: {
    timePlayed() {
      return `플레이 시간: ${TimeSpan.fromMilliseconds(new Decimal(this.saveData.realTimePlayed)).toString()}`;
    },
    // Note that all of the four following entries have Pelle-specific resources at the highest priority, which
    // will generally lead to most of them being overridden almost immediately after Dooming (or practically close
    // enough). This makes the general appearance better, at the cost of inaccurate variable names post-Dooming.
    antimatter() {
      return this.compareLayeredValues(
        ["pelleAM", "totalAntimatter"],
        ["파멸 후 총 반물질:", "총 반물질:"],
        [format, format],
        ""
      );
    },
    prestigeCount() {
      return this.compareLayeredValues(
        ["remnants", "realities", "eternities", "infinities"],
        ["잔재:", "현실:", "영원:", "무한:"],
        [format, this.formatSmall, this.formatSmall, this.formatSmall],
        "(아직 도달한 프레스티지 단계가 없습니다.)"
      );
    },
    prestigeResource() {
      return this.compareLayeredValues(
        ["realityShards", "imaginaryMachines", "realityMachines", "eternityPoints", "infinityPoints"],
        ["현실 파편:", "허수 머신:", "리얼리티 머신:", "영원 포인트:", "무한 포인트:"],
        [format, x => formatMachines(this.saveData.realityMachines, x, 0), format, format, format],
        ""
      );
    },
    // This is a slight workaround to hide DT/level once Doomed
    extraProgressIndicator() {
      return this.compareLayeredValues(
        ["pelleLore", "bestLevel", "dilatedTime"],
        ["현실이 파멸했습니다.", "최고 글리프 레벨:", "팽창된 시간:"],
        [() => "", formatInt, format],
        ""
      );
    },
    name() {
      return this.saveData.saveName;
    },
  },
  methods: {
    formatSmall(number) {
      if (Decimal.gt(number, 1e4)) return format(number, 2);
      return formatInt(number);
    },
    // Compares a list of properties in order, going through the array parameters until one of them is nonzero.
    // If they're both the same number, don't add any styling. If they're both nonzero, then they're on the same
    // layer and we only style the number. If one of them is zero, then they're different layers and we color the
    // whole line instead. If every layer results in zero, we default to a given fallback string.
    // Properties here are drawn in values returned from getSaveInfo() in modal.js
    // eslint-disable-next-line max-params
    compareLayeredValues(propArray, nameArray, formatArray, fallbackString) {
      // Determine if they're on the same layer and if it's better or worse
      let isSameLayer, isBetter;
      for (let index = 0; index < propArray.length; index++) {
        const prop = propArray[index];
        if (Decimal.eq(this.saveData[prop], 0) && Decimal.eq(this.otherData[prop], 0)) {
          // They're both zero
          continue;
        } else if (Decimal.eq(this.saveData[prop], this.otherData[prop])) {
          // They're both the same value
          isSameLayer = true;
          isBetter = 0;
          break;
        } else if (Decimal.neq(this.saveData[prop], 0) && Decimal.neq(this.otherData[prop], 0)) {
          // Both have nonzero values on the same layer
          isSameLayer = true;
          isBetter = Decimal.gt(this.saveData[prop], this.otherData[prop]) ? 1 : -1;
          break;
        } else {
          // The only other case is that one is zero and the other isn't
          isSameLayer = false;
          isBetter = Decimal.gt(this.saveData[prop], 0) ? 1 : -1;
          break;
        }
      }

      // Figure out what the raw text should be, based on the first nonzero value
      let layerName = fallbackString, layerValue = "";
      for (let index = 0; index < propArray.length; index++) {
        const prop = propArray[index];
        if (Decimal.gt(this.saveData[prop], 0)) {
          layerName = nameArray[index];
          // This is often called with format(), so we supply a default 2 decimal places
          layerValue = formatArray[index](this.saveData[prop], 2);
          break;
        }
      }

      // Style it appropriately
      if (isBetter === 0) return `${layerName} ${layerValue}`;
      const parseColor = color => getComputedStyle(document.body).getPropertyValue(`--color-${color}`).split("#")[1];
      const colorTag = `<span style="color:#${parseColor(isBetter === 1 ? "good" : "infinity")}">`;
      return isSameLayer
        ? `${layerName} ${colorTag}${layerValue}</span>`
        : `${colorTag}${layerName} ${layerValue}</span>`;
    }
  },
};
</script>

<template>
  <div class="l-modal-options__save-record">
    <h3>{{ saveType }} <span v-if="saveId">(슬롯 #{{ saveId + 1 }}):</span></h3>
    <span v-if="showName">
      <span v-if="name">
        세이브 이름: {{ name }}
      </span>
      <span v-else>
        이름 없는 세이브
      </span>
      <br>
    </span>
    {{ timePlayed }}
    <br>
    <span v-html="antimatter" />
    <span v-html="prestigeCount" />
    <span v-html="prestigeResource" />
    <span v-html="extraProgressIndicator" />
    <br>
    <slot />
  </div>
</template>
