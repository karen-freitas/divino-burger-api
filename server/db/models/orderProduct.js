const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderProduct extends Model {
    static associate(models) {
      orderProduct.belongsTo(models.products);
      orderProduct.belongsTo(models.orders);
    }
  }

  orderProduct.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderProduct'
  });
  return orderProduct;
};
