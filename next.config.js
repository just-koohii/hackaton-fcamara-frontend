const withTM = require('next-transpile-modules');

module.exports = withTM(['@material-ui/core'])({
  transpileModules: ['@material-ui/core'],
});
