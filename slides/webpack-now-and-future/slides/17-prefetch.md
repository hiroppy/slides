<!-- sectionTitle: Feature: Prefetch / Preload -->

## Prefetch / Preload

<br />

---

<!-- note
chromeには、httpキャッシュ、メモリキャッシュ、service workerキャッシュ、プッシュキャッシュが存在する
-->

## Prefetch

<br />

`<link rel="prefetch">`

<br />

アイドル状態の時に、将来使用する可能性が高いリソースを取得します。  
ブラウザのページのロードが完了すると  
指定されたドキュメントをプリフェッチして http キャッシュに保存します。

<a class="ref-link" href="https://w3c.github.io/resource-hints/#prefetch">w3c/resource-hints/#prefetch</a>

---

<!-- note
Resource Hintsではない
-->

## Preload

<br />

`<link rel="preload">`

<br />

現在のページで必要なリソースをブラウザへ事前に伝えることにより、  
ページの最初のレンダリングがブロックされにくくなり、  
リソースの取得を最適化します。

<a class="ref-link" href="https://w3c.github.io/preload/">w3c/preload/</a>

---

<!-- note
webpackは賢くってpreloadにするかどうかを判断する
-->

<!-- prettier-ignore -->
```javascript
import(
  /* webpackChunkName: "prefetch", webpackPrefetch: true */
  './prefetch'
);
import(
  /* webpackChunkName: "preload", webpackPreload: true */
  './preload'
);
```

<img src="../images/prefetch.png" />
