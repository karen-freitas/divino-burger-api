const database = require("../db/models");
const { products } = database;

module.exports = {

  async getProducts(req, res) {
    try {
      const allProducts = await products.findAll({
        attributes: {exclude:['createdAt','updatedAt']},
        order: [['id', 'ASC']]
      })
      return res.status(200).json(allProducts);
    }
    catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }

  },

  async addProduct(req, res) {
    const { name, price, image, type, subtype } = req.body;
    let flavor
    let complement

    if(req.body.flavor === undefined){
      flavor = null
    } else{
      flavor = req.body.flavor
    }

    if(req.body.complement === undefined){
      complement = null
    } else{
      complement = req.body.complement
    }

    try {
      const [product, created] = await products.findOrCreate({
        where: { name: name, flavor:flavor, complement:complement },
        defaults: { price, image, type, subtype  }
      });

      if (created) {
        const foundProduct = await products.findOne({
          where: { id: product.id},
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        });

        return res.status(200).json(foundProduct)

      } else {
        return res.status(400).json({
          code: 400,
          error: "Product has already been registered.",
        });
      }

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async getProductById(req, res) {
    try {
      const foundProduct = await products.findOne({
        where: { id: req.params.productId },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });

      if (!foundProduct) {
        return res.status(400).json({
          code: 400,
          message: 'Product not found.',
        });
      }
      return res.status(200).json(foundProduct)


    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async updateProduct(req, res) {

    const foundProduct = await products.findByPk(req.params.productId);
    
    if (!foundProduct) {
      return res.status(400).json({
        code: 400,
        message: 'Product not found.',
      });
    }
    
    try {
      const { name, price, flavor, complement, image, type, subtype } = req.body;
      await products.update(
        { name, price, flavor, complement, image, type, subtype},
        { where: { id: req.params.productId }},
      );

      const updatedProduct= await products.findOne({
        where: { id: req.params.productId },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });

      return res.status(200).json(updatedProduct);

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async deleteProduct(req,res){
    const foundProduct = await products.findOne({
      where: {id:req.params.productId},
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!foundProduct) {
      return res.status(400).json({
        code: 400,
        message: 'Product not found.',
      });
    }

    try{
      await products.destroy({
        where: {
          id: req.params.productId,
        }
      });
      return res.status(200).json(`Product with id ${foundProduct.id} and name ${foundProduct.name} was successfully deleted.`);

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }

  }
}