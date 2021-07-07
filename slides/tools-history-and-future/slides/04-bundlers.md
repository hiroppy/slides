<!-- section-title: bundlers -->

## Bundlers

<br />

<!-- block-start: grid, images -->

![](../images/browserify.png)

![](../images/webpack.png)

![](../images/rollup.png)

![](../images/parcel.png)

![](../images/esbuild.png)

<!-- block-end -->

- 他にも Packem, FuseBox, Lasso, Stealjs, microbundle(rollup), etc🤯
- 求められてきたことと今後
  - 安定性とチャンク最適化
  - バンドル以外の機能
    - dev-server => livereload, HMR, lazy load components
    - transpile => jsx, ts, css, wasm, json, etc...
  - #0CJS(0 Config JS)
  - speed <- new

---

## Speed

<br />

![](../images/esbuild-benchmark.svg)

<br />

- [Parcel 2 beta 3](https://v2.parceljs.org/blog/beta3/)
  - parcel は rust と swc に書き換えたことにより、10 倍早くなった
    ![](../images/parcel-perf-chart.png)
- 現状で webpack で高速化するには？ => [esbuild-loader](https://github.com/privatenumber/esbuild-loader)
  - ts-loader, babel-loader をなくし、esbuild に任せる
  - 標準の terser を使わずに esbuild の minimizer を使う
- 今後、parsing, loaders のマルチスレッド化 => [チケット](https://github.com/webpack/webpack/projects/5#card-10389919)

---

## Frontend Build Tools

<br />

<!-- block-start: grid, images -->

![](../images/webpack.png)

![](../images/parcel.png)

![](../images/vite.png)

![](../images/snowpack.png)

<!-- block-end -->
