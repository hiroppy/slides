<!-- sectionTitle: What is the Event Loop? -->

## What is the Event Loop?

---

JavaScript is a single thread application  
and has a mechanism that enables efficient non-blocking I / O.

<br />

The event loop is executed in the main thread.

<br />

<hr />

<br />

The mechanism of the event loop differs between Node.js and the browser.

The event loop of node.js is based on `libuv`.

<br />

Today, I talk about the Node.js's event loop.✨🐢🚀✨

---

<img src="https://avatars3.githubusercontent.com/u/4030929?s=200&v=4" />

## libuv

<a href="https://github.com/libuv/libuv">https://github.com/libuv/libuv</a>

<br />

Cross-platform asynchronous I/O

<br />

libuv is a multi-platform support library with a focus on asynchronous I/O.  
It was primarily developed for use by Node.js,  
but it's also used by Luvit, Julia, pyuv, and others.
