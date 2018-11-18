<!-- sectionTitle: Tapable -->

## Tapable

<br />

<a href="https://github.com/webpack/tapable">webpack/tapable</a>

---

## Tapable

webpack を支えるプラグインシステム

<br />

`Waterfall`, `Bail`, `Loop` のタイプを持ち、  
webpack のライフサイクルをフックします

<br />

```javascript
// https://github.com/webpack/webpack/blob/master/lib/MainTemplate.js

this.hooks.render.tap(
  'MainTemplate',
  (bootstrapSource, chunk, hash, moduleTemplate, dependencyTemplates) => {
    const source = new ConcatSource();
    source.add('/******/ (function(modules) { // webpackBootstrap\n');
    ...
    return source;
  }
);
```

---

<!-- prettier-ignore -->
```javascript
const { SyncHook, AsyncParallelHook } = require('tapable');

class Compiler extends SyncHook {
  constructor() {
    super();
    this.hooks = { // 実行された時に処理を行う種類を設置
      run: new AsyncParallelHook(['source', 'chunk', 'hash']), // 引数を指定
      done: new SyncHook()
    };
    this.hooks.run.tap('run', (source, chunk, hash) => { console.log('[core]: run')});
    this.hooks.done.tap('done', () => { console.log('[core]: done'); });
  }
}

const compiler = new Compiler(), src = 'xxx', chunk = 'abc', hash = 'def';

compiler.hooks.run.tap('fooPlugin', (source, chunk) => { console.log('[userLand]: plugin')});
compiler.hooks.run.tapPromise('barPlugin', async (a, b) => {
  await new Promise((r) => setTimeout(() => r(), 1000));
});
compiler.hooks.done.tap('completion-message', () => { console.log('[userLand]: done'); });

compiler.hooks.run.promise(src, chunk, hash).then(() => { // 引数を設定し、実行
  console.log('finish');
  compiler.hooks.done.call(); // done -> completion-message
});
```

---

<!-- note
  プラグイン作ったことある人？
-->

## Compiler Hooks

<div class="list">
  <ul>
    <li>entryOption</li>
    <li>afterPlugins</li>
    <li>afterResolvers</li>
    <li>environment</li>
    <li>afterEnvironment</li>
    <li>beforeRun</li>
    <li>run</li>
    <li>watchRun</li>
    <li>normalModuleFactory</li>
    <li>contextModuleFactory</li>
    <li>beforeCompile</li>
  </ul>
  <ul>
    <li>compile</li>
    <li>thisCompilation</li>
    <li>compilation</li>
    <li>make</li>
    <li>afterCompile</li>
    <li>shouldEmit</li>
    <li>emit</li>
    <li>afterEmit</li>
    <li>done</li>
    <li>failed</li>
    <li>invalid</li>
    <li>watchClose</li>
  </ul>
</div>

<a href="https://webpack.js.org/api/compiler-hooks/#hooks" class="ref-link">https://webpack.js.org/api/compiler-hooks/#hooks</a>
