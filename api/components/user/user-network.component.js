// vendors
import express from 'express';

// utils
import { parse } from '../../utils';

// constants
const BASE_PATH = '/api/v1/user';
const userRouter = express.Router();

const onPostUser = async (req, res) => {
  const { error, data } = await parse.createObject('Employees', req.body, {
    useMasterKey: true,
  });

  if (error) {
    console.error(
      '\x1b[31m',
      '[RESPONSE ERROR]:',
      `Filed to create new user: ', ${error.message}`
    );
    res.status(statusCode).send({ error: message });
  } else if (data) {
    res.status(201).send({ isSuccess: true, data: { ...req.body } });
  }
};

userRouter.post(BASE_PATH, onPostUser);

export { userRouter };
