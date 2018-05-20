'use strict';

const { join } = require('path');
const ghpages = require('gh-pages');

const [, , input] = process.argv;

if (!input) process.exit(1);

ghpages.publish(
  join(process.cwd(), input, 'dist'),
  {
    dest: input.split('/').slice(-1)[0]
  },
  (err) => {
    if (err) console.error(err);
    console.log('Published');
  }
);
