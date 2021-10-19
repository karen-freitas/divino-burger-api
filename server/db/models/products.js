const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.belongsToMany(models.orders, {
        through: 'orderProduct',
        as: 'products',
        foreignKey: 'productId'
      });
    }
  }
  products.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'The name field is required' },
        notEmpty: { msg: 'The name field is required' }
      }
    },

    flavor: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },

    complement: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: { msg: 'The price field is required' },
        notEmpty: { msg: 'The price field is required' }
      }
    },

    image: DataTypes.STRING,

    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'The type field is required' },
        notEmpty: { msg: 'The type field is required' }
      }
    },

    subtype: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'The subtype field is required' },
        notEmpty: { msg: 'The subtype field is required' }
      }
    }

  }, {
    sequelize,
    modelName: 'products'
  });
  return products;
};
