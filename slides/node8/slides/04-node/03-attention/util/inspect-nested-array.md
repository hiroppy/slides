## `[Array]`の表記追加

**semver-major**

ネストされた配列に対して、`[Array]`と表記されるように変更されました。

```js
> const obj = util.inspect({'a': {'b': ['c']}}, false, 1)
> obj
'{ a: { b: [Object] } }'
> assert.strictEqual(obj, '{ a: { b: [Array] } }')
AssertionError: '{ a: { b: [Object] } }' === '{ a: { b: [Array] } }'

// 8.0.0
> obj
'{ a: { b: [Array] } }'
> assert.strictEqual(obj, '{ a: { b: [Array] } }')
undefined
```

[nodejs/node#12046](https://github.com/nodejs/node/pull/12046)
