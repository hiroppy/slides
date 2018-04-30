## dynamic import

Don't bundle with 1 file.  
Presenter Mode's codes are separated from the core code.

```javascript
// AppContainer.js

constructor(props) {
  if (mode === 'view') {
    import(/* webpackChunkName: 'presenter.view' */ './ContentView/View')
      .then((e) => {
        ...
      });
  }
  else if (mode === 'host') {
    import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host')
      .then((e) => {
        ...
      });
  }
}
```

<a href="https://github.com/abouthiroppy/slides/blob/master/src/lib/AppContainer.js" class="ref-link">
  https://github.com/abouthiroppy/slides/blob/master/src/lib/AppContainer.js
</a>
