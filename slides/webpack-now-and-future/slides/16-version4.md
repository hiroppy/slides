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
    <li>`splitChunks.maxSize`の追加(4.15.0)</li>
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

---

## splitChunks.maxSize

<br />

<div class="list">
  <pre class="language-javascript" style="min-width: inherit">
    <code class="language-javascript">
module.exports = {
  splitChunks: {
    minSize: 100000,  // bytes
    maxSize: 1000000, // bytes
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        name: 'vendor',
        chunks: 'initial',
        enforce: true
      }
    }
  }
};
    </code>
  </pre>
  <div>
  <pre class="language-txt" style="min-width: inherit">
    <code class="language-txt">
vendor.e01916c600d5e12dd9aa.16.bundle.js   1.41 MiB
    </code>
  </pre>
  <pre class="language-txt" style="min-width: inherit">
    <code class="language-txt">
vendor~253ae210.e46c3fe01b7780f11d81.bundle.js    316 KiB
vendor~7274e1de.a2d5e8d87c5e36752b28.bundle.js    183 KiB
vendor~7d359b94.79f7863fa304fe20067e.bundle.js   53.5 KiB
vendor~9c5b28f6.71223a4ff0625388be27.bundle.js    610 KiB
vendor~b5906859.2b626aa82671c8667e3a.bundle.js   95.2 KiB
vendor~db300d2f.d22d5b79be58987d729e.bundle.js   92.9 KiB
vendor~ec8c427e.59a4800bc2621be8d855.bundle.js     95 KiB
    </code>
  </pre>
</div>
</div>
