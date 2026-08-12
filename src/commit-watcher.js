// TODO: remove before release
export function watchLatestCommit() {
  if (isLocalEnvironment()) {
    return;
  }

  const url = "commit.json";
  let current;

  function watch() {
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        if (json === undefined) {
          return;
        }
        current = current ?? json.sha;
        if (current === json.sha) {
          return;
        }

        Modal.message.show(
          "새로운 업데이트가 있습니다. 페이지를 새로고침하면 게임이 저장됩니다: " +
          `"${json.message}" (${json.author})`,
          {
            callback: updateRefresh,
            closeButton: true
          },
          3
        );
      });
  }

  setInterval(watch, 60000);
}
