const User = require('../services/users.services.js'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    config = require('../config/config.json');

exports.getUsers = async function (req, res) {

    let limit = req.query.limit || 0,
        page = req.query.page || 0;

    let users = await User.getUsers(page, limit);

    res.status(200).send(users);
}

exports.getUserById = async function (req, res) {

    let user = await User.getUserById(req.params.id);

    res.status(200).send(user);
}

exports.createUser = async function (req, res) {

    let user = await User.createUser(req.body);

    res.status(200).send(user);
}

exports.updateUser = async function (req, res) {

    let user = await User.updateUser(req.params.id, req.body);

    // console.log(user);

    res.status(200).send(user);
}

exports.adminUpdateUser = async function (req, res) {

    let user = await User.adminUpdateUser(req.params.id, req.body);

    res.status(200).send(user);
}

exports.connectUser = async function (req, res) {

    let user = User.getUserByEmail(req.body.email).then(user => {

        if (!user) {
            return res.status(400).json({msg : "Le mot de passe ou l'email est invalide"});
        }

        bcrypt.compare(req.body.password, user.password, (err, data) => {

            if (err)
                throw err;

            if (data) {
    
                let token = jwt.sign({id: user._id, email: user.email, role: user.role}, config.secret, {expiresIn: config.tokenExp}),
                    refreshToken = jwt.sign({id: user._id, email: user.email, role: user.role}, config.refreshSecret, {expiresIn: config.refreshTokenExp});

                res.status(200).send({
                    user, 
                    token: token, 
                    refreshToken : refreshToken
                });
            } else {
                return res.json({msg: "Le mot de passe ou l'email est invalide"});
            }
        });
    });
}

exports.deleteUser = async function (req, res) {

    let user = await User.deleteUser(req.params.id);

    res.status(200).send({
        msg: 'Utilisateur supprimé'
    });
}