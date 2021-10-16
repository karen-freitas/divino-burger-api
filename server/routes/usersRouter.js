const { Router } = require('express');
const {
  addUser, getUsers, updateUser, getUserById, deleteUser
} = require('../controller/users');

const router = Router();

router.get('/', getUsers);
router.post('/', addUser);
router.put('/:userId', updateUser);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);

module.exports = router;
