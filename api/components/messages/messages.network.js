// vendors
const express = require('express');

// network
const { response } = require('../../network');

// controller
const { addMessage } = require('./messages.controller');

// constants
const router = express.Router();

const onPostMessage = (req, res) => {
  const responseParams = {
    req,
    res,
    statusCode: 400,
    details: 'Controller error',
    message: 'Invalid information',
  };

  addMessage(req.body)
    .then((data) => {
      responseParams.statusCode = 201;
      responseParams.data = { ...data };

      response.success(responseParams);
    })
    .catch(() => {
      response.error(responseParams);
    });
};

router.post('/api/message', onPostMessage);

module.exports = router;
