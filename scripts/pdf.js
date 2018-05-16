'use strict';

const path = require('path');
const serve = require('serve');
const { pdf } = require('fusuma');
const fs = require('fs-extra');

const [, , output] = process.argv;

if (!output) process.exit(1);

(async () => {
  const base = path.join(process.cwd(), output);
  const port = 3455;

  const server = serve(path.join(base, 'dist'), {
    port
  });

  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  await pdf(`http://localhost:${port}`, path.join(process.cwd(), output, 'slide.pdf'));

  server.stop();
})();
