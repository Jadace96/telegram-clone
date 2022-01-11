// vendors
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';

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
  dotenv.config({ path: path.join(__dirname, '../.env') });
  options.forEach((option) => server.use(option));
  server.use('/api', express.static(publicFolderPath));
  registerAppRoutes(server);
};
