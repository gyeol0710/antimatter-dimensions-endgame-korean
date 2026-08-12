# Antimatter Dimensions: Endgame 한국어판

[Antimatter Dimensions: Endgame Update](https://github.com/Supersonic-Seven/AntimatterDimensionsEndgameUpdate)의
GitHub 포크를 기반으로 SameMa가 번역하고 유지보수하는 비공식·비상업 팬 프로젝트입니다.
원작, Endgame 및 ADKorean 제작진과 공식 제휴되거나 공식 승인을 받은 배포판은 아닙니다.

- 배포 예정 사이트: <https://gyeol0710.github.io/antimatter-dimensions-endgame-korean/>
- 한국어 패치 소스: <https://github.com/gyeol0710/antimatter-dimensions-endgame-korean>

## 크레딧과 출처

- 원작: [Hevipelle 및 Antimatter Dimensions 기여자](https://github.com/IvarK/AntimatterDimensionsSourceCode)
- Endgame: [Supersonic Seven 및 Endgame 기여자](https://github.com/Supersonic-Seven/AntimatterDimensionsEndgameUpdate)
- 기존 한국어 번역 일부 재사용·용어 참고:
  [Seonjisoup621(Jihuu621)의 ADKorean](https://github.com/Jihuu621/ADKorean)
- 한국어 번역 및 유지보수: SameMa

이 프로젝트는 ADKorean의 일부 한국어 문구를 재사용하고, 기존 용어 선택을 참고했습니다. 게임 로직과
Endgame 고유 콘텐츠의 의미는 현재 Endgame 코드를 기준으로 유지합니다. 자세한 번역 원칙과 기준 리비전은
[LOCALIZATION.md](LOCALIZATION.md)를 참고하세요.

## 로컬 실행

[Node.js](https://nodejs.org/)를 설치한 뒤 저장소 루트에서 다음 명령을 실행합니다.

```sh
npm ci
npm run serve
```

터미널에 표시되는 로컬 주소로 접속하면 됩니다. 소스 변경은 개발 서버에 반영되므로 일반적으로 서버를
재시작하지 않고 페이지를 새로고침하면 확인할 수 있습니다.

## 검사와 빌드

한국어 패치 전용 검사와 프로덕션 빌드는 다음 순서로 실행합니다.

```sh
npm run check:ko
npm run test:localization:ko
npm run test:release-safety
npm run build:release
```

빌드 결과는 `dist/`에 생성되며, 루트의 `LICENSE`와 `ATTRIBUTION.md`도 배포 결과에 자동으로 포함됩니다.

## 라이선스

원작과 Endgame의 저작권 고지 및 MIT 허가문은 [LICENSE](LICENSE)에 보존되어 있습니다. 수정본을 복제하거나
배포할 때도 해당 고지와 허가문을 함께 유지해야 합니다. 프로젝트별 출처와 감사 표기는
[ATTRIBUTION.md](ATTRIBUTION.md)를 참고하세요. 포함된 외부 라이브러리, 글꼴, 이미지 및 음원에는 각
저작권자와 별도 라이선스가 적용될 수 있습니다.
