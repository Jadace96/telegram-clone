// vendors
import Parse from 'parse/node';

export const createNewUser = async (newUserData) => {
  const users = new Parse.Object('Users');

  return await users.save({ ...newUserData }, { useMasterKey: true }).then(
    (data) => ({ data }),
    (error) => ({ error })
  );
};

export const getUser = async (userId) => {
  const Users = new Parse.Object('Users');
  const users = new Parse.Query(Users);

  return users.get(userId, { useMasterKey: true }).then(
    (data) => ({ data }),
    (error) => ({ error })
  );
};
