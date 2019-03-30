const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  exportPathMap: () =>
    ({ '/': { page: '/' }, '/favourites': { page: '/favourites' } }),
});
