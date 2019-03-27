const withTypescript = require('@zeit/next-typescript');
module.exports = (() => {
  withTypescript();
  return {
    exportPathMap: function() {
      return { '/': { page: '/' } };
    },
  };
})();
