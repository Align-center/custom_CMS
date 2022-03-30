const express = require('express'),
    router = express.Router(),
    Comments = require('../controllers/comments.controllers'),
    auth = require('../middlewares/auth');

router.get('/', auth, Comments.getComments);
router.post('/', auth, Comments.createComment);
router.put('/:id', auth, Comments.updateComment);
router.delete('/:id', auth, Comments.deleteComment);

module.exports = router;