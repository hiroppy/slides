## What is PerformanceEntry?

This is a class that stores information of each point.

```js
console.log(perf.getEntries());

[ PerformanceEntry {
    name: 'A to B',
    entryType: 'measure',
    startTime: 205.157366,
    duration: 25.734086 },
  PerformanceEntry {
    name: 'A',
    entryType: 'mark',
    startTime: 205.157366,
    duration: 0 },
  } ... ]
```

Generally, this has the following properties.  
`name`, `duration`, `startTime`, `entryType`, `kind`