'use strict';

const path = require('path');
const fs = require('fs-extra');

const outputDir = process.argv[2];

if (!outputDir) process.exit(1);

fs.mkdirsSync(outputDir);
fs.copySync('template', outputDir);
fs.copyFileSync(
  path.join('common', 'slides', 'self-introduction.md'),
  path.join(outputDir, 'slides', '01-self-introduction.md')
);
