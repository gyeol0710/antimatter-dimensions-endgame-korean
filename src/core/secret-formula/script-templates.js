import { AutobuyerInputFunctions } from "@/components/tabs/autobuyers/AutobuyerInput";

export const automatorTemplates = {
  /**
    * List of possible data types to dynamically generate in script templates, assumed to be only string or boolean
    * {
    *  @property {String} name              String to be used as a key for entries in this object
    *  @property {String[]} boolDisplay     Strings to be displayed for true/false states for boolean inputs. If
    *   undefined, assumed to be a non-boolean input
    *  @property {Function} isValidString   A function used to test if an input string is formatted properly or not
    *  @property {Function} map             A function to be used to map the inputs to their actual values
    *   which are stored in the param object. If undefined, assumed to be no mapping
    * }
    */
  paramTypes: [
    {
      name: "tree",
      isValidString: str => {
        const validImport = TimeStudyTree.isValidImportString(str);
        const preset = str.match(/^(NAME (.{1,4})|ID (\d))$/u);
        const validPreset = preset ? (
          player.timestudy.presets.some(p => p.name === preset[2]) ||
          (Number(preset[3]) > 0 && Number(preset[3]) < 7)
        ) : false;
        return validImport || validPreset;
      },
    },
    {
      name: "integer",
      isValidString: str => AutobuyerInputFunctions.int.tryParse(str),
      map: x => Math.round(parseInt(x, 10)),
    },
    {
      name: "decimal",
      isValidString: str => AutobuyerInputFunctions.decimal.tryParse(str),
      map: x => AutobuyerInputFunctions.decimal.tryParse(x),
    },
    {
      name: "boolean",
      boolDisplay: ["예", "아니요"],
    },
    {
      name: "nowait",
      boolDisplay: ["계속 진행", "연구를 계속 구매"],
    },
    {
      name: "mode",
      boolDisplay: ["최고 기록의 X배", "마지막 실행 후 경과 시간(초)"],
      map: x => (x ? "mult" : "time"),
    },
  ],
  /**
    * List automator script templates, primarily used here for formatting the player UI prompts appropriately
    * so that all of the required fields show up in the proper input formats. Actual script formatting requires
    * additionally writing a method to be called in the constructor of the ScriptTemplate class
    * {
    *  @property {String} name          Name of script template, also used as a key within the constructor for
    *   ScriptTemplate objects
    *  @property {String} displayName   Localized name to display in the UI
    *  @property {String} description   Text description of what the template does when used in the automator
    *  @property {Object[]} inputs      Fields of the param object which need to be filled for the template to
    *   have all the information it needs. Contains the name of the field, the type (drawn from paramTypes above),
    *   and a prompt to be shown in the UI end
    *  @property {Function} warnings    Function which checks the current game state and potentially provides
    *   warnings based on some possibly common cases which may lead to undesired behavior
    * }
    */
  scripts: [
    {
      name: "Climb EP",
      displayName: "영원 포인트 불리기",
      description: `이 스크립트는 영원을 반복하며, 영원을 수행할 때마다 시간 연구 트리를 다시 구매하려고 합니다.
        무한 및 영원 자동구매기의 설정을 입력해야 합니다. 지정한 영원 포인트에 도달할 때까지 반복합니다.`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "또는 시간 연구를 직접 입력" },
        { name: "treeNowait", type: "nowait", prompt: "시간 연구가 남았을 때의 동작" },
        { name: "finalEP", type: "decimal", prompt: "목표 영원 포인트" },
        { name: "autoInfMode", type: "mode", prompt: "무한 자동구매기 모드" },
        { name: "autoInfValue", type: "decimal", prompt: "무한 자동구매기 기준값" },
        { name: "autoEterMode", type: "mode", prompt: "영원 자동구매기 모드" },
        { name: "autoEterValue", type: "decimal", prompt: "영원 자동구매기 기준값" },
      ],
      warnings: () => {
        const list = [];
        if (!RealityUpgrade(10).isBought) {
          list.push(`영원 횟수가 ${formatInt(100)}회 미만이면 이 스크립트가 자동구매기 모드를 올바르게
            설정할 수 없습니다. 현실을 시작할 때 사용하려면 먼저 현실 업그레이드
            "${RealityUpgrade(10).name}" 구매를 권장합니다.`);
        }
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`현실 업그레이드 "${RealityUpgrade(13).name}" 미보유 시 이 템플릿의 성능이 떨어질 수 있습니다`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`시간 정리를 구매하지 않고도 생성할 수 있는 경우가 아니라면, 퍼크
            "${Perk.ttBuySingle.label}" 미보유 시 이 템플릿의 성능이 떨어질 수 있습니다`);
        }
        return list;
      },
    },
    {
      name: "Grind Eternities",
      displayName: "영원 횟수 모으기",
      description: `이 스크립트는 지정한 시간 연구 트리를 구매한 뒤 빠른 영원을 반복합니다. 무한 자동구매기는
        지정한 빅 크런치 횟수에 맞춰 "최고 기록의 X배" 모드로 설정되고, 영원 자동구매기는 가능한 즉시 실행됩니다.
        지정한 영원 횟수에 도달할 때까지 반복합니다.`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "또는 시간 연구를 직접 입력" },
        { name: "treeNowait", type: "nowait", prompt: "시간 연구가 남았을 때의 동작" },
        { name: "crunchesPerEternity", type: "integer", prompt: "영원 한 번당 빅 크런치 횟수" },
        { name: "eternities", type: "decimal", prompt: "목표 영원 횟수" },
      ],
      warnings: () => {
        const list = [];
        // Eternal flow (eternity generation)
        if (RealityUpgrade(14).isBought) {
          list.push(`현실 업그레이드 "${RealityUpgrade(14).name}" 때문에 이 템플릿은 필요하지 않을 가능성이 큽니다`);
        }
        return list;
      },
    },
    {
      name: "Grind Infinities",
      displayName: "무한 횟수 모으기",
      description: `이 스크립트는 지정한 시간 연구 트리를 구매한 뒤 무한 횟수를 얻도록 자동구매기를 설정합니다.
        지정한 무한 횟수에 도달할 때까지 반복합니다. 저장된 무한 횟수를 목표로 삼을 수도 있으며, 이 경우 한 번 영원하기
        전에 필요한 무한 횟수를 모두 얻습니다.`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "또는 시간 연구를 직접 입력" },
        { name: "treeNowait", type: "nowait", prompt: "시간 연구가 남았을 때의 동작" },
        { name: "infinities", type: "decimal", prompt: "목표 무한 횟수" },
        { name: "isBanked", type: "boolean", prompt: "저장된 무한 횟수를 목표로 사용" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.achievementGroup5.isBought) {
          list.push(`이번 현실을 도전과제 "${Achievement(131).name}" 없이 시작합니다. 나중이 되어야 무한 횟수를
            저장할 수 있으므로, 무한 횟수 모으기가 예상보다 덜 유용할 수 있습니다`);
        }
        // Boundless flow (infinity generation)
        if (RealityUpgrade(11).isBought) {
          list.push(`현실 업그레이드 "${RealityUpgrade(11).name}" 때문에 이 템플릿은 필요하지 않을 가능성이 큽니다`);
        }
        return list;
      },
    },
    {
      name: "Complete Eternity Challenge",
      displayName: "영원 도전 완료하기",
      description: `이 스크립트는 지정한 시간 연구 트리를 구매하고 지정한 영원 도전을 해금합니다. 무한 자동구매기를
        입력한 설정으로 바꾼 뒤 영원 도전에 진입합니다. 마지막으로 목표 완료 횟수에 도달할 때까지 기다렸다가
        영원을 수행해 도전을 완료합니다.`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "또는 시간 연구를 직접 입력" },
        { name: "treeNowait", type: "nowait", prompt: "시간 연구가 남았을 때의 동작" },
        { name: "ec", type: "integer", prompt: "영원 도전 번호" },
        { name: "completions", type: "integer", prompt: "목표 완료 횟수" },
        { name: "autoInfMode", type: "mode", prompt: "무한 자동구매기 모드" },
        { name: "autoInfValue", type: "decimal", prompt: "무한 자동구매기 기준값" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.studyECRequirement.isBought) {
          list.push(`보조 자원 요구 조건 때문에 영원 도전을 안정적으로 해금하지 못할 수 있습니다. 이 템플릿을
            사용하기 전에 퍼크 "${Perk.studyECRequirement.label}" 해금을 권장합니다`);
        }
        if (!Perk.studyECBulk.isBought) {
          list.push(`영원 도전 일괄 완료 없이 이 템플릿을 사용하면 스크립트가 길어져 느려지고 수정하기 어려울 수
            있습니다. 이 템플릿을 사용했다면 퍼크 "${Perk.studyECBulk.label}" 해금 후 스크립트를 다시 단순하게
            정리하는 것을 권장합니다`);
        }
        return list;
      },
    },
    {
      name: "Unlock Dilation",
      displayName: "시간 팽창 해금하기",
      description: `이 스크립트는 영원을 반복하며, 영원을 수행할 때마다 시간 연구 트리를 다시 구매하려고 합니다.
        영원 자동구매기의 설정을 입력해야 하며 무한 자동구매기는 꺼집니다. 시간 팽창 해금에 필요한 총 시간 정리를
        보유할 때까지 반복한 뒤 시간 팽창을 해금합니다.`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "또는 시간 연구를 직접 입력" },
        { name: "treeNowait", type: "nowait", prompt: "시간 연구가 남았을 때의 동작" },
        { name: "finalEP", type: "decimal", prompt: "목표 영원 포인트" },
        { name: "autoEterMode", type: "mode", prompt: "영원 자동구매기 모드" },
        { name: "autoEterValue", type: "decimal", prompt: "영원 자동구매기 기준값" },
      ],
      warnings: () => {
        const list = [];
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`현실 업그레이드 "${RealityUpgrade(13).name}" 미보유 시 이 템플릿의 성능이 떨어질 수 있습니다`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`시간 정리를 구매하지 않고도 생성할 수 있는 경우가 아니라면, 퍼크
            "${Perk.ttBuySingle.label}" 미보유 시 이 템플릿의 성능이 떨어질 수 있습니다`);
        }
        return list;
      },
    },
  ]
};
