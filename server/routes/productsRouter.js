const { Router } = require('express');
const {getProducts, addProduct, getProductById, updateProduct, deleteProduct} = require('../controller/products');

const router = Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:productId', updateProduct)
router.get('/:productId', getProductById)
router.delete('/:productId', deleteProduct)

module.exports = router;