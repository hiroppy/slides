## Hot Topics

- 標準で full-icu のサポートをする
  - ISSUE: [Building with full-icu by default](https://github.com/nodejs/node/issues/19214)
- Node.js Package Mode を導入するかどうか (`.js`で ESM を扱えるようにする)
  - PR: [esm: Implement esm mode flag](https://github.com/nodejs/node/pull/18392)
  - package.json の`esm`識別子を使い、次の package.json までに
  - ネストされたフォルダとサブフォルダをすべて ESM とみなす仕様
- `require` の情報を ESM でも取得できるようにする
  - PR: [Import.meta.require](https://github.com/nodejs/node/pull/21317)
- [google/brotli](https://github.com/google/brotli) をコアへ導入 (namespace 問題でブロック中)
  - PR: [brotli: add brotli support](https://github.com/nodejs/node/pull/20458)
  - `@nodejs/compression/zlib`, `@nodejs/compression` 🤷‍
