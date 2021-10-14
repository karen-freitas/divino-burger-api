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
        return res.status(200).json({
          name:product.name, 
          price:product.price, 
          flavor:product.flavor, 
          complement:product.complement, 
          image:product.image, 
          type:product.type, 
          subtype:product.subtype
          
        })

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

  // async getUserById(req, res) {
  //   try {
  //     const foundUser = await users.findOne({
  //       where: { id: req.params.userId },
  //       attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  //     });

  //     if (!foundUser) {
  //       return res.status(400).json({
  //         code: 400,
  //         message: 'User not found.',
  //       });
  //     }
  //     return res.status(200).json(foundUser)


  //   } catch (error) {
  //     return res.status(400).json({
  //       code: 400,
  //       error: error.message,
  //     });
  //   }
  // },

  // async updateUser(req, res) {

  //   const { name, password, role } = req.body;
  //   const foundUser = await users.findByPk(req.params.userId);

  //   if (!foundUser) {
  //     return res.status(400).json({
  //       code: 400,
  //       message: 'User not found.',
  //     });
  //   }

  //   try {
  //     await users.update(
  //       { name, password, role },
  //       { where: { id: req.params.userId } },
  //     );

  //     const updatedUser = await users.findOne({
  //       where: { id: req.params.userId },
  //       attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  //     });

  //     return res.status(200).json(updatedUser);

  //   } catch (error) {
  //     return res.status(400).json({
  //       code: 400,
  //       error: error.message,
  //     });
  //   }
  // },

  // async deleteUser(req,res){
  //   const foundUser = await users.findOne({
  //     where: {id:req.params.userId},
  //     attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  //   });

  //   if (!foundUser) {
  //     return res.status(400).json({
  //       code: 400,
  //       message: 'User not found.',
  //     });
  //   }

  //   try{
  //     await users.destroy({
  //       where: {
  //         id: req.params.userId,
  //       }
  //     });
  //     return res.status(200).json(`User with id ${foundUser.id} and e-mail ${foundUser.email} was successfully deleted.`);

  //   } catch (error) {
  //     return res.status(400).json({
  //       code: 400,
  //       error: error.message,
  //     });
  //   }

  // }
}