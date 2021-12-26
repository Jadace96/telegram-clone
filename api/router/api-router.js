// vendors
const express = require('express');

// network
const { response } = require('../network');

// constants
const apiRouter = express.Router();

const requestCallback = (req, res) => {
  // res.header({ 'My-Custom-header': 'This is my custom header' });
  // console.log('HEADERS: ', req.headers);

  // console.log('BODY: ', req.body);

  // console.log('QUERY: ', req.query);

  // const reqData = {
  //   path: req.path,
  //   method: req.method,
  // };
  // res.send(`Request info: ${JSON.stringify(reqData)}`);

  // empty response
  // res.status(201).send();

  // flat response
  // res.status(201).send('Flat response');

  // with data and structured
  // res.status(201).send([{ error: '', status: 'ok', statusCode: '201' }]);
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

apiRouter.get('/api/message', requestCallback);
apiRouter.post('/api/message', requestCallback);
apiRouter.delete('/api/message', requestCallback);

module.exports = { apiRouter };
