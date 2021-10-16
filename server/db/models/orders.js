const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      orders.belongsToMany(models.products, {
        through: 'orderProduct',
        as: 'products',
        foreignKey: 'orderId'
      });

      orders.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }

  orders.init({
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'The client name field is required' },
        notEmpty: { msg: 'The client name field is required' }
      }
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'The user id field is required' },
        notEmpty: { msg: 'The user id field is required' }
      }
    },

    table: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'The table field is required' },
        notEmpty: { msg: 'The table field is required' }
      }
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },

    processedAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now()
    }

  }, {
    sequelize,
    modelName: 'orders'
  });
  return orders;
};
