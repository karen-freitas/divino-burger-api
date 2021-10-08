// aqui vai o código que acessa o banco de dados

// const getExample = (req, res) => {
//   console.log('você também pode utilizar o console para visualizar =)');
//   res.send('Request getExample feita');
// };

// const getOtherExample = (req, res) => {
//   console.log('outro console =)');
//   res.send('Request getOtherExample feita');
// };

// const Cars = {
//   all(req, res) {
//     return res.json(['Fusca', 'Corcel', 'Brasilia']);
//   },
// };

// module.exports = { getExample, getOtherExample, Cars };

const users = require("../database/models/users");

module.exports = {
  all(req, res, next) {
    users.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { name, email, password, role, restaurant } = req.body;

    users.create({
      name, 
      email, 
      password, 
      role, 
      restaurant
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};