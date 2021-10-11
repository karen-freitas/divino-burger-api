const { Router } = require('express');
const { addUser, getUsers, updateUser } = require('../controller/users');

const router = Router();

// aqui vai as requisições
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:userId', updateUser)


module.exports = router;