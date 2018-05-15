## スタックトレースの改善

`--trace-warnings`時の promise スタックトレースの改善  
`UnhandledPromiseRejectionWarning`と  
`UnhandledPromiseRejectionWarning`が改善されました。

```js
$ node --trace-warnings
> const p = Promise.reject(new Error('This was rejected'))
> setImmediate(() => p.catch(() => {}))
(node:40981) Error: This was rejected
...
(node:40981) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.
In the future, promise rejections that are not handled will terminate
the Node.js process with a non-zero exit code.
...
(node:40981) PromiseRejectionHandledWarning:
Promise rejection was handled asynchronously (rejection id: 1)
    at getAsynchronousRejectionWarningObject (internal/process/promises.js:12:10)
    at rejectionHandled (internal/process/promises.js:42:21)
    ...
```

[promise: better stack traces for --trace-warnings](https://github.com/nodejs/node/pull/9525)
