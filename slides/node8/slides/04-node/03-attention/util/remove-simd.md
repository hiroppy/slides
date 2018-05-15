## `util.format`から SIMD を取り除く

**semver-major**

upstream の v8 が SIMD のサポートを切っているためです。

```js
$ node --harmony_simd

> assert.strictEqual(util.inspect(SIMD.Int32x4()), 'Int32x4 [ 0, 0, 0, 0 ]');
undefined

// 8.0.0
> assert.strictEqual(util.inspect(SIMD.Int32x4()), 'Int32x4 [ 0, 0, 0, 0 ]');
AssertionError: 'Int32x4 {}' === 'Int32x4 [ 0, 0, 0, 0 ]'
```

[lib: remove simd support from util.format()](https://github.com/nodejs/node/pull/11346)
