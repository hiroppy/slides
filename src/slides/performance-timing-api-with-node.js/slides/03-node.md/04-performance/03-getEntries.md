## getEntries

```javascript
console.log(perf.getEntries());

 { name: 'node',
    entryType: 'node',
    startTime: 0,
    duration: 97.41361999511719,
    nodeStart: 2.368034988641739,
    v8Start: 2.903650015592575,
    bootstrapComplete: -1,
    environment: 6.92179000377655,
    loopStart: -1,
    loopExit: -1,
    thirdPartyMainStart: -1,
    thirdPartyMainEnd: -1,
    clusterSetupStart: -1,
    clusterSetupEnd: -1,
    moduleLoadStart: 71.95369800925255,
    moduleLoadEnd: 71.98005101084709,
    preloadModuleLoadStart: 71.98025599122047,
    preloadModuleLoadEnd: 72.01212501525879 },
  PerformanceEntry {
    name: 'A to B',
    entryType: 'measure',
    startTime: 74.891418,
    duration: 19.03711 },
  PerformanceEntry {
    name: 'A',
    entryType: 'mark',
    startTime: 74.891418,
    duration: 0 },
  PerformanceEntry {
    name: 'B',
    entryType: 'mark',
    startTime: 93.928528,
    duration: 0 } ]
```