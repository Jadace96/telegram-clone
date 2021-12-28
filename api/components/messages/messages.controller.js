// utils
import { number } from '../../utils';

// store
import store from './message-store';

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

      store.add(fullMessageData);
      resolve(fullMessageData);
    }
  });
};

export const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};
