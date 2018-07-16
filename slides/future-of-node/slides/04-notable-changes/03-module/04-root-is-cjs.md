## when the entry point is CJS

```js
// friends.mjs
export const cat = 'cat';
export default 'dog';

// ---------------------------------------
// index.js

// ESMのコードをCJSで呼び出すことはできません
// const friends = require('./friends'); // Must use import to load ES Module

// CJSにESMのSyntaxは存在しません
// import { cat } from './friends'; // SyntaxError: Unexpected token {

// CJS内でもdynamic importの使用は可能です
(async () => {
  const friends = await import('./friends');

  console.log(friends); // [Module] { cat: 'cat', default: 'dog' }
})();
```
