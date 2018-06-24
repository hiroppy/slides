## worker_threads

独立したスレッドで動く環境を構築し、  
それらの間にメッセージチャンネルを構築をする手段を提供する。

<br />

```js
const { MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));
port2.postMessage('hi');

port2.on('message', (message) => console.log(message));
port1.postMessage('bye');
```
