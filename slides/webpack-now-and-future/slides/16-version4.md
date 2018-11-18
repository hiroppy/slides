<!-- sectionTitle: Release: Version 4 -->

## Version 4

<br />

<div class="list-with-description">
  <div style="text-align: center">
    <img src="../images/logo-new.svg" class="description-logo" />
    <br />
    <p>🚀:2018/02/25</p>
    <p>alpha5</a>
    <p>beta3</p>
    <p>6ヶ月ぶり</p>
  </div>
  <ul>
    <li>webpack-cliへ移行</li>
    <li>mode(production, development, none)の追加</li>
    <li>`CommonsChunkPlugin`が`splitChunks`, `runtimeChunk`へ</li>
    <li>モジュールタイプのサポート</li>
    <li>Tree Shakingの効率を上げる`sideEffects`の追加</li>
    <li>`import()`が名前空間にラップされるように変更</li>
    <li>`webpackPrefetch`, `webpackPreload`の追加(4.6.0)</li>
    <li>`DefinePlugin.runtimeValue`の追加(4.13.0)</li>
  </ul>
</div>

---

## Supporting Module Types

<br />

自動的に`mjs`, `json`, `wasm`に対し選択されます

<br />

* javascript/auto
  * CJS、AMD、ESM のすべてをサポート
* javascript/esm
  * ESM のみをサポートし、auto 以上に厳密に処理される
* json
  * json をサポート
* webassembly/experimental
  * WebAssembly モジュールのサポート
