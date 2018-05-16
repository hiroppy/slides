'use strict';

const path = require('path');
const fs = require('fs-extra');

const [, , outputDir] = process.argv;

if (!outputDir) process.exit(1);

const base = path.join(process.cwd(), outputDir);

if (fs.pathExistsSync(base)) {
  console.error('That directory already exists!');
  process.exit(1);
}

fs.mkdirsSync(base);
fs.copySync('template', base);
fs.copyFileSync(
  path.join(process.cwd(), 'common', 'slides', 'self-introduction.md'),
  path.join(base, 'slides', '01-self-introduction.md')
);
