export const config = {
  cors: process.env.CORS,
  port: process.env.PORT || 8080,
  serverUrl: process.env.SERVER_URL,
  javascriptKey: process.env.JS_KEY,
  applicationId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  isDev: process.env.NODE_ENV !== 'PROD',
};

config.localhost = process.env.HOST || `http://localhost:${config.port}/api/v1`;
