## Measure Load Dependencies

```js
const mod = require('module');
const { performance, PerformanceObserver } = require('perf_hooks');

// Monkey patch the require function
require = performance.timerify(require);
mod.Module.prototype.require = performance.timerify(mod.Module.prototype.require);

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    // [0]: duration: 0.3113, name: require
    // [1]: duration: 0.0004, name: Module.require (already loaded)
    console.log(`require('${entry[0]}')`, entry.duration);
  });
  obs.disconnect(); // Disconnect
  performance.clearFunctions(); // Free memory
});
obs.observe({ entryTypes: ['function'], buffered: true });

require('fs');
```