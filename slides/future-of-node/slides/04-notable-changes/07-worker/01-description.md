## What is worker_threads?

独立したスレッドで動作する環境を作り、  
それらの間にメッセージチャンネルを構築します。

<br />

Node.js において大量に負荷の高い処理することは苦手なので、  
CPU 負荷の高い作業を別のスレッドに委ね、負荷を分散させることが目的です。

<br />

```sh
$ node --experimental-worker index.js
```
