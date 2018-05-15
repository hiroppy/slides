## Problem

<br />

If you use `Date`, you get 0 or a positive value or a negative value.😱

```js
const markStart = Date.now();

(() => {})();

const duration = Date.now() - markStart;

console.log(duration); // 0
```
