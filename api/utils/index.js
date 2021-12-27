const numberUtil = require('./number.util');
const { injectMiddlewares } = require('./middlewares.util');
const { openLocalhostInChrome } = require('./browser.util');

module.exports = {
  ...numberUtil,
  injectMiddlewares,
  openLocalhostInChrome,
};
