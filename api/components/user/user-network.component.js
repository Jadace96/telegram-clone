// vendors
import express from 'express';

// networks
import { response } from '../../network';

// controllers
import {
  getUser,
  updateUser,
  deleteUser,
  createNewUser,
} from './user-controller.component';

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

  console.log('REQ BODY: ', req.body);
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

const onGetUser = async (req, res) => {
  const { error, data } = await getUser(req?.query?.id);

  if (error) {
    response.error({ res, details: error, message: error });
  } else if (data) {
    response.success({ res, data });
  }
};

userRouter.get(BASE_PATH, onGetUser);
userRouter.post(BASE_PATH, onPostUser);

export { userRouter };
