<!-- sectionTitle: Release: Version 2 -->

## Version 2

<br />

<div class="list-with-description">
  <div style="text-align: center">
  <img src="../images/logo-new.svg" class="description-logo" />
  <br />
  <p>🚀:2017/01/18</p>
  <p>2.1.0-beta28</p>
  <p>2.2.0-rc8</p>
  <p>2年11ヶ月ぶり</p>

  </div>
  <ul>
    <li>設定ファイルスキーマの大幅な変更</li>
    <li>設定ファイルのバリデーターが導入</li>
    <li>ESM, JSONのネイティブサポート開始</li>
    <li>パフォーマンスヒントの追加</li>
    <li>Tree Shakingの追加</li>
  </ul>
</div>

---

## v2 からの大幅なスキーマ変更

```javascript
module.exports = {
  resolve: {
    modulesDirectories: []
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        query: {}
      }
    ]
  }
};
```

```javascript
module.exports = {
  resolve: {
    modules: []
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        options: {},
        enforce: 'pre'
      }
    ]
  }
};
```
