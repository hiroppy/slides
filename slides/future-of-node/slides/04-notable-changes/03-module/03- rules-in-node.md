## Rules in Node.js

- ファイルの拡張子は`.mjs`にしなくてはなりません
  - ブラウザでの識別子は`type="module"`
- CJS から ESM への呼び出しは行えません
  - dynamic import(`import()`)は CJS からも使用することが可能です
- CJS のファイルを ESM でインポートする場合、named import は使えません
  - CJS のオブジェクトは`default`キーワードで包まれるため
- ESM で使えないキーワードがあります
  - `__dirname`, `__filename`, `require`, `exports`, `module`, etc
