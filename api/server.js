// vendors
const express = require('express');

// utils
const { injectMiddlewares } = require('./utils');

// constants
const { devEnv } = require('./constants');

const server = express(); // to initialize express

const onServerMounted = () => {
  console.log(`Listening on ${devEnv.localhost}`);
};

injectMiddlewares(server);
server.use('/api', express.static('api/public'));
server.listen(devEnv.port, onServerMounted);
