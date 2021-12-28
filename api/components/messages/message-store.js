const messageList = [];

const addMessage = (message) => {
  messageList.push(message);
};

const getMessages = () => {
  return [...messageList];
};

export default {
  add: addMessage,
  list: getMessages,
  // get
  // update
  // delete
};
