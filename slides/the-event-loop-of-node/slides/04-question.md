## 🤔

<br />

```javascript
setTimeout(() => console.log('setTimeout'));
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
(() => console.log('sync'))();
```

---

## 🤔

<br />

```javascript
setTimeout(() => console.log('setTimeout'));
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
(() => console.log('sync'))();

/* output
sync
nextTick
promise
setTimeout
setImmediate
*/
```
