const { Router } = require('express');
const { login } = require('../controller/auth');

const router = Router();

router.post('/', login);

module.exports = router;
