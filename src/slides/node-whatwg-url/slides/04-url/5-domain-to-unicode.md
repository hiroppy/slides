## domainToUnicode

<p class="define">Function: domainToUnicode(domain: string)</p>
- domain: The URL to convert by Unicode

```js
const { domainToUnicode } = require('url');
domainToUnicode('xn--wgv71a119e.com'); // '日本語.com'
domainToUnicode('日本語.com'); // '日本語.com'
```
Returns the Unicode serialization of the domain.  
This is introduced as part of the new URL implementation  
but is not part of the WHATWG URL standard.
