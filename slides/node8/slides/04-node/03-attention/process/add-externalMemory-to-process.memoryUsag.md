## `externalMemory`の追加

**semver-minor** since 7.2.0

v8 で管理される JS オブジェクトにバインドされた  
C++オブジェクトのメモリ使用量を返します。

```js
> console.log(util.inspect(process.memoryUsage()));
{ rss: 23371776,
  heapTotal: 10465280,
  heapUsed: 5756560 }

// 7.2.0 ~
> console.log(util.inspect(process.memoryUsage()));
{ rss: 23244800,
  heapTotal: 7692288,
  heapUsed: 4918392,
  external: 22846 }
```

[process: add `externalMemory` to process.memoryUsage](https://github.com/nodejs/node/pull/9587)
