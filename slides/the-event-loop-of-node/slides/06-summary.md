<!-- sectionTitle: Summary -->

## Summary

<br />

```javascript
/* output             */
/* 4 (timers phase)   */ setTimeout(() => console.log('setTimeout'));
/* 5 (check phase)    */ setImmediate(() => console.log('setImmediate'));
/* 2 (nextTickQueue)  */ process.nextTick(() => console.log('nextTick'));
/* 3 (microTaskQueue) */ Promise.resolve().then(() => console.log('promise'));
/* 1 (sync)           */ (() => console.log('sync'))();
```

* Node.js uses `libuv`
* the Node.js's event loop has 6 phases and 2 queues

<br />

If you want to know the detail, please see my article!

👉 [Node.js でのイベントループの仕組みとタイマーについて](https://blog.hiroppy.me/entry/nodejs-event-loop)
