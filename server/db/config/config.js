
require('dotenv').config();
module.exports = {
  "development": {
    "use_env_variable": process.env.DATABASE_URL,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        " require": true,
        "rejectUnauthorized": false
      }
    }
  },

  // "development": {
  //   "username": "postgres",
  //   "password": "luigipixel17",
  //   "database": "divino-burger-api",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres",
  //   "port": 5432,

  // },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "development": {
      "use_env_variable": process.env.DATABASE_URL,
      "dialect": "postgres",
      "dialectOptions": {
        "ssl": {
          " require": true,
          "rejectUnauthorized": false
        }
      }
    }
  }
}
