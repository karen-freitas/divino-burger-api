
// require('dotenv').config()

module.exports = {

   "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },

  // "development": {
  //   "username": "qyparswnfqliom",
  //   "password": "316d28fb16cbabff8da69496b2b1e38cc76828a7d5a53b45939c198628b5f27b",
  //   "database": "daern93cekmj3r",
  //   "host": "ec2-44-199-86-61.compute-1.amazonaws.com",
  //   "dialect": "postgres",
  //   "dialectOptions": {
  //     "ssl": {
  //       "require": true,
  //       "rejectUnauthorized": false
  //     }
  //   }
  // },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
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
