// vendors
import express from 'express';
import Parse from 'parse/node';

// constants
const BASE_PATH = '/api/v1/user';
const userRouter = express.Router();

const onPostUser = async (req, res) => {
  const newObject = new Parse.Object('Employees');

  try {
    const data = await newObject.save({ ...req.body });
    console.log('Object created', data);
    res.status(201).send({ isSuccess: true, data: { ...req.body } });
  } catch (error) {
    console.error('Error while creating Object: ', error);
    res.status(500).send({ error });
  }
};

userRouter.post(BASE_PATH, onPostUser);

export { userRouter };
