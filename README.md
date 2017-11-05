# Slides
[![Build Status](https://travis-ci.org/abouthiroppy/slides.svg?branch=master)](https://travis-ci.org/abouthiroppy/slides)

My slides using bespoke.

## My Slides
- [Sample](https://abouthiroppy.github.io/slides/hello/)
- [node-whatwg-url](https://abouthiroppy.github.io/slides/node-whatwg-url/)
- [node@8.0.0](http://abouthiroppy.github.io/slides/node8/)(Japanese)
- [nicohaco](https://abouthiroppy.github.io/slides/nicohaco/)(Japanese)
- [the present and future of JavaScript](https://abouthiroppy.github.io/slides/the-present-and-future-of-JavaScript/)

speakerdeck: https://speakerdeck.com/abouthiroppy  
slideshare: https://www.slideshare.net/about_hiroppy  
ECMAScript on niconare: http://niconare.nicovideo.jp/watch/kn1937

## Tasks
### Development
```sh
$ yarn install or npm install
$ npm start
```

### Production Build
```sh
$ npm run build
```

### Publish
```sh
$ npm run deploy
```

## Slide Syntax
All slides are written in HTML or markdown.  

### Background
Change the slide's background.

#### Slide
```md
<!-- background: xxx -->

## title
```

#### CSS
```css
.bespoke-backdrop.xxx {
  background: red;
}
```

### Section Title
This is the common setting of the slide for the title of the section.
#### Slide
```md
<!-- sectionTitle -->

## title
```
#### CSS
```css
.bespoke-backdrop.section-title {
  background: red;
}

.section-title h2 {
  color: var(--color-js);
}
```

### Presenter Note
#### Slide
```md
## title

<!-- note
This is the presenter note.
This sentence can be seen when using Presenter Mode.
-->
```
![](./images/presenter-host.png)

## Presenter Mode
Click the rocket(:rocket:) icon from the bottom right menu(三) and then slides for presentation will be opened as a new window, and an already open window will be windows for presenters.

Host: ?presenter=host  
View: ?presenter=view
