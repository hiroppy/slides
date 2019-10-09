```js
import a from './a.js'; // this module has TLA
import b from './b.js'; // this module has TLA
import c from './c.js'; // this module has TLA

console.log(a, b, c);

// --------------------------------------------
// Execution Order
async function main() {
  // reduce startup time
  const [a, b, c] = await Promise.all([import('./a.mjs'), import('./b.mjs'), import('./c.mjs')]);

  // it won't be like this(this is variant A)
  // const a = await import('./a.js');
  // const b = await import('./b.js');
  // const c = await import('./c.js');
}
```

TLA wouldn't block execution in the graph until it had resolved but blocks execution of child nodes in the graph.

TLA occurs during the execution phase of the module graph so all resources have already been fetched and linked.

<br />

[here for details](https://v8.dev/features/top-level-await#module-execution-order)
