## Push

```js
// 現在、Chromeのバグで信用されてない証明書だと initiator にPush表示されないのでchrome://net-internals/#http2 で確認する必要がある
// https://bugs.chromium.org/p/chromium/issues/detail?id=824988
const { createSecureServer, constants } = require('http2');
const { readFileSync } = require('fs');
const options = {
  key: readFileSync('localhost-privkey.pem'),
  cert: readFileSync('localhost-cert.pem')
};
const server = createSecureServer(options).listen(3000);

server.on('stream', (stream, headers) => {
  if (headers[':path'] === '/') {
    for (const asset of ['static/bundle1.js', 'static/bundle2.js']) {
      stream.pushStream({ [constants.HTTP2_HEADER_PATH]: asset }, (err, pushStream) => {
        if (err) throw err;

        pushStream.respondWithFile(asset);
        pushStream.close();
      });
    }
  }
  stream.respondWithFile('index.html');
});
```
