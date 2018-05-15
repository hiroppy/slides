## URL

<p class="define">Constructor: new URL(input: string, base?: string | URL)</p>
- input: The input URL to parse.
- base: The base URL to resolve against if the input is not absolute.

```js
const { URL } = require('url');
new URL('https://user:pass@hname:8080/path?a=b#hash');
// new URL('/path?a=b#hash', 'https://user:pass@hname:8080');
// URL {
//   href: https://user:pass@hname:8080/path?a=b#hash
//   protocol: https:
//   username: user
//   password: --------
//   hostname: hname
//   port: 8080
//   pathname: /path
//   search: ?a=b
//   hash: #hash
// }
```

'日本語' is converted to ASCII by Punycode algorithm.
