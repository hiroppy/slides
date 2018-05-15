## Usage

<br />

```javascript
// if you want to check Date Object
isDate(new Date());

function isDate(d) {
  return Object.prototype.toString.call(d) === '[object Date]' && d instanceof Date;
}

// from Node10
const { types } = require('util');

types.isDate(new Date());

// if you want to check Generator Function
isGeneratorFunction(function*() {});

function isGeneratorFunction(g) {
  return objectToString(g) === '[object GeneratorFunction]';
}

// from Node10
types.isGeneratorFunction(function*() {});
```
