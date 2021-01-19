## Deadlocks

<br />

Pay attention to Circular Module Dependencies.  
Both modules using TLA halt progress until the other finishes loading.

<br />

```js
// ---------- a.js ----------
await import('b');

// implement a hoistable then() to prevent cycles while a module is still evaluating.
export function then(f, r) {
  r('not finished');
}

// remove the rejection
then = null;

// 🙅‍♀️---------- b.js ----------
await import('a');

// 🙆‍♀️ ---------- b.js ----------
let a;

try {
  a = await import('a');
} catch {
  // do something
}
```
