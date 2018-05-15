## timerify

<br />

You can use `performance.timerify` to make a `function` entry.

```js
const { performance } = require('perf_hooks');

function create() {
  console.log('create');
}

const wrapped = performance.timerify(create);

wrapped();
```

<br />

An observer will catch a `function` entry when `wrapped` is called.
