const { Router } = require('express');

const OrdersRouter = require('./ordersRouter');
const ProductsRouter = require('./productsRouter');
const UsersRouter = require('./usersRouter');
const AuthRouter = require('./authRouter');

const router = Router();

router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);
router.use('/auth', AuthRouter);

module.exports = router;
