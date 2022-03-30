const Comments = require('../models/comments.models');

exports.getComments = async function () {

    return await Comments.find().populate({path: 'user', populate: {path: 'role'}}).exec();
}

exports.createComment = async function (commentObject) {

    return await Comments.create(commentObject);
}

exports.updateComment = async function (id, commentObject) {

    return await Comments.findByIdAndUpdate(id, commentObject, {new: true, runValidators: true});
}

exports.deleteComment = async function (id) {

    return await Comments.findByIdAndDelete(id);
}