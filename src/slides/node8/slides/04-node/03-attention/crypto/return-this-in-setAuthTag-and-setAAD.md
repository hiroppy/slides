## `setAuthTag`と`setAAD`でthisを返す

**semver-minor** since 7.2.0

```js
> const key = '0123456789'
> const tagbuf = Buffer.from('tagbuf')
> const aadbuf = Buffer.from('aadbuf')
> const decipher = crypto.createDecipher('aes-256-gcm', key)
> decipher.setAuthTag(tagbuf)
Decipher {
  _handle: {},
  _decoder: null,
  _options: undefined,
  writable: true,
  readable: true }
> assert.strictEqual(decipher.setAuthTag(tagbuf), decipher)
undefined
> assert.strictEqual(decipher.setAAD(aadbuf), decipher)
undefined
```

[crypto: return this in setAuthTag/setAAD](https://github.com/nodejs/node/pull/9398)
