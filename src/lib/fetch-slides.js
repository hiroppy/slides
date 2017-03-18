const fetchSlides = (dir) => {

  /**
   * get all md and html contents
   * @param {Array<string>} context - filenames
   */
  function fetchAll(context) {
    return {
      id    : context.id,
      slides: context
        .keys()
        .sort()
        .filter((e) => e.includes(dir))
        .map((e) => context(e))

    };
  }

  return fetchAll(require.context('../slides', true, /(md|html)$/));
};

export const fetchCommon = () => {
  const context = require.context('../common/slide', true, /(md|html)$/);

  return context.keys().reduce((prev, current) => {
    prev[current.split('./')[1]] = context(current);

    return prev;
  }, {});
};

export default fetchSlides;
