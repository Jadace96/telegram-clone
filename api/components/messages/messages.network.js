// vendors
import express from 'express';

// networks
import { response } from '../../network';

// controllers
import { addMessage } from './messages.controller';

// constants
const messagesRouter = express.Router();

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

messagesRouter.post('/api/message', onPostMessage);

export { messagesRouter };
