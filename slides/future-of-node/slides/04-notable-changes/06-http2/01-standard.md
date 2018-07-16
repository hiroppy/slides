## HTTP/2 is straightforward😊

```js
const { createSecureServer } = require('http2');
const { readFileSync } = require('fs');

const options = {
  key: readFileSync('localhost-privkey.pem'),
  cert: readFileSync('localhost-cert.pem')
};

//証明書がなくても動くが、ブラウザからはアクセスできない
const server = createSecureServer(options, (req, res) => {
  res.end('Hello World!');
});

// const server = createSecureServer(options);
// server.on('stream', (stream, headers) => {
//    stream.respond({ ':status': 200 });
//    stream.end('Hello World!');
// });

server.listen(8080);
```
