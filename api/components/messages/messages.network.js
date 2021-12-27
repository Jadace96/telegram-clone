// vendors
const express = require('express');

// network
const { response } = require('../../network');

// constants
const messagesRouter = express.Router();

const requestCallback = (req, res) => {
  const responseParams = {
    req,
    res,
    statusCode: 400,
    message: `An error has occurred on ${req.path}`,
    details:
      'Details about the error that should not be shown to the client for security, but should be shown to us in the terminal.',
  };
  if (req.query.error === 'ok') {
    response.error(responseParams);
  } else {
    responseParams.statusCode = 201;
    responseParams.message = `Successful Request on ${req.path}`;

    response.success(responseParams);
  }
};

messagesRouter.get('/api/message', requestCallback);
messagesRouter.post('/api/message', requestCallback);
messagesRouter.delete('/api/message', requestCallback);

module.exports = messagesRouter;
