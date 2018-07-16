## Run multiple workers

```js
const { Worker, isMainThread, workerData } = require('worker_threads');

let current = 0;

function runTimer(title) {
  setInterval(() => {
    console.log(`| ${title} |: ${++current}`);
  }, 1000);
}

if (isMainThread) {
  for (let i = 0; i < 4; i++) {
    // この場合(__filename)はworkerも同じこのファイルを参照する
    // workerDataはグローバルパラメーターなので、workerが作られる時にiをworkerが知っている
    new Worker(__filename, { workerData: i });
  }

  runTimer('MainThread');
} else {
  runTimer(`Worker: ${workerData /* i(0 - 3) */}`);
}
```
