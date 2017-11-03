const parseAttrs = (content) => {
  const res = {
    note      : '',
    className : '',
    background: 'default'
  };
  if (content === undefined) return res;

  // background
  {
    const arr = content.match(/<!-- background: (.+) -->/);

    res.background = arr ? arr[1] : 'default';
  }

  // section-title
  if (content.match(/<!-- sectionTitle -->/)) {
    res.background = 'section-title';
    res.className = 'section-title';
  }

  // note
  {
    const arr = content.match(/<!-- note[\s\S]*-->/g);

    res.note = arr ? arr[0].replace(/<!-- note/g, '').replace(/-->/g, '') : '';
  }

  return res;
};

export default parseAttrs;
