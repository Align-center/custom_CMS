const express = require('express'),
    router = express.Router(),
    Role = require('../controllers/roles.controllers.js');

router.get('/', Role.getRoles);
router.post('/', Role.createRole);
router.put('/:id', Role.updateRole);

module.exports = router;