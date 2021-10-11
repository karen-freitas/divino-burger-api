const { Router } = require('express');
const { getExample, add, get, addUser } = require('../controller/users');

const router = Router();

// aqui vai as requisições
router.get('/', get);
router.post('/', addUser);


module.exports = router;