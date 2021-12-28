// vendors
import express from 'express';

// networks
import { response } from '../../network';

// controllers
import { addMessage, getMessages } from './messages.controller';

// constants
const BASE_PATH = '/api/message';
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

const onGetMessages = (_, res) => {
  getMessages()
    .then((messageList) => response.success({ res, data: messageList }))
    .catch((error) => response.error({ res, details: error }));
};

messagesRouter.get(BASE_PATH, onGetMessages);
messagesRouter.post(BASE_PATH, onPostMessage);

export { messagesRouter };
