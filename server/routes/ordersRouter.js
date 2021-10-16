const { Router } = require('express');
const { getOrders, addOrder } = require('../controller/orders');

const router = Router();

router.get('/', getOrders);
router.post('/', addOrder);
// router.put('/:productId', updateOrder);
// router.get('/:productId', getOrderById);
// router.delete('/:productId', deleteOrder)

module.exports = router;
