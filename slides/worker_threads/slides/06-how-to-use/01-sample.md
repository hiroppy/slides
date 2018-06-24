## 複数の worker を作る

```javascript
const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  for (let i = 0; i < 4; i++) {
    new Worker(__filename, { workerData: i });
  }

  setInterval(() => {
    console.log('Main Thread');
  }, 1000);
} else {
  setInterval((title) => {
    console.log(`worker: ${workerData}`);
  }, 1000);
}
```
