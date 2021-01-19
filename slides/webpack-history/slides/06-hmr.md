<!-- sectionTitle: Feature: Hot Module Replacement -->

## Hot Module Replacement

---

## Hot Module Replacement

<br />

ソースコードが変更されるとブラウザをリロードせずに  
自動的に変更されたモジュールを新しいモジュールへ置換する機能

<br />

- webpack-dev-server
- webpack-hot-middleware
- webpack-hot-client

---

<!-- note
最初にブラウザの準備の方を話す。

Runtimeを追加するために、pluginへHotModuleReplacementPluginを入れる。
また、webpack/hot/dev-server、webpack-dev-server/clientを追加。

次に、ファイル監視の話をする。
-->

<img src="../images/hmr.png" style="width: 70%" />

---

<img src="../images/hmr-ws.png" />

---

<!-- note
以上がwebpackのhot module replacementの仕組みです
-->

<!-- prettier-ignore -->
```javascript
// "output.hotUpdateChunkFilename": "[id].[hash].hot-update.js"

webpackHotUpdate("bundle",{
/***/ "./a.js":
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
  eval(...);
/***/ })
})
```

```json
// "output.hotUpdateMainFilename": "[hash].hot-update.json"

{
  "h": "5946277f0fe1b6e0144e",
  "c": { "bundle": true }
}
```
