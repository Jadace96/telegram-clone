// vendors
const express = require('express');

// router
const { apiRouter } = require('../router');

const options = [
  express.json(), // to parse body sended as JSON
  express.urlencoded({ extended: false }), // to parse body sended as urlencoded
  apiRouter,
];

const injectMiddlewares = (app) => {
  options.map((option) => app.use(option));
};

module.exports = {
  injectMiddlewares,
};
