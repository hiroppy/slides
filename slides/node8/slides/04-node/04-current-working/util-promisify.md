## `promisify()`の追加

**semver-minor** since ???

4/24(現在)開かれていて一番盛り上がっている PR  
[Support awaiting values through `util.awaitable`](https://github.com/nodejs/CTC/issues/12)で話されています。  
名前の通り Promise にします。

```js
const util = require('util');

const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'foobar').then((value) => console.log(value));

const stat = util.promisify(require('fs').stat);
async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

callStat();
```

[util: add util.promisify()](https://github.com/nodejs/node/pull/12442)
