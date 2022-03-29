const express = require('express'),
    router = express.Router(),
    Post = require('../controllers/posts.controllers'),
    auth = require('../middlewares/auth');

router.get('/', auth, Post.getPosts);
router.get('/:id', auth, Post.getPostById);
router.post('/', auth, Post.createPost);
router.put('/:id', auth, Post.updatePost);
router.delete('/:id', auth, Post.deletePost);

module.exports = router;