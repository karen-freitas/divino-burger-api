const { Router } = require('express');

// const OrdersRouter = require('./ordersRouter');
// const ProductsRouter = require('./productsRouter');
const UsersRouter = require('./usersRouter');

const router = Router();

// router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);
// router.use('/orders', OrdersRouter);



module.exports = router;

