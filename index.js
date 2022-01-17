// vendors
import express from 'express';

// utils
import { injectMiddlewares } from './api/utils';

// config
import { config } from './api/config';

// lib
import { DBConnection } from './api/lib';

const server = express(); // to initialize express

const onServerMounted = () => {
  console.log(`Listening on ${config.localhost}`);
  DBConnection.connect();
};

injectMiddlewares(server);
server.listen(config.port, onServerMounted);
