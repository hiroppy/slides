## EntryType

EntryType にはユーザが定義するものと  
システムが自動的に発生させる 2 種類あります。

* ユーザー定義
  * `mark`: 区間の地点をマークした時に差し込まれる
  * `measure`: 区間に名前がつけられた時の差し込まれる
  * `function`: `timerify`でラップした関数が呼ばれた時に差し込まれる
* システム定義
  * `node`: 起動時等に差し込まれる
  * `gc`: GC(major, minor, incremental, weakcb) 時に差し込まれる
  * `http2`: wip
