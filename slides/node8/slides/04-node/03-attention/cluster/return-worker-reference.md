## `disconnect()`時にリファレンスを返す

**semver-minor** since 7.3.0

```js
if (cluster.isMaster) {
  const worker = cluster.fork();
  cluster.fork().on('listening', (address) => {
    setTimeout(() => {
      const w = worker.disconnect();
      console.log(w); // undefined
      // Worker // 7.3.0 ~
    }, 1000);
  });
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {}).listen(8000);
}
```

[cluster: return worker reference from disconnect()](https://github.com/nodejs/node/pull/10019)
