// aqui vai o código que acessa o banco de dados
const database= require("../db/models");
const { users } = database;

// const users = require("../db/models/users");


module.exports={
  getExample(req, res){
    console.log('você também pode utilizar o console para visualizar =)');
    res.send('Request getExample feita');
  },
  
  getOtherExample (req, res) {
    console.log('outro console =)');
    res.send('Request getOtherExample feita');
  },
  
  addUser(req,res){
    const { name, email, password, role, restaurant } = req.body;

    return users
    .create({
      name, 
      email, 
      password, 
      role, 
      restaurant
    })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
  },

  get(req, res, next){
    res.status(200).send({
      message:'Retorna todos os users'
    })
  },

  add(req,res,next){
    const { name, email, password, role, restaurant } = req.body;
    const user = {name, 
          email, 
          password, 
          role, 
          restaurant
    }
    res.status(201).send({
      message:"Insere um usuário",
      userCreated:user
    })
    }
  }

  const addUser= async(req, res) => {
      const user = await users.create(req.body)
      res.json({message:'Product Added!', ProductAdded: newProduct})
    
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