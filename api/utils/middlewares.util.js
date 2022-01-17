// vendors
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';

// routes
import { registerAppRoutes } from '../network';

// constants
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicFolderPath = path.join(__dirname, '../public');

const setENV = () => {
  dotenv.config({ path: path.join(__dirname, '../.env') });
};

const setCORS = (server) => {
  const webLocalHost = 'http://localhost:3000/';
  const corsOptions = [webLocalHost];
  server.use(cors(corsOptions));
};

const setAllowedParseBodyOptions = (server) => {
  const options = [
    express.json(), // to parse body sended as JSON
    express.urlencoded({ extended: false }), // to parse body sended as urlencoded
  ];

  options.forEach((option) => server.use(option));
};

const setStaticFoder = (server) => {
  server.use('/api', express.static(publicFolderPath));
};

export const injectMiddlewares = (server) => {
  setENV();
  setCORS(server);
  setAllowedParseBodyOptions(server);
  setStaticFoder(server);
  registerAppRoutes(server);
};
