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
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {msg: "The name field is required"},
        notEmpty: {msg: "The name field is required"},
        len:{
          args:[3, 30],
          msg:"The name must be at least 3 characters."
        } 
      }
    },
      
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
          notNull: {msg: "The email field is required"},
          notEmpty: {msg: "The email field is required"},
          isEmail:{msg: "Invalid email address"}
        }
    },

    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {msg: "The password field is required"},
        notEmpty: {msg: "The password field is required"},
        len:{
          args:[6, 20],
          msg:"The password must be at least 6 characters."
        } 
      }
    },


    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {msg: "The role field is required"},
        notEmpty: {msg: "The role field is required"},
        isIn: {
          args:[['hall', 'kitchen']],
          msg: "Role must be kitchen or hall"
        }
      }
  },

    restaurant: {
      type:DataTypes.STRING,
      defaultValue: 'Divino Burger',
    }
    
  }, {
      sequelize,
    modelName: 'users',
  });
  return users;
};

