## fs.SyncWriteStreamが非推奨へ

**semver-major**

6.xのドキュメントでは廃止されていました。  
公開されていることを意図してないAPIなので非推奨へ。

```js
> fs.SyncWriteStream
...
> (node:57352) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
```

[nodejs/node#10467](https://github.com/nodejs/node/pull/10467)
