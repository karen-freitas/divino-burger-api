const { Router } = require('express');
const {getProducts, addProduct} = require('../controller/products');

const router = Router();

// aqui vai as requisições
router.get('/', getProducts);
router.post('/', addProduct);
// router.put('/:userId', updateUser)
// router.get('/:userId', getUserById)
// router.delete('/:userId', deleteUser)


module.exports = router;