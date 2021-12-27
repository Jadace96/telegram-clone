// vendors
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

// routes
import { registerAppRoutes } from '../network';

// constants
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicFolderPath = path.join(__dirname, '../public');

const options = [
  express.json(), // to parse body sended as JSON
  express.urlencoded({ extended: false }), // to parse body sended as urlencoded
];

export const injectMiddlewares = (server) => {
  options.forEach((option) => server.use(option));
  server.use('/api', express.static(publicFolderPath));
  registerAppRoutes(server);
};
