const crypto = require("crypto");
const path = require("path");

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const vue = require("vue-template-compiler");

const {
  UsageError,
  createContext,
  parseArguments,
  validateExceptionConfig
} = require("./localization-git-diff.cjs");

const defaultRoot = path.resolve(__dirname, "..");
const structuralStringProperties = new Set(["background", "celestialName", "event", "id", "key", "reference", "type"]);
const protectedCurrencyLabels = new Set(["Galaxy", "Reality Shard"]);
const localizedStringProperties = new Set([
  "boolDisplay", "currencyLabel", "description", "displayName", "entranceLabel", "info", "label", "lines", "message",
  "optionName", "prompt", "reward", "scrambleText", "text", "title", "tooltip", "warning"
]);
const visibleAttributes = new Set([
  "ach-tooltip", "alt", "header", "header-text", "label", "message", "name", "off", "on", "placeholder",
  "save-type", "text", "title", "tooltip"
]);
const structuralNameTags = new Set([
  "button", "details", "fieldset", "form", "iframe", "input", "map", "meta", "object", "output", "param",
  "select", "slot", "textarea"
]);
const equalityOperators = new Set(["==", "===", "!=", "!=="]);
const structuralCallNames = new Set([
  "$emit", "add", "addEventListener", "bind", "closest", "contains", "createElement", "createInCategory",
  "createKeyword", "decodeText", "defineProperty", "delete", "dispatch", "emit", "encodeText", "get",
  "getAdjustedGlyphEffect", "getAttribute", "getElementById", "getElementsByClassName", "getElementsByName",
  "getElementsByTagName", "getItem", "has", "isDisabled", "isGlyphTypeDisabled", "matches", "movePropIfPossible",
  "off", "on", "once", "open", "querySelector", "querySelectorAll", "registerHelper", "remove", "removeAttribute",
  "removeEventListener", "removeItem", "set", "setAttribute", "setItem", "toggle", "trigger"
]);
const visibleHtmlAttributes = new Set([
  "ach-tooltip", "alt", "aria-label", "label", "placeholder", "title", "tooltip"
]);
const localizedCallArguments = new Map([
  ["addCheckedComponent", new Set([1])],
  ["alert", new Set([0])],
  ["AutomatorData.logCommandEvent", new Set([0])],
  ["celestialReality", new Set([1])],
  ["confirm", new Set([0])],
  ["GameUI.notify.automator", new Set([0])],
  ["GameUI.notify.blackHole", new Set([0])],
  ["GameUI.notify.endgame", new Set([0])],
  ["GameUI.notify.error", new Set([0])],
  ["GameUI.notify.eternity", new Set([0])],
  ["GameUI.notify.infinity", new Set([0])],
  ["GameUI.notify.info", new Set([0])],
  ["GameUI.notify.reality", new Set([0])],
  ["GameUI.notify.strike", new Set([0])],
  ["GameUI.notify.success", new Set([0])],
  ["GameUI.notify.warning", new Set([0])],
  ["Modal.celestials.show", new Set([0])],
  ["Modal.exitChallenge.show", new Set([0])],
  ["Modal.glyphShowcasePanel.show", new Set([0])],
  ["Modal.message.show", new Set([0])],
  ["Modal.resetEndgame.show", new Set([0])],
  ["notify", new Set([0])],
  ["pluralize", new Set([0, 2])],
  ["prompt", new Set([0, 1])],
  ["quantify", new Set([0])],
  ["quantifyHybridLarge", new Set([0])],
  ["quantifyHybridSmall", new Set([0])],
  ["quantifyInt", new Set([0])],
  ["setLinearProgress", new Set([2])],
  ["setProgress", new Set([2])],
  ["wordShift.randomCrossWords", new Set([0])]
]);

const fileScopedLocalizedCallArguments = new Map([
  ["src/components/modals/cloud/SaveInfoEntry.vue", new Map([
    ["this.compareLayeredValues", new Set([1, 3])]
  ])],
  ["src/components/modals/cloud/CloudLoadConflictModal.vue", new Map([
    ["suggestions.push", new Set([0])]
  ])],
  ["src/components/modals/cloud/CloudSaveConflictModal.vue", new Map([
    ["suggestions.push", new Set([0])]
  ])],
  ["src/components/modals/options/glyph-appearance/CosmeticSetChoiceModal.vue", new Map([
    ["contents.join", new Set([0])]
  ])],
  ["src/components/modals/options/HotkeysModal.vue", new Map([
    ["shiftKeyFunctions.push", new Set([0])]
  ])],
  ["src/components/tabs/antimatter-dimensions/ClassicAntimatterGalaxyRow.vue", new Map([
    ["reset.push", new Set([0])]
  ])],
  ["src/components/tabs/antimatter-dimensions/ModernAntimatterGalaxyRow.vue", new Map([
    ["reset.push", new Set([0])]
  ])],
  ["src/components/tabs/celestial-dimensions/ClassicCelestialGalaxyRow.vue", new Map([
    ["reset.push", new Set([0])]
  ])],
  ["src/components/tabs/celestial-dimensions/ModernCelestialGalaxyRow.vue", new Map([
    ["reset.push", new Set([0])]
  ])],
  ["src/components/tabs/glyphs/SingleGlyphCustomzationPanel.vue", new Map([
    ["changes.push", new Set([0])]
  ])],
  ["src/components/tabs/glyphs/CurrentGlyphEffects.vue", new Map([
    ["uniqueGlyphs.join", new Set([0])]
  ])],
  ["src/components/tabs/glyphs/RealityReminder.vue", new Map([
    ["arr.push", new Set([0])]
  ])],
  ["src/components/tabs/glyphs/sidebar/GlyphAutosortButtonGroup.vue", new Map([
    ["availableSortModes.push", new Set([0])]
  ])],
  ["src/components/tabs/normal-achievements/NormalAchievementsTab.vue", new Map([
    ["boostList.push", new Set([0])],
    ["dimMultList.push", new Set([0])],
    ["dimPowList.push", new Set([0])],
    ["powersList.push", new Set([0])]
  ])],
  ["src/components/tabs/past-prestige-runs/PastPrestigeRunsContainer.vue", new Map([
    ["cells.push", new Set([0])]
  ])],
  ["src/components/tabs/automator/AutomatorScriptDropdownEntryList.vue", new Map([
    ["labels.push", new Set([0])]
  ])],
  ["src/components/tabs/replicanti/ReplicantiTab.vue", new Map([
    ["boostList.push", new Set([0])]
  ])],
  ["src/components/ui-modes/HeaderChallengeEffects.vue", new Map([
    ["powerArray.push", new Set([0])]
  ])],
  ["src/components/ui-modes/prestige-header/RealityButton.vue", new Map([
    ["this.formatScalingMultiplierText", new Set([0])],
    ["this.formatThresholdText", new Set([2])]
  ])],
  ["src/core/automator/automator-commands.js", new Map([
    ["V.addError", new Set([1, 2])]
  ])],
  ["src/core/automator/compiler.js", new Map([
    ["this.addError", new Set([1, 2])]
  ])],
  ["src/core/automator/script-templates.js", new Map([
    ["this.warnings.push", new Set([0])]
  ])],
  ["src/core/black-hole.js", new Map([
    ["tryShowWarningModal", new Set([0])]
  ])],
  ["src/core/celestials/enslaved.js", new Map([
    ["tryShowWarningModal", new Set([0])]
  ])],
  ["src/core/celestials/ra/ra.js", new Map([
    ["boostList.push", new Set([0])]
  ])],
  ["src/core/dimensions/time-dimension.js", new Map([
    ["tryShowWarningModal", new Set([0])]
  ])],
  ["src/core/eternity-challenge.js", new Map([
    ["tryShowWarningModal", new Set([0])]
  ])],
  ["src/core/glyphs/glyph-core.js", new Map([
    ["tryShowWarningModal", new Set([0])]
  ])],
  ["src/core/secret-formula/news.js", new Map([
    ["names.push", new Set([0])],
    ["units.push", new Set([0])]
  ])],
  ["src/core/secret-formula/celestials/divinity-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/endgame/break-eternity-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/endgame/endgame-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/endgame/null-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/reality/duality-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/reality/imaginary-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/reality/reality-upgrades.js", new Map([
    ["rebuyable", new Set([0])]
  ])],
  ["src/core/secret-formula/script-templates.js", new Map([
    ["list.push", new Set([0])]
  ])],
  ["src/core/secret-formula/shop-purchases.js", new Map([
    ["dims.push", new Set([0])]
  ])]
]);

const fileScopedStructuralBindings = new Map([
  ["src/components/GlyphComponent.vue", new Set(["blacklist", "rarityBorderStyles"])],
  ["src/components/GlyphSetPreview.vue", new Set(["standardOrder"])],
  ["src/components/GlyphSetName.vue", new Set(["singleGlyphTypes"])],
  ["src/components/modals/GlyphShowcasePanelEntry.vue", new Set(["heights"])],
  ["src/components/modals/GlyphShowcasePanelModal.vue", new Set(["standardOrder"])],
  ["src/components/modals/MasteryStringModal.vue", new Set(["secretStrings"])],
  ["src/components/modals/StudyStringModal.vue", new Set(["secretStrings"])],
  ["src/components/modals/options/glyph-appearance/GlyphCustomization.vue", new Set(["sortedBase"])],
  ["src/components/tabs/automator/AutomatorBlockEditor.vue", new Set(["propsToCheck"])],
  ["src/components/tabs/automator/AutomatorBlocks.vue", new Set([
    "AUTOMATOR_BLOCKS_BLACKLIST", "AUTOMATOR_BLOCKS_COMPARISON_CURRENCIES",
    "AUTOMATOR_BLOCKS_COMPARISON_OPERATORS", "AUTOMATOR_BLOCKS_RESETS"
  ])],
  ["src/components/tabs/glyphs/CurrentGlyphEffects.vue", new Set(["glyphEffectsOrder"])],
  ["src/components/tabs/glyphs/GlyphLevelsAndWeights.vue", new Set(["rows"])],
  ["src/components/tabs/statistics/MultiplierBreakdownEntry.vue", new Set(["forbiddenEntries", "nerfBlacklist"])],
  ["src/core/automator/automator-backend.js", new Set(["LineEnum"])],
  ["src/core/automator/automator-codemirror.js", new Set(["commentRule"])],
  ["src/core/automator/lexer.js", new Set(["ignoredPatterns"])],
  ["src/core/automator/parser.js", new Set(["commandAlts"])],
  ["src/core/celestials/pelle/pelle.js", new Set(["tabsToIgnore"])],
  ["src/core/dilation.js", new Set(["DIL_UPG_NAMES"])],
  ["src/core/format.js", new Set(["PLURAL_HELPER"])],
  ["src/core/glyph-effects.js", new Set(["KNOWN_KEYS"])],
  ["src/core/glyphs/auto-glyph-processor.js", new Set(["weightKeys"])],
  ["src/core/glyphs/glyph-core.js", new Set(["generatedTypes", "orderedEffectList", "sortOrder"])],
  ["src/core/glyphs/glyph-effects.js", new Set(["conflictingEffects", "cursedEffects"])],
  ["src/core/hotkeys.js", new Set(["konamiCode"])],
  ["src/core/keyboard.js", new Set(["modifierKeys"])],
  ["src/core/options.js", new Set(["secretImports"])],
  ["src/core/secret-formula/reality/perks.js", new Set(["PERK_FAMILY"])],
  ["src/core/secret-formula/celestials/navigation.js", new Set(["fillStates", "riftNames"])],
  ["src/core/secret-formula/multiplier-tab/tree.js", new Set([
    "dimTypes", "dynamicGenProps", "removedRegexes", "singleRes"
  ])],
  ["src/core/storage/dev-migrations.js", new Set(["highestRefinementData", "toDelete", "toMove"])],
  ["src/core/storage/migrations.js", new Set(["glyphSetProps", "notationMigration"])],
  ["src/core/tab-notifications.js", new Set(["currentTabKey"])],
  ["src/core/themes.js", new Set(["secretThemes"])],
  ["src/steam/steam-purchases.js", new Set(["currency", "itemId", "providerName"])]
]);

const fileScopedStructuralProperties = new Map([
  ["src/components/CelestialQuoteHistory.vue", new Set(["color"])],
  ["src/components/CustomizeableTooltip.vue", new Set(["contentTransform", "tooltipTransform"])],
  ["src/components/GameUIComponent.vue", new Set(["themeCss"])],
  ["src/components/GlyphComponent.vue", new Set(["transform"])],
  ["src/components/tabs/automator/AutomatorTextEditor.vue", new Set(["lint", "mode", "theme"])],
  ["src/components/tabs/automator/AutomatorBlocks.vue", new Set([
    "A", "B", "C", "D", "E", "allowedPatterns", "cmd", "targets"
  ])],
  ["src/core/automator/automator-commands.js", new Set([
    "compOperator", "genericInput1", "genericInput2", "singleSelectionInput", "singleTextInput"
  ])],
  ["src/core/storage/serializer.js", new Set(["decode", "encode", "version"])],
  ["src/core/endgame-masteries/endgame-mastery-tree.js", new Set(["exportString", "sets"])],
  ["src/core/hotkeys.js", new Set(["keys"])],
  ["src/core/time-studies/time-study-tree.js", new Set(["exportString", "sets"])]
]);

const fileScopedStructuralAncestorProperties = new Map([
  ["src/core/storage/serializer.js", new Set(["endingString", "startingString"])]
]);

const fileScopedStructuralAssignments = new Map([
  ["src/core/eternity-challenge.js", new Set(["_fullId"])],
  ["src/core/storage/dev-migrations.js", new Set(["autoRealityMode", "type"])]
]);

const fileScopedLocalizedBindingProperties = new Map([
  ["src/components/tabs/antimatter-dimensions/ClassicAntimatterGalaxyRow.vue", new Map([
    ["scalings", new Set(["function", "type"])]
  ])],
  ["src/components/tabs/antimatter-dimensions/ModernAntimatterGalaxyRow.vue", new Map([
    ["scalings", new Set(["function", "type"])]
  ])],
  ["src/components/tabs/celestial-dimensions/ClassicCelestialGalaxyRow.vue", new Map([
    ["scalings", new Set(["function", "type"])]
  ])],
  ["src/components/tabs/celestial-dimensions/ModernCelestialGalaxyRow.vue", new Map([
    ["scalings", new Set(["function", "type"])]
  ])]
]);

function propertyName(node) {
  return node?.key?.name ?? node?.key?.value ?? "";
}

function isHumanText(value) {
  const text = value.replace(/\s+/gu, " ").trim();
  if (/[\uAC00-\uD7A3]/u.test(text)) return true;
  if (/^(?:https?:|mailto:|@\/|\.\.?\/)/u.test(text)) return false;
  if (/\.(?:css|html|js|json|mp3|png|svg|vue|webm|webp)$/iu.test(text)) return false;
  if (/[A-Za-z]'s$/u.test(text)) return true;
  if (/^I(?:(?:['’][A-Za-z]+)?(?:\.{2,}|…))$/u.test(text)) return true;
  return /[A-Za-z]{2}/u.test(text);
}

function looksLikeCssIdentifier(value) {
  return /^(?:[clo]-[\w-]+)(?:\s+[clo]-[\w-]+)*$/u.test(value) ||
    /^(?:fa[brs]?|fas|far)(?:\s+[\w-]+)+$/u.test(value);
}

function protectedTextSignature(value) {
  const placeholders = [
    ...(value.match(/\$\d+/gu) ?? []),
    ...(value.match(/%[A-Za-z_][A-Za-z\d_]*\??/gu) ?? [])
  ].sort();
  const tags = htmlTagSignatures(value);
  const entities = value.match(/&(?:#\d+|#x[\dA-Fa-f]+|[A-Za-z][A-Za-z\d]+);/gu) ?? [];
  return JSON.stringify({ placeholders, tags, entities });
}

function htmlTagSignatures(value) {
  const signatures = [];
  for (const match of extractHtmlTags(value)) {
    const attributes = [];
    const attributePattern = /([:@A-Za-z_][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;
    for (const attribute of match.attributes.matchAll(attributePattern)) {
      const name = attribute[1];
      const plainName = name.replace(/^:/u, "");
      const rawValue = attribute[2] ?? attribute[3] ?? attribute[4] ?? null;
      attributes.push([name, visibleHtmlAttributes.has(plainName) ? null : rawValue]);
    }
    attributes.sort(([left], [right]) => left.localeCompare(right));
    signatures.push(JSON.stringify({
      name: `${match.closing ? "/" : ""}${match.name}`,
      attributes,
      selfClosing: /\/\s*$/u.test(match.attributes)
    }));
  }
  return signatures;
}

function extractHtmlTags(value) {
  const tags = [];
  for (let start = 0; start < value.length; start++) {
    if (value[start] !== "<" || !/^\/?[A-Za-z]/u.test(value.slice(start + 1))) continue;
    let quote = "";
    let end = start + 1;
    for (; end < value.length; end++) {
      const character = value[end];
      if (quote) {
        if (character === quote && value[end - 1] !== "\\") quote = "";
      } else if (character === "\"" || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= value.length) break;
    const parsed = /^<(\/)?([A-Za-z][\w-]*)([\s\S]*)>$/u.exec(value.slice(start, end + 1));
    if (parsed) tags.push({ closing: Boolean(parsed[1]), name: parsed[2], attributes: parsed[3] });
    start = end;
  }
  return tags;
}

function localizedMarker(value) {
  return `__LOCALIZED_TEXT__${protectedTextSignature(value)}`;
}

function parseScript(file, source) {
  try {
    return parser.parse(source, {
      sourceType: "unambiguous",
      plugins: ["classProperties", "dynamicImport", "objectRestSpread", "optionalChaining", "topLevelAwait"]
    });
  } catch (error) {
    throw new Error(`${file}: ${error.message}`);
  }
}

function closestObjectProperty(astPath) {
  let child = astPath;
  let parent = astPath.parentPath;
  while (parent) {
    if (parent.isObjectProperty() || parent.isObjectMethod()) {
      return child.key === "key" ? null : parent;
    }
    child = parent;
    parent = parent.parentPath;
  }
  return null;
}

function closestClassProperty(astPath) {
  let child = astPath;
  let parent = astPath.parentPath;
  while (parent) {
    if (parent.isClassProperty() || parent.isClassMethod()) return child.key === "key" ? null : parent;
    child = parent;
    parent = parent.parentPath;
  }
  return null;
}

function isWithinObjectPropertyKey(astPath) {
  let child = astPath;
  let parent = astPath.parentPath;
  while (parent) {
    if (parent.isObjectProperty() || parent.isObjectMethod()) return child.key === "key";
    child = parent;
    parent = parent.parentPath;
  }
  return false;
}

function isReturnedFromNestedFunction(astPath, property) {
  let current = astPath.parentPath;
  while (current && current !== property) {
    if (current.isFunction()) {
      if (current.node.body.type !== "BlockStatement") return true;
      let returnPath = astPath.parentPath;
      while (returnPath && returnPath !== current) {
        if (returnPath.isReturnStatement()) return true;
        if (returnPath.isFunction()) return false;
        returnPath = returnPath.parentPath;
      }
      return false;
    }
    current = current.parentPath;
  }
  return true;
}

function isStructuralAssignment(container) {
  const assignment = container.parentPath;
  if (!assignment?.isAssignmentExpression() || assignment.node.right !== container.node) return false;
  const left = assignment.node.left;
  if (memberName(left) === "className") return true;
  const owner = left?.object;
  return memberName(owner) === "dataset" || memberName(owner) === "style";
}

function isFileScopedStructuralAssignment(file, container) {
  const assignment = container.parentPath;
  if (!assignment?.isAssignmentExpression() || assignment.node.right !== container.node) return false;
  const normalizedFile = file.replace(/\\/gu, "/");
  return fileScopedStructuralAssignments.get(normalizedFile)?.has(memberName(assignment.node.left)) ?? false;
}

function literalContainer(astPath) {
  return astPath.isTemplateElement() && astPath.parentPath?.isTemplateLiteral()
    ? astPath.parentPath
    : astPath;
}

function isTransparentCallArgumentWrapper(parent, child) {
  if (parent.isArrayExpression()) return parent.node.elements.includes(child.node);
  if (parent.isObjectExpression()) return parent.node.properties.includes(child.node);
  if (parent.isObjectProperty()) return parent.node.value === child.node;
  if (parent.isSpreadElement()) return parent.node.argument === child.node;
  if (parent.isConditionalExpression()) {
    return parent.node.consequent === child.node || parent.node.alternate === child.node;
  }
  if (parent.isBinaryExpression() || parent.isLogicalExpression() || parent.isSequenceExpression()) {
    return parent.node.left === child.node || parent.node.right === child.node ||
      parent.node.expressions?.includes(child.node);
  }
  return false;
}

function callArgumentContaining(container) {
  let current = container;
  while (current.parentPath) {
    const parent = current.parentPath;
    if ((parent.isCallExpression() || parent.isOptionalCallExpression() || parent.isNewExpression()) &&
      parent.node.arguments.includes(current.node)) {
      return { call: parent, argument: current };
    }
    if (!isTransparentCallArgumentWrapper(parent, current)) return null;
    current = parent;
  }
  return null;
}

function memberName(node) {
  if (!node || (!node.type?.endsWith("MemberExpression"))) return "";
  return node.property?.name ?? node.property?.value ?? "";
}

function qualifiedCalleeName(node) {
  if (node?.type === "Identifier") return node.name;
  if (node?.type === "ThisExpression") return "this";
  if (!node?.type?.endsWith("MemberExpression")) return "";
  const owner = qualifiedCalleeName(node.object);
  const property = memberName(node);
  return owner && property ? `${owner}.${property}` : property;
}

function isLocalizedCallArgument(file, call, container) {
  const argumentIndex = call.node.arguments.indexOf(container.node);
  if (argumentIndex < 0) return false;
  const qualified = qualifiedCalleeName(call.node.callee);
  if (localizedCallArguments.get(qualified)?.has(argumentIndex)) return true;
  const normalizedFile = file.replace(/\\/gu, "/");
  return fileScopedLocalizedCallArguments.get(normalizedFile)?.get(qualified)?.has(argumentIndex) ?? false;
}

function isFileScopedStructuralBinding(file, container) {
  let current = container;
  while (current.parentPath) {
    const parent = current.parentPath;
    if (parent.isVariableDeclarator() && parent.node.init === current.node &&
      parent.node.id?.type === "Identifier") {
      const normalizedFile = file.replace(/\\/gu, "/");
      return fileScopedStructuralBindings.get(normalizedFile)?.has(parent.node.id.name) ?? false;
    }
    if (parent.isNewExpression() && parent.node.callee?.type === "Identifier" &&
      parent.node.callee.name === "Map" && parent.node.arguments[0] === current.node) {
      current = parent;
      continue;
    }
    if (!isTransparentCallArgumentWrapper(parent, current)) return false;
    current = parent;
  }
  return false;
}

function isFileScopedLocalizedBindingProperty(file, container, propertyKey) {
  const normalizedFile = file.replace(/\\/gu, "/");
  const bindings = fileScopedLocalizedBindingProperties.get(normalizedFile);
  if (!bindings) return false;
  let current = container;
  while (current.parentPath) {
    const parent = current.parentPath;
    if (parent.isVariableDeclarator() && parent.node.init === current.node &&
      parent.node.id?.type === "Identifier") {
      return bindings.get(parent.node.id.name)?.has(propertyKey) ?? false;
    }
    if (!isTransparentCallArgumentWrapper(parent, current)) return false;
    current = parent;
  }
  return false;
}

function isFileScopedStructuralProperty(file, propertyKey) {
  const normalizedFile = file.replace(/\\/gu, "/");
  return fileScopedStructuralProperties.get(normalizedFile)?.has(propertyKey) ?? false;
}

function isWithinFileScopedStructuralAncestorProperty(file, astPath) {
  const normalizedFile = file.replace(/\\/gu, "/");
  const properties = fileScopedStructuralAncestorProperties.get(normalizedFile);
  if (!properties) return false;
  let current = astPath.parentPath;
  while (current) {
    if ((current.isObjectProperty() || current.isObjectMethod() || current.isClassProperty() || current.isClassMethod()) &&
      properties.has(propertyName(current.node))) {
      return true;
    }
    current = current.parentPath;
  }
  return false;
}

function isMapEntriesArgument(call, argument) {
  return call.isNewExpression() && call.node.callee?.type === "Identifier" && call.node.callee.name === "Map" &&
    call.node.arguments[0] === argument.node && argument.isArrayExpression();
}

function isNamedObject(node, name) {
  return node?.type === "Identifier" && node.name === name;
}

function isEndgameSave(value) {
  return value.startsWith("AntimatterDimensionsEndgameSavefileFormat") && value.endsWith("EndOfSavefile");
}

function isVueComponentName(property) {
  if (propertyName(property?.node) !== "name") return false;
  const objectExpression = property.parentPath;
  if (!objectExpression?.isObjectExpression()) return false;
  if (objectExpression.parentPath?.isExportDefaultDeclaration()) return true;
  const call = objectExpression.parentPath;
  return call?.isCallExpression() && call.node.arguments[0] === objectExpression.node &&
    call.node.callee?.type === "Identifier" && call.node.callee.name === "defineComponent";
}

function isIncludesReceiver(container) {
  let current = container;
  while (current.parentPath?.isArrayExpression()) current = current.parentPath;
  if (!current.isArrayExpression()) return false;
  const member = current.parentPath;
  const call = member?.parentPath;
  return member?.isMemberExpression() && member.node.object === current.node && memberName(member.node) === "includes" &&
    call?.isCallExpression() && call.node.callee === member.node;
}

function isStructuralLiteral(file, astPath, value) {
  const container = literalContainer(astPath);
  const parent = container.parentPath;
  const property = closestObjectProperty(astPath);
  const propertyKey = propertyName(property?.node);
  const classProperty = closestClassProperty(astPath);
  const classPropertyKey = propertyName(classProperty?.node);

  if (isFileScopedLocalizedBindingProperty(file, container, propertyKey)) return false;

  if (value === "END" || isEndgameSave(value) || isFileScopedStructuralBinding(file, container) ||
    isWithinFileScopedStructuralAncestorProperty(file, astPath) ||
    (looksLikeCssIdentifier(value) && !localizedStringProperties.has(propertyKey)) ||
    isIncludesReceiver(container) || isWithinObjectPropertyKey(astPath) || isStructuralAssignment(container)) {
    return true;
  }
  if (isFileScopedStructuralAssignment(file, container)) return true;

  if (parent?.isImportDeclaration() || parent?.isExportNamedDeclaration() || parent?.isExportAllDeclaration()) {
    return true;
  }
  if (parent?.isObjectProperty() && parent.node.key === container.node) return true;
  if (parent?.isMemberExpression() && parent.node.computed && parent.node.property === container.node) return true;
  if (parent?.isBinaryExpression() && equalityOperators.has(parent.node.operator) &&
    (parent.node.left === container.node || parent.node.right === container.node)) return true;
  if (parent?.isSwitchCase() && parent.node.test === container.node) return true;

  if ((structuralStringProperties.has(propertyKey) || isFileScopedStructuralProperty(file, propertyKey)) &&
    isReturnedFromNestedFunction(astPath, property)) return true;
  if (isFileScopedStructuralProperty(file, classPropertyKey) &&
    isReturnedFromNestedFunction(astPath, classProperty)) return true;
  if (isVueComponentName(property)) return true;
  if (propertyKey === "currencyLabel" && protectedCurrencyLabels.has(value)) return true;

  const callContext = callArgumentContaining(container);
  if (!callContext) return false;
  const { call, argument } = callContext;
  const callee = call.node.callee;
  if (callee?.type === "Import") return true;
  if (callee?.type === "Identifier" && callee.name === "require") return true;
  if (structuralCallNames.has(callee?.name) || structuralCallNames.has(memberName(callee))) return true;
  if (memberName(callee) === "import" && isNamedObject(callee.object, "GameStorage")) return true;
  // Map entries are display data by default. Runtime Maps are locked by exact file-scoped bindings/properties above.
  if (isMapEntriesArgument(call, argument)) return false;
  if (localizedStringProperties.has(propertyKey) || isLocalizedCallArgument(file, call, argument)) return false;
  // Unknown direct string arguments are safer as runtime keys; visible call sites must be added above with a fixture.
  return true;
}

function isLocalizedLiteral(astPath, value) {
  const property = closestObjectProperty(astPath);
  if (property && localizedStringProperties.has(propertyName(property.node))) return true;
  return isHumanText(value);
}

function canonicalScript(file, source, { preserveAllStrings = false } = {}) {
  const ast = parseScript(file, source);
  const structuralTemplates = new WeakSet();
  const expressionSignature = expression => JSON.stringify(expression, (key, value) => {
    if (["start", "end", "loc", "extra", "leadingComments", "trailingComments", "innerComments"].includes(key)) {
      return undefined;
    }
    return value;
  });

  traverse(ast, {
    StringLiteral(astPath) {
      if (!preserveAllStrings && !isStructuralLiteral(file, astPath, astPath.node.value) &&
        isLocalizedLiteral(astPath, astPath.node.value)) {
        astPath.node.value = localizedMarker(astPath.node.value);
      }
      delete astPath.node.extra;
    },
    DirectiveLiteral(astPath) {
      delete astPath.node.extra;
    },
    TemplateElement(astPath) {
      const value = astPath.node.value.cooked ?? astPath.node.value.raw;
      const isStructural = preserveAllStrings || isStructuralLiteral(file, astPath, value);
      if (isStructural) structuralTemplates.add(astPath.parentPath.node);
      if (!preserveAllStrings && !isStructural) {
        const marker = localizedMarker(value);
        astPath.node.value.raw = marker;
        astPath.node.value.cooked = marker;
      }
    },
    TemplateLiteral: {
      exit(astPath) {
        if (preserveAllStrings || structuralTemplates.has(astPath.node)) return;
        // Translation may reorder interpolations for Korean grammar, but must preserve the expression multiset.
        astPath.node.expressions.sort((a, b) => expressionSignature(a).localeCompare(expressionSignature(b)));
      }
    }
  });

  return JSON.stringify(ast, (key, value) => {
    if (["start", "end", "loc", "extra", "errors", "comments", "leadingComments", "trailingComments", "innerComments"]
      .includes(key)) return undefined;
    return value;
  });
}

function normalizeBinding(value) {
  try {
    return canonicalScript("__vue_binding__.js", `const __binding = (${value});`);
  } catch {
    return value.replace(/(["'`])(?:\\.|(?!\1)[^\\])*?\1/gu, match => {
      const content = match.slice(1, -1);
      return isHumanText(content) ? `${match[0]}${localizedMarker(content)}${match[0]}` : match;
    });
  }
}

function normalizeStructuralBinding(value) {
  if (value === undefined || value === null) return null;
  try {
    return canonicalScript("__vue_structural_binding__.js", `const __binding = (${value});`, {
      preserveAllStrings: true
    });
  } catch {
    try {
      return canonicalScript("__vue_structural_handler__.js", `function __handler() { ${value} }`, {
        preserveAllStrings: true
      });
    } catch {
      return value;
    }
  }
}

function isVisibleVueAttribute(name, tag) {
  return visibleAttributes.has(name) && (name !== "name" || !structuralNameTags.has(tag));
}

function canonicalProcessedAttributes(attributes, { visible = true, tag = "" } = {}) {
  return (attributes ?? []).map(attribute => [
    attribute.name,
    visible && isVisibleVueAttribute(attribute.name, tag)
      ? normalizeBinding(attribute.value)
      : normalizeStructuralBinding(attribute.value),
    Boolean(attribute.dynamic)
  ]).sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
}

function canonicalEventHandler(handler) {
  if (Array.isArray(handler)) return handler.map(canonicalEventHandler);
  return {
    value: normalizeStructuralBinding(handler?.value),
    dynamic: Boolean(handler?.dynamic),
    modifiers: Object.keys(handler?.modifiers ?? {}).sort()
  };
}

function canonicalEvents(events) {
  return Object.entries(events ?? {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([name, handler]) => [name, canonicalEventHandler(handler)]);
}

function canonicalDirectives(directives) {
  return (directives ?? []).map(directive => ({
    name: directive.name,
    rawName: directive.rawName,
    value: directive.name === "tooltip"
      ? normalizeBinding(directive.value)
      : normalizeStructuralBinding(directive.value),
    arg: directive.arg ?? null,
    isDynamicArg: Boolean(directive.isDynamicArg),
    modifiers: Object.keys(directive.modifiers ?? {}).sort()
  })).sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
}

function normalizeAttribute(attribute, tag) {
  const isBinding = /^(?::|v-bind:|@|v-on:)/u.test(attribute.name);
  const isTooltip = /^v-tooltip(?::|\.|$)/u.test(attribute.name);
  let value = attribute.value;
  if (isVisibleVueAttribute(attribute.name, tag) && isHumanText(attribute.value)) {
    value = localizedMarker(attribute.value);
  } else if (isBinding || isTooltip) {
    value = normalizeBinding(attribute.value);
  }
  return [attribute.name, value];
}

function bindingHasLocalizedHumanText(value) {
  let found = false;
  try {
    const file = "__vue_text_binding__.js";
    const ast = parseScript(file, `const __binding = (${value});`);
    traverse(ast, {
      StringLiteral(astPath) {
        if (!isStructuralLiteral(file, astPath, astPath.node.value) && isLocalizedLiteral(astPath, astPath.node.value)) {
          found = true;
          astPath.stop();
        }
      },
      TemplateElement(astPath) {
        const text = astPath.node.value.cooked ?? astPath.node.value.raw;
        if (!isStructuralLiteral(file, astPath, text) && isHumanText(text)) {
          found = true;
          astPath.stop();
        }
      }
    });
  } catch {
    return false;
  }
  return found;
}

function hasLocalizedHumanText(node) {
  const directText = (node.children ?? []).flatMap(child => {
    if (child.type === 3) return [child.text ?? ""];
    if (child.type === 2) return (child.tokens ?? []).filter(token => typeof token === "string");
    return [];
  }).join("");
  if (/[A-Za-z\d\uAC00-\uD7A3]/u.test(directText)) return true;
  return (node.children ?? []).some(child => child.type === 2 && (child.tokens ?? [])
    .filter(token => typeof token !== "string")
    .some(token => bindingHasLocalizedHumanText(token["@binding"])));
}

function normalizeStaticClass(value) {
  if (value === null || value === undefined) return null;
  try {
    const className = JSON.parse(value);
    if (typeof className === "string") return JSON.stringify(className.trim());
  } catch {
    // Keep unexpected compiler output fail-closed instead of guessing how to normalize it.
  }
  return value;
}

function canonicalTemplateNode(node, visited = new Set()) {
  if (!node || visited.has(node)) return null;
  visited.add(node);
  if (node.type === 3) return null;
  if (node.type === 2) {
    const tokens = node.tokens ?? [];
    const bindings = tokens
      .filter(token => typeof token !== "string")
      .map(token => normalizeBinding(token["@binding"]))
      .sort();
    return [2, bindings];
  }
  const branches = (node.ifConditions ?? []).slice(1).map(condition => [
    condition.exp ? normalizeStructuralBinding(condition.exp) : null,
    canonicalTemplateNode(condition.block, visited)
  ]);
  return {
    type: node.type,
    tag: node.tag,
    hasLocalizedHumanText: hasLocalizedHumanText(node),
    attrs: (node.attrsList ?? []).map(attribute => normalizeAttribute(attribute, node.tag))
      .sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right))),
    processedAttrs: canonicalProcessedAttributes(node.attrs, { tag: node.tag }),
    props: canonicalProcessedAttributes(node.props, { visible: false }),
    directives: canonicalDirectives(node.directives),
    events: canonicalEvents(node.events),
    nativeEvents: canonicalEvents(node.nativeEvents),
    if: node.if ? normalizeStructuralBinding(node.if) : null,
    for: node.for ? normalizeStructuralBinding(node.for) : null,
    alias: node.alias ?? null,
    iterator1: node.iterator1 ?? null,
    iterator2: node.iterator2 ?? null,
    staticClass: normalizeStaticClass(node.staticClass),
    classBinding: normalizeStructuralBinding(node.classBinding),
    staticStyle: node.staticStyle ?? null,
    styleBinding: normalizeStructuralBinding(node.styleBinding),
    key: normalizeStructuralBinding(node.key),
    ref: node.ref ?? null,
    refInFor: Boolean(node.refInFor),
    slotTarget: node.slotTarget ?? null,
    slotTargetDynamic: Boolean(node.slotTargetDynamic),
    slotName: node.slotName ?? null,
    slotScope: node.slotScope ?? null,
    component: normalizeStructuralBinding(node.component),
    once: Boolean(node.once),
    pre: Boolean(node.pre),
    inlineTemplate: Boolean(node.inlineTemplate),
    model: node.model ? {
      value: normalizeStructuralBinding(node.model.value),
      expression: normalizeStructuralBinding(node.model.expression),
      callback: normalizeStructuralBinding(node.model.callback)
    } : null,
    scopedSlots: Object.entries(node.scopedSlots ?? {})
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([name, slot]) => [name, canonicalTemplateNode(slot, visited)]),
    children: (node.children ?? []).map(child => canonicalTemplateNode(child, visited)).filter(Boolean),
    branches
  };
}

function canonicalVue(file, source) {
  const component = vue.parseComponent(source);
  const blockAttributes = block => Object.entries(block?.attrs ?? {}).sort(([left], [right]) => left.localeCompare(right));
  const exactBlock = block => ({
    attrs: blockAttributes(block),
    content: block.content.replace(/\r\n/gu, "\n")
  });
  const result = {
    scriptAttrs: blockAttributes(component.script),
    templateAttrs: blockAttributes(component.template),
    styles: component.styles.map(exactBlock),
    customBlocks: component.customBlocks.map(exactBlock)
  };
  if (component.script) result.script = canonicalScript(file, component.script.content);
  if (component.template) {
    const compiled = vue.compile(component.template.content, { comments: false, outputSourceRange: true });
    if (compiled.errors.length > 0) {
      const messages = compiled.errors.map(error => (
        typeof error === "string" ? error : error.msg ?? JSON.stringify(error)
      ));
      throw new Error(`${file}: ${messages.join("; ")}`);
    }
    result.template = canonicalTemplateNode(compiled.ast);
  }
  return JSON.stringify(result);
}

function canonicalHash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function validateActiveAllowances(allowances) {
  for (const [file, allowance] of Object.entries(allowances)) {
    if (!allowance || typeof allowance !== "object" ||
      typeof allowance.reason !== "string" || !allowance.reason.trim() ||
      typeof allowance.removeAfter !== "string" || !allowance.removeAfter.trim()) {
      throw new Error(`Active structure allowance requires reason and removeAfter for ${file}`);
    }
    for (const key of ["beforeCanonicalSha256", "afterCanonicalSha256"]) {
      if (!/^[0-9a-f]{64}$/u.test(allowance[key] ?? "")) {
        throw new Error(`Invalid ${key} in active structure allowance for ${file}`);
      }
    }
  }
}

function allowanceMatches(allowance, beforeCanonical, afterCanonical) {
  return Boolean(allowance) &&
    allowance.beforeCanonicalSha256 === canonicalHash(beforeCanonical) &&
    allowance.afterCanonicalSha256 === canonicalHash(afterCanonical);
}

function assertCanonicalDifference(message, before, after, file = "fixture.js") {
  if (canonicalScript(file, before) === canonicalScript(file, after)) throw new Error(message);
}

function assertCanonicalEquality(message, before, after, file = "fixture.js") {
  if (canonicalScript(file, before) !== canonicalScript(file, after)) throw new Error(message);
}

function assertCanonicalVueDifference(message, beforeTemplate, afterTemplate) {
  const before = `<template>${beforeTemplate}</template>`;
  const after = `<template>${afterTemplate}</template>`;
  if (canonicalVue("fixture.vue", before) === canonicalVue("fixture.vue", after)) throw new Error(message);
}

function assertCanonicalVueEquality(message, beforeTemplate, afterTemplate) {
  const before = `<template>${beforeTemplate}</template>`;
  const after = `<template>${afterTemplate}</template>`;
  if (canonicalVue("fixture.vue", before) !== canonicalVue("fixture.vue", after)) throw new Error(message);
}

function runSelfTest() {
  assertCanonicalEquality(
    "Visible translations should preserve script structure",
    `export const fixture = { lines: ["  I...  ", "I'm..."], text: "Visible option" };`,
    `export const fixture = { lines: ["음...", "나는..."], text: "표시 옵션" };`
  );
  assertCanonicalDifference(
    "File-like strings outside display contexts must remain structural",
    `export const value = "I.js";`,
    `export const value = "I.svg";`
  );
  assertCanonicalDifference(
    "Direct background and celestialName values must remain structural",
    `export const value = { background: "black", celestialName: "Pelle" };`,
    `export const value = { background: "white", celestialName: "펠레" };`
  );
  assertCanonicalDifference(
    "String IDs must remain structural even when they resemble human text",
    `export const value = { id: "ae777", text: "Visible" };`,
    `export const value = { id: "ae778", text: "표시" };`
  );
  assertCanonicalDifference(
    "Call-wrapped background values must remain structural",
    `export const value = { background: primaryBackground("teresa") };`,
    `export const value = { background: primaryBackground("테레사") };`
  );
  assertCanonicalDifference(
    "Function-wrapped celestialName values must remain structural",
    `export const value = { celestialName: () => "destroyer" };`,
    `export const value = { celestialName: () => "파괴자" };`
  );
  assertCanonicalEquality(
    "A nested visible property must not inherit the outer background lock",
    `export const value = { background: fn({ label: "Visible label" }) };`,
    `export const value = { background: fn({ label: "표시 라벨" }) };`
  );
  assertCanonicalDifference(
    "Runtime currency labels must remain structural",
    `export const value = { currencyLabel: "Galaxy", other: { currencyLabel: "Reality Shard" } };`,
    `export const value = { currencyLabel: "은하", other: { currencyLabel: "현실 조각" } };`
  );
  assertCanonicalEquality(
    "Display-only currency labels must remain translatable",
    `export const value = { currencyLabel: "Antimatter" };`,
    `export const value = { currencyLabel: "반물질" };`
  );
  assertCanonicalDifference(
    "Direct equality sentinels must remain structural",
    `export const value = input === "END";`,
    `export const value = input === "끝";`
  );
  assertCanonicalDifference(
    "The END sentinel must remain structural when passed through String",
    `export const value = String("END");`,
    `export const value = String("끝");`
  );
  assertCanonicalDifference(
    "Sentinels in a direct includes receiver must remain structural",
    `export const value = ["END"].includes(input);`,
    `export const value = ["끝"].includes(input);`
  );
  assertCanonicalDifference(
    "The embedded Endgame save passed to GameStorage.import must remain structural",
    `GameStorage.import("AntimatterDimensionsEndgameSavefileFormatAEndOfSavefile");`,
    `GameStorage.import("AntimatterDimensionsEndgameSavefileFormatBEndOfSavefile");`
  );
  assertCanonicalDifference(
    "An Endgame save stored before import must remain structural",
    `const save = "AntimatterDimensionsEndgameSavefileFormatAEndOfSavefile"; GameStorage.import(save);`,
    `const save = "AntimatterDimensionsEndgameSavefileFormatBEndOfSavefile"; GameStorage.import(save);`
  );
  assertCanonicalEquality(
    "Ordinary user-facing call arguments must remain translatable",
    `notify("Import complete");`,
    `notify("가져오기 완료");`
  );
  assertCanonicalDifference(
    "Module identifiers passed to require must remain structural",
    `const value = require("vue");`,
    `const value = require("다른모듈");`
  );
  assertCanonicalDifference(
    "Dynamic import module identifiers must remain structural",
    `export const value = import("vue");`,
    `export const value = import("다른모듈");`
  );
  assertCanonicalDifference(
    "Vue component names must remain structural",
    `export default { name: "ImportSaveModal", text: "Visible" };`,
    `export default { name: "저장가져오기모달", text: "표시" };`
  );
  assertCanonicalDifference(
    "Event names passed to emit must remain structural",
    `export function run() { this.$emit("start"); }`,
    `export function run() { this.$emit("시작"); }`
  );
  assertCanonicalDifference(
    "Event subscription names must remain structural",
    `export function run() { bus.on("game-start", handler); }`,
    `export function run() { bus.on("게임-시작", handler); }`
  );
  assertCanonicalDifference(
    "Map lookup keys must remain structural",
    `export const value = map.get("player-state");`,
    `export const value = map.get("플레이어-상태");`
  );
  assertCanonicalEquality(
    "Plural database Map keys and values must remain translatable",
    `const pluralDatabase = new Map([["Antimatter Galaxy", "Antimatter Galaxies"]]);`,
    `const pluralDatabase = new Map([["반물질 은하", "반물질 은하"]]);`,
    "src/core/format.js"
  );
  assertCanonicalDifference(
    "Runtime Map keys in the Time Study sets property must remain structural",
    `export class Tree { static get sets() { return new Map([["antimatter", [1]]]); } }`,
    `export class Tree { static get sets() { return new Map([["반물질", [1]]]); } }`,
    "src/core/time-studies/time-study-tree.js"
  );
  assertCanonicalDifference(
    "Optional-call lookup keys must remain structural",
    `export const value = map?.get?.("player-state");`,
    `export const value = map?.get?.("플레이어-상태");`
  );
  assertCanonicalDifference(
    "localStorage keys must remain structural",
    `export const value = localStorage.getItem("Zoom");`,
    `export const value = localStorage.getItem("확대");`
  );
  assertCanonicalDifference(
    "DOM event names must remain structural",
    `window.addEventListener("resize", handler);`,
    `window.addEventListener("크기조절", handler);`
  );
  assertCanonicalDifference(
    "Mechanic keys passed to isDisabled must remain structural",
    `export const value = Pelle.isDisabled("blackhole");`,
    `export const value = Pelle.isDisabled("블랙홀");`
  );
  assertCanonicalDifference(
    "Automator token names must remain structural",
    `createKeyword("Auto", /auto/i);`,
    `createKeyword("자동", /auto/i);`
  );
  assertCanonicalDifference(
    "DOM element IDs must remain structural",
    `document.getElementById("loading");`,
    `document.getElementById("로딩");`
  );
  assertCanonicalDifference(
    "Element names must remain structural",
    `document.createElement("div");`,
    `document.createElement("디브");`
  );
  assertCanonicalDifference(
    "Window targets must remain structural",
    `window.open(url, "_blank");`,
    `window.open(url, "새창");`
  );
  assertCanonicalDifference(
    "HTTP methods passed to open must remain structural",
    `xhr.open("POST", url, true);`,
    `xhr.open("전송", url, true);`
  );
  assertCanonicalDifference(
    "Defined property names must remain structural",
    `Object.defineProperty(target, "current", descriptor);`,
    `Object.defineProperty(target, "현재", descriptor);`
  );
  assertCanonicalDifference(
    "Serialized text discriminators must remain structural",
    `GameSaveSerializer.encodeText(data, "automator data");`,
    `GameSaveSerializer.encodeText(data, "오토메이터 데이터");`
  );
  assertCanonicalDifference(
    "Migration property names must remain structural",
    `movePropIfPossible("teresa", "effarig", "autoGlyphSac", {});`,
    `movePropIfPossible("테레사", "에파리그", "자동글리프희생", {});`
  );
  assertCanonicalDifference(
    "Unknown direct call arguments must fail closed as runtime keys",
    `runtimeAdapter("player-state");`,
    `runtimeAdapter("플레이어-상태");`
  );
  assertCanonicalDifference(
    "Runtime keys in concatenated unknown-call arguments must fail closed",
    `runtimeAdapter("player-state" + suffix);`,
    `runtimeAdapter("플레이어-상태" + suffix);`
  );
  assertCanonicalEquality(
    "Concatenated text in an explicitly localized call must remain translatable",
    `notify("Visible state " + suffix);`,
    `notify("표시 상태 " + suffix);`
  );
  assertCanonicalDifference(
    "Runtime keys nested in array arguments must fail closed",
    `runtimeAdapter(["player-state"]);`,
    `runtimeAdapter(["플레이어-상태"]);`
  );
  assertCanonicalDifference(
    "Runtime keys nested in object arguments must fail closed",
    `runtimeAdapter({ config: { mode: "player-state" } });`,
    `runtimeAdapter({ config: { mode: "플레이어-상태" } });`
  );
  assertCanonicalEquality(
    "Explicitly visible properties nested in call arguments must remain translatable",
    `runtimeAdapter({ message: "Visible message" });`,
    `runtimeAdapter({ message: "표시 메시지" });`
  );
  assertCanonicalEquality(
    "Explicit display call arguments should remain translatable",
    `GameUI.notify.info("Visible message"); quantifyInt("item", count);`,
    `GameUI.notify.info("표시 메시지"); quantifyInt("항목", count);`
  );
  assertCanonicalDifference(
    "Display helper names must not authorize the same method on an arbitrary receiver",
    `service.quantify("Runtime Unit", count);`,
    `service.quantify("런타임 단위", count);`
  );
  assertCanonicalEquality(
    "Hybrid quantity labels should remain translatable",
    `quantifyHybridLarge("Galaxy", value); quantifyHybridSmall("Shard", value);`,
    `quantifyHybridLarge("은하", value); quantifyHybridSmall("파편", value);`
  );
  assertCanonicalEquality(
    "Celestial display names should remain translatable",
    `celestialReality(Teresa, "Teresa's", "teresa");`,
    `celestialReality(Teresa, "테레사의", "teresa");`
  );
  assertCanonicalDifference(
    "Celestial tab keys must remain structural",
    `celestialReality(Teresa, "Teresa's", "teresa");`,
    `celestialReality(Teresa, "테레사의", "테레사");`
  );
  assertCanonicalEquality(
    "Checked-component labels should remain translatable",
    `addCheckedComponent(component, "Visible label");`,
    `addCheckedComponent(component, "표시 라벨");`
  );
  assertCanonicalEquality(
    "Automator notifications and logs should remain translatable",
    `GameUI.notify.automator("Visible notice"); AutomatorData.logCommandEvent("Visible log", line);`,
    `GameUI.notify.automator("표시 알림"); AutomatorData.logCommandEvent("표시 로그", line);`
  );
  assertCanonicalEquality(
    "Progression notification messages should remain translatable",
    `GameUI.notify.infinity("Infinity notice"); GameUI.notify.eternity("Eternity notice");
      GameUI.notify.reality("Reality notice"); GameUI.notify.endgame("Endgame notice");
      GameUI.notify.strike("Strike notice"); GameUI.notify.blackHole("Black Hole notice");`,
    `GameUI.notify.infinity("무한 알림"); GameUI.notify.eternity("영원 알림");
      GameUI.notify.reality("현실 알림"); GameUI.notify.endgame("엔드게임 알림");
      GameUI.notify.strike("타격 알림"); GameUI.notify.blackHole("블랙홀 알림");`
  );
  for (const [file, calls] of fileScopedLocalizedCallArguments) {
    for (const [callee, localizedIndices] of calls) {
      const argumentCount = Math.max(...localizedIndices) + 1;
      const callSource = label => `${callee}(${Array.from({ length: argumentCount }, (_, index) =>
        (localizedIndices.has(index) ? JSON.stringify(`${label} ${index}`) : `value${index}`)).join(", ")});`;
      const before = callSource("Visible label");
      const after = callSource("표시 라벨");
      assertCanonicalEquality(
        `The scoped display call ${callee} should be translatable in ${file}`,
        before,
        after,
        file
      );
      assertCanonicalDifference(
        `The scoped display call ${callee} must not be authorized outside ${file}`,
        before,
        after
      );
    }
  }
  assertCanonicalEquality(
    "Save comparison labels and fallback text must remain translatable",
    `this.compareLayeredValues(["runtime-key"], ["Visible label"], [format], "Visible fallback");`,
    `this.compareLayeredValues(["runtime-key"], ["표시 라벨"], [format], "표시 대체 문구");`,
    "src/components/modals/cloud/SaveInfoEntry.vue"
  );
  assertCanonicalDifference(
    "Save comparison property keys must remain structural",
    `this.compareLayeredValues(["runtime-key"], ["Visible label"], [format], "Visible fallback");`,
    `this.compareLayeredValues(["번역된-키"], ["Visible label"], [format], "Visible fallback");`,
    "src/components/modals/cloud/SaveInfoEntry.vue"
  );
  assertCanonicalEquality(
    "Cloud conflict suggestion HTML text must remain translatable",
    `suggestions.push("<br><b class='warning'>Visible warning</b>");`,
    `suggestions.push("<br><b class='warning'>표시 경고</b>");`,
    "src/components/modals/cloud/CloudLoadConflictModal.vue"
  );
  assertCanonicalDifference(
    "Cloud conflict suggestion HTML attributes must remain structural",
    `suggestions.push("<br><b class='warning'>Visible warning</b>");`,
    `suggestions.push("<br><b class='translated'>Visible warning</b>");`,
    "src/components/modals/cloud/CloudLoadConflictModal.vue"
  );
  for (const callee of [
    "Modal.celestials.show", "Modal.exitChallenge.show", "Modal.glyphShowcasePanel.show", "Modal.resetEndgame.show"
  ]) {
    assertCanonicalEquality(
      `${callee} display object text must remain translatable`,
      `${callee}({ name: "Visible name", message: "Visible message", id: "runtime-id", type: "runtime-type",
        key: "runtime-key" });`,
      `${callee}({ name: "표시 이름", message: "표시 메시지", id: "runtime-id", type: "runtime-type",
        key: "runtime-key" });`
    );
    assertCanonicalDifference(
      `${callee} runtime object IDs must remain structural`,
      `${callee}({ name: "Visible name", id: "runtime-id", type: "runtime-type", key: "runtime-key" });`,
      `${callee}({ name: "Visible name", id: "번역-id", type: "runtime-type", key: "runtime-key" });`
    );
  }
  assertCanonicalDifference(
    "Unapproved Modal show calls must not inherit display-object authorization",
    `Modal.other.show({ name: "Visible name" });`,
    `Modal.other.show({ name: "표시 이름" });`
  );
  for (const file of [
    "src/core/secret-formula/celestials/divinity-upgrades.js",
    "src/core/secret-formula/endgame/break-eternity-upgrades.js",
    "src/core/secret-formula/endgame/endgame-upgrades.js",
    "src/core/secret-formula/endgame/null-upgrades.js",
    "src/core/secret-formula/reality/duality-upgrades.js",
    "src/core/secret-formula/reality/imaginary-upgrades.js",
    "src/core/secret-formula/reality/reality-upgrades.js"
  ]) {
    assertCanonicalEquality(
      `Rebuyable upgrade names must remain translatable in ${file}`,
      `rebuyable({ id: "upgrade-id", type: "upgrade-type", key: "upgrade-key", name: "Visible upgrade",
        description: "Visible description" });`,
      `rebuyable({ id: "upgrade-id", type: "upgrade-type", key: "upgrade-key", name: "표시 업그레이드",
        description: "표시 설명" });`,
      file
    );
    assertCanonicalDifference(
      `Rebuyable upgrade runtime IDs must remain structural in ${file}`,
      `rebuyable({ id: "upgrade-id", name: "Visible upgrade" });`,
      `rebuyable({ id: "번역-id", name: "Visible upgrade" });`,
      file
    );
  }
  assertCanonicalDifference(
    "Global rebuyable calls must not authorize name translation",
    `rebuyable({ name: "Visible upgrade" });`,
    `rebuyable({ name: "표시 업그레이드" });`
  );
  for (const file of [
    "src/components/tabs/antimatter-dimensions/ClassicAntimatterGalaxyRow.vue",
    "src/components/tabs/antimatter-dimensions/ModernAntimatterGalaxyRow.vue",
    "src/components/tabs/celestial-dimensions/ClassicCelestialGalaxyRow.vue",
    "src/components/tabs/celestial-dimensions/ModernCelestialGalaxyRow.vue"
  ]) {
    assertCanonicalEquality(
      `Galaxy scaling display labels must remain translatable in ${file}`,
      `const scalings = [{ type: "distant", function: "quadratic" },
        { type: "remote", function: "exponential" }];`,
      `const scalings = [{ type: "먼", function: "이차" },
        { type: "더욱 먼", function: "지수" }];`,
      file
    );
    assertCanonicalDifference(
      `Runtime type values outside scalings must remain structural in ${file}`,
      `export default { data() { return { type: "player-state" }; } };`,
      `export default { data() { return { type: "플레이어-상태" }; } };`,
      file
    );
  }
  assertCanonicalDifference(
    "Automator script output lines must remain structural",
    `this.lines.push("auto eternity off");`,
    `this.lines.push("자동 영원 끄기");`
  );
  assertCanonicalDifference(
    "DOM className assignments must remain structural",
    `element.className = "c-old-class";`,
    `element.className = "c-new-class";`
  );
  assertCanonicalDifference(
    "Object type values must remain structural",
    `export const value = { type: "player-state" };`,
    `export const value = { type: "플레이어-상태" };`
  );
  assertCanonicalDifference(
    "CSS class strings returned from functions must remain structural",
    `export function cssClass() { return "c-old-class"; }`,
    `export function cssClass() { return "c-new-class"; }`
  );
  assertCanonicalDifference(
    "Runtime template-key fragments must remain structural",
    "export const value = { id: `modal-${kind}` };",
    "export const value = { id: `dialog-${kind}` };"
  );
  assertCanonicalDifference(
    "Eternity Challenge full IDs must remain structural",
    "export class State { constructor() { this._fullId = `eterc${this.id}`; } }",
    "export class State { constructor() { this._fullId = `영도전${this.id}`; } }",
    "src/core/eternity-challenge.js"
  );
  assertCanonicalDifference(
    "Development migration auto-Reality mode assignments must remain structural",
    `player.autoRealityMode = "rm";`,
    `player.autoRealityMode = "현실 머신";`,
    "src/core/storage/dev-migrations.js"
  );
  assertCanonicalDifference(
    "Development migration glyph type assignments must remain structural",
    `glyph.type = "effarig";`,
    `glyph.type = "에파리그";`,
    "src/core/storage/dev-migrations.js"
  );
  assertCanonicalDifference(
    "Theme stylesheet template paths must remain structural",
    "export default { computed: { themeCss() { return `stylesheets/theme-${this.theme}.css`; } } };",
    "export default { computed: { themeCss() { return `스타일/테마-${this.theme}.css`; } } };",
    "src/components/GameUIComponent.vue"
  );
  assertCanonicalDifference(
    "Celestial quote CSS variable templates must remain structural",
    "export default { computed: { color() { return `var(--color-${this.celestial}--base)`; } } };",
    "export default { computed: { color() { return `var(--색상-${this.celestial}--기본)`; } } };",
    "src/components/CelestialQuoteHistory.vue"
  );
  assertCanonicalEquality(
    "Ordinary display templates must remain translatable beside exact structural methods",
    "export default { computed: { label() { return `Visible ${this.name}`; } } };",
    "export default { computed: { label() { return `${this.name} 표시`; } } };",
    "src/components/GameUIComponent.vue"
  );
  assertCanonicalDifference(
    "Serializer encode template expression order must be preserved",
    "export const step = { encode: x => `${prefix}${x}` };",
    "export const step = { encode: x => `${x}${prefix}` };",
    "src/core/storage/serializer.js"
  );
  assertCanonicalDifference(
    "Serializer decode template expression order must be preserved",
    "export const step = { decode: x => `${prefix}${x}` };",
    "export const step = { decode: x => `${x}${prefix}` };",
    "src/core/storage/serializer.js"
  );
  assertCanonicalDifference(
    "Serializer starting strings must remain structural through nested type keys",
    `export const value = { startingString: { savefile: "Antimatter Dimensions Save Format" } };`,
    `export const value = { startingString: { savefile: "반물질 차원 저장 형식" } };`,
    "src/core/storage/serializer.js"
  );
  assertCanonicalDifference(
    "Serializer ending strings must remain structural through nested type keys",
    `export const value = { endingString: { savefile: "End Of Savefile" } };`,
    `export const value = { endingString: { savefile: "저장 끝" } };`,
    "src/core/storage/serializer.js"
  );
  assertCanonicalDifference(
    "Serializer version markers must remain structural",
    `export const value = { version: "AAB" };`,
    `export const value = { version: "버전" };`,
    "src/core/storage/serializer.js"
  );
  assertCanonicalEquality(
    "Serializer display messages must remain translatable",
    `export const value = { message: "Invalid save data" };`,
    `export const value = { message: "잘못된 저장 데이터" };`,
    "src/core/storage/serializer.js"
  );
  assertCanonicalDifference(
    "Tab notification key template expression order must be preserved",
    "const currentTabKey = `${tab}${subtab}`;",
    "const currentTabKey = `${subtab}${tab}`;",
    "src/core/tab-notifications.js"
  );
  assertCanonicalDifference(
    "Time Study export template expression order must be preserved",
    "export const value = { get exportString() { return `${studies}|${ec}`; } };",
    "export const value = { get exportString() { return `${ec}|${studies}`; } };",
    "src/core/time-studies/time-study-tree.js"
  );
  assertCanonicalDifference(
    "Glyph component CSS transform axes must remain ordered",
    "export const value = { transform: `translate(${dx}rem, ${dy}rem)` };",
    "export const value = { transform: `translate(${dy}rem, ${dx}rem)` };",
    "src/components/GlyphComponent.vue"
  );
  assertCanonicalDifference(
    "Tooltip CSS transform axis and sign expressions must remain ordered",
    "export const value = { get contentTransform() { return `translate${axis}(${sign}50%)`; } };",
    "export const value = { get contentTransform() { return `translate${sign}(${axis}50%)`; } };",
    "src/components/CustomizeableTooltip.vue"
  );
  assertCanonicalDifference(
    "Structural template expression order must be preserved",
    "segments.push(`${paddedNumber(data.length)}${data}`);",
    "segments.push(`${data}${paddedNumber(data.length)}`);"
  );
  assertCanonicalEquality(
    "Visible template expressions may be reordered for Korean grammar",
    "notify(`${first} and ${second}`);",
    "notify(`${second}와 ${first}`);"
  );
  assertCanonicalEquality(
    "Visible templates may spell source numbers differently while preserving expressions",
    "notify(`The 1st ${first} and double ${second}`);",
    "notify(`${second} 2배와 첫 번째 ${first}`);"
  );
  assertCanonicalEquality(
    "Visible adjacent template expressions may be reordered",
    "notify(`${first}${second}`);",
    "notify(`${second}${first}`);"
  );
  assertCanonicalEquality(
    "Visible punctuation-only template quasis must not lock expression order",
    "notify(`${first}.${second}`);",
    "notify(`${second}.${first}`);"
  );
  assertCanonicalEquality(
    "Visible per-second template units must remain translatable",
    "notify(`${value}/sec`);",
    "notify(`${value}/초`);"
  );
  assertCanonicalEquality(
    "Visible millisecond template units must remain translatable",
    "notify(`${value}ms.`);",
    "notify(`${value}밀리초`);"
  );
  for (const property of ["A", "B", "C", "D", "E", "allowedPatterns", "cmd", "targets"]) {
    assertCanonicalDifference(
      `Automator block runtime property ${property} must remain structural`,
      `export const value = { ${property}: ["player-state"] };`,
      `export const value = { ${property}: ["플레이어-상태"] };`,
      "src/components/tabs/automator/AutomatorBlocks.vue"
    );
  }
  assertCanonicalEquality(
    "Automator block display aliases must remain translatable",
    `export const value = { alias: "Visible block label" };`,
    `export const value = { alias: "표시 블록 문구" };`,
    "src/components/tabs/automator/AutomatorBlocks.vue"
  );
  for (const property of [
    "compOperator", "genericInput1", "genericInput2", "singleSelectionInput", "singleTextInput"
  ]) {
    assertCanonicalDifference(
      `Automator blockify property ${property} must remain structural`,
      `export const value = { ${property}: "player-state" };`,
      `export const value = { ${property}: "플레이어-상태" };`,
      "src/core/automator/automator-commands.js"
    );
  }
  for (const property of ["lint", "mode", "theme"]) {
    assertCanonicalDifference(
      `CodeMirror ${property} identifiers must remain structural`,
      `export const value = { ${property}: "automato" };`,
      `export const value = { ${property}: "자동화" };`,
      "src/components/tabs/automator/AutomatorTextEditor.vue"
    );
  }
  assertCanonicalEquality(
    "Automator editor display messages must remain translatable",
    `export const value = { message: "Visible editor message" };`,
    `export const value = { message: "표시 편집기 메시지" };`,
    "src/components/tabs/automator/AutomatorTextEditor.vue"
  );
  assertCanonicalDifference(
    "Hotkey shortcut key identifiers must remain structural",
    `export const value = { keys: ["shift", "a"], name: "Visible shortcut" };`,
    `export const value = { keys: ["전환", "가"], name: "표시 단축키" };`,
    "src/core/hotkeys.js"
  );
  assertCanonicalEquality(
    "Hotkey shortcut names must remain translatable",
    `export const value = { keys: ["shift", "a"], name: "Visible shortcut" };`,
    `export const value = { keys: ["shift", "a"], name: "표시 단축키" };`,
    "src/core/hotkeys.js"
  );
  assertCanonicalDifference(
    "Steam item IDs must remain structural",
    "const itemId = `${std}STD`;",
    "const itemId = `${std}상품`;",
    "src/steam/steam-purchases.js"
  );
  assertCanonicalDifference(
    "Steam currency codes must remain structural",
    `const currency = "RM";`,
    `const currency = "원";`,
    "src/steam/steam-purchases.js"
  );
  assertCanonicalDifference(
    "Steam provider names must remain structural",
    `const providerName = "Steam";`,
    `const providerName = "스팀";`,
    "src/steam/steam-purchases.js"
  );
  assertCanonicalEquality(
    "Ordinary Steam notifications must remain translatable",
    "GameUI.notify.info(`${count} items purchased`);",
    "GameUI.notify.info(`${count}개 구매함`);",
    "src/steam/steam-purchases.js"
  );
  for (const [file, binding] of [
    ["src/components/GlyphComponent.vue", "blacklist"],
    ["src/components/GlyphComponent.vue", "rarityBorderStyles"],
    ["src/components/GlyphSetPreview.vue", "standardOrder"],
    ["src/components/GlyphSetName.vue", "singleGlyphTypes"],
    ["src/components/modals/GlyphShowcasePanelEntry.vue", "heights"],
    ["src/components/modals/GlyphShowcasePanelModal.vue", "standardOrder"],
    ["src/components/modals/MasteryStringModal.vue", "secretStrings"],
    ["src/components/modals/StudyStringModal.vue", "secretStrings"],
    ["src/components/modals/options/glyph-appearance/GlyphCustomization.vue", "sortedBase"],
    ["src/components/tabs/automator/AutomatorBlockEditor.vue", "propsToCheck"],
    ["src/components/tabs/automator/AutomatorBlocks.vue", "AUTOMATOR_BLOCKS_BLACKLIST"],
    ["src/components/tabs/automator/AutomatorBlocks.vue", "AUTOMATOR_BLOCKS_COMPARISON_CURRENCIES"],
    ["src/components/tabs/automator/AutomatorBlocks.vue", "AUTOMATOR_BLOCKS_COMPARISON_OPERATORS"],
    ["src/components/tabs/automator/AutomatorBlocks.vue", "AUTOMATOR_BLOCKS_RESETS"],
    ["src/components/tabs/glyphs/CurrentGlyphEffects.vue", "glyphEffectsOrder"],
    ["src/components/tabs/glyphs/GlyphLevelsAndWeights.vue", "rows"],
    ["src/components/tabs/statistics/MultiplierBreakdownEntry.vue", "forbiddenEntries"],
    ["src/components/tabs/statistics/MultiplierBreakdownEntry.vue", "nerfBlacklist"],
    ["src/core/automator/automator-backend.js", "LineEnum"],
    ["src/core/automator/automator-codemirror.js", "commentRule"],
    ["src/core/automator/lexer.js", "ignoredPatterns"],
    ["src/core/automator/parser.js", "commandAlts"],
    ["src/core/celestials/pelle/pelle.js", "tabsToIgnore"],
    ["src/core/dilation.js", "DIL_UPG_NAMES"],
    ["src/core/glyph-effects.js", "KNOWN_KEYS"],
    ["src/core/glyphs/auto-glyph-processor.js", "weightKeys"],
    ["src/core/glyphs/glyph-core.js", "generatedTypes"],
    ["src/core/glyphs/glyph-core.js", "orderedEffectList"],
    ["src/core/glyphs/glyph-core.js", "sortOrder"],
    ["src/core/glyphs/glyph-effects.js", "conflictingEffects"],
    ["src/core/glyphs/glyph-effects.js", "cursedEffects"],
    ["src/core/hotkeys.js", "konamiCode"],
    ["src/core/keyboard.js", "modifierKeys"],
    ["src/core/options.js", "secretImports"],
    ["src/core/secret-formula/reality/perks.js", "PERK_FAMILY"],
    ["src/core/secret-formula/celestials/navigation.js", "fillStates"],
    ["src/core/secret-formula/celestials/navigation.js", "riftNames"],
    ["src/core/secret-formula/multiplier-tab/tree.js", "dimTypes"],
    ["src/core/secret-formula/multiplier-tab/tree.js", "dynamicGenProps"],
    ["src/core/secret-formula/multiplier-tab/tree.js", "removedRegexes"],
    ["src/core/secret-formula/multiplier-tab/tree.js", "singleRes"],
    ["src/core/storage/dev-migrations.js", "highestRefinementData"],
    ["src/core/storage/dev-migrations.js", "toDelete"],
    ["src/core/storage/dev-migrations.js", "toMove"],
    ["src/core/storage/migrations.js", "glyphSetProps"],
    ["src/core/storage/migrations.js", "notationMigration"],
    ["src/core/themes.js", "secretThemes"]
  ]) {
    assertCanonicalDifference(
      `The runtime collection ${binding} must remain structural in ${file}`,
      `const ${binding} = ["player-state"];`,
      `const ${binding} = ["플레이어-상태"];`,
      file
    );
    assertCanonicalEquality(
      `The runtime collection ${binding} lock must remain scoped to ${file}`,
      `const ${binding} = ["Visible label"];`,
      `const ${binding} = ["표시 문구"];`
    );
  }
  assertCanonicalDifference(
    "PLURAL_HELPER replacement suffixes must remain structural through the Map constructor",
    `const PLURAL_HELPER = new Map([[/y$/u, "ies"], [/x$/u, "xes"], [/$/u, "s"]]);`,
    `const PLURAL_HELPER = new Map([[/y$/u, "들"], [/x$/u, "개"], [/$/u, "들"]]);`,
    "src/core/format.js"
  );
  assertCanonicalEquality(
    "Glyph autosort button labels must remain translatable",
    `const availableSortModes = ["Alphabetical", "Effect score"];`,
    `const availableSortModes = ["가나다순", "효과 점수순"];`,
    "src/components/tabs/glyphs/sidebar/GlyphAutosortButtonGroup.vue"
  );
  assertCanonicalEquality(
    "Ordinary display arrays must remain translatable next to structural collections",
    `const labels = ["Visible first", "Visible second"];`,
    `const labels = ["표시 첫째", "표시 둘째"];`,
    "src/components/GlyphComponent.vue"
  );
  assertCanonicalDifference(
    "Computed object-key fragments must remain structural",
    `export const value = { ["prefix-" + key]: true };`,
    `export const value = { ["접두사-" + key]: true };`
  );
  assertCanonicalEquality(
    "Dropping an English article while retaining $1 must be allowed",
    `export const value = { lines: ["The $1."] };`,
    `export const value = { lines: ["$1."] };`
  );
  assertCanonicalDifference(
    "Dropping $1 from localized dialogue must fail",
    `export const value = { lines: ["The $1."] };`,
    `export const value = { lines: ["그것."] };`
  );
  assertCanonicalDifference(
    "Changing a structural href inside visible HTML must fail",
    `export const value = { text: "<a href='/old'>Visible</a>" };`,
    `export const value = { text: "<a href='/new'>표시</a>" };`
  );
  assertCanonicalDifference(
    "Changing an HTML entity inside visible text must fail",
    `export const value = { text: "Value &amp; more" };`,
    `export const value = { text: "값 &times; 더보기" };`
  );
  assertCanonicalDifference(
    "Changing punctuation attached to a named placeholder must fail",
    `export const value = { lines: ["Hello, %name?"] };`,
    `export const value = { lines: ["안녕, %name"] };`
  );
  assertCanonicalEquality(
    "Localized string literals may spell source numbers differently",
    `export const value = { lines: ["The 1st layer", "Double gain"] };`,
    `export const value = { lines: ["첫 번째 층", "획득량 2배"] };`
  );
  assertCanonicalEquality(
    "A side-effect message inside a background callback must remain translatable",
    `export const value = { background: () => { notify("Visible notice"); return "teresa"; } };`,
    `export const value = { background: () => { notify("표시 알림"); return "teresa"; } };`
  );
  const allowedBefore = canonicalScript("fixture.js", `export const value = { background: "old-id" };`);
  const allowedAfter = canonicalScript("fixture.js", `export const value = { background: "new-id" };`);
  const exactAllowance = {
    beforeCanonicalSha256: canonicalHash(allowedBefore),
    afterCanonicalSha256: canonicalHash(allowedAfter),
    reason: "self-test",
    removeAfter: "self-test completes"
  };
  if (!allowanceMatches(exactAllowance, allowedBefore, allowedAfter)) {
    throw new Error("An exact canonical allowance must match its approved delta");
  }
  const unapprovedAfter = canonicalScript("fixture.js", `export const value = { background: "other-id" };`);
  if (allowanceMatches(exactAllowance, allowedBefore, unapprovedAfter)) {
    throw new Error("An exact canonical allowance must reject any additional structural mutation");
  }

  assertCanonicalVueEquality(
    "Visible Vue props must remain translatable",
    `<Widget :label="'Visible label'">Visible text</Widget>`,
    `<Widget :label="'표시 라벨'">표시 문구</Widget>`
  );
  assertCanonicalVueEquality(
    "Display component name props must remain translatable",
    `<CostDisplay name="Visible currency" />`,
    `<CostDisplay name="표시 통화" />`
  );
  assertCanonicalVueEquality(
    "Visible Vue text nodes must remain translatable",
    `<button>Visible text</button>`,
    `<button>표시 문구</button>`
  );
  assertCanonicalVueEquality(
    "Visible text around Vue bindings must remain translatable",
    `<button>Visible {{ first }} and {{ second }}</button>`,
    `<button>{{ second }}와 {{ first }} 표시</button>`
  );
  assertCanonicalVueEquality(
    "Visible text may move around child elements for Korean grammar",
    `<div>Before<span />After</div>`,
    `<div>이후<span />이전</div>`
  );
  assertCanonicalVueDifference(
    "Deleting a visible Vue text node must fail",
    `<button>Visible text</button>`,
    `<button></button>`
  );
  assertCanonicalVueDifference(
    "Replacing meaningful Vue text with punctuation must fail",
    `<p>No records</p>`,
    `<p>.</p>`
  );
  assertCanonicalVueDifference(
    "Moving visible Vue text to a different parent must fail",
    `<div>Visible text<span /></div>`,
    `<div><span>표시 문구</span></div>`
  );
  assertCanonicalVueDifference(
    "Deleting visible text next to a non-localized Vue binding must fail",
    `<button>Visible {{ label }}</button>`,
    `<button>{{ label }}</button>`
  );
  assertCanonicalVueDifference(
    "Deleting meaningful text but retaining punctuation and a binding must fail",
    `<p>No records for {{ index }}.</p>`,
    `<p>{{ index }}.</p>`
  );
  assertCanonicalVueEquality(
    "Visible text may move out of a localized formatting call",
    `<span>{{ quantify("Memory", count) }}</span>`,
    `<span>기억: {{ quantify("개", count) }}</span>`
  );
  assertCanonicalVueEquality(
    "A visible noun may move into a localized formatting call",
    `<span>Divine {{ pluralize("Star", count) }}</span>`,
    `<span>{{ pluralize("신성 별", count) }}</span>`
  );
  assertCanonicalVueEquality(
    "Formatting-only whitespace between Vue elements must not be structural",
    `<div><span>First</span><span>Second</span></div>`,
    `<div>\n  <span>첫째</span>\n  <span>둘째</span>\n</div>`
  );
  assertCanonicalVueEquality(
    "Vue attribute order must not be structural",
    `<Widget class="fixed" :label="'Visible'" :value="amount" />`,
    `<Widget :value="amount" :label="'표시'" class="fixed" />`
  );
  assertCanonicalVueEquality(
    "Static class whitespace must not be structural",
    `<div class="first second" />`,
    `<div class="  first second  " />`
  );
  assertCanonicalVueEquality(
    "Literal v-tooltip text must remain translatable",
    `<button v-tooltip="'Visible tooltip'" />`,
    `<button v-tooltip="'표시 툴팁'" />`
  );
  assertCanonicalVueEquality(
    "Conditional v-tooltip text must remain translatable",
    `<button v-tooltip="ready ? 'Visible tooltip' : 'Unavailable tooltip'" />`,
    `<button v-tooltip="ready ? '표시 툴팁' : '사용 불가 툴팁'" />`
  );
  assertCanonicalVueDifference(
    "v-tooltip conditions must remain structural",
    `<button v-tooltip="ready ? 'Visible tooltip' : 'Unavailable tooltip'" />`,
    `<button v-tooltip="unlocked ? 'Visible tooltip' : 'Unavailable tooltip'" />`
  );
  assertCanonicalVueDifference(
    "v-tooltip arguments and modifiers must remain structural",
    `<button v-tooltip:top.bottom="'Visible tooltip'" />`,
    `<button v-tooltip:left.bottom="'Visible tooltip'" />`
  );
  for (const [message, before, after] of [
    ["Static classes must remain structural", `<div class="old-class" />`, `<div class="new-class" />`],
    ["Dynamic classes must remain structural", `<div :class="oldClass" />`, `<div :class="newClass" />`],
    ["Static styles must remain structural", `<div style="color: red" />`, `<div style="color: blue" />`],
    ["Dynamic styles must remain structural", `<div :style="oldStyle" />`, `<div :style="newStyle" />`],
    ["Vue keys must remain structural", `<Widget :key="oldKey" />`, `<Widget :key="newKey" />`],
    ["Vue refs must remain structural", `<Widget ref="oldRef" />`, `<Widget ref="newRef" />`],
    ["Native form names must remain structural",
      `<form><input name="player-state"></form>`, `<form><input name="플레이어-상태"></form>`],
    ["Slot names must remain structural", `<Widget slot="oldSlot" />`, `<Widget slot="newSlot" />`],
    ["Named slot outlets must remain structural",
      `<div><slot name="oldSlot" /></div>`, `<div><slot name="newSlot" /></div>`],
    ["Dynamic components must remain structural", `<component :is="oldType" />`, `<component :is="newType" />`],
    ["v-once must remain structural", `<div />`, `<div v-once />`],
    ["Event payload names must remain structural",
      `<button @click="$emit('start')" />`, `<button @click="$emit('시작')" />`],
    ["Indirect template sentinels must remain structural",
      `<div v-if="['END'].includes(input)" />`, `<div v-if="['끝'].includes(input)" />`]
  ]) {
    assertCanonicalVueDifference(message, before, after);
  }
  if (canonicalVue("fixture.vue", `<style>.value { color: red; }</style>`) ===
    canonicalVue("fixture.vue", `<style>.value { color: blue; }</style>`)) {
    throw new Error("Vue style contents must remain structural");
  }
  if (canonicalVue("fixture.vue", `<style>.value { color: red; }</style>`) ===
    canonicalVue("fixture.vue", `<style scoped>.value { color: red; }</style>`)) {
    throw new Error("Vue style block attributes must remain structural");
  }
  process.stdout.write("localization structure regression passed\n");
}

function showHelp() {
  process.stdout.write(`Usage: node scripts/check-localization-structure.cjs [options]\n\n` +
    `  (default)          compare index to worktree\n` +
    `  --cached           compare HEAD to index\n` +
    `  --base=<ref>       compare merge-base(ref, HEAD) to HEAD\n` +
    `  --path=<path>      restrict to a repository-relative src path (repeatable)\n` +
    `  --details          show canonical mismatch excerpts\n` +
    `  --self-test        run canonicalization regression fixtures\n`);
}

function main(argv = process.argv.slice(2)) {
  const options = parseArguments(argv, { allowSelfTest: true });
  if (options.help) {
    showHelp();
    return;
  }
  if (options.selfTest) {
    runSelfTest();
    return;
  }

  // The wrapper forwards shared --path filters to both checkers. Non-src paths are valid for the
  // encoding checker and naturally select zero structure files here.
  const context = createContext(defaultRoot, options, ["src", "public", "localization"]);
  context.assertRequestedPathsMatch(["src", "public", "localization"]);
  context.assertBaseModeClean(["src"]);
  const exceptions = JSON.parse(context.readAfterPath("localization/ko-KR/check-exceptions.json"));
  validateExceptionConfig(exceptions);
  const activeAllowances = exceptions.activeStructureAllowances ?? {};
  const historicalCount = Object.keys(exceptions.historicalStructureDiff ?? {}).length;
  validateActiveAllowances(activeAllowances);
  for (const file of Object.keys(activeAllowances)) {
    if (!file.startsWith("src/") || (!file.endsWith(".js") && !file.endsWith(".vue"))) {
      throw new Error(`Active structure allowance must target a JavaScript or Vue file: ${file}`);
    }
    context.readAfterPath(file);
  }

  const changes = context.listChanges(["src"])
    .filter(change => [change.oldPath, change.newPath]
      .filter(Boolean)
      .some(file => file.endsWith(".js") || file.endsWith(".vue")));
  const failures = [];
  const usedAllowances = new Set();
  let checkedCount = 0;
  let topologyCount = 0;

  for (const change of changes) {
    const displayPath = change.newPath ?? change.oldPath;
    if (change.status !== "M" || !change.oldPath || !change.newPath || change.oldPath !== change.newPath) {
      topologyCount++;
      failures.push(`${change.statusToken} ${change.oldPath ?? "(none)"} -> ${change.newPath ?? "(none)"} ` +
        `(added, deleted, renamed, copied, and type-changed code files require explicit review)`);
      continue;
    }

    checkedCount++;
    try {
      const before = context.readBefore(change);
      const after = context.readAfter(change);
      const canonicalize = displayPath.endsWith(".vue") ? canonicalVue : canonicalScript;
      const beforeCanonical = canonicalize(displayPath, before);
      const afterCanonical = canonicalize(displayPath, after);
      if (beforeCanonical === afterCanonical) continue;

      const allowance = activeAllowances[displayPath];
      if (allowanceMatches(allowance, beforeCanonical, afterCanonical)) {
        usedAllowances.add(displayPath);
        continue;
      }

      if (options.details) {
        let index = 0;
        const limit = Math.min(beforeCanonical.length, afterCanonical.length);
        while (index < limit && beforeCanonical[index] === afterCanonical[index]) index++;
        const start = Math.max(0, index - 120);
        const end = index + 240;
        failures.push(`${displayPath}\n  before: ${beforeCanonical.slice(start, end)}\n  after:  ${afterCanonical.slice(start, end)}`);
      } else {
        failures.push(displayPath);
      }
    } catch (error) {
      failures.push(`${displayPath} (${error.message})`);
    }
  }

  console.log(`[localization-structure] ${context.summary()}`);
  console.log(`[localization-structure] checked=${checkedCount} topology=${topologyCount} ` +
    `allowed=${usedAllowances.size} active=${Object.keys(activeAllowances).length} historical=${historicalCount}`);
  if (failures.length > 0) {
    console.error("Localization changed code/template structure or introduced an unreviewed file topology change:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = error instanceof UsageError ? error.exitCode : 1;
  }
}

module.exports = {
  allowanceMatches,
  canonicalHash,
  canonicalScript,
  canonicalVue,
  isStructuralLiteral,
  main,
  runSelfTest
};
