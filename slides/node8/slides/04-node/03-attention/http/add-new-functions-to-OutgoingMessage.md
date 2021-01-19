## `OutgoingMessage`にメソッドの追加

**semver-minor** since 7.7.0

[`getHeaderNames()`](https://nodejs.org/api/http.html#http_response_getheadernames), [`getHeaders()`](https://nodejs.org/api/http.html#http_response_getheaders), [`hasHeader()`](https://nodejs.org/api/http.html#http_response_hasheader_name)が追加されました。  
これにより`_headers`へアクセスをすることがなくなります。

```js
const http = require('http');

http
  .createServer((req, res) => {
    res.setHeader('x-test-header', 'testing');
    res.setHeader('X-TEST-HEADER2', 'testing');
    console.log(res._headers); // { 'x-test-header': 'testing', 'x-test-header2': 'testing' }
    console.log(res.getHeaders()); // { 'x-test-header': 'testing', 'x-test-header2': 'testing' }
    console.log(res.getHeaderNames()); // [ 'x-test-header', 'x-test-header2' ]
    console.log(res.hasHeader('X-TEST-HEADER2')); // true
  })
  .listen(3000, function () {
    http.get({ port: this.address().port }, (res) => {});
  });
```

[http: add new functions to OutgoingMessage](https://github.com/nodejs/node/pull/10805)
