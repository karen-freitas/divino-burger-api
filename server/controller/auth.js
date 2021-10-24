const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');

const database = require('../db/models');

const { users } = database;

const permit = new Bearer();

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const foundUser = await users.findOne({
        where: {
          email
        }
      });

      if (!foundUser) return res.status(400).json({ error: 'Email not found' });

      if (!bcrypt.compareSync(password, foundUser.password)) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      const { id, name, role, restaurant } = foundUser;

      const jwtPayload = { id };
      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

      return res.status(200).json({
        id, name, email, role, restaurant, token
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message
      });
    }
  },

  auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'Authentication required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'Failed to authenticate token!' });
      }
      req.id = decoded.id;
      next();
    });
  }
};
