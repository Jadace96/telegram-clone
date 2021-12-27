// utils
import { number } from '../../utils';

export const addMessage = ({ user, message }) => {
  const fullMessageData = {
    user,
    message,
    date: new Date(),
    id: number.getRandom(),
  };

  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('\x1b[31m', '[message.controller]: No user or message');
      return reject('Data are required');
    } else {
      console.log(
        '\x1b[34m',
        '[message.controller]: Message added successfully'
      );
      resolve(fullMessageData);
    }
  });
};
