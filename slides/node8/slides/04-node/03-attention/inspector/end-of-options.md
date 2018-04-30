## `--`の追加

**semver-minor** since 7.5.0

`-e`の後に`--`を付けるとそれがオプションの終了となります。

```js
$ node -e "console.log(process.argv)" -- -arg1 -arg2
[ '/Users/xxx/.yyy/node/v7.4.0/bin/node' ]

# 7.5.0 ~
$ node -e "console.log(process.argv)" -- -arg1 -arg2
[ '/Users/xxx/.yyy/node/v7.5.0/bin/node', '-arg1', '-arg2' ]
```

[`--` after `-e <script>` means end-of-options](https://github.com/nodejs/node/pull/10651)
