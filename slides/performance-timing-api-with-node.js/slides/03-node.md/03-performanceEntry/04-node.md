## entryType: gc

<br />

This will be useful if you want to know the GC that occured.

```js
[ PerformanceEntry {
    name: 'gc',
    entryType: 'gc',
    startTime: 160.643631,
    duration: 0.464252,
    kind: 1 } ] // NODE_PERFORMANCE_GC_MINOR

const { constants } = require('perf_hooks');

console.log(constants);
{ NODE_PERFORMANCE_GC_MAJOR: 2,
  NODE_PERFORMANCE_GC_MINOR: 1,
  NODE_PERFORMANCE_GC_INCREMENTAL: 4,
  NODE_PERFORMANCE_GC_WEAKCB: 8 }
```

You can see what kind of GC operation occurred by checking `constants`.
