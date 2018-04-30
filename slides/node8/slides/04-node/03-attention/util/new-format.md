## 新しいフォーマットの追加

**semver-minor** since 7.9.0

- `%i`: 整数として整形
- `%f`: 浮動小数点までの整形

```js
> util.format('%d', 42.2)
'42.2'
> util.format('%i', 42.2)
'%i 42.2'
> util.format('%f', 42.2)
'%f 42.2'

// 8.0.0
> util.format('%d', 42.2)
'42.2'
> util.format('%i', 42.2)
'42'
> util.format('%f', 42.2)
'42.2'
```

[util: add %i and %f formatting specifiers](https://github.com/nodejs/node/pull/10308)
