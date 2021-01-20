<!-- sectionTitle: ランタイムではどのように処理されるのか？ -->

## ランタイムではどのように処理されるのか？

---

ランタイムでは、エントリーポイントから再帰的に走査しモジュールを随時実行していく。

<br />

また実行は、Node.js のモジュールシステム同様に IIFE を使いスコープを確保し、  
引数等で Object/Array の形で必要なすべてのモジュールを渡しエントリーポイントから実行する。  
webpack5 から引数ではなく、内部で直接各モジュールを宣言するように変わったが、仕組みは同じ。

<br />

詳しくは、[module bundler の作り方(準備編)](https://blog.hiroppy.me/entry/create-module-bundler-preparation)を参照。

---

<!-- executable-code -->

```javascript
// 例なのでESMの対応はないが仕組みは一緒
((modules) => {
  const usedModules = {};

  function require(moduleId) {
    if (usedModules[moduleId]) {
      return usedModules[moduleId].exports;
    }

    // ModuleId(0, 1, ...)を入れ、最低限必要なexportsを定義し初期化
    const module = (usedModules[moduleId] = { exports: {} });

    // 自身の関数であるrequireを渡すことにより、各モジュール内でこの関数を実行し再帰走査する
    // つまり、各モジュール内のmodule/requireはここで上書きされる
    modules[moduleId](module, module.exports, require);

    return module.exports;
  }

  return require(0); // entry pointである0(index.js)から開始
})({
  0 /* index.js */: function (module, exports, require) {
    const say = require(1); // ビルド時にファイル名からmoduleIdへ書き換えられる
    say('hello world');
  },
  1 /* foo.js */: function (module, exports, require) {
    module.exports = function say(txt) {
      console.log(txt, 'from foo.js!');
    };
  },
});
```

---

## Scope Hoisting

<br />

[Scope Hoisting](https://github.com/webpack/webpack/tree/master/examples/scope-hoisting)とは静的解析をする ECMAScript Modules のときに有効化できる同列階層のモジュールを統合するアルゴリズム。  
これにより、無駄な再帰処理をなくし実行速度の向上とバンドルサイズを減らすことが可能となる。

<!-- block-start: grid -->

<!-- block-start: column -->

#### 無効時

```javascript
var __webpack_modules__ = [
  /* 0 */
  (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    (0, _foo__WEBPACK_IMPORTED_MODULE_0__.default)('hello world');
  },
  /* 1 */
  (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(txt) {
      console.log(txt, 'from foo.js!');
    }
  },
];
```

<!-- block-end -->

<!-- block-start: column -->

#### 有効時

```javascript
var __webpack_modules__ = [
  /* 0 */
  (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__); // CONCATENATED MODULE: ./src/foo.js

    /* harmony default export */ function foo(txt) {
      console.log(txt, 'from foo.js!');
    } // CONCATENATED MODULE: ./src/index.js

    foo('hello world');
  },
];
```

<!-- block-end -->

<!-- block-end -->
