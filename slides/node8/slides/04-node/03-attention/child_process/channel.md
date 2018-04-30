`channel`が公開APIへ追加

**semver-minor** since 7.1.0

今までプライベート扱いだった`_channel`のエイリアスです。  
将来的に`_channel`は廃止されます。  
IPC(Inter Process Communication) channelへの参照を返します。

```js
> const fork = require('child_process').fork
> const n = fork('./test.js')
> n.channel
Pipe {
  bytesRead: 0,
  _externalStream: [External],
  fd: 12,
  writeQueueSize: 0,
  buffering: false,
  onread: [Function],
  sockets: { got: {}, send: {} } }
> n.channel === n._channel
true
```

[child_process: add public API for IPC channel](https://github.com/nodejs/node/pull/9322)
