const { Router } = require('express');
const {
  addUser, getUsers, updateUser, getUserById, deleteUser
} = require('../controller/users');

const { auth } = require('../controller/auth');

const router = Router();

router.get('/', auth, getUsers);
router.post('/', addUser);
router.put('/:userId', auth, updateUser);
router.get('/:userId', auth, getUserById);
router.delete('/:userId', auth, deleteUser);

module.exports = router;
