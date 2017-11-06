## how to share page information

Use localStorage to talk in real time between Host and View.

```javascript
// host.js
window.slide.bespoke.on('activate', (e) => {
  localStorage.setItem('page', JSON.stringify({
    date: Date.now(),
    page: e.index
  }));
});

// view.js
window.addEventListener('storage', (e) => {
  if (e.key === 'page') {
    const page = JSON.parse(e.newValue).page;

    window.slide.bespoke.slide(page);
  }
});
```

<a href="https://github.com/abouthiroppy/slides/tree/master/src/lib/ContentView" class="ref-link">
  https://github.com/abouthiroppy/slides/tree/master/src/lib/ContentView
</a>
