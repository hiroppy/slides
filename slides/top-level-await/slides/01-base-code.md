```js
import { process } from './some-module.js';

const dynamic = import(computedModuleSpecifier);
const data = fetch(url);

//                             👇                      👇
export const output = process((await dynamic).default, await data);
```

https://github.com/tc39/proposal-top-level-await
