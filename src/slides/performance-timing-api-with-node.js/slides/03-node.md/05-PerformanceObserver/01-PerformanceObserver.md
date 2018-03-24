## PerformanceObserver

<br />

`PerformanceObserver` objects provide notifications   
when new `PerformanceEntry` instances  
have been added to the Performance Timeline.

```javascript
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries());
  observer.disconnect();
});

// entryTypes: 'mark' | 'measure' | 'function' | 'gc' | 'http2' | 'node'
// https://github.com/nodejs/node/blob/master/lib/perf_hooks.js#L65-L72
obs.observe({ entryTypes: ['mark'], buffered: true });

performance.mark('test');
```