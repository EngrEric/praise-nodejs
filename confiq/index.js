require('dotenv').config();

exports.dev = {
  db: {
    url:
      process.env.NODE_ENV !== 'development'
        ? process.env.DB_CLUSTER_URL
        : process.env.DB_URL || '',
  },
  app: {
    port: process.env.SERVER_PORT,
    secret_key: process.env.SECRET_key || '',
    authEmail: process.env.AUTH_EMAIL,
    authPassword: process.env.AUTH_PASSWORD,
  },
};
