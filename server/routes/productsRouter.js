const { Router } = require('express');
const { getExample, getOtherExample } = require('../controller/products');

const router = Router();

// aqui vai as requisições
router.get('/', getExample);
router.get('/other', getOtherExample);

module.exports = router;