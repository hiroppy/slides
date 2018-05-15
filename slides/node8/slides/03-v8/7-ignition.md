## Ignition interpreter

**レジスタマシン**  
今まで V8 はインタプリタをもっていませんでした。  
V8 の JIT の問題点として、コードが一回実行されただけでも大量のメモリ消費をする  
可能性があり、メモリーオーバーヘッドを避ける必要がありました。  
Ignition によって、25 - 50%の簡潔なバイトコードにコンパイルします。  
Ignition は Turbofan の低レベルのアーキテクチャに依存しない  
マクロアセンブリ命令を使い、  
各オペコードのバイトコードハンドラを生成します。

[Ignition Design Doc](https://docs.google.com/document/d/11T2CRex9hXxoJwbYqVQ32yIPMh0uouUZLdyrtmMoL44/edit)  
[Firing up the Ignition Interpreter](https://v8project.blogspot.jp/2016/08/firing-up-ignition-interpreter.html)
