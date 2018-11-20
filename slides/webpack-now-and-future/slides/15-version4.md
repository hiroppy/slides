<!-- sectionTitle: Release: Version 4 -->

## Version 4 (Legato)

<br />

<div class="list-with-description">
  <div style="text-align: center">
    <img src="../images/logo-new.svg" class="description-logo" />
    <br />
    <div style="text-align: left">
      <p>🚀 2018/02/25</p>
      <p>rc: N/A</p>
      <p>beta: ~ 3</p>
      <p>alpha: ~ 5</a>
      <p>v3から6ヶ月</p>
    </div>
  </div>
  <ul>
    <li>webpack-cliへ移行</li>
    <li>#0CJSの追加</li>
    <li>`CommonsChunkPlugin`が`splitChunks`, `runtimeChunk`へ</li>
    <li>モジュールタイプのサポート</li>
    <li>WebAssemblyのサポート</li>
    <li>Tree Shakingの効率を上げる`sideEffects`の追加</li>
    <li>`webpackPrefetch`, `webpackPreload`の追加(4.6.0)</li>
    <li>`DefinePlugin.runtimeValue`の追加(4.13.0)</li>
    <li>`splitChunks.maxSize`の追加(4.15.0)</li>
  </ul>
</div>

---

<!--
しかし、例えばgraphqlの場合、mjsを読み込みますがjavascript/autoを指定しないと動かないです

-->

## Supported Module Types

<br />

自動的に`mjs`, `json`, `wasm`に対し選択されます

<br />

* javascript/auto
  * CJS、AMD、ESM のすべてをサポート
* javascript/esm
  * ESM のみをサポートし、`.mjs`のデフォルト
* javascript/dynamic
  * CJS と AMD のみをサポート
* json
  * json をサポート
* webassembly/experimental
  * WebAssembly モジュールのサポート

---

<!-- note
entry: ./src/index.js
output: /.dist/main.js

development
  output: pathinfo
  devtool: eval
  cache: true
  optimization
    - namedModules
    - namedChunks
production
  performance-hints: warning
  optimization
    flagIncludedChunks
    occurrenceOrder
    sideEffects
    usedExports
    concatenateModules
    noEmitOnErrors
    minimize
-->

## #0CJS & Mode

<br />

* デフォルトの`entry`と`output`の追加
* `development`, `production`, `none`の Mode の追加
