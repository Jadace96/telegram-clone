// vendors
import express from 'express';

// utils
import { injectMiddlewares } from './utils';

// config
import { config } from './config';

// lib
import { DBConnection } from './lib';

const server = express(); // to initialize express

const onServerMounted = () => {
  console.log(`Listening on ${config.localhost}`);
  DBConnection.connect();
};

injectMiddlewares(server);
server.listen(config.port, onServerMounted);
