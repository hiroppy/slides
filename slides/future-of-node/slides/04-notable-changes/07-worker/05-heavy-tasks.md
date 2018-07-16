## Make heavy tasks on workers

```js
// parent.js
const { resolve } = require('path');
const { Worker, workerData } = require('worker_threads');
const worker = new Worker(resolve('child.js'), { workerData: null });

worker.on('message', (msg) => console.log(`${msg} from Worker Thread`));
worker.on('error', (err) => process.exit(1));

// --------------------------------------------------------------------
// child.js
const { PerformanceObserver, performance } = require('perf_hooks');
const { parentPort } = require('worker_threads');
const len = 64 * 1024 * 1024;
const b = Buffer.allocUnsafe(len);
let s = '';

// 重い処理
for (let i = 0; i < 256; ++i) s += String.fromCharCode(i);
for (let i = 0; i < 64 * 1024 * 1024; i += 256) b.write(s, i, 256, 'ascii');
for (let i = 0; i < 32; ++i) b.toString('base64');
parentPort.postMessage('finished');
```

<a href="http://blog.hiroppy.me/entry/worker_threads#%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E9%96%93%E3%81%A7%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E3%82%92%E8%A1%8C%E3%81%86" class="ref-link">> full codes</a>
