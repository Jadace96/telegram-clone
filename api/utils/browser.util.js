// vendors
const open = require('open');

// constants
const { devEnv } = require('../constants');

const openLocalhostInChrome = async () =>
  await open(devEnv.localhost, {
    app: { name: open.apps.chrome },
  });

module.exports = {
  openLocalhostInChrome,
};
