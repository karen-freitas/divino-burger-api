const { Router } = require('express');

const OrdersRouter = require('./ordersRouter');
const ProductsRouter = require('./productsRouter');
const UsersRouter = require('./usersRouter');
const { Cars } = require('../controller/users');

const router = Router();

router.use('/products', ProductsRouter);
router.use('/users', UsersRouter);
router.use('/orders', OrdersRouter);

router.use('/cars', Cars.all);

module.exports = router;

