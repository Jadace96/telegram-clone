// utils
import { parse } from '../../utils';

const className = 'Employees';

export const createNewUser = async (newUserData) =>
  await parse.createObject(className, newUserData, { useMasterKey: true });

export const getUser = async (userId) => {
  const objectId = await parse.getObjectId(className, 'userId', userId);

  return await parse.getData(className, objectId, { useMasterKey: true });
};

export const updateUser = async (userId, dataToUpdate) => {
  const objectId = await parse.getObjectId(className, 'userId', userId);

  const updateDataParams = {
    objectId,
    className,
    dataToUpdate,
    options: {
      useMasterKey: true,
    },
  };

  return await parse.updateData(updateDataParams);
};

export const deleteUser = async (userId) => {
  const objectId = await parse.getObjectId(className, 'userId', userId);

  return await parse.deleteObject(objectId, className);
};
