// utils
import { parse } from '../../utils';

const className = 'Employees';

export const createNewUser = async (newUserData) =>
  await parse.createObject(className, newUserData, { useMasterKey: true });
