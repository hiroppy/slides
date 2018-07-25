## Measure renderToString

```js
// renderToStringをwatchするためにtimerifyで関数をラップする
const render = performance.timerify(require('react-dom/server').renderToString);

const obs = new PerformanceObserver((list, observer) => {
  list.getEntries().forEach((entry) => {
    // 結果はスタックされるため先にoutput2の結果が出力される output2: 4.037017ms
    if (entry.name === 'renderToString') console.log(`${entry.duration}ms`);
  });
  observer.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });

const Main = ({ n }) =>
  React.createElement(
    'ul',
    null,
    [...new Array(n)].map((_, i) => React.createElement('li', { key: i }, 'test'))
  );

render(Main(1)); // output1
render(Main(10000000)); // output2
```
