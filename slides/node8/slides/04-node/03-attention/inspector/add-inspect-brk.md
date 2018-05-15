## `--inspect-brk`オプションの追加

**semver-minor** since 7.6.0

`--debug-brk`と同じで、最初の行にブレークポイントを設定した状態で  
インスペクタを起動できます。

```
$ node --inspect-brk test.js
Debugger listening on 127.0.0.1:9229.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229 ...
Debugger attached.
```

[inspector: add --inspect-brk flag](https://github.com/nodejs/node/pull/8979)
