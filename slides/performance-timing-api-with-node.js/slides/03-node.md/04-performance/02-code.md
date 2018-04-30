## Sample Code

```js
const { readFileSync } = require('fs');
const { performance: perf } = require('perf_hooks');

perf.mark('A'); // 1. mark the start section
readFileSync('./node');
perf.mark('B'); // 2. mark the finish section
perf.measure('A to B', 'A', 'B'); // 3. define the name of the section and save

// 4. get results from specified section name
const measure = perf.getEntriesByName('A to B');

console.log(measure);
[ PerformanceEntry {
    name: 'A to B',
    entryType: 'measure',
    startTime: 87.395975,
    duration: 24.579894 } ]
```