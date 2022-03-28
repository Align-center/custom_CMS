const roles = require('./roles.routes.js'),
    users = require('./users.routes'),
    refreshToken = require('./refreshToken');

module.exports.router = function (app) {
    
    app.use('/roles', roles);
    app.use('/users', users);
    app.get('/refreshToken', refreshToken);
}