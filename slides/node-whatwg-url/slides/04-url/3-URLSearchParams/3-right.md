## has, sort, toString

## keys, values, entries, forEach

```js
const params = new URLSearchParams('foo=bar&hoge=fuga&foo=baz');
params.has('foo'); // true
params.toString(); // 'foo=bar&hoge=fuga&foo=baz'
params.sort(); // foo=bar&foo=baz&hoge=fuga
params.keys(); // URLSearchParamsIterator { 'foo', 'foo', 'hoge' }
params.values(); // URLSearchParamsIterator { 'bar', 'baz', 'fuga' }
params.entries();
// URLSearchParamsIterator { [ 'foo', 'bar' ], [ 'foo', 'baz' ], [ 'hoge', 'fuga' ] }
params.forEach((value, name, searchParams) => console.log(value, name));
// bar foo
// baz foo
// fuga hoge
```
