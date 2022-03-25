const express = require('express'),
    router = express.Router(),
    Role = require('../controllers/roles.controllers.js');

router.get('/', Role.getRoles);

module.exports = router;