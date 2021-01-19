## API restrictions

- 禁止
  - `process.chdir()`等の group, userID を設定するプロセスメソッド
  - `process.abort()`
  - domain
  - 親プロセスからの IPC チャンネルのアクセス
- 変更
  - `process.env` は読み取り専用
  - `process.title`は変更不可
  - `process.exit()` は単一スレッドのみが処理対象
  - `process.stdin`, `process.stdout`, `process.stderr` は `null`
  - シグナルは行われない (`process.on`)
