const { Router } = require('express');
const { all, create } = require('../controller/users');

const router = Router();

// aqui vai as requisições
router.get('/', all);
router.post('/', create);


module.exports = router;