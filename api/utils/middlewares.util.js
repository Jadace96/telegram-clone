// vendors
const express = require('express');

// routes
const { rootRoutes } = require('../network');

const options = [
  express.json(), // to parse body sended as JSON
  express.urlencoded({ extended: false }), // to parse body sended as urlencoded
];

exports.injectMiddlewares = (server) => {
  options.forEach((option) => server.use(option));
  server.use('/api', express.static('../public'));
  rootRoutes(server);
};
