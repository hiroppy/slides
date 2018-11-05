<!-- sectionTitle: Hot Module Replacement -->

## Hot Module Replacement

---

## Hot Module Replacement

ソースコードが変更されると自動的にその箇所を変更する機能です。

説明、wip

---

## 仕組み

* webpack が検知(fs.watch)
* websocket で変更を通知
* runtime はサーバーから変更分のスクリプトを取得してモジュールを置き換える
