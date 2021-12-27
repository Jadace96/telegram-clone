// vendors
import express from 'express';

// utils
import { injectMiddlewares } from './utils';

// constants
import { devEnv } from './constants';

const server = express(); // to initialize express

const onServerMounted = () => {
  console.log(`Listening on ${devEnv.localhost}`);
};

injectMiddlewares(server);
server.listen(devEnv.port, onServerMounted);
