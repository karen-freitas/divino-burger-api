const { Router } = require('express');
const {
  getOrders, addOrder, updateOrder, getOrderById, deleteOrder
} = require('../controller/orders');

const { auth } = require('../controller/auth');

const router = Router();

router.get('/', auth, getOrders);
router.post('/', auth, addOrder);
router.put('/:orderId', auth, updateOrder);
router.get('/:orderId', auth, getOrderById);
router.delete('/:orderId', auth, deleteOrder);

module.exports = router;
