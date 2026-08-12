import { standardizeAutomatorValues, tokenMap as T } from "./lexer";

/**
 * Note: the $ shorthand for the parser object is required by Chevrotain. Don't mess with it.
 */

const presetSplitter = /name[ \t]+(.+$)/ui;
const idSplitter = /id[ \t]+(\d)/ui;

function prestigeNotify(flag) {
  if (!AutomatorBackend.isOn) return;
  const state = AutomatorBackend.stack.top.commandState;
  if (state && state.prestigeLevel !== undefined) {
    state.prestigeLevel = Math.max(state.prestigeLevel, flag);
  }
}

EventHub.logic.on(GAME_EVENT.BIG_CRUNCH_AFTER, () => prestigeNotify(T.Infinity.$prestigeLevel));
EventHub.logic.on(GAME_EVENT.ETERNITY_RESET_AFTER, () => prestigeNotify(T.Eternity.$prestigeLevel));
EventHub.logic.on(GAME_EVENT.REALITY_RESET_AFTER, () => prestigeNotify(T.Reality.$prestigeLevel));
EventHub.logic.on(GAME_EVENT.DOOM_REALITY_AFTER, () => prestigeNotify(T.Doom.$prestigeLevel));
EventHub.logic.on(GAME_EVENT.ARMAGEDDON_AFTER, () => prestigeNotify(T.Armageddon.$prestigeLevel));
EventHub.logic.on(GAME_EVENT.ENDGAME_RESET_AFTER, () => prestigeNotify(T.Endgame.$prestigeLevel));

// Used by while and until - in order to get the text corrext, we need to invert the boolean if it's an until
// eslint-disable-next-line max-params
function compileConditionLoop(evalComparison, commands, ctx, isUntil) {
  return {
    run: () => {
      const loopStr = isUntil ? "UNTIL" : "WHILE";
      if (!evalComparison()) {
        AutomatorData.logCommandEvent(`${parseConditionalIntoText(ctx)} 확인 (${isUntil}),
          ${AutomatorBackend.translateLineNumber(ctx.RCurly[0].startLine + 1) - 1}번째 줄에서 반복문 종료
          (${loopStr} 반복문 끝)`, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_NEXT_INSTRUCTION;
      }
      AutomatorBackend.push(commands);
      AutomatorData.logCommandEvent(`${parseConditionalIntoText(ctx)} 확인 (${!isUntil}),
        ${AutomatorBackend.translateLineNumber(ctx.LCurly[0].startLine + 1) - 1}번째 줄로 이동
        (${loopStr} 반복문 시작)`, ctx.startLine);
      return AUTOMATOR_COMMAND_STATUS.SAME_INSTRUCTION;
    },
    blockCommands: commands,
  };
}

// Extracts the conditional out of a command and returns it as text
function parseConditionalIntoText(ctx) {
  const comp = ctx.comparison[0].children;
  const getters = comp.compareValue.map(cv => {
    if (cv.children.AutomatorCurrency) return () => cv.children.AutomatorCurrency[0].image;
    const val = cv.children.$value;
    if (typeof val === "string") return () => val;
    return () => format(val, 2, 2);
  });
  const compareFn = comp.ComparisonOperator[0].image;
  return `${getters[0]()} ${compareFn} ${getters[1]()}`;
}

// Determines how much (prestige currency) the previous (layer) reset gave, for event logging
function findLastPrestigeRecord(layer) {
  let addedECs, gainedEP;
  switch (layer) {
    case "INFINITY":
      return `${format(player.records.recentInfinities[0][1], 2)} IP`;
    case "ETERNITY":
      addedECs = AutomatorData.lastECCompletionCount;
      gainedEP = `${format(player.records.recentEternities[0][1], 2)} EP`;
      return addedECs === 0
        ? `${gainedEP}`
        : `${gainedEP}, 완료 ${addedECs}회`;
    case "REALITY":
      return `${format(player.records.recentRealities[0][1], 2)} RM`;
    case "DOOM":
      return `현실 파멸은 재화를 지급하지 않음`;
    case "ARMAGEDDON":
      return `아마겟돈 재화 기록은 아직 지원하지 않음`;
    case "ENDGAME":
      return `${format(player.records.recentEndgames[0][1], 2)} CP`;
    default:
      throw Error(`Unrecognized prestige ${layer} in Automator event log`);
  }
}

export const AutomatorCommands = [
  {
    id: "auto",
    rule: $ => () => {
      $.CONSUME(T.Auto);
      $.CONSUME(T.PrestigeEvent);
      $.OR([
        { ALT: () => $.CONSUME(T.On) },
        { ALT: () => $.CONSUME(T.Off) },
        { ALT: () => $.OR1([
          { ALT: () => $.SUBRULE($.duration) },
          { ALT: () => $.SUBRULE($.xHighest) },
          { ALT: () => $.SUBRULE($.currencyAmount) },
        ]) },
      ]);
    },
    // eslint-disable-next-line complexity
    validate: (ctx, V) => {
      ctx.startLine = ctx.Auto[0].startLine;
      if (ctx.PrestigeEvent && ctx.currencyAmount) {
        const desired$ = ctx.PrestigeEvent[0].tokenType.$prestigeCurrency;
        const specified$ = ctx.currencyAmount[0].children.AutomatorCurrency[0].tokenType.name;
        if (desired$ !== specified$) {
          V.addError(ctx.currencyAmount, `오토메이터 재화가 프레스티지와 일치하지 않습니다 (${desired$} vs ${specified$})`,
            `지정한 프레스티지 재화에는 ${desired$} 값을 사용하세요`);
          return false;
        }
      }

      if (!ctx.PrestigeEvent) return true;
      const advSetting = ctx.duration || ctx.xHighest;
      // Do not change to switch statement; T.XXX are Objects, not primitive values
      if (ctx.PrestigeEvent[0].tokenType === T.Infinity) {
        if (!Autobuyer.bigCrunch.isUnlocked) {
          V.addError(ctx.PrestigeEvent, "무한 자동구매기가 해금되지 않았습니다",
            "이 명령을 사용하려면 빅 크런치 자동구매기 도전을 완료하세요");
          return false;
        }
        if (advSetting && !EternityMilestone.bigCrunchModes.isReached) {
          V.addError((ctx.duration || ctx.xHighest)[0],
            "고급 무한 자동구매기 설정이 해금되지 않았습니다",
            `이 명령을 사용하려면 영원 횟수 ${quantifyInt("회", EternityMilestone.bigCrunchModes.config.eternities)}에 도달하세요`);
          return false;
        }
      }
      if (ctx.PrestigeEvent[0].tokenType === T.Eternity) {
        if (!EternityMilestone.autobuyerEternity.isReached) {
          V.addError(ctx.PrestigeEvent, "영원 자동구매기가 해금되지 않았습니다",
            `이 명령을 사용하려면 영원 횟수 ${quantifyInt("회", EternityMilestone.autobuyerEternity.config.eternities)}에 도달하세요`);
          return false;
        }
        if (advSetting && !RealityUpgrade(13).isBought) {
          V.addError((ctx.duration || ctx.xHighest)[0],
            "고급 영원 자동구매기 설정이 해금되지 않았습니다",
            "고급 영원 자동구매기 설정을 해금하는 현실 업그레이드를 구매하세요");
          return false;
        }
      }
      if (ctx.PrestigeEvent[0].tokenType === T.Reality) {
        if (!RealityUpgrade(25).isBought) {
          V.addError(ctx.PrestigeEvent, "현실 자동구매기가 해금되지 않았습니다",
            "현실 자동구매기를 해금하는 현실 업그레이드를 구매하세요");
          return false;
        }
        if (advSetting) {
          V.addError((ctx.duration || ctx.xHighest)[0],
            "자동 현실에는 기간이나 x highest를 설정할 수 없습니다",
            "자동 현실에는 RM을 사용하세요");
          return false;
        }
      }
      if (ctx.PrestigeEvent[0].tokenType === T.Endgame) {
        if (!EndgameMilestone.autobuyerEndgame.isReached) {
          V.addError(ctx.PrestigeEvent, "엔드게임 자동구매기가 해금되지 않았습니다",
            "엔드게임 자동구매기를 해금하는 엔드게임 마일스톤에 도달하세요");
          return false;
        }
        if (advSetting) {
          V.addError((ctx.duration || ctx.xHighest)[0],
            "자동 엔드게임에는 기간이나 x highest를 설정할 수 없습니다",
            "자동 엔드게임에는 CP를 사용하세요");
          return false;
        }
      }

      return true;
    },
    compile: ctx => {
      const isReality = ctx.PrestigeEvent[0].tokenType === T.Reality;
      const on = Boolean(ctx.On || ctx.duration || ctx.xHighest || ctx.currencyAmount);
      const duration = ctx.duration ? ctx.duration[0].children.$value : undefined;
      const xHighest = ctx.xHighest ? ctx.xHighest[0].children.$value : undefined;
      const fixedAmount = ctx.currencyAmount ? ctx.currencyAmount[0].children.$value : undefined;
      const durationMode = ctx.PrestigeEvent[0].tokenType.$autobuyerDurationMode;
      const xHighestMode = ctx.PrestigeEvent[0].tokenType.$autobuyerXHighestMode;
      const fixedMode = ctx.PrestigeEvent[0].tokenType.$autobuyerCurrencyMode;
      const autobuyer = ctx.PrestigeEvent[0].tokenType.$autobuyer();
      return () => {
        autobuyer.isActive = on;
        let currSetting = "";
        if (duration !== undefined) {
          autobuyer.mode = durationMode;
          autobuyer.time = duration / 1000;
          // Can't do the units provided in the script because it's been parsed away like 4 layers up the call stack
          currSetting = `${autobuyer.time > 1000 ? formatInt(autobuyer.time) : quantify("초", autobuyer.time)}`;
        } else if (xHighest !== undefined) {
          autobuyer.mode = xHighestMode;
          autobuyer.xHighest = new Decimal(xHighest);
          currSetting = `최고 기록의 ${format(xHighest, 2, 2)}배`;
        } else if (fixedAmount !== undefined) {
          autobuyer.mode = fixedMode;
          if (isReality) {
            autobuyer.rm = new Decimal(fixedAmount);
            currSetting = `${format(autobuyer.rm, 2)} RM`;
          } else {
            autobuyer.amount = new Decimal(fixedAmount);
            currSetting = `${fixedAmount} ${ctx.PrestigeEvent[0].image === "infinity" ? "IP" : "EP"}`;
          }
        }
        // Settings are drawn from the actual automator text; it's not feasible to parse out all the settings
        // for every combination of autobuyers when they get turned off
        const settingString = (autobuyer.isActive && currSetting !== "") ? `(설정: ${currSetting})` : "";
        AutomatorData.logCommandEvent(`자동 ${ctx.PrestigeEvent[0].image}
          ${autobuyer.isActive ? "ON" : "OFF"} ${settingString}`, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => {
      const duration = ctx.duration
        ? `${ctx.duration[0].children.NumberLiteral[0].image} ${ctx.duration[0].children.TimeUnit[0].image}`
        : undefined;
      const xHighest = ctx.xHighest ? ctx.xHighest[0].children.$value : undefined;
      const fixedAmount = ctx.currencyAmount
        ? `${ctx.currencyAmount[0].children.NumberLiteral[0].image}` +
          ` ${ctx.currencyAmount[0].children.AutomatorCurrency[0].image.toUpperCase()}`
        : undefined;
      const on = Boolean(ctx.On);
      let input = "";

      if (duration) input = duration;
      else if (xHighest) input = `${xHighest} x highest`;
      else if (fixedAmount) input = `${fixedAmount}`;
      else input = (on ? "ON" : "OFF");

      return {
        singleSelectionInput: ctx.PrestigeEvent[0].tokenType.name.toUpperCase(),
        singleTextInput: input,
        ...automatorBlocksMap.AUTO
      };
    }
  },
  {
    id: "blackHole",
    rule: $ => () => {
      $.CONSUME(T.BlackHole);
      $.OR([
        { ALT: () => $.CONSUME(T.On) },
        { ALT: () => $.CONSUME(T.Off) },
      ]);
    },
    validate: ctx => {
      ctx.startLine = ctx.BlackHole[0].startLine;
      return true;
    },
    compile: ctx => {
      const on = Boolean(ctx.On);
      return () => {
        if (on === BlackHoles.arePaused) BlackHoles.togglePause();
        let blackHoleEvent;
        if (BlackHole(1).isUnlocked) {
          blackHoleEvent = `블랙홀 상태 전환: ${ctx.On ? "ON" : "OFF"}`;
        } else if (Enslaved.isRunning || Pelle.isDisabled("blackhole")) {
          blackHoleEvent = "현재 현실에서 BH가 비활성화되어 BLACK HOLE 명령을 무시함";
        } else {
          blackHoleEvent = "BH가 해금되지 않아 BLACK HOLE 명령을 무시함";
        }
        AutomatorData.logCommandEvent(blackHoleEvent, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleSelectionInput: ctx.On ? "ON" : "OFF",
      ...automatorBlocksMap["BLACK HOLE"]
    })
  },
  {
    id: "blob",
    rule: $ => () => {
      $.CONSUME(T.Blob);
    },
    validate: ctx => {
      ctx.startLine = ctx.Blob[0].startLine;
      return true;
    },
    // This is an easter egg, it shouldn't do anything
    compile: () => () => AUTOMATOR_COMMAND_STATUS.SKIP_INSTRUCTION,
    blockify: () => ({
      ...automatorBlocksMap.BLOB,
    })
  },
  {
    id: "comment",
    rule: $ => () => {
      $.CONSUME(T.Comment);
    },
    validate: ctx => {
      ctx.startLine = ctx.Comment[0].startLine;
      return true;
    },
    // Comments should be no-ops
    compile: () => () => AUTOMATOR_COMMAND_STATUS.SKIP_INSTRUCTION,
    blockify: ctx => ({
      ...automatorBlocksMap.COMMENT,
      singleTextInput: ctx.Comment[0].image.replace(/(#|\/\/)\s?/u, ""),
    })
  },
  {
    id: "ifBlock",
    rule: $ => () => {
      $.CONSUME(T.If);
      $.SUBRULE($.comparison);
      $.CONSUME(T.LCurly);
      $.CONSUME(T.EOL);
      $.SUBRULE($.block);
      $.CONSUME(T.RCurly);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.If[0].startLine;
      return V.checkBlock(ctx, ctx.If);
    },
    compile: (ctx, C) => {
      const evalComparison = C.visit(ctx.comparison);
      const commands = C.visit(ctx.block);
      return {
        run: S => {
          // If the commandState is empty, it means we haven't evaluated the if yet
          if (S.commandState !== null) return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
          // We use this flag to make "single step" advance to the next command after the if when the block ends
          S.commandState = {
            advanceOnPop: true,
            ifEndLine: ctx.RCurly[0].startLine
          };
          if (!evalComparison()) {
            AutomatorData.logCommandEvent(`${parseConditionalIntoText(ctx)} 확인 (false),
              ${AutomatorBackend.translateLineNumber(ctx.RCurly[0].startLine + 1)}번째 줄로 건너뜀`, ctx.startLine);
            return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
          }
          AutomatorBackend.push(commands);
          AutomatorData.logCommandEvent(`${parseConditionalIntoText(ctx)} 확인 (true),
            IF 블록 진입`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.SAME_INSTRUCTION;
        },
        blockCommands: commands,
      };
    },
    blockify: (ctx, B) => {
      const commands = [];
      B.visit(ctx.block, commands);
      const comparison = B.visit(ctx.comparison);
      return {
        nest: commands,
        ...automatorBlocksMap.IF,
        ...comparison,
        genericInput1: standardizeAutomatorValues(comparison.genericInput1),
        genericInput2: standardizeAutomatorValues(comparison.genericInput2)
      };
    }
  },
  {
    id: "notify",
    rule: $ => () => {
      $.CONSUME(T.Notify);
      $.OR([
        { ALT: () => $.CONSUME(T.StringLiteral) },
        { ALT: () => $.CONSUME(T.StringLiteralSingleQuote) },
      ]);
    },
    validate: ctx => {
      ctx.startLine = ctx.Notify[0].startLine;
      return true;
    },
    compile: ctx => {
      const notifyText = ctx.StringLiteral || ctx.StringLiteralSingleQuote;
      return () => {
        GameUI.notify.automator(`오토메이터: ${notifyText[0].image}`);
        AutomatorData.logCommandEvent(`NOTIFY 호출: ${notifyText[0].image}`, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      ...automatorBlocksMap.NOTIFY,
      singleTextInput: (ctx.StringLiteral || ctx.StringLiteralSingleQuote)[0].image,
    })
  },
  {
    // Note: this has to appear before pause
    id: "pauseTime",
    rule: $ => () => {
      $.CONSUME(T.Pause);
      $.OR([
        { ALT: () => $.SUBRULE($.duration) },
        { ALT: () => $.CONSUME(T.Identifier) },
      ]);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.Pause[0].startLine;
      let duration;
      if (ctx.Identifier) {
        if (!V.isValidVarFormat(ctx.Identifier[0], AUTOMATOR_VAR_TYPES.DURATION)) {
          V.addError(ctx, `상수 ${ctx.Identifier[0].image}: 올바른 시간 기간 상수가 아닙니다`,
            `상수 값을 확인하세요: ${ctx.Identifier[0].image}. 값은 ${format(Number.MAX_VALUE / 1000)}보다 작은 초 단위 숫자여야 합니다`);
          return false;
        }
        const lookup = V.lookupVar(ctx.Identifier[0], AUTOMATOR_VAR_TYPES.DURATION);
        duration = lookup ? lookup.value : lookup;
      } else {
        duration = V.visit(ctx.duration);
      }
      ctx.$duration = duration;
      return ctx.$duration !== undefined;
    },
    compile: ctx => {
      const duration = ctx.$duration;
      return S => {
        let timeString;
        if (ctx.duration) {
          const c = ctx.duration[0].children;
          timeString = `${c.NumberLiteral[0].image} ${c.TimeUnit[0].image}`;
        } else {
          // This is the case for a defined constant; its value was parsed out during validation
          timeString = TimeSpan.fromMilliseconds(new Decimal(duration));
        }
        if (S.commandState === null) {
          S.commandState = { timeMs: 0 };
          AutomatorData.logCommandEvent(`일시 정지 시작 (${timeString} 대기)`, ctx.startLine);
        } else {
          S.commandState.timeMs += Math.max(Time.unscaledDeltaTime.totalMilliseconds.toNumber(), AutomatorBackend.currentInterval);
        }
        const finishPause = S.commandState.timeMs >= duration;
        if (finishPause) {
          AutomatorData.logCommandEvent(`일시 정지 종료 (${timeString} 대기함)`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => {
      let blockArg;
      if (ctx.duration) {
        const c = ctx.duration[0].children;
        blockArg = `${c.NumberLiteral[0].image} ${c.TimeUnit[0].image}`;
      } else {
        blockArg = `${ctx.Identifier[0].image}`;
      }
      return {
        ...automatorBlocksMap.PAUSE,
        singleTextInput: blockArg
      };
    }
  },
  {
    id: "prestige",
    rule: $ => () => {
      $.CONSUME(T.PrestigeEvent);
      $.OPTION(() => $.CONSUME(T.Nowait));
      $.OPTION1(() => $.CONSUME(T.Respec));
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.PrestigeEvent[0].startLine;

      if (ctx.PrestigeEvent && ctx.PrestigeEvent[0].tokenType === T.Eternity &&
        !EternityMilestone.autobuyerEternity.isReached) {
        V.addError(ctx.PrestigeEvent, "영원 자동구매기가 해금되지 않았습니다",
          `이 명령을 사용하려면 영원 횟수 ${quantifyInt("회", EternityMilestone.autobuyerEternity.config.eternities)}에 도달하세요`);
        return false;
      }

      if (ctx.PrestigeEvent && ctx.PrestigeEvent[0].tokenType === T.Reality && !RealityUpgrade(25).isBought) {
        V.addError(ctx.PrestigeEvent, "현실 자동구매기가 해금되지 않았습니다",
          "현실 자동구매기를 해금하는 현실 업그레이드를 구매하세요");
        return false;
      }

      if (ctx.PrestigeEvent && ctx.PrestigeEvent[0].tokenType === T.Infinity && ctx.Respec) {
        V.addError(ctx.Respec, "infinity에는 'respec'이 없습니다",
          "명령에서 'respec'을 제거하세요");
      }
      return true;
    },
    compile: ctx => {
      const nowait = ctx.Nowait !== undefined;
      const respec = ctx.Respec !== undefined;
      const prestigeToken = ctx.PrestigeEvent[0].tokenType;
      return () => {
        const available = prestigeToken.$prestigeAvailable();
        if (!available) {
          if (!nowait) return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
          AutomatorData.logCommandEvent(`${ctx.PrestigeEvent.image} 시도 실패, NOWAIT로 건너뜀`,
            ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        if (respec) prestigeToken.$respec();
        prestigeToken.$prestige();
        const prestigeName = ctx.PrestigeEvent[0].image.toUpperCase();
        AutomatorData.logCommandEvent(`${prestigeName} 실행 (${findLastPrestigeRecord(prestigeName)})`,
          ctx.startLine);
        // In the prestigeToken.$prestige() line above, performing a reality reset has code internal to the call
        // which makes the automator restart. However, in that case we also need to update the execution state here,
        // or else the restarted automator will immediately advance lines and always skip the first command
        return (prestigeName === "REALITY" && AutomatorBackend.state.forceRestart)
          ? AUTOMATOR_COMMAND_STATUS.RESTART
          : AUTOMATOR_COMMAND_STATUS.NEXT_TICK_NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      ...automatorBlocksMap[
        ctx.PrestigeEvent[0].tokenType.name.toUpperCase()
      ],
      nowait: ctx.Nowait !== undefined,
      respec: ctx.Respec !== undefined
    })
  },
  {
    id: "startDilation",
    rule: $ => () => {
      $.CONSUME(T.Start);
      $.CONSUME(T.Dilation);
    },
    validate: ctx => {
      ctx.startLine = ctx.Start[0].startLine;
      return true;
    },
    compile: ctx => () => {
      if (player.dilation.active) {
        AutomatorData.logCommandEvent(`이미 시간 팽창 중이므로 START DILATION을 무시함`,
          ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      }
      if (startDilatedEternity(true)) {
        AutomatorData.logCommandEvent(`시간 팽창 진입`, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_NEXT_INSTRUCTION;
      }
      return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
    },
    blockify: () => ({ singleSelectionInput: "DILATION", ...automatorBlocksMap.START })
  },
  {
    id: "startEC",
    rule: $ => () => {
      $.CONSUME(T.Start);
      $.SUBRULE($.eternityChallenge);
    },
    validate: ctx => {
      ctx.startLine = ctx.Start[0].startLine;
      return true;
    },
    compile: ctx => {
      const ecNumber = ctx.eternityChallenge[0].children.$ecNumber;
      return () => {
        const ec = EternityChallenge(ecNumber);
        if (ec.isRunning) {
          AutomatorData.logCommandEvent(`이미 지정한 EC를 진행 중이므로 START EC를 무시함`,
            ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        if (!EternityChallenge(ecNumber).isUnlocked) {
          if (!TimeStudy.eternityChallenge(ecNumber).purchase(true)) {
            return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
          }
        }
        if (ec.start(true)) {
          AutomatorData.logCommandEvent(`영원 도전 ${ecNumber} 시작`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_NEXT_INSTRUCTION;
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleSelectionInput: "EC",
      singleTextInput: ctx.eternityChallenge[0].children.$ecNumber,
      ...automatorBlocksMap.START
    })
  },
  {
    id: "storeGameTime",
    rule: $ => () => {
      $.CONSUME(T.StoreGameTime);
      $.OR([
        { ALT: () => $.CONSUME(T.On) },
        { ALT: () => $.CONSUME(T.Off) },
        { ALT: () => $.CONSUME(T.Use) },
      ]);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.StoreGameTime[0].startLine;
      if (!Enslaved.isUnlocked) {
        V.addError(ctx.StoreGameTime[0], "아직 게임 시간을 저장할 수 없습니다",
          "게임 시간 저장 기능을 해금하세요");
        return false;
      }
      return true;
    },
    compile: ctx => {
      if (ctx.Use) return () => {
        if (Enslaved.isUnlocked) {
          Enslaved.useStoredTime(false);
          AutomatorData.logCommandEvent(`저장한 게임 시간 사용`, ctx.startLine);
        } else {
          AutomatorData.logCommandEvent(`저장한 게임 시간 사용 실패 (아직 해금되지 않음)`,
            ctx.startLine);
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
      const on = Boolean(ctx.On);
      return () => {
        if (on !== player.celestials.enslaved.isStoring) Enslaved.toggleStoreBlackHole();
        AutomatorData.logCommandEvent(`게임 시간 저장 상태 전환: ${ctx.On ? "ON" : "OFF"}`, ctx.startLine);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      // eslint-disable-next-line no-nested-ternary
      singleSelectionInput: ctx.Use ? "USE" : (ctx.On ? "ON" : "OFF"),
      ...automatorBlocksMap["STORE GAME TIME"]
    })
  },
  {
    id: "studiesBuy",
    rule: $ => () => {
      $.CONSUME(T.Studies);
      $.OPTION(() => $.CONSUME(T.Nowait));
      $.CONSUME(T.Purchase);
      $.OR([
        { ALT: () => $.SUBRULE($.studyList) },
        { ALT: () => $.CONSUME1(T.Identifier) },
      ]);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.Studies[0].startLine;
      if (ctx.Identifier) {
        if (!V.isValidVarFormat(ctx.Identifier[0], AUTOMATOR_VAR_TYPES.STUDIES)) {
          V.addError(ctx, `상수 ${ctx.Identifier[0].image}: 올바른 시간 연구 상수가 아닙니다`,
            `올바른 형식의 시간 연구 문자열인지 상수 값을 확인하세요: ${ctx.Identifier[0].image}`);
          return false;
        }
        const varInfo = V.lookupVar(ctx.Identifier[0], AUTOMATOR_VAR_TYPES.STUDIES);
        ctx.$studies = varInfo.value;
        ctx.$studies.image = ctx.Identifier[0].image;
      } else if (ctx.studyList) {
        ctx.$studies = V.visit(ctx.studyList);
      }
      return true;
    },
    compile: ctx => {
      const studies = ctx.$studies;
      if (ctx.Nowait === undefined) return () => {
        let prePurchasedStudies = 0;
        let purchasedStudies = 0;
        let finalPurchasedTS;
        for (const tsNumber of studies.normal) {
          if (TimeStudy(tsNumber).isBought) prePurchasedStudies++;
          else if (TimeStudy(tsNumber).purchase(true)) purchasedStudies++;
          else finalPurchasedTS = finalPurchasedTS ?? tsNumber;
        }
        if (prePurchasedStudies + purchasedStudies < studies.normal.length) {
          if (prePurchasedStudies + purchasedStudies === 0) {
            AutomatorData.logCommandEvent(`지정한 시간 연구를 하나도 구매하지 못함`, ctx.startLine);
          }
          if (purchasedStudies > 0 && finalPurchasedTS) {
            AutomatorData.logCommandEvent(`시간 연구 ${quantifyInt("개", purchasedStudies)}를 구매하고
            시간 연구 ${finalPurchasedTS}에서 멈춤, 더 구매할 수 있을 때까지 대기`, ctx.startLine);
          }
          return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
        }
        const hasEC = studies.ec ? TimeStudy.eternityChallenge(studies.ec).isBought : false;
        if (!studies.ec || (hasEC && !studies.startEC)) {
          AutomatorData.logCommandEvent(`지정한 시간 연구를 모두 구매함`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        const unlockedEC = TimeStudy.eternityChallenge(studies.ec).purchase(true);
        if (hasEC || unlockedEC) {
          if (studies.startEC) {
            EternityChallenge(studies.ec).start(true);
            if (EternityChallenge(studies.ec).isRunning) {
              AutomatorData.logCommandEvent(`지정한 시간 연구를 모두 구매한 뒤 영원 도전 ${studies.ec} 해금 및 시작 완료`,
                ctx.startLine);
            } else {
              AutomatorData.logCommandEvent(`지정한 시간 연구를 모두 구매하고 영원 도전 ${studies.ec} 해금 완료, 시작 실패`,
                ctx.startLine);
            }
          } else {
            AutomatorData.logCommandEvent(`지정한 시간 연구를 모두 구매하고 영원 도전 ${studies.ec} 해금 완료`,
              ctx.startLine);
          }
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
      return () => {
        for (const tsNumber of studies.normal) TimeStudy(tsNumber).purchase(true);
        if (!studies.ec || TimeStudy.eternityChallenge(studies.ec).isBought) {
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        TimeStudy.eternityChallenge(studies.ec).purchase(true);
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleTextInput: ctx.$studies.image,
      nowait: ctx.Nowait !== undefined,
      ...automatorBlocksMap["STUDIES PURCHASE"]
    })
  },
  {
    id: "studiesLoad",
    rule: $ => () => {
      $.CONSUME(T.Studies);
      $.OPTION(() => $.CONSUME(T.Nowait));
      $.CONSUME(T.Load);
      $.OR([
        { ALT: () => $.CONSUME1(T.Id) },
        { ALT: () => $.CONSUME1(T.Name) },
      ]);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.Studies[0].startLine;

      if (ctx.Id) {
        const split = idSplitter.exec(ctx.Id[0].image);

        if (!split || ctx.Id[0].isInsertedInRecovery) {
          V.addError(ctx, "프리셋 ID가 없습니다",
            "시간 연구 페이지에 저장된 연구 프리셋 슬롯의 ID를 입력하세요");
          return false;
        }

        const id = parseInt(split[1], 10);
        if (id < 1 || id > 6) {
          V.addError(ctx.Id[0], `ID가 ${id}인 프리셋을 찾을 수 없습니다`,
            "연구 프리셋에 올바른 ID(1 - 6)를 입력하세요");
          return false;
        }
        ctx.$presetIndex = id;
        return true;
      }

      if (ctx.Name) {
        const split = presetSplitter.exec(ctx.Name[0].image);

        if (!split || ctx.Name[0].isInsertedInRecovery) {
          V.addError(ctx, "프리셋 이름이 없습니다",
            "시간 연구 페이지에 저장된 연구 프리셋 이름을 입력하세요");
          return false;
        }

        // If it's a name, we check to make sure it exists:
        const presetIndex = player.timestudy.presets.findIndex(e => e.name === split[1]) + 1;
        if (presetIndex === 0) {
          V.addError(ctx.Name[0], `${split[1]} 프리셋을 찾을 수 없습니다 (참고: 이름은 대소문자를 구분합니다)`,
            "연구 프리셋 이름을 올바르게 입력했는지 확인하세요");
          return false;
        }
        ctx.$presetIndex = presetIndex;
        return true;
      }
      return false;
    },
    compile: ctx => {
      const presetIndex = ctx.$presetIndex;
      return () => {
        const imported = new TimeStudyTree(player.timestudy.presets[presetIndex - 1].studies);
        const beforeCount = GameCache.currentStudyTree.value.purchasedStudies.length;
        TimeStudyTree.commitToGameState(imported.purchasedStudies, true, imported.startEC);
        const afterCount = GameCache.currentStudyTree.value.purchasedStudies.length;
        // Check if there are still any unbought studies from the preset after attempting to commit it all;
        // if there are then we keep trying on this line until there aren't, unless we are given nowait
        const missingStudyCount = imported.purchasedStudies
          .filter(s => !GameCache.currentStudyTree.value.purchasedStudies.includes(s)).length;

        const presetRepresentation = ctx.Name ? ctx.Name[0].image : ctx.Id[0].image;

        if (missingStudyCount === 0) {
          AutomatorData.logCommandEvent(`연구 프리셋 ${presetRepresentation} 전체 불러오기 완료`, ctx.startLine);
        } else if (afterCount > beforeCount) {
          AutomatorData.logCommandEvent(`연구 프리셋 ${presetRepresentation} 일부만 불러옴
            (연구 ${quantifyInt("개", missingStudyCount)} 누락)`, ctx.startLine);
        }
        return ctx.Nowait !== undefined || missingStudyCount === 0
          ? AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION
          : AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleSelectionInput: ctx.Name ? "NAME" : "ID",
      singleTextInput: ctx.Name ? player.timestudy.presets[ctx.$presetIndex - 1].name : ctx.$presetIndex,
      nowait: ctx.Nowait !== undefined,
      ...automatorBlocksMap["STUDIES LOAD"]
    })
  },
  {
    id: "studiesRespec",
    rule: $ => () => {
      $.CONSUME(T.Studies);
      $.CONSUME(T.Respec);
    },
    validate: ctx => {
      ctx.startLine = ctx.Studies[0].startLine;
      return true;
    },
    compile: ctx => () => {
      player.respec = true;
      AutomatorData.logCommandEvent(`연구 재설정을 ON으로 전환`, ctx.startLine);
      return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
    },
    blockify: () => automatorBlocksMap["STUDIES RESPEC"]
  },
  {
    id: "unlockDilation",
    rule: $ => () => {
      $.CONSUME(T.Unlock);
      $.OPTION(() => $.CONSUME(T.Nowait));
      $.CONSUME(T.Dilation);
    },
    validate: ctx => {
      ctx.startLine = ctx.Unlock[0].startLine;
      return true;
    },
    compile: ctx => {
      const nowait = ctx.Nowait !== undefined;
      return () => {
        if (PlayerProgress.dilationUnlocked()) {
          AutomatorData.logCommandEvent(`시간 팽창이 이미 해금되어 해금을 건너뜀`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        const unlockedThisTick = TimeStudy.dilation.purchase(true);
        if (unlockedThisTick) {
          AutomatorData.logCommandEvent(`시간 팽창 해금`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        if (nowait) {
          AutomatorData.logCommandEvent(`요구 조건이 부족하여 시간 팽창 해금을 건너뜀 (NOWAIT)`,
            ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleSelectionInput: "DILATION",
      nowait: ctx.Nowait !== undefined,
      ...automatorBlocksMap.UNLOCK
    })
  },
  {
    id: "unlockEC",
    rule: $ => () => {
      $.CONSUME(T.Unlock);
      $.OPTION(() => $.CONSUME(T.Nowait));
      $.SUBRULE($.eternityChallenge);
    },
    validate: ctx => {
      ctx.startLine = ctx.Unlock[0].startLine;
      return true;
    },
    compile: ctx => {
      const nowait = ctx.Nowait !== undefined;
      const ecNumber = ctx.eternityChallenge[0].children.$ecNumber;
      return () => {
        if (EternityChallenge(ecNumber).isUnlocked) {
          AutomatorData.logCommandEvent(`EC ${ecNumber}: 이미 해금되어 있어 해금을 건너뜀`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        if (nowait) {
          AutomatorData.logCommandEvent(`EC ${ecNumber} 해금 실패 후 건너뜀 (NOWAIT)`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        const purchased = TimeStudy.eternityChallenge(ecNumber).purchase(true);
        if (purchased) {
          AutomatorData.logCommandEvent(`EC ${ecNumber} 해금`, ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      singleSelectionInput: "EC",
      singleTextInput: ctx.eternityChallenge[0].children.$ecNumber,
      nowait: ctx.Nowait !== undefined,
      ...automatorBlocksMap.UNLOCK
    })
  },
  {
    id: "untilLoop",
    rule: $ => () => {
      $.CONSUME(T.Until);
      $.OR([
        { ALT: () => $.SUBRULE($.comparison) },
        { ALT: () => $.CONSUME(T.PrestigeEvent) },
      ]);
      $.CONSUME(T.LCurly);
      $.CONSUME(T.EOL);
      $.SUBRULE($.block);
      $.CONSUME(T.RCurly);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.Until[0].startLine;
      return V.checkBlock(ctx, ctx.Until);
    },
    compile: (ctx, C) => {
      const commands = C.visit(ctx.block);
      if (ctx.comparison) {
        const evalComparison = C.visit(ctx.comparison);
        return compileConditionLoop(() => !evalComparison(), commands, ctx, true);
      }
      const prestigeLevel = ctx.PrestigeEvent[0].tokenType.$prestigeLevel;
      let prestigeName;
      switch (ctx.PrestigeEvent[0].tokenType) {
        case T.Infinity:
          prestigeName = "무한";
          break;
        case T.Eternity:
          prestigeName = "영원";
          break;
        case T.Reality:
          prestigeName = "현실";
          break;
        case T.Doom:
          prestigeName = "파멸";
          break;
        case T.Armageddon:
          prestigeName = "아마겟돈";
          break;
        case T.Endgame:
          prestigeName = "엔드게임";
          break;
        default:
          throw Error("Unrecognized prestige layer in until loop");
      }
      return {
        run: S => {
          if (S.commandState === null) {
            S.commandState = { prestigeLevel: 0 };
          }
          if (S.commandState.prestigeLevel >= prestigeLevel) {
            AutomatorData.logCommandEvent(`${prestigeName} 프레스티지가 발생하여 UNTIL 반복문 종료`,
              ctx.startLine);
            return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
          }
          AutomatorBackend.push(commands);
          AutomatorData.logCommandEvent(`${prestigeName} 프레스티지가 아직 발생하지 않아
            ${AutomatorBackend.translateLineNumber(ctx.LCurly[0].startLine + 1)}번째 줄로 이동 (UNTIL 반복문 시작)`,
          ctx.startLine);
          return AUTOMATOR_COMMAND_STATUS.SAME_INSTRUCTION;
        },
        blockCommands: commands
      };
    },
    blockify: (ctx, B) => {
      const commands = [];
      B.visit(ctx.block, commands);
      const comparison = B.visit(ctx.comparison);
      if (ctx.comparison) {
        return {
          nest: commands,
          ...automatorBlocksMap.UNTIL,
          ...comparison,
          genericInput1: standardizeAutomatorValues(comparison.genericInput1),
          genericInput2: standardizeAutomatorValues(comparison.genericInput2)
        };
      }
      return {
        genericInput1: ctx.PrestigeEvent[0].tokenType.name.toUpperCase(),
        nest: commands,
        ...automatorBlocksMap.UNTIL
      };
    }
  },
  {
    id: "waitCondition",
    rule: $ => () => {
      $.CONSUME(T.Wait);
      $.SUBRULE($.comparison);
    },
    validate: ctx => {
      ctx.startLine = ctx.Wait[0].startLine;
      return true;
    },
    compile: (ctx, C) => () => {
      const evalComparison = C.visit(ctx.comparison);
      const doneWaiting = evalComparison();
      if (doneWaiting) {
        const timeWaited = TimeSpan.fromMilliseconds(new Decimal(Date.now() - AutomatorData.waitStart)).toStringShort();
        if (AutomatorData.isWaiting) {
          AutomatorData.logCommandEvent(`WAIT 후 계속 실행
            (조건 결과: ${parseConditionalIntoText(ctx)} = true, ${timeWaited} 후)`, ctx.startLine);
        } else {
          AutomatorData.logCommandEvent(`WAIT 건너뜀 (이미 true인 조건: ${parseConditionalIntoText(ctx)})`,
            ctx.startLine);
        }
        AutomatorData.isWaiting = false;
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      }
      if (!AutomatorData.isWaiting) {
        AutomatorData.logCommandEvent(`${parseConditionalIntoText(ctx)} 조건으로 WAIT 시작`, ctx.startLine);
        AutomatorData.waitStart = Date.now();
      }
      AutomatorData.isWaiting = true;
      return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
    },
    blockify: (ctx, B) => {
      const commands = [];
      B.visit(ctx.block, commands);
      const comparison = B.visit(ctx.comparison);
      return {
        nest: commands,
        ...automatorBlocksMap.WAIT,
        ...comparison,
        genericInput1: standardizeAutomatorValues(comparison.genericInput1),
        genericInput2: standardizeAutomatorValues(comparison.genericInput2)
      };
    }
  },
  {
    id: "waitEvent",
    rule: $ => () => {
      $.CONSUME(T.Wait);
      $.CONSUME(T.PrestigeEvent);
    },
    validate: ctx => {
      ctx.startLine = ctx.Wait[0].startLine;
      return true;
    },
    compile: ctx => {
      const prestigeLevel = ctx.PrestigeEvent[0].tokenType.$prestigeLevel;
      return S => {
        if (S.commandState === null) {
          S.commandState = { prestigeLevel: 0 };
        }
        const prestigeOccurred = S.commandState.prestigeLevel >= prestigeLevel;
        const prestigeName = ctx.PrestigeEvent[0].image.toUpperCase();
        if (prestigeOccurred) {
          const timeWaited = TimeSpan.fromMilliseconds(new Decimal(Date.now() - AutomatorData.waitStart)).toStringShort();
          AutomatorData.logCommandEvent(`WAIT 후 계속 실행 (${prestigeName} 발생,
            ${findLastPrestigeRecord(prestigeName)}, ${timeWaited} 후)`, ctx.startLine);
          AutomatorData.isWaiting = false;
          return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
        }
        if (!AutomatorData.isWaiting) {
          AutomatorData.logCommandEvent(`WAIT 시작 (대상 프레스티지: ${prestigeName})`, ctx.startLine);
          AutomatorData.waitStart = Date.now();
        }
        AutomatorData.isWaiting = true;
        return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
      };
    },
    blockify: ctx => ({
      genericInput1: ctx.PrestigeEvent[0].tokenType.name.toUpperCase(),
      ...automatorBlocksMap.WAIT
    })
  },
  {
    id: "waitBlackHole",
    rule: $ => () => {
      $.CONSUME(T.Wait);
      $.CONSUME(T.BlackHole);
      $.OR([
        { ALT: () => $.CONSUME(T.Off) },
        { ALT: () => $.CONSUME(T.BlackHoleStr) },
      ]);
    },
    validate: ctx => {
      ctx.startLine = ctx.Wait[0].startLine;
      return true;
    },
    compile: ctx => () => {
      const off = Boolean(ctx.Off);
      // This input has the format "bh#"
      const holeID = ctx.BlackHoleStr ? Number(ctx.BlackHoleStr[0].image.charAt(2)) : 0;
      const bhCond = off ? !BlackHole(1).isActive : BlackHole(holeID).isActive;
      const bhStr = off ? "비활성 블랙홀" : `활성 블랙홀 ${holeID}`;
      if (bhCond) {
        const timeWaited = TimeSpan.fromMilliseconds(new Decimal(Date.now() - AutomatorData.waitStart)).toStringShort();
        AutomatorData.logCommandEvent(`WAIT 후 계속 실행 (${bhStr}까지 ${timeWaited} 대기)`,
          ctx.startLine);
        AutomatorData.isWaiting = false;
        return AUTOMATOR_COMMAND_STATUS.NEXT_INSTRUCTION;
      }
      if (!AutomatorData.isWaiting) {
        AutomatorData.logCommandEvent(`WAIT 시작 (대상: ${bhStr})`, ctx.startLine);
        AutomatorData.waitStart = Date.now();
      }
      AutomatorData.isWaiting = true;
      return AUTOMATOR_COMMAND_STATUS.NEXT_TICK_SAME_INSTRUCTION;
    },
    blockify: ctx => ({
      genericInput1: "BLACK HOLE",
      // Note: In this particular case we aren't actually storing a comparison operator. This is still okay
      // because internally this is just the variable for the second slot and has no special treatment beyond that
      compOperator: ctx.BlackHoleStr ? ctx.BlackHoleStr[0].image.toUpperCase() : "OFF",
      ...automatorBlocksMap.WAIT
    })
  },
  {
    id: "whileLoop",
    rule: $ => () => {
      $.CONSUME(T.While);
      $.SUBRULE($.comparison);
      $.CONSUME(T.LCurly);
      $.CONSUME(T.EOL);
      $.SUBRULE($.block);
      $.CONSUME(T.RCurly);
    },
    validate: (ctx, V) => {
      ctx.startLine = ctx.While[0].startLine;
      return V.checkBlock(ctx, ctx.While);
    },
    compile: (ctx, C) => compileConditionLoop(C.visit(ctx.comparison), C.visit(ctx.block), ctx, false),
    blockify: (ctx, B) => {
      const commands = [];
      B.visit(ctx.block, commands);
      const comparison = B.visit(ctx.comparison);
      return {
        nest: commands,
        ...automatorBlocksMap.WHILE,
        ...comparison,
        genericInput1: standardizeAutomatorValues(comparison.genericInput1),
        genericInput2: standardizeAutomatorValues(comparison.genericInput2)
      };
    }
  },
  {
    id: "stop",
    rule: $ => () => {
      $.CONSUME(T.Stop);
    },
    validate: ctx => {
      ctx.startLine = ctx.Stop[0].startLine;
      return true;
    },
    compile: ctx => () => {
      AutomatorData.logCommandEvent(`STOP 명령으로 오토메이터 실행 정지`, ctx.startLine);
      return AUTOMATOR_COMMAND_STATUS.HALT;
    },
    blockify: () => ({
      ...automatorBlocksMap.STOP,
    })
  }
];
