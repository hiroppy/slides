## file プロトコルを許可する

**semver-minor** since 7.6.0

whatwg-url の file プロトコルを fs モジュールで使うことが可能となった。  
whatwg-url の spec により、  
常にファイルシステムのルートからの絶対パスである必要があります。

```js
> const URL = require('url').URL;
undefined
> const myURL = new URL('file:///C:/path/to/file');
undefined
> fs.readFile(myURL, (err, data) => {});
TypeError: path must be a string or Buffer
// 7.6.0 ~
> fs.readFile(myURL, (err, data) => {});
undefined
```

[fs: allow WHATWG URL and file: URLs as paths](https://github.com/nodejs/node/pull/10739)
