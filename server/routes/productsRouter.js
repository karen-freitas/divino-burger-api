const { Router } = require('express');
const {
  getProducts, addProduct, getProductById, updateProduct, deleteProduct
} = require('../controller/products');

const { auth } = require('../controller/auth');

const router = Router();

router.get('/', auth, getProducts);
router.post('/', auth, addProduct);
router.put('/:productId', auth, updateProduct);
router.get('/:productId', auth, getProductById);
router.delete('/:productId', auth, deleteProduct);

module.exports = router;
