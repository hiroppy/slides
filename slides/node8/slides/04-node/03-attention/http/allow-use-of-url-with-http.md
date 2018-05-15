## request に URL を使えるようになった

**semver-minor** since 7.5.0

`http.request`と`https.request`で URL が使えるようになりました。

```js
const http = require('http');
const url = require('url');
const URL = url.URL;

const server = http
  .createServer((req, res) => {
    console.log(req.url); // /foo?bar
    console.log(req.method); // GET
    res.end();
    server.close();
  })
  .listen(3000, function() {
    const u = `http://localhost:${this.address().port}/foo?bar`;
    http.get(u);
    http.get(url.parse(u));
    http.get(new URL(u)); // 7.5.0 ~
  });
```

[url: allow use of URL with http.request and https.request](https://github.com/nodejs/node/pull/10638)
