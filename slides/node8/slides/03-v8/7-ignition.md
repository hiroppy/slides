## Ignition interpreter 

**レジスタマシン**  
今までV8はインタプリタをもっていませんでした。  
V8のJITの問題点として、コードが一回実行されただけでも大量のメモリ消費をする  
可能性があり、メモリーオーバーヘッドを避ける必要がありました。  
Ignitionによって、25 - 50%の簡潔なバイトコードにコンパイルします。  
IgnitionはTurbofanの低レベルのアーキテクチャに依存しない  
マクロアセンブリ命令を使い、  
各オペコードのバイトコードハンドラを生成します。 

[Ignition Design Doc](https://docs.google.com/document/d/11T2CRex9hXxoJwbYqVQ32yIPMh0uouUZLdyrtmMoL44/edit)  
[Firing up the Ignition Interpreter](https://v8project.blogspot.jp/2016/08/firing-up-ignition-interpreter.html)
