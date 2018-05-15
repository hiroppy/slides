## `does_zap_garbage`の追加

**semver-minor** since 7.2.0

v8 HeapStatistics へ`does_zap_garbage`が追加されました。  
`--zap_code_space`が有効かどうかのフラグを返します。  
これはヒープガーベージを上書きするパターンです。  
`malloced_memory`, `peak_malloced_memory`もフィールドに追加されました。

```js
> v8.getHeapStatistics()
{ total_heap_size: 7168000,
  total_heap_size_executable: 3670016,
  total_physical_size: 6132432,
  total_available_size: 1492201768,
  used_heap_size: 5416688,
  heap_size_limit: 1501560832,
  malloced_memory: 8192,
  peak_malloced_memory: 1412016,
  does_zap_garbage: 0 }
```

[src: Add does_zap_garbage to v8 HeapStatistics](https://github.com/nodejs/node/pull/8610)
