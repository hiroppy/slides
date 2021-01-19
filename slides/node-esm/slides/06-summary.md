<!-- sectionTitle: Summary -->

<!-- note
This is today's summary.

* a file becomes ESM / when package.json has `type: module`
* a file's module / depends on the closest parent's package.json
* at the top level, CJS cannot call ESM
* some variables used in CJS / cannot be used in ESM
* the goal is to drop a flag / by when Node 12 starts LTS / in October 2019

Please look forward to future Node.js!
-->

## Summary

<br />

- a file becomes ESM when package.json has `type: module`
- a file's module depends on the closest parent's package.json
- at the top level, CJS cannot call ESM
- some variables used in CJS cannot be used in ESM
- the goal is to drop a flag by when Node 12 starts LTS in October 2019

---

<!-- sectionTitle: References -->

<!-- note
These are the references / used to make this slide.
-->

## References

<br />

- [nodejs/modules](https://github.com/nodejs/modules)
- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules)
- [Node.js の新しいモジュール方式の実験的導入](https://blog.hiroppy.me/entry/nodejs-experimental-modules)
- [ES Modules への橋渡しとしての nomodule 属性](https://blog.jxck.io/entries/2017-06-21/nomodule-attribute.html)
