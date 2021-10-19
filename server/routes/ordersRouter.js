const { Router } = require('express');
const {
  getOrders, addOrder, updateOrder, getOrderById, deleteOrder
} = require('../controller/orders');

const router = Router();

router.get('/', getOrders);
router.post('/', addOrder);
router.put('/:orderId', updateOrder);
router.get('/:orderId', getOrderById);
router.delete('/:orderId', deleteOrder);

module.exports = router;
