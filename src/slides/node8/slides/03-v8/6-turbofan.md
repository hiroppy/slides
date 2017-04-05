## TurboFan compiler
**V8の最適化された柔軟なJITコンパイラ**  
[Sea of Nodes](http://darksi.de/d.sea-of-nodes/)をコンセプトに作られました。  
以前の最適化コンパイラである[Crankshaft](https://blog.chromium.org/2010/12/new-crankshaft-for-v8.html)  
よりも多くのコードの最適化を可能とします。  
これまではES2015+のコードの最適化は困難でしたが、  
[Ignition](#15)とTurboFanを使うことにより可能としました。    
e.g. `scope`, `class literal`, `for of`, etc   

chrome 41から段階的に使用されています。

[TurboFan](https://github.com/v8/v8/wiki/TurboFan)  
[High-performance ES2015 and beyond](https://v8project.blogspot.jp/2017/02/high-performance-es2015-and-beyond.html)
