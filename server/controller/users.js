// aqui vai o código que acessa o banco de dados
const bcrypt = require('bcrypt');
const database = require('../db/models');

const { users } = database;

module.exports = {

  async getUsers(req, res) {
    try {
      const allUsers = await users.findAll({
        attributes: ['id', 'name', 'email', 'role', 'restaurant'],
        order: [['id', 'ASC']]
      });
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(401).json({
        code: 401,
        error: error.message
      });
    }
  },

  async addUser(req, res) {
    const {
      name, email, role, restaurant
    } = req.body;

    const password = bcrypt.hashSync(req.body.password, 10);

    try {
      const [user, created] = await users.findOrCreate({
        where: { email },
        defaults: {
          name, password, role, restaurant
        }
      });
      if (created) {
        return res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          restaurant: user.restaurant

        });
      }
      return res.status(400).json({
        code: 400,
        error: 'E-mail has already been registered.'
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async getUserById(req, res) {
    try {
      const foundUser = await users.findOne({
        where: { id: req.params.userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
      });

      if (!foundUser) {
        return res.status(400).json({
          code: 400,
          message: 'User not found.'
        });
      }
      return res.status(200).json(foundUser);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async updateUser(req, res) {
    const { name, role } = req.body;
    const foundUser = await users.findByPk(req.params.userId);

    if (!foundUser) {
      return res.status(400).json({
        code: 400,
        message: 'User not found.'
      });
    }

    try {
      await users.update(
        { name, role },
        { where: { id: req.params.userId } }
      );

      const updatedUser = await users.findOne({
        where: { id: req.params.userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  async deleteUser(req, res) {
    const foundUser = await users.findOne({
      where: { id: req.params.userId },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
    });

    if (!foundUser) {
      return res.status(400).json({
        code: 400,
        message: 'User not found.'
      });
    }

    try {
      await users.destroy({
        where: {
          id: req.params.userId
        }
      });
      return res.status(200).json(`User with id ${foundUser.id} and e-mail ${foundUser.email} was successfully deleted.`);
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  }
};
