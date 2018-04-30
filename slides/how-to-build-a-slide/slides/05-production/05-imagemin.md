## reduce image size

Use [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader), it uses [imagemin](https://github.com/imagemin/imagemin).

<br>

image-webpack-loader -> file-loader

<br>

```js
// webpack.config.js

{
  test: /\.(png|jpg|gif|svg?)$/,
  use: [
    'file-loader',
    'image-webpack-loader'
  ]
}
```
