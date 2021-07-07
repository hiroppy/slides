<!-- section-title: Package Managers -->

## Package Managers

<br />

<!-- block-start: grid, images -->

![](../images/npm.png)

![](../images/yarn.png)

![](../images/pnpm.png)

<!-- block-end -->

<br />

- yarn がでるまでの問題点とその後
  - shrinkwrap の不安定さ => lock ファイルがデファクトとなる
  - パフォーマンス、キャッシュの問題 => npm/yarn の速度差がほぼなくなる
- workspaces の考え方
  - lerna から生まれた新しいリポジトリ設計

---

## node_modules の肥大化

<br />

![](../images/node_modules.jpg)

<br />

- berry(yarn v2)
  - PnP による zero installs
- pnpm
  - ハードリンクとシンボリックリンクを使用し、モジュールを 1 回だけ保存するし使い回す
