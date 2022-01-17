// vendors
import express from 'express';

// networks
import { response } from '../../network';

// controllers
import { createNewUser } from './user-controller.component';

// constants
const BASE_PATH = '/api/v1/user';
const userRouter = express.Router();

const onPostUser = async (req, res) => {
  const responseParams = {
    req,
    res,
    statusCode: 400,
    message: 'Invalid information',
  };

  const { error, data } = await createNewUser(req.body);

  if (error) {
    responseParams.details = `Filed to create new user: ', ${error.message}`;
    response.error(responseParams);
  } else if (data) {
    responseParams.statusCode = 201;
    responseParams.data = { ...req.body };

    response.success(responseParams);
  }
};

userRouter.post(BASE_PATH, onPostUser);

export { userRouter };
