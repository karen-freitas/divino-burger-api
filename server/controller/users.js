// aqui vai o código que acessa o banco de dados
const database = require("../db/models");
const { users } = database;

module.exports = {

  async getUsers(req, res) {
    try {
      const allUsers = await users.findAll({
        attributes: ["id", "name", "email", "role", "restaurant"],
        order: [['id', 'ASC']]
      })
      return res.status(200).json(allUsers);
    }
    catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }

  },

  async addUser(req, res) {
    const { name, email, password, role, restaurant } = req.body;

    try {
      const [user, created] = await users.findOrCreate({
        where: { email: email },
        defaults: { name, password, role, restaurant }
      });
      if (created) {
        return res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          restaurant: user.restaurant

        })

      } else {
        return res.status(400).json({
          code: 400,
          error: "E-mail has already been registered.",
        });
      }

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async getUserById(req, res) {
    try {
      const foundUser = await users.findOne({
        where: { id: req.params.userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      });

      if (!foundUser) {
        return res.status(400).json({
          code: 400,
          message: 'User not found.',
        });
      }
      return res.status(200).json(foundUser)


    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async updateUser(req, res) {

    const { name, password, role } = req.body;
    const foundUser = await users.findByPk(req.params.userId);

    if (!foundUser) {
      return res.status(400).json({
        code: 400,
        message: 'User not found.',
      });
    }

    try {
      await users.update(
        { name, password, role },
        { where: { id: req.params.userId } },
      );

      const updatedUser = await users.findOne({
        where: { id: req.params.userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      });

      return res.status(200).json(updatedUser);

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }
  },

  async deleteUser(req,res){
    const foundUser = await users.findOne({
      where: {id:req.params.userId},
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });

    if (!foundUser) {
      return res.status(400).json({
        code: 400,
        message: 'User not found.',
      });
    }

    try{
      await users.destroy({
        where: {
          id: req.params.userId,
        }
      });
      return res.status(200).json(`User with id ${foundUser.id} and e-mail ${foundUser.email} was successfully deleted.`);

    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
    }

  }
}









// const Users = {
//   all(req, res) {
//     return res.json(['Karen', 'João', 'Maria', 'José']);
//   },
// };


// class UsersController {
// static async create(req, res) {
//   const { email, name, password, role, restaurant } = req.body;




// module.exports = { getExample, getOtherExample, Users, UsersController };

// const users = require("../db/models/users");

// module.exports = {
//   all(req, res, next) {
//     users.findAll()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch(next);
//   },

//   create(req, res, next) {
//     const { name, email, password, role, restaurant } = req.body;

//     users.create({
//       name, 
//       email, 
//       password, 
//       role, 
//       restaurant
//     })
//       .then((result) => {
//         res.status(201).json(result); //return with ID -> 201 (CREATED)
//       })
//       .catch(next);
//   },
// };