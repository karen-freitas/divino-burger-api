// aqui vai o código que acessa o banco de dados
const database= require("../db/models");
const { users } = database;

// const users = require("../db/models/users");


module.exports={

  async getUsers (req, res) {
    try{
      const allUsers = await users.findAll({
        attributes:["name", "email", "role"]
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
  
  async addUser(req,res){
    const { name, email, password, role, restaurant } = req.body;

    try{

    const [user, created] = await users.findOrCreate({
      where: { email:email },
      defaults: {name, password, role, restaurant}
    });
    if(created){
      return res.status(200).json(user);

    } else {
      return res.status(400).json({
        code: 400,
        error: "E-mail já cadastrado.",
      });
    }

  }catch (error) {
      return res.status(400).json({
        code: 400,
        error: error.message,
      });
  }
},

  async updateUser(req,res){

    const { name, password, role } = req.body;
    const findUser = await users.findByPk(req.params.userId);

    if (!findUser) {
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