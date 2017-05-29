## webpack

### Main Process(target: electron-main)
主に使う目的としては、`NODE_ENV`でコードの分岐があるため  
プロダクション用にコードを吐く必要があったため使用。  
今現在、ESMでは書かれておらずCommonJS modulesで書かれている

### Renderer Process(target: electron-renderer)
ReactのためにBabelを使用  
また`string paddng`は入っていないため`babel-polyfill`を使用  
今回はES5へ落とす必要性がないため、UglifyJSではなくBabiliを使用しminify
