// vendors
const express = require('express');

// routes
const { rootRoutes } = require('../network');

const options = [
  express.json(), // to parse body sended as JSON
  express.urlencoded({ extended: false }), // to parse body sended as urlencoded
];

const injectMiddlewares = (server) => {
  options.forEach((option) => server.use(option));
  rootRoutes(server);
};

module.exports = {
  injectMiddlewares,
};
