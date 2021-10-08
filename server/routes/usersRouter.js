const { Router } = require('express');
const { all, create } = require('../controller/users');

const router = Router();

// aqui vai as requisições
router.get('/users', all);
router.post('/users', create);


module.exports = router;