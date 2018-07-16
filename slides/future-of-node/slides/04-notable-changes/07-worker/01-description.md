## What is worker_threads?

独立したスレッドで動作する環境を構築し、  
それらの間にメッセージチャンネルを行う手段を提供します。

<br />

Node.js において大量に負荷の高い処理することは苦手です。  
なので、CPU 負荷の高い作業を別のスレッドに委ねて、  
負荷を分散させることが目的です。

<br />

```sh
$ node --experimental-worker index.js
```
