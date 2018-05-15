## システムの CA を使用する

**semver-minor** since 7.5.0

Node 側のバンドルされた証明書ではなく、システムが提供する CA を利用します。  
CLI へ`--use-openssl-ca`, `--use-bundled-ca`の追加。  
環境変数へ`SSL_CERT_DIR=dir`, `SSL_CERT_FILE=file`の追加。

[crypto: use system CAs instead of bundled ones](https://github.com/nodejs/node/pull/8334)
