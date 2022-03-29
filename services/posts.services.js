const Post = require('../models/posts.models');

exports.getPosts = async function () {

    return await Post.find().populate('categories').exec();
}

exports.getPostById = async function (id) {

    return await Post.findById(id).populate('categories').exec();
}

exports.createPost = async function (postObject) {

    return await Post.create(postObject);
}

exports.updatePost = async function (id, postObject) {

    return await Post.findByIdAndUpdate(id, postObject, {new: true, runValidators: true}).populate('categories').exec();
}

exports.deletePost = async function (id) {

    return await Post.findByIdAndDelete(id);
}