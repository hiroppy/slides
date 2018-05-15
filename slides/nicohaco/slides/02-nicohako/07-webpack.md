## webpack

### Main Process(target: electron-main)

主に使う目的としては、`NODE_ENV`でコードの分岐があるため  
プロダクション用にコードを吐く必要があったため使用。  
今現在、ESM では書かれておらず CommonJS modules で書かれている

### Renderer Process(target: electron-renderer)

React のために Babel を使用  
また`string paddng`は入っていないため`babel-polyfill`を使用  
今回は ES5 へ落とす必要性がないため、UglifyJS ではなく Babili を使用し minify
