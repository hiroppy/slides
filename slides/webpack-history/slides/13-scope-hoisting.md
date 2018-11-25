<!-- sectionTitle: Feature: Scope Hoisting -->

## Scope Hoisting

<br />

a.k.a. Module Concatenation

---

## Scope Hoisting

<br />

ESM を使うことによりインポートチェーンをフラット化し、  
1 つのインライン関数に変換できる場所を検出する。

<br />

余分な関数呼び出しを減らし、実行時間・コード量を減らすことを期待する。

---

<!-- note
cjsと書かれたもの以外はすべてESMです。
-->

<div class="list-with-description">
  <div>
    <img src="../images/scope-hoisting/graph1.svg" style="width: auto" />
  </div>
  <div>
    <h2>Complex Tree Pattern</h2>
    <br />
    <ul>
      <li>`lazy`, `c`, `d`, `cjs` は`example`と別チャンクにする<br />必要がある</li>
      <li>`shared`は2つの異なるスコープから参照される</li>
      <li>`cjs`はCommonJS moduleである</li>
    </ul>
  </div>
</div>

<a class="ref-link" href="https://github.com/webpack/webpack/tree/master/examples/scope-hoisting">examples/scope-hoisting</a>

---

<!-- note
左の図のようにチャンクを分ける必要があります。  
しかし、その中でもさらに同じレイヤーのものがあるため同一にすることが可能です。
-->

<div class="list">
  <img src="../images/scope-hoisting/graph2.svg" />
  <img src="../images/scope-hoisting/graph3.svg" />
</div>

---

```javascript
// index.js
import a from './a';

(async () => {
  const { default: res } = await import(/* webpackChunkName: 'lazy' */ './lazy');
})();

// a.js
import shared from './shared';      //      +----------+         +----------+
                                    //      |  index   +--------->   lazy   |
const a = `${shared}: a`;           //      +----+-----+         +-----+----+
export default a;                   //           |                     |
                                    //           |                     |
// lazy.js                          //      +----v-----+               |
import shared from './shared';      //      |    a     |               |
                                    //      +----+-----+               |
const res = `${shared}: lazy`;      //           |                     |
export default res;                 //           |                     |
                                    //      +----v-----+               |
// shared.js                        //      |  shared  <---------------+
import shared2 from './shared2';    //      +----+-----+
                                    //           |
export default 'shared';            //           |
                                    //      +----v-----+
// shared2.js                       //      | shared2  |
export default 'shared2';           //      +----------+
```

---

## Invalid Case

```javascript
{ // dist/main.js
/***/ "./a.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ }),
/***/ "./shared.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ }),
/***/ "./shared2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ })
/******/ };
```

<!-- prettier-ignore -->
```javascript
// lazy.js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy"],{
/***/ "./lazy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ })
}]);
```

---

<!-- note
--display-optimization-bailoutをつけると、なぜできないかという理由が出力されます。
-->

## Valid Case

```javascript
// mode: productionではデフォルトで有効
module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
    concatenateModules: true,
    occurrenceOrder: true
  }
};
```

```txt
$ webpack --display-optimization-bailout

[./index.js] ./index.js + 1 modules 237 bytes {main} [built]
    ModuleConcatenation bailout: Cannot concat with ./shared.js because of ./lazy.js
    | ./index.js 157 bytes [built]
    |     ModuleConcatenation bailout: Module is an entry point
    | ./a.js 75 bytes [built]
[./lazy.js] 82 bytes {lazy} [built]
    ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./index.js (referenced with import())
[./shared.js] ./shared.js + 1 modules 83 bytes {main} [built]
    | ./shared.js 58 bytes [built]
    | ./shared2.js 25 bytes [built]
```

---

<!-- note
shared.jsを見るとわかるが、webpackがすでにモジュール解決を行った状態で出力します。  
このように実行回数を減らしています。

-->

```javascript
{
/***/ "./index.js":   // index.js + a.js
/*!******************************!*\
  !*** ./index.js + 1 modules ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./shared.js because of ./lazy.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/***/ }),

/***/ "./shared.js": // shared.js + shared2.js
/*!*******************************!*\
  !*** ./shared.js + 1 modules ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
  // CONCATENATED MODULE: ./shared2.js
  /* harmony default export */
  var shared2 = ('shared2'); // すでにここでモジュール解決を行っている
  // CONCATENATED MODULE: ./shared.js
  /* harmony default export */ var shared = __webpack_exports__["a"] = ('shared');
  //# sourceURL=webpack:///./shared.js_+_1_modules?");
/***/ })
/******/ };
```
