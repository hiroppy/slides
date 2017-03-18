## URLSearchParams

<p class="define">Constructor: new URLSearchParams(init?: string)</p>
- init: The URL query

```js
const { URLSearchParams } = require('url');
new URLSearchParams('foo=bar&foo=baz');
// URLSearchParams { 'foo' => 'bar', 'foo' => 'baz' }
const params = new URLSearchParams('foo=bar&foo=baz');
for (const [name, value] of params) {
  console.log(name, value);
}
// foo bar
// foo baz
```
The `querystring` module is similar purpose,  
but this API is designed purely for URL query strings.  
Returns an ES6 Iterator over each of the name-value pairs in the query string. 
