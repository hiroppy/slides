<!-- sectionTitle: Feature: Tree Shaking & Dead Code Elimination -->

## Tree Shaking & Dead Code Elimination

<br />

Tree Shaking, a.k.a. Unused Exports Elimination

---

<!-- note
つい先日でたv4.26.0でuglify-esからterserへ移行されました
まだ、terserも不安定なので注意してください。

なので、tree shakingはあくまでコードを分解するのであって、実際にコードを消すのはminifyツールが行います。
-->

## Tree Shaking & Dead Code Elimination

<br />

Tree Shaking とは、  
ESM を使うことにより、未使用のモジュールを検知しバンドル時に分解する

<br />

Dead Code Elimination とは、  
実行に影響しない未使用のコードを発見しそれを削除する  
webpack の場合は、uglifyJS(or terser) が使われる

---

<!-- note
tree shakingの歴史は意外と古く、1995年にはlispのgoogle groupsで議論がされています
多くの人がtree shakingという単語を知ったのは、おそらく2015年のrich harrisがrollupで実装したときだと思います。
-->

## History of Tree Shaking

<br />

* 1990s: LISP で議論される([why is tree-shaking hard?](https://groups.google.com/forum/#!msg/comp.lang.lisp/6zpZsWFFW18/-z_8hHRAIf4J))
* 2013: Google Closure Tools, dart2js で実装される
* 2015: Rollup で実装される

---

<!-- note
--display-used-exportsをつけると使われる値を確認できます。
-->

```javascript
// mode: productionではデフォルトで有効

module.exports = {
  optimization: {
    usedExports: true // このオプションが必要
  }
};
```

```sh
$ webpack --display-used-exports

    Asset      Size  Chunks             Chunk Names
bundle.js  5.06 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./a.js] 105 bytes {main} [built]
    [only some exports used: default] # <------
[./b.js] 64 bytes {main} [built]
    [only some exports used: b1]      # <------
[./index.js] 37 bytes {main} [built]
```

---

```javascript
// index.js (entry point)
import a from './a';

console.log(a);

// a.js
import { b1 } from './b';

const a = `${b1} from b`; // 使われる

export default a;

export const test = () => 2 * 2; // 使われない

// b.js
export const b1 = 'b1'; // 使われる
export const b2 = 'b2'; // 使われない
const b3 = 'b3'; // ローカル変数
```

---

<!-- prettier-ignore -->
```javascript
(function(module, __webpack_exports__, __webpack_require__) { // index.js (entry point)
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ './a.js');

  console.log(_a__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a']);
});

(function(module, __webpack_exports__, __webpack_require__) { // a.js
  /* unused harmony export test */
  /* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ './b.js');

  const a = `${_b__WEBPACK_IMPORTED_MODULE_0__[/* b1 */ 'a']} from b`; // b.jsのb1を参照する
  /* harmony default export */ __webpack_exports__['a'] = a; // index.jsのexportsへ'a'キーとして結果を渡す
  const test = () => 2 * 2;
});

(function(module, __webpack_exports__, __webpack_require__) { // b.js
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
    return b1;
  });
  /* unused harmony export b2 */
  const b1 = 'b1'; // a.jsによって使われている変数
  const b2 = 'b2'; // b2はexportしているが、未使用な変数
  const b3 = 'b3'; // b3はexportしていない変数
});
```

---

<!-- note
tree shakingとdead code eliminationの仕組みはこのような感じです
-->

## Dead Code Elimination

```javascript
function(e,t,n){ // index.js (entry point)
  "use strict";
  n.r(t);
  var r=n(/*! ./a */"./a.js");
  console.log(r.a)
}

function(e,t,n){ // a.js
  "use strict"; // testという関数がなくなった
  const r=`${n(/*! ./b */"./b.js").a} from b`;
  t.a=r
}

function(e,t,n){ // b.js
  "use strict";
  n.d(t,"a",function(){return r});
  const r="b1" // b2, b3がなくなった
}
```
