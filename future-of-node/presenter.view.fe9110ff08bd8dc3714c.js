(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{110:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(2),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.a.Component),u(n,[{key:"UNSAFE_componentWillMount",value:function(){window.addEventListener("storage",function(e){if("page"===e.key){var n=JSON.parse(e.newValue).page;window.slide.bespoke.slide(n)}})}},{key:"componentDidMount",value:function(){t.e(0).then(t.bind(null,7))}},{key:"render",value:function(){return r.a.createElement(i.a,{slides:this.props.slides})}}]),n}();n.default=a}}]);