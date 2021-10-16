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
      const createdOrder = await orders.create(req.body);
      const allProducts = req.body.products;
      const productsList = JSON.parse(allProducts);

      productsList.forEach(async (item) => {
        const dataItem = {
          orderId: createdOrder.id,
          productId: item.id,
          qtd: item.qtd
        };
        console.log(dataItem);
        await orderProduct.create(dataItem);
      });

      const order = await orders.findByPk(createdOrder.id, {
        include: { model: products, as: 'products', attributes: ['id', 'name', 'flavor', 'complement'] }

      });

      return res.json(order);

    // orderProducts = orderProducts.map(product => {
    //   return {
    //     'orderId': createdOrder.id,
    //     'productId': product.id,
    //     'qtd': product.qtd
    //   }
    // })
    // await orderProduct.createOrderProducts.bulkCreate(orderProducts);
    // res.status(201).json({
    //   message: "pedido criado com sucesso"
    // });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  }

  // try{
  //   products.map(async (item) => {
  //     const foundProduct = await products.findByPk(item.id);

  //     if (!foundProduct) {
  //       throw new Error(`Product with id ${item.id} was not found.`);
  //     }

  //     const { qtd } = item;
  //     const { id, name, flavor, complement} = foundProduct;
  //     const orderItem = { id, name, flavor, complement, qtd };

  //     return orderItem;
  //   })

  //   // productsList = await Promise.all(productsList);

  //   let newOrder = await orders.create({ user_id, client_name, table });
  //   // newOrder = newOrder.toJSON();
  //   // const { id, status, createdAt, updatedAt, processedAt } = newOrder;

  //   const orderItems = products.map((item) => ({
  //     order_id: newOrder.id,
  //     product_id: item.id,
  //     qtd: item.qtd,
  //   }));

  //   await orderProduct.bulkCreate(orderItems);

  //   // const completeNewOrder = {
  //   //   id,
  //   //   user_id,
  //   //   client_name,
  //   //   table,
  //   //   status,
  //   //   createdAt,
  //   //   updatedAt,
  //   //   processedAt,
  //   //   products: productsList,
  //   // };

  //   const order = await orders.findByPk(newOrder.id, {
  //     include: { association: 'products' }
  //   });

  //   return res.status(201).json(order);

  // } catch (error) {
  //   return res.status(400).json({
  //     code: 400,
  //     error: error.message,
  //   });
  // }
  // }

  //   async getProductById(req, res) {
  //     try {
  //       const foundProduct = await products.findOne({
  //         where: { id: req.params.productId },
  //         attributes: { exclude: ['createdAt', 'updatedAt'] },
  //       });

  //       if (!foundProduct) {
  //         return res.status(400).json({
  //           code: 400,
  //           message: 'Product not found.',
  //         });
  //       }
  //       return res.status(200).json(foundProduct)

  //     } catch (error) {
  //       return res.status(400).json({
  //         code: 400,
  //         error: error.message,
  //       });
  //     }
  //   },

  //   async updateProduct(req, res) {

  //     const foundProduct = await products.findByPk(req.params.productId);

  //     if (!foundProduct) {
  //       return res.status(400).json({
  //         code: 400,
  //         message: 'Product not found.',
  //       });
  //     }

  //     try {
  //       const { name, price, flavor, complement, image, type, subtype } = req.body;
  //       await products.update(
  //         { name, price, flavor, complement, image, type, subtype},
  //         { where: { id: req.params.productId }},
  //       );

  //       const updatedProduct= await products.findOne({
  //         where: { id: req.params.productId },
  //         attributes: { exclude: ['createdAt', 'updatedAt'] },
  //       });

  //       return res.status(200).json(updatedProduct);

  //     } catch (error) {
  //       return res.status(400).json({
  //         code: 400,
  //         error: error.message,
  //       });
  //     }
  //   },

  //   async deleteProduct(req,res){
  //     const foundProduct = await products.findOne({
  //       where: {id:req.params.productId},
  //       attributes: { exclude: ['createdAt', 'updatedAt'] },
  //     });

  //     if (!foundProduct) {
  //       return res.status(400).json({
  //         code: 400,
  //         message: 'Product not found.',
  //       });
  //     }

  //     try{
  //       await products.destroy({
  //         where: {
  //           id: req.params.productId,
  //         }
  //       });
  //       return res.status(200).json(`Product with id ${foundProduct.id} and name ${foundProduct.name} was successfully deleted.`);

  //     } catch (error) {
  //       return res.status(400).json({
  //         code: 400,
  //         error: error.message,
  //       });
  //     }

//   }
};
