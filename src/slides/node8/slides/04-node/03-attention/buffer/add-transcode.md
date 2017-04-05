## `transcode()`の追加

**semver-minor** since 7.1.0

主にICUを使い、Nodeでサポートされているエンコードから  
別のものへバッファーをトランスコードします。

```js
> const icu = process.binding('icu');
undefined
> const newBuf = icu.transcode(Buffer.from('€'), 'utf8', 'ascii'); // source, from, to
undefined
> console.log(newBuf)
<Buffer 3f>
> Buffer.isBuffer(newBuf)
true
```

[buffer: add buffer.transcode](https://github.com/nodejs/node/pull/9038)
