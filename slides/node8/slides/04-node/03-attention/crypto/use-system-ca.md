## システムのCAを使用する

**semver-minor** since 7.5.0

Node側のバンドルされた証明書ではなく、システムが提供するCAを利用します。  
CLIへ`--use-openssl-ca`, `--use-bundled-ca`の追加。  
環境変数へ`SSL_CERT_DIR=dir`, `SSL_CERT_FILE=file`の追加。

[crypto: use system CAs instead of bundled ones](https://github.com/nodejs/node/pull/8334)
