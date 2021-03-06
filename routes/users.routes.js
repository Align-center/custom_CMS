const express = require('express'),
    router = express.Router(),
    User = require('../controllers/users.controllers.js'),
    auth = require('../middlewares/auth');

router.post('/login', User.connectUser);
router.post('/register', User.createUser);

router.get('/', auth,  User.getUsers);
router.get('/:id', auth, User.getUserById);
router.post('/', auth, User.createUser);
router.put('/:id', auth, User.updateUser);
router.put('/admin/:id', auth, User.adminUpdateUser);
router.delete('/:id', auth, User.deleteUser);

module.exports = router;