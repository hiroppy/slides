## when the entry point is ESM

```js
// friends.js
module.exports.dog = 'dog';

// ---------------------------------------
// index.mjs
import { readFileSync } from 'fs'; // ビルトインモジュールは named import が行えるようになった

import dog from './friends'; // { dog: 'dog' }
import * as dog from './friends'; // [Module] { default: { dog: 'dog' } } // defaultで包まれる
import { dog } from './friends'; // Error: CJSで書かれたモジュールに対してnamed importは行えない

console.log(import.meta); // { url: 'file:///Users/hiroppy/nodejs/node/out/Release/index.mjs' }

(async () => {
  const baseURL = new URL('file://'); // whatwg/urlに準拠している
  baseURL.pathname = `${process.cwd()}/friends.mjs`;

  await import(baseURL);
})();
```
