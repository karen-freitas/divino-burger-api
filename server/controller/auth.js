const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');

const database = require('../db/models');

const { users } = database;

const permit = new Bearer();

module.exports = {
  login(req, res) {
    const { email, password } = req.body;

    users.findOne({
      where: {
        email
      }
    }).then((user) => {
      // username does not exists
      if (!user) return res.status(401).json({ error: 'Email not found' });

      // password check
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // generate & sign token
      const jwtPayload = { id: user.id }; // public payload!
      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET); // user: user

      return res.status(200).json({ token });
    });
  },

  auth(req, res, next) {
    // Try to find the bearer token in the request.
    const token = req.headers.authorization;

    // No token found, so ask for authentication.
    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'Authentication required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'failed to authenticate token!' });
      }

      // save username for next middleware
      req.id = decoded.id;
      next();
    });
  }
};
