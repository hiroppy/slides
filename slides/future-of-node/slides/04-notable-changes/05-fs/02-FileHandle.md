## class: FileHandle

```js
const { open } = require('fs').promises;

(async () => {
  let filehandle;
  try {
    // resolve時にFileHandleオブジェクトを生成します
    filehandle = await open('node', 'r');
    const { fd } = filehandle; // FD は 13

    // 内部的にはメンバーとしてFDをもっているため、chmodはfchmodをラップし実行している
    await filehandle.chmod('777');
  } finally {
    if (filehandle !== undefined) await filehandle.close();
  }
})();
```
