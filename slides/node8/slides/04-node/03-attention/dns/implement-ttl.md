## ttl が取得可能になった

**semver-minor** since 7.2.0

各レコードの TTL(Time-To-Live)を取得します。  
`dns.resolve4()`と`dns.resolve6()`に実装されました。

```js
> dns.resolve4("google.com", {ttl:true}, console.log)
null [ { address: '216.58.221.174', ttl: 273 } ]
> dns.resolve6("google.com", {ttl:true}, console.log)
null [ { address: '2404:6800:400a:807::200e', ttl: 242 } ]
```

[dns: implement {ttl: true} for dns.resolve4() and dns.resolve6()](https://github.com/nodejs/node/pull/9296)
