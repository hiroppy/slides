## 8.0.0のリリース時期変更

04月25日の予定でしたが、**05月30日**へ延期されました。  
V8のターゲットバージョンを5.7から5.8へ変更し、  
前方互換ABI(Application Binary Interface)を6.0にするためです。   
<br>
これによりv8の[Ignition](https://github.com/v8/v8/wiki/Interpreter)と[TurboFan](https://github.com/v8/v8/wiki/TurboFan)のパイプラインが  
8.0.0が入り、9.xからのLTSへのバックポートをしやすくするためです。  
IgnitionとTurbofanは5.9でデフォルトになるため5.8を入れ、  
semver-minorとして5.9へアップデートさせます。  

[V8 plan for Node.js LTS Carbon (A potential path to TurboFan + Ignition)](https://github.com/nodejs/CTC/issues/99)  
[Ignition + TurboFan: Node.js benchmarks](https://github.com/nodejs/node/issues/11851)
