const Comments = require('../services/comments.services');

exports.getComments = async function (req, res) {

    let comments = await Comments.getComments();

    res.status(200).send(comments);
}

exports.createComment = async function (req, res) {

    let comment = await Comments.createComment(req.body);

    res.status(200).send(comment);
}

exports.updateComment = async function (req, res) {

    let comment = await Comments.updateComment(req.params.id, req.body);

    res.status(200).send(comment);
}

exports.deleteComment = async function (req, res) {

    await Comments.deleteComment(req.params.id);

    res.status(200).send({
        msg: "Commentaire supprimé"
    });
}