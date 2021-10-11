'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
    }
  };
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING
  }, {
      sequelize,
    modelName: 'users',
  });
  return users;
};

// const {DataTypes} =require("sequelize")
// const sequelize = require("../sequelize");

// const users = sequelize.define("user",{
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     role: DataTypes.STRING,
//     restaurant: DataTypes.STRING

// });
// const init = async () => {
//   await users.sync();
// };

// init();

// module.exports = users;
// module.exports = (sequelize, Sequelize) => {
//   const users = sequelize.define( "users", {
//     name: {
//       type: Sequelize.STRING
//     },
//     email: {
//       type: Sequelize.STRING
//     },
//     password: {
//       type: Sequelize.STRING
//     }
//   });

//   return users;
// };