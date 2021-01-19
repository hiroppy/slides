<!-- sectionTitle: Feature: SplitChunksPlugin -->

## SplitChunksPlugin

---

## Disadvantages of CommonsChunkPlugin

<br />

- チャンクの分解の表現力が弱く、<br />必要以上のダウンロードが発生する可能性がある
- 非同期チャンクでは非効率
- 制御するのにメソッドを書く必要がある(e.g. `minChunks`)

---

<!-- note
最適化の種類は3種類あります。

chunks
  - async: dynamic importされたモジュールの最適化のみ
  - initial: 同期モジュールの最適化
  - all: 非同期・同期モジュールの最適化
-->

## SplitChunksPlugin

<br />

モジュールの重複回数とモジュールのカテゴリー(e.g. `node_modules`)により、  
自動的にチャンクとして分割するべきモジュールを識別し、分割する

<br />

- 不要なモジュールをダウンロードしないため、非同期チャンクでも効率的
- 扱いが簡単で自動的
- チャンクグラフを弄らなくて良い

---

<!--
このような感じで効率的にチャンクを分解します
-->

<img src="../images/splitChunks.png" style="width: 70%" />

---

<!-- note
vendorを作るとよくファイル容量が以上に大きくなることがあると思います。
今までは、entryにホワイトリストとしてライブラリを書いたりすることにより回避していました。
maxSizeを指定することにより、これを回避できる。
-->

## minSize / maxSize

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
