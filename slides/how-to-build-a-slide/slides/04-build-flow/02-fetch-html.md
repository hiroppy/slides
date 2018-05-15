## fetch slides

<br>

The slide file name is 0-title.md, 01-context.md, 02-dir/0-title.md, etc...

```javascript
// fetch all slides
const context = require.context('./slides', true, /(md|html)$/);
const res = {
  id: context.id,
  slides: context
    .keys()
    .sort() // sort by file name
    .map((e) => context(e))
};
```

`require.context` is provided by webpack.  
The content acquired by the path is expanded as a string by `require.context`.

<a href="https://github.com/abouthiroppy/slides/blob/master/src/lib/fetch-slides.js" class="ref-link">
  abouthiroppy/slides/blob/master/src/lib/fetch-slides.js
</a>
