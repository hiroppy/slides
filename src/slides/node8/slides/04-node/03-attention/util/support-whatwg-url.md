## formatにwhatwg-urlのサポート

**semver-minor** since 7.6.0

```js
> const URL = require('url').URL
> const myURL = new URL('http://example.org/?a=b#c')
> const str = url.format(myURL, {fragment: false, search: false})
> console.log(str)
http://example.org/?a=b#c

// 7.6.0 ~
> console.log(str)
http://example.org/
```

[url: extend url.format to support WHATWG URL](https://github.com/nodejs/node/pull/10857)
