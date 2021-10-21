/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable max-len */
const database = require('../db/models');

const { orders, orderProduct, products } = database;

module.exports = {
  async getOrders(req, res) {
    try {
      const allOrders = await orders.findAll({
        // attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
          model: products, as: 'products', attributes: ['id', 'name', 'flavor', 'complement'], through: { attributes: ['qtd'], as: 'details' }
        }],
        order: [['id', 'ASC']]
      });
      return res.status(200).json(allOrders);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async addOrder(req, res) {
    try {
      const allProducts = req.body.products;
      const productsList = JSON.parse(allProducts);
      if (productsList.length === 0) {
        throw new Error('There are no products in the order ');
      }

      let itemsArray = productsList.map(async (item) => {
        if (item.id === undefined) {
          throw new Error('Product id is required.');
        }
        const foundProduct = await products.findByPk(item.id);

        if (!foundProduct) {
          throw new Error(`Product with id ${item.id} was not found.`);
        }

        const {
          id, name, flavor, complement
        } = foundProduct;
        const { qtd } = item;

        if (qtd === undefined) {
          throw new Error('Product quantity is required.');
        }

        const itemDetails = {
          id, name, flavor, complement, qtd
        };

        return itemDetails;
      });

      itemsArray = await Promise.all(itemsArray);

      const createdOrder = await orders.create(req.body);

      productsList.forEach(async (item) => {
        const dataItem = {
          orderId: createdOrder.id,
          productId: item.id,
          qtd: item.qtd
        };
        await orderProduct.create(dataItem);
      });

      const order = await orders.findOne({
        where: { id: createdOrder.id }
      });

      const {
        id, user_id, client_name, table, status, createdAt, updatedAt, processedAt
      } = order;
      const orderData = {
        id,
        user_id,
        client_name,
        table,
        status,
        createdAt,
        updatedAt,
        processedAt,
        products: itemsArray

      };

      return res.json(orderData);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async getOrderById(req, res) {
    try {
      const foundOrder = await orders.findByPk(req.params.orderId,
        {
          include: [{
            model: products, as: 'products', attributes: ['id', 'name', 'flavor', 'complement'], through: { attributes: ['qtd'], as: 'details' }
          }]
        });

      if (!foundOrder) {
        return res.status(400).json({
          code: 400,
          message: 'Order not found.'
        });
      }
      return res.status(200).json(foundOrder);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async updateOrder(req, res) {
    const foundOrder = await orders.findByPk(req.params.orderId);

    if (!foundOrder) {
      return res.status(400).json({
        code: 400,
        message: 'Order not found.'
      });
    }

    try {
      const { status } = req.body;
      await orders.update(
        { status },
        { where: { id: req.params.orderId } }
      );

      const updatedOrder = await orders.findByPk(req.params.orderId,
        {
          include: [{
            model: products, as: 'products', attributes: ['id', 'name', 'flavor', 'complement'], through: { attributes: ['qtd'], as: 'details' }
          }]
        });

      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async deleteOrder(req, res) {
    const foundOrder = await orders.findByPk(req.params.orderId);

    if (!foundOrder) {
      return res.status(400).json({
        code: 400,
        message: 'Order not found.'
      });
    }

    try {
      await orderProduct.destroy({
        where: {
          orderId: req.params.orderId
        }
      });

      await orders.destroy({
        where: {
          id: req.params.orderId
        }
      });

      return res.status(200).json(`Order with id ${foundOrder.id} was successfully deleted.`);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  }
};
