## 8.0.0 のリリース時期変更

04 月 25 日の予定でしたが、**05 月 30 日**へ延期されました。  
V8 のターゲットバージョンを 5.7 から 5.8 へ変更し、  
前方互換 ABI(Application Binary Interface)を 6.0 にするためです。  
<br>
これにより v8 の[Ignition](https://github.com/v8/v8/wiki/Interpreter)と[TurboFan](https://github.com/v8/v8/wiki/TurboFan)のパイプラインが  
8.0.0 が入り、9.x からの LTS へのバックポートをしやすくするためです。  
Ignition と Turbofan は 5.9 でデフォルトになるため 5.8 を入れ、  
semver-minor として 5.9 へアップデートさせます。

[V8 plan for Node.js LTS Carbon (A potential path to TurboFan + Ignition)](https://github.com/nodejs/CTC/issues/99)  
[Ignition + TurboFan: Node.js benchmarks](https://github.com/nodejs/node/issues/11851)
