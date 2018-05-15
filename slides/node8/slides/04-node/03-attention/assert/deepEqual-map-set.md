## deepEqual が Map, Set のサポート

**semver-major**

```js
> assert.deepEqual(new Set([1, 2]), new Set([1]))
AssertionError: Set { 1, 2 } deepEqual Set { 1 }
    at repl:1:8
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:433:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
    at REPLServer.Interface._onLine (readline.js:262:10)
    at REPLServer.Interface._line (readline.js:611:8)
> assert.deepEqual(new Set([1, 2]), new Set([1, 2]))
undefined
```

[nodejs/node#12142](https://github.com/nodejs/node/pull/12142)
