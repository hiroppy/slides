## Service Worker

Introduce [offline-plugin](https://github.com/NekR/offline-plugin) to use Service Worker.  
Save scripts and images preferentially.

<br>

```javascript
// webpack.prod.config.js

module.exports = {
  plugins: [
    new OfflinePlugin(),
    ...
  ]
};

// offline.js

import offlineRuntime from 'offline-plugin/runtime';

offlineRuntime.install();
```
