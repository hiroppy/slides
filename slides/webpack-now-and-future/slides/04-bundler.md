<!-- sectionTitle: Module Bundler -->

## Module Bundler

---

## Module Bundler

JavaScript を起点にモジュールシステムを使い  
様々なファイルをつなぎ、実行可能ファイルへと変換します。

<img src="../images/module-bundler.png" class="module-bundler" />

---

## モジュールタイプ

ECMAScript Modules
CommonJS Modules
AMD(Asynchronous Module Definition)
JSON
WASM(WebAssembly module)

<a class="ref-link" href="https://webpack.js.org/concepts/modules/">https://webpack.js.org/concepts/modules</a>

---

## 実行時の仕組み

```transparent
IIFE(Immediately Invoked Function Expression)
+---------------------------------------------------------------+ an argument
|                                                               +------------+
|     +---------+   +---------+   +---------+   +---------+     |  {
|     |         | 3 |         | 6 |         | 9 |         |     |    0: ...,
|     |  Entry  +--->  index  +--->    a    +--->    b    |     |    'index.js': ...,
|     | (index) |   |         |   |         |   |         |     |    'a.js': ...,
|     +--+---^--+   +--+---^--+   +--+---^--+   +---------+     |    'b.js': ...
|        |   |         |   |         |   |                      |  }
|      1 |   | 2     4 |   | 5     7 |   | 8                    +-------------+
|     +--v---+---------v---+---------v---+----------------+     |
|     |                                                   |     |
|     |          __webpack_require__(Function)            |     |
|     |                                                   |     |
|     +---------------------------------------------------+     |
|                                                               |
+---------------------------------------------------------------+
```

Production ビルド時では、引数は Object ではなく Array となり、  
moduleID がファイル名ではなく、index の値となります。

---

## 手順

いる?

* 1: 各モジュールを`function`で包む
* 2: IIFE の引数として、`{ [ファイル名]: function() { eval(...)} }` を渡す
* 3: IIFE の`return`がエントリーポイント(`entry`)になる

---

## モジュール群

```javascript
const modules = {
   // スコープをfunction内に収める
  './a.js': function(module, exports, __webpack_require__) {
    eval(...);
  },
  './b.js': function(module, exports) { // 末端はrequireが存在しないため、第三はない
    eval(...);
  },
  './index.js': function(module, exports, __webpack_require__) {
    eval(...);
  },
  /* !*** multi ./index.js ***! */
  /* ! no static exports found */
  0: function(module, exports, __webpack_require__) {
    eval(...);
  }
};
```

---

## クライアントサイドでの CJS と ESM

<!-- prettier-ignore -->
```javascript
// CJS                    // 生成されたコード
const b = require('./b'); // const b = __webpack_require__(/_! ./b _/ \"./b.js\");\n\n
const c = `${b} world`;   // const c = `${b} world`;\n\n

module.exports = c;       // module.exports = c;\n\n
module.exports.d = 1;     // module.exports.d = 1;\n\n
                          // # sourceURL=webpack:///./a.js?
```

<!-- prettier-ignore -->
```javascript
// ESM                       // `__webpack_exports__`は esm と判断するために置換される
import b1, { b } from './b'; // __webpack_require__.r(__webpack_exports__);\n
                             // /* harmony export (binding) */
                             // __webpack_require__.d(__webpack_exports__, \"d\", function() { return d; });\n
                             // /* harmony import */
                             // var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ \"./b.js\");\n\n\n

const c = `${b1} world`;     // const c = `${_b__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} world`;\n\n

export default c;            // /* harmony default export */ __webpack_exports__[\"default\"] = (c);\n
export const d = b;          // const d = _b__WEBPACK_IMPORTED_MODULE_0__[\"b\"];\n\n
                             // //# sourceURL=webpack:///./a.js?
```

---

## 依存解決処理

```javascript
(function(modules) {
  var installedModules = {}; // すでに読み込んだモジュールのキャッシュ

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;

    var module = (installedModules[moduleId] = { i: moduleId, l: false, exports: {} });

    // module.exportsをbindし、function(module, exports, __webpack_require__) を実行する
    // moduleのexportsにそのファイルからexportsされた実行結果が入る
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    module.l = true;

    return module.exports;
  }
  return __webpack_require__((__webpack_require__.s = 0)); // entry pointを実行
})({
  0: function(module, exports, __webpack_require__) {
    eval(
      'module.exports = __webpack_require__(/*! ./index.js */"./index.js");\n\n\n//# sourceURL=webpack:///multi_./index.js?'
    );
  }
});
```

---

## webpack_require

webpack において require を管理する大切な関数

* `m`: 各モジュールのリスト `{ [ファイル名]: [内部コード] }`
* `c`: 各モジュールのキャッシュ `{ [ファイル名]: [module] }`
* `d`: ESM のための getter 関数
* `r`: `__esModule`を exports へ`Object.defineProperty`でセットする関数
* `t`: 偽物の名前空間を作成するための関数 TODO
* `n`: ESM ではないモジュールに対する`default`の互換性保持関数 TODO
* `o`: `Object.prototype.hasOwnProperty.call`のラッパー関数
* `p`: `__webpack_public_path__`の文字列値
* `s`: `entry`の ID

---

wip
