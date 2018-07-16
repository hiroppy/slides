## fs.promises

```js
const fs = require('fs').promises;

// 今まではPromiseオブジェクトを返すようにラップする必要があった
// それかcallback自体をpromiseで包んでcallbackか呼ばれたらresolveする
const readFileAsync = require('util').promisify(require('fs').readFile);
// await readFileAsync(fileName, 'utf8');

(async () => {
  const fileName = 'memo.txt';

  try {
    await fs.writeFile(fileName, 'hello:)');
    await fs.readFile(fileName, 'utf8'); // hello:)
    await fs.stat(fileName);
    await fs.truncate(fileName);
    await fs.unlink(fileName);
  } catch (e) {
    console.error(e);
  }
})();
```
