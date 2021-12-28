export const config = {
  dev: process.env.NODE_ENV !== 'PRODUCTION',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPwd: process.env.DB_PWD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};
