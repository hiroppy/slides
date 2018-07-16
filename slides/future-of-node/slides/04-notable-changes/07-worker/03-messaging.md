## Messaging

child_process の IPC と異なります。  
ブラウザと同様に`postMessage`を使い会話をします。

<br />

```js
const { MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));
port2.postMessage('hi');

port2.on('message', (message) => console.log(message));
port1.postMessage('bye');
```
