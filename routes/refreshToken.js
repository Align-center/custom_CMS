const jwt = require('jsonwebtoken'),
    config = require('../config/config.json');

module.exports = function (req, res, next) {

    let token = req.headers.authorization;

    if (!token) {

        res.status(401).send();
    }

    jwt.verify(token, config.refreshSecret, (err, user) => {

        if (err)
            throw res.status(401).send();

        delete user.iat;
        delete user.exp;

        let refreshedToken = jwt.sign(user, config.secret, {expiresIn: config.tokenExp}),
            refreshToken = jwt.sign(user, config.refreshSecret, {expiresIn: config.refreshTokenExp});

        res.status(200).send({
           token: refreshedToken,
           refreshToken: refreshToken 
        });
    });

}