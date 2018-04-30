## send to a react component

Pass slides to React using `dangerouslySetInnerHTML`  
after slides are converted to HTML.

```javascript
const Base = (props) => (
  <article>
    {
      props.slides.map((slide, i) => (
        <section
          key={slide.meta.id}
          className={slide.meta.className}
          data-bespoke-backdrop={slide.meta.background}
          dangerouslySetInnerHTML={{ __html: slide.context }}
        />
      ))
    }
  </article>
);
```
