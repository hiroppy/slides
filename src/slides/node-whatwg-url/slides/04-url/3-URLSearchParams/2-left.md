## append, delete,
## set, get, getAll

```js
const params = new URLSearchParams(); // URLSearchParams {}
params.set('foo', 'bar'); // URLSearchParams { 'foo' => 'bar' }
params.get('foo'); // bar
params.append('foo', 'baz'); // URLSearchParams { 'foo' => 'bar', 'foo' => 'baz' }
params.get('foo'); // bar
params.getAll('foo')) // [ 'bar', 'baz' ]

//  If there are any pre-existing name-value pairs whose names are name,
//  set the first such pair's value to value and remove all others.
params.set('foo', 'piyo'); // URLSearchParams { 'foo' => 'piyo' }
params.delete('foo'); // URLSearchParams {}
```
