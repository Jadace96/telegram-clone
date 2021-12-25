// vendors
const express = require('express');

// utils
const { injectMiddlewares } = require('./utils');

// constants
const { devEnv } = require('./constants');

const app = express(); // to initialize express

const onServerMounted = () => {
  console.log(`Listening on ${devEnv.localhost}`);
};

injectMiddlewares(app);
app.listen(devEnv.port, onServerMounted);
