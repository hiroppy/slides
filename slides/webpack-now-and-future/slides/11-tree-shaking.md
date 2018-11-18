<!-- sectionTitle: Feature: Tree Shaking & Dead Code Elimination -->

## Tree Shaking & Dead Code Elimination

a.k.a. Unused Exports Elimination

---

## Tree Shaking & Dead Code Elimination

Tree Shaking とは、ESM を使うことにより、  
未使用のモジュールを検知しバンドル時に分解します。

<br />

Dead Code Elimination とは、  
実行に影響しない未使用のコードを発見しそれを削除します。  
webpack の場合は、uglifyJS が使われています。

---

## Tree Shaking の歴史

<div class="history-container">
  <div class="list-with-title">
    <div class="list-with-title-title">1990s</div>
    <div class="list-with-title-body">
      <span>1995: LISPで議論される</span>
      <span>
        <a href="https://groups.google.com/forum/#!msg/comp.lang.lisp/6zpZsWFFW18/-z_8hHRAIf4J">why is tree-shaking hard?</a>
      </span>
    </div>
  </div>
  <div class="list-with-title">
    <div class="list-with-title-title">2013</div>
    <div class="list-with-title-body">
      <span>Google Closure Toolsで実装される</span>
      <span>dart2jsで実装される</span>
    </div>
  </div>
  <div class="list-with-title">
    <div class="list-with-title-title">2015</div>
    <div class="list-with-title-body">
      <span>Rollupで実装される</span>
    </div>
  </div>
</div>

wip: https://en.m.wikipedia.org/wiki/Tree_shaking

---

## Tree Shaking

```javascript
// index.js (entry point)
import a from './a';

console.log(a);

// a.js
import { b1 } from './b';

const a = `${b1} from b`;

export default a;

export const test = () => 2 * 2;

// b.js
export const b1 = 'b1';
export const b2 = 'b2';
const b3 = 'b3';
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

  const a = `${_b__WEBPACK_IMPORTED_MODULE_0__[/* b1 */ 'a']} from b`;
  /* harmony default export */ __webpack_exports__['a'] = a;
  const test = () => 2 * 2;
});

(function(module, __webpack_exports__, __webpack_require__) { // b.js
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
    return b1;
  });
  /* unused harmony export b2 */
  const b1 = 'b1';
  const b2 = 'b2';
  const b3 = 'b3'; // b3はexportしていない変数
});
```

---

```javascript
// webpack.config.js

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
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
    [only some exports used: b1]
[./index.js] 37 bytes {main} [built]  # <------
```

---

## Dead Code Elimination

ES2015 に対応している、uglify のフォークである Terser を使用

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

連続で繋げたい
