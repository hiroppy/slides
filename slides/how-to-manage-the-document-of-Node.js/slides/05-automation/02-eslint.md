## lint

<div class="card">
  <div class="card-text">
    <span class="title">ESLint</span>
    <span class="description">A fully pluggable tool for identifying and reporting on patterns in JavaScript.</span>

    <a href="https://github.com/eslint/eslint">https://github.com/eslint/eslint</a>

  </div>
  ![](../../images/eslint.png)
</div>

<br>

In Node.js, Apply the same rules to documents by using the rules of the core code.

<br>

```txt
# Makefile

LINT_JS_TARGETS = benchmark doc lib test tools
LINT_JS_CMD = tools/eslint/bin/eslint.js --cache \
	--rulesdir=tools/eslint-rules --ext=.js,.mjs,.md \
	$(LINT_JS_TARGETS)
```
