<p class="flow-line">Markdown -> HTML -> React</p>

<br>
🤔

<br>

In this case, the loader chain is ...  
markdown-loader -> html-loader

<br>

```javascript
// webpack.config.js

{
  test: /\.md$/,
  use: [
    'html-loader',
    'markdown-loader'
  ]
}
```
