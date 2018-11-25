<!-- sectionTitle: History: The Future -->

## The Future

---

<!-- note
universal: web、webworker、node.jsで実行されるランタイムコードを挿入します。
import.meta: stage3 Node.jsのESMでは__filename, __dirnameなどは使えないため、それの代用
webpackGraph: 依存解決ツリーをキャッシングすることによる開発の高速化
-->

## Version 5

<br />

👷 確定ではないことに注意してください 👷

<br />

<div class="list-with-description">
  <div style="text-align: center">
    <img src="../images/logo-new.svg" class="description-logo" />
    <br />
    <div style="text-align: left">
      <p>🚀 未定</p>
      <p>[Project](https://github.com/webpack/webpack/projects/5)</p>
    </div>
  </div>
  <ul>
    <li>[persistent cachingの追加(FileCachePluginの追加)](https://github.com/webpack/webpack/pull/8162)</li>
    <li>[`target: 'universal'` の追加](https://github.com/webpack/webpack/issues/6525)</li>
    <li>`import.meta`</li>
    <li>[wip]: モジュールタイプに[`css`](https://github.com/webpack/webpack/pull/6448), [`html`](https://github.com/webpack/webpack/pull/6447), [`url`](https://github.com/webpack/webpack/pull/6446)のサポート</li>
    <li>[wip]: [`webpack-preset-`の対応, 及びwebpack-mergeの導入](https://github.com/webpack/webpack/pull/6395)</li>
    <li>[spec]: [`target.webpackGraph`の追加](https://github.com/webpack/webpack/issues/6386)
  </ul>
</div>

<br />

```txt
$ npm i -D webpack/webpack#next
```

---

## Persistent Caching

```javascript
{
  type: 'filesystem', // タイプ

  cacheDirectory: '/path/to/dir', // ディレクトリ

  name: 'something', // サブフォルダー名

  version: '1xz2', // 設定ファイルのバージョン

  // いつキャッシュするか
  // idle: コンパイラがアイドル状態の時
  // instant: コンパイル・ブロック
  // background: コンパイラ中・ノンブロッキング
  store: 'idle',

  loglevel: 'warning', // ログのレベル

  hashAlgorithm: 'md4' // ハッシュアルゴリズム
}
```

---

<!-- note
時間があれば。。。

webpack5/6 idea

named rulesの複雑化。
module.rulesの上書きが難しいため、そこを解決したい。

HMRの改善
statsをpluginへ
-->

<p style="font-size: 4rem">🏃</p>
