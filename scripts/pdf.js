'use strict';

const path = require('path');
const { pdf } = require('fusuma');
const fs = require('fs-extra');

const [, , output] = process.argv;

if (!output) process.exit(1);

(async () => {
  const base = path.join(process.cwd(), output);
  const port = 3455;

  await pdf(path.join(base, 'dist'), path.join(base, 'slide.pdf'), port);
})();
