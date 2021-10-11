const { Router } = require('express');
const { getExample, getOtherExample } = require('../controller/orders');

const router = Router();

// aqui vai as requisições
router.get('/', getExample);
router.post('/', getOtherExample);

module.exports = router;