const express = require('express'),
    router = express.Router(),
    Role = require('../controllers/roles.controllers.js'),
    auth = require('../middlewares/auth.js')

router.get('/', auth, Role.getRoles);
router.post('/', auth, Role.createRole);
router.put('/:id', auth, Role.updateRole);
router.delete('/:id', auth, Role.deleteRole);

module.exports = router;