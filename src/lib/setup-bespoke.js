import bespoke from 'bespoke';
import hash from 'bespoke-hash';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import scale from 'bespoke-scale';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';

const setup = (theme, opts = []) => {
  const common = [
    keys(),
    hash(),
    scale(),
    touch(),
    progress(),
    backdrop()
  ];

  return bespoke.from('article', [
    ...common,
    ...opts.map((opt) => opt()),
    theme()
  ]);
};

export default setup;
