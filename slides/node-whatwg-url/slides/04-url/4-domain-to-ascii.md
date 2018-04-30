## domainToASCII

<p class="define">Function: domainToASCII(domain: string)</p>
- domain: The URL to convert by Punycode

```js
const { domainToASCII } = require('url');
domainToASCII('日本語.com'); // xn--wgv71a119e.com
domainToASCII('xn--wgv71a119e.com'); // xn--wgv71a119e.com
```
Returns the Punycode ASCII serialization of the domain.  
This is introduced as part of the new URL implementation  
but is not part of the WHATWG URL standard.
