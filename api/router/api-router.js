// vendors
const express = require('express');

// constants
const apiRouter = express.Router();

const requestCallback = (req, res) => {
  console.log('BODY: ', req.body);
  const reqData = {
    path: req.path,
    method: req.method,
  };
  res.send(`Request info: ${JSON.stringify(reqData)}`);
};

apiRouter.all('/api', requestCallback);
apiRouter.get('/api/message', requestCallback);
apiRouter.post('/api/message', requestCallback);
apiRouter.delete('/api/message', requestCallback);

module.exports = { apiRouter };
