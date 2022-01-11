// vendors
import Parse from 'parse/node';

// constants
let isDBConected = false;

const connect = () => {
  const { SERVER_URL, JS_KEY, APP_ID, MASTER_KEY } = process.env;

  if (!isDBConected) {
    Parse.initialize(APP_ID, JS_KEY, MASTER_KEY);
    Parse.serverURL = SERVER_URL;

    isDBConected = true;

    console.log('DB connected succesfully!');
  }
};

export const DBConnection = {
  connect,
};
