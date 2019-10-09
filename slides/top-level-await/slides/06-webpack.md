## webpack@next

```js
// ---------- webpack.config.js ----------
module.exports = {
  experiments: {
    topLevelAwait: true,
    importAwait: true,
    importAsync: true,
    asyncWebAssembly: true
  }
};

// ---------- db-connection.js ----------
export const dbCall = async data => {
  await new Promise(r => setTimeout(r, 100));
  return 'fake data';
};

// ---------- main.js ----------
import await { dbCall } from './db-connection.js';
// or const { dbCall } = import('./db-connection.js');

const { createUser } = await UserApi;
```

`db-connection.js` is **an async module** and async modules have different evaluation semantics.

Async modules can't imported with a normal import. They need to be imported with `import await`.

`import()` doesn't care about whether a module is an async module or not.
