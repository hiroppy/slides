## v8 inspector へ切り替え

**semver-major**

全ての移行に必要な作業が終わったので、`--debug`は使えなくなりました。

```
$ node --debug
node: bad option: --debug
$ node --inspect
Debugger listening on 127.0.0.1:9229.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229 ...
>
$ node --inspect-brk
Debugger listening on 127.0.0.1:9229.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229 ...
```

[Switch the CLI debugger to V8 inspector](https://github.com/nodejs/node/issues/11421)  
[deps: Add node-inspect](https://github.com/nodejs/node/pull/10187)  
[src: Remove support for --debug](https://github.com/nodejs/node/pull/12197)
