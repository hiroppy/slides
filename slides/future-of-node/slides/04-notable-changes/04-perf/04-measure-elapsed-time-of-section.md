## Measure elapsed time of section

```js
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'measure') {
      console.log(entry);
      // { name: 'A to B', entryType: 'measure', startTime: 86.126079, duration: 20003.415284}
      observer.disconnect();
    }
  });
});

obs.observe({ entryTypes: ['mark', 'measure'], buffered: true });

(async () => {
  performance.mark('A'); // 計測開始地点を登録
  await new Promise((r) => setTimeout(() => r(), 2000));
  performance.mark('B'); // 計測終了地点を登録
  performance.measure('A to B', 'A', 'B'); // A, Bの区間名をつける
})();
```
