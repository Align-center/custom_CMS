const Post = require('../services/posts.services');

exports.getPosts = async function (req, res) {

    let posts = await Post.getPosts();

    res.status(200).send(posts);
}

exports.getPostById = async function (req, res) {

    let post = await Post.getPostById(req.params.id);

    res.status(200).send(post);
}

exports.createPost = async function (req, res) {

    let post = await Post.createPost(req.body);

    res.status(200).send(post);
}

exports.updatePost = async function (req, res) {

    let post = await Post.updatePost(req.params.id, req.body);

    res.status(200).send(post);
}

exports.deletePost = async function (req, res) {

    await Post.deletePost(req.params.id);

    res.status(200).send({
        msg: 'Post supprimé'
    })
}