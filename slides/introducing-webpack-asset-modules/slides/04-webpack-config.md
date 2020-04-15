```js
// webpack.config.js

module.exports = {
  output: {
    assetModuleFilename: 'images/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.txt/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
  experiments: {
    asset: true,
  },
};
```

```js
import foo from './images/foo.png';

console.log(foo);
// /dist/images/151cfcfa1bd74779aadb.png
```
