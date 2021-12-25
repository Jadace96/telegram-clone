// vendors
const express = require('express');

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
  res.status(201).send([{ error: '', status: 'ok', statusCode: '201' }]);
};

apiRouter.all('/api', requestCallback);
apiRouter.get('/api/message', requestCallback);
apiRouter.post('/api/message', requestCallback);
apiRouter.delete('/api/message', requestCallback);

module.exports = { apiRouter };
