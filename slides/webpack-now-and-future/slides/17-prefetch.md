<!-- sectionTitle: Feature: Prefetch / Preload -->

## Prefetch / Preload

---

## Web performance made easy

<br />

<iframe width="560" height="315" src="https://www.youtube.com/embed/Mv-l3-tJgGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<!-- note
chromeには、httpキャッシュ、メモリキャッシュ、service workerキャッシュ、プッシュキャッシュが存在する
-->

## Prefetch

<br />

`<link rel="prefetch">`

<br />

Resource Hints の一つ。  
アイドル状態の時に、将来使用する可能性が高いリソースを取得する。  
ブラウザのページのロードが完了すると  
指定されたドキュメントをプリフェッチして http キャッシュに保存する。

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
リソースの取得を最適化する。

<a class="ref-link" href="https://w3c.github.io/preload/">w3c/preload/</a>

---

<!-- note
initial chunkでは、preloadを設置できません
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
