## HTTP/2 is straightforward😊

```js
const { createSecureServer } = require('http2');
const { readFileSync } = require('fs');

const options = {
  key: readFileSync('localhost-privkey.pem'),
  cert: readFileSync('localhost-cert.pem'),
};

//証明書がなくても動くが、ブラウザからはアクセスできない
const server = createSecureServer(options, (req, res) => {
  res.end('Hello World!');
}).listen(8080);

// streamを使う場合 (上記の場合は、res.streamが存在する)
const server = createSecureServer(options).listen(8080);
server.on('stream', (stream, headers) => {
  stream.end('Hello World!');
});
```
