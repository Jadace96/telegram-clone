// utils
import { parse } from '../../utils';

const className = 'Employees';

export const createNewUser = async (newUserData) =>
  await parse.createObject(className, newUserData, { useMasterKey: true });

export const getUser = async (userId) => {
  const objectId = await parse.getObjectId(className, 'userId', userId);

  return await parse.getData(className, objectId, { useMasterKey: true });
};
